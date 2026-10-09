import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/mlb/dodgers-braves-nlds-game-4-2026';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/mlb-dodgers-braves-nlds-game-4-2026.jpg';
const VIDEO_ID = 'gPEXU8g2Fo0';

export const metadata: Metadata = {
  title: 'Dodgers vs Braves NLDS Game 4 | Elimination Game at Truist Park',
  description:
    'The Los Angeles Dodgers look to close out the National League Division Series in Game 4 against the Atlanta Braves at Truist Park, with Atlanta fighting to force a decisive Game 5.',
  keywords: [
    'Dodgers vs Braves NLDS Game 4',
    'Los Angeles Dodgers Atlanta Braves playoff Game 4',
    'NLDS Truist Park elimination game',
    'Shohei Ohtani Tyler Glasnow Tyler Mahle',
    'Dodgers Braves Game 4 updates 2026',
    'NLDS Game 4 starting lineups',
    'Dodgers clinch NLCS',
    'Braves elimination game 2026',
    'Glasnow vs Mahle pitching matchup',
    'Ronald Acuna Jr Matt Olson Austin Riley',
    'Mookie Betts Freddie Freeman Ohtani',
    'NLDS Game 4 prediction',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Elimination on the Line | Dodgers and Braves Battle in NLDS Game 4 at Truist Park',
    description:
      'The Dodgers hold a 2-1 NLDS lead and can clinch the NLCS berth in Atlanta. The Braves face single-elimination reality with Tyler Mahle on the mound against Tyler Glasnow.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-10-07T20:00:00Z',
    modifiedTime: '2026-10-07T20:00:00Z',
    section: 'MLB',
    tags: ['MLB', 'NLDS', 'Dodgers', 'Braves', 'Playoffs'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Dodgers vs Braves NLDS Game 4' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NLDS Game 4 | Dodgers Can Clinch, Braves Fight for Survival',
    description: 'Glasnow vs Mahle at Truist Park. Win or go home for Atlanta. Full lineups and keys to the game.',
    images: [OG_IMAGE],
  },
};

export default function DodgersBravesNLDSGame4Page() {
  return (
    <>
      <NewsArticleSchema
        title="Dodgers vs Braves NLDS Game 4 | Elimination Game at Truist Park"
        description="The Los Angeles Dodgers look to close out the National League Division Series in Game 4 against the Atlanta Braves at Truist Park, with Atlanta fighting to force a decisive Game 5."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.com/authors/jack-brennan"
        publishedTime="2026-10-07T20:00:00Z"
        modifiedTime="2026-10-07T20:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="MLB"
        keywords={[
          'Dodgers vs Braves NLDS Game 4',
          'NLDS Truist Park elimination game',
          'Shohei Ohtani Tyler Glasnow Tyler Mahle',
        ]}
      />

      <QuickArticle
        title="Elimination on the Line | Dodgers and Braves Battle in High-Stakes NLDS Game 4"
        subtitle="Holding a 2-1 series lead in the National League Division Series, the Los Angeles Dodgers take the field in Atlanta with an opportunity to punch their ticket to the NLCS. For the home-standing Atlanta Braves, Game 4 represents a stark, single-elimination reality."
        department="MLB"
        category="MLB"
        accentColor="red"
        publishDate="October 7, 2026"
        readTime="5 min read"
        author={{ name: 'Jack Brennan', slug: 'jack-brennan' }}
        heroImage={{
          src: OG_IMAGE,
          alt: 'Dodgers vs Braves NLDS Game 4 at Truist Park',
          caption: 'The Dodgers can clinch the NLCS berth with a Game 4 win in Atlanta.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/mlb', label: 'MLB' },
          { href: SLUG, label: 'NLDS Game 4' },
        ]}
        sources={[
          {
            number: 1,
            title: 'Dodgers vs. Braves NLDS Game 4 Coverage and Live Updates',
            url: 'https://www.mlb.com/news/dodgers-vs-braves-nlds-game-4-starting-lineups-and-pitching-matchup',
            publisher: 'MLB.com',
          },
          {
            number: 2,
            title: 'NLDS Game 4 Odds, Predictions, and Betting Analysis',
            url: 'https://www.covers.com/mlb/dodgers-vs-braves-prediction-october-7-2026',
            publisher: 'Covers.com',
          },
          {
            number: 3,
            title: 'Braves Face Elimination at Home in NLDS Game 4',
            url: 'https://www.fox5atlanta.com/sports/braves-dodgers-nlds-game-4-truist-park',
            publisher: 'FOX 5 Atlanta',
          },
        ]}
        relatedArticles={[
          { href: '/mlb', title: 'MLB Hub | Scores, Standings, and Pennant Race', category: 'MLB' },
          { href: '/mlb/2026-pennant-races-world-series-schedule', title: '2026 Pennant Races and World Series Schedule', category: 'MLB' },
          { href: '/mlb/mlb-standings-june-2026', title: 'MLB Standings June 2026 | Division Races', category: 'MLB' },
        ]}
        tags={['MLB', 'NLDS', 'Dodgers', 'Braves', 'Playoffs', 'Truist Park']}
      >
        <p>
          The postseason margin for error has officially evaporated at Truist Park. Holding a <strong>2-1 series lead</strong> in the National League Division Series, the <strong>Los Angeles Dodgers</strong> take the field in Atlanta with an opportunity to punch their ticket to the NLCS. For the home-standing <strong>Atlanta Braves</strong>, Game 4 represents a stark, single-elimination reality: win to force a winner-take-all Game 5 back at Dodger Stadium, or watch their 2026 championship campaign come to a sudden halt.
        </p>

        <p>
          The tension follows a tightly contested Game 3 victory on Tuesday, where Los Angeles relied on dominant pitching from <strong>Yoshinobu Yamamoto</strong> and a locked-down bullpen to secure a 3-1 win, breaking the 1-1 series tie established during the opening games in Southern California.
        </p>

        <h2>The Pitching Matchup | Glasnow vs. Mahle</h2>

        <p>
          Game 4 pits two right-handed starters against each other in a high-pressure October environment. Dodgers manager <strong>Dave Roberts</strong> called upon <strong>Tyler Glasnow</strong> to take the bump for Los Angeles. Tasked with neutralizing a dangerous Braves lineup that features former MVP <strong>Ronald Acuña Jr.</strong>, <strong>Matt Olson</strong>, and <strong>Austin Riley</strong>, Glasnow's ability to maintain low pitch counts and limit base runners in the early innings will dictate how early Los Angeles must turn to its high-leverage relief corps.
        </p>

        <p>
          Opposing Glasnow on the mound for Atlanta is <strong>Tyler Mahle</strong>, who steps into the rotation for the biggest start of his season. With the Braves' season hanging in the balance, Mahle must work efficiently through a stacked Dodgers order headlined by <strong>Mookie Betts</strong>, <strong>Freddie Freeman</strong>, <strong>Will Smith</strong>, and superstar designated hitter <strong>Shohei Ohtani</strong>.
        </p>

        <div className="my-8 not-prose rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-3">NLDS Game 4 Pitching Matchup Profile</p>
          <p className="text-sm text-gray-800 mb-2"><strong>Los Angeles Dodgers: Tyler Glasnow (RHP)</strong></p>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mb-4">
            <li>Strategy: High-velocity fastball paired with power curveball to force chase swings</li>
          </ul>
          <p className="text-sm text-gray-800 mb-2"><strong>Atlanta Braves: Tyler Mahle (RHP)</strong></p>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>Strategy: Precision command and elevated four-seamers to limit hard contact</li>
          </ul>
        </div>

        <h2>Series Breakdown and Game Lineups</h2>

        <div className="my-8 not-prose overflow-hidden rounded-xl border border-red-200 shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="px-4 py-2 text-left font-bold">Lineup Spot</th>
                <th className="px-4 py-2 text-left font-bold">Los Angeles Dodgers (Visiting)</th>
                <th className="px-4 py-2 text-left font-bold">Atlanta Braves (Home)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1', 'Mookie Betts (SS)', 'Michael Harris II (CF)'],
                ['2', 'Freddie Freeman (1B)', 'Ronald Acuña Jr. (RF)'],
                ['3', 'Will Smith (C)', 'Matt Olson (1B)'],
                ['4', 'Shohei Ohtani (DH)', 'Ozzie Albies (2B)'],
                ['5', 'Teoscar Hernández (LF)', 'Drake Baldwin (DH)'],
                ['6', 'Max Muncy (3B)', 'Mike Yastrzemski (LF)'],
                ['7', 'Enrique Hernández (2B)', 'Mauricio Dubón (SS)'],
                ['8', 'Kyle Tucker (RF)', 'Austin Riley (3B)'],
                ['9', 'Andy Pages (CF)', 'Sean Murphy (C)'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 ? 'bg-red-50/50' : ''}>
                  <td className="px-4 py-2 font-semibold text-red-900">{row[0]}</td>
                  <td className="px-4 py-2 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-2 text-gray-700">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="my-8 not-prose rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-3">2026 NLDS Series Progress</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Game 1</strong> (Dodger Stadium): Los Angeles Dodgers 5, Atlanta Braves 3 (LAD 1-0)</li>
            <li><strong>Game 2</strong> (Dodger Stadium): Atlanta Braves 3, Los Angeles Dodgers 2 (Tied 1-1)</li>
            <li><strong>Game 3</strong> (Truist Park): Los Angeles Dodgers 3, Atlanta Braves 1 (LAD 2-1)</li>
            <li><strong>Game 4</strong> (Truist Park): IN PROGRESS / ELIMINATION GAME</li>
          </ul>
        </div>

        <h2>Keys to the Game</h2>

        <p>
          For Atlanta, success hinges on situational hitting. After going <strong>0-for-6 with runners in scoring position</strong> during Tuesday's Game 3 loss, manager <strong>Walt Weiss</strong> needs production from the middle of the order, particularly Olson, Acuña, and <strong>Drake Baldwin</strong>, to create early run support.
        </p>

        <p>
          For Los Angeles, the goal is simple: strike early and unleash their bullpen depth. If the Dodgers' top four hitters can generate traffic against Mahle early, Los Angeles can manage Glasnow's workload and force Atlanta's bullpen into heavy usage for the second consecutive evening.
        </p>

        <p>
          For more postseason coverage, see the{' '}
          <Link href="/mlb" className="text-blue-600 hover:text-blue-800 underline">
            MLB hub
          </Link>{' '}
          and our{' '}
          <Link href="/mlb/2026-pennant-races-world-series-schedule" className="text-blue-600 hover:text-blue-800 underline">
            2026 pennant race and World Series schedule guide
          </Link>
          .
        </p>

        {/* ── NLDS Game 4 Video ── */}
        <div className="my-8 not-prose">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
              title="Dodgers vs Braves NLDS Game 4 | Elimination Game Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Dodgers vs Braves NLDS Game 4 coverage via{' '}
            <a
              href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              YouTube
            </a>
          </p>
        </div>
      </QuickArticle>
    </>
  );
}