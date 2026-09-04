import type { Metadata } from 'next';
import Link from 'next/link';
import { EntityProfile } from '@/components/EntityProfile';
import type { EntityPageData } from '@/components/EntityProfile';

export const revalidate = 86400;

const SLUG = '/directory/austin/companies/tyler-technologies';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Tyler Technologies | Government Software Contractor Profile',
  description:
    'Tyler Technologies (NYSE: TYL) is the largest publicly traded company in the US dedicated exclusively to government software. Based in Plano, TX. Public interest profile covering Texas government contracts, court systems, and accountability.',
  keywords: [
    'Tyler Technologies', 'Tyler Technologies Texas', 'Tyler Technologies government contracts',
    'Odyssey court management', 'Tyler Technologies Travis County', 'TYL NYSE',
    'government software Texas', 'Tyler Technologies accountability', 'Munis ERP Texas',
    'Tyler Technologies public records',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Tyler Technologies | Government Software Contractor (NYSE: TYL)',
    description: 'Public interest profile of Tyler Technologies — Texas government contracts, court systems, and procurement transparency.',
    type: 'article', url: PAGE_URL, siteName: 'Objective Wire',
  },
};

const PAGE: EntityPageData = {
  slug: SLUG,
  canonicalUrl: PAGE_URL,
  datePublished: '2026-06-13',
  dateModified: '2026-06-13',

  category: 'Companies',
  tags: [
    { label: 'Government Contractor', color: 'amber' },
    { label: 'Public Company', color: 'violet' },
    { label: 'Texas HQ', color: 'sky' },
    { label: 'Court Systems', color: 'rose' },
  ],

  title: 'Tyler Technologies',
  summary:
    'Tyler Technologies (NYSE: TYL) is the largest publicly traded company in the United States dedicated exclusively to software and technology services for the public sector. Headquartered in Plano, Texas, Tyler supplies the court case management systems, financial ERP, tax collection software, and digital government services used by hundreds of Texas counties, cities, and courts — including Travis County.',

  entity: {
    name: 'Tyler Technologies',
    legalName: 'Tyler Technologies, Inc.',
    officialSite: 'https://www.tylertech.com',
    officialSiteDisplay: 'tylertech.com',
    entityType: 'Government Software Corporation',
    status: 'Active',
    established: '1966',
    region: 'Austin',
    jurisdiction: 'Plano, Texas (HQ) — statewide Texas operations',
    seat: '5101 Tennyson Pkwy, Plano, TX 75024',
    stockTicker: 'TYL',
    stockExchange: 'NYSE',
    revenue: '~$2.1B annual revenue (FY2024 est.)',
    headcount: '~7,000 employees',
    naicsCode: '5112 — Software Publishers',
    wikipedia: 'https://en.wikipedia.org/wiki/Tyler_Technologies',
    keyPeople: [
      { name: 'Lynn Moore', role: 'President & CEO', link: 'https://www.tylertech.com/about-us/leadership' },
      { name: 'Brian Miller', role: 'CFO' },
    ],
    contractFocus: [
      'Court case management (Odyssey)',
      'Local government ERP / financial systems (Munis)',
      'Property tax appraisal and collection',
      'Digital government services (NIC)',
      'Public safety CAD/RMS systems',
      'Utility billing (INCODE)',
      'Land management systems',
    ],
    knownContracts: [
      'Travis County — Odyssey case management (documented ongoing)',
      'State of Texas — multiple county & city ERP deployments',
      'Texas counties — property tax appraisal software (Appraisal)',
    ],
    recordTypes: [
      'SEC filings (10-K, 10-Q, 8-K) — public via EDGAR',
      'Government contract award notices (SAM.gov)',
      'County/city RFP evaluations (TPIA from contracting entity)',
      'Contract change orders (TPIA from contracting entity)',
      'Annual reports and investor relations materials',
    ],
  },

  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: (
        <div>
          <p>
            Tyler Technologies is the dominant government software vendor in Texas and the
            largest publicly traded company in the country focused exclusively on the public
            sector. Its products run behind the scenes of everyday government — the software
            that processes your court fine, files your property tax appeal, issues your
            business license, or dispatches emergency services in most medium-to-large Texas
            counties is likely a Tyler product.
          </p>
          <p>
            This concentration creates significant public interest concerns:
          </p>
          <ul>
            <li><strong>Sole-source and single-vendor risk</strong> — Many jurisdictions that adopt Tyler products become deeply dependent on them, with high switching costs. This can limit competitive bidding on future contracts.</li>
            <li><strong>Data access</strong> — Tyler manages court records, tax records, and public safety data for hundreds of governments. Questions about data ownership, access, and security are substantive public interest issues.</li>
            <li><strong>Contract escalation</strong> — Multi-year enterprise software contracts with annual maintenance fees represent significant recurring public expenditure, often renewed without competitive re-bidding.</li>
          </ul>
          <p>
            Objective Wire documents Tyler Technologies as part of its coverage of government
            contracting and public technology spending in Texas.
          </p>
        </div>
      ),
    },
    {
      id: 'texas-footprint',
      heading: 'Texas Footprint | Key Products in Use',
      body: (
        <div>
          <p>
            Tyler's Texas presence is extensive. Its major product lines in use across Texas
            governments include:
          </p>
          <ul>
            <li>
              <strong>Odyssey File & Serve / Odyssey Case Manager</strong> — The dominant court
              case management system in Texas, used by many of the state's district courts,
              county courts, and municipal courts. Travis County uses Odyssey for case
              management. The system processes case filings, docket management, warrants,
              and judgments. Tyler acquired New World Systems (which built Odyssey's predecessor)
              in 2015.
            </li>
            <li>
              <strong>Munis</strong> — Tyler's flagship ERP system for local government finance,
              HR, and procurement. Munis is used by many Texas cities and counties for their
              financial management.
            </li>
            <li>
              <strong>NIC (Government Digital Services)</strong> — Tyler acquired NIC Inc. in
              2021 for approximately $2.3 billion. NIC operates the official digital services
              portals for multiple U.S. states, including Texas.gov. This acquisition made
              Tyler a significant player in state-level digital government services.
            </li>
            <li>
              <strong>INCODE</strong> — utility billing and court fine collection for smaller
              Texas municipalities.
            </li>
            <li>
              <strong>New World ERP</strong> — enterprise resource planning for public safety
              and local government, acquired from New World Systems.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'public-interest',
      heading: 'Public Interest Issues | Investigative Focus Areas',
      body: (
        <div>
          <p>
            Tyler Technologies warrants investigative scrutiny across several documented
            public interest dimensions:
          </p>
          <ul>
            <li>
              <strong>NIC Texas.gov contract</strong> — Through its NIC subsidiary, Tyler
              operates Texas.gov, the state's official digital services portal. This is a
              state contract generating transaction fees on public-facing government services.
              The contract terms, fee structures, and state oversight are public interest
              matters. The contract was documented and negotiated with the Texas Department of
              Information Resources (DIR).
            </li>
            <li>
              <strong>Sole-source contracting</strong> — When counties renew Tyler contracts
              without competitive bidding, procurement records should reflect the justification.
              TPIA requests to the contracting county or city can surface whether proper
              procurement procedures were followed.
            </li>
            <li>
              <strong>Court data access</strong> — Tyler's Odyssey system holds court records
              for much of Texas. Questions about bulk data access, API access fees, and
              whether Tyler charges for access to public court records are subjects of
              documented public concern nationally.
            </li>
            <li>
              <strong>Security incidents</strong> — Tyler disclosed a ransomware attack in
              September 2020 that affected its systems and potentially client governments.
              The scope and disclosure of that incident is documented in SEC filings.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'how-to-investigate',
      heading: 'How to Investigate Tyler Contracts in Texas',
      body: (
        <div>
          <p>
            Because Tyler's government contracts are with individual Texas counties, cities,
            and state agencies, investigation requires working with those contracting entities:
          </p>
          <ul>
            <li>
              <strong>TPIA requests to Travis County / City of Austin</strong> — Request the
              full Tyler Technologies contract(s), including any amendments, change orders,
              and total payments to date. Travis County Purchasing or the District Clerk's
              office would be the custodians.
            </li>
            <li>
              <strong>Texas DIR contracts</strong> — The Texas Department of Information
              Resources maintains a list of DIR cooperative contracts. Tyler Technologies has
              DIR contracts that allow any Texas government entity to purchase Tyler products.
              DIR contract documents are public record.
            </li>
            <li>
              <strong>SEC filings</strong> — As a public company (NYSE: TYL), Tyler files
              10-K annual reports, 10-Q quarterly reports, and 8-K current event reports with
              the SEC. These contain detailed revenue figures, risk factors, and descriptions
              of major contracts. Available free on{' '}
              <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=860731&type=10-K" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                SEC EDGAR
              </a>
              .
            </li>
            <li>
              <strong>SAM.gov federal contracts</strong> — Federal contracts for Tyler
              products (through the NIC subsidiary and direct federal work) are searchable on
              SAM.gov.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'coverage',
      heading: 'Coverage | Objective Wire Reporting',
      body: (
        <div>
          <p>
            Objective Wire covers Tyler Technologies as part of its government contracting
            beat, focusing on Texas county and city contracts, the Texas.gov arrangement,
            and procurement accountability.
          </p>
          <ul>
            <li>
              <Link href="/directory/austin/companies" className="text-blue-400 hover:text-blue-300 underline">Austin companies directory</Link>
              {' '}— other companies of public interest documented by OW.
            </li>
            <li>
              <Link href="/directory/austin/government/travis-county-da" className="text-blue-400 hover:text-blue-300 underline">Travis County DA</Link>
              {' '}— DA office uses Odyssey case management; related entity.
            </li>
            <li>
              <Link href="/service/tip-the-newsroom" className="text-blue-400 hover:text-blue-300 underline">Tip the Newsroom</Link>
              {' '}— contracts, change orders, or tips about Tyler Technologies under full source protection.
            </li>
          </ul>
        </div>
      ),
    },
  ],

  related: [
    { label: 'Travis County DA', href: '/directory/austin/government/travis-county-da', category: 'Government' },
    { label: 'Capital Metro', href: '/directory/austin/government/capital-metro', category: 'Government' },
    { label: 'Austin Energy', href: '/directory/austin/government/austin-energy', category: 'Government' },
    { label: 'Austin Companies Directory', href: '/directory/austin/companies', category: 'Directory' },
  ],

  sources: [
    { label: 'Tyler Technologies | Official Website — tylertech.com', url: 'https://www.tylertech.com' },
    { label: 'Tyler Technologies | Wikipedia', url: 'https://en.wikipedia.org/wiki/Tyler_Technologies' },
    { label: 'Tyler Technologies | SEC EDGAR 10-K filings (CIK: 0000860731)', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=860731&type=10-K' },
    { label: 'Texas Department of Information Resources (DIR) — Cooperative Contracts', url: 'https://dir.texas.gov/contracts' },
    { label: 'Tyler Technologies — NIC Acquisition press release (2021)', url: 'https://investor.tylertech.com' },
    { label: 'Tyler Technologies September 2020 Security Incident — SEC 8-K Filing', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=860731&type=8-K' },
  ],
};

export default function TylerTechnologiesPage() {
  return <EntityProfile page={PAGE} />;
}
