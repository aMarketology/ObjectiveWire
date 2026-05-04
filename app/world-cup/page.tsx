import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CountdownTimer,
  HostCitiesMap,
  QualifiedTeamsTracker,
  TournamentFormat,
} from './_components';

export const revalidate = 3600;

const SLUG = '/world-cup';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'FIFA World Cup 2026 | Schedule, Teams, Host Cities & News',
  description:
    'Complete coverage of FIFA World Cup 2026 across the USA, Mexico, and Canada. 48 teams, 104 matches, 16 host cities, schedules, qualified teams, tournament news.',
  keywords: [
    'FIFA World Cup 2026',
    'World Cup 2026',
    'World Cup schedule',
    'World Cup 2026 teams',
    'World Cup host cities',
    'USA Mexico Canada World Cup',
    'World Cup 2026 news',
    'soccer World Cup',
    'football World Cup 2026',
    'FIFA 2026',
    'World Cup qualified teams',
    'World Cup stadiums',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'FIFA World Cup 2026 | Schedule, Teams, Host Cities & News',
    description:
      '48 teams, 104 matches, 16 host cities across North America. Full tournament coverage from ObjectWire.',
    type: 'website',
    url: CANONICAL,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIFA World Cup 2026 | ObjectWire Coverage',
    description: '48 teams, 104 matches, 16 host cities across North America.',
  },
};

const NEWS_ARTICLES = [
  {
    href: '/world-cup/news/2026-world-cup-48-team-field-complete-italy-out',
    title: '48-Team Field Complete | Italy Out of the 2026 World Cup',
    date: 'May 2026',
  },
  {
    href: '/world-cup/news/trump-iran-world-cup-2026-usa-hosting-controversy',
    title: 'Trump, Iran, and the 2026 World Cup | USA Hosting Controversy',
    date: 'May 2026',
  },
  {
    href: '/world-cup/news/host-cities-security-funding-frozen-dhs-shutdown',
    title: 'Host Cities Security Funding Frozen | DHS Shutdown Impact',
    date: 'April 2026',
  },
  {
    href: '/world-cup/news/fifa-backs-mexico-after-cartel-violence-jalisco',
    title: 'FIFA Backs Mexico After Cartel Violence Concerns in Jalisco',
    date: 'April 2026',
  },
  {
    href: '/world-cup/news/italy-rejects-iran-replacement-world-cup-2026-zampolli',
    title: 'Italy Rejects Iran Replacement Slot | World Cup 2026 Dispute',
    date: 'April 2026',
  },
  {
    href: '/world-cup/news/fifa-world-cup-2026-five-major-issues-50-days',
    title: 'Five Major Issues Facing the 2026 World Cup with 50 Days to Go',
    date: 'April 2026',
  },
  {
    href: '/world-cup/news/fifa-world-cup-2026-final-halftime-show-chris-martin',
    title: 'Chris Martin Confirmed for World Cup 2026 Final Halftime Show',
    date: 'March 2026',
  },
  {
    href: '/world-cup/news/world-cup-2026-us-transit-prices-fans-outraged',
    title: 'World Cup 2026 US Transit Prices | Fans Outraged by Costs',
    date: 'March 2026',
  },
  {
    href: '/world-cup/boycott-controversy',
    title: 'World Cup Boycott Controversy | ICE, Immigration, and the 2026 Debate',
    date: 'February 2026',
  },
  {
    href: '/world-cup/england-scotland-stadium-row',
    title: 'England vs Scotland Stadium Row | World Cup 2026 Venue Dispute',
    date: 'February 2026',
  },
];

export default function WorldCup2026Hub() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <div className="relative min-h-[90vh] bg-gradient-to-br from-slate-900 via-purple-950 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")", backgroundSize: '60px 60px' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-block mb-4">
              <div className="text-sm font-bold tracking-[0.3em] text-teal-400 mb-2">OFFICIAL COVERAGE</div>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-6">
              FIFA WORLD CUP
              <span className="block text-5xl md:text-7xl lg:text-8xl mt-2 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                2026
              </span>
            </h1>

            <div className="flex items-center justify-center gap-8 text-xl md:text-2xl font-semibold mb-8">
              <span className="flex items-center gap-2"><span className="text-4xl">🇺🇸</span> USA</span>
              <span className="text-teal-400">•</span>
              <span className="flex items-center gap-2"><span className="text-4xl">🇲🇽</span> MEXICO</span>
              <span className="text-teal-400">•</span>
              <span className="flex items-center gap-2"><span className="text-4xl">🇨🇦</span> CANADA</span>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              The biggest FIFA World Cup in history: 48 teams, 104 matches, 16 host cities across North America. Opening match June 11, 2026.
            </p>

            <div className="mt-12 pt-12 border-t border-white/20">
              <CountdownTimer />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-500" />
      </div>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 border-b-4 border-teal-500">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '48', label: 'Teams' },
              { value: '104', label: 'Matches' },
              { value: '16', label: 'Host Cities' },
              { value: '3', label: 'Nations' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-6xl md:text-7xl font-black text-teal-400 mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-widest text-gray-400 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── LATEST NEWS ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 tracking-tight uppercase">
            Latest News
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl">
            {NEWS_ARTICLES.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group flex flex-col gap-1 border border-gray-200 rounded-lg p-5 hover:border-teal-500 hover:shadow-md transition-all duration-200"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-teal-600">{article.date}</span>
                <span className="font-bold text-gray-900 group-hover:text-teal-700 transition-colors leading-snug">
                  {article.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOST CITIES ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight uppercase">16 Host Cities</h2>
            <p className="text-xl text-gray-600">Across the United States, Mexico, and Canada</p>
          </div>
          <HostCitiesMap />
        </div>
      </section>

      {/* ── QUALIFIED TEAMS ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight uppercase">Qualified Teams</h2>
            <p className="text-xl text-gray-600">48 teams competing for glory</p>
          </div>
          <QualifiedTeamsTracker />
        </div>
      </section>

      {/* ── TOURNAMENT FORMAT ────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight uppercase">Tournament Format</h2>
            <p className="text-xl text-gray-600">The path to the final</p>
          </div>
          <TournamentFormat />
        </div>
      </section>

      {/* ── FOOTER CTA ───────────────────────────────────────────────────── */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="text-sm font-bold tracking-[0.3em] text-teal-400 mb-4">OBJECTWIRE OFFICIAL COVERAGE</div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">DON&apos;T MISS A MOMENT OF WORLD CUP 2026</h2>
          <p className="text-xl text-gray-400 mb-10">
            Comprehensive coverage, analysis, and breaking news from all 104 matches across North America.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <Link
              href="/world-cup/news/2026-world-cup-48-team-field-complete-italy-out"
              className="px-10 py-5 bg-teal-500 hover:bg-teal-400 text-black font-bold text-lg uppercase tracking-wide transition-all duration-300"
            >
              Latest News
            </Link>
            <Link
              href="/soccer"
              className="px-10 py-5 bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold text-lg uppercase tracking-wide transition-all duration-300"
            >
              Soccer Hub
            </Link>
          </div>
          <div className="border-t border-white/20 pt-8">
            <p className="text-sm text-gray-500">
              © 2026{' '}
              <Link href="/" className="text-teal-400 hover:underline">ObjectWire</Link>
              . FIFA World Cup 2026 coverage and analysis.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
