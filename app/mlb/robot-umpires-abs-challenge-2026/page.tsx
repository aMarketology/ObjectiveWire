import type { Metadata } from 'next';
import Link from 'next/link';
import {
  NewsArticle,
  HighlightBox,
  Timeline,
} from '@/components/articles/NewsArticle';

export const dynamic = 'force-dynamic';

const SLUG = '/mlb/robot-umpires-abs-challenge-2026';
const ARTICLE_URL = `https://www.owire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'MLB ABS Challenge System 2026 | Are Robot Umpires Inevitable',
  description:
    "MLB's 2026 ABS Challenge System lets players contest ball-strike calls via Hawk-Eye. With umpire accuracy gaps exposed, are robot umps inevitable?",
  keywords: [
    'MLB robot umpires',
    'MLB ABS challenge system',
    'ABS challenge system 2026',
    'automated ball strike system MLB',
    'Hawk-Eye MLB pitch tracking',
    'MLB pitch challenge 2026',
    'robot umpire baseball',
    'MLB umpire accuracy 2025',
    'CB Bucknor accuracy',
    'Bruce Dreckman accuracy',
    'Laz Diaz umpire accuracy',
    'MLB technology 2026',
    'automated ball strike challenge',
    'human umpire replaced by technology',
    'MLB umpire reform 2026',
    'T-Mobile ABS system',
    'UmpScorecards MLB data',
    'pitch tracking baseball',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'MLB ABS Challenge System 2026 | Are Robot Umpires Inevitable',
    description:
      "MLB's pitch challenge system exposes the accuracy gap between human umpires and Hawk-Eye tracking. Inside the technology reshaping ball-strike calls.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-05-04T14:00:00Z',
    modifiedTime: '2026-05-04T14:00:00Z',
    section: 'MLB',
    tags: ['MLB', 'Robot Umpires', 'ABS System', 'Baseball Technology', 'Hawk-Eye'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MLB ABS Challenge System | Is This the End of Human Umpires?',
    description:
      'Hawk-Eye is overturning calls. Umpire accuracy sits at 92.5%. The 2026 pitch challenge system may be baseball technology\'s point of no return.',
  },
};

export default function MLBRobotUmpiresPage() {
  return (
    <NewsArticle
      title="MLB ABS Challenge System 2026 | Are Robot Umpires Inevitable"
      subtitle="Major League Baseball's new pitch challenge system uses Hawk-Eye to correct human ball-strike calls in real time. The accuracy data is damning, and the transition to full automation may already be underway."
      category="MLB"
      categoryColor="red"
      topicTag="sports"
      publishDate="May 4, 2026"
      readTime="8 min read"
      author={{
        name: 'ObjectWire Sports Desk',
        role: 'MLB Coverage',
      }}
      slug="mlb-robot-umpires-abs-challenge-2026"
      url={SLUG}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'MLB', item: '/mlb' },
        { name: 'ABS Challenge System', item: SLUG },
      ]}
      tags={['MLB', 'Robot Umpires', 'ABS System', 'Baseball Technology', 'Hawk-Eye', 'Umpires']}
      trending
    >
      {/* ── INTRO ────────────────────────────────────────────────────────── */}
      <p>
        <strong>Major League Baseball's 2026 season</strong> introduced the Automated Ball-Strike
        (ABS) Challenge System, a hybrid experiment that lets batters, pitchers, and catchers
        contest ball and strike calls using{' '}
        <a
          href="https://www.hawkeyeinnovations.com/sport/baseball"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Hawk-Eye pitch-tracking technology
        </a>
        . Marketed as a balanced compromise between tradition and accuracy, the system raises an
        uncomfortable question for the sport: how long before human umpires are pushed aside
        entirely by machines?
      </p>

      <p>
        Early 2026 data already shows a meaningful percentage of challenges overturning calls,
        exposing inconsistencies that pitch-tracking databases had been quantifying for years.
        This is not a hypothetical shift. It is underway, and it is accelerating.{' '}
        <Link href="/mlb" className="text-blue-600 hover:text-blue-800 underline">
          Follow all MLB coverage
        </Link>{' '}
        as the system unfolds across a full 162-game season.
      </p>

      {/* ── KEY STATS ────────────────────────────────────────────────────── */}
      <HighlightBox type="stat" color="orange">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-2">
          {[
            { value: '2', label: 'Challenges per team per game' },
            { value: '92.5%', label: 'Lowest umpire accuracy recorded (2025)' },
            { value: '93%+', label: 'MLB average correct-call rate' },
            { value: '30', label: 'MLB ballparks with Hawk-Eye installed' },
            { value: '~2 sec', label: 'Challenge window after each pitch' },
            { value: '1', label: 'Bonus challenge available in extra innings' },
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
        1. How the ABS Challenge System Works | Hawk-Eye in the Majors
      </h2>

      <p>
        Under the new rules, home-plate umpires still make every real-time call. But batters,
        pitchers, and catchers can immediately challenge by tapping their helmet or cap within
        approximately two seconds of the call, with no input required from dugouts or managers.
        The system, powered by T-Mobile, instantly reviews the pitch against a standardized
        strike zone calibrated to each individual batter&apos;s height.
      </p>

      <p>
        Results flash on videoboards within seconds, delivering a level of transparency that
        fans have responded to enthusiastically. The speed of the review is critical. Unlike
        replay challenges in other sports, which can grind games to a halt, the ABS system
        delivers a ruling before the next pitch is ready. That pace was a deliberate design
        decision, and it has helped the system integrate into game flow without the prolonged
        delays that made full automation proposals controversial in earlier discussions.
      </p>

      <HighlightBox type="key-point" color="orange">
        <p>
          <strong>How Hawk-Eye works:</strong> Hawk-Eye uses a network of high-speed cameras
          positioned around the ballpark to triangulate the exact three-dimensional path of
          every pitch. The system calculates where the ball crossed the plate to within
          fractions of an inch, then compares that position against the batter-specific strike
          zone stored in the system. The entire review takes under two seconds.
        </p>
      </HighlightBox>

      {/* ── SECTION 2 ────────────────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        2. Challenge Rules | How Teams Can Use Them in 2026
      </h2>

      <p>
        Each team begins with two challenges. A successful challenge is returned, meaning
        teams that challenge wisely can retain both throughout the game. Two failed challenges
        exhaust the team&apos;s ability to contest any further ball-strike calls for the
        remainder of regulation play. If the game extends to extra innings, each team receives
        one additional challenge, resetting the ability to contest borderline pitches in
        high-leverage situations.
      </p>

      <p>
        The restrictions were designed to limit frivolous challenges and preserve game pace.
        In practice, they have created a new layer of strategic decision-making. Teams are
        building challenge analysis into their replay rooms, tracking pitch data in real time
        to advise catchers on which calls are worth contesting and which are too close to
        justify burning a challenge. The ABS system has, in effect, added a game-within-a-game.
      </p>

      <HighlightBox type="key-point" color="orange">
        <p>
          <strong>Who can challenge:</strong> Only the batter, pitcher, or catcher directly
          involved in the pitch may initiate a challenge. Managers and coaches cannot trigger
          one from the dugout. The batter taps the helmet; the pitcher or catcher taps the cap.
          The two-second window begins the moment the umpire signals the call.
        </p>
      </HighlightBox>

      {/* ── SECTION 3 ────────────────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        3. The Accuracy Gap | Why the Data Favors the Machine
      </h2>

      <p>
        The case for technology is not speculative. Pitch-tracking databases, most prominently
        the{' '}
        <a
          href="https://umpscorecards.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          UmpScorecards
        </a>{' '}
        project, have spent years cataloguing every called pitch against its Hawk-Eye position.
        The data consistently shows human umpires operating in the low-to-mid 93% correct-call
        range under ideal conditions. On borderline pitches, the kind most likely to be
        challenged, that accuracy falls considerably.
      </p>

      <p>
        Players have understood this disparity for years, even without public access to the
        granular numbers. Pitchers whose repertoires depend on corner-painting — the bottom of
        the zone, the outer edge — have long complained about inconsistent zones shifting
        call-to-call within the same at-bat. The ABS Challenge System does not eliminate that
        inconsistency during the pitch itself, but it does introduce a correction mechanism
        that simply did not exist before 2026.
      </p>

      <p>
        The result is a system that subtly undermines the authority of the home-plate umpire
        on every pitch. When a challenge overturns a call, it is not just a reversal. It is a
        public, videoboard-broadcast statement that the umpire was wrong. That dynamic, repeated
        across 2,430 regular-season games, has implications for how the role of the umpire is
        perceived.
      </p>

      {/* ── SECTION 4 ────────────────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        4. Umpires With the Lowest Accuracy | 2025 Pitch-Tracking Data
      </h2>

      <p>
        Several umpires have repeatedly ranked near the bottom of accuracy metrics derived
        from pitch-tracking data. In 2025, four names stood out for correct-call rates
        meaningfully below the league average, generating higher overturn rates under the
        ABS system in early 2026.
      </p>

      {/* Umpire accuracy data table */}
      <HighlightBox type="stat" color="orange">
        <p className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-4">
          2025 Umpire Accuracy | Lowest-Ranked by Correct-Call Rate
        </p>
        <div className="divide-y divide-gray-200">
          {[
            { name: 'Bruce Dreckman', rate: '92.50%', note: 'Lowest mark in 2025 regular season' },
            { name: 'Laz Diaz', rate: '92.80%', note: 'Multiple poor-accuracy seasons on record' },
            { name: 'C.B. Bucknor', rate: '92.81%', note: 'One of several consecutive below-average years' },
            { name: 'Andy Fletcher', rate: '92.87%', note: 'Consistent criticism for inconsistent zones' },
            { name: 'MLB Average', rate: '93%+', note: 'League-wide correct-call baseline (2025)' },
          ].map((row) => (
            <div key={row.name} className="flex items-start justify-between py-3 gap-4">
              <div>
                <p className="font-bold text-gray-900 text-sm">{row.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{row.note}</p>
              </div>
              <p className="font-black text-gray-900 text-lg shrink-0">{row.rate}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3">
          Source:{' '}
          <a
            href="https://www.espn.com/mlb/story/_/id/48486702/mlb-2026-automated-ball-strike-challenge-system-rule-players-weigh-in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            ESPN analysis
          </a>{' '}
          and UmpScorecards pitch-tracking data, 2025 regular season.
        </p>
      </HighlightBox>

      <p>
        These accuracy gaps matter more now than they did before the challenge era. A 0.5
        percentage-point difference in correct-call rate translates to dozens of wrong calls
        over a full season for a single umpire, any one of which could affect a pennant race.
        The ABS system makes that failure rate visible in a way it never was before, and that
        visibility is irreversible.
      </p>

      {/* ── SECTION 5 ────────────────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        5. The Traditionalist Case | What Gets Lost With Robot Umps
      </h2>

      <p>
        The arguments against full automation are real, and they extend beyond nostalgia. The
        human element in umpiring, the confrontations, the ejections, the argument that spills
        onto the field in the sixth inning of a one-run game, has long been part of the sport&apos;s
        texture. Those moments generate memorable highlights, build rivalries, and give managers
        a theatrical tool that has no equivalent in any other major sport.
      </p>

      <p>
        Critics also raise legitimate concerns about what a fully standardised strike zone does
        to pitcher strategy. For decades, catchers and pitchers have worked to expand the zone
        through framing, sequencing, and relationship-building with individual umpires. A
        machine-called zone eliminates that dimension entirely. The pitcher who can paint corners
        gains, but the catcher who can frame a borderline pitch loses an art form that has been
        part of the game for generations.
      </p>

      <HighlightBox type="quote" color="orange">
        <p>
          &quot;Once players and fans grow accustomed to machine-corrected calls, the pressure
          to eliminate human judgment entirely will intensify. The challenge system does not
          preserve the human umpire. It just delays the conversation.&quot;
        </p>
        <p className="text-sm text-gray-500 mt-2">
          , Baseball analytics community consensus, Spring 2026
        </p>
      </HighlightBox>

      {/* ── SECTION 6 ────────────────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        6. Minor League Precedent | What Full ABS Testing Revealed
      </h2>

      <p>
        Full robot umps, where machines call every pitch without human intervention, were
        tested extensively in the minor leagues before MLB chose the challenge format. The
        trials ran across Atlantic League, Double-A, and Triple-A levels over multiple
        seasons, generating a substantial data set on how full automation affects game pace,
        player adjustment, and fan reaction.
      </p>

      <p>
        The results were broadly positive in terms of accuracy and pace. Full ABS games moved
        faster than those with human-called zones, primarily because borderline pitches were
        decided instantly with no opportunity for argument. Pitchers adapted more quickly than
        expected. Hitters took longer. The data on whether full automation produced better
        competitive outcomes was mixed, but no major operational failures emerged in the
        multi-season trial.
      </p>

      {/* ABS testing timeline */}
      <Timeline
        events={[
          {
            time: '2019',
            title: 'Hawk-Eye installed in all 30 MLB ballparks',
            description:
              'MLB begins the infrastructure rollout required for an automated ball-strike system, installing Hawk-Eye camera networks at every major-league venue.',
          },
          {
            time: '2021',
            title: 'Atlantic League adopts full ABS | First pro league to go automated',
            description:
              'The independent Atlantic League becomes the first professional baseball league to use a fully automated ball-strike system, calling every pitch by machine.',
          },
          {
            time: '2022',
            title: 'MLB expands ABS trials to Double-A and Triple-A',
            description:
              'Both full ABS and the challenge format are tested simultaneously in affiliated minor-league play, generating comparative data on player and umpire response.',
          },
          {
            time: '2024',
            title: 'Challenge format adopted across all Triple-A and Double-A',
            description:
              'After two years of comparative testing, MLB standardises on the challenge format for affiliated minor leagues, signalling which model it favours for the majors.',
          },
          {
            time: 'April 2026',
            title: 'ABS Challenge System debuts in MLB regular season',
            description:
              'The system goes live in major-league games for the first time, powered by T-Mobile-sponsored Hawk-Eye infrastructure. Early overturn data generates immediate media coverage.',
          },
        ]}
      />

      {/* ── SECTION 7 ────────────────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        7. What Comes Next | The Road to Full Automation
      </h2>

      <p>
        MLB chose the challenge format as a middle ground, preserving umpire presence and game
        personality while introducing a correction layer. The framing was deliberate: this is
        not robot umps, it is a safety net. But that framing may not survive the first few years
        of published overturn data.
      </p>

      <p>
        Once the public becomes accustomed to watching calls reversed in real time, the next
        logical question becomes obvious. If the machine can correct wrong calls in two seconds,
        why not just use the machine for the call itself? Some analysts forecast that full
        automation could arrive within a decade, with the challenge system serving as the
        transitional stage that builds public acceptance without triggering the immediate
        backlash that full automation would have provoked.
      </p>

      <p>
        Umpires are not obsolete yet. They control the field, manage pace, make judgment calls
        beyond ball and strike, and bring an institutional presence that the sport still values.
        But the window for purely human ball-strike calls is narrowing. The 2026 challenge
        system is not a compromise that preserves the status quo. It is a managed transition,
        and the destination is increasingly clear.
      </p>

      <HighlightBox type="key-point" color="orange">
        <p>
          <strong>The hybrid experiment buys time.</strong> MLB&apos;s ABS Challenge System
          gives players, fans, and media time to adjust to machine-assisted officiating before
          the more disruptive question of full automation arrives. Whether that window is
          five years or fifteen will depend on how the overturn data accumulates, how the
          players&apos; union responds in the next collective bargaining cycle, and how
          many high-profile calls get reversed in pennant-race situations.
        </p>
      </HighlightBox>

      {/* ── SOURCES ──────────────────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        Sources
      </h2>

      <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
        <li>
          <a
            href="https://www.mlb.com/news/abs-challenge-system-mlb-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            MLB Official ABS Challenge System Announcement
          </a>
        </li>
        <li>
          <a
            href="https://www.mlb.com/interactive/mlb-abs-system-explainer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            MLB ABS System Explainer (Interactive)
          </a>
        </li>
        <li>
          <a
            href="https://www.espn.com/mlb/story/_/id/48486702/mlb-2026-automated-ball-strike-challenge-system-rule-players-weigh-in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            ESPN | MLB 2026 ABS Challenge System, Players Weigh In
          </a>
        </li>
        <li>
          <a
            href="https://umpscorecards.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            UmpScorecards | Pitch-tracking accuracy database
          </a>
        </li>
      </ul>
    </NewsArticle>
  );
}
