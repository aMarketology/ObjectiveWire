import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArticlePage,
  Section,
  TableOfContents,
  DataTable,
  Notice,
  RelatedLinks,
  ExternalLinks,
} from '@/components/articles/ArticlePage';

export const revalidate = 3600;

const SLUG = 'world-cup-for-americans-2026-guide';
const URL_PATH = '/world-cup';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;

export const metadata: Metadata = {
  title: "How the World Cup Works for Americans | 2026 FIFA World Cup Guide",
  description:
    "New to the World Cup? Here's everything you need to know about the 2026 FIFA World Cup — the groups, format, rules, favorites, and how to watch. Written for American newcomers.",
  keywords: [
    'World Cup for Americans',
    'How World Cup works',
    '2026 FIFA World Cup explained',
    'World Cup beginners guide',
    'World Cup 2026 groups',
    'World Cup format explained',
    'World Cup 2026 schedule',
    'World Cup rules',
    'FIFA World Cup 2026',
    'World Cup USA Mexico Canada',
    'World Cup 2026 favorites',
    'World Cup 48 teams explained',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "How the World Cup Works for Americans | 2026 FIFA World Cup Guide",
    description:
      "New to the World Cup? Here's everything you need — groups, format, rules, favorites, and how to watch. The complete guide for American newcomers.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-15T12:00:00Z',
    modifiedTime: '2026-06-15T21:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'FIFA', 'Soccer', 'Explainer', 'USA'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "How the World Cup Works for Americans | 2026 FIFA World Cup Guide",
    description:
      "New to the World Cup? Groups, format, rules, favorites — everything explained for American newcomers.",
  },
};

const TOC = [
  { id: 'what-is-it', label: 'What Is the World Cup?' },
  { id: 'the-format', label: 'The Format: How Teams Advance' },
  { id: 'the-groups', label: 'The 12 Groups: Teams, Favorites & Rankings' },
  { id: 'match-rules', label: 'Match Rules, Cards & Extra Time' },
  { id: 'whats-happened', label: 'What Has Happened So Far' },
  { id: 'key-matchups', label: 'Key Matchups to Watch' },
  { id: 'how-to-watch', label: 'How to Watch in the USA' },
  { id: 'sources', label: 'Sources' },
];

