import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/local/us-news/att-data-breach-settlement-final-approval-2026';
const ARTICLE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = `https://www.objectivewire.org/thumbnails/local-us-news-att-data-breach-settlement-final-approval-2026.jpg`;

export const metadata: Metadata = {
  title: "AT&T Data Breach Settlement | $177M Final Approval",
  description:
    "Senior District Judge Sidney A. Fitzwater granted final approval to the $177 million AT&T class-action settlement over two 2024 data breaches.",
  keywords: [
    'AT&T data breach settlement final approval 177 million',
    'AT&T class action payout details',
    'Snowflake data breach AT&T compensation',
    'Senior District Judge Sidney A Fitzwater',
    'AT&T data breach payout timeline',
    'Kroll settlement administrator AT&T',
    'MDL 3114 customer data security breach litigation',
    'AT&T dark web leak 73 million customers',
    'AT&T settlement tier 1 SSN payout',
    'telecomdatasettlement.com claim status',
    'AT&T settlement effective date payments',
    'data breach class action Northern District of Texas',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "Final Approval Granted: AT&T's $177 Million Data Breach Settlement",
    description:
      "A federal judge approved the $177 million class-action settlement over two 2024 data breaches. Here is the payout structure, the claim tiers, and when payments arrive.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Carson Scott'],
    publishedTime: '2026-10-31T20:00:00Z',
    modifiedTime: '2026-10-31T20:00:00Z',
    section: 'News',
    tags: ['AT&T', 'Data Breach', 'Class Action', 'Snowflake', 'Settlement'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'AT&T data breach settlement final approval' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Court Greenlights the $177 Million AT&T Data Breach Settlement",
    description: 'Two breaches, two payout pools, tiers from about $6.50 up to $7,500. What claimants should expect and when.',
    images: [OG_IMAGE],
  },
};

export default function ATTDataBreachSettlementPage() {
  return (
    <>
      <NewsArticleSchema
        title="AT&T Data Breach Settlement | $177M Final Approval"
        description="Senior District Judge Sidney A. Fitzwater granted final approval to the $177 million AT&T class-action settlement over two 2024 data breaches."
        author="Carson Scott"
        authorUrl="https://www.objectivewire.org/authors/carson-scott"
        publishedTime="2026-10-31T20:00:00Z"
        modifiedTime="2026-10-31T20:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="News"
        keywords={[
          'AT&T data breach settlement final approval 177 million',
          'AT&T class action payout details',
          'Snowflake data breach AT&T compensation',
        ]}
      />

      <QuickArticle
        title="Court Greenlights the $177 Million AT&T Data Breach Settlement | What Claimants Need to Know"
        subtitle="Resolving multi-district litigation stemming from two massive customer data security incidents disclosed in 2024, a federal judge has granted final approval to a $177 million class-action settlement with telecom giant AT&T."
        department="Legal"
        category="News"
        accentColor="blue"
        publishDate="October 31, 2026"
        readTime="6 min read"
        author={{ name: 'Carson Scott', slug: 'carson-scott' }}
        heroImage={{
          src: OG_IMAGE,
          alt: 'AT&T data breach settlement final approval',
          caption: 'A federal court approved a $177 million settlement over two 2024 data breaches.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/local/us-news', label: 'Local US News' },
          { href: SLUG, label: 'Data Breach Settlement' },
        ]}
        sources={[
          {
            number: 1,
            title: 'In Re: AT&T Inc. Customer Data Security Breach Litigation (MDL No. 3114), Court Order and Approval Notice',
            url: 'https://www.telecomdatasettlement.com/',
            publisher: 'U.S. District Court, Northern District of Texas',
          },
          {
            number: 2,
            title: 'AT&T Settlement Approved: Claims Closed, Up to $7.5K Combined',
            url: 'https://www.brightdefense.com/news/att-data-breach/',
            publisher: 'BrightDefense',
          },
          {
            number: 3,
            title: 'Millions of AT&T Customers to Receive Payouts Following Approval of $177 Million Settlement',
            url: 'https://www.fox4news.com/news/att-2024-data-breach-settlement-payout-details',
            publisher: 'FOX 4 News',
          },
        ]}
        relatedArticles={[
          { href: '/local/us-news/ghost-mode-corvette-c7-rlyslo-police-chase', title: 'Ghost Mode Corvette C7 RlySlo | Police Chase Kill Switch', category: 'News' },
          { href: '/local/us-news/lams-seafood-ebt-fraud-king-5-2026', title: "Lam's Seafood EBT Fraud King 5 | What Investigations Found", category: 'News' },
          { href: '/local/greater-texas/magnolia-diagnostics-24m-covid-testing-fraud-settlement-2026', title: 'Magnolia Diagnostics | $24M COVID Testing Fraud Settlement', category: 'News' },
          { href: '/local/us-news', title: 'Local US News | Domestic Investigative Coverage', category: 'News' },
        ]}
        tags={['AT&T', 'Data Breach', 'Class Action', 'Snowflake', 'Settlement']}
      >
        <p>
          Resolving multi-district litigation stemming from two massive customer data security incidents disclosed in 2024, a federal judge has granted final approval to a <strong>$177 million class-action settlement</strong> with telecom giant <strong>AT&T</strong>.
        </p>

        <p>
          Senior District Judge <strong>Sidney A. Fitzwater</strong> of the U.S. District Court for the Northern District of Texas issued the memorandum opinion and order approving the combined agreement.
        </p>

        <p>
          The court-sanctioned agreement resolves tens of thousands of consolidated claims filed by current and former customers following the exposure of personal records, Social Security numbers, and customer call and text metadata across two separate security events.
        </p>

        <div className="my-8 not-prose rounded-xl border border-blue-200 bg-blue-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3">Settlement Profile</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Total Settlement Value:</strong> $177,000,000 net fund</li>
            <li><strong>Incident 1 Allocation:</strong> $149 million for the dark web customer record exposure</li>
            <li><strong>Incident 2 Allocation:</strong> $28 million for the Snowflake cloud database incident</li>
            <li><strong>Approval Court:</strong> U.S. District Court, Northern District of Texas, MDL No. 3114</li>
            <li><strong>Presiding Judge:</strong> Senior District Judge Sidney A. Fitzwater</li>
          </ul>
        </div>

        <h2>Breakdown of the Dual-Breach Structure</h2>

        <p>
          The $177 million net fund is divided into two distinct settlement pools to address the varying scopes of the underlying breaches:
        </p>

        <ol>
          <li>
            <strong>The March 2024 dark web incident, a $149 million pool.</strong> Covers approximately 7.6 million current account holders and 65.4 million former customers whose sensitive personal data, including names, passcodes, and Social Security numbers, was leaked on dark web forums.
          </li>
          <li>
            <strong>The July 2024 Snowflake cloud incident, a $28 million pool.</strong> Covers nearly 110 million customers whose call and text interaction metadata, including telephone numbers and record counts, was exfiltrated from the carrier's cloud environment hosted on Snowflake.
          </li>
        </ol>

        <h2>Payout Tiers and Documented Loss Caps</h2>

        <p>
          Under the terms approved by the court, compensation is categorized into tiered cash distribution pools managed by the third-party settlement administrator, <strong>Kroll</strong>.
        </p>

        <div className="my-8 not-prose overflow-hidden rounded-xl border border-blue-200 shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-2 text-left font-bold">Category Tier</th>
                <th className="px-4 py-2 text-left font-bold">Estimated Payout Range and Qualification</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Tier 1, Social Security number exposure', 'About $39.00 to $40.00 base cash payout'],
                ['Tier 2 and Tier 3, standard claims', 'About $6.50 to $15.00 base cash payout'],
                ['Documented losses, single breach', 'Up to $5,000 max reimbursement for proven identity theft'],
                ['Documented losses, dual breach', 'Up to $7,500 max reimbursement for proven dual-leak loss'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 ? 'bg-blue-50/50' : ''}>
                  <td className="px-4 py-2 font-semibold text-blue-900">{row[0]}</td>
                  <td className="px-4 py-2 text-gray-700">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul>
          <li>
            <strong>Standard and tiered cash claims.</strong> Claimants whose Social Security numbers were compromised qualify for Tier 1 payments, while non-SSN data class members qualify for Tier 2 or Tier 3 payments.
          </li>
          <li>
            <strong>Out-of-pocket extraordinary losses.</strong> Claimants who suffered documented, unreimbursed financial losses directly traceable to identity theft, fraud, or credit monitoring services stemming from the March 2024 breach can receive up to <strong>$5,000</strong>. Those impacted by both data incidents who can demonstrate verified losses qualify for combined compensation caps of up to <strong>$7,500</strong>.
          </li>
        </ul>

        <h2>Distribution Timeline and Next Steps for Claimants</h2>

        <p>
          While the formal granting of final approval marks a major legal hurdle, distribution of funds will not happen immediately.
        </p>

        <div className="my-8 not-prose rounded-xl border border-blue-200 bg-blue-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3">Settlement Execution Sequence</p>
          <p className="text-sm text-gray-700">
            Final approval order granted, then the 30-day legal appeal window closes, then the settlement reaches its effective date, then payouts are issued within 60 days.
          </p>
        </div>

        <ul>
          <li>
            <strong>Filing window closed.</strong> The deadline to file new claims, modify existing filings, or opt out of the class formally closed on <strong>December 18, 2025</strong>.
          </li>
          <li>
            <strong>Deficiency processing.</strong> Kroll completed processing deficiency verifications for flagged class members on September 8, 2026.
          </li>
          <li>
            <strong>Disbursement schedule.</strong> Under the settlement agreement terms, electronic transfers and paper checks are required to be distributed within <strong>60 days after the effective date</strong>. Provided no third-party legal appeals delay the process following the close of the mandatory post-judgment appeal window, payments are expected to begin arriving between <strong>late December 2026 and early 2027</strong>.
          </li>
        </ul>

        <p>
          Class members can track their individual claim verification status and review official court orders directly through the settlement portal at{' '}
          <a
            href="https://www.telecomdatasettlement.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            telecomdatasettlement.com
          </a>
          . For more consumer and legal accountability coverage, see{' '}
          <Link href="/local/us-news" className="text-blue-600 hover:text-blue-800 underline">
            Local US News
          </Link>{' '}
          and our report on the{' '}
          <Link href="/local/greater-texas/magnolia-diagnostics-24m-covid-testing-fraud-settlement-2026" className="text-blue-600 hover:text-blue-800 underline">
            Magnolia Diagnostics fraud settlement
          </Link>
          .
        </p>
      </QuickArticle>
    </>
  );
}