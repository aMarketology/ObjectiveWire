import type { Metadata } from 'next';
import Link from 'next/link';
import { EntityProfile } from '@/components/EntityProfile';
import type { EntityPageData } from '@/components/EntityProfile';

export const revalidate = 86400;

const SLUG = '/directory/austin/government/travis-county-da';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Travis County DA | District Attorney Office, Austin TX',
  description:
    'Travis County District Attorney office profile. Jose P. Garza, elected 2020. Jurisdiction, divisions, budget, key cases, and public records access for Travis County.',
  keywords: [
    'Travis County District Attorney',
    'Travis County DA',
    'Jose Garza DA',
    'Jose Garza Travis County',
    'Travis County DA office',
    'Austin district attorney',
    'Travis County felony prosecutor',
    'Ronald Earle Building Austin',
    'Travis County public records DA',
    'Austin Texas prosecutor',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Travis County DA | District Attorney Office, Austin TX',
    description:
      'Full profile of the Travis County District Attorney office. Jose P. Garza, elected 2020. Divisions, case priorities, and public records contact.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'Objective Wire',
    authors: ['Objective Wire Investigations'],
    publishedTime: '2026-06-13T00:00:00Z',
    modifiedTime: '2026-06-13T00:00:00Z',
    section: 'Government',
    tags: ['Travis County', 'District Attorney', 'Jose Garza', 'Austin Texas'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travis County DA | District Attorney Profile',
    description: 'Jose P. Garza, first elected 2020. Prosecutes felonies, juvenile cases, and civil commitment in Travis County.',
  },
};

// =============================================================================
// PAGE DATA
// =============================================================================

