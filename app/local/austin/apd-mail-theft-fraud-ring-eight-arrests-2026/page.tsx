import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/local/austin/apd-mail-theft-fraud-ring-eight-arrests-2026';
const ARTICLE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = `https://www.objectivewire.org/thumbnails/local-austin-apd-mail-theft-fraud-ring-eight-arrests-2026.jpg`;

export const metadata: Metadata = {
  title: 'Austin Mail Theft Fraud Ring | Eight Arrested in APD Raids',
  description:
    'The Austin Police Department has arrested eight individuals connected to a massive organized criminal enterprise responsible for mail theft, identity fraud, drug trafficking, and illegal firearms possession. Investigators recovered 17 counterfeit USPS Arrow Keys and 700-plus pieces of stolen mail.',
  keywords: [
    'Austin police mail theft fraud ring arrests',
    'APD North Metro Tactical Unit',
    'Arrow Keys mail theft',
    'Austin organized criminal enterprise',
    'Matthew Smart arrest',
    'July 2026 APD raid',
    'Austin mail theft arrests 2026',
    'counterfeit USPS keys Austin',
    'APD identity fraud ring',
    'Austin stolen mail investigation',
    'Matthew Herrington arrest Austin',
    'Jennifer Craig arrest Austin',
    'Cedar Park police arrest 2026',
    'United States Postal Inspection Service Austin',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Eight Arrested in Massive Austin Mail Theft and Identity Fraud Ring',
    description:
      'APD has dismantled an organized criminal enterprise involving counterfeit USPS Arrow Keys, 700-plus pieces of stolen mail, 10,000 checks, narcotics, and nine firearms. Eight suspects are in custody.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-07-29T16:00:00Z',
    modifiedTime: '2026-07-29T16:00:00Z',
    section: 'News',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Austin Police Department mail theft fraud ring investigation' }],
    tags: ['Austin Police', 'Mail Theft', 'Identity Fraud', 'USPS', 'APD', 'Arrests'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Counterfeit USPS Keys and Stolen Identities | APD Dismantles Major Criminal Enterprise',
    description: 'Eight arrested. 17 counterfeit Arrow Keys. 700-plus stolen mail items. 10,000 checks. A jewelry store fraud call cracked the case.',
    images: [OG_IMAGE],
  },
};

export default function APDMailTheftRingPage() {
  return (
    <>
      <NewsArticleSchema
        title="Austin Mail Theft Fraud Ring | Eight Arrested in APD Raids"
        description="The Austin Police Department has arrested eight individuals connected to a massive organized criminal enterprise responsible for mail theft, identity fraud, and drug trafficking."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.org/authors/jack-brennan"
        publishedTime="2026-07-29T16:00:00Z"
        modifiedTime="2026-07-29T16:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        section="News"
        keywords={[
          'Austin police mail theft fraud ring arrests',
          'APD North Metro Tactical Unit',
          'Arrow Keys mail theft',
        ]}
      />

      <NewsArticle
        title="Counterfeit USPS Keys and Stolen Identities | APD Dismantles Major Criminal Enterprise"
        subtitle="A routine call about a fraudulent purchase at an Austin jewelry store has unraveled a massive, sophisticated criminal network. The Austin Police Department announced eight arrests following a months-long investigation into an organized criminal enterprise responsible for widespread mail theft, identity fraud, narcotics trafficking, and illegal firearms possession."
        category="News"
        categoryColor="orange"
        topicTag="investigations"
        publishDate="July 29, 2026"
        publishedTime="2026-07-29T16:00:00Z"
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
          { name: 'Austin', item: '/local/austin' },
          { name: 'APD Mail Theft Ring', item: SLUG },
        ]}
        tags={['Austin Police', 'Mail Theft', 'Identity Fraud', 'USPS', 'APD', 'Arrests']}
        keyTakeaways={[
          'The Austin Police Department arrested eight individuals following a months-long investigation into an organized criminal enterprise involving mail theft, identity fraud, narcotics trafficking, and illegal firearms possession.',
          'The investigation began on May 15, 2026, when two suspects attempted to use a stolen bank card at an Austin jewelry store, triggering a probe that eventually partnered APD with the United States Postal Inspection Service.',
          'Investigators recovered 17 counterfeit USPS "Arrow Keys," more than 700 pieces of stolen mail from 250 addresses, roughly 10,000 business and personal checks, 115 stolen bank cards, and nine firearms.',
          'The first arrest occurred on May 25 when officers stopped Matthew Smart during a traffic stop after he attempted to use a stolen bank card at an ATM. Jennifer Craig was also arrested on a drug charge.',
          'The final arrest took place on July 21 when Cedar Park police arrested Matthew Herrington following a vehicle and foot pursuit triggered by an automatic license plate reader flag.',
        ]}
        keyTakeawaysColor="orange"
        faqItems={[
          {
            question: 'What was the criminal enterprise doing?',
            answer:
              'The group allegedly manufactured counterfeit USPS "Arrow Keys" to access secure cluster mailboxes, systematically stealing mail, checks, and personal identifying information across Central Texas. They also allegedly used stolen identities to lease apartments and storage units.',
          },
          {
            question: 'What are USPS Arrow Keys?',
            answer:
              'Arrow Keys are highly restricted master keys used by legitimate postal carriers to access secure cluster mailboxes. The suspects allegedly manufactured counterfeit versions of these keys to bypass neighborhood security measures and steal mail.',
          },
          {
            question: 'How did the investigation start?',
            answer:
              'The investigation began on May 15, 2026, when two suspects attempted to use a stolen bank card at an Austin jewelry store. That single incident triggered a months-long probe led by APD\'s North Metro Tactical Unit.',
          },
          {
            question: 'How much evidence did police recover?',
            answer:
              'APD recovered 17 counterfeit Arrow Keys, more than 700 pieces of stolen mail from 250 addresses, roughly 10,000 business and personal checks, 115 stolen bank cards, 50 stolen IDs, roughly 1.4 pounds of suspected methamphetamine and fentanyl, and nine firearms.',
          },
          {
            question: 'Who was arrested?',
            answer:
              'Eight individuals were arrested, including Matthew Smart on a credit card abuse warrant, Jennifer Craig on a drug charge, and Matthew Herrington following a vehicle and foot pursuit in Cedar Park on July 21. The remaining five suspects were arrested during warrants executed throughout June and July.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Austin"
        moreFromHubHref="/local/austin"
      >
        <p>
          A routine call about a fraudulent purchase at an Austin jewelry store has unraveled a massive, sophisticated criminal network. The Austin Police Department announced this week the arrest of eight individuals following a months-long investigation into an organized criminal enterprise allegedly responsible for widespread mail theft, identity fraud, narcotics trafficking, and illegal firearms possession across Central Texas.
        </p>

        <p>
          The investigation, spearheaded by APD's <strong>North Metro Tactical Unit</strong>, began on May 15, 2026, when two suspects attempted to use a stolen bank card at a local jewelry store. That single incident triggered a sprawling probe that eventually partnered local authorities with the United States Postal Inspection Service.
        </p>

        <h2>The Operation | Counterfeit Keys and Stolen Identities</h2>

        <p>
          According to investigators, the cornerstone of the group's operation was the large-scale manufacturing of counterfeit U.S. Postal Service <strong>"Arrow Keys."</strong> These highly restricted master keys are used by legitimate postal carriers to access secure cluster mailboxes. By manufacturing their own keys, the suspects were able to systematically bypass neighborhood security measures to steal mail, checks, and personal identifying information.
        </p>

        <p>
          The group also allegedly used stolen identities to lease multiple properties, including an apartment in North Austin and three separate storage units in Round Rock. Using fraudulent leases allowed the suspects to establish operational bases without linking their real identities to the addresses, complicating the investigative trail.
        </p>

        <p>
          The first major break in the case occurred on May 25, 2026. Officers conducted a traffic stop on a vehicle leaving the fraudulently leased North Austin apartment after spotting the driver attempting to use a stolen bank card at a nearby ATM. Police arrested the driver, <strong>Matthew Smart</strong>, on an outstanding warrant for Credit Card Abuse tied directly to the initial May 15 jewelry store incident. The passenger, <strong>Jennifer Craig</strong>, was also arrested on a drug charge after narcotics were discovered in the vehicle.
        </p>

        <p>
          A subsequent search of the apartment uncovered a massive trove of evidence related to mail theft and fraud, leading to further warrants and arrests throughout June and July.
        </p>

        <h2>A Massive Haul of Stolen Goods</h2>

        <p>
          As the investigation continued, authorities executed multiple search warrants across several apartments and storage units. The scale of the recovered evidence paints a disturbing picture of how lucrative the mail theft operation had become.
        </p>

        <p>Among the massive cache of seized items, APD investigators recovered:</p>

        <ul>
          <li><strong>17 counterfeit USPS Arrow Keys</strong> in various stages of production.</li>
          <li><strong>More than 700 pieces of stolen mail</strong> from approximately 250 different addresses.</li>
          <li><strong>Roughly 10,000 business and personal checks</strong> and 115 stolen bank cards.</li>
          <li><strong>Approximately 1.4 pounds of suspected methamphetamine and fentanyl.</strong></li>
          <li><strong>Nine firearms</strong>, 50 stolen identification cards, and roughly 1,000 pieces of personal identifying information.</li>
          <li>Manufacturing equipment including computers, printers, and a key-cutting machine.</li>
        </ul>

        <p>
          The group was also allegedly involved in traditional property crimes. Officers recovered burglary tools, stolen copper and brass, bicycles, and even a 1947 British Army motorcycle and a 1959 Cushman Eagle motor scooter, which have since been returned to a burglary victim.
        </p>

        <p>
          The final arrest connected to the initial ring took place on July 21. Cedar Park police arrested suspect <strong>Matthew Herrington</strong> following a vehicle and foot pursuit after an automatic license plate reader flagged his car. In total, the APD operation resulted in eight arrests on charges ranging from mail theft and identity theft to narcotics trafficking and unlawful possession of a firearm by a felon.
        </p>

        <p>
          For more Austin local coverage, see the{' '}
          <Link href="/local/austin" className="text-blue-600 hover:text-blue-800 underline">
            oWire Austin hub
          </Link>{' '}
          or read our reporting on{' '}
          <Link href="/local/greater-texas/georgetown-the-district-400m-fraud-verdict-2026" className="text-blue-600 hover:text-blue-800 underline">
            the $400M Georgetown fraud verdict
          </Link>.
        </p>
      </NewsArticle>
    </>
  );
}