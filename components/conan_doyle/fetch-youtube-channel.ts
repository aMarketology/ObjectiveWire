/**
 * fetch-youtube-channel.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Conan Doyle | YouTube Channel Data Fetcher
 *
 * Fetches channel avatar + recent video IDs/thumbnails via YouTube Data API v3.
 * Saves output to public/youtube-data/[slug].json for use by YouTubeThumbnailGrid.
 *
 * Usage:
 *   npx tsx components/conan_doyle/fetch-youtube-channel.ts --handle=@KSI --slug=ksi
 *   npx tsx components/conan_doyle/fetch-youtube-channel.ts --id=UCVtFOytbRpEvzLjvqGG5gxQ --slug=ksi
 *   npx tsx components/conan_doyle/fetch-youtube-channel.ts --handle=@IShowSpeed --slug=ishowspeed
 *
 * Requires YOUTUBE_API_KEY in .env.local (or pass --api-key=YOUR_KEY)
 * Get a free key: console.cloud.google.com → APIs → YouTube Data API v3
 *
 * Output format (public/youtube-data/[slug].json):
 * {
 *   channelId: string,
 *   channelTitle: string,
 *   avatarUrl: string,        ← channel profile picture (high-res)
 *   bannerUrl: string | null, ← channel banner image
 *   subscriberCount: string,
 *   videoCount: string,
 *   videos: [{
 *     id: string,
 *     title: string,
 *     description: string,
 *     publishedAt: string,
 *     thumbnails: {
 *       default: string,  ← 120x90
 *       medium: string,   ← 320x180
 *       high: string,     ← 480x360
 *       maxres: string,   ← 1280x720 (may not exist)
 *     }
 *   }],
 *   fetchedAt: string  ← ISO timestamp
 * }
 */

import fs from 'fs';
import path from 'path';

// ─── Arg parsing ─────────────────────────────────────────────────────────────

function getArg(name: string): string | undefined {
  const flag = `--${name}=`;
  const arg = process.argv.find((a) => a.startsWith(flag));
  return arg ? arg.slice(flag.length) : undefined;
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface YouTubeChannelData {
  channelId: string;
  channelTitle: string;
  avatarUrl: string;
  bannerUrl: string | null;
  subscriberCount: string;
  videoCount: string;
  videos: YouTubeVideoData[];
  fetchedAt: string;
}

interface YouTubeVideoData {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnails: {
    default: string;
    medium: string;
    high: string;
    maxres: string;
  };
}

// ─── API helpers ──────────────────────────────────────────────────────────────

async function apiFetch(url: string): Promise<unknown> {
  const res = await fetch(url);
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`YouTube API error ${res.status}: ${body}`);
  }
  return res.json();
}

async function fetchChannelByHandle(handle: string, apiKey: string) {
  // Remove leading @ if present
  const cleanHandle = handle.startsWith('@') ? handle : `@${handle}`;
  const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,brandingSettings&forHandle=${encodeURIComponent(cleanHandle)}&key=${apiKey}`;
  return apiFetch(url) as Promise<any>;
}

async function fetchChannelById(channelId: string, apiKey: string) {
  const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,brandingSettings&id=${channelId}&key=${apiKey}`;
  return apiFetch(url) as Promise<any>;
}

