#!/usr/bin/env tsx
/**
 * components/conan_doyle/fetch-creator-media.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Conan Doyle | Creator Media Kit Generator
 *
 * Fetches a YouTube creator's channel data and generates BOTH:
 *   • HTML snippet  — paste directly into Supabase `content_html` field
 *   • JSX snippet   — paste into page.tsx content-in-code articles
 *   • Raw JSON      — saved to public/youtube-data/[slug].json
 *
 * This is the entry point for AlfasaAutoSEO — run before writing any
 * creator-related article to populate the media embeds automatically.
 *
 * Usage:
 *   npx tsx components/conan_doyle/fetch-creator-media.ts \
 *     --slug=kai-cenat \
 *     --youtube=@KaiCenat \
 *     --instagram=kacenat \
 *     --max=6
 *
 * Args:
 *   --slug         Required. Creator slug (e.g. kai-cenat). Used as output filename.
 *   --youtube      YouTube @handle or channel ID (e.g. @KaiCenat or UCnmGIkw-KdI0W5siakd27VA)
 *   --instagram    Instagram username — no @ (e.g. kacenat). Optional.
 *   --max          Max videos to fetch. Default: 6.
 *   --api-key      YouTube API key. Falls back to YOUTUBE_API_KEY in .env.local.
 *   --format       Output format: 'html' | 'jsx' | 'both'. Default: 'both'.
 *   --no-save      Don't save JSON to disk. Just print output.
 *
 * Output files:
 *   public/youtube-data/[slug].json  — channel data for YouTubeThumbnailGrid
 *
 * Stdout:
 *   Prints ready-to-paste HTML and/or JSX code blocks for the article.
 *
 * Requirements:
 *   YOUTUBE_API_KEY in .env.local (or pass --api-key=YOUR_KEY)
 *   Free quota: 10,000 units/day. This script uses ~3 units per run.
 */

import fs from 'fs';
import path from 'path';

// ─── Load .env.local ──────────────────────────────────────────────────────────

function loadEnvLocal() {
  const envPath = path.join(process.cwd(), '.env.local');
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, 'utf-8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^['"]|['"]$/g, '');
    if (!process.env[key]) process.env[key] = val;
  }
}

loadEnvLocal();

// ─── Arg parsing ─────────────────────────────────────────────────────────────

function getArg(name: string): string | undefined {
  const prefix = `--${name}=`;
  const found = process.argv.find(a => a.startsWith(prefix));
  return found ? found.slice(prefix.length) : undefined;
}

function hasFlag(name: string): boolean {
  return process.argv.includes(`--${name}`);
}

const SLUG = getArg('slug');
const YOUTUBE_HANDLE = getArg('youtube');
const INSTAGRAM_USER = getArg('instagram');
const MAX_VIDEOS = parseInt(getArg('max') ?? '6', 10);
const API_KEY = getArg('api-key') ?? process.env.YOUTUBE_API_KEY ?? '';
const FORMAT = (getArg('format') ?? 'both') as 'html' | 'jsx' | 'both';
const NO_SAVE = hasFlag('no-save');

if (!SLUG) {
  console.error('Error: --slug is required');
  console.error('  Example: npx tsx components/conan_doyle/fetch-creator-media.ts --slug=kai-cenat --youtube=@KaiCenat');
  process.exit(1);
}

if (!YOUTUBE_HANDLE && !INSTAGRAM_USER) {
  console.error('Error: provide at least --youtube or --instagram (or both)');
  process.exit(1);
}

// ─── YouTube API helpers ──────────────────────────────────────────────────────

interface YTChannelData {
  channelId: string;
  channelTitle: string;
  avatarUrl: string;
  bannerUrl: string;
  subscriberCount: string;
  videoCount: string;
  videos: Array<{
    id: string;
    title: string;
    publishedAt: string;
    thumbnailUrl: string;
  }>;
  fetchedAt: string;
}

