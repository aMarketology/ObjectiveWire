import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';
import Link from 'next/link';

export const revalidate = 86400;

const SLUG = '/blog/houston-zo-frost-jewelers-gold-laundering-elder-fraud';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Houston Jewelers Indicted | Gold Laundering Elder Fraud',
  description:
    'Zo Frost and Co. co-owners Zohaib Muhammad and Samir Ali face federal indictment alleging the Houston storefront laundered gold bars sourced from a coordinated elder fraud network targeting victims across Texas and the United States.',
  keywords: [
    'Zo Frost Co Jewelers indictment',
    'Zohaib Muhammad federal charges',
    'Samir Ali Houston jeweler indicted',
    'Houston gold laundering elder fraud',
    'Houston federal indictment 2026',
    'elder fraud Texas gold scheme',
    'Houston jewelry store money laundering',
    'Texas elder fraud investigation',
    'federal fraud Houston Texas',
    'gold bar money laundering Texas',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Houston Jewelers Indicted | Gold Laundering Elder Fraud',
    description:
      'Federal indictment alleges Zo Frost and Co. was used to launder gold sourced from elder fraud victims coerced into converting life savings into gold bars for international export.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'Objective Wire',
    authors: ['Alfonso C.'],
    publishedTime: '2026-06-01T12:00:00Z',
    modifiedTime: '2026-06-01T12:00:00Z',
    section: 'Investigations',
    tags: ['Houston', 'Federal Indictment', 'Elder Fraud', 'Money Laundering'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Houston Jewelers Indicted in Gold Laundering Elder Fraud Scheme',
    description: 'Zo Frost and Co. co-owners face federal charges alleging the storefront laundered gold stolen from elderly fraud victims across the U.S.',
  },
};

