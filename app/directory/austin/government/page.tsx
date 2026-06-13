import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 3600;

const PAGE_URL = 'https://www.objectivewire.org/directory/austin/government';
const SITE_URL = 'https://www.objectivewire.org';

export const metadata: Metadata = {
  title: 'Austin Government Directory | Travis County Agencies',
  description:
    'Documented profiles of Austin and Travis County government agencies. District attorney, courts, police, transit, utilities, and public records sources.',
  keywords: [
    'Austin government agencies', 'Travis County district attorney', 'Austin city government',
    'Travis County courts', 'Austin APD', 'Travis County government directory',
    'Austin Energy', 'Capital Metro', 'Austin public records agencies',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Austin Government Directory | Travis County Agencies',
    description: 'Primary-source profiles of Austin and Travis County government agencies, utilities, transit, and departments.',
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
        { '@type': 'ListItem', position: 1, name: 'Home',       item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Directory',  item: `${SITE_URL}/directory` },
        { '@type': 'ListItem', position: 3, name: 'Austin',     item: `${SITE_URL}/directory/austin` },
        { '@type': 'ListItem', position: 4, name: 'Government', item: PAGE_URL },
      ],
    },
    {
      '@type': 'CollectionPage',
      name: 'Austin Government Directory | Objective Wire',
      description: 'Documented profiles of government agencies, utilities, transit authorities, and departments in Austin and Travis County.',
      url: PAGE_URL,
      publisher: { '@type': 'NewsMediaOrganization', name: 'Objective Wire', url: SITE_URL },
      mainEntity: {
        '@type': 'ItemList',
        name: 'Austin and Travis County Government Entities',
        numberOfItems: 10,
        itemListElement: [
          { '@type': 'ListItem', position: 1,  name: 'Travis County District Attorney',      item: `${SITE_URL}/directory/austin/government/travis-county-da` },
          { '@type': 'ListItem', position: 2,  name: 'Austin Energy',                         item: `${SITE_URL}/directory/austin/government/austin-energy` },
          { '@type': 'ListItem', position: 3,  name: 'Capital Metro',                         item: `${SITE_URL}/directory/austin/government/capital-metro` },
          { '@type': 'ListItem', position: 4,  name: 'Austin Police Department' },
          { '@type': 'ListItem', position: 5,  name: 'Travis County Sheriff' },
          { '@type': 'ListItem', position: 6,  name: 'Travis County Courts' },
          { '@type': 'ListItem', position: 7,  name: 'Austin City Council' },
          { '@type': 'ListItem', position: 8,  name: 'Travis County Commissioners Court' },
          { '@type': 'ListItem', position: 9,  name: 'Lower Colorado River Authority (LCRA)' },
          { '@type': 'ListItem', position: 10, name: 'Austin Water' },
        ],
      },
    },
  ],
};

// ─── Entity card type ─────────────────────────────────────────────────────────

interface EntityCard {
  name: string;
  entityType: string;
  status: 'Active' | 'Dissolved' | 'Inactive' | 'Under Review';
  jurisdiction: string;
  summary: string;
  profileSlug?: string;
  badge?: string;
}

const STATUS_DOT: Record<EntityCard['status'], string> = {
  Active:         'bg-emerald-400',
  Dissolved:      'bg-red-400',
  Inactive:       'bg-slate-500',
  'Under Review': 'bg-amber-400',
};

// ─── Entities in this listing ─────────────────────────────────────────────────

