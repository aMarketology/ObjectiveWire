import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-netherlands-2-japan-2-group-f';
const URL_PATH = '/world-cup/2026/netherlands-2-japan-2-group-f';
const CANONICAL = `https://www.objectwire.org${URL_PATH}`;

export const metadata: Metadata = {
  title: 'Netherlands 2–2 Japan | World Cup 2026 Group F Match Report',
  description:
    "Daichi Kamada's 88th-minute equalizer completed a stunning Japan comeback from 2–1 down to draw 2–2 with the Netherlands in Dallas, with three goals coming in a wild 13-minute second-half spell.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Netherlands 2–2 Japan | World Cup 2026 Group F',
    description: "Kamada's 88th-minute equalizer produces one of the tournament's great moments as Japan refuse to lose. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-14T23:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Netherlands', 'Japan', 'Group F', 'Match Report'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Netherlands 2–2 Japan | World Cup 2026',
    description: "Kamada at 88 minutes. Japan are extraordinary. The game of the tournament so far. Report by Jack Brennan.",
  },
};

export default function NetherlandsJapanPage() {
  return (
    <NewsArticle
      title="Netherlands 2–2 Japan: Kamada's 88th-Minute Strike Produces the Tournament's Best Match"
      subtitle="Three goals in 13 second-half minutes and a last-gasp equalizer from Kamada make this the defining match of the opening days"
      category="World Cup 2026 · Group F"
      categoryColor="purple"
      topicTag="sports"
      publishDate="June 14, 2026"
      readTime="5 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      tags={['World Cup 2026', 'Netherlands', 'Japan', 'Group F', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Netherlands vs Japan', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'sweden-tunisia', title: 'Sweden 5–1 Tunisia | Group F Report', url: '/world-cup/2026/sweden-5-tunisia-1-group-f', publishDate: 'June 14, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Netherlands and Japan draw 2–2 in Dallas in the match of the tournament so far.',
        'Three goals scored in 13 second-half minutes as momentum swings dramatically.',
        "Daichi Kamada's 88th-minute equalizer denies the Netherlands a win they looked set to claim.",
        'Japan prove they are genuine Group F contenders, not just capable spoilers.',
        "Dutch defensive vulnerability under pressure is now a concern heading into tougher fixtures.",
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Sport produces its greatest moments when the outcome appears decided and then isn't.
          AT&T Stadium in Dallas provided exactly that on Sunday night — a match between the Netherlands
          and Japan that, for much of its running time, seemed to be moving toward a comfortable Dutch
          victory before Daichi Kamada reminded an entire tournament that the scoreboard is only
          final when the referee blows the whistle.
        </p>

        <p>
          Kamada's 88th-minute equalizer will be one of the most replayed moments of this World Cup.
          Not just because of when it came — though the timing was extraordinary — but because of
          what it represented: Japan, written off by many analysts before this tournament began,
          refusing to accept defeat against one of Europe's strongest sides.
        </p>

        <h2 id="chaos">Thirteen Minutes of Madness</h2>

        <p>
          The match's first hour was controlled and relatively tactical. Then, in the space of
          13 second-half minutes, all hell broke loose. Three goals, multiple momentum swings,
          and the kind of pulsating intensity that only the World Cup stage can generate.
        </p>

        <p>
          The Netherlands took a 2–1 lead during this period and appeared to have done enough.
          Their attacking quality — which had been building throughout the match — finally
          translated into what looked like a decisive advantage. With the clock ticking toward
          90, the victory seemed secured.
        </p>

        <p>
          Japan had other plans. Their pressing intensified. Their confidence, rather than wilting
          under the deficit, seemed to increase. The Dutch defense — composed for most of the night
          — began to show signs of the defensive frailty that had plagued them in recent tournament
          football when required to hold a result under sustained late pressure.
        </p>

        <h2 id="kamada">The Equalizer</h2>

        <p>
          Kamada's goal was technically excellent and mentally something more. To score when your
          team needs it most, in the 88th minute, against a Dutch side of this quality, in your
          team's biggest World Cup fixture in recent memory — that requires a particular kind of
          composure and courage. Kamada demonstrated both.
        </p>

        <p>
          The goal itself — precise, powerful, and placed into a corner that gave the Netherlands
          goalkeeper no realistic chance — will be celebrated in Japan for years. The scenes of
          Japanese supporters in the stadium, of players collapsing onto the turf in relief and
          joy, captured exactly what the World Cup does that no other tournament can match.
        </p>

        <h2 id="analysis">What Both Teams Take Away</h2>

        <p>
          For Japan, this is the confirmation of their status as genuine Group F contenders.
          They were not content to accept defeat. Their tactical discipline and attacking intelligence
          posed consistent problems for a Dutch side that expected to manage the game once ahead.
          Japan look capable of causing significant damage in the knockout rounds if they can
          sustain this level.
        </p>

        <p>
          For the Netherlands, the dropped points are disappointing, but the larger concern is
          the question of their defensive organization under late-game pressure. It is a pattern
          that has appeared in Dutch football at multiple recent major tournaments. Resolving it
          before the knockout stage is not optional — it is essential.
        </p>

        <p>
          Group F simultaneously witnessed Sweden's 5–1 demolition of Tunisia on the same day —
          a result that makes the group's eventual standings far from certain. All four teams
          remain in mathematical contention after the opening round, and the matches ahead
          will be full of the kind of drama that Dallas delivered on Sunday night.
        </p>

      </div>
    </NewsArticle>
  );
}
