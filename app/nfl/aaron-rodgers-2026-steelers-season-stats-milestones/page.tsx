import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/nfl/aaron-rodgers-2026-steelers-season-stats-milestones';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/nfl-aaron-rodgers-2026-steelers-season-stats-milestones.jpg';

export const metadata: Metadata = {
  title: "Aaron Rodgers 2026 Steelers Stats | Passes Manning Milestone",
  description:
    "In his final NFL season, 42-year-old Aaron Rodgers has led the Steelers to a 5-2 start while passing Peyton Manning for third all time in passing TDs.",
  keywords: [
    'Aaron Rodgers 2026 Steelers season stats milestones',
    'Aaron Rodgers passes Peyton Manning touchdown record',
    'Pittsburgh Steelers Aaron Rodgers 2026 record',
    '42 year old Aaron Rodgers last rodeo',
    'Steelers offense Mike McCarthy 2026',
    'Aaron Rodgers 540 career touchdown passes',
    'Aaron Rodgers third all time passing touchdowns',
    'Steelers 5-2 start 2026 AFC North',
    'Aaron Rodgers average depth of target 7.99',
    'Rodgers McCarthy Packers reunion 2026',
    'Aaron Rodgers game by game 2026 season',
    'Steelers playoff race 2026 Aaron Rodgers',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Last Rodeo On Track | Aaron Rodgers Passes Peyton Manning, Leads 5-2 Steelers',
    description:
      'The 42-year-old passed Peyton Manning for third all time in touchdown passes and leads the AFC North. A look at his 2026 game-by-game numbers.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-10-26T23:45:00Z',
    modifiedTime: '2026-10-26T23:45:00Z',
    section: 'Sports',
    tags: ['Aaron Rodgers', 'Pittsburgh Steelers', 'NFL', 'Mike McCarthy', 'Joe Montana'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Aaron Rodgers 2026 Steelers season' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rodgers Passes Manning, Leads 5-2 Steelers in Final Season',
    description: '540 career TDs now, third all time. The 42-year-old last rodeo is on track with 13 TDs in 2026.',
    images: [OG_IMAGE],
  },
};

export default function AaronRodgers2026SteelersPage() {
  return (
    <>
      <NewsArticleSchema
        title="Aaron Rodgers 2026 Steelers Stats | Passes Manning Milestone"
        description="In his final NFL season, 42-year-old Aaron Rodgers has led the Steelers to a 5-2 start while passing Peyton Manning for third all time in passing TDs."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.com/authors/jack-brennan"
        publishedTime="2026-10-26T23:45:00Z"
        modifiedTime="2026-10-26T23:45:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Sports"
        keywords={[
          'Aaron Rodgers 2026 Steelers season stats milestones',
          'Aaron Rodgers passes Peyton Manning touchdown record',
          'Steelers offense Mike McCarthy 2026',
        ]}
      />

      <QuickArticle
        title="Last Rodeo On Track | Aaron Rodgers Passes Peyton Manning, Leads 5-2 Steelers"
        subtitle="Entering his 22nd NFL campaign, a season the 42-year-old quarterback has dubbed his last rodeo, Aaron Rodgers is providing the Pittsburgh Steelers with a steady, veteran hand under center."
        department="NFL"
        category="Sports"
        accentColor="#d4a017"
        publishDate="October 26, 2026"
        readTime="5 min read"
        author={{ name: 'Jack Brennan', slug: 'jack-brennan' }}
        heroImage={{
          src: OG_IMAGE,
          alt: 'Aaron Rodgers 2026 Steelers season',
          caption: 'Rodgers passed Peyton Manning for third on the all-time passing touchdown list.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/sports', label: 'Sports' },
          { href: SLUG, label: 'Rodgers 2026 Milestones' },
        ]}
        sources={[
          {
            number: 1,
            title: 'Rodgers Now 3rd All Time in Passing TDs',
            url: 'https://www.steelers.com/news/aaron-rodgers-passing-touchdowns-milestone-2026',
            publisher: 'Pittsburgh Steelers',
          },
          {
            number: 2,
            title: "Aaron Rodgers' 2026 NFL Season: Tracking Records, Milestones",
            url: 'https://www.espn.com/nfl/story/_/id/aaron-rodgers-2026-season-milestones',
            publisher: 'ESPN',
          },
          {
            number: 3,
            title: 'Advanced Numbers Show Aaron Rodgers Is Playing Differently This Year',
            url: 'https://steelersdepot.com/2026/10/rodgers-advanced-numbers-2026/',
            publisher: 'Steelers Depot',
          },
          {
            number: 4,
            title: 'Aaron Rodgers 2026 Season Game Logs and Statistics',
            url: 'https://www.statmuse.com/nfl/player/aaron-rodgers-2026-game-log',
            publisher: 'StatMuse',
          },
        ]}
        relatedArticles={[
          { href: '/nfl/kirk-cousins-raiders-qb1-jets-fernando-mendoza', title: 'Kirk Cousins Raiders QB1 Jets | Kubiak Confirms Starter', category: 'Sports' },
          { href: '/nfl/alaric-jackson-suspension-appeal-bradley-chubb-2026', title: 'Alaric Jackson Suspension Appeal | Punching Ban Cut to One', category: 'Sports' },
          { href: '/news/cam-jurgens-trade-ravens-eagles-2026', title: 'Cam Jurgens Trade Ravens Eagles | Pro Bowl Center Deal', category: 'Sports' },
          { href: '/sports', title: 'Sports Hub | NFL, MLB, WNBA, UFC Coverage', category: 'Sports' },
        ]}
        tags={['Aaron Rodgers', 'Pittsburgh Steelers', 'NFL', 'Mike McCarthy']}
      >
        <p>
          Entering his 22nd NFL campaign, a season the 42-year-old quarterback has dubbed his "last rodeo," <strong>Aaron Rodgers</strong> is providing the Pittsburgh Steelers with a steady, veteran hand under center.
        </p>

        <p>
          Through the first seven weeks of the <strong>2026 NFL season</strong>, Rodgers has guided Pittsburgh to a <strong>5-2 record</strong>, tied atop the competitive AFC North, while continuing to rewrite the league's historical record books.
        </p>

        <p>
          Most recently, Rodgers made history during Pittsburgh's 16-10 victory over the New Orleans Saints. Connecting with tight end Darnell Washington for a four-yard score, Rodgers officially logged his <strong>540th career regular-season touchdown pass</strong>, passing Hall of Famer Peyton Manning to take sole possession of <strong>third place on the NFL's all-time passing touchdown list</strong> behind only Tom Brady and Drew Brees.
        </p>

        <div className="my-8 not-prose rounded-xl border border-yellow-200 bg-yellow-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-yellow-700 mb-3">2026 Season and Statistical Profile</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Team Record:</strong> 5-2, Pittsburgh Steelers, tied 1st in AFC North</li>
            <li><strong>Completion Rate:</strong> 61.6%, 162 of 263 completions</li>
            <li><strong>Passing Volume:</strong> 1,699 yards, 13 touchdowns, 5 interceptions</li>
            <li><strong>Passer Rating:</strong> 88.9</li>
            <li><strong>Historic Milestone:</strong> Passed Peyton Manning at 539 for 3rd all-time in passing TDs at 540</li>
          </ul>
        </div>

        <h2>An Evolving Tactical Approach</h2>

        <p>
          Reunited with former Packers head coach <strong>Mike McCarthy</strong> in Pittsburgh, advanced analytics reveal that Rodgers is taking a noticeably different tactical approach downfield compared to last season.
        </p>

        <p>
          Rodgers' average depth of target (ADoT) has increased to <strong>7.99 yards</strong>, up from 6.38, while his percentage of deep passes has jumped to <strong>13.9%</strong>. Rather than relying on conservative check-downs behind the line of scrimmage, Rodgers has prioritized intermediate throws between the numbers, resulting in back-to-back three-touchdown performances against Cincinnati, Cleveland, and Indianapolis earlier this month.
        </p>

        <h2>Aaron Rodgers 2026 Game-by-Game Production</h2>

        <div className="my-8 not-prose overflow-hidden rounded-xl border border-yellow-200 shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-yellow-500 text-black">
                <th className="px-4 py-2 text-left font-bold">Game, Opponent</th>
                <th className="px-4 py-2 text-left font-bold">Passing Line (C/A)</th>
                <th className="px-4 py-2 text-left font-bold">Yards and TDs</th>
                <th className="px-4 py-2 text-left font-bold">Passer Rating</th>
                <th className="px-4 py-2 text-left font-bold">Result</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Week 1 vs. Atlanta', '24 / 40 (60.0%)', '221 YDS, 1 TD, 0 INT', '83.4', 'W 20-13'],
                ['Week 2 at New England', '23 / 39 (59.0%)', '187 YDS, 0 TD, 1 INT', '60.5', 'L 3-20'],
                ['Week 3 vs. Cincinnati', '19 / 34 (55.9%)', '292 YDS, 3 TD, 1 INT', '101.6', 'W 30-27'],
                ['Week 4 at Cleveland', '22 / 40 (55.0%)', '299 YDS, 3 TD, 2 INT', '83.2', 'L 24-27'],
                ['Week 5 vs. Indianapolis', '22 / 31 (71.0%)', '235 YDS, 3 TD, 0 INT', '125.1', 'W 34-22'],
                ['Week 6 at Tampa Bay', '33 / 49 (67.3%)', '253 YDS, 2 TD, 1 INT', '84.8', 'W 26-19'],
                ['Week 7 at New Orleans', '19 / 30 (63.3%)', '212 YDS, 1 TD, 0 INT', '95.4', 'W 16-10'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 ? 'bg-yellow-50/50' : ''}>
                  <td className="px-4 py-2 font-semibold text-yellow-900">{row[0]}</td>
                  <td className="px-4 py-2 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-2 text-gray-700">{row[2]}</td>
                  <td className="px-4 py-2 text-gray-700">{row[3]}</td>
                  <td className="px-4 py-2 font-semibold text-gray-800">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Playoff Race Outlook</h2>

        <p>
          While Rodgers has occasionally dealt with pressure behind an adapting offensive line, taking 22 sacks through seven games, his crunch-time decision-making has kept Pittsburgh positioned as a legitimate playoff threat in the AFC.
        </p>

        <p>
          With 13 touchdown passes against five interceptions, the future Hall of Famer has given Pittsburgh the offensive stability needed to complement its dominant defense, setting the stage for a compelling final act in his legendary career.
        </p>

        <p>
          For more NFL coverage, see the{' '}
          <Link href="/sports" className="text-blue-600 hover:text-blue-800 underline">
            Sports hub
          </Link>{' '}
          and our report on{' '}
          <Link href="/nfl/kirk-cousins-raiders-qb1-jets-fernando-mendoza" className="text-blue-600 hover:text-blue-800 underline">
            Kirk Cousins remaining the Raiders' QB1
          </Link>
          .
        </p>
      </QuickArticle>
    </>
  );
}