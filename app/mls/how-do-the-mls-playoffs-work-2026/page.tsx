import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/mls/how-do-the-mls-playoffs-work-2026';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/mls-how-do-the-mls-playoffs-work-2026.jpg';
// author: 'Jack Brennan'
// authorSlug: 'jack-brennan'

export const metadata: Metadata = {
  title: "How the 2026 MLS Cup Playoffs Work: Format, Championship Date, Prize & Where to Watch",
  description:
    "A complete guide to the 2026 Audi MLS Cup Playoffs—breaking down the 18-team bracket format, penalty shootout rules, the December 18 championship final, trophy stakes, and how to watch.",
  keywords: [
    'how do the MLS playoffs work 2026',
    '2026 MLS Cup Final date and time',
    'MLS Cup Playoffs format rules Best-of-3',
    'MLS Cup trophy and prize money',
    'where to watch MLS Cup Playoffs 2026 Apple TV FOX',
    'Audi MLS Cup Playoffs explainer',
    'Philip F Anschutz Trophy prize money',
    'MLS penalty shootout rules playoffs',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "How the 2026 MLS Cup Playoffs Work: Format, Championship Date, Prize & Where to Watch",
    description:
      "A complete guide to the 2026 Audi MLS Cup Playoffs—breaking down the 18-team bracket format, penalty shootout rules, the December 18 championship final, trophy stakes, and how to watch.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-11-23T17:00:00Z',
    modifiedTime: '2026-11-23T17:00:00Z',
    section: 'Sports',
    tags: ['MLS', 'MLS Cup Playoffs', 'Audi MLS Cup Playoffs', 'Soccer', 'Guide', 'Apple TV', 'MLS Cup Final'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'How Do the 2026 MLS Cup Playoffs Work?' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "How the 2026 MLS Cup Playoffs Work: Full Format, Rules & Schedule",
    description:
      'Complete guide to the 18-team postseason, Best-of-3 format, penalty shootout mechanics, and the Dec. 18 final.',
    images: [OG_IMAGE],
  },
};

export default function HowDoMLSPlayoffsWork2026Page() {
  return (
    <>
      <NewsArticleSchema
        title="How the 2026 MLS Cup Playoffs Work: Format, Championship Date, Prize & Where to Watch"
        description="A complete guide to the 2026 Audi MLS Cup Playoffs—breaking down the 18-team bracket format, penalty shootout rules, the December 18 championship final, trophy stakes, and how to watch."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.com/authors/jack-brennan"
        publishedTime="2026-11-23T17:00:00Z"
        modifiedTime="2026-11-23T17:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Sports"
        keywords={[
          'how do the MLS playoffs work 2026',
          '2026 MLS Cup Final date and time',
          'MLS Cup Playoffs format rules Best-of-3',
          'MLS Cup trophy and prize money',
          'where to watch MLS Cup Playoffs 2026 Apple TV FOX',
        ]}
      />

      <QuickArticle
        title="How the 2026 MLS Cup Playoffs Work: Format, Championship Date, Prize & Where to Watch"
        subtitle="A complete guide to the 2026 Audi MLS Cup Playoffs—breaking down the 18-team bracket format, penalty shootout rules, the December 18 championship final, trophy stakes, and how to watch."
        department="MLS"
        category="Sports"
        accentColor="blue"
        publishDate="November 23, 2026"
        readTime="6 min read"
        author={{ name: 'Jack Brennan', slug: 'jack-brennan' }}
        heroImage={{
          src: OG_IMAGE,
          alt: 'How Do the 2026 MLS Cup Playoffs Work Full Guide',
          caption: 'The 2026 Audi MLS Cup Playoffs feature 18 clubs competing across four distinct rounds.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/mls', label: 'MLS' },
          { href: '/mls/2026-playoffs', label: 'Playoffs Hub' },
          { href: SLUG, label: 'Playoffs Format Explainer' },
        ]}
        sources={[
          {
            number: 1,
            title: 'Audi 2026 MLS Cup Playoffs Format & Schedule Announcement',
            url: 'https://www.mlssoccer.com/news/mls-announces-schedule-for-audi-2026-mls-cup-playoffs-round-one-best-of-3-series',
            publisher: 'MLSsoccer.com',
          },
          {
            number: 2,
            title: '2026 MLS Cup Playoffs Watch Guide & TV Schedule',
            url: 'https://www.directv.com/insider/mls-playoffs/',
            publisher: 'DIRECTV Insider',
          },
          {
            number: 3,
            title: 'Audi 2026 MLS Cup Playoffs: Format & How It Works',
            url: 'https://www.lafc.com/news/audi-2026-mls-cup-playoffs-format-how-it-works',
            publisher: 'LAFC.com',
          },
        ]}
        relatedArticles={[
          { href: '/mls/2026-playoffs', title: 'Road Upsets Define Opening Weekend of the 2026 MLS Cup Playoffs', category: 'Sports' },
          { href: '/mls/2026-mls-cup-odds-favorites-predictions', title: '2026 MLS Cup Odds & Favorites: Futures, Polymarket & Model Projections', category: 'Sports' },
          { href: '/mls/fc-cincinnati-nashville-sc-mls-cup-playoffs-opener-2026', title: 'Road Statement: FC Cincinnati Edges Nashville SC 1-0 in MLS Cup Playoffs Opener', category: 'Sports' },
          { href: '/mls/inter-miami-columbus-crew-3-0-messi-red-card-controversy-2026', title: 'Brink of Elimination: Inter Miami Fall 3-0 to Columbus Crew Amid Messi Controversy', category: 'Sports' },
        ]}
        tags={['MLS', 'MLS Cup Playoffs', 'Audi MLS Cup Playoffs', 'Soccer', 'Guide', 'Apple TV', 'MLS Cup Final']}
      >
        <p>
          Unlike traditional European soccer leagues that crown a champion solely on regular-season points, Major League Soccer determines its overall champion through an 18-team postseason tournament: the <strong>Audi MLS Cup Playoffs</strong>.
        </p>

        <p>
          Nine clubs from the Eastern Conference and nine from the Western Conference qualify based on regular-season standings. The postseason blends three distinct competitive formats—single-elimination play-in fixtures, a Best-of-3 opening series, and high-stakes knockout rounds—culminating in the <strong>2026 MLS Cup Final on Friday, December 18</strong>.
        </p>

        {/* ── Format & Schedule Monospace Box ── */}
        <div className="my-8 not-prose rounded-xl border border-blue-200 bg-blue-50/60 p-5 font-mono text-sm shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3 font-sans">
            2026 MLS Cup Playoffs Format &amp; Schedule
          </p>
          <div className="space-y-1 text-gray-800">
            <div>├── <strong>Wild Card Round (Nov. 19):</strong> Single-elimination (No. 8 hosts No. 9 in each conference)</div>
            <div>├── <strong>Round One (Nov. 21 – Dec. 2):</strong> Best-of-3 Series (No. 1–7 seeds + Wild Card winners)</div>
            <div>├── <strong>Conference Semifinals (Dec. 5 – Dec. 6):</strong> Single-elimination (Higher seed hosts)</div>
            <div>├── <strong>Conference Finals (Dec. 11 – Dec. 12):</strong> Single-elimination (Higher seed hosts)</div>
            <div>└── <strong>2026 MLS Cup Final (Friday, Dec. 18):</strong> Single-elimination championship match</div>
          </div>
        </div>

        <h2>Round-by-Round Rules &amp; Tiebreakers</h2>

        <p>
          Every stage of the postseason operates under specific overtime and advancement mechanics:
        </p>

        <div className="my-8 not-prose overflow-hidden rounded-xl border border-blue-200 shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-3 text-left font-bold">Playoff Stage</th>
                <th className="px-4 py-3 text-left font-bold">Format &amp; Hosting Structure</th>
                <th className="px-4 py-3 text-left font-bold">Overtime / Tiebreaker Rules</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-100">
              {[
                [
                  'Wild Card Round',
                  'Single match hosted by the No. 8 seed against the No. 9 seed in each conference.',
                  'No extra time. If tied after 90 minutes, the match goes straight to penalty kicks.',
                ],
                [
                  'Round One',
                  'Best-of-3 Series (Home-Away-Home). Higher seed hosts Game 1 and Game 3 (if necessary); lower seed hosts Game 2.',
                  'Every match must produce a winner (no aggregate goals, no ties). Tied matches after 90 minutes go directly to penalty kicks. First club to two wins advances.',
                ],
                [
                  'Conference Semifinals & Finals',
                  'Single-elimination knockout matches hosted by the higher remaining seed.',
                  'Standard knockout rules: two 15-minute extra-time periods if tied after 90 minutes, followed by a penalty shootout if still level.',
                ],
                [
                  'MLS Cup Final',
                  'Single-elimination championship hosted by the finalist with the superior regular-season points total.',
                  'Two 15-minute extra-time periods, followed by penalty kicks if required.',
                ],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 1 ? 'bg-blue-50/40' : 'bg-white'}>
                  <td className="px-4 py-3 font-semibold text-blue-950 whitespace-nowrap">{row[0]}</td>
                  <td className="px-4 py-3 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-3 text-gray-700">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>When Is the 2026 MLS Cup Final?</h2>

        <p>
          The <strong>2026 MLS Cup presented by Audi</strong> will take place on <strong>Friday, December 18, 2026</strong>, with kickoff scheduled for <strong>8:00 p.m. or 9:00 p.m. ET (7:00 p.m. or 8:00 p.m. CT)</strong>.
        </p>

        <p>
          Hosting rights are awarded to whichever conference champion accumulated more points during the regular season—meaning Supporters&apos; Shield winner <strong>Nashville SC (77 points)</strong> would host the final if they advance out of the East, while Western Conference top seed <strong>Vancouver Whitecaps FC (64 points)</strong> holds hosting priority over every remaining club except Nashville.
        </p>

        <h2>What Is the Prize for Winning the MLS Cup?</h2>

        <p>
          Victorious clubs compete for a combination of historic silverware, continental tournament berths, and financial bonuses:
        </p>

        <div className="space-y-4 my-6">
          <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
            <h3 className="text-base font-bold text-gray-900 mb-1">The Philip F. Anschutz Trophy</h3>
            <p className="text-sm text-gray-700">
              The champion lifts Major League Soccer’s sterling silver championship trophy, named after one of the league&apos;s founding investors, and earns a permanent championship star above its club crest.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
            <h3 className="text-base font-bold text-gray-900 mb-1">Concacaf Champions Cup Qualification</h3>
            <p className="text-sm text-gray-700">
              The MLS Cup winner secures an automatic berth into the following year&apos;s Concacaf Champions Cup, competing against top clubs from Liga MX and across North America, Central America, and the Caribbean for a spot in the FIFA Club World Cup.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
            <h3 className="text-base font-bold text-gray-900 mb-1">League Prize Pool &amp; Player Bonuses</h3>
            <p className="text-sm text-gray-700">
              Under the MLS Collective Bargaining Agreement (CBA), the league distributes an official postseason bonus pool across playoff participants, with the largest share awarded to the MLS Cup champion&apos;s roster alongside individual championship rings.
            </p>
          </div>
        </div>

        <h2>Where to Watch the 2026 MLS Cup Playoffs</h2>

        <p>
          Broadcast rights for the 2026 postseason are centralized across digital streaming and linear television:
        </p>

        <ul className="space-y-3 my-4 list-disc pl-6 text-gray-700">
          <li>
            <strong>Every Match Worldwide (Streaming):</strong> <strong>Apple TV</strong> carries every single match of the 2026 Audi MLS Cup Playoffs live and on demand in more than 100 countries and regions (included with a standard Apple TV subscription, with English and Spanish commentary).
          </li>
          <li>
            <strong>U.S. Linear Television:</strong> Select Round One matches—along with the 2026 MLS Cup Final on December 18—air live on <strong>FOX</strong>, <strong>FS1</strong>, and in Spanish on <strong>FOX Deportes</strong>.
          </li>
          <li>
            <strong>Canadian Broadcasts:</strong> Select playoff fixtures and the MLS Cup Final air on <strong>TSN</strong> (English) and <strong>RDS</strong> (French) alongside Apple TV.
          </li>
        </ul>

        <h2>Video Explainer &amp; Format Breakdown</h2>

        <p>
          The videos below walk through the postseason bracket structure and explain how the Best-of-3 format shapes the road to the championship final:
        </p>

        {/* ── Feature Video: CBS Sports Golazo America ── */}
        <div className="my-8 not-prose rounded-2xl border border-gray-200 bg-white p-4 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-red-600 text-white font-mono text-xs font-bold">12:11</span>
              <h3 className="text-sm font-bold text-gray-900">
                MLS Playoffs Overhaul Explained | Postseason Rules Breakdown
              </h3>
            </div>
            <span className="text-xs text-gray-500 font-medium">YouTube · CBS Sports Golazo America</span>
          </div>
          <div className="relative w-full overflow-hidden rounded-xl bg-black" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/n3nXAUqxWwg?rel=0&modestbranding=1"
              title="MLS Playoffs overhaul EXPLAINED | 20 Team postseason?!"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Watch complete format analysis via{' '}
            <a
              href="https://www.youtube.com/watch?v=n3nXAUqxWwg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              CBS Sports Golazo America on YouTube
            </a>
          </p>
        </div>

        {/* ── Secondary Video Grid ── */}
        <div className="my-8 not-prose grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded bg-red-600 text-white font-mono text-xs font-bold">2:36</span>
              <span className="text-xs text-gray-500">Discovering MLS</span>
            </div>
            <h4 className="text-xs font-bold text-gray-900 mb-2 truncate">
              The MLS Playoffs Explained: Playoff Format &amp; Series Rules
            </h4>
            <div className="relative w-full overflow-hidden rounded-lg bg-black" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/DtiSnWnJ64Q?rel=0&modestbranding=1"
                title="The MLS Playoffs Explained (Playoff format 2023)!"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded bg-red-600 text-white font-mono text-xs font-bold">0:53</span>
              <span className="text-xs text-gray-500">Sportskeeda Football</span>
            </div>
            <h4 className="text-xs font-bold text-gray-900 mb-2 truncate">
              How Does The MLS Really Work?
            </h4>
            <div className="relative w-full overflow-hidden rounded-lg bg-black" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/hJUAMTfE9mY?rel=0&modestbranding=1"
                title="How Does The MLS Really Work? #mls #majorleaguesoccer #messi"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <p>
          For live scores and active series standings, visit our{' '}
          <Link href="/mls/2026-playoffs" className="text-blue-600 hover:text-blue-800 underline font-medium">
            2026 MLS Cup Playoffs Bracket &amp; Schedule Tracker
          </Link>
          , our analysis of{' '}
          <Link href="/mls/2026-mls-cup-odds-favorites-predictions" className="text-blue-600 hover:text-blue-800 underline font-medium">
            2026 MLS Cup Odds &amp; Contender Projections
          </Link>
          , and the main{' '}
          <Link href="/mls" className="text-blue-600 hover:text-blue-800 underline font-medium">
            Major League Soccer desk
          </Link>
          .
        </p>
      </QuickArticle>
    </>
  );
}
