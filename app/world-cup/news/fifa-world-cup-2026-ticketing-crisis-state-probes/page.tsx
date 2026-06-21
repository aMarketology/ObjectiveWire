import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';
import { PrismTable } from '@/components/articles/PrismTable';

// =============================================================================
// FIFA World Cup 2026 Ticketing Crisis | State AG Probes
// Route: /world-cup/news/fifa-world-cup-2026-ticketing-crisis-state-probes
// Author: Jack Brennan, ObjectWire
// Published: June 21, 2026
// =============================================================================

export const revalidate = 86400;

const SLUG = '/world-cup/news/fifa-world-cup-2026-ticketing-crisis-state-probes';
const ARTICLE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE =
  'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'FIFA World Cup 2026 Ticketing Crisis | 4 States Sue',
  description:
    'New York, New Jersey, Texas, and California have launched formal probes into FIFA over bait-and-switch seat reclassifications, unchecked dynamic pricing, and resale tickets reaching $13,000 during the 2026 World Cup.',
  keywords: [
    'FIFA World Cup 2026 ticketing crisis',
    'World Cup 2026 ticket scam',
    'FIFA state attorney general investigation',
    'World Cup 2026 bait and switch tickets',
    'FIFA dynamic pricing World Cup',
    'Ken Paxton FIFA investigation Texas',
    'Letitia James FIFA subpoena',
    'World Cup 2026 ticket prices $13000',
    'FIFA Category 1 Category 2 downgrade',
    'New York New Jersey FIFA subpoena',
    'Rob Bonta FIFA California inquiry',
    'World Cup 2026 resale ticket prices',
    'FIFA deceptive trade practices',
    'Texas Deceptive Trade Practices Act FIFA',
    'World Cup 2026 consumer fraud',
    'FIFA World Cup ticket refund',
    'Jennifer Davenport New Jersey FIFA',
    'SoFi Stadium World Cup ticketing',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'FIFA World Cup 2026 Ticketing Crisis | 4 States Sue',
    description:
      'Four state AGs have launched formal probes into FIFA over seat reclassifications, hidden fees, and resale prices reaching $13,000. New York and New Jersey issued binding subpoenas on May 27, 2026.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-21T12:00:00Z',
    modifiedTime: '2026-06-21T12:00:00Z',
    section: 'Sports',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'Crowded football stadium during the 2026 FIFA World Cup',
      },
    ],
    tags: ['World Cup 2026', 'FIFA', 'Ticketing', 'Consumer Fraud', 'Ken Paxton'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '$13,000 resale tickets. 4 AGs probing FIFA. The 2026 World Cup ticketing crisis.',
    description:
      'Texas, California, New York, and New Jersey have all launched formal actions against FIFA over seat reclassifications and dynamic pricing that locked out everyday fans.',
    images: [OG_IMAGE],
  },
};

