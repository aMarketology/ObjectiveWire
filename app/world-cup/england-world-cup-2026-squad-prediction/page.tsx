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

const SLUG = '/world-cup/england-world-cup-2026-squad-prediction';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: "England World Cup 2026 Squad | Predicted Lineup, Key Players",
  description: "England's predicted World Cup 2026 squad and starting eleven. Jude Bellingham leads a 26-man group with genuine title contender depth. Full position-by-position breakdown.",
  keywords: [
    'England World Cup 2026 squad',
    'England 2026 World Cup',
    'England World Cup squad prediction',
    'Jude Bellingham World Cup 2026',
    'England starting eleven World Cup',
    'England World Cup 2026 players',
    'England FIFA World Cup 2026',
    'England squad 2026',
    'Three Lions World Cup',
    'England World Cup chances 2026',
    'England group stage 2026',
    'Gareth Southgate successor World Cup',
    'England striker World Cup 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "England World Cup 2026 Squad | Predicted 26-Man Group and Starting XI",
    description: "Jude Bellingham anchors England's deepest World Cup squad since 1990. Predicted 26-man group, starting eleven, and position-by-position strength assessment.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-01T11:00:00Z',
    modifiedTime: '2026-06-01T11:00:00Z',
    section: 'Sports',
    tags: ['England', 'FIFA World Cup 2026', 'Soccer', 'Jude Bellingham'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "England World Cup 2026 Squad | Bellingham Leads the Three Lions",
    description: "The most complete England squad since 1990. Predicted 26-man group, starting XI, and the position battles that define the Three Lions' title bid.",
  },
};

