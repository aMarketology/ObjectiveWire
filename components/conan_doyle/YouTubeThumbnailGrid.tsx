'use client';

/**
 * YouTubeThumbnailGrid.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Conan Doyle | YouTube Thumbnail Gallery
 *
 * Renders a responsive grid of YouTube video thumbnails sourced from:
 *   A) A pre-fetched channel JSON (from fetch-youtube-channel.ts)
 *   B) A manually provided array of video IDs / objects
 *
 * Thumbnails are served directly from YouTube's CDN — no API key needed at
 * render time. The fetch script is only needed to get the video IDs initially.
 *
 * Usage A — channel JSON (run fetch-youtube-channel first):
 *   <YouTubeThumbnailGrid channelSlug="ksi" cols={3} maxVideos={6} />
 *
 * Usage B — manual video IDs:
 *   <YouTubeThumbnailGrid
 *     videos={[
 *       { id: 'dQw4w9WgXcQ', title: 'Video title' },
 *       { id: 'abc123', title: 'Another video' },
 *     ]}
 *     cols={3}
 *   />
 *
 * Usage C — article thumbnail picker (single featured thumbnail):
 *   <YouTubeThumbnailGrid
 *     videos={[{ id: 'dQw4w9WgXcQ' }]}
 *     cols={1}
 *     quality="maxres"
 *     linkToVideo={false}
 *     onSelect={(video) => console.log(video)}
 *   />
 */

import React, { useEffect, useState } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

export type ThumbnailQuality = 'default' | 'medium' | 'high' | 'maxres';

export interface YTVideoItem {
  id: string;
  title?: string;
  description?: string;
  publishedAt?: string;
  thumbnails?: {
    default?: string;
    medium?: string;
    high?: string;
    maxres?: string;
  };
}

export interface YouTubeThumbnailGridProps {
  /** Load videos from a pre-fetched JSON: public/youtube-data/[channelSlug].json */
  channelSlug?: string;
  /** Manual video list — takes precedence over channelSlug */
  videos?: YTVideoItem[];
  /** Number of columns. Default: 3 */
  cols?: 1 | 2 | 3 | 4;
  /** Max videos to show. Default: 9 */
  maxVideos?: number;
  /** Thumbnail quality. Default: 'high' */
  quality?: ThumbnailQuality;
  /** Show video title below thumbnail. Default: true */
  showTitle?: boolean;
  /** Show published date. Default: false */
  showDate?: boolean;
  /** Make thumbnails link to YouTube. Default: true */
  linkToVideo?: boolean;
  /** Optional heading above the grid */
  heading?: string;
  /** Called when a thumbnail is clicked (in addition to/instead of linking) */
  onSelect?: (video: YTVideoItem) => void;
  /** CSS class override for the outer wrapper */
  className?: string;
}

// ─── Thumbnail URL helper ─────────────────────────────────────────────────────

const QUALITY_MAP: Record<ThumbnailQuality, string> = {
  default: 'default.jpg',
  medium: 'mqdefault.jpg',
  high: 'hqdefault.jpg',
  maxres: 'maxresdefault.jpg',
};

function getThumbnailUrl(video: YTVideoItem, quality: ThumbnailQuality): string {
  // Use pre-fetched URL if available
  if (video.thumbnails?.[quality]) return video.thumbnails[quality]!;
  // Fall back to YouTube CDN pattern (always works for any public video)
  return `https://img.youtube.com/vi/${video.id}/${QUALITY_MAP[quality]}`;
}

function getVideoUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

function formatDate(iso?: string): string {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

// ─── Col class map ────────────────────────────────────────────────────────────

const COL_CLASS: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
};

// ─── Individual Thumbnail Card ────────────────────────────────────────────────

