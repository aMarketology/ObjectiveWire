import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

const OG_IMAGE = '/thumbnails/soccer-usa-vs-mexico-usa-vs-canada-october-2026-friendlies.jpg';

export const revalidate = 86400;

const SLUG = '/soccer/usa-vs-mexico-usa-vs-canada-october-2026-friendlies';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'USA vs Mexico and USA vs Canada | October 2026 Friendlies Preview',
  description:
    'The USMNT closes the September-October 2026 international window with two friendlies: USA vs Mexico on October 3 in Glendale, Arizona, and USA vs Canada on October 6 at Allianz Field in Minnesota. Here is what is at stake.',
  keywords: [
    'USA vs Mexico friendly 2026',
    'USA vs Canada friendly 2026',
    'USMNT October 2026',
    'USA Mexico Glendale Arizona',
    'USA Canada Allianz Field',
    'USMNT friendlies 2026',
    'USA vs Mexico October 3 2026',
    'USA vs Canada October 6 2026',
    'USMNT international window',
    'USA soccer schedule 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'USA vs Mexico and USA vs Canada | October 2026 Friendlies Preview',
    description:
      'The USMNT plays Mexico on October 3 in Glendale, Arizona, and Canada on October 6 at Allianz Field in Minnesota to close the international window. What is at stake in both friendlies.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-09-29T18:00:00Z',
    modifiedTime: '2026-09-29T18:00:00Z',
    section: 'Sports',
    tags: ['USMNT', 'USA vs Mexico', 'USA vs Canada', 'Soccer', 'Friendlies'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'USA vs Mexico and USA vs Canada October 2026 friendlies' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'USMNT Closes the Window With Mexico and Canada',
    description: 'USA vs Mexico on October 3 in Glendale, then USA vs Canada on October 6 in Minnesota. What is at stake.',
    images: [OG_IMAGE],
  },
};