export default function WorldCupForAmericansPage() {
  return (
    <ArticlePage
      title="How the World Cup Works for Americans (Newbies)"
      subtitle="Your complete guide to the 2026 FIFA World Cup — the biggest in history, right here in North America"
      category="Sports · World Cup 2026"
      lastUpdated="June 15, 2026"
      slug={SLUG}
      url={URL_PATH}
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/world-cup', label: 'World Cup 2026' },
      ]}
      tableOfContents={TOC}
      author={{
        name: 'Jack Brennan',
        role: 'Investigations Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
        bio: "Jack Brennan covers federal law, environmental regulation, and national security policy from Washington, D.C. He also reports on sports with the same forensic, document-first approach.",
      }}
      infoBox={{
        title: 'World Cup 2026 at a Glance',
        sections: [
          {
            heading: 'Tournament Basics',
            items: [
              { label: 'Full Name', value: '2026 FIFA World Cup' },
              { label: 'Dates', value: 'June 11 – July 19, 2026' },
              { label: 'Duration', value: '39 days' },
              { label: 'Total Matches', value: '104' },
              { label: 'Teams', value: '48 (record)' },
              { label: 'Groups', value: '12 groups of 4 teams' },
              { label: 'Host Nations', value: 'USA, Mexico, Canada' },
              { label: 'Host Cities', value: '16' },
            ],
          },
          {
            heading: 'The Final',
            items: [
              { label: 'Date', value: 'July 19, 2026' },
              { label: 'Venue', value: 'MetLife Stadium, New Jersey' },
            ],
          },
          {
            heading: 'Where to Watch (USA)',
            list: ['FOX', 'FS1', 'Telemundo', 'Peacock', 'Fubo'],
          },
          {
            heading: 'Written By',
            items: [
              { label: 'Author', value: 'Jack Brennan' },
              { label: 'Role', value: 'Reporter, ObjectWire' },
            ],
          },
        ],
      }}
      relatedLinks={[
        { href: '/world-cup/world-cup-2026-schedule-dates', label: 'World Cup 2026 Full Schedule & Dates' },
        { href: '/world-cup/world-cup-2026-group-stage-draw-all-48-groups', label: 'All 12 Groups: Complete Draw' },
        { href: '/world-cup/world-cup-2026-favorites-odds-preview', label: '2026 World Cup Favorites & Odds Preview' },
        { href: '/world-cup/world-cup-2026-metlife-stadium-new-york-final', label: 'MetLife Stadium: The World Cup Final Venue' },
        { href: '/world-cup/houston-nrg-stadium-world-cup-2026-ready', label: 'Houston NRG Stadium: World Cup 2026 Ready?' },
        { href: '/world-cup/sofi-stadium-world-cup-renovation-2026', label: 'SoFi Stadium World Cup 2026 Renovation' },
      ]}
    >
      {/* ------------------------------------------------------------------ */}
      {/* TABLE OF CONTENTS */}
      {/* ------------------------------------------------------------------ */}
      <TableOfContents items={TOC} />

      {/* ------------------------------------------------------------------ */}
      {/* INTRO */}
      {/* ------------------------------------------------------------------ */}
      <p className="text-lg leading-relaxed text-gray-700 mb-8">
        The <strong>2026 FIFA World Cup</strong> is the biggest sporting event in the history of the
        planet — and for the first time, it is being played in the United States, Mexico, and Canada.
        If you have never watched a World Cup before, or if soccer has always felt like a foreign
        language, this guide is for you. No prior knowledge required. By the end, you will know
        exactly what is happening, why it matters, and where to watch.
      </p>

      <Notice type="info">
        The tournament has already started (June 11, 2026). Jump to{' '}
        <a href="#whats-happened" className="text-blue-600 hover:underline">
          What Has Happened So Far
        </a>{' '}
        if you want to catch up immediately.
      </Notice>

      {/* ------------------------------------------------------------------ */}
      <Section id="what-is-it" title="What Is the World Cup?">
        <p>
          The FIFA World Cup is an international soccer tournament held every four years. Every
          country on Earth sends its national team — not club teams like Real Madrid or Manchester
          City, but a squad of the best players from that country — to compete to be crowned world
          champion. It is, by every measure, the most-watched sporting event on the planet. The 2018
          final alone drew over 1.1 billion TV viewers worldwide.
        </p>
        <p>
          The <strong>2026 edition is historic</strong> for two reasons:
        </p>
        <ul>
          <li>
            <strong>Record 48 teams</strong> are competing, up from 32 at every previous tournament
            since 1998. More countries, more drama, more upsets.
          </li>
          <li>
            <strong>Three host nations</strong> — the USA (11 cities), Mexico (3 cities), and Canada
            (2 cities) — share the 16 stadiums across the continent. This is the first time three
            countries have co-hosted a World Cup.
          </li>
        </ul>
        <p>
          The tournament runs for <strong>39 days</strong> with{' '}
          <strong>104 matches total</strong>, from the opening kick on June 11 in Mexico City all the
          way to the Final on July 19 at MetLife Stadium in East Rutherford, New Jersey.
        </p>
      </Section>

      {/* ------------------------------------------------------------------ */}
      <Section id="the-format" title="The Format: How Teams Advance">
        <p>
          Understanding how teams progress is the single most important thing to grasp. Here is the
          full path from the opening match to the Final.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Stage 1: The Group Stage (June 11 – ~July 2)</h3>
        <p>
          The 48 teams are divided into <strong>12 groups of 4 teams each</strong>. Every team plays
          the other three teams in its group once — this is called a round-robin. Points are awarded
          as follows:
        </p>
        <DataTable
          headers={['Result', 'Points Earned']}
          rows={[
            ['Win', '3 points'],
            ['Draw (tie)', '1 point each'],
            ['Loss', '0 points'],
          ]}
        />
        <p>
          After all three group-stage games are played, teams are ranked by points. The{' '}
          <strong>top two teams from each group</strong> automatically advance to the knockout
          rounds. The <strong>eight best third-place teams</strong> from across all 12 groups also
          advance, using a points-then-goal-difference tiebreaker. This means most teams play at
          least three matches, while finalists play up to eight total.
        </p>

        <Notice type="note">
          In group play, if two teams draw (tie after 90 minutes), the match ends as a draw and both
          sides earn 1 point. There is no extra time in the group stage.
        </Notice>

        <h3 className="text-xl font-bold mt-6 mb-3">Stage 2: Knockout Rounds (July 4 – July 19)</h3>
        <p>
          Once the group stage is complete, 32 teams remain and the single-elimination bracket
          begins. Lose once and you go home. Here is the knockout structure:
        </p>
        <DataTable
          headers={['Round', 'Teams', 'Approximate Dates']}
          rows={[
            ['Round of 32', '32 → 16', 'July 4–7'],
            ['Round of 16', '16 → 8', 'July 8–12'],
            ['Quarter-finals', '8 → 4', 'July 13–14'],
            ['Semi-finals', '4 → 2', 'July 16–17'],
            ['Third-place match', '3rd & 4th', 'July 18'],
            ['The Final', '2 teams', 'July 19 — MetLife Stadium, NJ'],
          ]}
        />
        <p>
          In knockout rounds, if the score is tied after 90 minutes, the teams play two additional
          15-minute extra time periods. If still tied, the match goes to a{' '}
          <strong>penalty shootout</strong> — five alternating kicks from the penalty spot per side,
          then sudden death if still level. It is the most nerve-wracking thing in sports.
        </p>
      </Section>

      {/* ------------------------------------------------------------------ */}
      <Section id="the-groups" title="The 12 Groups: Teams, Favorites & FIFA Rankings">
        <p>
          <strong>FIFA World Rankings</strong> are a global rating system that ranks all national
          teams from No. 1 (the best) to No. 210+ (the lowest). A lower number means a stronger
          team. Rankings are updated monthly and factor in recent results, opponent strength, and
          competition level. Rankings shown below are approximate pre-tournament positions as of
          early June 2026.
        </p>
        <p>
          For example: <em>Mexico ranked in the 14–17 range</em> means they are among the top 20
          teams in the world — a solid position that makes them a strong favorite in their group.
        </p>

        <Notice type="note">
          <strong>Disciplinary note:</strong> Yellow cards shown are per-match accumulations. Two
          yellows in the same match = automatic red card and ejection. Yellow cards reset after the
          group stage and again after the quarterfinals.
        </Notice>

        <DataTable
          headers={['Group', 'Teams (FIFA Rank ≈)', 'Favorite', 'Watch For']}
          rows={[
            [
              'A',
              'Mexico (≈14–17), South Korea (≈22–25), Czechia (≈40s), South Africa (≈60s)',
              'Mexico',
              'South Korea counters; South Africa as giant-killers. The opener featured 3 red cards total.',
            ],
            [
              'B',
              'Canada (≈27–30), Bosnia & Herzegovina (≈60s–70s), Qatar (≈50s), Switzerland (≈17–20)',
              'Switzerland',
              'Canada (home crowd advantage), Qatar',
            ],
            [
              'C',
              'Brazil (≈5–6), Morocco (≈7–11), Haiti (≈80s+), Scotland (≈35–40)',
              'Brazil',
              'Morocco (2022 semi-finalists), Scotland',
            ],
            [
              'D',
              'USA (≈14–17), Paraguay (≈35–40), Australia (≈25–30), Türkiye (≈20–25)',
              'USA',
              'Türkiye (flair & pace), Australia (aerial threat)',
            ],
            [
              'E',
              'Germany (≈9–10), Curaçao (≈80s+), Ivory Coast (≈40s), Ecuador (≈20–25)',
              'Germany',
              'Ivory Coast; debutant Curaçao',
            ],
            [
              'F',
              'Netherlands (≈7–8), Japan (≈15–20), Sweden (≈20–30), Tunisia (≈30–40)',
              'Netherlands',
              'Japan (tactical sharpness), Sweden',
            ],
            [
              'G',
              'Belgium (≈8–9), Egypt (≈30s), Iran (≈20–25), New Zealand (≈80s+)',
              'Belgium',
              'Iran (defensive strength), New Zealand',
            ],
            [
              'H',
              'Spain (≈2–3), Cabo Verde (≈65–70), Saudi Arabia (≈50–60), Uruguay (≈15–20)',
              'Spain or Uruguay',
              'Cabo Verde (debutants), Saudi Arabia (shock potential)',
            ],
            [
              'I',
              'France (≈2–3), Senegal (≈15), Iraq (≈60s–70s), Norway (≈25–30)',
              'France',
              'Senegal (athleticism), Norway (Haaland-led)',
            ],
            [
              'J',
              'Argentina (≈1), Algeria (≈25–30), Austria (≈20–25), Jordan (≈60s+)',
              'Argentina (defending champions)',
              'Algeria and Jordan',
            ],
            [
              'K',
              'Portugal (≈5), DR Congo (≈60s–70s), Uzbekistan (≈50s), Colombia (≈10–15)',
              'Portugal',
              'Colombia (creativity), Uzbekistan',
            ],
            [
              'L',
              'England (≈4), Croatia (≈10–12), Ghana (≈60s–70s), Panama (≈30s)',
              'England',
              'Croatia (veteran experience), Ghana',
            ],
          ]}
        />

        <p className="text-sm text-gray-500 mt-2 italic">
          * Rankings are approximate as of early June 2026. Disciplinary records reflect opening
          days only.
        </p>
      </Section>

      {/* ------------------------------------------------------------------ */}
      <Section id="match-rules" title="Match Rules, Cards & Extra Time">
        <p>
          If you have never watched a full soccer match, here is everything you need to know to
          follow along without getting confused.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">Match Duration</h3>
        <p>
          Standard matches are <strong>90 minutes</strong>, split into two 45-minute halves with a
          15-minute halftime break. The clock counts up (not down) and never stops. At the end of
          each half, the referee adds <em>stoppage time</em> — typically 3–10+ minutes — to account
          for delays from injuries, substitutions, goal celebrations, and VAR reviews.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">Scoring</h3>
        <p>
          Goals are scored by kicking or heading the ball into the opposing team's net. The team
          with more goals at the end of the match wins. In the group stage, equal scores end as a
          draw. In knockout rounds, ties go to extra time and potentially penalties (see above).
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">Yellow & Red Cards</h3>
        <DataTable
          headers={['Card', 'What It Means']}
          rows={[
            ['Yellow card', 'A caution/warning for a foul, time-wasting, or unsporting behavior. Two yellows in one match = automatic red.'],
            ['Red card', 'Immediate ejection. The player leaves the field and cannot be replaced — the team plays with 10 men for the rest of the match.'],
            ['Straight red', 'A single red card for a serious foul, violent conduct, or dangerous play.'],
          ]}
        />

        <h3 className="text-xl font-bold mt-6 mb-2">Penalty Kicks (in the Box)</h3>
        <p>
          If a defender commits a foul inside their own penalty area (the large rectangle in front
          of the goal), the attacking team is awarded a <strong>penalty kick</strong> — a one-on-one
          shot from the penalty spot, 12 yards from goal. Goalkeepers can move laterally but must
          stay on the goal line until the ball is struck.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">VAR (Video Assistant Referee)</h3>
        <p>
          VAR is a video review system used to check goals, penalties, red cards, and mistaken
          identity. When a review is triggered, you will see the referee point to an ear or look at
          a screen on the sideline. Decisions can take anywhere from 30 seconds to several minutes.
          It is frequently controversial.
        </p>
      </Section>

      {/* ------------------------------------------------------------------ */}
      <Section id="whats-happened" title="What Has Happened So Far">
        <p>
          As of mid-June 2026, the group stage is underway and has already delivered drama, chaos,
          and history.
        </p>
        <ul>
          <li>
            <strong>June 11 — Opening match:</strong> Mexico beat South Africa 2–0 at Estadio
            Azteca in Mexico City. The match was immediately historic for the wrong reason: a record{' '}
            <strong>three red cards</strong> in an opener (2 for South Africa, 1 for Mexico),
            setting a chaotic tone for the tournament.
          </li>
          <li>
            <strong>USA 4–1 Paraguay:</strong> The host Americans delivered a dominant statement
            result in Group D. Paraguay accumulated 5 yellow cards after the loss.
          </li>
          <li>
            <strong>Canada 1–1 Bosnia:</strong> Canada, playing in front of home fans, were held to
            a draw by Bosnia and Herzegovina in Group B.
          </li>
          <li>
            <strong>Germany 7–1 Curaçao:</strong> Germany announced themselves as genuine
            contenders with an emphatic demolition of debutants Curaçao in Group E.
          </li>
          <li>
            <strong>Overall discipline:</strong> Approximately 25 yellow cards and 3 red cards have
            been issued in the opening days, with the Mexico vs. South Africa opener setting the
            tone.
          </li>
        </ul>
        <p>
          Several groups are still in their early stages, but the tournament has already produced
          genuine surprise results and competitive underdog performances.
        </p>
      </Section>

      {/* ------------------------------------------------------------------ */}
      <Section id="key-matchups" title="Key Matchups to Watch">
        <p>
          As the group stage progresses toward the knockout rounds, here are the storylines and
          clashes worth following closely:
        </p>
        <ul>
          <li>
            <strong>Argentina vs. the field (Group J):</strong> Defending champions Argentina,
            ranked No. 1, are expected to cruise. But upsets happen. Every match they play will be
            closely watched.
          </li>
          <li>
            <strong>France vs. Senegal (Group I):</strong> A meeting of African heritage and
            European power, with Senegal ranked in the top 15 and led by some of Europe's most
            elite club players.
          </li>
          <li>
            <strong>Netherlands vs. Japan (Group F):</strong> Two tactically sophisticated teams
            with strong recent World Cup pedigrees.
          </li>
          <li>
            <strong>England vs. Croatia (Group L):</strong> A rematch of the 2018 semi-final, which
            Croatia won on their way to the final. England will want revenge.
          </li>
          <li>
            <strong>USA vs. Türkiye (Group D):</strong> A potential group decider with Türkiye's
            flair and pace posing the most dangerous test for the American hosts.
          </li>
          <li>
            <strong>Late group-stage three-way battles:</strong> With 8 third-place spots available
            for 12 groups, the final round of group matches will be high-stakes for dozens of teams
            fighting to stay alive.
          </li>
        </ul>
      </Section>

      {/* ------------------------------------------------------------------ */}
      <Section id="how-to-watch" title="How to Watch in the USA">
        <p>
          The 2026 World Cup has the widest broadcast footprint in American history. Here is where
          to find the games:
        </p>
        <DataTable
          headers={['Channel / Platform', 'Language', 'Notes']}
          rows={[
            ['FOX', 'English', 'Primary English broadcaster. Free over-the-air.'],
            ['FS1', 'English', 'Cable/satellite. Carries overflow and mid-tier matches.'],
            ['Telemundo', 'Spanish', 'Free over-the-air Spanish language broadcast.'],
            ['Peacock', 'English', 'NBC streaming. Select matches; subscription required.'],
            ['Fubo TV', 'Both', 'Streaming bundle with FOX, FS1, and Telemundo.'],
          ]}
        />
        <p>
          Match times vary widely. Early group games are scheduled in morning and early afternoon
          slots (Eastern Time) to accommodate European broadcasters, while marquee games tend to
          kick off at 3 PM or 6 PM ET. Download a fixture tracking app (FIFA+, Google Sports, ESPN)
          or check{' '}
          <Link href="/world-cup/world-cup-2026-schedule-dates" className="text-blue-600 hover:underline">
            our full schedule page
          </Link>{' '}
          to plan ahead.
        </p>
        <Notice type="info">
          <strong>Tip:</strong> Pick a team — ideally one you have a personal connection to, or just
          pick an underdog — and follow their journey. The World Cup rewards emotional investment.
        </Notice>
      </Section>

      {/* ------------------------------------------------------------------ */}
      <Section id="sources" title="Sources">
        <ExternalLinks
          links={[
            {
              href: 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026',
              label: 'FIFA Official Site — 2026 FIFA World Cup Canada/Mexico/USA',
            },
            {
              href: 'https://en.wikipedia.org/wiki/2026_FIFA_World_Cup_draw',
              label: 'Wikipedia — 2026 FIFA World Cup Draw',
            },
            {
              href: 'https://www.espn.com/soccer/league/fifawc',
              label: 'ESPN — FIFA World Cup Coverage',
            },
          ]}
        />
      </Section>
    </ArticlePage>
  );
}
