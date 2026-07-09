import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-switzerland-0-0-colombia-pens-round-of-16';
const URL_PATH = '/world-cup/2026/switzerland-0-0-colombia-pens-round-of-16';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;
const OG_IMAGE = '/thumbnails/world-cup-2026-switzerland-0-0-colombia-pens-round-of-16.jpg';

export const metadata: Metadata = {
  title: 'Switzerland 0-0 Colombia 4-3 Pens | World Cup 2026 Round of 16 | Swiss GK Heroics',
  description:
    "Switzerland advanced to the World Cup quarterfinals 4-3 on penalties after a 0-0 draw across 120 goalless minutes against Colombia. The Swiss goalkeeper was the hero of a shootout lottery that was the definition of a war of attrition.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Switzerland 0-0 Colombia 4-3 Pens | Swiss GK Heroics | World Cup 2026 Round of 16",
    description: "120 minutes. No goals. Then a shootout. Switzerland 4-3. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-07-05T22:00:00Z',
    modifiedTime: '2026-07-05T22:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Switzerland', 'Colombia', 'Round of 16', 'Penalties', 'Match Report'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "120 minutes. Not a single goal. Switzerland 4-3 Colombia on penalties. Swiss goalkeeper the hero of the lottery. World Cup 2026.",
    description: "The definition of a war of attrition. Switzerland outlast Colombia after a punishing 0-0 draw and a shootout that the Swiss goalkeeper decided. Report by Jack Brennan.",
  },
};

export default function SwitzerlandColombiaR16Page() {
  return (
    <NewsArticle
      title="Switzerland 0-0 Colombia (4-3 Pens): War of Attrition Ends in Shootout Lottery as Swiss Goalkeeper Stands Tall"
      subtitle="In the most grinding match of the Round of 16, Switzerland and Colombia played 120 goalless minutes of determined, well-organized football before the inevitable penalty shootout. The Swiss goalkeeper produced the heroics that decided a lottery, sending Switzerland to the quarterfinals 4-3 on spot kicks."
      category="World Cup 2026 · Round of 16"
      categoryColor="blue"
      topicTag="sports"
      publishDate="July 5, 2026"
      readTime="6 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Switzerland 0-0 Colombia 4-3 penalties World Cup 2026 Round of 16 Swiss goalkeeper' }}
      tags={['World Cup 2026', 'Switzerland', 'Colombia', 'Round of 16', 'Penalties', 'Match Report', 'Shootout']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Switzerland vs Colombia', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'argentina-3-2-egypt-var-round-of-16', title: 'Argentina 3-2 Egypt | VAR Controversy | Round of 16', url: '/world-cup/2026/argentina-3-2-egypt-var-round-of-16', publishDate: 'July 5, 2026', category: 'Sports' },
        { slug: 'norway-2-1-brazil-round-of-16', title: 'Norway 2-1 Brazil | Round of 16', url: '/world-cup/2026/norway-2-1-brazil-round-of-16', publishDate: 'July 3, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Switzerland defeated Colombia 4-3 on penalties after a 0-0 draw across 120 minutes in the Round of 16 on July 5, 2026.',
        'The Swiss goalkeeper made decisive saves in the penalty shootout, proving the difference between the two sides.',
        'Both teams played disciplined, organized football across 120 minutes without either able to find a decisive opening.',
        'Switzerland advance to the World Cup quarterfinals where they will face Argentina.',
      ]}
      faqItems={[
        {
          question: 'What was the score in Switzerland vs Colombia at the 2026 World Cup?',
          answer: 'Switzerland defeated Colombia 4-3 on penalties after a 0-0 draw across 120 minutes in the Round of 16 on July 5, 2026.',
        },
        {
          question: 'Did Switzerland vs Colombia go to penalties at the 2026 World Cup?',
          answer: 'Yes. After 120 goalless minutes, the match was decided by a penalty shootout. Switzerland won 4-3, with their goalkeeper making key saves.',
        },
        {
          question: 'Who does Switzerland face in the quarterfinals?',
          answer: 'Switzerland face Argentina in the quarterfinals after both sides advanced through the Round of 16.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Not every World Cup match is a five-goal thriller. Not every story in a tournament
          requires red cards and last-minute winners and VAR controversy. Sometimes the most
          honest assessment of a football match is this: two very well-organized sides played
          for 120 minutes without finding a way through, and then one goalkeeper made better
          saves in a shootout than the other.
        </p>

        <p>
          <strong>Switzerland 4-3 Colombia on penalties.</strong> Switzerland are in the quarterfinals.
          The Swiss goalkeeper is the reason.
        </p>

        <h2>120 Minutes of Disciplined Football</h2>

        <p>
          <strong>Colombia</strong> came into this match with the energy of a South American
          side that had performed well in the group stage and the belief that their attacking
          talent was capable of unlocking most defenses at this level. <strong>Switzerland</strong>
          arrived with the organization, the tactical discipline, and the specific psychological
          quality of a nation that has produced consistently excellent tournament football for
          a decade, repeatedly going deeper at World Cups and European Championships than any
          pre-tournament analysis would have predicted.
        </p>

        <p>
          The first 90 minutes produced a match that was well-contested and genuinely
          competitive but ultimately resolved nothing. Both goalkeepers were tested but
          not overwhelmed. Both defenses held their structure under pressure. The quality
          of the attacking play was not sufficient to consistently break down organized
          defensive blocks, which is often the reality of knockout football at this level.
        </p>

        <p>
          Extra time extended the stalemate. In 30 additional minutes, both sides began
          to feel the physical cost of the match's intensity. Neither could find the
          decisive moment of individual quality or collective combination play that this
          kind of match, deep into fatigue, requires. The shootout was coming. Both sets
          of players understood it. The question was who had the goalkeeper to stand up in it.
        </p>

        <h2>The Shootout | Swiss Goalkeeper Heroics</h2>

        <p>
          Penalty shootouts at World Cups are genuinely separate events from the football
          that preceded them. They test a specific kind of individual psychological composure
          under pressure that not every player possesses and that cannot be entirely predicted
          by their general form. The Swiss goalkeeper had evidently saved something for
          this moment.
        </p>

        <p>
          His saves in the shootout were decisive and technically excellent. The Colombian
          takers who failed did not necessarily hit poor penalties. They hit penalties that
          the Swiss goalkeeper anticipated and reached. Switzerland converted their spot kicks
          with the composure of a team that had prepared for exactly this moment. 4-3.
          The job was done.
        </p>

        <h2>Switzerland's Quarterfinal against Argentina</h2>

        <p>
          Switzerland advance to face <strong>Argentina</strong> in the quarterfinals,
          a match that presents the kind of challenge that tests everything the Swiss have
          built. Argentina come through their own dramatic Round of 16 against Egypt,
          a match that ended 3-2 and will be discussed long after this tournament concludes.
          Messi. A VAR controversy. An Egyptian side that led 2-0 and deserved more
          than they received. Switzerland will face a team arriving with the confidence
          of a miraculous comeback and the emotional intensity of a side that believes
          the tournament is turning for them.
        </p>

        <p>
          For Switzerland, the story of this tournament has been consistency and
          pragmatism. They have not been spectacular. They have been effective. In
          knockout football, the distinction between those two things matters less
          than the fact that they are still in the competition while more glamorous
          sides have already gone home.
        </p>

      </div>
    </NewsArticle>
  );
}
