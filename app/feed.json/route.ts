import { SITE_CONFIG } from '@/lib/site-config';
import { getAllEntries, isRealArticle, toAbsoluteUrl } from '@/lib/registry-service';

export const revalidate = 3600;

// JSON Feed 1.1 — https://www.jsonfeed.org/version/1.1/
// Preferred by AI systems (Perplexity, ChatGPT Search, Claude) over RSS/Atom.
// Sourced live from active site registry-service — no Supabase calls. Same source as RSS.

export async function GET() {
  const baseUrl = SITE_CONFIG.url;
  const registry = await getAllEntries();
  const todayStr = new Date().toISOString().split('T')[0];

  const items = [...registry]
    .filter((entry) => isRealArticle(entry) && entry.publishDate <= todayStr)
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
      const absImage = toAbsoluteUrl(entry.imageUrl, baseUrl);
      if (absImage) item.image = absImage;
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
