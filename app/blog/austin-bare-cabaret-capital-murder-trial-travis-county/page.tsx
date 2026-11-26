import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/blog/austin-bare-cabaret-capital-murder-trial-travis-county';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = 'https://www.objectivewire.org/thumbnails/blog-austin-bare-cabaret-capital-murder-trial-travis-county.jpg';

// Scheduled for Sunday, November 29, 2026
const PUBLISH_DATE_DISPLAY = 'November 29, 2026';

export const metadata: Metadata = {
  title: "Bare Cabaret Double Homicide: Capital Murder Defendants Remain in Travis County Pre-Trial Proceedings",
  description:
    'James Mackeise Shearrion (19) and Kevin Curtis Parrish (20) face capital murder charges in Travis County over the July 5, 2026 double homicide outside Bare Cabaret in northeast Austin.',
  keywords: [
    'Bare Cabaret capital murder trial Travis County',
    'James Mackeise Shearrion Kevin Curtis Parrish',
    'Bare Cabaret Austin shooting July 5 2026',
    'VT Wood-Davion Olden Hornsby Layla Williamson',
    'Precious Josslyn Shearrion hindering apprehension',
    'Travis County Sheriff Office 9705 Reservoir Court',
    '4K 5K gang rivalry Austin affidavit',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Bare Cabaret Double Homicide: Capital Murder Defendants Remain in Travis County Pre-Trial Proceedings",
    description:
      'James Mackeise Shearrion (19) and Kevin Curtis Parrish (20) face capital murder charges in Travis County over the July 5, 2026 double homicide outside Bare Cabaret in northeast Austin.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'Objective Wire',
    authors: ['Carson Scott'],
    publishedTime: '2026-11-29T14:00:00Z',
    modifiedTime: '2026-11-29T14:00:00Z',
    section: 'Investigations',
    tags: [
      'Bare Cabaret',
      'Travis County',
      'Austin Crime',
      'Capital Murder',
      'Pre-Trial',
      'TCSO',
    ],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Bare Cabaret northeast Austin double homicide capital murder pre-trial proceedings in Travis County',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bare Cabaret Double Homicide: Capital Murder Case Remains Pre-Trial",
    description:
      'Update on Travis County capital murder proceedings against James Shearrion and Kevin Parrish following the July 5 shooting outside Bare Cabaret.',
    images: [OG_IMAGE],
  },
};

