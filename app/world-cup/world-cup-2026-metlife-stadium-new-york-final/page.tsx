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

export const revalidate = 86400;

const SLUG = '/world-cup/world-cup-2026-metlife-stadium-new-york-final';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'World Cup 2026 MetLife Stadium | New York Final, Capacity, Fan Guide',
  description:
    'MetLife Stadium in East Rutherford, NJ hosts the 2026 World Cup Final on July 19. Capacity 82,500, group stage matches, transit guide, nearby hotels, and how to get tickets to the biggest game in soccer history.',
  keywords: [
    'World Cup 2026 MetLife Stadium',
    'World Cup 2026 New York',
    'MetLife Stadium World Cup Final 2026',
    'World Cup 2026 Final location',
    'World Cup 2026 Final date',
    'MetLife Stadium capacity World Cup',
    'World Cup 2026 New Jersey',
    'how to get to MetLife Stadium World Cup',
    'World Cup 2026 East Rutherford',
    'World Cup 2026 Final tickets',
    'MetLife Stadium World Cup groups',
    'New York World Cup 2026 guide',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'World Cup 2026 MetLife Stadium | New York Final, Capacity 82,500, Fan Guide',
    description:
      'MetLife Stadium hosts the 2026 World Cup Final on July 19. Everything you need — capacity, group matches, transit, hotels, and tickets.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-04T14:00:00Z',
    modifiedTime: '2026-06-04T14:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'MetLife Stadium', 'New York', 'FIFA', 'Soccer'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 MetLife Stadium | New York Hosts the Final July 19',
    description:
      'Capacity 82,500. Groups B and K. World Cup Final July 19. Full guide to attending matches at MetLife.',
  },
};

