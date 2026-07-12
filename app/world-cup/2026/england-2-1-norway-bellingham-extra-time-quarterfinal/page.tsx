import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-england-2-1-norway-bellingham-extra-time-quarterfinal';
const URL_PATH = '/world-cup/2026/england-2-1-norway-bellingham-extra-time-quarterfinal';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;
const OG_IMAGE = '/thumbnails/world-cup-2026-england-2-1-norway-bellingham-extra-time-quarterfinal.jpg';

export const metadata: Metadata = {
  title: 'England 2-1 Norway AET | World Cup 2026 Quarterfinal | Bellingham Hero, Haaland Test',
  description:
    "England survived their toughest test of the tournament, defeating Norway 2-1 in extra time in Miami. Jude Bellingham scored twice, including a 93rd-minute extra-time winner, after Norway had taken a first-half lead through Andreas Schjelderup. Erling Haaland was neutralized before being forced off with a knock.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "England 2-1 Norway AET | Bellingham Double Sends England to Semifinals | World Cup 2026",
    description: "Norway led 1-0. Bellingham equalized in first-half stoppage time. Haaland forced off. Bellingham struck again in extra time. England survive the ultimate test. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-07-11T23:30:00Z',
    modifiedTime: '2026-07-11T23:30:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'England', 'Norway', 'Quarterfinal', 'Bellingham', 'Haaland', 'Extra Time', 'Match Report'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "England 2-1 Norway AET | Bellingham the Hero | Haaland Neutralized | World Cup 2026 Quarterfinal",
    description: "Norway led. Bellingham equalized. Haaland forced off. Bellingham again in extra time. England survive the ultimate test in Miami. Report by Jack Brennan.",
  },
};

