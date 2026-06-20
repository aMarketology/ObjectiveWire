import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-ivory-coast-1-ecuador-0-group-e';
const URL_PATH = '/world-cup/2026/ivory-coast-1-ecuador-0-group-e';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;

const OG_IMAGE = '/thumbnails/world-cup-2026-ivory-coast-1-ecuador-0-group-e.jpg';
export const metadata: Metadata = {
  title: 'Ivory Coast 1–0 Ecuador | World Cup 2026 Group E Match Report',
  description:
    "Amad Diallo's dramatic 90th-minute chip lifted Ivory Coast past Ecuador 1–0 in Philadelphia, sending the Elephants level with Germany at the top of Group E.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Ivory Coast 1–0 Ecuador | World Cup 2026 Group E',
    description: "Amad Diallo's stunning last-minute chip wins it for Ivory Coast. Ecuador rue wastefulness in front of goal. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-14T22:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Ivory Coast', 'Ecuador', 'Group E', 'Match Report'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ivory Coast 1–0 Ecuador | World Cup 2026',
    description: 'Amad Diallo chips in at 90 minutes. Ivory Coast top Group E alongside Germany. Report by Jack Brennan.',
  },
};

export default function IvoryCoastEcuadorPage() {
  return (
    <NewsArticle
      title="Ivory Coast 1–0 Ecuador: Amad Diallo's 90th-Minute Chip Delivers a Classic"
      subtitle="A match that seemed headed for a draw explodes in the final seconds as Diallo produces a stunning finish to give the Elephants all three points"
      category="World Cup 2026 · Group E"
      categoryColor="orange"
      topicTag="sports"
      publishDate="June 14, 2026"
      readTime="4 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Ivory Coast 1–0 Ecuador: Amad Diallos 90th-Minute Chip Delivers a Classic' }}
      tags={['World Cup 2026', 'Ivory Coast', 'Ecuador', 'Group E', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Ivory Coast vs Ecuador', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'germany-curacao', title: 'Germany 7–1 Curaçao | Group E Report', url: '/world-cup/2026/germany-7-curacao-1-group-e', publishDate: 'June 14, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Ivory Coast beat Ecuador 1–0 on a dramatic 90th-minute goal from Amad Diallo in Philadelphia.',
        'Both teams struck the woodwork during a tightly contested second half.',
        'Ecuador were wasteful in front of goal despite creating quality opportunities.',
        'Ivory Coast join Germany at the top of Group E on three points after Day 4.',
        'Ecuador now face must-win pressure in their remaining group fixtures.',
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          For 89 minutes, Lincoln Financial Field in Philadelphia housed a match that looked destined
          for a 0–0 draw. Both teams had struck the woodwork. Both had squandered chances that, in
          the cold light of review, they will regard as moments that should have changed the match's
          outcome. The goalkeepers remained untested where it mattered most. Then Amad Diallo happened.
        </p>

        <p>
          His 90th-minute chip — arriving in the final seconds of what had been a tightly contested,
          ultimately goalless afternoon — was the kind of moment that defines a tournament's early
          narrative. Not just because of the goal itself, but because of what it did: it sent Ivory
          Coast to the top of Group E alongside Germany, left Ecuador in a must-win situation, and
          gave the Elephants their most significant World Cup opening result in years.
        </p>

        <h2 id="the-match">90 Minutes of Near-Misses</h2>

        <p>
          Both sides came into this match knowing that three points would be invaluable in a group
          where Germany's 7–1 demolition of Curaçao had set a tone of dominance. Ecuador, ranked
          above Ivory Coast in most pre-tournament assessments, approached the match with ambition
          — pressing high and looking to use their physical attributes and technical quality to
          dictate terms.
        </p>

        <p>
          Ivory Coast responded with their own aggression, and the result was a match with genuine
          edge and several moments of genuine quality. Both sides struck the woodwork. Ivory Coast
          had chances. Ecuador had chances. The goalkeeping at both ends held firm when required,
          and for long stretches it seemed as if neither side would find a way through.
        </p>

        <p>
          Ecuador's wastefulness in front of goal will be their central regret. They created enough
          to win comfortably in a different match, and the fact that they did not convert any of
          those opportunities is the kind of finishing-day lesson that World Cups punish relentlessly.
        </p>

        <h2 id="diallo">The Diallo Moment</h2>

        <p>
          Amad Diallo's finish was breathtaking in its composure and technique. With time almost
          up, a late Ivory Coast attacking move broke toward goal. Diallo found himself with the
          ball in a position that invited a chip over the advancing goalkeeper. He assessed the
          situation in less than a second and executed perfectly — the ball looping up and over
          before dropping precisely inside the far post.
        </p>

        <p>
          The Ivory Coast bench erupted. The Elephants' supporters — who had spent the second half
          watching chances come and go with increasing anxiety — released everything in a single
          roar. It was the goal of Day 4.
        </p>

        <h2 id="analysis">Group E Picture</h2>

        <p>
          Germany and Ivory Coast now sit on maximum points, with Ecuador and Curaçao pointless
          after one round. The group shape is clearer than expected — two dominant teams at the
          top, two sides already in trouble at the bottom.
        </p>

        <p>
          For Ecuador, the path forward requires a win in their next fixture. They have the quality.
          They showed it in the chances they created. But chances unsaved are a statistic that means
          nothing, and Ecuador must find a way to convert when it matters or their tournament will
          end before the knockout stage.
        </p>

      </div>
    </NewsArticle>
  );
}
