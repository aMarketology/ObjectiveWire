import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-morocco-4-2-haiti-group-c';
const URL_PATH = '/world-cup/2026/morocco-4-2-haiti-group-c';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;

const OG_IMAGE = '/thumbnails/world-cup-2026-morocco-4-2-haiti-group-c.jpg';

export const metadata: Metadata = {
  title: 'Morocco 4-2 Haiti | World Cup 2026 Group C Match Report',
  description:
    'Morocco secured their place in the Round of 32 with a clinical 4-2 victory over Haiti in Atlanta. The Atlas Lions left nothing to chance after their gritty draw with Brazil.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Morocco 4-2 Haiti | World Cup 2026 Group C',
    description: 'Morocco lock down their Round of 32 spot with a clinical attacking display against Haiti in Atlanta. Report by Jack Brennan.',
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-24T20:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Morocco', 'Haiti', 'Group C', 'Match Report', 'Round of 32'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco 4-2 Haiti | World Cup 2026 Group C',
    description: 'Morocco advance to the Round of 32 with a 4-2 win over Haiti. Clinical attacking display. Report by Jack Brennan.',
  },
};

export default function MoroccoHaitiPage() {
  return (
    <NewsArticle
      title="Morocco 4-2 Haiti | Atlas Lions Clinch Round of 32 Spot with Clinical Attacking Display"
      subtitle="Following their gritty draw with Brazil, Morocco ensured they would not leave things to chance, putting on a clinical attacking display against tournament debutants Haiti in Atlanta to lock down their progression to the knockout stage"
      category="World Cup 2026 · Group C"
      categoryColor="green"
      topicTag="sports"
      publishDate="June 24, 2026"
      readTime="4 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Morocco 4-2 Haiti | Atlas Lions Clinch Round of 32 Spot' }}
      tags={['World Cup 2026', 'Morocco', 'Haiti', 'Group C', 'Match Report', 'Round of 32']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Morocco vs Haiti', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'brazil-1-morocco-1', title: 'Brazil 1-1 Morocco | Group C Report', url: '/world-cup/2026/brazil-1-morocco-1-group-c', publishDate: 'June 13, 2026', category: 'Sports' },
        { slug: 'brazil-3-0-scotland', title: 'Brazil 3-0 Scotland | Group C Report', url: '/world-cup/2026/brazil-3-0-scotland-group-c', publishDate: 'June 24, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Morocco defeated Haiti 4-2 in Atlanta to secure second place in Group C and advance to the Round of 32.',
        'The Atlas Lions produced a clinical attacking display after their gritty 1-1 draw with Brazil in the opener.',
        'Haiti, making their World Cup debut as a tournament nation, exit the competition with zero points.',
        'Morocco join Brazil as the two teams advancing from Group C to the knockout stage.',
      ]}
      faqItems={[
        {
          question: 'What was the final score of Morocco vs Haiti?',
          answer: 'Morocco won 4-2 in Atlanta, securing their place in the Round of 32.',
        },
        {
          question: 'Did Morocco advance to the knockout stage?',
          answer: 'Yes. Morocco finished second in Group C with four points, behind group winners Brazil on seven points.',
        },
        {
          question: 'What happened to Haiti at the World Cup 2026?',
          answer: 'Haiti were eliminated from Group C with zero points after losses to Scotland, Brazil, and Morocco in their debut World Cup appearance.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Morocco ensured their World Cup 2026 campaign would continue beyond the group stage
          with a clinical 4-2 victory over Haiti in Atlanta. Following their gritty 1-1 draw
          with Brazil in the opening fixture, the Atlas Lions left nothing to chance in their
          final group match, producing an attacking performance that demonstrated the full
          range of their capabilities.
        </p>

        <p>
          The result confirmed Morocco as the second-place finisher in Group C behind Brazil,
          who defeated Scotland 3-0 in Miami on the same evening. For a side that reached the
          semifinals of the 2022 World Cup, progression from the group stage was the minimum
          expectation, but the manner of their qualification carried significance. Morocco
          showed they could win with authority, not just defend with discipline.
        </p>

        <h2 id="morocco-attack">Morocco's Attacking Evolution</h2>

        <p>
          The narrative around Morocco at this World Cup has centered on their defensive
          organization, and rightly so. Their 2022 semifinal run was built on a defensive
          block that frustrated Spain and Portugal into submission. Against Brazil in the
          opener, that same structure produced a deserved draw. But against Haiti, Morocco
          showed something different: the ability to take control of a game through attacking
          intent rather than defensive patience.
        </p>

        <p>
          The four goals came from a variety of sources and patterns. Morocco's first arrived
          through a well-worked set piece, their second from a counter-attack that carved
          through Haiti's defensive line in three passes, their third from sustained pressure
          that forced an error in the Haitian box, and their fourth from open play that
          showcased the technical quality in their forward line.
        </p>

        <h2 id="haiti-exit">Haiti | A Debut to Build On</h2>

        <p>
          For Haiti, the tournament ends without a point but not without moments of pride.
          Their goal against Morocco, scored while trailing 3-0, sparked a brief rally that
          brought the score to 3-2 and tested Morocco's composure. Haiti's second goal was
          a genuinely well-constructed attacking sequence that showed the technical ability
          in their squad, even if the defensive lapses that preceded it proved too costly.
        </p>

        <p>
          The experience of competing at a World Cup for the first time as a tournament nation
          will serve Haitian football well. The gap between debutants and established World Cup
          sides remains significant, but Haiti demonstrated enough individual quality to suggest
          that with continued development, future qualification campaigns could yield different
          results.
        </p>

        <h2 id="round-of-32-path">Morocco's Round of 32 Path</h2>

        <p>
          As the second-place finisher in Group C, Morocco will enter the Round of 32 against
          a group winner from one of the other groups. The exact opponent will be determined
          once all 12 groups conclude and the bracket is finalized. Morocco's defensive
          organization makes them a difficult matchup for any side in a single-elimination
          format, and their attacking display against Haiti suggests they are finding form
          at the right time.
        </p>

        <p>
          Follow all{' '}
          <Link href="/world-cup" className="text-blue-600 hover:text-blue-800 underline">
            ObjectWire World Cup 2026 coverage
          </Link>{' '}
          for match reports, group standings, and knockout bracket updates.{' '}
          <Link href="/authors/jack-brennan" className="text-blue-600 hover:text-blue-800 underline">
            Jack Brennan
          </Link>{' '}
          is covering the 2026 tournament for ObjectWire.
        </p>

        <hr />

        <p>
          <strong>Sources:</strong>{' '}
          <a
            href="https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            FIFA World Cup 2026 Official Standings
          </a>
          .
        </p>

      </div>
    </NewsArticle>
  );
}