import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getAllEntries, type ContentEntry } from '@/lib/registry-service';
import EngagementBar from '@/components/engagement/EngagementBar';
import { getPopularLeadSlug } from '@/lib/popular-lead';

export const metadata: Metadata = {
  title: 'oWire | Sports, Creators & Cars',
  description:
    'oWire covers the athletes, influencers, and creators everyone is talking about — World Cup, MrBeast, Logan Paul, Ferrari, MLB, and more.',
  alternates: { canonical: 'https://www.owire.org' },
  openGraph: {
    title: 'oWire | Sports, Creators & Cars',
    description: 'Daily coverage of athletes, influencers, and the moments everyone is talking about.',
    url: 'https://www.owire.org',
    siteName: 'oWire',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'oWire | Sports, Creators & Cars',
    description: 'Daily coverage of athletes, influencers, and the moments everyone is talking about.',
  },
};

export const revalidate = 3600;

// ── Article shape ─────────────────────────────────────────────────────────────

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
  featured?: boolean;
  exclusive?: boolean;
  tags?: string[];
};

// Strip unresolved template literal images (${...}) and wrong-domain images
function cleanImageUrl(url: string | null | undefined): string | undefined {
  if (!url) return undefined;
  if (url.includes('${') || url.includes('objectwire.com') || url.includes('objectwire.org/og')) return undefined;
  return url;
}

function fromRegistry(e: ContentEntry): Article {
  return {
    id: e.slug,
    title: e.title.replace(/\s*[|—–\-]\s*(ObjectWire|oWire|ZWire).*$/i, '').trim(),
    excerpt: e.description,
    href: e.slug,
    publishDate: e.publishDate,
    category: e.category,
    author: e.author,
    imageUrl: cleanImageUrl(e.imageUrl),
    imageAlt: e.imageAlt,
    featured: e.featured,
    tags: e.tags,
  };
}

// ── Category palette ──────────────────────────────────────────────────────────

const CAT_BG: Record<string, string> = {
  sports:           'bg-[#0f172a]',
  soccer:           'bg-[#15803d]',
  'world-cup':      'bg-[#15803d]',
  'premier-league': 'bg-[#4f46e5]',
  mls:              'bg-[#0f766e]',
  mlb:              'bg-[#b91c1c]',
  golf:             'bg-[#10b981]',
  creator:          'bg-[#b45309]',
  creators:         'bg-[#b45309]',
  youtube:          'bg-[#dc2626]',
  cars:             'bg-[#1e3a5f]',
};

const CAT_GRADIENT: Record<string, string> = {
  sports:           'from-[#0f172a] to-[#1e3a5f]',
  mlb:              'from-[#7f1d1d] to-[#b91c1c]',
  mls:              'from-[#0f766e] to-[#0d9488]',
  'world-cup':      'from-[#14532d] to-[#15803d]',
  creator:          'from-[#78350f] to-[#b45309]',
  youtube:          'from-[#7f1d1d] to-[#dc2626]',
  cars:             'from-[#0f172a] to-[#1e3a5f]',
};

function catBg(cat: string): string {
  return CAT_BG[cat.toLowerCase()] ?? 'bg-[#0f172a]';
}

function catGradient(cat: string): string {
  return CAT_GRADIENT[cat.toLowerCase()] ?? 'from-[#0f172a] to-[#1e3a5f]';
}