export default function EnglandNorwayQuarterfinalPage() {
  return (
    <NewsArticle
      title="Bellingham the Hero: England Survives Haaland Test as Extra-Time Thriller Sinks Norway"
      subtitle="England marched into the World Cup semifinals after a grueling 2-1 extra-time victory over tournament giant-killers Norway in Miami. Jude Bellingham scored twice, including a 93rd-minute extra-time winner, after Norway had taken a shock first-half lead through Andreas Schjelderup. Erling Haaland was neutralized by John Stones and Marc Guehi before being forced off with a knock."
      category="World Cup 2026 · Quarterfinal"
      categoryColor="red"
      topicTag="sports"
      publishDate="July 11, 2026"
      readTime="8 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'England 2-1 Norway AET Bellingham extra time winner Haaland World Cup 2026 quarterfinal Miami' }}
      tags={['World Cup 2026', 'England', 'Norway', 'Quarterfinal', 'Bellingham', 'Haaland', 'Extra Time', 'Match Report', 'Miami']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Quarterfinals', item: '/world-cup' },
        { name: 'England vs Norway', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'france-2-0-morocco-quarterfinal', title: 'France 2-0 Morocco | Quarterfinal', url: '/world-cup/2026/france-2-0-morocco-quarterfinal', publishDate: 'July 11, 2026', category: 'Sports' },
        { slug: 'spain-2-1-belgium-quarterfinal', title: 'Spain 2-1 Belgium | Quarterfinal', url: '/world-cup/2026/spain-2-1-belgium-quarterfinal', publishDate: 'July 11, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'England defeated Norway 2-1 in extra time in the World Cup quarterfinals on July 11, 2026, in Miami, with Jude Bellingham scoring twice.',
        'Norway took a shock 1-0 lead in the 36th minute through Andreas Schjelderup, with Martin Odegaard commanding midfield and Erling Haaland occupying England\'s defensive attention.',
        'Bellingham equalized in first-half stoppage time and struck again in the 93rd minute of extra time, a clinical poacher\'s finish that proved to be the winner.',
        'Erling Haaland was heavily marked by John Stones and Marc Guehi throughout and was forced off with a minor knock at the start of extra time, a significant factor in Norway\'s diminished attacking threat.',
      ]}
      faqItems={[
        {
          question: 'What was the score in England vs Norway at the 2026 World Cup quarterfinal?',
          answer: 'England defeated Norway 2-1 in extra time in the World Cup quarterfinal on July 11, 2026. Jude Bellingham scored both England goals.',
        },
        {
          question: 'How many goals did Jude Bellingham score against Norway?',
          answer: 'Jude Bellingham scored twice. His first was a stoppage-time equalizer at the end of the first half, and his second was a 93rd-minute extra-time winner that proved decisive.',
        },
        {
          question: 'Did Erling Haaland play against England?',
          answer: 'Yes. Haaland started and played the full 90 minutes plus the start of extra time before being forced off with a minor knock. He was heavily marked by John Stones and Marc Guehi and was largely neutralized as an attacking threat.',
        },
        {
          question: 'Who do England face in the World Cup 2026 semifinals?',
          answer: 'England advance to the semifinals where they await the winner of the Argentina vs Switzerland quarterfinal. The semifinal is scheduled for Wednesday night in Atlanta.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          It was not pretty. It will not be remembered as a tactical masterpiece. But it will go down as an instant World Cup classic. <strong>England</strong> has marched into the semifinals of the 2026 World Cup after a grueling, heart-stopping 2-1 extra-time victory over tournament giant-killers <strong>Norway</strong> in Miami.
        </p>

        <p>
          On a humid evening in South Florida, the Three Lions had to dig into the absolute depths of their reserve physical and mental energy to keep their championship dreams alive. They were pushed to the limit by a Norwegian side that arrived at the quarterfinal having already eliminated Brazil in the Round of 16, a result that had announced Norway as the tournament's most dangerous underdog.
        </p>

        <h2>Norway's First Half | The Blueprint Works</h2>

        <p>
          For the first half-hour, Norway's tactical blueprint worked to perfection. Commanded by <strong>Martin Odegaard</strong> in midfield and anchored by <strong>Erling Haaland</strong> up front, the Scandinavians looked completely unfazed by the occasion. Odegaard controlled the tempo from deep positions, finding the forward passes that bypassed England's first line of pressure and gave Norway's attackers space to operate.
        </p>

        <p>
          The stadium erupted in the 36th minute when young midfield maestro <strong>Andreas Schjelderup</strong> found space just inside the box, firing a brilliant shot past <strong>Jordan Pickford</strong> to hand Norway a shock 1-0 lead. The goal was the product of exactly the kind of attacking sequence that Norway had used to dismantle Brazil: quick combination play in central areas, a runner finding space between defensive lines, and a finish of genuine quality.
        </p>

        <p>
          England looked sluggish and shell-shocked. The Norwegian low block, organized and disciplined, was proving difficult to pierce. England's attackers found themselves crowded out, forced into wide positions where crosses were dealt with by Norway's physical central defenders. The half was drifting toward a Norwegian lead at the interval.
        </p>

        <h2>Bellingham's First | The Stoppage-Time Equalizer</h2>

        <p>
          Just as the referee was preparing to blow the whistle for halftime, the match found its first turning point. In the second minute of first-half stoppage time, <strong>Jude Bellingham</strong> timed a late run into the box perfectly, arriving at the back post to meet a delivery that had been flicked on by an England attacker. His finish was composed, placed beyond the reach of the Norwegian goalkeeper, and sent England into the tunnel at 1-1 instead of 1-0 down.
        </p>

        <p>
          The psychological impact of that goal cannot be overstated. England had been second best for 45 minutes. They were going into the break having conceded the first goal and having failed to create clear chances. Bellingham's intervention changed the emotional trajectory of the match entirely.
        </p>

        <h2>The Second Half | Chess Match and VAR Interventions</h2>

        <p>
          The second half turned into a high-stakes tactical contest. Both teams created half-chances. Both saw goals called back by tight VAR interventions. The intensity of the match, combined with the Miami humidity, began to take a visible toll on both sets of players.
        </p>

        <p>
          Haaland, who had been a constant physical menace in the first half, found himself increasingly isolated as England's central defensive pairing of <strong>John Stones</strong> and <strong>Marc Guehi</strong> adjusted to his movement. The service into him dried up as Odegaard was pressed more aggressively. The Norwegian attacking machine, which had been so effective in the first half, was gradually being starved of the conditions it needed to operate.
        </p>

        <p>
          The match moved through the second half and into extra time without a further goal. The prospect of a penalty shootout began to loom over Miami Stadium.
        </p>

        <h2>Bellingham's Second | The Extra-Time Winner</h2>

        <p>
          Haaland, who had been carrying a minor knock sustained in a collision early in the second half, was forced off at the start of extra time. His absence was immediately felt. Norway's attacking structure, which had been built around his presence occupying England's central defenders, lost its focal point.
        </p>

        <p>
          In the 93rd minute, Bellingham stepped up to achieve legendary status. The superstar midfielder pounced on a loose ball in the box, the result of a Norwegian defensive clearance that did not find sufficient distance. His finish was instinctive, a clinical poacher's strike that turned the game entirely on its head. 2-1 England. Miami Stadium erupted.
        </p>

        <p>
          The final 15 minutes of extra time were pure survival for <strong>Thomas Tuchel's</strong> side. Norway threw numbers forward, creating a dangerous late corner where <strong>Oscar Bobb</strong> fired agonizingly over the bar. Tensions boiled over as <strong>Kristoffer Ajer</strong> was booked for an aggressive altercation with Jordan Pickford after a heavy collision in the box. England held firm.
        </p>

        <h2>What Comes Next | A Semifinal in Atlanta</h2>

        <p>
          England advance to the semifinals, where they await the winner of the final quarterfinal match between defending champions Argentina and Switzerland. The semifinal is locked for Wednesday night in Atlanta.
        </p>

        <p>
          Norway depart the tournament having established themselves as a genuine force in international football. They eliminated Brazil. They took England to extra time in a quarterfinal. They have a generation of talent that will be competing at the highest level for years to come. The result in Miami will hurt, but the trajectory of Norwegian football has been permanently altered by this tournament.
        </p>

        <p>
          For England, the question is whether they can recover from the physical and emotional cost of this match in time for the semifinal. They have been pushed to their limits in consecutive knockout rounds. The depth of the squad will be tested. But they are in the semifinals, and in tournament football, that is the only position that matters.
        </p>

      </div>
    </NewsArticle>
  );
}