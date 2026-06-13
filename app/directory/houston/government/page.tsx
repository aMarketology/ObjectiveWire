import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 3600;

const PAGE_URL = 'https://www.objectivewire.org/directory/houston/government';
const SITE_URL = 'https://www.objectivewire.org';

export const metadata: Metadata = {
  title: 'Houston Government Directory | Harris County Agencies',
  description:
    'Documented profiles of Houston and Harris County government agencies. DA Sean Teare, HPD, Flood Control District, Port of Houston, METRO, Commissioners Court, and more.',
  keywords: [
    'Harris County government agencies', 'Harris County DA Sean Teare', 'Houston Police Department',
    'Harris County Flood Control District', 'Port of Houston Authority', 'Houston METRO transit',
    'Harris County Commissioners Court', 'Houston Mayor John Whitmire',
    'Houston government directory', 'Harris County public records',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Houston Government Directory | Harris County Agencies',
    description: 'Primary-source profiles of Houston and Harris County government agencies, courts, and departments.',
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
        { '@type': 'ListItem', position: 4, name: 'Government', item: PAGE_URL },
      ],
    },
    {
      '@type': 'CollectionPage',
      name: 'Houston Government Directory | Objective Wire',
      description: 'Government agencies, transit authorities, utilities, and departments in Houston and Harris County.',
      url: PAGE_URL,
      publisher: { '@type': 'NewsMediaOrganization', name: 'Objective Wire', url: SITE_URL },
      mainEntity: {
        '@type': 'ItemList',
        name: 'Houston and Harris County Government Entities',
        numberOfItems: 10,
        itemListElement: [
          { '@type': 'ListItem', position: 1,  name: "Harris County District Attorney's Office",  item: `${SITE_URL}/directory/houston/government/harris-county-da` },
          { '@type': 'ListItem', position: 2,  name: 'Harris County Flood Control District',       item: `${SITE_URL}/directory/houston/government/harris-county-flood-control` },
          { '@type': 'ListItem', position: 3,  name: 'Port of Houston Authority' },
          { '@type': 'ListItem', position: 4,  name: 'Houston Police Department' },
          { '@type': 'ListItem', position: 5,  name: 'Metropolitan Transit Authority of Harris County (METRO)' },
          { '@type': 'ListItem', position: 6,  name: 'Harris County Commissioners Court' },
          { '@type': 'ListItem', position: 7,  name: 'Harris County Sheriff' },
          { '@type': 'ListItem', position: 8,  name: 'City of Houston — Mayor & City Council' },
          { '@type': 'ListItem', position: 9,  name: 'Harris County District Clerk' },
          { '@type': 'ListItem', position: 10, name: 'City of Houston Public Works' },
        ],
      },
    },
  ],
};

interface EntityCard {
  name: string;
  entityType: string;
  status: 'Active' | 'Under Review';
  jurisdiction: string;
  summary: string;
  profileSlug?: string;
  badge?: string;
}

const STATUS_DOT: Record<EntityCard['status'], string> = {
  'Active': 'bg-emerald-400',
  'Under Review': 'bg-amber-400',
};

