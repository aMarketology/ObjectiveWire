import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 3600;

const PAGE_URL = 'https://www.objectivewire.org/directory/austin';

export const metadata: Metadata = {
  title: 'Austin Directory | Travis County Agencies, Organizations & Companies',
  description:
    'Documented profiles of Austin and Travis County government agencies, organizations, and companies of public interest. Primary-source records by Objective Wire.',
  keywords: [
    'Austin directory',
    'Travis County government',
    'Austin agencies directory',
    'Austin organizations',
    'Austin public records',
    'Austin investigative journalism',
    'Objective Wire Austin',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Austin Directory | Travis County Agencies, Organizations & Companies',
    description:
      'Primary-source profiles of Austin and Travis County government agencies, organizations, and companies of public interest.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'Objective Wire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Austin Entity Directory | Objective Wire',
    description: 'Documented profiles of Austin and Travis County entities.',
  },
};

const ENTITY_TYPES = [
  {
    label: 'Government & Organizations',
    href: '/directory/austin/government',
    description: 'Agencies, courts, DA, APD, city and county offices, nonprofits, and civic organizations.',
    icon: '⚖️',
    count: '3 profiles + 15 orgs',
  },
  {
    label: 'Companies & Contractors',
    href: '/directory/austin/companies',
    description: 'Austin businesses, government contractors, and companies of public interest.',
    icon: '🏗️',
    count: '1 profile',
  },
];

export default function AustinDirectoryPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-1.5 text-xs text-gray-600">
            <li><Link href="/" className="hover:text-[#c45c2a] transition-colors">Home</Link></li>
            <li aria-hidden="true" className="text-gray-700">/</li>
            <li><Link href="/directory" className="hover:text-[#c45c2a] transition-colors">Directory</Link></li>
            <li aria-hidden="true" className="text-gray-700">/</li>
            <li className="text-gray-400">Austin</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c45c2a]/15 border border-[#c45c2a]/25 text-[#c45c2a] text-[11px] font-black uppercase tracking-[.16em] mb-5">
            <span>📍</span> Austin, Texas
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Austin Directory
          </h1>
          <p className="text-base text-gray-400 leading-relaxed max-w-2xl">
            Documented profiles of government agencies, organizations, and companies in Austin and
            Travis County. Every entry sourced from primary records — court filings, procurement
            databases, regulatory documents, and public disclosures.
          </p>
        </header>

        {/* Entity type grid */}
        <section className="mb-12">
          <h2 className="text-[11px] font-black uppercase tracking-[.16em] text-gray-500 mb-5">
            Browse by Entity Type
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ENTITY_TYPES.map((type) => (
              <Link
                key={type.href}
                href={type.href}
                className="group flex items-start gap-4 p-5 rounded-xl bg-[#111111] border border-white/8 hover:border-[#c45c2a]/40 transition-all duration-200 hover:bg-[#151515]"
              >
                <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">{type.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <p className="text-sm font-black text-white group-hover:text-[#c45c2a] transition-colors">
                      {type.label}
                    </p>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 shrink-0">
                      {type.count}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{type.description}</p>
                </div>
                <span className="text-gray-700 group-hover:text-[#c45c2a] transition-colors shrink-0 mt-0.5">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Back to full directory */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/8">
          <Link
            href="/directory"
            className="text-xs text-gray-500 hover:text-[#c45c2a] transition-colors underline"
          >
            ← Back to full directory
          </Link>
          <span className="text-gray-700 text-xs">|</span>
          <Link
            href="/local/austin"
            className="text-xs text-gray-500 hover:text-[#c45c2a] transition-colors underline"
          >
            Austin news coverage
          </Link>
        </div>

      </div>
    </div>
  );
}
