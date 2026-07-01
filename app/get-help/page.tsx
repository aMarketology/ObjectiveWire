import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';
import { SITE_CONFIG } from '@/lib/site-config';

// Support page. Regenerates daily via ISR.
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Austin Private Detective + Investigative Journalism Services",
  description: "Based in Austin, Texas, we provide discreet, results-driven private detective services for individuals, businesses, and legal professionals.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/get-help`,
  },
  openGraph: {
    title: "Austin Private Detective + Investigative Journalism Services",
    description: "Based in Austin, Texas, we provide discreet, results-driven private detective services for individuals, businesses, and legal professionals.",
    type: 'article',
    url: `${SITE_CONFIG.url}/get-help`,
    siteName: 'Objective Wire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Austin Private Detective + Investigative Journalism Services",
    description: "Based in Austin, Texas, we provide discreet, results-driven private detective services for individuals, businesses, and legal professionals.",
  },
};

export default function GetHelpPage() {
  return <WikiArticle slug="get-help" />;
}
