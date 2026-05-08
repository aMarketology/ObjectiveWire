import type { Metadata } from 'next';
import Link from 'next/link';
import {
  NewsArticle,
  HighlightBox,
} from '@/components/articles/NewsArticle';

export const dynamic = 'force-dynamic';

const SLUG = '/mlb/2026-season-standings-april-update';
const ARTICLE_URL = `https://www.owire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'MLB 2026 Standings | Yankees Lead, Padres Surge After One Month',
  description:
    'MLB 2026 standings after one month: Yankees at 18-9, Padres lead NL West at 18-8, Murakami hits 10 homers in 24 games, and Lindor lands on IL.',
  keywords: [
    'MLB 2026 standings',
    'MLB 2026 season update',
    'Yankees 2026 standings',
    'New York Yankees win streak 2026',
    'San Diego Padres 2026',
    'Atlanta Braves 2026 standings',
    'Munetaka Murakami home run streak',
    'Dalton Rushing Dodgers 2026',
    'Francisco Lindor IL 2026',
    'MLB April 2026 recap',
    'NL West standings 2026',
    'AL East standings 2026',
    'Cincinnati Reds 2026',
    'Los Angeles Dodgers 2026',
    'MLB standings April 26 2026',
    'MLB early season 2026',
    'MLB playoff race 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'MLB 2026 Standings | Yankees Lead, Padres Surge After One Month',
    description:
      'Yankees are 18-9 with an 8-game win streak. Padres lead the NL West at 18-8. Murakami has 10 homers in 24 games. Full MLB standings update after one month.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-05-04T14:30:00Z',
    modifiedTime: '2026-05-04T14:30:00Z',
    section: 'MLB',
    tags: ['MLB', 'Yankees', 'Padres', 'Braves', '2026 Season', 'Baseball Standings'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MLB April 2026 | Yankees 18-9, Padres Lead NL West, Murakami at 10 HRs',
    description:
      'One month in: Yankees surge to the top of the AL East, the Padres and Dodgers battle in the NL West, and a rookie is rewriting home run history.',
  },
};

export default function MLB2026StandingsAprilPage() {
  return (
    <NewsArticle
      title="MLB 2026 Standings | Yankees Surge, Padres Lead After One Month"
      subtitle="One month into the 2026 season, the Yankees are rolling at 18-9 with an eight-game win streak, the Padres own the NL West at 18-8, and Munetaka Murakami is rewriting the record books with 10 home runs in 24 career games."
      category="MLB"
      categoryColor="red"
      topicTag="sports"
      publishDate="May 4, 2026"
      readTime="7 min read"
      author={{
        name: 'ObjectWire Sports Desk',
        role: 'MLB Coverage',
      }}
      slug="mlb-2026-season-standings-april-update"
      url={SLUG}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'MLB', item: '/mlb' },
        { name: '2026 April Standings', item: SLUG },
      ]}
      tags={['MLB', 'Yankees', 'Padres', 'Braves', '2026 Standings', 'Baseball']}
      trending
    >
      {/* ── INTRO ────────────────────────────────────────────────────────── */}
      <p>
        With roughly one-sixth of the 2026 schedule in the books, the{' '}
        <Link href="/mlb" className="text-blue-600 hover:text-blue-800 underline">
          MLB season
        </Link>{' '}
        has already produced powerhouse performances, unexpected contenders, and one historically
        fast home run pace from a player who arrived in the big leagues this spring. As of
        April 26, the standings reveal a league shaped by depth pitching, power hitting, and
        several teams that look nothing like the projections that opened the year.
      </p>

      <p>
        The New York Yankees have caught fire in the American League East. The San Diego Padres
        and Los Angeles Dodgers are running away in the NL West. And the Cincinnati Reds,
        largely overlooked in preseason forecasts, are sitting at 18-9 after a quiet but
        relentless April. Early hot streaks and key injuries are already reshaping playoff
        projections that won&apos;t stabilise until Memorial Day.
      </p>

      {/* ── KEY STATS ────────────────────────────────────────────────────── */}
      <HighlightBox type="stat" color="orange">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-2">
          {[
            { value: '18-9', label: 'Yankees record (AL East leaders)' },
            { value: '+50', label: 'Yankees run differential' },
            { value: '18-8', label: 'Padres record (NL West leaders)' },
            { value: '19-9', label: 'Braves record (NL East leaders)' },
            { value: '10', label: 'Murakami HRs in first 24 MLB games' },
            { value: '8', label: 'Yankees win streak as of April 26' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-black text-gray-900">{s.value}</p>
              <p className="text-xs text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </HighlightBox>

      {/* ── SECTION 1 ────────────────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        1. AL East | Yankees Running Away Early
      </h2>

      <p>
        The American League East belongs to the Yankees for now. New York sits at 18-9 (.667),
        an eight-game winning streak intact as of April 26, and a run differential of plus-50
        that ranks among the best in baseball. They have scored 142 runs and allowed 92, a
        disparity that reflects both pitching depth and a lineup that is performing close to its
        ceiling. Their road record stands at 10-4, notable in a division where road games at
        Fenway and Camden Yards have historically flattened early leads.
      </p>

      <p>
        Tampa Bay trails at 15-11 (.577), holding a 2.5-game deficit with a balanced attack
        that has not yet broken through into a defining win streak. Baltimore sits at 13-14 and
        Toronto at 11-15, both hovering in territory that makes a wild-card push plausible but
        not comfortable. Boston (10-17) remains at the bottom, still working through the
        combination of inconsistent starting pitching and an offense that has not clicked
        through April.
      </p>

      <HighlightBox type="key-point" color="orange">
        <p>
          <strong>Yankees pitching depth:</strong> The eight-game win streak has been built on
          a rotation that has not leaned on any single arm. Four different starters have won
          games during the streak, which points to a depth advantage over Tampa Bay and
          Baltimore that could be decisive as rosters are taxed in May and June.
        </p>
      </HighlightBox>

      {/* ── SECTION 2 ────────────────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        2. AL Central and West | Cleveland Leads, Texas Ties Oakland
      </h2>

      <p>
        The AL Central is led by Cleveland at 15-13, a modest front that reflects how tight the
        division has been through April. Detroit (14-14) is competitive with a surprising 10-2
        home record, suggesting a team that plays better inside Comerica Park than its overall
        line suggests. Minnesota has cooled at 12-15, while the White Sox and Kansas City Royals
        trail further behind.
      </p>

      <p>
        The AL West is the most compressed division in either league. Oakland and Texas are
        deadlocked at 14-13, separated by run differential rather than games. Oakland&apos;s
        9-8 road record has been one of the more surprising data points of the early season
        for a franchise that has undergone significant roster reshaping. Seattle (13-15) is
        showing signs of life with a three-game win streak. Houston sits at 10-18, dealing
        with offensive inconsistency from a lineup that was expected to be among the
        strongest in the American League.
      </p>

      {/* AL Standings snapshot */}
      <HighlightBox type="stat" color="orange">
        <p className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-4">
          AL Standings Snapshot | As of April 26, 2026
        </p>
        <div className="divide-y divide-gray-200">
          {[
            { team: 'New York Yankees', record: '18-9', div: 'AL East', note: '8-game win streak, +50 run diff' },
            { team: 'Tampa Bay Rays', record: '15-11', div: 'AL East', note: '2.5 GB' },
            { team: 'Cleveland Guardians', record: '15-13', div: 'AL Central', note: 'Division leaders' },
            { team: 'Detroit Tigers', record: '14-14', div: 'AL Central', note: '10-2 home record' },
            { team: 'Oakland Athletics', record: '14-13', div: 'AL West', note: 'Tied for division lead' },
            { team: 'Texas Rangers', record: '14-13', div: 'AL West', note: 'Tied for division lead' },
            { team: 'Houston Astros', record: '10-18', div: 'AL West', note: 'Offensive struggles' },
          ].map((row) => (
            <div key={row.team} className="flex items-start justify-between py-2.5 gap-4">
              <div>
                <p className="font-bold text-gray-900 text-sm">{row.team}</p>
                <p className="text-xs text-gray-500 mt-0.5">{row.note}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-black text-gray-900 text-sm">{row.record}</p>
                <p className="text-xs text-gray-400">{row.div}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3">
          Source:{' '}
          <a
            href="https://www.cbssports.com/mlb/standings/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            CBS Sports MLB Standings
          </a>
        </p>
      </HighlightBox>

      {/* ── SECTION 3 ────────────────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        3. NL East | Braves Dominant, Phillies Climbing Back
      </h2>

      <p>
        The National League East has been the Braves&apos; division through April. Atlanta sits
        at 19-9 (.679), with an 8-2 record in their last ten games, which includes a loss on
        April 25 to the Phillies in extra innings. That defeat ended a dominant stretch but
        did not shake Atlanta&apos;s position at the top of a division that has trailed off
        quickly below them.
      </p>

      <p>
        Miami (13-14) is the closest challenger, though still well back. Washington (12-16),
        the Mets (9-17), and Philadelphia (9-18) all trail significantly. The Phillies&apos;
        10-inning win over Atlanta on April 25 snapped a 10-game losing streak, a result that
        mattered more psychologically than in the standings. With the Mets dealing with an
        injury to shortstop Francisco Lindor (left calf strain, 10-day IL), their offensive
        ceiling narrows for at least two weeks.
      </p>

      {/* ── SECTION 4 ────────────────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        4. NL Central | Reds and Cubs Trading Momentum
      </h2>

      <p>
        The NL Central has produced the most consistent surprise of the early season in the
        Cincinnati Reds. At 18-9 overall with a 10-3 road record and an 8-2 run in their last
        ten, the Reds have been the least-discussed strong team in the league. Their run
        prevention has been particularly sharp, and their offense has produced enough in close
        games to protect leads without needing to blow teams out.
      </p>

      <p>
        The Chicago Cubs (17-10) had been rolling until a 12-4 loss to the Dodgers on April
        25 snapped their winning streak. Pittsburgh (16-11) and St. Louis (14-12) add genuine
        depth to a division that could produce three teams with realistic playoff ambitions by
        the All-Star break. Milwaukee sits at .500, too early to write off but needing more
        consistency.
      </p>

      <HighlightBox type="key-point" color="orange">
        <p>
          <strong>Reds as the quiet contender:</strong> Cincinnati&apos;s 10-3 road record
          after one month is the kind of indicator that rarely shows up in projections and
          almost always persists. Teams that win on the road early tend to maintain that
          efficiency as the schedule normalises, because road wins reflect pitching and
          defense rather than home crowd effects.
        </p>
      </HighlightBox>

      {/* ── SECTION 5 ────────────────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        5. NL West | Padres Lead, Dodgers a Half-Game Back
      </h2>

      <p>
        The NL West is shaping up as the best divisional race in baseball. San Diego leads
        at 18-8 (.692) with a balanced 9-4 split between home and road games. The Dodgers
        sit at 18-9, just a half-game back after a statement 12-4 win over the Cubs on April
        25 that reminded the league what Los Angeles looks like when its offense is operating
        at full capacity.
      </p>

      <p>
        Arizona (14-12), San Francisco (12-15), and Colorado (11-16) trail well behind the
        two leaders. The race between San Diego and Los Angeles is the one that analysts and
        fans will follow most closely through the summer, with both clubs carrying rosters
        capable of a 95-win pace over a full season.
      </p>

      {/* NL Standings snapshot */}
      <HighlightBox type="stat" color="orange">
        <p className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-4">
          NL Standings Snapshot | As of April 26, 2026
        </p>
        <div className="divide-y divide-gray-200">
          {[
            { team: 'Atlanta Braves', record: '19-9', div: 'NL East', note: '8-2 last 10, division leaders' },
            { team: 'Cincinnati Reds', record: '18-9', div: 'NL Central', note: '10-3 road record' },
            { team: 'San Diego Padres', record: '18-8', div: 'NL West', note: 'Division leaders, .692 win pct' },
            { team: 'Los Angeles Dodgers', record: '18-9', div: 'NL West', note: '0.5 GB, 12-4 W over Cubs' },
            { team: 'Chicago Cubs', record: '17-10', div: 'NL Central', note: 'Win streak snapped April 25' },
            { team: 'Pittsburgh Pirates', record: '16-11', div: 'NL Central', note: 'Third in central' },
            { team: 'New York Mets', record: '9-17', div: 'NL East', note: 'Lindor on 10-day IL (calf)' },
          ].map((row) => (
            <div key={row.team} className="flex items-start justify-between py-2.5 gap-4">
              <div>
                <p className="font-bold text-gray-900 text-sm">{row.team}</p>
                <p className="text-xs text-gray-500 mt-0.5">{row.note}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-black text-gray-900 text-sm">{row.record}</p>
                <p className="text-xs text-gray-400">{row.div}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3">
          Source:{' '}
          <a
            href="https://www.espn.com/mlb/standings"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            ESPN MLB Standings
          </a>
        </p>
      </HighlightBox>

      {/* ── SECTION 6 ────────────────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        6. Breakout Stars | Murakami Makes History, Rushing Emerges
      </h2>

      <p>
        Individual performances have defined April at least as much as divisional races.
        Munetaka Murakami has been the most electrifying story in the league, launching 10 home
        runs in his first 24 career MLB games and tying franchise records with home runs in
        five consecutive games. The pace is historically fast for any player, let alone one
        adapting to major-league pitching for the first time.
      </p>

      <p>
        Dodgers catcher Dalton Rushing has contributed multiple multi-homer games, emerging as
        a presence in the middle of a lineup already loaded with offensive threats. Seattle
        outfielder Julio Rodríguez delivered a two-run homer on April 25 that added to what
        has been a strong start for a player who arrived at spring training as a focal point of
        the Mariners&apos; rebuild. Veterans like Ben Rice of the Yankees and Angels pitcher
        José Soriano have posted elite metrics in hard-hit rates and chase rates, rounding out
        a picture of youth and power thriving alongside established contributors.
      </p>

      <HighlightBox type="quote" color="orange">
        <p>
          &quot;10 home runs in 24 games. Murakami has not just arrived in the big leagues,
          he has announced his arrival in a way that forces the entire league to adjust
          immediately.&quot;
        </p>
        <p className="text-sm text-gray-500 mt-2">
          , ObjectWire Sports Desk, April 2026 analysis
        </p>
      </HighlightBox>

      {/* ── SECTION 7 ────────────────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        7. Injuries and Transactions | Lindor, Dodd, and Rotation Concerns
      </h2>

      <p>
        The injury report through April has hit several teams in places they can least afford.
        Francisco Lindor&apos;s left calf strain places one of the NL&apos;s best shortstops
        on the 10-day IL, creating a gap in the Mets lineup at a time when New York is already
        sitting at 9-17. A calf strain can extend beyond 10 days without warning, and the Mets
        have little margin for the kind of roster shuffling that absorbs a Lindor absence.
      </p>

      <p>
        Atlanta starter Dylan Dodd (thoracic spine) and Baltimore&apos;s Dean Kremer (quad)
        have joined injured lists, adding to a league-wide trend of rotation disruption that
        typically peaks in the first six weeks of the season as pitchers who arrived healthy
        from spring training encounter the accumulated stress of regular starts. The Yankees
        reinstated a reliever from the paternity list while placing another on the IL, the
        kind of routine roster cycling that reflects a healthy organisation managing depth.
      </p>

      <HighlightBox type="key-point" color="orange">
        <p>
          <strong>Roster depth as a competitive advantage:</strong> The early-season injury
          wave has not slowed the Yankees or Padres, both of whom have absorbed absences
          without losing ground in their divisions. Teams at the back of their divisions,
          particularly Boston and the Mets, have less cushion and will need to navigate the
          next 30 games without further roster disruption to stay in contention.
        </p>
      </HighlightBox>

      {/* ── OUTLOOK ──────────────────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        8. Outlook | What May Will Reveal
      </h2>

      <p>
        With May approaching, the Yankees&apos; pitching depth, the Padres&apos; balance, and
        the Braves&apos; experience position all three as genuine divisional frontrunners. The
        tight AL West race between Oakland and Texas, and the NL Central competition between
        Cincinnati and Chicago, promise volatility as rotations stabilise and rosters absorb
        April&apos;s injuries.
      </p>

      <p>
        Power hitting, resilient bullpens, and opportunistic offense will separate contenders
        from the pack as the sample sizes grow. The teams that have been winning on the road,
        the Yankees at 10-4, the Reds at 10-3, tend to sustain those results. The teams
        waiting for an offense to click, Houston, Boston, the Mets, are running out of time
        to recover before the gap at the top of their respective divisions becomes structural.
      </p>

      <p>
        Read the full{' '}
        <Link href="/mlb/robot-umpires-abs-challenge-2026" className="text-blue-600 hover:text-blue-800 underline">
          ABS Challenge System breakdown
        </Link>{' '}
        for more on the technology reshaping how MLB games are called in 2026.
      </p>

      {/* ── SOURCES ──────────────────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        Sources
      </h2>

      <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
        <li>
          <a
            href="https://www.cbssports.com/mlb/standings/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            CBS Sports MLB Standings
          </a>
        </li>
        <li>
          <a
            href="https://www.espn.com/mlb/standings"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            ESPN MLB Standings
          </a>
        </li>
        <li>
          <a
            href="https://www.mlb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            MLB.com Game Recaps and Highlights
          </a>
        </li>
      </ul>
    </NewsArticle>
  );
}
