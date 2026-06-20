import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-canada-vs-switzerland-group-b-decider';
const URL_PATH = '/world-cup/2026/canada-vs-switzerland-group-b-decider';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;

const OG_IMAGE = '/thumbnails/world-cup-2026-canada-vs-switzerland-group-b-decider.jpg';

export const metadata: Metadata = {
  title: 'Canada vs Switzerland | World Cup 2026 Group B Decider Preview',
  description:
    "Canada's massive goal difference advantage from their 6–0 win over Qatar means Switzerland must beat the co-hosts outright to claim top spot in Group B on June 24 in Vancouver.",
  keywords: [
    'Canada vs Switzerland World Cup 2026',
    'World Cup 2026 Group B decider',
    'Canada Switzerland June 24',
    'Canada World Cup 2026 group winner',
    'Switzerland World Cup 2026',
    'World Cup 2026 Group B standings',
    'World Cup 2026 preview',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Canada vs Switzerland | World Cup 2026 Group B Decider',
    description: 'Canada need a draw. Switzerland need a win. Group B first place on the line in Vancouver. Preview by Jack Brennan.',
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-20T12:00:00Z',
    modifiedTime: '2026-06-20T12:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Canada', 'Switzerland', 'Group B', 'Preview', 'World Cup Decider'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canada vs Switzerland | World Cup 2026 Group B Decider',
    description: 'Canada need a draw. Switzerland need three points. June 24 in Vancouver decides Group B. Preview.',
  },
};

