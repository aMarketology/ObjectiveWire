import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 3600;

const PAGE_URL = 'https://www.objectivewire.com/sports';

export const metadata: Metadata = {
  title: 'Texas Sports | Astros, Cowboys, Texans, Spurs, FC Dallas',
  description:
    'Texas sports news and coverage. Houston Astros, Dallas Cowboys, Houston Texans, San Antonio Spurs, and FC Dallas. Verified reporting on every Texas team.',
  keywords: [
    'Texas sports news',
    'Houston Astros news',
    'Dallas Cowboys news',
    'Houston Texans news',
    'San Antonio Spurs news',
    'FC Dallas news',
    'Texas sports 2026',
    'Objective Wire TX sports',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Texas Sports | Objective Wire TX',
    description:
      'Houston Astros, Dallas Cowboys, Houston Texans, San Antonio Spurs, and FC Dallas. Texas sports news from Objective Wire TX.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'Objective Wire TX',
  },
};

const BEATS = [
  {
    href: '/mlb',
    label: 'Astros',
    kicker: 'MLB',
    desc: 'Houston Astros coverage — game reports, roster moves, standings, and trade news.',
  },
  {
    href: '/mls',
    label: 'FC Dallas',
    kicker: 'MLS',
    desc: 'FC Dallas match coverage, Western Conference standings, and transfer news.',
  },
  {
    href: '/sports',
    label: 'Cowboys',
    kicker: 'NFL',
    desc: 'Dallas Cowboys news — OTAs, roster transactions, and season previews.',
  },
  {
    href: '/sports',
    label: 'Texans',
    kicker: 'NFL',
    desc: 'Houston Texans coverage — game analysis, draft picks, and team news.',
  },
  {
    href: '/sports',
    label: 'Spurs',
    kicker: 'NBA',
    desc: 'San Antonio Spurs news — standings, draft, and Victor Wembanyama coverage.',
  },
];

export default function TexasSportsPage() {
  return (
    <div className="bg-[#faf7f2] min-h-screen">
      <div className="container max-w-7xl mx-auto px-4 py-10">

        {/* Hub header */}
        <div className="border-b-2 border-[#1e3a6e] pb-6 mb-8">
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-[#1e3a6e] mb-2 font-mono">Hub</p>
          <h1
            className="text-4xl md:text-5xl font-black text-gray-900 leading-tight"
            style={{ fontFamily: 'var(--font-source-serif), Georgia, serif' }}
          >
            Texas Sports
          </h1>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl">
            Verified reporting on the Houston Astros, Dallas Cowboys, Houston Texans, San Antonio Spurs, and FC Dallas. Every Texas team, one source.
          </p>
        </div>

        {/* Beat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {BEATS.map((beat) => (
            <Link
              key={beat.label}
              href={beat.href}
              className="group block bg-white border border-gray-200 p-6 hover:border-[#1e3a6e] transition-colors"
            >
              <span className="inline-block text-[9px] font-black tracking-[0.2em] uppercase text-white bg-[#1e3a6e] px-2 py-0.5 mb-3">
                {beat.kicker}
              </span>
              <h2
                className="text-xl font-black text-gray-900 group-hover:text-[#c45c2a] transition-colors mb-2"
                style={{ fontFamily: 'var(--font-source-serif), Georgia, serif' }}
              >
                {beat.label}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">{beat.desc}</p>
            </Link>
          ))}
        </div>

        {/* Back to homepage */}
        <div className="border-t border-gray-200 pt-6">
          <Link href="/" className="text-xs font-bold text-[#c45c2a] hover:underline tracking-wide uppercase">
            &larr; Objective Wire TX Home
          </Link>
        </div>

      </div>
    </div>
  );
}
