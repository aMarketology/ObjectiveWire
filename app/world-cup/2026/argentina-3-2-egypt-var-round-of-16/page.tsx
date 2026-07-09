import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-argentina-3-2-egypt-var-round-of-16';
const URL_PATH = '/world-cup/2026/argentina-3-2-egypt-var-round-of-16';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;
const OG_IMAGE = '/thumbnails/world-cup-2026-argentina-3-2-egypt-var-round-of-16.jpg';

export const metadata: Metadata = {
  title: 'Argentina 3-2 Egypt | World Cup 2026 VAR Controversy | Messi 83rd-Minute Equalizer',
  description:
    "Argentina staged one of the most dramatic comebacks in World Cup history, overturning a 2-0 deficit against Egypt in Atlanta after a VAR controversy disallowed Mohamed Ziko's 67th-minute goal. Messi equalised in the 83rd, Enzo Fernandez headed the winner in injury time. Egypt manager Hossam Hassan accused the referee and VAR of corruption in a post-match tirade.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Argentina 3-2 Egypt | VAR Disallowed Goal, Messi 83rd, Fernandez 90+2 | World Cup 2026',
    description: "Egypt lead 2-0. Ziko's 67th-minute goal disallowed by VAR. Argentina turn it around 3-2. Hossam Hassan erupts. Messi's World Cup continues. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-07-05T23:30:00Z',
    modifiedTime: '2026-07-05T23:30:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Argentina', 'Egypt', 'VAR', 'Messi', 'Round of 16', 'Controversy', 'Enzo Fernandez'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Egypt lead 2-0. VAR. Ziko's goal gone. Romero 2-1. Messi 2-2. Fernandez 3-2. The greatest comeback of the tournament.",
    description: "Argentina overturn a 2-0 Egypt lead after VAR disallows a legitimate-looking goal. Messi from 0-2 to the quarterfinals. Hossam Hassan erupts. Report by Jack Brennan.",
  },
};

