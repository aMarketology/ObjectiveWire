import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';
import registryDataRaw from '@/lib/registry-data.json';
import type { ContentEntry } from '@/lib/content-registry';

// Fully static — regenerated at every build via sync-registry.ts in prebuild.
// No Supabase calls. registry-data.json is the source of truth.

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const registry = registryDataRaw as ContentEntry[];

  // Directory pages — static, content lives in code (not registry)
  const directoryEntries: MetadataRoute.Sitemap = [
    // ── Index & region hubs ──────────────────────────────────────────────────
    { url: `${baseUrl}/directory`,                                                      lastModified: new Date('2026-06-13'), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${baseUrl}/directory/austin`,                                               lastModified: new Date('2026-06-13'), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${baseUrl}/directory/houston`,                                              lastModified: new Date('2026-06-13'), changeFrequency: 'weekly',  priority: 0.6 },
    { url: `${baseUrl}/directory/greater-texas`,                                        lastModified: new Date('2026-06-13'), changeFrequency: 'weekly',  priority: 0.6 },
    // ── Austin listing pages ─────────────────────────────────────────────────
    { url: `${baseUrl}/directory/austin/government`,                                    lastModified: new Date('2026-06-13'), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${baseUrl}/directory/austin/companies`,                                     lastModified: new Date('2026-06-13'), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${baseUrl}/directory/austin/organizations`,                                 lastModified: new Date('2026-06-13'), changeFrequency: 'weekly',  priority: 0.7 },
    // ── Austin government profiles ───────────────────────────────────────────
    { url: `${baseUrl}/directory/austin/government/travis-county-da`,                  lastModified: new Date('2026-06-13'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/directory/austin/government/austin-energy`,                     lastModified: new Date('2026-06-13'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/directory/austin/government/capital-metro`,                     lastModified: new Date('2026-06-13'), changeFrequency: 'monthly', priority: 0.8 },
    // ── Austin company profiles ──────────────────────────────────────────────
    { url: `${baseUrl}/directory/austin/companies/tyler-technologies`,                 lastModified: new Date('2026-06-13'), changeFrequency: 'monthly', priority: 0.8 },
    // ── Houston listing pages ─────────────────────────────────────────────────
    { url: `${baseUrl}/directory/houston/government`,                                  lastModified: new Date('2026-06-13'), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${baseUrl}/directory/houston/companies`,                                   lastModified: new Date('2026-06-13'), changeFrequency: 'weekly',  priority: 0.7 },
    // ── Houston government profiles ───────────────────────────────────────────
    { url: `${baseUrl}/directory/houston/government/harris-county-da`,                lastModified: new Date('2026-06-13'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/directory/houston/government/harris-county-flood-control`,     lastModified: new Date('2026-06-13'), changeFrequency: 'monthly', priority: 0.8 },
    // ── Houston company profiles ──────────────────────────────────────────────
    { url: `${baseUrl}/directory/houston/companies/port-houston`,                     lastModified: new Date('2026-06-13'), changeFrequency: 'monthly', priority: 0.8 },
  ];

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1.0,
    },
    ...directoryEntries,
  ];

  const registryEntries: MetadataRoute.Sitemap = registry.map(entry => ({
    url: `${baseUrl}${entry.slug}`,
    lastModified: new Date(entry.modifiedDate),
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
