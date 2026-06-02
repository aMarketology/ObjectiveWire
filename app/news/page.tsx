import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getAllEntries, type ContentEntry } from '@/lib/registry-service';
import { ArticleSlider } from '@/components/discovery/ArticleSlider';
import { getPopularLeadSlug } from '@/lib/popular-lead';

export const metadata: Metadata = {
  title: 'News | Investigations, Sports, Creators & Cars | oWire',
  description:
    'Latest from oWire. Texas investigations, sports, creators, cars, and culture. World Cup, MLB, MrBeast, Logan Paul, Ferrari, and more.',
  alternates: { canonical: 'https://www.objectivewire.org/news' },
  openGraph: {
    title: 'News | Investigations, Sports, Creators & Cars | oWire',
    description: 'Texas investigations and daily coverage of athletes, influencers, and the moments everyone is talking about.',
    url: 'https://www.objectivewire.org/news',
    siteName: 'oWire',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News | Investigations, Sports, Creators & Cars | oWire',
    description: 'Texas investigations and daily coverage of athletes, influencers, and the moments everyone is talking about.',
  },
};

export const revalidate = 3600;

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

function cleanImageUrl(url: string | null | undefined): string | undefined {
  if (!url) return undefined;
  if (
    url.includes('${') ||
    url.includes('objectwire.com') ||
    url.includes('objectwire.org/og') ||
    url.includes('objectwire.org/api/og') ||
    url.includes('/api/og?')
  ) return undefined;
  return url;
}

const UNSPLASH_FALLBACK: Record<string, string> = {
  mlb:              'https://images.unsplash.com/photo-1605901309584-818e25452571?w=1200&h=675&fit=crop',
  mls:              'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=675&fit=crop',
  soccer:           'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=675&fit=crop',
  'world-cup':      'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=1200&h=675&fit=crop',
  'premier-league': 'https://images.unsplash.com/photo-1547149617-609fafa00a6b?w=1200&h=675&fit=crop',
  sports:           'https://images.unsplash.com/photo-1547149617-609fafa00a6b?w=1200&h=675&fit=crop',
  golf:             'https://images.unsplash.com/photo-1485282826741-1b5d56f7e268?w=1200&h=675&fit=crop',
  creator:          'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1200&h=675&fit=crop',
  creators:         'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1200&h=675&fit=crop',
  youtube:          'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=675&fit=crop',
  cars:             'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200&h=675&fit=crop',
  entertainment:    'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1200&h=675&fit=crop',
  culture:          'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1200&h=675&fit=crop',
  news:             'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=675&fit=crop',
  tech:             'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=675&fit=crop',
  finance:          'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=675&fit=crop',
  crypto:           'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=675&fit=crop',
  investigations:   'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=675&fit=crop',
};

function unsplashFallback(category: string): string {
  return (
    UNSPLASH_FALLBACK[category.toLowerCase()] ??
    'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=675&fit=crop'
  );
}

function fromRegistry(e: ContentEntry): Article {
  const cleaned = cleanImageUrl(e.imageUrl);
  return {
    id: e.slug,
    title: e.title.replace(/\s*[|\u2014\u2013\-]\s*(ObjectWire|oWire|ZWire).*$/i, '').trim(),
    excerpt: e.description,
    href: e.slug,
    publishDate: e.publishDate,
    category: e.category,
    author: e.author,
    imageUrl: cleaned ?? unsplashFallback(e.category),
    imageAlt: e.imageAlt ?? e.title,
    featured: e.featured,
    tags: e.tags,
  };
}

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
  investigations:   'bg-[#92400e]',
};

