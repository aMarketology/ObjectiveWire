import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';
import Link from 'next/link';

export const revalidate = 86400;

const SLUG = '/blog/bexar-county-towing-bribery-conviction';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Bexar County Towing Bribery | Two Convicted in FBI Sting',
  description:
    'Mission Wrecker owner Muhammad Choudhary and a second San Antonio businessman pleaded guilty to conspiracy to commit bribery after offering Bexar County Sheriff Javier Salazar $30,000 upfront and $25,000 annually for a county towing contract. Salazar reported the offer to the FBI immediately.',
  keywords: [
    'Bexar County towing contract bribery',
    'Muhammad Choudhary Mission Wrecker guilty plea',
    'Javier Salazar bribery attempt',
    'Bexar County Sheriff FBI sting',
    'San Antonio towing bribery conviction 2026',
    'Bexar County public corruption 2026',
    'Texas towing contract bid rigging',
    'Muhammad Choudhary federal conviction',
    'San Antonio federal bribery case',
    'Texas sheriff bribery sting',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Bexar County Towing Bribery | Two Convicted in FBI Sting',
    description:
      'Two San Antonio businessmen pleaded guilty after offering Sheriff Javier Salazar $55,000 total to bypass competitive bidding on a Bexar County towing contract. Salazar reported the approach to the FBI, triggering a sting.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'Objective Wire',
    authors: ['Alfonso C.'],
    publishedTime: '2026-06-01T12:00:00Z',
    modifiedTime: '2026-06-01T12:00:00Z',
    section: 'Investigations',
    tags: ['Bexar County', 'Public Corruption', 'Bribery', 'San Antonio'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Two Convicted in Bexar County Towing Bribery Sting',
    description: 'Mission Wrecker owner offered Sheriff Salazar $30K upfront and $25K annually to secure a county contract. Salazar went straight to the FBI.',
  },
};

