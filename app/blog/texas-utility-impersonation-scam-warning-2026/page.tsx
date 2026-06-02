import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = '/blog/texas-utility-impersonation-scam-warning-2026';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Texas Utility Scam Warning 2026 | Fake Disconnection Calls',
  description:
    'Scammers impersonating Oncor, TXU Energy, and other Texas utilities are threatening immediate disconnection to extract emergency payments. Here is how to identify and report them.',
  keywords: [
    'Texas utility scam 2026',
    'utility impersonation scam Texas',
    'Oncor impersonation scam',
    'TXU Energy scam calls',
    'fake disconnection threat Texas',
    'Texas electricity scam',
    'utility spoofed phone Texas',
    'PUCT consumer protection Texas',
    'Texas AG utility fraud',
    'how to report utility scam Texas',
    'electric company impostor Texas',
    'Texas power company scam warning',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Texas Utility Impersonation Scams Rising in 2026',
    description:
      'Fraudsters are calling Texans with spoofed utility phone numbers and threatening same-day disconnection. Know the warning signs and where to report.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfonso C.'],
    publishedTime: '2026-06-01T12:00:00Z',
    modifiedTime: '2026-06-01T12:00:00Z',
    section: 'Investigations',
    tags: ['Utility Scam', 'Texas Fraud', 'Consumer Protection', 'PUCT'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texas Utility Impersonation Scams | Fake Disconnection Calls 2026',
    description: 'Spoofed numbers, fake disconnection threats, urgent payment demands. Here is what Texas utilities will never do.',
  },
};

