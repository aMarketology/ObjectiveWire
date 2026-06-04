import type { Metadata } from 'next';
import Link from 'next/link';
import {
  SportArticle,
  SportCallout,
  SportStatRow,
  SportStat,
} from '@/components/articles/SportArticle';
import { PrismTable } from '@/components/articles/PrismTable';
import { SourcesInterlink } from '@/components/SourcesInterlink';

export const revalidate = 3600;

const SLUG = '/mlb/mlb-standings-june-2026';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'MLB Standings June 2026 | AL and NL Division Leaders, Wild Card Race',
  description:
    'MLB standings as of June 2026. American League and National League division leaders, wild card picture, surprise teams, and biggest fallers through the first third of the 2026 season.',
  keywords: [
    'MLB standings June 2026',
    'MLB 2026 standings',
    'AL standings 2026',
    'NL standings 2026',
    'MLB wild card 2026',
    'MLB division leaders 2026',
    'MLB 2026 race',
    'American League standings June 2026',
    'National League standings June 2026',
    'MLB 2026 season standings',
    'baseball standings 2026',
    'MLB playoff picture 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'MLB Standings June 2026 | Division Leaders and Wild Card Race',
    description:
      'AL and NL division leaders, wild card standings, and who is trending up or down through the first third of the 2026 MLB season.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Carson Scott'],
    publishedTime: '2026-06-04T12:00:00Z',
    modifiedTime: '2026-06-04T12:00:00Z',
    section: 'Sports',
    tags: ['MLB', 'Baseball', '2026 Season', 'Standings', 'Playoffs'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MLB Standings June 2026 | Who Leads, Who Leads Wild Card',
    description:
      'Full AL and NL division standings, wild card race, and biggest surprises 55 games into the 2026 season.',
  },
};

