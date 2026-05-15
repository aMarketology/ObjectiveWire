import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';
import { SourcesInterlink } from '@/components/SourcesInterlink';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.


export const metadata: Metadata = {
  title: "AB (Alfie Buttle) | Fitness YouTuber & Sidemen Collaborator",
  description: "Complete profile of AB (Alfie Buttle), British fitness content creator known for gym transformations, Young LA brand partnership, and appearances with the Sidemen.",
  keywords: ["AB", "Alfie Buttle", "Sidemen", "YouTube", "Fitness", "Young LA", "Gym Content", "UK Fitness"],
  alternates: {
    canonical: 'https://www.owire.org/youtube/sidemen/alfie-buttle',
  },
  openGraph: {
    title: "AB (Alfie Buttle) | Fitness YouTuber & Sidemen Collaborator",
    description: "Complete profile of AB (Alfie Buttle), British fitness content creator known for gym transformations, Young LA brand partnership, and appearances with the Sidemen.",
    type: 'article',
    url: "https://www.owire.org/youtube/sidemen/alfie-buttle",
    siteName: 'oWire',
    section: "Entertainment",
  },
  twitter: {
    card: 'summary_large_image',
    title: "AB (Alfie Buttle) | Fitness YouTuber & Sidemen Collaborator",
    description: "Complete profile of AB (Alfie Buttle), British fitness content creator known for gym transformations, Young LA brand partnership, and appearances with the Sidemen.",
  },
};

export default function AlfieButtlePage() {
  return (
    <>
      <WikiArticle slug="youtube-sidemen-alfie-buttle" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <SourcesInterlink
          accentColor="red"
          internalLinks={[
            { href: '/youtube', label: 'YouTube Hub | All Creators & News' },
            { href: '/youtube/sidemen/charity-match', label: 'Sidemen Charity Match 2026 | Full Guide' },
            { href: '/youtube/sidemen/charity-match/2026-lineup-max-fosh-willne', label: 'Charity Match 2026 Lineup | Max Fosh, WillNE' },
            { href: '/youtube/sidemen/italian-bach', label: 'Italian Bach | Sidemen Collaborator Profile' },
            { href: '/youtube/sidemen/arthur-tv', label: 'ArthurTV | Sidemen Collaborator Profile' },
          ]}
        />
      </div>
    </>
  );
}
