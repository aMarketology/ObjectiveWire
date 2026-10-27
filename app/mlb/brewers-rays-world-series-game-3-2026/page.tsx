import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/mlb/brewers-rays-world-series-game-3-2026';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/mlb-brewers-rays-world-series-game-3-2026.jpg';

export const metadata: Metadata = {
  title: "Brewers vs Rays World Series Game 3 | 8-Run Surge",
  description:
    "Fueled by a historic eight-run, two-out surge in the fifth inning and Jackson Chourio's four-hit night, the Brewers dominated the Rays in Game 3.",
  keywords: [
    'Brewers vs Rays World Series Game 3 score',
    'Milwaukee Brewers Tampa Bay Rays World Series Game 3',
    '8 run fifth inning Brewers',
    'Jackson Chourio 4 hits World Series',
    'Tropicana Field World Series 2026',
    'Brewers 10-0 Rays Game 3',
    'Brewers Rays World Series 2026 score',
    'Milwaukee Brewers world series 2026',
    'Tampa Bay Rays World Series Game 3',
    'Brewers 8 consecutive two-out hits',
    'Robert Gasser World Series Game 3',
    'MLB World Series 2026 Game 3',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Historic Outburst | Brewers Blow Open World Series Game 3 With 8-Run Surge',
    description:
      'Eight consecutive two-out hits in the fifth inning and a 4-for-4 night for Jackson Chourio put the Brewers up 10-0 and within one win of a title.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-10-26T22:00:00Z',
    modifiedTime: '2026-10-26T22:00:00Z',
    section: 'Sports',
    tags: ['Milwaukee Brewers', 'Tampa Bay Rays', 'World Series', 'MLB', 'Jackson Chourio'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Brewers vs Rays World Series Game 3' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brewers Blow Open Game 3 With Historic 8-Run Fifth Inning',
    description: 'Eight straight two-out hits. Chourio 4-for-4. Brewers up 10-0 at Tropicana Field.',
    images: [OG_IMAGE],
  },
};

export default function BrewersRaysWorldSeriesGame3Page() {
  return (
    <>
      <NewsArticleSchema
        title="Brewers vs Rays World Series Game 3 | 8-Run Surge Score"
        description="Fueled by a historic eight-run, two-out surge in the fifth inning and Jackson Chourio's four-hit night, the Brewers dominated the Rays in Game 3."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.com/authors/jack-brennan"
        publishedTime="2026-10-26T22:00:00Z"
        modifiedTime="2026-10-26T22:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Sports"
        keywords={[
          'Brewers vs Rays World Series Game 3 score',
          '8 run fifth inning Brewers',
          'Jackson Chourio 4 hits World Series',
        ]}
      />

      <QuickArticle
        title="Historic Outburst | Brewers Blow Open World Series Game 3 With 8-Run Fifth-Inning Surge"
        subtitle="The Milwaukee Brewers' relentless postseason offense delivered a record-shattering statement as the 2026 World Series shifted to Tropicana Field for Game 3 on Monday night."
        department="MLB"
        category="Sports"
        accentColor="blue"
        publishDate="October 26, 2026"
        readTime="4 min read"
        author={{ name: 'Jack Brennan', slug: 'jack-brennan' }}
        heroImage={{
          src: OG_IMAGE,
          alt: 'Brewers vs Rays World Series Game 3',
          caption: 'The Brewers rolled to a commanding 10-0 lead at Tropicana Field.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/mlb', label: 'MLB' },
          { href: SLUG, label: 'World Series Game 3' },
        ]}
        sources={[
          {
            number: 1,
            title: 'World Series Game 3 Live Updates: Brewers Surge to 10-0 Lead Over Rays',
            url: 'https://www.foxsports.com/mlb/world-series-game-3-brewers-rays-live-updates-2026',
            publisher: 'FOX Sports',
          },
          {
            number: 2,
            title: 'Brewers vs. Rays Live Updates: World Series Game 3 Score and Highlights',
            url: 'https://www.jsonline.com/story/sports/mlb/brewers/2026/10/26/brewers-rays-world-series-game-3',
            publisher: 'Milwaukee Journal Sentinel',
          },
          {
            number: 3,
            title: 'Milwaukee Brewers at Tampa Bay Rays Game Story and Box Score',
            url: 'https://www.mlb.com/gameday/brewers-vs-rays/2026/10/26',
            publisher: 'MLB.com',
          },
          {
            number: 4,
            title: "Rays Put on Brink of World Series Flop by Brewers' Historic 8-Run, 2-Out Surge",
            url: 'https://www.newsday.com/sports/baseball/rays-brewers-world-series-game-3',
            publisher: 'Newsday',
          },
        ]}
        relatedArticles={[
          { href: '/mlb/dodgers-braves-nlds-game-4-2026', title: 'Dodgers vs Braves NLDS Game 4 | Elimination Game at Truist Park', category: 'Sports' },
          { href: '/mlb/2026-pennant-races-world-series-schedule', title: '2026 Pennant Races and World Series Schedule', category: 'Sports' },
          { href: '/wnba/finals-game-6-state-farm-arena-afternoon-schedule', title: 'WNBA Finals Game 6 | Thursday Matinee at State Farm Arena', category: 'Sports' },
          { href: '/mlb', title: 'MLB Hub | Scores, Standings, and Playoffs', category: 'Sports' },
        ]}
        tags={['Milwaukee Brewers', 'Tampa Bay Rays', 'World Series', 'MLB', 'Jackson Chourio']}
      >
        <p>
          The Milwaukee Brewers' relentless postseason offense delivered a record-shattering statement as the <strong>2026 World Series</strong> shifted to Tropicana Field for Game 3 on Monday night.
        </p>

        <p>
          Exploding for an <strong>eight-run, two-out rally in the top of the fifth inning</strong>, the Milwaukee Brewers built a commanding <strong>10-0 lead over the Tampa Bay Rays</strong>.
        </p>

        <p>
          The offensive barrage, capped by eight consecutive hits with two outs, put Milwaukee within striking distance of taking an overwhelming 3-0 series lead in their pursuit of the franchise's first World Series title.
        </p>

        <div className="my-8 not-prose rounded-xl border border-blue-200 bg-blue-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3">Game 3 Inning Breakdown Summary</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Location:</strong> Tropicana Field, St. Petersburg, Florida</li>
            <li><strong>Series Standing:</strong> Milwaukee Brewers lead series 2-0</li>
            <li><strong>Early Action:</strong> Christian Yelich and William Contreras RBI singles in top 3rd, MIL 2-0</li>
            <li><strong>Fifth Inning Surge:</strong> 8 runs scored on 8 consecutive two-out hits, MIL 10-0</li>
            <li><strong>Offensive Standout:</strong> Jackson Chourio goes 4-for-4 with 2 doubles and an RBI</li>
          </ul>
        </div>

        <h2>Eight Hits, Eight Runs | The Fifth-Inning Avalanche</h2>

        <p>
          With two outs and the bases loaded against Rays reliever <strong>Cam Booser</strong> in the top of the fifth inning, Milwaukee unleashed one of the most explosive two-out rallies in MLB postseason history.
        </p>

        <p>
          <strong>Brice Turang</strong> ignited the scoring wave with a two-run single up the middle. <strong>Garrett Mitchell</strong> followed immediately with an RBI single, before <strong>Cooper Pratt</strong> doubled down the left-field line to drive in two more runs.
        </p>

        <p>
          <strong>Sal Frelick</strong> added another RBI double, forcing a second pitching change. Against reliever <strong>Cole Sulser</strong>, <strong>David Hamilton</strong> ripped an RBI single before <strong>Jackson Chourio</strong> delivered his fourth hit of the night, an RBI double, to push the lead to 10-0.
        </p>

        <h2>Selected Player Line Statistics</h2>

        <div className="my-8 not-prose overflow-hidden rounded-xl border border-blue-200 shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-2 text-left font-bold">Player</th>
                <th className="px-4 py-2 text-left font-bold">Position</th>
                <th className="px-4 py-2 text-left font-bold">Game 3 Key Performance</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Jackson Chourio', 'Outfielder', '4-for-4, 2 Doubles, RBI, 1 Run Scored'],
                ['Christian Yelich', 'Designated Hitter', '2-for-3, RBI Single, 1 Run Scored'],
                ['Cooper Pratt', 'Shortstop', '1-for-3, 2-Run Double, 1 Run Scored'],
                ['Robert Gasser', 'Starting Pitcher', '5.0 IP, 1 Hit, 0 ER, 72 Pitches'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 ? 'bg-blue-50/50' : ''}>
                  <td className="px-4 py-2 font-semibold text-blue-900">{row[0]}</td>
                  <td className="px-4 py-2 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-2 text-gray-700">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Chourio's Perfect Night at the Plate</h2>

        <p>
          Leading the way for Milwaukee's balanced lineup was 22-year-old outfielder <strong>Jackson Chourio</strong>. The rookie phenom put on a hitting clinic, starting his night 4-for-4 with two singles, two doubles, and an RBI. Chourio scored the opening run of the game in the third inning following an RBI single from veteran Christian Yelich, setting the tone for Milwaukee's continuous pressure on the bases.
        </p>

        <p>
          On the mound, Brewers starter <strong>Robert Gasser</strong> worked efficiently through 5.0 scoreless innings, giving up just one single while keeping the Rays' lineup off-balance throughout the evening.
        </p>

        <p>
          For more postseason coverage, see the{' '}
          <Link href="/mlb" className="text-blue-600 hover:text-blue-800 underline">
            MLB hub
          </Link>{' '}
          and our{' '}
          <Link href="/mlb/dodgers-braves-nlds-game-4-2026" className="text-blue-600 hover:text-blue-800 underline">
            Dodgers and Braves NLDS Game 4 report
          </Link>
          .
        </p>
      </QuickArticle>
    </>
  );
}