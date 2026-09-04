import type { Metadata } from 'next';
import Link from 'next/link';
import { EntityProfile } from '@/components/EntityProfile';
import type { EntityPageData } from '@/components/EntityProfile';

export const revalidate = 86400;

const SLUG = '/directory/austin/government/capital-metro';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Capital Metro | Austin Transit Authority Public Interest Profile',
  description:
    'Capital Metropolitan Transportation Authority (CapMetro) profile. Governance, Project Connect controversy, board oversight, contracts, and public records access in Austin, TX.',
  keywords: [
    'Capital Metro Austin', 'CapMetro Austin', 'Capital Metropolitan Transportation Authority',
    'Project Connect Austin', 'Austin transit authority', 'CapMetro accountability',
    'Austin transit public records', 'CapMetro board', 'Austin bus MetroRail',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Capital Metro | Austin Transit Authority Profile',
    description: 'Public interest profile of CapMetro — Project Connect, governance, contracts, and public records.',
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
    { label: 'Public Authority', color: 'sky' },
    { label: 'Transit', color: 'violet' },
    { label: 'Travis County', color: 'slate' },
    { label: 'Public Interest', color: 'rose' },
  ],

  title: 'Capital Metropolitan Transportation Authority',
  summary:
    'Capital Metropolitan Transportation Authority (Capital Metro or CapMetro) is the regional public transit authority serving Austin and surrounding communities. A political subdivision of the State of Texas, CapMetro operates bus, MetroRail, MetroRapid, and paratransit services and manages Project Connect — Austin\'s multi-billion dollar light rail expansion program.',

  entity: {
    name: 'Capital Metro',
    legalName: 'Capital Metropolitan Transportation Authority',
    officialSite: 'https://www.capmetro.org',
    officialSiteDisplay: 'capmetro.org',
    entityType: 'Regional Transit Authority',
    status: 'Active',
    established: '1985',
    region: 'Austin',
    jurisdiction: 'Travis County and member cities, Texas',
    seat: '2910 E 5th St, Austin, TX 78702',
    headcount: '~1,000+ employees',
    wikipedia: 'https://en.wikipedia.org/wiki/Capital_Metropolitan_Transportation_Authority',
    keyPeople: [
      { name: 'CapMetro Board of Directors', role: 'Governing body (appointed by member jurisdictions)' },
      { name: 'President / CEO', role: 'Executive leadership (verify current appointment)' },
    ],
    responsibilities: [
      'Bus service (local, express, MetroRapid)',
      'MetroRail commuter rail',
      'MetroAccess paratransit',
      'Project Connect light rail program management',
      'Transit planning and capital projects',
      'Fares, routes, and service levels',
    ],
    recordTypes: [
      'Board meeting agendas and minutes',
      'Annual budgets and financial audits',
      'Capital project contracts',
      'Project Connect program documents',
      'Procurement / RFP records',
      'Service performance data',
      'Texas Public Information Act responses',
    ],
    publicRecordsUrl: 'https://www.capmetro.org/about/leadership/board',
  },

  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: (
        <div>
          <p>
            Capital Metropolitan Transportation Authority (Capital Metro) is a political
            subdivision of the State of Texas established by Travis County voters in 1985. It
            is the regional transit provider for Austin and an 11-city service area covering
            most of Travis County. Its mission is to deliver public transit and manage major
            capital programs including Project Connect.
          </p>
          <p>
            Because Capital Metro is a political subdivision, its records are subject to the{' '}
            <strong>Texas Public Information Act</strong>. Board meetings are public, and
            agendas, minutes, contracts, and financial records are TPIA-requestable.
          </p>
          <p>
            Capital Metro is a major spender of public funds — its annual budget exceeds $500
            million, and Project Connect's authorized capital program totals several billion
            dollars. The scale of public spending makes CapMetro a significant subject of
            investigative public interest.
          </p>
        </div>
      ),
    },
    {
      id: 'project-connect',
      heading: 'Project Connect | Light Rail Program',
      body: (
        <div>
          <p>
            <strong>Project Connect</strong> is Austin's largest-ever public transit capital
            program. Authorized by Austin voters in November 2020, the program was originally
            valued at approximately $7.1 billion and encompassed multiple light rail lines,
            a downtown tunnel, and bus rapid transit expansion.
          </p>
          <p>
            The program has been subject to significant public scrutiny due to:
          </p>
          <ul>
            <li>
              <strong>Cost escalation</strong> — Rising construction costs caused substantial
              revisions to the program scope. By the mid-2020s, the program had been
              restructured, with some elements delayed or descoped due to funding gaps between
              the voter-authorized program and actual construction estimates.
            </li>
            <li>
              <strong>Governance complexity</strong> — Project Connect is overseen by a
              joint governance structure between CapMetro and the City of Austin, with
              concurrent federal funding involvement (FTA New Starts/Small Starts program).
              This creates a multi-layered accountability structure.
            </li>
            <li>
              <strong>Federal funding dependency</strong> — Significant portions of Project
              Connect are contingent on federal funding commitments. Federal grant agreements
              are public record through the FTA.
            </li>
          </ul>
          <p>
            Project Connect program documents, budgets, and program management contracts are
            public record and available through CapMetro board materials and TPIA requests.
          </p>
        </div>
      ),
    },
    {
      id: 'governance',
      heading: 'Governance & Board Structure',
      body: (
        <div>
          <p>
            Capital Metro is governed by a <strong>Board of Directors</strong> whose seats are
            apportioned among member jurisdictions based on sales tax contribution. The City
            of Austin, as the largest contributing jurisdiction, holds the most board seats.
          </p>
          <ul>
            <li>
              <strong>Board appointments</strong> — Board members are appointed by their
              respective city councils and county commissioners court. Appointments are
              political and are public record.
            </li>
            <li>
              <strong>Board meetings</strong> — Public meetings held regularly. Agendas are
              posted 72 hours in advance per Texas Open Meetings Act requirements.
            </li>
            <li>
              <strong>Texas Open Meetings Act (TOMA)</strong> — CapMetro's board is subject
              to TOMA, meaning deliberations must occur in public except for narrowly defined
              executive session matters.
            </li>
          </ul>
          <p>
            The President/CEO is the executive officer, hired and evaluated by the Board.
            Executive compensation is public record as an employee of a political subdivision.
          </p>
        </div>
      ),
    },
    {
      id: 'public-interest-issues',
      heading: 'Public Interest Issues',
      body: (
        <div>
          <p>Key areas of ongoing public interest at Capital Metro:</p>
          <ul>
            <li>
              <strong>Project Connect cost and scope changes</strong> — Documented changes to
              the program's scope from the voter-authorized plan are subject to public scrutiny.
              Board resolutions authorizing scope changes are public record.
            </li>
            <li>
              <strong>Contractor and program management oversight</strong> — Large program
              management contracts for Project Connect are public procurement records, including
              the selection process, contract terms, and change orders.
            </li>
            <li>
              <strong>Service reliability</strong> — Bus and rail reliability metrics are
              published in quarterly performance reports presented to the Board.
            </li>
            <li>
              <strong>Labor relations</strong> — CapMetro's workforce includes represented
              employees. Labor agreements are public record.
            </li>
            <li>
              <strong>Financial audits</strong> — Annual independent audits are presented to
              the Board and are public record.
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
            Capital Metro is subject to the Texas Public Information Act as a political
            subdivision. Key records to request:
          </p>
          <ul>
            <li><strong>Board agendas and minutes</strong> — available on the CapMetro website; archived minutes go back years.</li>
            <li><strong>Annual financial audits</strong> — audited financial statements, published annually.</li>
            <li><strong>Project Connect contracts</strong> — program management, design, and construction contracts.</li>
            <li><strong>RFP and procurement records</strong> — bid submissions, evaluation scores, and award decisions.</li>
            <li><strong>Executive compensation</strong> — salary and benefits for the President/CEO and senior staff.</li>
            <li><strong>Federal grant agreements</strong> — FTA agreements are federal records accessible through FTA's website or FOIA requests to FTA.</li>
          </ul>
          <p>
            TPIA requests can be submitted to CapMetro's Public Information Officer. Board
            materials are posted online before each meeting at{' '}
            <a href="https://www.capmetro.org/about/leadership/board" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
              capmetro.org/about/leadership/board
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
            Objective Wire covers Capital Metro as part of its Austin public accountability
            beat, with particular focus on Project Connect program management, procurement
            transparency, and board oversight.
          </p>
          <ul>
            <li>
              <Link href="/local/austin" className="text-blue-400 hover:text-blue-300 underline">Austin investigative news</Link>
              {' '}— primary Austin coverage hub.
            </li>
            <li>
              <Link href="/directory/austin/government" className="text-blue-400 hover:text-blue-300 underline">Austin government directory</Link>
              {' '}— other Travis County entities documented by OW.
            </li>
            <li>
              <Link href="/service/tip-the-newsroom" className="text-blue-400 hover:text-blue-300 underline">Tip the Newsroom</Link>
              {' '}— documents, contracts, or tips about CapMetro under full source protection.
            </li>
          </ul>
        </div>
      ),
    },
  ],

  related: [
    { label: 'Austin Energy', href: '/directory/austin/government/austin-energy', category: 'Government' },
    { label: 'Austin City Council', href: '/directory/austin/government', category: 'Government' },
    { label: 'Travis County DA', href: '/directory/austin/government/travis-county-da', category: 'Government' },
    { label: 'Tyler Technologies', href: '/directory/austin/companies/tyler-technologies', category: 'Companies' },
  ],

  sources: [
    { label: 'Capital Metro | Official Website — capmetro.org', url: 'https://www.capmetro.org' },
    { label: 'Capital Metro Board of Directors | capmetro.org/about/leadership/board', url: 'https://www.capmetro.org/about/leadership/board' },
    { label: 'Capital Metropolitan Transportation Authority | Wikipedia', url: 'https://en.wikipedia.org/wiki/Capital_Metropolitan_Transportation_Authority' },
    { label: 'Texas Public Information Act | Texas Government Code Chapter 552', url: 'https://statutes.capitol.texas.gov/Docs/GV/htm/GV.552.htm' },
    { label: 'Texas Open Meetings Act | Texas Government Code Chapter 551', url: 'https://statutes.capitol.texas.gov/Docs/GV/htm/GV.551.htm' },
    { label: 'FTA Capital Investment Grants (CIG) Program — New Starts', url: 'https://www.transit.dot.gov/capital-investments' },
  ],
};

export default function CapitalMetroPage() {
  return <EntityProfile page={PAGE} />;
}
