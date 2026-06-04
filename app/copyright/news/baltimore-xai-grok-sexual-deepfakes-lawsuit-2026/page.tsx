import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/copyright/news/baltimore-xai-grok-sexual-deepfakes-lawsuit-2026';
const ARTICLE_URL = `https://www.objectivewire.org${SLUG}`;
const IMAGE_URL = '/default/xAI_company_history_profile.png';

export const metadata: Metadata = {
  title: "Baltimore Sues xAI Over Grok Deepfakes | First U.S. Municipal AI Lawsuit 2026",
  description:
    "Baltimore became the first U.S. city to sue xAI Corp. and X Corp., alleging Grok generated 3 million nonconsensual explicit deepfake images in 11 days in violation of the Baltimore Consumer Protection Ordinance.",
  keywords: [
    'Baltimore xAI lawsuit 2026',
    'Grok deepfake lawsuit',
    'Baltimore sues xAI Grok',
    'nonconsensual deepfakes AI lawsuit',
    'xAI Corp consumer protection',
    'Grok sexual deepfakes',
    'Baltimore Consumer Protection Ordinance',
    'Elon Musk xAI lawsuit',
    'AI deepfake municipal lawsuit',
    'Grok explicit images 2026',
    'X Corp deepfakes lawsuit',
    'AI liability consumer protection',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "Baltimore Sues xAI Over Grok Deepfakes | First Municipal AI Lawsuit 2026",
    description:
      "Baltimore sued xAI Corp. and X Corp. on March 24, 2026, becoming the first U.S. city to use its Consumer Protection Ordinance against an AI company,",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-25T12:00:00Z',
    modifiedTime: '2026-03-25T12:00:00Z',
    section: 'Law & Technology',
    tags: ['xAI', 'Grok', 'Deepfakes', 'Baltimore', 'Lawsuit', 'AI Safety', 'Consumer Protection', 'Elon Musk', 'X Corp', 'Legal'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Baltimore Sues xAI Over Grok Deepfakes | First Municipal AI",
    description:
      "3 million nonconsensual explicit images in 11 days. Baltimore is now suing xAI and X Corp., calling Grok a 'dangerously defective' product that violated",
    images: [IMAGE_URL],
  },
};

export default function BaltimoreXaiLawsuitPage() {
  return <NewsArticleDB slug="copyright-news-baltimore-xai-grok-sexual-deepfakes-lawsuit-2026" />;
}
