import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/local/houston/fort-bend-tax-assessor-carmen-turner-arrested-2026';
const ARTICLE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = `https://www.objectivewire.org/thumbnails/local-houston-fort-bend-tax-assessor-carmen-turner-arrested-2026.jpg`;

export const metadata: Metadata = {
  title: 'Fort Bend Tax Assessor Carmen Turner Arrested | Charges',
  description:
    'Fort Bend County Tax Assessor-Collector Carmen Turner was federally indicted, accused of using county payroll to pay caregivers for her mother.',
  keywords: [
    'Fort Bend County tax assessor Carmen Turner arrested',
    'Fort Bend County fraud',
    'Texas tax assessor indicted',
    'federal wire fraud',
    'theft of government money',
    'Carmen Turner Fort Bend',
    'Fort Bend County tax assessor collector indictment',
    'Carmen Turner federal charges',
    'Fort Bend County payroll fraud',
    'Texas public official fraud 2026',
    'Southern District of Texas wire fraud',
    'Carmen Turner phantom payroll scheme',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Fort Bend County Tax Assessor Carmen Turner Arrested on Federal Fraud Charges',
    description:
      'Carmen Turner, Fort Bend County Tax Assessor-Collector, was federally indicted with two employees over a scheme to use county payroll to pay her mother caregivers.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Carson Scott'],
    publishedTime: '2026-10-22T18:00:00Z',
    modifiedTime: '2026-10-22T18:00:00Z',
    section: 'News',
    tags: ['Carmen Turner', 'Fort Bend County', 'Wire Fraud', 'Public Corruption', 'Texas'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Fort Bend County tax assessor Carmen Turner arrested' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fort Bend Tax Assessor Carmen Turner Charged With Theft of Government Money',
    description: 'Federal indictment alleges county payroll funded her mother\'s caregivers for two years.',
    images: [OG_IMAGE],
  },
};