export default function MetLifeStadiumWorldCup2026Page() {
  return (
    <SportArticle
      title="World Cup 2026 MetLife Stadium | New York Final, Capacity, Group Matches, and Fan Guide"
      subtitle="MetLife Stadium in East Rutherford, New Jersey will host the 2026 FIFA World Cup Final on July 19 — the single most-watched soccer match in American television history. With a World Cup configuration capacity of 82,500, it is the largest venue in the 16-city tournament host portfolio."
      category="Sports"
      categoryColor="red"
      topicTag="sports"
      publishDate="2026-06-04T14:00:00Z"
      readTime="7 min read"
      author={{ name: 'Jack Brennan', role: 'Sports Reporter', authorSlug: 'jack-brennan' }}
      slug="world-cup-2026-metlife-stadium-new-york-final"
      url={SLUG}
      tags={['World Cup 2026', 'MetLife Stadium', 'New York', 'FIFA', 'World Cup Final']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup', item: '/world-cup' },
        { name: 'MetLife Stadium', item: SLUG },
      ]}
      moreFromHub={[
        { slug: 'world-cup-2026-group-stage-draw-all-48-groups', title: 'World Cup 2026 Group Stage Draw | All 48 Teams', url: '/world-cup/world-cup-2026-group-stage-draw-all-48-groups', category: 'Sports' },
        { slug: 'world-cup-2026-schedule-dates', title: 'World Cup 2026 Full Schedule', url: '/world-cup/world-cup-2026-schedule-dates', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'MetLife Stadium in East Rutherford, New Jersey hosts the 2026 FIFA World Cup Final on July 19, with a tournament configuration capacity of 82,500, the largest of any 2026 World Cup venue.',
        'The stadium hosts Group B (USA, England, Panama, Senegal) and Group K matches during the group stage, meaning the USA vs England opener is scheduled for MetLife on June 12.',
        'MetLife Stadium is located 8 miles from midtown Manhattan and is accessible via NJ Transit train from Penn Station in approximately 30 minutes on the Meadowlands Sports Complex shuttle.',
        'FIFA and Ticketmaster are handling all ticket sales. Group stage tickets start at $150 face value. Final tickets started at $750 and sold through FIFA ballot allocation.',
        'The stadium has no dedicated parking for public ticketholders on World Cup match days — fans are directed to New York Penn Station and the NJ Transit shuttle to reduce congestion.',
      ]}
      keyTakeawaysColor="red"
      faqItems={[
        {
          question: 'Where is the 2026 World Cup Final being held?',
          answer: 'The 2026 FIFA World Cup Final is being held at MetLife Stadium in East Rutherford, New Jersey — about 8 miles from midtown Manhattan. The Final is scheduled for July 19, 2026.',
        },
        {
          question: 'What is the capacity of MetLife Stadium for the World Cup?',
          answer: 'MetLife Stadium has a World Cup configuration capacity of 82,500, making it the largest venue in the 2026 tournament. Regular NFL capacity is approximately 82,500 as well — the configuration changes refer to field-level seating adjustments for FIFA pitch dimensions.',
        },
        {
          question: 'How do I get to MetLife Stadium for the World Cup?',
          answer: 'NJ Transit runs a dedicated Meadowlands Sports Complex shuttle from New York Penn Station and Secaucus Junction on match days. The journey takes approximately 30 minutes. Driving is heavily discouraged and no general public parking is available on World Cup match days.',
        },
        {
          question: 'Which World Cup 2026 matches are at MetLife Stadium?',
          answer: 'MetLife Stadium hosts Group B matches (USA, England, Panama, Senegal), Group K matches, several knockout round games, and the World Cup Final on July 19.',
        },
        {
          question: 'How do I buy World Cup 2026 Final tickets?',
          answer: 'Final tickets were sold via FIFA ballot allocation. The ballot has closed. Secondary market tickets are available on StubHub and Ticketmaster Resale, with prices ranging from $2,500 to $20,000+ for premium seats as of May 2026.',
        },
      ]}
    >
      <p>
        <strong>MetLife Stadium</strong> is the crown jewel of the 2026 FIFA World Cup venue portfolio. The stadium, home to both the New York Giants and New York Jets of the NFL, was selected as the tournament's Final venue over competing bids from AT&T Stadium in Dallas and SoFi Stadium in Los Angeles, largely because of its proximity to the world's most concentrated media market and New York's symbolic status as the financial capital of the United States.
      </p>

      <p>
        The selection of MetLife for the Final means the most-watched event in world soccer will be staged in the shadow of Manhattan — a deliberate FIFA statement about the commercial ambitions of the first World Cup in North America since 1994.
      </p>

      <SportStatRow>
        <SportStat metric="World Cup capacity" value="82,500" subtext="Largest 2026 venue" color="red" />
        <SportStat metric="Final date" value="July 19" subtext="2026, East Rutherford NJ" color="blue" />
        <SportStat metric="Distance from NYC" value="8 miles" subtext="Penn Station to MetLife" color="green" />
        <SportStat metric="Transit time" value="30 min" subtext="NJ Transit from Penn Station" color="orange" />
      </SportStatRow>

      <h2>MetLife Stadium World Cup 2026 | Match Schedule</h2>

      <PrismTable
        accent="red"
        headers={['Match Phase', 'Details']}
        rows={[
          [<><span className="block font-black">Group Stage Match 1</span><span className="block text-xs text-gray-500">June 12</span></>, 'USA vs England | Group B | ~8:00pm ET'],
          [<><span className="block font-black">Group Stage Match 2</span><span className="block text-xs text-gray-500">June 15</span></>, 'Panama vs Senegal | Group B | ~3:00pm ET'],
          [<><span className="block font-black">Group Stage Match 3</span><span className="block text-xs text-gray-500">June 18</span></>, 'Group K Match | TBD nations | TBD time'],
          [<><span className="block font-black">Group Stage Match 4</span><span className="block text-xs text-gray-500">June 21-22</span></>, 'Group K Conclusion | TBD | TBD time'],
          [<><span className="block font-black">Round of 32</span><span className="block text-xs text-gray-500">July 1-4</span></>, '1 match assigned to MetLife | TBD'],
          [<><span className="block font-black">Round of 16</span><span className="block text-xs text-gray-500">July 6-9</span></>, '1 match assigned to MetLife | TBD'],
          [<><span className="block font-black">Quarter-Final</span><span className="block text-xs text-gray-500">July 11-12</span></>, '1 match assigned to MetLife | TBD'],
          [<><span className="block font-black">World Cup Final</span><span className="block text-xs text-gray-500">July 19</span></>, 'FIFA World Cup Final 2026 | 3:00pm ET'],
        ]}
        caption="MetLife Stadium match schedule for the 2026 World Cup. Knockout round assignments are confirmed by FIFA after each preceding round. Times are approximate ET."
      />

      <h2>Getting There | Transit Guide for World Cup Match Days</h2>

      <SportCallout heading="NJ Transit | The Only Recommended Option" color="blue" icon="🚂">
        <p><strong>From Manhattan:</strong> Take NJ Transit from New York Penn Station (33rd St and 7th Ave) to Meadowlands Sports Complex station. Trains run on a special World Cup shuttle schedule with departures starting 3 hours before kickoff. Travel time: approximately 30 minutes.</p>
        <p><strong>From New Jersey:</strong> Secaucus Junction serves as a transfer hub for riders coming from Hoboken, Newark Penn Station, and points south. From Secaucus, one additional train stop reaches the Meadowlands.</p>
        <p><strong>No public parking:</strong> FIFA and MetLife have suspended general public parking at the stadium complex on all World Cup match days. Rideshare drop-off zones are available but heavily congested. NJ Transit is the official recommendation for all fans.</p>
        <p><strong>Ticket required:</strong> NJ Transit charges a separate round-trip fare for the World Cup shuttle. Prices are approximately $25 round-trip from Penn Station. A World Cup match ticket does NOT include transit.</p>
      </SportCallout>

      <h2>Where to Stay Near MetLife Stadium for the World Cup</h2>

      <p>
        Hotels within five miles of MetLife Stadium in New Jersey have been sold out for World Cup match dates since early 2025. If you are attending group stage matches or the Final, the primary accommodation strategy for most fans is <strong>staying in Manhattan</strong> and using NJ Transit for each game.
      </p>

      <PrismTable
        accent="blue"
        headers={['Area', 'Notes for World Cup']}
        rows={[
          ['Midtown Manhattan (10-15 mi)', 'Full hotel inventory. Times Square, Hudson Yards, Penn Station area all convenient for NJ Transit.'],
          ['Jersey City / Hoboken (4-6 mi)', 'Good value relative to Manhattan. PATH train to Secaucus Junction connects to MetLife shuttle.'],
          ['Newark, NJ (5 mi)', 'Budget options available. Newark Penn Station offers direct NJ Transit service to Meadowlands.'],
          ['Rutherford / Carlstadt (1-2 mi)', 'Walking distance but no public parking. Limited inventory. Check 2-3 months in advance.'],
          ['Short-term rentals (all NJ)', 'Airbnb/VRBO bookings in North Jersey within 10 miles are heavily inflated for Final week. Book early or stay in Manhattan.'],
        ]}
        caption="Accommodation strategy guide for attending World Cup matches at MetLife Stadium."
      />

      <h2>USA vs England | The Group Stage Game of the Tournament</h2>

      <p>
        The June 12 match between the United States and England at MetLife Stadium is the group stage fixture that will generate the largest television audience of any World Cup 2026 game that does not involve a final or semifinal. Both nations bring legitimate pre-tournament expectations, both have star power in their squads, and the venue — packed with 82,500 fans and the largest English soccer diaspora in North America — will be electric.
      </p>

      <p>
        England, managed by a new head coach after the departure of Gareth Southgate in late 2024, arrives with Jude Bellingham in his absolute prime, a Bukayo Saka-led attack that scored 23 goals in World Cup qualifying, and a defensive unit that has not conceded more than one goal in any of their last nine competitive matches. For the USA, this is the definitive proof-of-concept match — a tournament game against a world-class opponent, on home soil, before the largest soccer crowd in American domestic history.
      </p>

      <p>
        For the full analysis of how the draw set up this fixture and all other group stage matchups, see the{' '}
        <Link href="/world-cup/world-cup-2026-group-stage-draw-all-48-groups" className="text-blue-600 hover:text-blue-800 underline">
          World Cup 2026 group stage draw
        </Link>. For the complete tournament schedule through the Final, see the{' '}
        <Link href="/world-cup/world-cup-2026-schedule-dates" className="text-blue-600 hover:text-blue-800 underline">
          World Cup 2026 schedule and dates
        </Link>.
      </p>

      <SourcesInterlink
        accentColor="red"
        sources={[
          {
            number: 1,
            url: 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/stadiums/metlife-stadium',
            title: 'MetLife Stadium | 2026 FIFA World Cup Host Venues',
            description: 'Official FIFA page for MetLife Stadium as a 2026 World Cup host venue.',
          },
          {
            number: 2,
            url: 'https://www.njtransit.com/worldcup',
            title: 'NJ Transit World Cup Service | How to Get to MetLife',
            description: 'Official NJ Transit guide to World Cup shuttle service from Penn Station and Secaucus.',
          },
        ]}
        internalLinks={[
          { href: '/world-cup/world-cup-2026-group-stage-draw-all-48-groups', label: 'World Cup 2026 Group Stage Draw' },
          { href: '/world-cup/world-cup-2026-schedule-dates', label: 'World Cup 2026 Full Schedule' },
          { href: '/world-cup/world-cup-2026-favorites-odds-preview', label: 'World Cup 2026 Favorites and Odds' },
          { href: '/world-cup', label: 'World Cup 2026 Hub' },
          { href: '/authors/jack-brennan', label: 'Jack Brennan, Sports Reporter' },
        ]}
      />
    </SportArticle>
  );
}
