// =============================================================================
// data/prediction-markets.ts
// =============================================================================
// Single source of truth for all active prediction market data on ZWire.
//
// HOW TO UPDATE:
//   1. Check Kalshi: https://kalshi.com/markets
//   2. Check Polymarket: https://polymarket.com
//   3. Update the `probability` and `lastUpdated` fields below.
//   4. Run: npx tsx scripts/sync-registry.ts --write
//
// ADDING A NEW TOPIC:
//   1. Add a new PredictionTopic object to the PREDICTION_TOPICS array.
//   2. Add a new PredictionMarket[] to PREDICTION_MARKETS under that topicId.
//   3. Create a sub-article at app/predictions/[topic-slug]/page.tsx
// =============================================================================

export type MarketPlatform = 'Kalshi' | 'Polymarket' | 'PredictIt' | 'Manifold';
export type MarketStatus = 'open' | 'suspended' | 'resolved';
export type MarketCategory = 'sports' | 'politics' | 'finance' | 'entertainment' | 'world';

export interface PredictionMarket {
  id: string;
  question: string;
  /** 0–100 integer. The current implied probability from the market. */
  probability: number;
  /** American odds equivalent, e.g. "+350" or "-180" */
  americanOdds: string;
  platform: MarketPlatform;
  platformUrl: string;
  status: MarketStatus;
  /** ISO 8601 — when the market closes / resolves */
  closingDate: string;
  /** ISO 8601 — when this data was last manually verified */
  lastUpdated: string;
  /** Optional: 24h probability change in percentage points, e.g. +5 or -12 */
  change24h?: number;
  /** Optional: total volume traded on this market */
  volume?: string;
}

export interface PredictionTopic {
  id: string;
  /** Display title for the topic card */
  title: string;
  /** Short description for the hub card */
  description: string;
  category: MarketCategory;
  emoji: string;
  /** Route to the deep-dive article, e.g. /predictions/world-cup-2026-winner */
  articleSlug: string;
  /** ISO 8601 — when this topic was last updated */
  lastUpdated: string;
  /** The single most important market for this topic (shown on hub card) */
  featuredMarketId: string;
  markets: PredictionMarket[];
}

// =============================================================================
// WORLD CUP 2026 — Who Wins the Tournament
// =============================================================================

const worldCupMarkets: PredictionMarket[] = [
  {
    id: 'wc2026-france',
    question: 'Will France win the 2026 FIFA World Cup?',
    probability: 18,
    americanOdds: '+456',
    platform: 'Kalshi',
    platformUrl: 'https://kalshi.com/markets/worldcup',
    status: 'open',
    closingDate: '2026-07-19T23:59:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: -2,
    volume: '$4.2M',
  },
  {
    id: 'wc2026-england',
    question: 'Will England win the 2026 FIFA World Cup?',
    probability: 14,
    americanOdds: '+614',
    platform: 'Kalshi',
    platformUrl: 'https://kalshi.com/markets/worldcup',
    status: 'open',
    closingDate: '2026-07-19T23:59:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: +3,
    volume: '$3.1M',
  },
  {
    id: 'wc2026-brazil',
    question: 'Will Brazil win the 2026 FIFA World Cup?',
    probability: 13,
    americanOdds: '+669',
    platform: 'Polymarket',
    platformUrl: 'https://polymarket.com/event/2026-fifa-world-cup-winner',
    status: 'open',
    closingDate: '2026-07-19T23:59:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: +1,
    volume: '$2.8M',
  },
  {
    id: 'wc2026-argentina',
    question: 'Will Argentina win the 2026 FIFA World Cup?',
    probability: 12,
    americanOdds: '+733',
    platform: 'Polymarket',
    platformUrl: 'https://polymarket.com/event/2026-fifa-world-cup-winner',
    status: 'open',
    closingDate: '2026-07-19T23:59:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: -1,
    volume: '$2.5M',
  },
  {
    id: 'wc2026-spain',
    question: 'Will Spain win the 2026 FIFA World Cup?',
    probability: 11,
    americanOdds: '+809',
    platform: 'Kalshi',
    platformUrl: 'https://kalshi.com/markets/worldcup',
    status: 'open',
    closingDate: '2026-07-19T23:59:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: 0,
    volume: '$1.9M',
  },
  {
    id: 'wc2026-portugal',
    question: 'Will Portugal win the 2026 FIFA World Cup?',
    probability: 7,
    americanOdds: '+1329',
    platform: 'Kalshi',
    platformUrl: 'https://kalshi.com/markets/worldcup',
    status: 'open',
    closingDate: '2026-07-19T23:59:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: -1,
    volume: '$980K',
  },
  {
    id: 'wc2026-usa',
    question: 'Will the USA win the 2026 FIFA World Cup?',
    probability: 5,
    americanOdds: '+1900',
    platform: 'Kalshi',
    platformUrl: 'https://kalshi.com/markets/worldcup',
    status: 'open',
    closingDate: '2026-07-19T23:59:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: +2,
    volume: '$1.1M',
  },
];

