import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';
import { SITE_CONFIG } from '@/lib/site-config';

export const revalidate = 86400;

const SLUG = '/ufc/conor-mcgregor-max-holloway-last-dance-2027';
const ARTICLE_URL = `${SITE_CONFIG.url}${SLUG}`;
const OG_IMAGE = `${SITE_CONFIG.url}/thumbnails/ufc-conor-mcgregor-max-holloway-last-dance-2027.jpg`;

export const metadata: Metadata = {
  title: 'Conor McGregor Max Holloway | Last Dance Fight 2027',
  description:
    'Conor McGregor has called for a "Last Dance" trilogy fight against Max Holloway in 2027, targeting a return to the Octagon against the BMF champion in what would be one of the biggest fights in UFC history.',
  keywords: [
    'Conor McGregor Max Holloway',
    'Conor McGregor Last Dance 2027',
    'McGregor Holloway trilogy',
    'Conor McGregor return UFC',
    'Max Holloway BMF champion',
    'UFC 2027 McGregor',
    'McGregor next fight',
    'McGregor Holloway 3',
    'Conor McGregor news 2026',
    'UFC news 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Conor McGregor Calls for Last Dance vs Max Holloway in 2027',
    description:
      'McGregor wants a trilogy fight against BMF champion Max Holloway, calling it his "Last Dance." The two first fought in 2013, with McGregor winning by decision.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-07-28T15:00:00Z',
    modifiedTime: '2026-07-28T15:00:00Z',
    section: 'Sports',
    tags: ['Conor McGregor', 'Max Holloway', 'UFC', 'MMA', 'BMF'],
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'McGregor Wants Holloway Trilogy for His Last Dance',
    description: 'Conor McGregor is calling for one more fight. The target: Max Holloway. The stakes: legacy.',
    images: [OG_IMAGE],
  },
};

