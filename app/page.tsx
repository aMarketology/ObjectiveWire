import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllEntries, type ContentEntry } from '@/lib/registry-service';
import { getActiveSite, getActiveSiteConfig } from '@/lib/active-site';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const config = getActiveSiteConfig();
  return {
    title: `${config.name} | ${config.tagline}`,
    description: config.description,
    alternates: { canonical: config.url },
    openGraph: {
      title: `${config.name} | ${config.tagline}`,
      description: config.description,
      type: 'website',
      url: config.url,
      siteName: config.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${config.name} | ${config.tagline}`,
      description: config.description,
    },
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function cleanImg(url: string | null | undefined): string | undefined {
  if (!url) return undefined;
  if (url.includes('${') || url.includes('/api/og') || url.includes('objectwire.com/og')) return undefined;
  return url;
}

const CAT_COLORS: Record<string, string> = {
  'world-cup':      '#15803d',
  sports:           '#1d4ed8',
  mlb:              '#b91c1c',
  mls:              '#0f766e',
  'premier-league': '#4f46e5',
  golf:             '#047857',
  soccer:           '#166534',
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

function stripBrand(title: string): string {
  return title.replace(/\s*[|]\s*(ObjectWire|oWire|ZWire)\s*$/i, '').trim();
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

// ─── Section Flag ─────────────────────────────────────────────────────────────

function SectionFlag({ label, href, color = '#111827' }: { label: string; href?: string; color?: string }) {
  return (
    <div className="flex items-center gap-3 mt-10 mb-6 first:mt-0">
      <div className="h-[3px] w-8 shrink-0" style={{ backgroundColor: color }} />
      <h2 className="text-[11px] font-black uppercase tracking-[0.22em] whitespace-nowrap" style={{ color }}>
        {label}
      </h2>
      <div className="h-px flex-1 bg-gray-200" />
      {href && (
        <Link href={href} className="text-[9px] font-black uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors whitespace-nowrap">
          All stories &rarr;
        </Link>
      )}
    </div>
  );
}

// ─── Lead Story ───────────────────────────────────────────────────────────────

function LeadStory({ article }: { article: ContentEntry }) {
  const img = cleanImg(article.imageUrl);
  const color = catColor(article.category);
  const ago = timeAgo(article.publishDate);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
      <Link href={article.slug} className="group lg:col-span-3 block overflow-hidden">
        {img ? (
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
            <Image
              src={img} alt={article.title} fill priority
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>
        ) : (
          <div className="w-full aspect-[16/9] bg-gray-100 flex items-center justify-center">
            <span className="font-serif font-black text-8xl opacity-10 tracking-tighter" style={{ color }}>oW</span>
          </div>
        )}
      </Link>
      <div className="lg:col-span-2 lg:pl-8 pt-5 lg:pt-0 flex flex-col">
        <span
          className="text-[9px] font-black uppercase tracking-[0.2em] px-2 py-[3px] text-white self-start mb-3"
          style={{ backgroundColor: color }}
        >
          {article.category}
        </span>
        <Link href={article.slug} className="group flex-1 mb-3">
          <h2 className="font-serif font-black text-gray-900 text-2xl md:text-3xl leading-tight group-hover:text-amber-700 transition-colors">
            {stripBrand(article.title)}
          </h2>
        </Link>
        {article.description && (
          <p className="text-[15px] text-gray-600 leading-relaxed line-clamp-4 font-serif mb-5">
            {article.description}
          </p>
        )}
        <div className="border-t border-gray-200 pt-3 mt-auto">
          <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
            {article.author}{ago ? ` \u00b7 ${ago}` : ''}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Story Card ───────────────────────────────────────────────────────────────

function StoryCard({
  article,
  showImage = true,
  priority = false,
}: {
  article: ContentEntry;
  showImage?: boolean;
  priority?: boolean;
}) {
  const img = cleanImg(article.imageUrl);
  const color = catColor(article.category);
  const ago = timeAgo(article.publishDate);

  return (
    <Link href={article.slug} className="group flex flex-col border-b border-gray-100 pb-5 last:border-0 last:pb-0">
      {showImage && img && (
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100 mb-3">
          <Image
            src={img} alt={article.title} fill
            priority={priority} loading={priority ? undefined : 'lazy'}
            className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
      )}
      <span
        className="text-[8px] font-black uppercase tracking-[0.15em] px-1.5 py-[3px] text-white self-start mb-2"
        style={{ backgroundColor: color }}
      >
        {article.category}
      </span>
      <h3 className="font-serif font-black text-gray-900 text-[14px] md:text-[15px] leading-snug group-hover:text-amber-700 transition-colors line-clamp-3 flex-1 mb-2">
        {stripBrand(article.title)}
      </h3>
      <p className="text-[9px] font-mono uppercase tracking-widest text-gray-400 mt-auto">
        {article.author}{ago ? ` \u00b7 ${ago}` : ''}
      </p>
    </Link>
  );
}

// ─── Headline Row ─────────────────────────────────────────────────────────────

function HeadlineRow({ article }: { article: ContentEntry }) {
  const img = cleanImg(article.imageUrl);
  const color = catColor(article.category);
  const ago = timeAgo(article.publishDate);

  return (
    <Link
      href={article.slug}
      className="group flex items-start gap-3 py-3 border-b border-gray-100 last:border-0 hover:bg-amber-50 transition-colors -mx-2 px-2 rounded"
    >
      {img && (
        <div className="relative w-[68px] h-[48px] overflow-hidden shrink-0 bg-gray-100">
          <Image src={img} alt={article.title} fill loading="lazy" className="object-cover" sizes="68px" />
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
          {stripBrand(article.title)}
        </h4>
        <p className="text-[9px] font-mono uppercase tracking-widest text-gray-400 mt-0.5">
          {article.author}{ago ? ` \u00b7 ${ago}` : ''}
        </p>
      </div>
    </Link>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function HomePage() {
  const allEntries = await getAllEntries();
  const activeSite = getActiveSite();
  const siteConfig = getActiveSiteConfig();

  const SKIP = new Set(['meta', 'support', 'legal', 'services', 'service']);
  const articles = allEntries
    .filter((e) => {
      const parts = e.slug.split('/').filter(Boolean);
      return (
        parts.length >= 2 &&
        !e.slug.includes('[') &&
        !SKIP.has(e.category.toLowerCase()) &&
        !e.publishDate.startsWith('2020')
      );
    })
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  // ── org-specific buckets (Texas Investigations) ──────────────────────────
  const isAustin   = (e: ContentEntry) => e.slug.includes('/austin');
  const isHouston  = (e: ContentEntry) => e.slug.includes('/houston');
  const isTxState  = (e: ContentEntry) =>
    e.slug.includes('/greater-texas') ||
    e.slug.startsWith('/blog') ||
    (!isAustin(e) && !isHouston(e));

  const austinNews   = articles.filter(isAustin).slice(0, 6);
  const houstonNews  = articles.filter(isHouston).slice(0, 6);
  const stateNews    = articles.filter(isTxState).slice(0, 6);

  // ── main-specific buckets (Sports, Cars, Creators) ───────────────────────
  const isWC      = (e: ContentEntry) => e.slug.startsWith('/world-cup') || e.category.toLowerCase() === 'world-cup';
  const isSports  = (e: ContentEntry) =>
    ['mlb', 'mls', 'soccer', 'golf', 'premier-league', 'sports'].includes(e.category.toLowerCase()) ||
    ['/mlb', '/mls', '/soccer', '/golf', '/premier-league'].some(p => e.slug.startsWith(p));
  const isCreator = (e: ContentEntry) =>
    e.category.toLowerCase() === 'creator' || e.slug.startsWith('/creator') || e.slug.startsWith('/influencer');
  const isYouTube = (e: ContentEntry) =>
    e.category.toLowerCase() === 'youtube' || e.slug.startsWith('/youtube');
  const isCars    = (e: ContentEntry) =>
    e.category.toLowerCase() === 'cars' || e.slug.startsWith('/cars');

  const lead     = articles[0];
  const nextUp   = articles.filter((a) => a !== lead).slice(0, 5);
  const worldCup = articles.filter(isWC).slice(0, 9);
  const sports   = articles.filter((e) => isSports(e) && !isWC(e)).slice(0, 6);
  const creators = articles.filter(isCreator).slice(0, 6);
  const youtube  = articles.filter(isYouTube).slice(0, 4);
  const cars     = articles.filter(isCars).slice(0, 4);

  const siteSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsMediaOrganization',
    name: siteConfig.name,
    alternateName: 'oWire',
    url: siteConfig.url,
    description: siteConfig.description,
    foundingDate: '2024',
    email: siteConfig.email,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />

      <div className="bg-white min-h-screen">

        <main className="container mx-auto px-4 max-w-7xl py-8">

          {/* ── ABOVE THE FOLD ──────────────────────────────────────────── */}
          {lead && (
            <section aria-label="Top story" className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 border-b-2 border-gray-900 mb-2">
              {/* Lead */}
              <div className="lg:col-span-8 lg:border-r lg:border-gray-200 lg:pr-8">
                <LeadStory article={lead} />
              </div>
              {/* Stack */}
              <div className="lg:col-span-4 divide-y divide-gray-100">
                {nextUp.map((a) => (
                  <StoryCard key={a.slug} article={a} showImage={false} />
                ))}
              </div>
            </section>
          )}

          {/* ── ORG SITE: TEXAS INVESTIGATIONS LAYOUT ──────────────────── */}
          {activeSite === 'org' && (
            <>
              {houstonNews.length > 0 && (
                <section aria-label="Houston Investigations" className="pt-6">
                  <SectionFlag label="Houston Investigations" href="/local/houston" color="#ea580c" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {houstonNews.map((a, i) => (
                      <StoryCard key={a.slug} article={a} priority={i === 0} />
                    ))}
                  </div>
                </section>
              )}

              {austinNews.length > 0 && (
                <section aria-label="Austin Public Interest" className="pt-8 border-t-2 border-gray-900 mt-8">
                  <SectionFlag label="Austin & Central Texas" href="/local/austin" color="#0891b2" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {austinNews.map((a, i) => (
                      <StoryCard key={a.slug} article={a} priority={i === 0} />
                    ))}
                  </div>
                </section>
              )}

              {stateNews.length > 0 && (
                <section aria-label="Statewide Texas Investigations" className="pt-8 border-t-2 border-gray-900 mt-8">
                  <SectionFlag label="Texas Statewide Investigations" href="/blog" color="#1e3a5f" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stateNews.map((a, i) => (
                      <StoryCard key={a.slug} article={a} priority={i === 0} />
                    ))}
                  </div>
                </section>
              )}
            </>
          )}

          {/* ── MAIN SITE: SPORTS, CREATORS, CARS, WORLD CUP ───────────── */}
          {activeSite === 'main' && (
            <>
              {/* ── WORLD CUP 2026 ──────────────────────────────────────────── */}
              {worldCup.length > 0 && (
                <section aria-label="World Cup 2026">
                  <SectionFlag label="World Cup 2026" href="/world-cup" color="#15803d" />
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-5">
                      <StoryCard article={worldCup[0]} priority />
                    </div>
                    <div className="lg:col-span-4 grid grid-cols-2 gap-5 content-start">
                      {worldCup.slice(1, 5).map((a) => (
                        <StoryCard key={a.slug} article={a} />
                      ))}
                    </div>
                    {worldCup.length > 5 && (
                      <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l lg:border-gray-200 lg:pl-6 pt-4 lg:pt-0">
                        {worldCup.slice(5).map((a) => (
                          <HeadlineRow key={a.slug} article={a} />
                        ))}
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* ── SPORTS | CREATORS (two-col) ──────────────────────────────── */}
              {(sports.length > 0 || creators.length > 0) && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-gray-900">
                  {sports.length > 0 && (
                    <section aria-label="Sports" className="pb-8 lg:pb-0 lg:pr-8">
                      <SectionFlag label="Sports" href="/mlb" color="#1d4ed8" />
                      <div className="grid grid-cols-2 gap-5 mb-4">
                        {sports.slice(0, 2).map((a, i) => (
                          <StoryCard key={a.slug} article={a} priority={i === 0} />
                        ))}
                      </div>
                      <div>
                        {sports.slice(2).map((a) => (
                          <HeadlineRow key={a.slug} article={a} />
                        ))}
                      </div>
                    </section>
                  )}

                  {(creators.length > 0 || youtube.length > 0) && (
                    <section aria-label="Creators and YouTube" className="pt-8 lg:pt-0 lg:pl-8">
                      <SectionFlag label="Creators &amp; YouTube" href="/creator" color="#b45309" />
                      <div className="grid grid-cols-2 gap-5 mb-4">
                        {creators.slice(0, 2).map((a) => (
                          <StoryCard key={a.slug} article={a} />
                        ))}
                      </div>
                      <div>
                        {[...creators.slice(2), ...youtube].slice(0, 6).map((a) => (
                          <HeadlineRow key={a.slug} article={a} />
                        ))}
                      </div>
                    </section>
                  )}
                </div>
              )}

              {/* ── CARS ────────────────────────────────────────────────────── */}
              {cars.length > 0 && (
                <section aria-label="Cars and Supercars" className="border-t-2 border-gray-900 pt-0">
                  <SectionFlag label="Cars &amp; Supercars" href="/cars" color="#1e3a5f" />
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {cars.map((a, i) => (
                      <StoryCard key={a.slug} article={a} priority={i === 0} />
                    ))}
                  </div>
                </section>
              )}
            </>
          )}

        </main>

        {/* ── EDITORIAL FOOTER STRIP ──────────────────────────────────────── */}
        <footer className="border-t-[3px] border-gray-900 bg-gray-50 py-8 mt-6">
          <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="font-serif font-black text-2xl text-gray-900 block">{siteConfig.name}</span>
              <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-gray-400 mt-1 block">
                {activeSite === 'org'
                  ? 'Nonprofit Investigative Newsroom · Documented Field Work · Named Authors'
                  : 'Accuracy Over Speed · Primary Sources Only · Named Authors'}
              </span>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer links">
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
        </footer>

      </div>
    </>
  );
}
