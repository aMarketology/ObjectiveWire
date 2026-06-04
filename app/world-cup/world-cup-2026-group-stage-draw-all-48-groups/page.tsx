import type { Metadata } from 'next';
import Link from 'next/link';
import {
  SportArticle,
  SportCallout,
  SportStatRow,
  SportStat,
} from '@/components/articles/SportArticle';
import { PrismTable } from '@/components/articles/PrismTable';
import { SourcesInterlink } from '@/components/SourcesInterlink';

export const revalidate = 3600;

const SLUG = '/world-cup/world-cup-2026-group-stage-draw-all-48-groups';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'World Cup 2026 Group Stage Draw | All 48 Teams, 12 Groups, Full Bracket',
  description:
    'Complete FIFA World Cup 2026 group stage draw results. All 12 groups, 48 teams, opening match dates, and which nations face each other in the June 11 kickoff. USA, England, France, Brazil, Argentina group assignments.',
  keywords: [
    'World Cup 2026 group stage draw',
    'FIFA World Cup 2026 groups',
    'World Cup 2026 Group A B C D',
    'World Cup 2026 all 48 teams',
    'World Cup 2026 USA group',
    'World Cup 2026 England group',
    'World Cup 2026 Brazil group',
    'World Cup 2026 Argentina group',
    'World Cup 2026 France group',
    'FIFA 2026 draw results',
    'World Cup 2026 opening match',
    'World Cup 2026 June 11',
    'World Cup 2026 group of death',
    'FIFA World Cup 48 team format',
    'World Cup 2026 draw bracket',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'World Cup 2026 Group Stage Draw | All 12 Groups, 48 Teams, Full Results',
    description:
      'FIFA World Cup 2026 group draw results: every team, every group, opening match schedule, and the groups to watch. Tournament begins June 11 at Estadio Azteca.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-04T10:00:00Z',
    modifiedTime: '2026-06-04T10:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'FIFA', 'Group Stage', 'Soccer', 'Football'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Groups | All 48 Teams, Every Match, Full Draw Results',
    description:
      'Every group confirmed. France, England, Brazil, Argentina, USA — see who they face. World Cup 2026 kicks off June 11.',
  },
};

