import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Static legal page. Regenerates daily via ISR.
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ObjectWire Terms of Service - Rules and guidelines for using our platform",
  alternates: {
    canonical: 'https://www.objectivewire.com/terms-of-service',
  },
  openGraph: {
    title: "Terms of Service",
    description: "ObjectWire Terms of Service - Rules and guidelines for using our platform",
    type: 'article',
    url: "https://www.objectivewire.com/terms-of-service",
    siteName: 'Objective Wire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Terms of Service",
    description: "ObjectWire Terms of Service - Rules and guidelines for using our platform",
  },
};

export default function TermsOfServicePage() {
  return <WikiArticle slug="terms-of-service" />;
}
