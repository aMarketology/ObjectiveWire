import type { Metadata } from 'next';
import Link from 'next/link';
import {
  SportArticle,
  SportCallout,
  SportStatRow,
  SportStat,
  SportStoryline,
} from '@/components/articles/SportArticle';
import { PrismTable } from '@/components/articles/PrismTable';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

// =============================================================================
// How the Round of 32 Works | World Cup 2026 Elimination Round Guide
// Route: /world-cup/2026/how-first-elimination-round-works
// Author: Jack Brennan
// Published: June 24, 2026
// Revalidate hourly — bracket matchups update as groups conclude
// =============================================================================

export const revalidate = 3600;

const SLUG = '/world-cup/2026/how-first-elimination-round-works';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE =
  'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'World Cup 2026 Round of 32 | How Elimination Works',
  description:
    'The World Cup 2026 Round of 32 begins June 29. Here is how the first elimination round works, which teams are already confirmed through, who has been sent home, and what the bracket looks like next.',
  keywords: [
    'World Cup 2026 Round of 32',
    'World Cup 2026 first elimination round',
    'how does World Cup knockout stage work 2026',
    'World Cup 2026 qualified teams Round of 32',
    'World Cup 2026 eliminated teams',
    'World Cup 2026 bracket June 2026',
    'World Cup 2026 next round',
    'FIFA World Cup 2026 knockout round explained',
    'World Cup 2026 Group Stage results standings',
    'when does Round of 32 start World Cup 2026',
    'World Cup 2026 USA knockout stage',
    'World Cup 2026 Argentina France Germany qualified',
    'World Cup 2026 Turkey Haiti Jordan eliminated',
    'World Cup best third place wildcard 2026',
    'World Cup 2026 single elimination bracket',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'World Cup 2026 Round of 32 | How Elimination Works',
    description:
      'Six teams already through. Five teams already out. The Round of 32 starts June 29. Here is exactly how the first elimination round works and what comes after.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-24T10:00:00Z',
    modifiedTime: '2026-06-24T10:00:00Z',
    section: 'Sports',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Soccer stadium at the 2026 FIFA World Cup' }],
    tags: ['World Cup 2026', 'FIFA', 'Round of 32', 'Knockout Stage', 'Jack Brennan'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Round of 32: who is in, who is out, and what happens next',
    description:
      'USA, Mexico, Argentina, Germany, France, and Norway are through. Turkey, Haiti, Tunisia, Jordan, and Uzbekistan are out. The elimination bracket starts June 29.',
    images: [OG_IMAGE],
  },
};

