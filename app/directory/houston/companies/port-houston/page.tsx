import type { Metadata } from 'next';
import Link from 'next/link';
import { EntityProfile } from '@/components/EntityProfile';
import type { EntityPageData } from '@/components/EntityProfile';

export const revalidate = 86400;

const SLUG = '/directory/houston/companies/port-houston';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Port of Houston Authority | Ship Channel Contracts & Oversight',
  description:
    'Profile of the Port of Houston Authority. Covers Port Commission governance, Ship Channel dredging contracts, environmental justice, industrial safety, and public records access.',
  keywords: [
    'Port of Houston Authority', 'Port Houston', 'Port Commission Houston',
    'Houston Ship Channel', 'Port of Houston contracts', 'Harris County port',
    'Texas port authority', 'Ship Channel dredging contracts', 'Port of Houston environmental',
    'porthouston.com TPIA', 'Houston industrial corridor',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Port of Houston Authority | Objective Wire Directory',
    description: 'Primary-source profile of the Port of Houston Authority — governance, dredging contracts, environmental justice, and public records.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'Objective Wire',
    authors: ['Objective Wire Investigations'],
    publishedTime: '2026-06-13T00:00:00Z',
    modifiedTime: '2026-06-13T00:00:00Z',
    section: 'Companies',
    tags: ['Port of Houston', 'Ship Channel', 'Harris County', 'Houston Infrastructure'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Port of Houston Authority | Objective Wire',
    description: 'One of the busiest ports in the US. Port Commission governs major dredging, terminal, and capital contracts along the Houston Ship Channel.',
  },
};

