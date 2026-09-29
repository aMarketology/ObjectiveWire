import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';
import { PrismTable } from '@/components/articles/PrismTable';

const OG_IMAGE = '/thumbnails/soccer-september-october-2026-international-window.jpg';

export const revalidate = 86400;

const SLUG = '/soccer/september-october-2026-international-window';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'September-October 2026 International Window | Full Friendly Schedule',
  description:
    'The September 21 to October 6, 2026 FIFA international window pauses club leagues for a 16-day break of friendlies, including USA vs Mexico, USA vs Canada, and the Kirin Cup. Here is the full schedule and why these games matter.',
  keywords: [
    'September October 2026 international window',
    'international friendly schedule 2026',
    'USA vs Mexico friendly 2026',
    'USA vs Canada friendly 2026',
    'Kirin Cup 2026',
    'FIFA international match calendar 2026',
    'international break September 2026',
    'Argentina vs Burkina Faso friendly',
    'India vs Brazil friendly 2026',
    'Colombia vs Paraguay friendly 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'September-October 2026 International Window | Full Friendly Schedule',
    description:
      'Club leagues pause for a 16-day FIFA international window from September 21 to October 6, 2026. USA vs Mexico, USA vs Canada, the Kirin Cup, and more. Full schedule inside.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-09-29T16:00:00Z',
    modifiedTime: '2026-09-29T16:00:00Z',
    section: 'Sports',
    tags: ['International Friendlies', 'FIFA', 'Soccer', 'USMNT', 'Kirin Cup'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'September-October 2026 international friendly window schedule' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The 16-Day International Window | Full Friendly Schedule',
    description: 'USA vs Mexico, USA vs Canada, the Kirin Cup, and every notable friendly from September 21 to October 6.',
    images: [OG_IMAGE],
  },
};