async function fetchRecentVideos(uploadsPlaylistId: string, apiKey: string, maxResults = 12) {
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${apiKey}`;
  return apiFetch(url) as Promise<any>;
}

// ─── Thumbnail URL builder ────────────────────────────────────────────────────

function buildThumbnails(videoId: string, snippetThumbnails: any) {
  // YouTube CDN thumbnails — no API call needed after initial fetch
  return {
    default: snippetThumbnails?.default?.url ?? `https://img.youtube.com/vi/${videoId}/default.jpg`,
    medium: snippetThumbnails?.medium?.url ?? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
    high: snippetThumbnails?.high?.url ?? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    maxres: snippetThumbnails?.maxres?.url ?? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
  };
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  // Load env vars from .env.local if dotenv is available
  try {
    const dotenv = await import('dotenv');
    dotenv.config({ path: '.env.local' });
  } catch {
    // dotenv not required — API key can be passed as arg
  }

  const handle = getArg('handle');
  const channelId = getArg('id');
  const slug = getArg('slug');
  const maxResults = parseInt(getArg('max') ?? '12', 10);
  const apiKey = getArg('api-key') ?? process.env.YOUTUBE_API_KEY ?? process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  if (!slug) {
    console.error('❌  Missing --slug (e.g. --slug=ksi). This is used as the output filename.');
    process.exit(1);
  }

  if (!handle && !channelId) {
    console.error('❌  Provide either --handle=@ChannelName or --id=CHANNEL_ID');
    process.exit(1);
  }

  if (!apiKey) {
    console.error('❌  No YouTube API key found.');
    console.error('    Add YOUTUBE_API_KEY to .env.local, or pass --api-key=YOUR_KEY');
    console.error('    Free key: console.cloud.google.com → Enable YouTube Data API v3');
    process.exit(1);
  }

  console.log(`\n🎬  Conan Doyle | YouTube Channel Fetcher`);
  console.log(`    Target: ${handle ?? channelId}`);
  console.log(`    Output slug: ${slug}\n`);

  // ── Step 1: Fetch channel info ──────────────────────────────────────────────
  console.log('1/3  Fetching channel info...');
  let channelData: any;

  try {
    const res = handle
      ? await fetchChannelByHandle(handle, apiKey)
      : await fetchChannelById(channelId!, apiKey);

    if (!res?.items?.length) {
      console.error(`❌  Channel not found: ${handle ?? channelId}`);
      process.exit(1);
    }
    channelData = res.items[0];
  } catch (err) {
    console.error('❌  Channel fetch failed:', err);
    process.exit(1);
  }

  const { snippet, contentDetails, statistics, brandingSettings } = channelData;
  const uploadsPlaylistId = contentDetails?.relatedPlaylists?.uploads;

  console.log(`    ✓ Found: ${snippet.title} (${channelData.id})`);
  console.log(`    ✓ Subscribers: ${statistics?.subscriberCount ?? 'hidden'}`);

  // ── Step 2: Fetch recent videos ─────────────────────────────────────────────
  console.log(`\n2/3  Fetching ${maxResults} most recent videos...`);

  let videos: YouTubeVideoData[] = [];

  if (uploadsPlaylistId) {
    try {
      const playlistRes = await fetchRecentVideos(uploadsPlaylistId, apiKey, maxResults);
      videos = (playlistRes?.items ?? []).map((item: any) => {
        const s = item.snippet;
        const videoId = s?.resourceId?.videoId ?? '';
        return {
          id: videoId,
          title: s?.title ?? '',
          description: s?.description ?? '',
          publishedAt: s?.publishedAt ?? '',
          thumbnails: buildThumbnails(videoId, s?.thumbnails),
        };
      });
      console.log(`    ✓ Got ${videos.length} videos`);
    } catch (err) {
      console.warn('    ⚠ Could not fetch videos:', err);
    }
  } else {
    console.warn('    ⚠ No uploads playlist found — skipping videos');
  }

  // ── Step 3: Build output ────────────────────────────────────────────────────
  console.log('\n3/3  Saving output...');

  const output: YouTubeChannelData = {
    channelId: channelData.id,
    channelTitle: snippet.title,
    avatarUrl: snippet?.thumbnails?.high?.url ?? snippet?.thumbnails?.default?.url ?? '',
    bannerUrl: brandingSettings?.image?.bannerExternalUrl ?? null,
    subscriberCount: statistics?.subscriberCount ?? '0',
    videoCount: statistics?.videoCount ?? '0',
    videos,
    fetchedAt: new Date().toISOString(),
  };

  const outputDir = path.join(process.cwd(), 'public', 'youtube-data');
  fs.mkdirSync(outputDir, { recursive: true });

  const outputPath = path.join(outputDir, `${slug}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf-8');

  console.log(`    ✓ Saved to public/youtube-data/${slug}.json`);
  console.log(`\n✅  Done.`);
  console.log(`    Channel avatar: ${output.avatarUrl}`);
  console.log(`    Banner: ${output.bannerUrl ?? 'none'}`);
  console.log(`    Videos fetched: ${output.videos.length}`);
  if (output.videos.length > 0) {
    console.log(`\n    Recent videos:`);
    output.videos.slice(0, 5).forEach((v, i) => {
      console.log(`    ${i + 1}. [${v.id}] ${v.title.slice(0, 60)}`);
    });
  }
  console.log(`\n    Use in YouTubeThumbnailGrid: channelSlug="${slug}"`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
