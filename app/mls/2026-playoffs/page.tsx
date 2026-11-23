import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/mls/2026-playoffs';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/mls-2026-playoffs.jpg';
// author: 'Jack Brennan'
// authorSlug: 'jack-brennan'

export const metadata: Metadata = {
  title: 'Road Upsets Define Opening Weekend of the 2026 MLS Cup Playoffs',
  description:
    'Lower seeds seized control across the Eastern Conference during the opening weekend of the 2026 MLS Cup Playoffs, with FC Cincinnati, Columbus Crew, and Charlotte FC all claiming Game 1 road wins.',
  keywords: [
    '2026 MLS Cup Playoffs bracket schedule results',
    'MLS Cup Playoffs Round One Best-of-3 results',
    'Eastern Conference MLS playoffs 2026',
    'Western Conference MLS playoffs 2026',
    'FC Cincinnati Nashville SC Inter Miami Columbus Crew',
    'Audi MLS Cup Playoffs tracker',
    'MLS bracket 2026',
    'MLS Best of 3 results',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Road Upsets Define Opening Weekend of the 2026 MLS Cup Playoffs',
    description:
      'Lower seeds seized control across the Eastern Conference during the opening weekend of the 2026 MLS Cup Playoffs, with FC Cincinnati, Columbus Crew, and Charlotte FC all claiming Game 1 road wins.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-11-23T16:00:00Z',
    modifiedTime: '2026-11-23T16:00:00Z',
    section: 'Sports',
    tags: ['MLS', 'MLS Cup Playoffs', 'Audi MLS Cup Playoffs', 'Soccer', 'Bracket', 'Postseason'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: '2026 MLS Cup Playoffs Bracket, Schedule & Results' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Road Upsets Define Opening Weekend of the 2026 MLS Cup Playoffs',
    description:
      'Wild Card results, Best-of-3 series standings, and full schedule across the Eastern and Western Conferences.',
    images: [OG_IMAGE],
  },
};

export default function MLS2026PlayoffsTrackerPage() {
  return (
    <>
      <NewsArticleSchema
        title="Road Upsets Define Opening Weekend of the 2026 MLS Cup Playoffs"
        description="Lower seeds seized control across the Eastern Conference during the opening weekend of the 2026 MLS Cup Playoffs, with FC Cincinnati, Columbus Crew, and Charlotte FC all claiming Game 1 road wins."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.com/authors/jack-brennan"
        publishedTime="2026-11-23T16:00:00Z"
        modifiedTime="2026-11-23T16:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Sports"
        keywords={[
          '2026 MLS Cup Playoffs bracket schedule results',
          'MLS Cup Playoffs Round One Best-of-3 results',
          'Eastern Conference MLS playoffs 2026',
          'Western Conference MLS playoffs 2026',
          'FC Cincinnati Nashville SC Inter Miami Columbus Crew',
        ]}
      />

      <QuickArticle
        title="Road Upsets Define Opening Weekend of the 2026 MLS Cup Playoffs"
        subtitle="Lower seeds seized control across the Eastern Conference during the opening weekend of the 2026 MLS Cup Playoffs, with FC Cincinnati, Columbus Crew, and Charlotte FC all claiming Game 1 road wins."
        department="MLS"
        category="Sports"
        accentColor="blue"
        publishDate="November 23, 2026"
        readTime="5 min read"
        author={{ name: 'Jack Brennan', slug: 'jack-brennan' }}
        heroImage={{
          src: OG_IMAGE,
          alt: '2026 Audi MLS Cup Playoffs Bracket and Schedule Tracker',
          caption: 'Road upsets dominated the Eastern Conference during Game 1 of the Best-of-3 Round One series.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/mls', label: 'MLS' },
          { href: SLUG, label: '2026 Playoffs' },
        ]}
        sources={[
          {
            number: 1,
            title: 'Audi 2026 MLS Cup Playoffs Bracket, Schedule & Standings',
            url: 'https://www.mlssoccer.com/playoffs/2026/bracket/',
            publisher: 'MLSsoccer.com',
          },
          {
            number: 2,
            title: 'Audi 2026 MLS Cup Playoffs Full Match Schedule',
            url: 'https://www.mlssoccer.com/playoffs/2026/schedule/',
            publisher: 'MLSsoccer.com',
          },
          {
            number: 3,
            title: 'Major League Soccer Scores, Standings & Playoff Coverage',
            url: 'https://www.espn.com/soccer/league/_/name/usa.1',
            publisher: 'ESPN',
          },
          {
            number: 4,
            title: 'MLS News, Scores & Highlights',
            url: 'https://sports.yahoo.com/soccer/',
            publisher: 'Yahoo Sports',
          },
        ]}
        relatedArticles={[
          { href: '/mls/fc-cincinnati-nashville-sc-mls-cup-playoffs-opener-2026', title: 'Road Statement: FC Cincinnati Edges Nashville SC 1-0 in MLS Cup Playoffs Opener', category: 'Sports' },
          { href: '/mls/inter-miami-columbus-crew-3-0-messi-red-card-controversy-2026', title: 'Brink of Elimination: Inter Miami Fall 3-0 to Columbus Crew Amid Messi Controversy', category: 'Sports' },
          { href: '/mls', title: 'MLS Hub | Scores, Standings, and Playoffs Coverage', category: 'Sports' },
          { href: '/soccer', title: 'Global Soccer Hub | Premier League, MLS, World Cup 2026', category: 'Sports' },
        ]}
        tags={['MLS', 'MLS Cup Playoffs', 'Audi MLS Cup Playoffs', 'Soccer', 'Bracket', 'Postseason']}
      >
        <p>
          The <strong>2026 Audi MLS Cup Playoffs</strong> are officially underway, and the opening weekend of Round One Best-of-3 action delivered immediate drama—highlighted by lower-seeded clubs seizing control across the Eastern Conference.
        </p>

        <p>
          Following Thursday&apos;s single-elimination Wild Card round, higher seeds in the East struggled to protect home-field advantage. Wild Card winner <strong>FC Cincinnati (No. 9)</strong> stunned Supporters&apos; Shield winner <strong>Nashville SC (No. 1) 1-0</strong> on the road, while <strong>Columbus Crew (No. 7)</strong> routed defending MLS Cup champion <strong>Inter Miami CF (No. 2) 3-0</strong>. <strong>Charlotte FC (No. 5)</strong> added a third Eastern road upset with a 2-1 stoppage-time victory over <strong>Chicago Fire FC (No. 4)</strong>.
        </p>

        <p>
          Meanwhile, top seeds in the Western Conference held firm at home, with <strong>Vancouver Whitecaps FC (No. 1)</strong> and <strong>FC Dallas (No. 2)</strong> both claiming clean-sheet victories to open their respective series.
        </p>

        {/* ── Tournament Roadmap Tree ── */}
        <div className="my-8 not-prose rounded-xl border border-blue-200 bg-blue-50/60 p-5 font-mono text-sm shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3 font-sans">
            2026 MLS Cup Playoffs Tournament Roadmap
          </p>
          <div className="space-y-1 text-gray-800">
            <div>├── <strong>Wild Card Round:</strong> Completed November 19 (Single-Elimination)</div>
            <div>├── <strong>Round One (Best-of-3):</strong> November 21 – December 2 (Higher seed hosts Games 1 &amp; 3)</div>
            <div>├── <strong>Conference Semifinals:</strong> December 5 – December 6 (Single-Elimination)</div>
            <div>├── <strong>Conference Finals:</strong> December 11 – December 12 (Single-Elimination)</div>
            <div>└── <strong>2026 MLS Cup Final:</strong> Friday, December 18</div>
          </div>
        </div>

        <h2>Wild Card Round Recap (November 19)</h2>

        <p>
          Two play-in fixtures determined the eighth and final playoff berths in each conference before the Best-of-3 series began:
        </p>

        <ul className="space-y-3 my-4 list-disc pl-6 text-gray-700">
          <li>
            <strong>Eastern Conference:</strong> No. 9 <strong>FC Cincinnati</strong> eliminated No. 8 <strong>Orlando City SC</strong> with a 3-1 road victory, powered by a brace from <strong>Evander</strong> (43&apos; pen., 50&apos;) and a late strike from <strong>Gidi</strong> (85&apos;).
          </li>
          <li>
            <strong>Western Conference:</strong> No. 9 <strong>Real Salt Lake</strong> and No. 8 <strong>Seattle Sounders FC</strong> played to a 1-1 draw in regulation before Salt Lake advanced 4-2 in a penalty shootout.
          </li>
        </ul>

        <h2>Eastern Conference Round One (Best-of-3)</h2>

        <div className="my-8 not-prose overflow-hidden rounded-xl border border-blue-200 shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-3 text-left font-bold">Matchup</th>
                <th className="px-4 py-3 text-left font-bold">Series Status</th>
                <th className="px-4 py-3 text-left font-bold">Game 1 Result</th>
                <th className="px-4 py-3 text-left font-bold">Game 2 Schedule (CST)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-100">
              {[
                ['(1) Nashville SC vs. (9) FC Cincinnati', 'CIN leads 1–0', 'CIN 1 – 0 NSH', 'Sat, Nov. 28 at 5:30 PM'],
                ['(2) Inter Miami CF vs. (7) Columbus Crew', 'CLB leads 1–0', 'CLB 3 – 0 MIA', 'Fri, Nov. 27 at 7:00 PM'],
                ['(3) New England Revolution vs. (6) Philadelphia Union', 'NE leads 1–0', 'NE 2 – 0 PHI', 'Sat, Nov. 28 at 3:30 PM'],
                ['(4) Chicago Fire FC vs. (5) Charlotte FC', 'CLT leads 1–0', 'CLT 2 – 1 CHI', 'Sat, Nov. 28 at 11:30 AM'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 1 ? 'bg-blue-50/40' : 'bg-white'}>
                  <td className="px-4 py-3 font-semibold text-blue-950">{row[0]}</td>
                  <td className="px-4 py-3 font-medium text-emerald-700">{row[1]}</td>
                  <td className="px-4 py-3 text-gray-800 font-mono">{row[2]}</td>
                  <td className="px-4 py-3 text-gray-600">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Western Conference Round One (Best-of-3)</h2>

        <div className="my-8 not-prose overflow-hidden rounded-xl border border-blue-200 shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="px-4 py-3 text-left font-bold">Matchup</th>
                <th className="px-4 py-3 text-left font-bold">Series Status</th>
                <th className="px-4 py-3 text-left font-bold">Game 1 Result / Schedule</th>
                <th className="px-4 py-3 text-left font-bold">Game 2 Schedule (CST)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-100">
              {[
                ['(1) Vancouver Whitecaps FC vs. (9) Real Salt Lake', 'VAN leads 1–0', 'VAN 2 – 0 RSL', 'Fri, Nov. 27 at 9:00 PM'],
                ['(2) FC Dallas vs. (7) Portland Timbers', 'DAL leads 1–0', 'DAL 3 – 0 POR', 'Sat, Nov. 28 at 9:30 PM'],
                ['(3) St. Louis City SC vs. (6) Los Angeles FC', 'Series tied 0–0', 'Mon, Nov. 23 at 7:00 PM CST', 'Sat, Nov. 28 at 7:30 PM'],
                ['(4) San Jose Earthquakes vs. (5) Houston Dynamo FC', 'Series tied 0–0', 'Tue, Nov. 24 at 9:00 PM CST', 'Sat, Nov. 28 at 1:30 PM'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 1 ? 'bg-blue-50/40' : 'bg-white'}>
                  <td className="px-4 py-3 font-semibold text-blue-950">{row[0]}</td>
                  <td className="px-4 py-3 font-medium text-blue-800">{row[1]}</td>
                  <td className="px-4 py-3 text-gray-800 font-mono">{row[2]}</td>
                  <td className="px-4 py-3 text-gray-600">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Video Highlights &amp; Postseason Action</h2>

        <p>
          Catch up on key moments from the opening weekend of Round One action across the league:
        </p>

        {/* ── Feature Video Embed: Columbus Crew vs Inter Miami ── */}
        <div className="my-8 not-prose rounded-2xl border border-gray-200 bg-white p-4 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-gray-900">
              Inter Miami CF vs. Columbus Crew | Round One Game 1 Highlights
            </h3>
            <span className="text-xs text-gray-500 font-medium">YouTube · Major League Soccer</span>
          </div>
          <div className="relative w-full overflow-hidden rounded-xl bg-black" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/gu9ueHxEWIk?rel=0&modestbranding=1"
              title="Inter Miami CF vs. Columbus Crew | Full Match Highlights | 2026 Audi MLS Cup Playoffs"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Watch complete official match highlights via{' '}
            <a
              href="https://www.youtube.com/watch?v=gu9ueHxEWIk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              Major League Soccer on YouTube
            </a>
          </p>
        </div>

        {/* ── Secondary Video Grid ── */}
        <div className="my-8 not-prose grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-gray-900 truncate">Revolution vs. Union Highlights</span>
              <span className="text-xs text-gray-500">MLS</span>
            </div>
            <div className="relative w-full overflow-hidden rounded-lg bg-black" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/yoyekLErXH4?rel=0&modestbranding=1"
                title="New England Revolution vs. Philadelphia Union | Full Match Highlights | 2026 Audi MLS Cup Playoffs"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-gray-900 truncate">FC Cincinnati 1-0 Nashville SC Highlights</span>
              <span className="text-xs text-gray-500">FC Cincinnati</span>
            </div>
            <div className="relative w-full overflow-hidden rounded-lg bg-black" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/OoGKfsmILN8?rel=0&modestbranding=1"
                title="HIGHLIGHTS: FC Cincinnati vs. Nashville SC | November 22, 2026"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <h2>What to Watch Next</h2>

        <p>
          Round One Game 1 action concludes on Monday, November 23 (<strong>St. Louis City SC vs. LAFC</strong>) and Tuesday, November 24 (<strong>San Jose Earthquakes vs. Houston Dynamo FC</strong>) before all eight series shift venues for Game 2 on November 27 and 28.
        </p>

        <p>
          Because Round One matches cannot end in a tie—moving directly to a penalty shootout if level after 90 minutes—every Game 1 winner enters next weekend needing just one more victory to punch a ticket to the single-elimination Conference Semifinals on December 5–6.
        </p>

        <p>
          For comprehensive coverage of each series, check out our in-depth report on{' '}
          <Link href="/mls/fc-cincinnati-nashville-sc-mls-cup-playoffs-opener-2026" className="text-blue-600 hover:text-blue-800 underline font-medium">
            FC Cincinnati&apos;s 1-0 upset of Nashville SC
          </Link>
          , our breakdown of{' '}
          <Link href="/mls/inter-miami-columbus-crew-3-0-messi-red-card-controversy-2026" className="text-blue-600 hover:text-blue-800 underline font-medium">
            Inter Miami&apos;s 3-0 loss in Columbus and the Messi controversy
          </Link>
          , and the overarching{' '}
          <Link href="/mls" className="text-blue-600 hover:text-blue-800 underline font-medium">
            MLS coverage hub
          </Link>
          .
        </p>
      </QuickArticle>
    </>
  );
}
