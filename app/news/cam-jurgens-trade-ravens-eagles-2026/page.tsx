import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/news/cam-jurgens-trade-ravens-eagles-2026';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/news-cam-jurgens-trade-ravens-eagles-2026.jpg';
const VIDEO_ID = 'C1VBAPq9cEY';

export const metadata: Metadata = {
  title: 'Cam Jurgens Trade Ravens Eagles | Pro Bowl Center Deal',
  description:
    'The Philadelphia Eagles have agreed to trade Pro Bowl interior lineman Cam Jurgens to the Baltimore Ravens for future draft picks, reshuffling both offensive lines midseason.',
  keywords: [
    'Cam Jurgens trade Ravens Eagles',
    'Cam Jurgens Ravens offensive line',
    'Howie Roseman draft capital 2028',
    'Drew Kendall Eagles center',
    'Baltimore Ravens offensive line injuries',
    'NFL trade deadline 2026',
    'Eagles trade Cam Jurgens',
    'Ravens acquire Cam Jurgens',
    'Cam Jurgens center trade',
    'Eagles offensive line 2026',
    'Ravens offensive line 2026',
    'Lamar Jackson protection',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'In-Season Blockbuster | Ravens Acquire Pro Bowl Center Cam Jurgens from Eagles',
    description:
      'The Eagles trade Pro Bowl center Cam Jurgens to Baltimore for a 2027 fifth and 2028 second-round pick. Howie Roseman stockpiles capital while the Ravens fortify a decimated line.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-10-07T18:00:00Z',
    modifiedTime: '2026-10-07T18:00:00Z',
    section: 'NFL',
    tags: ['NFL', 'Philadelphia Eagles', 'Baltimore Ravens', 'Cam Jurgens', 'Trade'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Cam Jurgens trade Ravens Eagles' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRADE: Eagles Send Pro Bowl Center Cam Jurgens to Ravens',
    description: 'Baltimore gets a two-time Pro Bowler at the pivot. Philadelphia gets a 2028 second-round pick.',
    images: [OG_IMAGE],
  },
};

export default function CamJurgensTradePage() {
  return (
    <>
      <NewsArticleSchema
        title="Cam Jurgens Trade Ravens Eagles | Pro Bowl Center Deal"
        description="The Philadelphia Eagles have agreed to trade Pro Bowl interior lineman Cam Jurgens to the Baltimore Ravens for future draft picks, reshuffling both offensive lines midseason."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.com/authors/jack-brennan"
        publishedTime="2026-10-07T18:00:00Z"
        modifiedTime="2026-10-07T18:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="NFL"
        keywords={[
          'Cam Jurgens trade Ravens Eagles',
          'Cam Jurgens Ravens offensive line',
          'Howie Roseman draft capital 2028',
        ]}
      />

      <QuickArticle
        title="In-Season Blockbuster | Eagles Trade Pro Bowl Center Cam Jurgens to the Baltimore Ravens"
        subtitle="In a rare midseason blockbuster swap between two NFL Super Bowl contenders, the Philadelphia Eagles have agreed to trade Pro Bowl interior offensive lineman Cam Jurgens to the Baltimore Ravens."
        department="NFL"
        category="NFL"
        accentColor="green"
        publishDate="October 7, 2026"
        readTime="4 min read"
        author={{ name: 'Jack Brennan', slug: 'jack-brennan' }}
        heroImage={{
          src: OG_IMAGE,
          alt: 'Cam Jurgens trade Ravens Eagles',
          caption: 'Cam Jurgens heads to Baltimore in a midseason offensive line blockbuster.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/news', label: 'News' },
          { href: SLUG, label: 'Cam Jurgens Trade' },
        ]}
        sources={[
          {
            number: 1,
            title: 'Eagles Agree to Trade Cam Jurgens to the Ravens',
            url: 'https://www.philadelphiaeagles.com/news/eagles-agree-to-trade-cam-jurgens-to-the-ravens',
            publisher: 'Philadelphia Eagles',
          },
          {
            number: 2,
            title: 'Ravens Acquire Pro Bowl Center Cam Jurgens',
            url: 'https://www.baltimoreravens.com/news/ravens-trade-cam-jurgens-center-pro-bowl-injuries-2026',
            publisher: 'Baltimore Ravens',
          },
          {
            number: 3,
            title: 'Trade Breakdown: Eagles Send Cam Jurgens to Ravens for Draft Picks',
            url: 'https://www.espn.com/nfl/story/_/id/trade-cam-jurgens-eagles-ravens',
            publisher: 'ESPN',
          },
        ]}
        relatedArticles={[
          { href: '/news/patriots-trade-aj-brown-eagles-2026', title: 'Patriots Trade for A.J. Brown | Eagles Deal, Drake Maye Impact', category: 'NFL' },
          { href: '/nfl/2026-kickoff-dates-hall-of-fame-game', title: 'NFL 2026 Kickoff Dates | Hall of Fame Game, Season Opener', category: 'NFL' },
          { href: '/sports', title: 'ObjectWire Sports Hub', category: 'Sports' },
        ]}
        tags={['NFL', 'Philadelphia Eagles', 'Baltimore Ravens', 'Cam Jurgens', 'Trade Deadline']}
      >
        <p>
          In a rare midseason blockbuster swap between two NFL Super Bowl contenders, the <strong>Philadelphia Eagles</strong> have agreed to trade Pro Bowl interior offensive lineman <strong>Cam Jurgens</strong> to the <strong>Baltimore Ravens</strong>.
        </p>

        <p>
          The trade, announced on Wednesday, sends the 27-year-old starting center and a 2027 seventh-round draft pick to Baltimore in exchange for a <strong>2027 fifth-round pick and a 2028 second-round pick</strong>.
        </p>

        <p>
          The move highlights divergent midseason strategies for both franchises: Baltimore urgently fortifies an offensive line decimated by injuries, while Philadelphia General Manager <strong>Howie Roseman</strong> continues to aggressively stockpile future draft capital while handing the reins to rookie interior linemen.
        </p>

        <h2>The Trade Breakdown | Capital for Coverage</h2>

        <p>
          The acquisition gives Baltimore a proven starter at the pivot point as they prepare for a deep postseason run. For Philadelphia, securing a future second-round pick for a player navigating physical wear adds to an impressive 2028 draft war chest.
        </p>

        <div className="my-8 not-prose rounded-xl border border-green-200 bg-green-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-green-700 mb-3">Trade Terms Breakdown</p>
          <p className="text-sm text-gray-800 mb-2"><strong>Baltimore Ravens receive:</strong></p>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mb-4">
            <li>C Cam Jurgens (Two-time Pro Bowler)</li>
            <li>2027 7th-Round Draft Pick</li>
          </ul>
          <p className="text-sm text-gray-800 mb-2"><strong>Philadelphia Eagles receive:</strong></p>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>2027 5th-Round Draft Pick</li>
            <li>2028 2nd-Round Draft Pick</li>
          </ul>
        </div>

        <h2>Why the Ravens Made the Move</h2>

        <p>
          Baltimore's offensive line has suffered severe attrition through the first month of the season. With multiple interior linemen sidelined on Injured Reserve, the Ravens had been forced to rely on rookie converted guards to make protection calls for <strong>Lamar Jackson</strong>.
        </p>

        <p>
          Jurgens, who originally stepped into <strong>Jason Kelce's</strong> shoes in Philadelphia and earned two Pro Bowl selections, provides Baltimore with an experienced, highly athletic center capable of operating in heavy zone-run and pull-blocking schemes.
        </p>

        <div className="my-8 not-prose overflow-hidden rounded-xl border border-green-200 shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="px-4 py-2 text-left font-bold">Player Metric</th>
                <th className="px-4 py-2 text-left font-bold">Cam Jurgens (Career Profile)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-green-100">
                <td className="px-4 py-2 font-semibold text-green-900">Draft Position</td>
                <td className="px-4 py-2 text-gray-700">2022 2nd Round (51st Overall, Nebraska)</td>
              </tr>
              <tr className="border-b border-green-100 bg-green-50/50">
                <td className="px-4 py-2 font-semibold text-green-900">Accolades</td>
                <td className="px-4 py-2 text-gray-700">2x Pro Bowler, Super Bowl LIX Champion</td>
              </tr>
              <tr className="border-b border-green-100">
                <td className="px-4 py-2 font-semibold text-green-900">New Role</td>
                <td className="px-4 py-2 text-gray-700">Starting Center, Baltimore Ravens</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-green-900">Contract Status</td>
                <td className="px-4 py-2 text-gray-700">Absorbed under existing multi-year deal</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>The Eagles' Internal Transition</h2>

        <p>
          For Philadelphia, the decision to part with Jurgens accelerates a youth movement along the offensive line. Rookie interior lineman <strong>Drew Kendall</strong> has impressed coaching staff during recent snaps at center, giving Philadelphia confidence to pivot away from Jurgens' heavy future cap hit. Combined with depth guards <strong>Willie Lampkin</strong> and <strong>Micah Morris</strong>, offensive line coach <strong>Jeff Stoutland's</strong> unit shifts forward with fresh, young starters.
        </p>

        <p>
          The trade marks the end of Jurgens' impactful tenure in Philadelphia, where he transitioned from Kelce's handpicked successor to an integral piece of the Eagles' recent championship runs. For more NFL coverage, see the{' '}
          <Link href="/news" className="text-blue-600 hover:text-blue-800 underline">
            News hub
          </Link>{' '}
          and our{' '}
          <Link href="/news/patriots-trade-aj-brown-eagles-2026" className="text-blue-600 hover:text-blue-800 underline">
            A.J. Brown trade report
          </Link>
          .
        </p>

        {/* ── Trade Video ── */}
        <div className="my-8 not-prose">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
              title="Cam Jurgens Trade to Baltimore Ravens | Eagles-Ravens Blockbuster"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Cam Jurgens trade analysis via{' '}
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