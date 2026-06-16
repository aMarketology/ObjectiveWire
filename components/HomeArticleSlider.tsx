'use client';

import Link from 'next/link';
import { useState, useCallback, useMemo } from 'react';
import type { ContentEntry } from '@/lib/content-registry';

/* ─── colour system ────────────────────────────────────────────────────── */
const CAT: Record<string, { bar: string; badge: string }> = {
  Sports:        { bar: 'bg-red-600',     badge: 'bg-red-600 text-white' },
  'World Cup':   { bar: 'bg-red-600',     badge: 'bg-red-600 text-white' },
  Cars:          { bar: 'bg-red-700',     badge: 'bg-red-700 text-white' },
  Automotive:    { bar: 'bg-red-700',     badge: 'bg-red-700 text-white' },
  Entertainment: { bar: 'bg-purple-600',  badge: 'bg-purple-600 text-white' },
  Gaming:        { bar: 'bg-blue-600',    badge: 'bg-blue-600 text-white' },
  Tech:          { bar: 'bg-emerald-600', badge: 'bg-emerald-600 text-white' },
  Technology:    { bar: 'bg-emerald-600', badge: 'bg-emerald-600 text-white' },
  Crypto:        { bar: 'bg-orange-500',  badge: 'bg-orange-500 text-white' },
  Finance:       { bar: 'bg-yellow-500',  badge: 'bg-yellow-500 text-gray-900' },
  Influencer:    { bar: 'bg-pink-500',    badge: 'bg-pink-500 text-white' },
  Culture:       { bar: 'bg-rose-600',    badge: 'bg-rose-600 text-white' },
  World:         { bar: 'bg-indigo-600',  badge: 'bg-indigo-600 text-white' },
  News:          { bar: 'bg-gray-800',    badge: 'bg-gray-800 text-white' },
  Politics:      { bar: 'bg-slate-700',   badge: 'bg-slate-700 text-white' },
  Science:       { bar: 'bg-cyan-600',    badge: 'bg-cyan-600 text-white' },
};
const DEF = { bar: 'bg-amber-500', badge: 'bg-amber-500 text-gray-900' };
function c(cat: string) { return CAT[cat] ?? DEF; }

