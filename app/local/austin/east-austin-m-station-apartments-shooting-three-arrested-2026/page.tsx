import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/local/austin/east-austin-m-station-apartments-shooting-three-arrested-2026';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE =
  'https://www.objectivewire.org/thumbnails/local-austin-east-austin-m-station-apartments-shooting-three-arrested-2026.jpg';

const PUBLISH_DATE_ISO = '2026-11-26T16:00:00Z';
const PUBLISH_DATE_DISPLAY = 'November 26, 2026';

export const metadata: Metadata = {
  title: 'Three Arrested After Child Critically Injured in Suspected East Austin Apartment Robbery',
  description:
    'Austin police arrested two juveniles and one adult after a child suffered life-threatening gunshot injuries during a suspected robbery at the M Station Apartments in East Austin.',
  keywords: [
    '3 arrested child critically injured East Austin apartments robbery',
    'M Station apartments shooting 2906 E MLK Blvd',
    'East Austin juvenile shot November 2026',
    'Austin Police Department aggravated robbery arrest',
    'Travis County juvenile court East Austin shooting',
    'Martin Luther King Jr Boulevard Austin crime',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'East Austin Shooting Investigation: Police Detain Adult and Two Juveniles After M Station Attack',
    description:
      'Austin police arrested two juveniles and one adult after a child suffered life-threatening gunshot injuries during a suspected robbery at the M Station Apartments in East Austin.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'Objective Wire',
    authors: ['Carson Scott'],
    publishedTime: PUBLISH_DATE_ISO,
    modifiedTime: PUBLISH_DATE_ISO,
    section: 'News',
    tags: [
      'Austin Police Department',
      'East Austin',
      'M Station Apartments',
      'Aggravated Robbery',
      'Travis County',
      'Juvenile Justice',
      'Public Safety',
    ],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'East Austin M Station Apartments shooting investigation along East Martin Luther King Jr. Boulevard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Three Arrested After Child Critically Injured in Suspected East Austin Apartment Robbery',
    description:
      'APD detained two juveniles and one adult after a Monday evening shooting at M Station Apartments on East MLK Jr. Boulevard left a child critically injured.',
    images: [OG_IMAGE],
  },
};

