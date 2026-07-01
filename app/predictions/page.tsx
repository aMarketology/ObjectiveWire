import type { Metadata } from 'next';
import Link from 'next/link';
import Hub from '@/components/Hub';
import { PREDICTION_TOPICS } from '@/data/prediction-markets';
import { formatProbability, probabilityColor } from '@/data/prediction-markets';

export const revalidate = 3600;

const SLUG = '/predictions';
const CANONICAL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Sports Prediction Markets | Live Odds, World Cup, NBA, MLB 2026',
  description: 'Live prediction market odds for the biggest sports events of 2026. World Cup winner, NBA Finals, MLB World Series, and golf majors. Kalshi and Polymarket data updated daily.',
  keywords: [
    'sports prediction markets 2026',
    'World Cup 2026 odds Kalshi',
    'NBA Finals 2026 prediction market',
    'MLB World Series 2026 odds',
    'Kalshi sports markets',
    'Polymarket sports 2026',
    'sports betting odds tracker',
    'prediction market watcher',
    'World Cup winner odds',
    'best sports prediction markets',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Sports Prediction Markets | Live Odds 2026',
    description: 'Live Kalshi and Polymarket odds for the World Cup, NBA Finals, MLB, and golf. Updated daily.',
    type: 'website',
    url: CANONICAL,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports Prediction Markets | Live Odds 2026',
    description: 'World Cup, NBA Finals, MLB, golf. Live Kalshi and Polymarket odds tracked daily.',
  },
};

export default function PredictionsHubPage() {
  return (
    <Hub
      title="Predictions"
      subtitle="Live prediction market odds for the biggest sports events of 2026. Sourced from Kalshi and Polymarket. Updated daily."
      badge="Markets"
      badgeColor="from-green-600 to-teal-600"
      updatedAt="2026-06-30"
    >
      <Hub.StatBar
        items={[
          { value: String(PREDICTION_TOPICS.length), label: 'Active Topics' },
          { value: String(PREDICTION_TOPICS.reduce((n, t) => n + t.markets.length, 0)), label: 'Live Markets' },
          { value: 'Kalshi', label: 'Primary Source' },
          { value: 'Daily', label: 'Update Cadence' },
        ]}
        accentColor="text-green-600"
      />

      <Hub.Prose>
        <p>
          ZWire Predictions tracks the biggest active prediction markets across sports — from the{' '}
          <Link href="/world-cup" className="text-blue-600 hover:text-blue-800 underline">2026 FIFA World Cup</Link> to the{' '}
          <Link href="/mlb" className="text-blue-600 hover:text-blue-800 underline">MLB World Series</Link> and{' '}
          <Link href="/golf" className="text-blue-600 hover:text-blue-800 underline">golf majors</Link>.
          We pull implied probabilities and American odds from Kalshi and Polymarket daily, so you can see exactly what the market thinks will happen — without needing a trading account.
        </p>
      </Hub.Prose>

      <Hub.Section title="Active Markets" icon="📊" id="active-markets">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PREDICTION_TOPICS.map((topic) => {
            const featured = topic.markets.find(m => m.id === topic.featuredMarketId);
            const topMarket = [...topic.markets].sort((a, b) => b.probability - a.probability)[0];
            const displayMarket = featured ?? topMarket;

            return (
              <Link
                key={topic.id}
                href={topic.articleSlug}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-400 hover:shadow-md transition-all duration-150"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{topic.emoji}</span>
                    <div>
                      <h2 className="font-black text-gray-900 text-lg leading-tight group-hover:text-blue-600 transition-colors">
                        {topic.title}
                      </h2>
                      <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                        {topic.category}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-full shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Live
                  </span>
                </div>

                {/* Featured market */}
                {displayMarket && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2 leading-snug">{displayMarket.question}</p>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-3xl font-black tabular-nums ${probabilityColor(displayMarket.probability)}`}>
                        {formatProbability(displayMarket.probability)}
                      </span>
                      <span className="text-lg font-black text-gray-700 tabular-nums">
                        {displayMarket.americanOdds}
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          displayMarket.probability >= 60 ? 'bg-green-500' :
                          displayMarket.probability >= 30 ? 'bg-yellow-500' :
                          displayMarket.probability >= 15 ? 'bg-orange-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${displayMarket.probability}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{topic.markets.length} markets tracked</span>
                  <span className="font-semibold text-blue-600 group-hover:text-blue-800">
                    Full breakdown →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Hub.Section>

      <Hub.Section title="How Prediction Markets Work" icon="ℹ️" id="explainer" variant="card">
        <div className="prose prose-gray max-w-none text-gray-700">
          <p>
            Prediction markets are exchanges where people trade contracts on the outcome of real-world events.
            The price of a contract — expressed as a probability — reflects the collective wisdom of all traders.
            When new information hits (a goal is scored, a player is injured, a team advances), prices move instantly.
          </p>
          <p>
            <strong>Kalshi</strong> is a CFTC-regulated US exchange. <strong>Polymarket</strong> is a decentralized
            platform running on Polygon. Both offer sports, politics, and finance markets. ZWire tracks both and
            surfaces the most liquid markets here — no account required to read the data.
          </p>
          <p className="text-sm text-gray-500">
            ZWire does not facilitate trading. All market links go directly to the source platform.
            Verify your local laws before placing any trades.
          </p>
        </div>
      </Hub.Section>

      <Hub.Section title="Related Coverage" icon="📰" id="coverage">
        <Hub.CardGrid columns={3}>
          <Hub.Card
            href="/world-cup"
            emoji="⚽"
            title="World Cup 2026 Hub"
            description="Match results, group standings, and team analysis for the 48-team tournament."
            badge="Live"
            badgeStyle="breaking"
          />
          <Hub.Card
            href="/mlb"
            emoji="⚾"
            title="MLB 2026 Hub"
            description="Standings, scores, and analysis for the 2026 MLB season."
          />
          <Hub.Card
            href="/golf"
            emoji="⛳"
            title="Golf Hub"
            description="PGA Tour, LIV Golf, and major championship coverage."
          />
        </Hub.CardGrid>
      </Hub.Section>
    </Hub>
  );
}
