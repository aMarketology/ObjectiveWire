import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/nav/Breadcrumb';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.objectivewire.com/service';

export const metadata: Metadata = {
  title: 'ObjectWire Coverage | Sports, Creators, Cars & Culture',
  description:
    'ObjectWire is a verified sports, creators, and culture network. Primary-source reporting on World Cup 2026, Premier League, MLS, MLB, golf, supercars, creator economy, and breaking culture news.',
  keywords: [
    'World Cup 2026 coverage',
    'Premier League news 2026',
    'MLS 2026 reporting',
    'MLB news 2026',
    'supercar news',
    'creator economy news',
    'YouTube creator profiles',
    'TikTok influencer news',
    'sports verified scores',
    'sports betting data verified',
    'culture reporting',
    'ObjectWire sports coverage',
    'investigative sports journalism',
    'tip the newsroom',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'ObjectWire Coverage | Sports, Creators, Cars & Culture',
    description:
      'Verified sports and culture coverage. World Cup 2026, Premier League, MLS, supercars, and the creator economy. Primary sources. Accuracy over speed.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'Objective Wire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ObjectWire Coverage | Sports, Creators, Cars & Culture',
    description:
      'World Cup 2026, Premier League, supercars, creators. Verified reporting, primary sources only.',
  },
};

const SITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'NewsMediaOrganization',
  name: 'Objective Wire',
  alternateName: 'oWire',
  url: PAGE_URL,
  description:
    'Objective Wire is a verified sports, creators, and culture network covering World Cup 2026, Premier League, MLS, MLB, supercars, and the creator economy.',
  foundingDate: '2024',
  email: 'editorial@objectivewire.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.objectivewire.com/zwire-logo-square.png',
    width: 1001,
    height: 1001,
  },
  sameAs: ['https://www.objectivewire.com'],
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.objectivewire.com' },
    { '@type': 'ListItem', position: 2, name: 'Coverage', item: PAGE_URL },
  ],
};

const COVERAGE_PILLARS = [
  {
    href: '/world-cup',
    label: 'World Cup 2026',
    icon: '⚽',
    desc: 'Live match reports, standings, group stage results, knockout bracket, and elimination coverage for the 2026 FIFA World Cup across the USA, Mexico, and Canada.',
  },
  {
    href: '/premier-league',
    label: 'Premier League',
    icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    desc: 'Premier League news, results, transfer window reporting, manager news, and table standings. Primary-source coverage from club and league announcements.',
  },
  {
    href: '/mls',
    label: 'MLS 2026',
    icon: '🇺🇸',
    desc: 'Major League Soccer match reports, standings, playoff race, and roster news. The most complete American soccer coverage outside the World Cup.',
  },
  {
    href: '/mlb',
    label: 'MLB',
    icon: '⚾',
    desc: 'MLB standings, trade news, playoff picture, and player performance reporting. Verified stats and primary-source roster moves.',
  },
  {
    href: '/golf',
    label: 'Golf',
    icon: '⛳',
    desc: 'PGA Tour leaderboards, major championship coverage, LIV Golf news, and player rankings. Accuracy-first golf journalism.',
  },
  {
    href: '/cars',
    label: 'Cars and Motorsport',
    icon: '🏎️',
    desc: 'Supercar reveals, EV news, Formula 1, IMSA, and auto industry reporting. Primary source: manufacturer press releases and race results.',
  },
  {
    href: '/creator',
    label: 'Creator Economy',
    icon: '🎬',
    desc: 'YouTube creator news, TikTok trends, influencer profiles, brand deals, and platform policy changes affecting the creator economy.',
  },
  {
    href: '/youtube',
    label: 'YouTube',
    icon: '▶️',
    desc: 'YouTube creator spotlights, subscriber milestones, controversy coverage, and platform policy reporting. Verified from primary sources.',
  },
  {
    href: '/soccer',
    label: 'Soccer',
    icon: '�',
    desc: 'Global soccer coverage beyond the World Cup. Nations League, Copa America, CONMEBOL, CAF, and international match reports.',
  },
];

const EDITORIAL_SERVICES = [
  {
    href: '/service/tip-the-newsroom',
    label: 'Tip the Newsroom',
    icon: '�',
    desc: 'Submit a confidential tip. We protect sources and pursue stories that serve the public interest. All tips reviewed by the editorial desk.',
  },
  {
    href: '/editorial-standards',
    label: 'Editorial Standards',
    icon: '�',
    desc: 'ObjectWire publishes verified, primary-source reporting. Read our editorial standards: accuracy over speed, transparent corrections, named authors.',
  },
  {
    href: '/corrections',
    label: 'Corrections',
    icon: '✏️',
    desc: 'Errors corrected publicly, timestamped, with the original text preserved. Report a factual error to the editorial desk.',
  },
];

