import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/local/greater-texas/camp-mystic-guadalupe-river-flood-investigation';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = 'https://www.objectivewire.org/thumbnails/local-greater-texas-camp-mystic-guadalupe-river-flood-investigation.jpg';

export const metadata: Metadata = {
  title: "Camp Mystic Flood Disaster: Judge Clears Digital Evidence as Owners Lose Bankruptcy Control",
  description:
    'Major November rulings shift both the Kerr County criminal inquiry and Chapter 11 bankruptcy of Camp Mystic following the catastrophic Guadalupe River flash floods that claimed 28 lives.',
  keywords: [
    'Camp Mystic Guadalupe River flood investigation',
    'Camp Mystic Kerr County judge digital evidence',
    'Camp Mystic bankruptcy Eastland family',
    'Camp Mystic Chapter 11 trustee control',
    'Kerr County District Attorney grand jury Camp Mystic',
    'Hunt Texas Camp Mystic flood disaster',
    'Guadalupe River flash flood July 2025',
    'Texas camp safety legislation flash flood',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Camp Mystic Flood Disaster: Judge Clears Digital Evidence as Owners Lose Bankruptcy Control",
    description:
      'A Kerr County judge cleared digital evidence reviews in the criminal flood investigation as the Eastland family lost operational control in Chapter 11 bankruptcy.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'Objective Wire',
    authors: ['Carson Scott'],
    publishedTime: '2026-11-23T20:00:00Z',
    modifiedTime: '2026-11-23T20:00:00Z',
    section: 'Investigations',
    tags: [
      'Camp Mystic',
      'Kerr County',
      'Guadalupe River',
      'Texas Flood Investigation',
      'Chapter 11 Bankruptcy',
      'Wrongful Death',
    ],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Camp Mystic Guadalupe River flood investigation and bankruptcy control shift in Kerr County, Texas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Camp Mystic Flood Disaster: Digital Evidence & Bankruptcy Shift",
    description:
      'Kerr County court orders unseal digital forensics for criminal prosecutors while Camp Mystic owners lose key Chapter 11 decision-making authority.',
    images: [OG_IMAGE],
  },
};

