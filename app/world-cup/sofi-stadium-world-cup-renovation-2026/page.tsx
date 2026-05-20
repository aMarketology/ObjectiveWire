import type { Metadata } from 'next';
import Link from 'next/link';
import {
  SportArticle,
  SportCallout,
  SportStoryline,
  SportStat,
  SportStatRow,
  SportPropTable,
  SportImplication,
} from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/world-cup/sofi-stadium-world-cup-renovation-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'SoFi Stadium World Cup 2026 | Corner Seats Removed for FIFA Pitch',
  description:
    'SoFi Stadium removes 100 corner seats per section to meet FIFA pitch dimensions for the 2026 World Cup. Refrigerated sod ships 1,600 miles from Washington state ahead of the June 12 USA vs Paraguay opener.',
  keywords: [
    'SoFi Stadium World Cup 2026',
    'SoFi Stadium FIFA renovation',
    'Los Angeles World Cup 2026',
    'SoFi Stadium corner seats removed',
    'World Cup 2026 Los Angeles',
    'FIFA pitch dimensions SoFi',
    'SoFi Stadium natural turf 2026',
    'USA vs Paraguay June 12 2026',
    'World Cup 2026 stadium renovation',
    'SoFi Stadium sod installation',
    'FIFA field size requirements',
    'World Cup 2026 opening match USA',
    'Los Angeles World Cup transit',
    'SoFi Stadium World Cup capacity',
    'FIFA exclusivity mandate stadium',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'SoFi Stadium World Cup 2026 | Corner Seats Out, FIFA Sod In',
    description:
      'SoFi Stadium pulls 100 corner seats per section, ships 1,600 miles of refrigerated Pacific Northwest sod, and strips all corporate branding ahead of the June 12 USA opener.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-05-15T10:00:00Z',
    modifiedTime: '2026-05-15T10:00:00Z',
    section: 'World Cup',
    tags: ['World Cup 2026', 'SoFi Stadium', 'Los Angeles', 'FIFA', 'USA Soccer'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoFi Stadium World Cup Facelift | Seats Out, Real Grass In',
    description:
      '100 corner seats removed per section. 1,600 miles of refrigerated sod. 30 days until USA vs Paraguay on June 12.',
  },
};

