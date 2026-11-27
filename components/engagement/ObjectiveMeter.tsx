'use client';

import { useState, useEffect } from 'react';

interface ScoreSummary {
  objectivePct: number | null;
  totalRatings: number;
  objectiveCount: number;
  needsContextCount: number;
  userVerdict: 'objective' | 'needs_context' | null;
}

export default function ObjectiveMeter({ slug }: { slug: string }) {
  const cleanSlug = slug.replace(/^\/+/, '');
  const [summary, setSummary] = useState<ScoreSummary>({
    objectivePct: null,
    totalRatings: 0,
    objectiveCount: 0,
    needsContextCount: 0,
    userVerdict: null,
  });
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!cleanSlug) return;
    fetch(`/api/article-scores?slug=${encodeURIComponent(cleanSlug)}`, { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (d) setSummary(d);
      })
      .catch(() => {});
  }, [cleanSlug]);

  async function submitVote(verdict: 'objective' | 'needs_context') {
    if (busy) return;
    setBusy(true);
    try {
      const res = await fetch('/api/article-scores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: cleanSlug, verdict }),
      });
      if (res.status === 401) {
        window.location.href = `/login?redirect=${encodeURIComponent(window.location.pathname)}`;
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setSummary(data);
      }
    } finally {
      setBusy(false);
    }
  }

  const pct = summary.objectivePct;
  const barWidth = pct !== null ? `${Math.max(pct, 4)}%` : '0%';
  const barColor =
    pct === null
      ? 'bg-gray-300'
      : pct >= 70
        ? 'bg-emerald-500'
        : pct >= 45
          ? 'bg-amber-500'
          : 'bg-red-500';

  return (
    <section className="my-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 sm:p-5 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[.18em] text-gray-400">
            Objective Meter · Reader Accuracy Score
          </p>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="text-xl font-black text-gray-900 dark:text-gray-100">
              {pct !== null ? `✅ ${pct}% Objective` : '✅ Be the first to rate'}
            </span>
            {summary.totalRatings > 0 && (
              <span className="text-xs text-gray-500">
                ({summary.totalRatings} {summary.totalRatings === 1 ? 'rating' : 'ratings'})
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            disabled={busy}
            onClick={() => submitVote('objective')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors disabled:opacity-50 ${
              summary.userVerdict === 'objective'
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
            }`}
          >
            ✅ Objective &amp; True {summary.objectiveCount > 0 ? `(${summary.objectiveCount})` : ''}
          </button>

          <button
            type="button"
            disabled={busy}
            onClick={() => submitVote('needs_context')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors disabled:opacity-50 ${
              summary.userVerdict === 'needs_context'
                ? 'bg-amber-600 text-white border-amber-600'
                : 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'
            }`}
          >
            ⚠️ Needs Context {summary.needsContextCount > 0 ? `(${summary.needsContextCount})` : ''}
          </button>
        </div>
      </div>

      <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
        <div className={`h-full ${barColor} transition-all duration-300`} style={{ width: barWidth }} />
      </div>
    </section>
  );
}
