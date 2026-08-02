import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getAllEntries, type ContentEntry } from '@/lib/registry-service';
import { getPopularLeadSlug } from '@/lib/popular-lead';

export const metadata: Metadata = {
  title: 'News | Sports, Creators & Cars | oWire',
  description:
    'Latest news from oWire. Sports, creators, cars, and culture. World Cup, MLB, MrBeast, Logan Paul, Ferrari, and more.',
  alternates: { canonical: 'https://www.objectivewire.com/news' },
  openGraph: {
    title: 'News | Sports, Creators & Cars | oWire',
    description: 'Daily coverage of athletes, influencers, and the moments everyone is talking about.',
    url: 'https://www.objectivewire.com/news',
    siteName: 'oWire',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News | Sports, Creators & Cars | oWire',
    description: 'Daily coverage of athletes, influencers, and the moments everyone is talking about.',
  },
};

export const revalidate = 3600;

// ── Types ──────────────────────────────────────────────────────────────────────

type Article = {
  id: string;
  title: string;
  excerpt?: string;
  href: string;
  publishDate: string;
  category: string;
  author: string;
  imageUrl?: string;
  imageAlt?: string;
  breaking?: boolean;
  tags?: string[];
};

// ── Helpers ────────────────────────────────────────────────────────────────────

function cleanImageUrl(url: string | null | undefined): string | undefined {
  if (!url) return undefined;
  if (
    url.includes('${') ||
    url.includes('objectwire.com') ||
    url.includes('/api/og')
  ) return undefined;
  return url;
}

const UNSPLASH_FALLBACK: Record<string, string> = {
  mlb:              'https://images.unsplash.com/photo-1605901309584-818e25452571?w=800&h=450&fit=crop',
  mls:              'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop',
  soccer:           'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop',
  'world-cup':      'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=800&h=450&fit=crop',
  'premier-league': 'https://images.unsplash.com/photo-1547149617-609fafa00a6b?w=800&h=450&fit=crop',
  sports:           'https://images.unsplash.com/photo-1547149617-609fafa00a6b?w=800&h=450&fit=crop',
  golf:             'https://images.unsplash.com/photo-1485282826741-1b5d56f7e268?w=800&h=450&fit=crop',
  creator:          'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=450&fit=crop',
  youtube:          'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=450&fit=crop',
  cars:             'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&h=450&fit=crop',
  entertainment:    'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=800&h=450&fit=crop',
  news:             'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=450&fit=crop',
};

function unsplashFallback(category: string): string {
  return UNSPLASH_FALLBACK[category.toLowerCase()] ?? 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=450&fit=crop';
}

function fromRegistry(e: ContentEntry): Article {
  const cleaned = cleanImageUrl(e.imageUrl);
  return {
    id: e.slug,
    title: e.title.replace(/\s*[|]\s*(ObjectWire|oWire|ZWire).*$/i, '').trim(),
    excerpt: e.description,
    href: e.slug,
    publishDate: e.publishDate,
    category: e.category,
    author: e.author,
    imageUrl: cleaned ?? unsplashFallback(e.category),
    imageAlt: e.imageAlt ?? e.title,
    tags: e.tags,
  };
}

const CAT_COLORS: Record<string, string> = {
  sports:           '#1d4ed8',
  soccer:           '#15803d',
  'world-cup':      '#15803d',
  'premier-league': '#4f46e5',
  mls:              '#0f766e',
  mlb:              '#b91c1c',
  golf:             '#047857',
  creator:          '#b45309',
  creators:         '#b45309',
  youtube:          '#dc2626',
  cars:             '#1e3a5f',
  entertainment:    '#7c3aed',
  culture:          '#be185d',
  news:             '#374151',
};

function catColor(cat: string): string {
  return CAT_COLORS[cat.toLowerCase()] ?? '#111827';
}

