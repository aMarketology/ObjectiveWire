import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/foreign-affairs/brazil/election-26';
const ARTICLE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = `https://www.objectivewire.org/thumbnails/foreign-affairs-brazil-election-26.jpg`;

export const metadata: Metadata = {
  title: "Flávio Bolsonaro Brazilian Election | Lula Wins Runoff",
  description:
    "Luiz Inácio Lula da Silva secured a historic comeback in Brazil's 2026 runoff. Flávio Bolsonaro refuses to concede, citing a two-hour voting extension.",
  keywords: [
    'Flávio Bolsonaro Brazilian election results',
    'Luiz Inácio Lula da Silva runoff',
    'Brazil presidential election 2026',
    'Flávio Bolsonaro stolen election claim',
    'Brazil Supreme Court voting extension',
    'Donald Trump Brazil election',
    'Brazil runoff Lula Bolsonaro 2026',
    'Brazil election annulled voting extension',
    'Bolsonaro refuses to concede Brazil',
    'Brazil 2026 first round 2.2 million votes',
    'Lula comeback runoff Brazil history',
    'Brazil Liberal Party election challenge fine',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "Flávio Bolsonaro Claims Brazilian Election Was Stolen After Historic Lula Comeback",
    description:
      "Lula won Brazil's 2026 runoff with 51.8%. Bolsonaro refuses to concede, citing a two-hour Supreme Court voting extension contested by no one.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Carson Scott'],
    publishedTime: '2026-10-26T23:00:00Z',
    modifiedTime: '2026-10-26T23:00:00Z',
    section: 'World',
    tags: ['Brazil', 'Lula da Silva', 'Flávio Bolsonaro', 'Election', 'Foreign Affairs'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Brazil 2026 presidential election runoff' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bolsonaro Refuses to Concede Brazil Election After Lula Comeback",
    description: 'Lula won 51.8% to 48.2%. Bolsonaro cites a two-hour voting extension that both campaigns requested.',
    images: [OG_IMAGE],
  },
};

export default function BrazilElection26Page() {
  return (
    <>
      <NewsArticleSchema
        title="Flávio Bolsonaro Brazilian Election | Lula Wins Runoff"
        description="Luiz Inácio Lula da Silva secured a historic comeback in Brazil's 2026 runoff. Challenger Flávio Bolsonaro refuses to concede, citing a two-hour voting extension."
        author="Carson Scott"
        authorUrl="https://www.objectivewire.org/authors/carson-scott"
        publishedTime="2026-10-26T23:00:00Z"
        modifiedTime="2026-10-26T23:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="World"
        keywords={[
          'Flávio Bolsonaro Brazilian election results',
          'Luiz Inácio Lula da Silva runoff',
          'Brazil Supreme Court voting extension',
        ]}
      />

      <QuickArticle
        title="Flávio Bolsonaro Claims Brazilian Election Was Stolen After Historic Lula Comeback"
        subtitle="Following a highly polarized and historically unprecedented presidential runoff, Brazil is facing another wave of post-election disputes. Incumbent President Luiz Inácio Lula da Silva secured reelection, but challenger Flávio Bolsonaro has refused to concede."
        department="World"
        category="News"
        accentColor="green"
        publishDate="October 26, 2026"
        readTime="5 min read"
        author={{ name: 'Carson Scott', slug: 'carson-scott' }}
        heroImage={{
          src: OG_IMAGE,
          alt: 'Brazil 2026 presidential election runoff',
          caption: 'Lula da Silva won a historic runoff comeback in Brazil on October 25, 2026.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/foreign-affairs', label: 'Foreign Affairs' },
          { href: SLUG, label: 'Brazil Election' },
        ]}
        sources={[
          {
            number: 1,
            title: 'Brazil Votes in a Tense Lula vs. Bolsonaro Runoff',
            url: 'https://www.pbs.org/newshour/world/brazil-votes-in-a-tense-lula-vs-bolsonaro-runoff-with-u-s-influence-over-latin-america-at-stake',
            publisher: 'PBS News',
          },
          {
            number: 2,
            title: 'Brazil Far-Right Leader Rejects Election Results',
            url: 'https://newrepublic.com/post/217128/brazil-far-right-leader-rejects-election-results',
            publisher: 'The New Republic',
          },
          {
            number: 3,
            title: 'Brazil President Luiz Inácio Lula da Silva Wins Reelection Over Flávio Bolsonaro',
            url: 'https://www.wlrn.org/americas/2026-10-25/brazil-president-luiz-inacio-lula-da-silva-wins-reelection-over-flavio-bolsonaro',
            publisher: 'WLRN',
          },
          {
            number: 4,
            title: 'Brazil Election 2026 Voting Extension Controversy',
            url: 'https://www.onyxtimes.org/world/brazil-election-2026-voting-extension-controversy',
            publisher: 'Onyx Times',
          },
        ]}
        relatedArticles={[
          { href: '/foreign-affairs', title: 'Foreign Affairs | World Coverage', category: 'News' },
          { href: '/local/us-news/elon-musk-1-million-giveaway-lawsuit-settlement-2026', title: 'Elon Musk $1 Million Giveaway Lawsuit Settlement', category: 'News' },
          { href: '/local/houston/fort-bend-tax-assessor-carmen-turner-arrested-2026', title: 'Fort Bend Tax Assessor Carmen Turner | Federal Charges', category: 'News' },
        ]}
        tags={['Brazil', 'Lula da Silva', 'Flávio Bolsonaro', 'Election', 'Foreign Affairs']}
      >
        <p>
          Following a highly polarized and historically unprecedented presidential runoff, Brazil is facing another wave of post-election disputes.
        </p>

        <p>
          On Sunday, October 25, 2026, incumbent President <strong>Luiz Inácio Lula da Silva</strong> secured a decisive reelection victory over far-right challenger <strong>Flávio Bolsonaro</strong>. However, Bolsonaro has officially refused to concede defeat. Echoing the political tactics of his father, former President Jair Bolsonaro, Flávio has announced plans to petition electoral authorities to annul Lula's victory, prompting claims of a "stolen" or "rigged" election from his most ardent supporters.
        </p>

        <p>
          Despite the candidate's refusal to accept the results, his own political party, the <strong>Liberal Party (PL)</strong>, has already formally acknowledged Lula's victory.
        </p>

        <h2>A Historic Runoff Turnaround</h2>

        <p>
          Lula's victory marks a massive, unprecedented political comeback. During the first round of voting, Lula trailed Bolsonaro by roughly 2.2 million votes, securing 45% to Bolsonaro's 47%. However, a massive surge in second-round turnout, with approximately 2.96 million more voters participating, completely flipped the race. Lula ultimately secured a 4.4 million vote advantage, winning the runoff with a final margin of <strong>51.8% to 48.2%</strong>.
        </p>

        <p>
          This marks the first time in modern Brazilian history that a candidate lost the first round of voting but successfully recovered to win the presidency in the runoff.
        </p>

        <h2>The Two-Hour Extension Dispute</h2>

        <p>
          Flávio Bolsonaro's core argument for annulling the election centers around a last-minute directive from Brazil's Supreme Court. On election day, the court ordered a nationwide two-hour extension to the voting period to accommodate citizens facing severe weather and transportation delays. Bolsonaro argues that this extension improperly altered the election's outcome. Ironically, court records indicate that the extension was actually requested by representatives from <em>both</em> presidential campaigns to ensure their respective supporters could reach the polls.
        </p>

        <div className="my-8 not-prose rounded-xl border border-green-200 bg-green-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-green-700 mb-3">Brazil 2026 Presidential Runoff Quick Intel Grid</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Winner:</strong> Luiz Inácio Lula da Silva, incumbent</li>
            <li><strong>Final Margin:</strong> 51.8% Lula to 48.2% Bolsonaro</li>
            <li><strong>Vote Differential:</strong> Lula won by 4.4 million votes</li>
            <li><strong>The Dispute:</strong> Bolsonaro seeking annulment over a two-hour voting extension</li>
            <li><strong>Historic Milestone:</strong> First modern Brazilian candidate to win runoff after losing round one</li>
          </ul>
        </div>

        <h2>International Reactions and Precedents</h2>

        <p>
          The dispute quickly caught the attention of international figures. On October 26, U.S. President <strong>Donald Trump</strong> weighed in on the situation, stating that the Brazilian election "looked like another rigged election" and describing the process as "terrible looking," though he added the caveat that he "didn't take sides."
        </p>

        <p>
          Brazilian electoral authorities have firmly pushed back against the allegations of fraud. Officials maintain that the country's electronic voting system, which has been in place since the 1990s, is secure and reliable. No presidential election has been annulled since the country's return to democracy.
        </p>

        <p>
          Authorities also pointed to recent history regarding baseless election challenges. Following the 2022 presidential election, the Liberal Party was hit with a 22 million reais fine by the Superior Electoral Court for attempting to challenge the election results without providing any supporting evidence of fraud.
        </p>

        <p>
          For more on the voting extension controversy, read{' '}
          <a
            href="https://www.onyxtimes.org/world/brazil-election-2026-voting-extension-controversy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Onyx Times on the Brazil 2026 voting extension dispute
          </a>{' '}
          and see the{' '}
          <Link href="/foreign-affairs" className="text-blue-600 hover:text-blue-800 underline">
            Foreign Affairs hub
          </Link>{' '}
          for more world coverage.
        </p>
      </QuickArticle>
    </>
  );
}