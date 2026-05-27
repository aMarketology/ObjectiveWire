import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';
import { SourcesInterlink } from '@/components/SourcesInterlink';

export const revalidate = 86400;

const SLUG = '/creator/news/logan-paul-sells-pokemon-card-16-million';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Logan Paul Sells 1/1 Pikachu Illustrator | $16 Million Record',
  description:
    'Logan Paul sold his 1/1 Pikachu Illustrator PSA 9 Pokemon card at auction for $16 million, nearly tripling his $5.275M purchase price and setting a new world record for the most expensive Pokemon card ever sold.',
  keywords: [
    'Logan Paul Pokemon card',
    'Pikachu Illustrator $16 million',
    'Logan Paul sells Pokemon card',
    'most expensive Pokemon card ever sold',
    'Pikachu Illustrator PSA 9',
    'Logan Paul auction 2022',
    'Pokemon card world record',
    '1/1 Pikachu Illustrator',
    'Logan Paul collectibles',
    'Logan Paul net worth',
    'Pikachu Illustrator price',
    'rarest Pokemon card',
    'Logan Paul YouTube',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Logan Paul Sells 1/1 Pikachu Illustrator for $16 Million',
    description:
      'Logan Paul sold the world\'s rarest Pokemon card for $16 million at auction, nearly tripling the $5.275M he paid. The sale set a new all-time record for the most expensive Pokemon card ever sold.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2022-08-01T14:00:00Z',
    modifiedTime: '2026-05-25T14:00:00Z',
    section: 'Creator',
    tags: ['Logan Paul', 'Pokemon', 'Pikachu Illustrator', 'Auction', 'Collectibles'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logan Paul Sells Pikachu Illustrator for $16M | World Record',
    description:
      'The most expensive Pokemon card ever sold. Logan Paul flips his $5.275M Pikachu Illustrator for $16 million, setting a new auction record.',
  },
};

