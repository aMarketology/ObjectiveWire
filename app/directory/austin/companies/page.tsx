import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 3600;

const PAGE_URL = 'https://www.objectivewire.org/directory/austin/companies';
const SITE_URL = 'https://www.objectivewire.org';

export const metadata: Metadata = {
  title: 'Austin Companies Directory | Government Contractors & Public Interest Firms',
  description:
    'Documented profiles of Austin and Texas-based companies that hold government contracts or are of public interest. Government consulting, software, professional services.',
  keywords: [
    'Austin government contractors', 'Texas government consulting firms', 'Tyler Technologies Texas',
    'Deloitte Austin', 'Accenture Texas government', 'Austin companies public interest',
    'government software Texas', 'Texas state contracts companies', 'Objective Wire companies',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Austin Companies Directory | Government Contractors & Public Interest Firms',
    description: 'Primary-source profiles of Austin and Texas companies holding government contracts or of documented public interest.',
    type: 'website', url: PAGE_URL, siteName: 'Objective Wire',
  },
};

// ─── Schema ──────────────────────────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',      item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Directory', item: `${SITE_URL}/directory` },
        { '@type': 'ListItem', position: 3, name: 'Austin',    item: `${SITE_URL}/directory/austin` },
        { '@type': 'ListItem', position: 4, name: 'Companies', item: PAGE_URL },
      ],
    },
    {
      '@type': 'CollectionPage',
      name: 'Austin Companies Directory | Objective Wire',
      description: 'Documented profiles of Austin and Texas companies of public interest, with focus on government contractors and service firms.',
      url: PAGE_URL,
      publisher: { '@type': 'NewsMediaOrganization', name: 'Objective Wire', url: SITE_URL },
      mainEntity: {
        '@type': 'ItemList',
        name: 'Austin & Texas Companies of Public Interest',
        numberOfItems: 8,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Tyler Technologies', item: `${SITE_URL}/directory/austin/companies/tyler-technologies` },
          { '@type': 'ListItem', position: 2, name: 'Deloitte Government & Public Services' },
          { '@type': 'ListItem', position: 3, name: 'Accenture Federal Services' },
          { '@type': 'ListItem', position: 4, name: 'NTT Data Government Services' },
          { '@type': 'ListItem', position: 5, name: 'Conduent — Texas Operations' },
          { '@type': 'ListItem', position: 6, name: 'Guidehouse LLP' },
          { '@type': 'ListItem', position: 7, name: 'KPMG Government Services' },
          { '@type': 'ListItem', position: 8, name: 'Ernst & Young (EY) Government Advisory' },
        ],
      },
    },
  ],
};

// ─── Entity data ─────────────────────────────────────────────────────────────

interface CompanyCard {
  name: string;
  entityType: string;
  hq: string;
  ticker?: string;
  contractFocus: string[];
  summary: string;
  publicInterestFlag: string;
  profileSlug?: string;
  status: 'Active' | 'Under Review';
}

