'use client';

interface ArcScoreCardProps {
  score: number;
  tierLabel?: string;
  compact?: boolean;
}

function getArcMeta(score: number) {
  if (score >= 250) {
    return {
      label: 'Trusted Reader',
      badge: '✅ Certified Trusted',
      barColor: 'bg-emerald-500',
      pillClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      nextTarget: null,
      pct: 100,
    };
  }
  if (score >= 50) {
    return {
      label: 'Contributor',
      badge: '✅ Objective Contributor',
      barColor: 'bg-amber-500',
      pillClass: 'bg-amber-50 text-amber-800 border-amber-200',
      nextTarget: 250,
      pct: Math.min(100, Math.round((score / 250) * 100)),
    };
  }
  return {
    label: 'Reader',
    badge: '🌱 Building ARC',
    barColor: 'bg-[#5865F2]',
    pillClass: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    nextTarget: 50,
    pct: Math.min(100, Math.round((score / 50) * 100)),
  };
}

export default function ArcScoreCard({ score, tierLabel, compact = false }: ArcScoreCardProps) {
  const meta = getArcMeta(score);
  const label = tierLabel ?? meta.label;

  if (compact) {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold ${meta.pillClass}`}>
        <span>{meta.badge}</span>
        <span className="tabular-nums">{score} ARC</span>
      </div>
    );
  }

  return (
    <div className="border-2 border-black bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div>
          <p className="text-[10px] font-black tracking-[.2em] uppercase text-gray-400">
            Aura Reading Credit (Audience Score)
          </p>
          <div className="flex items-baseline gap-2.5 mt-1">
            <span className="text-3xl font-black font-serif tabular-nums text-gray-900">{score}</span>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">ARC · {label}</span>
          </div>
        </div>
        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${meta.pillClass}`}>
          {meta.badge}
        </span>
      </div>

      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden border border-gray-200">
        <div
          className={`h-full ${meta.barColor} transition-all duration-500`}
          style={{ width: `${Math.max(meta.pct, score > 0 ? 6 : 0)}%` }}
        />
      </div>

      <p className="text-xs text-gray-500 mt-2.5">
        {meta.nextTarget
          ? `${Math.max(0, meta.nextTarget - score)} ARC away from ${meta.nextTarget === 50 ? 'Contributor (Fact-Check Eligible)' : 'Trusted Reader'}. Earn +2 ARC per verified read.`
          : 'Maximum tier unlocked — full fact-check & triage weight active.'}
      </p>
    </div>
  );
}
