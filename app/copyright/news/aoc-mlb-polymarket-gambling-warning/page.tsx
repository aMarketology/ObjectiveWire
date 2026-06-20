import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/JackArticleDB';

export const revalidate = 86400;

const SLUG = '/copyright/news/aoc-mlb-polymarket-gambling-warning';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: "AOC MLB Polymarket | $300M Gambling Deal Warning",
  description: 'Rep. Alexandria Ocasio-Cortez calls MLB\'s $300M Polymarket sponsorship deal "sad" and warns against the normalization of pervasive sports gambling in America.',
  keywords: [
    'AOC MLB Polymarket',
    'AOC Polymarket gambling warning',
    'MLB Polymarket $300 million deal',
    'Alexandria Ocasio-Cortez MLB gambling',
    'Polymarket MLB sponsorship',
    'sports gambling warning 2026',
    'prediction markets MLB',
    'AOC gambling',
    'MLB gambling deal',
    'Polymarket controversy',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "AOC Calls MLB's $300M Polymarket Deal 'Sad,' Warns Against Pervasive Gambling",
    description: 'Alexandria Ocasio-Cortez warns against MLB\'s $300M Polymarket deal, calling it a troubling sign of normalized sports gambling in American culture.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Sterling'],
    section: 'Politics',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AOC Warns Against MLB's $300M Polymarket Gambling Deal",
    description: "Rep. AOC calls the deal 'sad' and flags the pervasive gambling risk.",
  },
};

export default function AocMlbPolymarketPage() {
  return <JackArticleDB slug="copyright-news-aoc-mlb-polymarket-gambling-warning" />;
}