export default function FifaTicketingCrisisStateProbsPage() {
  return (
    <>
      <NewsArticleSchema
        title="FIFA World Cup 2026 Ticketing Crisis | 4 States Sue"
        description="New York, New Jersey, Texas, and California have launched formal probes into FIFA over bait-and-switch seat reclassifications, unchecked dynamic pricing, and resale tickets reaching $13,000 during the 2026 World Cup."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.org/authors/jack-brennan"
        publishedTime="2026-06-21T12:00:00Z"
        modifiedTime="2026-06-21T12:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        section="Sports"
        keywords={[
          'FIFA World Cup 2026 ticketing crisis',
          'World Cup 2026 ticket scam',
          'FIFA state attorney general investigation',
          'World Cup 2026 bait and switch tickets',
          'FIFA dynamic pricing World Cup',
          'Ken Paxton FIFA investigation Texas',
          'Letitia James FIFA subpoena',
          'World Cup 2026 ticket prices $13000',
        ]}
      />

      <NewsArticle
        title="FIFA World Cup 2026 Ticketing Crisis | 4 States Launch Formal Probes"
        subtitle="Texas, California, New York, and New Jersey have opened consumer protection investigations into FIFA over seat reclassifications after purchase, unchecked dynamic pricing, and resale tickets reaching $13,000"
        category="World Cup 2026"
        categoryColor="blue"
        topicTag="sports"
        publishDate="June 21, 2026"
        readTime="7 min read"
        author={{
          name: 'Jack Brennan',
          role: 'Investigations Reporter, ObjectWire',
          avatar: '/influncer/author/jack_brennen.JPG',
          authorSlug: 'jack-brennan',
        }}
        thumbnail={{
          src: OG_IMAGE,
          alt: 'Packed stadium during the 2026 FIFA World Cup in the United States',
        }}
        tags={['World Cup 2026', 'FIFA', 'Ticketing', 'Consumer Fraud', 'Ken Paxton', 'Letitia James']}
        slug="world-cup-news-fifa-world-cup-2026-ticketing-crisis-state-probes"
        url={SLUG}
        exclusive={true}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'World Cup', item: '/world-cup' },
          { name: 'News', item: '/world-cup/news' },
          { name: 'FIFA Ticketing Crisis | State Probes', item: SLUG },
        ]}
        keyTakeaways={[
          'Four U.S. state attorneys general, Texas, California, New York, and New Jersey, have opened formal consumer protection investigations into FIFA over its 2026 World Cup ticketing practices.',
          'New York AG Letitia James and New Jersey AG Jennifer Davenport co-issued binding subpoenas to FIFA on May 27, 2026, targeting its dynamic pricing model and post-purchase seat category changes.',
          'Texas AG Ken Paxton launched a probe on June 9, 2026, under the Texas Deceptive Trade Practices Act after fans reported Category 1 seats being reclassified to Category 2 or lower tiers after purchase without refund.',
          'Same-day standard tickets for the United States vs. Paraguay group-stage match in Los Angeles reached $2,735 on FIFA\'s official marketplace, while third-party resale platforms listed tickets as high as $13,000.',
          'FIFA has defended its seat category maps as a "general overview" rather than a binding layout, a defense that state prosecutors have publicly rejected as insufficient under consumer protection law.',
        ]}
        keyTakeawaysColor="blue"
        faqItems={[
          {
            question: 'What is the FIFA World Cup 2026 ticketing crisis?',
            answer:
              'The FIFA World Cup 2026 ticketing crisis refers to a coordinated series of state attorney general investigations into FIFA\'s consumer practices, including post-purchase seat reclassifications that downgraded premium Category 1 tickets, unchecked dynamic pricing, and resale prices reaching $13,000 per ticket.',
          },
          {
            question: 'Which states are investigating FIFA over World Cup 2026 tickets?',
            answer:
              'Texas, California, New York, and New Jersey have all launched formal investigations or issued subpoenas to FIFA. New York and New Jersey co-issued binding subpoenas on May 27, 2026, while Texas opened a probe on June 9, 2026, and California dispatched a formal inquiry in mid-May 2026.',
          },
          {
            question: 'What is the FIFA Category 1 bait-and-switch complaint?',
            answer:
              'Fans who purchased Category 1 tickets, which promised premium midfield or lower-bowl seating, reported that FIFA adjusted stadium seating layouts in the weeks before matches. Their seats were moved to Category 2 or lower-tier zones with no partial refund or explanation.',
          },
          {
            question: 'How high did World Cup 2026 ticket resale prices get?',
            answer:
              'Same-day standard tickets for the USA vs. Paraguay match in Los Angeles hit $2,735 on FIFA\'s official marketplace. Third-party resale platforms saw listings top $13,000 for high-demand group-stage games.',
          },
          {
            question: 'What penalties could FIFA face from the state investigations?',
            answer:
              'If attorneys general find systemic fraud, FIFA could face civil financial penalties, mandatory restitution payouts to affected ticket buyers, and forced structural changes to its ticketing distribution model under each state\'s consumer protection statutes.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="World Cup 2026"
        moreFromHubHref="/world-cup"
      >
        {/* ── INTRO ───────────────────────────────────────────────────────── */}
        <p>
          The 2026 FIFA World Cup ticketing crisis has escalated into a coordinated multi-state legal offensive,
          with attorneys general in Texas, California, New York, and New Jersey all opening formal consumer
          protection investigations into how FIFA marketed, priced, and distributed tickets to the tournament
          currently underway across North America. New York AG Letitia James and New Jersey AG Jennifer Davenport
          took the most aggressive step, co-issuing binding subpoenas to FIFA on May 27, 2026, demanding internal
          documents on its dynamic pricing system and post-purchase seat reclassification policies.
        </p>
        <p>
          The investigations are the most significant legal challenge to FIFA&rsquo;s commercial operations
          on U.S. soil and arrive as the tournament is already in progress, with state prosecutors signaling
          they will not wait for the final whistle to seek accountability. The four states represent some of
          the largest consumer economies in the country and collectively cover four of the eleven U.S. host
          cities. Read our full{' '}
          <Link href="/world-cup" className="text-blue-600 hover:text-blue-800 underline">
            World Cup 2026 hub
          </Link>{' '}
          for ongoing coverage of the tournament and its surrounding controversies.
        </p>

        {/* ── SECTION 1 ───────────────────────────────────────────────────── */}
        <h2>FIFA World Cup 2026 Ticketing Investigations | 4 States, 4 Actions</h2>
        <p>
          The legal front against FIFA spans the entire tournament footprint. In Texas, AG Ken Paxton moved
          first among the four, initiating a probe on June 9, 2026, under the{' '}
          <a
            href="https://www.youtube.com/watch?v=fXsMSC58xFU"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Texas Deceptive Trade Practices Act
          </a>{' '}
          in direct response to a surge of consumer complaints from fans who had purchased Category 1 tickets
          for matches at AT&T Stadium in Arlington and NRG Stadium in Houston. California AG Rob Bonta
          dispatched a formal inquiry in mid-May 2026 focused on seating assignment practices at SoFi Stadium
          in Inglewood and{' '}
          <Link href="/world-cup/sofi-stadium-world-cup-renovation-2026" className="text-blue-600 hover:text-blue-800 underline">
            Levi&rsquo;s Stadium in Santa Clara
          </Link>
          . New York and New Jersey followed on May 27 with the most binding instrument in the group: a joint
          subpoena.
        </p>

        <PrismTable
          accent="blue"
          headers={['State', 'Action Taken']}
          rows={[
            [
              <>
                <span className="block font-black">Texas</span>
                <span className="block text-xs text-gray-500">AG Ken Paxton · June 9, 2026</span>
              </>,
              'Investigation under the Texas Deceptive Trade Practices Act. Triggered by fan complaints that Category 1 seats at AT&T Stadium and NRG Stadium were reclassified to lower tiers after purchase with no refund.',
            ],
            [
              <>
                <span className="block font-black">California</span>
                <span className="block text-xs text-gray-500">AG Rob Bonta · Mid-May 2026</span>
              </>,
              'Formal inquiry requesting exhaustive documentation on how seating categories were marketed and physically assigned at SoFi Stadium (Inglewood) and Levi\'s Stadium (Santa Clara).',
            ],
            [
              <>
                <span className="block font-black">New York</span>
                <span className="block text-xs text-gray-500">AG Letitia James · May 27, 2026</span>
              </>,
              'Co-issued binding subpoenas to FIFA targeting dynamic pricing implementation, lack of transparency, and the escalation of baseline fees throughout the checkout process.',
            ],
            [
              <>
                <span className="block font-black">New Jersey</span>
                <span className="block text-xs text-gray-500">AG Jennifer Davenport · May 27, 2026</span>
              </>,
              'Partnered with New York to subpoena FIFA. Investigation centers on whether FIFA misled buyers by drastically altering ticket categories after checkout transactions were finalized.',
            ],
          ]}
          caption="State attorney general actions against FIFA, May to June 2026"
        />

        {/* ── SECTION 2 ───────────────────────────────────────────────────── */}
        <h2>FIFA Ticketing Bait-and-Switch | Category 1 Seats Reclassified Before Kickoff</h2>
        <p>
          The core of the Texas investigation centers on a seating reclassification that fans have described
          as a straightforward bait-and-switch. Fans spent thousands of dollars purchasing Category 1 tickets,
          which are explicitly marketed as premium positions: midfield sightlines, lower-bowl placement, and
          the closest proximity to on-field action. For the 2026 World Cup, FIFA set Category 1 as the highest
          consumer tier available through its official sales portal, and fans paid a corresponding premium.
        </p>
        <p>
          Weeks before the relevant matches kicked off, FIFA issued revised stadium seating layout maps. The
          updated configurations moved large sections of seats previously designated as Category 1 into
          Category 2 or lower-tiered zones. Fans who had already completed their purchases and received
          confirmation of their Category 1 assignments learned through the updated maps that their seats
          had been repositioned to inferior sections. FIFA did not proactively issue refund offers, notify
          affected buyers directly, or publicly acknowledge the reclassification as a material change to
          what had been purchased.
        </p>
        <p>
          AG Paxton&rsquo;s office identified this sequence as a potential violation of the Texas Deceptive
          Trade Practices Act, which prohibits representations that goods or services are of a higher quality,
          standard, or grade than they actually are. The act also bars sellers from failing to disclose
          information about a transaction that the consumer would reasonably rely upon in making the purchase
          decision.
        </p>

        {/* ── SECTION 3 ───────────────────────────────────────────────────── */}
        <h2>FIFA Dynamic Pricing 2026 | First Use at a World Cup, Immediate Legal Scrutiny</h2>
        <p>
          For the 2026 tournament, FIFA deployed dynamic ticket pricing for the first time in World Cup
          history, allowing prices to adjust automatically based on real-time inventory levels and demand
          signals. The system is common in the airline and hotel industries, and FIFA&rsquo;s communications
          team framed it as a mechanism to reflect market conditions and generate revenue at peak demand.
        </p>
        <p>
          Legal experts cited in the New York and New Jersey subpoenas note that dynamic pricing itself is
          not illegal. The line into deceptive territory, prosecutors argue, is crossed when consumers are
          shown a specific price tier during the browsing phase but encounter escalating fees and materially
          different total costs at the checkout screen, with no meaningful disclosure that the displayed
          price is not a locked rate. Testimony from affected ticket buyers described prices visibly
          increasing between the moment a ticket was selected and the moment payment was confirmed, a
          lag of seconds to minutes during which the total cost climbed without clear notification.
        </p>
        <p>
          The{' '}
          <Link
            href="/world-cup/news/world-cup-2026-us-transit-prices-fans-outraged"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            broader fan cost crisis at the 2026 World Cup
          </Link>{' '}
          predates the attorney general actions. ObjectWire reported in April 2026 on NJ Transit&rsquo;s
          900% fare surcharge for MetLife Stadium match days, which drew bipartisan condemnation from U.S.
          senators. The ticketing investigations represent a formal escalation of a pattern of consumer
          grievances that has defined the financial experience of the tournament since ticket sales opened.
        </p>

        {/* ── SECTION 4 ───────────────────────────────────────────────────── */}
        <h2>FIFA $60 Ticket Myth | Affordable Seats Vanished Before Public Sales Opened</h2>
        <p>
          Throughout its pre-tournament marketing, FIFA heavily promoted the availability of $60 tickets
          located in the upper corners of stadiums. The $60 price point was cited repeatedly in official
          communications, FIFA press releases, and Gianni Infantino&rsquo;s public statements as evidence
          that the 2026 World Cup was accessible to ordinary fans. Consumer advocates and state investigators
          have systematically dismantled that claim.
        </p>
        <p>
          Data obtained during the state inquiries reveals that the inventory of $60 tickets was
          so limited that the entire supply was exhausted before the public general-sale phase ever opened.
          The tickets were absorbed during priority access phases reserved for FIFA partners, sponsors,
          national soccer associations, and commercial presale allocations. By the time an average consumer
          reached a FIFA sales portal during the standard public window, no $60 inventory remained at any
          host venue. The advertised entry point had already been a fiction for weeks.
        </p>
        <blockquote>
          The $60 ticket was a marketing device. It was priced to generate headlines, not to generate access.
          The question for prosecutors is whether promoting a price that was structurally unavailable to the
          public constitutes a deceptive trade practice.
        </blockquote>

        {/* ── SECTION 5 ───────────────────────────────────────────────────── */}
        <h2>World Cup 2026 Resale Prices | USA vs. Paraguay Tickets Hit $13,000</h2>
        <p>
          With thousands of general sale inventory seats held back for last-minute sales phases, and the
          affordable tier already exhausted, the resale market absorbed the unmet demand at prices that
          have locked out the demographic FIFA publicly targeted with its inclusivity messaging. For
          high-demand group-stage fixtures, the numbers are stark. Same-day standard tickets for the
          United States versus Paraguay match in Los Angeles, one of the most anticipated group games on
          the American host schedule, reached $2,735 on FIFA&rsquo;s own official marketplace.
        </p>
        <p>
          Third-party resale platforms presented a more extreme picture. Listings for seats to the same
          fixture topped $13,000 per ticket. Across the broader group-stage schedule at U.S. venues,
          independent analysis cited in the New York subpoena found that the effective median entry cost
          for a consumer without any partner or presale access was between $800 and $1,400 for standard
          category seats, multiples of the headline $60 figure FIFA had used to characterize the
          tournament&rsquo;s affordability.
        </p>
        <p>
          This pricing reality intersects with the{' '}
          <Link
            href="/world-cup/news/fifa-world-cup-2026-five-major-issues-50-days"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            five major issues ObjectWire identified ahead of the tournament
          </Link>
          , which included the fan cost crisis as one of the tournament&rsquo;s most pressing unresolved
          problems. The attorney general actions are the formal legal consequence of a pattern that was
          documented months before the opening match.
        </p>

        {/* ── SECTION 6 ───────────────────────────────────────────────────── */}
        <h2>FIFA Response | "General Overview" Defense Rejected by State Prosecutors</h2>
        <p>
          FIFA has not disputed the factual basis of the seat reclassification complaints. Its response,
          issued through legal representatives in connection with the New York and New Jersey subpoenas,
          characterized its online seat category maps as a &ldquo;general overview&rdquo; of stadium
          configurations rather than an exact, legally binding layout. Under this framing, FIFA argues that
          no consumer was guaranteed a specific physical seat at the time of purchase and that the maps were
          illustrative rather than contractual.
        </p>
        <p>
          State prosecutors have publicly and directly rejected that defense. The attorneys general in both
          New York and New Jersey have indicated in formal communications that changing the value of a consumer
          asset after a financial transaction has been completed is not legally sanitized by retroactive
          characterizations of what the pre-sale materials were intended to mean. Under New York General
          Business Law Section 349 and comparable New Jersey consumer protection statutes, the operative
          standard is whether a reasonable consumer would have understood the category designation as a
          material term of the purchase.
        </p>
        <p>
          Texas prosecutors have framed the same question through the Deceptive Trade Practices Act, which
          applies an objective misleadingness standard: not whether FIFA intended to deceive, but whether its
          representations were reasonably likely to mislead a consumer. If any of the four investigations
          produce findings of systemic fraud, FIFA faces civil penalties, court-ordered restitution to affected
          buyers, and structural mandates on how tickets may be marketed and sold at future events in those states.
        </p>

        {/* ── SECTION 7: Closing ──────────────────────────────────────────── */}
        <h2>FIFA World Cup 2026 Ticketing | What Comes Next for Fans and Investigators</h2>
        <p>
          The investigations are proceeding in parallel with the tournament itself. None of the four state
          attorneys general have indicated they will delay action until the competition concludes. The
          subpoenas issued by New York and New Jersey carry compliance deadlines that predate the World Cup
          final at MetLife Stadium, meaning FIFA will be producing documents to state regulators while the
          tournament is still running. Texas and California have not yet disclosed specific document production
          timelines, but both have signaled active investigative postures.
        </p>
        <p>
          For fans who purchased downgraded tickets, the immediate question is whether the investigations
          will result in any direct relief during the current tournament. State consumer protection statutes
          generally provide for restitution as part of civil enforcement actions, but those processes
          unfold over months or years, not weeks. Consumer advocates have urged affected ticket holders
          to file formal complaints with their respective state AG&rsquo;s consumer protection division,
          as documentation of individual grievances strengthens the evidentiary record for any eventual
          enforcement action.
        </p>
        <p>
          <Link href="/authors/jack-brennan" className="text-blue-600 hover:text-blue-800 underline">
            Jack Brennan
          </Link>{' '}
          covers investigations and accountability reporting for ObjectWire. Follow all{' '}
          <Link href="/world-cup" className="text-blue-600 hover:text-blue-800 underline">
            2026 World Cup coverage
          </Link>{' '}
          and our broader{' '}
          <Link href="/world-cup/boycott-controversy" className="text-blue-600 hover:text-blue-800 underline">
            World Cup fan rights and controversy reporting
          </Link>{' '}
          on ObjectWire.
        </p>
      </NewsArticle>
    </>
  );
}
