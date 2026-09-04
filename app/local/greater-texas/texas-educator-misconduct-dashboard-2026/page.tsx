import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';
import { PrismTable } from '@/components/articles/PrismTable';

// =============================================================================
// Texas Educator Misconduct Dashboard 2026 | Jack Brennan, Investigations
// Route: /local/greater-texas/texas-educator-misconduct-dashboard-2026
// Published: June 21, 2026
// =============================================================================

export const revalidate = 86400;

const SLUG = '/local/greater-texas/texas-educator-misconduct-dashboard-2026';
const ARTICLE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE =
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Texas Educator Misconduct Dashboard | TEA Launches Public Tracker',
  description:
    'The Texas Education Agency launched its Educator Misconduct Reporting Dashboard on June 2, 2026, tracking 13,000 annual reports, SBEC sanctions, and a Do Not Hire Registry that grows by 300 to 500 educators per year.',
  keywords: [
    'Texas educator misconduct dashboard',
    'TEA educator misconduct reporting',
    'Texas Education Agency misconduct tracker 2026',
    'Texas Do Not Hire Registry educators',
    'SBEC sanctions Texas teachers',
    'Levi Fuller Texas Inspector General educator misconduct',
    'Senate Bill 571 Texas educator accountability',
    'Fort Bend ISD misconduct Jan Schiff Elementary',
    'Texas teacher misconduct database',
    'Texas school safety 2026',
    'Texas educator investigation dashboard',
    'TEA Office of Inspector General educator misconduct',
    'Texas educator certification suspension',
    'Texas school abuse reporting',
    'Texas Education Agency SB 571 transparency',
    'educator misconduct Texas parents',
    'SBEC educator discipline Texas',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Texas Educator Misconduct Dashboard | TEA Launches Public Tracker',
    description:
      'Texas launched a public educator misconduct dashboard on June 2, 2026, tracking 13,000 annual reports and a Do Not Hire Registry that adds 300 to 500 educators per year. Fort Bend ISD incidents triggered parent pressure for the tool.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-21T14:00:00Z',
    modifiedTime: '2026-06-21T14:00:00Z',
    section: 'News',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'Texas school classroom representing educator accountability reporting',
      },
    ],
    tags: ['Texas Education', 'TEA', 'Educator Misconduct', 'Fort Bend ISD', 'SBEC'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texas built a public database for educator misconduct. Here is what it tracks.',
    description:
      '13,000 reports a year. 300 to 500 added to the Do Not Hire Registry annually. The TEA launched its misconduct dashboard June 2, 2026, under SB 571.',
    images: [OG_IMAGE],
  },
};

