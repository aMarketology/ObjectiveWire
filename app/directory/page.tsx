import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 3600;

const PAGE_URL = 'https://www.objectivewire.org/directory';

export const metadata: Metadata = {
  title: 'Texas Entity Directory | Austin, Houston & Greater TX',
  description:
    'Public-interest directory of Texas government agencies, elected officials, nonprofits, and organizations. Documented by Objective Wire licensed investigators.',
  keywords: [
    'Texas government directory',
    'Travis County agencies',
    'Austin government officials',
    'Texas public records',
    'Texas elected officials directory',
    'Houston government agencies',
    'Texas investigative journalism',
    'Objective Wire directory',
    'Texas entity profiles',
    'Austin public interest',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Texas Entity Directory | Austin, Houston & Greater TX',
    description:
      'Documented profiles of Texas government agencies, officials, nonprofits, and companies. Primary-source records by Objective Wire.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'Objective Wire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texas Entity Directory | Objective Wire',
    description:
      'Government agencies, elected officials, nonprofits, and companies. Primary-source documentation.',
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const REGION_DIRS = [
  {
    label: 'Austin',
    href: '/directory/austin',
    description:
      'Travis County, City of Austin, APD, municipal courts, and local elected officials.',
    icon: '🏛️',
    count: '1 profile',
  },
  {
    label: 'Houston',
    href: '/directory/houston',
    description:
      'Harris County, City of Houston, HPD, port authority, and regional agencies.',
    icon: '🌃',
    count: 'Coming soon',
  },
  {
    label: 'Greater Texas',
    href: '/directory/greater-texas',
    description:
      'Statewide agencies, departments, comptroller, attorney general, and legislature.',
    icon: '⭐',
    count: 'Coming soon',
  },
];

const ENTITY_TYPES = [
  {
    label: 'Government',
    href: '/directory/austin/government',
    description: 'Agencies, departments, courts, and elected offices.',
    icon: '⚖️',
  },
  {
    label: 'Officials',
    href: '/directory/austin/officials',
    description: 'Elected and appointed public figures.',
    icon: '👤',
  },
  {
    label: 'Organizations',
    href: '/directory/austin/organizations',
    description: 'Nonprofits, PACs, civic associations.',
    icon: '🏢',
  },
  {
    label: 'Companies',
    href: '/directory/austin/companies',
    description: 'Businesses of public interest and accountability.',
    icon: '🏗️',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function DirectoryIndexPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-1.5 text-xs text-gray-600">
            <li><Link href="/" className="hover:text-[#c45c2a] transition-colors">Home</Link></li>
            <li aria-hidden="true" className="text-gray-700">/</li>
            <li className="text-gray-400">Directory</li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c45c2a]/15 border border-[#c45c2a]/25 text-[#c45c2a] text-[11px] font-black uppercase tracking-[.16em] mb-5">
            <span>📁</span> Texas Public-Interest Directory
          </div>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-tight tracking-tight mb-5">
            Texas Entity<br />Directory
          </h1>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mb-6">
            Documented profiles of the government agencies, elected officials, organizations, and
            companies that Objective Wire covers. Every entry is sourced from primary records,
            public filings, and official documents.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-600">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              Primary sources only
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              Timestamped corrections
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              Licensed PI-backed
            </span>
          </div>
        </header>

        {/* Regions */}
        <section className="mb-14">
          <h2 className="text-[11px] font-black uppercase tracking-[.16em] text-gray-500 mb-5">
            Browse by Region
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {REGION_DIRS.map((region) => (
              <Link
                key={region.href}
                href={region.href}
                className="group flex flex-col gap-3 p-5 rounded-xl bg-[#111111] border border-white/8 hover:border-[#c45c2a]/40 transition-all duration-200 hover:bg-[#151515]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-2xl" aria-hidden="true">{region.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 group-hover:text-gray-500 transition-colors">
                    {region.count}
                  </span>
                </div>
                <div>
                  <p className="text-base font-black text-white group-hover:text-[#c45c2a] transition-colors mb-1.5">
                    {region.label}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">{region.description}</p>
                </div>
                <span className="text-[#c45c2a] text-sm mt-auto group-hover:translate-x-0.5 transition-transform">
                  View directory →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Entity types */}
        <section className="mb-14">
          <h2 className="text-[11px] font-black uppercase tracking-[.16em] text-gray-500 mb-5">
            Browse by Entity Type
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {ENTITY_TYPES.map((type) => (
              <Link
                key={type.href}
                href={type.href}
                className="group flex flex-col gap-2.5 p-4 rounded-xl bg-[#111111] border border-white/8 hover:border-[#c45c2a]/40 transition-all duration-200 hover:bg-[#151515]"
              >
                <span className="text-xl" aria-hidden="true">{type.icon}</span>
                <p className="text-sm font-black text-white group-hover:text-[#c45c2a] transition-colors">
                  {type.label}
                </p>
                <p className="text-[11px] text-gray-500 leading-snug">{type.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Mission note */}
        <div className="rounded-xl border border-white/8 bg-[#111111] p-6 md:p-8">
          <h2 className="text-base font-black text-white mb-3">
            Why Objective Wire Maintains This Directory
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Objective Wire is a 501(c)(3) nonprofit investigative agency covering Texas. This directory
            exists because public accountability requires public documentation. Every profile is sourced
            from primary records, official filings, and on-record statements. Nothing is published
            without a primary source citation.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Errors are corrected publicly and timestamped. Corrections are linked from the profile page
            and logged in{' '}
            <Link href="/corrections" className="text-blue-400 hover:text-blue-300 underline">
              our corrections archive
            </Link>
            .
          </p>
          <Link
            href="/service/tip-the-newsroom"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#c45c2a] hover:text-[#d4723e] transition-colors"
          >
            Have a tip or document? →
          </Link>
        </div>

      </div>
    </div>
  );
}
