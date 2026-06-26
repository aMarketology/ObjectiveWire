import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-mexico-3-0-czechia-group-a';
const URL_PATH = '/world-cup/2026/mexico-3-0-czechia-group-a';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;

const OG_IMAGE = '/thumbnails/world-cup-2026-mexico-3-0-czechia-group-a.jpg';

export const metadata: Metadata = {
  title: 'Mexico 3-0 Czechia | World Cup 2026 Group A Match Report',
  description:
    'Co-hosts Mexico finished their group stage campaign in flawless style, cruising past Czechia 3-0 in Mexico City to finish with 9 points and zero goals conceded.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Mexico 3-0 Czechia | World Cup 2026 Group A',
    description: 'El Tri finish the group stage perfect: 9 points, zero goals conceded. A statement performance from the co-hosts. Report by Jack Brennan.',
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-24T23:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Mexico', 'Czechia', 'Group A', 'Match Report', 'Co-Hosts'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mexico 3-0 Czechia | World Cup 2026 Group A',
    description: 'El Tri finish group stage perfect: 9 points, 0 conceded. A statement from the co-hosts. Report by Jack Brennan.',
  },
};

export default function MexicoCzechiaPage() {
  return (
    <NewsArticle
      title="Mexico 3-0 Czechia | El Tri Finish Group Stage Perfect with 9 Points, Zero Goals Conceded"
      subtitle="Co-hosts Mexico completed a flawless group stage campaign, cruising past Czechia 3-0 in Mexico City backed by a roaring home crowd to finish with a perfect record and zero goals conceded across three matches"
      category="World Cup 2026 · Group A"
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
      thumbnail={{ src: OG_IMAGE, alt: 'Mexico 3-0 Czechia | El Tri Finish Group Stage Perfect' }}
      tags={['World Cup 2026', 'Mexico', 'Czechia', 'Group A', 'Match Report', 'Co-Hosts']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Mexico vs Czechia', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'south-africa-1-0-south-korea', title: 'South Africa 1-0 South Korea | Group A Report', url: '/world-cup/2026/south-africa-1-0-south-korea-group-a', publishDate: 'June 24, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Mexico defeated Czechia 3-0 in Mexico City to finish Group A with a perfect 9 points and zero goals conceded.',
        'El Tri become the first co-host nation to complete a flawless group stage at a World Cup since France in 1998.',
        'The home crowd in Mexico City provided a relentless atmosphere that carried Mexico through all three group matches.',
        'Mexico advance to the Round of 32 as Group A winners with the best defensive record of any team in the group stage.',
      ]}
      faqItems={[
        {
          question: 'What was the final score of Mexico vs Czechia?',
          answer: 'Mexico won 3-0 in Mexico City, finishing Group A with a perfect 9 points.',
        },
        {
          question: 'Did Mexico concede any goals in the group stage?',
          answer: 'No. Mexico finished the group stage with zero goals conceded across three matches, the best defensive record of any team in the tournament.',
        },
        {
          question: 'Who finished second in Group A?',
          answer: 'South Africa finished second in Group A after their shock 1-0 victory over South Korea, advancing to the knockout stage for the first time in their history.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Co-hosts Mexico finished their group stage campaign in absolutely flawless style.
          Backed by a roaring home crowd in Mexico City, El Tri cruised past Czechia 3-0,
          completing the group stage with a perfect 9 points and zero goals conceded across
          three matches. It is the kind of statement that sends a message to every other
          team in the tournament: Mexico are not here to make up the numbers as a host nation.
        </p>

        <p>
          The Estadio Azteca was a wall of sound from the opening whistle. Mexico's supporters,
          who have waited 36 years since their last World Cup on home soil in 1986, treated
          every tackle, every pass, and every attacking move as if it were a moment of national
          significance. The energy was palpable, and Mexico's players channeled it into a
          performance that left Czechia with no answers.
        </p>

        <h2 id="perfect-record">A Perfect Group Stage | 9 Points, 0 Conceded</h2>

        <p>
          Mexico's group stage record is remarkable by any standard. Three wins from three
          matches, nine points from a possible nine, and a goal difference that reflects both
          attacking efficiency and defensive solidity. The zero in the goals-conceded column
          is particularly significant. In a tournament where defensive organization often
          determines how deep a team progresses, Mexico have established themselves as one
          of the hardest sides in the competition to break down.
        </p>

        <p>
          The clean sheet streak is not the product of a defensive approach. Mexico have
          attacked with purpose in every match, creating chances, scoring goals, and
          controlling possession. Their defensive record is a function of collective
          discipline rather than conservative tactics, which makes it more sustainable
          heading into the knockout rounds.
        </p>

        <h2 id="round-of-32">Round of 32 | What Comes Next</h2>

        <p>
          As Group A winners, Mexico enter the Round of 32 against a second-place finisher
          from one of the other groups. The exact opponent will be determined once the group
          stage concludes and the bracket is set. What is already clear is that Mexico, with
          home support behind them and a flawless record to build on, are positioned as one
          of the most dangerous teams in the knockout bracket.
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