export default function FortBendCarmenTurnerArrestPage() {
  return (
    <>
      <NewsArticleSchema
        title="Fort Bend Tax Assessor Carmen Turner Arrested | Federal Charges"
        description="Fort Bend County Tax Assessor-Collector Carmen Turner has been federally indicted, accused of using county payroll funds to pay personal caregivers for her mother."
        author="Carson Scott"
        authorUrl="https://www.objectivewire.org/authors/carson-scott"
        publishedTime="2026-10-22T18:00:00Z"
        modifiedTime="2026-10-22T18:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="News"
        keywords={[
          'Fort Bend County tax assessor Carmen Turner arrested',
          'federal wire fraud',
          'theft of government money',
        ]}
      />

      <QuickArticle
        title="Feds Charge Fort Bend County Official With Theft of Government Money"
        subtitle="Fort Bend County Tax Assessor-Collector Carmen Turner was arrested on federal fraud charges alongside two employees, accused of using county payroll to pay personal caregivers for her mother."
        department="Crime"
        category="News"
        accentColor="red"
        publishDate="October 22, 2026"
        readTime="4 min read"
        author={{ name: 'Carson Scott', slug: 'carson-scott' }}
        heroImage={{
          src: OG_IMAGE,
          alt: 'Fort Bend County tax assessor Carmen Turner arrested',
          caption: 'Carmen Turner was arrested Thursday after a federal indictment.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/local/houston', label: 'Houston' },
          { href: SLUG, label: 'Turner Federal Charges' },
        ]}
        sources={[
          {
            number: 1,
            title: 'Feds Charge Fort Bend County Official With Theft of Government Money',
            url: 'https://www.texastribune.org/2026/10/22/texas-fort-bend-tax-assessor-collector-carmen-turner-federal-indictment/',
            publisher: 'The Texas Tribune',
          },
          {
            number: 2,
            title: 'Fort Bend County Tax Assessor-Collector Charged in Wire Fraud Scheme',
            url: 'https://www.justice.gov/usao-sdtx/pr/fort-bend-county-tax-assessor-collector-charged-wire-fraud-scheme',
            publisher: 'Department of Justice',
          },
          {
            number: 3,
            title: 'Fort Bend Tax Assessor-Collector Arrested on Federal Fraud Charges',
            url: 'https://texasscorecard.com/local/fort-bend-tax-assessor-collector-arrested-on-federal-fraud-charges/',
            publisher: 'Texas Scorecard',
          },
        ]}
        relatedArticles={[
          { href: '/local/houston/emylee-thai-fbi-most-wanted-fraud-ankle-monitor-vietnam', title: 'Emylee Thai FBI Most Wanted | Fraud, Ankle Monitor, Vietnam', category: 'News' },
          { href: '/local/houston/immigration-attorney-alla-nowowiejski-mail-fraud-indictment-2026', title: 'Houston Immigration Attorney Mail Fraud | Alla Nowowiejski Indictment', category: 'News' },
          { href: '/local/austin/indian-national-elder-fraud-sentencing-2026', title: 'Austin Elder Fraud Sentencing | 97 Months for Indian National', category: 'News' },
          { href: '/local/houston', title: 'Houston Local Coverage', category: 'Local' },
        ]}
        tags={['Carmen Turner', 'Fort Bend County', 'Wire Fraud', 'Public Corruption', 'Texas']}
      >
        <p>
          A prominent Texas county official has been arrested following a federal indictment alleging she orchestrated a multi-year scheme to misappropriate taxpayer funds for personal benefit.
        </p>

        <p>
          On Thursday morning, October 22, 2026, federal authorities arrested <strong>Fort Bend County Tax Assessor-Collector Carmen Turner</strong>. Turner, a Democrat who has held the office since 2021, faces serious federal charges alongside two of her employees.
        </p>

        <p>
          According to the U.S. Attorney's Office for the Southern District of Texas, Turner and her co-defendants have been indicted on charges of <strong>conspiracy to commit fraud, theft concerning federal program funds, and wire fraud</strong>.
        </p>

        <h2>The Phantom Payroll Scheme</h2>

        <p>
          The federal indictment outlines a brazen scheme that allegedly spanned from <strong>September 2023 through September 2025</strong>. Prosecutors accuse Turner of hiring two individuals to provide personal care services for her elderly mother, but compensating them entirely using county payroll funds rather than her own money. During this two-year period, the two employees allegedly clocked in and logged fake work hours for the county under Turner's direct supervision and knowledge, while they were actually performing personal, non-county services.
        </p>

        <p>
          In a press conference announcing the charges, U.S. Attorney <strong>Aaron Reitz</strong> indicated that investigators suspect the total amount of misappropriated county funds could range in the "tens or hundreds of thousands" of dollars, though the exact figures are still being calculated as the investigation continues.
        </p>

        <div className="my-8 not-prose rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-3">Fort Bend County Indictment Quick Intel Grid</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Official:</strong> Carmen Turner, Fort Bend County Tax Assessor-Collector</li>
            <li><strong>Arrest Date:</strong> Thursday, October 22, 2026</li>
            <li><strong>Federal Charges:</strong> Conspiracy to commit fraud, wire fraud, theft of federal funds</li>
            <li><strong>Alleged Scheme:</strong> Using county payroll to pay her mother's personal caregivers</li>
            <li><strong>Scheme Duration:</strong> September 2023 through September 2025</li>
          </ul>
        </div>

        <h2>Calls for Resignation</h2>

        <p>
          In the wake of the arrests, local political leaders are attempting to manage the fallout. While Turner is presumed innocent until proven guilty and currently remains in her elected position, the Fort Bend County Judge has publicly called for her resignation to maintain public confidence and integrity within the tax assessor-collector's office.
        </p>

        <p>
          If convicted, all three defendants face the possibility of decades in federal prison.
        </p>

        <p>
          For more Texas public-corruption coverage, see the{' '}
          <Link href="/local/houston" className="text-blue-600 hover:text-blue-800 underline">
            Houston local hub
          </Link>{' '}
          and our report on the{' '}
          <Link href="/local/houston/immigration-attorney-alla-nowowiejski-mail-fraud-indictment-2026" className="text-blue-600 hover:text-blue-800 underline">
            Houston immigration attorney mail fraud indictment
          </Link>
          .
        </p>
      </QuickArticle>
    </>
  );
}