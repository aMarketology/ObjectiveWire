import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

const SLUG = '/blog/travis-county-capital-murder-arrest-bare-cabaret-nightclub-2026';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Travis County Capital Murder Arrest | Bare Cabaret Nightclub Shooting',
  description:
    'Kevin Parrish arrested on capital murder charges in a double homicide at the Bare Cabaret nightclub in Northeast Travis County. Travis County Sheriff\'s Office identified suspects within hours of the early Sunday shooting.',
  keywords: [
    'Travis County capital murder arrest',
    'Bare Cabaret nightclub shooting',
    'Kevin Parrish capital murder',
    'Precious Shearrion',
    'Travis County double homicide 2026',
    'Northeast Travis County shooting',
    'Travis County Sheriff arrest',
    'Austin nightclub homicide',
    'Texas capital murder 2026',
    'Bare Cabaret Austin',
    'Travis County murder investigation',
    'KXAN shooting arrest',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Travis County Capital Murder Arrest | Bare Cabaret Nightclub Shooting 2026',
    description:
      'Kevin Parrish faces capital murder charges after two people were killed at the Bare Cabaret nightclub in Northeast Travis County early Sunday. Precious Shearrion also identified. Arrest made within one day.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-07-12T10:00:00Z',
    modifiedTime: '2026-07-12T10:00:00Z',
    section: 'Investigations',
    tags: ['Travis County', 'Capital Murder', 'Bare Cabaret', 'Kevin Parrish', 'Precious Shearrion', 'Memphis'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travis County Capital Murder Arrest | Bare Cabaret Nightclub',
    description:
      'Kevin Parrish arrested on capital murder charges after a double homicide at Bare Cabaret nightclub in Northeast Travis County.',
  },
};