export default function TexasEducatorMisconductDashboard2026Page() {
  return (
    <>
      <NewsArticleSchema
        title="Texas Educator Misconduct Dashboard | TEA Launches Public Tracker"
        description="The Texas Education Agency launched its Educator Misconduct Reporting Dashboard on June 2, 2026, tracking 13,000 annual reports, SBEC sanctions, and a Do Not Hire Registry that grows by 300 to 500 educators per year."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.org/authors/jack-brennan"
        publishedTime="2026-06-21T14:00:00Z"
        modifiedTime="2026-06-21T14:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        section="News"
        keywords={[
          'Texas educator misconduct dashboard',
          'TEA educator misconduct reporting',
          'Texas Do Not Hire Registry educators',
          'SBEC sanctions Texas teachers',
          'Levi Fuller Texas Inspector General educator misconduct',
          'Senate Bill 571 Texas educator accountability',
          'Fort Bend ISD misconduct Jan Schiff Elementary',
          'Texas school safety 2026',
        ]}
      />

      <NewsArticle
        title="Texas Educator Misconduct Dashboard | TEA Launches First Public Accountability Tracker"
        subtitle="The Texas Education Agency went live June 2, 2026, with a statewide dashboard tracking 13,000 annual misconduct reports, SBEC certificate suspensions, and a Do Not Hire Registry growing by 300 to 500 educators per year"
        category="Investigations"
        categoryColor="orange"
        topicTag="investigations"
        publishDate="June 21, 2026"
        readTime="7 min read"
        author={{
          name: 'Jack Brennan',
          role: 'Investigations Reporter, ObjectWire',
          avatar: '/influncer/author/jack_brennen.JPG',
          authorSlug: 'jack-brennan',
        }}
        thumbnail={{
          src: OG_IMAGE,
          alt: 'Texas school classroom representing the TEA educator misconduct accountability dashboard',
        }}
        tags={['Texas Education', 'TEA', 'Educator Misconduct', 'Fort Bend ISD', 'SBEC', 'Senate Bill 571']}
        slug="local-greater-texas-texas-educator-misconduct-dashboard-2026"
        url={SLUG}
        exclusive={false}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Local', item: '/local' },
          { name: 'Greater Texas', item: '/local/greater-texas' },
          { name: 'Texas Educator Misconduct Dashboard', item: SLUG },
        ]}
        keyTakeaways={[
          'The Texas Education Agency launched the Educator Misconduct Reporting Dashboard on June 2, 2026, a public tool created under Senate Bill 571 of the 89th Texas Legislature to track how the state investigates and disciplines school personnel.',
          'The TEA receives an average of 1,600 educator misconduct reports per month, totaling approximately 13,000 cases annually, covering school violence, drug and alcohol infractions, financial fraud, and inappropriate student-educator relationships.',
          'Between 300 and 500 educators are added to the Texas Do Not Hire Registry each year, permanently or temporarily barring them from working in public schools, charter schools, or as school contractors statewide.',
          'The dashboard does not display names of educators under active investigation to protect due process, but names become public once the State Board for Educator Certification formally levies sanctions.',
          'Fort Bend ISD incidents at Jan Schiff Elementary, including surveillance footage of staff manhandling students and a staff member spraying alcohol into a student\'s face, were among the local cases that intensified parent pressure for the transparency tool.',
        ]}
        keyTakeawaysColor="orange"
        faqItems={[
          {
            question: 'What is the Texas Educator Misconduct Reporting Dashboard?',
            answer:
              'The Texas Educator Misconduct Reporting Dashboard is a public online tool launched by the Texas Education Agency on June 2, 2026, under Senate Bill 571 of the 89th Texas Legislature. It tracks statewide misconduct reports, active investigations, SBEC disciplinary sanctions, and the Do Not Hire Registry for Texas school personnel.',
          },
          {
            question: 'How many educator misconduct reports does Texas receive each year?',
            answer:
              'Texas receives approximately 1,600 educator misconduct reports per month, totaling around 13,000 cases annually, according to data published in the TEA dashboard at launch.',
          },
          {
            question: 'Who runs the Texas educator misconduct dashboard?',
            answer:
              'The dashboard is overseen by Inspector General Levi Fuller, who leads the TEA\'s newly created Office of the Inspector General for Educator Misconduct, established under Senate Bill 571.',
          },
          {
            question: 'Does the Texas educator misconduct dashboard show teacher names?',
            answer:
              'No. The dashboard does not display the names of educators who are under active investigation. Names are made public only after the State Board for Educator Certification formally levies a sanction against a certificate holder.',
          },
          {
            question: 'What were the Fort Bend ISD incidents that drove support for the dashboard?',
            answer:
              'Parent Daniel Hall and others came forward after reviewing surveillance footage from Jan Schiff Elementary School in Fort Bend ISD that allegedly showed staff manhandling students. A separate incident in the same district showed a staff member threatening a child and spraying alcohol into a student\'s face. Fort Bend ISD confirmed the specific employees were terminated.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Greater Texas Coverage"
        moreFromHubHref="/local/greater-texas"
      >
        {/* ── INTRO ───────────────────────────────────────────────────────── */}
        <p>
          The Texas Education Agency launched the Educator Misconduct Reporting Dashboard on June 2, 2026,
          a first-of-its-kind public accountability tool created under Senate Bill 571 of the 89th Texas
          Legislature that tracks, for the first time in one place, how the state receives, investigates,
          and acts upon misconduct allegations against school personnel. The dashboard is administered by
          Inspector General Levi Fuller of the TEA&rsquo;s newly created Office of the Inspector General
          for Educator Misconduct, and was built under sustained pressure from parents who, in case after
          case, had watched terminated teachers quietly move across district lines with no public record
          trailing them.
        </p>
        <p>
          The agency receives approximately 1,600 misconduct reports per month, roughly 13,000 cases annually,
          and the dashboard is the first mechanism that puts those aggregate numbers in front of parents and
          lawmakers in real time. Follow{' '}
          <Link href="/local/greater-texas" className="text-blue-600 hover:text-blue-800 underline">
            ObjectWire&rsquo;s Greater Texas investigative desk
          </Link>{' '}
          for continuing coverage of accountability reporting across the state.
        </p>

        {/* ── SECTION 1 ───────────────────────────────────────────────────── */}
        <h2>Texas Educator Misconduct Dashboard | SB 571 and the Office of Inspector General</h2>
        <p>
          Senate Bill 571 was passed during the 89th Regular Legislative Session in direct response to growing
          parent and advocacy organization pressure following a documented pattern of abuse and safety incidents
          inside Texas classrooms. The bill created the Office of the Inspector General for Educator Misconduct
          within the TEA and mandated the development of a public-facing transparency tool that could serve
          as a unified state record of how allegations flow through the disciplinary pipeline.
        </p>
        <p>
          Inspector General Fuller, appointed to lead the new office, described the dashboard at its June 2
          launch as a structural commitment by the state to stop treating educator misconduct as an
          administrative matter handled behind closed doors. The TEA&rsquo;s official press release
          accompanying the launch cited the Texas Association of School Boards compliance index and SB 571
          directives on public school safety metrics as the governing framework for what the dashboard must
          disclose and how frequently data must be updated.
        </p>
        <p>
          The tool marks the most significant expansion of public educator accountability infrastructure in
          Texas in over a decade. It sits alongside the existing{' '}
          <a
            href="https://tea.texas.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Texas Education Agency&rsquo;s public portal
          </a>{' '}
          and is intended to make the State Board for Educator Certification&rsquo;s disciplinary record
          legible to ordinary parents rather than only to district HR departments and legal counsel.
        </p>

        {/* ── SECTION 2 ───────────────────────────────────────────────────── */}
        <h2>Dashboard Metrics | 13,000 Annual Reports, Four Tracking Categories</h2>
        <p>
          The dashboard is organized into four primary data categories that move a misconduct case from
          initial report through to final disposition. Together they are designed to answer the questions
          that parents have most consistently asked state officials: how many complaints are filed, what
          kinds of conduct trigger investigations, how many cases reach formal sanctions, and which
          individuals have been permanently removed from Texas schools.
        </p>

        <PrismTable
          accent="orange"
          headers={['Dashboard Category', 'What It Tracks']}
          rows={[
            [
              <>
                <span className="block font-black">Misconduct Reports</span>
                <span className="block text-xs text-gray-500">Monthly and annual</span>
              </>,
              'A numeric tally of all complaints submitted to the TEA. The agency receives approximately 1,600 reports per month, totaling around 13,000 cases annually.',
            ],
            [
              <>
                <span className="block font-black">Active Educator Investigations</span>
                <span className="block text-xs text-gray-500">By offense type</span>
              </>,
              'Open investigations classified by offense category: school-related violence, drug and alcohol infractions, financial fraud, and inappropriate student-educator relationships or sexual misconduct.',
            ],
            [
              <>
                <span className="block font-black">SBEC Sanctions</span>
                <span className="block text-xs text-gray-500">Formal disciplinary rulings</span>
              </>,
              'Volume of cases that have resulted in formal disciplinary rulings or certificate suspensions by the State Board for Educator Certification.',
            ],
            [
              <>
                <span className="block font-black">Do Not Hire Registry</span>
                <span className="block text-xs text-gray-500">300 to 500 added annually</span>
              </>,
              'Cumulative record of individuals permanently or temporarily banned from Texas public schools, charter schools, or school contractor roles. Between 300 and 500 educators are added each year.',
            ],
          ]}
          caption="TEA Educator Misconduct Dashboard: four primary tracking categories at launch, June 2, 2026"
        />

        <p>
          The four-category structure reflects a deliberate attempt to make the pipeline transparent at
          every stage rather than only at the point of final sanction. Prior to the dashboard, parents
          could only access SBEC sanction records, the end of the pipeline, with no visibility into how
          many complaints were filed, how many were actively under investigation, or how quickly cases
          were moving toward resolution.
        </p>

        {/* ── SECTION 3 ───────────────────────────────────────────────────── */}
        <h2>Fort Bend ISD Incidents | Jan Schiff Elementary and the Cases Behind SB 571</h2>
        <p>
          The urgency behind the dashboard is not abstract. Among the specific local cases that gave
          the legislative push its momentum was a series of incidents at Jan Schiff Elementary School
          in Fort Bend ISD, surfaced publicly by parent Daniel Hall. Hall and other parents came forward
          after reviewing school surveillance footage that allegedly showed classroom staff physically
          manhandling students. The footage was specific enough that parents could identify individual
          staff members and document the interactions.
        </p>
        <p>
          In a separate and distinct incident within the same district, another parent reported reviewing
          footage that showed a staff member threatening a child and spraying alcohol directly into a
          student&rsquo;s face. Fort Bend ISD confirmed to reporters that the employees involved in
          both sets of incidents were terminated following district investigation. But the terminations
          themselves illustrated exactly the problem parents were bringing to the legislature: a terminated
          educator in Texas had no statewide public record attached to their name. They could apply to
          a neighboring district the following week, and that district&rsquo;s HR department would have
          no mandatory access to the termination context.
        </p>
        <p>
          The Do Not Hire Registry addresses the most severe end of this problem. But as parents testified
          before the legislature, the registry only captures cases that have advanced to formal SBEC action,
          a bar that many terminations, particularly those resolved at the district level with separation
          agreements, never reach. The broader{' '}
          <Link href="/local/austin" className="text-blue-600 hover:text-blue-800 underline">
            Austin legislative accountability beat
          </Link>{' '}
          has tracked multiple similar disclosure gaps in Texas public agency reporting over the last session.
        </p>

        {/* ── SECTION 4 ───────────────────────────────────────────────────── */}
        <h2>Do Not Hire Registry | 300 to 500 Texas Educators Banned Annually</h2>
        <p>
          The Do Not Hire Registry is the dashboard&rsquo;s most consequential data set for parents
          conducting their own due diligence. It is a statewide clearinghouse of individuals who have
          been permanently or temporarily banned from working in Texas public schools, charter schools,
          or in any role as a school contractor. The registry applies across all 1,000-plus school districts
          in the state and is not limited to certified teachers, capturing aides, contractors, and
          non-certified support staff who have been formally excluded.
        </p>
        <p>
          According to the data published at the dashboard&rsquo;s launch, between 300 and 500 educators
          are added to the registry each year. The annual range reflects variation in the SBEC&rsquo;s
          case processing volume and the mix of permanent versus temporary exclusions. Permanent bans are
          issued for the most serious offense categories, including sexual misconduct with a student,
          while temporary bans cover a broader range of conduct that may be revisited through petition
          after a defined period.
        </p>
        <p>
          Before the dashboard, the registry existed as a searchable but low-visibility resource that
          most parents did not know to consult. Placing it inside the dashboard&rsquo;s four-metric
          framework, alongside the raw complaint volume and active investigation data, is intended to
          give it the prominence that advocates argued it lacked as a standalone record.
        </p>

        {/* ── SECTION 5 ───────────────────────────────────────────────────── */}
        <h2>Dashboard Limitations | No Names During Investigations, No District Filters at Launch</h2>
        <p>
          Parent and safety advocacy groups have broadly praised the dashboard as a structural advance,
          but they have also been direct about its current limitations. The two most significant gaps
          at launch are the absence of educator names during the active investigation phase and the
          absence of district-level or campus-level data filters.
        </p>
        <p>
          On the naming question, the dashboard deliberately withholds the identities of educators who
          are under active investigation but have not yet been sanctioned. The TEA&rsquo;s position,
          consistent with standard due process protections in professional licensing contexts, is that
          publishing names before formal findings creates reputational harm to individuals who may
          ultimately be cleared. Inspector General Fuller noted at the launch that names become public
          on the dashboard only once the SBEC has formally levied a sanction, at which point the
          educator&rsquo;s record becomes part of the public sanction database by operation of law.
        </p>
        <blockquote>
          The dashboard tells you the system is working. What it does not yet tell you is whether the
          problem is concentrated in your district, your campus, or your child&rsquo;s grade level.
          That is the next version parents are waiting for.
        </blockquote>
        <p>
          On the filtering question, the dashboard currently presents statewide aggregate numbers only.
          A parent in Houston cannot use the current tool to pull the misconduct report volume or
          active investigation count for Houston ISD specifically. The TEA acknowledged this limitation
          at launch and indicated that district-level misconduct statistics are in active development
          as a future compliance module, contingent on completing the data verification framework
          required to ensure the localized figures are accurate before they are published.
        </p>

        {/* ── SECTION 6 ───────────────────────────────────────────────────── */}
        <h2>SBEC Sanctions | How Misconduct Cases Reach Formal Certification Action</h2>
        <p>
          The State Board for Educator Certification is the licensing authority for Texas educators and
          the body that issues, suspends, and revokes the certificates that allow individuals to teach
          in the state&rsquo;s public schools. SBEC sanctions represent the formal end of the disciplinary
          pipeline for the most serious misconduct cases and are the threshold at which an educator&rsquo;s
          name becomes publicly attributable to a disciplinary finding.
        </p>
        <p>
          Not all 13,000 annual misconduct reports advance to SBEC action. The TEA&rsquo;s Office of
          the Inspector General screens incoming reports, conducts initial investigations, and refers
          cases that meet the threshold for formal certification action to the SBEC. Cases resolved at
          the district level, or found to lack sufficient evidence after TEA investigation, do not
          generate an SBEC sanction record. The dashboard&rsquo;s SBEC sanctions metric allows the
          public to see, at the aggregate level, what fraction of reported misconduct ultimately reaches
          formal certification consequences.
        </p>
        <p>
          This is the metric that advocacy groups will watch most closely over the coming reporting
          cycles to assess whether the dashboard reflects a genuine increase in accountability or
          whether the gap between reports filed and sanctions issued remains as wide as critics
          have historically claimed. Investigative reporting on the{' '}
          <Link href="/local/greater-texas/camp-mystic-flood-report-2026" className="text-blue-600 hover:text-blue-800 underline">
            failures of institutional accountability in Texas
          </Link>{' '}
          has consistently found that the distance between incident documentation and formal consequence
          is where systemic failures embed themselves.
        </p>

        {/* ── SECTION 7: Closing ──────────────────────────────────────────── */}
        <h2>Texas Educator Misconduct Dashboard 2026 | What Parents Can Do Right Now</h2>
        <p>
          The dashboard is live at the TEA&rsquo;s public portal as of June 2, 2026. Parents can access
          the four core metrics, file a misconduct report directly through the dashboard interface, and
          search the Do Not Hire Registry by name to check whether a specific individual has been
          formally excluded from Texas schools. The SBEC sanction database, linked from the dashboard,
          provides the full record of formal certificate actions and is searchable by educator name.
        </p>
        <p>
          The TEA is actively soliciting public feedback on the dashboard through the Inspector
          General&rsquo;s office contact channel as it develops the district-level compliance modules.
          Parent organizations including the Texas Association of School Boards have indicated they
          will track the data quarterly and use the misconduct report volume and SBEC sanction ratio
          as advocacy benchmarks in the next legislative session. For broader{' '}
          <Link href="/local/us-news" className="text-blue-600 hover:text-blue-800 underline">
            U.S. school accountability and education policy coverage
          </Link>
          , follow ObjectWire&rsquo;s national desk.
        </p>
        <p>
          <Link href="/authors/jack-brennan" className="text-blue-600 hover:text-blue-800 underline">
            Jack Brennan
          </Link>{' '}
          covers investigations and public accountability reporting for ObjectWire. Tips on educator
          misconduct cases, district retaliation against parents, or gaps in the dashboard&rsquo;s
          data can be submitted through ObjectWire&rsquo;s editorial tip channel.
        </p>

        <hr />

        <p>
          <strong>Sources:</strong> Investigative reporting by{' '}
          <a
            href="https://abc13.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Tony Atkins, ABC13 Eyewitness News Houston
          </a>
          , published June 3, 2026. Supplementary broadcast reporting by Pachatta Pope, KSAT 12 San
          Antonio, and Adrian Carbajal, 6 News Waco, published June 5 to 9, 2026.{' '}
          <em>TEA Launches Educator Misconduct Dashboard and Student Protection Resource Center</em>,
          official press release issued by the Texas Education Agency, Austin, Texas, June 2, 2026.
          Texas Senate Bill 571, 89th Regular Legislative Session.
        </p>
      </NewsArticle>
    </>
  );
}
