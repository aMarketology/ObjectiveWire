import type { Metadata } from 'next';
import Link from 'next/link';
import { PredictionsPage } from '@/components/PredictionsPage';
import type { MatchResult, Fixture, MarketAlert } from '@/components/PredictionsPage';
import { WORLD_CUP_2026_TOPIC, PREDICTION_TOPICS } from '@/data/prediction-markets';

export const revalidate = 3600;

const SLUG = '/predict/world-cup/2026';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'World Cup 2026 Winner Odds | Live Kalshi, Polymarket Tracker',
  description: 'Live prediction market odds for the 2026 FIFA World Cup winner. France 20%, England 16%, Brazil 14%. Germany eliminated. Round of 32 fixtures, results, and market alerts. Updated daily.',
  keywords: [
    'World Cup 2026 winner odds',
    'World Cup 2026 Kalshi',
    'World Cup 2026 Polymarket',
    'who will win World Cup 2026',
    'France World Cup 2026 odds',
    'England World Cup 2026 odds',
    'Germany eliminated World Cup 2026',
    'World Cup 2026 round of 32',
    'FIFA World Cup 2026 prediction market',
    'World Cup 2026 live odds tracker',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'World Cup 2026 Winner Odds | Live Kalshi Tracker',
    description: 'France 20%, England 16%, Brazil 14%. Germany OUT. Round of 32 fixtures and live market odds.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-30T08:00:00Z',
    modifiedTime: '2026-06-30T08:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Prediction Markets', 'Kalshi', 'Polymarket', 'Soccer'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Odds | France 20%, England 16%, Germany OUT',
    description: 'Live Kalshi and Polymarket odds. Round of 32 fixtures. Updated daily.',
  },
};

// ─── Market movement alerts ───────────────────────────────────────────────────

const ALERTS: MarketAlert[] = [
  {
    text: 'Germany eliminated',
    detail: 'Ecuador 2-1. Market resolved at 0%. $2.2M volume settled.',
    type: 'resolved',
    timestamp: '2026-06-24T22:00:00Z',
  },
  {
    text: 'England +4pp surge',
    detail: 'Moved from 12% to 16% after advancing from Group L.',
    type: 'surge',
    timestamp: '2026-06-29T20:00:00Z',
  },
  {
    text: 'France hold top spot at 20%',
    detail: 'Favorable Round of 32 draw confirmed. Volume up 18% in 24h.',
    type: 'info',
    timestamp: '2026-06-30T08:00:00Z',
  },
];

// ─── Recent group stage results ───────────────────────────────────────────────

const RESULTS: MatchResult[] = [
  {
    homeTeam: 'Ecuador', awayTeam: 'Germany',
    homeScore: 2, awayScore: 1,
    homeFlag: '🇪🇨', awayFlag: '🇩🇪',
    stage: 'Group E', date: '2026-06-24T20:30:00Z',
    reportHref: '/world-cup/2026/ecuador-2-1-germany-group-e',
    badge: 'UPSET', badgeColor: 'red',
  },
  {
    homeTeam: 'Brazil', awayTeam: 'Scotland',
    homeScore: 3, awayScore: 0,
    homeFlag: '🇧🇷', awayFlag: '🏴',
    stage: 'Group C', date: '2026-06-24T22:00:00Z',
    reportHref: '/world-cup/2026/brazil-3-0-scotland-group-c',
    badge: 'RESULT', badgeColor: 'green',
  },
  {
    homeTeam: 'Argentina', awayTeam: 'Algeria',
    homeScore: 3, awayScore: 0,
    homeFlag: '🇦🇷', awayFlag: '🇩🇿',
    stage: 'Group J', date: '2026-06-16T02:00:00Z',
    reportHref: '/world-cup/2026/argentina-3-algeria-0-group-j',
    badge: 'RESULT', badgeColor: 'blue',
  },
  {
    homeTeam: 'Mexico', awayTeam: 'Czechia',
    homeScore: 3, awayScore: 0,
    homeFlag: '🇲🇽', awayFlag: '🇨🇿',
    stage: 'Group A', date: '2026-06-24T23:00:00Z',
    reportHref: '/world-cup/2026/mexico-3-0-czechia-group-a',
    badge: 'RESULT', badgeColor: 'blue',
  },
  {
    homeTeam: 'Morocco', awayTeam: 'Haiti',
    homeScore: 4, awayScore: 2,
    homeFlag: '🇲🇦', awayFlag: '🇭🇹',
    stage: 'Group C', date: '2026-06-24T20:00:00Z',
    reportHref: '/world-cup/2026/morocco-4-2-haiti-group-c',
    badge: 'RESULT', badgeColor: 'blue',
  },
];

