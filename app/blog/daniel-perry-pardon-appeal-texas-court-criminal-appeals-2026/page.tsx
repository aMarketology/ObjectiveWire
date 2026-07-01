import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = '/blog/daniel-perry-pardon-appeal-texas-court-criminal-appeals-2026';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = '/thumbnails/blog-daniel-perry-pardon-appeal-texas-court-criminal-appeals-2026.jpg';

export const metadata: Metadata = {
  title: 'Daniel Perry Pardon Appeal | Texas Court of Criminal Appeals 2026',
  description:
    'The Texas Court of Criminal Appeals is reviewing Governor Greg Abbott\'s pardon of Daniel Perry, the Army sergeant convicted of murder for killing BLM protester Garrett Foster in Austin in 2020. The pardon\'s legality is being challenged on constitutional grounds.',
  keywords: [
    'Daniel Perry pardon appeal',
    'Daniel Perry Texas Court of Criminal Appeals',
    'Greg Abbott pardon Daniel Perry',
    'Daniel Perry murder conviction pardon',
    'Garrett Foster shooting Austin Texas',
    'Texas pardon board controversy 2026',
    'Daniel Perry appeal 2026',
    'Texas governor pardon power limits',
    'Daniel Perry BLM shooting Austin',
    'Texas Court of Criminal Appeals pardon review',
    'Daniel Perry case update 2026',
    'Austin BLM protest shooting verdict',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Daniel Perry Pardon Appeal | Texas Court of Criminal Appeals 2026',
    description:
      'The Texas Court of Criminal Appeals is examining whether Governor Abbott\'s pardon of convicted murderer Daniel Perry was constitutionally valid. The case tests the limits of executive clemency power in Texas.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfonso M.'],
    publishedTime: '2026-06-30T15:00:00Z',
    modifiedTime: '2026-06-30T15:00:00Z',
    section: 'Investigations',
    tags: ['Daniel Perry', 'Texas Pardon', 'Greg Abbott', 'Court of Criminal Appeals', 'Austin Texas'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Perry Pardon Under Review | Texas Court of Criminal Appeals',
    description: 'Can a Texas governor pardon someone before the Board of Pardons and Paroles acts? The court is deciding.',
  },
};

