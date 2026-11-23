import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/local/houston/carmen-turner-fort-bend-tax-assessor-indictment';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = 'https://www.objectivewire.org/thumbnails/local-houston-carmen-turner-fort-bend-tax-assessor-indictment.jpg';

export const metadata: Metadata = {
  title: "Ghost Payroll & Wire Fraud: Inside the Federal Indictment of Fort Bend Tax Assessor Carmen Turner",
  description:
    'Federal prosecutors in the Southern District of Texas charged Fort Bend County Tax Assessor-Collector Carmen Turner alongside co-defendants Shemerrylyn Regina Fields and Victor Calvin Ewing in an alleged ghost payroll and wire fraud scheme.',
  keywords: [
    'Fort Bend County Tax Assessor Carmen Turner federal indictment',
    'Carmen Patrice Turner wire fraud theft of government funds',
    'Shemerrylyn Regina Fields Victor Calvin Ewing indictment',
    'Fort Bend County ghost payroll scheme',
    'Southern District of Texas Case 4:26-cr-677',
    'Fort Bend County tax office audit',
    'Texas removal law elected official indictment',
    'Richmond Texas federal court',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Ghost Payroll & Wire Fraud: Inside the Federal Indictment of Fort Bend Tax Assessor Carmen Turner",
    description:
      'Federal prosecutors in the Southern District of Texas charged Fort Bend County Tax Assessor-Collector Carmen Turner alongside co-defendants Shemerrylyn Regina Fields and Victor Calvin Ewing in an alleged ghost payroll and wire fraud scheme.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'Objective Wire',
    authors: ['Carson Scott'],
    publishedTime: '2026-11-23T21:00:00Z',
    modifiedTime: '2026-11-23T21:00:00Z',
    section: 'Investigations',
    tags: [
      'Carmen Turner',
      'Fort Bend County',
      'Southern District of Texas',
      'Public Corruption',
      'Wire Fraud',
      'Ghost Payroll',
      'Houston Local',
    ],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Federal indictment of Fort Bend County Tax Assessor Carmen Turner and co-defendants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ghost Payroll & Wire Fraud: Inside the Federal Indictment of Carmen Turner",
    description:
      'Federal prosecutors allege Fort Bend County Tax Assessor Carmen Turner diverted county payroll to personal associates for unperformed work.',
    images: [OG_IMAGE],
  },
};

