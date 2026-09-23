import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/local/greater-texas/doj-summer-surge-pandemic-loan-fraud-15m-texas-2026';
const ARTICLE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = `https://www.objectivewire.org/thumbnails/local-greater-texas-doj-summer-surge-pandemic-loan-fraud-15m-texas-2026.jpg`;

export const metadata: Metadata = {
  title: 'DOJ Summer Surge Pandemic Loan Fraud | $15.3M Stolen in Texas',
  description:
    'Federal investigators concluded a massive "summer surge" of COVID-era loan fraud indictments, uncovering over $15.3 million stolen in Texas alone as part of a $245 million nationwide crackdown.',
  keywords: [
    'Pandemic loan fraud Texas',
    'DOJ summer surge indictments',
    'COVID-era loan fraud',
    'SBA fraud crackdown',
    'PPP loan fraud Texas',
    '$245 million pandemic fraud',
    'Weldon Greer wire fraud',
    'Eastern District of Texas PPP fraud',
    'EIDL fraud Texas 2026',
    'DOJ National Fraud Enforcement Division',
    'SBA Office of Inspector General',
    'phantom employees PPP fraud',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'DOJ "Summer Surge" Targets Pandemic Loan Fraud | $15.3M Stolen in Texas',
    description:
      'The Department of Justice, SBA, and SBA OIG wrapped up a nationwide enforcement sweep of over 160 defendants for COVID-era loan fraud, including $15.3 million in Texas alone.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Carson Scott'],
    publishedTime: '2026-09-23T17:00:00Z',
    modifiedTime: '2026-09-23T17:00:00Z',
    section: 'News',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'DOJ summer surge pandemic loan fraud Texas crackdown' }],
    tags: ['DOJ', 'Pandemic Loan Fraud', 'Texas', 'SBA', 'PPP Fraud', 'Austin'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texas Hit Hard in $245M COVID-19 Loan Fraud Crackdown',
    description: 'Over 160 defendants charged nationwide. $15.3M stolen in Texas, including an $8.39M Houston conspiracy.',
    images: [OG_IMAGE],
  },
};

