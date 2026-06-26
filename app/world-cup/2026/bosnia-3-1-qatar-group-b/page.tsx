import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-bosnia-3-1-qatar-group-b';
const URL_PATH = '/world-cup/2026/bosnia-3-1-qatar-group-b';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;

const OG_IMAGE = '/thumbnails/world-cup-2026-bosnia-3-1-qatar-group-b.jpg';

export const metadata: Metadata = {
  title: 'Bosnia 3-1 Qatar | World Cup 2026 Group B Match Report',
  description:
    'Bosnia and Herzegovina closed out their group stage on a high note, defeating Qatar 3-1 in Seattle. Qatar were plagued by defensive errors as Bosnia seized the three points.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Bosnia 3-1 Qatar | World Cup 2026 Group B',
    description: 'Bosnia finish their group stage with a convincing 3-1 win over Qatar in Seattle. Defensive errors cost Qatar. Report by Jack Brennan.',
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-24T21:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Bosnia', 'Qatar', 'Group B', 'Match Report'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bosnia 3-1 Qatar | World Cup 2026 Group B',
    description: 'Bosnia close out their group stage with a 3-1 win over Qatar in Seattle. Report by Jack Brennan.',
  },
};

export default function BosniaQatarPage() {
  return (
    <NewsArticle
      title="Bosnia 3-1 Qatar | Bosnia Close Out Group Stage with Convincing Win as Qatar Exit Winless"
      subtitle="Bosnia and Herzegovina closed out their group stage on a high note by defeating Qatar 3-1 in Seattle. Qatar were plagued by defensive errors, leaving Bosnia to comfortably seize the three points and finish their campaign with pride"
      category="World Cup 2026 · Group B"
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
      thumbnail={{ src: OG_IMAGE, alt: 'Bosnia 3-1 Qatar | Bosnia Close Out Group Stage with Convincing Win' }}
      tags={['World Cup 2026', 'Bosnia', 'Qatar', 'Group B', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Bosnia vs Qatar', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'switzerland-2-1-canada', title: 'Switzerland 2-1 Canada | Group B Report', url: '/world-cup/2026/switzerland-2-1-canada-group-b', publishDate: 'June 24, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Bosnia and Herzegovina defeated Qatar 3-1 in Seattle to close out their group stage campaign with a win.',
        'Qatar exit the World Cup 2026 without a win, plagued by defensive errors across all three group matches.',
        'Bosnia finish third in Group B, unable to advance but leaving the tournament with a positive final result.',
        'Qatar\'s defensive fragility was exposed again, conceding three goals to a Bosnia side that had struggled to score in their opening matches.',
      ]}
      faqItems={[
        {
          question: 'What was the final score of Bosnia vs Qatar?',
          answer: 'Bosnia and Herzegovina won 3-1 in Seattle.',
        },
        {
          question: 'Did either team advance from Group B?',
          answer: 'No. Switzerland and Canada advanced from Group B. Bosnia finished third and Qatar finished fourth.',
        },
        {
          question: 'How did Qatar perform at World Cup 2026?',
          answer: 'Qatar exited the tournament without a win, losing all three group matches with defensive errors proving costly throughout their campaign.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Bosnia and Herzegovina closed out their World Cup 2026 group stage campaign on a
          high note, defeating Qatar 3-1 in Seattle. While the result did not change either
          team's tournament fate, it provided Bosnia with a positive final memory and exposed
          the defensive frailties that have defined Qatar's difficult tournament.
        </p>

        <p>
          For Bosnia, the match was an opportunity to demonstrate the quality that earned
          them a place at the tournament. After a difficult opening two matches that left
          them on the brink of elimination, they responded with a professional performance
          that showcased their attacking potential. The three goals came from open play,
          set pieces, and a counter-attack, illustrating the variety in their offensive game.
        </p>

        <h2 id="qatar-defensive-issues">Qatar | Defensive Errors Prove Costly Again</h2>

        <p>
          Qatar's tournament will be remembered for the defensive lapses that undermined
          their competitive efforts. Across three group matches, they conceded goals from
          set pieces, individual errors, and structural breakdowns that a team at this level
          cannot afford. Against Bosnia, the pattern repeated: a promising attacking moment
          would be followed by a defensive mistake that undid the positive work.
        </p>

        <p>
          The challenge for Qatari football moving forward is clear. The investment in
          infrastructure and domestic development has been significant, but the gap between
          Asian Cup success and World Cup competitiveness remains substantial. Qatar's
          ability to close that gap will determine whether future qualification campaigns
          produce different outcomes.
        </p>

        <h2 id="bosnia-future">Bosnia | Building for the Future</h2>

        <p>
          For Bosnia and Herzegovina, the tournament ends with a win and a sense of what
          might have been. The squad has talent, particularly in attacking areas, but the
          defensive organization required to compete at this level was not consistently
          present across the three group matches. The experience gained by younger players
          in the squad will be valuable for the next qualification cycle.
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