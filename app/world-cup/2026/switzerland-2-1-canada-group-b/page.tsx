import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-switzerland-2-1-canada-group-b';
const URL_PATH = '/world-cup/2026/switzerland-2-1-canada-group-b';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;

const OG_IMAGE = '/thumbnails/world-cup-2026-switzerland-2-1-canada-group-b.jpg';

export const metadata: Metadata = {
  title: 'Switzerland 2-1 Canada | World Cup 2026 Group B Match Report',
  description:
    'Switzerland edged out co-hosts Canada 2-1 in a tight tactical duel in Vancouver to claim top spot in Group B. Canada still advance with a strong goal difference.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Switzerland 2-1 Canada | World Cup 2026 Group B',
    description: 'Switzerland claim Group B supremacy with a 2-1 win over co-hosts Canada in Vancouver. Both teams advance. Report by Jack Brennan.',
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-24T22:30:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Switzerland', 'Canada', 'Group B', 'Match Report', 'Co-Hosts'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Switzerland 2-1 Canada | World Cup 2026 Group B',
    description: 'Switzerland top Group B with a 2-1 win over co-hosts Canada in Vancouver. Both teams advance. Report by Jack Brennan.',
  },
};

export default function SwitzerlandCanadaPage() {
  return (
    <NewsArticle
      title="Switzerland 2-1 Canada | Swiss Claim Group B Supremacy in Tight Tactical Duel in Vancouver"
      subtitle="The battle for Group B supremacy saw Switzerland edge out co-hosts Canada 2-1 in a tight tactical duel in Vancouver. While Canada's strong goal difference still kept them in an enviable position, the Swiss claimed the ultimate bragging rights heading into the knockout stage"
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
      thumbnail={{ src: OG_IMAGE, alt: 'Switzerland 2-1 Canada | Swiss Claim Group B Supremacy' }}
      tags={['World Cup 2026', 'Switzerland', 'Canada', 'Group B', 'Match Report', 'Co-Hosts']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Switzerland vs Canada', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'bosnia-3-1-qatar', title: 'Bosnia 3-1 Qatar | Group B Report', url: '/world-cup/2026/bosnia-3-1-qatar-group-b', publishDate: 'June 24, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Switzerland defeated Canada 2-1 in Vancouver to finish top of Group B.',
        'Canada, despite the loss, advance to the Round of 32 as second-place finishers with a strong goal difference.',
        'The match was a tight tactical duel between two well-organized sides, decided by Swiss efficiency in key moments.',
        'Both Group B teams advance to the knockout stage, with Switzerland earning the more favorable bracket path.',
      ]}
      faqItems={[
        {
          question: 'What was the final score of Switzerland vs Canada?',
          answer: 'Switzerland won 2-1 in Vancouver, claiming top spot in Group B.',
        },
        {
          question: 'Did Canada advance to the knockout stage?',
          answer: 'Yes. Canada finished second in Group B and advanced to the Round of 32 despite the loss to Switzerland.',
        },
        {
          question: 'Who finished top of Group B?',
          answer: 'Switzerland finished top of Group B with the win over Canada, earning a favorable bracket path in the Round of 32.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          The battle for Group B supremacy saw Switzerland edge out co-hosts Canada 2-1 in a
          tight tactical duel in Vancouver. While Canada's strong goal difference still kept
          them in an enviable position to advance, the Swiss claimed the ultimate bragging
          rights heading into the next stage, finishing top of the group and earning the
          favorable bracket path that comes with it.
        </p>

        <p>
          The match was a study in contrasting styles. Canada, buoyed by a passionate home
          crowd at BC Place, started with intensity and purpose, pressing high and forcing
          Switzerland into early defensive work. The Canadians took the lead through a
          well-worked attacking move that carved through the Swiss backline, sending the
          home supporters into a frenzy.
        </p>

        <h2 id="swiss-response">Switzerland | Composed Under Pressure</h2>

        <p>
          Switzerland's response was characteristic of a side that has consistently punched
          above its weight at major tournaments. Rather than panic after conceding, the Swiss
          maintained their structural discipline, trusted their tactical plan, and waited for
          the game to open up. Their equalizer arrived through a set piece, a classic Swiss
          route to goal that has served them across multiple tournament cycles.
        </p>

        <p>
          The winning goal came in the second half, the product of a patient build-up that
          stretched Canada's defensive shape and created space in the final third. Switzerland's
          ability to control the tempo of the match after taking the lead was impressive,
          absorbing Canadian pressure without conceding clear chances and seeing out the
          result with the composure of a team that has been here before.
        </p>

        <h2 id="canada-path">Canada | A Positive Campaign Despite the Result</h2>

        <p>
          For Canada, the loss does not diminish what has been a successful group stage
          campaign. As co-hosts, the pressure to perform was significant, and Canada responded
          by securing the results needed to advance. Their goal difference, built on the back
          of a dominant 6-0 win over Qatar in the opening round, ensures they enter the Round
          of 32 with confidence and the knowledge that they can compete with established
          tournament sides.
        </p>

        <p>
          The Canadian project, which has been building steadily over the past decade, has
          reached a new milestone. Advancing past the group stage as co-hosts is the minimum
          expectation, but the manner of their performances suggests this team is capable of
          more. The Round of 32 will be their first knockout match in a men's World Cup since
          1986, and the experience will be invaluable regardless of the result.
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