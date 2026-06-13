import type { Metadata } from 'next';
import Link from 'next/link';
import { EntityProfile } from '@/components/EntityProfile';
import type { EntityPageData } from '@/components/EntityProfile';

export const revalidate = 86400;

const SLUG = '/directory/austin/government/austin-energy';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Austin Energy | City-Owned Electric Utility, Austin TX',
  description:
    'Austin Energy is the City of Austin\'s municipally owned electric utility. Public interest profile covering rates, governance, reliability, and public records access.',
  keywords: [
    'Austin Energy', 'Austin electric utility', 'City of Austin utility',
    'Austin Energy rates', 'Austin Energy governance', 'municipal utility Austin TX',
    'Austin Energy public records', 'Austin Energy accountability',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Austin Energy | City-Owned Electric Utility Profile',
    description: 'Public interest profile of Austin Energy — rates, governance, reliability, and how to access public records.',
    type: 'article', url: PAGE_URL, siteName: 'Objective Wire',
  },
};

const PAGE: EntityPageData = {
  slug: SLUG,
  canonicalUrl: PAGE_URL,
  datePublished: '2026-06-13',
  dateModified: '2026-06-13',

  category: 'Government',
  tags: [
    { label: 'City of Austin', color: 'sky' },
    { label: 'Quasi-Government', color: 'violet' },
    { label: 'Utility', color: 'amber' },
    { label: 'Public Interest', color: 'rose' },
  ],

  title: 'Austin Energy',
  summary:
    'Austin Energy is the municipally owned electric utility of the City of Austin, Texas — one of the largest public power utilities in the United States. It is owned by the City of Austin and governed under City Council oversight, serving over 500,000 customers across Austin and parts of surrounding counties.',

  entity: {
    name: 'Austin Energy',
    legalName: 'City of Austin — Austin Energy',
    officialSite: 'https://austinenergy.com',
    officialSiteDisplay: 'austinenergy.com',
    entityType: 'Municipal Utility',
    status: 'Active',
    established: '1895',
    region: 'Austin',
    jurisdiction: 'City of Austin, Texas',
    seat: '721 Barton Springs Rd, Austin, TX 78704',
    parentOrganization: 'City of Austin',
    headcount: '~1,800 employees',
    revenue: '~$1.5B annual (estimated)',
    wikipedia: 'https://en.wikipedia.org/wiki/Austin_Energy',
    keyPeople: [
      { name: 'Austin City Council', role: 'Governing authority' },
      { name: 'Electric Utility Commission', role: 'Advisory oversight board' },
    ],
    responsibilities: [
      'Electric power generation and delivery',
      'Grid reliability and infrastructure',
      'Renewable energy portfolio management',
      'Energy efficiency and rebate programs',
      'Rate-setting (subject to City Council approval)',
      'Customer service for 500,000+ accounts',
    ],
    recordTypes: [
      'City Council agenda items (utility matters)',
      'Integrated Resource Plan (IRP)',
      'Annual reports and financial statements',
      'Rate case filings',
      'Outage/reliability reports',
      'Capital improvement plans',
      'Texas Public Information Act responses',
    ],
    publicRecordsUrl: 'https://www.austintexas.gov/page/public-information-requests',
  },

  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: (
        <div>
          <p>
            Austin Energy (AE) is the eighth-largest publicly owned electric utility in the United
            States, serving more than 500,000 customers across the City of Austin and parts of
            Travis, Bastrop, Burnet, Llano, and Williamson counties. It is a department of the
            City of Austin — not a separate corporation or independent authority — meaning its
            finances, governance, and rate-setting are all subject to City Council vote and public
            oversight under Texas law.
          </p>
          <p>
            Because Austin Energy is a city department, its records are subject to the{' '}
            <strong>Texas Public Information Act (TPIA)</strong>. Financial statements,
            procurement contracts, executive compensation, rate-case documents, and operational
            reports are all TPIA-requestable unless a specific exemption applies.
          </p>
          <p>
            Objective Wire covers Austin Energy as part of its Austin investigative beat. Public
            utility rate increases, procurement of major power contracts, outage accountability,
            and City Council oversight decisions are all subjects of public interest and
            potential investigation. See{' '}
            <Link href="/local/austin" className="text-blue-400 hover:text-blue-300 underline">
              Austin coverage
            </Link>{' '}
            for OW reporting connected to this entity.
          </p>
        </div>
      ),
    },
    {
      id: 'background',
      heading: 'Background',
      body: (
        <div>
          <p>
            Austin Energy traces its origins to 1895 when the City of Austin built its first
            municipally owned electric plant. The utility has operated continuously under city
            ownership for over 130 years, making it one of the oldest public power utilities in
            the country.
          </p>
          <p>
            Unlike investor-owned utilities (IOUs) regulated by the Public Utility Commission
            of Texas (PUCT), Austin Energy is largely exempt from PUCT retail rate jurisdiction
            because it operates as a municipally owned utility (MOU). This means its rates are
            set directly by the Austin City Council, and oversight comes from elected officials
            rather than a state regulatory commission — concentrating accountability at the
            local political level.
          </p>
          <p>
            The utility's headquarters is at{' '}
            <strong>721 Barton Springs Road, Austin, TX 78704</strong>, in the Barton Springs
            corridor south of downtown.
          </p>
        </div>
      ),
    },
    {
      id: 'governance',
      heading: 'Governance & Oversight',
      body: (
        <div>
          <p>
            Austin Energy is governed through a two-tier structure:
          </p>
          <ul>
            <li>
              <strong>Austin City Council</strong> — ultimate governing authority. The Council
              sets rates, approves the utility's budget as part of the city's overall budget
              process, approves major contracts, and can direct utility policy. All rate changes
              require a City Council vote at a public meeting.
            </li>
            <li>
              <strong>Electric Utility Commission (EUC)</strong> — an advisory board appointed
              by City Council members. The EUC reviews utility plans, rate proposals, and
              capital projects and makes recommendations to the full Council. EUC meetings are
              public and minutes are public record.
            </li>
          </ul>
          <p>
            The utility is led by a General Manager who reports to the City Manager's office.
            Because this is a city department, the GM's salary and contract are public record
            under TPIA.
          </p>
          <p>
            <strong>Key accountability mechanism:</strong> Ratepayers can challenge utility
            decisions by attending City Council and EUC meetings, submitting public comments,
            and filing TPIA requests. Unlike PUCT-regulated utilities, there is no formal
            intervener process — accountability is entirely political.
          </p>
        </div>
      ),
    },
    {
      id: 'public-interest-issues',
      heading: 'Public Interest Issues',
      body: (
        <div>
          <p>
            Austin Energy has been the subject of recurring public interest scrutiny in several
            areas:
          </p>
          <ul>
            <li>
              <strong>Rate increases</strong> — Austin Energy has implemented multiple rate
              increases in recent years. Because rates require City Council approval, rate cases
              are fully documented in Council agenda packets, which are public record and
              available online before each vote.
            </li>
            <li>
              <strong>Coal plant transition</strong> — AE's stake in the Fayette Power Project
              (a coal plant co-owned with LCRA) has been a recurring issue. The timeline for
              closing or transitioning the plant involves documented commitments to the City
              Council's climate goals.
            </li>
            <li>
              <strong>Grid reliability</strong> — Following Winter Storm Uri in February 2021,
              questions about Austin Energy's winterization and grid preparedness are ongoing
              public interest matters. Post-event reports are public record.
            </li>
            <li>
              <strong>Procurement contracts</strong> — Major power purchase agreements (PPAs),
              IT contracts, and capital project awards are City of Austin contracts subject to
              TPIA and published in Council agenda materials.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'public-record',
      heading: 'Public Record | What You Can Request',
      body: (
        <div>
          <p>
            As a department of the City of Austin, Austin Energy records are accessible under
            the <strong>Texas Public Information Act</strong>. Requests go to the City of
            Austin's Public Information Office.
          </p>
          <ul>
            <li>
              <strong>Rate case documents</strong> — full filings, supporting analysis, and
              consultant reports submitted during rate reviews.
            </li>
            <li>
              <strong>Power purchase agreements</strong> — major contracts for electricity
              supply from generation sources. Subject to TPIA with potential commercial
              information exemptions.
            </li>
            <li>
              <strong>Executive compensation</strong> — General Manager salary and employment
              contract are public record as city employee records.
            </li>
            <li>
              <strong>Outage event reports</strong> — post-outage analysis and root-cause
              reports.
            </li>
            <li>
              <strong>Integrated Resource Plan (IRP)</strong> — the utility's long-term
              planning document, published and presented to the EUC and City Council.
            </li>
            <li>
              <strong>Capital projects</strong> — infrastructure contracts $50,000+ are
              published in Council agenda packets.
            </li>
          </ul>
          <p>
            Submit TPIA requests through the{' '}
            <a
              href="https://www.austintexas.gov/page/public-information-requests"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              City of Austin Public Information portal
            </a>
            .
          </p>
        </div>
      ),
    },
    {
      id: 'coverage',
      heading: 'Coverage | Objective Wire Reporting',
      body: (
        <div>
          <p>
            Objective Wire covers Austin Energy as part of its Austin accountability beat,
            focusing on rate-setting decisions, procurement transparency, and City Council
            oversight of the utility.
          </p>
          <ul>
            <li>
              <Link href="/local/austin" className="text-blue-400 hover:text-blue-300 underline">
                Austin investigative news
              </Link>{' '}
              — primary Austin coverage hub.
            </li>
            <li>
              <Link href="/directory/austin/government" className="text-blue-400 hover:text-blue-300 underline">
                Austin government directory
              </Link>{' '}
              — other Travis County entities documented by OW.
            </li>
            <li>
              <Link href="/service/tip-the-newsroom" className="text-blue-400 hover:text-blue-300 underline">
                Tip the Newsroom
              </Link>{' '}
              — documents, contracts, or tips about Austin Energy under full source protection.
            </li>
          </ul>
        </div>
      ),
    },
  ],

  related: [
    { label: 'Capital Metro', href: '/directory/austin/government/capital-metro', category: 'Government' },
    { label: 'Austin City Council', href: '/directory/austin/government', category: 'Government' },
    { label: 'LCRA', href: '/directory/austin/government', category: 'Government' },
    { label: 'Travis County DA', href: '/directory/austin/government/travis-county-da', category: 'Government' },
  ],

  sources: [
    { label: 'Austin Energy | Official Website — austinenergy.com', url: 'https://austinenergy.com' },
    { label: 'Austin Energy | 721 Barton Springs Rd, Austin TX 78704 (verified HQ address)', url: 'https://austinenergy.com/ae/about/company-profile/contact-us' },
    { label: 'City of Austin Public Information Act Requests Portal', url: 'https://www.austintexas.gov/page/public-information-requests' },
    { label: 'Austin Energy | Wikipedia', url: 'https://en.wikipedia.org/wiki/Austin_Energy' },
    { label: 'Texas Public Information Act | Texas Government Code Chapter 552', url: 'https://statutes.capitol.texas.gov/Docs/GV/htm/GV.552.htm' },
    { label: 'Electric Utility Commission — City of Austin', url: 'https://www.austintexas.gov/euc' },
  ],
};

export default function AustinEnergyPage() {
  return <EntityProfile page={PAGE} />;
}