// =============================================================================
// NBA FINALS 2026
// =============================================================================

const nbaFinalsMarkets: PredictionMarket[] = [
  {
    id: 'nba2026-knicks',
    question: 'Will the New York Knicks win the 2026 NBA Championship?',
    probability: 52,
    americanOdds: '-108',
    platform: 'Kalshi',
    platformUrl: 'https://kalshi.com/markets/nba',
    status: 'open',
    closingDate: '2026-07-05T23:59:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: +3,
    volume: '$8.4M',
  },
  {
    id: 'nba2026-spurs',
    question: 'Will the San Antonio Spurs win the 2026 NBA Championship?',
    probability: 48,
    americanOdds: '+108',
    platform: 'Kalshi',
    platformUrl: 'https://kalshi.com/markets/nba',
    status: 'open',
    closingDate: '2026-07-05T23:59:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: -3,
    volume: '$8.4M',
  },
];

// =============================================================================
// MLB WORLD SERIES 2026
// =============================================================================

const mlbWorldSeriesMarkets: PredictionMarket[] = [
  {
    id: 'mlb2026-dodgers',
    question: 'Will the LA Dodgers win the 2026 World Series?',
    probability: 22,
    americanOdds: '+355',
    platform: 'Kalshi',
    platformUrl: 'https://kalshi.com/markets/mlb',
    status: 'open',
    closingDate: '2026-10-31T23:59:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: 0,
    volume: '$3.2M',
  },
  {
    id: 'mlb2026-yankees',
    question: 'Will the New York Yankees win the 2026 World Series?',
    probability: 14,
    americanOdds: '+614',
    platform: 'Kalshi',
    platformUrl: 'https://kalshi.com/markets/mlb',
    status: 'open',
    closingDate: '2026-10-31T23:59:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: -1,
    volume: '$1.8M',
  },
  {
    id: 'mlb2026-phillies',
    question: 'Will the Philadelphia Phillies win the 2026 World Series?',
    probability: 11,
    americanOdds: '+809',
    platform: 'Polymarket',
    platformUrl: 'https://polymarket.com/event/2026-mlb-world-series',
    status: 'open',
    closingDate: '2026-10-31T23:59:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: +2,
    volume: '$1.1M',
  },
];

// =============================================================================
// GOLF — 2026 Open Championship (The Open, Royal Portrush, July 16-19)
// =============================================================================

const openChampionshipMarkets: PredictionMarket[] = [
  {
    id: 'open2026-mcilroy',
    question: 'Will Rory McIlroy win The Open Championship 2026?',
    probability: 14,
    americanOdds: '+614',
    platform: 'Kalshi',
    platformUrl: 'https://kalshi.com/markets/golf',
    status: 'open',
    closingDate: '2026-07-19T18:00:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: +1,
    volume: '$890K',
  },
  {
    id: 'open2026-scheffler',
    question: 'Will Scottie Scheffler win The Open Championship 2026?',
    probability: 12,
    americanOdds: '+733',
    platform: 'Kalshi',
    platformUrl: 'https://kalshi.com/markets/golf',
    status: 'open',
    closingDate: '2026-07-19T18:00:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: 0,
    volume: '$760K',
  },
  {
    id: 'open2026-woods',
    question: 'Will Tiger Woods win The Open Championship 2026?',
    probability: 3,
    americanOdds: '+3233',
    platform: 'Polymarket',
    platformUrl: 'https://polymarket.com/event/the-open-2026',
    status: 'open',
    closingDate: '2026-07-19T18:00:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: 0,
    volume: '$420K',
  },
];