function timeAgo(dateStr: string): string {
  if (!dateStr || dateStr.startsWith('2020')) return '';
  const diff = Date.now() - new Date(dateStr).getTime();
  const hours = Math.floor(diff / 3_600_000);
  const days  = Math.floor(diff / 86_400_000);
  if (hours < 1)  return 'Just now';
  if (hours < 24) return `${hours}h ago`;
  if (days === 1) return 'Yesterday';
  if (days < 7)   return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// ── Newspaper Sub-components ───────────────────────────────────────────────────

function SectionFlag({ label, href, color = '#111827' }: { label: string; href?: string; color?: string }) {
  return (
    <div className="flex items-center gap-3 mt-10 mb-5 first:mt-0">
      <div className="h-[3px] w-8 shrink-0" style={{ backgroundColor: color }} />
      <h2 className="text-[11px] font-black uppercase tracking-[0.22em] whitespace-nowrap" style={{ color }}>
        {label}
      </h2>
      <div className="h-px flex-1 bg-gray-200" />
      {href && (
        <Link
          href={href}
          className="text-[9px] font-black uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors whitespace-nowrap"
        >
          See all &rarr;
        </Link>
      )}
    </div>
  );
}

function ArticleCard({ article, size = 'md', priority = false }: { article: Article; size?: 'lg' | 'md' | 'sm'; priority?: boolean }) {
  const color = catColor(article.category);
  const ago = timeAgo(article.publishDate);

  return (
    <Link href={article.href} className="group flex flex-col border-b border-gray-100 pb-5 last:border-0 last:pb-0">
      {article.imageUrl && (
        <div className={`relative w-full overflow-hidden bg-gray-100 mb-3 ${size === 'lg' ? 'aspect-[16/9]' : 'aspect-[16/9]'}`}>
          <Image
            src={article.imageUrl}
            alt={article.imageAlt ?? article.title}
            fill
            priority={priority}
            loading={priority ? undefined : 'lazy'}
            className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
          {article.breaking && (
            <div className="absolute top-2 left-2 flex items-center gap-1 bg-red-600 text-white text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shrink-0" />
              Breaking
            </div>
          )}
        </div>
      )}
      <span
        className="text-[8px] font-black uppercase tracking-[0.15em] px-1.5 py-[3px] text-white self-start mb-2"
        style={{ backgroundColor: color }}
      >
        {article.category}
      </span>
      <h3
        className={`font-serif font-black text-gray-900 leading-snug group-hover:text-amber-700 transition-colors mb-2 ${size === 'lg' ? 'text-xl md:text-2xl' : 'text-[14px] md:text-[15px]'} line-clamp-3`}
      >
        {article.title}
      </h3>
      {article.excerpt && size === 'lg' && (
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3 font-serif flex-1">
          {article.excerpt}
        </p>
      )}
      <p className="text-[9px] font-mono uppercase tracking-widest text-gray-400 mt-auto">
        {article.author}{ago ? ` \u00b7 ${ago}` : ''}
      </p>
    </Link>
  );
}

function HeadlineRow({ article }: { article: Article }) {
  const color = catColor(article.category);
  const ago = timeAgo(article.publishDate);

  return (
    <Link
      href={article.href}
      className="group flex items-start gap-3 py-3 border-b border-gray-100 last:border-0 hover:bg-amber-50 transition-colors -mx-2 px-2 rounded"
    >
      {article.imageUrl && (
        <div className="relative w-[68px] h-[48px] overflow-hidden shrink-0 bg-gray-100">
          <Image
            src={article.imageUrl}
            alt={article.imageAlt ?? article.title}
            fill
            loading="lazy"
            className="object-cover"
            sizes="68px"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <span
          className="text-[8px] font-black uppercase tracking-[0.12em] px-1.5 py-[2px] text-white"
          style={{ backgroundColor: color }}
        >
          {article.category}
        </span>
        <h4 className="font-serif font-black text-gray-900 text-[13px] leading-snug mt-0.5 group-hover:text-amber-700 transition-colors line-clamp-2">
          {article.title}
        </h4>
        <p className="text-[9px] font-mono uppercase tracking-widest text-gray-400 mt-0.5">
          {article.author}{ago ? ` \u00b7 ${ago}` : ''}
        </p>
      </div>
    </Link>
  );
}

// ── Beat nav items ─────────────────────────────────────────────────────────────

const BEATS = [
  { label: 'World Cup', href: '/world-cup', color: '#15803d' },
  { label: 'MLB',       href: '/mlb',       color: '#b91c1c' },
  { label: 'MLS',       href: '/mls',       color: '#0f766e' },
  { label: 'Soccer',    href: '/soccer',    color: '#166534' },
  { label: 'Golf',      href: '/golf',      color: '#047857' },
  { label: 'YouTube',   href: '/youtube',   color: '#dc2626' },
  { label: 'Creators',  href: '/creator',   color: '#b45309' },
  { label: 'Cars',      href: '/cars',      color: '#1e3a5f' },
];

// ── Page ───────────────────────────────────────────────────────────────────────

export default async function NewsPage() {
  const contentRegistry = await getAllEntries();

  const SKIP_CATS = new Set(['meta', 'support', 'legal', 'services', 'service']);
  const allArticles: Article[] = contentRegistry
    .filter((e) => {
      const parts = e.slug.split('/').filter(Boolean);
      return (
        parts.length >= 2 &&
        !e.slug.includes('[') &&
        !SKIP_CATS.has(e.category.toLowerCase()) &&
        !e.publishDate.startsWith('2020')
      );
    })
    .map(fromRegistry)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  // Promote GA4 popular article to front
  try {
    const popularSlug = await getPopularLeadSlug();
    if (popularSlug) {
      const idx = allArticles.findIndex((a) => a.href === popularSlug);
      if (idx > 0) { const [p] = allArticles.splice(idx, 1); allArticles.unshift(p); }
    }
  } catch { /* graceful */ }

  const isSports  = (a: Article) =>
    ['sports', 'mlb', 'mls', 'soccer', 'golf', 'world-cup', 'premier-league'].includes(a.category.toLowerCase()) ||
    ['/soccer', '/world-cup', '/mls', '/premier-league', '/mlb', '/golf'].some((p) => a.href.startsWith(p));
  const isCreator = (a: Article) =>
    a.category.toLowerCase() === 'creator' || a.href.startsWith('/creator') || a.href.startsWith('/influencer');
  const isYouTube = (a: Article) =>
    a.category.toLowerCase() === 'youtube' || a.href.startsWith('/youtube');
  const isCars    = (a: Article) =>
    a.category.toLowerCase() === 'cars' || a.href.startsWith('/cars');

  const lead     = allArticles[0];
  const nextUp   = allArticles.slice(1, 5);
  const sports   = allArticles.filter(isSports).slice(0, 9);
  const creators = allArticles.filter(isCreator).slice(0, 8);
  const youtube  = allArticles.filter(isYouTube).slice(0, 6);
  const cars     = allArticles.filter(isCars).slice(0, 4);

  const usedHrefs = new Set([lead, ...nextUp, ...sports, ...creators, ...youtube, ...cars].map((a) => a.href));
  const remaining = allArticles.filter((a) => !usedHrefs.has(a.href));

  const editionDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div className="bg-[#F8F7F2] min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">

        {/* ── DATE + BEAT NAV ──────────────────────────────────────────── */}
        <div className="border-b-[3px] border-gray-900 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest whitespace-nowrap">
              {editionDate}
            </span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>
          <nav aria-label="Coverage beats" className="flex gap-0 overflow-x-auto scrollbar-hide border-t border-gray-200">
            {BEATS.map((b) => (
              <Link
                key={b.href}
                href={b.href}
                className="text-[10px] font-black uppercase tracking-[0.12em] px-4 md:px-5 py-3 text-gray-600 hover:text-gray-900 hover:bg-white border-r border-gray-200 first:border-l whitespace-nowrap transition-colors shrink-0"
              >
                {b.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ── LEAD + NEXT UP ───────────────────────────────────────────── */}
        {lead && (
          <section aria-label="Top story" className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 border-b-2 border-gray-900 mb-2">
            {/* Lead */}
            <div className="lg:col-span-8 lg:border-r lg:border-gray-200 lg:pr-8">
              {(() => {
                const img = lead.imageUrl;
                const color = catColor(lead.category);
                const ago = timeAgo(lead.publishDate);
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    <Link href={lead.href} className="group lg:col-span-3 block overflow-hidden">
                      {img ? (
                        <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
                          <Image src={img} alt={lead.imageAlt ?? lead.title} fill priority
                            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                            sizes="(max-width: 1024px) 100vw, 55vw"
                          />
                        </div>
                      ) : (
                        <div className="w-full aspect-[16/9] bg-gray-100 flex items-center justify-center">
                          <span className="font-serif font-black text-8xl opacity-10 tracking-tighter" style={{ color }}>oW</span>
                        </div>
                      )}
                    </Link>
                    <div className="lg:col-span-2 lg:pl-6 pt-4 lg:pt-0 flex flex-col">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] px-2 py-[3px] text-white self-start mb-3" style={{ backgroundColor: color }}>
                        {lead.category}
                      </span>
                      <Link href={lead.href} className="group mb-3 flex-1">
                        <h2 className="font-serif font-black text-gray-900 text-2xl md:text-3xl leading-tight group-hover:text-amber-700 transition-colors">
                          {lead.title}
                        </h2>
                      </Link>
                      {lead.excerpt && (
                        <p className="text-[15px] text-gray-600 leading-relaxed line-clamp-4 font-serif mb-4">
                          {lead.excerpt}
                        </p>
                      )}
                      <div className="border-t border-gray-200 pt-3 mt-auto">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
                          {lead.author}{ago ? ` \u00b7 ${ago}` : ''}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
            {/* Stack */}
            <div className="lg:col-span-4 divide-y divide-gray-100">
              {nextUp.map((a) => (
                <ArticleCard key={a.id} article={a} size="sm" />
              ))}
            </div>
          </section>
        )}

        {/* ── SPORTS ───────────────────────────────────────────────────── */}
        {sports.length > 0 && (
          <section aria-label="Sports">
            <SectionFlag label="Sports" href="/world-cup" color="#1d4ed8" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-5">
                <ArticleCard article={sports[0]} size="lg" priority />
              </div>
              <div className="lg:col-span-4 grid grid-cols-2 gap-5 content-start">
                {sports.slice(1, 5).map((a) => (
                  <ArticleCard key={a.id} article={a} size="sm" />
                ))}
              </div>
              {sports.length > 5 && (
                <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l lg:border-gray-200 lg:pl-6 pt-4 lg:pt-0">
                  {sports.slice(5).map((a) => (
                    <HeadlineRow key={a.id} article={a} />
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ── CREATORS | YOUTUBE ───────────────────────────────────────── */}
        {(creators.length > 0 || youtube.length > 0) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-gray-900">

            {creators.length > 0 && (
              <section aria-label="Creators" className="pb-8 lg:pb-0 lg:pr-8">
                <SectionFlag label="Creators" href="/creator" color="#b45309" />
                <div className="grid grid-cols-2 gap-5 mb-4">
                  {creators.slice(0, 2).map((a, i) => (
                    <ArticleCard key={a.id} article={a} size="md" priority={i === 0} />
                  ))}
                </div>
                <div>
                  {creators.slice(2, 8).map((a) => (
                    <HeadlineRow key={a.id} article={a} />
                  ))}
                </div>
              </section>
            )}

            {youtube.length > 0 && (
              <section aria-label="YouTube" className="pt-8 lg:pt-0 lg:pl-8">
                <SectionFlag label="YouTube" href="/youtube" color="#dc2626" />
                <div className="grid grid-cols-2 gap-5 mb-4">
                  {youtube.slice(0, 2).map((a) => (
                    <ArticleCard key={a.id} article={a} size="md" />
                  ))}
                </div>
                <div>
                  {youtube.slice(2).map((a) => (
                    <HeadlineRow key={a.id} article={a} />
                  ))}
                </div>
              </section>
            )}

          </div>
        )}

        {/* ── CARS ─────────────────────────────────────────────────────── */}
        {cars.length > 0 && (
          <section aria-label="Cars" className="border-t-2 border-gray-900 pt-0">
            <SectionFlag label="Cars &amp; Supercars" href="/cars" color="#1e3a5f" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {cars.map((a, i) => (
                <ArticleCard key={a.id} article={a} size="sm" priority={i === 0} />
              ))}
            </div>
          </section>
        )}

        {/* ── MORE STORIES ─────────────────────────────────────────────── */}
        {remaining.length > 0 && (
          <section aria-label="More stories" className="border-t-2 border-gray-900 pt-0">
            <SectionFlag label="More Stories" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                  {remaining.slice(0, 6).map((a) => (
                    <ArticleCard key={a.id} article={a} size="sm" />
                  ))}
                </div>
                {remaining.length > 6 && (
                  <div className="mt-5 divide-y divide-gray-100">
                    {remaining.slice(6, 16).map((a) => (
                      <HeadlineRow key={a.id} article={a} />
                    ))}
                  </div>
                )}
              </div>
              {/* Coverage beats sidebar */}
              <aside className="lg:col-span-4 lg:border-l lg:border-gray-200 lg:pl-8">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-900 border-b-2 border-gray-900 pb-2 mb-4">
                  Coverage Beats
                </p>
                <div className="space-y-1">
                  {BEATS.map((b) => (
                    <Link
                      key={b.href}
                      href={b.href}
                      className="flex items-center justify-between py-2.5 px-3 hover:bg-white border-b border-gray-100 transition-colors group"
                    >
                      <span
                        className="text-[11px] font-black uppercase tracking-[0.12em] group-hover:text-amber-700 transition-colors text-gray-700"
                      >
                        {b.label}
                      </span>
                      <span className="text-gray-400 group-hover:text-amber-700 text-xs transition-colors">&rarr;</span>
                    </Link>
                  ))}
                </div>
              </aside>
            </div>
          </section>
        )}

        {/* ── FOOTER STRIP ─────────────────────────────────────────────── */}
        <div className="border-t-[3px] border-gray-900 py-6 mt-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="font-serif font-black text-xl text-gray-900 block">Objective Wire</span>
              <span className="text-[9px] font-mono uppercase tracking-widest text-gray-400 mt-0.5 block">
                Accuracy Over Speed &middot; Primary Sources Only
              </span>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1" aria-label="Footer links">
              {[
                { href: '/about',               label: 'About' },
                { href: '/editorial-standards', label: 'Editorial Standards' },
                { href: '/corrections',         label: 'Corrections' },
                { href: '/authors',             label: 'Authors' },
                { href: '/site-index',          label: 'Site Index' },
                { href: '/rss.xml',             label: 'RSS' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="text-[10px] font-mono uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

      </main>
    </div>
  );
}
