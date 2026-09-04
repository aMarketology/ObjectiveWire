import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 3600;

const PAGE_URL = 'https://www.objectivewire.org/directory/houston';
const SITE_URL = 'https://www.objectivewire.org';

export const metadata: Metadata = {
  title: 'Houston Directory | Harris County Government, Organizations & Companies',
  description:
    'Documented profiles of Houston and Harris County government agencies, organizations, and companies of public interest. DA, HPD, Port of Houston, Flood Control, METRO, CenterPoint, and more.',
  keywords: [
    'Houston directory', 'Harris County government', 'Houston agencies directory',
    'Harris County DA Sean Teare', 'Port of Houston', 'Harris County Flood Control District',
    'Houston METRO transit', 'CenterPoint Energy', 'Houston public records',
    'Objective Wire Houston', 'Harris County contractors',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Houston Directory | Harris County Entities & Agencies',
    description: 'Primary-source profiles of Houston and Harris County entities of public interest.',
    type: 'website', url: PAGE_URL, siteName: 'Objective Wire',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',      item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Directory', item: `${SITE_URL}/directory` },
        { '@type': 'ListItem', position: 3, name: 'Houston',   item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebPage',
      name: 'Houston Directory | Objective Wire',
      description: 'Documented profiles of Houston and Harris County government agencies, organizations, and companies of public interest.',
      url: PAGE_URL,
      publisher: { '@type': 'NewsMediaOrganization', name: 'Objective Wire', url: SITE_URL },
    },
  ],
};

const ENTITY_TYPES = [
  {
    label: 'Government & Organizations',
    href: '/directory/houston/government',
    description: 'Harris County DA, HPD, Commissioners Court, Sheriff, Flood Control District, Port of Houston Authority, METRO, and civic organizations.',
    icon: '⚖️',
    count: '3 profiles',
  },
  {
    label: 'Companies & Contractors',
    href: '/directory/houston/companies',
    description: 'Energy sector, petrochemical industry, engineering firms, and government contractors operating in Harris County.',
    icon: '🏗️',
    count: '1 profile',
  },
];

const BEAT_MAP = [
  {
    rank: '01',
    name: "Harris County District Attorney's Office",
    lead: 'Sean Teare (elected 2024, took office Jan 2025)',
    angles: ['Case screening & dismissal patterns', 'Plea policy transparency', 'Domestic violence bureau implementation', 'Politically sensitive recusals'],
    records: 'Case filings (public docket), press releases, annual stats, TPIA to dao.harriscountytx.gov',
    profileHref: '/directory/houston/government/harris-county-da',
  },
  {
    rank: '02',
    name: 'Harris County Flood Control District',
    lead: 'Prop A bond program ($2.5B+)',
    angles: ['Bond spending pace & contractor performance', 'Project selection equity', 'Cost overruns and delays', 'Procurement accountability'],
    records: 'Bond program reports, project contracts, procurement records, board minutes (TPIA to hcfcd.org)',
    profileHref: '/directory/houston/government/harris-county-flood-control',
  },
  {
    rank: '03',
    name: 'Port of Houston Authority',
    lead: 'Port Commission (appointed governing body)',
    angles: ['Ship Channel dredging & expansion contracts', 'Air quality & environmental justice', 'Industrial safety incidents', 'Public spending transparency'],
    records: 'Commission minutes, capital contracts, environmental permits, annual budgets',
    profileHref: null,
  },
  {
    rank: '04',
    name: 'City of Houston Administration',
    lead: 'Mayor John Whitmire (elected Nov 2023)',
    angles: ['Budget stress & pension liabilities', 'Infrastructure delivery timelines', 'Major city contracts', 'Police oversight'],
    records: 'City Council agenda packets, budget docs, contracts $50K+, audit reports',
    profileHref: null,
  },
  {
    rank: '05',
    name: 'Harris County Commissioners Court',
    lead: 'County Judge + 4 Precinct Commissioners',
    angles: ['Flood control spending priorities', 'Jail & criminal justice policy', 'Budget disputes', 'Election administration oversight'],
    records: 'Court agendas/minutes, budget documents, contract awards, commissioner expense records',
    profileHref: null,
  },
];

