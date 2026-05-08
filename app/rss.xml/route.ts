import { SITE_CONFIG } from '@/lib/site-config';
import registryDataRaw from '@/lib/registry-data.json';
import type { ContentEntry } from '@/lib/content-registry';

// RSS feed is generated from lib/registry-data.json — no Supabase calls.
// Updated on every build via sync-registry.ts in prebuild.
const RSS_LIMIT = 200;

export async function GET() {
  const baseUrl = SITE_CONFIG.url;
  const registry = registryDataRaw as ContentEntry[];

  const articles = [...registry]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, RSS_LIMIT)
    .filter((row) => {
      const parts = row.slug.split('/').filter(Boolean);
      if (parts.length < 2) return false;
      if ((row.description || '').length < 60) return false;
      if ((row.title || '').startsWith('›')) return false;
      return true;
    });

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>${escapeXml(SITE_CONFIG.name)} - ${escapeXml(SITE_CONFIG.tagline)}</title>
    <link>${baseUrl}</link>
    <description>${escapeXml(SITE_CONFIG.description)}</description>
    <language>${SITE_CONFIG.locale.replace('_', '-').toLowerCase()}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/favicon.ico</url>
      <title>${escapeXml(SITE_CONFIG.name)}</title>
      <link>${baseUrl}</link>
    </image>${articles.map((row) => {
      const slug = row.slug.startsWith('/') ? row.slug.substring(1) : row.slug;
      const pubDate = new Date(row.publishDate).toUTCString();
      const author = row.author || 'ObjectWire Editorial Team';
      const tags = Array.isArray(row.tags) ? row.tags : [];
      return `
    <item>
      <title><![CDATA[${row.title}]]></title>
      <link>${baseUrl}/${slug}</link>
      <guid isPermaLink="true">${baseUrl}/${slug}</guid>
      <description><![CDATA[${row.description || ''}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author>${SITE_CONFIG.email} (${escapeXml(author)})</author>
      <category>${escapeXml(row.category || 'News')}</category>${tags.map((tag) => `
      <category>${escapeXml(tag)}</category>`).join('')}${row.imageUrl ? `
      <enclosure url="${escapeXml(row.imageUrl)}" type="image/jpeg"/>
      <media:content url="${escapeXml(row.imageUrl)}" medium="image"/>` : ''}
    </item>`;
    }).join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=7200',
    },
  });
}

function escapeXml(unsafe: string): string {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