export default function InternationalWindow2026Page() {
  return (
    <>
      <NewsArticleSchema
        title="September-October 2026 International Window | Full Friendly Schedule"
        description="The September 21 to October 6, 2026 FIFA international window pauses club leagues for a 16-day break of friendlies, including USA vs Mexico, USA vs Canada, and the Kirin Cup. Here is the full schedule and why these games matter."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.com/authors/jack-brennan"
        publishedTime="2026-09-29T16:00:00Z"
        modifiedTime="2026-09-29T16:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Sports"
        keywords={[
          'September October 2026 international window',
          'international friendly schedule 2026',
          'USA vs Mexico friendly 2026',
        ]}
      />

      <NewsArticle
        title="September-October 2026 International Window | Why the Games Are Happening and the Full Schedule"
        subtitle="Club leagues are pausing for a newly designed 16-day FIFA international window from September 21 to October 6, 2026. With the World Cup already decided, national teams are using the break for friendlies, including USA vs Mexico, USA vs Canada, and the Kirin Cup in Japan."
        category="Soccer · International Break"
        categoryColor="green"
        topicTag="sports"
        publishDate="September 29, 2026"
        readTime="6 min read"
        author={{
          name: 'Jack Brennan',
          role: 'Reporter, ObjectWire',
          avatar: '/influncer/author/jack_brennen.JPG',
          authorSlug: 'jack-brennan',
        }}
        slug={SLUG}
        url={SLUG}
        thumbnail={{ src: OG_IMAGE, alt: 'September-October 2026 international friendly window schedule' }}
        tags={['International Friendlies', 'FIFA', 'Soccer', 'USMNT', 'Kirin Cup']}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Soccer', item: '/soccer' },
          { name: 'International Break', item: '/soccer' },
          { name: 'September-October 2026', item: SLUG },
        ]}
        moreFromHub={[
          { slug: 'soccer', title: 'Soccer Hub', url: '/soccer', publishDate: '2026', category: 'Sports' },
          { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
          { slug: 'spain-1-0-argentina-final-aet', title: 'Spain 1-0 Argentina AET | World Cup 2026 Final', url: '/world-cup/2026/spain-1-0-argentina-final-aet', publishDate: 'July 19, 2026', category: 'Sports' },
        ]}
        moreFromHubLabel="Soccer Coverage"
        moreFromHubHref="/soccer"
        keyTakeaways={[
          'The September 21 to October 6, 2026 FIFA international window pauses domestic club leagues for a 16-day break so national teams can play up to four matches each.',
          'FIFA merged the traditional separate September and October breaks into a single extended window starting in 2026.',
          'Because the 2026 World Cup concluded in July, most regions have no qualifiers yet, so teams are playing friendlies to test players, tactics, and protect FIFA rankings.',
          'The Kirin Cup in Japan features New Zealand, Panama, Ecuador, and Japan, with the winners of the October 1 games meeting for a minor crown on October 5.',
          'The United States plays Mexico on October 3 in Glendale, Arizona, and Canada on October 6 at Allianz Field in Minnesota.',
        ]}
        keyTakeawaysColor="green"
        faqItems={[
          {
            question: 'Why are there so many international soccer games in late September and early October 2026?',
            answer:
              'Soccer is in a newly designed FIFA international match window from September 21 to October 6, 2026, when domestic club leagues pause and clubs release players to their national teams.',
          },
          {
            question: 'Is there a championship on the line during the September-October 2026 international window?',
            answer:
              'No. These are mostly friendly matches with no league trophy or tournament qualification on the line. The exception is the Kirin Cup, a minor four-team exhibition tournament in Japan.',
          },
          {
            question: 'What is the Kirin Cup?',
            answer:
              'The Kirin Cup is a four-team exhibition tournament hosted in Japan featuring New Zealand, Panama, Ecuador, and Japan. The winners of the October 1 games meet for a minor crown on October 5, while the losers play a third-place match.',
          },
          {
            question: 'Do international friendlies affect FIFA rankings?',
            answer:
              'Yes. Friendly results do not affect World Cup standings, but the outcomes do affect the official FIFA World Rankings, and player stats count toward their international history.',
          },
          {
            question: 'When do the United States play during this window?',
            answer:
              'The United States plays Mexico on October 3 in Glendale, Arizona, and Canada on October 6 at Allianz Field in Minnesota.',
          },
        ]}
      >
        <div className="prose prose-lg max-w-none">

          <p>
            The flood of international soccer games in late September and early October 2026 is happening because soccer is in a newly designed FIFA international match window. From <strong>September 21 to October 6, 2026</strong>, domestic club leagues like the Premier League and MLS temporarily pause, and clubs are required to release their players to their national teams.
          </p>

          <p>
            This is not a tournament. With the 2026 World Cup already decided in July, most regions do not have official qualifiers yet, so teams are using the window to play friendlies, test new players and tactical systems, and protect their FIFA world rankings. For context on how the World Cup itself concluded, see our{' '}
            <Link href="/world-cup/2026/spain-1-0-argentina-final-aet" className="text-blue-600 hover:text-blue-800 underline">
              Spain 1-0 Argentina final report
            </Link>
            .
          </p>

          <h2>FIFA's New Calendar | One Extended 16-Day Window</h2>

          <p>
            Starting in 2026, FIFA merged the traditional separate September and October international breaks into a single, extended 16-day window where countries can play up to four matches. This is the first cycle under the new calendar, and it is why the schedule feels unusually crowded.
          </p>

          <p>
            Think of this window as soccer's version of NFL preseason or MLB spring training. The results do not affect World Cup standings, but the stats count toward player history, and the outcomes shift the official FIFA World Rankings.
          </p>

          <h2>The Kirin Cup | A Minor Exhibition Crown</h2>

          <p>
            A handful of the games are part of a small, unofficial exhibition tournament. The <strong>Kirin Cup</strong>, hosted in Japan, features New Zealand, Panama, Ecuador, and Japan. The winners of the October 1 games will meet for a minor crown on October 5, while the losing sides play a third-place match.
          </p>

          <p>
            The rest of the matchups, like Venezuela vs. Korea Republic or Paraguay vs. Colombia, are purely standalone exhibition matches.
          </p>

          <h2>Remaining Schedule | October 1 to October 6</h2>

          <p>
            Here is the schedule of the remaining prominent matchups for the rest of the window, organized by date. All times are Central Time.
          </p>

          <PrismTable
            accent="green"
            headers={['Date', 'Matchup']}
            rows={[
              ['Thursday, October 1', 'Panama vs. New Zealand (1:10 AM) and Japan vs. Ecuador (5:10 AM)'],
              ['Friday, October 2', 'South Korea vs. Venezuela (6:00 AM) and Colombia vs. Paraguay (7:00 PM, Red Bull Arena, New Jersey)'],
              ['Saturday, October 3', 'India vs. Brazil (9:00 AM), Russia vs. Namibia (10:00 AM), Canada vs. Peru (1:00 PM, Montreal), Argentina vs. Burkina Faso (7:00 PM, Buenos Aires), and United States vs. Mexico (9:00 PM, Glendale, Arizona)'],
              ['Sunday, October 4', 'Kyrgyzstan vs. Lebanon (9:00 AM)'],
              ['Tuesday, October 6', 'South Korea vs. Uzbekistan (6:00 AM), India vs. Uruguay (9:00 AM), Russia vs. Nigeria (11:00 AM), Argentina vs. Benin (6:00 PM), and United States vs. Canada (7:00 PM, Allianz Field, Minnesota)'],
            ]}
            caption="Remaining notable international friendlies for the September-October 2026 window, in Central Time."
          />

          <p>
            The United States plays twice in this window, and both games carry real weight for a program resetting after the World Cup. Read our full preview of the{' '}
            <Link href="/soccer/usa-vs-mexico-usa-vs-canada-october-2026-friendlies" className="text-blue-600 hover:text-blue-800 underline">
              USA vs Mexico and USA vs Canada friendlies
            </Link>
            , and follow the broader{' '}
            <Link href="/soccer" className="text-blue-600 hover:text-blue-800 underline">
              soccer hub
            </Link>{' '}
            for ongoing coverage.
          </p>

        </div>
      </NewsArticle>
    </>
  );
}