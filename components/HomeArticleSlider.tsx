'use client';

import Link from 'next/link';
import { useState, useCallback } from 'react';
import type { ContentEntry } from '@/lib/content-registry';

const CATEGORY_COLORS: Record<string, { bar: string; badge: string }> = {
  Sports:        { bar: 'bg-red-600',     badge: 'bg-red-600 text-white' },
  Cars:          { bar: 'bg-red-700',     badge: 'bg-red-700 text-white' },
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

const DEFAULT_COLORS = { bar: 'bg-amber-500', badge: 'bg-amber-500 text-gray-900' };

const PER_PAGE = 6;

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

interface Props {
  articles: ContentEntry[];
}

export default function HomeArticleSlider({ articles }: Props) {
  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(articles.length / PER_PAGE));
  const visible = articles.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  const prev = useCallback(() => setPage(p => Math.max(0, p - 1)), []);
  const next = useCallback(() => setPage(p => Math.min(totalPages - 1, p + 1)), [totalPages]);

  return (
    <section className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl py-8">

        {/* Header row */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-0.5 font-mono">
              Latest Stories
            </p>
            <h2 className="text-lg font-black text-gray-900 leading-none">Recent Coverage</h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-gray-400 font-mono tabular-nums select-none">
              {page + 1}&thinsp;/&thinsp;{totalPages}
            </span>

            {/* Prev */}
            <button
              onClick={prev}
              disabled={page === 0}
              className="w-9 h-9 flex items-center justify-center border border-gray-200 text-gray-600 hover:border-gray-900 hover:text-gray-900 disabled:opacity-25 disabled:cursor-not-allowed transition-all text-lg"
              aria-label="Previous articles"
            >
              ←
            </button>

            {/* Next */}
            <button
              onClick={next}
              disabled={page >= totalPages - 1}
              className="w-9 h-9 flex items-center justify-center bg-gray-900 text-white hover:bg-amber-600 disabled:opacity-25 disabled:cursor-not-allowed transition-all text-lg"
              aria-label="Next articles"
            >
              →
            </button>
          </div>
        </div>

        {/* Dot indicators */}
        {totalPages > 1 && (
          <div className="flex gap-1.5 mb-5">
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

        {/* 3×2 card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((article) => {
            const colors = CATEGORY_COLORS[article.category] ?? DEFAULT_COLORS;

            return (
              <Link
                key={article.slug}
                href={article.slug}
                className="group flex flex-col bg-white border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all overflow-hidden"
              >
                {/* Colored top accent bar */}
                <div className={`h-[3px] ${colors.bar}`} />

                {/* Thumbnail */}
                {article.imageUrl ? (
                  <div className="w-full h-[140px] overflow-hidden bg-gray-100 shrink-0">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className={`w-full h-[140px] shrink-0 ${colors.bar} opacity-10`} />
                )}

                {/* Body */}
                <div className="flex flex-col flex-1 p-4">
                  {/* Category badge */}
                  <span
                    className={`self-start text-[10px] font-bold uppercase tracking-widest px-2 py-[3px] mb-2.5 ${colors.badge}`}
                  >
                    {article.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-black text-gray-900 text-sm leading-snug mb-2 line-clamp-3 group-hover:text-amber-700 transition-colors">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-2 mb-3 flex-1">
                    {article.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
                    <span className="text-[10px] text-gray-400 font-mono truncate max-w-[130px]">
                      {article.author}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono whitespace-nowrap">
                      {formatDate(article.publishDate)}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