async function fetchYouTubeChannel(handle: string): Promise<YTChannelData | null> {
  if (!API_KEY) {
    console.warn('⚠  No YouTube API key. Skipping YouTube fetch.');
    console.warn('   Set YOUTUBE_API_KEY in .env.local or pass --api-key=YOUR_KEY');
    return null;
  }

  const isChannelId = handle.startsWith('UC') && !handle.startsWith('@');
  const channelParam = isChannelId
    ? `id=${encodeURIComponent(handle)}`
    : `forHandle=${encodeURIComponent(handle.startsWith('@') ? handle : `@${handle}`)}`;

  const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,brandingSettings&${channelParam}&key=${API_KEY}`;

  const channelRes = await fetch(channelUrl);
  if (!channelRes.ok) {
    const err = await channelRes.text();
    throw new Error(`YouTube channels API error: ${channelRes.status} ${err}`);
  }

  const channelJson = await channelRes.json() as { items?: any[] };
  const channel = channelJson.items?.[0];
  if (!channel) {
    console.error(`No YouTube channel found for handle: ${handle}`);
    return null;
  }

  const channelId: string = channel.id;
  const channelTitle: string = channel.snippet.title;
  const avatarUrl: string = channel.snippet.thumbnails?.high?.url
    ?? channel.snippet.thumbnails?.medium?.url
    ?? channel.snippet.thumbnails?.default?.url
    ?? '';
  const bannerUrl: string = channel.brandingSettings?.image?.bannerExternalUrl ?? '';
  const subscriberCount: string = channel.statistics?.subscriberCount ?? '0';
  const videoCount: string = channel.statistics?.videoCount ?? '0';

  // Fetch recent uploads via the uploads playlist
  const uploadsPlaylistId: string = channel.contentDetails?.relatedPlaylists?.uploads ?? '';
  let videos: YTChannelData['videos'] = [];

  if (uploadsPlaylistId) {
    const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${MAX_VIDEOS}&key=${API_KEY}`;
    const playlistRes = await fetch(playlistUrl);
    if (playlistRes.ok) {
      const playlistJson = await playlistRes.json() as { items?: any[] };
      videos = (playlistJson.items ?? []).map((item: any) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        publishedAt: item.snippet.publishedAt,
        thumbnailUrl: item.snippet.thumbnails?.high?.url
          ?? item.snippet.thumbnails?.medium?.url
          ?? item.snippet.thumbnails?.default?.url
          ?? '',
      }));
    }
  }

  return {
    channelId,
    channelTitle,
    avatarUrl,
    bannerUrl,
    subscriberCount,
    videoCount,
    videos,
    fetchedAt: new Date().toISOString(),
  };
}

// ─── HTML generators ──────────────────────────────────────────────────────────

function formatSubscriberCount(raw: string): string {
  const n = parseInt(raw, 10);
  if (isNaN(n)) return raw;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return String(n);
}

function generateHTMLOutput(ytData: YTChannelData | null, instagramUser: string | undefined): string {
  const parts: string[] = [];

  if (ytData && ytData.videos.length > 0) {
    const cols = ytData.videos.length <= 3 ? ytData.videos.length : 3;
    const gridStyle = cols === 3
      ? 'display:grid;grid-template-columns:repeat(3,1fr);gap:12px;'
      : cols === 2
        ? 'display:grid;grid-template-columns:repeat(2,1fr);gap:12px;'
        : 'display:block;';

    const videoCards = ytData.videos
      .slice(0, MAX_VIDEOS)
      .map((v) =>
        `    <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener noreferrer" style="display:block;text-decoration:none;">
      <div style="position:relative;background:#000;border-radius:8px;overflow:hidden;">
        <img src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg" alt="${v.title.replace(/"/g, '&quot;')}" loading="lazy" style="width:100%;display:block;aspect-ratio:16/9;object-fit:cover;"/>
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0.85;">
          <svg width="44" height="44" viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg"><path d="M66.5 7.7a8.5 8.5 0 0 0-6-6C56 0 34 0 34 0S12 0 7.5 1.7a8.5 8.5 0 0 0-6 6C0 12.2 0 24 0 24s0 11.8 1.5 16.3a8.5 8.5 0 0 0 6 6C12 48 34 48 34 48s22 0 26.5-1.7a8.5 8.5 0 0 0 6-6C68 35.8 68 24 68 24s0-11.8-1.5-16.3z" fill="red"/><path d="M45 24 27 14v20z" fill="#fff"/></svg>
        </div>
      </div>
      <p style="font-size:12px;color:#374151;margin:4px 0 0;line-height:1.3;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;">${v.title}</p>
    </a>`
      )
      .join('\n');

    const subLabel = formatSubscriberCount(ytData.subscriberCount);

    parts.push(`<!-- YouTube: ${ytData.channelTitle} (${subLabel} subscribers) -->
<div class="creator-youtube-grid my-8">
  <h3 class="text-xl font-bold mb-4 text-gray-900" style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">
    Recent Videos from
    <a href="https://www.youtube.com/channel/${ytData.channelId}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">${ytData.channelTitle}</a>
    <span style="font-size:0.75rem;font-weight:400;color:#6b7280;margin-left:8px;">${subLabel} subscribers</span>
  </h3>
  <div style="${gridStyle}">
${videoCards}
  </div>
</div>`);
  }

  if (instagramUser) {
    parts.push(`<!-- Instagram: @${instagramUser} — paste real post shortcodes below -->
<!-- Find shortcodes at https://www.instagram.com/${instagramUser}/ — copy the /p/XXXX part of any post URL -->
<div class="creator-instagram my-8">
  <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">
    @${instagramUser} on Instagram
  </h3>
  <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px;">
    <!-- Paste each post's official embed code here. Get it from Instagram → share → embed -->
    <!-- Example: -->
    <!--
    <blockquote class="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/p/SHORTCODE/?utm_source=ig_embed"
      data-instgrm-version="14"
      data-instgrm-captioned>
    </blockquote>
    -->
  </div>
  <script async src="https://www.instagram.com/embed.js"></script>
</div>`);
  }

  if (parts.length === 0) return '<!-- No media fetched -->';
  return parts.join('\n\n');
}

