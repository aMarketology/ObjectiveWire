import { SITE_CONFIG } from '@/lib/site-config';
import registryDataRaw from '@/lib/registry-data.json';
import type { ContentEntry } from '@/lib/content-registry';

// Google News Sitemap Protocol: https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap
// Articles are sourced from lib/registry-data.json (generated at build time by sync-registry.ts).
// To appear here, an entry needs:
//   - publishDate within the sliding window (NEWS_WINDOW_DAYS)
//   - tags[] used as news keywords
// No Supabase calls — fully in-memory.

const NEWS_WINDOW_DAYS = 3;

export async function GET() {
  const baseUrl = SITE_CONFIG.url;
  const registry = registryDataRaw as ContentEntry[];

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - NEWS_WINDOW_DAYS);
  const cutoffStr = cutoff.toISOString().split('T')[0]; // "YYYY-MM-DD"

  const recentArticles = registry
    .filter(entry => entry.publishDate >= cutoffStr)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .map(entry => ({
      loc: `${baseUrl}${entry.slug}`,
      title: entry.title,
      publicationDate: new Date(entry.publishDate).toISOString(),
      keywords: Array.isArray(entry.tags) ? entry.tags.join(', ') : (entry.category || ''),
    }));

  // Generate Google News Sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${recentArticles.map(article => `  <url>
    <loc>${escapeXml(article.loc)}</loc>
    <news:news>
      <news:publication>
        <news:name>ObjectWire</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${article.publicationDate}</news:publication_date>
      <news:title>${escapeXml(article.title)}</news:title>${article.keywords ? `
      <news:keywords>${escapeXml(article.keywords)}</news:keywords>` : ''}
    </news:news>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=900, s-maxage=900, stale-while-revalidate=1800',
      'X-Robots-Tag': 'noindex',
    },
  });
}

// Helper function to escape XML special characters
function escapeXml(unsafe: string): string {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
