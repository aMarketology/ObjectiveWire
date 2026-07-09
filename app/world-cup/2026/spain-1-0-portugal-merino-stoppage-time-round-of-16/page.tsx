import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-spain-1-0-portugal-merino-stoppage-time-round-of-16';
const URL_PATH = '/world-cup/2026/spain-1-0-portugal-merino-stoppage-time-round-of-16';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;
const OG_IMAGE = '/thumbnails/world-cup-2026-spain-1-0-portugal-merino-stoppage-time-round-of-16.jpg';

export const metadata: Metadata = {
  title: 'Spain 1-0 Portugal | World Cup 2026 Round of 16 | Merino Stoppage-Time Winner, Ronaldo Farewell',
  description:
    "Spain defeated Portugal 1-0 in a hyper-tactical Iberian derby, with Mikel Merino's stoppage-time winner settling one of the great World Cup tactical battles. The result brought a deeply emotional end to Cristiano Ronaldo's final World Cup campaign.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Merino Stoppage Time | Spain 1-0 Portugal | Ronaldo's Last World Cup | Round of 16",
    description: "One goal, deep into stoppage time. Spain advance. And Cristiano Ronaldo walks off a World Cup pitch for the last time. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-07-05T21:00:00Z',
    modifiedTime: '2026-07-05T21:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Spain', 'Portugal', 'Round of 16', 'Merino', 'Ronaldo', 'Iberian Derby'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Merino. Stoppage time. Spain 1-0 Portugal. And Ronaldo's World Cup journey is over. Forever.",
    description: "The ultimate Iberian derby. A chess match. 90 minutes of nothing. Then Merino. And then Ronaldo's last walk off a World Cup stage. Report by Jack Brennan.",
  },
};

