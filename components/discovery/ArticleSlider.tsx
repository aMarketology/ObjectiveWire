'use client';

import { useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type SliderArticle = {
  id: string;
  title: string;
  href: string;
  category: string;
  author: string;
  publishDate: string;
  imageUrl?: string;
  imageAlt?: string;
  breaking?: boolean;
};

const CAT_BG: Record<string, string> = {
  sports:           'bg-[#0f172a]',
  mlb:              'bg-[#b91c1c]',
  mls:              'bg-[#0f766e]',
  'world-cup':      'bg-[#15803d]',
  'premier-league': 'bg-[#4f46e5]',
  golf:             'bg-[#10b981]',
  creator:          'bg-[#b45309]',
  youtube:          'bg-[#dc2626]',
  cars:             'bg-[#1e3a5f]',
};

const CAT_GRADIENT: Record<string, string> = {
  sports:      'from-[#0f172a] to-[#1e3a5f]',
  mlb:         'from-[#7f1d1d] to-[#b91c1c]',
  mls:         'from-[#0f766e] to-[#0d9488]',
  'world-cup': 'from-[#14532d] to-[#15803d]',
  creator:     'from-[#78350f] to-[#b45309]',
  youtube:     'from-[#7f1d1d] to-[#dc2626]',
  cars:        'from-[#0f172a] to-[#1e3a5f]',
};

function catBg(cat: string) {
  return CAT_BG[cat.toLowerCase()] ?? 'bg-[#0f172a]';
}
function catGradient(cat: string) {
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
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// Card width + gap in px — must match the inline styles below
const CARD_W = 300;
const CARD_GAP = 16;

// Auto-scroll speed in px per frame (at ~60fps).
// 0.5 ≈ 30 px/s  |  0.8 ≈ 48 px/s  |  1.0 ≈ 60 px/s
const SCROLL_SPEED = 0.5;

function SliderCard({ article, onClick }: { article: SliderArticle; onClick?: (e: React.MouseEvent) => void }) {
  return (
    <Link
      href={article.href}
      onClick={onClick}
      draggable={false}
      className="group relative shrink-0 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 select-none"
      style={{ width: CARD_W, height: 400 }}
      tabIndex={0}
    >
      {article.imageUrl ? (
        <Image
          src={article.imageUrl}
          alt={article.imageAlt ?? article.title}
          fill
          draggable={false}
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
          sizes="300px"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${catGradient(article.category)}`} />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-4 z-10">
        {article.breaking ? (
          <span className="inline-flex items-center gap-1 text-[9px] font-black px-2 py-0.5 tracking-[.2em] uppercase bg-red-600 text-white rounded-sm mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shrink-0" />
            BREAKING
          </span>
        ) : (
          <span className={`inline-block text-[9px] font-black px-2 py-0.5 tracking-[.15em] uppercase text-white rounded-sm mb-2 ${catBg(article.category)}`}>
            {article.category.replace(/-/g, ' ').toUpperCase()}
          </span>
        )}
        <h3 className="font-serif text-base font-black leading-snug text-white group-hover:text-yellow-300 transition-colors line-clamp-3">
          {article.title}
        </h3>
        <p className="text-[10px] text-gray-400 font-mono mt-2">
          {article.author} · {timeAgo(article.publishDate)}
        </p>
      </div>
    </Link>
  );
}

export function ArticleSlider({ articles }: { articles: SliderArticle[] }) {
  if (!articles.length) return null;

  const oneSetW = articles.length * (CARD_W + CARD_GAP);

  const trackRef       = useRef<HTMLDivElement>(null);
  const offsetRef      = useRef(0);       // current translateX in px (always ≤ 0)
  const rafRef         = useRef<number>(0);
  const isHoveredRef   = useRef(false);   // mouse is over the slider
  const isDraggingRef  = useRef(false);
  const dragStartXRef  = useRef(0);
  const dragOffsetRef  = useRef(0);       // offset snapshot at drag start
  const dragMovedRef   = useRef(0);       // total px moved during current drag

  // Normalise offset into [-oneSetW, 0)
  function wrap(x: number): number {
    const mod = x % oneSetW;
    return mod > 0 ? mod - oneSetW : mod;
  }

  const applyTransform = useCallback(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    }
  }, []);

  // rAF loop
  useEffect(() => {
    function tick() {
      if (!isHoveredRef.current && !isDraggingRef.current) {
        offsetRef.current = wrap(offsetRef.current - SCROLL_SPEED);
        applyTransform();
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oneSetW]);

  // ── Pointer event handlers (works for both mouse and touch) ──────────────

  function onPointerDown(e: React.PointerEvent) {
    if (e.button !== undefined && e.button !== 0) return; // left-click / touch only
    isDraggingRef.current = true;
    dragMovedRef.current  = 0;
    dragStartXRef.current = e.clientX;
    dragOffsetRef.current = offsetRef.current;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    if (trackRef.current) trackRef.current.style.cursor = 'grabbing';
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!isDraggingRef.current) return;
    const delta = e.clientX - dragStartXRef.current;
    dragMovedRef.current = delta;
    offsetRef.current = wrap(dragOffsetRef.current + delta);
    applyTransform();
  }

  function onPointerUp(e: React.PointerEvent) {
    isDraggingRef.current = false;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    if (trackRef.current) trackRef.current.style.cursor = 'grab';
  }

  // Prevent link navigation if the user actually dragged (moved > 5px)
  function suppressClickIfDragged(e: React.MouseEvent) {
    if (Math.abs(dragMovedRef.current) > 5) {
      e.preventDefault();
      e.stopPropagation();
      dragMovedRef.current = 0;
    }
  }

  return (
    <section
      aria-label="Latest stories"
      className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-0 touch-pan-x"
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => {
        isHoveredRef.current  = false;
        isDraggingRef.current = false;
        if (trackRef.current) trackRef.current.style.cursor = 'grab';
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#faf9f6] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#faf9f6] to-transparent z-10" />

      <div className="overflow-hidden py-2">
        <div
          ref={trackRef}
          className="flex w-max will-change-transform"
          style={{ gap: CARD_GAP, paddingLeft: '1rem', paddingRight: '1rem', cursor: 'grab' }}
        >
          {/* Duplicate for seamless infinite loop */}
          {[...articles, ...articles].map((a, i) => (
            <SliderCard
              key={`${a.id}-${i}`}
              article={a}
              onClick={suppressClickIfDragged}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

