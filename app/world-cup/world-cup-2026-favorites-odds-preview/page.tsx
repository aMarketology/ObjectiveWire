import type { Metadata } from 'next';
import Link from 'next/link';
import {
  SportArticle,
  SportCallout,
  SportStatRow,
  SportStat,
} from '@/components/articles/SportArticle';
import { SourcesInterlink } from '@/components/SourcesInterlink';
import { PrismTable } from '@/components/articles/PrismTable';

export const revalidate = 3600;

const SLUG = '/world-cup/world-cup-2026-favorites-odds-preview';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'World Cup 2026 Favorites | Top Contenders, Odds, Predictions',
  description: 'Who will win the 2026 FIFA World Cup? France, England, Brazil, Argentina, and Spain lead the field as the tournament opens June 11. Full favorites breakdown with odds and squad strength.',
  keywords: [
    'World Cup 2026 favorites',
    'FIFA World Cup 2026 predictions',
    'World Cup 2026 odds',
    'who will win World Cup 2026',
    'France World Cup 2026',
    'England World Cup 2026',
    'Brazil World Cup 2026',
    'Argentina World Cup 2026',
    'Spain World Cup 2026',
    'best teams World Cup 2026',
    'World Cup 2026 winner prediction',
    'World Cup 2026 dark horses',
    'FIFA 2026 contenders',
    'World Cup June 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'World Cup 2026 Favorites | France, England, Brazil, Argentina, Spain',
    description: 'Five nations enter the 2026 World Cup as genuine contenders. France are the shortest-priced favorites. England have their deepest squad in a generation. Full breakdown with odds.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-01T10:00:00Z',
    modifiedTime: '2026-06-01T10:00:00Z',
    section: 'Sports',
    tags: ['FIFA World Cup 2026', 'Soccer', 'France', 'England'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Favorites | Who Wins the 48-Team Tournament',
    description: 'France lead the odds. England have their best squad in 30 years. Brazil and Argentina both qualified with something to prove. Full contender breakdown.',
  },
};