export default function SpainPortugalR16Page() {
  return (
    <NewsArticle
      title="Spain 1-0 Portugal: Merino's Stoppage-Time Dagger Ends the Greatest World Cup Rivalry and Ronaldo's Final Chapter"
      subtitle="The ultimate Iberian derby served as both a tactical masterclass and an emotional farewell, as Mikel Merino's stoppage-time winner broke a 90-minute deadlock to send Spain into the quarterfinals and bring a tearful, deeply emotional end to Cristiano Ronaldo's final World Cup campaign."
      category="World Cup 2026 · Round of 16"
      categoryColor="red"
      topicTag="sports"
      publishDate="July 5, 2026"
      readTime="8 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Spain 1-0 Portugal Merino stoppage time winner Ronaldo farewell World Cup 2026 Round of 16' }}
      tags={['World Cup 2026', 'Spain', 'Portugal', 'Round of 16', 'Merino', 'Ronaldo', 'Iberian Derby', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Spain vs Portugal', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'france-1-0-paraguay-round-of-16', title: 'France 1-0 Paraguay | Round of 16', url: '/world-cup/2026/france-1-0-paraguay-round-of-16', publishDate: 'July 3, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Spain defeated Portugal 1-0 in the Round of 16 on July 5, 2026, with Mikel Merino scoring a stoppage-time winner.',
        'The match was a hyper-tactical Iberian derby that appeared destined for extra time before Merino\'s late strike.',
        'Cristiano Ronaldo played his final World Cup match, with Portugal unable to find the goal that would have extended his tournament farewell.',
        'Spain advance to the World Cup quarterfinals as one of the most technically accomplished sides remaining in the competition.',
      ]}
      faqItems={[
        {
          question: 'What was the score in Spain vs Portugal at the 2026 World Cup?',
          answer: 'Spain defeated Portugal 1-0 in the Round of 16 on July 5, 2026. Mikel Merino scored the only goal in stoppage time.',
        },
        {
          question: 'When did Merino score against Portugal?',
          answer: 'Mikel Merino scored a stoppage-time winner to give Spain a 1-0 victory over Portugal in the Round of 16, ending a match that had appeared to be heading for extra time.',
        },
        {
          question: 'Was the Spain vs Portugal match Ronaldo\'s last World Cup game?',
          answer: "Yes. Cristiano Ronaldo played his final World Cup match in this game. Portugal were unable to find a goal and Ronaldo's extraordinary World Cup career came to an emotional, tearful end at the Round of 16.",
        },
        {
          question: 'How tactical was the Spain vs Portugal match?',
          answer: 'Extremely tactical. Both sides prioritized defensive structure and minimizing risk, producing a chess match of positional discipline for 90 minutes before Merino\'s stoppage-time goal settled the tie.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          There are football matches that are also something more than football. <strong>Spain</strong>
          versus <strong>Portugal</strong> on July 5, 2026, was one of them. It was a tactical
          examination at the highest level. It was the conclusion of a rivalry that has defined
          Iberian football for a generation. And in its final minutes, when <strong>Mikel Merino</strong>
          struck his stoppage-time winner and <strong>Cristiano Ronaldo</strong> sat on the pitch
          in tears understanding that his last World Cup was over, it became something that will be
          remembered long after the final score fades from memory.
        </p>

        <p>
          Spain win 1-0. They are in the quarterfinals. Portugal are eliminated. And one of
          the greatest careers in the history of football has played its last note on the
          World Cup stage.
        </p>

        <h2>The Tactical Chess Match | 90 Minutes of Calculated Risk</h2>

        <p>
          Both managers approached this match with the same fundamental calculation: an error
          against the opponent's quality is more dangerous than an opportunity not taken.
          The result was a match of extraordinary tactical discipline and, for large stretches,
          frustrating neutralization of exactly the kind of attacking talent that both squads
          contain.
        </p>

        <p>
          Spain moved the ball with their characteristic precision. Portugal organized defensively
          and looked for Ronaldo and their attacking runners in transition. Neither approach
          produced clear-cut chances with any regularity. The goalkeepers were rarely seriously
          tested. The match moved through its regulation time as a contest in perfect and
          slightly agonizing balance.
        </p>

        <p>
          Extra time appeared inevitable. Penalty shootouts were being discussed. Then came
          the moment that all great tactical battles eventually produce, the single moment
          of quality that pierces the structure and decides everything.
        </p>

        <h2>Merino | The Dagger in Stoppage Time</h2>

        <p>
          <strong>Mikel Merino</strong> had been one of Spain's most reliable presences in
          the tournament, combining defensive intelligence with the ability to arrive in
          goalscoring positions when the game's rhythm aligned with his movement. In the
          dying seconds of the 90 minutes, he arrived in exactly that position with exactly
          that quality.
        </p>

        <p>
          The goal itself was struck with the clean, precise technique of a player fully
          composed under the pressure of a match that would define one of the great
          international rivalries. The ball settled into the net. Spain's players celebrated
          with the release of a team that had done something extraordinarily difficult against
          an opponent of Portugal's caliber. Portugal's players understood immediately that
          there was no time remaining for a response.
        </p>

        <h2>Ronaldo's Last World Cup Moment</h2>

        <p>
          The moment that will be seen most often from July 5, 2026 is not Merino's goal.
          It is what came after the final whistle. Cristiano Ronaldo, arguably the most
          decorated goal scorer in the history of European football, sitting on the pitch
          in tears, surrounded by teammates offering consolation that no words can fully
          provide.
        </p>

        <p>
          His World Cup record is without parallel in terms of personal achievement.
          His goals, his performances across multiple tournaments, and the longevity of
          competing at this level into his early 40s are facts that will not diminish
          with time. What the World Cup never gave him was the winner's medal. Portugal
          came closest in 2022 before a controversial quarterfinal exit. In 2026, the
          exit comes at the Round of 16, against Spain, settled by a single goal in
          the final seconds.
        </p>

        <p>
          The football world understood what the moment meant. It will not always be
          comfortable viewing for a neutral, watching greatness absorb a defeat that
          ends a specific kind of journey for the last time. But it is part of what makes
          sport honest: even the greatest careers have a final chapter, and the World Cup
          stage shows no preference for anyone.
        </p>

        <h2>Spain's Quarterfinal Place</h2>

        <p>
          Spain advance as one of the most technically complete sides in the competition.
          Their ability to control matches through possession without sacrificing defensive
          security has been their hallmark throughout. In the quarterfinals, they will face
          opposition with the quality to ask different questions of that approach. But a
          team that can win a hyper-tactical Iberian derby in stoppage time without conceding
          a goal is fully equipped to go deep in any tournament.
        </p>

      </div>
    </NewsArticle>
  );
}
