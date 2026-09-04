import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 3600;

const SLUG = '/blog/karmelo-anthony-verdict-collin-county-2026';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = '/thumbnails/blog-karmelo-anthony-verdict-collin-county-2026.jpg';

export const metadata: Metadata = {
  title: 'Karmelo Anthony Verdict | Collin County Murder Trial Result 2026',
  description:
    'Karmelo Anthony was convicted of first-degree murder by a Collin County jury in McKinney, Texas, for the April 2025 stabbing death of Austin Metcalf at a Frisco high school track meet. Sentencing is pending.',
  keywords: [
    'Karmelo Anthony verdict',
    'Karmelo Anthony guilty',
    'Karmelo Anthony murder conviction',
    'Karmelo Anthony sentencing',
    'Collin County murder verdict 2026',
    'Austin Metcalf stabbing verdict',
    'Frisco track meet murder verdict',
    'Karmelo Anthony trial result',
    'Collin County District Court verdict',
    'Karmelo Anthony self defense rejected',
    'Karmelo Anthony prison sentence',
    'McKinney Texas murder trial 2026',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Karmelo Anthony Convicted of First-Degree Murder | Collin County 2026',
    description:
      'A Collin County jury rejected the self-defense claim and found Karmelo Anthony guilty of first-degree murder in the stabbing death of Austin Metcalf. Sentencing is set for later this summer.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfonso M.'],
    publishedTime: '2026-06-30T14:00:00Z',
    modifiedTime: '2026-06-30T14:00:00Z',
    section: 'Investigations',
    tags: ['Karmelo Anthony', 'Collin County', 'Murder Trial', 'Verdict', 'Frisco Texas'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karmelo Anthony Convicted of First-Degree Murder in Frisco Stabbing',
    description: 'Collin County jury rejects self-defense. Sentencing pending. Full verdict breakdown.',
  },
};

