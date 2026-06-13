import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 3600;

const PAGE_URL = 'https://www.objectivewire.org/directory/houston/companies';
const SITE_URL = 'https://www.objectivewire.org';

export const metadata: Metadata = {
  title: 'Houston Companies & Contractors | Government & Infrastructure',
  description:
    'Profiles of Houston-area companies doing business with government, energy infrastructure, ports, and public works. Port of Houston contractors, engineering firms, petrochemical industry, and more.',
  keywords: [
    'Houston government contractors', 'Port of Houston companies', 'Harris County contractors',
    'Houston engineering firms', 'Houston petrochemical industry', 'Texas energy companies',
    'Houston infrastructure contractors', 'Harris County procurement',
    'Houston companies directory', 'Texas government contracts Houston',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Houston Companies & Contractors | Objective Wire Directory',
    description: 'Primary-source profiles of Houston-area companies in government contracting, energy, ports, and public infrastructure.',
    type: 'website', url: PAGE_URL, siteName: 'Objective Wire',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',       item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Directory',  item: `${SITE_URL}/directory` },
        { '@type': 'ListItem', position: 3, name: 'Houston',    item: `${SITE_URL}/directory/houston` },
        { '@type': 'ListItem', position: 4, name: 'Companies',  item: PAGE_URL },
      ],
    },
    {
      '@type': 'CollectionPage',
      name: 'Houston Companies & Contractors | Objective Wire',
      description: 'Companies and contractors in Houston with government, energy, or infrastructure public interest.',
      url: PAGE_URL,
      publisher: { '@type': 'NewsMediaOrganization', name: 'Objective Wire', url: SITE_URL },
      mainEntity: {
        '@type': 'ItemList',
        name: 'Houston Companies of Public Interest',
        numberOfItems: 8,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Port of Houston Authority',        item: `${SITE_URL}/directory/houston/companies/port-houston` },
          { '@type': 'ListItem', position: 2, name: 'LyondellBasell Industries' },
          { '@type': 'ListItem', position: 3, name: 'Halliburton Company' },
          { '@type': 'ListItem', position: 4, name: 'Baker Hughes' },
          { '@type': 'ListItem', position: 5, name: 'CenterPoint Energy' },
          { '@type': 'ListItem', position: 6, name: 'Kinder Morgan' },
          { '@type': 'ListItem', position: 7, name: 'AECOM (Gulf Coast operations)' },
          { '@type': 'ListItem', position: 8, name: 'CDM Smith' },
        ],
      },
    },
  ],
};

interface CompanyCard {
  name: string;
  entityType: string;
  sector: string;
  hq: string;
  summary: string;
  profileSlug?: string;
  ticker?: string;
  publicInterestFlag?: string;
}

const COMPANIES: CompanyCard[] = [
  {
    name: 'Port of Houston Authority',
    entityType: 'Port Authority / Political Subdivision',
    sector: 'Ports & Logistics',
    hq: 'Houston, TX',
    summary: "Governs one of the nation's busiest ports. Port Commission controls major dredging, terminal, and capital contracts. Key issues: Ship Channel expansion contracts, environmental justice, and industrial safety in the ship channel corridor.",
    profileSlug: 'port-houston',
    publicInterestFlag: 'Quasi-governmental authority with significant public contract spend',
  },
  {
    name: 'LyondellBasell Industries',
    entityType: 'Public Company',
    sector: 'Petrochemicals',
    hq: 'Houston, TX',
    ticker: 'NYSE: LYB',
    summary: "One of the world's largest plastics, chemicals, and refining companies. Operates refineries and chemical plants along the Houston Ship Channel. Key issues: environmental violations, fence-line community impacts, TCEQ permit compliance.",
    publicInterestFlag: 'Petrochemical production with documented air and water impact near EJ communities',
  },
  {
    name: 'Halliburton Company',
    entityType: 'Public Company',
    sector: 'Energy Services',
    hq: 'Houston, TX',
    ticker: 'NYSE: HAL',
    summary: 'Global oilfield services company headquartered in Houston. Provides drilling, completion, and production services worldwide. Extensive Texas state and federal contracts. Key issues: FCPA compliance history, federal contracting track record.',
    publicInterestFlag: 'Federal and state government contract recipient; FCPA history',
  },
  {
    name: 'Baker Hughes',
    entityType: 'Public Company',
    sector: 'Energy Technology',
    hq: 'Houston, TX',
    ticker: 'NASDAQ: BKR',
    summary: 'Energy technology company providing products and services for oil and gas, LNG, and new energy infrastructure. Key issues: offshore regulatory compliance, federal contract awards, and carbon capture project public funding.',
  },
  {
    name: 'CenterPoint Energy',
    entityType: 'Public Company',
    sector: 'Regulated Utility',
    hq: 'Houston, TX',
    ticker: 'NYSE: CNP',
    summary: "Houston's primary electric and natural gas utility, serving 2.8M+ electric customers. Regulated by the Texas PUC. Key issues: Winter Storm Uri performance (2021), grid hardening capital spend, rate case filings, and executive accountability.",
    publicInterestFlag: 'Rate-regulated monopoly; Winter Storm Uri performance failures under PUCT scrutiny',
  },
  {
    name: 'Kinder Morgan',
    entityType: 'Public Company',
    sector: 'Pipeline & Terminals',
    hq: 'Houston, TX',
    ticker: 'NYSE: KMI',
    summary: "One of the largest energy infrastructure companies in North America. Operates natural gas pipelines, CO2 facilities, and terminals. Key issues: eminent domain use, pipeline safety record, and FERC regulatory filings.",
  },
  {
    name: 'AECOM',
    entityType: 'Public Company',
    sector: 'Engineering & Construction',
    hq: 'Dallas, TX (Houston operations)',
    ticker: 'NYSE: ACM',
    summary: 'Major engineering, construction, and program management firm with extensive Harris County and HCFCD contracts. Key issues: Proposition A bond program engineering contracts, FEMA grant administration, and project cost performance.',
    publicInterestFlag: 'Major Prop A bond program contractor; engineering services for HCFCD',
  },
  {
    name: 'CDM Smith',
    entityType: 'Private Company',
    sector: 'Engineering & Consulting',
    hq: 'Boston, MA (major Houston presence)',
    summary: 'Engineering and construction firm with significant water, wastewater, and stormwater contracts in Harris County. Key issues: HCFCD and City of Houston drainage capital contracts, program management roles on Prop A.',
    publicInterestFlag: 'Government engineering contractor on flood bond program',
  },
];

