'use client';

// =============================================================================
// components/PredictionsPage.tsx
// =============================================================================
// Full prediction market hub dashboard.
// Renders: live odds leaderboard, match results, upcoming fixtures,
// market movement alerts, and related markets.
//
// Usage:
//   <PredictionsPage
//     topic={topic}
//     results={MATCH_RESULTS}
//     fixtures={UPCOMING_FIXTURES}
//     alerts={MARKET_ALERTS}
//   />
// =============================================================================

import Link from 'next/link';
import type { PredictionTopic, PredictionMarket } from '@/data/prediction-markets';
import { formatProbability, probabilityColor, probabilityBarColor } from '@/data/prediction-markets';

// ─── Shared types ─────────────────────────────────────────────────────────────

export interface MatchResult {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  stage: string;       // e.g. "Group E", "Round of 32"
  date: string;        // ISO 8601
  /** Optional link to the match report article */
  reportHref?: string;
  /** Flag emoji for home team */
  homeFlag?: string;
  /** Flag emoji for away team */
  awayFlag?: string;
  /** e.g. "UPSET" | "RESULT" | "LIVE" */
  badge?: string;
  badgeColor?: 'red' | 'green' | 'blue' | 'gray';
}

export interface Fixture {
  homeTeam: string;
  awayTeam: string;
  homeFlag?: string;
  awayFlag?: string;
  stage: string;
  kickoff: string;     // ISO 8601
  venue?: string;
  /** Optional Kalshi/Polymarket odds for home win */
  homeOdds?: string;
  /** Optional odds for away win */
  awayOdds?: string;
  /** Optional odds for draw */
  drawOdds?: string;
}

export interface MarketAlert {
  text: string;
  /** e.g. "Germany eliminated — market resolved at 0%" */
  detail?: string;
  type: 'surge' | 'crash' | 'resolved' | 'info';
  timestamp: string;   // ISO 8601
}

// ─── Platform badge ───────────────────────────────────────────────────────────

const platformColors: Record<string, string> = {
  Kalshi:     'bg-[#00d4aa]/10 text-[#00a882] border border-[#00d4aa]/30',
  Polymarket: 'bg-blue-50 text-blue-700 border border-blue-200',
  PredictIt:  'bg-purple-50 text-purple-700 border border-purple-200',
  Manifold:   'bg-pink-50 text-pink-700 border border-pink-200',
};
const platformDots: Record<string, string> = {
  Kalshi:     'bg-[#00d4aa]',
  Polymarket: 'bg-blue-500',
  PredictIt:  'bg-purple-500',
  Manifold:   'bg-pink-500',
};

// ─── 24h change badge ─────────────────────────────────────────────────────────

