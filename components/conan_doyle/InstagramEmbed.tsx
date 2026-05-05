'use client';

/**
 * InstagramEmbed.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Conan Doyle | Instagram Official Embed
 *
 * Uses Instagram's official oEmbed system — the same method used by CNN, BBC,
 * and every major news outlet. Instagram serves the image from their own CDN.
 * No scraping, no copyright issues, no API key required.
 *
 * Usage — single post embed:
 *   <InstagramEmbed url="https://www.instagram.com/p/SHORTCODE/" />
 *
 * Usage — gallery of posts:
 *   <InstagramGallery
 *     posts={[
 *       { url: 'https://www.instagram.com/p/ABC123/', caption: 'Post 1' },
 *       { url: 'https://www.instagram.com/p/DEF456/', caption: 'Post 2' },
 *       { url: 'https://www.instagram.com/p/GHI789/', caption: 'Post 3' },
 *     ]}
 *     cols={3}
 *     heading="Recent Posts"
 *   />
 *
 * How it works:
 *   Instagram provides an official blockquote embed format. When their embed.js
 *   script loads, it replaces the blockquote with a full rendered post widget.
 *   The script is loaded once per page (deduplicated by the hook).
 *
 * Note on styling:
 *   The rendered embed is an iframe served by Instagram — you cannot style the
 *   inside. The outer wrapper div can be styled normally with Tailwind classes.
 */

import React, { useEffect, useRef, useState } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface InstagramEmbedProps {
  /** Full URL to the Instagram post, e.g. https://www.instagram.com/p/ABC123/ */
  url: string;
  /** Show the caption inside the embed. Default: true */
  captioned?: boolean;
  /** Max width of the embed widget. Default: 540 */
  maxWidth?: number;
  /** Additional CSS classes on the wrapper */
  className?: string;
}

export interface InstagramGalleryPost {
  url: string;
  /** Optional label shown above the embed */
  caption?: string;
}

export interface InstagramGalleryProps {
  posts: InstagramGalleryPost[];
  /** Number of columns. Default: 3 */
  cols?: 1 | 2 | 3;
  /** Optional heading above the gallery */
  heading?: string;
  /** Additional CSS classes on the wrapper */
  className?: string;
}

// ─── Script loader (deduped — only loads embed.js once per page) ──────────────

let scriptLoaded = false;
let scriptLoading = false;
const scriptCallbacks: Array<() => void> = [];

function loadInstagramScript(): Promise<void> {
  return new Promise((resolve) => {
    if (scriptLoaded) {
      resolve();
      return;
    }

    scriptCallbacks.push(resolve);

    if (scriptLoading) return;
    scriptLoading = true;

    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.defer = true;

    script.onload = () => {
      scriptLoaded = true;
      scriptLoading = false;
      scriptCallbacks.forEach((cb) => cb());
      scriptCallbacks.length = 0;
    };

    script.onerror = () => {
      scriptLoading = false;
      // Resolve anyway — embed may still work if script was already loaded
      scriptCallbacks.forEach((cb) => cb());
      scriptCallbacks.length = 0;
    };

    document.body.appendChild(script);
  });
}

// ─── Process embeds after script load ────────────────────────────────────────

function processEmbeds() {
  if (typeof window !== 'undefined' && (window as any).instgrm?.Embeds?.process) {
    (window as any).instgrm.Embeds.process();
  }
}

// ─── Shortcode extractor ──────────────────────────────────────────────────────

function extractShortcode(url: string): string | null {
  const match = url.match(/instagram\.com\/(?:p|reel|tv)\/([A-Za-z0-9_-]+)/);
  return match ? match[1] : null;
}

// ─── Single Embed Component ───────────────────────────────────────────────────

export function InstagramEmbed({
  url,
  captioned = true,
  maxWidth = 540,
  className = '',
}: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  const shortcode = extractShortcode(url);
  // Normalize URL to standard format
  const normalizedUrl = shortcode
    ? `https://www.instagram.com/p/${shortcode}/`
    : url;

  useEffect(() => {
    if (!shortcode) {
      setStatus('error');
      return;
    }

    loadInstagramScript()
      .then(() => {
        setStatus('ready');
        // Give React a tick to render the blockquote, then process
        setTimeout(processEmbeds, 100);
      })
      .catch(() => setStatus('error'));
  }, [shortcode, url]);

  // Re-process when status becomes ready (handles hot reloads + navigation)
  useEffect(() => {
    if (status === 'ready') {
      setTimeout(processEmbeds, 200);
    }
  }, [status]);

  if (!shortcode) {
    return (
      <div className={`text-sm text-red-500 p-3 border border-red-200 rounded ${className}`}>
        Invalid Instagram URL: {url}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`instagram-embed-wrapper ${className}`}
      style={{ maxWidth, margin: '0 auto' }}
    >
      {status === 'loading' && (
        <div className="aspect-square bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </div>
      )}

      {/* Official Instagram blockquote embed */}
      {(status === 'ready' || status === 'loading') && (
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={`${normalizedUrl}?utm_source=ig_embed&utm_campaign=loading`}
          data-instgrm-version="14"
          {...(captioned ? { 'data-instgrm-captioned': '' } : {})}
          style={{
            background: '#FFF',
            border: '0',
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '1px',
            maxWidth: `${maxWidth}px`,
            minWidth: '326px',
            padding: '0',
            width: 'calc(100% - 2px)',
          }}
        >
          <div style={{ padding: '16px' }}>
            <a
              href={`${normalizedUrl}?utm_source=ig_embed&utm_campaign=loading`}
              style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)' }} />
                <div style={{ backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: 0, marginRight: '14px', marginLeft: '2px' }} />
                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)' }} />
              </div>
              <div style={{ marginLeft: '8px' }}>
                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexShrink: 0, height: '20px', width: '20px' }} />
                <div style={{ width: '0', height: '0', borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)' }} />
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <div style={{ width: '0px', borderTop: '8px solid #F4F4F4', borderRight: '8px solid transparent', transform: 'translateY(16px)' }} />
                <div style={{ backgroundColor: '#F4F4F4', flexGrow: 0, height: '12px', width: '16px', transform: 'translateY(-4px)' }} />
                <div style={{ width: '0', height: '0', borderTop: '8px solid #F4F4F4', borderLeft: '8px solid transparent', transform: 'translateY(-4px) translateX(8px)' }} />
              </div>
            </a>
            <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px', marginBottom: 0, marginTop: '8px', overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              <a
                href={`${normalizedUrl}?utm_source=ig_embed&utm_campaign=loading`}
                style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px', textDecoration: 'none' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                View this post on Instagram
              </a>
            </p>
          </div>
        </blockquote>
      )}

      {status === 'error' && (
        <div className="border border-gray-200 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-500">
            Could not load Instagram post.{' '}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              View on Instagram
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Gallery Component ────────────────────────────────────────────────────────

const GALLERY_COL_CLASS: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
};

export function InstagramGallery({
  posts,
  cols = 3,
  heading,
  className = '',
}: InstagramGalleryProps) {
  return (
    <div className={`w-full ${className}`}>
      {heading && (
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">{heading}</h3>
      )}
      <div className={`grid ${GALLERY_COL_CLASS[cols]} gap-6 items-start`}>
        {posts.map((post, i) => (
          <div key={i}>
            {post.caption && (
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">{post.caption}</p>
            )}
            <InstagramEmbed url={post.url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstagramEmbed;
