import type { Metadata } from 'next';
import Link from 'next/link';
import { PredictionsPage } from '@/components/PredictionsPage';
import type { MatchResult, Fixture, MarketAlert } from '@/components/PredictionsPage';
import { WORLD_CUP_2026_TOPIC, PREDICTION_TOPICS } from '@/data/prediction-markets';

export const revalidate = 3600;

const SLUG = '/predict/world-cup/2026';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'World Cup 2026 Winner | Spain Champions | Final Result',
  description: 'Spain won the 2026 FIFA World Cup, defeating Argentina 1-0 after extra time in the final at MetLife Stadium. Ferran Torres scored the winner. Full results, bracket, and market history.',
  keywords: [
    'World Cup 2026 winner',
    'Spain World Cup 2026 champions',
    'World Cup 2026 final result',
    'Spain vs Argentina final',
    'who won World Cup 2026',
    'Ferran Torres winning goal',
    'World Cup 2026 Kalshi resolved',
    'World Cup 2026 Polymarket resolved',
    'World Cup 2026 bracket results',
    'FIFA World Cup 2026 champion',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'World Cup 2026 Winner | Spain Champions',
    description: 'Spain 1-0 Argentina (AET). Ferran Torres scored the winner in the 106th minute. Full tournament results and market history.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-30T08:00:00Z',
    modifiedTime: '2026-07-19T22:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Prediction Markets', 'Kalshi', 'Polymarket', 'Soccer', 'Spain', 'Champions'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Winner | Spain Champions',
    description: 'Spain defeat Argentina 1-0 (AET) to win the 2026 World Cup. Full results and market history.',
  },
};

// ─── Market movement alerts ───────────────────────────────────────────────────

const ALERTS: MarketAlert[] = [
  {
    text: 'Spain crowned World Cup champions',
    detail: 'Defeated Argentina 1-0 AET in the final. Market resolved at 100%. $6.4M volume settled.',
    type: 'resolved',
    timestamp: '2026-07-19T22:00:00Z',
  },
  {
    text: 'Argentina eliminated in the final',
    detail: 'Lost 1-0 after extra time despite Dibu Martinez\'s record 12 saves. Market resolved at 0%.',
    type: 'resolved',
    timestamp: '2026-07-19T22:00:00Z',
  },
  {
    text: 'England eliminated in the semifinals',
    detail: 'Lost 1-0 to Argentina. Finished third after defeating France 6-4 in the bronze-medal match.',
    type: 'resolved',
    timestamp: '2026-07-15T21:00:00Z',
  },
  {
    text: 'France eliminated in the semifinals',
    detail: 'Lost 2-1 to Spain. Market resolved at 0%. $5.1M volume settled.',
    type: 'resolved',
    timestamp: '2026-07-15T19:00:00Z',
  },
  {
    text: 'Germany eliminated',
    detail: 'Ecuador 2-1. Market resolved at 0%. $2.2M volume settled.',
    type: 'resolved',
    timestamp: '2026-06-24T22:00:00Z',
  },
];

// ─── Recent group stage results ───────────────────────────────────────────────