const ENTITIES: EntityCard[] = [
  {
    name: "Harris County District Attorney's Office",
    entityType: 'Elected County Office',
    status: 'Active',
    jurisdiction: 'Harris County',
    summary: 'Prosecutes felony offenses in Harris County. DA Sean Teare took office January 2025 after winning the 2024 election. Key priorities: domestic violence bureau, diversion programs, bail reform.',
    profileSlug: 'harris-county-da',
  },
  {
    name: 'Harris County Flood Control District',
    entityType: 'Special District',
    status: 'Active',
    jurisdiction: 'Harris County',
    summary: 'Manages flood mitigation infrastructure for Harris County. Administers the Proposition A bond program — a $2.5B+ voter-approved capital program passed after Hurricane Harvey.',
    profileSlug: 'harris-county-flood-control',
    badge: 'Quasi-Govt',
  },
  {
    name: 'Port of Houston Authority',
    entityType: 'Port Authority / Political Subdivision',
    status: 'Active',
    jurisdiction: 'Harris County',
    summary: "One of the nation's busiest ports. Governed by the Port Commission. Key issues: Ship Channel dredging, environmental justice, industrial expansion, and capital contracts.",
    badge: 'Quasi-Govt',
  },
  {
    name: 'Houston Police Department',
    entityType: 'Municipal Agency',
    status: 'Active',
    jurisdiction: 'City of Houston',
    summary: 'Primary law enforcement for the City of Houston. Largest municipal police department in Texas. Key accountability areas: use-of-force, staffing, overtime, and homicide clearance rates.',
  },
  {
    name: 'Metropolitan Transit Authority of Harris County',
    entityType: 'Regional Transit Authority',
    status: 'Active',
    jurisdiction: 'Harris County',
    summary: 'Houston\'s regional transit authority (METRO). Operates bus, METRORail, METROBus, and paratransit. Board meetings at 1900 Main St. University Line indefinitely postponed (2024).',
    badge: 'Quasi-Govt',
  },
  {
    name: 'Harris County Commissioners Court',
    entityType: 'County Government',
    status: 'Active',
    jurisdiction: 'Harris County',
    summary: 'Governing body of Harris County. County Judge and four precinct commissioners. Oversees flood control, budget, indigent defense, law enforcement funding, and procurement.',
  },
  {
    name: "Harris County Sheriff's Office",
    entityType: 'Elected County Office',
    status: 'Active',
    jurisdiction: 'Harris County',
    summary: "Operates the Harris County jail — the third largest in the US — and provides law enforcement in unincorporated Harris County. Key issues: jail conditions, in-custody deaths, and staffing.",
  },
  {
    name: 'City of Houston — Mayor & City Council',
    entityType: 'Municipal Government',
    status: 'Active',
    jurisdiction: 'City of Houston',
    summary: 'Mayor John Whitmire (elected Nov 2023) leads City government at 901 Bagby St. City Hall. Council sets budget, approves major contracts, and oversees all city departments.',
  },
  {
    name: 'Harris County District Clerk',
    entityType: 'Elected County Office',
    status: 'Active',
    jurisdiction: 'Harris County',
    summary: 'Maintains all Harris County civil and criminal court records. Primary custodian of case filings, docket entries, and court records — a key public records access point.',
  },
  {
    name: 'City of Houston Public Works',
    entityType: 'Municipal Agency',
    status: 'Active',
    jurisdiction: 'City of Houston',
    summary: 'Manages Houston\'s street, drainage, and infrastructure capital program. Oversees billions in annual capital spending including drainage improvements post-Harvey.',
  },
];

export default function HoustonGovernmentPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-600">
            {[
              { label: 'Home',       href: '/' },
              { label: 'Directory',  href: '/directory' },
              { label: 'Houston',    href: '/directory/houston' },
              { label: 'Government', href: null },
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
            Houston Government
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
            Houston Government Directory
          </h1>
          <p className="text-base text-gray-400 leading-relaxed max-w-2xl mb-5">
            Documented profiles of government agencies, elected offices, transit authorities, ports,
            and departments in Houston and Harris County. All entries sourced from primary records.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-600">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />{ENTITIES.length} entities listed</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#c45c2a]" />{ENTITIES.filter(e => e.profileSlug).length} with full profiles</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-violet-400" />Quasi-govt entities included</span>
          </div>
        </header>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ENTITIES.map((entity) => {
              const href = entity.profileSlug ? `/directory/houston/government/${entity.profileSlug}` : null;
              const Card = (
                <div className={`flex flex-col gap-3 p-5 rounded-xl bg-[#111111] border transition-all duration-200 h-full ${
                  href ? 'border-white/8 hover:border-[#c45c2a]/40 hover:bg-[#151515] cursor-pointer group' : 'border-white/5 opacity-75'
                }`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-black leading-snug ${href ? 'text-white group-hover:text-[#c45c2a] transition-colors' : 'text-gray-300'}`}>
                        {entity.name}
                      </p>
                      <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-0.5">{entity.entityType}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 flex-wrap justify-end">
                      {entity.badge && (
                        <span className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-violet-950/40 text-violet-400 border border-violet-800/30">
                          {entity.badge}
                        </span>
                      )}
                      <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[entity.status]}`} />
                        <span className="text-[10px] text-gray-500">{entity.status}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 text-gray-500 border border-white/5 w-fit">
                    {entity.jurisdiction}
                  </span>
                  <p className="text-xs text-gray-500 leading-relaxed flex-1">{entity.summary}</p>
                  {href ? (
                    <span className="text-xs text-[#c45c2a] font-bold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1 mt-auto">
                      View full profile →
                    </span>
                  ) : (
                    <span className="text-[10px] text-gray-600 uppercase tracking-widest mt-auto">Profile coming soon</span>
                  )}
                </div>
              );
              return href ? <Link key={entity.name} href={href} className="block">{Card}</Link> : <div key={entity.name}>{Card}</div>;
            })}
          </div>
        </section>

        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/8 text-xs text-gray-600">
          <Link href="/directory/houston" className="hover:text-[#c45c2a] underline">← Houston directory</Link>
          <Link href="/directory/houston/companies" className="hover:text-[#c45c2a] underline">Companies</Link>
          <Link href="/directory" className="hover:text-[#c45c2a] underline">All regions</Link>
          <Link href="/service/tip-the-newsroom" className="hover:text-[#c45c2a] underline ml-auto">Tip the Newsroom →</Link>
        </div>

      </div>
    </div>
  );
}
