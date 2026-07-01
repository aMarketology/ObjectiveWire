import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';
import { SITE_CONFIG } from '@/lib/site-config';

// Static legal page. Regenerates daily via ISR.
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ObjectWire Privacy Policy - How we collect, use, and protect your information",
  alternates: {
    canonical: `${SITE_CONFIG.url}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy",
    description: "ObjectWire Privacy Policy - How we collect, use, and protect your information",
    type: 'article',
    url: `${SITE_CONFIG.url}/privacy-policy`,
    siteName: 'Objective Wire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Privacy Policy",
    description: "ObjectWire Privacy Policy - How we collect, use, and protect your information",
  },
};

export default function PrivacyPolicyPage() {
  return <WikiArticle slug="privacy-policy" />;
}