const COMPANIES: CompanyCard[] = [
  {
    name: 'Tyler Technologies',
    entityType: 'Government Software Corporation',
    hq: 'Plano, TX',
    ticker: 'NYSE: TYL',
    contractFocus: ['Court case management (Odyssey)', 'Local govt ERP (Munis)', 'Digital govt services (NIC / Texas.gov)', 'Property tax systems'],
    summary: 'Largest publicly traded US company dedicated exclusively to government software. Texas HQ. Court case management used by Travis County. Texas.gov digital services operated by Tyler subsidiary NIC.',
    publicInterestFlag: 'Sole-source contracts, court data access, Texas.gov fee model',
    profileSlug: 'tyler-technologies',
    status: 'Active',
  },
  {
    name: 'Deloitte Government & Public Services',
    entityType: 'Government Consulting Firm',
    hq: 'Austin / Dallas, TX (Texas offices)',
    contractFocus: ['State government transformation', 'IT modernization', 'Medicaid / HHSC consulting', 'Finance & operations consulting'],
    summary: 'Deloitte\'s GPS (Government & Public Services) practice is one of the largest government consulting operations in the US. Holds documented Texas state agency consulting contracts, including work with HHSC.',
    publicInterestFlag: 'HHSC consulting contracts, state IT projects, procurement records at Texas agencies',
    status: 'Active',
  },
  {
    name: 'Accenture Federal & Public Services',
    entityType: 'Government Consulting Firm',
    hq: 'Austin, TX (Texas office)',
    contractFocus: ['State technology modernization', 'Medicaid systems', 'Benefits eligibility systems', 'Cloud and digital transformation'],
    summary: 'Accenture\'s public services practice holds major Texas and federal government technology contracts, including documented work on state benefits systems and agency IT modernization.',
    publicInterestFlag: 'State benefits system contracts, HHSC relationship, technology procurement',
    status: 'Active',
  },
  {
    name: 'Conduent — Texas Operations',
    entityType: 'Government Services Corporation',
    hq: 'Florham Park, NJ (major Texas operations)',
    ticker: 'NASDAQ: CNDT',
    contractFocus: ['Texas SNAP / benefits processing', 'Medicaid claims administration', 'Transportation tolling systems (TxTag)', 'State benefits delivery'],
    summary: 'Conduent (formerly Xerox Government Services) operates major Texas government contracts including TxTag toll processing for TxDOT and state benefits processing. High public interest due to documented service failures in state benefits programs.',
    publicInterestFlag: 'TxTag toll processing, state benefits delivery failures, HHSC Medicaid administration',
    status: 'Active',
  },
  {
    name: 'NTT Data Government Services',
    entityType: 'Government IT Services Corporation',
    hq: 'Plano, TX',
    contractFocus: ['State IT services', 'Legacy system modernization', 'Data center operations', 'Texas state agency IT'],
    summary: 'NTT Data (formerly Keane Federal Systems) holds Texas state IT contracts through DIR and direct procurement. Operates state technology infrastructure for multiple Texas agencies.',
    publicInterestFlag: 'State IT contract bundling, DIR cooperative contracts, agency IT dependency',
    status: 'Active',
  },
  {
    name: 'Guidehouse LLP',
    entityType: 'Government Consulting Firm',
    hq: 'McLean, VA (Texas offices)',
    contractFocus: ['State and local government advisory', 'Healthcare / Medicaid consulting', 'Public sector strategy', 'Federal program management'],
    summary: 'Guidehouse (formed from PwC\'s government advisory practice) provides management consulting to Texas state agencies and has a significant Texas state government consulting presence.',
    publicInterestFlag: 'HHSC consulting, state agency advisory contracts, procurement records',
    status: 'Active',
  },
  {
    name: 'KPMG Government & Infrastructure',
    entityType: 'Professional Services Firm',
    hq: 'Dallas / Austin, TX (Texas offices)',
    contractFocus: ['State government audit and advisory', 'Infrastructure consulting', 'IT audit', 'Financial transformation'],
    summary: 'KPMG\'s government practice holds Texas state agency audit and advisory contracts. As a major audit firm with state clients, its work on state financial statements and IT audits is of public interest.',
    publicInterestFlag: 'State agency audits, financial system consulting, audit independence questions',
    status: 'Active',
  },
  {
    name: 'Ernst & Young (EY) Government Advisory',
    entityType: 'Professional Services Firm',
    hq: 'Houston / Austin, TX (Texas offices)',
    contractFocus: ['State government consulting', 'Financial transformation', 'IT advisory', 'Public sector performance'],
    summary: 'EY\'s government and public sector practice advises Texas state agencies on financial, technology, and operational matters. EY holds documented Texas state consulting contracts.',
    publicInterestFlag: 'State advisory contracts, financial transformation projects, procurement records',
    status: 'Active',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const STATUS_DOT: Record<CompanyCard['status'], string> = {
  'Active': 'bg-emerald-400',
  'Under Review': 'bg-amber-400',
};

export default function AustinCompaniesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-600">
            {[
              { label: 'Home', href: '/' },
              { label: 'Directory', href: '/directory' },
              { label: 'Austin', href: '/directory/austin' },
              { label: 'Companies', href: null },
            ].map((c, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-gray-700">/</span>}
                {c.href ? (
                  <Link href={c.href} className="hover:text-[#c45c2a] transition-colors">{c.label}</Link>
                ) : (
                  <span className="text-gray-400" aria-current="page">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c45c2a]/15 border border-[#c45c2a]/25 text-[#c45c2a] text-[11px] font-black uppercase tracking-[.16em] mb-5">
            <span>🏗️</span> Austin Companies
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
            Austin Companies Directory
          </h1>
          <p className="text-base text-gray-400 leading-relaxed max-w-2xl mb-4">
            Government contractors, consulting firms, and service-sector companies of public interest
            in Austin and Texas. Every entity here holds or has held documented public contracts,
            or is of substantive investigative public interest.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-600">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Government contractors
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              Consulting firms
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              Public companies (SEC filings available)
            </span>
          </div>
        </header>

        {/* Notice */}
        <div className="mb-8 p-4 rounded-lg bg-amber-950/30 border border-amber-700/30">
          <p className="text-xs text-amber-300/80 leading-relaxed">
            <strong className="text-amber-300">Editorial standard:</strong> Companies listed here are documented through
            public contracts, SEC filings, procurement records, or other primary sources. Listing does not
            imply wrongdoing — it documents public accountability subject matter.{' '}
            <Link href="/editorial-standards" className="underline hover:text-amber-200">Editorial standards →</Link>
          </p>
        </div>

        {/* Companies grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {COMPANIES.map((co) => {
              const href = co.profileSlug
                ? `/directory/austin/companies/${co.profileSlug}`
                : null;

              const inner = (
                <div className={`flex flex-col gap-3 p-5 rounded-xl bg-[#111111] border h-full transition-all duration-200 ${
                  href
                    ? 'border-white/8 hover:border-[#c45c2a]/40 hover:bg-[#151515] group cursor-pointer'
                    : 'border-white/5'
                }`}>
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className={`text-sm font-black leading-snug ${href ? 'text-white group-hover:text-[#c45c2a] transition-colors' : 'text-gray-200'}`}>
                        {co.name}
                      </p>
                      <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-0.5">{co.entityType}</p>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[co.status]}`} />
                      {co.ticker && (
                        <span className="text-[10px] font-mono text-amber-400 font-bold">{co.ticker}</span>
                      )}
                    </div>
                  </div>

                  {/* HQ badge */}
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 text-gray-500 border border-white/5 w-fit">
                    📍 {co.hq}
                  </span>

                  {/* Summary */}
                  <p className="text-xs text-gray-500 leading-relaxed flex-1">{co.summary}</p>

                  {/* Contract focus */}
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-600 mb-1.5">Contract / Public Interest Areas</p>
                    <div className="flex flex-wrap gap-1.5">
                      {co.contractFocus.slice(0, 3).map((f) => (
                        <span key={f} className="text-[10px] px-2 py-0.5 rounded bg-violet-950/40 text-violet-400 border border-violet-800/30">
                          {f}
                        </span>
                      ))}
                      {co.contractFocus.length > 3 && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-600 border border-white/5">
                          +{co.contractFocus.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Flag */}
                  <div className="flex items-start gap-2 pt-2 border-t border-white/5">
                    <span className="text-amber-500 text-[11px] shrink-0 mt-0.5">⚑</span>
                    <p className="text-[11px] text-amber-300/70 leading-snug">{co.publicInterestFlag}</p>
                  </div>

                  {/* CTA */}
                  {href ? (
                    <span className="text-xs text-[#c45c2a] font-bold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1 mt-auto">
                      View full profile →
                    </span>
                  ) : (
                    <span className="text-[10px] text-gray-600 uppercase tracking-widest mt-auto">Profile coming soon</span>
                  )}
                </div>
              );

              return href ? (
                <Link key={co.name} href={href} className="block">{inner}</Link>
              ) : (
                <div key={co.name}>{inner}</div>
              );
            })}
          </div>
        </section>

        {/* Investigate CTA */}
        <div className="rounded-xl border border-[#c45c2a]/25 bg-gradient-to-br from-[#c45c2a]/8 to-transparent p-6 mb-8">
          <p className="text-[10px] font-black uppercase tracking-[.16em] text-[#c45c2a] mb-2">Know About a Contract?</p>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Do you have documents, invoices, RFPs, or knowledge of public contracts with companies
            listed here? Objective Wire investigates government contracting with full source protection
            under Texas Shield Law.
          </p>
          <Link href="/service/tip-the-newsroom" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-[#c45c2a] hover:bg-[#d4723e] text-white py-2.5 px-4 rounded-lg transition-colors">
            Tip the Newsroom →
          </Link>
        </div>

        {/* Footer nav */}
        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/8 text-xs text-gray-600">
          <Link href="/directory/austin" className="hover:text-[#c45c2a] underline">← Austin directory</Link>
          <Link href="/directory/austin/government" className="hover:text-[#c45c2a] underline">Government listing</Link>
          <Link href="/directory" className="hover:text-[#c45c2a] underline">All regions</Link>
        </div>

      </div>
    </div>
  );
}
