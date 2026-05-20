import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 3600;

const SLUG = '/premier-league/leeds-united-vs-brighton-may-17-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Leeds United vs Brighton May 17 | Europa League on the Line for Brighton',
  description:
    'Brighton host Leeds United at Elland Road on May 17, 2026. Brighton are 2 points behind Bournemouth in sixth, chasing Europa League qualification with two games left.',
  keywords: [
    'Leeds United vs Brighton',
    'Leeds Brighton May 2026',
    'Brighton Europa League 2026',
    'Brighton vs Leeds Elland Road',
    'Premier League Europa League race 2026',
    'Brighton 2026 Premier League',
    'Leeds United 2026 season',
    'Premier League matchweek 37',
    'Brighton Bournemouth Europa League',
    'Elland Road May 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Leeds vs Brighton | Brighton\'s Europa League Dream, Two Games Left',
    description:
      'Brighton are two points behind Bournemouth with two matches remaining. A win at Elland Road keeps their Europa League hopes alive going into the final day.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Conan D. Boyle'],
    publishedTime: '2026-05-14T12:00:00Z',
    modifiedTime: '2026-05-14T12:00:00Z',
    section: 'Premier League',
    tags: ['Leeds United', 'Brighton', 'Premier League', 'Europa League'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leeds vs Brighton | Europa League Still Possible for Brighton',
    description: 'Brighton are 2 pts behind Bournemouth in the Europa League spot. Win at Elland Road and the final day opens up.',
  },
};

