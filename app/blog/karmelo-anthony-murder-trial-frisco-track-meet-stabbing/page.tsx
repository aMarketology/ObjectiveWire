import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = '/blog/karmelo-anthony-murder-trial-frisco-track-meet-stabbing';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Karmelo Anthony Trial | Frisco Track Meet Murder Case 2026',
  description:
    'Karmelo Anthony faces first-degree murder charges in Collin County for the April 2025 stabbing death of Austin Metcalf at a Frisco high school track meet. Trial underway in McKinney.',
  keywords: [
    'Karmelo Anthony trial',
    'Karmelo Anthony murder charge',
    'Austin Metcalf stabbing',
    'Frisco track meet stabbing',
    'Collin County murder trial 2026',
    'Karmelo Anthony self defense',
    'Kuykendall Stadium stabbing',
    'Karmelo Anthony verdict',
    'Frisco Texas murder trial',
    'Karmelo Anthony GiveSendGo',
    'Next Generation Action Network NGAN',
    'Collin County District Court murder case',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Karmelo Anthony Murder Trial | Frisco Track Meet Stabbing 2026',
    description:
      'Karmelo Anthony, 17 at the time of the stabbing, is on trial for first-degree murder in McKinney, Texas. The case turns on a self-defense claim disputed by arrest affidavits.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfonso M.'],
    publishedTime: '2026-06-01T13:00:00Z',
    modifiedTime: '2026-06-01T13:00:00Z',
    section: 'Investigations',
    tags: ['Karmelo Anthony', 'Collin County', 'Frisco Texas', 'Murder Trial'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karmelo Anthony on Trial for Frisco Track Meet Murder',
    description: '$600K raised, adult murder charge, self-defense claim. What the jury must decide.',
  },
};

