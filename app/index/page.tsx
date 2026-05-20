import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Site index changes when new articles are added. Regenerates daily via ISR.
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Site Index | Complete Sitemap",
  description: "Comprehensive site index showing all pages and sections of ObjectWire. Navigate our complete content hierarchy.",
  keywords: ["sitemap", "site index", "navigation", "ObjectWire pages"],
  alternates: {
    canonical: 'https://www.objectwire.org/index',
  },
  openGraph: {
    title: "Site Index | Complete Sitemap",
    description: "Comprehensive site index showing all pages and sections of ObjectWire. Navigate our complete content hierarchy.",
    type: 'article',
    url: "https://www.objectwire.org/index",
    siteName: 'Objective Wire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Site Index | Complete Sitemap",
    description: "Comprehensive site index showing all pages and sections of ObjectWire. Navigate our complete content hierarchy.",
  },
};

export default function WikiPage() {
  return <WikiArticle slug="index" />;
}
