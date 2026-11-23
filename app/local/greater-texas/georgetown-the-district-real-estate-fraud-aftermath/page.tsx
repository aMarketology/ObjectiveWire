import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/local/greater-texas/georgetown-the-district-real-estate-fraud-aftermath';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = 'https://www.objectivewire.org/thumbnails/local-greater-texas-georgetown-the-district-real-estate-fraud-aftermath.jpg';

// Scheduled for Wednesday, November 25, 2026
const PUBLISH_DATE_ISO = '2026-11-25T14:00:00Z';
const PUBLISH_DATE_DISPLAY = 'November 25, 2026';

export const metadata: Metadata = {
  title: "Collecting on $400M: Post-Trial Motions and Asset Battles Follow Georgetown’s ‘The District’ Verdict",
  description:
    'Following a $400M+ Williamson County fraud verdict against Frisco entrepreneurs Gopala Krishnan and Sakthivel Gounder, attention turns to Texas punitive damage caps, receivership asset overlaps, and regulatory scrutiny.',
  keywords: [
    'Georgetown The District $400M fraud verdict post-trial enforcement',
    'Gopala Krishnan Sakthivel Gounder Williamson County judgment',
    'Energy Commissioning Inc Georgetown lawsuit',
    'Nanban Ventures SEC receivership Anthony Box',
    'Texas punitive damages cap post-judgment motions',
    'Williamson County 400-acre I-35 tract foreclosure',
    'Texas Civil Practice and Remedies Code 41.008',
    'Fifth Circuit SEC v Krishnan appeal',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Collecting on $400M: Post-Trial Motions and Asset Battles Follow Georgetown’s ‘The District’ Verdict",
    description:
      'Following a $400M+ Williamson County fraud verdict against Frisco entrepreneurs Gopala Krishnan and Sakthivel Gounder, attention turns to Texas punitive damage caps, receivership asset overlaps, and regulatory scrutiny.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'Objective Wire',
    authors: ['Carson Scott'],
    publishedTime: '2026-11-25T14:00:00Z',
    modifiedTime: '2026-11-25T14:00:00Z',
    section: 'Investigations',
    tags: [
      'Georgetown',
      'Williamson County',
      'The District',
      'Real Estate Fraud',
      'SEC Receivership',
      'Nanban Ventures',
      'Gopala Krishnan',
      'Punitive Damages',
    ],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Post-trial enforcement and asset battles surrounding the $400M fraud verdict over Georgetown The District project',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Collecting on $400M: The Fight Over Georgetown’s ‘The District’",
    description:
      'Inside the post-verdict battles over statutory damage caps, federal receivership priorities, and the 404-acre Williamson County tract.',
    images: [OG_IMAGE],
  },
};