const ENTITIES: EntityCard[] = [
  {
    name: 'Travis County District Attorney',
    entityType: 'Elected Office',
    status: 'Active',
    jurisdiction: 'Travis County',
    summary: 'Prosecutes felony offenses, juvenile criminal cases, and civil commitment matters. Current DA: Jose P. Garza, elected 2020, re-elected 2024.',
    profileSlug: 'travis-county-da',
  },
  {
    name: 'Austin Energy',
    entityType: 'Municipal Utility',
    status: 'Active',
    jurisdiction: 'City of Austin',
    summary: 'City-owned electric utility serving 500,000+ customers. 8th largest publicly owned utility in the US. 721 Barton Springs Rd.',
    profileSlug: 'austin-energy',
    badge: 'Quasi-Govt',
  },
  {
    name: 'Capital Metropolitan Transportation Authority',
    entityType: 'Regional Transit Authority',
    status: 'Active',
    jurisdiction: 'Travis County & member cities',
    summary: 'Austin-area transit authority operating bus, MetroRail, and paratransit. Oversees Project Connect light rail program.',
    profileSlug: 'capital-metro',
    badge: 'Quasi-Govt',
  },
  {
    name: 'Austin Police Department',
    entityType: 'Municipal Agency',
    status: 'Active',
    jurisdiction: 'City of Austin',
    summary: 'Primary law enforcement agency for the City of Austin, serving ~1 million residents across 271 square miles.',
  },
  {
    name: 'Travis County Sheriff',
    entityType: 'Elected Office',
    status: 'Active',
    jurisdiction: 'Travis County',
    summary: "Enforces state law and county ordinances, operates the county jail, and provides court security in Travis County.",
  },
  {
    name: 'Travis County Courts',
    entityType: 'Judicial Agency',
    status: 'Active',
    jurisdiction: 'Travis County',
    summary: 'Network of district courts, county courts at law, and criminal courts handling civil, criminal, family, and probate matters.',
  },
  {
    name: 'Austin City Council',
    entityType: 'Legislative Body',
    status: 'Active',
    jurisdiction: 'City of Austin',
    summary: 'Governing legislative body of the City of Austin. Mayor and ten district-elected council members. Sets utility rates, contracts, and city policy.',
  },
  {
    name: 'Travis County Commissioners Court',
    entityType: 'County Government',
    status: 'Active',
    jurisdiction: 'Travis County',
    summary: 'Governing body of Travis County, comprising a county judge and four commissioners. Sets county budget and oversees county agencies.',
  },
  {
    name: 'Lower Colorado River Authority (LCRA)',
    entityType: 'River Authority / Political Subdivision',
    status: 'Active',
    jurisdiction: 'Lower Colorado River Basin, Texas',
    summary: 'Manages water supply, hydroelectric generation, and transmission across the lower Colorado River basin, including co-ownership of the Fayette Power Project with Austin Energy.',
    badge: 'Quasi-Govt',
  },
  {
    name: 'Austin Water',
    entityType: 'Municipal Utility',
    status: 'Active',
    jurisdiction: 'City of Austin',
    summary: 'City of Austin drinking water and wastewater utility. Subject to Texas Commission on Environmental Quality (TCEQ) oversight and City Council governance.',
    badge: 'Quasi-Govt',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function AustinGovernmentListingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-600">
            {[
              { label: 'Home',       href: '/' },
              { label: 'Directory',  href: '/directory' },
              { label: 'Austin',     href: '/directory/austin' },
              { label: 'Government', href: null },
            ].map((c, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-gray-700" aria-hidden="true">/</span>}
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
            <span>⚖️</span> Austin Government
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
            Austin Government Directory
          </h1>
          <p className="text-base text-gray-400 leading-relaxed max-w-2xl mb-5">
            Documented profiles of government agencies, elected offices, courts, utilities, and
            transit authorities in Austin and Travis County. All entries sourced from primary records.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-600">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {ENTITIES.length} entities listed
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c45c2a]" />
              {ENTITIES.filter((e) => e.profileSlug).length} with full profiles
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              Quasi-govt entities included
            </span>
          </div>
        </header>

        {/* Entity grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ENTITIES.map((entity) => {
              const href = entity.profileSlug
                ? `/directory/austin/government/${entity.profileSlug}`
                : null;

              const Card = (
                <div className={`flex flex-col gap-3 p-5 rounded-xl bg-[#111111] border transition-all duration-200 h-full ${
                  href
                    ? 'border-white/8 hover:border-[#c45c2a]/40 hover:bg-[#151515] cursor-pointer group'
                    : 'border-white/5 opacity-75'
                }`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-black leading-snug ${href ? 'text-white group-hover:text-[#c45c2a] transition-colors' : 'text-gray-300'}`}>
                        {entity.name}
                      </p>
                      <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-0.5">
                        {entity.entityType}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 mt-0.5 flex-wrap justify-end">
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
                    <span className="text-[10px] text-gray-600 uppercase tracking-widest mt-auto">
                      Profile coming soon
                    </span>
                  )}
                </div>
              );

              return href ? (
                <Link key={entity.name} href={href} className="block">{Card}</Link>
              ) : (
                <div key={entity.name}>{Card}</div>
              );
            })}
          </div>
        </section>

        {/* Footer nav */}
        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/8 text-xs text-gray-600">
          <Link href="/directory/austin" className="hover:text-[#c45c2a] underline">← Austin directory</Link>
          <Link href="/directory/austin/companies" className="hover:text-[#c45c2a] underline">Companies</Link>
          <Link href="/directory/austin/organizations" className="hover:text-[#c45c2a] underline">Organizations</Link>
          <Link href="/directory" className="hover:text-[#c45c2a] underline">All regions</Link>
          <Link href="/service/tip-the-newsroom" className="hover:text-[#c45c2a] underline ml-auto">Tip the Newsroom →</Link>
        </div>

      </div>
    </div>
  );
}