function ChangeBadge({ change }: { change?: number }) {
  if (change === undefined || change === 0) return <span className="text-xs text-gray-400">—</span>;
  const up = change > 0;
  return (
    <span className={`inline-flex items-center gap-0.5 text-xs font-bold px-1.5 py-0.5 rounded ${up ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
      {up ? '▲' : '▼'} {Math.abs(change)}pp
    </span>
  );
}

// ─── Market row ───────────────────────────────────────────────────────────────

function MarketRow({ market, rank }: { market: PredictionMarket; rank: number }) {
  const isResolved = market.status === 'resolved';
  const isWinner = market.resolvedOutcome === 'won';
  const barColor = isWinner ? 'bg-amber-400' : isResolved ? 'bg-gray-300' : probabilityBarColor(market.probability);
  const probColor = isWinner ? 'text-amber-600' : isResolved ? 'text-gray-400' : probabilityColor(market.probability);

  return (
    <div className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${
      isWinner
        ? 'bg-amber-50 border-amber-300 shadow-sm'
        : isResolved
          ? 'bg-gray-50 border-gray-100 opacity-60'
          : 'bg-white border-gray-100 hover:border-gray-300 hover:shadow-sm'
    }`}>
      {/* Rank */}
      <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${
        isWinner ? 'bg-amber-400 text-white' : isResolved ? 'bg-gray-200 text-gray-400' : 'bg-gray-100 text-gray-500'
      }`}>
        {isWinner ? '🏆' : isResolved ? '✕' : rank}
      </div>

      {/* Question + bar */}
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold leading-snug mb-2 ${
          isWinner ? 'text-gray-900' : isResolved ? 'text-gray-400 line-through' : 'text-gray-900'
        }`}>
          {market.question}
        </p>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className={`h-full rounded-full ${barColor}`} style={{ width: `${isWinner ? 100 : market.probability}%` }} />
        </div>
      </div>

      {/* Stats */}
      <div className="shrink-0 text-right flex flex-col items-end gap-1">
        <span className={`text-xl font-black tabular-nums ${probColor}`}>
          {isWinner ? 'WON' : isResolved ? 'OUT' : formatProbability(market.probability)}
        </span>
        <div className="flex items-center gap-2">
          {!isWinner && <ChangeBadge change={market.change24h} />}
          {!isResolved && (
            <span className="text-sm font-bold text-gray-600 tabular-nums">{market.americanOdds}</span>
          )}
        </div>
        <a
          href={market.platformUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-md ${platformColors[market.platform] ?? 'bg-gray-100 text-gray-600'}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${platformDots[market.platform] ?? 'bg-gray-400'}`} />
          {market.platform}
        </a>
      </div>
    </div>
  );
}

// ─── Result card ──────────────────────────────────────────────────────────────

function ResultCard({ r }: { r: MatchResult }) {
  const badgeCls = {
    red:   'bg-red-100 text-red-700',
    green: 'bg-green-100 text-green-700',
    blue:  'bg-blue-100 text-blue-700',
    gray:  'bg-gray-100 text-gray-600',
  }[r.badgeColor ?? 'gray'];

  const inner = (
    <div className="bg-white border border-gray-100 rounded-xl p-4 hover:border-gray-300 hover:shadow-sm transition-all">
      {r.badge && (
        <span className={`inline-block text-xs font-black uppercase tracking-widest px-2 py-0.5 rounded mb-2 ${badgeCls}`}>
          {r.badge}
        </span>
      )}
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 text-right">
          <p className="font-black text-gray-900 text-sm leading-tight">{r.homeFlag} {r.homeTeam}</p>
        </div>
        <div className="shrink-0 text-center px-3">
          <span className="text-2xl font-black text-gray-900 tabular-nums">{r.homeScore}–{r.awayScore}</span>
        </div>
        <div className="flex-1 text-left">
          <p className="font-black text-gray-900 text-sm leading-tight">{r.awayFlag} {r.awayTeam}</p>
        </div>
      </div>
      <p className="text-xs text-gray-400 text-center mt-2">
        {r.stage} · {new Date(r.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
      </p>
    </div>
  );

  return r.reportHref ? (
    <Link href={r.reportHref} className="block">{inner}</Link>
  ) : (
    <div>{inner}</div>
  );
}

// ─── Fixture card ─────────────────────────────────────────────────────────────

function FixtureCard({ f }: { f: Fixture }) {
  const kickoff = new Date(f.kickoff);
  const isToday = new Date().toDateString() === kickoff.toDateString();
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4">
      {isToday && (
        <span className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-widest text-green-700 bg-green-100 px-2 py-0.5 rounded mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Today
        </span>
      )}
      <div className="flex items-center justify-between gap-2 mb-3">
        <p className="font-black text-gray-900 text-sm flex-1 text-right">{f.homeFlag} {f.homeTeam}</p>
        <span className="text-xs font-bold text-gray-400 px-2">vs</span>
        <p className="font-black text-gray-900 text-sm flex-1 text-left">{f.awayFlag} {f.awayTeam}</p>
      </div>
      {(f.homeOdds || f.awayOdds) && (
        <div className="flex items-center justify-center gap-3 mb-2 text-xs">
          {f.homeOdds && <span className="bg-gray-100 rounded px-2 py-0.5 font-bold text-gray-700">{f.homeTeam} {f.homeOdds}</span>}
          {f.drawOdds && <span className="bg-gray-100 rounded px-2 py-0.5 font-bold text-gray-500">Draw {f.drawOdds}</span>}
          {f.awayOdds && <span className="bg-gray-100 rounded px-2 py-0.5 font-bold text-gray-700">{f.awayTeam} {f.awayOdds}</span>}
        </div>
      )}
      <p className="text-xs text-gray-400 text-center">
        {f.stage} · {kickoff.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} · {kickoff.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZoneName: 'short' })}
        {f.venue && ` · ${f.venue}`}
      </p>
    </div>
  );
}

// ─── Alert strip ─────────────────────────────────────────────────────────────

function AlertStrip({ alerts }: { alerts: MarketAlert[] }) {
  const icons = { surge: '📈', crash: '📉', resolved: '🔒', info: 'ℹ️' };
  const colors = {
    surge:    'bg-green-50 border-green-200 text-green-900',
    crash:    'bg-red-50 border-red-200 text-red-900',
    resolved: 'bg-gray-100 border-gray-200 text-gray-700',
    info:     'bg-blue-50 border-blue-200 text-blue-900',
  };
  return (
    <div className="flex flex-col gap-2 mb-6">
      {alerts.map((a, i) => (
        <div key={i} className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm ${colors[a.type]}`}>
          <span className="shrink-0 text-base">{icons[a.type]}</span>
          <div>
            <span className="font-bold">{a.text}</span>
            {a.detail && <span className="ml-1 opacity-75">{a.detail}</span>}
            <span className="ml-2 text-xs opacity-50">
              {new Date(a.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

interface PredictionsPageProps {
  topic: PredictionTopic;
  hubHref?: string;
  relatedTopics?: PredictionTopic[];
  results?: MatchResult[];
  fixtures?: Fixture[];
  alerts?: MarketAlert[];
  /** Optional editorial summary shown below the hero */
  summary?: React.ReactNode;
}

export function PredictionsPage({
  topic,
  hubHref = '/predictions',
  relatedTopics,
  results = [],
  fixtures = [],
  alerts = [],
  summary,
}: PredictionsPageProps) {
  const sortedMarkets = [...topic.markets].sort((a, b) => {
    if (a.resolvedOutcome === 'won') return -1;
    if (b.resolvedOutcome === 'won') return 1;
    if (a.status === 'resolved' && b.status !== 'resolved') return 1;
    if (b.status === 'resolved' && a.status !== 'resolved') return -1;
    return b.probability - a.probability;
  });
  const openMarkets = sortedMarkets.filter(m => m.status === 'open');
  const champion = sortedMarkets.find(m => m.resolvedOutcome === 'won');
  const liveCount = openMarkets.length;
  const isTournamentComplete = liveCount === 0 && !!champion;
  const topMarket = champion ?? openMarkets[0];

  const lastUpdated = new Date(topic.lastUpdated).toLocaleString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
    hour: 'numeric', minute: '2-digit', timeZoneName: 'short',
  });

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <main className="max-w-5xl mx-auto px-4 py-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span>/</span>
          <Link href={hubHref} className="hover:text-gray-900">Predictions</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{topic.title}</span>
        </nav>

        {/* ── HERO ── */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{topic.emoji}</span>
            {isTournamentComplete ? (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                🏁 Final Result
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-green-700 bg-green-100 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                {liveCount} Live Markets
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-3">{topic.title}</h1>
          <p className="text-lg text-gray-600 mb-2">{topic.description}</p>
          <p className="text-xs text-gray-400">Updated: {lastUpdated} · Kalshi + Polymarket · Not financial advice.</p>
        </header>

        {/* ── FEATURED MARKET HERO CARD ── */}
        {topMarket && isTournamentComplete && (
          <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl p-6 text-white mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-100 mb-1">🏆 Champion</p>
            <p className="text-lg font-semibold mb-4 leading-snug">{topMarket.question.replace(/^Will /, '').replace(/\?$/, '')}</p>
            <div className="flex items-end gap-6 mb-4">
              <div>
                <span className="text-6xl font-black tabular-nums text-white">WON</span>
                <p className="text-xs text-amber-100 mt-1">market resolved YES</p>
              </div>
              <div className="ml-auto text-right">
                <a href={topMarket.platformUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-amber-100 transition-colors underline">
                  View resolved market on {topMarket.platform} →
                </a>
                {topMarket.volume && <p className="text-xs text-amber-100 mt-0.5">Vol: {topMarket.volume}</p>}
              </div>
            </div>
            <div className="h-2 bg-amber-900/30 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full" style={{ width: '100%' }} />
            </div>
          </div>
        )}

        {/* ── FEATURED MARKET HERO CARD (live tournaments) ── */}
        {topMarket && !isTournamentComplete && (
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Current Favorite</p>
            <p className="text-lg font-semibold mb-4 leading-snug">{topMarket.question}</p>
            <div className="flex items-end gap-6 mb-4">
              <div>
                <span className="text-6xl font-black tabular-nums text-green-400">{formatProbability(topMarket.probability)}</span>
                <p className="text-xs text-gray-400 mt-1">implied probability</p>
              </div>
              <div>
                <span className="text-3xl font-black text-white tabular-nums">{topMarket.americanOdds}</span>
                <p className="text-xs text-gray-400 mt-1">American odds</p>
              </div>
              {topMarket.change24h !== undefined && topMarket.change24h !== 0 && (
                <div>
                  <span className={`text-2xl font-black ${topMarket.change24h > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {topMarket.change24h > 0 ? '+' : ''}{topMarket.change24h}pp
                  </span>
                  <p className="text-xs text-gray-400 mt-1">24h change</p>
                </div>
              )}
              <div className="ml-auto text-right">
                <a href={topMarket.platformUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#00d4aa] hover:text-white transition-colors">
                  View on {topMarket.platform} →
                </a>
                {topMarket.volume && <p className="text-xs text-gray-500 mt-0.5">Vol: {topMarket.volume}</p>}
              </div>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-green-400 rounded-full transition-all" style={{ width: `${topMarket.probability}%` }} />
            </div>
          </div>
        )}

        {/* ── MARKET ALERTS ── */}
        {alerts.length > 0 && <AlertStrip alerts={alerts} />}

        {/* ── MAIN GRID: odds left, fixtures/results right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 mb-10">

          {/* LEFT — Full odds leaderboard */}
          <section>
            <h2 className="text-lg font-black text-gray-900 mb-3 flex items-center gap-2">
              📊 All Markets
              <span className="text-sm font-normal text-gray-400">({liveCount} open · {sortedMarkets.length - liveCount} resolved)</span>
            </h2>
            <div className="flex flex-col gap-2">
              {sortedMarkets.map((market, i) => (
                <MarketRow key={market.id} market={market} rank={i + 1} />
              ))}
            </div>

            {/* How to read */}
            <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-5 text-sm text-blue-900">
              <p className="font-black mb-2">ℹ️ How to read these odds</p>
              <ul className="space-y-1 text-blue-800 text-xs">
                <li><strong>%</strong> — implied probability. 20% = 1-in-5 chance.</li>
                <li><strong>+400</strong> — bet $100, win $400 profit. <strong>-110</strong> — bet $110 to win $100.</li>
                <li><strong>▲/▼ pp</strong> — percentage point move in 24h. Big moves = new information.</li>
                <li><strong>Vol</strong> — total traded. Higher = more reliable price signal.</li>
              </ul>
            </div>
          </section>

          {/* RIGHT — Fixtures + Results */}
          <aside className="flex flex-col gap-6">

            {/* Upcoming fixtures */}
            {fixtures.length > 0 && (
              <section>
                <h2 className="text-lg font-black text-gray-900 mb-3 flex items-center gap-2">
                  🗓️ Upcoming Fixtures
                </h2>
                <div className="flex flex-col gap-3">
                  {fixtures.map((f, i) => <FixtureCard key={i} f={f} />)}
                </div>
              </section>
            )}

            {/* Recent results */}
            {results.length > 0 && (
              <section>
                <h2 className="text-lg font-black text-gray-900 mb-3 flex items-center gap-2">
                  📋 Recent Results
                </h2>
                <div className="flex flex-col gap-3">
                  {results.map((r, i) => <ResultCard key={i} r={r} />)}
                </div>
                <Link href="/world-cup/2026" className="block mt-3 text-center text-sm font-bold text-blue-600 hover:text-blue-800 underline">
                  All match reports →
                </Link>
              </section>
            )}

          </aside>
        </div>

        {/* ── EDITORIAL SUMMARY ── */}
        {summary && (
          <section className="bg-white border border-gray-200 rounded-2xl p-8 mb-10">
            <h2 className="text-xl font-black text-gray-900 mb-4">Editorial Analysis</h2>
            <div className="prose prose-gray max-w-none text-gray-700 text-base leading-relaxed">
              {summary}
            </div>
          </section>
        )}

        {/* ── RELATED MARKETS ── */}
        {relatedTopics && relatedTopics.length > 0 && (
          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4">More Markets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedTopics.map((t) => {
                const featured = t.markets.find(m => m.id === t.featuredMarketId) ?? t.markets[0];
                return (
                  <Link key={t.id} href={t.articleSlug}
                    className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-400 hover:shadow-sm transition-all group">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{t.emoji}</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{t.category}</span>
                    </div>
                    <h3 className="font-black text-gray-900 group-hover:text-blue-600 transition-colors mb-1 text-sm">{t.title}</h3>
                    {featured && (
                      <p className="text-xs text-gray-500">
                        Top: <span className={`font-bold ${probabilityColor(featured.probability)}`}>{formatProbability(featured.probability)}</span> · {featured.americanOdds}
                      </p>
                    )}
                  </Link>
                );
              })}
            </div>
          </section>
        )}

      </main>
    </div>
  );
}

export default PredictionsPage;