function generateJSXOutput(slug: string, ytData: YTChannelData | null, instagramUser: string | undefined): string {
  const parts: string[] = [];

  if (ytData && ytData.videos.length > 0) {
    const subLabel = formatSubscriberCount(ytData.subscriberCount);
    parts.push(`{/* YouTube: ${ytData.channelTitle} — ${subLabel} subscribers */}
{/* Data is in public/youtube-data/${slug}.json — re-run fetch-creator-media to refresh */}
<YouTubeThumbnailGrid
  channelSlug="${slug}"
  cols={3}
  maxVideos={${MAX_VIDEOS}}
  showTitle
  heading="Recent Videos"
/>`);
  }

  if (instagramUser) {
    parts.push(`{/* Instagram: @${instagramUser} — replace SHORTCODE1/2/3 with real post shortcodes */}
{/* Get shortcodes from https://www.instagram.com/${instagramUser}/ — the /p/XXXX part of each URL */}
<InstagramGallery
  heading="@${instagramUser} on Instagram"
  cols={3}
  posts={[
    { url: 'https://www.instagram.com/p/SHORTCODE1/' },
    { url: 'https://www.instagram.com/p/SHORTCODE2/' },
    { url: 'https://www.instagram.com/p/SHORTCODE3/' },
  ]}
/>`);

    parts.unshift(`import { YouTubeThumbnailGrid, InstagramGallery } from '@/components/conan_doyle';`);
  } else if (ytData) {
    parts.unshift(`import { YouTubeThumbnailGrid } from '@/components/conan_doyle';`);
  }

  return parts.join('\n\n');
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n🎬 Conan Doyle | Creator Media Kit`);
  console.log(`   Slug: ${SLUG}`);
  if (YOUTUBE_HANDLE) console.log(`   YouTube: ${YOUTUBE_HANDLE}`);
  if (INSTAGRAM_USER) console.log(`   Instagram: @${INSTAGRAM_USER}`);
  console.log('');

  let ytData: YTChannelData | null = null;

  // Step 1: Fetch YouTube data
  if (YOUTUBE_HANDLE) {
    try {
      console.log(`⏳ Fetching YouTube channel: ${YOUTUBE_HANDLE}...`);
      ytData = await fetchYouTubeChannel(YOUTUBE_HANDLE);
      if (ytData) {
        const subLabel = formatSubscriberCount(ytData.subscriberCount);
        console.log(`✅ Channel: ${ytData.channelTitle} | ${subLabel} subscribers | ${ytData.videos.length} recent videos`);
      }
    } catch (err) {
      console.error(`❌ YouTube fetch failed: ${(err as Error).message}`);
    }
  }

  // Step 2: Save JSON to public/youtube-data/
  if (ytData && !NO_SAVE) {
    const outDir = path.join(process.cwd(), 'public', 'youtube-data');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, `${SLUG}.json`);
    fs.writeFileSync(outPath, JSON.stringify(ytData, null, 2));
    console.log(`💾 Saved: public/youtube-data/${SLUG}.json`);
  }

  // Step 3: Generate output
  console.log('\n' + '─'.repeat(72));

  if (FORMAT === 'html' || FORMAT === 'both') {
    const html = generateHTMLOutput(ytData, INSTAGRAM_USER);
    console.log('\n📄 HTML (paste into Supabase content_html field):');
    console.log('─'.repeat(72));
    console.log(html);
  }

  if (FORMAT === 'jsx' || FORMAT === 'both') {
    const jsx = generateJSXOutput(SLUG!, ytData, INSTAGRAM_USER);
    console.log('\n⚛️  JSX (paste into page.tsx content-in-code article):');
    console.log('─'.repeat(72));
    console.log(jsx);
  }

  console.log('\n' + '─'.repeat(72));

  if (INSTAGRAM_USER) {
    console.log(`\n📸 Instagram shortcodes — visit https://www.instagram.com/${INSTAGRAM_USER}/`);
    console.log('   Click any post → share → copy link → the /p/XXXXXXXX part is the shortcode');
  }

  if (!API_KEY && YOUTUBE_HANDLE) {
    console.log('\n⚠️  No YouTube API key found.');
    console.log('   1. Go to console.cloud.google.com → Create Project → Enable "YouTube Data API v3"');
    console.log('   2. Create an API Key under "Credentials"');
    console.log('   3. Add to .env.local:  YOUTUBE_API_KEY=your_key_here');
  }

  console.log('');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