export default function BareCabaretCapitalMurderTrialPage() {
  return (
    <>
      <NewsArticleSchema
        title="Bare Cabaret Double Homicide: Capital Murder Defendants Remain in Travis County Pre-Trial Proceedings"
        description="James Mackeise Shearrion (19) and Kevin Curtis Parrish (20) face capital murder charges in Travis County over the July 5, 2026 double homicide outside Bare Cabaret in northeast Austin."
        author="Carson Scott"
        authorUrl="https://www.objectivewire.org/authors/carson-scott"
        publishedTime="2026-11-29T14:00:00Z"
        modifiedTime="2026-11-29T14:00:00Z"
        articleUrl={PAGE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Investigations"
        keywords={[
          'Bare Cabaret capital murder trial Travis County',
          'James Mackeise Shearrion Kevin Curtis Parrish',
          'Bare Cabaret Austin shooting July 5 2026',
          'Precious Josslyn Shearrion hindering apprehension',
        ]}
      />

      <NewsArticle
        title="Bare Cabaret Double Homicide: Capital Murder Defendants Remain in Travis County Pre-Trial Proceedings"
        subtitle="Two men—James Mackeise Shearrion, 19, and Kevin Curtis Parrish, 20—face capital murder charges in Travis County stemming from the July 5, 2026 double homicide in the crowded parking lot of Bare Cabaret in northeast Austin. As of late November 2026, the docket remains in pre-trial proceedings with no trial date publicly scheduled."
        category="Investigations"
        categoryColor="red"
        topicTag="investigations"
        publishDate={PUBLISH_DATE_DISPLAY}
        readTime="5 min read"
        author={{
          name: 'Carson Scott',
          role: 'Chief Investigative Writer, Objective Wire',
          authorSlug: 'carson-scott',
        }}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Legal & Investigations', item: '/blog' },
          { name: 'Bare Cabaret Capital Murder Case', item: SLUG },
        ]}
        keyTakeaways={[
          'James Mackeise Shearrion (19) and Kevin Curtis Parrish (20) are charged with capital murder of multiple persons in connection with the July 5, 2026 shooting at Bare Cabaret (9705 Reservoir Court) in northeast Austin.',
          'The shooting erupted just before 4:00 a.m. in a parking lot where nearly 400 people were gathered, fatally injuring VT Wood-Davion Olden Hornsby (23) and Layla Williamson (19).',
          'Parrish was arrested on July 11, and Shearrion surrendered on July 13 alongside his mother, Precious Josslyn Shearrion (38), who faces charges of hindering apprehension and tampering with evidence.',
          'Arrest affidavits cite nearby surveillance footage capturing suspects approaching the victims, drawing handguns, and fleeing in a small black SUV, with investigators noting a possible link to a 4K and 5K gang rivalry.',
          'As of late November 2026, the case remains in pre-trial proceedings with no verdict or trial setting publicly announced.',
        ]}
        keyTakeawaysColor="red"
        faqItems={[
          {
            question: 'Who is charged in the Bare Cabaret double homicide in Austin?',
            answer:
              'James Mackeise Shearrion (19) and Kevin Curtis Parrish (20) are charged with capital murder of multiple persons. Shearrion’s mother, Precious Josslyn Shearrion (38), was also charged with hindering apprehension and tampering with evidence.',
          },
          {
            question: 'Has a trial date or verdict been reached in the Bare Cabaret case?',
            answer:
              'No. Following their July 2026 arrests, the case remains in pre-trial proceedings in Travis County, with no trial date or verdict publicly reported as of late November 2026.',
          },
          {
            question: 'Who were the victims of the July 5, 2026 Bare Cabaret shooting?',
            answer:
              'VT Wood-Davion Olden Hornsby (23) was pronounced dead at the scene, and Layla Williamson (19) died shortly afterward at a local hospital.',
          },
          {
            question: 'What did the Travis County arrest affidavits reveal?',
            answer:
              'Affidavits obtained by local media stated that surveillance video showed suspects approaching the victims, drawing handguns, and fleeing in a small black SUV, and noted the shooting may be connected to a rivalry between the 4K and 5K gangs.',
          },
        ]}
        tags={[
          'Bare Cabaret',
          'Travis County',
          'Austin Crime',
          'Capital Murder',
          'Pre-Trial',
          'TCSO',
        ]}
        slug="austin-bare-cabaret-capital-murder-trial-travis-county"
        url={PAGE_URL}
        thumbnail={{
          src: OG_IMAGE,
          alt: 'Bare Cabaret northeast Austin double homicide capital murder pre-trial proceedings in Travis County',
        }}
      >
        <p className="lead font-medium text-lg text-neutral-800 dark:text-neutral-200">
          <strong>AUSTIN, Texas</strong> — Two men, <strong>James Mackeise Shearrion</strong> (19) and{' '}
          <strong>Kevin Curtis Parrish</strong> (20), face capital murder charges in Travis County stemming from the
          July 5, 2026, double homicide in the parking lot of <strong>Bare Cabaret</strong> in northeast Austin. The
          case remains in pre-trial proceedings following their July arrests, with no trial verdict or court date
          publicly reported as of late November 2026.
        </p>

        <div className="my-8 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-4">
            Travis County Capital Murder Case Profile
          </h3>
          <pre className="font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 overflow-x-auto whitespace-pre p-2 leading-relaxed">
{`TRAVIS COUNTY CAPITAL MURDER DOCKET PROFILE
├── Incident Date & Location: July 5, 2026 (~4:00 a.m.) · Bare Cabaret (9705 Reservoir Court, NE Austin)
├── Victims: VT Wood-Davion Olden Hornsby (23) & Layla Williamson (19)
├── Principal Defendants: Kevin Curtis Parrish (20) & James Mackeise Shearrion (19)
├── Capital Charge: Capital Murder of Multiple Persons (Capital Felony)
├── Related Arrest: Precious Josslyn Shearrion (38) — Hindering Apprehension & Tampering with Evidence
└── Current Status (Nov. 2026): Pre-trial proceedings in Travis County; no trial date publicly set`}
          </pre>
        </div>

        <h2>Case Overview &amp; Key Facts</h2>

        <ul>
          <li>
            <strong>The Incident:</strong> Just before 4:00 a.m. on July 5, 2026, Travis County Sheriff’s Office (TCSO)
            deputies responded to a shooting in the crowded parking lot of Bare Cabaret (9705 Reservoir Court) near U.S.
            290, where nearly 400 people were gathered.
          </li>
          <li>
            <strong>Victims:</strong> <strong>VT Wood-Davion Olden Hornsby</strong> (23) was pronounced dead at the
            scene, and <strong>Layla Williamson</strong> (19) died shortly after at a local hospital.
          </li>
          <li>
            <strong>Charges &amp; Arrests:</strong> As reported by <em>KVUE</em> and <em>CBS Austin</em>, Parrish was
            arrested on July 11 and Shearrion surrendered on July 13; both were charged with capital murder of multiple
            persons, a capital felony. Shearrion’s mother, <strong>Precious Josslyn Shearrion</strong> (38), also
            surrendered on July 13 on charges of hindering apprehension and tampering with evidence.
          </li>
          <li>
            <strong>Investigation Details:</strong> According to arrest affidavits obtained by <em>KXAN</em>, nearby
            surveillance video captured suspects approaching the victims, drawing handguns, and fleeing in a small black
            SUV. Investigators noted the shooting may be connected to a rivalry between the 4K and 5K gangs.
          </li>
        </ul>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 border-l-2 border-neutral-300 dark:border-neutral-700 pl-4 my-6">
          <em>Note:</em> Another high-profile Travis County capital murder trial concluded in November 2026 involving{' '}
          <strong>Shane James Jr.</strong>, who was convicted and sentenced to life without parole for a separate 2023
          Austin shooting spree.
        </p>

        <h2>Video Coverage &amp; Broadcast Reporting</h2>
        <p>
          Review local Austin broadcast coverage detailing the arrests and custody status of both suspects in the Bare
          Cabaret double homicide:
        </p>

        <div className="my-8 space-y-6 not-prose">
          <div className="overflow-hidden rounded-xl border border-neutral-200 bg-black dark:border-neutral-800">
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/E3mcI-KFJPI"
                title="Both suspects in deadly shooting outside Austin strip club now in custody"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-3 bg-neutral-900 text-neutral-300 text-xs flex justify-between items-center">
              <span>Both suspects in deadly shooting outside Austin strip club now in custody</span>
              <span className="text-neutral-400">KVUE · Austin</span>
            </div>
          </div>
        </div>

        <h2>Verifiable Sources &amp; Court Reporting</h2>
        <ul className="text-sm space-y-2">
          <li>
            <strong>Suspect Surrender &amp; Related Charges:</strong>{' '}
            <a
              href="https://cbsaustin.com/news/local/second-suspect-surrenders-in-deadly-ne-austin-nightclub-shooting"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 underline hover:text-red-700"
            >
              CBS Austin: Second Suspect Surrenders in Deadly NE Austin Nightclub Shooting
            </a>
          </li>
          <li>
            <strong>Affidavit &amp; Gang Rivalry Details:</strong>{' '}
            <a
              href="https://www.kxan.com/news/local/travis-county/double-homicide-outside-austin-strip-club-could-be-gang-related-affidavit-says/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 underline hover:text-red-700"
            >
              KXAN: Double Homicide Outside Austin Strip Club Could Be Gang-Related, Affidavit Says
            </a>
          </li>
          <li>
            <strong>Victims &amp; Capital Charges:</strong>{' '}
            <a
              href="https://www.kvue.com/article/news/crime/austin-strip-club-shooting-travis-county-bare-cabaret-suspects-arrest/269-791d5668-7ba8-4c84-9824-040fb1e49bc6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 underline hover:text-red-700"
            >
              KVUE: Suspects Arrested in Travis County Bare Cabaret Double Homicide
            </a>
          </li>
          <li>
            <strong>Initial TCSO Response:</strong>{' '}
            <a
              href="https://www.kut.org/crime-justice/2026-07-05/austin-tx-shooting-july-4-club-bar-police"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 underline hover:text-red-700"
            >
              KUT: Austin Shooting Near U.S. 290 Leaves Two Dead
            </a>
          </li>
          <li>
            <strong>Separate Travis County Verdict (Shane James Jr.):</strong>{' '}
            <a
              href="https://districtattorney.traviscountytx.gov/shane-james-capital-murder-multiple-persons-committing-burglary/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 underline hover:text-red-700"
            >
              Travis County District Attorney: Shane James Capital Murder Conviction &amp; Life Sentence
            </a>
          </li>
        </ul>
      </NewsArticle>
    </>
  );
}
