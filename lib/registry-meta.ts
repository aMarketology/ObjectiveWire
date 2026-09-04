// =============================================================================
// lib/registry-meta.ts
// =============================================================================
// Structured metadata type for per-page registryMeta exports.
// Pages that export `export const registryMeta: RegistryMeta = { ... }` give
// the registry-loader a typed, static-analysis-friendly source for metadata,
// replacing the fragile regex fallback.
//
// Adoption pattern (add to any page.tsx):
//
//   import type { RegistryMeta } from '@/lib/registry-meta';
//
//   export const registryMeta: RegistryMeta = {
//     title: 'Brazil 3-0 Scotland | World Cup 2026 Group C Match Report',
//     description: 'Brazil took command of Group C with a dominant 3-0 win...',
//     publishedTime: '2026-06-24T22:00:00Z',
//     author: 'Jack Brennan',
//     authorSlug: 'jack-brennan',
//     imageUrl: '/thumbnails/world-cup-2026-brazil-3-0-scotland-group-c.jpg',
//     imageAlt: 'Brazil 3-0 Scotland | World Cup 2026 Group C',
//     tags: ['World Cup 2026', 'Brazil', 'Scotland', 'Group C', 'FIFA'],
//     keyTakeaways: [
//       'Brazil defeated Scotland 3-0 in Group C of the 2026 FIFA World Cup...',
//     ],
//   };
//
// The registry-loader checks for this export first and falls back to regex
// extraction only when it is absent. A build warning is logged for any
// NewsArticle page that doesn't have a registryMeta export.
// =============================================================================

export interface RegistryMeta {
  /** Full SEO headline. No em dashes. Max 60 chars. */
  title: string;

  /** Meta description. 130–155 chars. Primary keyword in first 60 chars. */
  description: string;

  /** ISO-8601 publish timestamp, e.g. "2026-06-24T22:00:00Z" */
  publishedTime: string;

  /** ISO-8601 last-modified timestamp. Defaults to publishedTime when absent. */
  modifiedTime?: string;

  /** Author display name, e.g. "Jack Brennan" */
  author: string;

  /** Author slug for /authors/[slug] link, e.g. "jack-brennan" */
  authorSlug?: string;

  /**
   * Absolute or root-relative path to the primary image.
   * Root-relative paths (starting with /) are resolved against SITE_CONFIG.url
   * by the registry-loader at build time.
   * Example: '/thumbnails/world-cup-2026-brazil-3-0-scotland-group-c.jpg'
   */
  imageUrl?: string;

  /** Alt text for the primary image. */
  imageAlt?: string;

  /** 4–8 proper-noun tags for the article. */
  tags?: string[];

  /**
   * 3–5 answer-first sentences emitted as ItemList JSON-LD.
   * Each item must be a complete standalone sentence.
   */
  keyTakeaways?: string[];
}
