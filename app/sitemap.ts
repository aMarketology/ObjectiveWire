import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';
import { getAllEntries } from '@/lib/registry-service';

export const revalidate = 3600; // regenerate every hour — picks up new articles without a full deploy

// No JSON file. No Supabase calls. Scans app/**/page.tsx at revalidation time.

const SENTINEL_DATE = '2020-01-01';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url;
  const registry = await getAllEntries();
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'hourly',
      priority: 1.0,
    },
  ];

  const registryEntries: MetadataRoute.Sitemap = registry.map(entry => ({
    url: `${baseUrl}${entry.slug}`,
    // Hub/utility pages have sentinel date 2020-01-01 — show build date so
    // Google knows they are actively maintained, not abandoned.
    lastModified: entry.modifiedDate === SENTINEL_DATE ? now : new Date(entry.modifiedDate),
    changeFrequency: entry.changeFrequency as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: Number(entry.priority),
  }));

  const all = [...staticEntries, ...registryEntries];

  // Deduplicate (registry takes precedence over static)
  const unique = Array.from(
    new Map(all.map((e) => [e.url, e])).values()
  );

  // Sort: priority desc, then lastModified desc
  unique.sort((a, b) => {
    const pDiff = (b.priority ?? 0) - (a.priority ?? 0);
    if (pDiff !== 0) return pDiff;
    return new Date(b.lastModified ?? 0).getTime() - new Date(a.lastModified ?? 0).getTime();
  });

  return unique;
}
