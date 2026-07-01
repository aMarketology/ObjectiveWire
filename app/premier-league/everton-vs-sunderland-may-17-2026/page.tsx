import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';
import { SITE_CONFIG } from '@/lib/site-config';

export const revalidate = 3600;

const SLUG = '/premier-league/everton-vs-sunderland-may-17-2026';
const ARTICLE_URL = `${SITE_CONFIG.url}${SLUG}`;

export const metadata: Metadata = {
  title: 'Everton vs Sunderland May 17 | Sunderland\'s First Top-Flight Season in 27 Years',
  description:
    'Everton host Sunderland at Bramley-Moore Dock on May 17, 2026. Sunderland\'s first Premier League season in 27 years ends with two games to play.',
  keywords: [
    'Everton vs Sunderland',
    'Everton Sunderland May 2026',
    'Sunderland Premier League 2026',
    'Sunderland first season top flight',
    'Bramley-Moore Dock 2026',
    'Everton 2026 Premier League',
    'Sunderland promotion story 2026',
    'Premier League matchweek 37',
    'Everton new stadium 2026',
    'Sunderland first top-flight season 27 years',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Everton vs Sunderland | A Promoted Club\'s Season Winds Down',
    description:
      'Sunderland are finishing their first Premier League season since 1997. They\'ve earned 48 points. At Everton\'s new Bramley-Moore Dock, the visitors have nothing to fear.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Conan D. Boyle'],
    publishedTime: '2026-05-14T12:00:00Z',
    modifiedTime: '2026-05-14T12:00:00Z',
    section: 'Premier League',
    tags: ['Everton', 'Sunderland', 'Premier League', 'Bramley-Moore Dock'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Everton vs Sunderland | Sunderland\'s First Top-Flight Season in 27 Years Winds Down',
    description: '48 points in their comeback Premier League campaign. Sunderland travel to Everton\'s new ground.',
  },
};

