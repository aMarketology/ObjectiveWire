import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/local/us-news/elon-musk-1-million-giveaway-lawsuit-settlement-2026';
const ARTICLE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = `https://www.objectivewire.org/thumbnails/local-us-news-elon-musk-1-million-giveaway-lawsuit-settlement-2026.jpg`;

export const metadata: Metadata = {
  title: 'Elon Musk $1 Million Giveaway Lawsuit Settlement',
  description:
    'Elon Musk and America PAC settled lawsuits alleging they misled voters about the random nature of their $1 million daily giveaways in 2024 and 2025.',
  keywords: [
    'Elon Musk $1 million giveaway lawsuit settlement',
    'America PAC voter sweepstakes',
    'Elon Musk 2024 election fraud lawsuit',
    'Elon Musk Wisconsin Supreme Court giveaway',
    'America PAC $1 million check',
    'Elon Musk deposition',
    'America PAC settlement 2026',
    'Elon Musk voter giveaway lawsuit',
    'America PAC random lottery allegation',
    'Elon Musk 2026 midterms contribution',
    'Elon Musk $275 million Republican',
    'America PAC vetted recipients',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Elon Musk Settles Voter Lawsuits Over $1 Million Election Giveaways',
    description:
      'Elon Musk and America PAC settled a pair of lawsuits alleging the $1 million daily giveaways were not random. The deal lets Musk avoid a court-mandated deposition.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Carson Scott'],
    publishedTime: '2026-10-16T14:00:00Z',
    modifiedTime: '2026-10-16T14:00:00Z',
    section: 'News',
    tags: ['Elon Musk', 'America PAC', 'Election Law', 'Lawsuit', 'Politics'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Elon Musk $1 million giveaway lawsuit settlement' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elon Musk Settles $1 Million Voter Giveaway Lawsuits',
    description: 'The deal lets Musk avoid a deposition over how America PAC picked its daily $1 million check winners.',
    images: [OG_IMAGE],
  },
};

export default function ElonMuskGiveawaySettlementPage() {
  return (
    <>
      <NewsArticleSchema
        title="Elon Musk $1 Million Giveaway Lawsuit Settlement"
        description="Elon Musk and America PAC settled lawsuits alleging they misled voters about the random nature of their $1 million daily giveaways during the 2024 and 2025 elections."
        author="Carson Scott"
        authorUrl="https://www.objectivewire.org/authors/carson-scott"
        publishedTime="2026-10-16T14:00:00Z"
        modifiedTime="2026-10-16T14:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="News"
        keywords={[
          'Elon Musk $1 million giveaway lawsuit settlement',
          'America PAC voter sweepstakes',
          'Elon Musk 2024 election fraud lawsuit',
        ]}
      />

      <QuickArticle
        title="Elon Musk Settles Voter Lawsuits Over $1 Million Election Giveaways"
        subtitle="Elon Musk and his political action committee, America PAC, have reached an agreement to settle a pair of lawsuits accusing them of misleading voters with multi-million dollar cash giveaways during recent high-stakes election cycles."
        department="Legal"
        category="News"
        accentColor="red"
        publishDate="October 16, 2026"
        readTime="4 min read"
        author={{ name: 'Carson Scott', slug: 'carson-scott' }}
        heroImage={{
          src: OG_IMAGE,
          alt: 'Elon Musk $1 million giveaway lawsuit settlement',
          caption: 'Elon Musk and America PAC settled the voter giveaway lawsuits out of court.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/local/us-news', label: 'Local US News' },
          { href: SLUG, label: 'Musk Giveaway Settlement' },
        ]}
        sources={[
          {
            number: 1,
            title: 'Musk Settles Lawsuits Over His $1 Million Election Giveaways',
            url: 'https://www.washingtonsun.com/legal/musk-settles-lawsuits-one-million-dollar-election-giveaway',
            publisher: 'The Washington Sun',
          },
          {
            number: 2,
            title: 'Elon Musk Settles Suit Over $1 Million Giveaway to 2024 Voters',
            url: 'https://www.reddit.com/r/politics/comments/1x71s2q/elon_musk_settles_suit_over_1_million_giveaway_to/',
            publisher: 'Bloomberg Law',
          },
        ]}
        relatedArticles={[
          { href: '/local/us-news/lams-seafood-ebt-fraud-king-5-2026', title: "Lam's Seafood EBT Fraud King 5 | What Investigations Found", category: 'News' },
          { href: '/local/us-news/nick-shirley-food-stamp-fraud-video', title: 'Nick Shirley Food Stamp Fraud Video | EBT Cash-Out Investigation', category: 'News' },
          { href: '/local/us-news', title: 'Local US News | Domestic Investigative Coverage', category: 'News' },
        ]}
        tags={['Elon Musk', 'America PAC', 'Election Law', 'Lawsuit', 'Politics']}
      >
        <p>
          Elon Musk and his political action committee, <strong>America PAC</strong>, have reached an agreement to settle a pair of lawsuits accusing them of misleading voters with multi-million dollar cash giveaways during recent high-stakes election cycles.
        </p>

        <p>
          The lawsuits stem from the controversial sweepstakes America PAC ran leading up to the 2024 presidential election, as well as a subsequent iteration during the 2025 Wisconsin Supreme Court election. During these campaigns, Musk and the PAC promised that registered voters who signed a petition supporting conservative causes would be entered into a random daily lottery to win a $1 million check.
        </p>

        <p>
          However, the central claim in the recent court filings alleged that the sweepstakes was not random. Plaintiffs argued that America PAC representatives actively vetted potential recipients of the prize money rather than simply drawing names from a hat as advertised.
        </p>

        <h2>Averting a Deposition</h2>

        <p>
          The out-of-court settlements allow the billionaire to avoid a highly anticipated legal deposition. Prior to the settlement agreement, a federal judge had denied Musk's objections to sitting for questioning. Had the cases proceeded, Musk would have been legally compelled to testify under oath regarding exactly how America PAC selected the recipients of the daily $1 million checks.
        </p>

        <div className="my-8 not-prose rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-3">America PAC Giveaway Lawsuit Quick Intel Grid</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Defendants:</strong> Elon Musk and America PAC</li>
            <li><strong>Elections Involved:</strong> 2024 Presidential Election, 2025 Wisconsin Supreme Court Election</li>
            <li><strong>Core Allegation:</strong> PAC vetted recipients instead of awarding the $1 million randomly</li>
            <li><strong>Resolution:</strong> Settled out of court</li>
            <li><strong>Legal Impact:</strong> Averts a court-mandated deposition for Musk</li>
          </ul>
        </div>

        <h2>Implications for the 2026 Midterms</h2>

        <p>
          The settlements arrive just weeks before the consequential November 2026 midterm elections. Musk has continued to rapidly expand his financial footprint in American politics following the 2024 cycle. The Tesla and SpaceX CEO has currently contributed over <strong>$275 million</strong> to support the Republican Party's efforts to retain its congressional majorities, making him the single largest individual booster of the current midterm cycle.
        </p>

        <p>
          For more domestic legal and investigative coverage, see the{' '}
          <Link href="/local/us-news" className="text-blue-600 hover:text-blue-800 underline">
            Local US News hub
          </Link>{' '}
          and our report on{' '}
          <Link href="/local/us-news/lams-seafood-ebt-fraud-king-5-2026" className="text-blue-600 hover:text-blue-800 underline">
            the Lam's Seafood EBT fraud investigation
          </Link>
          .
        </p>
      </QuickArticle>
    </>
  );
}