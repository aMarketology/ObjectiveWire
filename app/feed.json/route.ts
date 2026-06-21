import { SITE_CONFIG } from '@/lib/site-config';
import registryDataRaw from '@/lib/registry-data.json';
import type { ContentEntry } from '@/lib/content-registry';

// JSON Feed 1.1 — https://www.jsonfeed.org/version/1.1/
// Preferred by AI systems (Perplexity, ChatGPT Search, Claude) over RSS/Atom.
// Sourced from lib/registry-data.json — no Supabase calls. Same source as RSS.

const NON_ARTICLE_ROOTS = new Set([
  'authors', 'service', 'editorial-standards', 'get-help',
  'local', 'account', 'auth', 'api', 'admin', 'tags', 'search',
  'index', 'blog', 'site-index', 'team', 'privacy-policy',
  'terms-of-service', 'corrections', 'copyright', 'about',
  'feeds', 'rss.xml', 'news-sitemap.xml', 'image-sitemap.xml',
  'feed.json', 'podcasts',
]);

export async function GET() {
  const baseUrl = SITE_CONFIG.url;
  const registry = registryDataRaw as ContentEntry[];

  const items = [...registry]
    .filter((entry) => {
      const parts = entry.slug.split('/').filter(Boolean);
      if (parts.length < 2) return false;
      if (NON_ARTICLE_ROOTS.has(parts[0])) return false;
      if ((entry.description || '').length < 60) return false;
      if ((entry.title || '').startsWith('›')) return false;
      return true;
    })
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 100)
    .map((entry) => {
      const item: Record<string, unknown> = {
        id: `${baseUrl}${entry.slug}`,
        url: `${baseUrl}${entry.slug}`,
        title: entry.title,
        content_text: entry.description,
        date_published: new Date(entry.publishDate).toISOString(),
        date_modified: new Date(entry.modifiedDate || entry.publishDate).toISOString(),
        authors: [{ name: entry.author || 'Objective Wire Editorial' }],
        tags: Array.isArray(entry.tags) ? entry.tags : [],
      };
      if (entry.imageUrl) item.image = entry.imageUrl;
      return item;
    });

  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: SITE_CONFIG.name,
    home_page_url: baseUrl,
    feed_url: `${baseUrl}/feed.json`,
    description: SITE_CONFIG.description,
    language: 'en',
    items,
  };

  return new Response(JSON.stringify(feed, null, 2), {
    headers: {
      'Content-Type': 'application/feed+json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=7200',
    },
  });
}
