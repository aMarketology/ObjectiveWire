import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/local/greater-texas/ken-paxton-illegal-voting-arrests-texas-2026';
const ARTICLE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = `https://www.objectivewire.org/thumbnails/local-greater-texas-ken-paxton-illegal-voting-arrests-texas-2026.jpg`;

export const metadata: Metadata = {
  title: 'Ken Paxton Illegal Voting Arrests Texas | Felons Charged',
  description:
    "Texas Attorney General Ken Paxton announced the arrests of convicted felons who allegedly voted illegally in the 2026 election while on parole.",
  keywords: [
    'Ken Paxton illegal voting arrests Texas',
    'Texas Election Integrity Unit',
    'Harris County convicted felons voting',
    'Montgomery County arrest warrants',
    'Texas Attorney General voter fraud 2026',
    'Texas Department of Criminal Justice',
    'Ken Paxton voter fraud arrests October 2026',
    'Texas felon voting law parole probation',
    'Election Integrity Unit investigation Texas',
    'Harris County 2026 ballots illegal voting',
    'Texas illegal voting arrests felony',
    'Texas Attorney General election crimes 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Texas AG Ken Paxton Announces Arrests of Felons for Alleged Illegal Voting',
    description:
      "Paxton's Election Integrity Unit traced an October 27 public tip to ballots cast by convicted felons on parole in Harris County, with warrants issued in Montgomery County.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Carson Scott'],
    publishedTime: '2026-10-31T21:00:00Z',
    modifiedTime: '2026-10-31T21:00:00Z',
    section: 'News',
    tags: ['Ken Paxton', 'Texas', 'Election Integrity', 'Voter Fraud', 'Harris County'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Ken Paxton illegal voting arrests in Texas' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paxton Announces Arrests of Felons for Alleged Illegal Voting',
    description: 'A public tip led the Election Integrity Unit to Harris County ballots, TDCJ parole verification, and Montgomery County warrants.',
    images: [OG_IMAGE],
  },
};

export default function KenPaxtonIllegalVotingPage() {
  return (
    <>
      <NewsArticleSchema
        title="Ken Paxton Illegal Voting Arrests Texas | Felons Charged"
        description="Texas Attorney General Ken Paxton announced the arrests of convicted felons who allegedly voted illegally in the 2026 election while on parole."
        author="Carson Scott"
        authorUrl="https://www.objectivewire.org/authors/carson-scott"
        publishedTime="2026-10-31T21:00:00Z"
        modifiedTime="2026-10-31T21:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="News"
        keywords={[
          'Ken Paxton illegal voting arrests Texas',
          'Texas Election Integrity Unit',
          'Harris County convicted felons voting',
        ]}
      />

      <QuickArticle
        title="Texas AG Ken Paxton Announces Arrests of Felons for Alleged Illegal Voting"
        subtitle="Texas law enforcement officials have apprehended multiple individuals accused of casting ballots illegally during the 2026 election cycle, the latest enforcement action from the Attorney General's Election Integrity Unit."
        department="Politics"
        category="News"
        accentColor="red"
        publishDate="October 31, 2026"
        readTime="4 min read"
        author={{ name: 'Carson Scott', slug: 'carson-scott' }}
        heroImage={{
          src: OG_IMAGE,
          alt: 'Ken Paxton illegal voting arrests in Texas',
          caption: 'Warrants were issued in Montgomery County on October 30, 2026.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/local/greater-texas', label: 'Greater Texas' },
          { href: SLUG, label: 'Illegal Voting Arrests' },
        ]}
        sources={[
          {
            number: 1,
            title: 'Attorney General Ken Paxton Announces Arrests of Convicted Felons for Illegally Voting in Texas',
            url: 'https://www.texasattorneygeneral.gov/news/releases/attorney-general-ken-paxton-announces-arrests-convicted-felons-illegally-voting-texas',
            publisher: 'Office of the Texas Attorney General',
          },
          {
            number: 2,
            title: 'Ken Paxton Announces Arrests Over Alleged Illegal Voting in Texas 2026 Election',
            url: 'https://cedarnews.net/newstasks/1108805/ken-paxton-announces-arrests-over-alleged-illegal-voting-in-texas-2026-election/',
            publisher: 'Cedar News',
          },
        ]}
        relatedArticles={[
          { href: '/local/greater-texas/doj-summer-surge-pandemic-loan-fraud-15m-texas-2026', title: 'DOJ Summer Surge | $15.3 Million Pandemic Loan Fraud in Texas', category: 'News' },
          { href: '/local/greater-texas/georgetown-the-district-400m-fraud-verdict-2026', title: 'Georgetown The District | $400M Fraud Verdict', category: 'News' },
          { href: '/local/houston/fort-bend-tax-assessor-carmen-turner-arrested-2026', title: 'Fort Bend Tax Assessor Carmen Turner | Federal Charges', category: 'News' },
          { href: '/local/greater-texas', title: 'Greater Texas | Statewide Investigative Coverage', category: 'Local' },
        ]}
        tags={['Ken Paxton', 'Texas', 'Election Integrity', 'Voter Fraud', 'Harris County']}
      >
        <p>
          Texas law enforcement officials have apprehended multiple individuals accused of casting ballots illegally during the 2026 election cycle.
        </p>

        <p>
          On Saturday, October 31, 2026, Texas Attorney General <strong>Ken Paxton</strong> officially announced the arrests of convicted felons who allegedly voted while legally ineligible. The arrests mark the latest enforcement action taken by the Office of the Attorney General's <strong>Election Integrity Unit</strong>.
        </p>

        <p>
          Under Texas state law, convicted felons who are currently incarcerated, on parole, or on probation are stripped of their voting rights and are strictly prohibited from casting a ballot.
        </p>

        <div className="my-8 not-prose rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-3">Texas Illegal Voting Arrests Quick Intel Grid</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Announcing Official:</strong> Texas Attorney General Ken Paxton</li>
            <li><strong>Investigating Agency:</strong> Election Integrity Unit</li>
            <li><strong>Allegation:</strong> Convicted felons on parole casting illegal ballots</li>
            <li><strong>Triggering Event:</strong> October 27 tip regarding Harris County voters</li>
            <li><strong>Arrest Location:</strong> Warrants issued in Montgomery County on October 30</li>
          </ul>
        </div>

        <h2>The October 27 Tip and Investigation</h2>

        <p>
          The investigation was launched just days prior following a tip from a member of the public. According to the Attorney General's office, a concerned citizen filed a report on <strong>October 27, 2026</strong>, alleging that convicted felons had illegally cast ballots in <strong>Harris County</strong>. The citizen provided open-source information to support the claim, prompting the Election Integrity Unit to immediately open an inquiry.
        </p>

        <p>
          Election Integrity Unit analysts began by verifying the identities of the accused individuals and cross-referencing their voter registration records with their 2026 voting activity. Once it was determined that ballots had indeed been cast, the investigators referred the names to the <strong>Texas Department of Criminal Justice</strong> to confirm their legal status.
        </p>

        <p>
          The Texas Department of Criminal Justice subsequently verified that multiple individuals in question were actively on parole at the time they cast their ballots, rendering those votes illegal.
        </p>

        <h2>Montgomery County Warrants</h2>

        <p>
          Following the verification of their parole status, arrest warrants for the identified individuals were officially issued in <strong>Montgomery County on October 30</strong>. Officers from the Office of the Attorney General successfully executed the warrants and made the arrests.
        </p>

        <p>
          "Today, my office arrested convicted felons for voting illegally in Texas," Paxton said in a released statement. "My Election Integrity Unit is actively investigating additional reports of election crimes. We will continue working to protect the lawful votes of Texans."
        </p>

        <p>
          The Office of the Attorney General noted that it remains committed to investigating additional allegations of voter fraud to ensure free and fair elections across the state.
        </p>

        <p>
          For more statewide accountability coverage, see the{' '}
          <Link href="/local/greater-texas" className="text-blue-600 hover:text-blue-800 underline">
            Greater Texas hub
          </Link>{' '}
          and our report on the{' '}
          <Link href="/local/houston/fort-bend-tax-assessor-carmen-turner-arrested-2026" className="text-blue-600 hover:text-blue-800 underline">
            Fort Bend County tax assessor federal charges
          </Link>
          .
        </p>
      </QuickArticle>
    </>
  );
}