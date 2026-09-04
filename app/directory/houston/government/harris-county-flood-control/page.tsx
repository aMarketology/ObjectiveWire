import type { Metadata } from 'next';
import Link from 'next/link';
import { EntityProfile } from '@/components/EntityProfile';
import type { EntityPageData } from '@/components/EntityProfile';

export const revalidate = 86400;

const SLUG = '/directory/houston/government/harris-county-flood-control';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Harris County Flood Control District | Prop A Bond Program',
  description:
    'Profile of the Harris County Flood Control District. Administers the Proposition A $2.5B+ bond program. Covers governance, Harvey-era capital projects, contractor oversight, and public records.',
  keywords: [
    'Harris County Flood Control District', 'HCFCD', 'hcfcd.org',
    'Proposition A bond Harris County', 'Hurricane Harvey flood mitigation',
    'Harris County flood bond spending', 'Harris County drainage projects',
    'Harris County public records flood', 'TPIA flood control',
    'Harris County capital contracts flood',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Harris County Flood Control District | Objective Wire',
    description: 'Primary-source profile of the Harris County Flood Control District and its $2.5B+ Proposition A capital program.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'Objective Wire',
    authors: ['Objective Wire Investigations'],
    publishedTime: '2026-06-13T00:00:00Z',
    modifiedTime: '2026-06-13T00:00:00Z',
    section: 'Government',
    tags: ['Harris County', 'Flood Control', 'Proposition A', 'Houston Infrastructure'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harris County Flood Control District | Objective Wire',
    description: 'Administers a $2.5B+ voter-approved flood mitigation bond program. Key accountability target for capital spending and contractor oversight.',
  },
};