function ThumbnailCard({
  video,
  quality,
  showTitle,
  showDate,
  linkToVideo,
  onSelect,
}: {
  video: YTVideoItem;
  quality: ThumbnailQuality;
  showTitle: boolean;
  showDate: boolean;
  linkToVideo: boolean;
  onSelect?: (v: YTVideoItem) => void;
}) {
  const [imgSrc, setImgSrc] = useState(getThumbnailUrl(video, quality));
  const [failed, setFailed] = useState(false);

  // Fallback: maxres often doesn't exist for older videos — drop to high
  const handleError = () => {
    if (!failed && quality === 'maxres') {
      setImgSrc(`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`);
      setFailed(true);
    }
  };

  const inner = (
    <div
      className="group relative overflow-hidden rounded-lg bg-gray-900 cursor-pointer"
      onClick={() => onSelect?.(video)}
    >
      {/* Thumbnail image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={imgSrc}
          alt={video.title ?? `YouTube video ${video.id}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={handleError}
          loading="lazy"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30">
          <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {/* YouTube logo badge */}
        <div className="absolute bottom-2 right-2 bg-black/70 rounded px-1.5 py-0.5">
          <svg className="w-10 h-3" viewBox="0 0 90 20" fill="none">
            <path d="M27.9 3.5H6.1C3.8 3.5 2 5.3 2 7.5v5C2 14.7 3.8 16.5 6.1 16.5h21.8c2.3 0 4.1-1.8 4.1-4v-5c0-2.2-1.8-4-4.1-4zm-8.4 7.1l-7 3.9V6.5l7 4.1zm23.9-7.1h-5.7v13h5.7c2.8 0 5.1-2.1 5.1-4.8V8.3c0-2.7-2.3-4.8-5.1-4.8zm1.5 8.3c0 .8-.7 1.5-1.5 1.5h-2.2V6.5h2.2c.8 0 1.5.7 1.5 1.5v4.8zM66.8 3.5h-3.5v8.3c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V3.5h-3.5v8.3c0 2.7 2.2 4.8 5 4.8s5-2.1 5-4.8V3.5zm12 .5c-.7-.5-1.6-.7-2.4-.7-2.8 0-5.1 2.1-5.1 4.8v4.3c0 2.7 2.3 4.8 5.1 4.8.9 0 1.7-.2 2.4-.7v.5h3.5V3.5h-3.5V4zm0 8.4c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V8.1c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v4.3zm13.7-8.9c-2.8 0-5.1 2.1-5.1 4.8v3.5c0 2.7 2.3 4.8 5.1 4.8s5.1-2.1 5.1-4.8v-3.5c0-2.7-2.3-4.8-5.1-4.8zm1.6 8.3c0 .8-.7 1.5-1.6 1.5s-1.5-.7-1.5-1.5V8.1c0-.8.7-1.5 1.5-1.5s1.6.7 1.6 1.5v4.2z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Title + date */}
      {(showTitle || showDate) && (
        <div className="p-3">
          {showTitle && video.title && (
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-2 leading-snug">
              {video.title}
            </p>
          )}
          {showDate && video.publishedAt && (
            <p className="text-xs text-gray-500 mt-1">{formatDate(video.publishedAt)}</p>
          )}
        </div>
      )}
    </div>
  );

  if (linkToVideo && !onSelect) {
    return (
      <a
        href={getVideoUrl(video.id)}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {inner}
      </a>
    );
  }

  return inner;
}

// ─── Skeleton loader ──────────────────────────────────────────────────────────

function SkeletonCard() {
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="aspect-video bg-gray-200 dark:bg-gray-700 animate-pulse" />
      <div className="p-3 space-y-2">
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-full" />
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-2/3" />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function YouTubeThumbnailGrid({
  channelSlug,
  videos: manualVideos,
  cols = 3,
  maxVideos = 9,
  quality = 'high',
  showTitle = true,
  showDate = false,
  linkToVideo = true,
  heading,
  onSelect,
  className = '',
}: YouTubeThumbnailGridProps) {
  const [videos, setVideos] = useState<YTVideoItem[]>(manualVideos ?? []);
  const [loading, setLoading] = useState(!manualVideos && !!channelSlug);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (manualVideos) {
      setVideos(manualVideos);
      return;
    }
    if (!channelSlug) return;

    setLoading(true);
    fetch(`/youtube-data/${channelSlug}.json`)
      .then((r) => {
        if (!r.ok) throw new Error(`Could not load /youtube-data/${channelSlug}.json`);
        return r.json();
      })
      .then((data) => {
        setVideos(data.videos ?? []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [channelSlug, manualVideos]);

  const displayVideos = videos.slice(0, maxVideos);

  return (
    <div className={`w-full ${className}`}>
      {heading && (
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">{heading}</h3>
      )}

      {error && (
        <p className="text-sm text-red-500 mb-2">
          Could not load thumbnails. Run{' '}
          <code className="bg-gray-100 px-1 rounded">
            npx tsx components/conan_doyle/fetch-youtube-channel.ts --slug={channelSlug}
          </code>
        </p>
      )}

      <div className={`grid ${COL_CLASS[cols]} gap-4`}>
        {loading
          ? Array.from({ length: cols * 2 }).map((_, i) => <SkeletonCard key={i} />)
          : displayVideos.map((video) => (
              <ThumbnailCard
                key={video.id}
                video={video}
                quality={quality}
                showTitle={showTitle}
                showDate={showDate}
                linkToVideo={linkToVideo}
                onSelect={onSelect}
              />
            ))}
      </div>

      {!loading && displayVideos.length === 0 && !error && (
        <p className="text-sm text-gray-500 text-center py-8">No videos to display.</p>
      )}
    </div>
  );
}

export default YouTubeThumbnailGrid;
