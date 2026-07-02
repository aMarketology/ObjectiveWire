import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-brazil-2-1-japan-round-of-32';
const URL_PATH = '/world-cup/2026/brazil-2-1-japan-round-of-32';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;
const OG_IMAGE = '/thumbnails/world-cup-2026-brazil-2-1-japan-round-of-32.jpg';

export const metadata: Metadata = {
  title: 'Brazil 2-1 Japan | World Cup 2026 Round of 32 Match Report',
  description:
    'Brazil survived a disciplined, defensive Japan to advance 2-1 in the Round of 32. A second-half moment of individual brilliance broke a stubborn deadlock as the Selecao narrowly avoided a major World Cup scare.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Brazil 2-1 Japan | World Cup 2026 Round of 32',
    description: 'Brazil advance but Japan push them to the absolute limit. A tense Round of 32 thriller. Report by Jack Brennan.',
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-29T23:00:00Z',
    modifiedTime: '2026-06-29T23:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Brazil', 'Japan', 'Round of 32', 'Match Report'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brazil 2-1 Japan | World Cup 2026 Round of 32',
    description: 'Brazil survive. Japan were extraordinary. A second-half moment of brilliance finally separates the two sides. Report by Jack Brennan.',
  },
};

export default function BrazilJapanR32Page() {
  return (
    <NewsArticle
      title="Brazil 2-1 Japan: Selecao Survive a World Cup Scare as Japan Push the Titans to Their Limit"
      subtitle="A defensively disciplined Japan side refused to yield for more than 90 minutes before a moment of individual brilliance in the second half finally separated the two teams, sending Brazil through to the Round of 16 by the narrowest of margins."
      category="World Cup 2026 · Round of 32"
      categoryColor="green"
      topicTag="sports"
      publishDate="June 29, 2026"
      readTime="5 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Brazil 2-1 Japan World Cup 2026 Round of 32 match report' }}
      tags={['World Cup 2026', 'Brazil', 'Japan', 'Round of 32', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Brazil vs Japan', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'brazil-3-0-scotland-group-c', title: 'Brazil 3-0 Scotland | Group C Report', url: '/world-cup/2026/brazil-3-0-scotland-group-c', publishDate: 'June 24, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Brazil defeated Japan 2-1 in the Round of 32 on June 29, 2026, to advance to the last 16.',
        'Japan were defensively disciplined throughout, frustrating the Selecao and keeping the match locked until a second-half moment of individual brilliance finally broke the deadlock.',
        'Brazil are through but the performance raised questions about their resilience against organized low-block defenses in the later knockout rounds.',
        'Japan exit the tournament having proven their quality as genuine World Cup contenders, not merely capable spoilers.',
      ]}
      faqItems={[
        {
          question: 'What was the score in Brazil vs Japan at the World Cup 2026?',
          answer: 'Brazil defeated Japan 2-1 in the Round of 32 on June 29, 2026.',
        },
        {
          question: 'How did Brazil advance past Japan?',
          answer: 'A moment of individual brilliance in the second half broke a stubborn Japan defensive block. Brazil held on to win 2-1 and progress to the Round of 16.',
        },
        {
          question: 'Did Japan threaten to eliminate Brazil?',
          answer: 'Yes. Japan were highly disciplined and defensive, keeping the match tight and pushing the Selecao to their absolute limits before Brazil found a decisive second-half goal.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          The <strong>Selecao</strong> are through. Just. Brazil navigated the Round of 32 on June 29 with
          a narrow 2-1 victory over Japan, but the scoreline flatters the ease of their passage. For long
          stretches of a tense, tightly contested knockout match, Japan were every inch Brazil's equal,
          and at moments, threatened to become something far more significant, a genuine upset waiting to happen.
        </p>

        <p>
          Brazil arrived at this fixture as one of the tournament favorites, fresh from topping their
          group with convincing displays. Japan arrived as disciplined opponents, tactically organized
          and psychologically prepared to absorb pressure and strike on the counter. For the first hour,
          the Japanese defensive structure held firm and their game plan executed almost perfectly.
        </p>

        <h2>Japan's Defensive Masterclass</h2>

        <p>
          The opening exchanges belonged to Japan in terms of organization. Their defensive block was
          compact, their midfield lines tight, and their willingness to sacrifice attacking ambition
          in service of structural discipline was absolute. Brazil probed, circulated the ball with
          their familiar fluid movement, but found no way through a wall that refused to bend.
        </p>

        <p>
          Brazil's technical quality was never in doubt, but quality alone cannot unlock a defense
          built on collective sacrifice. Japan's players ran, tracked, recovered, and pressed with
          an intensity that had the entire Brazilian squad frustrated. The partisan crowd inside the
          stadium grew nervous as the half-time whistle approached with the match level.
        </p>

        <h2>The Moment That Decided It</h2>

        <p>
          When the breakthrough finally came, it arrived not through a team move but through an
          individual act of brilliance, the kind of moment that only the very best players can
          produce when a match requires something beyond the conventional. The goal broke Japanese
          resistance and shifted the momentum entirely.
        </p>

        <p>
          Japan responded and pulled a goal back, refusing to simply accept defeat. The final
          quarter of the match became a nervy, compressed exercise in Brazilian game management
          against Japanese determination. The Selecao held on, but only just, and the post-match
          mood in the Brazilian camp reflected the difficulty of what they had faced.
        </p>

        <h2>What This Result Means</h2>

        <p>
          Brazil advance to the Round of 16, where they will be expected to face stronger opposition
          and produce more convincing performances. The questions raised by this match, specifically
          around their ability to break down organized, low-block defenses without resorting to
          individual invention, are real and will not disappear before the next fixture.
        </p>

        <p>
          For Japan, the tournament ends here, but not without distinction. They demonstrated
          against one of the greatest football nations in the world that they belong on this stage.
          Their approach, their discipline, and their refusal to yield until the very end made
          this a match Brazil will have to study carefully, regardless of the result. Japan leave
          2026 with their reputation enhanced and their World Cup ambitions pointing firmly toward
          2030.
        </p>

      </div>
    </NewsArticle>
  );
}