export default function WorldCup2026FavoritesPage() {
  return (
    <SportArticle
      title="World Cup 2026 Favorites | Who Wins the 48-Team Tournament Opening June 11"
      subtitle="France enter the 2026 FIFA World Cup as the shortest-priced favorites, backed by a squad featuring Kylian Mbappe, Antoine Griezmann, and the deepest midfield in international football. England, Brazil, Argentina, and Spain are the genuine contenders in a 48-team field that opens June 11 at Estadio Azteca in Mexico City."
      category="Sports"
      categoryColor="red"
      topicTag="sports"
      publishDate="2026-06-01T10:00:00Z"
      readTime="7 min read"
      author={{ name: 'Jack Brennan', role: 'Sports Reporter', authorSlug: 'jack-brennan' }}
      slug="world-cup-2026-favorites-odds-preview"
      url={SLUG}
      tags={['FIFA World Cup 2026', 'Soccer', 'France', 'England']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup', item: '/world-cup' },
        { name: 'Favorites and Predictions', item: SLUG },
      ]}
      keyTakeaways={[
        'The 2026 FIFA World Cup opens June 11 at Estadio Azteca in Mexico City and concludes with the final on July 19 at MetLife Stadium in East Rutherford, New Jersey.',
        'France are the consensus betting favorites at approximately +350 to +400 at major sportsbooks entering the tournament, backed by Kylian Mbappe and the deepest midfield of any nation.',
        'England enter with their strongest squad since 1990, with Jude Bellingham as the central creative force and a striker depth chart that covers every physical profile.',
        'Brazil and Argentina both qualified with points to prove after their respective 2022 and 2024 Copa America performances generated internal squad tension.',
        'The expanded 48-team field means more potential upsets in the group stage, with three nations per group advancing rather than two, adding a third-place path to the round of 32.',
      ]}
      keyTakeawaysColor="red"
      faqItems={[
        {
          question: 'Who are the favorites to win the 2026 World Cup?',
          answer: 'France are the consensus betting favorites entering the 2026 FIFA World Cup, with England, Brazil, Argentina, and Spain considered the next tier of genuine contenders. France are listed at approximately +350 to +400 at major sportsbooks, with England at +450 to +550.',
        },
        {
          question: 'When does the 2026 World Cup start?',
          answer: 'The 2026 FIFA World Cup opens on June 11, 2026 at Estadio Azteca in Mexico City with the host nation Mexico playing their first group stage match. The final is scheduled for July 19, 2026 at MetLife Stadium in East Rutherford, New Jersey.',
        },
        {
          question: 'How many teams are in the 2026 World Cup?',
          answer: '48 nations compete in the 2026 FIFA World Cup, expanded from the 32-team format used from 1998 through 2022. The 48 teams are divided into 12 groups of four, with three nations from each group advancing to a 32-team round of 32.',
        },
        {
          question: 'Can England win the 2026 World Cup?',
          answer: 'England are considered genuine contenders for the 2026 World Cup by most analysts and bookmakers, listed at +450 to +550. They have their deepest squad since 1990, with Jude Bellingham as the central playmaker and significant options across every line.',
        },
        {
          question: 'Is Lionel Messi playing in the 2026 World Cup?',
          answer: 'As of June 2026, Lionel Messi remains part of the Argentina squad and is expected to compete in the 2026 FIFA World Cup, which would be his sixth and likely final World Cup. Messi is 38 at the time of the tournament.',
        },
      ]}
    >
      <p>
        The <strong>2026 FIFA World Cup</strong> opens on June 11 in Mexico City with the largest field in tournament history: 48 nations across 16 host venues in the United States, Canada, and Mexico. For the full tournament structure, dates, and group stage bracket, see the{' '}
        <Link href="/world-cup/world-cup-2026-schedule-dates" className="text-blue-600 hover:text-blue-800 underline">
          complete World Cup 2026 schedule and dates guide
        </Link>.
        This article focuses on the five nations that realistically win the tournament and what the bookmakers and analysts see in each squad.
      </p>

      <h2>France | The Consensus Favorites</h2>

      <p>
        France are the team every serious analyst points to when asked who lifts the trophy on July 19 at MetLife Stadium. They arrive in 2026 carrying a squad built around <strong>Kylian Mbappe</strong>, who at 27 is entering the window where elite forwards win World Cups. Mbappe has already played two World Cup finals and finished as tournament top scorer in 2022. He knows what winning in this environment requires.
      </p>

      <p>
        The French squad extends well beyond Mbappe. <strong>Antoine Griezmann</strong> at 35 remains one of the most intelligent positional players in international football, capable of dropping deep, linking play, and finishing in tight spaces. The central midfield pairing — whoever Didier Deschamps settles on from a pool that includes Aurelien Tchouameni, Adrien Rabiot, and Eduardo Camavinga — is the deepest in the competition. France have three Champions League-caliber options for two midfield slots.
      </p>

      <SportStatRow>
        <SportStat metric="Betting odds" value="+375" subtext="consensus favorites" color="blue" />
        <SportStat metric="Mbappe World Cups" value="3" subtext="2018, 2022, 2026" color="indigo" />
        <SportStat metric="France FIFA rank" value="2nd" subtext="entering tournament" color="green" />
        <SportStat metric="Last title" value="2018" subtext="Russia" color="orange" />
      </SportStatRow>

      <p>
        The concern with France is the same concern that has followed this generation for four years: the gap between individual talent and collective chemistry. France can win ugly. They proved that in 2018. But they have also been knocked out in circumstances that reflected tactical rigidity and fragile squad unity. If they get a full Mbappe and a functioning midfield block, they win this tournament.
      </p>

      <h2>England | Deepest Squad Since 1990</h2>

      <p>
        England enter the 2026 World Cup with an argument that has not been available to them in 30 years: they are not just hopeful, they are genuinely equipped. <strong>Jude Bellingham</strong> at 22 is the best English footballer of his generation and one of the five best midfielders currently active in international football. He gives England a level of creativity and defensive contribution that previous England squads built their entire tactical system around avoiding the absence of.
      </p>

      <p>
        For the full England squad breakdown and predicted starting eleven, see the{' '}
        <Link href="/world-cup/england-world-cup-2026-squad-prediction" className="text-blue-600 hover:text-blue-800 underline">
          England World Cup 2026 squad and lineup prediction
        </Link>.
      </p>

      <SportCallout heading="England World Cup 2026 Outlook" color="blue" icon="🏴󠁧󠁢󠁥󠁮󠁧󠁿">
        <p><strong>Odds:</strong> +500 (approx.) at major sportsbooks</p>
        <p><strong>Key player:</strong> Jude Bellingham, Real Madrid CM/CAM</p>
        <p><strong>Strength:</strong> Deepest striker options of any 2026 contender</p>
        <p><strong>Risk factor:</strong> Tournament experience at knockout stage under pressure</p>
        <p><strong>Best World Cup result since:</strong> 1990 semi-final</p>
      </SportCallout>

      <h2>Brazil | The Weight of 24 Years</h2>

      <p>
        Brazil have not won a World Cup since 2002. That is the context every Brazilian player carries into 2026. They qualified with a squad that has genuine talent at every position but no single player of Mbappe's profile — nobody who changes a match from nothing. <strong>Vinicius Junior</strong> at Real Madrid is the closest thing, a player who can win games independently from the left flank, but Vinicius at international level has never consistently reproduced what he delivers at club football.
      </p>

      <p>
        Brazil's group stage should be comfortable. Their knockout path depends heavily on the draw and on whether their midfield — which runs through Lucas Paqueta — can control matches against organized, defensively disciplined European sides. Brazil versus France or England in the semi-final is the scenario that tests everything.
      </p>

      <h2>Argentina | Messi's Sixth and Final World Cup</h2>

      <p>
        Lionel Messi is 38 years old and competing in what will almost certainly be his sixth and final World Cup. Argentina are the defending champions from 2022. The squad that won in Qatar has experienced meaningful attrition — the generational shift that happens to every championship team — but the core remains. <strong>Julian Alvarez</strong> is now the most complete striker in the squad. <strong>Alexis Mac Allister</strong> runs the midfield with a composure that belies his age.
      </p>

      <p>
        The question with Argentina is Messi's physical availability and consistency across seven matches over 37 days. At 38 in tournament football, managed minutes are a necessity, not an option. How Argentina handles load management for their captain while maintaining squad cohesion is the central tactical challenge for manager Lionel Scaloni.
      </p>

      <h2>Spain | The Dark Horse Case</h2>

      <p>
        Spain are listed at longer odds than the four nations above but represent the best-organized and most tactically coherent system in the tournament. Under Luis de la Fuente, Spain have built on their Euro 2024 title with a young core led by <strong>Lamine Yamal</strong>, now 18, and <strong>Pedri</strong>, whose return to fitness after injury-interrupted seasons at Barcelona is the key variable in Spain's ceiling.
      </p>

      <p>
        Spain do not have a striker who finishes at elite international level — that has been the knock on this generation since Torres retired — but their midfield possession model creates enough high-quality situations that their forwards, even without a center-forward of the highest class, generate competitive volumes of shots on goal.
      </p>

      <PrismTable
        accent="red"
        headers={['Nation', 'Approx. Odds | Key Player | Last Title']}
        rows={[
          ['France', '+375 | Kylian Mbappe | 2018'],
          ['England', '+500 | Jude Bellingham | 1966'],
          ['Brazil', '+550 | Vinicius Junior | 2002'],
          ['Argentina', '+600 | Lionel Messi | 2022'],
          ['Spain', '+700 | Lamine Yamal | 2010'],
          ['Germany', '+900 | Florian Wirtz | 2014'],
          ['Portugal', '+1200 | Bernardo Silva | Never'],
          ['Netherlands', '+1400 | Virgil van Dijk | 1988 (EC)'],
        ]}
        caption="2026 FIFA World Cup approximate betting odds, key player, and last major title. Odds representative of major sportsbook consensus entering June 2026."
      />

      <h2>Who Gets Eliminated Early | Group Stage Upsets to Watch</h2>

      <p>
        The expanded 48-team format changes the calculus for traditional powerhouses. In a 32-team field, an upset result could be absorbed. In a 48-team format where three nations per group advance, the mathematics are more forgiving — but also more complex. A top seed losing their first group match now faces the prospect of needing results in subsequent games while knowing that the third-place qualification path exists.
      </p>

      <p>
        Nations to monitor as potential group-stage casualties: <strong>Belgium</strong>, whose golden generation has aged past its peak; <strong>Mexico</strong>, hosting but facing an increasingly competitive CONCACAF field; and <strong>Senegal</strong>, excellent in 2022 but facing a hostile draw that could produce an early exit.
      </p>

      <SourcesInterlink
        accentColor="red"
        sources={[
          {
            number: 1,
            url: 'https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026',
            title: 'FIFA World Cup 2026 | Official Site',
            description: 'Official tournament information, qualified teams, and host city details from FIFA.',
          },
          {
            number: 2,
            url: 'https://www.espn.com/soccer/story/world-cup-2026-power-rankings',
            title: 'World Cup 2026 Power Rankings | ESPN',
            description: 'ESPN FC editorial team power rankings and contender analysis entering the tournament.',
          },
          {
            number: 3,
            url: 'https://www.bbc.com/sport/football/world-cup-2026',
            title: 'World Cup 2026 | BBC Sport',
            description: 'BBC Sport World Cup 2026 coverage hub, squad news, and match previews.',
          },
        ]}
        internalLinks={[
          { href: '/world-cup/world-cup-2026-schedule-dates', label: 'World Cup 2026 Full Schedule and Dates' },
          { href: '/world-cup/england-world-cup-2026-squad-prediction', label: 'England World Cup 2026 Squad Prediction' },
          { href: '/world-cup', label: 'ObjectWire World Cup Hub' },
          { href: '/authors/jack-brennan', label: 'Jack Brennan, Sports Reporter' },
        ]}
      />
    </SportArticle>
  );
}