export default function EvertonVsSunderlandPage() {
  return (
    <>
      <NewsArticleSchema
        title="Everton vs Sunderland May 17 | Sunderland's First Top-Flight Season in 27 Years"
        description="Everton host Sunderland at Bramley-Moore Dock on May 17, 2026. Sunderland's first Premier League season in 27 years ends with two games to play."
        author="Conan D. Boyle"
        authorUrl={`${SITE_CONFIG.url}/authors/conan-boyle`}
        publishedTime="2026-05-14T12:00:00Z"
        modifiedTime="2026-05-14T12:00:00Z"
        articleUrl={ARTICLE_URL}
        section="Premier League"
        keywords={['Everton vs Sunderland', 'Sunderland Premier League 2026', 'Sunderland first season top flight']}
      />

      <NewsArticle
        title="Everton vs Sunderland | Sunderland\'s 27-Year Return to the Top Flight Winds Down"
        subtitle="Sunderland have earned 48 points in their first Premier League season since 1997. At Everton's Bramley-Moore Dock, they finish what has been a remarkable story."
        category="Premier League"
        categoryColor="blue"
        topicTag="sports"
        publishDate="2026-05-14T12:00:00Z"
        readTime="4 min read"
        author={{
          name: 'Conan D. Boyle',
          role: 'Sports',
          authorSlug: 'conan-boyle',
        }}
        tags={['Everton', 'Sunderland', 'Premier League', 'Bramley-Moore Dock']}
        slug="premier-league-everton-vs-sunderland-may-17-2026"
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Premier League', item: '/premier-league' },
          { name: 'Everton vs Sunderland', item: SLUG },
        ]}
        keyTakeaways={[
          'Everton host Sunderland at Bramley-Moore Dock on Sunday May 17, 2026, with a 15:00 BST kick-off (10:00 AM ET / 7:00 AM PT).',
          'Sunderland are completing their first Premier League season since the 1996/97 campaign, having been promoted from the Championship.',
          'Sunderland have earned 48 points from 36 matches, placing them 12th in the table, a remarkable return for a club outside the top flight for 27 years.',
          'Everton are 10th on 49 points and cannot be relegated or reach European competition with two games remaining.',
          'Sunderland beat Tottenham Hotspur 1-0 this season and held Manchester United to a 0-0 draw, demonstrating they were not just making up the numbers.',
        ]}
        keyTakeawaysColor="blue"
        faqItems={[
          {
            question: 'When was Sunderland last in the Premier League?',
            answer:
              'Sunderland were last in the Premier League in the 1996/97 season, their first and only campaign in the modern era before relegation. The 2025/26 season is their return to the top flight after a 27-year absence following successive promotions through the lower leagues.',
          },
          {
            question: 'What time is Everton vs Sunderland?',
            answer:
              'Everton vs Sunderland kicks off at 15:00 BST on Sunday May 17, 2026. That is 10:00 AM ET / 7:00 AM PT in the United States.',
          },
          {
            question: 'Where do Everton play now?',
            answer:
              'Everton play at Bramley-Moore Dock stadium on the Liverpool waterfront, their new home opened in the 2024/25 season. The ground has a capacity of 52,888 and replaced Goodison Park, their home for 132 years.',
          },
          {
            question: 'How has Sunderland performed in their Premier League return?',
            answer:
              'Sunderland have performed solidly. With 48 points from 36 games, they are 12th in the Premier League table, above mid-table clubs like Fulham and Sunderland. Notable results include a 1-0 win over Tottenham and a 0-0 draw at Manchester United.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Premier League"
        moreFromHubHref="/premier-league"
      >
        <p>
          Everton vs Sunderland on Sunday May 17 is one of the most quietly compelling fixtures on the
          Premier League calendar this weekend. On paper, two mid-table clubs with nothing riding on the
          result. In context, this is the penultimate appearance of a Sunderland side that has spent
          their first season back in the Premier League in 27 years proving they belong there.
        </p>

        <h2>Sunderland | 27 Years Away, 48 Points Back</h2>
        <p>
          Sunderland were last in the Premier League in the 1996/97 season. Their path back to the
          top flight ran through League One and the Championship, via the viral Netflix documentary
          series that charted their rise, and through a fanbase that never stopped believing the club
          would return. The 2025/26 season has been their proof of concept. Twelve wins, twelve draws,
          twelve losses across 36 games, and 48 points, placing them 12th in England's top division.
        </p>
        <p>
          Their best results tell the real story: a 1-0 win over Tottenham Hotspur, a 0-0 draw at
          Old Trafford against Manchester United, and a 5-0 loss to Nottingham Forest that was their
          worst result of the season. The swing between those performances captures a promoted side
          still learning the pace and margin for error of the Premier League, but one that has
          clearly done enough to stay, assuming the squad is strengthened in the summer.
        </p>

        <h2>Everton | A New Ground, A Stable Season</h2>
        <p>
          Everton have settled into their second season at Bramley-Moore Dock, the waterfront stadium
          on the banks of the River Mersey that replaced Goodison Park as their home in 2024/25. The
          ground, with a capacity of 52,888, has become a fortress atmosphere the club was never
          quite able to generate at Goodison in their final years there. Tenth place on 49 points is
          a respectable mid-table finish, neither threatened by the relegation battle nor close enough
          to the European places to be a story on the final few weeks of the season.
        </p>
        <p>
          Everton drew 3-3 with Manchester City in their most recent home fixture, a result that
          flatters them slightly but showcases the attacking capability they carry going forward.
          They beat Liverpool 2-1 earlier in the season in the Merseyside Derby, one of the season's
          marquee results for a club that has always measured its campaign against its nearest neighbour.
        </p>

        <h2>What This Match Means for Sunderland's Future</h2>
        <p>
          Sunderland's 48 points will almost certainly keep them in the Premier League without needing
          the final day result, barring a completely unprecedented final-week collapse from the sides
          below them. West Ham in 18th have 36 points with two games left. Sunderland are safe. But
          that number, 48 points, will be the benchmark against which next season's expectations are
          set. A club that achieves mid-table Premier League stability in its first season back in
          three decades has done something genuinely difficult.
        </p>
        <p>
          For the full picture of the 2025/26 Premier League season and all ongoing coverage, visit
          the{' '}
          <Link href="/premier-league" className="text-blue-600 hover:text-blue-800 underline">
            oWire Premier League hub
          </Link>
          . For the companion May 17 fixture between{' '}
          <Link href="/premier-league/wolverhampton-vs-fulham-may-17-2026" className="text-blue-600 hover:text-blue-800 underline">
            Wolverhampton Wanderers and Fulham
          </Link>
          {' '}at Molineux, see our full preview. For a full overview of the league's history, see the{' '}
          <Link href="/premier-league/premier-league-history" className="text-blue-600 hover:text-blue-800 underline">
            Premier League history article
          </Link>
          .
        </p>
      </NewsArticle>
    </>
  );
}