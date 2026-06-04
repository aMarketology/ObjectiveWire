import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/copyright/news/detroit-first-city-oppose-prediction-markets-coinbase-lawsuit-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1723534042746-f6d1941e6808?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Detroit Becomes First U.S. City to Oppose Prediction Markets | Coinbase Amicus 2026',
  description:
    'Detroit was granted permission to file an amicus brief supporting Michigan against Coinbase, becoming the first U.S. city to take a direct legal stance against prediction markets, citing $200M in casino revenue and $11.9M in monthly municipal fees at risk.',
  alternates: {
    canonical: `https://www.objectivewire.org${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'Detroit First U.S. City to Oppose Prediction Markets | Coinbase vs Michigan Amicus',
    description:
      'A federal judge granted Detroit permission to file an amicus brief backing Michigan in its lawsuit against Coinbase over prediction markets, citing $200M in casino revenue and $11.9M in monthly municipal fees at risk.',
    url: `https://www.objectivewire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'U.S. federal courthouse exterior representing Detroit prediction market lawsuit' }],
    publishedTime: '2026-03-30T23:00:00Z',
    modifiedTime: '2026-03-30T23:00:00Z',
    section: 'News',
    tags: ['Detroit', 'Coinbase', 'Prediction Markets', 'Kalshi', 'Polymarket', 'Michigan', 'CFTC', 'Gambling Law'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Detroit First U.S. City to Oppose Prediction Markets | Coinbase Amicus 2026',
    description:
      'Detroit entered the Coinbase vs. Michigan prediction market lawsuit as an amicus, citing $200M+ in casino revenue and $11.9M in monthly municipal fees threatened by unregulated prediction platforms.',
    images: [OG_IMAGE],
  },
};

export default function CopyrightNewsDetroitFirstCityOpposePredictionMarketsCoinbaseLawsuit2026Page() {
  return <NewsArticleDB slug="copyright-news-detroit-first-city-oppose-prediction-markets-coinbase-lawsuit-2026" />;
}
