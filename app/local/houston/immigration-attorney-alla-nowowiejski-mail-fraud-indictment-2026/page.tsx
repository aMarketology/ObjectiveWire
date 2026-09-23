import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/local/houston/immigration-attorney-alla-nowowiejski-mail-fraud-indictment-2026';
const ARTICLE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = `https://www.objectivewire.org/thumbnails/local-houston-immigration-attorney-alla-nowowiejski-mail-fraud-indictment-2026.jpg`;

export const metadata: Metadata = {
  title: 'Houston Immigration Attorney Mail Fraud | Alla Nowowiejski Indictment',
  description:
    'Houston immigration attorney Alla Karash Nowowiejski, 44, was federally indicted for mail fraud and false statements after allegedly giving over 100 clients fake documents to cover unfiled visa applications.',
  keywords: [
    'Houston immigration attorney mail fraud',
    'Alla Nowowiejski Houston lawyer',
    'immigration visa fraud Texas',
    'Harris County Precinct 1 Constable',
    'fake USCIS documents',
    'work authorization fraud',
    'Houston immigration fraud indictment',
    'Southern District of Texas attorney fraud',
    'Alla Karash Nowowiejski arrest',
    'immigration attorney charged 2026',
    'mail fraud immigration lawyer Houston',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Houston Immigration Attorney Charged in Alleged Mail Fraud Scheme',
    description:
      'Alla Nowowiejski, a Houston immigration attorney, gave over 100 clients fake documents and stolen case numbers to cover unfiled visa applications. She faces up to 20 years in federal prison.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Carson Scott'],
    publishedTime: '2026-09-23T16:00:00Z',
    modifiedTime: '2026-09-23T16:00:00Z',
    section: 'News',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Houston immigration attorney Alla Nowowiejski mail fraud indictment' }],
    tags: ['Houston', 'Immigration Fraud', 'Mail Fraud', 'Alla Nowowiejski', 'Southern District of Texas'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Houston Immigration Attorney Indicted for Mail Fraud, 100+ Victims',
    description: 'Alla Nowowiejski allegedly gave clients fake documents and stolen case numbers to hide unfiled visa applications.',
    images: [OG_IMAGE],
  },
};

