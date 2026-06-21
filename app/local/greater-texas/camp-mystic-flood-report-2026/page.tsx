import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

// =============================================================================
// Camp Mystic Flood Report 2026 | Jack Brennan, Investigations
// Route: /local/greater-texas/camp-mystic-flood-report-2026
// Published: June 21, 2026
// =============================================================================

export const revalidate = 86400;

const SLUG = '/local/greater-texas/camp-mystic-flood-report-2026';
const ARTICLE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Camp Mystic Flood | Texas Finds 28 Deaths Were Preventable',
  description:
    'A Texas legislative report released June 18, 2026, found that 28 deaths at Camp Mystic during the July 4, 2025, Guadalupe River flood were preventable, citing a centralized plan, a cell phone ban, and a culture of complacency.',
  keywords: [
    'Camp Mystic flood',
    'Camp Mystic flood 2025',
    'Camp Mystic investigation 2026',
    'Camp Mystic Texas flood deaths',
    'Guadalupe River flood July 2025',
    'Camp Mystic legislative report',
    'Texas flood camp deaths',
    'Dick Eastland Camp Mystic',
    'Camp Mystic evacuation failure',
    'Texas House Senate investigating committee Camp Mystic',
    'Camp Mystic flood preventable deaths',
    'Kerr County flood 2025',
    'Central Texas flash flood 2025',
    'Camp Mystic closed 2026',
    'Casey Garrett Michael Massengale Camp Mystic',
    'Camp Mystic flash flood emergency',
    'Texas summer camp flood disaster',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Camp Mystic Flood | Texas Finds 28 Deaths Were Preventable',
    description:
      'Texas investigators concluded the July 4, 2025, flood deaths at Camp Mystic were preventable. A cell phone ban, a one-man emergency plan, and 39 unmobilized staff near sleeping campers were among the failures.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-21T10:00:00Z',
    modifiedTime: '2026-06-21T10:00:00Z',
    section: 'News',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Floodwaters on the Guadalupe River in Central Texas, 2025' }],
    tags: ['Camp Mystic', 'Texas Flood', 'Kerr County', 'Guadalupe River', 'Jack Brennan'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '28 deaths at Camp Mystic were preventable, Texas legislators find',
    description: 'A cell phone ban left counselors voiceless. 39 staff were near the cabins and never called. The plan lived only in the director\'s head.',
    images: [OG_IMAGE],
  },
};