// ─── Round of 32 upcoming fixtures ───────────────────────────────────────────

const FIXTURES: Fixture[] = [
  {
    homeTeam: 'France', awayTeam: 'Saudi Arabia',
    homeFlag: '🇫🇷', awayFlag: '🇸🇦',
    stage: 'Round of 32', kickoff: '2026-07-01T18:00:00Z',
    venue: 'MetLife Stadium, NJ',
    homeOdds: '-450', drawOdds: '+550', awayOdds: '+1200',
  },
  {
    homeTeam: 'England', awayTeam: 'Morocco',
    homeFlag: '🏴', awayFlag: '🇲🇦',
    stage: 'Round of 32', kickoff: '2026-07-01T21:00:00Z',
    venue: 'SoFi Stadium, LA',
    homeOdds: '-280', drawOdds: '+420', awayOdds: '+700',
  },
  {
    homeTeam: 'Brazil', awayTeam: 'Switzerland',
    homeFlag: '🇧🇷', awayFlag: '🇨🇭',
    stage: 'Round of 32', kickoff: '2026-07-02T18:00:00Z',
    venue: 'AT&T Stadium, Dallas',
    homeOdds: '-320', drawOdds: '+450', awayOdds: '+800',
  },
  {
    homeTeam: 'Argentina', awayTeam: 'Ecuador',
    homeFlag: '🇦🇷', awayFlag: '🇪🇨',
    stage: 'Round of 32', kickoff: '2026-07-02T21:00:00Z',
    venue: 'Rose Bowl, LA',
    homeOdds: '-250', drawOdds: '+380', awayOdds: '+650',
  },
  {
    homeTeam: 'Spain', awayTeam: 'USA',
    homeFlag: '🇪🇸', awayFlag: '🇺🇸',
    stage: 'Round of 32', kickoff: '2026-07-03T21:00:00Z',
    venue: 'Arrowhead Stadium, KC',
    homeOdds: '-180', drawOdds: '+310', awayOdds: '+450',
  },
];

// ─── Editorial summary ────────────────────────────────────────────────────────

const SUMMARY = (
  <>
    <p>
      France enter the Round of 32 as the clear market leaders at 20% on Kalshi, backed by a group stage that saw{' '}
      <strong>Kylian Mbappe</strong> score three times without conceding. Their path to the final runs through Saudi Arabia, then likely England or Morocco in the quarter-final.
    </p>
    <p>
      The biggest story of the group stage was{' '}
      <Link href="/world-cup/2026/ecuador-2-1-germany-group-e" className="text-blue-600 hover:text-blue-800 underline">
        Germany's 2-1 elimination by Ecuador
      </Link>
      {' '}— the largest single market crash of the tournament. Germany were trading at 9% on Kalshi before kick-off. The market resolved at 0% within 90 minutes.
    </p>
    <p>
      England's surge to 16% reflects both their clean group stage and the favorable draw. The{' '}
      <Link href="/world-cup/england-world-cup-2026-squad-prediction" className="text-blue-600 hover:text-blue-800 underline">
        England squad depth
      </Link>{' '}
      is the deepest in a generation. Jude Bellingham has been the standout individual of the tournament.
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