/* ─── helpers ──────────────────────────────────────────────────────────── */
function fmtDate(d: string): string {
  try {
    return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch { return d; }
}

function timeAgo(d: string): string {
  try {
    const ms = Date.now() - new Date(d).getTime();
    const mins = Math.floor(ms / 60000);
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    const days = Math.floor(hrs / 24);
    if (days < 7) return `${days}d ago`;
    return fmtDate(d);
  } catch { return d; }
}

/* ─── Pagination config ────────────────────────────────────────────────── */
const PER_PAGE = 18;   // hero(1) + secondary(3) + mid-row(3) + below-fold(6) + sidebar-headlines(5)

/* ═══════════════════════════════════════════════════════════════════════════
   Card atoms
   ═══════════════════════════════════════════════════════════════════════════ */

/* Large hero card — top-left, image-dominant */
function HeroCard({ a }: { a: ContentEntry }) {
  const col = c(a.category);
  return (
    <Link
      href={a.slug}
      className="group relative flex flex-col bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
    >
      <div className={`h-[3px] ${col.bar}`} />
      {a.imageUrl ? (
        <div className="w-full aspect-[16/9] overflow-hidden bg-gray-100 shrink-0">
          <img
            src={a.imageUrl}
            alt={a.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
        </div>
      ) : (
        <div className={`w-full aspect-[16/9] ${col.bar} opacity-10`} />
      )}
      <div className="flex flex-col flex-1 p-5">
        <span className={`self-start text-[9px] font-bold uppercase tracking-[0.15em] px-2 py-[3px] mb-3 ${col.badge}`}>
          {a.category}
        </span>
        <h3 className="font-serif font-black text-gray-900 text-xl md:text-2xl leading-tight mb-2 group-hover:text-amber-700 transition-colors">
          {a.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4 flex-1">
          {a.description}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
          <span className="text-[10px] text-gray-400 font-mono truncate max-w-[160px]">{a.author}</span>
          <span className="text-[10px] text-gray-400 font-mono whitespace-nowrap">{timeAgo(a.publishDate)}</span>
        </div>
      </div>
    </Link>
  );
}

/* Secondary card — mid-size, image + title + description */
function SecondaryCard({ a }: { a: ContentEntry }) {
  const col = c(a.category);
  return (
    <Link
      href={a.slug}
      className="group flex flex-col bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-all"
    >
      <div className={`h-[3px] ${col.bar}`} />
      {a.imageUrl ? (
        <div className="w-full h-[130px] overflow-hidden bg-gray-100 shrink-0">
          <img src={a.imageUrl} alt={a.title} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300" />
        </div>
      ) : (
        <div className={`w-full h-[130px] ${col.bar} opacity-10`} />
      )}
      <div className="flex flex-col flex-1 p-4">
        <span className={`self-start text-[9px] font-bold uppercase tracking-[0.12em] px-1.5 py-[2px] mb-2 ${col.badge}`}>
          {a.category}
        </span>
        <h3 className="font-black text-gray-900 text-[13px] leading-snug mb-1.5 line-clamp-3 group-hover:text-amber-700 transition-colors">
          {a.title}
        </h3>
        <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-2 flex-1">
          {a.description}
        </p>
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-3">
          <span className="text-[10px] text-gray-400 font-mono truncate max-w-[110px]">{a.author}</span>
          <span className="text-[10px] text-gray-400 font-mono whitespace-nowrap">{timeAgo(a.publishDate)}</span>
        </div>
      </div>
    </Link>
  );
}

/* Compact headline-only card — sidebar rail */
function HeadlineCard({ a, idx }: { a: ContentEntry; idx: number }) {
  const col = c(a.category);
  return (
    <Link
      href={a.slug}
      className="group flex gap-3 py-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors -mx-1 px-1 rounded-sm"
    >
      <span className="text-[22px] font-black text-gray-200 font-mono leading-none pt-0.5 select-none shrink-0 w-7 text-right">
        {String(idx + 1).padStart(2, '0')}
      </span>
      <div className="flex flex-col flex-1 min-w-0">
        <span className={`self-start text-[8px] font-bold uppercase tracking-[0.15em] px-1.5 py-[1px] mb-1 ${col.badge}`}>
          {a.category}
        </span>
        <h4 className="font-bold text-gray-900 text-[12px] leading-snug line-clamp-2 group-hover:text-amber-700 transition-colors">
          {a.title}
        </h4>
        <span className="text-[9px] text-gray-400 font-mono mt-1">{timeAgo(a.publishDate)}</span>
      </div>
    </Link>
  );
}

/* Horizontal compact card — below-fold grid */
function CompactCard({ a }: { a: ContentEntry }) {
  const col = c(a.category);
  return (
    <Link
      href={a.slug}
      className="group flex gap-3 bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-all"
    >
      <div className={`h-auto w-[3px] shrink-0 ${col.bar}`} />
      {a.imageUrl ? (
        <div className="w-[100px] h-[80px] overflow-hidden bg-gray-100 shrink-0 my-auto">
          <img src={a.imageUrl} alt={a.title} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300" />
        </div>
      ) : null}
      <div className="flex flex-col justify-center py-3 pr-4 flex-1 min-w-0">
        <span className={`self-start text-[8px] font-bold uppercase tracking-[0.12em] px-1.5 py-[1px] mb-1 ${col.badge}`}>
          {a.category}
        </span>
        <h4 className="font-black text-gray-900 text-[12px] leading-snug line-clamp-2 group-hover:text-amber-700 transition-colors">
          {a.title}
        </h4>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[9px] text-gray-400 font-mono truncate max-w-[100px]">{a.author}</span>
          <span className="text-[9px] text-gray-300">·</span>
          <span className="text-[9px] text-gray-400 font-mono whitespace-nowrap">{timeAgo(a.publishDate)}</span>
        </div>
      </div>
    </Link>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */
export default function HomeArticleSlider({ articles }: { articles: ContentEntry[] }) {
  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(articles.length / PER_PAGE));
  const visible = useMemo(
    () => articles.slice(page * PER_PAGE, (page + 1) * PER_PAGE),
    [articles, page]
  );

  const prev = useCallback(() => setPage(p => Math.max(0, p - 1)), []);
  const next = useCallback(() => setPage(p => Math.min(totalPages - 1, p + 1)), [totalPages]);

  // ── Slice the visible articles into layout zones ──
  const hero        = visible[0];
  const secondary   = visible.slice(1, 4);     // 3 secondary cards
  const midRow      = visible.slice(4, 7);      // 3 more secondary cards
  const belowFold   = visible.slice(7, 13);     // 6 compact horizontal cards
  const sidebarList = visible.slice(13, 18);    // up to 5 headline-only

  // Group categories from visible articles for the category strip
  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const a of articles) {
      counts.set(a.category, (counts.get(a.category) ?? 0) + 1);
    }
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([cat]) => cat);
  }, [articles]);

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <section className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl pt-6 pb-10">

        {/* ══════════════════════════════════════════════════════════════════
            MASTHEAD
            ══════════════════════════════════════════════════════════════════ */}
        <div className="border-b-2 border-gray-900 pb-3 mb-1">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-0.5 font-mono">
                Latest Stories
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-black text-gray-900 leading-none tracking-tight">
                Recent Coverage
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-gray-400 font-mono hidden sm:block">{dateStr}</span>
              <div className="h-4 w-px bg-gray-200 hidden sm:block" />
              <span className="text-[11px] text-gray-400 font-mono tabular-nums select-none">
                {page + 1}&thinsp;/&thinsp;{totalPages}
              </span>
              <button
                onClick={prev}
                disabled={page === 0}
                className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-600 hover:border-gray-900 hover:text-gray-900 disabled:opacity-20 disabled:cursor-not-allowed transition-all text-sm"
                aria-label="Previous articles"
              >
                ←
              </button>
              <button
                onClick={next}
                disabled={page >= totalPages - 1}
                className="w-8 h-8 flex items-center justify-center bg-gray-900 text-white hover:bg-amber-600 disabled:opacity-20 disabled:cursor-not-allowed transition-all text-sm"
                aria-label="Next articles"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* thin double rule */}
        <div className="h-px bg-gray-900 mb-5" />

        {/* ── Category tag strip ────────────────────────────────────────── */}
        <div className="flex items-center gap-2 mb-5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map(cat => (
            <span
              key={cat}
              className={`text-[9px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 whitespace-nowrap ${c(cat).badge}`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            ABOVE THE FOLD — Hero + 3 secondary
            ══════════════════════════════════════════════════════════════════ */}
        {hero && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
            {/* HERO — spans 7 columns */}
            <div className="lg:col-span-7">
              <HeroCard a={hero} />
            </div>

            {/* SECONDARY STACK — 3 cards in 5 columns */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {secondary.map(a => (
                <SecondaryCard key={a.slug} a={a} />
              ))}
            </div>
          </div>
        )}

        {/* ── Section divider ──────────────────────────────────────────── */}
        {midRow.length > 0 && (
          <>
            <div className="flex items-center gap-3 my-5">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-gray-400 font-mono whitespace-nowrap">
                More Stories
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* ══════════════════════════════════════════════════════════════
                MID ROW — 3 equal secondary cards
                ══════════════════════════════════════════════════════════════ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {midRow.map(a => (
                <SecondaryCard key={a.slug} a={a} />
              ))}
            </div>
          </>
        )}

        {/* ══════════════════════════════════════════════════════════════════
            BELOW THE FOLD — Compact cards + sidebar headlines
            ══════════════════════════════════════════════════════════════════ */}
        {(belowFold.length > 0 || sidebarList.length > 0) && (
          <>
            <div className="flex items-center gap-3 my-5">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-gray-400 font-mono whitespace-nowrap">
                In Brief
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Left — compact cards (8 cols) */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {belowFold.map(a => (
                  <CompactCard key={a.slug} a={a} />
                ))}
              </div>

              {/* Right — headlines rail (4 cols) */}
              {sidebarList.length > 0 && (
                <div className="lg:col-span-4">
                  <div className="bg-gray-50 border border-gray-200 p-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-3 font-mono border-b border-gray-200 pb-2">
                      Also Reading
                    </p>
                    {sidebarList.map((a, i) => (
                      <HeadlineCard key={a.slug} a={a} idx={i} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* ── Dot indicators ───────────────────────────────────────────── */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-1.5 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === page ? 'w-6 bg-gray-900' : 'w-1.5 bg-gray-300 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