export default function KarmeloAnthonyTrialPage() {
  return (
    <NewsArticle
      title="Karmelo Anthony Faces Murder Trial in Frisco Track Meet Stabbing That Divided Texas"
      subtitle="The 18-year-old is charged with first-degree murder in Collin County after fatally stabbing 17-year-old Austin Metcalf at a high school track meet in April 2025, a case that drew over $600,000 in public donations and a strict judicial gag order"
      category="Investigations"
      categoryColor="orange"
      topicTag="investigations"
      publishDate="June 1, 2026"
      readTime="6 min read"
      author={{
        name: 'Alfonso M.',
        role: 'Lead Investigator',
        authorSlug: 'alfansa',
      }}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Texas Investigations', item: '/blog' },
        { name: 'Karmelo Anthony Trial', item: SLUG },
      ]}
      keyTakeaways={[
        'Karmelo Anthony is an 18-year-old charged with first-degree murder in Collin County, Texas, for the April 2, 2025, fatal stabbing of Austin Metcalf, 17, at a track meet in Frisco.',
        'A Collin County Grand Jury indicted Anthony to stand trial as an adult despite him being 17 at the time of the incident.',
        'The case turned on a self-defense claim: Anthony\'s legal team argues he feared for his life after Metcalf physically pushed him during an altercation under a team tent.',
        'A fundraising campaign on GiveSendGo raised over $600,000 for Anthony\'s defense and helped secure a bond reduction from $1 million to $250,000, allowing house arrest with an ankle monitor.',
        'First-degree murder in Texas carries a sentence of 5 to 99 years, or life in prison, if convicted.',
      ]}
      keyTakeawaysColor="orange"
      faqItems={[
        {
          question: 'What is the Karmelo Anthony case?',
          answer:
            'The Karmelo Anthony case is a first-degree murder prosecution in Collin County, Texas, stemming from the April 2, 2025, fatal stabbing of Austin Metcalf during a high school track meet at Kuykendall Stadium in Frisco. Anthony was 17 at the time and was indicted by a grand jury to be tried as an adult.',
        },
        {
          question: 'Who was Austin Metcalf?',
          answer:
            'Austin Metcalf was a 17-year-old high school student and linebacker who was fatally stabbed during an altercation under a team tent at a track meet in Frisco, Texas, on April 2, 2025.',
        },
        {
          question: 'Where is the trial being held?',
          answer:
            'The trial is being held at the Collin County Courthouse in McKinney, Texas, before Collin County District Judge John Roach Jr.',
        },
        {
          question: 'What is Karmelo Anthony\'s defense?',
          answer:
            'Anthony\'s defense is self-defense under Texas law. His legal team argues that Metcalf pushed Anthony first and that Anthony reasonably feared serious bodily injury or death, making his use of force legally justified.',
        },
        {
          question: 'How much money was raised for Karmelo Anthony\'s defense?',
          answer:
            'A GiveSendGo fundraising campaign organized with the Dallas-based nonprofit Next Generation Action Network (NGAN) raised over $600,000, which was used to secure elite legal representation and fund Anthony\'s bond after it was reduced from $1 million to $250,000.',
        },
        {
          question: 'What sentence does Karmelo Anthony face if convicted?',
          answer:
            'First-degree murder in Texas carries a sentence of 5 to 99 years, or life in prison. Anthony has pleaded not guilty.',
        },
      ]}
      tags={['Karmelo Anthony', 'Collin County', 'Frisco Texas', 'Murder Trial', 'Austin Metcalf', 'Self Defense']}
      slug="karmelo-anthony-murder-trial-frisco-track-meet-stabbing"
      url={PAGE_URL}
    >
      <p>
        Karmelo Anthony is an 18-year-old now standing trial for first-degree murder at the Collin County
        Courthouse in McKinney, Texas, charged with fatally stabbing 17-year-old Austin Metcalf during a high
        school track meet on April 2, 2025, at Kuykendall Stadium in Frisco.
      </p>

      <p>
        The case drew immediate national attention, a social media controversy marked by racial tension, over
        $600,000 in public donations to Anthony's defense, and a strict judicial gag order preventing attorneys,
        the defendant, and others involved from speaking publicly about the proceedings. District Judge John Roach
        Jr. is presiding over the trial in Collin County District Court.
      </p>

      <h2>What Happened at Kuykendall Stadium</h2>

      <p>
        On the afternoon of April 2, 2025, a confrontation broke out under a team tent at the Frisco track meet
        as inclement weather pushed athletes and spectators together. Witnesses and arrest affidavits confirm that
        a physical altercation occurred between Anthony and Metcalf, during which Metcalf allegedly pushed Anthony.
        The confrontation escalated and ended with Anthony pulling a knife and stabbing Metcalf in the chest.
        Metcalf, a 17-year-old linebacker described by classmates as a standout athlete, did not survive.
      </p>

      <p>
        Anthony was arrested at the scene. Despite being 17 years old at the time, a Collin County Grand Jury
        voted to indict him as an adult on a charge of first-degree murder. He has pleaded not guilty.
      </p>

      <h2>The Self-Defense Question the Jury Must Answer</h2>

      <p>
        The trial outcome rests on a single legal question: whether Anthony's use of a knife was a legally
        justified act of self-defense under Texas law.
      </p>

      <p>
        Texas law permits the use of deadly force when a person reasonably believes it is immediately necessary
        to protect against another's use or attempted use of deadly force, or to prevent serious bodily injury
        or death. Anthony's legal team argues that Metcalf's physical aggression, specifically the alleged push,
        created a reasonable fear of serious injury that made Anthony's response lawful.
      </p>

      <p>
        The prosecution's counterargument is that introducing a knife into what began as a physical shoving match
        was disproportionate and that the threat Anthony faced did not rise to a level justifying deadly force
        under the statute. If the jury agrees, Anthony will likely face decades in prison. If the jury finds his
        fear was reasonable and his response proportionate, he could be acquitted.
      </p>

      <h2>Over $600,000 Raised, Bond Reduced to $250,000</h2>

      <p>
        Following Anthony's arrest, his family worked alongside the Dallas-based nonprofit Next Generation Action
        Network (NGAN) to launch a GiveSendGo fundraising campaign. The campaign quickly attracted national
        attention on social media and ultimately raised over $600,000. The funds were used to retain elite defense
        counsel and to cover Anthony's bond after a judge reduced it from $1 million to $250,000. Anthony has been
        awaiting trial under house arrest with an ankle monitor.
      </p>

      <p>
        The scale of the fundraising, and the involvement of NGAN, drew scrutiny from commentators on multiple
        sides of the racial divide that quickly formed around the case online. A strict gag order issued by Judge
        Roach has limited public statements from parties involved in the case since it was filed.
      </p>

      <h2>High Security, Public Demonstrations Outside Court</h2>

      <p>
        As jury selection began, the Collin County Courthouse in McKinney became a focal point for public
        demonstrations reflecting the polarized response the case generated nationwide. Tight security was
        established around the building. Local reporters documented the atmosphere outside the courthouse as
        supporters and critics gathered during the opening days of the trial. A report from{' '}
        <a
          href="https://www.youtube.com/watch?v=vIJOruWwyJw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          FOX 4 News in Dallas
        </a>{' '}
        detailed the security measures and crowd presence outside the courthouse as jury selection got underway.
      </p>

      <h2>What a Verdict Means</h2>

      <p>
        First-degree murder in Texas carries a sentencing range of 5 to 99 years in prison, or life, with a
        possible fine of up to $10,000. A conviction would mean Anthony spends a substantial portion of his life
        incarcerated. An acquittal on self-defense grounds would result in his immediate release with no further
        criminal exposure for the stabbing.
      </p>

      <p>
        The case has no easy resolution for either family. Metcalf's family has lost a 17-year-old son. Anthony's
        family has spent more than a year under the weight of a first-degree murder charge. Whatever the jury
        decides, the verdict will be scrutinized and debated far beyond Collin County.
      </p>

      <p>
        Objective Wire will continue following this case as the trial proceeds. This story is part of our
        ongoing coverage of{' '}
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 underline">
          Texas courts and public-interest investigations
        </Link>
        . If you have information relevant to this or any other Texas case, you can{' '}
        <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
          reach our investigative desk here
        </Link>
        . Alfonso M. has also reported on the{' '}
        <Link
          href="/blog/bexar-county-towing-bribery-conviction"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Bexar County towing bribery conviction
        </Link>{' '}
        and{' '}
        <Link
          href="/blog/san-antonio-dje-texas-ponzi-scheme-69-million"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          the $69.5M DJE Texas Ponzi scheme
        </Link>
        .
      </p>
    </NewsArticle>
  );
}
