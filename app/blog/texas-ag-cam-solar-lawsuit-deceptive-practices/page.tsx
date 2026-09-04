import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = '/blog/texas-ag-cam-solar-lawsuit-deceptive-practices';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'CAM Solar Lawsuit | Texas AG Sues San Antonio Company',
  description:
    'Texas Attorney General Ken Paxton sued CAM Solar Inc. of San Antonio on May 21, 2026, for deceptive sales practices tied to more than 100 consumer complaints.',
  keywords: [
    'CAM Solar lawsuit',
    'Texas AG CAM Solar',
    'CAM Solar San Antonio',
    'Texas solar fraud',
    'Ken Paxton solar lawsuit',
    'Texas Deceptive Trade Practices Act solar',
    'CAM Solar consumer complaints',
    'Texas solar panel scam',
    'solar energy fraud Texas',
    'CAM Solar restitution',
    'Texas AG consumer protection 2026',
    'solar panel installation fraud Texas',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Texas AG Sues CAM Solar Over Deceptive Sales Tactics',
    description:
      'More than 100 complaints triggered a May 2026 lawsuit against CAM Solar Inc. of San Antonio for false savings claims, defective installs, and hidden fees.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfonso C.'],
    publishedTime: '2026-06-01T10:00:00Z',
    modifiedTime: '2026-06-01T10:00:00Z',
    section: 'Investigations',
    tags: ['CAM Solar', 'Texas AG', 'Consumer Fraud', 'San Antonio'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texas AG Sues CAM Solar for Deceptive Sales Tactics',
    description: '100+ complaints, panels falling off roofs, hidden fees. Paxton filed suit May 21, 2026.',
  },
};

