import Link from 'next/link';
import { getAllEntries, isRealArticle, toAbsoluteUrl } from '@/lib/registry-service';
import { SITE_CONFIG } from '@/lib/site-config';

export interface ManualRelatedItem {
  href?: string;
  url?: string;
  title: string;
  category?: string;
}

interface LibraryConnectedArticlesProps {
  currentSlug?: string;
  currentTitle?: string;
  category?: string;
  tags?: string[];
  manualItems?: ManualRelatedItem[];
  limit?: number;
}

/**
 * Server-rendered Wikipedia-style knowledge graph / connected library grid.
 * Automatically links every article to related entries in the active site's
 * registry by route cluster, shared tags, and category so Googlebot and readers
 * can traverse the entire Objective Wire library seamlessly.
 */
export async function LibraryConnectedArticles({
  currentSlug = '',
  currentTitle = '',
  category = '',
  tags = [],
  manualItems = [],
  limit = 6,
}: LibraryConnectedArticlesProps) {
  const allEntries = await getAllEntries();
  const todayStr = new Date().toISOString().split('T')[0];

  let normalizedSlug = currentSlug.trim();
  if (normalizedSlug.startsWith('http://') || normalizedSlug.startsWith('https://')) {
    try {
      normalizedSlug = new URL(normalizedSlug).pathname;
    } catch {}
  }
  if (normalizedSlug && !normalizedSlug.startsWith('/')) {
    normalizedSlug = `/${normalizedSlug}`;
  }
  const slugParts = normalizedSlug.split('/').filter(Boolean);
  const rootPrefix = slugParts[0] ? `/${slugParts[0]}` : '';
  const subPrefix = slugParts.length >= 2 ? `/${slugParts[0]}/${slugParts[1]}` : '';
  const tagSet = new Set(tags.map((t) => t.toLowerCase().trim()));
  const catLower = category.toLowerCase().trim();

  // Score all real, published articles in the active site registry
  const scored = allEntries
    .filter((entry) => {
      if (!isRealArticle(entry)) return false;
      if (entry.slug === normalizedSlug || entry.slug === currentSlug) return false;
      if (currentTitle && entry.title === currentTitle) return false;
      if (entry.publishDate > todayStr) return false;
      return true;
    })
    .map((entry) => {
      let score = 0;

      // Strong boost for same sub-hub (e.g. /local/houston or /cars/genesis)
      if (subPrefix && entry.slug.startsWith(`${subPrefix}/`)) score += 8;
      // Boost for same top-level topic hub (e.g. /mlb, /mls, /blog)
      else if (rootPrefix && entry.slug.startsWith(`${rootPrefix}/`)) score += 5;

      // Tag overlap
      const entryTags = Array.isArray(entry.tags) ? entry.tags : [];
      let overlap = 0;
      for (const t of entryTags) {
        if (tagSet.has(t.toLowerCase().trim())) overlap++;
      }
      score += overlap * 4;

      // Category match
      if (catLower && entry.category.toLowerCase().trim() === catLower) score += 2;

      return { entry, score };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.entry.publishDate).getTime() - new Date(a.entry.publishDate).getTime();
    });

  // Start with any manually curated links, then fill up to `limit` with scored library entries
  const seenHrefs = new Set<string>();
  const cards: Array<{
    href: string;
    title: string;
    description?: string;
    category?: string;
    imageUrl?: string;
    publishDate?: string;
  }> = [];

  for (const m of manualItems) {
    const href = m.href ?? m.url;
    if (!href || href === '#' || seenHrefs.has(href)) continue;
    // Match against registry if available so manual links also get thumbnails/descriptions
    const match = allEntries.find((e) => e.slug === href);
    seenHrefs.add(href);
    cards.push({
      href,
      title: match?.title ?? m.title,
      description: match?.description,
      category: match?.category ?? m.category,
      imageUrl: toAbsoluteUrl(match?.imageUrl, SITE_CONFIG.url),
      publishDate: match?.publishDate,
    });
  }

  for (const { entry } of scored) {
    if (cards.length >= limit) break;
    if (seenHrefs.has(entry.slug)) continue;
    seenHrefs.add(entry.slug);
    cards.push({
      href: entry.slug,
      title: entry.title,
      description: entry.description,
      category: entry.category,
      imageUrl: toAbsoluteUrl(entry.imageUrl, SITE_CONFIG.url),
      publishDate: entry.publishDate,
    });
  }

  if (cards.length === 0) return null;

  return (
    <section
      aria-label="Connected Articles in the Objective Wire Library"
      className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="flex items-center justify-between gap-4 mb-5">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
            Objective Wire Library · Connected Entries
          </p>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-0.5">
            Continue Exploring Related Topics
          </h2>
        </div>
        <Link
          href="/index"
          className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline shrink-0"
        >
          Browse Full Index →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.slice(0, limit).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-md transition-all"
          >
            {item.imageUrl && (
              <div className="aspect-[1200/630] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-4">
              {item.category && (
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1.5">
                  {item.category}
                </span>
              )}
              <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 leading-snug line-clamp-2">
                {item.title}
              </h3>
              {item.description && (
                <p className="mt-1.5 text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
