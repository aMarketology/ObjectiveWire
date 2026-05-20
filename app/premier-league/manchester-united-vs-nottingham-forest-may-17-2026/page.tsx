import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 3600;

const SLUG = '/premier-league/manchester-united-vs-nottingham-forest-may-17-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Manchester United vs Nottingham Forest May 17 | Preview & Storylines',
  description:
    'Manchester United host Nottingham Forest at Old Trafford on Sunday May 17, 2026 at 12:30 BST. Forest arrive in excellent form with three wins from their last four.',
  keywords: [
    'Manchester United vs Nottingham Forest',
    'Man Utd Nottingham Forest May 2026',
    'Old Trafford May 17 2026',
    'Premier League matchweek 37',
    'Nottingham Forest form 2026',
    'Manchester United Premier League 2026',
    'Man Utd third place 2026',
    'Nottingham Forest Premier League 2026',
    'Premier League Sunday fixtures May 2026',
    'Man Utd Forest preview',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Man United vs Nottingham Forest | Old Trafford, May 17 2026',
    description:
      'United are locked into third place but Forest arrive with three wins in four. A Sunday clash with plenty to settle at Old Trafford.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Conan D. Boyle'],
    publishedTime: '2026-05-14T12:00:00Z',
    modifiedTime: '2026-05-14T12:00:00Z',
    section: 'Premier League',
    tags: ['Manchester United', 'Nottingham Forest', 'Premier League', 'Old Trafford'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Man United vs Nottingham Forest | Old Trafford, May 17',
    description: 'Forest won 5-0 vs Sunderland and 3-1 vs Chelsea in their last month. United at home, Sunday lunchtime.',
  },
};

