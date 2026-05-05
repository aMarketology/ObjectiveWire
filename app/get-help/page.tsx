import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Support page. Regenerates daily via ISR.
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Austin Private Detective + Investigative Journalism Services",
  description: "Based in Austin, Texas, we provide discreet, results-driven private detective services for individuals, businesses, and legal professionals.",
  alternates: {
    canonical: 'https://www.objectwire.org/get-help',
  },
  openGraph: {
    title: "Austin Private Detective + Investigative Journalism Services",
    description: "Based in Austin, Texas, we provide discreet, results-driven private detective services for individuals, businesses, and legal professionals.",
    type: 'article',
    url: "https://www.objectwire.org/get-help",
    siteName: 'ObjectWire',
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