export default function HowFirstEliminationRoundWorksPage() {
  return (
    <>
      <NewsArticleSchema
        title="World Cup 2026 Round of 32 | How Elimination Works"
        description="The World Cup 2026 Round of 32 begins June 29. Here is how the first elimination round works, which teams are already confirmed through, who has been sent home, and what the bracket looks like next."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.com/authors/jack-brennan"
        publishedTime="2026-06-24T10:00:00Z"
        modifiedTime="2026-06-24T10:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        section="Sports"
        keywords={[
          'World Cup 2026 Round of 32',
          'World Cup 2026 first elimination round',
          'World Cup 2026 qualified teams Round of 32',
          'World Cup 2026 eliminated teams',
          'World Cup best third place wildcard 2026',
        ]}
      />

      <SportArticle
        title="World Cup 2026 Round of 32 | How the First Elimination Round Works, Who Is In, Who Is Out"
        subtitle="The Group Stage concludes June 27. The Round of 32 begins June 29. Six teams are already confirmed through, five are already sent home, and a best-third-place wildcard system will fill the remaining eight bracket spots once all 12 groups finish"
        category="World Cup 2026"
        categoryColor="red"
        topicTag="sports"
        publishDate="June 24, 2026"
        readTime="8 min read"
        author={{
          name: 'Jack Brennan',
          role: 'Sports Reporter, ObjectWire',
          avatar: '/influncer/author/jack_brennen.JPG',
          authorSlug: 'jack-brennan',
        }}
        thumbnail={{ src: OG_IMAGE, alt: 'Soccer ball at the 2026 FIFA World Cup elimination round' }}
        tags={['World Cup 2026', 'FIFA', 'Round of 32', 'Knockout Stage', 'Jack Brennan']}
        slug="world-cup-2026-how-first-elimination-round-works"
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'World Cup', item: '/world-cup' },
          { name: '2026', item: '/world-cup/2026' },
          { name: 'Round of 32 Explained', item: SLUG },
        ]}
        keyTakeaways={[
          'The World Cup 2026 Round of 32 is the first knockout round, beginning June 29, in which the 32 teams that survive the Group Stage play single-elimination matches with the loser going home immediately.',
          'Six teams have already clinched their Round of 32 spots with two wins each: the United States, Mexico, Germany, France, Norway, and Argentina.',
          'Five teams have already been mathematically eliminated and will not appear in the Round of 32: Turkey, Haiti, Tunisia, Jordan, and Uzbekistan.',
          'The remaining 21 spots in the Round of 32 will be determined by the final group matches played June 25 through June 27, including the eight best-third-place wildcards.',
          'The knockout bracket runs Round of 32 (June 29), Round of 16 (July 3), Quarterfinals (July 6), Semifinals (July 12), and the Final at MetLife Stadium on July 19, 2026.',
        ]}
        keyTakeawaysColor="red"
        faqItems={[
          {
            question: 'What is the World Cup 2026 Round of 32?',
            answer:
              'The World Cup 2026 Round of 32 is the first knockout round of the tournament, played between the 32 teams that advance from the Group Stage. It begins June 29, 2026. Every match is single-elimination: lose once and your World Cup is over.',
          },
          {
            question: 'How many teams qualify for the Round of 32?',
            answer:
              'Exactly 32 teams qualify. The top 2 finishers from each of the 12 groups advance automatically, giving 24 teams. The remaining 8 spots go to the best third-place finishers across all 12 groups, ranked by points, then goal difference, then goals scored.',
          },
          {
            question: 'Which teams have already qualified for the Round of 32?',
            answer:
              'As of June 24, 2026, the USA, Mexico, Germany, France, Norway, and Argentina have each clinched their spots with 6 points from two wins in the Group Stage.',
          },
          {
            question: 'Which teams have been eliminated from the World Cup 2026?',
            answer:
              'Five teams are already mathematically eliminated as of June 24, 2026: Turkey (Group D), Haiti (Group C), Tunisia (Group F), Jordan (Group J), and Uzbekistan (Group K), all with 0 points from two consecutive losses.',
          },
          {
            question: 'When does the World Cup 2026 knockout stage start?',
            answer:
              'The Round of 32 begins June 29, 2026, two days after the Group Stage concludes on June 27. The Final is July 19, 2026, at MetLife Stadium in East Rutherford, New Jersey.',
          },
        ]}
        moreFromHub={[
          {
            slug: 'world-cup-2026-group-stage-draw-all-48-groups',
            title: 'World Cup 2026 Group Stage Draw | All 12 Groups, 48 Teams',
            url: '/world-cup/world-cup-2026-group-stage-draw-all-48-groups',
            category: 'Sports',
          },
          {
            slug: 'world-cup-2026-schedule-dates',
            title: 'World Cup 2026 Full Schedule | Dates, Groups, Final',
            url: '/world-cup/world-cup-2026-schedule-dates',
            category: 'Sports',
          },
          {
            slug: 'world-cup-news-fifa-world-cup-2026-ticketing-crisis-state-probes',
            title: 'FIFA Ticketing Crisis | 4 States Launch Formal Probes',
            url: '/world-cup/news/fifa-world-cup-2026-ticketing-crisis-state-probes',
            category: 'Sports',
          },
        ]}
        moreFromHubLabel="World Cup 2026"
        moreFromHubHref="/world-cup"
      >

        {/* ── INTRO ───────────────────────────────────────────────────────── */}
        <p>
          The 2026 FIFA World Cup Group Stage concludes June 27. Two days later, on June 29, the first
          elimination round, the Round of 32, begins. It is the point where the tournament completely
          changes its character: from a points competition with guaranteed games to a pure bracket where
          a single loss ends your World Cup immediately, no matter who you are or what your record was
          in the group phase. As of June 24, six teams have already clinched their spots in that bracket.
          Five teams have already been sent home. Here is exactly how it works, who is in, who is out,
          and what the road looks like from here to the July 19 final at MetLife Stadium.
        </p>

        <SportCallout heading="World Cup 2026 | Elimination Round at a Glance" color="red" icon="⚽">
          <p><strong>First elimination round:</strong> Round of 32 (starts June 29)</p>
          <p><strong>Teams in the bracket:</strong> 32</p>
          <p><strong>How they are built:</strong> Top 2 from each of 12 groups (24 teams) + 8 best third-place wildcards</p>
          <p><strong>Rule:</strong> Lose once and you are out. No second chances. No lower bracket.</p>
          <p><strong>Draws at 90 min:</strong> 30 minutes extra time, then penalty shootout if still level</p>
          <p><strong>Final:</strong> July 19, 2026, MetLife Stadium, East Rutherford, New Jersey</p>
        </SportCallout>

        <SportStatRow>
          <SportStat metric="Teams in bracket" value="32" subtext="Out of 48 starters" color="red" />
          <SportStat metric="Already through" value="6" subtext="As of June 24" color="green" />
          <SportStat metric="Already out" value="5" subtext="As of June 24" color="blue" />
          <SportStat metric="Bracket starts" value="June 29" subtext="Round of 32" color="indigo" />
        </SportStatRow>

        {/* ── STORYLINE 1 ─────────────────────────────────────────────────── */}
        <SportStoryline number={1} heading="How the Round of 32 Works | Single-Elimination, No Second Chances" color="red">
          <p>
            The Round of 32 is categorically different from the Group Stage. In the Group Stage, every
            team is guaranteed three matches. A loss in game one does not end your tournament, it simply
            reduces your margin for error. Teams have rebounded from opening defeats to reach the knockout
            stage throughout World Cup history.
          </p>
          <p>
            The Round of 32 has none of that buffer. Every match is a standalone, one-game series.
            The team that wins moves on. The team that loses goes home immediately, books flights,
            and watches the rest of the tournament from the outside. There is no consolation bracket,
            no second-chance play-in, and no appeal to past performance. The entire Group Stage record
            is irrelevant once the bracket begins.
          </p>
          <p>
            If a Round of 32 match is tied at the end of 90 minutes of regulation, the teams play
            two additional 15-minute periods of extra time (30 minutes total). If the score remains
            level after extra time, the match is decided by a penalty shootout: alternating kicks
            from the spot, best of five initially, then sudden death. The winner of the shootout
            advances. The loser is out.
          </p>

          <PrismTable
            accent="red"
            headers={['Round', 'Teams Remaining']}
            rows={[
              ['Round of 32', '32 teams, starts June 29'],
              ['Round of 16', '16 teams, starts July 3'],
              ['Quarterfinals', '8 teams, starts July 6'],
              ['Semifinals', '4 teams, July 12'],
              ['Third-Place Match', '2 teams, July 16'],
              ['Final', '2 teams, July 19 at MetLife Stadium, NJ'],
            ]}
            caption="World Cup 2026 knockout bracket: every round from June 29 to July 19"
          />
        </SportStoryline>

        {/* ── STORYLINE 2 ─────────────────────────────────────────────────── */}
        <SportStoryline number={2} heading="How 32 Teams Are Chosen | Automatic Qualifiers Plus the Wildcard Eight" color="blue">
          <p>
            The 32-team bracket is built in two layers. The first layer is straightforward: the team
            that finishes first and the team that finishes second in each of the 12 groups both advance
            automatically. That produces 24 teams. The remaining 8 spots are filled by what FIFA calls
            the best third-place finishers.
          </p>
          <p>
            With 12 groups, there are 12 teams that finish third. They do not automatically qualify.
            Instead, FIFA takes all 12 third-place records and ranks them head-to-head using the same
            criteria used to separate teams within groups:
          </p>
          <ul>
            <li><strong>Total points</strong> earned across the three group matches</li>
            <li><strong>Goal difference</strong> if points are tied (goals scored minus goals allowed)</li>
            <li><strong>Total goals scored</strong> if goal difference is also tied</li>
            <li><strong>Fair play points</strong> (yellow and red card count) as a final tiebreaker</li>
          </ul>
          <p>
            The 8 third-place teams with the best records under those criteria all advance to the
            Round of 32 as wildcards. The 4 worst third-place finishers go home despite winning
            at least one match. This means a team can win a group stage game, finish third, and
            still be eliminated depending on results elsewhere.
          </p>
          <p>
            The practical implication going into the final group matches on June 25 through June 27:
            every team currently sitting in third place with points on the board is still alive.
            A strong final group match performance, particularly in goal difference, could be the
            difference between advancing to the Round of 32 and going home.
          </p>
        </SportStoryline>

        {/* ── STORYLINE 3 ─────────────────────────────────────────────────── */}
        <SportStoryline number={3} heading="World Cup 2026 | Teams Already in the Round of 32" color="green">
          <p>
            Six teams have secured their Round of 32 spots before the final group matchday, all by
            winning their first two Group Stage matches for the maximum 6 points. These nations cannot
            be caught by any other team in their group and are mathematically guaranteed to finish in
            the top two.
          </p>

          <PrismTable
            accent="green"
            headers={['Team', 'Group, Points, Route Through']}
            rows={[
              [
                <><span className="block font-black">United States</span><span className="block text-xs text-gray-500">Group D</span></>,
                '6 points from 2 wins. The co-host leads Group D. Defeated Paraguay 4-1 in their second match to confirm their knockout spot. Plays their third group match to determine seeding.'
              ],
              [
                <><span className="block font-black">Mexico</span><span className="block text-xs text-gray-500">Group A</span></>,
                '6 points from 2 wins. The co-host leads Group A with a dominant start. Plays the Czech Republic in their final group match on June 24 to determine whether they finish first or second.'
              ],
              [
                <><span className="block font-black">Germany</span><span className="block text-xs text-gray-500">Group E</span></>,
                '6 points, +7 goal difference. Germany has been the most emphatic performer in the group stage, winning both matches by wide margins. Already through with the third match still to play.'
              ],
              [
                <><span className="block font-black">France</span><span className="block text-xs text-gray-500">Group I</span></>,
                '6 points. France and Norway have both claimed maximum points in Group I, locking up first and second before the final group match. The order between them will be settled in their head-to-head.'
              ],
              [
                <><span className="block font-black">Norway</span><span className="block text-xs text-gray-500">Group I</span></>,
                '6 points. Co-leaders with France in Group I. Both are safely into the Round of 32 regardless of their final group result, making their upcoming clash a battle for top seeding only.'
              ],
              [
                <><span className="block font-black">Argentina</span><span className="block text-xs text-gray-500">Group J</span></>,
                '6 points. The defending champions, winners in Qatar 2022, won their first two matches and are safely into the knockout stage. Argentina plays their final group match to set their bracket position.'
              ],
            ]}
            caption="Six teams confirmed for the Round of 32 as of June 24, 2026"
          />

          <p>
            All six of these nations finished their two-match stretch undefeated and will enter the
            Round of 32 as group leaders or runners-up. Their final group match results matter only
            for bracket seeding, which determines their first knockout round opponent. A higher seed
            generally produces a more favorable first-round draw.
          </p>
        </SportStoryline>

        {/* ── STORYLINE 4 ─────────────────────────────────────────────────── */}
        <SportStoryline number={4} heading="World Cup 2026 | Teams Already Eliminated, Will Not Reach Round of 32" color="orange">
          <p>
            Five teams have been mathematically eliminated before the final group matchday. All five
            lost their first two Group Stage matches, leaving them with 0 points and a goal difference
            that makes it impossible for them to finish in the top two of their group or earn a
            best-third-place wildcard spot.
          </p>
          <p>
            Each eliminated team will still play their third and final group match. Those matches
            serve no bracket purpose for the eliminated side, but they remain important for their
            opponents, who may still be fighting for group position or wildcard ranking.
          </p>

          <PrismTable
            accent="orange"
            headers={['Team', 'Group, Record, Reason Eliminated']}
            rows={[
              [
                <><span className="block font-black">Turkey</span><span className="block text-xs text-gray-500">Group D</span></>,
                '0 points. Lost to both the United States and Paraguay in their opening two matches. Cannot finish above third in a group where the USA has already clinched 6 points. Eliminated.'
              ],
              [
                <><span className="block font-black">Haiti</span><span className="block text-xs text-gray-500">Group C</span></>,
                '0 points, -4 goal difference. Lost both group matches including to Scotland 1-0 and Brazil. Cannot accumulate enough points or goal difference to reach the wildcard threshold. Eliminated.'
              ],
              [
                <><span className="block font-black">Tunisia</span><span className="block text-xs text-gray-500">Group F</span></>,
                '0 points, -8 goal difference after the Sweden 5-1 result. The severe goal difference deficit makes any wildcard calculation impossible. Tunisia exits the group stage without a point for the third consecutive World Cup.'
              ],
              [
                <><span className="block font-black">Jordan</span><span className="block text-xs text-gray-500">Group J</span></>,
                '0 points. Lost both Group J matches to Argentina and their other group opponent. With Argentina already on 6 points, Jordan cannot catch the top two in their group and has no wildcard path. Eliminated.'
              ],
              [
                <><span className="block font-black">Uzbekistan</span><span className="block text-xs text-gray-500">Group K</span></>,
                '0 points. Consecutive defeats in their debut World Cup appearance end Uzbekistan\'s tournament before the final group matchday. Their third match carries no advancement implications.'
              ],
            ]}
            caption="Five teams mathematically eliminated as of June 24, 2026"
          />

          <p>
            The elimination of Turkey is particularly notable. They entered the tournament as a
            contender to reach the knockout rounds after a strong qualifying campaign. The Group D
            draw placed them opposite the United States, and consecutive defeats have ended their
            campaign without a single point registered.
          </p>
          <p>
            Tunisia&rsquo;s exit marks three consecutive World Cups in which they have failed to
            advance past the group stage, dating back to Russia 2018. The{' '}
            <Link href="/world-cup/2026/sweden-5-tunisia-1-group-f" className="text-blue-600 hover:text-blue-800 underline">
              5-1 loss to Sweden
            </Link>{' '}
            was the decisive blow, leaving a goal difference so severe that even a theoretical
            three-goal win in their final match would not repair their wildcard standing.
          </p>
        </SportStoryline>

        {/* ── STORYLINE 5 ─────────────────────────────────────────────────── */}
        <SportStoryline number={5} heading="World Cup 2026 Final Group Matches | June 25 to June 27 Deciders" color="indigo">
          <p>
            The remaining 21 spots in the Round of 32 will be determined across the final group
            matchdays running from June 24 through June 27. Within each group, both final matches
            kick off simultaneously to eliminate any possibility of one team calculating what result
            they need based on the other fixture&rsquo;s live score. This is a FIFA rule applied
            since 1986, and it remains one of the most viewer-friendly structural decisions in
            international tournament soccer.
          </p>
          <p>
            Today, June 24, Groups A, B, and C play their final matches. Groups D, E, and F follow
            on June 25. Groups G, H, and I play on June 26. Groups J, K, and L close the Group Stage
            on June 27. Once all 72 group matches are complete, the 8 best third-place finishers will
            be ranked and their bracket positions confirmed.
          </p>

          <PrismTable
            accent="blue"
            headers={['Date', 'Groups Playing']}
            rows={[
              ['June 24', 'Groups A, B, C — final matchday'],
              ['June 25', 'Groups D, E, F — final matchday'],
              ['June 26', 'Groups G, H, I — final matchday'],
              ['June 27', 'Groups J, K, L — final matchday, Group Stage concludes'],
              ['June 29', 'Round of 32 begins'],
              ['July 3',  'Round of 16 begins'],
              ['July 6',  'Quarterfinals'],
              ['July 12', 'Semifinals'],
              ['July 16', 'Third-Place Match'],
              ['July 19', 'Final, MetLife Stadium, East Rutherford, NJ'],
            ]}
            caption="World Cup 2026 schedule from June 24 through the July 19 final"
          />

          <p>
            The highest-stakes final group matches still ahead include Canada versus Switzerland in
            Group B, a winner-takes-first-place clash between two 4-point sides, Scotland against
            Brazil in Group C where a Scottish result could throw the group open, and South Africa
            versus South Korea in Group A where South Korea&rsquo;s second-place standing is not yet
            secure. The{' '}
            <Link href="/world-cup/world-cup-2026-schedule-dates" className="text-blue-600 hover:text-blue-800 underline">
              full World Cup 2026 schedule
            </Link>{' '}
            has kickoff times and venues for every remaining fixture.
          </p>
        </SportStoryline>

        {/* ── STORYLINE 6 ─────────────────────────────────────────────────── */}
        <SportStoryline number={6} heading="After the Round of 32 | The Road to MetLife" color="blue">
          <p>
            Once the Round of 32 is complete, 16 teams remain and the Round of 16 begins July 3.
            Each subsequent round halves the field. The tournament moves through Quarterfinals on
            July 6, Semifinals on July 12, a Third-Place match on July 16, and reaches its conclusion
            with the Final at MetLife Stadium in East Rutherford, New Jersey, on July 19.
          </p>
          <p>
            The bracket is fixed from the moment the Group Stage ends. The path from the Round of 32
            to the Final is not reseeded at any point. This means the bracket half a team lands in
            when the Round of 32 draw is confirmed determines the maximum difficulty of opponents
            they can face all the way to the Final. Two favorites placed in the same bracket half
            cannot meet until the Semifinal at the earliest.
          </p>
          <p>
            For the six teams already confirmed for the Round of 32, their final group match results
            this week matter specifically because group placement determines which bracket half they
            enter. A group winner typically draws a second-place finisher from a different group,
            while wildcard teams from the best-third-place pool are inserted into specific bracket
            positions based on which groups produced the qualifying wildcards.
          </p>
          <p>
            Follow all{' '}
            <Link href="/world-cup" className="text-blue-600 hover:text-blue-800 underline">
              ObjectWire World Cup 2026 coverage
            </Link>{' '}
            for match reports, group standings updates, and bracket confirmations as the Group Stage
            concludes this week.{' '}
            <Link href="/authors/jack-brennan" className="text-blue-600 hover:text-blue-800 underline">
              Jack Brennan
            </Link>{' '}
            is covering the 2026 tournament for ObjectWire.
          </p>
        </SportStoryline>

        <hr />

        <p>
          <strong>Sources:</strong>{' '}
          <a
            href="https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            FIFA World Cup 2026 Official Standings and Live Hub
          </a>
          .{' '}
          <a
            href="https://www.seattle.gov/fifa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Seattle.gov FIFA Men&rsquo;s World Cup 2026 Tournament Timeline
          </a>
          .{' '}
          <a
            href="https://www.foxsports.com/soccer/fifa-world-cup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            FOX Sports World Cup 2026 Broadcast Schedule
          </a>
          .
        </p>
      </SportArticle>
    </>
  );
}
