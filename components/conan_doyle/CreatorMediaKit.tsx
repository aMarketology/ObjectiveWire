'use client';

/**
 * CreatorMediaKit.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Conan Doyle | AlfasaAutoSEO Media Kit
 *
 * A single drop-in component for creator articles that renders:
 *   1. YouTube recent videos grid (from pre-fetched public/youtube-data/[slug].json)
 *   2. Instagram gallery (official embeds, no API key needed)
 *
 * Designed for AlfasaAutoSEO — paste into any creator article to instantly
 * populate media from the creator's channels. Run `fetch-creator-media` first
 * to generate the YouTube JSON data file.
 *
 * Usage — Full kit (YouTube + Instagram):
 *   <CreatorMediaKit
 *     youtubeSlug="kai-cenat"
 *     instagramPosts={[
 *       'https://www.instagram.com/p/ABC123/',
 *       'https://www.instagram.com/p/DEF456/',
 *       'https://www.instagram.com/p/GHI789/',
 *     ]}
 *     heading="Kai Cenat"
 *   />
 *
 * Usage — YouTube only:
 *   <CreatorMediaKit youtubeSlug="kai-cenat" heading="Kai Cenat" />
 *
 * Usage — Instagram only:
 *   <CreatorMediaKit
 *     instagramPosts={['https://www.instagram.com/p/ABC123/']}
 *     instagramHandle="kacenat"
 *   />
 *
 * Usage — Manual video IDs (no JSON needed):
 *   <CreatorMediaKit
 *     youtubeVideos={[
 *       { id: 'dQw4w9WgXcQ', title: 'Video Title', publishedAt: '2026-01-01' },
 *     ]}
 *     heading="My Creator"
 *   />
 *
 * Pre-flight:
 *   npx tsx components/conan_doyle/fetch-creator-media.ts \
 *     --slug=kai-cenat --youtube=@KaiCenat --instagram=kacenat
 */

import React from 'react';
import { YouTubeThumbnailGrid } from './YouTubeThumbnailGrid';
import type { YTVideoItem } from './YouTubeThumbnailGrid';
import { InstagramGallery } from './InstagramEmbed';

// ─── Props ────────────────────────────────────────────────────────────────────

export interface CreatorMediaKitProps {
  /**
   * Creator slug — loads YouTube data from `public/youtube-data/[slug].json`.
   * Run `fetch-creator-media --slug=... --youtube=...` to generate the file.
   */
  youtubeSlug?: string;

  /**
   * Manual YouTube video array. Use instead of `youtubeSlug` when you don't
   * want to pre-fetch or want to curate specific videos.
   */
  youtubeVideos?: YTVideoItem[];

  /**
   * Array of Instagram post URLs in the format:
   *   'https://www.instagram.com/p/SHORTCODE/'
   * Get shortcodes from the creator's Instagram profile (the /p/XXXX part).
   */
  instagramPosts?: string[];

  /**
   * Instagram handle without @ — shown as a heading label.
   * e.g. 'kacenat' → displays "@kacenat on Instagram"
   */
  instagramHandle?: string;

  /**
   * Creator display name — used in section headings.
   * e.g. 'Kai Cenat' → "Kai Cenat | Recent Videos"
   */
  heading?: string;

  /**
   * Number of YouTube video columns. Default: 3.
   */
  youtubeCols?: 1 | 2 | 3;

  /**
   * Max YouTube videos to show. Default: 6.
   */
  youtubeMax?: number;

  /**
   * Number of Instagram columns. Default: 3.
   */
  instagramCols?: 1 | 2 | 3;

  /**
   * Show only YouTube section. Default: false.
   */
  youtubeOnly?: boolean;

  /**
   * Show only Instagram section. Default: false.
   */
  instagramOnly?: boolean;

  /** Additional CSS classes on the root wrapper */
  className?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function CreatorMediaKit({
  youtubeSlug,
  youtubeVideos,
  instagramPosts = [],
  instagramHandle,
  heading,
  youtubeCols = 3,
  youtubeMax = 6,
  instagramCols = 3,
  youtubeOnly = false,
  instagramOnly = false,
  className = '',
}: CreatorMediaKitProps) {
  const hasYoutube = !instagramOnly && (youtubeSlug || (youtubeVideos && youtubeVideos.length > 0));
  const hasInstagram = !youtubeOnly && instagramPosts.length > 0;

  if (!hasYoutube && !hasInstagram) return null;

  const youtubeHeading = heading ? `${heading} | Recent Videos` : 'Recent Videos';
  const instagramHeading = instagramHandle
    ? `@${instagramHandle} on Instagram`
    : heading
      ? `${heading} on Instagram`
      : 'Instagram';

  return (
    <div className={`creator-media-kit w-full space-y-10 my-8 ${className}`}>
      {/* YouTube Section */}
      {hasYoutube && (
        <section>
          <YouTubeThumbnailGrid
            channelSlug={youtubeSlug}
            videos={youtubeVideos}
            cols={youtubeCols}
            maxVideos={youtubeMax}
            showTitle
            linkToVideo
            heading={youtubeHeading}
          />
        </section>
      )}

      {/* Instagram Section */}
      {hasInstagram && (
        <section>
          <InstagramGallery
            heading={instagramHeading}
            cols={instagramCols}
            posts={instagramPosts.map((url) => ({ url }))}
          />
        </section>
      )}
    </div>
  );
}

export default CreatorMediaKit;