// =============================================================================
// MASTER TOPICS ARRAY — drives the /predictions hub page
// =============================================================================

export const PREDICTION_TOPICS: PredictionTopic[] = [
  {
    id: 'world-cup-2026-winner',
    title: 'World Cup 2026 Winner',
    description: 'France lead the field at 18% on Kalshi. England surging after group stage. Brazil and Argentina both live. Tournament final July 19.',
    category: 'sports',
    emoji: '⚽',
    articleSlug: '/predictions/world-cup-2026-winner',
    lastUpdated: '2026-06-30T08:00:00Z',
    featuredMarketId: 'wc2026-france',
    markets: worldCupMarkets,
  },
  {
    id: 'nba-finals-2026',
    title: 'NBA Finals 2026 | Knicks vs Spurs',
    description: 'Knicks are slight favorites at 52% on Kalshi. Wembanyama vs KAT. Series tied 2-2 heading into Game 5.',
    category: 'sports',
    emoji: '🏀',
    articleSlug: '/predictions/nba-finals-2026',
    lastUpdated: '2026-06-30T08:00:00Z',
    featuredMarketId: 'nba2026-knicks',
    markets: nbaFinalsMarkets,
  },
  {
    id: 'mlb-world-series-2026',
    title: 'MLB World Series 2026',
    description: 'Dodgers remain the heavy favorites at 22% on Kalshi. Yankees and Phillies the main challengers in a wide-open field.',
    category: 'sports',
    emoji: '⚾',
    articleSlug: '/predictions/mlb-world-series-2026',
    lastUpdated: '2026-06-30T08:00:00Z',
    featuredMarketId: 'mlb2026-dodgers',
    markets: mlbWorldSeriesMarkets,
  },
  {
    id: 'open-championship-2026',
    title: 'The Open Championship 2026',
    description: 'Royal Portrush hosts The Open July 16-19. McIlroy the sentimental and market favorite at 14% on home soil.',
    category: 'sports',
    emoji: '⛳',
    articleSlug: '/predictions/open-championship-2026',
    lastUpdated: '2026-06-30T08:00:00Z',
    featuredMarketId: 'open2026-mcilroy',
    markets: openChampionshipMarkets,
  },
];

// =============================================================================
// WORLD CUP 2026 — Full tournament tracker (post-group-stage odds)
// Updated: June 30, 2026 — Germany eliminated by Ecuador, Round of 32 set
// =============================================================================

