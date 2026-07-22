import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

const OG_IMAGE = '/thumbnails/premier-league-wolverhampton-vs-fulham-may-17-2026.jpg';

export const revalidate = 3600;

const SLUG = '/premier-league/wolverhampton-vs-fulham-may-17-2026';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Wolverhampton vs Fulham May 17 | Wolves\' Final Home Game as a Relegated Club',
  description:
    'Wolverhampton Wanderers host Fulham at Molineux on May 17, 2026. Wolves are relegated with 18 points, the worst record in the Premier League this season.',
  keywords: [
    'Wolverhampton vs Fulham',
    'Wolves Fulham May 2026',
    'Wolves relegated 2026',
    'Molineux last home game 2026',
    'Wolverhampton Wanderers relegated Premier League',
    'Fulham Premier League 2026',
    'Wolves worst season Premier League',
    'Premier League matchweek 37',
    'Wolverhampton 2026 season',
    'Wolves Premier League exit 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Wolverhampton vs Fulham | Wolves Say Farewell to the Premier League',
    description:
      'Three wins all season, 66 goals conceded, 18 points. Wolves are relegated and play their final Molineux home game in the top flight on Sunday May 17.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Conan D. Boyle'],
    publishedTime: '2026-05-14T12:00:00Z',
    modifiedTime: '2026-05-14T12:00:00Z',
    section: 'Premier League',
    tags: ['Wolverhampton Wanderers', 'Fulham', 'Premier League', 'Relegation'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wolves vs Fulham | The Premier League\'s Worst Season in Years Ends at Molineux',
    description: '3 wins. 25 goals scored. 66 conceded. 18 points. Wolves host their last PL home game on May 17.',
  },
};

