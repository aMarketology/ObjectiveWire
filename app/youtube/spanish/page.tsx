import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';
import { SourcesInterlink } from '@/components/SourcesInterlink';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.


export const metadata: Metadata = {
  title: "Top Spanish YouTubers 2026 | Ibai, AuronPlay, ElRubius",
  description: "Complete guide to the biggest Spanish-language YouTubers and streamers of 2026. Rankings, profiles, subscriber counts, and content breakdowns for Spain's top creators.",
  alternates: {
    canonical: 'https://www.objectivewire.com/youtube/spanish',
  },
  keywords: [
    'Spanish YouTubers',
    'Ibai Llanos',
    'AuronPlay',
    'ElRubius',
    'TheGrefg',
    'Vegetta777',
    'Alana Flores',
    'Spanish streamers',
    'top Spanish creators',
    'YouTube España',
  ],
  openGraph: {
    title: "Top Spanish YouTubers 2026",
    description: "Rankings and profiles of the biggest Spanish-language YouTube creators, from Ibai Llanos to Alana Flores.",
    type: "article",
    url: "https://www.objectivewire.com/youtube/spanish",
    siteName: 'Objective Wire',
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Spanish YouTubers 2026 | Ibai, AuronPlay, ElRubius",
    description: "Full rankings and profiles of Spain's biggest YouTube creators.",
  },
};

export default function SpanishYouTubersPage() {
  return (
    <>
      <WikiArticle slug="youtube-spanish" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <SourcesInterlink
          accentColor="red"
          internalLinks={[
            { href: '/youtube', label: 'YouTube Hub | All Creators & News' },
            { href: '/youtube/chicos-toxicos', label: 'Chicos Toxicos | Latin YouTube Group' },
            { href: '/youtube/logan-paul', label: 'Logan Paul | YouTuber, WWE Star' },
            { href: '/youtube/sidemen/charity-match', label: 'Sidemen Charity Match 2026' },
          ]}
        />
      </div>
    </>
  );
}