const PAGE: EntityPageData = {
  slug: SLUG,
  canonicalUrl: PAGE_URL,
  datePublished: '2026-06-13',
  dateModified: '2026-06-13',

  category: 'Companies',
  tags: [
    { label: 'Port Authority', color: 'sky' },
    { label: 'Quasi-Govt', color: 'fuchsia' },
    { label: 'Infrastructure', color: 'amber' },
    { label: 'Houston', color: 'slate' },
  ],

  title: 'Port of Houston Authority',
  summary:
    "The Port of Houston Authority (Port Houston) is a governmental political subdivision of the State of Texas that oversees the public wharves and terminals along the Houston Ship Channel — one of the nation's busiest waterway systems. It is governed by an appointed Port Commission and manages billions in capital contracts for terminal operations, dredging, and industrial port development.",

  entity: {
    name: 'Port of Houston Authority',
    legalName: 'Port of Houston Authority',
    officialSite: 'https://porthouston.com',
    officialSiteDisplay: 'porthouston.com',

    entityType: 'Port Authority / Political Subdivision',
    status: 'Active',

    established: '1922',
    region: 'Houston',
    jurisdiction: 'Harris County, Texas',
    seat: '111 East Loop North, Houston, TX 77029',

    headcount: '~700 staff',
    budget: '$500M+ (FY 2025 operating + capital)',

    keyPeople: [
      {
        name: 'Port Commission',
        role: 'Governing Body (7 appointed commissioners)',
        link: 'https://porthouston.com/about/port-commission/',
      },
      {
        name: 'Executive Director',
        role: 'Chief Executive (appointed by Commission)',
        link: 'https://porthouston.com',
      },
    ],

    responsibilities: [
      'Operate public wharves and terminal facilities on the Houston Ship Channel',
      'Manage Ship Channel dredging programs and USACE coordination',
      'Issue capital contracts for terminal construction and maintenance',
      'Environmental compliance for port and Ship Channel operations',
      'Industrial development and tenant leasing along the Ship Channel',
      'Security coordination for port facilities (federal MTSA compliance)',
      'Community and environmental justice engagement in fence-line communities',
    ],

    recordTypes: [
      'Port Commission meeting minutes and agendas',
      'Capital contracts and vendor awards',
      'Annual operating and capital budgets',
      'Environmental permit applications (TCEQ, USACE)',
      'Tenant lease agreements (public records)',
      'Dredging project contracts and schedules',
      'Air quality and environmental monitoring reports',
    ],

    publicRecordsUrl: 'https://porthouston.com/about/public-information-requests/',
    wikipedia: 'https://en.wikipedia.org/wiki/Port_of_Houston',
  },

  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: (
        <div>
          <p>
            The Port of Houston Authority (Port Houston) is a governmental political subdivision
            of the State of Texas, operating under authority granted by the Texas Legislature.
            It governs the public terminals and wharves along the 52-mile Houston Ship Channel,
            which connects inland Houston to the Gulf of Mexico at Galveston Bay.
          </p>
          <p>
            The Houston Ship Channel complex is one of the busiest in the United States by total
            cargo tonnage and the largest petrochemical complex in the Western Hemisphere. The Port
            Authority manages public terminals including Barbours Cut Container Terminal, Bayport
            Container Terminal, and the Turning Basin — while private petrochemical and refining
            companies operate adjacent industrial facilities along the channel.
          </p>
          <p>
            Because the Port is a governmental entity with a board appointed by elected officials
            (Harris County Commissioners Court, Houston City Council, and other appointing
            authorities), its contracts, budgets, and capital decisions are subject to Texas
            public information laws and represent a major accountability target.
          </p>
        </div>
      ),
    },
    {
      id: 'governance',
      heading: 'Port Commission Governance',
      body: (
        <div>
          <p>
            Port Houston is governed by a seven-member Port Commission. Commissioners are
            appointed by a combination of appointing authorities, including the Harris County
            Commissioners Court (2 seats), Houston City Council (1 seat), and other Harris
            County taxing entities. Commissioners serve staggered terms and there is no direct
            public election for Port Commission seats.
          </p>
          <p>
            This appointed (non-elected) governance structure makes Commissioner appointment
            records, conflict-of-interest disclosures, and Commission meeting minutes
            especially important public records — since there is no direct voter accountability
            mechanism. Port Commission meetings are generally open to the public and minutes
            are posted on the Authority&rsquo;s website.
          </p>
          <p>
            The Commission sets policy, approves major contracts, and oversees the Executive
            Director. Capital projects above certain thresholds require Commission approval
            and appear on publicly posted agendas. Tracking Commission agenda items is one
            of the most reliable methods for identifying new contract awards.
          </p>
        </div>
      ),
    },
    {
      id: 'ship-channel-expansion',
      heading: 'Ship Channel Expansion & Dredging',
      body: (
        <div>
          <p>
            The Houston Ship Channel &ldquo;Project 11&rdquo; expansion — a major federally
            authorized deepening and widening program managed in partnership with the
            U.S. Army Corps of Engineers (USACE) — is one of the largest ongoing port
            capital programs in the country. The project involves deepening the channel
            from 45 to 46.5 feet and widening certain segments to allow two-way container
            ship traffic.
          </p>
          <p>
            The Port Authority provides the local cost-share for the federal USACE dredging
            program, and separately contracts for terminal maintenance dredging. Both streams
            of dredging contracts represent significant procurement activity — typically
            awarded to a small number of national marine dredging contractors including
            Great Lakes Dredge & Dock, Weeks Marine, and other large specialty firms.
          </p>
          <p>
            Key accountability questions on dredging:
          </p>
          <ul>
            <li>Who are the dredging contractors and what are the contract values and terms?</li>
            <li>What is the disposal plan for dredged material — and is it being disposed in ways that impact environmental justice communities?</li>
            <li>Are USACE cost-sharing agreements being fulfilled on schedule?</li>
            <li>Are maintenance dredging contracts meeting performance benchmarks?</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'environmental-justice',
      heading: 'Environmental Justice & Ship Channel Communities',
      body: (
        <div>
          <p>
            The Houston Ship Channel industrial corridor passes through or adjacent to some of
            the most economically disadvantaged and predominantly minority communities in Texas,
            including Manchester, Galena Park, Baytown, La Marque, and parts of East Houston.
            These &ldquo;fence-line communities&rdquo; bear disproportionate environmental
            burdens from port operations, petrochemical plants, and industrial facilities along
            the channel.
          </p>
          <p>
            Key environmental justice issues at the Port of Houston:
          </p>
          <ul>
            <li>
              <strong>Air quality</strong> — Ship emissions, cargo handling dust, and truck
              traffic contribute to elevated particulate matter and NOx in neighboring communities.
              TCEQ air monitoring data near Ship Channel facilities is a key public record.
            </li>
            <li>
              <strong>Industrial accidents</strong> — The Ship Channel corridor has experienced
              major industrial incidents, including the ITC Deer Park chemical facility fire (2019)
              and INEOS facility incidents. Port emergency response coordination and incident
              reporting are public records.
            </li>
            <li>
              <strong>Dredge spoil disposal</strong> — Placement of dredged material in
              confined disposal facilities (CDFs) near residential areas has historically raised
              contamination concerns.
            </li>
            <li>
              <strong>Community benefits</strong> — Whether Port expansion programs include
              community benefit agreements, local hiring requirements, or environmental mitigation
              commitments for impacted communities.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'public-records',
      heading: 'Public Records & TPIA Access',
      body: (
        <div>
          <p>
            The Port of Houston Authority is a governmental body subject to the Texas Public
            Information Act (TPIA, Government Code Ch. 552). TPIA requests should be submitted
            in writing to the Port&rsquo;s Public Information Officer at{' '}
            <strong>111 East Loop North, Houston, TX 77029</strong>, or through the online
            form at{' '}
            <a
              href="https://porthouston.com/about/public-information-requests/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              porthouston.com
            </a>
            .
          </p>
          <p>
            High-value records to request:
          </p>
          <ul>
            <li>All construction and dredging contracts $1M+ — vendor, amount, scope, amendments</li>
            <li>Port Commission meeting minutes and agendas (all open session items)</li>
            <li>Commissioner appointment records and conflict-of-interest disclosures</li>
            <li>Tenant lease agreements — terms, rent, duration for Ship Channel terminal operators</li>
            <li>Environmental permit applications submitted to TCEQ and USACE</li>
            <li>Annual audited financial statements and capital budget submissions</li>
            <li>Air quality and stormwater monitoring reports for Port-operated facilities</li>
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
            Priority investigative angles for the Port of Houston Authority:
          </p>
          <ul>
            <li>
              <strong>Dredging contractor concentration</strong> — Map all dredging contracts
              over the past 5 years by contractor, dollar value, and project. Identify whether
              a small number of firms dominate awards and whether change order rates are
              above industry norms.
            </li>
            <li>
              <strong>Commissioner appointment conflicts</strong> — Research the professional
              backgrounds and business affiliations of current Port Commissioners. Do any
              commissioners have financial relationships with Port tenants, contractors, or
              lobbying firms representing Port-connected industries?
            </li>
            <li>
              <strong>Environmental justice gap analysis</strong> — Use EPA EJScreen data and
              TCEQ inspection records to map the cumulative environmental burden on fence-line
              communities against Port Authority environmental mitigation spending.
            </li>
            <li>
              <strong>Terminal tenant lease terms</strong> — Are public terminal leases
              with private operators at market rate? Are renewal terms publicly justified?
              Do lease agreements include environmental performance requirements?
            </li>
            <li>
              <strong>Project 11 cost-share tracking</strong> — Verify Port&rsquo;s local
              cost-share contributions to USACE Project 11. Cross-reference USACE project
              status reports with Port budget disclosures to confirm matching commitments
              are being met on schedule.
            </li>
            <li>
              <strong>Incident response records</strong> — Request all emergency response
              plans, incident reports, and post-incident reviews from Port security and
              operations teams, covering the last 3 years.
            </li>
          </ul>
        </div>
      ),
    },
  ],

  sources: [
    { label: "Port of Houston Authority — porthouston.com",                      url: 'https://porthouston.com' },
    { label: "Port Commission Meetings — Agendas & Minutes",                     url: 'https://porthouston.com/about/port-commission/' },
    { label: "USACE — Galveston District, Houston Ship Channel Project 11",      url: 'https://www.swg.usace.army.mil/Business-With-Us/Project-Management/' },
    { label: "TCEQ — Houston Ship Channel Air Monitoring",                       url: 'https://www.tceq.texas.gov/airquality/monops/sites/hsc.html' },
    { label: "EPA EJScreen — Harris County Environmental Justice Data",          url: 'https://ejscreen.epa.gov' },
    { label: "Texas Public Information Act — Gov. Code Ch. 552",                 url: 'https://statutes.capitol.texas.gov/Docs/GV/htm/GV.552.htm' },
  ],

  related: [
    { label: 'Houston Companies Directory',                href: '/directory/houston/companies',                              category: 'Directory' },
    { label: 'Harris County Flood Control District',       href: '/directory/houston/government/harris-county-flood-control', category: 'Directory' },
    { label: "Harris County DA — Sean Teare",              href: '/directory/houston/government/harris-county-da',            category: 'Directory' },
    { label: 'Tip the Newsroom',                           href: '/service/tip-the-newsroom',                                 category: 'Contact' },
  ],
};

export default function PortHoustonPage() {
  return <EntityProfile page={PAGE} />;
}