export default function ZoFrostJewelersIndictmentPage() {
  return (
    <NewsArticle
      title="Houston Jewelers Indicted | Gold Laundering Elder Fraud Scheme"
      subtitle="Federal prosecutors allege Zo Frost and Co. co-owners used their storefront to launder and export gold obtained from elderly fraud victims coerced into converting life savings into bullion."
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
        { name: 'Houston Jewelers Indicted in Elder Fraud Gold Laundering Scheme', item: SLUG },
      ]}
      keyTakeaways={[
        'Zohaib Muhammad and Samir Ali, co-owners of Zo Frost and Co. Jewelers in Houston, face federal indictment on charges alleging they laundered gold sourced from an organized elder fraud network.',
        'Fraud victims, described as elderly, were allegedly coerced into liquidating savings and converting the funds into gold bars and coins that were then funneled through the jewelry storefront.',
        'Prosecutors allege the gold was exported internationally to obscure its origins and place it beyond the reach of U.S. law enforcement.',
        'Muhammad and Ali are known in Houston as jewelers who have crafted custom pieces for celebrities, giving the storefront a public profile used to conduct the alleged scheme.',
      ]}
      keyTakeawaysColor="orange"
      faqItems={[
        {
          question: 'What is the Zo Frost and Co. Jewelers federal indictment?',
          answer: 'Zo Frost and Co. Jewelers is a Houston jewelry business whose co-owners, Zohaib Muhammad and Samir Ali, face a federal indictment alleging the storefront was used to launder gold stolen from elderly fraud victims. Prosecutors allege the gold was obtained from victims who were coerced into converting their life savings into bullion, then moved through the jewelry store for international export.',
        },
        {
          question: 'Who are Zohaib Muhammad and Samir Ali?',
          answer: 'Zohaib Muhammad and Samir Ali are the co-owners of Zo Frost and Co. Jewelers in Houston, Texas. The pair had a public profile as jewelers who crafted custom pieces for high-profile clients. Both now face federal charges alleging the business was used as a front to launder proceeds of elder fraud.',
        },
        {
          question: 'How did the alleged elder fraud scheme work?',
          answer: 'According to federal prosecutors, a coordinated fraud network targeted elderly individuals across Texas and the broader United States, coercing victims into converting their savings into gold bars and coins. That gold was then allegedly funneled through the Zo Frost storefront and exported internationally to conceal its criminal origins.',
        },
        {
          question: 'What charges do Muhammad and Ali face?',
          answer: 'Muhammad and Ali face federal indictment including allegations of money laundering connected to an elder fraud network. Specific charge counts and sentencing exposure are detailed in the indictment filed in federal court.',
        },
      ]}
      tags={['Houston', 'Federal Indictment', 'Elder Fraud', 'Money Laundering', 'Texas Courts']}
      slug="houston-zo-frost-jewelers-gold-laundering-elder-fraud"
      url={SLUG}
    >
      <p>
        The co-owners of Zo Frost and Co. Jewelers, a Houston storefront known for crafting custom
        pieces for celebrity clients, face a federal indictment alleging the business was used as
        a front to launder gold stolen from elderly fraud victims across Texas and the United States.
        Zohaib Muhammad and Samir Ali are named in the indictment filed in federal court, according
        to Department of Justice records reviewed by the{' '}
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 underline">
          Objective Wire investigative team
        </Link>.
      </p>

      <p>
        Prosecutors allege that a coordinated fraud network specifically targeted elderly individuals,
        coercing victims into liquidating life savings and converting the funds into gold bars and
        coins. The gold was then allegedly routed through the Zo Frost storefront, which provided
        the criminal network with a legitimate-appearing commercial channel to move the bullion
        across international borders and place it beyond U.S. law enforcement reach.
      </p>

      <h2>Zo Frost and Co. | How the Alleged Laundering Scheme Operated</h2>

      <p>
        According to the indictment, the Zo Frost storefront served a specific operational role in
        the fraud network: accepting gold sourced from fraud victims and facilitating its export.
        Elder fraud networks that rely on gold conversion have become a documented enforcement
        priority for the Department of Justice, which noted in 2024 that gold-based schemes have
        emerged as a preferred method for extracting and moving fraud proceeds because gold is
        difficult to trace once converted and exported.
      </p>

      <p>
        Victims in this type of scheme are typically approached by phone or online, told that their
        bank accounts or assets are under threat from fraud or law enforcement, and instructed to
        convert their savings to gold. A courier then collects the gold in person. Muhammad and Ali
        allegedly served as the downstream recipient and exporter in that chain, per the federal
        charging documents.
      </p>

      <h2>Muhammad and Ali | Houston Profile and Celebrity Clientele</h2>

      <p>
        Zo Frost and Co. had an established public profile in Houston. Muhammad and Ali built
        a reputation crafting custom jewelry for high-profile clients, a public-facing business
        profile that, according to prosecutors, served to mask the financial crimes alleged in
        the indictment. The indictment does not name any of the celebrity clients or suggest
        they had any knowledge of or involvement in the alleged scheme.
      </p>

      <h2>Federal Charges | What Happens Next</h2>

      <p>
        Muhammad and Ali face federal money laundering charges. Both are presumed innocent unless
        convicted. The case is being prosecuted in federal court. For related coverage of
        federal fraud prosecutions across Texas, see the{' '}
        <Link href="/local/houston" className="text-blue-600 hover:text-blue-800 underline">
          Houston investigations hub
        </Link>{' '}
        and the{' '}
        <Link href="/blog/bexar-county-towing-bribery-conviction" className="text-blue-600 hover:text-blue-800 underline">
          Bexar County towing bribery conviction
        </Link>.
      </p>

      <p>
        This investigation was reported by{' '}
        <Link href="/authors/alfansa" className="text-blue-600 hover:text-blue-800 underline">
          Alfonso C.
        </Link>
        , lead investigator at Objective Wire, using federal court filings and Department of
        Justice records. Tips related to this case or other Texas fraud investigations can be
        submitted through the{' '}
        <Link href="/service/tip-the-newsroom" className="text-blue-600 hover:text-blue-800 underline">
          Objective Wire confidential tip line
        </Link>.
      </p>
    </NewsArticle>
  );
}