export default function EastAustinMStationShootingPage() {
  return (
    <>
      <NewsArticleSchema
        title="Three Arrested After Child Critically Injured in Suspected East Austin Apartment Robbery"
        description="Austin police arrested two juveniles and one adult after a child suffered life-threatening gunshot injuries during a suspected robbery at the M Station Apartments in East Austin."
        author="Carson Scott"
        authorUrl="https://www.objectivewire.org/authors/carson-scott"
        publishedTime={PUBLISH_DATE_ISO}
        modifiedTime={PUBLISH_DATE_ISO}
        articleUrl={PAGE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={675}
        section="News"
        keywords={[
          '3 arrested child critically injured East Austin apartments robbery',
          'M Station apartments shooting 2906 E MLK Blvd',
          'East Austin juvenile shot November 2026',
          'Austin Police Department aggravated robbery arrest',
          'Travis County juvenile court East Austin shooting',
          'Martin Luther King Jr Boulevard Austin crime',
        ]}
      />

      <NewsArticle
        title="Evening Shooting in Central East Austin: Three Suspects Detained After Child Suffers Critical Injuries"
        subtitle="Three suspects—including two juveniles and one adult—are in police custody following a Monday evening shooting that left a child critically injured during a suspected robbery at the M Station Apartments on East Martin Luther King Jr. Boulevard."
        category="Crime & Justice"
        categoryColor="red"
        topicTag="news"
        publishDate={PUBLISH_DATE_DISPLAY}
        publishedTime={PUBLISH_DATE_ISO}
        modifiedTime={PUBLISH_DATE_ISO}
        readTime="5 min read"
        author={{
          name: 'Carson Scott',
          role: 'Chief Investigative Writer, Objective Wire',
          authorSlug: 'carson-scott',
        }}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Austin', item: '/local/austin' },
          { name: 'M Station Apartments Shooting Arrests', item: SLUG },
        ]}
        keyTakeaways={[
          'Austin Police Department officers responded around 5:20 p.m. CST on Monday, November 23, 2026, to a shooting at M Station Apartments, 2906 E. Martin Luther King Jr. Blvd.',
          'A juvenile male was located with gunshot wounds and transported to a local hospital with critical, life-threatening injuries.',
          'Using witness descriptions, perimeter officers detained three suspects nearby—two juvenile males and one adult male—in connection with a suspected aggravated robbery.',
          'Prosecution splits across dual Travis County dockets: juvenile proceedings at the Gardner Betts Juvenile Justice Center and adult felony review in Travis County District Court.',
          'Detectives are awaiting unsealed probable cause affidavits, reviewing East MLK corridor surveillance footage, and monitoring the child’s medical condition for potential charge enhancements.',
        ]}
        keyTakeawaysColor="red"
        faqItems={[
          {
            question: 'Where and when did the East Austin apartment shooting happen?',
            answer:
              'Austin police responded to emergency shooting calls at approximately 5:20 p.m. CST on Monday, November 23, 2026, at the M Station Apartments, located at 2906 East Martin Luther King Jr. Boulevard in Central East Austin.',
          },
          {
            question: 'Who was taken into custody by the Austin Police Department?',
            answer:
              'Following witness descriptions of three individuals fleeing the complex, perimeter units detained three suspects nearby: two juvenile males and one adult male. APD is investigating the incident as a suspected aggravated robbery.',
          },
          {
            question: 'How are the juvenile and adult suspects prosecuted in Travis County?',
            answer:
              'Under the Texas Family Code, suspects under age 17 are processed through the juvenile justice system at the Gardner Betts Juvenile Justice Center with statutory confidentiality, unless prosecutors seek discretionary transfer to adult court. The adult male suspect is booked into the Travis County Jail for magistrate bond and probable cause review.',
          },
          {
            question: 'What happens next in the APD investigation?',
            answer:
              'Investigators are processing ballistic evidence, reviewing residential and transit-corridor surveillance along East MLK Jr. Boulevard, monitoring the victim’s hospital recovery, and preparing formal charging affidavits.',
          },
        ]}
        tags={[
          'Austin Police Department',
          'East Austin',
          'M Station Apartments',
          'Aggravated Robbery',
          'Travis County',
          'Juvenile Justice',
          'East MLK Blvd',
        ]}
        slug={SLUG}
        url={PAGE_URL}
        thumbnail={{
          src: OG_IMAGE,
          alt: 'M Station Apartments courtyard in East Austin along East Martin Luther King Jr. Boulevard',
          aspectRatio: '16:9',
        }}
      >
        <p className="lead font-medium text-lg text-neutral-800 dark:text-neutral-200">
          <strong>AUSTIN, Texas</strong> — Three suspects—including two juveniles and one adult—are in police custody
          following a Monday evening shooting that left a child critically injured during a suspected robbery at an East
          Austin apartment complex.
        </p>

        <p>
          According to the <strong>Austin Police Department (APD)</strong>, patrol officers responded to emergency
          shooting calls around <strong>5:20 p.m. on Monday, November 23, 2026</strong>, at the{' '}
          <strong>M Station Apartments</strong>, located at <strong>2906 East Martin Luther King Jr. Boulevard</strong>.
          Arriving officers located a juvenile male suffering from gunshot wounds. Emergency medical crews transported
          the child to a local hospital with life-threatening injuries.
        </p>

        <p>
          Witnesses at the scene provided responding officers with physical descriptions of three individuals seen
          fleeing the complex immediately after gunfire erupted. Perimeter units quickly canvassed the surrounding
          Central East Austin corridor, locating and detaining all three suspects nearby.
        </p>

        <h2>Incident Matrix: East Austin Apartment Shooting &amp; Arrests</h2>
        <p>
          The investigation involves parallel adult and juvenile criminal dockets in Travis County following the rapid
          apprehension of the three suspects.
        </p>

        <div className="my-8 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-sm font-bold uppercase tracking-wider text-red-700 dark:text-red-400 mb-4">
            M Station Apartments Investigation Profile
          </h3>
          <pre className="font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 overflow-x-auto whitespace-pre p-2 leading-relaxed">
{`M Station Apartments Investigation Profile
├── Incident Date & Time: Monday, November 23, 2026, at approximately 5:20 p.m. CST
├── Location: M Station Apartments, 2906 E. Martin Luther King Jr. Blvd. (Central East Austin)
├── Victim Status: Juvenile male hospitalized with critical, life-threatening injuries
├── Suspects in Custody: 3 total (2 juvenile males and 1 adult male)
├── Suspected Motive: Aggravated robbery
└── Lead Investigative Agency: Austin Police Department (APD) Violent Crimes / Aggravated Assault & Robbery Units`}
          </pre>
        </div>

        <h2>1. The Response: Rapid Perimeter Containment on East MLK Boulevard</h2>

        <p>
          The shooting occurred during early evening hours when residents and families were returning home along the busy
          East Martin Luther King Jr. Boulevard corridor.
        </p>

        <div className="my-6 rounded-lg border border-red-200 bg-red-50/50 p-4 text-sm dark:border-red-950/60 dark:bg-red-950/20">
          <p className="font-semibold text-red-950 dark:text-red-300 mb-1">
            The Police Response &amp; Investigation Pipeline:
          </p>
          <p className="text-red-900 dark:text-red-400 font-mono text-xs sm:text-sm">
            [5:20 PM Shooting Call at 2906 E. MLK Blvd.] ➔ [Victim Transported in Critical Condition] ➔ [Witness
            Descriptions Broadcast] ➔ [3 Suspects Detained Nearby]
          </p>
        </div>

        <p>
          Officers secured the courtyard and surrounding walkways at the M Station complex to collect ballistic evidence
          and interview residents, while additional units established a search perimeter in the immediate neighborhood.
          Based on witness accounts from the scene, police detained two juvenile males and one adult male a short
          distance from the apartment complex.
        </p>

        <p>
          Residents at the property voiced heightened safety concerns following the incident, noting the proximity of the
          shooting to family living spaces and common areas during after-school and evening hours.
        </p>

        <h2>2. Dual-Track Legal Proceedings: Adult vs. Juvenile Jurisdiction</h2>

        <p>
          Because the three individuals taken into custody include both an adult suspect and two minors, formal
          prosecution in Travis County splits across separate statutory tracks under the{' '}
          <strong>Texas Penal Code</strong> and the <strong>Texas Family Code</strong>:
        </p>

        <ul>
          <li>
            <strong>Juvenile Proceedings (Gardner Betts Juvenile Justice Center):</strong> Under Texas law, suspects under
            age 17 are processed through the juvenile justice system rather than adult criminal court, and their
            identities are confidential by statute. Prosecutors with the Travis County Attorney’s Office evaluate
            juvenile detention petitions and determine whether the severity of the suspected robbery and shooting warrants
            seeking discretionary transfer (certification) to adult district court.
          </li>
          <li>
            <strong>Adult Criminal Docket (Travis County District Court):</strong> The adult male suspect faces booking
            through the Travis County Jail, where formal charges—such as aggravated robbery or aggravated assault with a
            deadly weapon, both first- or second-degree felonies depending on serious bodily injury allegations—are
            reviewed by a magistrate for bond setting and probable cause affidavits.
          </li>
        </ul>

        <p className="text-sm italic text-neutral-600 dark:text-neutral-400">
          (Note: All suspects are presumed innocent unless and until proven guilty in a court of law.)
        </p>

        <h2>3. What’s Next: Forensics, Charging Affidavits, and Medical Updates</h2>

        <p>
          As Austin police detectives continue processing physical evidence from the scene, several key developments
          will define the next phase of the case:
        </p>

        <ul>
          <li>
            <strong>Unsealing of the Adult Probable Cause Affidavit:</strong> Once formal charges are filed and
            magistrated in Travis County, the adult suspect’s arrest affidavit will detail the specific sequence of
            events inside the M Station complex, including what property was targeted during the suspected robbery and
            which suspect is alleged to have fired the weapon.
          </li>
          <li>
            <strong>Victim Condition &amp; Charge Enhancements:</strong> Detectives remain in close contact with
            hospital trauma physicians monitoring the injured child&apos;s recovery, as medical outcomes directly govern
            the severity of felony charges filed by prosecutors.
          </li>
          <li>
            <strong>Neighborhood Patrols &amp; Tip Line:</strong> APD investigators are continuing to review residential
            surveillance and security camera footage from businesses and transit stops along East MLK Jr. Boulevard to
            confirm no additional accomplices were involved.
          </li>
        </ul>

        <h2>Broadcast Coverage &amp; Resident Reaction</h2>
        <p>
          For local broadcast coverage of the police response and resident reactions following the incident, watch the
          report below:
        </p>

        <div className="my-8 space-y-6 not-prose">
          <div className="overflow-hidden rounded-xl border border-neutral-200 bg-black dark:border-neutral-800">
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/Usiw7CQ7LhA"
                title="Mother shares safety concerns after shooting in east Austin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-3 bg-neutral-900 text-neutral-300 text-xs flex justify-between items-center">
              <span>Mother shares safety concerns after shooting in east Austin</span>
              <span className="text-neutral-400">Local Broadcast Coverage</span>
            </div>
          </div>
        </div>

        <h2>Verifiable Sources &amp; Further Reading</h2>
        <ul className="text-sm space-y-2">
          <li>
            <strong>Local Broadcast Reporting:</strong>{' '}
            <a
              href="https://www.fox7austin.com/news/east-austin-shooting-leaves-1-injured-3-suspects-custody-apd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-700"
            >
              FOX 7 Austin: East Austin Shooting Leaves 1 Injured; 3 Suspects in Custody: APD
            </a>
          </li>
          <li>
            <strong>Regional Crime Coverage:</strong>{' '}
            <a
              href="https://hoodline.com/2026/11/juvenile-shot-at-east-austin-apartments-three-suspects-caught-nearby/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-700"
            >
              Hoodline Austin: Juvenile Shot at East Austin Apartment Complex, Three Suspects Caught Nearby
            </a>
          </li>
          <li>
            <strong>Broadcast Video Report:</strong>{' '}
            <a
              href="https://www.youtube.com/watch?v=Usiw7CQ7LhA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-700"
            >
              YouTube: Mother shares safety concerns after shooting in east Austin
            </a>
          </li>
          <li>
            <strong>More Austin Coverage:</strong>{' '}
            <Link href="/local/austin" className="text-blue-600 underline hover:text-blue-700">
              Objective Wire: Austin Local Investigative Hub
            </Link>{' '}
            |{' '}
            <Link
              href="/local/austin/apd-mail-theft-fraud-ring-eight-arrests-2026"
              className="text-blue-600 underline hover:text-blue-700"
            >
              APD Mail Theft Fraud Ring: Eight Arrested in Raids
            </Link>
          </li>
        </ul>

        <p>
          This report captures the immediate aftermath at the M Station Apartments on East Martin Luther King Jr.
          Boulevard and highlights safety concerns from residents after a child was critically injured.
        </p>
      </NewsArticle>
    </>
  );
}
