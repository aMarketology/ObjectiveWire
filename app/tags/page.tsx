import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Content sourced from Supabase via WikiArticle. ISR keeps it fresh without live hits.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'All Topics & Tags',
  description:
    'Browse all topics covered by ObjectWire, technology, gaming, finance, entertainment, sports, and more.',
  alternates: { canonical: 'https://www.objectivewire.com/tags' },
  openGraph: {
    title: 'All Topics & Tags',
    description: 'Browse every topic covered by ObjectWire.',
    url: 'https://www.objectivewire.com/tags',
    siteName: 'Objective Wire',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Topics & Tags',
    description: 'Browse every topic covered by ObjectWire.',
  },
};

export default function TagsIndexPage() {
  return <WikiArticle slug="tags" />;
}
