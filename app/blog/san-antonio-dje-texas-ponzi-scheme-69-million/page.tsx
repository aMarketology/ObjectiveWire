import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';
import Link from 'next/link';

export const revalidate = 86400;

const SLUG = '/blog/san-antonio-dje-texas-ponzi-scheme-69-million';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'San Antonio CEO Pleads Guilty | $69.5M Real Estate Ponzi',
  description:
    'Devin Ward Elder, 47, CEO of DJE Texas Management Group, pleaded guilty to federal wire fraud after defrauding 345 investors out of $69.5 million across 17 real estate offerings between 2023 and 2025. He faces up to 20 years in federal prison.',
  keywords: [
    'Devin Ward Elder guilty plea',
    'DJE Texas Management Group Ponzi scheme',
    'San Antonio real estate fraud 2026',
    'DJE Texas fraud 69 million',
    'San Antonio CEO federal wire fraud',
    'Texas real estate Ponzi scheme 2025',
    'Devin Elder federal charges Texas',
    'DJE Texas Management Group fraud',
    'San Antonio federal fraud conviction',
    'Texas investor fraud 2026',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'San Antonio CEO Pleads Guilty | $69.5M Real Estate Ponzi',
    description:
      'Devin Ward Elder defrauded 345 investors across 17 offerings and used new investor funds to pay $8.8 million in false interest to early backers before the scheme collapsed in March 2025.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'Objective Wire',
    authors: ['Alfonso C.'],
    publishedTime: '2026-06-01T12:00:00Z',
    modifiedTime: '2026-06-01T12:00:00Z',
    section: 'Investigations',
    tags: ['San Antonio', 'Ponzi Scheme', 'Federal Fraud', 'Real Estate Fraud'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'San Antonio CEO Pleads Guilty to $69.5M Real Estate Ponzi Scheme',
    description: '345 investors defrauded across 17 real estate offerings. Devin Ward Elder faces up to 20 years in federal prison.',
  },
};