export default function ArgentinaEgyptR16Page() {
  return (
    <NewsArticle
      title="Argentina 3-2 Egypt: Messi's World Cup Lives On After VAR Controversy and the Greatest 13-Minute Comeback in Tournament History"
      subtitle="Egypt led 2-0 in Atlanta and appeared headed for the most remarkable upset of the 2026 World Cup. Then referee Francois Letexier was called to the monitor. Mostafa Ziko's 67th-minute goal was erased. The psychological gate opened for Argentina. In the final 13 minutes, Cristian Romero, Lionel Messi, and Enzo Fernandez scored three goals. Egypt manager Hossam Hassan called it a scandal. Argentina face Switzerland in the quarterfinals."
      category="World Cup 2026 · Round of 16"
      categoryColor="blue"
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
      thumbnail={{ src: OG_IMAGE, alt: 'Argentina 3-2 Egypt VAR controversy Messi World Cup 2026 Round of 16 Atlanta' }}
      tags={['World Cup 2026', 'Argentina', 'Egypt', 'VAR', 'Messi', 'Round of 16', 'Controversy', 'Enzo Fernandez', 'Hossam Hassan', 'Romero']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Argentina vs Egypt', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'switzerland-0-0-colombia-pens-round-of-16', title: 'Switzerland 0-0 Colombia 4-3 Pens | Round of 16', url: '/world-cup/2026/switzerland-0-0-colombia-pens-round-of-16', publishDate: 'July 5, 2026', category: 'Sports' },
        { slug: 'morocco-3-0-canada-round-of-16', title: 'Morocco 3-0 Canada | Round of 16', url: '/world-cup/2026/morocco-3-0-canada-round-of-16', publishDate: 'July 3, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Argentina defeated Egypt 3-2 in the Round of 16 on July 5, 2026, overcoming a 2-0 deficit in the final 13 minutes plus injury time.',
        "Egypt's Mostafa Ziko scored what appeared to be a 67th-minute 3-0 goal, but VAR overturned the decision after referee Francois Letexier reviewed a minimal physical contact in the buildup sequence.",
        'Cristian Romero headed Argentina to 2-1 in the 79th minute off a Messi cross, Messi equalized with a first-time left-footed strike in the 83rd, and Enzo Fernandez headed the winner in the 90+2nd.',
        'Egypt manager Hossam Hassan delivered a furious post-match tirade, questioning the integrity of the VAR decision and implying the tournament could not afford to eliminate Argentina and Messi at the Round of 16.',
        'Argentina advance to the quarterfinals where they face Switzerland, while Egypt depart as one of the genuine stories of the 2026 World Cup.',
      ]}
      faqItems={[
        {
          question: 'What happened in the Argentina vs Egypt VAR controversy?',
          answer: "Egyptian forward Mostafa Ziko scored what appeared to be Egypt's third goal in the 67th minute, which would have made the score 3-0. Referee Francois Letexier was called to the VAR monitor and disallowed the goal for a minimal physical contact involving an Egyptian player in the buildup sequence approximately 30 seconds before the strike. The decision was immediately and widely criticized by analysts who argued the technology was being used to go digging through history for trivial fouls.",
        },
        {
          question: 'How did Argentina come back from 2-0 against Egypt?',
          answer: "Argentina scored three goals in the final 13 minutes plus injury time. Cristian Romero headed a 79th-minute goal off a Messi cross to make it 2-1. Messi equalized with a thunderous first-time left-footed strike in the 83rd minute. Enzo Fernandez headed the winner in the 90th-minute-plus-2 of stoppage time to complete the 3-2 comeback.",
        },
        {
          question: 'Did Messi score against Egypt at the 2026 World Cup?',
          answer: 'Yes. Lionel Messi scored a thunderous first-time left-footed strike in the 83rd minute to equalize for Argentina at 2-2. His goal was the psychological centre of the comeback. He had also been denied a penalty by the Egyptian goalkeeper earlier in the match.',
        },
        {
          question: 'What did Hossam Hassan say about the VAR decision?',
          answer: "Egypt manager Hossam Hassan delivered a post-match tirade in which he questioned the integrity of the VAR decision, stating that the disallowed goal changed the trajectory of the match entirely. He implied that the tournament administration could not accept the prospect of Argentina and Messi being eliminated at the Round of 16, a charge that FIFA and the match officiating body have not formally responded to.",
        },
        {
          question: 'Who does Argentina face in the World Cup 2026 quarterfinals?',
          answer: 'Argentina face Switzerland in the quarterfinals after Switzerland defeated Colombia 4-3 on penalties following a 0-0 draw.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          There are World Cup matches that become stories about something larger than the
          result. The Argentina versus Egypt Round of 16, played in Atlanta on July 5, 2026,
          is one of them. On the pitch, Argentina came back from 2-0 down in 13 minutes
          and injury time to win 3-2 in one of the most dramatic finishes in the tournament's
          recent history. Off it, a VAR decision that erased an Egyptian goal will be debated
          for years. And in the middle of all of it, as he always is in these moments, was
          <strong> Lionel Messi</strong>.
        </p>

        <p>
          This match is not over being talked about. Not even close.
        </p>

        <h2>Egypt's First Half | Salah Creates, Ibrahim Heads, Egypt Lead</h2>

        <p>
          To understand the magnitude of what happened in the final 13 minutes, you must
          understand the first 67. Egypt played the opening portion of this match with
          a tactical discipline and defensive organization that neutralized the Argentine
          attacking threat more completely than anyone outside of Cairo had anticipated.
          <strong> Mohamed Salah</strong>, operating as the pivot of the Egyptian attack
          despite his age, was still capable of the specific moments of quality that
          win games at this level.
        </p>

        <p>
          In the 15th minute, Salah delivered a cross from the right that found
          <strong> Yasser Ibrahim</strong> arriving at pace in the Argentine penalty area.
          His header was precise. It beat the Argentine goalkeeper cleanly. Egypt 1-0
          Argentina. The scoreboard said something that seemed impossible. The Egyptian
          supporters in the stadium, a vocal minority in a crowd that had largely anticipated
          an Argentine evening, erupted.
        </p>

        <p>
          Argentina pressed for an equalizer with the urgency of a team that knew a
          deficit against an organized Egyptian defensive structure was not a position
          from which they wanted to build a match. Their pressure was genuine. The
          Egyptian defensive organization was also genuine. The half ended 1-0. Egypt
          were ahead. Argentina needed to find a response.
        </p>

        <h2>Messi Denied | The Penalty That Wasn't</h2>

        <p>
          Early in the second half, Argentina were awarded what appeared to be the moment
          that would reset the match's trajectory. A penalty. Messi stepped up. The
          Egyptian goalkeeper went the right way. Messi's shot was stopped. The penalty
          was saved, and it was not a routine save. It was a genuinely excellent
          goalkeeping intervention that denied the most dangerous penalty taker in the
          Argentine squad at precisely the moment when a goal would have changed everything.
        </p>

        <p>
          Argentina were still 1-0 down. Egypt had survived the most dangerous moment
          they were likely to face. And then, in the 67th minute, the match turned on
          something that had nothing to do with either team's footballing quality.
        </p>

        <h2>Ziko's Goal | The VAR Decision That Changed Everything</h2>

        <p>
          <strong>Mostafa Ziko</strong> scored in the 67th minute on a counter-attack
          that was swift, well-executed, and the product of exactly the kind of
          disciplined tactical football that Egypt had been producing throughout.
          The goal stood, initially. The Egyptian players celebrated. The score read
          2-0. Egypt were 23 minutes from one of the greatest upsets in World Cup history.
        </p>

        <p>
          Then referee <strong>Francois Letexier</strong> was called to the VAR monitor.
        </p>

        <p>
          The review process took several minutes. When it concluded, the goal was
          disallowed. The official explanation, as reconstructed from the officiating
          decision and subsequent analysis, was that a minimal physical contact involving
          an Egyptian player in the counter-attack's buildup sequence, approximately
          30 seconds before Ziko's strike, constituted a foul that nullified the goal.
        </p>

        <p>
          The immediate reaction from analysts covering the match was essentially uniform
          in its skepticism. "The technology was never designed to go digging through
          history to find trivial fouls," one widely shared assessment read. The contact
          in question was described by multiple observers as the kind of routine physical
          tangle that occurs in the buildup to goals in every match of football ever
          played. The Egyptian players were furious. The bench was furious. The crowd
          fell silent in the way that large crowds do when they have processed something
          they cannot quite believe.
        </p>

        <p>
          Egypt's 2-0 lead remained 2-0. But the goal was gone, and something else
          had changed too. The psychological dynamic of the match had shifted completely.
          A 2-0 lead with 23 minutes remaining against Argentina, without the pressure
          of a pending 3-0 goal review, is a manageable situation for a well-organized
          defensive side. A 2-0 lead against Argentina with a disallowed goal, a furious
          reaction from the Egyptian bench, and the accumulated awareness that the world
          was watching this specific match through a very particular lens, is a different situation entirely.
        </p>

        <p>
          The psychological gate had opened for Argentina.
        </p>

        <h2>Romero 79' | The Gate Opens</h2>

        <p>
          Argentina came forward with an intensity that was different from their earlier
          pressure. The Egyptian defensive structure, which had held so well throughout
          the match, began to feel the strain of a team that was physically tired,
          emotionally destabilized by the VAR decision, and managing the mounting pressure
          of a crowd that was now firmly behind the Argentine recovery.
        </p>

        <p>
          In the 79th minute, Messi delivered a cross from the left that found
          <strong> Cristian Romero</strong> arriving in the Egyptian penalty area on
          a run that the Egyptian defense had not tracked with sufficient precision.
          Romero's header was accurate and powerful. Egypt's goalkeeper did not have
          a clear sight of it until it was past him. 2-1.
        </p>

        <p>
          Argentina were back in the match. The stadium understood that the next
          goal would be decisive. Either Egypt would survive the next wave and the
          lead would return to a margin that made closing the game possible, or
          Argentina would find the equalizer and the momentum would become
          irresistible. Four minutes later, Messi made the question academic.
        </p>

        <h2>Messi 83' | The Thunderbolt</h2>

        <p>
          <strong>Lionel Messi</strong> received the ball approximately 20 yards from
          the Egyptian goal with his back to the defenders and a sliver of space to work
          with. He created that sliver with a short movement that shifted his body position,
          turned slightly, and then struck a first-time left-footed shot with the kind of
          technique that players at his level possess and that in this specific moment was
          applied to maximum effect.
        </p>

        <p>
          The ball hit the back of the net. 2-2. Argentina had equalized. The comeback
          from 2-0 down was now complete in the most important sense: the deficit was
          eliminated. What remained was 7 minutes of regulation time and however long
          the referee determined appropriate for stoppage time, in which either side
          could find the winner.
        </p>

        <p>
          The five Egyptian players who received bookings in the final 13 minutes of
          regulation and stoppage time were not having their best professional moments.
          Egypt were defending with desperation and not always with clean technique.
          The bookings reflected the anxiety of a team that had led 2-0 and was now
          watching an outcome that seemed impossible becoming more possible with every
          passing minute.
        </p>

        <h2>Fernandez 90+2' | The Winner</h2>

        <p>
          In the second minute of stoppage time, <strong>Enzo Fernandez</strong> arrived
          at the back post to meet a delivery into the Egyptian penalty area with a header
          that was exactly on target. The Egyptian goalkeeper could not reach it. 3-2.
          The comeback was complete. Argentina had been 2-0 down in a Round of 16 against
          Egypt. They were winning 3-2 in the final seconds of the 90 minutes.
        </p>

        <p>
          The scenes in the Argentine bench were of a specific kind of collective release
          that tournament football occasionally produces: the release of a group of people
          who have just lived through something that they knew was possible and yet
          couldn't quite allow themselves to fully believe until the moment it happened.
        </p>

        <h2>Hossam Hassan | The Post-Match Tirade</h2>

        <p>
          Egyptian manager <strong>Hossam Hassan</strong> made the post-match press
          conference something that will be watched and quoted for a long time. His
          statement did not confine itself to disappointment or analysis of the
          football. He went further, questioning the integrity of the VAR decision
          directly and implying that the tournament's administration had a structural
          interest in ensuring Argentina and Messi continued past the Round of 16.
        </p>

        <p>
          "The world knows what happened today," Hassan said, in remarks that were
          reported across international football media within the hour. "A goal that
          was scored was taken away for a reason that does not exist in the laws of
          football. We are not naive. This tournament cannot afford to lose Messi
          in the Round of 16. We paid the price."
        </p>

        <p>
          FIFA and the match officiating body had not formally responded to Hassan's
          characterization at the time of publication. The technical explanation for
          the disallowed goal, as communicated through the standard VAR review process,
          cited the buildup foul. Hassan's characterization, and whether the disallowed
          goal constitutes a legitimate application of the laws or a VAR overreach
          that the technology was not designed for, is a conversation that the footballing
          world is still having.
        </p>

        <h2>Argentina Face Switzerland | The Quarterfinal Ahead</h2>

        <p>
          Argentina advance to the quarterfinals where they face <strong>Switzerland</strong>,
          who defeated Colombia 4-3 on penalties after a 0-0 draw. The Swiss goalkeeper
          was the difference in the shootout. Switzerland are organized, disciplined,
          and will not be intimidated by Argentina's reputation or their comeback against Egypt.
        </p>

        <p>
          Argentina arrive at that match with the confidence of a team that has just
          done something extraordinary. They were 2-0 down in a knockout game. They
          found their way back. Messi scored a goal of the kind that can only be scored
          by players of a very specific level. Fernandez headed the winner in stoppage time.
          The comeback has added something to the Argentina squad's belief that surviving
          previous Argentine tournament exits did not always produce.
        </p>

        <p>
          Egypt leave Atlanta having given one of the great Egyptian World Cup
          performances. Yasser Ibrahim's header in the 15th minute. The defensive
          organization. The goalkeeper's penalty save against Messi. A counter-attack
          that produced a goal that was then taken away. They will be remembered in
          Cairo and throughout African football as a side that went to a Round of 16
          against Argentina and made everything except the result go in their favor.
          Whether the result was fair is a question that the football world is still answering.
        </p>

      </div>
    </NewsArticle>
  );
}
