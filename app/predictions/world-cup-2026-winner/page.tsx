import type { Metadata } from 'next';
import Link from 'next/link';
import { PredictionsPage } from '@/components/PredictionsPage';
import { getTopic, PREDICTION_TOPICS } from '@/data/prediction-markets';

export const revalidate = 3600;

const SLUG = '/predictions/world-cup-2026-winner';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'World Cup 2026 Winner Odds | Kalshi, Polymarket Live Markets',
  description: 'Live prediction market odds for the 2026 FIFA World Cup winner. France lead at 18% on Kalshi. England, Brazil, Argentina, Spain all live. Updated daily from Kalshi and Polymarket.',
  keywords: [
    'World Cup 2026 winner odds',
    'World Cup 2026 Kalshi',
    'World Cup 2026 Polymarket',
    'who will win World Cup 2026',
    'France World Cup 2026 odds',
    'England World Cup 2026 odds',
    'Brazil World Cup 2026 odds',
    'Argentina World Cup 2026 odds',
    'FIFA World Cup 2026 prediction market',
    'World Cup 2026 probability',
    'World Cup 2026 favorites',
    'prediction market World Cup',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'World Cup 2026 Winner Odds | Kalshi, Polymarket Live Markets',
    description: 'France lead at 18% on Kalshi. England surging. Brazil, Argentina, Spain all live. Live prediction market data updated daily.',
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
    title: 'World Cup 2026 Winner Odds | France 18%, England 14%, Brazil 13%',
    description: 'Live Kalshi and Polymarket odds for every World Cup 2026 contender. Updated daily.',
  },
};

export default function WorldCup2026WinnerPredictionsPage() {
  const topic = getTopic('world-cup-2026-winner');

  if (!topic) return null;

  const relatedTopics = PREDICTION_TOPICS.filter(t => t.id !== topic.id);

  return (
    <PredictionsPage
      topic={topic}
      hubHref="/predictions"
      relatedTopics={relatedTopics}
    />
  );
}
