import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Team page changes rarely. Regenerates daily via ISR.
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the ObjectWire editorial team. Our journalists, analysts, and contributors are dedicated to delivering verified, source-cited intelligence.",
  alternates: {
    canonical: 'https://www.owire.org/team',
  },
  openGraph: {
    title: "Our Team",
    description: "Meet the journalists and analysts behind ObjectWire's precision intelligence reporting.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team',
    description: 'Meet the journalists and analysts behind ObjectWire',
  },
};

export default function TeamPage() {
  return <WikiArticle slug="team" />;
}