export default function KarmeloAnthonyVerdictPage() {
  return (
    <NewsArticle
      title="Karmelo Anthony Convicted of First-Degree Murder in Frisco Track Meet Stabbing"
      subtitle="A Collin County jury in McKinney, Texas, rejected the self-defense claim and found Karmelo Anthony guilty of first-degree murder for the April 2025 stabbing death of Austin Metcalf, 17, at a Frisco high school track meet. Anthony faces 5 to 99 years in prison at sentencing."
      category="Investigations"
      categoryColor="orange"
      topicTag="investigations"
      publishDate="June 30, 2026"
      readTime="7 min read"
      author={{
        name: 'Alfonso M.',
        role: 'Lead Investigator',
        authorSlug: 'alfansa',
      }}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Texas Investigations', item: '/blog' },
        { name: 'Karmelo Anthony Verdict', item: SLUG },
      ]}
      keyTakeaways={[
        'A Collin County jury convicted Karmelo Anthony of first-degree murder on June 30, 2026, for the April 2, 2025, stabbing death of Austin Metcalf at a Frisco high school track meet.',
        'The jury deliberated for approximately six hours before rejecting Anthony\'s self-defense claim and returning a guilty verdict.',
        'First-degree murder in Texas carries a sentencing range of 5 to 99 years, or life in prison. Sentencing is scheduled for a later date before Judge John Roach Jr.',
        'Anthony was 17 at the time of the stabbing and was tried as an adult after a Collin County Grand Jury indicted him on the adult charge.',
        'The case drew over $600,000 in public donations to Anthony\'s defense and generated sustained national attention due to its racial dimensions and the self-defense legal question at its center.',
      ]}
      keyTakeawaysColor="orange"
      faqItems={[
        {
          question: 'What was the Karmelo Anthony verdict?',
          answer:
            'Karmelo Anthony was found guilty of first-degree murder by a Collin County jury on June 30, 2026, for the stabbing death of Austin Metcalf at a Frisco high school track meet on April 2, 2025.',
        },
        {
          question: 'What sentence does Karmelo Anthony face?',
          answer:
            'First-degree murder in Texas carries a sentencing range of 5 to 99 years, or life in prison, with a possible fine of up to $10,000. The sentencing phase will be held before Judge John Roach Jr. at a date to be set.',
        },
        {
          question: 'Why was the self-defense claim rejected?',
          answer:
            'The jury found that Anthony\'s use of a knife was not a legally justified response to the threat he faced. The prosecution argued that introducing a deadly weapon into what began as a physical altercation was disproportionate and that the level of threat did not meet the Texas legal standard for deadly force in self-defense.',
        },
        {
          question: 'How old is Karmelo Anthony?',
          answer:
            'Karmelo Anthony was 17 years old at the time of the stabbing on April 2, 2025. He turned 18 before the trial began and was tried as an adult after a Collin County Grand Jury indicted him on a first-degree murder charge.',
        },
        {
          question: 'Who was Austin Metcalf?',
          answer:
            'Austin Metcalf was a 17-year-old high school student and linebacker who was fatally stabbed during an altercation at a track meet at Kuykendall Stadium in Frisco, Texas, on April 2, 2025.',
        },
      ]}
      tags={['Karmelo Anthony', 'Collin County', 'Murder Trial', 'Verdict', 'Austin Metcalf', 'Frisco Texas', 'Self Defense']}
      slug="karmelo-anthony-verdict-collin-county-2026"
      url={PAGE_URL}
      thumbnail={{ src: OG_IMAGE, alt: 'Collin County Courthouse McKinney Texas, murder trial verdict 2026' }}
    >
      <p>
        A Collin County jury returned a guilty verdict against <strong>Karmelo Anthony</strong> on June 30, 2026,
        convicting the 18-year-old of first-degree murder for the April 2, 2025, stabbing death of{' '}
        <strong>Austin Metcalf</strong> at a high school track meet in Frisco, Texas. The jury deliberated for
        approximately six hours before rejecting Anthony's self-defense claim. Sentencing will be held before
        Collin County District Judge John Roach Jr. at a date to be announced.
      </p>

      <p>
        The verdict closes the guilt phase of a trial that drew national attention, over $600,000 in public
        fundraising, and a strict judicial gag order that prevented attorneys and parties from speaking publicly
        throughout the proceedings. For the full background on the case, see our earlier report:{' '}
        <Link
          href="/blog/karmelo-anthony-murder-trial-frisco-track-meet-stabbing"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Karmelo Anthony faces murder trial in Frisco track meet stabbing
        </Link>.
      </p>

      <h2>The Jury's Decision | Self-Defense Rejected</h2>

      <p>
        The central question before the jury was whether Anthony's use of a knife constituted legally justified
        self-defense under Texas law. His defense team argued that Austin Metcalf physically pushed Anthony first
        and that Anthony reasonably feared serious bodily injury, making his response lawful under the Texas
        Penal Code's self-defense provisions.
      </p>

      <p>
        The prosecution countered that introducing a knife into a shoving match was a disproportionate escalation
        and that the threat Anthony faced did not meet the legal threshold for deadly force. After six hours of
        deliberation, the jury agreed with the state. The self-defense claim was rejected in full.
      </p>

      <p>
        The verdict means Anthony will proceed to the sentencing phase, where the same jury will hear evidence
        and arguments before determining his punishment within the statutory range.
      </p>

      <h2>What Sentencing Looks Like | 5 to 99 Years</h2>

      <p>
        First-degree murder in Texas carries a sentencing range of 5 to 99 years in prison, or life, with a
        possible fine of up to $10,000. The sentencing phase is a separate proceeding in which both sides present
        additional evidence. The prosecution will likely present victim impact statements from the Metcalf family.
        The defense will present mitigating evidence, including Anthony's age at the time of the offense, his
        background, and any other factors the jury may weigh in his favor.
      </p>

      <p>
        Because Anthony was 17 at the time of the offense, his attorneys may argue for a sentence at the lower
        end of the range, citing his youth and the circumstances of the altercation. The prosecution is expected
        to argue for a substantial sentence given the nature of the crime and the loss of Austin Metcalf's life.
      </p>

      <h2>The Metcalf Family | A Year of Waiting</h2>

      <p>
        Austin Metcalf's family has waited more than 14 months for this verdict. Metcalf was 17 years old, a
        linebacker described by classmates and coaches as a standout athlete and a well-liked member of his
        school community. He was killed at a track meet, at a public venue, in front of other students and
        parents. His family has been present throughout the trial proceedings in McKinney.
      </p>

      <p>
        The guilty verdict does not restore what the Metcalf family lost. It does mean that the legal system
        found Anthony criminally responsible for Austin Metcalf's death. The sentencing phase will determine
        what that responsibility costs Anthony in years.
      </p>

      <h2>The $600,000 Defense Fund | What Happens Now</h2>

      <p>
        The GiveSendGo campaign organized with the Dallas-based nonprofit Next Generation Action Network (NGAN)
        raised over $600,000 for Anthony's defense. Those funds paid for elite legal representation and covered
        Anthony's bond after it was reduced from $1 million to $250,000, allowing him to await trial under house
        arrest with an ankle monitor.
      </p>

      <p>
        With the guilty verdict, Anthony's bond conditions will be revoked and he will be remanded to custody
        pending sentencing. The defense team is expected to file post-verdict motions and will likely pursue an
        appeal after sentencing is complete. Any appeal would go to the Fifth Court of Appeals in Dallas.
      </p>

      <h2>What the Case Revealed About Texas Courts and Public Attention</h2>

      <p>
        The Karmelo Anthony case became a flashpoint for debates about race, self-defense law, and the role of
        social media fundraising in criminal defense. The $600,000 raised for Anthony's defense was extraordinary
        for a case involving a teenager with no prior criminal record. The racial dimensions of the case, a Black
        defendant and a white victim, generated sustained and often polarized commentary online throughout the
        14 months between the stabbing and the verdict.
      </p>

      <p>
        Judge Roach's gag order, which prevented attorneys and parties from speaking publicly, was an attempt to
        insulate the jury pool from the noise. Whether it succeeded is a question the appellate courts may
        eventually examine if Anthony's team argues that pretrial publicity tainted the proceedings.
      </p>

      <p>
        Objective Wire will continue following this case through sentencing and any subsequent appeal. This
        report is part of our ongoing coverage of{' '}
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 underline">
          Texas courts and public-interest investigations
        </Link>. Alfonso M. has also reported on the{' '}
        <Link
          href="/blog/bexar-county-towing-bribery-conviction"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Bexar County towing bribery conviction
        </Link>,{' '}
        <Link
          href="/blog/san-antonio-dje-texas-ponzi-scheme-69-million"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          the $69.5M DJE Texas Ponzi scheme
        </Link>, and{' '}
        <Link
          href="/blog/houston-zo-frost-jewelers-gold-laundering-elder-fraud"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          the Houston Zo Frost Jewelers gold laundering case
        </Link>.
        If you have information relevant to this or any other Texas case, you can{' '}
        <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
          reach our investigative desk here
        </Link>.
      </p>
    </NewsArticle>
  );
}
