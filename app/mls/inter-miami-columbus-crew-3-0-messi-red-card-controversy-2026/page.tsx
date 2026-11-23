import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/mls/inter-miami-columbus-crew-3-0-messi-red-card-controversy-2026';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/mls-inter-miami-columbus-crew-3-0-messi-red-card-controversy-2026.jpg';
// author: 'Jack Brennan'
// authorSlug: 'jack-brennan'

export const metadata: Metadata = {
  title: 'Brink of Elimination: Inter Miami Fall 3-0 to Columbus Crew Amid Messi Red-Card Controversy',
  description:
    'Inter Miami CF stands on the brink of an early 2026 MLS Cup Playoffs exit following a 3-0 defeat to the Columbus Crew in a match overshadowed by a heated red-card controversy involving Lionel Messi.',
  keywords: [
    'Inter Miami 3-0 loss Columbus Crew Messi red card controversy',
    'Inter Miami MLS playoff elimination 2026',
    'Lionel Messi red card controversy MLS playoffs',
    'Columbus Crew vs Inter Miami 3-0 score',
    'Messi referee confrontation MLS',
    'Audi MLS Cup Playoffs 2026',
    'Inter Miami Columbus Crew playoffs',
    'MLS Disciplinary Committee Messi review',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Brink of Elimination: Inter Miami Fall 3-0 to Columbus Crew Amid Messi Red-Card Controversy',
    description:
      'Inter Miami CF stands on the brink of an early 2026 MLS Cup Playoffs exit following a 3-0 defeat to the Columbus Crew in a match overshadowed by a heated red-card controversy involving Lionel Messi.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-11-22T22:30:00Z',
    modifiedTime: '2026-11-22T22:30:00Z',
    section: 'Sports',
    tags: ['MLS', 'Inter Miami', 'Columbus Crew', 'Lionel Messi', 'MLS Cup Playoffs', 'Soccer'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Inter Miami vs Columbus Crew 3-0 Messi Red Card Controversy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inter Miami Fall 3-0 to Columbus Crew Amid Messi Red-Card Controversy',
    description:
      'Inter Miami CF stands on the brink of an early postseason exit following a 3-0 defeat to Columbus Crew overshadowed by Messi officiating controversy.',
    images: [OG_IMAGE],
  },
};

export default function InterMiamiColumbusCrewPlayoffsPage() {
  return (
    <>
      <NewsArticleSchema
        title="Brink of Elimination: Inter Miami Fall 3-0 to Columbus Crew Amid Messi Red-Card Controversy"
        description="Inter Miami CF stands on the brink of an early 2026 MLS Cup Playoffs exit following a 3-0 defeat to the Columbus Crew in a match overshadowed by a heated red-card controversy involving Lionel Messi."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.com/authors/jack-brennan"
        publishedTime="2026-11-22T22:30:00Z"
        modifiedTime="2026-11-22T22:30:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Sports"
        keywords={[
          'Inter Miami 3-0 loss Columbus Crew Messi red card controversy',
          'Inter Miami MLS playoff elimination 2026',
          'Lionel Messi red card controversy MLS playoffs',
          'Columbus Crew vs Inter Miami 3-0 score',
          'Messi referee confrontation MLS',
        ]}
      />

      <QuickArticle
        title="Brink of Elimination: Inter Miami Fall 3-0 to Columbus Crew Amid Messi Red-Card Controversy"
        subtitle="Inter Miami CF finds itself on the brink of an early exit from the 2026 MLS Cup Playoffs after suffering a lopsided 3-0 defeat to the Columbus Crew in a match overshadowed by officiating uproar and a heated red-card controversy involving Lionel Messi."
        department="MLS"
        category="Sports"
        accentColor="pink"
        publishDate="November 22, 2026"
        readTime="5 min read"
        author={{ name: 'Jack Brennan', slug: 'jack-brennan' }}
        heroImage={{
          src: OG_IMAGE,
          alt: 'Inter Miami vs Columbus Crew 2026 MLS Cup Playoffs Clash',
          caption: 'Inter Miami suffered a 3-0 defeat in Columbus amid intense officiating scrutiny.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/mls', label: 'MLS' },
          { href: SLUG, label: 'Miami vs Columbus 3-0' },
        ]}
        sources={[
          {
            number: 1,
            title: 'Football & Major League Soccer Coverage',
            url: 'https://www.theguardian.com/football/mls',
            publisher: 'The Guardian',
          },
          {
            number: 2,
            title: 'Soccer News, Scores & MLS Highlights',
            url: 'https://sports.yahoo.com/soccer/',
            publisher: 'Yahoo Sports',
          },
          {
            number: 3,
            title: '2026 Audi MLS Cup Playoffs Scores & Disciplinary Updates',
            url: 'https://www.mlssoccer.com/',
            publisher: 'MLSsoccer.com',
          },
          {
            number: 4,
            title: 'Major League Soccer Match Reports & Standings',
            url: 'https://www.espn.com/soccer/league/_/name/usa.1',
            publisher: 'ESPN',
          },
        ]}
        relatedArticles={[
          { href: '/mls/fc-cincinnati-nashville-sc-mls-cup-playoffs-opener-2026', title: 'Road Statement: FC Cincinnati Edges Nashville SC 1-0 in MLS Cup Playoffs Opener', category: 'Sports' },
          { href: '/mls/messi-100-goal-contributions-toronto-fc-inter-miami-2026', title: 'Lionel Messi Historic 100 Goal Contributions Milestone', category: 'Sports' },
          { href: '/mls', title: 'MLS Hub | Scores, Standings, and Playoffs Coverage', category: 'Sports' },
          { href: '/soccer', title: 'Global Soccer Hub | Premier League, MLS, World Cup 2026', category: 'Sports' },
        ]}
        tags={['MLS', 'Inter Miami', 'Columbus Crew', 'Lionel Messi', 'MLS Cup Playoffs', 'Soccer']}
      >
        <p>
          Inter Miami CF finds itself on the brink of an early exit from the <strong>2026 MLS Cup Playoffs</strong> after suffering a lopsided <strong>3-0 defeat to the Columbus Crew</strong> in a match overshadowed by officiating uproar and a heated red-card controversy involving <strong>Lionel Messi</strong>.
        </p>

        <p>
          Dominated across all phases of play by a clinical Columbus side, Miami&apos;s frustrations boiled over late in the contest, turning a steep postseason deficit into an immediate disciplinary and tactical crisis ahead of a must-win elimination fixture.
        </p>

        {/* ── Match & Controversy Summary Box ── */}
        <div className="my-8 not-prose rounded-xl border border-rose-200 bg-rose-50/60 p-5 font-mono text-sm shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-rose-700 mb-3 font-sans">
            MLS Cup Playoffs Match &amp; Controversy Summary
          </p>
          <div className="space-y-1 text-gray-800">
            <div>├── <strong>Fixture:</strong> Columbus Crew vs. Inter Miami CF (2026 MLS Cup Playoffs)</div>
            <div>├── <strong>Final Score:</strong> Columbus Crew 3 – 0 Inter Miami CF</div>
            <div>├── <strong>Flashpoint:</strong> Heated officiating dispute &amp; red-card controversy involving Lionel Messi</div>
            <div>├── <strong>Core Issue:</strong> Uncalled fouls/contact escalating into a late-match disciplinary flashpoint</div>
            <div>└── <strong>Series Impact:</strong> Inter Miami faces immediate elimination in the next match</div>
          </div>
        </div>

        <h2>Understanding the Lionel Messi Red-Card Controversy</h2>

        <p>
          Beyond the three-goal margin on the scoreboard, post-match coverage centered squarely on a volatile officiating sequence involving Lionel Messi that triggered widespread debate across the league.
        </p>

        {/* ── Flashpoint Anatomy Flow ── */}
        <div className="my-8 not-prose rounded-xl border border-slate-200 bg-slate-900 text-slate-100 p-5 font-mono text-sm shadow-md">
          <p className="text-xs font-bold uppercase tracking-widest text-pink-400 mb-3 font-sans">
            Anatomy of the Postseason Flashpoint
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-pink-400 font-bold">├── 1. Physical Accumulation:</span>
              <span>Repeated heavy contact &amp; uncalled challenges on Messi in midfield</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-400 font-bold">├── 2. The Escalation:</span>
              <span>Frustration boils over following a disputed non-call during a Miami attack</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-rose-400 font-bold">├── 3. Disciplinary Flashpoint:</span>
              <span>Heated confrontation with match officials &amp; opposing players</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-indigo-400 font-bold">└── 4. League Fallout:</span>
              <span>Debate over red-card thresholds &amp; potential post-match MLS review</span>
            </div>
          </div>
        </div>

        <p>
          Throughout the match, Columbus aggressively disrupted Inter Miami&apos;s buildup through tight marking and physical challenges. As the deficit widened to 3-0, visible frustration mounted over what Miami players viewed as a lack of protection from the match officials.
        </p>

        <p>
          The flashpoint occurred during a late sequence when a contentious challenge went unpunished, prompting a furious reaction from Messi toward the referee and opposing players. The incident immediately sparked dual-sided controversy:
        </p>

        <div className="my-6 space-y-4">
          <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4">
            <h3 className="text-base font-bold text-amber-900 mb-1">The Officiating &amp; Player Protection Debate</h3>
            <p className="text-sm text-gray-700">
              Supporters and Miami personnel argued that persistent uncalled fouls allowed physical play to escalate unchecked, provoking the late-game reaction and failing to safeguard marquee playmakers.
            </p>
          </div>

          <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-4">
            <h3 className="text-base font-bold text-rose-900 mb-1">The Red-Card Threshold Debate</h3>
            <p className="text-sm text-gray-700">
              Opposing supporters and neutral analysts contended that Messi&apos;s heated confrontation and physical reaction crossed the disciplinary line, arguing that the incident warranted an immediate straight red card—or potential supplemental review from the MLS Disciplinary Committee—which would carry an automatic suspension into Miami&apos;s elimination match.
            </p>
          </div>
        </div>

        <h2>Match &amp; Series Outlook Comparison</h2>

        <div className="my-8 not-prose overflow-hidden rounded-xl border border-rose-200 shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-rose-700 text-white">
                <th className="px-4 py-3 text-left font-bold">Metric / Factor</th>
                <th className="px-4 py-3 text-left font-bold">Columbus Crew</th>
                <th className="px-4 py-3 text-left font-bold">Inter Miami CF</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rose-100">
              {[
                ['Match Score', '3', '0'],
                ['Tactical Control', 'High-tempo pressing & clinical finishing', 'Disrupted buildup & frustrated transitions'],
                ['Disciplinary Status', 'Composed through late physical exchanges', 'Under scrutiny following Messi flashpoint'],
                ['Postseason Position', 'One win away from advancing', 'Facing immediate postseason elimination'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 1 ? 'bg-rose-50/40' : 'bg-white'}>
                  <td className="px-4 py-3 font-semibold text-rose-950">{row[0]}</td>
                  <td className="px-4 py-3 font-medium text-emerald-700">{row[1]}</td>
                  <td className="px-4 py-3 text-gray-700">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Video Breakdowns &amp; Incident Footage</h2>

        <p>
          The videos below capture key moments from the 3-0 clash and the officiating sequence at the center of the post-match debate:
        </p>

        {/* ── Primary Video Embed: Sports Today ── */}
        <div className="my-8 not-prose rounded-2xl border border-gray-200 bg-white p-4 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-red-600 text-white font-mono text-xs font-bold">1:28</span>
              <h3 className="text-sm font-bold text-gray-900">
                Controversy Erupts After Messi Confrontation in Late Clash
              </h3>
            </div>
            <span className="text-xs text-gray-500 font-medium">YouTube · Sports Today</span>
          </div>
          <div className="relative w-full overflow-hidden rounded-xl bg-black" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/y5OXwl8uEBU?rel=0&modestbranding=1"
              title="Controversy erupts after Messi throws ball at opponent’s face, gets away with a yellow card"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Watch the full incident breakdown via{' '}
            <a
              href="https://www.youtube.com/watch?v=y5OXwl8uEBU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              Sports Today on YouTube
            </a>
          </p>
        </div>

        {/* ── Secondary Shorts / Incident Breakdown Grid ── */}
        <div className="my-8 not-prose grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded bg-red-600 text-white font-mono text-xs font-bold">0:32</span>
              <span className="text-xs text-gray-500">YouTube · BallStory</span>
            </div>
            <h4 className="text-xs font-bold text-gray-900 mb-2 truncate">
              Messi Escapes Red Card Reaction Clip
            </h4>
            <div className="relative w-full overflow-hidden rounded-lg bg-black" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/99OPHaM_kmQ?rel=0&modestbranding=1"
                title="Messi Threw the Ball at His Face… And Escaped a RED CARD"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded bg-red-600 text-white font-mono text-xs font-bold">0:42</span>
              <span className="text-xs text-gray-500">YouTube · D’Origins Football</span>
            </div>
            <h4 className="text-xs font-bold text-gray-900 mb-2 truncate">
              Should Messi Have Been Sent Off Analysis
            </h4>
            <div className="relative w-full overflow-hidden rounded-lg bg-black" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/psMv4qtwoAY?rel=0&modestbranding=1"
                title="Messi Should've been Sent Off?!"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <h2>What Comes Next for Inter Miami</h2>

        <p>
          With a 3-0 loss on the books, Inter Miami has zero margin for error entering its upcoming elimination showdown.
        </p>

        <p>
          In addition to solving Columbus&apos;s high-pressing tactical setup and repairing defensive breakdowns that surrendered three unanswered goals, Miami must await clarity from Major League Soccer regarding any potential disciplinary fallout from the late-match controversy.
        </p>

        <p>
          For additional soccer analysis, explore our{' '}
          <Link href="/mls" className="text-blue-600 hover:text-blue-800 underline font-medium">
            MLS coverage hub
          </Link>
          , our report on{' '}
          <Link href="/mls/fc-cincinnati-nashville-sc-mls-cup-playoffs-opener-2026" className="text-blue-600 hover:text-blue-800 underline font-medium">
            FC Cincinnati&apos;s 1-0 win over Nashville SC
          </Link>
          , and our overview of{' '}
          <Link href="/mls/messi-100-goal-contributions-toronto-fc-inter-miami-2026" className="text-blue-600 hover:text-blue-800 underline font-medium">
            Messi&apos;s milestone season
          </Link>
          .
        </p>
      </QuickArticle>
    </>
  );
}
