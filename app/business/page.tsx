import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 3600;

const PAGE_URL = 'https://www.objectivewire.com/business';

export const metadata: Metadata = {
  title: 'Texas Business | Energy, Austin Tech, Real Estate News',
  description:
    'Texas business news covering the energy sector, Austin tech, real estate, and statewide economic developments. Verified reporting from Objective Wire TX.',
  keywords: [
    'Texas business news',
    'Austin tech news',
    'Texas energy sector',
    'Texas real estate news',
    'Texas economy 2026',
    'Objective Wire TX business',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Texas Business | Objective Wire TX',
    description:
      'Texas business and economic news. Energy, Austin tech, real estate, and statewide business coverage from Objective Wire TX.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'Objective Wire TX',
  },
};

const BEATS = [
  {
    href: '/business',
    label: 'Energy Sector',
    kicker: 'ENERGY',
    desc: 'Texas oil, gas, and renewables. ERCOT, upstream producers, and energy policy.',
  },
  {
    href: '/business',
    label: 'Austin Tech',
    kicker: 'TECH',
    desc: 'Dell, Apple Austin, Samsung, and the Capitol of Texas startup scene.',
  },
  {
    href: '/business',
    label: 'Real Estate',
    kicker: 'REAL ESTATE',
    desc: 'Texas housing market, commercial development, and zoning news statewide.',
  },
];

export default function TexasBusinessPage() {
  return (
    <div className="bg-[#faf7f2] min-h-screen">
      <div className="container max-w-7xl mx-auto px-4 py-10">

        {/* Hub header */}
        <div className="border-b-2 border-[#2d5a27] pb-6 mb-8">
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-[#2d5a27] mb-2 font-mono">Hub</p>
          <h1
            className="text-4xl md:text-5xl font-black text-gray-900 leading-tight"
            style={{ fontFamily: 'var(--font-source-serif), Georgia, serif' }}
          >
            Texas Business
          </h1>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl">
            Verified reporting on the Texas economy. Energy production, Austin tech, real estate, and statewide business developments.
          </p>
        </div>

        {/* Beat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {BEATS.map((beat) => (
            <Link
              key={beat.label}
              href={beat.href}
              className="group block bg-white border border-gray-200 p-6 hover:border-[#2d5a27] transition-colors"
            >
              <span className="inline-block text-[9px] font-black tracking-[0.2em] uppercase text-white bg-[#2d5a27] px-2 py-0.5 mb-3">
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

        <div className="border-t border-gray-200 pt-6">
          <Link href="/" className="text-xs font-bold text-[#c45c2a] hover:underline tracking-wide uppercase">
            &larr; Objective Wire TX Home
          </Link>
        </div>

      </div>
    </div>
  );
}