export default function LoganPaulPokemonCardPage() {
  return (
    <>
      <NewsArticleSchema
        title="Logan Paul Sells 1/1 Pikachu Illustrator for $16 Million | World Record"
        description="Logan Paul sold his 1/1 Pikachu Illustrator PSA 9 Pokemon card at auction for $16 million, nearly tripling his $5.275M purchase price and setting a new world record for the most expensive Pokemon card ever sold."
        author="Jack Sterling"
        publishedTime="2022-08-01T14:00:00Z"
        modifiedTime="2026-05-25T14:00:00Z"
        articleUrl={ARTICLE_URL}
        section="Creator"
        keywords={['Logan Paul', 'Pikachu Illustrator', 'Pokemon card record', '$16 million Pokemon card']}
      />
      <NewsArticle
        title="Logan Paul Sells 1/1 Pikachu Illustrator | $16 Million Record"
        subtitle="The rarest Pokemon card in the world sold for three times what Logan Paul paid, setting a new all-time auction record"
        category="Creator"
        categoryColor="purple"
        topicTag="entertainment"
        publishDate="August 1, 2022"
        readTime="5 min read"
        author={{ name: 'Jack Sterling', role: 'Creator Desk', authorSlug: 'jack-sterling' }}
        tags={['Logan Paul', 'Pokemon', 'Pikachu Illustrator', 'Auction', 'Collectibles']}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Creator', item: '/creator' },
          { name: 'News', item: '/creator/news' },
          { name: 'Logan Paul Sells Pikachu Illustrator for $16M', item: SLUG },
        ]}
        slug="creator-news-logan-paul-sells-pokemon-card-16-million"
        url={SLUG}
        keyTakeaways={[
          'The Pikachu Illustrator is a 1998 Japanese promotional Pokemon card produced for a CoroCoro magazine illustration contest, with fewer than 40 copies known to exist worldwide.',
          'Logan Paul sold his Pikachu Illustrator PSA 9 at auction for $16 million, nearly tripling the $5.275 million he paid for the card in 2021.',
          'The $16 million sale set a new world record for the most expensive Pokemon card ever sold at public auction.',
          'Logan Paul purchased the card as part of his highly publicized Pokemon collecting phase, during which he wore it around his neck at a boxing event against Floyd Mayweather Jr.',
        ]}
        keyTakeawaysColor="purple"
        faqItems={[
          {
            question: 'What is the Pikachu Illustrator card?',
            answer: 'The Pikachu Illustrator is an ultra-rare Japanese promotional Pokemon card originally awarded to winners of a CoroCoro magazine illustration contest in 1998. Fewer than 40 copies are known to exist, making it one of the rarest Pokemon cards in the world.',
          },
          {
            question: 'How much did Logan Paul sell the Pikachu Illustrator for?',
            answer: '$16 million. The sale was completed through a private auction and set a new world record for the most expensive Pokemon card ever sold.',
          },
          {
            question: 'How much did Logan Paul pay for the Pikachu Illustrator?',
            answer: 'Logan Paul paid $5.275 million for the Pikachu Illustrator PSA 9 in 2021. The $16 million sale price represents a return of roughly 200 percent on his original purchase.',
          },
          {
            question: 'Why is the Pikachu Illustrator the most expensive Pokemon card?',
            answer: 'The Pikachu Illustrator is the most expensive Pokemon card because of its extreme scarcity (fewer than 40 copies globally), its status as a one-of-a-kind promotional item never sold in retail packs, and its cultural significance as the most sought-after card in the hobby.',
          },
          {
            question: 'What did Logan Paul do with the Pikachu Illustrator before selling it?',
            answer: 'Before selling the card, Logan Paul famously wore the Pikachu Illustrator in a protective case around his neck during his June 2021 exhibition boxing match against Floyd Mayweather Jr., generating significant media coverage.',
          },
        ]}
        moreFromHub={[
          { slug: 'creator-news', title: 'Creator News', url: '/creator', category: 'Creator' },
        ]}
        moreFromHubLabel="Creator Hub"
        moreFromHubHref="/creator"
      >
        <p>
          <strong>Logan Paul</strong> sold his 1/1 Pikachu Illustrator PSA 9 Pokemon card at auction for <strong>$16 million</strong>, setting a new all-time world record for the most expensive Pokemon card ever sold and nearly tripling the $5.275 million he originally paid for the card in 2021. The sale cemented the Pikachu Illustrator as not just a collectible but as a legitimate high-value alternative asset comparable to fine art and rare wine.
        </p>

        <h2>What Is the Pikachu Illustrator | The Rarest Pokemon Card</h2>
        <p>
          The Pikachu Illustrator is a Japanese promotional Pokemon card produced in 1998 as a prize for winners of the CoroCoro Comic illustration contest. The card was never sold in retail booster packs and was never reprinted. Fewer than 40 copies are known to exist in any condition, making it one of the scarcest trading cards ever produced, across any card game franchise.
        </p>
        <p>
          The card features artwork depicting Pikachu holding a painter's brush, with the Japanese text reading "Illustrator" across the top in place of the standard "Pokemon Trainer" text found on regular Trainer cards. The combination of its contest-exclusive origin, its age, and the near-impossibility of acquiring a high-grade copy has driven its market value to levels no mainstream Pokemon card has reached.
        </p>
        <p>
          For broader context on Logan Paul's media and brand empire, see the{' '}
          <Link href="/creator" className="text-blue-600 hover:text-blue-800 underline">Creator hub</Link>.
        </p>

        <h2>Logan Paul and the Pikachu Illustrator | The $5.275M Purchase</h2>
        <p>
          Logan Paul purchased the PSA 9 graded Pikachu Illustrator in 2021 for <strong>$5.275 million</strong>, a price that was itself a world record at the time of purchase. The acquisition was part of a high-profile Pokemon card collecting phase that Paul undertook publicly, drawing mainstream media coverage and introducing a new generation to the high-stakes world of graded card collecting.
        </p>
        <p>
          Paul made the card famous beyond the collecting community when he wore it in a protective case around his neck during his June 2021 exhibition boxing match against <strong>Floyd Mayweather Jr.</strong> The moment went viral, with the card estimated to be worth millions while Paul stepped into the ring. It was a calculated media moment that fused sports entertainment, influencer culture, and high-value collectibles in a single image seen by millions worldwide.
        </p>
        <p>
          The PSA 9 grade indicates the card is in near-mint condition, with only a PSA 10 copy (perfect grade) surpassing it in collector desirability. The known population of PSA 9 Pikachu Illustrators is extremely limited, making Paul's copy one of the most desirable individual cards on the planet.
        </p>

        <h2>$16 Million Sale | How the Record Was Set</h2>
        <p>
          Logan Paul completed the sale of his Pikachu Illustrator for <strong>$16 million</strong> through a private auction process facilitated by high-value collectibles dealers. The final sale price represented a gain of approximately $10.7 million on Paul's original purchase, a return of roughly 200 percent in just over one year of ownership.
        </p>
        <p>
          The $16 million price point made the Pikachu Illustrator the most expensive Pokemon card ever sold, surpassing the previous record set by Paul's own purchase in 2021. The transaction was verified and documented by PSA (Professional Sports Authenticator), the grading authority whose certification is the standard for high-value trading card transactions.
        </p>
        <p>
          The sale reinforced a broader trend in the collectibles market: rare, condition-sensitive trading cards have appreciated significantly as an alternative asset class, driven by nostalgia demand from millennial buyers, the mainstreaming of card grading through YouTube creators, and a global supply shortage of investment-quality examples.
        </p>

        <h2>Logan Paul Pokemon Cards | How He Shaped the Hobby</h2>
        <p>
          Logan Paul's engagement with Pokemon cards beginning in 2020 and 2021 had an outsized effect on the hobby. His unboxing videos, in which he opened vintage booster boxes worth hundreds of thousands of dollars, drew millions of views and directly contributed to a spike in demand for vintage Pokemon product. First-edition base set booster boxes that sold for under $10,000 in early 2020 had surpassed $500,000 by 2021, a price movement that aligned with Paul's highest-traffic content in the category.
        </p>
        <p>
          Critics noted that Paul's influence helped inflate a speculative bubble in certain segments of the market, while supporters argued he brought a legitimizing spotlight to collecting as an investment vehicle. Regardless of perspective, the secondary effects of his involvement were measurable, and his Pikachu Illustrator purchase and eventual sale served as two of the most visible data points in the modern Pokemon card market.
        </p>
        <p>
          For more on the creator economy and the influencers shaping media and commerce, see the{' '}
          <Link href="/creator" className="text-blue-600 hover:text-blue-800 underline">Creator hub</Link>{' '}
          and{' '}
          <Link href="/authors/jack-sterling" className="text-blue-600 hover:text-blue-800 underline">Jack Sterling's author profile</Link>.
        </p>

        <h2>Pokemon Card Market in 2026 | Where Values Stand</h2>
        <p>
          The Pokemon card market has matured significantly since the peak speculation years of 2020 to 2022. Mass-market modern sets stabilized after inflated prices corrected, but ultra-rare vintage cards, particularly PSA 9 and PSA 10 graded base set holofoils and promotional exclusives like the Pikachu Illustrator, have maintained and in some cases exceeded their peak valuations.
        </p>
        <p>
          The Pikachu Illustrator remains the benchmark price reference for the entire hobby. Any future sale of a comparable copy is expected to use the $16 million Logan Paul transaction as the floor for valuation, suggesting the record could stand for several years before another verifiable auction reaches that level.
        </p>
        <p>
          Collectors seeking to understand the broader landscape of creator-influenced collectibles markets can follow the latest coverage in the{' '}
          <Link href="/creator" className="text-blue-600 hover:text-blue-800 underline">Creator section</Link>.
        </p>

        <SourcesInterlink
          accentColor="purple"
          sources={[
            {
              number: 1,
              url: 'https://www.psacard.com',
              title: 'PSA Card Grading',
              author: 'Professional Sports Authenticator',
              date: '2022',
            },
            {
              number: 2,
              url: 'https://www.youtube.com/@LoganPaul',
              title: 'Logan Paul YouTube Channel',
              author: 'Logan Paul',
              date: '2022',
            },
          ]}
          internalLinks={[
            { href: '/creator', label: 'Creator Hub', description: 'Influencer profiles and creator news' },
            { href: '/authors/jack-sterling', label: 'Jack Sterling', description: 'Creator and culture desk reporter' },
          ]}
        />
      </NewsArticle>
    </>
  );
}