const worldCupFullMarkets: PredictionMarket[] = [
  {
    id: 'wc26-france',
    question: 'France to win the 2026 FIFA World Cup',
    probability: 20,
    americanOdds: '+400',
    platform: 'Kalshi',
    platformUrl: 'https://kalshi.com/markets/worldcup',
    status: 'open',
    closingDate: '2026-07-19T23:59:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: +2,
    volume: '$5.1M',
  },
  {
    id: 'wc26-england',
    question: 'England to win the 2026 FIFA World Cup',
    probability: 16,
    americanOdds: '+525',
    platform: 'Kalshi',
    platformUrl: 'https://kalshi.com/markets/worldcup',
    status: 'open',
    closingDate: '2026-07-19T23:59:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: +4,
    volume: '$3.8M',
  },
  {
    id: 'wc26-brazil',
    question: 'Brazil to win the 2026 FIFA World Cup',
    probability: 14,
    americanOdds: '+614',
    platform: 'Polymarket',
    platformUrl: 'https://polymarket.com/event/2026-fifa-world-cup-winner',
    status: 'open',
    closingDate: '2026-07-19T23:59:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: +1,
    volume: '$3.2M',
  },
  {
    id: 'wc26-argentina',
    question: 'Argentina to win the 2026 FIFA World Cup',
    probability: 13,
    americanOdds: '+669',
    platform: 'Polymarket',
    platformUrl: 'https://polymarket.com/event/2026-fifa-world-cup-winner',
    status: 'open',
    closingDate: '2026-07-19T23:59:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: -1,
    volume: '$2.9M',
  },
  {
    id: 'wc26-spain',
    question: 'Spain to win the 2026 FIFA World Cup',
    probability: 11,
    americanOdds: '+809',
    platform: 'Kalshi',
    platformUrl: 'https://kalshi.com/markets/worldcup',
    status: 'open',
    closingDate: '2026-07-19T23:59:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: 0,
    volume: '$2.1M',
  },
  {
    id: 'wc26-portugal',
    question: 'Portugal to win the 2026 FIFA World Cup',
    probability: 8,
    americanOdds: '+1150',
    platform: 'Kalshi',
    platformUrl: 'https://kalshi.com/markets/worldcup',
    status: 'open',
    closingDate: '2026-07-19T23:59:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: +1,
    volume: '$1.2M',
  },
  {
    id: 'wc26-usa',
    question: 'USA to win the 2026 FIFA World Cup',
    probability: 6,
    americanOdds: '+1567',
    platform: 'Kalshi',
    platformUrl: 'https://kalshi.com/markets/worldcup',
    status: 'open',
    closingDate: '2026-07-19T23:59:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: +2,
    volume: '$1.4M',
  },
  {
    id: 'wc26-netherlands',
    question: 'Netherlands to win the 2026 FIFA World Cup',
    probability: 5,
    americanOdds: '+1900',
    platform: 'Polymarket',
    platformUrl: 'https://polymarket.com/event/2026-fifa-world-cup-winner',
    status: 'open',
    closingDate: '2026-07-19T23:59:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: 0,
    volume: '$780K',
  },
  {
    id: 'wc26-morocco',
    question: 'Morocco to win the 2026 FIFA World Cup',
    probability: 4,
    americanOdds: '+2400',
    platform: 'Polymarket',
    platformUrl: 'https://polymarket.com/event/2026-fifa-world-cup-winner',
    status: 'open',
    closingDate: '2026-07-19T23:59:00Z',
    lastUpdated: '2026-06-30T08:00:00Z',
    change24h: +1,
    volume: '$560K',
  },
  {
    id: 'wc26-germany',
    question: 'Germany to win the 2026 FIFA World Cup',
    probability: 0,
    americanOdds: 'N/A',
    platform: 'Kalshi',
    platformUrl: 'https://kalshi.com/markets/worldcup',
    status: 'resolved',
    closingDate: '2026-06-24T22:00:00Z',
    lastUpdated: '2026-06-24T22:00:00Z',
    change24h: -9,
    volume: '$2.2M',
  },
];

// Add to PREDICTION_TOPICS
export const WORLD_CUP_2026_TOPIC: PredictionTopic = {
  id: 'world-cup-2026',
  title: 'World Cup 2026 Winner',
  description: 'France lead at 20% on Kalshi after the group stage. Germany eliminated by Ecuador. Round of 32 begins July 1. Final at MetLife Stadium July 19.',
  category: 'sports',
  emoji: '⚽',
  articleSlug: '/predict/world-cup/2026',
  lastUpdated: '2026-06-30T08:00:00Z',
  featuredMarketId: 'wc26-france',
  markets: worldCupFullMarkets,
};

// =============================================================================
// HELPERS
// =============================================================================

/** Get a single topic by id */
export function getTopic(id: string): PredictionTopic | undefined {
  return PREDICTION_TOPICS.find(t => t.id === id);
}

/** Get a single market by id across all topics */
export function getMarket(marketId: string): PredictionMarket | undefined {
  for (const topic of PREDICTION_TOPICS) {
    const m = topic.markets.find(m => m.id === marketId);
    if (m) return m;
  }
  return undefined;
}

/** Get markets by topic slug */
export function getMarketsByTopicSlug(slug: string): PredictionMarket[] {
  const topic = PREDICTION_TOPICS.find(t => t.articleSlug === `/predictions/${slug}`);
  return topic ? topic.markets : [];
}

/** Format probability as a percentage string */
export function formatProbability(p: number): string {
  return `${p}%`;
}

/** Return a Tailwind color class based on probability */
export function probabilityColor(p: number): string {
  if (p >= 60) return 'text-green-600';
  if (p >= 30) return 'text-yellow-600';
  if (p >= 15) return 'text-orange-500';
  return 'text-red-500';
}

/** Return a Tailwind bg class for the probability bar fill */
export function probabilityBarColor(p: number): string {
  if (p >= 60) return 'bg-green-500';
  if (p >= 30) return 'bg-yellow-500';
  if (p >= 15) return 'bg-orange-500';
  return 'bg-red-500';
}