export default function SoFiStadiumWorldCupPage() {
  return (
    <SportArticle
      title="SoFi Stadium World Cup Facelift | Corner Seats Removed for 2026 FIFA Pitch"
      subtitle="Los Angeles is 30 days from hosting the USA opener. SoFi Stadium has removed hundreds of corner seats, shipped refrigerated Pacific Northwest sod 1,600 miles, and stripped every corporate sign from the building."
      category="World Cup"
      categoryColor="blue"
      topicTag="sports"
      publishDate="May 15, 2026"
      readTime="6 min read"
      author={{
        name: 'Jack Brennan',
        role: 'World Cup Coverage',
        authorSlug: 'jack-brennan',
      }}
      slug="sofi-stadium-world-cup-renovation-2026"
      url={SLUG}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup', item: '/world-cup' },
        { name: 'SoFi Stadium Renovation', item: SLUG },
      ]}
      keyTakeaways={[
        'SoFi Stadium removed 100 corner seats per section to achieve mandatory FIFA pitch width and a five-meter corner-flag safety buffer.',
        'Freshly harvested natural sod was transported 1,600 miles from Washington state in refrigerated trucks running continuous driver shifts.',
        'The sod installation requires 48 hours of uninterrupted deployment; the stadium\'s transparent roof creates a greenhouse effect to accelerate root anchoring.',
        'All corporate branding across suites, bars, and concourses must be concealed before the official FIFA stadium handover to comply with exclusivity mandates.',
        'Los Angeles Metro has deployed 300 dedicated express buses with $3.75 roundtrip fares from 15 regional park-and-ride lots to manage match-day crowds.',
      ]}
      keyTakeawaysColor="blue"
      faqItems={[
        {
          question: 'Why is SoFi Stadium using temporary sod instead of permanent grass?',
          answer: 'Multi-purpose stadiums with transparent roofs typically use synthetic turf to withstand NFL games and events. A temporary natural field grown in the Pacific Northwest lets FIFA grounds crews control density, moisture, and root strength without maintaining live grass year-round.',
        },
        {
          question: 'How does removing corner seats affect the SoFi Stadium viewing experience?',
          answer: 'Removing those rows creates an open field zone that places surrounding fans closer to the touchlines. Ticket holders in those sections experience enhanced proximity to corner kicks and throw-ins compared to the standard stadium configuration.',
        },
        {
          question: 'What are the cheapest transit options to SoFi Stadium for World Cup matches?',
          answer: 'The Los Angeles Metro is running a $3.75 roundtrip express bus network from 15 regional park-and-ride lots with dedicated transit lanes. That compares to standard parking fees of $55 to $100 per vehicle.',
        },
        {
          question: 'When does the USA play their first World Cup 2026 match at SoFi Stadium?',
          answer: 'The United States opens against Paraguay on June 12, 2026 at SoFi Stadium in Los Angeles. The match marks the first World Cup group-stage game played at the venue.',
        },
      ]}
      moreFromHub={[
        {
          slug: 'world-cup-2026-schedule-dates',
          url: '/world-cup/world-cup-2026-schedule-dates',
          title: 'World Cup 2026 Schedule | Dates, Groups, Host Cities, Final',
          publishDate: 'April 29, 2026',
          category: 'World Cup',
        },
      ]}
      moreFromHubLabel="World Cup"
      moreFromHubHref="/world-cup"
    >
      {/* ── Executive Decoder ── */}
      <SportCallout heading="Executive Decoder" color="blue" icon="🏟️">
        <p>
          SoFi Stadium in Inglewood has entered its final 30-day countdown before hosting the opening
          United States match against Paraguay on <strong>June 12, 2026</strong>. The venue completed
          major architectural modifications, removing hundreds of corner seats to accommodate required{' '}
          <strong>FIFA field dimensions</strong>. Massive shipments of specialized natural sod arrived
          from Washington state via refrigerated transport to replace the stadium's traditional synthetic
          football surface. Follow all{' '}
          <Link href="/world-cup" className="text-blue-600 hover:text-blue-800 underline">
            2026 World Cup coverage on oWire
          </Link>{' '}
          for match schedules and host city updates.
        </p>
      </SportCallout>

      {/* ── Storyline 1: Architecture ── */}
      <SportStoryline number={1} heading="Architectural Structural Overhaul" color="blue">
        <SportStatRow>
          <SportStat metric="Seats Out" value="100" subtext="Per corner" color="red" />
          <SportStat metric="Safety Buffer" value="5m" subtext="Corner flag zone" color="blue" />
          <SportStat metric="Opens" value="June 12" subtext="USA vs Paraguay" color="green" />
        </SportStatRow>

        <p>
          Engineers successfully dismantled <strong>100 seats per corner</strong> using a modular layout
          to expand the pitch width to mandatory international standards. This reconfiguration delivers a
          five-meter safety buffer at the corner flags, placing premium ticket holders directly adjacent
          to the active play zone.
        </p>

        <p>
          The conversion requires burying the standard NFL synthetic turf beneath a complex protective
          matrix of flooring and sand. This baseline layer provides the foundation for natural turf
          integration while safeguarding the permanent stadium infrastructure below. For context on how
          the full 2026 tournament is structured across all 16 host cities, see the{' '}
          <Link href="/world-cup/world-cup-2026-schedule-dates" className="text-blue-600 hover:text-blue-800 underline">
            complete 2026 World Cup schedule and host city guide
          </Link>.
        </p>
      </SportStoryline>

      {/* ── Storyline 2: Sod Logistics ── */}
      <SportStoryline number={2} heading="Refrigerated Logistics Supply Chain" color="green">
        <SportStatRow>
          <SportStat metric="Miles" value="1,600" subtext="Sod transit route" color="blue" />
          <SportStat metric="Install" value="48 hrs" subtext="Continuous deployment" color="orange" />
          <SportStat metric="Origin" value="WA State" subtext="Pacific Northwest" color="green" />
        </SportStatRow>

        <p>
          Stadium operators initiated the transit of freshly harvested sod across a <strong>1,600-mile
          network</strong> from the Pacific Northwest. Transport drivers operated in continuous shifts
          inside climate-controlled trucks to ensure the live grass experienced zero moisture degradation
          during the journey from Washington state to Inglewood.
        </p>

        <p>
          The installation phase requires <strong>48 hours</strong> of continuous deployment across the
          newly modified field platform. The arena's advanced transparent roof structure creates a natural
          greenhouse environment to accelerate root system anchoring prior to tournament kickoff,
          eliminating the need for external grow lighting during the final establishment window.
        </p>
      </SportStoryline>

      {/* ── Storyline 3: Branding and Transit ── */}
      <SportStoryline number={3} heading="Corporate Cleanse and Local Transit Expansion" color="indigo">
        <SportStatRow>
          <SportStat metric="Buses" value="300" subtext="Dedicated express" color="indigo" />
          <SportStat metric="Fare" value="$3.75" subtext="Roundtrip express" color="green" />
          <SportStat metric="Lots" value="15" subtext="Park and ride" color="blue" />
        </SportStatRow>

        <p>
          Officials have commenced the removal and concealment of all stadium brand partnerships to comply
          with strict <strong>FIFA exclusivity mandates</strong>. Every commercial sign across luxury
          suites, bars, and public concourses must be systematically covered before the official stadium
          handover, temporarily displacing legacy partner visibility during the highest-traffic window
          of the venue's history.
        </p>

        <p>
          The Los Angeles Metro has deployed <strong>300 dedicated transit buses</strong> to manage local
          spectator flow without disrupting daily civilian commuter lines. Express roundtrip transit is
          locked at <strong>$3.75</strong> from 15 regional park-and-ride lots, substantially undercutting
          standard parking fees of $55 to $100 per vehicle and helping the city meet FIFA's transportation
          capacity requirements.
        </p>
      </SportStoryline>

      {/* ── Specifications Table ── */}
      <SportPropTable
        caption="SoFi Stadium | 2026 World Cup Specifications"
        color="blue"
        rows={[
          {
            player: 'Corner Seat Removal',
            team: 'Per Section',
            odds: '100',
            vulnerability: 'FIFA minimum pitch width compliance',
          },
          {
            player: 'Sod Transit Distance',
            team: 'Washington State',
            odds: '1,600mi',
            vulnerability: 'Refrigerated continuous-shift trucks',
          },
          {
            player: 'Turf Installation Window',
            team: 'SoFi Grounds',
            odds: '48 hrs',
            vulnerability: 'Greenhouse roof accelerates root anchoring',
          },
          {
            player: 'Express Bus Fleet',
            team: 'LA Metro',
            odds: '300',
            vulnerability: '15 park-and-ride lots, $3.75 roundtrip',
          },
          {
            player: 'USA Opener',
            team: 'vs Paraguay',
            odds: 'June 12',
            vulnerability: 'First World Cup group match at SoFi',
          },
        ]}
      />

      {/* ── Implications ── */}
      <SportImplication heading="The Hybrid Surface Mandate" icon="🌱">
        <p>
          The technical success of this rapid natural turf overlay establishes a new operational blueprint
          for multi-purpose stadiums worldwide. Arenas can now transition between synthetic gridiron
          surfaces and living organic turf within a narrow one-month window, a timeline that was
          considered impractical before SoFi's modular seat design made corner reconfiguration viable.
        </p>
        <p>
          This mechanical agility will likely influence future stadium construction projects across major
          sports hubs including Austin and Houston, both of which are evaluating flexible-surface designs
          for venues expected to host international soccer in the next decade. The sod logistics chain
          from the Pacific Northwest may become a repeatable template for every future Super Bowl stadium
          converted for FIFA use.
        </p>
      </SportImplication>

      <SportImplication heading="Ecosystem Revenue Displacement" icon="💰">
        <p>
          The total removal of existing corporate branding highlights the absolute authority of
          international sports governing bodies over domestic venues. While local vendors benefit from
          premium stadium tour pricing set at <strong>$86.50</strong> per ticket, legacy stadium partners
          lose vital broadcast exposure during peak tournament windows spanning the entire group stage
          and any knockout rounds hosted in Los Angeles.
        </p>
        <p>
          This temporary commercial displacement forces stadium management to negotiate complex
          compensation structures with long-term tenants, including the Los Angeles Rams, Chargers, and
          multiple concert promoters. The FIFA handover period effectively freezes all non-tournament
          commercial activity inside the building, a precedent that will recur at each of the 11 US
          host stadiums converting between their primary-sport configurations and the international
          pitch standard.
        </p>
      </SportImplication>
    </SportArticle>
  );
}
