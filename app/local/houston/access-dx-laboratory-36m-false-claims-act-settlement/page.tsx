import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/local/houston/access-dx-laboratory-36m-false-claims-act-settlement';
const ARTICLE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = `https://www.objectivewire.org/thumbnails/local-houston-access-dx-laboratory-36m-false-claims-act-settlement.jpg`;

export const metadata: Metadata = {
  title: 'Access DX Laboratory | $36.4M False Claims Act Settlement',
  description:
    'The DOJ finalized a $36.4 million settlement with Houston-based Access DX Laboratory, its former CEO Michael Stewart, and Florida businessman Harold Shatz over illegal kickbacks and unnecessary genetic testing billed to Medicare and Medicaid.',
  keywords: [
    'Access DX Laboratory settlement',
    'Michael Stewart healthcare fraud',
    'Harold Shatz kickbacks',
    'False Claims Act genetic testing',
    'Houston lab Medicare fraud',
    'DOJ healthcare fraud settlement 2026',
    'qui tam whistleblower genetic testing',
    'Access DX kickback scheme',
    'unnecessary genetic testing Medicare',
    'HHS-OIG corporate integrity agreement',
    'Texas laboratory fraud settlement',
    'Douglas Green whistleblower award',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Justice Department Finalizes $36.4M Settlement With Houston Access DX Laboratory',
    description:
      'The DOJ finalized a $36.4 million settlement with Houston-based Access DX Laboratory over allegations of illegal kickbacks and fraudulent billing for unnecessary genetic tests billed to Medicare and Medicaid.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-08-03T15:00:00Z',
    modifiedTime: '2026-08-03T15:00:00Z',
    section: 'News',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Access DX Laboratory Houston False Claims Act settlement' }],
    tags: ['Access DX', 'False Claims Act', 'Medicare Fraud', 'Houston', 'Healthcare Fraud'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Houston Lab to Pay $36.4M Over Unnecessary Genetic Testing Fraud',
    description: 'Access DX Laboratory, its former CEO, and a Florida businessman settled False Claims Act allegations over kickbacks and fraudulent Medicare billing.',
    images: [OG_IMAGE],
  },
};

export default function AccessDXSettlementPage() {
  return (
    <>
      <NewsArticleSchema
        title="Access DX Laboratory | $36.4M False Claims Act Settlement"
        description="The DOJ finalized a $36.4 million settlement with Houston-based Access DX Laboratory over illegal kickbacks and unnecessary genetic testing billed to Medicare and Medicaid."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.org/authors/jack-brennan"
        publishedTime="2026-08-03T15:00:00Z"
        modifiedTime="2026-08-03T15:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        section="News"
        keywords={[
          'Access DX Laboratory settlement',
          'Michael Stewart healthcare fraud',
          'Harold Shatz kickbacks',
        ]}
      />

      <NewsArticle
        title="Justice Department Finalizes $36.4 Million Settlement With Houston Access DX Laboratory"
        subtitle="The U.S. Department of Justice Civil Division has finalized a $36.4 million civil settlement resolving allegations of illegal kickbacks and fraudulent billing against Houston-based Access DX Laboratory, its former CEO Michael Stewart, and Florida businessman Harold Shatz over medically unnecessary genetic testing billed to Medicare and Medicaid."
        category="News"
        categoryColor="orange"
        topicTag="investigations"
        publishDate="August 3, 2026"
        publishedTime="2026-08-03T15:00:00Z"
        readTime="5 min read"
        author={{
          name: 'Jack Brennan',
          role: 'Reporter, Objective Wire',
          authorSlug: 'jack-brennan',
        }}
        slug={SLUG}
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Houston', item: '/local/houston' },
          { name: 'Access DX Settlement', item: SLUG },
        ]}
        tags={['Access DX', 'False Claims Act', 'Medicare Fraud', 'Houston', 'Healthcare Fraud']}
        keyTakeaways={[
          'The DOJ finalized a $36.4 million civil settlement with Houston-based Access DX Laboratory, former CEO Michael Stewart, and Florida businessman Harold Shatz over illegal kickbacks and fraudulent genetic testing billing.',
          'The government alleged that Access DX paid kickbacks to third-party marketers to recruit Medicare and Medicaid beneficiaries for genetic testing panels between January 2018 and January 2020.',
          'The defendants paid telemedicine providers to issue false or medically unnecessary physician orders without proper patient evaluation, and systematically unbundled testing codes to bypass federal reimbursement caps.',
          'The settlement resolves a qui tam whistleblower lawsuit filed by Douglas Green, who will receive approximately $7.2 million as his statutory share of the recovery under the False Claims Act.',
          'Access DX entered into a mandatory five-year Corporate Integrity Agreement with HHS-OIG requiring independent auditing and strict oversight of all referral arrangements.',
        ]}
        keyTakeawaysColor="orange"
        faqItems={[
          {
            question: 'What is Access DX Laboratory?',
            answer:
              'Access DX Laboratory is a Houston-based clinical laboratory that has agreed to pay $36.4 million to resolve False Claims Act allegations involving illegal kickbacks and unnecessary genetic testing billed to Medicare and Medicaid.',
          },
          {
            question: 'What did Access DX allegedly do wrong?',
            answer:
              'The government alleged that Access DX paid kickbacks to third-party marketers to recruit Medicare and Medicaid beneficiaries, paid telemedicine providers to issue false physician orders without proper patient evaluation, and unbundled testing codes to maximize federal payouts.',
          },
          {
            question: 'How much is the settlement?',
            answer:
              'The total settlement is $36.4 million. The resolution covers civil False Claims Act liability for operations conducted between January 2018 and January 2020.',
          },
          {
            question: 'Who blew the whistle on Access DX?',
            answer:
              'The settlement resolves a qui tam whistleblower lawsuit filed by Douglas Green, the president of a Massachusetts marketing firm. Green will receive approximately $7.2 million as his statutory share of the recovery.',
          },
          {
            question: 'Were criminal charges filed?',
            answer:
              'Yes. Former CEO Michael Stewart and Florida businessman Harold Shatz previously entered guilty pleas to criminal charges of conspiracy to defraud the United States and paying and receiving healthcare kickbacks.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Houston"
        moreFromHubHref="/local/houston"
      >
        <p>
          The U.S. Department of Justice Civil Division has officially finalized a <strong>$36.4 million civil settlement</strong> resolving allegations of illegal kickbacks and fraudulent billing against Houston-based <strong>Access DX Laboratory</strong>, its former CEO <strong>Michael Stewart</strong>, and Florida businessman <strong>Harold Shatz</strong>.
        </p>

        <p>
          The announcement formalizes the conclusion of a major federal healthcare fraud investigation into medically unnecessary genetic testing billed to Medicare and Medicaid.
        </p>

        <h2>Terms of the Finalized Agreement</h2>

        <p>
          Under the final terms released by federal prosecutors, the defendants have agreed to pay $36.4 million to resolve civil False Claims Act liability stemming from operations conducted between January 2018 and January 2020.
        </p>

        <ul>
          <li><strong>Kickbacks for patient referrals:</strong> The government alleged that Access DX and its leadership paid financial kickbacks to third-party marketers to recruit Medicare and Medicaid beneficiaries for genetic testing panels.</li>
          <li><strong>Fraudulent telemedicine orders:</strong> The defendants paid telemedicine providers to issue false or medically unnecessary physician orders without proper patient evaluation.</li>
          <li><strong>Unbundled billing codes:</strong> Access DX systematically unbundled testing codes to bypass federal reimbursement caps and maximize payouts from federal healthcare benefit programs.</li>
        </ul>

        <h2>Whistleblower Award and Corporate Mandates</h2>

        <p>
          The settlement resolves a <em>qui tam</em> whistleblower lawsuit filed by <strong>Douglas Green</strong>, the president of a Massachusetts marketing firm. As part of the final resolution, Green will receive approximately <strong>$7.2 million</strong> as his statutory share of the recovery under the False Claims Act.
        </p>

        <p>
          In addition to the monetary payout, Access DX has entered into a mandatory <strong>five-year Corporate Integrity Agreement (CIA)</strong> with the Department of Health and Human Services Office of Inspector General (HHS-OIG), requiring independent auditing and strict oversight of all referral arrangements.
        </p>

        <p>
          While the civil settlement resolves the monetary claims without a formal determination of civil liability, former CEO Michael Stewart and Florida businessman Harold Shatz previously entered guilty pleas to criminal charges of conspiracy to defraud the United States and paying and receiving healthcare kickbacks.
        </p>

        <h2>Sources</h2>
        <ul>
          <li><a href="https://www.justice.gov/opa/pr/texas-laboratory-former-ceo-and-florida-businessman-pay-total-364m-settle-allegations" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">DOJ | Texas Laboratory, Former CEO, and Florida Businessman Pay $36.4M to Settle Allegations</a></li>
          <li><a href="https://www.justice.gov/usao-ndga/pr/texas-laboratory-former-ceo-and-florida-businessman-pay-364-million-settle-health-care" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">USAO Northern District of Georgia | Access DX Settlement Announcement</a></li>
          <li><a href="https://oig.hhs.gov/fraud/enforcement/texas-laboratory-former-ceo-and-florida-businessman-pay-a-total-of-364m-to-settle-allegations-of-kickbacks-and-unnecessary-genetic-testing/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">HHS-OIG | Access DX Settlement Details</a></li>
          <li><a href="https://www.beckersasc.com/asc-coding-billing-and-collections/texas-lab-ceo-to-pay-36-2m-to-settle-physician-kickback-fraud-allegations/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Becker ASC Review | Texas Lab, CEO to Pay $36.2M to Settle Allegations</a></li>
        </ul>

        <p>
          For more Houston coverage, see the{' '}
          <Link href="/local/houston" className="text-blue-600 hover:text-blue-800 underline">
            oWire Houston hub
          </Link>{' '}
          or read our reporting on{' '}
          <Link href="/local/houston/emylee-thai-fbi-most-wanted-fraud-ankle-monitor-vietnam" className="text-blue-600 hover:text-blue-800 underline">
            the Emylee Thai FBI fugitive case
          </Link>{' '}
          and{' '}
          <Link href="/local/houston/unique-green-battle-funeral-home-estate-fraud-2-2m" className="text-blue-600 hover:text-blue-800 underline">
            the Unique Green-Battle funeral home fraud case
          </Link>.
        </p>
      </NewsArticle>
    </>
  );
}