export default function EnglandWorldCupSquadPage() {
  return (
    <SportArticle
      title="England World Cup 2026 Squad | Predicted 26-Man Group and Starting XI"
      subtitle="England enter the 2026 FIFA World Cup with Jude Bellingham as the central creative force of their deepest squad in over 30 years. The Three Lions carry genuine title contender credentials for the first time since the 1990 World Cup semi-final generation, with competition across every line that previous England squads could not match."
      category="Sports"
      categoryColor="red"
      topicTag="sports"
      publishDate="2026-06-01T11:00:00Z"
      readTime="8 min read"
      author={{ name: 'Jack Brennan', role: 'Sports Reporter', authorSlug: 'jack-brennan' }}
      slug="england-world-cup-2026-squad-prediction"
      url={SLUG}
      tags={['England', 'FIFA World Cup 2026', 'Soccer', 'Jude Bellingham']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup', item: '/world-cup' },
        { name: 'England 2026 Squad', item: SLUG },
      ]}
      keyTakeaways={[
        "England's predicted 2026 World Cup squad is built around Jude Bellingham (Real Madrid) as the primary creative and scoring threat from central midfield, at age 22 his peak year.",
        'The Three Lions have genuine competition for places across every line for the first time in a generation, with at least three credible options at right back, central midfield, and the striker role.',
        "England's goalkeeping situation is resolved: Jordan Pickford remains the starter, backed by Dean Henderson and a third keeper, with no genuine controversy.",
        "England are listed at approximately +500 by major bookmakers, making them the second or third shortest-priced team in the 2026 World Cup field after France.",
        "England's group stage draw determines everything. A manageable group means the squad arrives at the knockout rounds fresh. A bracket that includes France or Spain before the semi-final would test the squad's depth severely.",
      ]}
      keyTakeawaysColor="red"
      faqItems={[
        {
          question: 'Who is in the England World Cup 2026 squad?',
          answer: "England's final 26-man squad for the 2026 World Cup includes Jude Bellingham, Jordan Pickford, Bukayo Saka, Phil Foden, Harry Kane, and a full-depth group across every position. The final squad is announced by the England manager in late May 2026 with the tournament opening June 11.",
        },
        {
          question: 'Who is England\'s best player at the 2026 World Cup?',
          answer: "Jude Bellingham is England's most important player at the 2026 World Cup. The Real Madrid midfielder combines goal-scoring, creativity, and defensive work rate at a level no previous England midfielder has delivered consistently at international level.",
        },
        {
          question: 'What group is England in at the 2026 World Cup?',
          answer: "England's group stage placement in the 2026 World Cup draw puts them in a group alongside two nations they are expected to progress past comfortably, though the exact opponents depend on the final group draw seedings. England are a Pot 1 seed.",
        },
        {
          question: 'Has England ever won the World Cup?',
          answer: "England won the FIFA World Cup once, in 1966, hosting the tournament at Wembley Stadium. Bobby Moore lifted the trophy after a 4-2 victory over West Germany in the final. England's best subsequent result was reaching the semi-final in 1990 and the final of Euro 2020 (played in 2021).",
        },
        {
          question: 'What are England\'s odds to win the 2026 World Cup?',
          answer: 'England are listed at approximately +500 at major sportsbooks entering the 2026 World Cup, making them the second or third shortest-priced nation in the field. France lead the odds at around +375.',
        },
      ]}
    >
      <p>
        <strong>England's 2026 FIFA World Cup squad</strong> is the most complete group the Three Lions have assembled since the Bobby Robson era. The squad does not depend on a single player surviving an injury, does not lack depth at any critical position, and is built around a 22-year-old central midfielder at Real Madrid who is already one of the best players in the world. For context on where England sit in the full contender picture, see the{' '}
        <Link href="/world-cup/world-cup-2026-favorites-odds-preview" className="text-blue-600 hover:text-blue-800 underline">
          World Cup 2026 favorites and odds breakdown
        </Link>.
      </p>

      <h2>Jude Bellingham | Why He Is England's Entire Tournament</h2>

      <p>
        <strong>Jude Bellingham</strong> turned 22 in June 2025. He plays for Real Madrid, the most demanding environment in club football, and has performed at a level that earns him a starting berth in any club XI on the planet. His role for England is different from his club role — he operates with more license to arrive late into attacking positions, more responsibility for creating the tempo of England's build-up play, and more expectation on his shoulders than any English player since Wayne Rooney was at his peak.
      </p>

      <p>
        What separates Bellingham from previous England midfielders is not just technical quality but the combination of technical quality and competitive experience. He has already played in a UEFA Champions League final, a World Cup knockout round, a European Championship final. He knows what it feels like when a tournament is on the line. That cannot be coached.
      </p>

      <SportStatRow>
        <SportStat metric="Bellingham age" value="22" subtext="peak window" color="blue" />
        <SportStat metric="Club" value="Real Madrid" subtext="UCL winner" color="indigo" />
        <SportStat metric="England caps" value="40+" subtext="as of June 2026" color="green" />
        <SportStat metric="England goals" value="15+" subtext="including tournaments" color="orange" />
      </SportStatRow>

      <h2>Predicted England Starting XI</h2>

      <SportCallout heading="England Predicted Starting XI | 4-2-3-1" color="indigo" icon="🏴󠁧󠁢󠁥󠁮󠁧󠁿">
        <p><strong>GK:</strong> Jordan Pickford (Everton)</p>
        <p><strong>RB:</strong> Trent Alexander-Arnold (Real Madrid)</p>
        <p><strong>CB:</strong> Harry Maguire / John Stones</p>
        <p><strong>CB:</strong> Marc Guehi (Crystal Palace)</p>
        <p><strong>LB:</strong> Luke Shaw (Manchester United) / Kieran Trippier</p>
        <p><strong>CDM:</strong> Declan Rice (Arsenal)</p>
        <p><strong>CDM / CM:</strong> Kobbie Mainoo (Manchester United)</p>
        <p><strong>CAM:</strong> Jude Bellingham (Real Madrid)</p>
        <p><strong>RW:</strong> Bukayo Saka (Arsenal)</p>
        <p><strong>LW:</strong> Phil Foden (Manchester City)</p>
        <p><strong>ST:</strong> Harry Kane (Bayern Munich)</p>
      </SportCallout>

      <h2>Predicted 26-Man Squad | Position by Position</h2>

      <PrismTable
        accent="blue"
        headers={['Position', 'Players (predicted)']}
        rows={[
          ['Goalkeepers (3)', 'Jordan Pickford, Dean Henderson, James Trafford'],
          ['Right Backs (2)', 'Trent Alexander-Arnold, Kyle Walker'],
          ['Centre Backs (4)', 'Harry Maguire, John Stones, Marc Guehi, Levi Colwill'],
          ['Left Backs (2)', 'Luke Shaw, Kieran Trippier'],
          ['Defensive Midfield (2)', 'Declan Rice, Conor Gallagher'],
          ['Central Midfield (3)', 'Jude Bellingham, Kobbie Mainoo, Adam Wharton'],
          ['Right Wing (2)', 'Bukayo Saka, Anthony Gordon'],
          ['Left Wing / AM (3)', 'Phil Foden, Jack Grealish, Cole Palmer'],
          ['Strikers (3)', 'Harry Kane, Ollie Watkins, Ivan Toney'],
        ]}
        caption="England predicted 26-man World Cup 2026 squad. Selections represent analytical prediction based on form, fitness, and selection history entering June 2026. Official squad announced by England manager in late May 2026."
      />

      <h2>Goalkeepers | No Controversy, Pickford Starts</h2>

      <p>
        <strong>Jordan Pickford</strong> remains England's unchallenged first-choice goalkeeper. He has been the starter through two European Championship finals and a World Cup semi-final. His distribution, which has improved significantly since his early international career, is now a genuine asset in England's build-up play from the back. Dean Henderson provides reliable cover.
      </p>

      <h2>Defence | The Back Four England Always Wanted</h2>

      <p>
        <strong>Trent Alexander-Arnold</strong> at right back — and sometimes pushed into a hybrid inverted midfield role — gives England a player who effectively operates as a second creative midfielder from a defensive position. His combination with Bellingham on the right half-space has become one of England's most dangerous recurring patterns.
      </p>

      <p>
        The centre-back situation has been England's most consistent concern through multiple tournament cycles. <strong>Harry Maguire</strong> divides opinion but delivers in tournament football, where his aerial presence at set pieces and composure under pressure have repeatedly proven more valuable than his club form suggests. <strong>Marc Guehi</strong>, who was outstanding at Euro 2024, is now the most technically assured of England's central defensive options.
      </p>

      <h2>Midfield | The Deepest England Has Had in 30 Years</h2>

      <p>
        England's midfield depth in 2026 is unprecedented in their modern tournament history. <strong>Declan Rice</strong> is one of the best defensive midfielders in Europe, a player who wins the ball and immediately makes positive decisions in tight spaces. <strong>Kobbie Mainoo</strong>, at 21, runs alongside him with a technical range that England's previous holding midfield options could never replicate.
      </p>

      <p>
        Bellingham sits ahead of them in the attacking midfield role, which frees him from defensive tracking duties and allows him to roam into the spaces where he is most dangerous. England have not had an attacking midfielder with this profile deployed with this kind of positional freedom since Paul Scholes was briefly used in an advanced role, and even that comparison undersells what Bellingham offers.
      </p>

      <h2>Attack | Three Striker Options, Genuine World-Class Width</h2>

      <p>
        <strong>Harry Kane</strong> at Bayern Munich remains England's center-forward. Kane is 32 during the tournament, at an age where elite center-forwards can still carry a team if service is consistent, but where volume running and pressing contributions begin to decline. England's system under their current manager uses Kane as a focal point and finisher rather than a press-trigger, which suits the profile of a 32-year-old striker at an elite club.
      </p>

      <p>
        <strong>Bukayo Saka</strong> on the right wing is the most complete English wideforward since the peak of Theo Walcott, and considerably better technically. He cuts inside, scores, assists, and defends from wide positions with a consistency that makes him one of the first names on the teamsheet. <strong>Phil Foden</strong> on the left gives England an inside forward who can play the half-space and arrive into goal-scoring positions late.
      </p>

      <SportCallout heading="England's Key Tournament Questions" color="orange" icon="❓">
        <p><strong>1. Trent's role:</strong> Full-back or inverted midfield? The answer changes how England's entire shape functions.</p>
        <p><strong>2. Kane's fitness:</strong> 32 years old across a 37-day tournament. Load management is non-negotiable.</p>
        <p><strong>3. The draw:</strong> A bracket that avoids France and Spain until the semi-final gives England their best path. An early clash with either nation changes the calculation entirely.</p>
        <p><strong>4. Bellingham health:</strong> England have no Plan B at the level he provides. A Bellingham injury would fundamentally alter what the squad can achieve.</p>
      </SportCallout>

      <SourcesInterlink
        accentColor="red"
        sources={[
          {
            number: 1,
            url: 'https://www.thefa.com/england/senior-men',
            title: 'England Senior Men | The FA Official',
            description: 'Official England squad news, fixtures, and manager statements from The Football Association.',
          },
          {
            number: 2,
            url: 'https://www.bbc.com/sport/football/england',
            title: 'England Football | BBC Sport',
            description: 'England squad coverage, match reports, and World Cup preparation news from BBC Sport.',
          },
          {
            number: 3,
            url: 'https://www.skysports.com/football/england',
            title: 'England | Sky Sports Football',
            description: 'Squad selection reports, player form analysis, and World Cup squad predictions.',
          },
        ]}
        internalLinks={[
          { href: '/world-cup/world-cup-2026-favorites-odds-preview', label: 'World Cup 2026 Favorites and Odds' },
          { href: '/world-cup/world-cup-2026-schedule-dates', label: 'World Cup 2026 Schedule and Dates' },
          { href: '/world-cup', label: 'ObjectWire World Cup Hub' },
          { href: '/premier-league', label: 'Premier League Coverage' },
        ]}
      />
    </SportArticle>
  );
}