export default function GeorgetownTheDistrictAftermathPage() {
  return (
    <>
      <NewsArticleSchema
        title="Collecting on $400M: Post-Trial Motions and Asset Battles Follow Georgetown’s ‘The District’ Verdict"
        description="Following a $400M+ Williamson County fraud verdict against Frisco entrepreneurs Gopala Krishnan and Sakthivel Gounder, attention turns to Texas punitive damage caps, receivership asset overlaps, and regulatory scrutiny."
        author="Carson Scott"
        authorUrl="https://www.objectivewire.org/authors/carson-scott"
        publishedTime="2026-11-25T14:00:00Z"
        modifiedTime="2026-11-25T14:00:00Z"
        articleUrl={PAGE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Investigations"
        keywords={[
          'Georgetown The District $400M fraud verdict post-trial enforcement',
          'Gopala Krishnan Sakthivel Gounder Williamson County judgment',
          'Energy Commissioning Inc Georgetown lawsuit',
          'Nanban Ventures SEC receivership Anthony Box',
        ]}
      />

      <NewsArticle
        title="After the $400M Verdict: Post-Trial Motions and Overlapping Asset Battles in Georgetown’s ‘The District’"
        subtitle="Securing a nine-figure civil jury verdict in a Texas courtroom is one legal hurdle; turning that paper award into collectible recovery is an entirely separate battle. Following the July 2026 Williamson County jury verdict ordering Frisco entrepreneurs Gopala Krishnan and Sakthivel Gounder to pay over $400 million, litigation has shifted squarely into post-judgment enforcement, statutory punitive damage caps, and competing federal receivership claims."
        category="Investigations"
        categoryColor="blue"
        topicTag="investigations"
        publishDate={PUBLISH_DATE_DISPLAY}
        readTime="7 min read"
        author={{
          name: 'Carson Scott',
          role: 'Chief Investigative Writer, Objective Wire',
          authorSlug: 'carson-scott',
        }}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Greater Texas', item: '/local/greater-texas' },
          { name: 'Georgetown The District Aftermath', item: SLUG },
        ]}
        keyTakeaways={[
          'A Williamson County jury awarded over $400 million—including $100M+ in actual damages and $300 million in exemplary damages—to contractor Energy Commissioning Inc. against developers Gopala Krishnan and Sakthivel Gounder.',
          'Post-trial defense motions challenge the award under Texas Civil Practice and Remedies Code § 41.008, which generally caps punitive damages unless specific statutory felony "cap-busters" are established.',
          'Enforcing judgment liens across the 404.5-acre Georgetown tract faces severe practical obstacles due to senior mortgage claims and an overarching federal receivership in SEC v. Krishnan et al. (E.D. Tex.).',
          'Court-appointed federal receiver Anthony Box holds claims to net sales proceeds and frozen corporate assets across the defendants’ Nanban Ventures network, taking priority over subsequent state court judgment liens.',
          'No state or federal criminal charges have been filed against Krishnan or Gounder regarding "The District," though trial exhibits and sworn testimony remain in the public record.',
        ]}
        keyTakeawaysColor="blue"
        faqItems={[
          {
            question: 'What was the verdict in the Georgetown "The District" lawsuit?',
            answer:
              'In July 2026, a Williamson County state district court jury returned a verdict exceeding $400 million in favor of Energy Commissioning Inc., finding that developers Gopala Krishnan and Sakthivel Gounder committed fraud regarding a $21 million development agreement.',
          },
          {
            question: 'How do Texas punitive damage caps affect the $300 million award?',
            answer:
              'Under Texas Civil Practice & Remedies Code § 41.008, punitive damages are typically capped at two times economic damages plus up to $750,000 in non-economic damages, unless the plaintiff proves an exemption such as misapplication of fiduciary property or securing execution of a document by deception.',
          },
          {
            question: 'What is the SEC receivership involving Gopala Krishnan and Nanban Ventures?',
            answer:
              'In SEC v. Krishnan et al. (Case No. 4:23-cv-00885 in the Eastern District of Texas), the SEC obtained an asset freeze and installed court-appointed receiver Anthony Box to seize and liquidate assets across Nanban Ventures entities to repay defrauded investors.',
          },
          {
            question: 'Who owns the 404-acre tract in Georgetown now?',
            answer:
              'The roughly 404.5-acre property along State Highway 29 and the San Gabriel River has been entangled in senior lender foreclosure proceedings and federal receivership asset disposition plans.',
          },
        ]}
        tags={[
          'Georgetown',
          'Williamson County',
          'The District',
          'Real Estate Fraud',
          'SEC Receivership',
          'Nanban Ventures',
          'Gopala Krishnan',
          'Punitive Damages',
        ]}
        slug="georgetown-the-district-real-estate-fraud-aftermath"
        url={PAGE_URL}
        thumbnail={{
          src: OG_IMAGE,
          alt: 'Post-trial enforcement and asset battles surrounding the $400M fraud verdict over Georgetown The District project',
        }}
      >
        <p className="lead font-medium text-lg text-neutral-800 dark:text-neutral-200">
          <strong>GEORGETOWN, Texas</strong> — Securing a nine-figure civil judgment in a Texas courtroom is one legal
          hurdle; turning that paper award into collectible recovery is an entirely separate battle.
        </p>

        <p>
          Following the July 2026 Williamson County jury verdict ordering Frisco-based entrepreneurs{' '}
          <strong>Gopala Krishnan</strong> and <strong>Sakthivel Gounder</strong> to pay more than $400 million—including
          $300 million in punitive damages—to Georgetown contractor <strong>Energy Commissioning Inc.</strong> over the
          collapsed 400-acre waterfront project known as &quot;The District,&quot; litigation has shifted squarely into
          post-judgment enforcement and procedural maneuvering.
        </p>

        <p>
          At trial, jurors found that the developers defrauded Energy Commissioning Inc. under a $21 million development
          agreement while pitching the ambitious mixed-use project to European financiers in pursuit of $5 billion in
          bond funding. Now, enforcing that award requires navigating Texas statutory caps on exemplary damages,
          competing federal receivership claims over the underlying Williamson County acreage, and an ongoing federal
          regulatory enforcement docket.
        </p>

        <div className="my-8 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-4">
            Post-Verdict Legal &amp; Asset Profile
          </h3>
          <pre className="font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 overflow-x-auto whitespace-pre p-2 leading-relaxed">
{`POST-VERDICT LEGAL & ASSET PROFILE
├── Underlying Trial Verdict: $400M+ total award ($100M+ actual damages; $300M punitive damages)
├── Judgment Creditor: Energy Commissioning Inc. (Georgetown-based infrastructure contractor)
├── Judgment Debtors: Gopala Krishnan & Sakthivel Palani Gounder (Frisco entrepreneurs)
├── Contested Land Footprint: ~404.5-acre tract near E. State Highway 29 / I-35 corridor in Georgetown
├── Overlapping Federal Case: SEC v. Krishnan et al. (E.D. Tex. Case No. 4:23-cv-00885; Receiver Anthony Box)
└── Criminal Prosecution Status: No state or federal criminal charges filed to date regarding "The District"`}
          </pre>
        </div>

        <h2>1. Post-Judgment Motions: Texas Punitive Caps and Appellate Hurdles</h2>

        <p>
          In Texas civil practice, a $300 million punitive award immediately triggers intensive post-verdict motion
          practice before and after final judgment entry:
        </p>

        <div className="my-6 rounded-lg border border-blue-200 bg-blue-50/50 p-4 text-sm dark:border-blue-950/60 dark:bg-blue-950/20">
          <p className="font-semibold text-blue-950 dark:text-blue-300 mb-1">
            The Texas Judgment Enforcement Pipeline:
          </p>
          <p className="text-blue-900 dark:text-blue-400 font-mono text-xs sm:text-sm">
            [Jury Verdict ($400M+)] ➔ [JNOV &amp; Statutory Cap Motions] ➔ [Abstract of Judgment &amp; Turnover Orders] ➔ [Appellate Bond / Asset Execution]
          </p>
        </div>

        <ul>
          <li>
            <strong>Statutory Exemplary Damage Caps (Tex. Civ. Prac. &amp; Rem. Code § 41.008):</strong> Under Texas
            law, punitive (exemplary) damages are generally capped at the greater of two times economic damages plus an
            equal amount of non-economic damages (up to $750,000), or $200,000—unless the plaintiff proves conduct
            meeting specific felony &quot;cap-busting&quot; exceptions such as securing execution of a document by
            deception or misapplication of fiduciary property. Defense post-trial motions—including motions for
            judgment notwithstanding the verdict (JNOV) and motions for new trial—focus on challenging both the fraud
            findings and whether any statutory cap-buster applies.
          </li>
          <li>
            <strong>Judgment Liens and Supersedeas Bonds:</strong> Under Texas Property Code §§ 52.002–52.003, recording
            an Abstract of Judgment with the Williamson County Clerk attaches a 10-year judgment lien to any non-exempt
            real property held by the debtors in the county. To halt active collection—such as writs of execution, bank
            garnishments, or court-ordered turnover proceedings—while pursuing an appeal to the Third Court of Appeals,
            judgment debtors must post a supersedeas bond (capped in Texas at the lesser of 50% of net worth or $25
            million).
          </li>
        </ul>

        <h2>2. Collection &amp; Receivership Battles Over the Undeveloped Georgetown Acreage</h2>

        <p>
          For judgment creditors, the central practical obstacle in Williamson County is not merely locating land—it is
          priority of claims. While the site of &quot;The District&quot; remains largely undeveloped farmland along the
          San Gabriel River and I-35 growth corridor, the underlying real estate has already been entangled in federal
          receivership and lender foreclosure proceedings.
        </p>

        <p>
          In a separate federal enforcement action in the Eastern District of Texas (<em>SEC v. Krishnan et al.</em>,
          Case No. 4:23-cv-00885), court-appointed federal receiver <strong>Anthony Box</strong> was appointed in March
          2024 to marshal and liquidate assets linked to Krishnan, Gounder, and their investment firm,{' '}
          <strong>Nanban Ventures LLC</strong>. Quarterly receivership reports filed in that federal docket reflect that
          the roughly 404.5-acre Georgetown Property (located along E. State Highway 29 in Williamson County) was
          already subject to senior mortgage liens and bank sale proceeds—with the federal receivership holding claims
          to net sale distributions alongside dozens of other frozen real estate and startup assets.
        </p>

        <p>
          Because federal receivership orders and senior mortgagees take precedence over later-filed state court
          judgment liens, Energy Commissioning Inc.’s post-judgment recovery efforts must navigate both senior secured
          lenders and the federal receivership estate&apos;s claims process.
        </p>

        <h2>3. Regulatory Enforcement &amp; Criminal Exposure: Where Probes Stand</h2>

        <p>
          While the Williamson County verdict adds massive civil liability, regulatory and criminal exposure remains
          divided across separate legal tracks:
        </p>

        <ul>
          <li>
            <strong>Federal SEC Litigation Already Active:</strong> Unlike many civil fraud cases that wait years for
            regulatory attention, Krishnan and Gounder have already faced major federal civil enforcement by the U.S.
            Securities and Exchange Commission (SEC) in the Eastern District of Texas (including Fifth Circuit appellate
            proceedings in Case No. 24-40291) over investor fundraising across Nanban Ventures entities, resulting in asset
            freezes, final judgments, and ongoing liquidations.
          </li>
          <li>
            <strong>Criminal Inquiry Status:</strong> Despite the severity of the Williamson County jury’s fraud
            findings and the rare $300 million punitive award, no state or federal criminal charges have been filed
            against Krishnan or Gounder in connection with &quot;The District&quot; or Nanban Ventures. In Texas, civil
            fraud verdicts are routinely reviewed by state and federal prosecutors when allegations involve
            multi-million-dollar financial misrepresentations, meaning courtroom exhibits and sworn trial transcripts
            from Georgetown remain part of the public record available to investigators.
          </li>
        </ul>

        <h2>Video Coverage &amp; Regulatory Case Background</h2>
        <p>
          Examine investigative analysis and financial report breakdowns regarding the Nanban Ventures SEC receivership
          and the financial entanglements surrounding Krishnan and Gounder:
        </p>

        <div className="my-8 space-y-6 not-prose">
          <div className="overflow-hidden rounded-xl border border-neutral-200 bg-black dark:border-neutral-800">
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/RdHvicS_WW0"
                title="The Nanban Case | $130 Million Affinity Fraud"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-3 bg-neutral-900 text-neutral-300 text-xs flex justify-between items-center">
              <span>The Nanban Case — Regulatory &amp; Civil Enforcement Analysis</span>
              <span className="text-neutral-400">Asia91 Investigative Documentary</span>
            </div>
          </div>
        </div>

        <h2>Verifiable Sources &amp; Further Reading</h2>
        <ul className="text-sm space-y-2">
          <li>
            <strong>Williamson County Verdict Coverage:</strong>{' '}
            <Link
              href="/local/greater-texas/georgetown-the-district-400m-fraud-verdict-2026"
              className="text-blue-600 underline hover:text-blue-700"
            >
              Objective Wire: Georgetown The District Fraud — $400M Jury Verdict 2026
            </Link>
          </li>
          <li>
            <strong>Federal Receivership &amp; Georgetown Property Docket:</strong>{' '}
            <a
              href="https://www.grayreed.com/portalresource/DKTReport"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-700"
            >
              Eastern District of Texas Receivership Report (Case 4:23-cv-00885-SDJ, Dkt. 342)
            </a>
          </li>
          <li>
            <strong>Fifth Circuit SEC Appeal Docket:</strong>{' '}
            <a
              href="https://dockets.justia.com/docket/circuit-courts/ca5/24-40291"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-700"
            >
              Justia Dockets: SEC v. Krishnan (Case No. 24-40291)
            </a>
          </li>
          <li>
            <strong>Texas Post-Judgment Enforcement Framework:</strong>{' '}
            <a
              href="https://thecromeenslawfirm.com/post-judgment-collections-in-texas-what-you-need-to-know/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-700"
            >
              The Cromeens Law Firm: Post-Judgment Collections in Texas
            </a>
          </li>
        </ul>
      </NewsArticle>
    </>
  );
}
