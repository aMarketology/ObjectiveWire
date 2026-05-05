import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getAllEntries, type ContentEntry } from '@/lib/registry-service';
import EngagementBar from '@/components/engagement/EngagementBar';
import HeadlineList from '@/components/discovery/HeadlineList';
import { getPopularLeadSlug } from '@/lib/popular-lead';

export const metadata: Metadata = {
  title: 'oWire | Sports & Creator Culture, No Filter',
  description:
    'oWire covers the athletes, influencers, and creators everyone is talking about — World Cup, F1, the Olympics, MrBeast, Logan Paul, and more.',
  alternates: { canonical: 'https://www.objectwire.org' },
  openGraph: {
    title: 'oWire | Sports & Creator Culture',
    description: 'Daily coverage of athletes, influencers, and the moments everyone is talking about.',
    url: 'https://www.objectwire.org',
    siteName: 'oWire',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'oWire | Sports & Creator Culture',
    description: 'Daily coverage of athletes, influencers, and the moments everyone is talking about.',
  },
};

export const revalidate = 3600;

// ── Unified article shape ─────────────────────────────────────────────────────

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

function fromRegistry(e: ContentEntry): Article {
  return {
    id: e.slug,
    title: e.title.replace(/\s*[|—–\-]\s*ObjectWire.*$/i, ''),
    excerpt: e.description,
    href: e.slug,
    publishDate: e.publishDate,
    category: e.category,
    author: e.author,
    imageUrl: e.imageUrl,
    imageAlt: e.imageAlt,
    featured: e.featured,
    tags: e.tags,
  };
}

// ── Helpers ───────────────────────────────────────────────────────────────────

// oWire palette — navy/steel for sports, amber for creators, accent splits
// across hubs. Matches CreatorArticle hero gradient (#0f172a → #1e3a5f → #b45309).
const CAT_BG: Record<string, string> = {
  // Sports
  sports:            'bg-[#0f172a]',
  soccer:            'bg-[#15803d]',
  'world-cup':       'bg-[#15803d]',
  'premier-league':  'bg-[#4f46e5]',
  mls:               'bg-[#0f766e]',
  mlb:               'bg-[#b91c1c]',
  golf:              'bg-[#10b981]',
  // Creators / Culture
  creator:           'bg-[#b45309]',
  creators:          'bg-[#b45309]',
  youtube:           'bg-[#dc2626]',
  cars:              'bg-[#1e3a5f]',
};