export default function CampMysticInvestigationPage() {
  return (
    <>
      <NewsArticleSchema
        title="Camp Mystic Flood Disaster: Judge Clears Digital Evidence as Owners Lose Bankruptcy Control"
        description="Major November rulings shift both the Kerr County criminal inquiry and Chapter 11 bankruptcy of Camp Mystic following the catastrophic Guadalupe River flash floods that claimed 28 lives."
        author="Carson Scott"
        authorUrl="https://www.objectivewire.org/authors/carson-scott"
        publishedTime="2026-11-23T20:00:00Z"
        modifiedTime="2026-11-23T20:00:00Z"
        articleUrl={PAGE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Investigations"
        keywords={[
          'Camp Mystic Guadalupe River flood investigation',
          'Camp Mystic Kerr County judge digital evidence',
          'Camp Mystic bankruptcy Eastland family',
          'Kerr County District Attorney grand jury Camp Mystic',
        ]}
      />

      <NewsArticle
        title="Camp Mystic Flash Flood Disaster: Digital Evidence Cleared as Owners Lose Bankruptcy Control"
        subtitle="Two major November 2026 court orders have fundamentally reshaped the legal battlefield surrounding the Camp Mystic flash flood disaster. While a Kerr County judge cleared digital evidence to advance the ongoing criminal inquiry, the camp's longtime owners lost critical decision-making power in federal Chapter 11 bankruptcy."
        category="Investigations"
        categoryColor="blue"
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
          { name: 'Greater Texas', item: '/local/greater-texas' },
          { name: 'Camp Mystic Investigation', item: SLUG },
        ]}
        keyTakeaways={[
          'On November 11, 2026, a Kerr County district judge authorized investigators to proceed with comprehensive digital evidence reviews, unlocking encrypted communications and server logs seized across 14 search warrants.',
          'On November 5, 2026, the Eastland family lost unilateral control of Camp Mystic’s Chapter 11 bankruptcy proceeding after the federal court expanded independent oversight to manage creditor claims and potential liquidation.',
          'The catastrophic July 2025 flash flood along the South Fork of the Guadalupe River claimed 28 lives: 25 young campers, two camp counselors, and longtime camp director Richard Eastland.',
          'Digital forensic findings are expected to form the evidentiary backbone of an impending Kerr County District Attorney grand jury presentation regarding gross negligence and emergency warning failures.',
          'Dozens of consolidated wrongful death and survivor lawsuits remain stayed in state court pending the resolution of the bankruptcy governance restructuring.',
        ]}
        keyTakeawaysColor="blue"
        faqItems={[
          {
            question: 'What did the Kerr County judge order on November 11, 2026?',
            answer:
              'The judge denied defense motions attempting to suppress or limit access to electronic records seized by law enforcement. The ruling clears state and Texas Ranger forensic investigators to review internal text messages, emails, weather app notification histories, and camp administrative logs from the hours preceding the floodwaters.',
          },
          {
            question: 'How did the Eastland family lose control of the Camp Mystic bankruptcy?',
            answer:
              'On November 5, the federal bankruptcy court approved motions appointing an independent restructuring fiduciary, effectively stripping the founding family of autonomous decision-making over asset transfers, operational decisions, and victim compensation pool structuring.',
          },
          {
            question: 'What are prosecutors investigating in the Camp Mystic criminal probe?',
            answer:
              'The Kerr County District Attorney and Texas Rangers are investigating whether camp management committed criminal negligence or reckless endangerment by failing to evacuate cabins situated in the direct floodway despite multiple severe National Weather Service flash flood emergencies.',
          },
          {
            question: 'When was the Camp Mystic flash flood disaster?',
            answer:
              'The disaster occurred on the night of July 4–5, 2025, when torrential Hill Country rainfall caused the Guadalupe River to surge more than 26 feet in mere hours, inundating low-lying cabins in Hunt, Texas.',
          },
        ]}
        tags={[
          'Camp Mystic',
          'Kerr County',
          'Guadalupe River',
          'Texas Rangers',
          'Chapter 11',
          'Wrongful Death',
          'Hunt Texas',
        ]}
        slug="camp-mystic-guadalupe-river-flood-investigation"
        url={PAGE_URL}
        thumbnail={{
          src: OG_IMAGE,
          alt: 'Camp Mystic Guadalupe River flood investigation and bankruptcy control shift in Kerr County, Texas',
        }}
      >
        <p className="lead font-medium text-lg text-neutral-800 dark:text-neutral-200">
          <strong>KERRVILLE, Texas</strong> — Sixteen months after torrential floodwaters swept through{' '}
          <strong>Camp Mystic</strong> along the South Fork of the Guadalupe River, two pivotal November legal rulings
          have simultaneously accelerated the criminal inquiry into the disaster and dismantled the founding family’s
          grip over the historic property’s financial future.
        </p>

        <p>
          On <strong>November 11, 2026</strong>, a Kerr County district judge formally cleared law enforcement to begin
          reviewing troves of seized digital evidence, rejecting defense efforts to seal internal emails, mobile phone
          backups, and automated river-gauge alert logs. Less than one week earlier, on <strong>November 5</strong>, a
          federal bankruptcy judge curbed the Eastland family’s operational authority, installing independent governance
          to direct the camp’s Chapter 11 restructuring amid staggering wrongful death liabilities.
        </p>

        <p>
          The dual milestones mark a critical inflection point for surviving families seeking accountability for the
          deadliest summer camp disaster in modern American history, which claimed the lives of 25 girls, two counselors,
          and camp director Richard Eastland on the night of July 4–5, 2025.
        </p>

        <div className="my-8 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-4">
            Camp Mystic Legal &amp; Investigative Matrix (November 2026)
          </h3>
          <pre className="font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 overflow-x-auto whitespace-pre p-2 leading-relaxed">
{`CAMP MYSTIC DISASTER LITIGATION PROFILE
├── Incident Date: July 4–5, 2025 (Guadalupe River South Fork, Hunt, TX)
├── Human Toll: 28 fatalities (25 campers aged 9–14, 2 counselors, 1 director)
├── Criminal Status: Active investigation led by Kerr County DA & Texas Rangers
├── Nov 11, 2026 Ruling: Judge authorizes forensic extraction of 14 seized devices & servers
├── Chapter 11 Status: Filed in U.S. Bankruptcy Court for the Western District of Texas
├── Nov 5, 2026 Order: Eastland family management displaced by independent fiduciary
└── Civil Exposure: 31 consolidated wrongful death lawsuits stayed pending bankruptcy`}
          </pre>
        </div>

        <h2>The November 11 Ruling: Unsealing the Digital Forensics</h2>

        <p>
          The ruling issued by the 216th Judicial District Court in Kerr County resolves months of contentious pretrial
          wrangling over the evidentiary spoils of 14 search warrants executed by the Texas Rangers and local deputies.
        </p>

        <p>
          Defense counsel representing the camp’s corporate entities and surviving administrative personnel had argued
          that the broad seizure of cell phones, cloud storage credentials, and personal hard drives violated Fourth
          Amendment protections and attorney-client privileges. However, the court’s order established a structured
          "taint team" protocol that allows state forensics analysts to immediately begin indexing operational data:
        </p>

        <ul>
          <li>
            <strong>Real-Time Weather Alerts:</strong> Timestamps revealing when camp executives received National
            Weather Service flash flood warnings, flood watch advisories, and upstream river-gauge telemetry from the
            USGS monitoring station near Hunt.
          </li>
          <li>
            <strong>Internal Communications:</strong> SMS threads, WhatsApp groups, and walkie-talkie transcriptions
            between camp supervisors, head counselors, and maintenance staff as rainfall escalated past 11 inches in
            under four hours.
          </li>
          <li>
            <strong>Evacuation Protocols:</strong> Internal records documenting why cabins closest to the river bank—many
            resting directly in the historical 100-year floodplain—were not moved to higher ground before the river
            rose 26 vertical feet.
          </li>
        </ul>

        <h2>The Bankruptcy Shift: Eastland Family Stripped of Autonomy</h2>

        <p>
          While criminal investigators dissect the digital timeline, the financial architecture of the century-old
          all-girls Christian camp has collapsed under the weight of civil claims exceeding $350 million.
        </p>

        <div className="my-6 rounded-lg border border-blue-200 bg-blue-50/50 p-4 text-sm dark:border-blue-950/60 dark:bg-blue-950/20">
          <p className="font-semibold text-blue-950 dark:text-blue-300 mb-1">
            Governance Restructuring (Chapter 11 U.S. Bankruptcy Court):
          </p>
          <p className="text-blue-900 dark:text-blue-400 font-mono text-xs sm:text-sm">
            [July 2025 Disaster] ➔ [August 2025 Civil Filings] ➔ [May 2026 Chapter 11 Shield] ➔ [Nov 5, 2026: Independent Restructuring Officer Appointed]
          </p>
        </div>

        <p>
          The Eastland family originally sought Chapter 11 protection in May 2026, aiming to utilize the automatic stay
          to freeze state court wrongful death actions while maintaining debtor-in-possession status. Under that initial
          structure, family members retained operational control of the real estate holdings and insurance negotiation
          strategy.
        </p>

        <p>
          However, creditor committees representing the families of deceased campers successfully argued that conflicts
          of interest rendered family management untenable. The November 5 order strips the family of unilateral authority,
          placing asset sales, insurance settlement negotiations, and trust distribution models in the hands of an
          independent restructuring officer approved by the U.S. Trustee.
        </p>

        <h2>What Lies Ahead: Grand Jury Presentations &amp; Trial Timelines</h2>

        <p>
          With forensic barriers cleared, Kerr County District Attorney Lucy Wilke’s office is anticipated to present
          findings to a grand jury in early 2027. Legal observers point to potential charges including criminally
          negligent homicide or endangering a child, centered on the decision-making chain during the critical hours
          between 11:00 p.m. on July 4 and 3:30 a.m. on July 5.
        </p>

        <p>
          Simultaneously, the Texas Legislature is preparing to convene in January 2027 with bipartisan draft bills
          mandating commercial riverfront camps install redundant acoustic sirens and adhere to mandatory overnight
          evacuation thresholds during Stage 3 flash flood emergencies.
        </p>

        <h2>Video Coverage &amp; Investigative Reports</h2>
        <p>
          Examine the broadcast reporting, drone documentation of the flood plain, and investigative search warrant
          analyses covering the Camp Mystic tragedy below:
        </p>

        <div className="my-8 space-y-6 not-prose">
          <div className="overflow-hidden rounded-xl border border-neutral-200 bg-black dark:border-neutral-800">
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/H5xNv2wdrsA"
                title="The Camp Mystic Flood Disaster - This Wasn’t the First Time"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-3 bg-neutral-900 text-neutral-300 text-xs flex justify-between items-center">
              <span>The Camp Mystic Flood Disaster - Historical Floodplain Analysis</span>
              <span className="text-neutral-400">June First Documentary</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-black dark:border-neutral-800">
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/uUPzJSPsj0M"
                  title="Camp Mystic flooding: What we've learned from 14 search warrants in criminal investigation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-3 bg-neutral-900 text-neutral-300 text-xs flex justify-between items-center">
                <span>14 Search Warrants in Criminal Investigation</span>
                <span className="text-neutral-400">KHOU 11 · Houston</span>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-black dark:border-neutral-800">
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/qc3_ZzNQs7w"
                  title="Camp Mystic investigation brings answers, pain and renewed push for camp safety"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-3 bg-neutral-900 text-neutral-300 text-xs flex justify-between items-center">
                <span>Camp Safety &amp; Legal Accountability</span>
                <span className="text-neutral-400">WFAA · Dallas</span>
              </div>
            </div>
          </div>
        </div>

        <h2>Primary Sources &amp; Public Records</h2>
        <ul className="text-sm space-y-2">
          <li>
            <strong>Kerr County Court Records:</strong>{' '}
            <span className="text-neutral-700 dark:text-neutral-300">
              216th Judicial District Court of Kerr County, Texas — In re: State of Texas v. Seized Property of Camp
              Mystic Inc., Misc. Order Authorizing Digital Inspection (Nov. 11, 2026).
            </span>
          </li>
          <li>
            <strong>Federal Bankruptcy Docket:</strong>{' '}
            <span className="text-neutral-700 dark:text-neutral-300">
              U.S. Bankruptcy Court for the Western District of Texas (San Antonio Division) — In re: Camp Mystic, Inc.,
              Case No. 26-50891, Order Expanding Independent Management &amp; Fiduciary Powers (Nov. 5, 2026).
            </span>
          </li>
          <li>
            <strong>Hydrological &amp; Meteorological Data:</strong>{' '}
            <span className="text-neutral-700 dark:text-neutral-300">
              National Oceanic and Atmospheric Administration (NOAA) &amp; USGS Station 08165500 Guadalupe River at
              Hunt, TX, Peak Discharge &amp; Stage Height Archive (July 2025).
            </span>
          </li>
        </ul>
      </NewsArticle>
    </>
  );
}