export default function CoverageHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <main className="min-h-screen bg-white dark:bg-gray-950">

        {/* ── HERO ── */}
        <section className="bg-gray-950 text-white">
          <div className="container mx-auto px-4 pt-6 max-w-6xl">
            <Breadcrumb
              items={[
                { name: 'Home', item: '/' },
                { name: 'Coverage', item: '/service' },
              ]}
              className="text-gray-400"
            />
          </div>
          <div className="container mx-auto px-4 py-16 max-w-6xl">
            <p className="text-xs uppercase tracking-[0.3em] font-black text-blue-400 mb-4 font-mono">
              Verified Sports, Culture and Creators
            </p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6 max-w-4xl">
              What ObjectWire<br />
              <span className="text-blue-400">Covers.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-6 leading-relaxed">
              Primary-source reporting on the events, people, and industries that matter.
              World Cup 2026, Premier League, MLS, MLB, supercars, creators, and breaking culture.
              Accuracy over speed. Every article traceable to source.
            </p>
            <p className="text-base text-gray-400 max-w-2xl mb-10 leading-relaxed">
              ObjectWire builds verified factual records for the sports and culture events
              people bet on, argue about, and search for. Every stat, every result,
              every roster move, sourced and timestamped.
            </p>

            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { stat: '9', label: 'Coverage Beats' },
                { stat: 'Primary', label: 'Sources Only' },
                { stat: 'World Cup', label: '2026 Focus' },
                { stat: 'Verified', label: 'Every Claim' },
              ].map(({ stat, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-black text-white">{stat}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/world-cup"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                World Cup 2026 Coverage
              </Link>
              <Link
                href="/service/tip-the-newsroom"
                className="border border-gray-600 hover:border-white text-gray-300 hover:text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Tip the Newsroom
              </Link>
            </div>
          </div>
        </section>

        {/* ── COVERAGE PILLARS ── */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.3em] font-black text-blue-600 mb-3 font-mono">
                Editorial Beats
              </p>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
                Coverage Areas
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                ObjectWire covers four content pillars: sports, cars, creators, and culture.
                Every article is primary-source only, written for people who want facts, not takes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COVERAGE_PILLARS.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all bg-white dark:bg-gray-900"
                >
                  <div className="text-3xl mb-4">{p.icon}</div>
                  <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                    {p.label}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{p.desc}</p>
                  <span className="text-blue-600 text-sm font-semibold group-hover:underline">
                    Read coverage →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── VERIFIED DATA FOR SPORTS BETTORS ── */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] font-black text-blue-600 mb-3 font-mono">
                  Verified Factual Base
                </p>
                <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6">
                  Objective data for the biggest events.
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Every World Cup result, standings update, goal scorer, and group table
                  on ObjectWire is sourced directly from FIFA. No editorial spin.
                  The record stands as a verifiable, timestamped fact base.
                </p>
                <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                  ObjectWire builds the factual foundation for sports events, covering scores,
                  brackets, and results with the precision that sports bettors, analysts,
                  and researchers require. Primary source or it does not publish.
                </p>
                <Link
                  href="/world-cup"
                  className="text-blue-600 hover:text-blue-800 underline font-semibold"
                >
                  World Cup 2026 hub →
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  { icon: '✅', text: 'Match results sourced from official FIFA and league records' },
                  { icon: '✅', text: 'Standings updated from primary league data, not aggregators' },
                  { icon: '✅', text: 'Elimination bracket tracking for every World Cup round' },
                  { icon: '✅', text: 'Roster news cited to club and federation announcements' },
                  { icon: '✅', text: 'Named bylines, known authors, no anonymous takes' },
                  { icon: '✅', text: 'Timestamps on every publish and update' },
                  { icon: '✅', text: 'Corrections posted publicly when facts change' },
                  { icon: '✅', text: 'No manufactured drama, no clickbait, no hedged claims' },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">{icon}</span>
                    <p className="text-gray-700 dark:text-gray-300">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── EDITORIAL SERVICES ── */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.3em] font-black text-blue-600 mb-3 font-mono">
                Editorial
              </p>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
                Newsroom Services
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                Tip the newsroom, review our editorial standards, or report a factual error.
                Transparency is part of the product.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {EDITORIAL_SERVICES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all bg-white dark:bg-gray-800"
                >
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                    {s.label}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-blue-600 text-sm font-semibold group-hover:underline">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── EDITORIAL PRINCIPLES ── */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-12 text-center">
              <p className="text-xs uppercase tracking-[0.3em] font-black text-blue-600 mb-3 font-mono">
                How We Work
              </p>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white">
                The ObjectWire Standard
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Primary Source', desc: 'Every factual claim traces to an original source. No aggregators, no secondhand rewrites.' },
                { step: '02', title: 'Named Author', desc: 'All articles carry a named byline with an author page. No anonymous content.' },
                { step: '03', title: 'No Hedging', desc: 'Claims are specific and verifiable. Vague assertions do not publish.' },
                { step: '04', title: 'Transparent Corrections', desc: 'Errors are corrected publicly, timestamped, with the original text preserved.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-black mx-auto mb-4">
                    {step}
                  </div>
                  <h3 className="font-black text-gray-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-blue-700 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-black mb-4">Follow the Coverage</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              World Cup 2026 is live. Premier League, MLS, MLB, and the creator economy
              are updated daily. Accuracy over speed, every time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/world-cup"
                className="bg-white text-blue-700 hover:bg-blue-50 font-black px-10 py-4 rounded-lg transition-colors text-lg"
              >
                World Cup 2026
              </Link>
              <Link
                href="/creator"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold px-10 py-4 rounded-lg transition-colors text-lg"
              >
                Creator Economy
              </Link>
            </div>
            <p className="mt-8 text-blue-200 text-sm">
              Editorial contact:{' '}
              <a href="mailto:editorial@objectivewire.com" className="underline text-white hover:text-blue-100">
                editorial@objectivewire.com
              </a>
            </p>
          </div>
        </section>

      </main>
    </>
  );
}