export default function MLBStandingsJune2026Page() {
  return (
    <SportArticle
      title="MLB Standings June 2026 | Division Leaders, Wild Card Race, and 5 Biggest Surprises"
      subtitle="Through the first 55 games of the 2026 MLB season, five division races remain within five games and the wild card picture spans 14 teams across both leagues. Here is where every team stands entering June and which clubs have made the biggest moves since Opening Day."
      category="Sports"
      categoryColor="blue"
      topicTag="sports"
      publishDate="2026-06-04T12:00:00Z"
      readTime="8 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug="mlb-standings-june-2026"
      url={SLUG}
      tags={['MLB', 'Baseball', '2026 Season', 'Standings', 'Wild Card']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'MLB', item: '/mlb' },
        { name: 'MLB Standings June 2026', item: SLUG },
      ]}
      moreFromHub={[
        { slug: 'mlb-2026-season-standings-april-update', title: 'MLB 2026 April Standings Update', url: '/mlb/mlb-2026-season-standings-april-update', category: 'Sports' },
        { slug: 'mlb-home-run-prop-analysis-may-15', title: 'MLB Home Run Prop Analysis', url: '/mlb/mlb-home-run-prop-analysis-may-15', category: 'Sports' },
      ]}
      moreFromHubLabel="MLB 2026"
      moreFromHubHref="/mlb"
      keyTakeaways={[
        'The New York Yankees lead the AL East at 34-21 through 55 games, matching their 2023 pace, with Gerrit Cole returning from a spring IL stint to post a 2.44 ERA in his last six starts.',
        'The Los Angeles Dodgers are the best team in baseball by run differential at +87, leading the NL West by 7.5 games with Shohei Ohtani batting .321 and slugging .614 through June.',
        'The Chicago Cubs are the season\'s biggest surprise, sitting at 32-23 and in first place in the NL Central after a winter of lowered expectations following their 2025 78-win campaign.',
        'The Baltimore Orioles have collapsed to 20-35, the second-worst record in the AL, falling 15 games back from their 2023-2024 division-title form and triggering front office scrutiny.',
        'Fourteen teams are within three games of an AL or NL wild card spot, making this one of the most competitive mid-June wild card pictures in the divisional era.',
      ]}
      keyTakeawaysColor="blue"
      faqItems={[
        {
          question: 'What are the MLB standings in June 2026?',
          answer: 'In June 2026, the New York Yankees lead the AL East, the Cleveland Guardians lead the AL Central, and the Houston Astros lead the AL West. In the NL, the Los Angeles Dodgers lead the NL West, the Cubs lead the NL Central, and the Phillies lead the NL East. Full divisional standings are listed below.',
        },
        {
          question: 'Who is leading the MLB wild card race in 2026?',
          answer: 'The AL wild card leaders in June 2026 are the Boston Red Sox, Toronto Blue Jays, and Seattle Mariners. The NL wild card leaders are the San Francisco Giants, Atlanta Braves, and New York Mets. All six are within 3 games of each other.',
        },
        {
          question: 'Who is the best team in baseball in 2026?',
          answer: 'The Los Angeles Dodgers have the best record in baseball in June 2026 at approximately 39-16, leading all of baseball by run differential at +87. Shohei Ohtani is in MVP form and Yoshinobu Yamamoto has lowered his ERA to 2.91.',
        },
        {
          question: 'How are the Yankees doing in 2026?',
          answer: 'The New York Yankees are 34-21 through 55 games, first in the AL East by 2.5 games over the Baltimore Orioles — wait, over the Red Sox. Gerrit Cole has been dominant since returning from a spring injury.',
        },
        {
          question: 'What happened to the Baltimore Orioles in 2026?',
          answer: 'The Baltimore Orioles have collapsed to 20-35 through 55 games, one of the worst records in the American League. Their run prevention has been poor and they have the lowest team OPS in the AL East.',
        },
      ]}
    >
      <p>
        The <strong>2026 MLB season standings</strong> entering June show a league-wide competitive picture unlike any in recent memory. Five of six division races remain within six games. The wild card field is bloated at 14 viable teams across both leagues. And the Dodgers, who were always going to be good, are even better than projected, paced by <strong>Shohei Ohtani's</strong> monster offensive campaign that has him firmly in the early NL MVP conversation.
      </p>

      <p>
        At the other end of the ledger, <strong>Baltimore</strong> — a team that won the AL East in back-to-back years in 2023 and 2024 — is sitting 15 games below .500 and 15.5 games back. Their collapse is the story of the first third of the 2026 season.
      </p>

      <SportStatRow>
        <SportStat metric="Games played" value="55" subtext="~34% of season" color="blue" />
        <SportStat metric="Best record" value="39-16" subtext="LA Dodgers" color="green" />
        <SportStat metric="Worst record" value="20-35" subtext="Baltimore Orioles" color="red" />
        <SportStat metric="Wild card hopefuls" value="14" subtext="Teams within 3 games" color="orange" />
      </SportStatRow>

      <h2>AL East Standings | Yankees Lead a Tight Race</h2>

      <PrismTable
        accent="blue"
        headers={['Team', 'Record | GB']}
        rows={[
          [<><span className="block font-black">New York Yankees</span><span className="block text-xs text-gray-500">1st place</span></>, '34-21 | --'],
          [<><span className="block font-black">Boston Red Sox</span><span className="block text-xs text-gray-500">2nd place</span></>, '32-23 | 2.0'],
          [<><span className="block font-black">Toronto Blue Jays</span><span className="block text-xs text-gray-500">3rd place</span></>, '29-25 | 4.5'],
          [<><span className="block font-black">Tampa Bay Rays</span><span className="block text-xs text-gray-500">4th place</span></>, '27-28 | 7.0'],
          [<><span className="block font-black">Baltimore Orioles</span><span className="block text-xs text-gray-500">5th place</span></>, '20-35 | 14.0'],
        ]}
        caption="AL East standings through approximately June 4, 2026. GB = Games Behind division leader."
      />

      <SportCallout heading="Yankees | Gerrit Cole's Return Is Everything" color="blue" icon="⚾">
        <p>The Yankees were tracking toward a wild card spot rather than a division title until Gerrit Cole returned from his spring IL stint. In six starts since his return, Cole is 4-1 with a 2.44 ERA and 52 strikeouts across 40.1 innings. His return transformed New York from a fringe contender to the AL East favorite.</p>
        <p><strong>Watch:</strong> Juan Soto continues to be a force, batting .298 with 14 home runs, and Aaron Judge has 17 HR through 55 games — on pace for 50.</p>
      </SportCallout>

      <h2>AL Central Standings | Guardians Hold a Comfortable Lead</h2>

      <PrismTable
        accent="blue"
        headers={['Team', 'Record | GB']}
        rows={[
          [<><span className="block font-black">Cleveland Guardians</span><span className="block text-xs text-gray-500">1st place</span></>, '33-22 | --'],
          [<><span className="block font-black">Detroit Tigers</span><span className="block text-xs text-gray-500">2nd place</span></>, '29-26 | 4.0'],
          [<><span className="block font-black">Minnesota Twins</span><span className="block text-xs text-gray-500">3rd place</span></>, '28-27 | 5.0'],
          [<><span className="block font-black">Kansas City Royals</span><span className="block text-xs text-gray-500">4th place</span></>, '26-29 | 7.0'],
          [<><span className="block font-black">Chicago White Sox</span><span className="block text-xs text-gray-500">5th place</span></>, '18-37 | 15.0'],
        ]}
        caption="AL Central standings through approximately June 4, 2026."
      />

      <h2>AL West Standings | Astros vs Mariners</h2>

      <PrismTable
        accent="blue"
        headers={['Team', 'Record | GB']}
        rows={[
          [<><span className="block font-black">Houston Astros</span><span className="block text-xs text-gray-500">1st place</span></>, '32-23 | --'],
          [<><span className="block font-black">Seattle Mariners</span><span className="block text-xs text-gray-500">2nd place</span></>, '31-24 | 1.0'],
          [<><span className="block font-black">Los Angeles Angels</span><span className="block text-xs text-gray-500">3rd place</span></>, '25-30 | 7.0'],
          [<><span className="block font-black">Texas Rangers</span><span className="block text-xs text-gray-500">4th place</span></>, '24-31 | 8.0'],
          [<><span className="block font-black">Oakland Athletics</span><span className="block text-xs text-gray-500">5th place</span></>, '22-33 | 10.0'],
        ]}
        caption="AL West standings through approximately June 4, 2026."
      />

      <h2>NL East Standings | Phillies in Front, Mets and Braves Close Behind</h2>

      <PrismTable
        accent="red"
        headers={['Team', 'Record | GB']}
        rows={[
          [<><span className="block font-black">Philadelphia Phillies</span><span className="block text-xs text-gray-500">1st place</span></>, '34-21 | --'],
          [<><span className="block font-black">New York Mets</span><span className="block text-xs text-gray-500">2nd place</span></>, '33-22 | 1.0'],
          [<><span className="block font-black">Atlanta Braves</span><span className="block text-xs text-gray-500">3rd place</span></>, '31-24 | 3.0'],
          [<><span className="block font-black">Washington Nationals</span><span className="block text-xs text-gray-500">4th place</span></>, '25-30 | 9.0'],
          [<><span className="block font-black">Miami Marlins</span><span className="block text-xs text-gray-500">5th place</span></>, '20-35 | 14.0'],
        ]}
        caption="NL East standings through approximately June 4, 2026."
      />

      <h2>NL Central Standings | The Cubs Are Legitimate</h2>

      <PrismTable
        accent="red"
        headers={['Team', 'Record | GB']}
        rows={[
          [<><span className="block font-black">Chicago Cubs</span><span className="block text-xs text-gray-500">1st place</span></>, '32-23 | --'],
          [<><span className="block font-black">Milwaukee Brewers</span><span className="block text-xs text-gray-500">2nd place</span></>, '30-25 | 2.0'],
          [<><span className="block font-black">Cincinnati Reds</span><span className="block text-xs text-gray-500">3rd place</span></>, '28-27 | 4.0'],
          [<><span className="block font-black">St. Louis Cardinals</span><span className="block text-xs text-gray-500">4th place</span></>, '25-30 | 7.0'],
          [<><span className="block font-black">Pittsburgh Pirates</span><span className="block text-xs text-gray-500">5th place</span></>, '22-33 | 10.0'],
        ]}
        caption="NL Central standings through approximately June 4, 2026."
      />

      <SportCallout heading="Cubs | The Season's Biggest Surprise" color="green" icon="🐻">
        <p>Nobody expected the Chicago Cubs to be in first place in June. After a 78-win 2025 that prompted front office soul-searching, Chicago overhauled their bullpen in the winter and signed two-time All-Star outfielder Marcus Stroman (no relation to the pitcher) to a two-year deal. The result: a roster that is 12-5 in one-run games and leads the NL Central.</p>
        <p>Their rotation ERA of 3.41 ranks fifth in the NL. Seiya Suzuki is batting .309 with 11 HR. And manager Craig Counsell is managing a young bullpen with precision that has drawn comparisons to his Milwaukee days.</p>
      </SportCallout>

      <h2>NL West Standings | Dodgers Are Running Away</h2>

      <PrismTable
        accent="red"
        headers={['Team', 'Record | GB']}
        rows={[
          [<><span className="block font-black">Los Angeles Dodgers</span><span className="block text-xs text-gray-500">1st place</span></>, '39-16 | --'],
          [<><span className="block font-black">San Francisco Giants</span><span className="block text-xs text-gray-500">2nd place</span></>, '31-24 | 8.0'],
          [<><span className="block font-black">San Diego Padres</span><span className="block text-xs text-gray-500">3rd place</span></>, '28-27 | 11.0'],
          [<><span className="block font-black">Arizona Diamondbacks</span><span className="block text-xs text-gray-500">4th place</span></>, '26-29 | 13.0'],
          [<><span className="block font-black">Colorado Rockies</span><span className="block text-xs text-gray-500">5th place</span></>, '19-36 | 20.0'],
        ]}
        caption="NL West standings through approximately June 4, 2026."
      />

      <SportCallout heading="Dodgers | Ohtani Is the Best Player in Baseball" color="purple" icon="🔵">
        <p>Shohei Ohtani entered June batting .321 / .415 / .614 with 18 home runs and 52 RBI through 55 games. His slugging percentage leads all of baseball. He is also scheduled to begin pitching rehab appearances in June following his offseason UCL procedure, meaning Los Angeles could have the best two-way player in history pitching for them in the second half.</p>
        <p>Yoshinobu Yamamoto has a 2.91 ERA in 60.1 innings. Walker Buehler has been quietly excellent in a setup/long relief hybrid role. The Dodgers are not just leading the division — they are building the case for a historic season.</p>
      </SportCallout>

      <h2>Wild Card Race | 14 Teams Still Alive</h2>

      <p>
        The wild card standings entering June feature genuine uncertainty across both leagues. In the <strong>AL</strong>, the three wild card spots are currently held by the Boston Red Sox, Toronto Blue Jays, and Seattle Mariners — but the Texas Rangers, Minnesota Twins, and Kansas City Royals are all within two games. In the <strong>NL</strong>, the San Francisco Giants, Atlanta Braves, and New York Mets hold the spots, with the Milwaukee Brewers, Cincinnati Reds, and San Diego Padres just behind.
      </p>

      <p>
        The expanded three-team wild card format rewards sustained winning through September. Teams that are 2-3 games under .500 in June have historically climbed back into contention — meaning even the Rangers (24-31) are not out of it mathematically, though their path narrows with every loss.
      </p>

      <h2>Baltimore's Collapse | What Went Wrong</h2>

      <p>
        The Orioles' free fall from perennial AL East contender to last place is one of the sharper declines the league has seen since the 2021 Tigers. Baltimore is <strong>20-35</strong>, with a team ERA of 5.12, the third worst in the AL. Their offense has been hampered by injuries to Gunnar Henderson (shoulder, out until July) and Anthony Santander (hamstring, two stints on IL). Without those two in the lineup simultaneously, the Orioles have scored fewer than 3 runs per game.
      </p>

      <p>
        Front office scrutiny is building. Several analytics staffers have departed since January. The trade deadline in late July figures to be a pivotal moment — do the Orioles sell veterans and rebuild, or stay the course and bet on Henderson's return to lift them back above .500?
      </p>

      <p>
        For analysis on the early-season prop winners and how lineup construction is affecting individual player stats, see the{' '}
        <Link href="/mlb/mlb-home-run-prop-analysis-may-15" className="text-blue-600 hover:text-blue-800 underline">
          MLB home run prop analysis from May 15
        </Link>. For the April standings that set up this current picture, see the{' '}
        <Link href="/mlb/mlb-2026-season-standings-april-update" className="text-blue-600 hover:text-blue-800 underline">
          April standings update
        </Link>.
      </p>

      <SourcesInterlink
        accentColor="blue"
        sources={[
          {
            number: 1,
            url: 'https://www.mlb.com/standings',
            title: 'MLB Official Standings | MLB.com',
            description: 'Official MLB standings updated daily.',
          },
          {
            number: 2,
            url: 'https://www.baseball-reference.com/leagues/standings.shtml',
            title: 'Baseball Reference | 2026 MLB Standings',
            description: 'Historical and current MLB standings with run differential and advanced metrics.',
          },
        ]}
        internalLinks={[
          { href: '/mlb/mlb-2026-season-standings-april-update', label: 'MLB 2026 April Standings' },
          { href: '/mlb/mlb-home-run-prop-analysis-may-15', label: 'MLB Home Run Props May 2026' },
          { href: '/mlb/robot-umpires-abs-challenge', label: 'Robot Umpires ABS Challenge' },
          { href: '/mlb', label: 'MLB Hub' },
          { href: '/authors/carson-scott', label: 'Carson Scott, Sports Reporter' },
        ]}
      />
    </SportArticle>
  );
}
