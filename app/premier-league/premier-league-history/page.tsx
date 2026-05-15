import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/premier-league/premier-league-history';
const ARTICLE_URL = `https://www.owire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Premier League History | Founded 1992, Champions & Records',
  description:
    'The Premier League was founded in 1992 and is now the world\'s most-watched football league, covering 20 clubs across 38 matchdays each season.',
  keywords: [
    'Premier League history',
    'Premier League founded 1992',
    'Premier League champions list',
    'Premier League records',
    'Premier League titles',
    'Manchester United Premier League',
    'Arsenal Invincibles 2004',
    'Premier League top scorers',
    'Manchester City Premier League',
    'Premier League most successful club',
    'Premier League 2026',
    'English Premier League history',
    'Premier League all winners',
    'Premier League breakaway 1992',
    'Blackburn Rovers 1995',
    'Leicester City 2016',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Premier League History | Founded 1992, Champions & Records',
    description:
      'From its 1992 breakaway from the Football League to 34 seasons of football, the Premier League is the most-watched domestic football competition on earth.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'oWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-05-14T10:00:00Z',
    modifiedTime: '2026-05-14T10:00:00Z',
    section: 'Sports',
    tags: ['Premier League', 'English Football', 'Soccer', 'Sports History'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premier League History | 1992 to 2026',
    description:
      '34 seasons, 8 different champions, 1 unbeaten side. The full story of the Premier League.',
  },
};

export default function PremierLeagueHistoryPage() {
  return (
    <>
      <NewsArticleSchema
        title="Premier League History | Founded 1992, Champions & Records"
        description="The Premier League was founded in 1992 and is now the world's most-watched football league, covering 20 clubs across 38 matchdays each season."
        author="Jack Brennan"
        authorUrl="https://www.owire.org/authors/jack-brennan"
        publishedTime="2026-05-14T10:00:00Z"
        modifiedTime="2026-05-14T10:00:00Z"
        articleUrl={ARTICLE_URL}
        section="Sports"
        keywords={[
          'Premier League history',
          'Premier League founded 1992',
          'Premier League champions list',
          'Premier League records',
          'Manchester United Premier League',
        ]}
      />

      <NewsArticle
        title="Premier League History | Founded 1992, All Champions, Records"
        subtitle="From its 1992 breakaway to 34 seasons of the most-watched football in the world, this is the full story of the Premier League."
        category="Premier League"
        categoryColor="purple"
        topicTag="sports"
        publishDate="2026-05-14T10:00:00Z"
        readTime="9 min read"
        author={{
          name: 'Jack Brennan',
          role: 'Sports',
          authorSlug: 'jack-brennan',
        }}
        tags={['Premier League', 'English Football', 'Soccer', 'Sports History']}
        slug="premier-league-premier-league-history"
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Premier League', item: '/premier-league' },
          { name: 'Premier League History', item: SLUG },
        ]}
        keyTakeaways={[
          'The Premier League was founded on February 20, 1992, when 22 top-flight English clubs resigned from the Football League to form an independent competition under the FA.',
          'Manchester United are the most successful Premier League club with 13 titles, all won between 1993 and 2013 under Sir Alex Ferguson.',
          'Arsenal\'s 2003/04 side went the entire 38-game season unbeaten (26 wins, 12 draws), earning the nickname "The Invincibles" and a record that has never been matched.',
          'Manchester City under Pep Guardiola have won 7 Premier League titles since 2012, including back-to-back seasons and the historic 2022/23 treble.',
          'The Premier League is broadcast in 212 territories globally and is the most-watched domestic football league in the world by cumulative audience.',
        ]}
        keyTakeawaysColor="purple"
        faqItems={[
          {
            question: 'When was the Premier League founded?',
            answer:
              'The Premier League was founded on February 20, 1992, when the 22 First Division clubs resigned from the Football League to form an independent competition under the Football Association. The inaugural season kicked off in August 1992.',
          },
          {
            question: 'Who has won the most Premier League titles?',
            answer:
              'Manchester United have won the most Premier League titles, with 13 championships between 1993 and 2013, all under manager Sir Alex Ferguson. Manchester City are second with 9 titles.',
          },
          {
            question: 'Has any team gone unbeaten in the Premier League?',
            answer:
              'Yes. Arsenal completed the 2003/04 Premier League season unbeaten across all 38 matches, finishing with 26 wins and 12 draws. No team has gone the full season unbeaten since. The squad is known as "The Invincibles."',
          },
          {
            question: 'How many clubs are in the Premier League?',
            answer:
              'The Premier League has 20 clubs, reduced from 22 in its inaugural 1992/93 season. Each club plays 38 matches per season, 19 at home and 19 away, for a total of 380 matches per campaign.',
          },
          {
            question: 'Who is the Premier League\'s all-time top scorer?',
            answer:
              'Alan Shearer is the Premier League\'s all-time leading scorer with 260 goals, scored between 1992 and 2006 for Blackburn Rovers and Newcastle United.',
          },
          {
            question: 'Which was the biggest Premier League surprise?',
            answer:
              'Leicester City\'s 2015/16 Premier League title is widely considered the greatest upset in football history. Leicester were 5,000/1 outsiders before the season and won the title by 10 points, finishing 14 points ahead of Arsenal.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Premier League"
        moreFromHubHref="/premier-league"
      >
        <p>
          The Premier League is the top division of English football, founded in 1992 when 22 First
          Division clubs broke away from the Football League to form an independent competition under the
          governance of the Football Association. It now consists of 20 clubs, each playing 38 matches
          per season across 38 match weeks from August to May. It is broadcast in 212 territories and is
          the most-watched domestic football competition on earth.
        </p>

        <h2>Premier League Founded | The 1992 Breakaway</h2>
        <p>
          The Premier League came into existence on February 20, 1992. The clubs of the old First
          Division, frustrated by limited television revenue and restricted commercial freedom under the
          Football League structure, negotiated a new deal directly with the Football Association to
          operate as a self-governing body. A landmark broadcast deal with Sky Sports, worth £304 million
          over five years, launched what would become the world's most commercially dominant football
          league.
        </p>
        <p>
          The inaugural season in 1992/93 had 22 clubs, reduced to 20 after the 1994/95 campaign. The
          first Premier League match was played on August 15, 1992. Brian Deane of Sheffield United
          scored the first ever Premier League goal in a 2-1 win over Manchester United after just five
          minutes. The first champions were{' '}
          <strong>Manchester United</strong>, who won the title by 10 points under Sir Alex Ferguson,
          ending a 26-year wait for a league championship.
        </p>
        <p>
          For full coverage of the current season, visit the{' '}
          <Link href="/premier-league" className="text-blue-600 hover:text-blue-800 underline">
            oWire Premier League hub
          </Link>
          .
        </p>

        <h2>Manchester United Dominance | Ferguson Era 1993-2013</h2>
        <p>
          Sir Alex Ferguson's Manchester United defined the first two decades of the Premier League. Between
          the first season in 1992/93 and his retirement in 2013, United won 13 of the 21 available
          titles. The key players across that span are among the most recognisable in the sport's history:
          Eric Cantona, Roy Keane, Peter Schmeichel, Teddy Sheringham, Andy Cole, Dwight Yorke, Ruud van
          Nistelrooy, Wayne Rooney, Cristiano Ronaldo, and Robin van Persie all wore the red of United
          during championship campaigns. No manager in English football history has won more league titles
          than Ferguson's 13 in the Premier League era alone.
        </p>
        <p>
          United's 1998/99 season stands as one of the greatest in English football history: the club
          won the Premier League, FA Cup, and UEFA Champions League in the same season, completing a
          treble on the final day of the Champions League final against Bayern Munich with two added-time
          goals from Teddy Sheringham and Ole Gunnar Solskjaer.
        </p>

        <h2>Blackburn Rovers 1995 | The First Upset</h2>
        <p>
          The 1994/95 title was won by Blackburn Rovers, backed by benefactor Jack Walker and managed
          by Kenny Dalglish. Blackburn striker Alan Shearer scored 34 league goals to finish as the
          division's top scorer. Their title win, pipping Manchester United on the final day of the
          season while Rovers lost to Liverpool at Anfield, remains one of the Premier League's most
          dramatic finales. It was the last time Blackburn Rovers won the English top flight. Shearer
          went on to become the Premier League's{' '}
          <strong>all-time top scorer with 260 goals</strong>, split between Blackburn and his hometown
          club Newcastle United.
        </p>

        <h2>Arsenal Invincibles 2003/04 | The Unbeaten Season</h2>
        <p>
          Arsenal's 2003/04 campaign is the most celebrated in Premier League history. Under Arsene
          Wenger, Arsenal won the title without losing a single match across all 38 games, recording 26
          wins and 12 draws. The side included Thierry Henry (30 league goals), Patrick Vieira, Robert
          Pires, Ashley Cole, Sol Campbell, and Jens Lehmann. The feat has never been repeated. Arsenal
          were awarded a golden replica of the Premier League trophy in recognition of the achievement.
          The "Invincibles" nickname has remained synonymous with that squad for over two decades.
        </p>
        <p>
          Thierry Henry remains Arsenal's all-time top scorer and was named the PFA Players' Player of
          the Year that season. His total of 30 league goals in 2003/04 placed him among the most
          productive individual seasons in Premier League history.
        </p>

        <h2>Chelsea, Abramovich, and the West London Revolution</h2>
        <p>
          Roman Abramovich's takeover of Chelsea in June 2003 transformed the club and the league's
          competitive structure. Under Jose Mourinho, Chelsea won back-to-back titles in 2004/05 and
          2005/06 using the record points total of 95 at the time. Chelsea went on to win five Premier
          League titles in total: 2004/05, 2005/06, 2009/10 (under Carlo Ancelotti), 2014/15, and
          2016/17 (both under Mourinho's second spell and Antonio Conte respectively). John Terry, Frank
          Lampard, Didier Drogba, and Eden Hazard are among the defining figures of Chelsea's
          Abramovich-era Premier League campaigns.
        </p>

        <h2>Leicester City 2016 | 5,000/1 and the Greatest Upset</h2>
        <p>
          The 2015/16 Premier League season produced the most improbable title win in football history.
          Leicester City, freshly promoted and 5,000/1 to win the title at the start of the season,
          finished with 81 points, 10 points clear of Arsenal in second place. Manager Claudio Ranieri
          guided a squad built on Jamie Vardy's 24-goal season, Riyad Mahrez's creativity, and N'Golo
          Kante's unceasing defensive output in midfield. Vardy's 11-game consecutive scoring run set a
          Premier League record at the time. Kante was named PFA Players' Player of the Year and
          subsequently sold to Chelsea the following summer for £32 million. Leicester's title remains the
          standard against which every future football miracle is measured.
        </p>

        <h2>Manchester City and Pep Guardiola | Modern Dominance 2012-2026</h2>
        <p>
          Manchester City's 2011/12 title, won on goal difference from Manchester United on the final day
          of the season via Sergio Aguero's injury-time winner against Queens Park Rangers ("Agueroooo"),
          marked the beginning of a new era. City have since become the most dominant force in English
          football.
        </p>
        <p>
          Pep Guardiola arrived at City in June 2016. Under Guardiola, City have won the Premier League
          in 2017/18 (100 points, a record), 2018/19 (98 points), 2020/21, 2021/22, 2022/23, and 2023/24.
          The 2022/23 season added the UEFA Champions League and FA Cup, completing an historic treble
          that matched United's 1999 achievement. Guardiola's City are widely considered one of the
          greatest domestic football dynasties in the history of the game, combining elite squad depth,
          tactical sophistication, and consistent financial investment from Abu Dhabi-based ownership.
        </p>
        <p>
          Erling Haaland, signed from Borussia Dortmund in summer 2022, scored 36 Premier League goals
          in his debut season 2022/23, the highest single-season tally in Premier League history, breaking
          the previous record of 34 held by Andrew Cole and Alan Shearer.
        </p>

        <h2>Liverpool Under Klopp | The 2020 Title</h2>
        <p>
          Liverpool's 2019/20 Premier League title was their first league championship in 30 years, ending
          a drought that had become one of English football's most referenced storylines. Under Jurgen
          Klopp, Liverpool amassed 99 points in 2018/19 without winning the title (City finished on 98
          in second), then went one better the following season to win with 99 points of their own.
          Mohamed Salah, Sadio Mane, Roberto Firmino, Virgil van Dijk, and Alisson Becker formed the
          core of Klopp's side. Liverpool also won the Champions League in 2019 and reached four
          European finals under Klopp between 2016 and 2022.
        </p>

        <h2>Premier League Records | Numbers That Define the Era</h2>
        <p>
          The Premier League has produced defining statistical benchmarks across its 34 seasons:
        </p>
        <ul className="list-disc pl-6 space-y-1 my-4">
          <li><strong>All-time top scorer:</strong> Alan Shearer, 260 goals (Blackburn Rovers, Newcastle United)</li>
          <li><strong>Single-season top scorer:</strong> Erling Haaland, 36 goals (Manchester City, 2022/23)</li>
          <li><strong>Most titles:</strong> Manchester United, 13 (1993, 1994, 1996, 1997, 1999, 2000, 2001, 2003, 2007, 2008, 2009, 2011, 2013)</li>
          <li><strong>Record points in a season:</strong> Manchester City, 100 points (2017/18)</li>
          <li><strong>Most appearances:</strong> Gareth Barry, 653 Premier League appearances</li>
          <li><strong>Most clean sheets (goalkeeper):</strong> Petr Cech, 202 clean sheets</li>
          <li><strong>Unbeaten season:</strong> Arsenal, 2003/04 (38 matches, 26W 12D 0L)</li>
          <li><strong>Fastest goal:</strong> Shane Long (Southampton), 7.69 seconds vs Watford, April 2019</li>
          <li><strong>Most assists:</strong> Ryan Giggs, 162 Premier League assists</li>
        </ul>

        <h2>Premier League Global Reach | The World's Most-Watched League</h2>
        <p>
          The Premier League is broadcast in 212 territories worldwide. Its current UK broadcast deal,
          running from 2025 to 2028, is worth approximately £6.7 billion over three years, split between
          Sky Sports, TNT Sports (formerly BT Sport), and Amazon Prime Video. Internationally, the league
          generates additional billions from deals across the United States (NBC Sports/Peacock), India
          (Star Sports), and across Southeast Asia, the Middle East, and Latin America.
        </p>
        <p>
          The "Big Six" clubs, Arsenal, Chelsea, Liverpool, Manchester City, Manchester United, and
          Tottenham Hotspur, generate the largest individual global audiences and drive a disproportionate
          share of broadcast and commercial revenue. However, the league's distribution model ensures that
          all 20 clubs receive substantial broadcast income, a structural advantage over leagues like La
          Liga and Serie A where revenue concentration is more extreme.
        </p>

        <h2>Premier League 2025/26 Season</h2>
        <p>
          The 2025/26 Premier League season is the 34th edition of the competition. The campaign runs
          from August 2025 through May 2026, with 380 matches across the 38-match-week schedule.
          Coverage of every key fixture, result, and talking point is available at the{' '}
          <Link href="/premier-league" className="text-blue-600 hover:text-blue-800 underline">
            oWire Premier League hub
          </Link>
          .
        </p>
        <p>
          For broader English and European football context, including World Cup qualifying, see{' '}
          <Link href="/soccer" className="text-blue-600 hover:text-blue-800 underline">
            oWire Soccer
          </Link>
          {' '}and for Major League Soccer coverage, see the{' '}
          <Link href="/mls" className="text-blue-600 hover:text-blue-800 underline">
            oWire MLS hub
          </Link>
          .
        </p>

        <h2>All Premier League Champions | Full Winners List 1993-2026</h2>
        <p>
          Eight clubs have won the Premier League title since 1992/93: Manchester United (13),
          Manchester City (9), Chelsea (5), Arsenal (3), Blackburn Rovers (1), Liverpool (1),
          Leicester City (1), and Leeds United, who were never Premier League champions but had been
          champions of the old First Division in 1992 when the new era began. Every title was won by
          an English club, and every champion has been from England's top two cities or London with the
          sole exception of Blackburn (Lancashire) and Leicester (East Midlands).
        </p>
        <p>
          The only clubs to have been relegated from the Premier League era and returned to win the title
          is Manchester City, briefly relegated to Division One in 2001/02 before returning and
          eventually becoming the dominant force of the modern era. The league's current format, 20 clubs
          with three relegation places, has remained stable since the 1995/96 reduction from 22 clubs.
        </p>
      </NewsArticle>
    </>
  );
}
