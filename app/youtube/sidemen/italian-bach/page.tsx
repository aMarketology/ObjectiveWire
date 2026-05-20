import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';
import { SourcesInterlink } from '@/components/SourcesInterlink';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.


export const metadata: Metadata = {
  title: "Italian Bach | YouTube Content Creator & Sidemen",
  description: "Complete profile of Italian Bach (Isaac Butterfield), British-Italian YouTube creator known for his appearances with the Sidemen and distinctive comedy style.",
  keywords: ["Italian Bach", "Isaac Butterfield", "Sidemen", "YouTube", "UK YouTuber", "Italian"],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/sidemen/italian-bach',
  },
  openGraph: {
    title: "Italian Bach | YouTube Content Creator & Sidemen",
    description: "Complete profile of Italian Bach (Isaac Butterfield), British-Italian YouTube creator known for his appearances with the Sidemen and distinctive comedy style.",
    type: 'article',
    url: "https://www.objectwire.org/youtube/sidemen/italian-bach",
    siteName: 'Objective Wire',
    section: "Entertainment",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Italian Bach | YouTube Content Creator & Sidemen",
    description: "Complete profile of Italian Bach (Isaac Butterfield), British-Italian YouTube creator known for his appearances with the Sidemen and distinctive comedy style.",
  },
};

export default function ItalianBachPage() {
  return (
    <>
      <WikiArticle slug="youtube-sidemen-italian-bach" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <SourcesInterlink
          accentColor="red"
          internalLinks={[
            { href: '/youtube', label: 'YouTube Hub | All Creators & News' },
            { href: '/youtube/sidemen/charity-match', label: 'Sidemen Charity Match 2026 | Full Guide' },
            { href: '/youtube/sidemen/charity-match/2026-lineup-max-fosh-willne', label: 'Charity Match 2026 Lineup | Max Fosh, WillNE' },
            { href: '/youtube/sidemen/alfie-buttle', label: 'AB (Alfie Buttle) | Fitness YouTuber Profile' },
            { href: '/youtube/sidemen/arthur-tv', label: 'ArthurTV | Sidemen Collaborator Profile' },
          ]}
        />
      </div>
    </>
  );
}