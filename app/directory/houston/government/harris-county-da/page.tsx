import type { Metadata } from 'next';
import Link from 'next/link';
import { EntityProfile } from '@/components/EntityProfile';
import type { EntityPageData } from '@/components/EntityProfile';

export const revalidate = 86400;

const SLUG = '/directory/houston/government/harris-county-da';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;

export const metadata: Metadata = {
  title: "Harris County DA | Sean Teare | District Attorney's Office",
  description:
    "Harris County District Attorney's Office profile. DA Sean Teare took office January 2025. Covers office structure, investigative priorities, public records access, and accountability beats.",
  keywords: [
    'Harris County District Attorney', 'Sean Teare', 'Harris County DA',
    'dao.harriscountytx.gov', 'Harris County prosecutors', 'Houston DA office',
    'Texas public records DA', 'TPIA Harris County', 'Kim Ogg successor',
    'Harris County criminal justice', 'Houston DA investigations',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Harris County DA | Sean Teare | Objective Wire",
    description: "Primary-source profile of the Harris County District Attorney's Office and DA Sean Teare, who took office January 2025.",
    type: 'article',
    url: PAGE_URL,
    siteName: 'Objective Wire',
    authors: ['Objective Wire Investigations'],
    publishedTime: '2026-06-13T00:00:00Z',
    modifiedTime: '2026-06-13T00:00:00Z',
    section: 'Government',
    tags: ['Harris County', 'District Attorney', 'Sean Teare', 'Houston Texas'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Harris County DA | Sean Teare Profile",
    description: 'Sean Teare, elected 2024. Prosecutes felonies in Harris County, the third-most-populous county in the US.',
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
    { label: 'Elected Office', color: 'violet' },
    { label: 'Prosecution', color: 'rose' },
    { label: 'Houston', color: 'slate' },
  ],

  title: "Harris County District Attorney's Office",
  summary:
    "The Harris County District Attorney's Office is the chief felony prosecution authority for Harris County, Texas — the third-most-populous county in the United States. Sean Teare was elected in 2024 and took office January 1, 2025, succeeding Kim Ogg.",

  entity: {
    name: "Harris County District Attorney's Office",
    legalName: "Harris County District Attorney's Office",
    officialSite: 'https://dao.harriscountytx.gov',
    officialSiteDisplay: 'dao.harriscountytx.gov',

    entityType: 'Elected County Office',
    status: 'Active',

    established: '1837',
    region: 'Houston',
    jurisdiction: 'Harris County, Texas',
    seat: '1201 Franklin St, Houston, TX 77002',

    headcount: '~900 (prosecutors, investigators, victim services staff)',
    budget: '$90M+ (FY 2025 est.)',

    keyPeople: [
      {
        name: 'Sean Teare',
        role: 'District Attorney (elected 2024, office Jan 1, 2025)',
        link: 'https://dao.harriscountytx.gov',
      },
    ],

    responsibilities: [
      'Prosecute all felony offenses in Harris County',
      'Prosecute Class A and B misdemeanors',
      'Domestic violence prosecution bureau',
      'Conviction Integrity Unit — wrongful conviction review',
      'Special Crimes Bureau — public corruption, organized crime',
      'Victim services and trauma-informed prosecution',
      'Diversion programs for non-violent offenders',
    ],

    recordTypes: [
      'Felony indictments and charging decisions',
      'Case disposition data by division',
      'Grand jury referral logs',
      'Officer-involved shooting prosecutorial decisions',
      'Annual reports and budget submissions',
      'Conviction Integrity Unit case dockets',
    ],

    publicRecordsUrl: 'https://dao.harriscountytx.gov',
    wikipedia: 'https://en.wikipedia.org/wiki/Harris_County_District_Attorney',
  },

  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: (
        <div>
          <p>
            The Harris County District Attorney&rsquo;s Office (HCDAO) is responsible for prosecuting
            all felony offenses and Class A and B misdemeanors committed within Harris County —
            the third-most-populous county in the United States, home to roughly 4.8 million residents
            and the City of Houston.
          </p>
          <p>
            The office employs approximately 900 staff, including assistant district attorneys,
            criminal investigators, and victim services coordinators. It is one of the largest
            county prosecution offices in the country. Sean Teare, a former defense attorney and
            ex-prosecutor under predecessor Kim Ogg, won the 2024 Democratic primary and general
            election and took office January 1, 2025.
          </p>
          <p>
            Objective Wire covers the Harris County DA&rsquo;s office as a core Houston accountability
            beat, tracking prosecutorial patterns, public records filings, grand jury activity, and
            the office&rsquo;s response to HPD officer-involved shooting cases. See{' '}
            <Link href="/local/houston" className="text-blue-400 hover:text-blue-300 underline">
              Houston investigative coverage
            </Link>{' '}
            for OW reporting tied to this office.
          </p>
        </div>
      ),
    },
    {
      id: 'transition',
      heading: 'Transition: Ogg to Teare',
      body: (
        <div>
          <p>
            Kim Ogg served two terms as Harris County DA (2017–2024), making her one of the
            longest-tenured DAs in the county&rsquo;s recent history. Her tenure was marked by
            early bail reform support and later feuds with the Harris County Commissioners Court
            and controversy over office management. Ogg lost the 2024 Democratic primary to Sean Teare.
          </p>
          <p>
            Teare worked as an assistant district attorney under Ogg before leaving for private
            defense practice, giving him a dual perspective on the office&rsquo;s internal workings.
            His transition priorities upon taking office included restructuring the Intake Division,
            which critics said had accumulated backlogs and inconsistent charging standards under Ogg.
          </p>
          <p>
            Teare has also publicly committed to recusing himself from any prosecution decisions
            involving the former staff of Harris County Judge Lina Hidalgo, owing to conflicts that
            arose during the Ogg era regarding the Hidalgo administration prosecution controversy.
          </p>
        </div>
      ),
    },
    {
      id: 'structure',
      heading: 'Office Structure & Divisions',
      body: (
        <div>
          <p>
            The HCDAO is organized into specialized divisions that handle different offense categories
            and special functions:
          </p>
          <ul>
            <li>
              <strong>Felony Division</strong> — Major crimes, murder, robbery, sexual assault,
              gang prosecutions, and violent offense units.
            </li>
            <li>
              <strong>Misdemeanor Division</strong> — Class A and B misdemeanor prosecution
              in Harris County Criminal Court at Law.
            </li>
            <li>
              <strong>Domestic Violence Bureau</strong> — Specialized prosecutors and investigators
              focused on family violence felonies and misdemeanors, including lethality assessment.
            </li>
            <li>
              <strong>Intake Division</strong> — The front-door unit that screens all incoming
              arrests submitted by HPD, constables, and the Sheriff&rsquo;s office and makes
              initial charging decisions. Teare identified this as a priority reform area.
            </li>
            <li>
              <strong>Special Crimes Bureau</strong> — Public corruption, organized crime,
              fraud, and government misconduct.
            </li>
            <li>
              <strong>Conviction Integrity Unit (CIU)</strong> — Reviews claims of wrongful
              conviction and manages post-conviction DNA requests.
            </li>
            <li>
              <strong>Victim Services</strong> — Counselors and advocates embedded in prosecution
              teams for trauma-informed case handling.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'priorities',
      heading: "Teare's Stated Priorities",
      body: (
        <div>
          <p>
            Sean Teare entered office with four publicly stated reform priorities:
          </p>
          <ol>
            <li>
              <strong>Intake Division Reform</strong> — Reduce case screening delays and
              inconsistent charging decisions by restructuring the intake team and improving
              communication with law enforcement agencies submitting arrests.
            </li>
            <li>
              <strong>Domestic Violence Bureau Strengthening</strong> — Increase case
              follow-through rates, reduce victim recantation-driven dismissals, and improve
              coordination with DV shelters and victim advocates.
            </li>
            <li>
              <strong>Misdemeanor Bail Reform</strong> — Shift misdemeanor bail practices
              from ability-to-pay to risk-based pretrial assessment, consistent with the
              O&rsquo;Donnell consent decree that reformed Harris County bail.
            </li>
            <li>
              <strong>Non-violent Drug Diversion</strong> — Expand diversion pathways for
              first-time and non-violent drug offenders to reduce cycling through the jail,
              freeing prosecutor resources for violent crime.
            </li>
          </ol>
        </div>
      ),
    },
    {
      id: 'public-records',
      heading: 'Public Records & TPIA Access',
      body: (
        <div>
          <p>
            The Harris County DA&rsquo;s Office is a governmental body subject to the Texas Public
            Information Act (TPIA, Government Code Ch. 552). Written TPIA requests should be
            submitted to the Public Information Officer at{' '}
            <strong>1201 Franklin St, Houston, TX 77002</strong>, or electronically through the
            office&rsquo;s website.
          </p>
          <p>
            Key records categories to request from the HCDAO:
          </p>
          <ul>
            <li>Charging decisions by offense category and division (aggregate, redacted)</li>
            <li>Case declination rates — arrests submitted vs. charges filed, by law enforcement agency</li>
            <li>Officer-involved shooting referrals — which cases were sent to grand jury vs. declined</li>
            <li>Conviction Integrity Unit case inventory and disposition log</li>
            <li>Internal office policies and training materials on intake screening</li>
            <li>Budget submissions and salary schedules (attorney retention data)</li>
          </ul>
          <p>
            The office must respond within 10 business days. Cost-exceeding responses require a
            written estimate before production. Withheld records can be appealed to the Texas
            Attorney General&rsquo;s Open Records Division (
            <a
              href="https://www.texasattorneygeneral.gov/open-government"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              texasattorneygeneral.gov
            </a>
            ) within 60 days of the withholding notice.
          </p>
        </div>
      ),
    },
    {
      id: 'investigation-angles',
      heading: 'Investigation Angles',
      body: (
        <div>
          <p>
            Priority investigative beats for the Harris County DA&rsquo;s Office:
          </p>
          <ul>
            <li>
              <strong>HPD use-of-force prosecutorial decisions</strong> — Track which
              officer-involved shooting cases are referred to grand jury, declined, or deferred
              year-over-year. Compare before and after the Teare transition.
            </li>
            <li>
              <strong>Intake Division throughput</strong> — Compare arrest submission volumes
              from HPD and constable precincts against charges filed, by month and division.
              Identify categories with high declination or delay.
            </li>
            <li>
              <strong>Domestic violence case attrition</strong> — Map case filing rates,
              dismissal rates, and conviction rates under Ogg vs. Teare, specifically for
              family violence felonies.
            </li>
            <li>
              <strong>Diversion program enrollment</strong> — Once Teare&rsquo;s new
              diversion programs launch, track enrollment numbers, graduation rates, and
              recidivism data as public interest metrics.
            </li>
            <li>
              <strong>Conviction Integrity Unit</strong> — Cases under active review,
              DNA testing requests pending, exonerations completed, and timelines.
              Harris County has a history of wrongful convictions under prior administrations.
            </li>
            <li>
              <strong>Staffing and attrition</strong> — Attorney vacancy rates, pay-scale
              comparisons to Travis County and Dallas County, and year-over-year turnover
              under new leadership.
            </li>
          </ul>
        </div>
      ),
    },
  ],

  sources: [
    { label: "Harris County DA — dao.harriscountytx.gov",                url: 'https://dao.harriscountytx.gov' },
    { label: "Harris County Budget Office",                               url: 'https://budget.harriscountytx.gov' },
    { label: "Texas SOS — 2024 Harris County DA Election Results",        url: 'https://results.sos.state.tx.us' },
    { label: "Texas Public Information Act — Gov. Code Ch. 552",          url: 'https://statutes.capitol.texas.gov/Docs/GV/htm/GV.552.htm' },
    { label: "Texas AG Open Records Division",                            url: 'https://www.texasattorneygeneral.gov/open-government/residents/open-records-requests' },
    { label: "Innocence Project of Texas — Harris County Exonerations",   url: 'https://innocenceproject.org' },
  ],

  related: [
    { label: 'Houston Government Directory',       href: '/directory/houston/government',                              category: 'Directory' },
    { label: 'Harris County Flood Control',        href: '/directory/houston/government/harris-county-flood-control', category: 'Directory' },
    { label: 'Travis County DA — Austin',          href: '/directory/austin/government/travis-county-da',             category: 'Directory' },
    { label: 'Tip the Newsroom',                   href: '/service/tip-the-newsroom',                                 category: 'Contact' },
  ],
};

export default function HarrisCountyDAPage() {
  return <EntityProfile page={PAGE} />;
}
