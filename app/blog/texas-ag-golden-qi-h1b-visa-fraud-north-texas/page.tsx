import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = '/blog/texas-ag-golden-qi-h1b-visa-fraud-north-texas';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Golden Qi Holdings H-1B Fraud | Texas AG Lawsuit North Texas',
  description:
    'Texas AG Ken Paxton sued Golden Qi Holdings and owner Yuan Yao on May 12, 2026, for operating fake childcare businesses to fraudulently obtain H-1B visas in North Texas.',
  keywords: [
    'Golden Qi Holdings lawsuit',
    'H-1B visa fraud Texas',
    'Yuan Yao Texas',
    'North Texas H-1B fraud',
    'fake childcare businesses Texas',
    'Allen Infant Care Center fraud',
    'DFW ABA Center fake',
    'Texas AG H-1B investigation',
    'Ken Paxton H-1B lawsuit',
    'H-1B ghost office Texas',
    'Texas visa fraud 2026',
    'North Texas immigration fraud',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Texas AG Sues North Texas Company for Fake Childcare H-1B Scheme',
    description:
      'Golden Qi Holdings and owner Yuan Yao allegedly operated empty buildings advertised as childcare centers to fraudulently sponsor H-1B workers in the Dallas area.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfonso C.'],
    publishedTime: '2026-06-01T11:00:00Z',
    modifiedTime: '2026-06-01T11:00:00Z',
    section: 'Investigations',
    tags: ['Golden Qi Holdings', 'H-1B Fraud', 'Texas AG', 'North Texas'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texas AG Sues North Texas Company for H-1B Ghost Office Scheme',
    description: 'Empty building, overgrown playground, no children. Golden Qi Holdings sued May 12, 2026.',
  },
};