export default function DJETexasPonziSchemePage() {
  return (
    <NewsArticle
      title="San Antonio CEO Pleads Guilty | $69.5 Million Real Estate Ponzi Scheme"
      subtitle="Devin Ward Elder of DJE Texas Management Group defrauded 345 investors across 17 real estate offerings, using new investor funds to pay false returns before the $69.5 million scheme collapsed in March 2025."
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
        { name: 'San Antonio CEO Pleads Guilty to $69.5 Million Real Estate Ponzi Scheme', item: SLUG },
      ]}
      keyTakeaways={[
        'Devin Ward Elder, 47, founder and CEO of DJE Texas Management Group LLC in San Antonio, pleaded guilty to federal wire fraud on charges stemming from a $69.5 million real estate investment scheme.',
        'Elder defrauded approximately 345 investors across 17 distinct real estate offerings between January 2023 and March 2025, promising low-risk, high-return investments.',
        'Operating as a classic Ponzi scheme, Elder used incoming investor funds to pay approximately $8.8 million in false interest returns to early investors before the operation collapsed.',
        'Elder faces up to 20 years in federal prison on the wire fraud conviction.',
      ]}
      keyTakeawaysColor="orange"
      faqItems={[
        {
          question: 'What is the DJE Texas Management Group Ponzi scheme?',
          answer: 'DJE Texas Management Group LLC was a San Antonio real estate investment firm whose founder and CEO, Devin Ward Elder, pleaded guilty to federal wire fraud. Between January 2023 and March 2025, Elder defrauded 345 investors of $69.5 million across 17 real estate offerings by running a Ponzi scheme, using new investor funds to pay false returns to earlier investors.',
        },
        {
          question: 'Who is Devin Ward Elder?',
          answer: 'Devin Ward Elder, 47, is the founder and CEO of DJE Texas Management Group LLC, a San Antonio-based real estate investment company. He has pleaded guilty to federal wire fraud in connection with a $69.5 million Ponzi scheme and now faces up to 20 years in federal prison.',
        },
        {
          question: 'How many investors were defrauded by DJE Texas Management Group?',
          answer: 'According to federal court documents, approximately 345 investors were defrauded across 17 distinct real estate investment offerings. Elder raised funds from investors by promising low-risk, high-return real estate investments that did not perform as represented.',
        },
        {
          question: 'What sentence does Devin Ward Elder face?',
          answer: 'Devin Ward Elder faces up to 20 years in federal prison on the wire fraud charge to which he pleaded guilty. Sentencing has not yet been scheduled as of the date of this report.',
        },
        {
          question: 'When did the DJE Texas Ponzi scheme collapse?',
          answer: 'The scheme ran from January 2023 through March 2025, when it collapsed. During that period, Elder paid approximately $8.8 million in false interest returns to early investors, funded by capital from newer investors.',
        },
      ]}
      tags={['San Antonio', 'Ponzi Scheme', 'Federal Fraud', 'Real Estate Fraud', 'Texas Courts']}
      slug="san-antonio-dje-texas-ponzi-scheme-69-million"
      url={SLUG}
    >
      <p>
        Devin Ward Elder, 47, founder and CEO of DJE Texas Management Group LLC, pleaded guilty
        to federal wire fraud after defrauding approximately 345 investors of $69.5 million across
        17 real estate investment offerings between January 2023 and March 2025, according to
        federal court documents reviewed by the{' '}
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 underline">
          Objective Wire investigative team
        </Link>.
      </p>

      <p>
        Elder, a San Antonio-based executive, marketed DJE Texas Management Group as a vehicle
        for low-risk, high-return real estate investments. Prosecutors allege he operated the
        company as a classic Ponzi structure from its inception: rather than deploying investor
        capital into legitimate real estate deals, Elder used incoming funds from new investors
        to pay approximately $8.8 million in fabricated interest returns to earlier backers,
        sustaining the appearance of a functioning business until the scheme collapsed.
      </p>

      <h2>DJE Texas Management Group | How 17 Offerings Became a $69.5 Million Fraud</h2>

      <p>
        Federal charging documents describe a systematic operation. Elder created 17 separate
        real estate investment offerings, each structured to attract new pools of investors. The
        distinct offerings gave the appearance of a diversified, active real estate portfolio.
        According to prosecutors, none of the promised underlying real estate investments
        generated returns sufficient to cover the payouts Elder made, and the gap between
        what was promised and what the business actually earned was funded entirely by new
        investor capital.
      </p>

      <p>
        The scheme ran for more than two years before collapsing in March 2025. The 345 investors
        named in the federal case represent individuals who committed capital on the basis of
        Elder&rsquo;s representations about the safety and return profile of the offerings. The
        $8.8 million paid out in false interest represented a fraction of the total funds raised.
        The remainder was lost or remains unaccounted for in the criminal proceedings.
      </p>

      <h2>Federal Wire Fraud | Charges and Sentencing Exposure</h2>

      <p>
        Elder was charged with and pleaded guilty to federal wire fraud. The charge carries a
        maximum sentence of 20 years in federal prison. A sentencing date had not been set as
        of the date of this report. Wire fraud in the context of investment schemes requires
        prosecutors to establish that Elder used electronic communications, including email,
        wire transfers, or digital platforms, in furtherance of the scheme, a standard routinely
        met in cases involving investor solicitations and fund transfers.
      </p>

      <p>
        The case was prosecuted federally, placing the investigation under DOJ jurisdiction
        rather than Texas state courts. Federal Ponzi scheme prosecutions in Texas have increased
        in recent years as the Western and Southern Districts have prioritized financial fraud
        targeting retail investors. For additional context on Texas financial fraud enforcement,
        see the{' '}
        <Link href="/local/greater-texas" className="text-blue-600 hover:text-blue-800 underline">
          Greater Texas investigations hub
        </Link>.
      </p>

      <h2>DJE Texas | What Investors Should Know About Recovery</h2>

      <p>
        In Ponzi scheme prosecutions, investor recovery depends on the extent of remaining
        assets, whether the court appoints a receiver, and the priority structure established
        in any restitution order at sentencing. Investors who believe they are victims of the
        DJE Texas scheme should contact the U.S. Attorney&rsquo;s Office handling the case
        to register as a victim and receive notifications about restitution proceedings.
      </p>

      <p>
        For related coverage of public corruption and fraud prosecutions across Texas, see the{' '}
        <Link href="/blog/houston-zo-frost-jewelers-gold-laundering-elder-fraud" className="text-blue-600 hover:text-blue-800 underline">
          Houston Zo Frost Jewelers gold laundering indictment
        </Link>{' '}
        and the{' '}
        <Link href="/blog/bexar-county-towing-bribery-conviction" className="text-blue-600 hover:text-blue-800 underline">
          Bexar County towing contract bribery conviction
        </Link>.
      </p>

      <p>
        This investigation was reported by{' '}
        <Link href="/authors/alfansa" className="text-blue-600 hover:text-blue-800 underline">
          Alfonso C.
        </Link>
        , lead investigator at Objective Wire, using federal court filings and DOJ records.
        Tips related to Texas investment fraud can be submitted through the{' '}
        <Link href="/service/tip-the-newsroom" className="text-blue-600 hover:text-blue-800 underline">
          Objective Wire confidential tip line
        </Link>.
      </p>
    </NewsArticle>
  );
}
