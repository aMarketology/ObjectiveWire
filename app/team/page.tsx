import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Team page changes rarely. Regenerates daily via ISR.
export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Our Team | oWire',
  description:
    'Meet the oWire editorial team. Founder Conan D. Boyle and staff writers Jack Sterling and Jack Brennan cover Creators, Cars, and Culture.',
  alternates: {
    canonical: 'https://www.objectivewire.com/team',
  },
  openGraph: {
    title: 'Our Team | oWire',
    description: 'Meet the journalists behind oWire. Owned by Conan D. Boyle.',
    siteName: 'Objective Wire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team | oWire',
    description: 'Meet the journalists behind oWire.',
  },
};

export default function TeamPage() {
  return <WikiArticle slug="team" />;
}