export default function UsaMexicoCanadaFriendliesPage() {
  return (
    <>
      <NewsArticleSchema
        title="USA vs Mexico and USA vs Canada | October 2026 Friendlies Preview"
        description="The USMNT closes the September-October 2026 international window with two friendlies: USA vs Mexico on October 3 in Glendale, Arizona, and USA vs Canada on October 6 at Allianz Field in Minnesota. Here is what is at stake."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.com/authors/jack-brennan"
        publishedTime="2026-09-29T18:00:00Z"
        modifiedTime="2026-09-29T18:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Sports"
        keywords={[
          'USA vs Mexico friendly 2026',
          'USA vs Canada friendly 2026',
          'USMNT October 2026',
        ]}
      />

      <NewsArticle
        title="USA vs Mexico and USA vs Canada | The USMNT Closes the October 2026 Window With Two Rivalry Friendlies"
        subtitle="The United States men's national team ends the September-October 2026 international window with two high-profile friendlies: USA vs Mexico on October 3 in Glendale, Arizona, and USA vs Canada on October 6 at Allianz Field in Minnesota."
        category="Soccer · USMNT"
        categoryColor="blue"
        topicTag="sports"
        publishDate="September 29, 2026"
        readTime="5 min read"
        author={{
          name: 'Jack Brennan',
          role: 'Reporter, ObjectWire',
          avatar: '/influncer/author/jack_brennen.JPG',
          authorSlug: 'jack-brennan',
        }}
        slug={SLUG}
        url={SLUG}
        thumbnail={{ src: OG_IMAGE, alt: 'USA vs Mexico and USA vs Canada October 2026 friendlies' }}
        tags={['USMNT', 'USA vs Mexico', 'USA vs Canada', 'Soccer', 'Friendlies']}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Soccer', item: '/soccer' },
          { name: 'USMNT', item: '/soccer' },
          { name: 'USA vs Mexico and Canada', item: SLUG },
        ]}
        moreFromHub={[
          { slug: 'soccer', title: 'Soccer Hub', url: '/soccer', publishDate: '2026', category: 'Sports' },
          { slug: 'september-october-2026-international-window', title: 'September-October 2026 International Window | Full Schedule', url: '/soccer/september-october-2026-international-window', publishDate: 'September 29, 2026', category: 'Sports' },
          { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        ]}
        moreFromHubLabel="Soccer Coverage"
        moreFromHubHref="/soccer"
        keyTakeaways={[
          'The USMNT plays Mexico on October 3, 2026 at 9:00 PM Central in Glendale, Arizona, and Canada on October 6, 2026 at 7:00 PM Central at Allianz Field in Minnesota.',
          'Both matches are international friendlies with no trophy or qualification on the line, but the results affect FIFA world rankings.',
          'The games close out the newly merged 16-day FIFA international window that runs from September 21 to October 6, 2026.',
          'The United States is using the window to reset and test players after the 2026 World Cup concluded in July.',
        ]}
        keyTakeawaysColor="blue"
        faqItems={[
          {
            question: 'When is USA vs Mexico in October 2026?',
            answer:
              'USA vs Mexico is on Saturday, October 3, 2026 at 9:00 PM Central Time, played in Glendale, Arizona.',
          },
          {
            question: 'When is USA vs Canada in October 2026?',
            answer:
              'USA vs Canada is on Tuesday, October 6, 2026 at 7:00 PM Central Time, played at Allianz Field in Minnesota.',
          },
          {
            question: 'Are USA vs Mexico and USA vs Canada competitive matches?',
            answer:
              'No. Both are international friendlies with no trophy or tournament qualification on the line, though the results do affect the official FIFA World Rankings.',
          },
          {
            question: 'Why is the USMNT playing friendlies in October 2026?',
            answer:
              'The matches fall inside the newly merged 16-day FIFA international window from September 21 to October 6, 2026, when clubs release players to their national teams. With the World Cup already decided, the USMNT is using the window to test players and tactics.',
          },
        ]}
      >
        <div className="prose prose-lg max-w-none">

          <p>
            The United States men's national team closes the September-October 2026 international window with two rivalry friendlies: <strong>USA vs Mexico</strong> on October 3 in Glendale, Arizona, and <strong>USA vs Canada</strong> on October 6 at Allianz Field in Minnesota.
          </p>

          <p>
            Neither match carries a trophy or qualification stakes, but both matter for a program resetting after the 2026 World Cup. The results feed directly into the official FIFA World Rankings, and the games give the coaching staff a chance to test new players and tactical systems. For the full context of the window, see our{' '}
            <Link href="/soccer/september-october-2026-international-window" className="text-blue-600 hover:text-blue-800 underline">
              September-October 2026 international window explainer
            </Link>
            .
          </p>

          <h2>USA vs Mexico | October 3 in Glendale, Arizona</h2>

          <p>
            The United States faces Mexico on <strong>Saturday, October 3, 2026 at 9:00 PM Central</strong> in Glendale, Arizona. The rivalry fixture is the marquee matchup of the window for the USMNT, and it arrives as both programs look ahead to the next World Cup cycle after the 2026 tournament concluded in July.
          </p>

          <p>
            The United States reached the round of 16 at the 2026 World Cup before falling to Belgium, while Mexico was eliminated by England in the same round. You can revisit those results in our{' '}
            <Link href="/world-cup/2026/belgium-4-1-usa-round-of-16" className="text-blue-600 hover:text-blue-800 underline">
              Belgium 4-1 USA report
            </Link>{' '}
            and{' '}
            <Link href="/world-cup/2026/england-3-2-mexico-round-of-16" className="text-blue-600 hover:text-blue-800 underline">
              England 3-2 Mexico report
            </Link>
            .
          </p>

          <h2>USA vs Canada | October 6 at Allianz Field</h2>

          <p>
            Three days later, the United States hosts Canada on <strong>Tuesday, October 6, 2026 at 7:00 PM Central</strong> at Allianz Field in Minnesota. The northern rivalry is a fitting bookend to the window, and it gives the USMNT a second chance to evaluate its squad before the next competitive cycle begins.
          </p>

          <p>
            Canada also competed at the 2026 World Cup, and the matchup offers a measuring stick between two CONCACAF programs that both advanced out of their groups. Follow the broader{' '}
            <Link href="/soccer" className="text-blue-600 hover:text-blue-800 underline">
              soccer hub
            </Link>{' '}
            for ongoing coverage of the USMNT and the international window.
          </p>

        </div>
      </NewsArticle>
    </>
  );
}