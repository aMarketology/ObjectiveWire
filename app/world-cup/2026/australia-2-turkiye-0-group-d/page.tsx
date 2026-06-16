import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-australia-2-turkiye-0-group-d';
const URL_PATH = '/world-cup/2026/australia-2-turkiye-0-group-d';
const CANONICAL = `https://www.objectwire.org${URL_PATH}`;

export const metadata: Metadata = {
  title: 'Australia 2–0 Türkiye | World Cup 2026 Group D Match Report',
  description:
    "Australia shocked Türkiye 2–0 in Monterrey, with Nestory Irankunda's brilliant first touch and finish followed by Connor Metcalfe's long-range strike in one of Day 3's biggest surprises.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Australia 2–0 Türkiye | World Cup 2026 Group D',
    description: "Irankunda's world-class finish and Metcalfe's thunderbolt give Australia a shock 2–0 win over Türkiye. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-13T22:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Australia', 'Türkiye', 'Group D', 'Match Report'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Australia 2–0 Türkiye | World Cup 2026',
    description: 'The shock of Day 3. Irankunda and Metcalfe give Australia a stunning 2–0 win. Report by Jack Brennan.',
  },
};

export default function AustraliaTurkiyePage() {
  return (
    <NewsArticle
      title="Australia 2–0 Türkiye: The Shock of Day 3 Sets Up a USA Showdown"
      subtitle="Irankunda's stunning finish and Metcalfe's long-range thunderbolt give the Socceroos a victory that reshapes Group D"
      category="World Cup 2026 · Group D"
      categoryColor="green"
      topicTag="sports"
      publishDate="June 13, 2026"
      readTime="4 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      tags={['World Cup 2026', 'Australia', 'Türkiye', 'Group D', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Australia vs Türkiye', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'usa-paraguay', title: 'USA 4–1 Paraguay | Group D Report', url: '/world-cup/2026/usa-4-paraguay-1-group-d', publishDate: 'June 12, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Australia defeat Türkiye 2–0 in Monterrey in one of the biggest surprises of the opening days.',
        "Nestory Irankunda's 27th-minute first touch and finish is world-class.",
        "Connor Metcalfe's 75th-minute strike from outside the box seals the victory.",
        'Australia join the USA at the top of Group D on three points.',
        "Türkiye, considered a dark horse, are made to look rudderless and must regroup immediately.",
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          When the Day 3 schedule was being previewed, Türkiye were considered the dangerous unknown —
          the dark horse with flair, pace, and genuine knockout-round potential in a competitive Group D.
          By the time Estadio BBVA in Monterrey had emptied on Saturday evening, that narrative lay
          in pieces. Australia, counter-attacking with surgical precision, delivered a 2–0 victory
          that qualified as one of the most shocking results of the tournament's opening weekend.
        </p>

        <p>
          The Socceroos had already earned a reputation in recent tournaments for their organization,
          their set-piece threat, and their ability to hold shape under pressure before transitioning
          quickly. Against Türkiye, all of those qualities were on display — but it was individual
          quality, not just system, that made the difference.
        </p>

        <h2 id="irankunda">Irankunda: The Moment That Changes Everything</h2>

        <p>
          Nestory Irankunda's 27th-minute goal will be one of the most replayed clips of this World Cup.
          Australia broke from their own half with pace and precision. The ball arrived to Irankunda
          in a position where a lesser player would have taken a touch, looked up, and then shot. He
          needed none of that processing time.
        </p>

        <p>
          His first touch killed the ball instantly while simultaneously setting it exactly where he
          needed it for the finish. One fluid motion. The shot that followed was equally composed —
          placed precisely enough that the goalkeeper had no chance. It was the kind of goal that
          announces a player to a global audience in a single moment.
        </p>

        <p>
          Türkiye spent the next 45 minutes throwing everything at Australia's backline in search of
          a way back into the match. Australia strapped in, defended deep when required, and held
          firm with a defensive organization that belied their underdog status in the global
          rankings.
        </p>

        <h2 id="metcalfe">Metcalfe Seals It</h2>

        <p>
          Any lingering Türkiye hope evaporated in the 75th minute when Connor Metcalfe — picking
          up the ball just outside the penalty area — unleashed a drive that gave the goalkeeper
          no chance. The strike was thunderous, accurate, and perfectly timed for a team that
          needed to kill the match before Türkiye's attacking talent could conjure a comeback.
        </p>

        <p>
          The 2–0 margin was comprehensive and deserved. Australia were the better team across
          the 90 minutes and their counter-attacking efficiency suggested a coaching staff that
          had prepared meticulously for exactly the kind of game Türkiye would want to play.
        </p>

        <h2 id="analysis">Group D Reshuffled</h2>

        <p>
          After Day 3, Group D has a shape nobody predicted. Australia sit alongside the United States
          on three points, while Türkiye and Paraguay are both without a point and already facing
          potential elimination pressure in their next fixtures.
        </p>

        <p>
          The USA vs. Australia clash — now inevitable and enormous in its group-stage consequences
          — becomes the fixture everyone in Group D is watching. Both teams have shown they can score
          and that they can defend. Whoever wins it will all-but-guarantee a top-two finish. It is
          already setting up as one of the group stage's most compelling matchups.
        </p>

        <p>
          For Türkiye, the result demands an immediate response. A team considered a genuine
          tournament contender has been made to look rudderless. Their remaining games are now
          must-win situations. Whether they have the character to respond, or whether this defeat
          signals a deeper structural problem in their squad, will define their tournament.
        </p>

      </div>
    </NewsArticle>
  );
}