export default function ManUtdVsNottinghamForestPage() {
  return (
    <>
      <NewsArticleSchema
        title="Manchester United vs Nottingham Forest May 17 | Preview & Storylines"
        description="Manchester United host Nottingham Forest at Old Trafford on Sunday May 17, 2026 at 12:30 BST. Forest arrive in excellent form with three wins from their last four."
        author="Conan D. Boyle"
        authorUrl="https://www.objectwire.org/authors/conan-boyle"
        publishedTime="2026-05-14T12:00:00Z"
        modifiedTime="2026-05-14T12:00:00Z"
        articleUrl={ARTICLE_URL}
        section="Premier League"
        keywords={['Manchester United vs Nottingham Forest', 'Man Utd Forest May 2026', 'Premier League 2026']}
      />

      <NewsArticle
        title="Manchester United vs Nottingham Forest | Old Trafford Matchweek 37 Preview"
        subtitle="Forest are in their best run of form since Christmas. United haven't lost at Old Trafford in six league games. One of those records ends Sunday."
        category="Premier League"
        categoryColor="red"
        topicTag="sports"
        publishDate="2026-05-14T12:00:00Z"
        readTime="4 min read"
        author={{
          name: 'Conan D. Boyle',
          role: 'Sports',
          authorSlug: 'conan-boyle',
        }}
        tags={['Manchester United', 'Nottingham Forest', 'Premier League', 'Old Trafford']}
        slug="premier-league-manchester-united-vs-nottingham-forest-may-17-2026"
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Premier League', item: '/premier-league' },
          { name: 'Man Utd vs Nottingham Forest', item: SLUG },
        ]}
        keyTakeaways={[
          'Manchester United host Nottingham Forest at Old Trafford on Sunday May 17, 2026, with a 12:30 BST kick-off (7:30 AM ET / 4:30 AM PT).',
          'Manchester United are third in the Premier League on 65 points, 6 clear of Liverpool and Aston Villa in fourth and fifth respectively.',
          'Nottingham Forest are 16th on 43 points, 7 points above the relegation zone, and are safe from relegation.',
          'Forest\'s last five results include a 5-0 win over Sunderland, a 3-1 win over Chelsea, and a draw with Aston Villa, their best form since February.',
          'Manchester United beat Liverpool 3-2 at Old Trafford in their last home match, continuing a strong second half of the season after a difficult autumn.',
        ]}
        keyTakeawaysColor="red"
        faqItems={[
          {
            question: 'What time is Manchester United vs Nottingham Forest?',
            answer:
              'Manchester United vs Nottingham Forest kicks off at 12:30 BST on Sunday May 17, 2026. That is 7:30 AM ET / 4:30 AM PT in the United States. The match is played at Old Trafford, Manchester.',
          },
          {
            question: 'What position is Manchester United in the Premier League?',
            answer:
              'Manchester United are third in the Premier League on 65 points after 36 games, with two matches remaining. They are 14 points behind Arsenal in first and 12 behind Manchester City in second.',
          },
          {
            question: 'Is Nottingham Forest safe from relegation?',
            answer:
              'Yes. Nottingham Forest are 16th in the Premier League on 43 points, 7 points above West Ham in 18th. West Ham have two games left and cannot mathematically close the gap, so Forest are confirmed safe.',
          },
          {
            question: 'What is Nottingham Forest\'s recent form?',
            answer:
              'Nottingham Forest\'s last five results are: draw with Aston Villa (1-1), win over Burnley (4-1), win over Sunderland (5-0), win over Chelsea (3-1), draw with Newcastle (1-1). Three wins from five.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Premier League"
        moreFromHubHref="/premier-league"
      >
        <p>
          Manchester United vs Nottingham Forest at Old Trafford on Sunday May 17 is a matchweek 37
          fixture with a story in the visiting side's form. Forest arrive on the back of three wins in
          their last four league games, including a 5-0 demolition of Sunderland and a 3-1 win over
          Chelsea. United host them with their top-three finish already secure but plenty still to
          settle on the pitch.
        </p>

        <h2>Manchester United | Third Place and Building Momentum</h2>
        <p>
          United sit third on 65 points, 6 clear of the fourth-place battle between Liverpool and
          Aston Villa. Their Champions League place for next season is mathematically secured. The
          remaining two games are about finishing the campaign on the right note and sending a message
          about where the club is heading under their current management.
        </p>
        <p>
          The most significant result of their recent stretch was the 3-2 win over Liverpool at Old
          Trafford, a result that simultaneously confirmed United's top-three standing and knocked
          Liverpool's CL ambitions sideways. Before that, wins over Chelsea and Brentford had
          demonstrated a consistency that was missing for much of the first half of the season. Their
          only blemish in recent form was a 1-2 loss at Leeds, a game they dominated before
          conceding twice in the final fifteen minutes.
        </p>

        <h2>Nottingham Forest | Best Form in Months</h2>
        <p>
          Forest's season has been defined by three distinct phases. A solid start, a mid-season
          collapse in which they lost five in seven, and then a March-to-May revival that has lifted
          them comfortably clear of danger. Their 5-0 win at Sunderland was their biggest win of the
          season. Their 3-1 win over Chelsea at the City Ground was a statement performance, with
          Forest controlling possession and counter-attacking with precision.
        </p>
        <p>
          Manager Nuno Espirito Santo has stabilised Forest after a difficult winter. They are safe on
          43 points, 7 clear of West Ham in the relegation zone. This trip to Old Trafford is a free
          hit, but one Forest will approach with confidence given their current momentum. They drew 1-1
          with Aston Villa at the start of this run and held Newcastle to the same scoreline last weekend.
        </p>

        <h2>Old Trafford | The Last Home Game of the Season</h2>
        <p>
          This is United's penultimate home game of the season. Their final fixture is away at Brighton
          on May 24. The Old Trafford atmosphere for a Sunday lunchtime kick-off will be charged, with
          the home crowd expecting nothing less than a send-off win that continues their top-three
          finish with substance. Forest will look to spoil the occasion.
        </p>
        <p>
          For full Premier League coverage including the title race between Arsenal and Manchester City,
          visit the{' '}
          <Link href="/premier-league" className="text-blue-600 hover:text-blue-800 underline">
            oWire Premier League hub
          </Link>
          . The concurrent May 17 fixtures include the{' '}
          <Link href="/premier-league/aston-villa-vs-liverpool-may-15-2026" className="text-blue-600 hover:text-blue-800 underline">
            Aston Villa vs Liverpool CL clash on May 15
          </Link>
          {' '}and the{' '}
          <Link href="/premier-league/leeds-united-vs-brighton-may-17-2026" className="text-blue-600 hover:text-blue-800 underline">
            Leeds vs Brighton Europa League battle
          </Link>
          .
        </p>
      </NewsArticle>
    </>
  );
}