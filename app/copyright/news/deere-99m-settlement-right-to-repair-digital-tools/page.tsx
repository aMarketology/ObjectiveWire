import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/copyright/news/deere-99m-settlement-right-to-repair-digital-tools';
const ARTICLE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Deere $99M Right-to-Repair Settlement | Farmers Get Digital Tools for 10 Years',
  description: 'John Deere agreed to pay $99 million and provide farmers with full digital repair tool access for 10 years, resolving a class-action antitrust lawsuit over locked diagnostic software.',
  keywords: [
    'John Deere right to repair settlement',
    'Deere $99 million settlement 2026',
    'Deere right to repair lawsuit',
    'Deere digital repair tools farmers',
    'John Deere Service ADVISOR',
    'Deere antitrust repair monopoly',
    'right to repair agriculture 2026',
    'Deere class action farmers',
    'Deere FTC lawsuit 2026',
    'Deere authorized dealer repair',
    'farm equipment repair access',
    'Deere diagnostic software farmers',
    'right to repair federal court',
    'John Deere repair settlement terms',
    'Deere EPA Clean Air Act repair',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Deere $99M Right-to-Repair Settlement | Farmers Win Diagnostic Tool Access',
    description: 'John Deere will pay $99M and provide digital repair tools to farmers for a decade, settling a class-action antitrust lawsuit filed in 2022.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfanasa'],
    publishedTime: '2026-04-08T16:00:00Z',
    modifiedTime: '2026-04-08T16:00:00Z',
    section: 'News',
    tags: ['John Deere', 'Right to Repair', 'Antitrust', 'FTC', 'Agriculture'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deere $99M Settlement | 10 Years of Digital Repair Tool Access for Farmers',
    description: 'Farmers win $99M fund and diagnostic tool access after accusing Deere of locking them out of repairs on their own equipment.',
  },
};

export default function CopyrightNewsDeere99mSettlementRightToRepairDigitalToolsPage() {
  return <NewsArticleDB slug="copyright-news-deere-99m-settlement-right-to-repair-digital-tools" />;
}
