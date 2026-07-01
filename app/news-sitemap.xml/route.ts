import { SITE_CONFIG } from '@/lib/site-config';
import { getAllEntries } from '@/lib/registry-service';

export const dynamic = 'force-dynamic';

// Google News Sitemap Protocol: https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap
// No JSON file, no Supabase. Scans app/**/page.tsx on every request — always fresh.
// To appear here an entry needs publishDate within the sliding window (NEWS_WINDOW_DAYS).

const NEWS_WINDOW_DAYS = 3;

export async function GET() {
  const baseUrl = SITE_CONFIG.url;
  const registry = await getAllEntries();

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
        <news:name>Objective Wire</news:name>
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