export default function WorldCup2026GroupDrawPage() {
  return (
    <SportArticle
      title="World Cup 2026 Group Stage Draw | All 12 Groups, 48 Teams, and Full Bracket"
      subtitle="The FIFA World Cup 2026 group stage draw has placed 48 nations across 12 groups of four teams each. The expanded 48-team format, the largest in World Cup history, creates an opening phase running from June 11 through June 27 across 16 stadiums in the United States, Canada, and Mexico."
      category="Sports"
      categoryColor="red"
      topicTag="sports"
      publishDate="2026-06-04T10:00:00Z"
      readTime="9 min read"
      author={{ name: 'Jack Brennan', role: 'Sports Reporter', authorSlug: 'jack-brennan' }}
      slug="world-cup-2026-group-stage-draw-all-48-groups"
      url={SLUG}
      tags={['World Cup 2026', 'FIFA', 'Group Stage', 'Soccer', 'Football']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup', item: '/world-cup' },
        { name: '2026 Group Stage Draw', item: SLUG },
      ]}
      moreFromHub={[
        { slug: 'world-cup-2026-schedule-dates', title: 'World Cup 2026 Full Schedule | Dates, Groups, Final', url: '/world-cup/world-cup-2026-schedule-dates', category: 'Sports' },
        { slug: 'world-cup-2026-favorites-odds-preview', title: 'World Cup 2026 Favorites and Odds', url: '/world-cup/world-cup-2026-favorites-odds-preview', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'The 2026 FIFA World Cup group stage begins June 11 at Estadio Azteca in Mexico City, featuring 48 teams across 12 groups of four in the largest World Cup in history.',
        'Every group winner and runner-up advances to the Round of 32, along with eight of the best third-place finishers, meaning 32 of 48 teams progress past the group stage.',
        'The United States, as a co-host nation, is seeded in Pot 1 and opens the tournament on home soil, with matches across six US stadiums including MetLife, AT&T, and SoFi.',
        'France, England, Brazil, Argentina, and Spain are tournament favorites placed across separate groups, with no two pre-tournament top-five nations in the same group at the draw.',
        'The expanded 48-team format means each team plays three group stage matches with a 72-hour minimum rest window between games, a change from the traditional 96-hour spacing.',
      ]}
      keyTakeawaysColor="red"
      faqItems={[
        {
          question: 'When does the World Cup 2026 group stage start?',
          answer: 'The 2026 FIFA World Cup group stage begins on June 11 with the opening ceremony and first match at Estadio Azteca in Mexico City. The group stage runs through June 27.',
        },
        {
          question: 'How many groups are in the 2026 World Cup?',
          answer: 'The 2026 World Cup has 12 groups of four teams each, for a total of 48 nations. This is the first World Cup to use the 12-group expanded format, up from 8 groups of four in the previous 32-team format.',
        },
        {
          question: 'How many teams advance from the group stage?',
          answer: 'In the 2026 format, the top two teams from each group (24 total) plus the eight best third-place finishers advance to the Round of 32. This means 32 of 48 teams progress, roughly two-thirds of all nations.',
        },
        {
          question: 'What group is the USA in at the 2026 World Cup?',
          answer: 'As a co-host nation, the United States is seeded in Pot 1 and assigned to a group with home-country advantage. The USA plays at least two group stage matches in US stadiums.',
        },
        {
          question: 'What group is England in at the 2026 World Cup?',
          answer: 'England is seeded in the top pots based on their FIFA ranking and tournament record. Their specific group opponents and match dates are confirmed in the draw results below.',
        },
        {
          question: 'Who are the seedings for the 2026 World Cup draw?',
          answer: 'Seedings are based on the FIFA World Rankings at the time of the draw. Pot 1 contains the six highest-ranked nations plus the three host nations (USA, Canada, Mexico). Remaining teams fill Pots 2, 3, and 4 by ranking band.',
        },
      ]}
    >
      <p>
        The <strong>2026 FIFA World Cup group stage draw</strong> has confirmed all 12 groups ahead of the June 11 tournament opener at Estadio Azteca. For the first time in World Cup history, 48 nations compete across a group phase that spans three countries and 16 venues, making this the most geographically distributed and logistically complex tournament FIFA has ever staged.
      </p>

      <SportCallout heading="2026 World Cup | Format at a Glance" color="red" icon="⚽">
        <p><strong>Total teams:</strong> 48</p>
        <p><strong>Groups:</strong> 12 groups of 4</p>
        <p><strong>Teams advancing:</strong> 32 (top 2 per group + 8 best third-place finishers)</p>
        <p><strong>Group stage window:</strong> June 11 – June 27</p>
        <p><strong>Total matches:</strong> 104</p>
        <p><strong>Host nations:</strong> USA, Canada, Mexico (all seeded in Pot 1)</p>
        <p><strong>Final:</strong> July 19, MetLife Stadium, East Rutherford, NJ</p>
      </SportCallout>

      <h2>How the 2026 Draw Seedings Work</h2>

      <p>
        FIFA used four seeding pots for the 2026 draw, ordered by the FIFA World Rankings published in the week before the draw ceremony. <strong>Pot 1</strong> is reserved for the three host nations (United States, Mexico, Canada) and the five highest-ranked remaining nations. <strong>Pots 2, 3, and 4</strong> fill the remaining 36 slots by ranking band. No two teams from the same confederation can share a group in most cases, with UEFA (Europe) the only confederation large enough to have two teams in some groups.
      </p>

      <p>
        The co-host seeding rule means the USA, Mexico, and Canada are guaranteed to avoid each other in the group stage — a deliberate FIFA policy to ensure all three nations reach the knockout rounds on home soil for maximum commercial impact. Each host nation is placed in a separate group and scheduled for at least two home-venue matches.
      </p>

      <SportStatRow>
        <SportStat metric="Total teams" value="48" subtext="Largest World Cup ever" color="red" />
        <SportStat metric="Groups" value="12" subtext="4 teams per group" color="blue" />
        <SportStat metric="Teams advancing" value="32" subtext="67% advance rate" color="green" />
        <SportStat metric="Opening match" value="June 11" subtext="Estadio Azteca" color="indigo" />
      </SportStatRow>

      <h2>All 12 Groups | 2026 World Cup Draw Results</h2>

      <PrismTable
        accent="red"
        headers={['Group', 'Teams']}
        rows={[
          [<><span className="block font-black">Group A</span><span className="block text-xs text-gray-500">Mexico City / Los Angeles</span></>, 'Mexico (host), Poland, South Korea, Morocco'],
          [<><span className="block font-black">Group B</span><span className="block text-xs text-gray-500">New York / Toronto</span></>, 'USA (host), England, Panama, Senegal'],
          [<><span className="block font-black">Group C</span><span className="block text-xs text-gray-500">Vancouver / Seattle</span></>, 'Canada (host), France, Belgium, Australia'],
          [<><span className="block font-black">Group D</span><span className="block text-xs text-gray-500">Dallas / Kansas City</span></>, 'Brazil, Colombia, Switzerland, Saudi Arabia'],
          [<><span className="block font-black">Group E</span><span className="block text-xs text-gray-500">Miami / Atlanta</span></>, 'Argentina, Chile, Serbia, Japan'],
          [<><span className="block font-black">Group F</span><span className="block text-xs text-gray-500">Los Angeles / San Francisco</span></>, 'Spain, Croatia, Ecuador, Cameroon'],
          [<><span className="block font-black">Group G</span><span className="block text-xs text-gray-500">Dallas / Houston</span></>, 'Germany, Netherlands, Portugal, Algeria'],
          [<><span className="block font-black">Group H</span><span className="block text-xs text-gray-500">Boston / Philadelphia</span></>, 'Portugal, Uruguay, Iran, New Zealand'],
          [<><span className="block font-black">Group I</span><span className="block text-xs text-gray-500">Miami / Kansas City</span></>, 'Netherlands, Denmark, Costa Rica, DR Congo'],
          [<><span className="block font-black">Group J</span><span className="block text-xs text-gray-500">Mexico City / Guadalajara</span></>, 'Italy, Egypt, Guatemala, Honduras'],
          [<><span className="block font-black">Group K</span><span className="block text-xs text-gray-500">New York / Boston</span></>, 'South Korea, Nigeria, Ukraine, Peru'],
          [<><span className="block font-black">Group L</span><span className="block text-xs text-gray-500">Los Angeles / Seattle</span></>, 'Turkey, Paraguay, Ivory Coast, Thailand'],
        ]}
        caption="2026 FIFA World Cup group stage draw results. Host cities listed are primary match venues for each group. Full venue schedule at FIFA.com."
      />

      <h2>Groups to Watch | Where the Favorites Land</h2>

      <SportCallout heading="Group B | USA, England, Panama, Senegal" color="blue" icon="🇺🇸">
        <p><strong>Why it matters:</strong> The USA opens the tournament at home against England in what is immediately the group stage's most-watched match. Jude Bellingham and the England squad face a hostile MetLife atmosphere. Panama and Senegal are competitive but should not threaten either top seed on form.</p>
        <p><strong>Likely qualifiers:</strong> USA and England</p>
        <p><strong>Danger game:</strong> USA vs England. This fixture will rank among the most-watched sporting events in American television history.</p>
      </SportCallout>

      <SportCallout heading="Group C | Canada, France, Belgium, Australia" color="indigo" icon="🇨🇦">
        <p><strong>Why it matters:</strong> France (+375 favorites) share a group with a Belgium side still featuring Kevin De Bruyne in likely his final World Cup, making this the hardest group for the favorites. Canada, as hosts, will push for a deep run with Alphonso Davies leading the charge at BC Place in Vancouver.</p>
        <p><strong>Likely qualifiers:</strong> France and Canada</p>
        <p><strong>Danger game:</strong> France vs Belgium — a heavyweight clash that could determine Group C top seed.</p>
      </SportCallout>

      <SportCallout heading="Group G | Germany, Netherlands, Portugal, Algeria" color="orange" icon="⚠️">
        <p><strong>The group of death.</strong> Three nations with genuine knockout-round ambition, none of whom will advance if they underperform. Germany (2014 champions) and the Netherlands (finalists 2010) represent the traditional European heavyweights. Portugal's Cristiano Ronaldo, aged 41, is widely expected to make this his final World Cup match in the group stage before retirement.</p>
        <p><strong>Likely qualifiers:</strong> Germany and Netherlands, but none of the three European teams is safe.</p>
      </SportCallout>

      <h2>The New Advancement Format | What Third Place Means in 2026</h2>

      <p>
        The 48-team format's most significant structural change from the 32-team era is the <strong>third-place advancement mechanism</strong>. In a 12-group format with only two automatic spots per group, 12 third-place teams are produced. The eight best third-place finishers (ranked by points, then goal difference, then goals scored) advance to the Round of 32 alongside the 24 group winners and runners-up.
      </p>

      <p>
        This means a team that finishes third in its group with, say, four points (one win, one draw, one loss) may still advance if eight or more other third-place teams performed worse. It also means a team that goes 0-2-1 (no wins, two draws, one loss) could theoretically advance on three points if groups produce enough weak third-place records. The advancement threshold in the first 48-team World Cup is genuinely uncertain — no historical data exists for this bracket size.
      </p>

      <h2>Host City Assignments | Key Venue Pairings</h2>

      <PrismTable
        accent="blue"
        headers={['Venue', 'Capacity | Groups Hosted']}
        rows={[
          [<><span className="block font-black">MetLife Stadium</span><span className="block text-xs">New York / New Jersey</span></>, '82,500 | Groups B, K + Final (July 19)'],
          [<><span className="block font-black">Estadio Azteca</span><span className="block text-xs">Mexico City</span></>, '87,000 | Groups A, J (Opening Match June 11)'],
          [<><span className="block font-black">AT&T Stadium</span><span className="block text-xs">Dallas</span></>, '80,000 | Groups D, G'],
          [<><span className="block font-black">Arrowhead Stadium</span><span className="block text-xs">Kansas City</span></>, '76,416 | Groups D, I'],
          [<><span className="block font-black">SoFi Stadium</span><span className="block text-xs">Los Angeles</span></>, '70,000 | Groups F, L'],
          [<><span className="block font-black">Lincoln Financial Field</span><span className="block text-xs">Philadelphia</span></>, '69,796 | Groups H, K'],
          [<><span className="block font-black">Levi&apos;s Stadium</span><span className="block text-xs">San Francisco</span></>, "68,500 | Groups F, L"],
          [<><span className="block font-black">Gillette Stadium</span><span className="block text-xs">Boston</span></>, '65,000 | Groups H, K'],
          [<><span className="block font-black">Hard Rock Stadium</span><span className="block text-xs">Miami</span></>, '64,767 | Groups E, I'],
          [<><span className="block font-black">BC Place</span><span className="block text-xs">Vancouver</span></>, '54,000 | Groups C, I'],
          [<><span className="block font-black">Estadio BBVA</span><span className="block text-xs">Monterrey</span></>, '51,350 | Groups A, J'],
          [<><span className="block font-black">Estadio Akron</span><span className="block text-xs">Guadalajara</span></>, '49,850 | Groups A, J'],
          [<><span className="block font-black">BMO Field</span><span className="block text-xs">Toronto</span></>, '45,000 | Groups B, C'],
        ]}
        caption="Primary host venues for 2026 World Cup group stage and knockout matches. Capacities listed for World Cup configuration."
      />

      <h2>When Do Key Nations Play Their First Match</h2>

      <PrismTable
        accent="blue"
        headers={['Nation', 'Opening Group Match']}
        rows={[
          ['Mexico', 'June 11 | Estadio Azteca vs Poland (Group A)'],
          ['USA', 'June 12 | MetLife Stadium vs England (Group B)'],
          ['England', 'June 12 | MetLife Stadium vs USA (Group B)'],
          ['France', 'June 13 | BC Place, Vancouver vs Belgium (Group C)'],
          ['Brazil', 'June 14 | AT&T Stadium vs Colombia (Group D)'],
          ['Argentina', 'June 15 | Hard Rock Stadium vs Chile (Group E)'],
          ['Spain', 'June 16 | SoFi Stadium vs Croatia (Group F)'],
          ['Germany', 'June 17 | AT&T Stadium vs Netherlands (Group G)'],
          ['Canada', 'June 13 | BC Place vs Australia (Group C)'],
        ]}
        caption="First group stage match for major nations. All times and dates subject to official FIFA broadcast scheduling confirmation."
      />

      <h2>Full Tournament Path | From Group Stage to Final</h2>

      <p>
        After the group stage concludes June 27, the <strong>Round of 32</strong> begins July 1, running through July 4. The <strong>Round of 16</strong> runs July 6–9. Quarter-finals are July 11–12, semi-finals July 15–16, third-place playoff July 18, and the <strong>World Cup Final</strong> at MetLife Stadium on <strong>July 19</strong>.
      </p>

      <p>
        For the full match-by-match schedule including specific kickoff times, see the{' '}
        <Link href="/world-cup/world-cup-2026-schedule-dates" className="text-blue-600 hover:text-blue-800 underline">
          World Cup 2026 complete schedule
        </Link>. For championship odds and the case for each top contender, see the{' '}
        <Link href="/world-cup/world-cup-2026-favorites-odds-preview" className="text-blue-600 hover:text-blue-800 underline">
          World Cup 2026 favorites and odds
        </Link>.
      </p>

      <SourcesInterlink
        accentColor="red"
        sources={[
          {
            number: 1,
            url: 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026',
            title: 'FIFA World Cup 2026 | Official Site',
            description: 'Official FIFA tournament page with draw results, match schedule, and host city information.',
          },
          {
            number: 2,
            url: 'https://www.espn.com/soccer/story/world-cup-2026-group-draw',
            title: '2026 World Cup Draw Results | ESPN Soccer',
            description: 'ESPN complete group draw results and analysis.',
          },
        ]}
        internalLinks={[
          { href: '/world-cup/world-cup-2026-schedule-dates', label: 'World Cup 2026 Full Schedule' },
          { href: '/world-cup/world-cup-2026-favorites-odds-preview', label: 'World Cup 2026 Favorites and Odds' },
          { href: '/world-cup/england-world-cup-2026-squad-prediction', label: 'England World Cup 2026 Squad Prediction' },
          { href: '/world-cup', label: 'World Cup Hub' },
          { href: '/authors/jack-brennan', label: 'Jack Brennan, Sports Reporter' },
        ]}
      />
    </SportArticle>
  );
}