export default function CamSolarLawsuitPage() {
  return (
    <NewsArticle
      title="Texas AG Sues San Antonio Solar Company for Deceptive Sales Practices"
      subtitle="CAM Solar Inc. faces a DTPA lawsuit after more than 100 consumer complaints over false savings promises, defective systems, and undisclosed fees"
      category="Investigations"
      categoryColor="orange"
      topicTag="investigations"
      publishDate="June 1, 2026"
      readTime="5 min read"
      author={{
        name: 'Alfonso C.',
        role: 'Lead Investigator',
        authorSlug: 'alfansa',
      }}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Texas Investigations', item: '/blog' },
        { name: 'CAM Solar Lawsuit', item: SLUG },
      ]}
      keyTakeaways={[
        'CAM Solar Inc. is a San Antonio-based solar panel company sued by the Texas AG on May 21, 2026, for violating the Texas Deceptive Trade Practices Act.',
        'The lawsuit followed more than 100 consumer complaints and an April 2026 investigation launch by the Office of the Attorney General.',
        'Alleged violations include false energy-savings claims, defective system installations, hidden warranty and maintenance fees, and misrepresented tax-credit eligibility.',
        'In one documented incident, panels detached from a roof less than one year after installation and damaged both the consumer\'s property and a neighboring property.',
        'The AG seeks a court order to shut down CAM Solar\'s unlawful practices, full restitution for affected Texans, and civil penalties.',
      ]}
      keyTakeawaysColor="orange"
      faqItems={[
        {
          question: 'What is the CAM Solar lawsuit?',
          answer:
            'The CAM Solar lawsuit is a civil enforcement action filed May 21, 2026, by Texas Attorney General Ken Paxton against CAM Solar Inc. of San Antonio for deceptive solar panel sales practices that violate the Texas Deceptive Trade Practices Act.',
        },
        {
          question: 'What did CAM Solar allegedly do wrong?',
          answer:
            'CAM Solar is accused of promising energy savings that did not materialize, installing defective or nonfunctioning systems, failing to respond to service requests, hiding warranty and maintenance fees, misrepresenting tax-credit eligibility, and continuing to hold consumers to financing obligations after systems failed.',
        },
        {
          question: 'How many complaints were filed against CAM Solar?',
          answer:
            'More than 100 consumer complaints prompted the OAG to open its formal investigation in April 2026, leading to the May 2026 lawsuit.',
        },
        {
          question: 'What relief does the Texas AG seek?',
          answer:
            'The AG seeks a court injunction to halt CAM Solar\'s unlawful sales practices, full restitution for affected Texas consumers, and civil penalties for each DTPA violation.',
        },
        {
          question: 'What should Texans do if they were harmed by CAM Solar?',
          answer:
            'Affected consumers can file a complaint with the Texas AG\'s Consumer Protection Division at texasattorneygeneral.gov or call 1-800-621-0508.',
        },
      ]}
      tags={['CAM Solar', 'Texas AG', 'Consumer Fraud', 'San Antonio', 'Solar Panels', 'DTPA']}
      slug="texas-ag-cam-solar-lawsuit-deceptive-practices"
      url={PAGE_URL}
    >
      <p>
        CAM Solar Inc. is a San Antonio-based solar panel company now facing a state civil lawsuit after Texas Attorney
        General Ken Paxton filed suit on May 21, 2026, alleging the company engaged in systematic deceptive sales
        practices against residential customers statewide.
      </p>

      <p>
        The Office of the Attorney General opened its{' '}
        <a
          href="https://www.texasattorneygeneral.gov/news/releases/attorney-general-ken-paxton-launches-major-initiative-combat-widespread-fraud-companies-selling"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          formal investigation into solar company fraud
        </a>{' '}
        in April 2026 following the accumulation of more than 100 consumer complaints specifically targeting CAM Solar.
        The{' '}
        <a
          href="https://www.texasattorneygeneral.gov/news/releases/attorney-general-ken-paxton-sues-san-antonio-based-solar-company-fraudulent-sales-solar-panel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          May 2026 lawsuit
        </a>{' '}
        alleges seven categories of violation under the Texas Deceptive Trade Practices Act (DTPA), which prohibits
        false, misleading, and unconscionable acts in consumer transactions.
      </p>

      <h2>Seven Alleged Violations</h2>

      <p>
        According to the OAG petition, CAM Solar told prospective customers their electricity bills would drop
        significantly, promising savings that either never materialized or were far below what the company represented.
        The company is also accused of installing solar systems that were defective or failed to function at all, then
        ignoring service requests from customers whose systems stopped working.
      </p>

      <p>
        The lawsuit further alleges CAM Solar withheld material information from buyers, including the existence of
        warranty and maintenance fees that consumers only discovered after signing contracts. The company also allegedly
        misrepresented which of its customers qualified for federal and state solar tax credits, a benefit that can
        represent thousands of dollars in claimed value. In cases where systems completely failed, the AG alleges CAM
        Solar still held consumers liable under their financing agreements.
      </p>

      <h2>Panels Detached, Damaged Neighboring Property</h2>

      <p>
        One complaint documented in the AG investigation describes a particularly serious installation failure: solar
        panels detached from a consumer's roof less than one year after installation. The collapse caused damage not
        only to the homeowner's property but also to a neighboring property. The OAG cited the incident as evidence
        of the company's disregard for proper installation standards.
      </p>

      <p>
        "This solar panel company lied to and deceived Texans with its fraudulent and deceptive sales tactics,"
        Attorney General Paxton said in the agency's announcement. The OAG stated it will continue investigating
        additional solar companies operating in Texas.
      </p>

      <h2>What the AG Is Asking the Court to Do</h2>

      <p>
        The lawsuit seeks a permanent injunction to shut down CAM Solar's unlawful sales practices, full restitution
        for every affected Texas consumer, and civil penalties for each individual DTPA violation. The OAG's{' '}
        <a
          href="https://www.texasattorneygeneral.gov/sites/default/files/images/press/C%20Petition.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          full petition
        </a>{' '}
        has been filed in court and is publicly available.
      </p>

      <h2>How Texans Can File a Complaint</h2>

      <p>
        Texas consumers who purchased solar panels from CAM Solar and experienced false savings promises, failed
        systems, hidden fees, or ignored service calls can file a complaint directly with the OAG Consumer Protection
        Division at{' '}
        <a
          href="https://www.texasattorneygeneral.gov/consumer-protection"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          texasattorneygeneral.gov/consumer-protection
        </a>{' '}
        or by calling 1-800-621-0508. Documenting your contract, financing agreement, and any correspondence with the
        company before filing will strengthen the complaint.
      </p>

      <p>
        This case is part of our ongoing coverage of{' '}
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 underline">
          Texas consumer fraud and public-interest investigations
        </Link>
        . If you have information about solar fraud or other deceptive contractors operating in Texas, you can{' '}
        <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
          reach our investigative desk here
        </Link>
        . Alfonso C. has also reported on{' '}
        <Link
          href="/blog/san-antonio-dje-texas-ponzi-scheme-69-million"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          the $69.5M DJE Texas Ponzi scheme
        </Link>{' '}
        and{' '}
        <Link
          href="/blog/houston-zo-frost-jewelers-gold-laundering-elder-fraud"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Houston jeweler gold laundering charges
        </Link>
        .
      </p>
    </NewsArticle>
  );
}