export default function WolvesVsFulhamPage() {
  return (
    <>
      <NewsArticleSchema
        title="Wolverhampton vs Fulham May 17 | Wolves' Final Home Game as a Relegated Club"
        description="Wolverhampton Wanderers host Fulham at Molineux on May 17, 2026. Wolves are relegated with 18 points, the worst record in the Premier League this season."
        author="Conan D. Boyle"
        authorUrl="https://www.objectivewire.com/authors/conan-boyle"
        publishedTime="2026-05-14T12:00:00Z"
        modifiedTime="2026-05-14T12:00:00Z"
        articleUrl={ARTICLE_URL}
        section="Premier League"
        keywords={['Wolverhampton vs Fulham', 'Wolves relegated 2026', 'Premier League matchweek 37']}
      />

      <NewsArticle
        title="Wolverhampton vs Fulham | Wolves\' Last Premier League Home Game After a Season to Forget"
        subtitle="Three wins from 36 matches, 66 goals conceded. Wolverhampton Wanderers are relegated and face Fulham at Molineux in what is effectively a farewell fixture."
        category="Premier League"
        categoryColor="orange"
        topicTag="sports"
        publishDate="2026-05-14T12:00:00Z"
        readTime="4 min read"
        author={{
          name: 'Conan D. Boyle',
          role: 'Sports',
          authorSlug: 'conan-boyle',
        }}
        tags={['Wolverhampton Wanderers', 'Fulham', 'Premier League', 'Relegation']}
        slug="premier-league-wolverhampton-vs-fulham-may-17-2026"
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Premier League', item: '/premier-league' },
          { name: 'Wolverhampton vs Fulham', item: SLUG },
        ]}
        keyTakeaways={[
          'Wolverhampton Wanderers host Fulham at Molineux on Sunday May 17, 2026, with a 15:00 BST kick-off (10:00 AM ET / 7:00 AM PT).',
          'Wolves are relegated, finishing 20th in the Premier League on 18 points from 36 matches, the lowest tally in the league this season.',
          'Wolves have won just 3 of their 36 Premier League matches in 2025/26, scoring only 25 goals and conceding 66.',
          'Fulham are 11th on 48 points and are safe, with no European qualification or relegation implications in this fixture.',
          'Wolves\' last home game before their descent to the Championship is this match at Molineux; their final game is away at Burnley on May 24.',
        ]}
        keyTakeawaysColor="orange"
        faqItems={[
          {
            question: 'Are Wolverhampton Wanderers relegated?',
            answer:
              'Yes. Wolverhampton Wanderers are relegated from the Premier League in 2025/26. They are 20th with 18 points and cannot mathematically avoid finishing in the bottom three. They will play in the Championship in the 2026/27 season.',
          },
          {
            question: 'What time is Wolverhampton vs Fulham?',
            answer:
              'Wolverhampton Wanderers vs Fulham kicks off at 15:00 BST on Sunday May 17, 2026. That is 10:00 AM ET / 7:00 AM PT in the United States. The match is at Molineux, Wolverhampton.',
          },
          {
            question: 'How many points have Wolves got this season?',
            answer:
              'Wolves have 18 points from 36 Premier League matches in 2025/26. They have won 3 matches, drawn 9, and lost 24. They have scored 25 goals and conceded 66, giving a goal difference of -41.',
          },
          {
            question: 'What division will Wolves play in next season?',
            answer:
              'Wolverhampton Wanderers will play in the EFL Championship (second tier of English football) in the 2026/27 season following relegation from the Premier League.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Premier League"
        moreFromHubHref="/premier-league"
      >
        <p>
          Wolverhampton Wanderers host Fulham at Molineux on Sunday May 17 in what is effectively a
          closing ceremony for one of the worst Premier League seasons any club has endured in the
          modern era. Wolves are relegated, sitting 20th with 18 points from 36 matches. Three wins
          all season. Twenty-four defeats. This is the second-to-last match of a campaign the club
          will spend the entire summer trying to dismantle and rebuild from scratch.
        </p>

        <h2>Wolves | A Season That Collapsed Early and Never Recovered</h2>
        <p>
          The numbers are stark. Wolves have scored 25 league goals this season, the fewest of any
          team in the division by a significant margin. They have conceded 66, giving them a goal
          difference of -41. For context, West Ham, who are 18th and also relegated, have scored
          42 goals and conceded 62. Wolves are not just relegated, they have been the worst side in
          the Premier League by almost every metric.
        </p>
        <p>
          The season started with optimism following summer investment in the squad, but a run of six
          straight defeats in October and November effectively ended any realistic survival hope by
          December. Multiple managerial changes could not arrest the decline. The squad has been
          inconsistent, injury-prone, and unable to find any sustained period of clean sheets or
          clinical finishing. Their three wins this season came against sides who were also struggling:
          none of Wolves' victories came against a team currently in the top half.
        </p>

        <h2>Fulham | Comfortable Visitors on a Standard Day Out</h2>
        <p>
          Fulham arrive in 11th place on 48 points, safe and untroubled. Marco Silva's side have
          been a solid mid-table outfit all season, doing what Fulham do best: compact defensively,
          reliable in transition, keeping clean sheets when it matters. Their 1-0 win over Aston
          Villa was a result that had implications for the Champions League race. Their 2-0 loss to
          Liverpool was a reminder of the gap between their level and the top four.
        </p>
        <p>
          For Fulham, this is a free match against a side with no defenders left to play for. Three
          away wins in the last six matches suggest they are capable of taking something from Molineux,
          but the context barely registers against the backdrop of what Wolves are experiencing.
        </p>

        <h2>Molineux | A Stadium Saying Goodbye to the Top Flight</h2>
        <p>
          This is Wolverhampton's last home game in the Premier League until at least the 2027/28 season
          at the earliest, assuming a swift one-season Championship return. Molineux, a stadium with a
          capacity of 31,750 and one of the loudest atmospheres in the West Midlands, deserves better
          football than it has witnessed this season. The Wolves support, loyal throughout a difficult
          campaign, will fill the ground on Sunday to send the team off.
        </p>
        <p>
          Their final fixture is away at Burnley on May 24, itself a fellow relegated side, meaning the
          season ends with two relegated clubs playing each other on the final day. For the Wolves
          fanbase, the work starts now: rebuild, recruit, and return.
        </p>
        <p>
          For the full May 17 fixture list and all Premier League coverage, see the{' '}
          <Link href="/premier-league" className="text-blue-600 hover:text-blue-800 underline">
            oWire Premier League hub
          </Link>
          . The simultaneous kick-off on Sunday also includes{' '}
          <Link href="/premier-league/leeds-united-vs-brighton-may-17-2026" className="text-blue-600 hover:text-blue-800 underline">
            Leeds United vs Brighton
          </Link>
          {' '}and{' '}
          <Link href="/premier-league/everton-vs-sunderland-may-17-2026" className="text-blue-600 hover:text-blue-800 underline">
            Everton vs Sunderland
          </Link>
          . For the Premier League's history from 1992 to today, see our{' '}
          <Link href="/premier-league/premier-league-history" className="text-blue-600 hover:text-blue-800 underline">
            full history guide
          </Link>
          .
        </p>
      </NewsArticle>
    </>
  );
}