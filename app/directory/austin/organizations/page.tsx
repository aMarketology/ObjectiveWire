import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 3600;

const PAGE_URL = 'https://www.objectivewire.org/directory/austin/organizations';
const SITE_URL = 'https://www.objectivewire.org';

export const metadata: Metadata = {
  title: 'Austin Organizations Directory | Nonprofits, Advocacy & Civic Groups',
  description:
    'Documented profiles of 15 Austin nonprofits, civic organizations, advocacy groups, legal aid organizations, and watchdogs of public interest. Investigative directory by Objective Wire.',
  keywords: [
    'Austin nonprofits directory', 'Texas civic organizations', 'Austin advocacy groups',
    'Texans for Public Justice', 'Texas Appleseed', 'Austin Justice Coalition',
    'Workers Defense Project', 'Foundation Communities', 'Every Texan CPPP',
    'Grassroots Leadership Austin', 'Texas Observer', 'Austin organizations public interest',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Austin Organizations Directory | Nonprofits & Civic Groups',
    description: 'Documented profiles of Austin nonprofits, advocacy organizations, and civic groups.',
    type: 'website', url: PAGE_URL, siteName: 'Objective Wire',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',          item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Directory',     item: `${SITE_URL}/directory` },
        { '@type': 'ListItem', position: 3, name: 'Austin',        item: `${SITE_URL}/directory/austin` },
        { '@type': 'ListItem', position: 4, name: 'Organizations', item: PAGE_URL },
      ],
    },
    {
      '@type': 'CollectionPage',
      name: 'Austin Organizations Directory | Objective Wire',
      description: 'Documented profiles of Austin nonprofits, civic groups, and advocacy organizations of public interest.',
      url: PAGE_URL,
      publisher: { '@type': 'NewsMediaOrganization', name: 'Objective Wire', url: SITE_URL },
      mainEntity: {
        '@type': 'ItemList',
        name: 'Austin Nonprofits and Civic Organizations',
        numberOfItems: 15,
        itemListElement: [
          { '@type': 'ListItem', position: 1,  name: 'Texans for Public Justice' },
          { '@type': 'ListItem', position: 2,  name: 'Texas Appleseed' },
          { '@type': 'ListItem', position: 3,  name: 'Texas Civil Rights Project' },
          { '@type': 'ListItem', position: 4,  name: 'Austin Chamber of Commerce' },
          { '@type': 'ListItem', position: 5,  name: 'Greater Austin Crime Commission' },
          { '@type': 'ListItem', position: 6,  name: 'Texas Tribune' },
          { '@type': 'ListItem', position: 7,  name: 'Disability Rights Texas' },
          { '@type': 'ListItem', position: 8,  name: 'Austin Justice Coalition' },
          { '@type': 'ListItem', position: 9,  name: 'Workers Defense Project' },
          { '@type': 'ListItem', position: 10, name: 'Foundation Communities' },
          { '@type': 'ListItem', position: 11, name: 'Every Texan (fmr. CPPP)' },
          { '@type': 'ListItem', position: 12, name: 'Texas RioGrande Legal Aid' },
          { '@type': 'ListItem', position: 13, name: 'Austin Tenants Council' },
          { '@type': 'ListItem', position: 14, name: 'Grassroots Leadership' },
          { '@type': 'ListItem', position: 15, name: 'Texas Observer' },
        ],
      },
    },
  ],
};

interface OrgCard {
  name: string;
  entityType: string;
  taxStatus: string;
  founded?: string;
  focus: string[];
  summary: string;
  website?: string;
  publicInterestNote: string;
  profileSlug?: string;
  status: 'Active' | 'Inactive';
}