export default function HoustonCompaniesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-600">
            {[
              { label: 'Home',      href: '/' },
              { label: 'Directory', href: '/directory' },
              { label: 'Houston',   href: '/directory/houston' },
              { label: 'Companies', href: null },
            ].map((c, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-gray-700">/</span>}
                {c.href ? <Link href={c.href} className="hover:text-[#c45c2a] transition-colors">{c.label}</Link>
                        : <span className="text-gray-400" aria-current="page">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>

        <header className="mb-12 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c45c2a]/15 border border-[#c45c2a]/25 text-[#c45c2a] text-[11px] font-black uppercase tracking-[.16em] mb-5">
            Houston Companies
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
            Houston Companies & Contractors
          </h1>
          <p className="text-base text-gray-400 leading-relaxed max-w-2xl mb-5">
            Public-interest profiles of Houston-area companies in government contracting, energy
            infrastructure, ports, and public works. Documented from primary sources, SEC filings,
            procurement records, and regulatory databases.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-600">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />{COMPANIES.length} companies listed</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#c45c2a]" />{COMPANIES.filter(c => c.profileSlug).length} with full profiles</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-400" />{COMPANIES.filter(c => c.publicInterestFlag).length} flagged high public interest</span>
          </div>
        </header>

        <div className="mb-8 p-4 rounded-lg bg-amber-950/20 border border-amber-800/25 text-xs text-amber-400/80">
          <span className="font-black uppercase tracking-widest mr-2">Editorial Note</span>
          Listings represent companies with documented government contracts, regulatory records, or
          significant public-interest activity in Harris County. Inclusion is not an allegation of
          wrongdoing. All profiles are built from publicly available records.
        </div>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COMPANIES.map((co) => {
              const href = co.profileSlug ? `/directory/houston/companies/${co.profileSlug}` : null;
              const Card = (
                <div className={`flex flex-col gap-3 p-5 rounded-xl bg-[#111111] border transition-all duration-200 h-full ${
                  href ? 'border-white/8 hover:border-[#c45c2a]/40 hover:bg-[#151515] cursor-pointer group' : 'border-white/5 opacity-80'
                }`}>
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-black leading-snug ${href ? 'text-white group-hover:text-[#c45c2a] transition-colors' : 'text-gray-300'}`}>
                        {co.name}
                      </p>
                      <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-0.5">{co.entityType}</p>
                    </div>
                    {co.ticker && (
                      <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-950/30 border border-amber-800/25 px-2 py-0.5 rounded shrink-0">
                        {co.ticker}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 text-gray-500 border border-white/5">
                      {co.sector}
                    </span>
                    <span className="text-[10px] text-gray-600">{co.hq}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed flex-1">{co.summary}</p>
                  {co.publicInterestFlag && (
                    <p className="text-[10px] text-amber-500/70 flex items-start gap-1 mt-1">
                      <span className="shrink-0 mt-px">&#9873;</span>
                      <span>{co.publicInterestFlag}</span>
                    </p>
                  )}
                  {href ? (
                    <span className="text-xs text-[#c45c2a] font-bold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1 mt-auto">
                      View full profile →
                    </span>
                  ) : (
                    <span className="text-[10px] text-gray-600 uppercase tracking-widest mt-auto">Profile coming soon</span>
                  )}
                </div>
              );
              return href ? <Link key={co.name} href={href} className="block">{Card}</Link> : <div key={co.name}>{Card}</div>;
            })}
          </div>
        </section>

        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/8 text-xs text-gray-600">
          <Link href="/directory/houston" className="hover:text-[#c45c2a] underline">← Houston directory</Link>
          <Link href="/directory/houston/government" className="hover:text-[#c45c2a] underline">Government</Link>
          <Link href="/directory/austin/companies" className="hover:text-[#c45c2a] underline">Austin companies</Link>
          <Link href="/service/tip-the-newsroom" className="hover:text-[#c45c2a] underline ml-auto">Tip the Newsroom →</Link>
        </div>

      </div>
    </div>
  );
}