function timeAgo(dateStr: string): string {
  if (!dateStr) return '';
  const diff = Date.now() - new Date(dateStr).getTime();
  const hours = Math.floor(diff / 3_600_000);
  const days  = Math.floor(diff / 86_400_000);
  if (hours < 1)  return 'Just now';
  if (hours < 24) return `${hours}h ago`;
  if (days === 1) return 'Yesterday';
  if (days < 7)   return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// ── Section helpers ───────────────────────────────────────────────────────────

const BEATS = [
  { label: 'World Cup',      href: '/world-cup',       icon: '🏆' },
  { label: 'MLB',            href: '/mlb',             icon: '⚾' },
  { label: 'MLS',            href: '/mls',             icon: '🥅' },
  { label: 'Soccer',         href: '/soccer',          icon: '⚽' },
  { label: 'Golf',           href: '/golf',            icon: '⛳' },
  { label: 'YouTube',        href: '/youtube',         icon: '📺' },
  { label: 'Creators',       href: '/creator',         icon: '⭐' },
  { label: 'Cars',           href: '/cars',            icon: '🏎️' },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function CatLabel({ category, breaking }: { category: string; breaking?: boolean }) {
  if (breaking) {
    return (
      <span className="inline-flex items-center gap-1.5 text-[9px] font-black px-2.5 py-1 tracking-[.2em] uppercase bg-red-600 text-white rounded-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shrink-0" />
        BREAKING
      </span>
    );
  }
  return (
    <span className={`inline-block text-[9px] font-black px-2.5 py-1 tracking-[.15em] uppercase text-white rounded-sm ${catBg(category)}`}>
      {category.replace(/-/g, ' ').toUpperCase()}
    </span>
  );
}

function SectionRule({ label, href }: { label: string; href?: string }) {
  return (
    <div className="flex items-center gap-4 mb-6 mt-12 first:mt-0">
      <div className="h-1 w-8 bg-[#b45309] shrink-0 rounded-full" />
      <h2 className="text-xs font-black tracking-[.25em] text-[#0f172a] uppercase whitespace-nowrap">{label}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-[#0f172a]/20 to-transparent" />
      {href && (
        <Link href={href} className="text-[10px] font-black tracking-widest uppercase text-[#b45309] hover:text-[#0f172a] transition-colors whitespace-nowrap bg-[#b45309]/10 hover:bg-[#b45309]/20 px-3 py-1.5 rounded-full">
          See All →
        </Link>
      )}
    </div>
  );
}

// Card with image or gradient fallback — never renders a broken img
function ArticleCard({ article, size = 'md' }: { article: Article; size?: 'lg' | 'md' | 'sm' }) {
  const aspectClass = size === 'lg' ? 'aspect-[4/3] sm:aspect-[16/9] lg:h-72' : size === 'sm' ? 'aspect-[16/9]' : 'aspect-[16/9]';
  return (
    <Link
      href={article.href}
      className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#b45309]/30 transition-all duration-300 overflow-hidden transform hover:-translate-y-0.5"
    >
      <div className={`relative w-full ${aspectClass} overflow-hidden shrink-0`}>
        {article.imageUrl ? (
          <Image
            src={article.imageUrl}
            alt={article.imageAlt ?? article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${catGradient(article.category)} flex items-center justify-center`}>
            <span className="text-white/20 font-black text-4xl tracking-tighter">oW</span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="mb-2">
          <CatLabel category={article.category} breaking={article.breaking} />
        </div>
        <h3 className={`font-serif font-black leading-snug text-[#0f172a] group-hover:text-[#b45309] transition-colors line-clamp-3 ${size === 'lg' ? 'text-xl md:text-2xl' : 'text-base'}`}>
          {article.title}
        </h3>
        {article.excerpt && size !== 'sm' && (
          <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mt-1.5 flex-1">
            {article.excerpt}
          </p>
        )}
        <p className="text-[10px] text-gray-400 font-mono mt-3 pt-2 border-t border-gray-100">
          {article.author} · {timeAgo(article.publishDate)}
        </p>
      </div>
    </Link>
  );
}

// Compact headline row (no image)
function HeadlineRow({ article }: { article: Article }) {
  return (
    <Link
      href={article.href}
      className="group flex gap-3 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 -mx-2 px-2 transition-colors rounded"
    >
      {article.imageUrl && (
        <div className="relative w-16 h-12 rounded overflow-hidden shrink-0">
          <Image
            src={article.imageUrl}
            alt={article.imageAlt ?? article.title}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <CatLabel category={article.category} breaking={article.breaking} />
        <h4 className="font-serif text-sm font-black leading-snug mt-0.5 group-hover:underline line-clamp-2 text-[#0f172a]">
          {article.title}
        </h4>
        <p className="text-[10px] text-gray-400 font-mono mt-0.5">
          {article.author} · {timeAgo(article.publishDate)}
        </p>
      </div>
    </Link>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function HomePage() {
  const contentRegistry = await getAllEntries();

  // Filter to real article pages only (2+ path segments, no dynamic routes, no meta/support)
  const SKIP_CATS = new Set(['meta', 'support', 'legal', 'services', 'service']);
  const allArticles: Article[] = contentRegistry
    .filter((e) => {
      const parts = e.slug.split('/').filter(Boolean);
      return (
        parts.length >= 2 &&
        !e.slug.includes('[') &&
        !SKIP_CATS.has(e.category.toLowerCase())
      );
    })
    .map(fromRegistry)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  // GA4 popular lead
  let popularLeadSlug: string | null = null;
  try { popularLeadSlug = await getPopularLeadSlug(); } catch { /* graceful */ }

  let isMostRead = false;
  if (popularLeadSlug) {
    const idx = allArticles.findIndex((a) => a.href === popularLeadSlug);
    if (idx > 0) { const [p] = allArticles.splice(idx, 1); allArticles.unshift(p); isMostRead = true; }
    else if (idx === 0) { isMostRead = true; }
  }

  // Section splits — slugs are the source of truth for routing
  const isSports = (a: Article) =>
    ['sports', 'mlb', 'mls', 'soccer', 'golf', 'world-cup', 'premier-league'].includes(a.category.toLowerCase()) ||
    ['/soccer', '/world-cup', '/mls', '/premier-league', '/mlb', '/golf'].some((p) => a.href.startsWith(p));

  const isCreator = (a: Article) =>
    a.category.toLowerCase() === 'creator' || a.href.startsWith('/creator') || a.href.startsWith('/influencer');

  const isYouTube = (a: Article) =>
    a.category.toLowerCase() === 'youtube' || a.href.startsWith('/youtube');

  const latest   = allArticles.slice(0, 9);
  const sports   = allArticles.filter(isSports).slice(0, 6);
  const creators = allArticles.filter(isCreator).slice(0, 8);
  const youtube  = allArticles.filter(isYouTube).slice(0, 6);

  // Remaining articles not in any section (for headlines)
  const usedHrefs = new Set([
    ...latest.map((a) => a.href),
    ...sports.map((a) => a.href),
    ...creators.map((a) => a.href),
    ...youtube.map((a) => a.href),
  ]);
  const remaining = allArticles.filter((a) => !usedHrefs.has(a.href));

  const [lead, second, third] = latest;
  const editionDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">

        {/* ── DATE RULE ─────────────────────────────────────────────────────── */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gray-300" />
          <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest whitespace-nowrap">{editionDate}</span>
          <div className="h-px flex-1 bg-gray-300" />
        </div>

        {/* ── BEAT NAV ──────────────────────────────────────────────────────── */}
        <nav aria-label="Coverage beats" className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
          {BEATS.map((b) => (
            <Link
              key={b.href}
              href={b.href}
              className="flex items-center gap-2 whitespace-nowrap px-4 py-2 bg-white rounded-full border border-gray-200 hover:border-[#b45309] hover:text-[#b45309] text-sm font-bold text-[#0f172a] transition-all shadow-sm shrink-0"
            >
              <span>{b.icon}</span>
              <span>{b.label}</span>
            </Link>
          ))}
        </nav>

        {/* ── HERO: LEAD + 2 SECONDARY ──────────────────────────────────────── */}
        {lead && (
          <section className="border-b-2 border-black pb-8 mb-0" aria-label="Featured stories">
            <div className="grid lg:grid-cols-5 gap-6">

              {/* Hero — left, 3/5 */}
              <div className="lg:col-span-3 flex flex-col">
                <Link href={lead.href} className="relative overflow-hidden rounded-xl shadow-lg group block h-[340px] sm:h-[440px] lg:h-[520px]">
                  {lead.imageUrl ? (
                    <Image
                      src={lead.imageUrl}
                      alt={lead.imageAlt ?? lead.title}
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${catGradient(lead.category)}`} />
                  )}
                  {/* Orange tint over image */}
                  <div className="absolute inset-0 bg-[#b45309]/20 mix-blend-multiply" />
                  {/* Bottom fade for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <CatLabel category={lead.category} breaking={lead.breaking} />
                      {isMostRead && (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-black px-2.5 py-1 tracking-[.2em] uppercase bg-[#b45309] text-white rounded-sm">
                          🔥 Most Read
                        </span>
                      )}
                      {lead.exclusive && (
                        <span className="inline-block text-[9px] font-black px-2 py-0.5 tracking-widest uppercase border border-[#b45309] text-[#b45309] rounded-sm">
                          EXCLUSIVE
                        </span>
                      )}
                    </div>
                    {/* Yellow highlight on headline text */}
                    <h2 className="font-serif text-2xl sm:text-4xl font-black leading-tight mb-3">
                      {lead.title.split(' ').map((word, i) => (
                        <span key={i} className="bg-yellow-300 text-[#0f172a] px-0.5 mr-1 inline group-hover:bg-[#b45309] group-hover:text-white transition-colors duration-300 leading-snug">
                          {word}
                        </span>
                      ))}
                    </h2>
                    {lead.excerpt && (
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 mb-4 hidden sm:block">
                        {lead.excerpt}
                      </p>
                    )}
                    <p className="text-xs text-gray-400 font-mono">
                      <span className="text-white font-bold">{lead.author}</span>
                      <span className="mx-1.5 opacity-50">·</span>
                      {timeAgo(lead.publishDate)}
                    </p>
                  </div>
                </Link>
                <div className="mt-3 pt-2 border-t border-gray-200/60">
                  <EngagementBar slug={lead.href} title={lead.title} url={lead.href} image={lead.imageUrl} category={lead.category} />
                </div>
              </div>

              {/* Right column — 2 stacked, 2/5 */}
              <div className="lg:col-span-2 flex flex-col gap-5">
                {[second, third].filter(Boolean).map((a) => a && (
                  <ArticleCard key={a.id} article={a} size="md" />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── LATEST STORIES ────────────────────────────────────────────────── */}
        {latest.length > 3 && (
          <section aria-label="Latest stories">
            <SectionRule label="Latest Stories" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {latest.slice(3).map((a) => (
                <ArticleCard key={a.id} article={a} size="sm" />
              ))}
            </div>
          </section>
        )}

        {/* ── SPORTS ────────────────────────────────────────────────────────── */}
        {sports.length > 0 && (
          <section aria-label="Sports">
            <SectionRule label="Sports" href="/world-cup" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {sports.slice(0, 3).map((a) => (
                <ArticleCard key={a.id} article={a} size="md" />
              ))}
            </div>
            {sports.length > 3 && (
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                {sports.slice(3).map((a) => <HeadlineRow key={a.id} article={a} />)}
              </div>
            )}
          </section>
        )}

        {/* ── CREATORS & YOUTUBE ────────────────────────────────────────────── */}
        {(creators.length > 0 || youtube.length > 0) && (
          <section aria-label="Creators and YouTube">
            <SectionRule label="Creators & YouTube" href="/creator" />
            <div className="grid lg:grid-cols-12 gap-6">

              {/* Creators — 8-col */}
              {creators.length > 0 && (
                <div className="lg:col-span-8">
                  <p className="text-[10px] font-black tracking-widest uppercase text-[#b45309] mb-3 flex items-center gap-2">
                    <Link href="/creator" className="hover:underline">Creators</Link>
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {creators.slice(0, 4).map((a) => (
                      <ArticleCard key={a.id} article={a} size="sm" />
                    ))}
                  </div>
                  {creators.length > 4 && (
                    <div className="mt-4 bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                      {creators.slice(4, 8).map((a) => <HeadlineRow key={a.id} article={a} />)}
                    </div>
                  )}
                </div>
              )}

              {/* YouTube — 4-col sidebar */}
              {youtube.length > 0 && (
                <div className="lg:col-span-4">
                  <p className="text-[10px] font-black tracking-widest uppercase text-red-600 mb-3 flex items-center gap-2">
                    <Link href="/youtube" className="hover:underline">YouTube</Link>
                  </p>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                    {youtube.slice(0, 8).map((a) => <HeadlineRow key={a.id} article={a} />)}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ── MORE STORIES ──────────────────────────────────────────────────── */}
        {remaining.length > 0 && (
          <section aria-label="More stories">
            <SectionRule label="More Stories" />
            <div className="grid lg:grid-cols-2 gap-x-10">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                {remaining.slice(0, 10).map((a) => <HeadlineRow key={a.id} article={a} />)}
              </div>
              <div>
                {/* Coverage beats sidebar */}
                <p className="text-[10px] font-black tracking-[.25em] uppercase border-b-2 border-[#1e3a5f] text-[#1e3a5f] pb-2 mb-3">
                  Coverage Beats
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {BEATS.map((b) => (
                    <Link
                      key={b.href}
                      href={b.href}
                      className="flex items-center gap-3 py-3 px-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-[#b45309] hover:shadow-md transition-all duration-200 group"
                    >
                      <span className="text-lg shrink-0">{b.icon}</span>
                      <span className="text-sm font-black text-[#0f172a] group-hover:text-[#b45309] transition-colors leading-none">{b.label}</span>
                      <span className="ml-auto text-gray-300 group-hover:text-[#b45309] transition-colors text-xs">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── FOOTER STRIP ──────────────────────────────────────────────────── */}
        <section className="border-t-2 border-b-2 border-black py-6 text-center mt-12">
          <p className="text-[9px] tracking-[.4em] uppercase font-black text-gray-500 mb-2">About oWire</p>
          <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed mb-4">
            Daily coverage of athletes, influencers, and the moments everyone is talking about. Sports, Creators, Cars. No filter.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 text-[10px] tracking-widest uppercase font-bold text-gray-500">
            {[
              { href: '/about',               label: 'About' },
              { href: '/editorial-standards', label: 'Editorial Standards' },
              { href: '/corrections',         label: 'Corrections' },
              { href: '/authors',             label: 'Authors' },
              { href: '/site-index',          label: 'Site Index' },
              { href: '/rss.xml',             label: 'RSS' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="hover:text-black hover:underline transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
