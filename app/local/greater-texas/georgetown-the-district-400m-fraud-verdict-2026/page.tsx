import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/local/greater-texas/georgetown-the-district-400m-fraud-verdict-2026';
const ARTICLE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = `https://www.objectivewire.org/thumbnails/local-greater-texas-georgetown-the-district-400m-fraud-verdict-2026.jpg`;

export const metadata: Metadata = {
  title: 'Georgetown The District Fraud | $400M Jury Verdict 2026',
  description:
    'A Williamson County jury has ordered the developers behind the failed 400-acre Georgetown project, "The District," to pay over $400 million in damages for fraud and breach of contract. The verdict includes $300 million in punitive damages.',
  keywords: [
    'The District Georgetown fraud 400M',
    'Gopala Krishnan Sakthivel Gounder fraud',
    'Nanban Ventures The District',
    'Williamson County jury $400M damages',
    'Georgetown real estate fraud 2026',
    'Justin Sayers Austin Business Journal',
    'The District Georgetown development',
    'Nanban Ventures SEC Ponzi scheme',
    'Williamson County civil fraud verdict',
    'Frisco entrepreneurs fraud judgment',
    'Texas real estate development fraud',
    'Energy Commissioning Inc Georgetown',
    'Gopala Krishnan fraud verdict',
    'Sakthivel Gounder civil judgment',
    'Georgetown 400 acre development failed',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Developers of Georgetown\'s "The District" Ordered to Pay Over $400M in Fraud Damages',
    description:
      'A Williamson County jury has ordered the developers behind the failed 400-acre luxury Georgetown project to pay over $400 million in damages, including $300 million in punitive damages, for fraud and breach of contract.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-07-29T14:00:00Z',
    modifiedTime: '2026-07-29T14:00:00Z',
    section: 'News',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Williamson County courthouse, Georgetown Texas The District fraud verdict' }],
    tags: ['Georgetown', 'The District', 'Fraud', 'Williamson County', 'Nanban Ventures', 'SEC'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frisco Entrepreneurs Hit with $400M Civil Judgment Over Failed Georgetown Development',
    description: 'A Williamson County jury found Gopala Krishnan and Sakthivel Gounder liable for fraud. $300M of the verdict is punitive damages.',
    images: [OG_IMAGE],
  },
};

export default function GeorgetownDistrictFraudVerdictPage() {
  return (
    <>
      <NewsArticleSchema
        title="Georgetown The District Fraud | $400M Jury Verdict 2026"
        description="A Williamson County jury has ordered the developers behind the failed 400-acre Georgetown project to pay over $400 million in damages for fraud and breach of contract."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.org/authors/jack-brennan"
        publishedTime="2026-07-29T14:00:00Z"
        modifiedTime="2026-07-29T14:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        section="News"
        keywords={[
          'The District Georgetown fraud 400M',
          'Gopala Krishnan Sakthivel Gounder fraud',
          'Nanban Ventures The District',
        ]}
      />

      <NewsArticle
        title="Massive Fraud Verdict | Developers of Georgetown Project Ordered to Pay Over $400M in Damages"
        subtitle="A Williamson County jury has delivered a staggering civil judgment against two Frisco-based entrepreneurs, ordering them to pay more than $400 million in damages over a massive, failed luxury development near Georgetown. The verdict includes $300 million in punitive damages."
        category="News"
        categoryColor="orange"
        topicTag="investigations"
        publishDate="July 29, 2026"
        publishedTime="2026-07-29T14:00:00Z"
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
          { name: 'Greater Texas', item: '/local/greater-texas' },
          { name: 'Georgetown Fraud Verdict', item: SLUG },
        ]}
        tags={['Georgetown', 'The District', 'Fraud', 'Williamson County', 'Nanban Ventures', 'SEC']}
        keyTakeaways={[
          'A Williamson County jury has ordered Gopala Krishnan and Sakthivel Gounder to pay over $400 million in damages for fraud and breach of contract related to the failed "The District" luxury development in Georgetown.',
          'The verdict includes $300 million in punitive damages specifically intended to punish the defendants for their misconduct.',
          'The developers allegedly paid only a fraction of a $21 million infrastructure contract to Energy Commissioning Inc. while simultaneously seeking $5 billion in European financing.',
          'Krishnan and Gounder are also the co-founders of Nanban Ventures LLC, which the SEC accused in October 2023 of operating a $130 million affinity fraud and Ponzi scheme targeting the Indian-American community in the Dallas-Fort Worth area.',
          'No criminal charges have been filed against either man related to "The District" or Nanban Ventures, but the civil judgment represents a massive legal blow.',
        ]}
        keyTakeawaysColor="orange"
        faqItems={[
          {
            question: 'What was "The District" in Georgetown?',
            answer:
              '"The District" was a proposed 400-acre luxury mixed-use development near Georgetown, Texas, heavily marketed as featuring canals, parks, restaurants, retail stores, and boat access. Despite the grand promises, it never materialized and the site remains largely undeveloped farmland.',
          },
          {
            question: 'Who are the developers ordered to pay $400 million?',
            answer:
              'Gopala Krishnan and Sakthivel Gounder are Frisco-based entrepreneurs and co-founders of Nanban Ventures LLC. A Williamson County jury found them liable for fraud and breach of contract.',
          },
          {
            question: 'What is Nanban Ventures?',
            answer:
              'Nanban Ventures LLC is a Frisco-based firm co-founded by Krishnan and Gounder. In October 2023, the SEC obtained an emergency asset freeze and restraining order, accusing the founders of operating a $130 million affinity fraud and Ponzi scheme that targeted the Indian-American community in DFW.',
          },
          {
            question: 'What was the $21 million contract dispute?',
            answer:
              'The developers entered into a $21 million agreement with Energy Commissioning Inc., a Georgetown business, for infrastructure improvements including roads and utilities. They allegedly paid only a fraction of the agreed amount while seeking $5 billion in European financing.',
          },
          {
            question: 'Are there criminal charges against the developers?',
            answer:
              'No criminal charges have been filed against either Krishnan or Gounder related to "The District" or Nanban Ventures as of July 2026. The $400 million judgment is a civil verdict.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Greater Texas"
        moreFromHubHref="/local/greater-texas"
      >
        <p>
          A Williamson County jury has delivered a staggering civil judgment against two Frisco-based entrepreneurs, ordering them to pay more than $400 million in damages over a massive, failed luxury development near Georgetown that was marketed as a canal-lined paradise but never rose above the farmland it was supposed to replace.
        </p>

        <p>
          The defendants, Gopala Krishnan and Sakthivel Gounder, were found liable for fraud and breach of contract surrounding a proposed 400-acre project known as <strong>"The District."</strong> The highly publicized development was heavily marketed as a sprawling, luxurious mixed-use community that would feature canals, parks, restaurants, retail stores, and boat access. According to reporting by Justin Sayers of the <em>Austin Business Journal</em>, the ambitious vision completely fell apart, and the massive site remains largely undeveloped farmland.
        </p>

        <h2>The $21 Million Dispute and $300 Million in Punitive Damages</h2>

        <p>
          The civil lawsuit at the center of the $400 million judgment involved a contract dispute with <strong>Energy Commissioning Inc.</strong>, a Georgetown-based business. The developers allegedly entered into a $21 million agreement with the company for essential infrastructure improvements, including roads and utilities that would have been necessary for any construction to begin on the site.
        </p>

        <p>
          During the trial, it was revealed that Krishnan and Gounder paid only a fraction of the agreed-upon amount toward the infrastructure work while simultaneously, and unsuccessfully, seeking <strong>$5 billion in European financing</strong> to bankroll the luxury project. The jury heard evidence that the developers continued to market and promote "The District" to potential investors and partners even as the financial foundation of the project was collapsing.
        </p>

        <p>
          The jury's verdict was swift and severe. In addition to compensating the Georgetown business owner for actual losses, the judgment included an astonishing <strong>$300 million specifically intended as punitive damages</strong> to punish the defendants for their misconduct. Punitive damages of that magnitude are rare in Texas civil litigation and signal that the jury viewed the defendants' conduct as exceptionally egregious.
        </p>

        <h2>The Shadow of Nanban Ventures and the SEC</h2>

        <p>
          As reported by the <em>Austin Business Journal</em>, this is not the first time the defendants have faced serious allegations of financial misconduct. Krishnan and Gounder are the co-founders of the Frisco-based firm <strong>Nanban Ventures LLC</strong>. In October 2023, the U.S. Securities and Exchange Commission obtained an emergency asset freeze and temporary restraining order against the founders, accusing them of orchestrating a massive affinity fraud and Ponzi scheme.
        </p>

        <p>
          According to the SEC complaint, the Nanban founders targeted the Indian-American community in the Dallas-Fort Worth area, raising approximately <strong>$130 million from over 360 investors</strong> by making what the SEC described as "false promises of unrealistic returns and lies about the success of their investing strategies." The SEC alleged that rather than investing the funds as promised, the founders used new investor money to make fake profit distribution payments while siphoning off millions for personal use.
        </p>

        <p>
          While available court records show no criminal charges have been filed against either man regarding "The District" or the Nanban Ventures case, the $400 million civil judgment represents a massive legal blow to the embattled developers and raises questions about whether federal prosecutors will take a renewed interest in the broader allegations against them.
        </p>

        <p>
          The Williamson County verdict is one of the largest civil fraud judgments in recent Central Texas history. For the Georgetown business owner who pursued the case, the judgment provides a measure of accountability. For the investors and community members who bought into the vision of "The District," the verdict confirms what the empty farmland has already made clear: the grandest promises are worthless without the intent and ability to deliver on them.
        </p>

        <p>
          For more Texas investigations and local coverage, see the{' '}
          <Link href="/local/greater-texas" className="text-blue-600 hover:text-blue-800 underline">
            oWire Greater Texas hub
          </Link>{' '}
          or read our reporting on{' '}
          <Link href="/blog/travis-county-capital-murder-arrest-bare-cabaret-nightclub-2026" className="text-blue-600 hover:text-blue-800 underline">
            the Travis County capital murder arrest
          </Link>.
        </p>
      </NewsArticle>
    </>
  );
}