const CAT_GRADIENT: Record<string, string> = {
  sports:           'from-[#0f172a] to-[#1e3a5f]',
  mlb:              'from-[#7f1d1d] to-[#b91c1c]',
  mls:              'from-[#0f766e] to-[#0d9488]',
  'world-cup':      'from-[#14532d] to-[#15803d]',
  creator:          'from-[#78350f] to-[#b45309]',
  youtube:          'from-[#7f1d1d] to-[#dc2626]',
  cars:             'from-[#0f172a] to-[#1e3a5f]',
  investigations:   'from-[#78350f] to-[#92400e]',
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

const BEATS = [
  { label: 'Investigations', href: '/blog',       icon: '🔎' },
  { label: 'World Cup',      href: '/world-cup',  icon: '🏆' },
  { label: 'MLB',            href: '/mlb',        icon: '⚾' },
  { label: 'MLS',            href: '/mls',        icon: '⚽' },
  { label: 'Soccer',         href: '/soccer',     icon: '⚽' },
  { label: 'Golf',           href: '/golf',       icon: '⛳' },
  { label: 'YouTube',        href: '/youtube',    icon: '▶️' },
  { label: 'Creators',       href: '/creator',    icon: '🎬' },
  { label: 'Cars',           href: '/cars',       icon: '🚗' },
];

function CatLabel({ category, breaking }: { category: string; breaking?: boolean }) {
  if (breaking) {
    return (
      <span className="inline-flex items-center gap-1.5 text-[9px] font-black px-2.5 py-1 tracking-[.2em] uppercase bg-red-600 text-white rounded-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1c1c1e] animate-pulse shrink-0" />
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
      <h2 className="text-xs font-black tracking-[.25em] text-white dark:text-gray-200 uppercase whitespace-nowrap">{label}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
      {href && (
        <Link href={href} className="text-[10px] font-black tracking-widest uppercase text-[#b45309] hover:text-white transition-colors whitespace-nowrap bg-[#b45309]/10 hover:bg-[#b45309]/20 px-3 py-1.5 rounded-full">
          See All &rarr;
        </Link>
      )}
    </div>
  );
}

function ArticleCard({ article, size = 'md', priority = false }: { article: Article; size?: 'lg' | 'md' | 'sm'; priority?: boolean }) {
  const aspectClass = size === 'lg' ? 'aspect-[4/3] sm:aspect-[16/9] lg:h-72' : 'aspect-[16/9]';
  return (
    <Link
      href={article.href}
      className="group flex flex-col bg-[#1c1c1e] dark:bg-[#1c1c1c] rounded-xl shadow-sm hover:shadow-xl border border-white/10 dark:border-[#2e2e2e] hover:border-[#d97706]/30 transition-all duration-300 overflow-hidden transform hover:-translate-y-0.5"
    >
      <div className={`relative w-full ${aspectClass} overflow-hidden shrink-0`}>
        {article.imageUrl ? (
          <Image
            src={article.imageUrl}
            alt={article.imageAlt ?? article.title}
            fill
            priority={priority}
            loading={priority ? undefined : 'lazy'}
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
        <h3 className={`font-serif font-black leading-snug text-white dark:text-gray-100 group-hover:text-[#d97706] dark:group-hover:text-[#f59e0b] transition-colors line-clamp-3 ${size === 'lg' ? 'text-xl md:text-2xl' : 'text-base'}`}>
          {article.title}
        </h3>
        {article.excerpt && size !== 'sm' && (
          <p className="text-gray-400 dark:text-gray-400 text-xs leading-relaxed line-clamp-2 mt-1.5 flex-1">
            {article.excerpt}
          </p>
        )}
        <p className="text-[10px] text-gray-400 dark:text-gray-500 font-mono mt-3 pt-2 border-t border-white/10 dark:border-[#2e2e2e]">
          {article.author} &middot; {timeAgo(article.publishDate)}
        </p>
      </div>
    </Link>
  );
}

function HeadlineRow({ article }: { article: Article }) {
  return (
    <Link
      href={article.href}
      className="group flex gap-3 py-3 border-b border-white/10 dark:border-[#2e2e2e] last:border-0 hover:bg-white/5 dark:hover:bg-[#222] -mx-2 px-2 transition-colors rounded"
    >
      {article.imageUrl && (
        <div className="relative w-16 h-12 rounded overflow-hidden shrink-0">
          <Image
            src={article.imageUrl}
            alt={article.imageAlt ?? article.title}
            fill
            loading="lazy"
            className="object-cover"
            sizes="64px"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <CatLabel category={article.category} breaking={article.breaking} />
        <h4 className="font-serif text-sm font-black leading-snug mt-0.5 group-hover:underline line-clamp-2 text-white dark:text-gray-100">
          {article.title}
        </h4>
        <p className="text-[10px] text-gray-400 dark:text-gray-500 font-mono mt-0.5">
          {article.author} &middot; {timeAgo(article.publishDate)}
        </p>
      </div>
    </Link>
  );
}

export default async function NewsPage() {
  const contentRegistry = await getAllEntries();

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

  try {
    const popularSlug = await getPopularLeadSlug();
    if (popularSlug) {
      const idx = allArticles.findIndex((a) => a.href === popularSlug);
      if (idx > 0) { const [p] = allArticles.splice(idx, 1); allArticles.unshift(p); }
    }
  } catch { /* graceful */ }

  const isSports = (a: Article) =>
    ['sports', 'mlb', 'mls', 'soccer', 'golf', 'world-cup', 'premier-league'].includes(a.category.toLowerCase()) ||
    ['/soccer', '/world-cup', '/mls', '/premier-league', '/mlb', '/golf'].some((p) => a.href.startsWith(p));

  const isCreator = (a: Article) =>
    a.category.toLowerCase() === 'creator' || a.href.startsWith('/creator') || a.href.startsWith('/influencer');

  const isYouTube = (a: Article) =>
    a.category.toLowerCase() === 'youtube' || a.href.startsWith('/youtube');

  const isInvestigations = (a: Article) =>
    a.href.startsWith('/blog/') || a.category.toLowerCase() === 'investigations';

  const sliderArticles  = allArticles.slice(0, 14);
  const investigations  = allArticles.filter(isInvestigations).slice(0, 6);
  const sports          = allArticles.filter(isSports).slice(0, 6);
  const creators        = allArticles.filter(isCreator).slice(0, 8);
  const youtube         = allArticles.filter(isYouTube).slice(0, 6);

  const usedHrefs = new Set([
    ...sliderArticles.map((a) => a.href),
    ...investigations.map((a) => a.href),
    ...sports.map((a) => a.href),
    ...creators.map((a) => a.href),
    ...youtube.map((a) => a.href),
  ]);
  const remaining = allArticles.filter((a) => !usedHrefs.has(a.href));

  const editionDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-[#121212] dark:bg-[#111111]">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">

        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-white/20" />
          <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest whitespace-nowrap">{editionDate}</span>
          <div className="h-px flex-1 bg-white/20" />
        </div>

        <nav aria-label="Coverage beats" className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
          {BEATS.map((b) => (
            <Link
              key={b.href}
              href={b.href}
              className="flex items-center gap-2 whitespace-nowrap px-4 py-2 bg-[#1c1c1e] rounded-full border border-white/15 hover:border-[#d97706] hover:text-[#d97706] text-sm font-bold text-white transition-all shadow-sm shrink-0"
            >
              <span>{b.icon}</span>
              <span>{b.label}</span>
            </Link>
          ))}
        </nav>

        <ArticleSlider articles={sliderArticles} />

        {investigations.length > 0 && (
          <section aria-label="Texas Investigations">
            <SectionRule label="Texas Investigations" href="/blog" />
            <div className="grid lg:grid-cols-12 gap-6 mb-2">
              <div className="lg:col-span-7">
                <ArticleCard article={investigations[0]} size="lg" priority />
              </div>
              <div className="lg:col-span-5">
                <div className="bg-[#1c1c1e] rounded-xl border border-white/10 shadow-sm p-4 h-full">
                  <p className="text-[9px] font-black tracking-[.25em] uppercase text-[#d97706] mb-3 border-b border-white/10 pb-2">
                    Latest from the Texas Desk
                  </p>
                  {investigations.slice(1).map((a) => (
                    <HeadlineRow key={a.id} article={a} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end mb-4">
              <Link href="/blog" className="text-[10px] font-black tracking-widest uppercase text-[#d97706] hover:text-white transition-colors bg-[#d97706]/10 hover:bg-[#d97706]/20 px-3 py-1.5 rounded-full">
                All Investigations &rarr;
              </Link>
            </div>
          </section>
        )}

        {sports.length > 0 && (
          <section aria-label="Sports">
            <SectionRule label="Sports" href="/world-cup" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {sports.slice(0, 3).map((a, i) => (
                <ArticleCard key={a.id} article={a} size="md" priority={i === 0} />
              ))}
            </div>
            {sports.length > 3 && (
              <div className="bg-[#1c1c1e] dark:bg-[#1c1c1c] rounded-xl border border-white/10 dark:border-[#2e2e2e] shadow-sm p-4">
                {sports.slice(3).map((a) => <HeadlineRow key={a.id} article={a} />)}
              </div>
            )}
          </section>
        )}

        {(creators.length > 0 || youtube.length > 0) && (
          <section aria-label="Creators and YouTube">
            <SectionRule label="Creators & YouTube" href="/creator" />
            <div className="grid lg:grid-cols-12 gap-6">
              {creators.length > 0 && (
                <div className="lg:col-span-8">
                  <p className="text-[10px] font-black tracking-widest uppercase text-[#b45309] mb-3">
                    <Link href="/creator" className="hover:underline">Creators</Link>
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {creators.slice(0, 4).map((a) => (
                      <ArticleCard key={a.id} article={a} size="sm" />
                    ))}
                  </div>
                  {creators.length > 4 && (
                    <div className="mt-4 bg-[#1c1c1e] dark:bg-[#1c1c1c] rounded-xl border border-white/10 dark:border-[#2e2e2e] shadow-sm p-4">
                      {creators.slice(4, 8).map((a) => <HeadlineRow key={a.id} article={a} />)}
                    </div>
                  )}
                </div>
              )}
              {youtube.length > 0 && (
                <div className="lg:col-span-4">
                  <p className="text-[10px] font-black tracking-widest uppercase text-red-600 mb-3">
                    <Link href="/youtube" className="hover:underline">YouTube</Link>
                  </p>
                  <div className="bg-[#1c1c1e] dark:bg-[#1c1c1c] rounded-xl border border-white/10 dark:border-[#2e2e2e] shadow-sm p-4">
                    {youtube.slice(0, 8).map((a) => <HeadlineRow key={a.id} article={a} />)}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {remaining.length > 0 && (
          <section aria-label="More stories">
            <SectionRule label="More Stories" />
            <div className="grid lg:grid-cols-2 gap-x-10">
              <div className="bg-[#1c1c1e] dark:bg-[#1c1c1c] rounded-xl border border-white/10 dark:border-[#2e2e2e] shadow-sm p-4">
                {remaining.slice(0, 10).map((a) => <HeadlineRow key={a.id} article={a} />)}
              </div>
              <div>
                <p className="text-[10px] font-black tracking-[.25em] uppercase border-b-2 border-white/30 text-gray-100 pb-2 mb-3">
                  Coverage Beats
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {BEATS.map((b) => (
                    <Link
                      key={b.href}
                      href={b.href}
                      className="flex items-center gap-3 py-3 px-4 bg-[#1c1c1e] dark:bg-[#1c1c1c] rounded-lg shadow-sm border border-white/10 dark:border-[#2e2e2e] hover:border-[#d97706] hover:shadow-md transition-all duration-200 group"
                    >
                      <span className="text-lg shrink-0">{b.icon}</span>
                      <span className="text-sm font-black text-white dark:text-gray-100 group-hover:text-[#d97706] transition-colors leading-none">{b.label}</span>
                      <span className="ml-auto text-gray-300 group-hover:text-[#d97706] transition-colors text-xs">&rarr;</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="border-t-2 border-b-2 border-white/20 dark:border-[#444] py-6 text-center mt-12">
          <p className="text-[9px] tracking-[.4em] uppercase font-black text-gray-400 mb-2">About oWire</p>
          <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed mb-4">
            Texas investigations and daily coverage of athletes, influencers, and the moments everyone is talking about.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 text-[10px] tracking-widest uppercase font-bold text-gray-400">
            {[
              { href: '/blog',                label: 'Investigations' },
              { href: '/about',               label: 'About' },
              { href: '/editorial-standards', label: 'Editorial Standards' },
              { href: '/corrections',         label: 'Corrections' },
              { href: '/authors',             label: 'Authors' },
              { href: '/site-index',          label: 'Site Index' },
              { href: '/rss.xml',             label: 'RSS' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="hover:text-white hover:underline transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