export default function HoustonDirectoryPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-1.5 text-xs text-gray-600">
            <li><Link href="/" className="hover:text-[#c45c2a] transition-colors">Home</Link></li>
            <li className="text-gray-700">/</li>
            <li><Link href="/directory" className="hover:text-[#c45c2a] transition-colors">Directory</Link></li>
            <li className="text-gray-700">/</li>
            <li className="text-gray-400">Houston</li>
          </ol>
        </nav>

        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c45c2a]/15 border border-[#c45c2a]/25 text-[#c45c2a] text-[11px] font-black uppercase tracking-[.16em] mb-5">
            <span>🌃</span> Houston, Texas
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Houston Directory
          </h1>
          <p className="text-base text-gray-400 leading-relaxed max-w-2xl mb-6">
            Documented profiles of government agencies, organizations, and companies in Houston
            and Harris County. Every entry sourced from primary records — court filings,
            procurement databases, regulatory documents, and public disclosures.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-600">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />Primary sources only</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />Harris County + City of Houston</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />Licensed PI-backed reporting</span>
          </div>
        </header>

        {/* Entity type grid */}
        <section className="mb-14">
          <h2 className="text-[11px] font-black uppercase tracking-[.16em] text-gray-500 mb-5">Browse by Entity Type</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ENTITY_TYPES.map((type) => (
              <Link
                key={type.href}
                href={type.href}
                className="group flex items-start gap-4 p-5 rounded-xl bg-[#111111] border border-white/8 hover:border-[#c45c2a]/40 transition-all duration-200 hover:bg-[#151515]"
              >
                <span className="text-2xl shrink-0 mt-0.5">{type.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <p className="text-sm font-black text-white group-hover:text-[#c45c2a] transition-colors">{type.label}</p>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 shrink-0">{type.count}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{type.description}</p>
                </div>
                <span className="text-gray-700 group-hover:text-[#c45c2a] transition-colors shrink-0 mt-0.5">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Beat map */}
        <section className="mb-14">
          <h2 className="text-[11px] font-black uppercase tracking-[.16em] text-gray-500 mb-1">Houston Investigative Beat Map</h2>
          <p className="text-xs text-gray-600 mb-5">Top 5 accountability targets in Harris County — investigation angles and public records.</p>
          <div className="space-y-3">
            {BEAT_MAP.map((beat) => (
              <div key={beat.rank} className="p-5 rounded-xl bg-[#111111] border border-white/8">
                <div className="flex items-start gap-4">
                  <span className="text-[11px] font-mono text-[#c45c2a] tabular-nums shrink-0 mt-0.5">{beat.rank}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <p className="text-sm font-black text-white leading-snug">{beat.name}</p>
                        <p className="text-[11px] text-gray-500 mt-0.5">{beat.lead}</p>
                      </div>
                      {beat.profileHref && (
                        <Link href={beat.profileHref} className="text-[10px] font-bold uppercase tracking-wider text-[#c45c2a] hover:text-[#d4723e] transition-colors shrink-0 whitespace-nowrap">
                          View profile →
                        </Link>
                      )}
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-600 mb-1.5">Investigation angles</p>
                        <ul className="space-y-1">
                          {beat.angles.map((a) => (
                            <li key={a} className="text-xs text-gray-400 flex items-start gap-1.5">
                              <span className="text-[#c45c2a] shrink-0 mt-0.5">›</span>{a}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-600 mb-1.5">Key public records</p>
                        <p className="text-xs text-gray-500 leading-relaxed">{beat.records}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tip CTA */}
        <div className="rounded-xl border border-[#c45c2a]/25 bg-gradient-to-br from-[#c45c2a]/8 to-transparent p-6 mb-8">
          <p className="text-[10px] font-black uppercase tracking-[.16em] text-[#c45c2a] mb-2">Know Something About a Houston Entity?</p>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Objective Wire covers Harris County and Houston. If you have documents, tips, or records
            about a Houston government agency, contractor, or official, reach out under full source protection.
          </p>
          <Link href="/service/tip-the-newsroom" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-[#c45c2a] hover:bg-[#d4723e] text-white py-2.5 px-4 rounded-lg transition-colors">
            Tip the Newsroom →
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/8 text-xs text-gray-600">
          <Link href="/directory" className="hover:text-[#c45c2a] underline">← Back to full directory</Link>
          <span className="text-gray-700">|</span>
          <Link href="/local/houston" className="hover:text-[#c45c2a] underline">Houston news coverage</Link>
        </div>

      </div>
    </div>
  );
}