export default function CanadaSwitzerlandDeciderPage() {
  return (
    <NewsArticle
      title="Canada vs Switzerland | World Cup 2026 Group B Decider: The Premium Path on the Line"
      subtitle="Canada need only a draw to claim first place thanks to their 6–0 demolition of Qatar. Switzerland must win outright. The June 24 Vancouver clash decides who gets the favorable knockout road."
      category="World Cup 2026 · Group B Preview"
      categoryColor="purple"
      topicTag="sports"
      publishDate="June 20, 2026"
      readTime="5 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Canada vs Switzerland | World Cup 2026 Group B Decider: The Premium Path on the Line' }}
      tags={['World Cup 2026', 'Canada', 'Switzerland', 'Group B', 'Preview', 'World Cup Decider']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Canada vs Switzerland Preview', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'canada-6-qatar-0', title: 'Canada 6–0 Qatar | Group B Report', url: '/world-cup/2026/canada-6-qatar-0-group-b', publishDate: 'June 15, 2026', category: 'Sports' },
        { slug: 'canada-bosnia', title: 'Canada 1–1 Bosnia | Group B Report', url: '/world-cup/2026/canada-1-bosnia-1-group-b', publishDate: 'June 13, 2026', category: 'Sports' },
        { slug: 'switzerland-qatar', title: 'Switzerland 1–1 Qatar | Group B Report', url: '/world-cup/2026/switzerland-1-qatar-1-group-b', publishDate: 'June 13, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Canada vs Switzerland on June 24 in Vancouver decides first place in World Cup 2026 Group B.',
        'Canada hold a massive goal difference advantage from their 6–0 win over Qatar — a draw is sufficient to top the group.',
        'Switzerland must win outright; any other result sends Canada through as group winners.',
        'First place in Group B earns a Round of 32 matchup against a third-place finisher rather than a group winner — a significant structural advantage in the 48-team format.',
        'Canada have home crowd support in Vancouver and the momentum of their most emphatic group-stage performance of the tournament.',
      ]}
      faqItems={[
        {
          question: 'What result does Canada need to win Group B?',
          answer: 'Canada need only a draw against Switzerland on June 24 to finish first in Group B. Their 6–0 win over Qatar gave them a goal difference advantage that Switzerland cannot overcome without a win.',
        },
        {
          question: 'What does Switzerland need to top Group B?',
          answer: 'Switzerland must beat Canada outright. A draw is not enough — Canada\'s goal difference is too large for Switzerland to leapfrog them without three points from the final fixture.',
        },
        {
          question: 'Why does finishing first in Group B matter?',
          answer: 'In the 2026 World Cup\'s 48-team format, group winners face third-place finishers in the Round of 32 rather than second-place teams from other groups. The structural difference in opponent quality makes first place significantly more valuable than second.',
        },
        {
          question: 'When and where is Canada vs Switzerland?',
          answer: 'Canada vs Switzerland is scheduled for June 24, 2026 at BC Place in Vancouver — one of the World Cup co-host venues.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Canada's 6–0 destruction of Qatar in their second group fixture did more than deliver
          three points. It built a goal difference buffer so substantial that the co-hosts can
          walk into BC Place on June 24 knowing that a single point against Switzerland is
          enough to claim the top position in Group B and every structural advantage that comes
          with it.
        </p>

        <p>
          Switzerland, meanwhile, carry a different kind of pressure. Their opening 1–1 draw
          with Qatar — in which Boualem Khoukhi's stoppage-time equalizer denied them what
          should have been a routine win — cost them the clean group-stage record they needed.
          Against Canada, there is no margin for error. They must win. Anything less sends Canada
          through as group winners.
        </p>

        <h2 id="what-is-at-stake">What Is Actually at Stake</h2>

        <p>
          In the expanded 48-team World Cup format, the difference between first and second place
          in a group is not merely symbolic. Group winners face third-place finishers from
          designated groups in the Round of 32. Second-place teams face the group winners from
          adjacent bracket pairings — teams who, by definition, have already demonstrated they
          can top competitive groups.
        </p>

        <p>
          The practical translation: first place is a demonstrably easier path to the Round of
          16. Second place invites what the tournament community has already begun calling the
          "meat grinder" bracket — a route through which comfortable progression is considerably
          less guaranteed. Canada understand this. Switzerland understand it. Both sides will
          approach June 24 accordingly.
        </p>

        <h2 id="canada-position">Canada | Home Advantage and a Simple Mandate</h2>

        <p>
          Canada's tactical mandate heading into this fixture is the clearest possible: do not
          lose. That is both simpler and more psychologically complex than it sounds. Teams
          that know they need only a draw often become passive, ceding the initiative to their
          opponent and inviting pressure they then struggle to contain.
        </p>

        <p>
          The Canadian coaching staff will need to manage that psychological risk carefully.
          The 6–0 against Qatar generated momentum and confidence, but Switzerland are a
          completely different proposition. Their organized midfield structure, press resistance,
          and defensive discipline make them one of the tournament's most consistent sides when
          they are functioning properly. Canada cannot simply absorb and counter against Switzerland
          the way they could against a Qatar side whose discipline collapsed under the first
          sign of pressure.
        </p>

        <p>
          Home advantage remains real. BC Place in Vancouver with a sold-out Canadian crowd
          behind a team one point from group leadership is a significant environment. Canada's
          physical intensity and high press are amplified in front of crowds that generate that
          level of noise and expectation. Switzerland have faced hostile atmospheres in European
          competition, but a World Cup co-host crowd in full voice is a different category.
        </p>

        <h2 id="switzerland-position">Switzerland | Three Points or Nothing</h2>

        <p>
          Switzerland's approach to this match has one governing constraint: they must win.
          Every tactical decision, every substitution, every in-game adjustment will be filtered
          through that single requirement. Winning 1–0 is as good as winning 3–0 in terms of
          group position — both scenarios deliver first place assuming results elsewhere hold.
          But losing, or drawing, ends their group-winner ambitions entirely.
        </p>

        <p>
          Switzerland's midfield structure is the core of their identity. They press in organized
          waves, recover shape rapidly, and use the full-back positions aggressively to create
          overloads in wide areas. Against Canada's counter-attacking approach, the challenge
          will be pressing high enough to prevent Canada from playing through the lines while
          maintaining enough defensive cover to prevent the transition goals that cost them
          against Qatar in the dying seconds.
        </p>

        <h2 id="key-tactical-battle">The Central Tactical Contest</h2>

        <p>
          This fixture will be decided in the transition phases. Canada are most dangerous when
          they recover possession in their own half and run at space behind a high defensive
          line. Switzerland are most dangerous when they press from the front and force errors
          in Canada's build-up. Both teams want to impose their preferred transition game on the
          other.
        </p>

        <p>
          Whichever midfield asserts control over those moments — Canada's runners exploiting
          space, or Switzerland's press trapping Canada's defensive build-out — will most likely
          determine the result. Switzerland need to win the ball high and translate pressure
          into goals before Canada's home-crowd momentum becomes overwhelming. Canada need to
          absorb the inevitable early Swiss pressure and make them pay on the counter.
        </p>

        <p>
          June 24 in Vancouver. Group B's premium path up for grabs. One draw secures Canada's
          place in history as a World Cup group winner on home soil. Switzerland need to take it
          from them.
        </p>

      </div>
    </NewsArticle>
  );
}