const PAGE: EntityPageData = {
  slug: SLUG,
  canonicalUrl: PAGE_URL,
  datePublished: '2026-06-13',
  dateModified: '2026-06-13',

  category: 'Government',
  tags: [
    { label: 'Harris County', color: 'sky' },
    { label: 'Special District', color: 'violet' },
    { label: 'Infrastructure', color: 'amber' },
    { label: 'Quasi-Govt', color: 'fuchsia' },
  ],

  title: 'Harris County Flood Control District',
  summary:
    'The Harris County Flood Control District (HCFCD) is a special-purpose governmental entity responsible for managing flood risk across Harris County. It administers the Proposition A bond program — a $2.5B+ voter-approved capital package passed after Hurricane Harvey devastated the region in 2017.',

  entity: {
    name: 'Harris County Flood Control District',
    legalName: 'Harris County Flood Control District',
    officialSite: 'https://www.hcfcd.org',
    officialSiteDisplay: 'hcfcd.org',

    entityType: 'Special District / Quasi-Governmental',
    status: 'Active',

    established: '1937',
    region: 'Houston',
    jurisdiction: 'Harris County, Texas',
    seat: '9900 Northwest Freeway, Houston, TX 77092',

    headcount: '~500 staff and contractors',
    budget: '$400M+ (FY 2025 est., capital + operations)',

    keyPeople: [
      {
        name: 'Harris County Commissioners Court',
        role: 'Governing Body (acts as Board of Directors)',
        link: 'https://www.harriscountytx.gov/commissioners-court',
      },
      {
        name: 'HCFCD Executive Director',
        role: 'District Director (appointed by Commissioners Court)',
        link: 'https://www.hcfcd.org',
      },
    ],

    responsibilities: [
      'Design and construction of flood mitigation infrastructure',
      'Channel maintenance and stormwater management',
      'Proposition A bond program administration ($2.5B+)',
      'Federal FEMA and USACE grant coordination',
      'Buyout programs for flood-prone residential properties',
      'Capital contract procurement and oversight',
      'Drainage studies and watershed master planning',
    ],

    recordTypes: [
      'Proposition A bond spending reports',
      'Capital project contracts and amendments',
      'Contractor performance evaluations',
      'Buyout program records (addresses, amounts)',
      'FEMA grant applications and reimbursements',
      'Board meeting minutes (Commissioners Court)',
      'Environmental review documents',
    ],

    publicRecordsUrl: 'https://www.hcfcd.org/about/open-records',
    wikipedia: 'https://en.wikipedia.org/wiki/Harris_County_Flood_Control_District',
  },

  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: (
        <div>
          <p>
            The Harris County Flood Control District (HCFCD) is a special-purpose governmental
            entity created under Texas Water Code Chapter 55. It is the primary government agency
            responsible for reducing flood risk across Harris County&rsquo;s 22 major watersheds
            and 2,500+ miles of waterways.
          </p>
          <p>
            HCFCD is governed by the Harris County Commissioners Court, which acts as its board
            of directors. This makes the District&rsquo;s spending and priorities directly
            accountable to the five elected Commissioners Court members (County Judge + 4
            precinct commissioners), creating a strong accountability mechanism for public oversight.
          </p>
          <p>
            The District&rsquo;s profile dramatically increased after Hurricane Harvey (August 2017)
            — the costliest flood disaster in U.S. history — which caused an estimated $125B in
            damage in Harris County alone. The subsequent Proposition A bond election and the
            District&rsquo;s management of that capital program has made it one of the most
            important public finance accountability targets in Texas.
          </p>
        </div>
      ),
    },
    {
      id: 'harvey-aftermath',
      heading: 'Hurricane Harvey & the Accountability Context',
      body: (
        <div>
          <p>
            Hurricane Harvey made landfall on August 25, 2017, and stalled over Houston for
            four days, dropping an estimated 60+ inches of rain in some areas. The storm
            exposed decades of deferred flood mitigation investment, inadequate reservoir
            capacity, and land-use decisions that allowed development in floodways and
            100-year flood plains.
          </p>
          <p>
            Post-Harvey investigations and reporting revealed that HCFCD and the U.S. Army Corps
            of Engineers had long-identified high-risk projects — including Addicks and Barker
            Reservoir buyout zones and channel widening projects — that had not been funded. The
            controlled releases from Addicks and Barker Reservoirs (owned by USACE, not HCFCD)
            flooded thousands of upstream homes, generating significant litigation.
          </p>
          <p>
            Harris County residents subsequently approved Proposition A in August 2018 with 85%
            of the vote, authorizing up to $2.5B in general obligation bonds for flood
            mitigation — the largest bond program in Harris County history.
          </p>
        </div>
      ),
    },
    {
      id: 'prop-a',
      heading: 'Proposition A Bond Program',
      body: (
        <div>
          <p>
            The Proposition A bond program (approved Aug. 2018) funds a 20+ year capital
            program across all 23 Harris County watersheds. Projects include: channel widening
            and deepening, detention basin construction, storm sewer upgrades, and voluntary
            home buyouts in repetitively flooded areas.
          </p>
          <p>
            As of 2025, HCFCD has issued multiple tranches of Prop A bonds and is managing
            hundreds of concurrent projects. Key accountability questions include:
          </p>
          <ul>
            <li>
              <strong>Geographic equity</strong> — Are Prop A projects distributed equitably
              across income levels and racial demographics? Post-Harvey criticism focused on
              inequitable investment in lower-income, predominantly minority watersheds.
            </li>
            <li>
              <strong>Contractor performance</strong> — Are major construction contracts
              meeting schedule and cost targets? What is the change order rate and who
              are the top contractors by dollar value?
            </li>
            <li>
              <strong>Buyout program progress</strong> — How many properties have been
              acquired vs. budgeted? What is the per-property cost and are buyouts
              concentrated in certain areas?
            </li>
            <li>
              <strong>FEMA reimbursement</strong> — How much of Prop A capital is being
              matched by federal FEMA Hazard Mitigation grants and are reimbursements
              being collected on time?
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'governance',
      heading: 'Governance Structure',
      body: (
        <div>
          <p>
            HCFCD is governed by the Harris County Commissioners Court, which sets policy,
            approves contracts, and oversees the District&rsquo;s budget. The five-member
            court consists of the County Judge and four precinct commissioners, all elected
            to four-year terms on partisan ballots.
          </p>
          <p>
            Day-to-day administration is handled by the District Director and department
            heads covering engineering, maintenance, operations, and project management.
            Major capital contracts (typically $1M+) require Commissioners Court approval
            and appear on publicly posted court agendas.
          </p>
          <p>
            Harris County holds{' '}
            <a
              href="https://www.harriscountytx.gov/commissioners-court"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Commissioners Court meetings
            </a>{' '}
            that are live-streamed and posted publicly. HCFCD contract approvals appear
            on the court&rsquo;s consent agenda. Monitoring these agendas is one of the
            most reliable methods of tracking District contracting activity.
          </p>
        </div>
      ),
    },
    {
      id: 'public-records',
      heading: 'Public Records & TPIA Access',
      body: (
        <div>
          <p>
            Harris County Flood Control District is a governmental body subject to the Texas
            Public Information Act (TPIA, Government Code Ch. 552). TPIA requests should
            be submitted in writing to HCFCD&rsquo;s Open Records Officer at{' '}
            <strong>9900 Northwest Freeway, Houston, TX 77092</strong>, or via the online
            portal at{' '}
            <a
              href="https://www.hcfcd.org/about/open-records"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              hcfcd.org/about/open-records
            </a>
            .
          </p>
          <p>
            High-value records to request:
          </p>
          <ul>
            <li>Proposition A bond project list with budget, expenditure, and status (all projects)</li>
            <li>All construction contracts $500K+ — vendor, amount, award date, change orders</li>
            <li>Contractor performance evaluations on completed Prop A projects</li>
            <li>Buyout program property list — addresses, acquisition price, funding source</li>
            <li>FEMA Hazard Mitigation grant applications and reimbursement status by project</li>
            <li>Equity analysis reports (if any) on project geographic distribution</li>
            <li>Internal audit reports and inspector general findings</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'investigation-angles',
      heading: 'Investigation Angles',
      body: (
        <div>
          <p>
            Priority investigative angles for Harris County Flood Control District:
          </p>
          <ul>
            <li>
              <strong>Prop A spending equity audit</strong> — Map all completed and in-progress
              Prop A projects by census tract. Compare investment per capita in majority-white
              vs. majority-minority watersheds, and high-income vs. low-income areas.
              Cross-reference against Harvey damage claims by watershed.
            </li>
            <li>
              <strong>Top contractor concentration</strong> — Identify the top 10 contractors
              by total Prop A contract value. Check for repeat awards, change order patterns,
              and political donation history of principals.
            </li>
            <li>
              <strong>Buyout program completion rate</strong> — Compare properties approved
              for buyout vs. actually acquired. Identify areas where buyouts are stalled and
              why (land title issues, funding gaps, owner refusals).
            </li>
            <li>
              <strong>Reservoir upstream flood litigation</strong> — The USACE Addicks/Barker
              litigation generated thousands of claims. Track HCFCD&rsquo;s parallel
              downstream projects tied to reservoir capacity management.
            </li>
            <li>
              <strong>Development approvals in flood zones</strong> — Compare new development
              permits approved by Harris County Engineering in Prop A project watersheds
              against stated mitigation goals. Are new structures being built faster than
              mitigation capacity is added?
            </li>
          </ul>
        </div>
      ),
    },
  ],

  sources: [
    { label: "HCFCD Official Website — hcfcd.org",                         url: 'https://www.hcfcd.org' },
    { label: "HCFCD Proposition A Bond Program Information",                url: 'https://www.hcfcd.org/projects-studies/projects/bond-program' },
    { label: "Harris County Commissioners Court",                           url: 'https://www.harriscountytx.gov/commissioners-court' },
    { label: "Texas Water Code Ch. 55 — Flood Control Districts",          url: 'https://statutes.capitol.texas.gov/Docs/WA/htm/WA.55.htm' },
    { label: "Texas Public Information Act — Gov. Code Ch. 552",           url: 'https://statutes.capitol.texas.gov/Docs/GV/htm/GV.552.htm' },
    { label: "FEMA — Hurricane Harvey Disaster Declaration DR-4332",        url: 'https://www.fema.gov/disaster/4332' },
  ],

  related: [
    { label: 'Houston Government Directory',                    href: '/directory/houston/government',                  category: 'Directory' },
    { label: "Harris County DA — Sean Teare",                   href: '/directory/houston/government/harris-county-da', category: 'Directory' },
    { label: 'Port of Houston Authority',                       href: '/directory/houston/companies/port-houston',      category: 'Directory' },
    { label: 'Tip the Newsroom',                                href: '/service/tip-the-newsroom',                      category: 'Contact' },
  ],
};

export default function HarrisCountyFloodControlPage() {
  return <EntityProfile page={PAGE} />;
}