export default function BexarCountyTowingBriberyPage() {
  return (
    <NewsArticle
      title="Bexar County Towing Bribery | Two Convicted After FBI Sting"
      subtitle="Mission Wrecker owner Muhammad Choudhary and a second San Antonio businessman pleaded guilty to conspiracy to commit bribery after offering Bexar County Sheriff Javier Salazar $30,000 upfront and $25,000 annually to secure a county towing contract without competitive bidding."
      category="Investigations"
      categoryColor="orange"
      topicTag="investigations"
      publishDate="June 1, 2026"
      readTime="4 min read"
      author={{
        name: 'Alfonso C.',
        role: 'Lead Investigator',
        authorSlug: 'alfansa',
      }}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Texas Investigations', item: '/blog' },
        { name: 'Bexar County Towing Bribery Conviction', item: SLUG },
      ]}
      keyTakeaways={[
        'Muhammad Choudhary, 78, owner of Mission Wrecker towing in San Antonio, pleaded guilty to conspiracy to commit bribery after offering a bribe to obtain the Bexar County towing contract.',
        'Choudhary and a second businessman met with Bexar County Sheriff Javier Salazar in April 2025, offering $30,000 upfront and $25,000 annually for the lifetime of the contract in exchange for bypassing the competitive bidding process.',
        'Sheriff Salazar reported the bribery approach to the FBI immediately, triggering a sting operation that recorded the subsequent interactions and secured the guilty pleas.',
        'Both men face up to five years in federal prison on the conspiracy to commit bribery charge.',
      ]}
      keyTakeawaysColor="orange"
      faqItems={[
        {
          question: 'What happened in the Bexar County towing contract bribery case?',
          answer: 'In April 2025, Mission Wrecker owner Muhammad Choudhary and a second San Antonio businessman met with Bexar County Sheriff Javier Salazar and offered him $30,000 upfront and $25,000 per year for the lifetime of a county towing contract in exchange for awarding the contract without going through the competitive bidding process. Sheriff Salazar immediately reported the offer to the FBI, which launched a sting operation. Both men pleaded guilty to conspiracy to commit bribery.',
        },
        {
          question: 'Who is Muhammad Choudhary?',
          answer: 'Muhammad Choudhary, 78, is the owner of Mission Wrecker, a towing company in San Antonio, Texas. He pleaded guilty to conspiracy to commit bribery in connection with an attempt to purchase a Bexar County towing contract by bribing Sheriff Javier Salazar. He faces up to five years in federal prison.',
        },
        {
          question: 'What did Sheriff Javier Salazar do when offered the bribe?',
          answer: 'Sheriff Javier Salazar reported the bribery approach to the FBI immediately after the April 2025 meeting. His cooperation enabled the FBI to conduct a sting operation that documented subsequent interactions and produced the evidence that led to both men pleading guilty.',
        },
        {
          question: 'What sentence do the convicted men face?',
          answer: 'Both Muhammad Choudhary and the second businessman face up to five years in federal prison on the conspiracy to commit bribery charge. Sentencing dates had not been set as of the date of this report.',
        },
      ]}
      tags={['Bexar County', 'Public Corruption', 'Bribery', 'San Antonio', 'FBI', 'Texas Courts']}
      slug="bexar-county-towing-bribery-conviction"
      url={SLUG}
    >
      <p>
        Two San Antonio businessmen, including 78-year-old Mission Wrecker towing company owner
        Muhammad Choudhary, pleaded guilty to conspiracy to commit bribery after attempting to
        purchase a Bexar County government towing contract by bribing Sheriff Javier Salazar,
        according to federal court documents reviewed by the{' '}
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 underline">
          Objective Wire investigative team
        </Link>.
        Salazar reported the approach to the FBI immediately, triggering a federal sting operation
        that led to the convictions.
      </p>

      <p>
        The approach took place in April 2025. Choudhary and the second businessman, who is also
        named in the federal case, met with Salazar and offered an upfront payment of $30,000
        along with a $25,000 annual kickback for the lifetime of the towing contract, provided
        Salazar awarded the contract to Mission Wrecker without opening the process to competitive
        bids. The total value of the bribe, assuming a standard contract period, represented
        a significant sum well above typical contracting thresholds that require public bidding
        under Texas procurement law.
      </p>

      <h2>Sheriff Salazar | FBI Notification and the Sting Operation</h2>

      <p>
        Rather than accept or ignore the offer, Sheriff Salazar contacted the FBI on the day of
        the meeting. Federal agents then worked with Salazar to document subsequent contacts
        between the sheriff and the two businessmen, building the evidentiary record that
        ultimately underpinned the federal charges. The case is an example of a law enforcement
        official responding to a bribery approach in a textbook manner: immediate FBI notification,
        cooperation with a controlled sting, and a clean chain of custody for the recorded evidence.
      </p>

      <p>
        Salazar addressed the case publicly after the guilty pleas were entered, providing{' '}
        <a
          href="https://www.youtube.com/watch?v=THIDowi7lX4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          a direct on-camera account
        </a>{' '}
        of the encounter and the FBI involvement that followed.
      </p>

      <h2>Bexar County Towing Contracts | The Public Bidding System at Stake</h2>

      <p>
        County towing contracts in Texas are subject to competitive bidding requirements under
        state procurement law when they exceed defined financial thresholds. The purpose of
        competitive bidding is to prevent exactly the arrangement Choudhary sought: a sole-source
        award based on a personal payment rather than price, capability, or service quality.
        Had the bribe succeeded, taxpayers and the court system would have been bound to a
        vendor selected through corruption rather than merit.
      </p>

      <p>
        The case also illustrates how towing contracts, which are often treated as low-visibility
        government awards, represent significant financial value to operators. A county-level
        towing contract with exclusive or preferred dispatch status can generate substantial
        annual revenue, making the economics of the alleged bribe internally consistent from
        the perspective of the businessman who offered it.
      </p>

      <h2>Federal Charges | Sentencing and Status</h2>

      <p>
        Both Choudhary and the second businessman face up to five years in federal prison on
        the conspiracy to commit bribery conviction. Sentencing had not been scheduled as of
        the date of this report. For additional coverage of Texas public corruption prosecutions,
        see the{' '}
        <Link href="/local/greater-texas" className="text-blue-600 hover:text-blue-800 underline">
          Greater Texas investigations hub
        </Link>{' '}
        and the{' '}
        <Link href="/blog/san-antonio-dje-texas-ponzi-scheme-69-million" className="text-blue-600 hover:text-blue-800 underline">
          DJE Texas $69.5 million Ponzi scheme conviction
        </Link>.
      </p>

      <p>
        This investigation was reported by{' '}
        <Link href="/authors/alfansa" className="text-blue-600 hover:text-blue-800 underline">
          Alfonso C.
        </Link>
        , lead investigator at Objective Wire, using federal court filings and Department of
        Justice records. Tips on Texas public corruption can be submitted through the{' '}
        <Link href="/service/tip-the-newsroom" className="text-blue-600 hover:text-blue-800 underline">
          Objective Wire confidential tip line
        </Link>.
      </p>
    </NewsArticle>
  );
}
