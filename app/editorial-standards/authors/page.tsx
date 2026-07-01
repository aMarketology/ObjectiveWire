import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';
import { SITE_CONFIG } from '@/lib/site-config';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Our Authors | Editorial Standards",
  description: "ZeroWire is a verified news platform driven by our team of journalists, analysts, and contributors.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/editorial-standards/authors`,
  },
  openGraph: {
    title: "Our Authors | Editorial Standards",
    description: "ZeroWire is a verified news platform driven by our team of journalists, analysts, and contributors.",
    type: 'article',
    url: `${SITE_CONFIG.url}/editorial-standards/authors`,
    siteName: 'ZeroWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Our Authors | Editorial Standards",
    description: "ZeroWire is a verified news platform driven by our team of journalists, analysts, and contributors.",
  },
};

export default function AuthorsPage() {
  return <WikiArticle slug="editorial-standards-authors" />;
}