const ORGS: OrgCard[] = [
  {
    name: 'Texans for Public Justice',
    entityType: 'Nonprofit Watchdog / Research',
    taxStatus: '501(c)(3)',
    founded: '1997',
    focus: ['Campaign finance', 'Lobbying disclosure', 'Public official accountability', 'Money in Texas politics'],
    summary: 'Austin-based nonprofit that tracks money in Texas politics. Publishes reports on campaign contributions, lobbying contracts, and PAC activity for Texas officials. Primary source used by investigative reporters covering Texas government.',
    website: 'https://tpj.org',
    publicInterestNote: 'Primary source for Texas political money tracking. TPJF reports are primary-source investigative tools.',
    status: 'Active',
  },
  {
    name: 'Texas Appleseed',
    entityType: 'Legal Advocacy Nonprofit',
    taxStatus: '501(c)(3)',
    founded: '1996',
    focus: ['Criminal justice reform', 'Education equity', 'Consumer protection', 'Public benefits access'],
    summary: 'Austin-based public interest law center that conducts research and advocacy on Texas systemic policy issues. Has published documented reports on Texas child welfare, criminal fines and fees, school discipline, and payday lending that serve as primary sources for investigative reporting.',
    website: 'https://www.texasappleseed.org',
    publicInterestNote: 'Primary-source reports on Texas criminal justice, child welfare, and consumer protection.',
    status: 'Active',
  },
  {
    name: 'Texas Civil Rights Project',
    entityType: 'Legal Advocacy Nonprofit',
    taxStatus: '501(c)(3)',
    founded: '1990',
    focus: ['Voting rights', 'Criminal justice', 'Immigration civil rights', 'Reproductive rights'],
    summary: 'Texas-based civil rights legal organization that documents and litigates on voting rights, criminal justice, and civil liberties issues. Produces primary-source litigation records and public reports. Based in Austin.',
    website: 'https://texascivilrightsproject.org',
    publicInterestNote: 'Litigation records and reports on Texas voting rights, criminal justice, and civil liberties.',
    status: 'Active',
  },
  {
    name: 'Austin Chamber of Commerce',
    entityType: 'Business Association',
    taxStatus: '501(c)(6)',
    founded: '1877',
    focus: ['Business advocacy', 'Economic development', 'Austin area growth policy', 'Government relations'],
    summary: 'The Greater Austin Chamber of Commerce is the primary business advocacy organization for the Austin region, representing thousands of member companies. The Chamber actively lobbies City Council and state legislature on economic development, zoning, and tax policy — making it a significant force in Austin governance.',
    website: 'https://www.austinchamber.com',
    publicInterestNote: 'Lobbying disclosure records, City Council testimony, economic development advocacy.',
    status: 'Active',
  },
  {
    name: 'Greater Austin Crime Commission',
    entityType: 'Nonprofit / Public Safety Advocacy',
    taxStatus: '501(c)(3)',
    founded: '1996',
    focus: ['Public safety policy', 'Criminal justice advocacy', 'Law enforcement support', 'Crime data analysis'],
    summary: 'Austin-based nonprofit focused on public safety policy advocacy. Engages with law enforcement, prosecutors, and elected officials on criminal justice matters in Austin and Travis County. Produces crime data analysis reports.',
    website: 'https://www.crimec.org',
    publicInterestNote: 'Public safety advocacy; board composition and funding sources are public interest.',
    status: 'Active',
  },
  {
    name: 'Texas Tribune',
    entityType: 'Nonprofit News Organization',
    taxStatus: '501(c)(3)',
    founded: '2009',
    focus: ['Texas government reporting', 'Politics and policy', 'Legislature coverage', 'Data journalism'],
    summary: 'Austin-based nonprofit news organization covering Texas government and politics. Receives foundation funding, individual donations, and event sponsorships. Its funding sources, editorial independence, and coverage decisions are documented public interest matters for news consumers and journalism researchers.',
    website: 'https://www.texastribune.org',
    publicInterestNote: 'IRS Form 990s (public), foundation funders, advertiser/sponsor relationships — newsroom accountability.',
    status: 'Active',
  },
  {
    name: 'Disability Rights Texas',
    entityType: 'Legal Advocacy Nonprofit',
    taxStatus: '501(c)(3)',
    founded: '1977',
    focus: ['Disability rights', 'HHSC oversight', 'Special education', 'State institution monitoring'],
    summary: 'Federally mandated protection and advocacy organization for Texans with disabilities. As the state\'s designated P&A organization, Disability Rights Texas has legal access rights to investigate state institutions, state-funded programs, and HHSC services. Produces primary-source reports on HHSC oversight.',
    website: 'https://www.disabilityrightstx.org',
    publicInterestNote: 'Mandated state investigative access; reports on HHSC, state schools, and disability programs are primary sources.',
    status: 'Active',
  },
  {
    name: 'Austin Justice Coalition',
    entityType: 'Criminal Justice Advocacy Nonprofit',
    taxStatus: '501(c)(3)',
    founded: '2016',
    focus: ['Police accountability', 'Criminal justice reform', 'Racial equity', 'Jail oversight'],
    summary: 'Austin-based nonprofit founded after the police shooting of David Joseph. AJC advocates on Austin Police Department policy, Travis County jail conditions, DA accountability, and City Council public safety budget decisions. Engages directly in APD budget processes and participates in city oversight mechanisms.',
    website: 'https://www.austinjustice.org',
    publicInterestNote: 'Direct engagement on APD budget, use-of-force policy, and Travis County criminal justice reform — primary advocacy actor in Austin policing debates.',
    status: 'Active',
  },
  {
    name: 'Workers Defense Project',
    entityType: 'Labor Rights Nonprofit',
    taxStatus: '501(c)(3)',
    founded: '2002',
    focus: ['Construction worker safety', 'Wage theft recovery', 'Immigrant worker rights', 'Public contract labor standards'],
    summary: 'Austin-based organization defending the rights of low-wage and immigrant workers, particularly in construction. WDP documented Austin\'s construction fatality rate — among the highest in the US — and successfully advocated for the Austin Construction Safety Ordinance (2020). Monitors publicly funded construction projects for labor standards compliance.',
    website: 'https://www.workersdefense.org',
    publicInterestNote: 'Primary source on construction labor conditions, wage theft, and safety compliance on publicly funded projects in Austin and Travis County.',
    status: 'Active',
  },
  {
    name: 'Foundation Communities',
    entityType: 'Affordable Housing Nonprofit',
    taxStatus: '501(c)(3)',
    founded: '1990',
    focus: ['Affordable housing development', 'Resident financial services', 'Education and health supports', 'Low-income tax credit housing'],
    summary: 'Austin-based nonprofit that develops and manages affordable apartment communities across Central Texas. Manages over 20 properties housing thousands of low-income families, seniors, and individuals with disabilities. Receives significant public subsidies including federal Low Income Housing Tax Credits, HUD funding, and City of Austin housing bonds. Financial management of these public funds is a primary accountability target.',
    website: 'https://foundcom.org',
    publicInterestNote: 'Manages hundreds of millions in public housing subsidy. Annual 990s, HUD audit reports, and City of Austin housing grant disclosures are key public records.',
    status: 'Active',
  },
  {
    name: 'Every Texan',
    entityType: 'Policy Research Nonprofit',
    taxStatus: '501(c)(3)',
    founded: '1985',
    focus: ['State budget analysis', 'Health care access', 'Education funding equity', 'Economic policy'],
    summary: 'Austin-based nonprofit policy research organization, formerly the Center for Public Policy Priorities (CPPP), rebranded as Every Texan in 2020. Produces widely cited analysis of the Texas state budget, Medicaid, CHIP, public school funding formulas, and economic inequality. Its budget analyses are used as primary source documents by journalists covering the Texas Legislature.',
    website: 'https://everytexan.org',
    publicInterestNote: 'Primary source for Texas state budget analysis, Medicaid enrollment data, and school finance equity research. 990s and donor disclosures are public.',
    status: 'Active',
  },
  {
    name: 'Texas RioGrande Legal Aid',
    entityType: 'Civil Legal Services Nonprofit',
    taxStatus: '501(c)(3)',
    founded: '1994',
    focus: ['Civil legal aid', 'Tenant rights', 'Consumer protection', 'Immigration civil law', 'Family law'],
    summary: 'One of the largest civil legal aid providers in the US, serving low-income Texans across 68 counties including Travis County. Operates the Austin Tenants Council as a special project. Receives federal Legal Services Corporation (LSC) funding — a public accountability trigger. Represents clients in evictions, domestic violence protection orders, and consumer fraud cases.',
    website: 'https://www.trla.org',
    publicInterestNote: 'Receives LSC federal funding (public). Tenant counsel data, eviction representation rates, and annual reports are public records for housing accountability coverage.',
    status: 'Active',
  },
  {
    name: 'Austin Tenants Council',
    entityType: 'Tenant Rights Nonprofit / TRLA Special Project',
    taxStatus: '501(c)(3)',
    founded: '1973',
    focus: ['Tenant rights education', 'Housing discrimination', 'Eviction defense', 'Landlord-tenant mediation'],
    summary: 'Special project of Texas RioGrande Legal Aid operating at 4920 N IH-35, Austin, TX 78751. Provides free housing counseling, fair housing education, and landlord-tenant dispute assistance to Austin renters. Tracks eviction patterns and rental market conditions, making its data valuable for housing policy accountability reporting.',
    website: 'https://www.austintenants.org',
    publicInterestNote: 'Tracks Austin eviction data and rental conditions. Counseling records (aggregate) and organizational data are tools for housing accountability and gentrification reporting.',
    status: 'Active',
  },
  {
    name: 'Grassroots Leadership',
    entityType: 'Criminal Justice / Immigration Advocacy Nonprofit',
    taxStatus: '501(c)(3)',
    founded: '1981',
    focus: ['Private prison abolition', 'Immigration detention oversight', 'Criminal justice reform', 'Immigrant rights'],
    summary: 'Austin-based nonprofit that campaigns against the for-profit prison and detention industry. Has documented conditions in Texas private detention facilities and successfully advocated for state legislation affecting private prison contracts. Monitors contracts between Texas state agencies and private prison companies including GEO Group and CoreCivic.',
    website: 'https://grassrootsleadership.org',
    publicInterestNote: 'Primary source on private prison contracts, immigration detention conditions, and Texas criminal justice privatization. Produces detailed contract analyses.',
    status: 'Active',
  },
  {
    name: 'Texas Observer',
    entityType: 'Nonprofit Investigative News Organization',
    taxStatus: '501(c)(3)',
    founded: '1954',
    focus: ['Texas investigative journalism', 'Political accountability', 'Environmental reporting', 'Criminal justice coverage'],
    summary: 'Austin-based independent nonprofit newsroom founded in 1954 covering Texas politics, government, and public interest stories. One of the oldest independent news organizations in Texas. Receives foundation funding from major donors including national foundations. Its funding sources, editorial independence, and coverage decisions are documented public interest matters for news consumers and journalism researchers.',
    website: 'https://www.texasobserver.org',
    publicInterestNote: 'IRS Form 990s (public), foundation funders, and editorial conflict-of-interest disclosures are accountability records for media sector coverage.',
    status: 'Active',
  },
];