export default function DanielPerryPardonAppealPage() {
  return (
    <NewsArticle
      title="Daniel Perry Pardon Appeal | Texas Court of Criminal Appeals Tests Limits of Governor's Clemency Power"
      subtitle="The Texas Court of Criminal Appeals is reviewing the constitutional validity of Governor Greg Abbott's pardon of Daniel Perry, the Army sergeant convicted of murder for killing Austin BLM protester Garrett Foster in 2020. The case turns on whether Abbott bypassed the required Board of Pardons and Paroles process."
      category="Investigations"
      categoryColor="orange"
      topicTag="investigations"
      publishDate="June 30, 2026"
      readTime="8 min read"
      author={{
        name: 'Alfonso M.',
        role: 'Lead Investigator',
        authorSlug: 'alfansa',
      }}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Texas Investigations', item: '/blog' },
        { name: 'Daniel Perry Pardon Appeal', item: SLUG },
      ]}
      keyTakeaways={[
        'Daniel Perry was convicted of murder in April 2023 by a Travis County jury for the July 2020 shooting death of Air Force veteran and BLM protester Garrett Foster in Austin.',
        'Governor Greg Abbott announced he would pardon Perry immediately after the verdict, before the Board of Pardons and Paroles had formally acted, which critics argued violated the Texas Constitution.',
        'The Texas Board of Pardons and Paroles voted 5-2 to recommend the pardon in May 2024. Abbott signed it, and Perry was released.',
        'The Travis County District Attorney\'s office and civil rights organizations challenged the pardon in court, arguing the process was constitutionally defective.',
        'The Texas Court of Criminal Appeals accepted the case for review in 2025 and a ruling is expected in the second half of 2026. If the pardon is voided, Perry could be returned to custody to serve his 25-year sentence.',
      ]}
      keyTakeawaysColor="orange"
      faqItems={[
        {
          question: 'Who is Daniel Perry?',
          answer:
            'Daniel Perry is a former U.S. Army sergeant who was convicted of murder in April 2023 by a Travis County jury for the July 25, 2020, shooting death of Garrett Foster, an Air Force veteran and BLM protester, in Austin, Texas. Perry was driving for Uber at the time and drove his car into the protest march before shooting Foster.',
        },
        {
          question: 'Who was Garrett Foster?',
          answer:
            'Garrett Foster was a 28-year-old Air Force veteran and BLM protester who was shot and killed by Daniel Perry in Austin, Texas, on July 25, 2020. Foster was carrying an AK-style rifle at the protest, which Perry cited as justification for the shooting. The jury rejected the self-defense claim.',
        },
        {
          question: 'Did Greg Abbott pardon Daniel Perry?',
          answer:
            'Yes. Governor Greg Abbott signed a pardon for Daniel Perry in May 2024 after the Texas Board of Pardons and Paroles voted 5-2 to recommend it. Abbott had announced his intention to pardon Perry immediately after the April 2023 conviction, before the board had acted, which triggered the constitutional challenge.',
        },
        {
          question: 'Why is the pardon being challenged?',
          answer:
            'The Texas Constitution requires that the Board of Pardons and Paroles recommend a pardon before the governor can grant one. Critics argue Abbott\'s public pre-announcement of the pardon, and the circumstances of the board vote, constituted an improper use of executive clemency power that bypassed the constitutional process.',
        },
        {
          question: 'What happens if the Texas Court of Criminal Appeals voids the pardon?',
          answer:
            'If the court rules the pardon was constitutionally invalid, Perry\'s murder conviction would be reinstated and he could be returned to custody to serve his 25-year sentence. The ruling would also set a significant precedent limiting the governor\'s ability to pre-announce pardons before the board acts.',
        },
      ]}
      tags={['Daniel Perry', 'Texas Pardon', 'Greg Abbott', 'Garrett Foster', 'Austin Texas', 'Court of Criminal Appeals', 'BLM']}
      slug="daniel-perry-pardon-appeal-texas-court-criminal-appeals-2026"
      url={PAGE_URL}
      thumbnail={{ src: OG_IMAGE, alt: 'Texas state capitol building Austin, governor pardon appeal court 2026' }}
    >
      <p>
        The <strong>Texas Court of Criminal Appeals</strong> is examining one of the most consequential
        questions in recent Texas legal history: whether Governor <strong>Greg Abbott</strong> had the
        constitutional authority to pardon <strong>Daniel Perry</strong> in the manner he did, and whether
        that pardon can be voided by a court. A ruling is expected in the second half of 2026.
      </p>

      <p>
        Perry was convicted of murder in April 2023 by a Travis County jury for the July 25, 2020, shooting
        death of <strong>Garrett Foster</strong>, a 28-year-old Air Force veteran and Black Lives Matter
        protester, in downtown Austin. The case became a national flashpoint over self-defense law, the right
        to carry firearms at protests, and the role of political pressure in the clemency process.
      </p>

      <h2>What Happened on July 25, 2020 | The Shooting</h2>

      <p>
        Daniel Perry was working as an Uber driver on the night of July 25, 2020, when he drove his car into
        a BLM protest march on Congress Avenue in Austin. Garrett Foster was among the protesters. Foster was
        carrying an AK-style rifle, which he had a legal right to carry under Texas open carry law.
      </p>

      <p>
        Perry exited his vehicle and shot Foster multiple times. Foster died at the scene. Perry claimed
        self-defense, arguing that Foster raised his rifle toward him. Witnesses disputed that account.
        Prosecutors presented evidence, including social media posts Perry had made before the protest, that
        they argued showed premeditation and a desire to confront protesters.
      </p>

      <p>
        The Travis County jury deliberated and convicted Perry of murder in April 2023. He was sentenced to
        25 years in prison.
      </p>

      <h2>Abbott's Pardon Announcement | Before the Board Acted</h2>

      <p>
        Within hours of the verdict, Governor Abbott issued a public statement announcing he would pardon
        Perry. The statement came before the Texas Board of Pardons and Paroles had taken any action on the
        case, which is the constitutionally required first step in the Texas clemency process.
      </p>

      <p>
        The Texas Constitution, Article IV, Section 11, grants the governor the power to grant pardons only
        upon the recommendation of the Board of Pardons and Paroles. Abbott's pre-announcement, critics
        argued, amounted to directing the board's outcome rather than receiving an independent recommendation,
        corrupting the constitutional process.
      </p>

      <p>
        The board voted 5-2 to recommend the pardon in May 2024. Abbott signed it. Perry was released.
      </p>

      <h2>The Constitutional Challenge | What the Court Is Deciding</h2>

      <p>
        The Travis County District Attorney's office, along with civil rights organizations, filed legal
        challenges arguing the pardon was constitutionally defective. The core argument is that Abbott's
        public pre-announcement transformed the board's vote from an independent recommendation into a
        rubber stamp, violating the separation of powers the Texas Constitution built into the clemency
        process.
      </p>

      <p>
        The Texas Court of Criminal Appeals, the state's highest court for criminal matters, accepted the
        case for review in 2025. The court is examining two questions: whether the pardon process was
        constitutionally valid, and whether courts have the authority to review and void a governor's pardon
        at all.
      </p>

      <p>
        The second question is potentially the more significant one. If the court rules that pardons are
        unreviewable executive acts, the challenge fails regardless of how Abbott handled the process. If
        the court rules that pardons can be reviewed for constitutional compliance, it opens the door to
        voiding this one.
      </p>

      <h2>What a Ruling Against the Pardon Would Mean</h2>

      <p>
        If the Texas Court of Criminal Appeals voids the pardon, Perry's murder conviction would be
        reinstated. He would be returned to custody to serve the 25-year sentence imposed by the Travis
        County court. His attorneys would almost certainly seek an emergency stay and pursue further appeals,
        potentially to the U.S. Supreme Court on federal constitutional grounds.
      </p>

      <p>
        A ruling voiding the pardon would also set a major precedent limiting how Texas governors can use
        the clemency power. It would establish that pre-announcing a pardon before the board acts is
        constitutionally impermissible, constraining future governors of both parties.
      </p>

      <h2>What a Ruling for the Pardon Would Mean</h2>

      <p>
        If the court upholds the pardon, Perry remains free and the conviction is permanently erased. The
        ruling would also establish that Texas courts cannot review the governor's exercise of clemency
        power, effectively making pardons unreviewable regardless of the process used. That outcome would
        significantly expand executive power in Texas and remove a check on the clemency process.
      </p>

      <h2>The Garrett Foster Family | Still Waiting</h2>

      <p>
        Garrett Foster's family has been present throughout the legal proceedings since the 2020 shooting.
        Foster was 28 years old, an Air Force veteran, and was at the protest with his fiancee, who uses a
        wheelchair. His family has consistently argued that the pardon was politically motivated and that
        Abbott's intervention denied them the justice the jury delivered.
      </p>

      <p>
        The Court of Criminal Appeals ruling will be the final word on whether that jury verdict stands or
        whether the governor's clemency power can erase it.
      </p>

      <p>
        Objective Wire will continue following this case as the court's ruling approaches. This report is
        part of our ongoing coverage of{' '}
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 underline">
          Texas courts and public-interest investigations
        </Link>. Alfonso M. has also reported on the{' '}
        <Link
          href="/blog/karmelo-anthony-verdict-collin-county-2026"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Karmelo Anthony murder conviction
        </Link>,{' '}
        <Link
          href="/blog/bexar-county-towing-bribery-conviction"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          the Bexar County towing bribery conviction
        </Link>, and{' '}
        <Link
          href="/blog/san-antonio-dje-texas-ponzi-scheme-69-million"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          the $69.5M DJE Texas Ponzi scheme
        </Link>.
        If you have information relevant to this or any other Texas case, reach our{' '}
        <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
          investigative desk here
        </Link>.
      </p>
    </NewsArticle>
  );
}
