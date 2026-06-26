// =============================================================================
// lib/registry-service.ts
// =============================================================================
// All content registry data lives in lib/registry-data.json.
// Generated at build time by scripts/sync-registry.ts (runs in prebuild).
// All queries are pure in-memory operations — zero Supabase calls.
// =============================================================================

export type { ContentEntry, ChangeFrequency } from '@/lib/content-registry';
import type { ContentEntry } from '@/lib/content-registry';
import registryDataRaw from './registry-data.json';

const registry = registryDataRaw as ContentEntry[];

// ---------------------------------------------------------------------------
// isRealArticle — filters out hub/index/meta pages from article feeds
// ---------------------------------------------------------------------------
const HUB_SLUGS = new Set([
  '/', '/news', '/tech', '/technology', '/finance', '/search', '/site-index',
  '/youtube', '/editorial-standards', '/social', '/entertainment', '/blog',
  '/about', '/team', '/privacy-policy', '/terms-of-service', '/copyright',
  '/corrections', '/get-help', '/service', '/index', '/feeds', '/crypto',
  '/artists', '/influencer', '/saas', '/research', '/objectwire',
  '/podcasts', '/video-games', '/winter-olympics', '/world-cup', '/formula-1',
  '/redbull', '/disney', '/elon-musk', '/google', '/apple', '/nvidia',
  '/microsoft', '/open-ai', '/github', '/nasa', '/intel', '/beastgames',
  '/bio-hacking', '/earth', '/ngos', '/cars', '/clothing', '/events',
  '/bank-of-america', '/austin-private-detective-agency', '/missing-persons',
  '/investigations', '/college', '/define', '/authors', '/politics',
  '/amazon', '/tiktok', '/trump', '/cuba',
]);

const HUB_CATEGORIES = new Set(['Meta', 'Support', 'Services', 'Legal']);

// Top-level path segments whose sub-pages are NEVER real articles
// (author profiles, service pages, editorial meta, legal pages, etc.)
const NON_ARTICLE_ROOTS = new Set([
  'authors', 'service', 'editorial-standards', 'get-help',
  'account', 'auth', 'api', 'admin', 'tags', 'search',
  'index', 'blog', 'site-index', 'team', 'privacy-policy',
  'terms-of-service', 'corrections', 'copyright', 'about',
  'feeds', 'rss.xml', 'news-sitemap.xml', 'image-sitemap.xml',
  'feed.json', 'podcasts',
]);

// Hub-only roots: top-level segment is valid BUT sub-pages are only real
// articles if the path has 3+ segments (e.g. /local/greater-texas/article).
// 2-segment paths like /local/austin are hub listing pages, not articles.
const HUB_ONLY_ROOTS = new Set(['local']);

function isRealArticle(e: ContentEntry): boolean {
  if (HUB_SLUGS.has(e.slug)) return false;
  if (HUB_CATEGORIES.has(e.category)) return false;
  const parts = e.slug.split('/').filter(Boolean);
  if (parts.length < 2) return false;
  // Block all sub-pages of non-article roots (e.g. /authors/x, /service/x)
  if (NON_ARTICLE_ROOTS.has(parts[0])) return false;
  // For hub-only roots (e.g. /local), require 3+ path segments to be a real article
  if (HUB_ONLY_ROOTS.has(parts[0]) && parts.length < 3) return false;
  if (e.description.length < 60) return false;
  if (e.title.startsWith('›') || e.title.startsWith('ObjectWire coverage')) return false;
  return true;
}

// ---------------------------------------------------------------------------
// PUBLIC API — kept async for call-site compatibility
// ---------------------------------------------------------------------------

/** All entries, sorted newest first */
export async function getAllEntries(): Promise<ContentEntry[]> {
  return [...registry].sort((a, b) =>
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

/** All entries as a Map<slug, ContentEntry> — O(1) lookups */
export async function getAllEntriesMap(): Promise<Map<string, ContentEntry>> {
  return new Map(registry.map(e => [e.slug, e]));
}

/** Look up a single entry by slug */
export async function getEntry(slug: string): Promise<ContentEntry | undefined> {
  return registry.find(e => e.slug === slug);
}

/** Featured articles, newest first */
export async function getFeaturedArticles(): Promise<ContentEntry[]> {
  return [...registry]
    .filter(e => e.featured)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

/** Latest real articles (no hub/index pages), newest first */
export async function getLatestArticles(limit = 10): Promise<ContentEntry[]> {
  return [...registry]
    .filter(isRealArticle)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
}

/** Articles by category, newest first */
export async function getArticlesByCategory(category: string, limit?: number): Promise<ContentEntry[]> {
  const results = [...registry]
    .filter(e => e.category.toLowerCase() === category.toLowerCase())
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  return limit ? results.slice(0, limit) : results;
}

/** Related articles for a slug, scored by category + tag overlap */
export async function getRelatedArticles(slug: string, limit = 5): Promise<ContentEntry[]> {
  const current = registry.find(e => e.slug === slug);
  if (!current) return getLatestArticles(limit);

  return registry
    .filter(e => e.slug !== slug)
    .map(e => ({
      entry: e,
      score:
        (e.category === current.category ? 3 : 0) +
        e.tags.filter(t => current.tags.includes(t)).length,
    }))
    .filter(e => e.score > 0)
    .sort((a, b) =>
      b.score - a.score ||
      new Date(b.entry.publishDate).getTime() - new Date(a.entry.publishDate).getTime()
    )
    .slice(0, limit)
    .map(e => e.entry);
}

/** Every unique tag with article count, sorted by count desc */
export async function getAllTags(): Promise<{ tag: string; count: number }[]> {
  const tagMap = new Map<string, number>();
  for (const entry of registry) {
    for (const tag of entry.tags) {
      tagMap.set(tag, (tagMap.get(tag) ?? 0) + 1);
    }
  }
  return [...tagMap.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

/** Articles matching a specific tag, newest first */
export async function getEntriesByTag(tag: string, limit?: number): Promise<ContentEntry[]> {
  const results = [...registry]
    .filter(e => e.tags.some(t => t.toLowerCase() === tag.toLowerCase()))
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  return limit ? results.slice(0, limit) : results;
}

/** Articles by author slug */
export async function getEntriesByAuthor(authorSlug: string): Promise<ContentEntry[]> {
  return [...registry]
    .filter(e => e.authorSlug === authorSlug)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

// Keep these re-exports for backward compatibility
export { contentRegistry, registerPage } from '@/lib/content-registry';