export default function TexasUtilityScamPage() {
  return (
    <NewsArticle
      title="Texas Utility Impersonation Scams | How Fraudsters Fake Disconnection Threats to Steal Payments"
      subtitle="Scammers are spoofing Oncor, TXU Energy, and CenterPoint numbers to pressure Texans into immediate wire transfers or prepaid card payments under threat of same-day service cutoff"
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
        { name: 'Texas Utility Scam Warning', item: SLUG },
      ]}
      keyTakeaways={[
        'Texas utility impersonation scams involve fraudsters calling residents with spoofed caller ID numbers matching real utility companies, then threatening immediate electricity disconnection to extract payment.',
        'Common payment demands include prepaid debit cards, wire transfers, Zelle, or cryptocurrency, none of which legitimate Texas utilities use for past-due collections.',
        'Real Texas utilities, including Oncor and TXU Energy, will never demand immediate payment over the phone without prior written notice or call about a past-due account using a threatening same-day cutoff deadline.',
        'The Public Utility Commission of Texas (PUCT) Consumer Protection Division can be reached at 1-888-782-8477 to report utility impostor calls.',
        'The Texas AG\'s Consumer Protection Division also accepts utility fraud complaints at texasattorneygeneral.gov/consumer-protection or 1-800-621-0508.',
      ]}
      keyTakeawaysColor="orange"
      faqItems={[
        {
          question: 'What is a Texas utility impersonation scam?',
          answer:
            'A Texas utility impersonation scam is a phone fraud in which the caller pretends to be a representative of a real electric company, such as Oncor or TXU Energy, and threatens immediate service disconnection unless the resident pays a past-due balance right away using a wire transfer, prepaid card, or similar untraceable method.',
        },
        {
          question: 'How do I know if a utility disconnection call is real?',
          answer:
            'Real Texas utilities always send written notice before disconnecting service and never demand immediate payment over the phone using prepaid cards, wire transfers, Zelle, or cryptocurrency. If you receive a threatening call, hang up and call your utility provider directly using the number on your bill or their official website.',
        },
        {
          question: 'What payment methods do scammers demand?',
          answer:
            'Utility scammers most commonly demand prepaid debit cards such as Green Dot or Vanilla Visa, wire transfers, Zelle, Venmo, or cryptocurrency. No Texas utility accepts these methods for residential bill payments.',
        },
        {
          question: 'Where do I report a utility scam in Texas?',
          answer:
            'Report utility scam calls to the PUCT Consumer Protection Division at 1-888-782-8477 or consumer@puc.texas.gov, and to the Texas AG\'s Consumer Protection Division at 1-800-621-0508 or texasattorneygeneral.gov/consumer-protection. You can also report to the FTC at reportfraud.ftc.gov.',
        },
        {
          question: 'Can spoofed calls look like a real utility number?',
          answer:
            'Yes. Caller ID spoofing allows fraudsters to display any phone number, including the exact number listed on your utility bill. A caller ID showing your utility\'s official number does not confirm the call is legitimate.',
        },
      ]}
      tags={['Utility Scam', 'Texas Fraud', 'Consumer Protection', 'PUCT', 'Oncor', 'TXU Energy']}
      slug="texas-utility-impersonation-scam-warning-2026"
      url={PAGE_URL}
    >
      <p>
        Texas utility impersonation scams are a recurring and well-documented fraud in which callers pose as
        representatives of Oncor, TXU Energy, CenterPoint Energy, or other providers and threaten immediate
        electricity disconnection unless the resident pays a past-due balance within minutes using an untraceable
        payment method.
      </p>

      <p>
        The calls often use spoofed caller ID numbers that exactly match the real phone number printed on your
        utility bill, making them difficult to identify in the moment. The{' '}
        <a
          href="https://www.puc.texas.gov/consumer-help/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Public Utility Commission of Texas (PUCT)
        </a>{' '}
        and the Texas AG's office both maintain active consumer protection resources specifically addressing these
        schemes.
      </p>

      <h2>How the Scam Works</h2>

      <p>
        The standard script follows a consistent pattern: a caller identifies as your utility company, tells you
        your account is delinquent, and states that a technician is scheduled to cut your service within one to
        two hours unless you pay immediately. The caller then directs you to purchase a prepaid debit card, wire
        money, send payment via Zelle or Venmo, or transfer cryptocurrency to a specific address.
      </p>

      <p>
        Scammers frequently escalate urgency by claiming the cutoff is already "in the system" and cannot be
        reversed once the technician dispatches. They may ask you to stay on the line while you drive to a
        convenience store or ATM, discouraging you from calling your utility directly to verify the account status.
      </p>

      <h2>What Real Texas Utilities Will Never Do</h2>

      <p>
        Texas utilities operating under PUCT regulation are required to follow specific disconnection procedures.
        Before any residential disconnection, your provider must send written notice. Real utility companies do not:
      </p>

      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Demand immediate same-day payment over the phone to prevent disconnection</li>
        <li>Accept prepaid debit cards, wire transfers, Zelle, Venmo, or cryptocurrency</li>
        <li>Threaten disconnection within one or two hours of a phone call</li>
        <li>Ask you to remain on the phone while traveling to make a payment</li>
        <li>Refuse to give you time to call back using the number on your bill</li>
      </ul>

      <p>
        If you receive a call matching any of these characteristics, hang up. Do not provide any account
        information, personal identification, or payment details.
      </p>

      <h2>Caller ID Spoofing Makes Verification Harder</h2>

      <p>
        Caller ID spoofing technology allows anyone to display any phone number on a recipient's caller ID screen,
        including the exact customer service number printed on your Oncor, TXU, or CenterPoint bill. The display
        of a familiar number is not proof that the call originates from your utility. The only reliable
        verification method is to end the call and dial your utility provider using the number on your physical
        bill or the company's official website directly.
      </p>

      <h2>How to Report a Utility Scam in Texas</h2>

      <p>
        If you receive a utility impersonation call, report it to three places. First, the PUCT Consumer Protection
        Division at{' '}
        <a
          href="tel:18887828477"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          1-888-782-8477
        </a>{' '}
        or{' '}
        <a
          href="mailto:consumer@puc.texas.gov"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          consumer@puc.texas.gov
        </a>
        . Second, the Texas AG's Consumer Protection Division at 1-800-621-0508 or at{' '}
        <a
          href="https://www.texasattorneygeneral.gov/consumer-protection"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          texasattorneygeneral.gov/consumer-protection
        </a>
        . Third, the FTC at{' '}
        <a
          href="https://reportfraud.ftc.gov"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          reportfraud.ftc.gov
        </a>
        . Reports from multiple consumers help investigators identify and prosecute the organizations behind these
        call campaigns.
      </p>

      <p>
        For more Texas consumer fraud coverage, see our full{' '}
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 underline">
          Texas investigations archive
        </Link>
        . If you have information about a specific utility scam operation targeting your neighborhood or
        community, you can{' '}
        <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
          reach our investigative desk here
        </Link>
        . Alfonso C. has also reported on{' '}
        <Link
          href="/blog/texas-ag-cam-solar-lawsuit-deceptive-practices"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          the CAM Solar consumer fraud lawsuit
        </Link>{' '}
        and{' '}
        <Link
          href="/blog/san-antonio-dje-texas-ponzi-scheme-69-million"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          the $69.5M DJE Texas Ponzi scheme
        </Link>
        .
      </p>
    </NewsArticle>
  );
}