function catBg(cat: string): string {
  return CAT_BG[cat.toLowerCase()] ?? 'bg-[#0f172a]';
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

// ── Section navigation beats ──────────────────────────────────────────────────

const BEATS = [
  { label: 'Soccer',         href: '/soccer',           icon: '⚽' },
  { label: 'World Cup',      href: '/world-cup',        icon: '🏆' },
  { label: 'MLS',            href: '/mls',              icon: '🥅' },
  { label: 'Premier League', href: '/premier-league',   icon: '🦁' },
  { label: 'MLB',            href: '/mlb',              icon: '⚾' },
  { label: 'Golf',           href: '/golf',             icon: '⛳' },
  { label: 'YouTube',        href: '/youtube',          icon: '📺' },
  { label: 'Creators',       href: '/creator',          icon: '⭐' },
  { label: 'Cars',           href: '/cars',             icon: '🏎️' },
];

// ── Reusable sub-components ───────────────────────────────────────────────────

function CatLabel({ category, breaking }: { category: string; breaking?: boolean }) {
  if (breaking) {
    return (
      <span className="inline-flex items-center gap-1.5 text-[9px] font-black px-2.5 py-1 tracking-[.2em] uppercase bg-red-600 text-white rounded-sm shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shrink-0" />
        BREAKING
      </span>
    );
  }
  return (
    <span className={`inline-block text-[9px] font-black px-2.5 py-1 tracking-[.15em] uppercase text-white rounded-sm shadow-sm ${catBg(category)}`}>
      {category.replace(/-/g, ' ').toUpperCase()}
    </span>
  );
}

function SectionRule({ label, href }: { label: string; href?: string }) {
  return (
    <div className="flex items-center gap-4 mb-8 mt-14 first:mt-0">
      <div className="h-1 w-8 bg-[#b45309] shrink-0 rounded-full" />
      <h2 className="text-xs font-black tracking-[.25em] text-[#0f172a] uppercase whitespace-nowrap">{label}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-[#0f172a]/20 to-transparent" />
      {href && (
        <Link href={href} className="text-[10px] font-black tracking-widest uppercase text-[#b45309] hover:text-[#0f172a] transition-colors whitespace-nowrap bg-[#b45309]/10 hover:bg-[#b45309]/20 px-3 py-1.5 rounded-full">
          More →
        </Link>
      )}
    </div>
  );
}

// Compact headline list row
function HeadlineRow({ article }: { article: Article }) {
  return (
    <Link href={article.href} className="group flex gap-2 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 -mx-2 px-2 transition-colors">
      <div className="flex-1 min-w-0">
        <CatLabel category={article.category} breaking={article.breaking} />
        <h4 className="font-serif text-sm font-black leading-snug mt-1 group-hover:underline line-clamp-2">
          {article.title}
        </h4>
        <p className="text-[10px] text-gray-500 font-mono mt-1">
          {article.author} · {timeAgo(article.publishDate)}
        </p>
      </div>
    </Link>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function HomePage() {
  // Single Supabase call: content_registry holds all article metadata synced at build time.
  // Article bodies live in code (page.tsx files) — no per-request Supabase body fetches.
  const contentRegistry = await getAllEntries();

  // Content registry: exclude hub/index pages (< 2 path segments) and dynamic routes
  const filtered = contentRegistry
    .filter((e) => e.slug.split('/').filter(Boolean).length >= 2 && !e.slug.includes('['))
    .filter((e) => !['services', 'service'].includes(e.category.toLowerCase()))
    .map(fromRegistry)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  // GA4: promote most-read article to lead slot
  let popularLeadSlug: string | null = null;
  try { popularLeadSlug = await getPopularLeadSlug(); } catch { /* graceful fallback */ }

  let isMostRead = false;
  if (popularLeadSlug) {
    const popularIdx = filtered.findIndex((a) => a.href === popularLeadSlug);
    if (popularIdx > 0) {
      // Move it to front without mutating original sort
      const [popular] = filtered.splice(popularIdx, 1);
      filtered.unshift(popular);
      isMostRead = true;
    } else if (popularIdx === 0) {
      isMostRead = true;
    }
  }

  const [lead, second, third, ...rest] = filtered;
  const trendingCreators = filtered.filter(a => a.href.includes('/creator') || a.href.includes('/influencer') || a.category.toLowerCase() === 'creator' || a.category.toLowerCase() === 'influencer');
  const headlineArticles = rest.filter(a => !trendingCreators.includes(a)).slice(0, 30);
  const editionDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-[#faf9f6]">

      {/* ══ MAIN CONTENT ══════════════════════════════════════════════════════ */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* date stamp above fold */}
        {lead && (
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest whitespace-nowrap">{editionDate}</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>
        )}

        {/* ── FEATURED: 1 HERO + 2 SECONDARY ──────────────────────────── */}
        {lead && (
          <section className="border-b-2 border-black pb-8 mb-0">
            <div className="grid lg:grid-cols-2 gap-6">

              {/* Hero — left, large */}
              <div className="flex flex-col">
                <Link href={lead.href} className="relative overflow-hidden rounded-xl shadow-lg group block aspect-[4/5] sm:aspect-square lg:aspect-auto lg:h-[600px]">
                  {lead.imageUrl ? (
                    <Image
                      src={lead.imageUrl}
                      alt={lead.imageAlt ?? lead.title}
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#1e3a5f] flex items-center justify-center">
                      <span className="text-[#b45309] text-7xl font-black tracking-tighter opacity-50">oW</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Content over image */}
                  <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-20 flex flex-col justify-end h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <CatLabel category={lead.category} breaking={lead.breaking} />
                      {isMostRead && (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-black px-2.5 py-1 tracking-[.2em] uppercase bg-[#b45309] text-white rounded-sm shadow-md">
                          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-1.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"/></svg>
                          Most Read
                        </span>
                      )}
                      {lead.exclusive && (
                        <span className="inline-block text-[9px] font-black px-2 py-0.5 tracking-widest uppercase border border-[#b45309] text-[#b45309] rounded-sm bg-[#0f172a]/50 backdrop-blur-sm">
                          EXCLUSIVE
                        </span>
                      )}
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl font-black leading-tight text-white mb-4 group-hover:text-[#b45309] transition-colors drop-shadow-md">
                      {lead.title}
                    </h2>
                    {lead.excerpt && (
                      <p className="text-gray-200 text-sm md:text-base leading-relaxed line-clamp-2 mb-5 font-medium drop-shadow hidden sm:block">
                        {lead.excerpt}
                      </p>
                    )}
                    <div className="flex items-center gap-2 text-xs text-gray-300 font-mono">
                      <span className="font-bold text-white tracking-wide">{lead.author}</span>
                      <span className="opacity-50">·</span>
                      <span>{timeAgo(lead.publishDate)}</span>
                    </div>
                  </div>
                </Link>
                <div className="mt-4 pt-3 border-t border-gray-200/60">
                  <EngagementBar
                    slug={lead.href}
                    title={lead.title}
                    url={lead.href}
                    image={lead.imageUrl}
                    category={lead.category}
                  />
                </div>
              </div>

              {/* Right column — 2 stacked secondary cards */}
              <div className="flex flex-col gap-6">
                {second && (
                  <Link href={second.href} className="group flex flex-col flex-1 bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#b45309]/30 transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                    {second.imageUrl && (
                      <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#1e3a5f] shrink-0">
                        <Image
                          src={second.imageUrl}
                          alt={second.imageAlt ?? second.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 100vw, 25vw"
                        />
                      </div>
                    )}
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="mb-3">
                        <CatLabel category={second.category} breaking={second.breaking} />
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-black leading-snug text-[#0f172a] group-hover:text-[#b45309] transition-colors decoration-2">
                        {second.title}
                      </h3>
                      {second.excerpt && (
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mt-2 mb-4">
                          {second.excerpt}
                        </p>
                      )}
                      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-2 text-[10px] text-gray-400 font-mono tracking-wide uppercase">
                        <span className="font-bold text-[#1e3a5f]">{second.author}</span>
                        <span className="opacity-50">·</span>
                        <span>{timeAgo(second.publishDate)}</span>
                      </div>
                    </div>
                  </Link>
                )}
                {third && (
                  <Link href={third.href} className="group flex flex-col flex-1 bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#b45309]/30 transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                    {third.imageUrl && (
                      <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#1e3a5f] shrink-0">
                        <Image
                          src={third.imageUrl}
                          alt={third.imageAlt ?? third.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 100vw, 25vw"
                        />
                      </div>
                    )}
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="mb-3">
                        <CatLabel category={third.category} breaking={third.breaking} />
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-black leading-snug text-[#0f172a] group-hover:text-[#b45309] transition-colors decoration-2">
                        {third.title}
                      </h3>
                      {third.excerpt && (
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mt-2 mb-4">
                          {third.excerpt}
                        </p>
                      )}
                      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-2 text-[10px] text-gray-400 font-mono tracking-wide uppercase">
                        <span className="font-bold text-[#1e3a5f]">{third.author}</span>
                        <span className="opacity-50">·</span>
                        <span>{timeAgo(third.publishDate)}</span>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ── TRENDING CREATORS ──────────────────────────────────────────────── */}
        {trendingCreators.length > 0 && (
          <section className="mb-12">
            <SectionRule label="Trending Creators" href="/creator" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trendingCreators.slice(0, 4).map(c => (
                <Link key={c.id} href={c.href} className="group relative aspect-[3/4] md:aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block bg-[#1e3a5f]">
                  {c.imageUrl ? (
                    <Image
                      src={c.imageUrl}
                      alt={c.imageAlt ?? c.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col justify-end p-4 bg-gradient-to-t from-[#0f172a] to-[#1e3a5f]">
                      <span className="text-[#b45309] font-black text-4xl opacity-50 absolute top-4 right-4">oW</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-4 md:p-5 z-20">
                    <CatLabel category={c.category} />
                    <h3 className="font-serif text-lg font-black text-white leading-tight mt-2 group-hover:text-[#b45309] transition-colors drop-shadow-md">
                      {c.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── LATEST FEED + COVERAGE BEATS ───────────────────────────────── */}
        {headlineArticles.length > 0 && (
          <>
            <SectionRule label="The Latest Feed" href="/site-index" />
            <div className="grid lg:grid-cols-3 gap-8 mb-10">

              {/* 2-col compact headline list with load-more */}
              <div className="lg:col-span-2">
                <HeadlineList articles={headlineArticles} />
              </div>

              {/* Coverage beats */}
              <div>
                <p className="text-[10px] font-black tracking-[.25em] uppercase border-b-2 border-[#1e3a5f] text-[#1e3a5f] pb-2 mb-4">
                  Coverage Beats
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                  {BEATS.map((b) => (
                    <Link
                      key={b.href}
                      href={b.href}
                      className="flex items-center gap-4 py-3 px-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-[#b45309] hover:shadow-md transition-all duration-300 group transform hover:-translate-y-0.5"
                    >
                      <span className="text-xl shrink-0 drop-shadow-sm group-hover:scale-110 transition-transform">{b.icon}</span>
                      <span className="text-sm font-black text-[#0f172a] group-hover:text-[#b45309] transition-colors leading-none tracking-wide">{b.label}</span>
                      <span className="ml-auto text-gray-300 group-hover:text-[#b45309] transition-colors">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* ── ABOUT STRIP ───────────────────────────────────────────────────── */}
        <section className="border-t-2 border-b-2 border-black py-6 text-center mt-4">
          <p className="text-[9px] tracking-[.4em] uppercase font-black text-gray-500 mb-2">About oWire</p>
          <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed mb-4">
            Daily coverage of athletes, influencers, and the moments everyone is talking about across Sports and Creator Culture. No filter.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 text-[10px] tracking-widest uppercase font-bold text-gray-500">
            {[
              { href: '/about',               label: 'Our Story' },
              { href: '/editorial-standards', label: 'Editorial Standards' },
              { href: '/team',                label: 'Our Team' },
              { href: '/get-help/contact',    label: 'Contact' },
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