export default function BareCaretCapitalMurderPage() {
  return (
    <NewsArticle
      title="Travis County Capital Murder Arrest | Bare Cabaret Nightclub Shooting"
      subtitle="Kevin Parrish faces capital murder charges after two people were killed at the Bare Cabaret nightclub in Northeast Travis County early Sunday morning. Precious Shearrion was also identified as a suspect. Travis County Sheriff's Office made the arrest within one day of identifying the suspects."
      category="Investigations"
      categoryColor="orange"
      topicTag="investigations"
      publishDate="July 12, 2026"
      publishedTime="2026-07-12T10:00:00Z"
      readTime="5 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, Objective Wire',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={SLUG}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Texas Investigations', item: '/blog' },
        { name: 'Travis County Capital Murder Arrest', item: SLUG },
      ]}
      keyTakeaways={[
        'Kevin Parrish was arrested on capital murder charges following a double homicide at the Bare Cabaret nightclub in Northeast Travis County early Sunday, July 6, 2026.',
        'Two people were killed at the nightclub in the early morning hours. Travis County Sheriff\'s Office identified both victims and opened a capital murder investigation the same day.',
        'Precious Shearrion was also identified in connection with the incident as investigators worked to establish the full sequence of events.',
        'The Travis County Sheriff\'s Office issued warrants and made the arrest within approximately one day of identifying the primary suspect, according to KXAN.',
      ]}
      faqItems={[
        {
          question: 'What happened at the Bare Cabaret nightclub in Travis County?',
          answer:
            'Two people were killed in a shooting at the Bare Cabaret nightclub in Northeast Travis County during the early morning hours of Sunday, July 6, 2026. The Travis County Sheriff\'s Office launched a capital murder investigation and identified suspects within hours.',
        },
        {
          question: 'Who is Kevin Parrish?',
          answer:
            'Kevin Parrish is the suspect arrested by the Travis County Sheriff\'s Office on capital murder charges in connection with the double homicide at the Bare Cabaret nightclub. He was taken into custody within approximately one day of being identified as the primary suspect.',
        },
        {
          question: 'Who is Precious Shearrion?',
          answer:
            'Precious Shearrion was identified by investigators in connection with the Bare Cabaret nightclub shooting. The specific charges or role in the incident had not been fully disclosed as of the time of reporting.',
        },
        {
          question: 'Where is the Bare Cabaret nightclub located?',
          answer:
            'The Bare Cabaret nightclub is located in Northeast Travis County, Texas, in the greater Austin area.',
        },
        {
          question: 'What charges does Kevin Parrish face?',
          answer:
            'Kevin Parrish faces capital murder charges, the most serious homicide charge under Texas law, which applies when two or more people are killed in the same criminal transaction or when the murder is committed under specific aggravating circumstances.',
        },
      ]}
    >
      <p>
        Kevin Parrish was arrested on capital murder charges after two people were killed at the{' '}
        <strong>Bare Cabaret nightclub</strong> in Northeast Travis County during the early morning hours of Sunday, July 6, 2026. The Travis County Sheriff&apos;s Office opened a capital murder investigation and identified the suspect within hours, making the arrest by the following day, according to{' '}
        <a
          href="https://www.kxan.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          KXAN
        </a>
        , which first reported the arrest.
      </p>

      <p>
        Investigators also identified <strong>Precious Shearrion</strong> in connection with the incident as the sheriff&apos;s office worked to establish the full sequence of events leading to the double homicide. The shooting occurred in the early morning hours when the nightclub would typically be at or near peak occupancy.
      </p>

      <h2>What Happened at the Bare Cabaret</h2>

      <p>
        The Bare Cabaret nightclub in Northeast Travis County was the scene of a double homicide in the pre-dawn hours of Sunday, July 6, 2026. Two victims were killed at the location. The Travis County Sheriff&apos;s Office responded to the scene, secured evidence, and began identifying persons of interest the same day.
      </p>

      <p>
        Capital murder in Texas applies when two or more people are killed in the same criminal transaction, or when a murder is committed under specific aggravating circumstances defined under Texas Penal Code Section 19.03. A capital murder conviction carries either the death penalty or life imprisonment without the possibility of parole.
      </p>

      <h2>Travis County Sheriff Response | Arrest Timeline</h2>

      <p>
        The Travis County Sheriff&apos;s Office moved quickly after the shooting. Investigators identified Kevin Parrish as the primary suspect and obtained warrants. The arrest was made within approximately one day of the incident, a timeline that reflects the department&apos;s early identification of the suspect through witness statements and physical evidence gathered at the scene.
      </p>

      <p>
        The rapid arrest in a capital murder case is notable. In many complex homicide cases, identification and apprehension of suspects can take days or weeks. The speed of the arrest in this case suggests investigators had access to surveillance footage, witness accounts, or other direct evidence linking Parrish to the scene at the time of the shooting.
      </p>

      <h2>Kevin Parrish | Capital Murder Charges</h2>

      <p>
        Parrish faces capital murder charges in Travis County. As of the time of reporting, bond conditions and a court date had not been publicly disclosed. Under Texas law, capital murder defendants are generally held without bond at the discretion of the court given the severity of the charges.
      </p>

      <p>
        The Travis County District Attorney&apos;s office would be responsible for prosecuting the case. The DA&apos;s office has not publicly stated whether it intends to seek the death penalty in this case.
      </p>

      <h2>Precious Shearrion | Second Suspect Identified</h2>

      <p>
        Investigators also identified <strong>Precious Shearrion</strong> in connection with the Bare Cabaret shooting. The specific charges filed against Shearrion, or whether an arrest had been made as of the date of initial reporting, had not been fully confirmed. Objective Wire will update this article as additional information is released by the Travis County Sheriff&apos;s Office.
      </p>

      <h2>Bare Cabaret | Northeast Travis County Context</h2>

      <p>
        The Bare Cabaret nightclub operates in Northeast Travis County, an area that has seen increased law enforcement attention in recent years as the broader Austin metro area has grown rapidly. Travis County sits at the center of one of the fastest-growing metropolitan areas in the United States, with population growth creating pressure on public safety infrastructure.
      </p>

      <p>
        Nightclub shootings in Texas often involve disputes that escalate rapidly in high-occupancy environments. The double homicide at the Bare Cabaret adds to a pattern of violent incidents at entertainment venues across Texas metro areas in 2026, a trend tracked by{' '}
        <a href="/blog" className="text-blue-600 hover:text-blue-800 underline">
          Objective Wire&apos;s Texas Investigations desk
        </a>
        .
      </p>

      <h2>What Comes Next | Investigation and Prosecution</h2>

      <p>
        With Parrish in custody and Shearrion identified, the investigation now shifts to the grand jury process. Under Texas law, capital murder cases require a grand jury indictment before proceeding to trial. The Travis County grand jury would review the evidence gathered by the sheriff&apos;s office and determine whether to formally indict Parrish on the capital murder charge.
      </p>

      <p>
        Objective Wire will continue to track this case. For ongoing coverage of public-safety and criminal justice reporting in Travis County and across Texas, follow the{' '}
        <a href="/blog" className="text-blue-600 hover:text-blue-800 underline">
          Texas Investigations hub
        </a>
        . Reporting on the EPIC City development dispute and eminent domain cases in the Austin metro can be found in our{' '}
        <a
          href="/blog/the-meadow-epic-city-texas-court-ruling-2026"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Meadow vs. EPIC City coverage
        </a>
        .
      </p>

      <p>
        <em>
          Source: KXAN, reporting by Isabella Bass, July 11, 2026. This article will be updated as the Travis County Sheriff&apos;s Office and District Attorney&apos;s office release additional information.
        </em>
      </p>
    </NewsArticle>
  );
}
