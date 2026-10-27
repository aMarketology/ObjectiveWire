import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/wnba/finals-game-6-state-farm-arena-afternoon-schedule';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/wnba-finals-game-6-state-farm-arena-afternoon-schedule.jpg';

export const metadata: Metadata = {
  title: 'WNBA Finals Game 6 State Farm Arena | Thursday Matinee',
  description:
    'Game 6 of the 2026 WNBA Finals between Dream and Valkyries moves to Thursday afternoon at 12:30 p.m. ET due to a Hawks scheduling conflict.',
  keywords: [
    'WNBA Finals Game 6 State Farm Arena afternoon schedule',
    'Atlanta Dream Golden State Valkyries WNBA Finals Game 6',
    'NBA Hawks priority WNBA scheduling conflict',
    'State Farm Arena matinee WNBA Finals',
    'USA Network Peacock WNBA broadcast',
    'WNBA Finals Game 6 October 29 2026',
    'Dream Valkyries Game 6 matinee',
    'WNBA Finals schedule broadcast breakdown',
    'State Farm Arena doubleheader Hawks Cavaliers',
    'Cathy Engelbert WNBA Finals scheduling',
    'WNBA Finals Game 6 12:30 pm ET',
    'Golden State Valkyries Atlanta Dream championship',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Matinee Matchup | WNBA Finals Game 6 Scheduled for Thursday Afternoon in Atlanta',
    description:
      'Game 6 of the 2026 WNBA Finals between the Dream and Valkyries tips at 12:30 p.m. ET Thursday after a scheduling conflict with the Atlanta Hawks was resolved.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-10-26T21:00:00Z',
    modifiedTime: '2026-10-26T21:00:00Z',
    section: 'Sports',
    tags: ['WNBA', 'Atlanta Dream', 'Golden State Valkyries', 'WNBA Finals', 'Basketball'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'WNBA Finals Game 6 State Farm Arena afternoon schedule' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WNBA Finals Game 6 Moves to Thursday Afternoon Matinee',
    description: 'Hawks priority at State Farm Arena pushes Dream-Valkyries to 12:30 p.m. ET on USA Network and Peacock.',
    images: [OG_IMAGE],
  },
};

export default function WNBAFinalsGame6Page() {
  return (
    <>
      <NewsArticleSchema
        title="WNBA Finals Game 6 State Farm Arena | Thursday Matinee"
        description="Game 6 of the 2026 WNBA Finals between Dream and Valkyries moves to Thursday afternoon at 12:30 p.m. ET due to a Hawks scheduling conflict."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.com/authors/jack-brennan"
        publishedTime="2026-10-26T21:00:00Z"
        modifiedTime="2026-10-26T21:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Sports"
        keywords={[
          'WNBA Finals Game 6 State Farm Arena afternoon schedule',
          'Atlanta Dream Golden State Valkyries WNBA Finals Game 6',
          'USA Network Peacock WNBA broadcast',
        ]}
      />

      <QuickArticle
        title="Matinee Matchup | WNBA Finals Game 6 Scheduled for Thursday Afternoon in Atlanta"
        subtitle="In an unprecedented scheduling decision for a major professional sports championship, Game 6 of the 2026 WNBA Finals between the Atlanta Dream and the Golden State Valkyries will be played as a Thursday afternoon matinee."
        department="WNBA"
        category="Sports"
        accentColor="purple"
        publishDate="October 26, 2026"
        readTime="4 min read"
        author={{ name: 'Jack Brennan', slug: 'jack-brennan' }}
        heroImage={{
          src: OG_IMAGE,
          alt: 'WNBA Finals Game 6 State Farm Arena afternoon schedule',
          caption: 'Game 6 tips at 12:30 p.m. ET Thursday at State Farm Arena.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/sports', label: 'Sports' },
          { href: SLUG, label: 'WNBA Finals Game 6' },
        ]}
        sources={[
          {
            number: 1,
            title: 'Game 6 of 2026 WNBA Finals to Be Played at State Farm Arena on Thursday, October 29',
            url: 'https://www.wnba.com/news/game-6-2026-wnba-finals-state-farm-arena-october-29',
            publisher: 'WNBA',
          },
          {
            number: 2,
            title: 'WNBA Championship May Be Decided on a Thursday Morning Because an NBA Game Took Priority',
            url: 'https://www.nbcnews.com/sports/wnba-finals-game-6-thursday-morning-nba-priority',
            publisher: 'NBC News',
          },
          {
            number: 3,
            title: 'Dream, Valkyries to Play Game 6, WNBA Finals at State Farm as Thursday Matinee',
            url: 'https://www.espn.com/wnba/story/_/id/wnba-finals-game-6-matinee',
            publisher: 'ESPN',
          },
          {
            number: 4,
            title: 'WNBA Finals Game 6: ATL Dream vs. Valkyries at State Farm Arena',
            url: 'https://www.fox5atlanta.com/sports/wnba-finals-game-6-dream-valkyries',
            publisher: 'FOX 5 Atlanta',
          },
        ]}
        relatedArticles={[
          { href: '/news/nba-finals-2026-knicks-spurs-preview-prediction', title: 'NBA Finals 2026 | Knicks vs Spurs Preview and Prediction', category: 'Sports' },
          { href: '/soccer/harry-kane-2026-ballon-dor-winner', title: 'Harry Kane 2026 Ballon dOr | First English Winner Since Owen', category: 'Sports' },
          { href: '/sports', title: 'Sports Hub | NFL, MLB, WNBA, UFC Coverage', category: 'Sports' },
        ]}
        tags={['WNBA', 'Atlanta Dream', 'Golden State Valkyries', 'WNBA Finals', 'Basketball']}
      >
        <p>
          In an unprecedented scheduling decision for a major professional sports championship, Game 6 of the <strong>2026 WNBA Finals</strong> between the <strong>Atlanta Dream</strong> and the <strong>Golden State Valkyries</strong> will be played as a Thursday afternoon matinee.
        </p>

        <p>
          The WNBA officially announced Monday that Game 6 at <strong>State Farm Arena</strong> in Atlanta will tip off at <strong>12:30 p.m. ET / 9:30 a.m. PT on Thursday, October 29</strong>.
        </p>

        <p>
          The game, originally slotted for an 8:00 p.m. ET prime-time window, was pushed to midday after complex multi-party negotiations resolved a home-venue conflict with the NBA's Atlanta Hawks.
        </p>

        <div className="my-8 not-prose rounded-xl border border-purple-200 bg-purple-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-700 mb-3">Logistical and Scheduling Conflict Summary</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Fixture:</strong> WNBA Finals Game 6, Golden State Valkyries vs. Atlanta Dream</li>
            <li><strong>Date and Time:</strong> Thursday, October 29, 2026 at 12:30 p.m. ET / 9:30 a.m. PT</li>
            <li><strong>Venue:</strong> State Farm Arena, Atlanta, Georgia</li>
            <li><strong>Conflict Cause:</strong> Prior venue booking for Atlanta Hawks vs. Cleveland Cavaliers NBA game</li>
            <li><strong>Broadcast Coverage:</strong> Live on USA Network and streaming on Peacock</li>
          </ul>
        </div>

        <h2>An Unprecedented Venue Overlap</h2>

        <p>
          The schedule crunch arose because State Farm Arena was previously booked for the Atlanta Hawks' regular-season home matchup against the Cleveland Cavaliers on Thursday evening.
        </p>

        <p>
          Because secondary venues in the metropolitan area were unavailable on short notice to meet WNBA championship broadcast requirements, league officials collaborated with the NBA, the Hawks, the Dream, the Valkyries, and broadcast partners at NBCUniversal to engineer a doubleheader at the arena.
        </p>

        <p>
          To make the dual-event setup possible, the Hawks agreed to shift their evening game against Cleveland back to 8:00 p.m. ET, providing venue staff an extended window to rebrand the hardwood following the conclusion of the afternoon WNBA contest.
        </p>

        <h2>WNBA Finals Schedule and Broadcast Breakdown</h2>

        <div className="my-8 not-prose overflow-hidden rounded-xl border border-purple-200 shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-purple-600 text-white">
                <th className="px-4 py-2 text-left font-bold">Game</th>
                <th className="px-4 py-2 text-left font-bold">Date and Location</th>
                <th className="px-4 py-2 text-left font-bold">Tip-off Time</th>
                <th className="px-4 py-2 text-left font-bold">Broadcast Network</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Game 5', 'Mon, Oct 26 at Chase Center, San Francisco', '8:00 p.m. ET', 'USA Network / Peacock'],
                ['Game 6', 'Thu, Oct 29 at State Farm Arena, Atlanta', '12:30 p.m. ET', 'USA Network / Peacock'],
                ['Game 7 (if necessary)', 'Sat, Oct 31 at Chase Center, San Francisco', '8:00 p.m. ET', 'NBC / Peacock'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 ? 'bg-purple-50/50' : ''}>
                  <td className="px-4 py-2 font-semibold text-purple-900">{row[0]}</td>
                  <td className="px-4 py-2 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-2 text-gray-700">{row[2]}</td>
                  <td className="px-4 py-2 text-gray-700">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Growth and Scheduling Friction</h2>

        <p>
          The unusual 12:30 p.m. kickoff has sparked wide conversation across the sports landscape regarding arena lease priority and scheduling infrastructure as women's basketball experiences record-breaking viewership and stadium attendance.
        </p>

        <p>
          Despite the non-traditional daytime slot, WNBA Commissioner <strong>Cathy Engelbert</strong> praised the cooperative efforts of all parties involved, confirming that both USA Network and Peacock will launch coordinated marketing efforts to drive awareness and tune-in ahead of Thursday's high-stakes game.
        </p>

        <p>
          For more basketball coverage, see the{' '}
          <Link href="/sports" className="text-blue-600 hover:text-blue-800 underline">
            Sports hub
          </Link>{' '}
          and our{' '}
          <Link href="/news/nba-finals-2026-knicks-spurs-preview-prediction" className="text-blue-600 hover:text-blue-800 underline">
            NBA Finals 2026 preview
          </Link>
          .
        </p>
      </QuickArticle>
    </>
  );
}