export default function CampMysticFloodReport2026Page() {
  return (
    <>
      <NewsArticleSchema
        title="Camp Mystic Flood | Texas Finds 28 Deaths Were Preventable"
        description="A Texas legislative report released June 18, 2026, found that 28 deaths at Camp Mystic during the July 4, 2025, Guadalupe River flood were preventable, citing a centralized plan, a cell phone ban, and a culture of complacency."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.org/authors/jack-brennan"
        publishedTime="2026-06-21T10:00:00Z"
        modifiedTime="2026-06-21T10:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        section="News"
        keywords={[
          'Camp Mystic flood',
          'Camp Mystic investigation 2026',
          'Texas flood camp deaths',
          'Guadalupe River flood July 2025',
          'Dick Eastland Camp Mystic',
          'Camp Mystic legislative report',
          'Kerr County flood 2025',
        ]}
      />

      <NewsArticle
        title="Camp Mystic Flood | Texas Finds 28 Deaths Were Preventable"
        subtitle="A 115-page joint legislative report released June 18, 2026, concludes the July 4, 2025, Guadalupe River flood deaths were the result of a centralized plan, a cell phone ban, and a culture of complacency toward severe weather"
        category="Investigations"
        categoryColor="orange"
        topicTag="investigations"
        publishDate="June 21, 2026"
        readTime="8 min read"
        author={{
          name: 'Jack Brennan',
          role: 'Investigations Reporter, ObjectWire',
          avatar: '/influncer/author/jack_brennen.JPG',
          authorSlug: 'jack-brennan',
        }}
        thumbnail={{
          src: OG_IMAGE,
          alt: 'Floodwaters along the Guadalupe River in Kerr County, Texas, July 2025',
        }}
        tags={['Camp Mystic', 'Texas Flood', 'Kerr County', 'Guadalupe River', 'Dick Eastland', 'Investigations']}
        slug="local-greater-texas-camp-mystic-flood-report-2026"
        url={SLUG}
        breaking={false}
        exclusive={true}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Local', item: '/local' },
          { name: 'Greater Texas', item: '/local/greater-texas' },
          { name: 'Camp Mystic Flood Report', item: SLUG },
        ]}
        keyTakeaways={[
          'A Texas legislative report released June 18, 2026, concluded that 28 deaths at Camp Mystic during a July 4, 2025, flood were preventable due to systemic emergency management failures.',
          'The National Weather Service issued a flash flood emergency at 4:03 a.m. warning of a deadly flood wave, but Camp Mystic leadership did not trigger an organized evacuation before the Guadalupe River rose 26 feet in 45 minutes.',
          "Camp Mystic's emergency response plan existed entirely in the head of director Richard Eastland, leaving all other staff without a chain of command or actionable evacuation protocol when the flood struck.",
          '39 adult staff members were within reach of children\'s cabins on the night of the flood but were never mobilized because the camp had no pre-established disaster training or command structure outside of Eastland.',
          'The Eastland family withdrew Camp Mystic\'s summer license renewal application following the legislative investigation, keeping the historic camp on the Guadalupe River closed as of June 2026.',
        ]}
        keyTakeawaysColor="orange"
        faqItems={[
          {
            question: 'What was the Camp Mystic flood disaster?',
            answer:
              'The Camp Mystic flood disaster was a July 4, 2025, flash flood on the Guadalupe River in Kerr County, Texas, that killed 28 people at the summer camp, including 25 campers, two counselors, and camp director Richard Eastland.',
          },
          {
            question: 'What did the Texas legislative investigation into Camp Mystic find?',
            answer:
              'A 115-page joint report released June 18, 2026, by the Texas House and Senate General Investigating Committees found that the 28 deaths were preventable and resulted from a centralized emergency plan, a cell phone ban that left counselors without communication, and a culture of complacency toward severe weather threats.',
          },
          {
            question: 'Why were Camp Mystic campers not evacuated before the flood?',
            answer:
              "Camp Mystic had no shared evacuation protocol, counselors' cell phones had been confiscated with no replacement communication equipment provided, and 39 nearby adult staff were never mobilized because no one had emergency authority outside Director Eastland.",
          },
          {
            question: 'What happened to Camp Mystic after the flood investigation?',
            answer:
              'The Eastland family withdrew Camp Mystic\'s summer license renewal application following the legislative investigation. The historic camp on the Guadalupe River remained closed as of June 2026.',
          },
          {
            question: 'Who conducted the Camp Mystic flood investigation?',
            answer:
              'State-appointed investigators Casey Garrett and Michael Massengale conducted the inquiry for the Texas House and Senate General Investigating Committees, releasing their 115-page report on June 18, 2026.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Greater Texas Coverage"
        moreFromHubHref="/local/greater-texas"
      >
        {/* ── INTRO ───────────────────────────────────────────────────────── */}
        <p>
          The deaths of 28 people at Camp Mystic during the July 4, 2025, Central Texas floods were preventable,
          not an act of nature, and resulted directly from a cascade of leadership and organizational failures
          that left counselors voiceless, staff unmobilized, and campers in floodway cabins as the Guadalupe River
          surged. That is the central finding of a 115-page{' '}
          <a
            href="https://www.youtube.com/watch?v=7D_UBjDpBwg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            joint report released June 18, 2026
          </a>
          , by the Texas House and Senate General Investigating Committees, compiled by state-appointed investigators
          Casey Garrett and Michael Massengale. The victims included 25 campers, two counselors, and the
          camp&rsquo;s director, Richard &ldquo;Dick&rdquo; Eastland.
        </p>

        <p>
          The investigation concluded after months of legislative hearings and document review that the tragedy
          at the storied camp on the Guadalupe River was the foreseeable result of an emergency plan that lived
          only in one person&rsquo;s head, a communications blackout created by camp policy, a dangerous
          tolerance for flooding risk baked into the camp&rsquo;s culture over decades, and a paralysis of
          available adult staff at the moment children needed them most.
        </p>

        {/* ── SECTION 1 ───────────────────────────────────────────────────── */}
        <h2>Camp Mystic Flood Report | Texas Legislature Concludes Deaths Were Preventable</h2>
        <p>
          The June 18, 2026, report is the most comprehensive official account of what went wrong at Camp Mystic
          the morning of July 4, 2025. Investigators Garrett and Massengale were granted access to internal camp
          communications, staff testimony, weather service records, and Kerr County emergency management logs.
          Their conclusion was unambiguous: the chain of failures that led to 28 deaths was systemic, not
          incidental, and multiple intervention points existed where a different decision would have saved lives.
        </p>
        <p>
          The report drew sharp criticism of camp management and Kerr County emergency officials alike, finding
          that neither the camp nor county responders had exercised adequate preparation for a flood event of
          the scale that meteorological data had been forecasting for days prior to July 4. The Texas Tribune,
          CBS News Texas, and KSAT 12 San Antonio provided supplemental reporting across the period from July
          2025 through June 2026, corroborating the timeline and sources cited by the committee investigators.
        </p>
        <p>
          The report was unanimously approved by the investigating committees before its public release, signaling
          bipartisan agreement on the severity of the organizational failures identified. Read our broader{' '}
          <Link href="/local/greater-texas" className="text-blue-600 hover:text-blue-800 underline">
            Greater Texas investigative coverage
          </Link>{' '}
          for context on the Kerr County region and related accountability reporting.
        </p>

        {/* ── SECTION 2 ───────────────────────────────────────────────────── */}
        <h2>Camp Mystic Emergency Plan | Eastland Was the Entire Plan</h2>
        <p>
          The report&rsquo;s most foundational finding was that Camp Mystic&rsquo;s emergency response plan was
          never institutionalized. It existed, to the extent it existed at all, inside the head of Director Dick
          Eastland. There was no written, distributed, or practiced evacuation protocol that camp staff could
          execute independently. Decision-making authority during a crisis was entirely centralized around one
          person, and when Eastland was unreachable or incapacitated, the structure had nothing to fall back on.
        </p>
        <p>
          In practical terms, this meant that as floodwaters rose, counselors and junior staff had no defined
          role, no designated rally point, and no chain of authority to appeal to. When the situation required
          immediate, decentralized action, the camp&rsquo;s organizational design made that action structurally
          impossible. Investigators characterized this not as an oversight but as a foreseeable institutional
          vulnerability that should have been identified and corrected in standard emergency planning reviews.
        </p>

        {/* ── SECTION 3 ───────────────────────────────────────────────────── */}
        <h2>Camp Mystic Cell Phone Ban | Counselors Left Without Communication</h2>
        <p>
          Camp Mystic management had a standing policy of confiscating counselors&rsquo; cell phones upon
          arrival at the start of each session. The stated purpose was to limit digital distractions and maintain
          an immersive camp environment for the children in their care. The policy was not accompanied by any
          replacement communication infrastructure. No backup radios, no handheld transmitters, no structured
          system for counselors to reach central administration in an emergency.
        </p>
        <p>
          The consequences on the night of July 4 were documented in staff testimony before the committee. When
          counselors sensed danger and sought guidance, they attempted to reach the main office using basic
          walkie-talkies. Those calls went completely unanswered. Counselors were left alone, without real-time
          weather data, without orders, and without any means of coordinating with the adults who held decision-making
          authority. The report identified this communication vacuum as a direct contributing factor to the
          absence of organized evacuation.
        </p>
        <p>
          Investigators noted that replacing cell phones with no communication alternative was not a neutral
          policy choice. In the context of a camp with buildings inside a FEMA-designated floodway, it was a
          decision that materially degraded the camp&rsquo;s ability to respond to a predictable emergency.
        </p>

        {/* ── SECTION 4 ───────────────────────────────────────────────────── */}
        <h2>Camp Mystic Flood Culture | 8 Buildings in FEMA Floodway, No Active Weather Monitoring</h2>
        <p>
          Camp Mystic had at least eight structures situated directly inside a FEMA-designated floodway along the
          Guadalupe River. This was not a condition that emerged without warning. FEMA floodway designations are
          public records, and the camp&rsquo;s location relative to the river had been a known geographic reality
          for decades. The report found that rather than prompting heightened vigilance, this fact had become
          absorbed into a cultural attitude investigators described as &ldquo;flood complacency.&rdquo;
        </p>
        <p>
          Leadership maintained a relaxed posture toward severe weather threats, relying on historical precedent
          rather than active meteorological monitoring. The camp did not have a protocol for tracking National
          Weather Service alerts during camp sessions or for translating alert thresholds into pre-defined staff
          actions. In the years preceding the disaster, the Guadalupe River had flooded without catastrophic
          consequence at Camp Mystic. That track record, investigators found, had created a false sense that
          serious flooding was unlikely to be lethal.
        </p>
        <p>
          This stands in direct contrast to the meteorological record for the days leading up to July 4, 2025.
          The National Weather Service had issued a flash flood watch hours before the disaster. The severity of
          what was approaching was foreseeable to any party actively consulting weather service data.
        </p>

        {/* ── SECTION 5 ───────────────────────────────────────────────────── */}
        <h2>Camp Mystic Evacuation | 4:03 a.m. Alert, 39 Staff Never Mobilized</h2>
        <p>
          At 4:03 a.m. on July 4, 2025, the National Weather Service issued a flash flood emergency alert
          specifically warning of a deadly flood wave moving down the Guadalupe River. The alert was the highest
          level of urgency in the NWS system, reserved for situations posing imminent threat to life. It was not
          a watch or a warning. It was an emergency declaration for the precise waterway running through Camp Mystic.
        </p>
        <p>
          Despite the camp having at least 39 adult staff members physically present and within reach of the
          children&rsquo;s cabins at that hour, no organized, proactive evacuation was launched. The report
          found that the staff were not mobilized because no one had the authority, training, or standing protocol
          to initiate a cabin-to-cabin retreat to higher ground without a direct order from Eastland. The camp&rsquo;s
          PA system, which could have reached every structure on the property, was not used to alert sleeping
          children or counselors.
        </p>
        <p>
          Within 45 minutes of the emergency alert, the Guadalupe River had risen 26 feet. By then, the window
          for an organized, safe evacuation on foot had effectively closed. The camp&rsquo;s design,
          communications failure, and organizational paralysis had consumed every available minute.
        </p>
        <blockquote>
          39 adult staff members were within reach of the cabins. The children were not unreachable. They were
          unreached because no structure existed to direct that reach.
        </blockquote>

        {/* ── SECTION 6 ───────────────────────────────────────────────────── */}
        <h2>Camp Mystic SUV Evacuation | Eastland and 14 Campers Die as River Rises</h2>
        <p>
          As floodwaters reached the camp, Director Eastland attempted to evacuate a group of children himself
          using a camp SUV. The vehicle entered the floodwater and was overwhelmed by the rushing current. Eastland
          and 14 of the vehicle&rsquo;s occupants were killed. In a separate sequence of events, 11 other campers
          were swept directly out of their flooded cabins. Two counselors also died. The final death toll was 28:
          25 campers, two counselors, and Director Eastland.
        </p>
        <p>
          The SUV evacuation, investigators noted, was itself the product of the same failure that defined the
          broader response: the absence of a pre-established plan meant that when action was finally taken, it
          was improvised under maximum stress by a single individual with no organized support. There was no
          triage, no coordination, and no secondary plan if the first attempt failed. The vehicle that was
          supposed to carry children to safety became part of the disaster record.
        </p>
        <p>
          Reporting by Philip Jankowski of the Austin Bureau, supplemented by Texas Tribune and CBS News Texas
          coverage, had established the broad outline of this timeline in the months following the disaster.
          The committee&rsquo;s report confirmed and expanded upon it with access to documents and testimony
          unavailable to press reporters in the immediate aftermath.
        </p>

        {/* ── SECTION 7 ───────────────────────────────────────────────────── */}
        <h2>Camp Mystic Aftermath | Chaotic Reunification, License Withdrawn June 2026</h2>
        <p>
          The trauma for families did not end when the floodwaters receded. The report was pointed in its
          criticism of how camp management and Kerr County officials handled the hours and days after the disaster.
          Investigators described the reunification process as &ldquo;chaotic and uncoordinated,&rdquo; leaving
          panicked parents waiting for days under a cloud of conflicting and incomplete information about whether
          their children had survived.
        </p>
        <p>
          The absence of a coherent family notification system mirrored the absence of an emergency plan.
          Parents who had driven to the area to find their children were unable to obtain confirmed casualty
          information through official channels for extended periods. The committee heard testimony from affected
          families during a public hearing in April 2026 that preceded the final report.
        </p>
        <p>
          In the months following intense legislative scrutiny, the Eastland family officially withdrew Camp
          Mystic&rsquo;s summer license renewal application, keeping the historic camp closed. The camp had
          operated on the Guadalupe River for decades and was considered one of Texas&rsquo;s most established
          summer programs. As of June 2026, there is no announced timeline for any potential reopening. For
          continuing{' '}
          <Link href="/local/us-news" className="text-blue-600 hover:text-blue-800 underline">
            U.S. accountability reporting
          </Link>
          , including disasters and emergency management failures, follow ObjectWire&rsquo;s national desk.
        </p>

        {/* ── SECTION 8: Closing ──────────────────────────────────────────── */}
        <h2>Camp Mystic 2026 | What the Report Demands of Texas Summer Camps</h2>
        <p>
          The June 18 report does not stop at assigning blame. Investigators laid out the structural conditions
          that made this disaster possible: buildings in a federal floodway, a communications policy that
          stripped counselors of any means to reach command, a one-person emergency plan with no succession or
          documentation, and a staff of dozens who were present but never activated. Each of those conditions
          is replicable at other camps along Texas waterways.
        </p>
        <p>
          The legislative committees are expected to take up recommendations for statewide reform of summer camp
          emergency preparedness standards as a follow-on to the investigation. Texas currently does not require
          summer camps to maintain written, distributed, and practiced flood evacuation protocols as a condition
          of licensure. That gap is now part of the public legislative record.
        </p>
        <p>
          <Link href="/authors/jack-brennan" className="text-blue-600 hover:text-blue-800 underline">
            Jack Brennan
          </Link>{' '}
          covers investigations, environmental law, and public accountability for ObjectWire from Washington, D.C.
          Tips and document leads can be directed through ObjectWire&rsquo;s editorial contact channel.
          Read more{' '}
          <Link href="/local/greater-texas" className="text-blue-600 hover:text-blue-800 underline">
            Greater Texas investigations
          </Link>{' '}
          and{' '}
          <Link href="/local/austin" className="text-blue-600 hover:text-blue-800 underline">
            Austin-area coverage
          </Link>{' '}
          on ObjectWire.
        </p>

        <hr />

        <p>
          <strong>Sources:</strong>{' '}
          <em>Report on the Camp Mystic Flood Disaster of July 4, 2025</em>, joint report issued by the Texas
          House and Senate General Investigating Committees, published June 18, 2026. Primary reporting by
          Philip Jankowski (Austin Bureau). Supplemental reporting and timeline validation by{' '}
          <a
            href="https://www.texastribune.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            The Texas Tribune
          </a>
          , CBS News Texas, and KSAT 12 San Antonio, covering July 2025 through June 2026.
        </p>
      </NewsArticle>
    </>
  );
}