export default function LeedsVsBrightonPage() {
  return (
    <>
      <NewsArticleSchema
        title="Leeds United vs Brighton May 17 | Europa League on the Line for Brighton"
        description="Brighton host Leeds United at Elland Road on May 17, 2026. Brighton are 2 points behind Bournemouth in sixth, chasing Europa League qualification with two games left."
        author="Conan D. Boyle"
        authorUrl="https://www.objectwire.org/authors/conan-boyle"
        publishedTime="2026-05-14T12:00:00Z"
        modifiedTime="2026-05-14T12:00:00Z"
        articleUrl={ARTICLE_URL}
        section="Premier League"
        keywords={['Leeds United vs Brighton', 'Brighton Europa League 2026', 'Premier League matchweek 37']}
      />

      <NewsArticle
        title="Leeds United vs Brighton | Brighton Chase Europa League at Elland Road"
        subtitle="Brighton are 2 points behind Bournemouth in sixth with two games remaining. Leeds arrive in strong form. A tight one at Elland Road."
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
        tags={['Leeds United', 'Brighton', 'Premier League', 'Europa League']}
        slug="premier-league-leeds-united-vs-brighton-may-17-2026"
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Premier League', item: '/premier-league' },
          { name: 'Leeds United vs Brighton', item: SLUG },
        ]}
        keyTakeaways={[
          'Leeds United host Brighton at Elland Road on Sunday May 17, 2026, with a 15:00 BST kick-off (10:00 AM ET / 7:00 AM PT).',
          'Brighton are 7th on 53 points, 2 points behind Bournemouth in 6th, who hold the sole Europa League qualification spot.',
          'Brighton\'s last five results include a 3-0 win over Chelsea, a 3-0 win over Wolves, and a 2-0 win over Burnley, making them one of the in-form sides in the league.',
          'Leeds are 14th on 44 points and have won their last three matches, including a 2-1 win over Manchester United at Elland Road.',
          'Bournemouth play AFC Bournemouth vs Manchester City on Tuesday May 19, so Brighton could overtake them if they win Sunday and Bournemouth lose midweek.',
        ]}
        keyTakeawaysColor="blue"
        faqItems={[
          {
            question: 'What time is Leeds vs Brighton?',
            answer:
              'Leeds United vs Brighton kicks off at 15:00 BST on Sunday May 17, 2026. That is 10:00 AM ET / 7:00 AM PT in the United States. The match is at Elland Road, Leeds.',
          },
          {
            question: 'Can Brighton qualify for the Europa League?',
            answer:
              'Yes. Brighton are 7th on 53 points, 2 points behind Bournemouth in the Europa League spot. If Brighton win their last two games and Bournemouth drop points, Brighton can claim sixth place and Europa League football next season.',
          },
          {
            question: 'What is Brighton\'s recent form?',
            answer:
              'Brighton\'s last five results are: wins over Burnley (2-0), Tottenham (2-2 draw), Chelsea (3-0), Newcastle (loss, 1-3), and Wolves (3-0). Three wins and a draw in their last four, with one loss. Excellent form.',
          },
          {
            question: 'What is Leeds United\'s recent form?',
            answer:
              'Leeds have won their last three Premier League matches: 2-1 vs Manchester United, 3-0 vs Wolves, and 3-1 vs Burnley, with a draw against AFC Bournemouth in between. They are in excellent late-season form.',
          },
          {
            question: 'Is Leeds United safe from relegation?',
            answer:
              'Yes. Leeds are 14th on 44 points, 8 points above the relegation zone. They are confirmed safe with two games remaining.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Premier League"
        moreFromHubHref="/premier-league"
      >
        <p>
          Brighton travel to Elland Road on Sunday May 17 with Europa League football potentially
          within reach. They are 7th in the Premier League on 53 points, 2 behind Bournemouth in the
          sixth-place Europa League spot, with two games remaining. A win here keeps the dream alive
          going into the final day. A loss ends it.
        </p>

        <h2>Brighton | The Form Side Chasing Europe</h2>
        <p>
          Brighton are playing some of the best football in the league right now. Their 3-0 win over
          Chelsea at the City Ground was emphatic. Their 3-0 win over Wolves continued that form.
          They have scored 52 league goals this season, more than Chelsea or Everton, and their
          goal difference of +10 reflects a side that has been genuinely competitive in the top half.
          Manager Fabian Hurzeler has built on the foundation laid by Roberto De Zerbi, continuing
          Brighton's identity as a technically progressive, possession-dominant side who play without
          fear at home or away.
        </p>
        <p>
          The key caveat is the fixture that follows: Bournemouth play Manchester City on Tuesday
          May 19, a game in which City are still chasing Arsenal in the title race. If City win, and
          Brighton have beaten Leeds on Sunday, the two clubs will be level on points with one game
          left. The final day then becomes Brighton vs Bournemouth by proxy, with one going to Europe
          and one staying home.
        </p>

        <h2>Leeds United | In-Form Hosts with Nothing to Lose</h2>
        <p>
          Leeds are 14th with 44 points and have nothing at stake mathematically. But their form
          says something different. They have won three consecutive league matches, the most impressive
          being the 2-1 win over Manchester United at Elland Road, a result that will be celebrated
          in West Yorkshire for years. They also beat Wolves 3-0 and Burnley 3-1 in a run of
          performances that suggests a side that has found its rhythm just as the season is ending.
        </p>
        <p>
          For Brighton, this is the worst possible opponent to face: a home side with quality, momentum,
          and no consequence. Leeds can play loose and adventurous. Brighton need a win with all the
          weight that implies. The Elland Road crowd will not make it easy.
        </p>

        <h2>Europa League Race | The Full Picture</h2>
        <p>
          Bournemouth are sixth on 55 points with fixtures against Brentford (already played) and
          Manchester City (Tuesday May 19) remaining. City need points in the title race, which
          virtually guarantees Bournemouth face a genuinely motivated opponent in their last game.
          If Bournemouth lose to City and Brighton beat Leeds here, the clubs will be level heading
          into the final day. Brighton's final fixture is away at Manchester United on May 24.
          Bournemouth host Nottingham Forest.
        </p>
        <p>
          The Europa League race is live, and Sunday's result at Elland Road is the first domino.
          For all Premier League standings and results, see the{' '}
          <Link href="/premier-league" className="text-blue-600 hover:text-blue-800 underline">
            oWire Premier League hub
          </Link>
          . For the simultaneous May 17 relegation story, see our{' '}
          <Link href="/premier-league/wolverhampton-vs-fulham-may-17-2026" className="text-blue-600 hover:text-blue-800 underline">
            Wolverhampton vs Fulham preview
          </Link>
          . History and context on the competition is in our{' '}
          <Link href="/premier-league/premier-league-history" className="text-blue-600 hover:text-blue-800 underline">
            Premier League history guide
          </Link>
          .
        </p>
      </NewsArticle>
    </>
  );
}