import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/local/greater-texas/livingston-isd-pto-bank-statement-fraud-arrest-2026';
const ARTICLE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = `https://www.objectivewire.org/thumbnails/local-greater-texas-livingston-isd-pto-bank-statement-fraud-arrest-2026.jpg`;

export const metadata: Metadata = {
  title: 'Livingston ISD PTO Fraud | Matthew Anderson Arrest',
  description:
    'A 40-year-old Livingston man, Matthew Anderson, has been arrested for allegedly falsifying bank statements from a Livingston ISD Parent Teacher Organization for personal financial gain.',
  keywords: [
    'Livingston ISD PTO fraud',
    'Matthew Anderson Livingston Texas',
    'Livingston Police Department forgery',
    'Livingston PTO bank statements',
    'Polk County Jail Texas Rangers',
    'Livingston ISD parent-teacher organization',
    'PTO fraud Texas 2026',
    'Livingston Texas forgery arrest',
    'Texas Rangers PTO investigation',
    'Polk County forgery charges',
    'school PTO embezzlement Texas',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Livingston ISD PTO Member Arrested for Alleged Bank Statement Fraud',
    description:
      'Livingston Police and the Texas Rangers arrested 40-year-old Matthew Anderson on forgery charges after he allegedly falsified PTO bank statements for personal financial gain.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-09-23T14:00:00Z',
    modifiedTime: '2026-09-23T14:00:00Z',
    section: 'News',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Livingston ISD PTO fraud arrest, Matthew Anderson, Polk County Jail' }],
    tags: ['Livingston ISD', 'PTO Fraud', 'Matthew Anderson', 'Polk County', 'Texas Rangers'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Police Arrest Livingston Man Accused of Falsifying PTO Bank Statements',
    description: 'Matthew Anderson, 40, faces forgery charges after a joint Livingston PD and Texas Rangers investigation into PTO bank statement fraud.',
    images: [OG_IMAGE],
  },
};

export default function LivingstonPtoFraudPage() {
  return (
    <>
      <NewsArticleSchema
        title="Livingston ISD PTO Fraud | Matthew Anderson Arrest"
        description="A 40-year-old Livingston man, Matthew Anderson, has been arrested for allegedly falsifying bank statements from a Livingston ISD Parent Teacher Organization for personal financial gain."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.org/authors/jack-brennan"
        publishedTime="2026-09-23T14:00:00Z"
        modifiedTime="2026-09-23T14:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        section="News"
        keywords={[
          'Livingston ISD PTO fraud',
          'Matthew Anderson Livingston Texas',
          'Livingston Police Department forgery',
        ]}
      />

      <NewsArticle
        title="Livingston ISD PTO Member Arrested for Alleged Bank Statement Fraud"
        subtitle="A local parent-teacher organization board member has been taken into custody following a joint investigation into falsified financial documents. Livingston Police and the Texas Rangers arrested 40-year-old Matthew Anderson on forgery charges after he allegedly altered PTO bank statements for personal financial gain."
        category="News"
        categoryColor="orange"
        topicTag="investigations"
        publishDate="September 23, 2026"
        publishedTime="2026-09-23T14:00:00Z"
        readTime="4 min read"
        author={{
          name: 'Jack Brennan',
          role: 'Reporter, Objective Wire',
          authorSlug: 'jack-brennan',
        }}
        slug={SLUG}
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Greater Texas', item: '/local/greater-texas' },
          { name: 'Livingston PTO Fraud', item: SLUG },
        ]}
        tags={['Livingston ISD', 'PTO Fraud', 'Matthew Anderson', 'Polk County', 'Texas Rangers']}
        keyTakeaways={[
          'Matthew Anderson, 40, of Livingston, Texas, was arrested and charged with forgery to obtain property or services totaling between $2,500 and $30,000.',
          'The charges stem from allegations that Anderson falsified bank statements belonging to a Livingston Independent School District Parent Teacher Organization for his own personal financial gain.',
          'The Livingston Police Department was first made aware of the possible fraud involving the PTO member on September 11, 2026.',
          'Detectives from the Livingston Police Department partnered with the Texas Rangers to investigate, and obtained an arrest warrant on Tuesday, September 22.',
          'Anderson was booked into the Polk County Jail, and authorities are investigating whether the fraudulent activity extends beyond the school PTO.',
        ]}
        keyTakeawaysColor="orange"
        faqItems={[
          {
            question: 'Who was arrested in the Livingston ISD PTO fraud case?',
            answer:
              'Matthew Anderson, a 40-year-old Livingston, Texas man and PTO board member, was arrested and charged with forgery to obtain property or services totaling between $2,500 and $30,000.',
          },
          {
            question: 'What is Matthew Anderson accused of?',
            answer:
              'Anderson is accused of falsifying bank statements belonging to a Livingston Independent School District Parent Teacher Organization to obscure the misappropriation of funds for his own personal financial gain.',
          },
          {
            question: 'Who investigated the Livingston PTO fraud?',
            answer:
              'The Livingston Police Department led the investigation in partnership with the Texas Rangers. The case was reported on September 11, 2026, and an arrest warrant was obtained on September 22, 2026.',
          },
          {
            question: 'Where is Matthew Anderson being held?',
            answer:
              'Anderson was taken into custody and booked into the Polk County Jail.',
          },
          {
            question: 'Is the Livingston PTO fraud investigation still ongoing?',
            answer:
              'Yes. Authorities have noted this remains an active investigation and are working to determine if the fraudulent activity extends beyond the school PTO. Anyone with information is urged to contact the Livingston Police Department.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Greater Texas"
        moreFromHubHref="/local/greater-texas"
      >
        <p>
          A local parent-teacher organization board member has been taken into custody following a joint investigation into
          falsified financial documents. The Livingston Police Department announced on Tuesday that 40-year-old{' '}
          <strong>Matthew Anderson</strong> was arrested and charged with forgery to obtain property or services totaling
          between $2,500 and $30,000.
        </p>

        <p>
          The charges stem from allegations that Anderson falsified bank statements belonging to a Livingston Independent
          School District Parent Teacher Organization for his own personal financial gain. According to law enforcement, the
          LPD was first made aware of the possible fraud involving the PTO member on <strong>September 11, 2026</strong>.
        </p>

        <h2>A Joint Investigation Leads to Arrest</h2>

        <p>
          Following the initial report, detectives from the Livingston Police Department teamed up with the{' '}
          <strong>Texas Rangers</strong> to launch a full investigation into the incident. During the course of the inquiry,
          investigators determined that Anderson allegedly altered PTO bank statements to obscure the misappropriation of
          funds.
        </p>

        <p>
          On Tuesday, <strong>September 22</strong>, detectives successfully obtained a warrant for his arrest. Anderson was
          taken into custody and subsequently booked into the <strong>Polk County Jail</strong>.
        </p>

        <h2>Police Seek Additional Information</h2>

        <p>
          While the arrest marks a significant step, authorities have noted that this remains an active and ongoing
          investigation. Livingston detectives are currently attempting to determine if the fraudulent activity extends
          beyond the school PTO.
        </p>

        <p>
          The LPD is urging any other individuals, local businesses, or community organizations that believe they may have
          been victimized by Anderson, or who hold information related to the case, to contact the Livingston Police
          Department or their local law enforcement agency immediately.
        </p>

        <h2>Sources</h2>
        <ul>
          <li><a href="https://www.cbs19.tv/article/news/crime/man-charged-falsifying-pto-statements/501-7c66a9ad-4acc-4f6d-9c9f-408241532a7d" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">CBS19 | Man Charged With Falsifying PTO Bank Statements for Personal Gain</a></li>
        </ul>

        <div className="mt-6">
          <a
            href="https://www.youtube.com/watch?v=QXkjfQ0e5ik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            Watch the News Report on YouTube
          </a>
        </div>

        <p>
          For more Texas investigations coverage, see the{' '}
          <Link href="/local/greater-texas" className="text-blue-600 hover:text-blue-800 underline">
            oWire Greater Texas hub
          </Link>{' '}
          or read our reporting on{' '}
          <Link href="/local/greater-texas/georgetown-the-district-400m-fraud-verdict-2026" className="text-blue-600 hover:text-blue-800 underline">
            the $400M Georgetown fraud verdict
          </Link>.
        </p>
      </NewsArticle>
    </>
  );
}