const RESULTS: MatchResult[] = [
  {
    homeTeam: 'Spain', awayTeam: 'Argentina',
    homeScore: 1, awayScore: 0,
    homeFlag: '🇪🇸', awayFlag: '🇦🇷',
    stage: 'Final (AET)', date: '2026-07-19T22:00:00Z',
    reportHref: '/world-cup/2026/spain-1-0-argentina-final-aet',
    badge: 'CHAMPION', badgeColor: 'green',
  },
  {
    homeTeam: 'England', awayTeam: 'France',
    homeScore: 6, awayScore: 4,
    homeFlag: '🏴', awayFlag: '🇫🇷',
    stage: 'Third Place', date: '2026-07-18T20:00:00Z',
    reportHref: '/world-cup/2026/england-6-4-france-third-place',
    badge: 'RESULT', badgeColor: 'blue',
  },
  {
    homeTeam: 'Argentina', awayTeam: 'England',
    homeScore: 1, awayScore: 0,
    homeFlag: '🇦🇷', awayFlag: '🏴',
    stage: 'Semifinal', date: '2026-07-15T21:00:00Z',
    badge: 'RESULT', badgeColor: 'blue',
  },
  {
    homeTeam: 'Spain', awayTeam: 'France',
    homeScore: 2, awayScore: 1,
    homeFlag: '🇪🇸', awayFlag: '🇫🇷',
    stage: 'Semifinal', date: '2026-07-15T19:00:00Z',
    badge: 'RESULT', badgeColor: 'blue',
  },
  {
    homeTeam: 'Argentina', awayTeam: 'Switzerland',
    homeScore: 2, awayScore: 0,
    homeFlag: '🇦🇷', awayFlag: '🇨🇭',
    stage: 'Quarterfinal', date: '2026-07-11T22:00:00Z',
    reportHref: '/world-cup/2026/argentina-2-0-switzerland-quarterfinal',
    badge: 'RESULT', badgeColor: 'blue',
  },
];

// ─── Tournament is complete — no upcoming fixtures ───────────────────────────

const FIXTURES: Fixture[] = [];

// ─── Editorial summary ────────────────────────────────────────────────────────

const SUMMARY = (
  <>
    <p>
      <strong>Spain are the 2026 FIFA World Cup champions</strong>, defeating Argentina 1-0 after extra time in a final that needed 106 minutes, a disallowed VAR goal, and a record goalkeeping performance to produce a winner. It is Spain's second World Cup title in modern history, and the market that had them favored throughout the knockout rounds resolved at 100% shortly after the final whistle at MetLife Stadium.
    </p>
    <p>
      Full coverage of the final is available in{' '}
      <Link href="/world-cup/2026/spain-1-0-argentina-final-aet" className="text-blue-600 hover:text-blue-800 underline">
        Spain 1-0 Argentina AET | Ferran Torres Delivers World Cup Glory
      </Link>
      , covering the disallowed Nico Williams goal, Enzo Fernandez's red card, and Emiliano Martinez's final-record 12 saves.
    </p>
    <p>
      Before the final, Miami Stadium hosted the most absurd third-place match in World Cup history.{' '}
      <Link href="/world-cup/2026/england-6-4-france-third-place" className="text-blue-600 hover:text-blue-800 underline">
        England defeated France 6-4
      </Link>
      {' '}in a 10-goal thriller that saw Bukayo Saka score a hat-trick and Kylian Mbappe surpass Lionel Messi as the all-time leading World Cup goalscorer.
    </p>
    <p>
      The biggest market-moving story of the group stage remains{' '}
      <Link href="/world-cup/2026/ecuador-2-1-germany-group-e" className="text-blue-600 hover:text-blue-800 underline">
        Germany's 2-1 elimination by Ecuador
      </Link>
      , the largest single market crash of the tournament. Germany were trading at 9% on Kalshi before kickoff and resolved at 0% within 90 minutes.
    </p>
    <p>
      For the full tournament schedule and bracket, see the{' '}
      <Link href="/world-cup/world-cup-2026-schedule-dates" className="text-blue-600 hover:text-blue-800 underline">
        World Cup 2026 schedule and dates
      </Link>. For pre-tournament odds analysis, see the{' '}
      <Link href="/world-cup/world-cup-2026-favorites-odds-preview" className="text-blue-600 hover:text-blue-800 underline">
        World Cup 2026 favorites preview
      </Link>.
    </p>
  </>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WorldCup2026PredictPage() {
  const relatedTopics = PREDICTION_TOPICS.filter(t => t.id !== 'world-cup-2026-winner');

  return (
    <PredictionsPage
      topic={WORLD_CUP_2026_TOPIC}
      hubHref="/predictions"
      relatedTopics={relatedTopics}
      results={RESULTS}
      fixtures={FIXTURES}
      alerts={ALERTS}
      summary={SUMMARY}
    />
  );
}