export default function McGregorHollowayLastDancePage() {
  return (
    <>
      <NewsArticleSchema
        title="Conor McGregor Max Holloway | Last Dance Fight 2027"
        description="Conor McGregor has called for a Last Dance trilogy fight against Max Holloway in 2027, targeting a return to the Octagon against the BMF champion."
        author="Jack Brennan"
        authorUrl={`${SITE_CONFIG.url}/authors/jack-brennan`}
        publishedTime="2026-07-28T15:00:00Z"
        modifiedTime="2026-07-28T15:00:00Z"
        articleUrl={ARTICLE_URL}
        section="Sports"
        keywords={[
          'Conor McGregor Max Holloway',
          'McGregor Holloway trilogy',
          'Conor McGregor return UFC',
        ]}
      />

      <NewsArticle
        title="Conor McGregor Calls for Last Dance Trilogy Fight Against Max Holloway in 2027"
        subtitle="Conor McGregor has called for a 'Last Dance' trilogy fight against BMF champion Max Holloway, targeting a return to the Octagon in 2027. The two first fought in 2013, with McGregor winning by unanimous decision, before Holloway evened the rivalry with a dominant performance years later."
        category="Sports"
        categoryColor="green"
        topicTag="sports"
        publishDate="July 28, 2026"
        readTime="4 min read"
        author={{
          name: 'Jack Brennan',
          role: 'Sports',
          authorSlug: 'jack-brennan',
        }}
        tags={['Conor McGregor', 'Max Holloway', 'UFC', 'MMA', 'BMF']}
        slug="ufc-conor-mcgregor-max-holloway-last-dance-2027"
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'UFC', item: '/ufc' },
          { name: 'McGregor vs Holloway', item: SLUG },
        ]}
        keyTakeaways={[
          'Conor McGregor has publicly called for a "Last Dance" trilogy fight against BMF champion Max Holloway, targeting a 2027 return to the Octagon.',
          'McGregor and Holloway first fought in 2013, with McGregor winning by unanimous decision. Holloway later evened the rivalry with a dominant performance.',
          'McGregor has framed the potential fight as the final chapter of his career, using the "Last Dance" branding popularized by Michael Jordan\'s documentary.',
          'Holloway currently holds the BMF title and remains one of the most respected fighters on the UFC roster, making the matchup one of the biggest possible draws in the sport.',
          'The UFC has not yet commented on McGregor\'s callout, and no official negotiations have been confirmed.',
        ]}
        keyTakeawaysColor="green"
        faqItems={[
          {
            question: 'Is Conor McGregor fighting Max Holloway?',
            answer:
              'Conor McGregor has publicly called for a trilogy fight against Max Holloway in 2027, but the UFC has not confirmed any negotiations or a date for the bout.',
          },
          {
            question: 'What is McGregor\'s record against Holloway?',
            answer:
              'McGregor and Holloway have fought twice. McGregor won the first meeting by unanimous decision in 2013. Holloway won the rematch, evening the rivalry at one win each.',
          },
          {
            question: 'What does McGregor mean by Last Dance?',
            answer:
              'McGregor is framing the Holloway fight as the final chapter of his career, borrowing the "Last Dance" branding from Michael Jordan\'s documentary about his final championship season with the Chicago Bulls.',
          },
          {
            question: 'When was McGregor\'s last UFC fight?',
            answer:
              'McGregor\'s most recent UFC appearance came after a lengthy layoff. He has been vocal about wanting to return to competition and has targeted 2027 for what he describes as his final fight.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Sports"
        moreFromHubHref="/sports"
      >
        <p>
          Conor McGregor has called for a "Last Dance" trilogy fight against BMF champion Max Holloway, targeting a return to the Octagon in 2027 in what the Irish superstar is framing as the final chapter of his combat sports career. The callout, made across McGregor's social media platforms, immediately ignited speculation about one of the biggest possible fights the UFC can still make.
        </p>

        <h2>McGregor vs Holloway | A Rivalry 14 Years in the Making</h2>
        <p>
          McGregor and Holloway first met in 2013, when both were rising prospects on the UFC roster. McGregor won that fight by unanimous decision, controlling the striking exchanges and showcasing the precision that would soon make him the biggest star in the sport. Holloway, then just 21 years old, absorbed the loss and used it as fuel for one of the greatest runs in featherweight history, eventually capturing the undisputed title and establishing himself as one of the most respected fighters on the roster.
        </p>
        <p>
          The rematch, years later, saw Holloway even the score with a dominant performance that underscored how far both men had traveled since their first meeting. A trilogy fight would settle the rivalry definitively, and McGregor's framing of it as his "Last Dance" adds a layer of finality that the UFC's promotional machine would almost certainly embrace.
        </p>

        <h2>McGregor Last Dance | The Final Chapter</h2>
        <p>
          McGregor's use of the "Last Dance" branding is deliberate. Borrowing from Michael Jordan's iconic documentary about his final championship season with the Chicago Bulls, McGregor is positioning the Holloway fight as the closing statement of a career that transformed mixed martial arts. No fighter in UFC history has generated the level of mainstream attention and pay-per-view revenue that McGregor has, and a properly promoted farewell fight against a respected champion like Holloway would be among the biggest events the sport has ever produced.
        </p>
        <p>
          The UFC has not yet commented on McGregor's callout, and no official negotiations have been confirmed. Holloway, for his part, has not responded publicly. But the matchup makes sense on every level: a trilogy fight between two of the most recognizable names in the sport, with a built-in narrative arc spanning more than a decade, and the added weight of McGregor's stated intention to make it his final walk to the Octagon.
        </p>

        <h2>What Comes Next</h2>
        <p>
          Whether the UFC moves to book the fight will depend on McGregor's readiness to compete and Holloway's willingness to accept the matchup. McGregor has been vocal about wanting to return to competition, and targeting 2027 gives both fighters and the promotion ample time to build the event. If it happens, it will be the biggest fight the UFC can make, and it will close the book on the most consequential career in the history of the sport.
        </p>
        <p>
          For more combat sports coverage, see the{' '}
          <Link href="/sports" className="text-blue-600 hover:text-blue-800 underline">
            oWire Sports hub
          </Link>. For soccer and international football news, see{' '}
          <Link href="/soccer" className="text-blue-600 hover:text-blue-800 underline">
            oWire Soccer
          </Link>.
        </p>
      </NewsArticle>
    </>
  );
}