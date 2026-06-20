import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-canada-1-bosnia-1-group-b';
const URL_PATH = '/world-cup/2026/canada-1-bosnia-1-group-b';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;

const OG_IMAGE = '/thumbnails/world-cup-2026-canada-1-bosnia-1-group-b.jpg';
export const metadata: Metadata = {
  title: 'Canada 1–1 Bosnia and Herzegovina | World Cup 2026 Group B Match Report',
  description:
    "Canada drew 1–1 with Bosnia and Herzegovina in their home opener in Toronto. A Jovo Lukić header was cancelled out by Cyle Larin's late substitute equalizer.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Canada 1–1 Bosnia and Herzegovina | World Cup 2026 Group B',
    description: "Canada's home opener ends in a draw after Kolašinac's clearance and Larin's equalizer. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-12T22:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Canada', 'Bosnia', 'Group B', 'Match Report'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canada 1–1 Bosnia | World Cup 2026 Group B',
    description: "Larin saves Canada from a home loss. Kolašinac's clearance is the moment of the match. Report by Jack Brennan.",
  },
};

export default function CanadaBosniaPage() {
  return (
    <NewsArticle
      title="Canada 1–1 Bosnia and Herzegovina: Larin Rescues Point in Rollercoaster Toronto Opener"
      subtitle="A Kolašinac clearance and a late equalizer from substitute Larin define Canada's dramatic home World Cup debut"
      category="World Cup 2026 · Group B"
      categoryColor="red"
      topicTag="sports"
      publishDate="June 12, 2026"
      readTime="4 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Canada 1–1 Bosnia and Herzegovina: Larin Rescues Point in Rollercoaster Toronto Opener' }}
      tags={['World Cup 2026', 'Canada', 'Bosnia and Herzegovina', 'Group B', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Canada vs Bosnia', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'usa-paraguay', title: 'USA 4–1 Paraguay | Group D Report', url: '/world-cup/2026/usa-4-paraguay-1-group-d', publishDate: 'June 12, 2026', category: 'Sports' },
        { slug: 'switzerland-qatar', title: 'Switzerland 1–1 Qatar | Group B Report', url: '/world-cup/2026/switzerland-1-qatar-1-group-b', publishDate: 'June 13, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Canada draw 1–1 with Bosnia and Herzegovina in their World Cup home opener in Toronto.',
        'Jovo Lukić heads Bosnia into the lead after a glorious Kolašinac clearance denied Canada first.',
        'Sead Kolašinac makes a crucial goal-line clearance to preserve the Bosnia lead.',
        'Substitute Cyle Larin equalizes late to spare Canada the embarrassment of a home defeat.',
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Canada's first home World Cup match since the tournament last came to North America in 1994
          was everything a rollercoaster should be — and not entirely in a good way for the co-hosts.
          The 1–1 draw with Bosnia and Herzegovina at Toronto's stadium on Friday evening produced
          two moments of individual brilliance, a dramatic late equalizer, and a nagging sense that
          Canada left something behind them on the night.
        </p>

        <p>
          The atmosphere was expectant and partisan from the opening whistle. Canada, competing on
          home soil before their own fans for the first time in a World Cup, had the crowd behind
          them and the weight of a nation's expectation pressing down on their shoulders.
        </p>

        <h2 id="first-half">Kolašinac: Villain and Hero in One</h2>

        <p>
          Sead Kolašinac became the match's defining figure within the span of a single sequence that
          will be replayed for years. Bosnia and Herzegovina's veteran defender first made a subtly
          brilliant play from a corner — heading the ball sharply onward to Jovo Lukić, whose header
          found the net for what was a hammer of an opening goal. It was a glorious combination, a
          moment of European quality in a co-host's stadium.
        </p>

        <p>
          Later, with Canada pressing for an equalizer and Bosnia clinging to a 1–0 lead, Kolašinac
          produced one of the defensive interventions of the tournament. A Canada attack broke through,
          the shot struck the crossbar, and with the rebound dropping dangerously, Kolašinac reacted
          fastest to clear the ball off the line. It was a moment that denied Canada what would have
          been a go-ahead goal — possibly a match-winning goal — in a single, instinctive action.
          His fingerprints were on both sides of the scoreboard.
        </p>

        <h2 id="larin">Larin's Lifeline</h2>

        <p>
          Canada were not to be denied entirely. Substitute Cyle Larin, introduced to add attacking
          threat and urgency, delivered on that brief with a late equalizer that ignited the stadium
          and spared his country the deflating outcome of losing a World Cup home match. The goal
          came from sustained pressure in the final stages, Canada throwing men forward and Bosnia
          beginning to wilt under the relentless home crowd noise.
        </p>

        <p>
          The final whistle brought relief more than celebration. A point on home soil is better
          than nothing, but Canada will know that to advance from Group B, they will need considerably
          more than this.
        </p>

        <h2 id="analysis">What This Means</h2>

        <p>
          Canada's performance raised legitimate questions. Bosnia, ranked significantly lower in
          FIFA's global standings, competed with them comfortably for long stretches, scored first,
          and had the better of several passages of play. That Canada required a late substitute to
          rescue a point is not the tone Jesse Marsch's side would have wanted to set.
        </p>

        <p>
          Bosnia, meanwhile, leave Toronto with a point that represents genuine progress for a
          footballing nation still developing its World Cup identity. They showed character, tactical
          intelligence, and individual quality. Their remaining Group B fixtures will determine
          whether this point becomes the foundation for something greater.
        </p>

        <p>
          Group B is now remarkably open, with Switzerland — the group favorites — drawing 1–1 with
          Qatar a day later. Canada need a win in their next fixture to assert any kind of control
          over their group-stage destiny.
        </p>

      </div>
    </NewsArticle>
  );
}