export default function DOJSummerSurgePage() {
  return (
    <>
      <NewsArticleSchema
        title="DOJ Summer Surge Pandemic Loan Fraud | $15.3M Stolen in Texas"
        description="Federal investigators concluded a massive summer surge of COVID-era loan fraud indictments, uncovering over $15.3 million stolen in Texas alone as part of a $245 million nationwide crackdown."
        author="Carson Scott"
        authorUrl="https://www.objectivewire.org/authors/carson-scott"
        publishedTime="2026-09-23T17:00:00Z"
        modifiedTime="2026-09-23T17:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        section="News"
        keywords={[
          'Pandemic loan fraud Texas',
          'DOJ summer surge indictments',
          'COVID-era loan fraud',
        ]}
      />

      <NewsArticle
        title="DOJ Summer Surge Targets Pandemic Loan Fraud | More Than $15.3 Million Stolen in Texas"
        subtitle="Years after the peak of the COVID-19 pandemic, federal investigators are still tracking down criminals who treated taxpayer-funded relief programs like a personal piggy bank. The DOJ summer surge resulted in enforcement actions against more than 160 defendants nationwide, including $15.3 million in Texas alone."
        category="News"
        categoryColor="orange"
        topicTag="investigations"
        publishDate="September 23, 2026"
        publishedTime="2026-09-23T17:00:00Z"
        readTime="6 min read"
        author={{
          name: 'Carson Scott',
          role: 'Investigative Reporter, Objective Wire',
          authorSlug: 'carson-scott',
        }}
        slug={SLUG}
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Greater Texas', item: '/local/greater-texas' },
          { name: 'DOJ Summer Surge', item: SLUG },
        ]}
        tags={['DOJ', 'Pandemic Loan Fraud', 'Texas', 'SBA', 'PPP Fraud', 'Austin']}
        keyTakeaways={[
          'The Department of Justice, with the SBA and SBA Office of Inspector General, wrapped up a "summer surge" enforcement campaign of over 160 defendants nationwide, targeting roughly $245 million in intended or actual pandemic loan fraud.',
          'Texas was at the center of multiple high-profile cases, with investigators uncovering more than $15.3 million tied to fraudulent PPP and EIDL loans across the state.',
          'Houston resident Weldon Greer, Jr., 61, pleaded guilty to a wire fraud conspiracy that obtained dozens of PPP and EIDL loans through falsified documents, causing an $8.39 million loss to the SBA.',
          'Craig and Chemika Bennett of Celina pleaded guilty after securing $697,000 in PPP loans while claiming employee payroll, despite having zero employees, and using the funds for personal expenses.',
          'The SBA has suspended 870,000 borrowers tied to roughly $39 billion in suspected fraudulent PPP and COVID EIDL activity, and the government continues pursuing civil suits and asset forfeitures.',
        ]}
        keyTakeawaysColor="orange"
        faqItems={[
          {
            question: 'What is the DOJ summer surge?',
            answer:
              'The "summer surge" was an aggressive Department of Justice enforcement campaign run from mid-June through September 1, 2026, in coordination with the SBA and SBA Office of Inspector General. It resulted in enforcement actions against more than 160 criminal defendants for COVID-era loan fraud.',
          },
          {
            question: 'How much pandemic loan fraud was found in Texas?',
            answer:
              'Investigators uncovered more than $15.3 million tied to fraudulent PPP and EIDL loans across Texas, including an $8.39 million conspiracy out of Houston and multiple fraud cases in the Eastern District of Texas.',
          },
          {
            question: 'Who is Weldon Greer Jr.?',
            answer:
              'Weldon Greer Jr., 61, of Houston, pleaded guilty to conspiracy to commit wire fraud after submitting falsified documentation to obtain dozens of PPP and EIDL loans between 2020 and 2021, causing an $8.39 million loss to the SBA. He faces up to 30 years in federal prison.',
          },
          {
            question: 'What schemes were used to defraud the PPP and EIDL programs?',
            answer:
              'Defendants allegedly fabricated businesses, submitted false payroll and revenue claims, stole identities, claimed phantom employees, and concealed foreign ties on their loan applications to obtain relief funds they did not qualify for.',
          },
          {
            question: 'How much pandemic fraud has the SBA identified overall?',
            answer:
              'The SBA has suspended roughly 870,000 borrowers tied to an estimated $39 billion in suspected fraudulent PPP and COVID EIDL activity, far exceeding the $245 million addressed in the summer surge alone.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Greater Texas"
        moreFromHubHref="/local/greater-texas"
      >
        <p>
          Years after the peak of the COVID-19 pandemic, federal investigators are still tracking down criminals who
          treated taxpayer-funded relief programs like a personal piggy bank. The Department of Justice, in coordination
          with the Small Business Administration (SBA) and SBA Office of Inspector General, recently wrapped up an
          aggressive enforcement campaign dubbed the <strong>"summer surge."</strong>
        </p>

        <p>
          Running from mid-June through September 1, the sweep resulted in enforcement actions against more than 160
          criminal defendants nationwide, targeting approximately <strong>$245 million</strong> in intended or actual
          losses to American taxpayers. Texas found itself at the epicenter of several high-profile cases, with
          investigators uncovering over <strong>$15.3 million</strong> tied to fraudulent loans across the state.
        </p>

        <h2>Fabricated Businesses and Fake Payrolls</h2>

        <p>
          The targeted relief programs, primarily the Paycheck Protection Program (PPP) and the Economic Injury Disaster
          Loan (EIDL) program, were designed to sustain struggling small businesses during pandemic lockdowns. Instead,
          organized fraudsters and opportunists exploited the system.
        </p>

        <p>
          "The defendants charged during our summer surge allegedly fabricated businesses, submitted false payroll and
          revenue claims, stole identities, and concealed foreign ties on their applications," noted Assistant Attorney
          General Colin M. McDonald of the National Fraud Enforcement Division.
        </p>

        <p>
          The Eastern District of Texas alone handled a significant portion of the state's multi-million-dollar fraud
          cases. According to U.S. Attorney Jay R. Combs, the recent indictments and guilty pleas highlight the brazen
          nature of the theft.
        </p>

        <ul>
          <li><strong>The multi-million dollar conspiracy:</strong> Weldon Greer, Jr., 61, of Houston, pleaded guilty to conspiracy to commit wire fraud. From 2020 through 2021, Greer submitted falsified supporting documentation to obtain dozens of PPP and EIDL loans, resulting in an $8.39 million loss to the SBA. He faces up to 30 years in federal prison.</li>
          <li><strong>Fake forgiveness:</strong> Thomas Flanagan, 66, of Beaumont, was indicted for allegedly submitting falsified PPP loan forgiveness applications for two shipping corporations, pocketing over $1.5 million.</li>
          <li><strong>Phantom employees:</strong> Craig and Chemika Bennett of Celina pleaded guilty after securing $697,000 in loans. The couple claimed the funds were for business expenses and employee payroll despite having zero employees, and allegedly used the taxpayer funds for entirely personal expenses.</li>
        </ul>

        <h2>An Unfinished Hunt</h2>

        <p>
          The "summer surge" represents just a fraction of the government's broader effort to claw back stolen pandemic
          funds. According to the SBA, recent sweeping actions have resulted in the suspension of 870,000 borrowers tied
          to an astonishing <strong>$39 billion</strong> in suspected fraudulent PPP and COVID EIDL activity.
        </p>

        <p>
          Federal officials have made it explicitly clear that the passage of time does not grant these fraudsters
          immunity. The government is actively pursuing civil suits and asset forfeitures to recover every stolen dollar,
          ensuring that those who exploited the crisis will eventually have to pay the tab.
        </p>

        <h2>Sources</h2>
        <ul>
          <li><a href="https://www.justice.gov/usao-edtx/pr/eastern-district-texas-joins-doj-fraud-division-sba-and-sba-oig-covid-era-loan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">U.S. DOJ | Eastern District of Texas Joins COVID-Era Loan Takedown</a></li>
          <li><a href="https://www.kxan.com/news/texas/pandemic-loan-frauds-took-over-15-3m-in-texas-245-3m-nationwide-doj/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">KXAN | Pandemic Loan Frauds Took Over $15.3M in Texas, $245.3M Nationwide</a></li>
          <li><a href="https://www.swlaw.com/publication/doj-sba-ramp-up-pandemic-relief-fraud-enforcement/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">National Law Review | DOJ and SBA Ramp Up Pandemic Relief Fraud Enforcement</a></li>
        </ul>

        <p>
          For more Texas coverage, see the{' '}
          <Link href="/local/greater-texas" className="text-blue-600 hover:text-blue-800 underline">
            oWire Greater Texas hub
          </Link>{' '}
          or read our reporting on{' '}
          <Link href="/local/greater-texas/magnolia-diagnostics-24m-covid-testing-fraud-settlement-2026" className="text-blue-600 hover:text-blue-800 underline">
            the Magnolia Diagnostics COVID testing fraud settlement
          </Link>{' '}
          and{' '}
          <Link href="/local/greater-texas/georgetown-the-district-400m-fraud-verdict-2026" className="text-blue-600 hover:text-blue-800 underline">
            the Georgetown $400 million fraud verdict
          </Link>
          .
        </p>
      </NewsArticle>
    </>
  );
}