export default function AustinOrganizationsPage() {
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
              { label: 'Organizations', href: null },
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
            <span>🏢</span> Austin Organizations
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
            Austin Organizations Directory
          </h1>
          <p className="text-base text-gray-400 leading-relaxed max-w-2xl mb-4">
            Nonprofits, civic associations, advocacy groups, and public interest organizations in
            Austin and Texas. These entities shape policy, litigate for rights, and produce
            primary-source research that OW uses as investigative tools.
          </p>
        </header>

        {/* Orgs grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {ORGS.map((org) => {
              const href = org.profileSlug
                ? `/directory/austin/organizations/${org.profileSlug}`
                : null;

              const inner = (
                <div className={`flex flex-col gap-3 p-5 rounded-xl bg-[#111111] border h-full transition-all duration-200 ${
                  href
                    ? 'border-white/8 hover:border-[#c45c2a]/40 hover:bg-[#151515] group cursor-pointer'
                    : 'border-white/5'
                }`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className={`text-sm font-black leading-snug ${href ? 'text-white group-hover:text-[#c45c2a] transition-colors' : 'text-gray-200'}`}>
                        {org.name}
                      </p>
                      <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-0.5">{org.entityType}</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-800/30 shrink-0">
                      {org.taxStatus}
                    </span>
                  </div>

                  {org.founded && (
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 text-gray-500 border border-white/5 w-fit">
                      Est. {org.founded}
                    </span>
                  )}

                  <p className="text-xs text-gray-500 leading-relaxed flex-1">{org.summary}</p>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-600 mb-1.5">Focus Areas</p>
                    <div className="flex flex-wrap gap-1.5">
                      {org.focus.slice(0, 3).map((f) => (
                        <span key={f} className="text-[10px] px-2 py-0.5 rounded bg-sky-950/40 text-sky-400 border border-sky-800/30">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-2 pt-2 border-t border-white/5">
                    <span className="text-emerald-500 text-[11px] shrink-0 mt-0.5">📋</span>
                    <p className="text-[11px] text-emerald-300/70 leading-snug">{org.publicInterestNote}</p>
                  </div>

                  {org.website && (
                    <a
                      href={org.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-blue-400 hover:text-blue-300 underline transition-colors"
                    >
                      {org.website.replace('https://', '')}
                    </a>
                  )}
                </div>
              );

              return href ? (
                <Link key={org.name} href={href} className="block">{inner}</Link>
              ) : (
                <div key={org.name}>{inner}</div>
              );
            })}
          </div>
        </section>

        {/* Footer nav */}
        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/8 text-xs text-gray-600">
          <Link href="/directory/austin" className="hover:text-[#c45c2a] underline">← Austin directory</Link>
          <Link href="/directory/austin/companies" className="hover:text-[#c45c2a] underline">Companies listing</Link>
          <Link href="/directory/austin/government" className="hover:text-[#c45c2a] underline">Government listing</Link>
          <Link href="/service/tip-the-newsroom" className="hover:text-[#c45c2a] underline ml-auto">Tip the Newsroom →</Link>
        </div>

      </div>
    </div>
  );
}