const PAGE: EntityPageData = {
  slug: SLUG,
  canonicalUrl: PAGE_URL,
  datePublished: '2026-06-13',
  dateModified: '2026-06-13',

  category: 'Government',
  tags: [
    { label: 'Travis County', color: 'sky' },
    { label: 'Elected Office', color: 'violet' },
    { label: 'Prosecution', color: 'rose' },
    { label: 'Austin', color: 'slate' },
  ],

  title: 'Travis County District Attorney',
  summary:
    'The Travis County District Attorney is the elected chief prosecutor for Travis County, Texas, responsible for felony criminal prosecutions, juvenile criminal cases, and civil commitment proceedings. Jose P. Garza has served as DA since January 2021 and was re-elected in 2024.',

  entity: {
    name: 'Travis County District Attorney',
    legalName: "Travis County District Attorney's Office",
    officialSite: 'https://districtattorney.traviscountytx.gov',
    officialSiteDisplay: 'districtattorney.traviscountytx.gov',

    entityType: 'Elected County Office',
    status: 'Active',

    established: '1840',
    region: 'Austin',
    jurisdiction: 'Travis County, Texas',
    seat: 'Ronald Earle Building, 416 W. 11th Street, Austin, TX 78701',

    headcount: '200+ staff',
    budget: 'Part of Travis County Justice budget',

    keyPeople: [
      {
        name: 'Jose P. Garza',
        role: 'District Attorney',
        link: 'https://districtattorney.traviscountytx.gov',
      },
    ],

    responsibilities: [
      'Prosecute felony criminal offenses',
      'Handle juvenile criminal cases',
      'Represent DFPS in family court proceedings',
      'Civil commitment petitions',
      'Civil rights litigation',
      'Victim services',
    ],

    recordTypes: [
      'Case filings (public docket)',
      'Indictments',
      'Plea agreements',
      'Press releases',
      'Annual reports',
    ],

    publicRecordsUrl: 'https://districtattorney.traviscountytx.gov',
    wikipedia: 'https://en.wikipedia.org/wiki/Travis_County_District_Attorney',
  },

  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: (
        <div>
          <p>
            The Travis County District Attorney is the chief felony prosecutor for Travis County, Texas.
            The office operates under the Texas Code of Criminal Procedure and is responsible for
            prosecuting all felony offenses within Travis County jurisdiction, which includes the
            City of Austin and surrounding municipalities.
          </p>
          <p>
            The DA is an elected, partisan position serving a four-year term. The office is one of the
            most scrutinized prosecution offices in Texas given Austin's political profile as the state
            capital and one of the fastest-growing counties in the country.
          </p>
          <p>
            Objective Wire covers the Travis County DA's office as a primary accountability beat. The
            office produces public records including case filings, grand jury reports, and press
            statements that form the evidentiary basis for local investigative reporting. See{' '}
            <Link href="/local/austin" className="text-blue-400 hover:text-blue-300 underline">
              Austin investigative coverage
            </Link>{' '}
            for OW reporting tied to this office.
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
            Travis County was established by the Republic of Texas in 1840, and the elected DA position
            has existed in some form since the county's founding. The office has evolved from a single
            part-time attorney into a full department with specialized divisions covering violent crime,
            child protection, mental health diversion, and civil rights.
          </p>
          <p>
            The physical seat of the office is the Ronald Earle Building at{' '}
            <strong>416 West 11th Street, Austin, TX 78701</strong>, named after Ronnie Earle, who
            served as Travis County DA from 1976 to 2008 and was known for high-profile prosecutions
            of public officials.
          </p>
          <p>
            The DA's office operates under the oversight of the Travis County Commissioners Court for
            budgetary purposes but maintains prosecutorial independence under Texas law. Public contact
            for records and general inquiries is{' '}
            <a
              href="mailto:TCDAPublic@traviscountytx.gov"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              TCDAPublic@traviscountytx.gov
            </a>
            .
          </p>
        </div>
      ),
    },
    {
      id: 'jose-garza',
      heading: 'Jose P. Garza | Current District Attorney',
      body: (
        <div>
          <p>
            <strong>Jose P. Garza</strong> was first elected Travis County District Attorney in November
            2020, defeating incumbent Margaret Moore in the Democratic primary before running
            unopposed in the general election. He took office on January 1, 2021 and was re-elected to
            a second four-year term in November 2024, beginning that term on January 2, 2025.
          </p>
          <p>
            Before running for DA, Garza served as the legal director of the Texas Defender Service,
            a nonprofit focused on capital defense and criminal justice reform. His platform in 2020
            centered on reducing mass incarceration, prosecutorial accountability, and expanding
            diversion programs for low-level and mental health cases.
          </p>
          <p>
            As DA, Garza has faced criticism from state officials over his office's charging
            decisions in high-profile cases, including a 2026 coalition effort in which his office
            joined other Texas DAs to assert jurisdiction to prosecute federal law enforcement
            officers who violate state law within Travis County.
          </p>
          <p>
            Garza's office is located at the Ronald Earle Building and he can be contacted via the
            official DA public contact:{' '}
            <a
              href="mailto:TCDAPublic@traviscountytx.gov"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              TCDAPublic@traviscountytx.gov
            </a>
            .
          </p>
        </div>
      ),
    },
    {
      id: 'office-structure',
      heading: 'Office Structure | Divisions',
      body: (
        <div>
          <p>
            The Travis County DA's office is organized into specialized divisions. As documented on
            the official website and in public records:
          </p>
          <ul>
            <li>
              <strong>Trial Court Division</strong> - Primary felony prosecution division handling the
              full docket of serious criminal cases.
            </li>
            <li>
              <strong>Special Victims Division</strong> - Handles sexual assault, family violence,
              and human trafficking cases with dedicated prosecutors and investigators.
            </li>
            <li>
              <strong>CPS, Child Abuse, and Child Protection Team</strong> - Coordinates with Child
              Protective Services on criminal prosecutions involving child victims.
            </li>
            <li>
              <strong>Victim Services Division</strong> - Provides direct services to crime victims
              including advocacy, court accompaniment, and referrals.
            </li>
            <li>
              <strong>Mental Health and Pre-Indictment Units</strong> - Handles diversion programs
              for defendants with serious mental illness, directing cases toward treatment rather than
              incarceration where appropriate.
            </li>
            <li>
              <strong>Violence Prevention and Youth Justice Division</strong> - Focuses on juvenile
              criminal cases and community-based intervention programs.
            </li>
            <li>
              <strong>Civil Rights Litigation</strong> - Handles civil commitment petitions and civil
              rights enforcement matters.
            </li>
            <li>
              <strong>Investigations Division</strong> - In-house investigators supporting felony
              prosecutions, public integrity cases, and complex investigations.
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
            The Travis County DA's office is subject to the Texas Public Information Act (Texas
            Government Code Chapter 552). The following records are generally accessible:
          </p>
          <ul>
            <li>
              <strong>Case filings</strong> - Criminal case filings are part of the public court
              record, accessible through the Travis County District Clerk.
            </li>
            <li>
              <strong>Press releases</strong> - Available directly on the DA's official website.
            </li>
            <li>
              <strong>Indictments</strong> - Grand jury indictments are public records once unsealed.
            </li>
            <li>
              <strong>Plea agreements</strong> - Filed as part of the court record and accessible via
              the District Clerk.
            </li>
            <li>
              <strong>Annual reports</strong> - The office publishes periodic reports on case
              outcomes and office operations.
            </li>
          </ul>
          <p>
            Public records requests go to the General Counsel's office. The documented public
            contact is{' '}
            <a
              href="mailto:TCDAPublic@traviscountytx.gov"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              TCDAPublic@traviscountytx.gov
            </a>
            .
          </p>
          <p>
            Court records including criminal case filings, docket entries, and judgments are
            maintained by the Travis County District Clerk and searchable online at the Travis
            County District Clerk's public portal.
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
            Objective Wire covers the Travis County DA's office as part of its Austin investigative
            beat. Coverage focuses on charging decisions, public integrity cases, civil rights
            prosecution, and accountability journalism related to the criminal justice system in
            Travis County.
          </p>
          <p>
            Related coverage:
          </p>
          <ul>
            <li>
              <Link href="/local/austin" className="text-blue-400 hover:text-blue-300 underline">
                Austin investigative news
              </Link>{' '}
              - OW's primary Austin coverage hub.
            </li>
            <li>
              <Link href="/directory/austin/government" className="text-blue-400 hover:text-blue-300 underline">
                Austin government directory
              </Link>{' '}
              - Other Travis County government entities documented by OW.
            </li>
            <li>
              <Link href="/service/tip-the-newsroom" className="text-blue-400 hover:text-blue-300 underline">
                Tip the Newsroom
              </Link>{' '}
              - Submit documents or tips related to the DA's office under full source protection.
            </li>
          </ul>
        </div>
      ),
    },
  ],

  related: [
    {
      label: 'Travis County Sheriff',
      href: '/directory/austin/government',
      category: 'Government',
    },
    {
      label: 'Austin Police Department',
      href: '/directory/austin/government',
      category: 'Government',
    },
    {
      label: 'Travis County Courts',
      href: '/directory/austin/government',
      category: 'Government',
    },
    {
      label: 'Austin Government Directory',
      href: '/directory/austin/government',
      category: 'Directory',
    },
  ],

  sources: [
    {
      label: "Travis County District Attorney's Office | Official Website",
      url: 'https://districtattorney.traviscountytx.gov',
    },
    {
      label: 'Travis County District Attorney | Ronald Earle Building, 416 W. 11th Street, Austin TX 78701',
      url: 'https://districtattorney.traviscountytx.gov',
    },
    {
      label: 'Texas Code of Criminal Procedure | Chapter 2 — Duties of Public Prosecutor',
      url: 'https://statutes.capitol.texas.gov/Docs/CR/htm/CR.2.htm',
    },
    {
      label: 'Travis County November 2024 Election Results | Travis County Clerk',
      url: 'https://traviscountytx.gov/elections',
    },
    {
      label: 'Texas Public Information Act | Texas Government Code Chapter 552',
      url: 'https://statutes.capitol.texas.gov/Docs/GV/htm/GV.552.htm',
    },
    {
      label: "DA Jose Garza office email: TCDAPublic@traviscountytx.gov | Travis County DA's Office",
      url: 'https://districtattorney.traviscountytx.gov',
    },
  ],
};

// =============================================================================
// PAGE COMPONENT
// =============================================================================

export default function TravisCountyDAPage() {
  return <EntityProfile page={PAGE} />;
}