export default function GoldenQiH1BPage() {
  return (
    <NewsArticle
      title="Texas AG Sues North Texas Company for Using Fake Childcare Centers to Obtain H-1B Visas"
      subtitle="Golden Qi Holdings and owner Yuan Yao operated websites advertising nonexistent childcare services to fraudulently sponsor foreign workers through the H-1B program"
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
        { name: 'Golden Qi H-1B Fraud', item: SLUG },
      ]}
      keyTakeaways={[
        'Golden Qi Holdings, LLC is a North Texas company sued by the Texas AG on May 12, 2026, for running fake childcare businesses to fraudulently obtain H-1B work visas.',
        'Owner Yuan Yao, a citizen of the People\'s Republic of China, owns multiple Texas entities that list the same vacant address as their place of business.',
        'Alleged sham businesses include Allen Infant Care Center in Allen, Texas, and DFW ABA Center, both of which advertised services from empty or unlicensed locations.',
        'A reporter visiting the Allen Infant Care Center address found an empty building and a playground overgrown with vegetation, with no childcare activity present.',
        'The lawsuit alleges violations of the Texas Deceptive Trade Practices Act and Texas Human Resources Code, seeking civil penalties of up to $10,000 per DTPA violation.',
      ]}
      keyTakeawaysColor="orange"
      faqItems={[
        {
          question: 'What is the Golden Qi Holdings H-1B fraud case?',
          answer:
            'The Golden Qi Holdings case is a Texas state civil lawsuit filed May 12, 2026, against Golden Qi Holdings, LLC and its owner Yuan Yao for operating fictitious childcare businesses to sponsor workers through the federal H-1B visa program, in violation of the Texas Deceptive Trade Practices Act.',
        },
        {
          question: 'Who is Yuan Yao?',
          answer:
            'Yuan Yao is a Chinese national who owns and manages several Texas business entities, including Golden Qi Holdings, LLC. The lawsuit alleges his businesses listed fraudulent addresses, received state and federal childcare subsidies, and lacked proper licensing to operate the childcare facilities they advertised.',
        },
        {
          question: 'What is an H-1B ghost office?',
          answer:
            'An H-1B ghost office is a business that exists only on paper or at an empty address. Fraudulent sponsors use these fake companies to file H-1B petitions for foreign workers, who may then work elsewhere or not at all, circumventing lawful hiring processes.',
        },
        {
          question: 'What businesses did Golden Qi Holdings operate?',
          answer:
            'The alleged sham businesses include Allen Infant Care Center in Allen, Texas, and DFW ABA Center. Multiple entities controlled by Yao shared the same vacant address associated with Allen Infant Care Center.',
        },
        {
          question: 'What penalties does Golden Qi Holdings face?',
          answer:
            'The Texas AG seeks civil penalties of up to $10,000 for each individual violation of the Texas Deceptive Trade Practices Act, plus an order to halt the illegal activity.',
        },
      ]}
      tags={['Golden Qi Holdings', 'H-1B Fraud', 'Texas AG', 'North Texas', 'Yuan Yao', 'Visa Fraud']}
      slug="texas-ag-golden-qi-h1b-visa-fraud-north-texas"
      url={PAGE_URL}
    >
      <p>
        Golden Qi Holdings, LLC is a North Texas company now facing a state civil lawsuit after Texas Attorney General
        Ken Paxton filed suit on May 12, 2026, alleging the company and its owner operated fake childcare businesses
        to fraudulently obtain H-1B work visas for foreign employees.
      </p>

      <p>
        The case is part of the OAG's{' '}
        <a
          href="https://www.texasattorneygeneral.gov/news/releases/attorney-general-ken-paxton-takes-legal-action-part-investigation-nearly-30-north-texas-businesses"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          wide-sweeping investigation into nearly 30 North Texas businesses
        </a>{' '}
        suspected of abusing the H-1B visa program. Golden Qi Holdings is the first company in that investigation
        to face a formal lawsuit. The defendant in the case is also{' '}
        <a
          href="https://www.texasattorneygeneral.gov/news/releases/attorney-general-ken-paxton-sues-north-texas-company-owned-chinese-national-advertising-fake"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Yuan Yao
        </a>
        , a citizen of the People's Republic of China who owns and manages the company.
      </p>

      <h2>Empty Buildings, Overgrown Playgrounds</h2>

      <p>
        At the center of the allegations are two businesses: Allen Infant Care Center, listed at an Allen, Texas
        address, and DFW ABA Center. Both companies maintain websites advertising childcare and behavioral therapy
        services. According to the OAG, those services do not exist.
      </p>

      <p>
        Blaze Media reporter Sara Gonzales visited the address listed for Allen Infant Care Center and found no
        childcare operation. Instead, she found an empty building and a playground overgrown with vegetation. An
        individual familiar with the property told Gonzales the facility had not operated for an extended period
        and alleged that Yao "sells visas." The same individual claimed Yao's father works for the Chinese government
        and sends him significant amounts of money.
      </p>

      <h2>Subsidies Collected, Licenses Missing</h2>

      <p>
        The lawsuit alleges Yao received both federal and state childcare and business subsidies for his childcare
        entities but used "none of it" for actual childcare services. He also allegedly lacks proper licensure to
        operate any of the childcare facilities he advertises. Multiple businesses controlled by Yao list the same
        vacant Allen, Texas address as their place of operation.
      </p>

      <p>
        By advertising legitimate-looking childcare businesses, the scheme was designed to use those entities as
        sponsors for H-1B visa petitions, allowing the filing of applications for foreign workers under the pretense
        of employing them at childcare facilities. H-1B sponsorship requires a legitimate employer-employee
        relationship at a real worksite.
      </p>

      <h2>Legal Basis and Penalties Sought</h2>

      <p>
        Attorney General Paxton is bringing the lawsuit under both the Texas Deceptive Trade Practices Act and the
        Texas Human Resources Code. The suit seeks to halt the defendant's ongoing illegal activity and to recover
        up to $10,000 for each individual DTPA violation.
      </p>

      <p>
        "Let this be a warning to anyone considering trying to scam the H-1B visa program," Paxton said. "I will
        continue fighting to ensure that the H-1B program serves the interests of Americans, not Chinese nationals,
        and that those who abuse the program are held accountable to the fullest extent of the law."
      </p>

      <h2>What Comes Next</h2>

      <p>
        The OAG has indicated the Golden Qi Holdings lawsuit is not the end of the investigation. With nearly 30
        North Texas businesses under scrutiny for similar suspected fraud, additional lawsuits are possible. The
        full{' '}
        <a
          href="https://www.texasattorneygeneral.gov/sites/default/files/images/press/Petition_21.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          petition in the Golden Qi case
        </a>{' '}
        is publicly available on the OAG's website.
      </p>

      <p>
        This story is part of our ongoing coverage of{' '}
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 underline">
          Texas fraud and public-interest investigations
        </Link>
        . If you have information about H-1B abuse, fake businesses, or visa fraud operating in North Texas, you can{' '}
        <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
          contact our investigative desk securely here
        </Link>
        . Alfonso C. has also reported on the{' '}
        <Link
          href="/blog/bexar-county-towing-bribery-conviction"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Bexar County towing bribery conviction
        </Link>{' '}
        and the{' '}
        <Link
          href="/blog/texas-ag-cam-solar-lawsuit-deceptive-practices"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          CAM Solar consumer fraud lawsuit
        </Link>
        .
      </p>
    </NewsArticle>
  );
}
