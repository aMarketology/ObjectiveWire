import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';
import { SourcesInterlink } from '@/components/SourcesInterlink';
import { SITE_CONFIG } from '@/lib/site-config';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.


export const metadata: Metadata = {
  title: "Sidemen Charity Match 2026 | History, Players & Guide",
  description: "Complete guide to the Sidemen Charity Match 2026 - The world's biggest YouTube football event featuring KSI, MrBeast, Logan Paul, IShowSpeed, and 100+",
  keywords: [
    "Sidemen Charity Match 2026",
    "YouTube charity football",
    "KSI charity match",
    "Sidemen FC",
    "YouTube All-Stars",
    "MrBeast football",
    "IShowSpeed soccer",
    "Logan Paul match",
    "charity football match",
    "Sidemen event",
  ],
  openGraph: {
    title: "Sidemen Charity Match 2026: YouTube's Biggest Football Event",
    description: "The world's biggest YouTube charity football match returns. 100+ creators, millions raised, and the match of the year.",
    type: "article",
    url: `${SITE_CONFIG.url}/youtube/sidemen/charity-match`,
    siteName: 'Objective Wire',
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidemen Charity Match 2026: YouTube's Biggest Football Event",
    description: "100+ creators. Millions raised. The match of the year returns.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/youtube/sidemen/charity-match`,
  },
};

export default function SidemenCharityMatchPage() {
  return (
    <>
      <WikiArticle slug="youtube-sidemen-charity-match" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <SourcesInterlink
          accentColor="red"
          internalLinks={[
            { href: '/youtube', label: 'YouTube Hub | All Creators & News' },
            { href: '/youtube/sidemen/charity-match/2026-lineup-max-fosh-willne', label: 'Full 2026 Lineup | Max Fosh, WillNE Confirmed' },
            { href: '/youtube/sidemen/alfie-buttle', label: 'AB (Alfie Buttle) | Sidemen Collaborator' },
            { href: '/youtube/sidemen/italian-bach', label: 'Italian Bach | Sidemen Collaborator' },
            { href: '/youtube/sidemen/arthur-tv', label: 'ArthurTV | Sidemen Collaborator' },
          ]}
        />
      </div>
    </>
  );
}