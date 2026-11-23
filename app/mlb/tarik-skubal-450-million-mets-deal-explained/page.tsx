import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/mlb/tarik-skubal-450-million-mets-deal-explained';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/mlb-tarik-skubal-450-million-mets-deal-explained.jpg';
// author: 'Jack Brennan'
// authorSlug: 'jack-brennan'

export const metadata: Metadata = {
  title: "Tarik Skubal's Record $450M Mets Contract Explained: Deferrals, Luxury Tax & CBA Stakes",
  description:
    "Two-time Cy Young winner Tarik Skubal agreed to a record 9-year, $450 million contract with the New York Mets. Here is the full breakdown of his signing bonus, deferrals, and MLB payroll impact.",
  keywords: [
    'Tarik Skubal 450 million Mets deal explained',
    'Tarik Skubal New York Mets contract details',
    'highest paid pitcher in MLB history',
    'Tarik Skubal signing bonus deferrals AAV',
    'MLB CBA expiration December 1 2026',
    'Steve Cohen Mets payroll 2027',
    'Scott Boras Tarik Skubal',
    'Competitive Balance Tax Mets',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "Tarik Skubal's Record $450M Mets Contract Explained: Deferrals, Luxury Tax & CBA Stakes",
    description:
      "Two-time Cy Young winner Tarik Skubal agreed to a record 9-year, $450 million contract with the New York Mets. Here is the full breakdown of his signing bonus, deferrals, and MLB payroll impact.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-11-23T17:30:00Z',
    modifiedTime: '2026-11-23T17:30:00Z',
    section: 'Sports',
    tags: ['MLB', 'New York Mets', 'Tarik Skubal', 'Baseball', 'Contracts', 'Steve Cohen', 'Scott Boras'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Tarik Skubal $450M Mets Contract Breakdown" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tarik Skubal Signs Record $450M Mets Contract: Full Financial Breakdown",
    description:
      'Record $50M AAV, $45M signing bonus, and the looming December 1 CBA lockout deadline.',
    images: [OG_IMAGE],
  },
};

export default function TarikSkubalMetsContractPage() {
  return (
    <>
      <NewsArticleSchema
        title="Tarik Skubal's Record $450M Mets Contract Explained: Deferrals, Luxury Tax & CBA Stakes"
        description="Two-time Cy Young winner Tarik Skubal agreed to a record 9-year, $450 million contract with the New York Mets. Here is the full breakdown of his signing bonus, deferrals, and MLB payroll impact."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.com/authors/jack-brennan"
        publishedTime="2026-11-23T17:30:00Z"
        modifiedTime="2026-11-23T17:30:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Sports"
        keywords={[
          'Tarik Skubal 450 million Mets deal explained',
          'Tarik Skubal New York Mets contract details',
          'highest paid pitcher in MLB history',
          'Tarik Skubal signing bonus deferrals AAV',
          'MLB CBA expiration December 1 2026',
        ]}
      />

      <QuickArticle
        title="Tarik Skubal's Record $450M Mets Contract Explained: Deferrals, Luxury Tax & CBA Stakes"
        subtitle="In a seismic offseason move just days before Major League Baseball's Collective Bargaining Agreement (CBA) expires on December 1, the New York Mets agreed to terms with two-time American League Cy Young Award winner Tarik Skubal on a nine-year, $450 million contract."
        department="MLB"
        category="Sports"
        accentColor="orange"
        publishDate="November 23, 2026"
        readTime="6 min read"
        author={{ name: 'Jack Brennan', slug: 'jack-brennan' }}
        heroImage={{
          src: OG_IMAGE,
          alt: 'Tarik Skubal Signs Record $450 Million Deal with New York Mets',
          caption: 'Tarik Skubal and the New York Mets agreed to a historic nine-year, $450M pact ahead of the CBA deadline.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/mlb', label: 'MLB' },
          { href: SLUG, label: 'Skubal $450M Mets Deal' },
        ]}
        sources={[
          {
            number: 1,
            title: 'Tarik Skubal Agrees to Record $450 Million, 9-Year Contract With New York Mets',
            url: 'https://apnews.com/article/tarik-skubal-new-york-mets-contract-f4cd370e5bc2e048f7e823b4bb5bf008',
            publisher: 'Associated Press',
          },
          {
            number: 2,
            title: 'Mets To Sign Tarik Skubal',
            url: 'https://www.mlbtraderumors.com/2026/11/mets-to-sign-tarik-skubal.html',
            publisher: 'MLB Trade Rumors',
          },
          {
            number: 3,
            title: 'Reports: Mets Sign Tarik Skubal for $450 Million',
            url: 'https://www.nbcsports.com/fantasy/baseball/player-news/2026-11-22/report-mets-to-sign-tarik-skubal',
            publisher: 'NBC Sports',
          },
        ]}
        relatedArticles={[
          { href: '/mlb/brewers-rays-world-series-game-3-2026', title: 'Historic Outburst | Brewers Blow Open World Series Game 3 With 8-Run Surge', category: 'Sports' },
          { href: '/mlb/dodgers-braves-nlds-game-4-2026', title: 'Dodgers vs Braves NLDS Game 4 | Elimination Game at Truist Park', category: 'Sports' },
          { href: '/mlb', title: 'MLB Hub | Scores, Free Agency, Standings, and Postseason News', category: 'Sports' },
          { href: '/sports', title: 'Sports Desk | NFL, MLB, MLS, WNBA Coverage', category: 'Sports' },
        ]}
        tags={['MLB', 'New York Mets', 'Tarik Skubal', 'Baseball', 'Contracts', 'Steve Cohen', 'Scott Boras']}
      >
        <p>
          In a seismic offseason move just days before Major League Baseball&apos;s Collective Bargaining Agreement (CBA) expires on December 1, the <strong>New York Mets agreed to terms with two-time American League Cy Young Award winner Tarik Skubal on a nine-year, $450 million contract</strong>.
        </p>

        <p>
          Negotiated by agent <strong>Scott Boras</strong>, the agreement completely resets the financial ceiling for starting pitchers. It eclipses Yoshinobu Yamamoto&apos;s previous total-value record ($325 million) by $125 million and shatters the single-season Average Annual Value (AAV) mark ($43.3 million) previously shared by former Mets aces Max Scherzer and Justin Verlander.
        </p>

        <p>
          Across all of Major League Baseball, only three players—Shohei Ohtani, Juan Soto, and Vladimir Guerrero Jr.—have secured larger guaranteed contracts.
        </p>

        {/* ── Record Comparison Monospace Card ── */}
        <div className="my-8 not-prose rounded-xl border border-orange-200 bg-orange-50/60 p-5 font-mono text-sm shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-700 mb-3 font-sans">
            MLB Pitching Contract Records Reset
          </p>
          <div className="space-y-2 text-gray-800">
            <div>
              [Previous Total Guarantee Record: Yoshinobu Yamamoto ($325M)] ➔{' '}
              <strong className="text-orange-900">[New Record: Tarik Skubal ($450M / +38.5%)]</strong>
            </div>
            <div>
              [Previous Pitcher AAV Record: Scherzer &amp; Verlander ($43.3M)] ➔{' '}
              <strong className="text-orange-900">[New Record: Tarik Skubal ($50.0M Nominal AAV)]</strong>
            </div>
          </div>
        </div>

        <h2>Contract Structure &amp; Financial Mechanics Explained</h2>

        <p>
          Rather than relying on complicated opt-out clauses or club options, Mets owner <strong>Steve Cohen</strong> and president of baseball operations <strong>David Stearns</strong> structured a straightforward nine-year commitment paired with targeted cash-flow mechanisms:
        </p>

        <div className="my-8 not-prose overflow-x-auto rounded-xl border border-orange-200 dark:border-orange-900/60 bg-white dark:bg-gray-900 shadow-sm">
          <table className="w-full text-sm border-collapse text-left">
            <thead>
              <tr className="bg-orange-600 text-white">
                <th className="px-4 py-3 text-left font-bold">Contract Component</th>
                <th className="px-4 py-3 text-left font-bold">Official Terms &amp; Structure</th>
                <th className="px-4 py-3 text-left font-bold">Financial &amp; Roster Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-orange-100 dark:divide-gray-800">
              {[
                [
                  'Total Guaranteed Value',
                  '$450,000,000 over 9 years (2027–2035)',
                  'Locks Skubal into Queens from age 30 through his age-38 season.',
                ],
                [
                  'Nominal Average Annual Value (AAV)',
                  '$50.0 Million / year (before deferral discounting)',
                  'Highest annual salary ever awarded to an MLB pitcher.',
                ],
                [
                  'Upfront Signing Bonus',
                  '$45.0 Million',
                  'Provides immediate upfront liquidity, insulated from potential work-stoppage game checks.',
                ],
                [
                  'Deferred Compensation',
                  '$30.0 Million in deferred salary',
                  'Slightly lowers the net present value (NPV) calculated toward the Competitive Balance Tax (CBT).',
                ],
                [
                  'Opt-Outs & Options',
                  'None (Straight 9-year pact)',
                  'Eliminates early-exit risk for the Mets while guaranteeing long-term security for Skubal.',
                ],
                [
                  'Trade Protection',
                  'Full No-Trade Clause',
                  'Gives Skubal complete veto power over any future trade scenarios.',
                ],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 1 ? 'bg-orange-50 dark:bg-gray-800/70' : 'bg-white dark:bg-gray-900'}>
                  <td className="px-4 py-3 font-semibold text-gray-950 dark:text-orange-200 whitespace-nowrap">{row[0]}</td>
                  <td className="px-4 py-3 text-gray-900 dark:text-gray-100 font-medium">{row[1]}</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Why the Mets Paid $450M—and Beat Out Rival Suitors</h2>

        <p>
          Following a mid-season trade from the Detroit Tigers to the Los Angeles Dodgers in 2026, Skubal entered free agency as the undisputed top arm on the market. Over the past four seasons—including his dominant 2024 and 2025 AL Cy Young campaigns in Detroit and his late-season stint in Los Angeles—the 30-year-old left-hander posted a <strong>43–17 record with a 2.42 ERA, 655 strikeouts, and just 95 walks across 546 innings</strong>.
        </p>

        <p>
          The bidding war narrowed down to four primary finalists: the <strong>Mets, Toronto Blue Jays, Los Angeles Dodgers, and San Diego Padres</strong>.
        </p>

        <div className="space-y-4 my-6">
          <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
            <h3 className="text-base font-bold text-gray-900 mb-1">Outbidding Toronto</h3>
            <p className="text-sm text-gray-700">
              Sources indicate the Blue Jays submitted a nine-year offer just north of $400 million, prompting New York to escalate its bid by roughly $45 million to close the deal before other suitors could respond.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
            <h3 className="text-base font-bold text-gray-900 mb-1">Rotation Anchor</h3>
            <p className="text-sm text-gray-700">
              Coming off a disappointing 2026 campaign, New York prioritized pairing a proven workhorse ace atop a young rotation core featuring Nolan McLean and Christian Scott.
            </p>
          </div>
        </div>

        <h2>Luxury Tax Penalties &amp; The Looming CBA Deadline</h2>

        <p>
          The timing and size of Skubal&apos;s contract carry massive implications for MLB&apos;s labor landscape:
        </p>

        <div className="space-y-6 my-6">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-bold text-gray-900 mb-2">
              1. The 110% Luxury Tax Surcharge
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Because the Mets operate well above the highest Competitive Balance Tax threshold, every new dollar added to their payroll incurs a <strong>110% surcharge</strong>. Combined with New York&apos;s concurrent eight-year, $95 million extension for center fielder A.J. Ewing and a one-year, $8 million deal for veteran first baseman Paul Goldschmidt, the Mets&apos; 48-hour spending spree added roughly <strong>$64.9 million in CBT payroll obligations</strong>—translating to over <strong>$136 million in combined salary and tax penalties</strong>.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-bold text-gray-900 mb-2">
              2. Race Against the December 1 CBA Expiration
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              MLB’s current Collective Bargaining Agreement expires on <strong>December 1, 2026</strong>, with league owners having already floated proposals for a hard salary cap (reportedly around $258.2 million for 2028). Under such a cap, Skubal and outfielder Juan Soto alone would consume nearly 40% of a team&apos;s total payroll space. By locking in the $450 million deal prior to December 1, Skubal and Boras secured maximum market value before a potential lockout freezes player movement.
            </p>
          </div>
        </div>

        <h2>Video Analysis &amp; Industry Reactions</h2>

        <p>
          Watch in-depth breakdowns from baseball insiders on how the $450M mega-deal impacts the Mets&apos; rotation and MLB&apos;s upcoming labor talks:
        </p>

        {/* ── Feature Video: SportsCenter / ESPN MLB ── */}
        <div className="my-8 not-prose rounded-2xl border border-gray-200 bg-white p-4 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-red-600 text-white font-mono text-xs font-bold">1:30</span>
              <h3 className="text-sm font-bold text-gray-900">
                Putting Tarik Skubal’s Deal into Context Amid CBA Negotiations
              </h3>
            </div>
            <span className="text-xs text-gray-500 font-medium">YouTube · ESPN MLB</span>
          </div>
          <div className="relative w-full overflow-hidden rounded-xl bg-black" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/1v5qEp_XAZg?rel=0&modestbranding=1"
              title="Putting Tarik Skubal’s deal with Mets into context amid MLB’s CBA negotiations | SportsCenter"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Watch full SportsCenter analysis via{' '}
            <a
              href="https://www.youtube.com/watch?v=1v5qEp_XAZg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-800 underline font-medium"
            >
              ESPN on YouTube
            </a>
          </p>
        </div>

        {/* ── Secondary Video Grid ── */}
        <div className="my-8 not-prose grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded bg-red-600 text-white font-mono text-xs font-bold">7:20</span>
              <span className="text-xs text-gray-500">MLB Network</span>
            </div>
            <h4 className="text-xs font-bold text-gray-900 mb-2 truncate">
              BREAKING: Tarik Skubal Reportedly Signs with Mets
            </h4>
            <div className="relative w-full overflow-hidden rounded-lg bg-black" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/WS2SpLSaNSU?rel=0&modestbranding=1"
                title="BREAKING: Tarik Skubal reportedly signs with Mets"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded bg-red-600 text-white font-mono text-xs font-bold">22:37</span>
              <span className="text-xs text-gray-500">New York Post Sports</span>
            </div>
            <h4 className="text-xs font-bold text-gray-900 mb-2 truncate">
              Jon Heyman on the $450M Deal | Straight Outta Flushing
            </h4>
            <div className="relative w-full overflow-hidden rounded-lg bg-black" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/DSjCU-g288Y?rel=0&modestbranding=1"
                title="Tarik Skubal To Mets: Jon Heyman On The $450M Deal | Straight Outta Flushing"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <p>
          For more baseball coverage, see our report on the{' '}
          <Link href="/mlb/brewers-rays-world-series-game-3-2026" className="text-orange-600 hover:text-orange-800 underline font-medium">
            Brewers vs. Rays World Series Game 3
          </Link>
          , our analysis of the{' '}
          <Link href="/mlb/dodgers-braves-nlds-game-4-2026" className="text-orange-600 hover:text-orange-800 underline font-medium">
            Dodgers vs. Braves NLDS clash
          </Link>
          , and the main{' '}
          <Link href="/mlb" className="text-orange-600 hover:text-orange-800 underline font-medium">
            MLB news desk
          </Link>
          .
        </p>
      </QuickArticle>
    </>
  );
}