export default function CarmenTurnerIndictmentDeepDivePage() {
  return (
    <>
      <NewsArticleSchema
        title="Ghost Payroll & Wire Fraud: Inside the Federal Indictment of Fort Bend Tax Assessor Carmen Turner"
        description="Federal prosecutors in the Southern District of Texas charged Fort Bend County Tax Assessor-Collector Carmen Turner alongside co-defendants Shemerrylyn Regina Fields and Victor Calvin Ewing in an alleged ghost payroll and wire fraud scheme."
        author="Carson Scott"
        authorUrl="https://www.objectivewire.org/authors/carson-scott"
        publishedTime="2026-11-23T21:00:00Z"
        modifiedTime="2026-11-23T21:00:00Z"
        articleUrl={PAGE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Investigations"
        keywords={[
          'Fort Bend County Tax Assessor Carmen Turner federal indictment',
          'Carmen Patrice Turner wire fraud theft of government funds',
          'Shemerrylyn Regina Fields Victor Calvin Ewing indictment',
          'Fort Bend County ghost payroll scheme',
          'Southern District of Texas Case 4:26-cr-677',
        ]}
      />

      <NewsArticle
        title="Public Payroll Under Federal Scrutiny: Unpacking the Indictment of Carmen Turner and Co-Defendants"
        subtitle="One month after the U.S. Attorney’s Office for the Southern District of Texas unsealed a nine-count federal indictment against Fort Bend County Tax Assessor-Collector Carmen Patrice Turner, federal court filings, timesheet metadata, and forensic payroll audits detail how county funds were allegedly diverted to personal associates."
        category="Investigations"
        categoryColor="red"
        topicTag="investigations"
        publishDate="November 23, 2026"
        readTime="7 min read"
        author={{
          name: 'Carson Scott',
          role: 'Chief Investigative Writer, Objective Wire',
          authorSlug: 'carson-scott',
        }}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Houston & Greater Gulf Coast', item: '/local/houston' },
          { name: 'Carmen Turner Federal Indictment', item: SLUG },
        ]}
        keyTakeaways={[
          'United States v. Turner et al. (Case No. 4:26-cr-677) charges Fort Bend County Tax Assessor-Collector Carmen Patrice Turner, 65, alongside co-defendants Shemerrylyn Regina Fields, 47, and Victor Calvin Ewing, 69.',
          'The nine-count indictment includes conspiracy, theft concerning programs receiving federal funds, and substantive wire fraud counts stemming from spring 2024 automated electronic direct deposits.',
          'Prosecutors allege Shemerrylyn Fields collected full-time county salary and benefits while actually serving as a personal caretaker for Turner’s mother.',
          'Co-defendant Victor Ewing was placed on county payroll as a department coordinator while simultaneously holding employment at Chicago O\'Hare International Airport and performing no measurable county work.',
          'Despite public calls for resignation from the Fort Bend County Commissioners Court, Turner remains in office; Texas law requires a separate civil district court removal proceeding prior to any criminal conviction.',
        ]}
        keyTakeawaysColor="red"
        faqItems={[
          {
            question: 'What are the charges against Carmen Turner in Case No. 4:26-cr-677?',
            answer:
              'The nine-count federal indictment unsealed in the Southern District of Texas charges Turner with conspiracy, theft concerning programs receiving federal funds (18 U.S.C. § 666), and multiple counts of wire fraud (18 U.S.C. § 1343).',
          },
          {
            question: 'Who are the co-defendants charged alongside Carmen Turner?',
            answer:
              'The co-defendants are Shemerrylyn Regina Fields, 47, of Rosharon (hired under the title of deputy tax clerk), and Victor Calvin Ewing, 69, of Houston (hired as department coordinator and identified as the father of Turner’s adult son).',
          },
          {
            question: 'Can Carmen Turner be automatically removed from elected office?',
            answer:
              'No. Under Chapter 87 of the Texas Local Government Code, a federal indictment alone does not automatically vacate an elected county office. Removal prior to a criminal conviction requires a formal petition filed in state district court followed by a jury trial or judicial order.',
          },
          {
            question: 'What is the timeframe of the alleged ghost payroll operation?',
            answer:
              'Federal prosecutors allege the payroll diversion scheme operated for two full years, spanning from September 2023 through September 2025.',
          },
        ]}
        tags={[
          'Carmen Turner',
          'Fort Bend County',
          'SDTX',
          'Wire Fraud',
          'Ghost Payroll',
          'Public Corruption',
          'Richmond Texas',
        ]}
        slug="carmen-turner-fort-bend-tax-assessor-indictment"
        url={PAGE_URL}
        thumbnail={{
          src: OG_IMAGE,
          alt: 'Federal indictment of Fort Bend County Tax Assessor Carmen Turner and co-defendants',
        }}
      >
        <p className="lead font-medium text-lg text-neutral-800 dark:text-neutral-200">
          <strong>RICHMOND, Texas</strong> — One month after the U.S. Attorney’s Office for the Southern District of
          Texas unsealed a nine-count federal indictment against Fort Bend County Tax Assessor-Collector{' '}
          <strong>Carmen Patrice Turner</strong>, the case (docketed as <em>United States v. Turner et al.</em>, Case No.
          4:26-cr-677) continues to reverberate across county government.
        </p>

        <p>
          Filed in Houston federal court and unsealed on October 22, 2026, the indictment charges Turner, 65, of Richmond,
          alongside two co-defendants—<strong>Shemerrylyn Regina Fields</strong>, 47, of Rosharon, and{' '}
          <strong>Victor Calvin Ewing</strong>, 69, of Houston—with conspiracy, theft concerning programs receiving
          federal funds, and wire fraud. Rather than centering on external tax collection or vehicle title brokers,
          federal prosecutors allege that Turner used her elected authority to place personal associates on the Fort
          Bend County payroll for work they never performed.
        </p>

        <div className="my-8 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-4">
            Federal Indictment &amp; Defendant Profile (Case No. 4:26-cr-677)
          </h3>
          <pre className="font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 overflow-x-auto whitespace-pre p-2 leading-relaxed">
{`SOUTHERN DISTRICT OF TEXAS CASE PROFILE
├── Lead Defendant: Carmen Patrice Turner, 65 (Elected Fort Bend County Tax Assessor-Collector)
├── Co-Defendant 1: Shemerrylyn Regina Fields, 47, of Rosharon (Hired as Deputy Tax Clerk)
├── Co-Defendant 2: Victor Calvin Ewing, 69, of Houston (Hired as Department Coordinator)
├── Core Counts: Conspiracy, theft involving federal program funds, and wire fraud (9 counts total)
├── Alleged Scheme Window: September 2023 – September 2025
└── Jurisdiction: U.S. District Court for the Southern District of Texas (Houston Division)`}
          </pre>
        </div>

        <h2>1. The Indictment Mechanics: How the Alleged Ghost Payroll Scheme Operated</h2>

        <p>
          According to the unsealed federal charging documents, the alleged conspiracy relied on falsified timekeeping
          records and direct-deposit payroll wires to divert county funds—which are commingled with federal program
          dollars—to two individuals with personal ties to Turner:
        </p>

        <div className="my-6 rounded-lg border border-red-200 bg-red-50/50 p-4 text-sm dark:border-red-950/60 dark:bg-red-950/20">
          <p className="font-semibold text-red-900 dark:text-red-300 mb-1">The Alleged Payroll Diversion Pipeline:</p>
          <p className="text-red-800 dark:text-red-400 font-mono text-xs sm:text-sm">
            [Turner Appoints Associates] ➔ [Falsified Timesheets Submitted] ➔ [County Payroll Wire Transfers Issued] ➔ [Compensation Collected Without County Work]
          </p>
        </div>

        <ul>
          <li>
            <strong>Shemerrylyn Regina Fields (Deputy Tax Clerk):</strong> Prosecutors allege Turner placed Fields on
            the county payroll under the title of deputy tax clerk. According to the federal allegations, Fields
            collected county salary and benefits while actually serving as a personal caretaker for Turner’s mother
            rather than performing official duties for Fort Bend County taxpayers.
          </li>
          <li>
            <strong>Victor Calvin Ewing (Department Coordinator):</strong> Identified in court records and local
            reporting as the father of Turner’s adult son, Ewing was hired into a department coordinator role within the
            tax office. Federal investigators allege Ewing drew regular county paychecks and benefits despite failing to
            perform county work—and while simultaneously holding outside employment at Chicago O&apos;Hare International
            Airport.
          </li>
          <li>
            <strong>Wire Fraud &amp; False Timesheets:</strong> To sustain the illusion of active employment, the
            indictment alleges that falsified timesheets were submitted between September 2023 and September 2025,
            triggering automated electronic payroll deposits—including specific spring 2024 wire transfers cited as
            substantive wire fraud counts.
          </li>
        </ul>

        <p className="text-xs italic text-neutral-500">
          (Note: All three defendants are presumed innocent unless and until proven guilty in a court of law.)
        </p>

        <h2>2. County &amp; Federal Fallout: Governance Pressure and Internal Oversight</h2>

        <p>
          The arrest of a sitting countywide constitutional officer has triggered immediate political, administrative,
          and financial scrutiny in Richmond:
        </p>

        <ul>
          <li>
            <strong>Calls for Resignation vs. Texas Removal Law:</strong> Following the October 22 arrests, Fort Bend
            County leadership publicly called for Turner to step down. However, under Texas statutory law governing
            elected county officials, an indictment alone does not automatically vacate an office; removal prior to a
            conviction requires specific civil removal proceedings initiated through state district court under Chapter
            87 of the Texas Local Government Code.
          </li>
          <li>
            <strong>Pre-Trial Custody &amp; Federal Discovery:</strong> Following initial appearances before a U.S.
            magistrate judge in Houston, the defendants were released on bond conditions standard for non-violent
            white-collar indictments while federal prosecutors began compiling payroll logs, electronic timecard
            metadata, and banking records for Rule 16 pre-trial discovery.
          </li>
          <li>
            <strong>County Payroll &amp; Transaction Audits:</strong> Inside Fort Bend County government, the
            allegations have placed intense focus on departmental timekeeping sign-offs, HR onboarding verification, and
            internal audit controls across the Tax Assessor-Collector’s office to ensure no other unauthorized
            positions or improper disbursements exist on county ledgers.
          </li>
        </ul>

        <h2>3. What’s Next: Status Conferences and the Scope of the Probe</h2>

        <p>
          As the prosecution transitions from initial arraignments into active pre-trial litigation in the Southern
          District of Texas, court watchers and county officials are monitoring two primary fronts:
        </p>

        <p>
          <strong>Southern District of Texas Scheduling Orders:</strong> Defense counsel for Turner, Fields, and Ewing
          are reviewing initial federal discovery disclosures ahead of upcoming pre-trial status conferences in Houston,
          where the court will address any motions for severance, evidentiary challenges, or trial scheduling
          continuances.
        </p>

        <p>
          <strong>Potential Superseding Counts:</strong> While the initial nine-count indictment focuses narrowly on
          internal payroll fraud and personal caretaker/coordinator appointments, federal public corruption probes
          routinely expand as investigators audit surrounding vendor contracts, third-party tax collection agreements,
          and commercial title services. Prosecutors have not indicated whether any outside vendors or dealers are under
          scrutiny, leaving open the question of whether the docket will remain confined to internal payroll counts or
          expand via a superseding indictment.
        </p>

        <h2>Video Coverage &amp; Local Broadcast Reporting</h2>
        <p>
          Review the local broadcast coverage detailing the federal arrests, court appearances, and county leadership
          reactions below:
        </p>

        <div className="my-8 space-y-6 not-prose">
          <div className="overflow-hidden rounded-xl border border-neutral-200 bg-black dark:border-neutral-800">
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/cwr9tkBKhNw"
                title="Fort Bend tax assessor-collector charged in alleged payroll fraud scheme, DOJ says"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-3 bg-neutral-900 text-neutral-300 text-xs flex justify-between items-center">
              <span>Fort Bend tax assessor-collector charged in alleged payroll fraud scheme, DOJ says</span>
              <span className="text-neutral-400">ABC13 Houston · 3:27</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-black dark:border-neutral-800">
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/7TENJVsWz0E"
                  title="Fort Bend County tax assessor-collector Carmen Turner arrested in federal fraud case"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-3 bg-neutral-900 text-neutral-300 text-xs flex justify-between items-center">
                <span>Carmen Turner arrested in federal fraud case</span>
                <span className="text-neutral-400">KPRC 2 Click2Houston · 2:30</span>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-black dark:border-neutral-800">
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/GlsKr59nDvw"
                  title="Fort Bend County judge calls for Tax Assessor Carmen Turner’s resignation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-3 bg-neutral-900 text-neutral-300 text-xs flex justify-between items-center">
                <span>County Judge calls for resignation</span>
                <span className="text-neutral-400">KPRC 2 Click2Houston</span>
              </div>
            </div>
          </div>
        </div>

        <h2>Verifiable Sources &amp; Primary Court Filings</h2>
        <ul className="text-sm space-y-2">
          <li>
            <strong>Official Federal Press Release:</strong>{' '}
            <a
              href="https://www.justice.gov/usao-sdtx/pr/fort-bend-county-tax-assessor-collector-charged-wire-fraud-scheme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 underline hover:text-red-700"
            >
              U.S. Attorney&apos;s Office, Southern District of Texas: Fort Bend County Tax Assessor-Collector Charged in Wire Fraud Scheme
            </a>
          </li>
          <li>
            <strong>Federal Court Filing:</strong>{' '}
            <a
              href="https://www.justice.gov/usao-sdtx/media/1467446/dl?inline"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 underline hover:text-red-700"
            >
              Department of Justice Docket PDF: United States v. Carmen Patrice Turner, et al. (Case No. 4:26-cr-677)
            </a>
          </li>
          <li>
            <strong>Local Investigative Coverage:</strong>{' '}
            <a
              href="https://www.khou.com/article/news/local/fort-bend-county-tax-assessor-collector-federal-charges/285-05ec2967-8c11-4ffd-8e38-52be1f46053f"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 underline hover:text-red-700"
            >
              KHOU 11: Elected Official in Fort Bend County Accused of Using County Payroll in Fraud Scheme
            </a>
          </li>
          <li>
            <strong>Texas Removal Law Analysis:</strong>{' '}
            <a
              href="https://www.click2houston.com/news/local/2026/10/24/can-fort-bend-countys-indicted-tax-assessor-be-removed-from-office-heres-what-texas-law-says/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 underline hover:text-red-700"
            >
              KPRC Click2Houston: Can Fort Bend County&apos;s Indicted Tax Assessor Be Removed From Office? What Texas Law Says
            </a>
          </li>
        </ul>
      </NewsArticle>
    </>
  );
}
