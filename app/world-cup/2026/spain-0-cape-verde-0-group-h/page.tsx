import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-spain-0-cape-verde-0-group-h';
const URL_PATH = '/world-cup/2026/spain-0-cape-verde-0-group-h';
const CANONICAL = `https://www.objectwire.org${URL_PATH}`;

export const metadata: Metadata = {
  title: 'Spain 0–0 Cape Verde | World Cup 2026 Group H Match Report',
  description:
    "40-year-old goalkeeper Vozinha kept a heroic clean sheet as debutants Cape Verde held World Cup favorites Spain to a 0–0 draw in Atlanta — one of the greatest upsets in World Cup history.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Spain 0–0 Cape Verde | World Cup 2026 Group H',
    description: "One of the greatest shocks in World Cup history. 40-year-old Vozinha is heroic as Cape Verde hold Spain to a goalless draw. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-15T21:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Spain', 'Cape Verde', 'Group H', 'Match Report'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spain 0–0 Cape Verde | World Cup 2026',
    description: 'The shock of the tournament. Cape Verde are extraordinary. 40-year-old Vozinha is heroic. Report by Jack Brennan.',
  },
};

export default function SpainCapeVerdePage() {
  return (
    <NewsArticle
      title="Spain 0–0 Cape Verde: One of the Greatest World Cup Shocks — Vozinha, 40, Is Heroic"
      subtitle="Cape Verde's debutant defensive masterclass holds reigning European champions Spain scoreless in one of football's all-time great upsets"
      category="World Cup 2026 · Group H"
      categoryColor="red"
      topicTag="sports"
      publishDate="June 15, 2026"
      readTime="5 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      tags={['World Cup 2026', 'Spain', 'Cape Verde', 'Group H', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Spain vs Cape Verde', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'saudi-arabia-uruguay', title: 'Saudi Arabia 1–1 Uruguay | Group H Report', url: '/world-cup/2026/saudi-arabia-1-uruguay-1-group-h', publishDate: 'June 15, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Spain are held 0–0 by debutants Cape Verde in one of the greatest World Cup shocks ever recorded.',
        "Cape Verde deploy a 5-4-1 formation and execute a near-perfect defensive game plan.",
        "40-year-old goalkeeper Vozinha produces a heroic performance to deny Spain's attack.",
        "Spain's center forward Mikel Oyarzabal goes 30 minutes without touching the ball — a record.",
        "Even Lamine Yamal's second-half introduction fails to unlock Cape Verde's defense.",
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Football history was made on Monday evening in Atlanta, and its principal architect was a
          40-year-old goalkeeper standing between the posts for Cape Verde. Vozinha — one of the more
          extraordinary figures in any sport at any major international tournament — produced a
          performance of such concentrated brilliance that Spain, the reigning European champions
          and one of the 2026 World Cup's strongest favorites, could not score a single goal against
          a team making their debut on football's biggest stage.
        </p>

        <p>
          The final scoreline — Spain 0, Cape Verde 0 — will be listed in databases and record books
          for as long as the game is played. In terms of statistical improbability, context, and
          sheer sporting drama, this is one of the greatest results the World Cup has ever produced.
        </p>

        <h2 id="cape-verde-plan">The Plan and Its Execution</h2>

        <p>
          Cape Verde's coaching staff deserve enormous credit for what was clearly a meticulously
          prepared defensive structure. A 5-4-1 formation. Banks of players behind the ball. Minimal
          risk in transition. Maximum compactness in every defensive zone. The kind of game plan
          that requires every player to execute their role perfectly for 90 minutes without the
          margin for error that a more expansive approach might allow.
        </p>

        <p>
          Spain's center forward Mikel Oyarzabal went the first 30 minutes of the match without
          touching the ball. Since these records have been kept, it is the longest any player has
          gone without a touch at a World Cup. It is a statistical representation of how completely
          Cape Verde suffocated Spain's attacking patterns — denying the Spaniards the ball in
          central areas, forcing everything wide, and eliminating the passing lanes through which
          Spain normally operate.
        </p>

        <h2 id="vozinha">Vozinha at 40</h2>

        <p>
          When Spain did find ways through — and they did, particularly after Lamine Yamal entered
          the game as a second-half substitute — Vozinha was there. At 40 years old. Facing a
          Spanish attack that contained some of the most technically gifted forwards in world football.
          Saving everything.
        </p>

        <p>
          His reflexes were extraordinary. His positioning was immaculate. His communication with
          the defenders in front of him — organizing, directing, reassuring — appeared to give
          Cape Verde's backline a confidence that might otherwise have crumbled under sustained
          pressure. Vozinha became a global story within 90 minutes and will remain one long
          after this tournament has ended.
        </p>

        <h2 id="spain">Spain's Crisis and Cape Verde's Glory</h2>

        <p>
          Yamal's introduction gave Spain greater directness and purpose in the final 30 minutes.
          Without him in the starting lineup, Spain's attack lacked the unpredictability and
          dribbling threat that forces defensive lines to split open. With him on, the pressure
          increased. Cape Verde held firm regardless.
        </p>

        <p>
          Spain's title credentials are now under immediate scrutiny. A heavy favorite failing to
          score against a World Cup debutant in their opening match is the kind of result that
          generates questions about squad depth, tactical rigidity, and whether the weight of
          expectation has been properly managed.
        </p>

        <p>
          And Cape Verde. Cape Verde, a nation of 550,000 people on a volcanic archipelago off the
          coast of West Africa, have captured the imagination of the entire football world. A defensive
          masterclass, an ageless goalkeeper, and a result that nobody — nobody — predicted. The
          World Cup has produced its first genuine story, and it belongs to the Blue Sharks.
        </p>

      </div>
    </NewsArticle>
  );
}