export default function ImmigrationAttorneyFraudPage() {
  return (
    <>
      <NewsArticleSchema
        title="Houston Immigration Attorney Mail Fraud | Alla Nowowiejski Indictment"
        description="Houston immigration attorney Alla Karash Nowowiejski, 44, was federally indicted for mail fraud and false statements after allegedly giving over 100 clients fake documents to cover unfiled visa applications."
        author="Carson Scott"
        authorUrl="https://www.objectivewire.org/authors/carson-scott"
        publishedTime="2026-09-23T16:00:00Z"
        modifiedTime="2026-09-23T16:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        section="News"
        keywords={[
          'Houston immigration attorney mail fraud',
          'Alla Nowowiejski Houston lawyer',
          'immigration visa fraud Texas',
        ]}
      />

      <NewsArticle
        title="Houston Immigration Attorney Charged in Alleged Mail Fraud Scheme, More Than 100 Victims"
        subtitle="Houston immigration attorney Alla Karash Nowowiejski, 44, was federally indicted for mail fraud and false statements after allegedly accepting payments from over 100 clients seeking work authorization, then failing to file their applications and giving them fake documents and stolen case numbers to hide the fraud."
        category="News"
        categoryColor="orange"
        topicTag="investigations"
        publishDate="September 23, 2026"
        publishedTime="2026-09-23T16:00:00Z"
        readTime="5 min read"
        author={{
          name: 'Carson Scott',
          role: 'Investigative Reporter, Objective Wire',
          authorSlug: 'carson-scott',
        }}
        slug={SLUG}
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Houston', item: '/local/houston' },
          { name: 'Immigration Attorney Fraud', item: SLUG },
        ]}
        tags={['Houston', 'Immigration Fraud', 'Mail Fraud', 'Alla Nowowiejski', 'Southern District of Texas']}
        keyTakeaways={[
          'Houston immigration attorney Alla Karash Nowowiejski, 44, was federally indicted for mail fraud and making false statements by the U.S. Attorney for the Southern District of Texas.',
          'Prosecutors allege she accepted payments from clients seeking work authorization and employment-based visas, but repeatedly failed to file the necessary applications or submitted only incomplete portions.',
          'Authorities say Nowowiejski gave clients falsified documents and stolen case reference numbers tied to active immigration cases belonging to entirely different people, to make them believe their applications were being processed.',
          'The Harris County Precinct 1 Constable Office identified more than 100 potential victims, with Constable Alan Rosen emphasizing the office serves everyone regardless of immigration status.',
          'If convicted, Nowowiejski faces up to 20 years in federal prison and a maximum fine of $250,000.',
        ]}
        keyTakeawaysColor="orange"
        faqItems={[
          {
            question: 'Who is Alla Nowowiejski?',
            answer:
              'Alla Karash Nowowiejski, 44, is a Houston-based immigration attorney arrested and federally indicted by the U.S. Attorney for the Southern District of Texas on mail fraud and false statements charges.',
          },
          {
            question: 'What is Alla Nowowiejski accused of?',
            answer:
              'She is accused of accepting payments from clients seeking work authorization and employment-based visas, then failing to file applications or submitting incomplete portions while keeping the money. To hide the fraud, she allegedly gave clients fake documents and stolen case numbers belonging to other people.',
          },
          {
            question: 'How many victims were affected?',
            answer:
              'Authorities have identified more than 100 potential victims. The Harris County Precinct 1 Constable Office continues to search for additional victims.',
          },
          {
            question: 'What is the maximum penalty if convicted?',
            answer:
              'Nowowiejski faces up to 20 years in federal prison and a maximum fine of $250,000 if convicted on the mail fraud and false statements charges.',
          },
          {
            question: 'How can potential victims report the fraud?',
            answer:
              'Anyone who believes they were defrauded can contact the Harris County Precinct 1 Constable Office at (713) 755-5200. The office emphasized it serves everyone regardless of immigration status.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Houston"
        moreFromHubHref="/local/houston"
      >
        <p>
          A Houston immigration attorney is facing severe federal charges after allegedly preying on vulnerable clients
          seeking legal work status in the United States. <strong>Alla Karash Nowowiejski</strong>, 44, has been arrested
          and formally indicted by the U.S. Attorney's Office for the Southern District of Texas on mail fraud and making
          false statements charges.
        </p>

        <p>
          According to the federal indictment, Nowowiejski accepted payments from clients who hired her to help establish
          or adjust their employment status. However, prosecutors allege she repeatedly failed to file the necessary
          applications, or only submitted incomplete portions of them, while keeping her clients' money.
        </p>

        <h2>Fake Documents and Stolen Case Numbers</h2>

        <p>
          The most alarming allegations involve the extreme lengths Nowowiejski allegedly took to cover up the unfiled
          paperwork. When clients inquired about the status of their visas, she is accused of providing them with falsified
          documents. Furthermore, prosecutors state she gave clients actual case reference numbers tied to active
          immigration cases belonging to entirely different people.
        </p>

        <p>
          These fabricated records and stolen numbers were allegedly used to make clients believe immigration authorities
          were actively processing their applications, trapping them in a cycle of false hope that investigators say
          continued for an extended period.
        </p>

        <h2>More Than 100 Potential Victims Identified</h2>

        <p>
          The Harris County Precinct 1 Constable Office, which played a key role in the investigation, noted that
          authorities have already identified more than 100 potential victims tied to the scheme.
        </p>

        <p>
          "Immigrants are already facing so many challenges, and the last thing people need is to be manipulated by a
          lawyer deceiving them," said Harris County Pct. 1 Constable Alan Rosen. "We could not allow that to happen, so
          we stepped in, investigated, and prevented the defendant from preying on this community any further."
        </p>

        <p>
          If convicted, Nowowiejski faces up to 20 years in federal prison and a maximum fine of $250,000. Authorities are
          actively searching for additional victims. Constable Rosen emphasized that anyone who believes they may have been
          defrauded should contact the Precinct 1 Constable Office at (713) 755-5200, explicitly noting, "We serve everyone
          regardless of their immigration status."
        </p>

        <h2>Sources</h2>
        <ul>
          <li><a href="https://www.fox26houston.com/news/houston-immigration-attorney-arrested-accused-mail-fraud-false-statements" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">FOX 26 Houston | Immigration Attorney Arrested, Accused of Mail Fraud</a></li>
          <li><a href="https://shepelskylaw.com/immigration-attorney-arrested-in-houston-for-alleged-fraud-scheme-what-immigrants-should-know/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Shepelsky Law | Immigration Attorney Arrested in Houston for Alleged Fraud Scheme</a></li>
        </ul>

        <p>
          For more Houston coverage, see the{' '}
          <Link href="/local/houston" className="text-blue-600 hover:text-blue-800 underline">
            oWire Houston hub
          </Link>{' '}
          or read our reporting on{' '}
          <Link href="/local/houston/access-dx-laboratory-36m-false-claims-act-settlement" className="text-blue-600 hover:text-blue-800 underline">
            the Access DX laboratory fraud settlement
          </Link>{' '}
          and{' '}
          <Link href="/local/houston/emylee-thai-fbi-most-wanted-fraud-ankle-monitor-vietnam" className="text-blue-600 hover:text-blue-800 underline">
            the Emylee Thai FBI fugitive case
          </Link>
          .
        </p>
      </NewsArticle>
    </>
  );
}