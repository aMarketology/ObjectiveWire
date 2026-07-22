import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-spain-1-0-argentina-final-aet';
const URL_PATH = '/world-cup/2026/spain-1-0-argentina-final-aet';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;
const OG_IMAGE = '/thumbnails/world-cup-2026-spain-1-0-argentina-final-aet.jpg';

export const metadata: Metadata = {
  title: 'Spain 1-0 Argentina AET | World Cup 2026 Final | Ferran Torres Wins It in Extra Time',
  description:
    "Spain defeated Argentina 1-0 after extra time to win the 2026 World Cup, their second title in modern history. Ferran Torres scored the winner in the 106th minute after a controversial VAR-disallowed goal, while Emiliano Martinez made a final-record 12 saves to keep Argentina alive.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Spain 1-0 Argentina AET | Ferran Torres Wins the World Cup | 2026 Final',
    description: "Spain outshot Argentina 20-3, survived a disallowed VAR goal, and won it through Ferran Torres in the 106th minute at MetLife Stadium. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-07-19T22:00:00Z',
    modifiedTime: '2026-07-19T22:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Spain', 'Argentina', 'Final', 'Ferran Torres', 'Match Report'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Spain 1-0 Argentina AET | Ferran Torres Wins the 2026 World Cup Final",
    description: "A disallowed VAR goal, 12 Dibu Martinez saves, and a 106th-minute winner. Spain are World Cup champions. Report by Jack Brennan.",
  },
};

export default function SpainArgentinaFinalPage() {
  return (
    <NewsArticle
      title="Spain 1-0 Argentina AET: Ferran Torres Delivers World Cup Glory After VAR Controversy and a Dibu Martinez Masterclass"
      subtitle="Spain won the 2026 World Cup, defeating Argentina 1-0 after extra time at MetLife Stadium in a final defined by total Spanish dominance, a disallowed goal that will be debated for years, and a goalkeeping performance from Emiliano Martinez that pushed the match into extra time before Ferran Torres finally settled it."
      category="World Cup 2026 · Final"
      categoryColor="red"
      topicTag="sports"
      publishDate="July 19, 2026"
      readTime="8 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Spain 1-0 Argentina AET: Ferran Torres Delivers World Cup Glory After VAR Controversy and a Dibu Martinez Masterclass' }}
      tags={['World Cup 2026', 'Spain', 'Argentina', 'Final', 'Ferran Torres', 'Dibu Martinez', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Final', item: '/world-cup' },
        { name: 'Spain vs Argentina', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'england-6-4-france-third-place', title: 'England 6-4 France | 10-Goal Bronze Thriller', url: '/world-cup/2026/england-6-4-france-third-place', publishDate: 'July 18, 2026', category: 'Sports' },
        { slug: 'argentina-2-0-switzerland-quarterfinal', title: 'Argentina 2-0 Switzerland | Messi Masterclass', url: '/world-cup/2026/argentina-2-0-switzerland-quarterfinal', publishDate: 'July 11, 2026', category: 'Sports' },
        { slug: 'spain-2-1-belgium-quarterfinal', title: 'Spain 2-1 Belgium | Quarterfinal', url: '/world-cup/2026/spain-2-1-belgium-quarterfinal', publishDate: 'July 11, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Spain defeated Argentina 1-0 after extra time (AET) to win the 2026 World Cup final at MetLife Stadium on July 19, 2026, their second World Cup title.',
        'Substitute Ferran Torres scored the winning goal in the 106th minute, redirecting a low cross from Nico Williams past goalkeeper Emiliano Martinez.',
        'A Nico Williams goal in the 92nd minute was disallowed by VAR after referee Slavko Vincic ruled Mikel Merino had fouled Nicolas Otamendi in the buildup.',
        'Argentina goalkeeper Emiliano Martinez made a World Cup final record 12 saves, and Enzo Fernandez was sent off in the 90th minute for a second yellow card.',
      ]}
      faqItems={[
        {
          question: 'What was the final score of the 2026 World Cup final?',
          answer: 'Spain defeated Argentina 1-0 after extra time (AET) in the 2026 World Cup final, played at MetLife Stadium in New Jersey on July 19, 2026.',
        },
        {
          question: 'Who scored the winning goal in the Spain vs Argentina World Cup final?',
          answer: 'Ferran Torres scored the winning goal in the 106th minute of extra time, redirecting a low cross from Nico Williams past Argentina goalkeeper Emiliano Martinez.',
        },
        {
          question: 'Why was Spain\'s goal in extra time disallowed?',
          answer: 'In the second minute of extra time, Nico Williams scored what appeared to be the winning goal, but referee Slavko Vincic disallowed it after a VAR review determined Mikel Merino had committed a foul on Nicolas Otamendi during the buildup to the goal.',
        },
        {
          question: 'How many saves did Emiliano Martinez make in the World Cup final?',
          answer: 'Argentina goalkeeper Emiliano "Dibu" Martinez made 12 saves, a World Cup final record, single-handedly keeping Argentina level through 90 minutes despite Spain outshooting Argentina 20-3 overall.',
        },
        {
          question: 'Did any players get sent off in the World Cup final?',
          answer: 'Yes. Argentina midfielder Enzo Fernandez was shown a second yellow card in the 90th minute for a reckless tackle on Spain defender Pau Cubarsi, reducing Argentina to 10 men heading into extra time.',
        },
        {
          question: 'Is this Spain\'s second World Cup title?',
          answer: 'Yes. Spain won their second World Cup title with this victory, completing the tournament with seven clean sheets in eight matches.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Spain won the World Cup on a night that needed 106 minutes, a disallowed goal, a red card, and a goalkeeping miracle to produce a winner. <strong>Spain 1-0 Argentina, after extra time.</strong> At MetLife Stadium, in front of a global audience, La Roja captured their second World Cup title in modern history, but not before enduring the most dramatic final in recent memory.
        </p>

        <p>
          The scoreline undersells the story. Spain dominated the match from the opening whistle. Argentina survived on the brink for two hours. And when the winning goal finally arrived, it came only after a VAR decision that will be argued over for years.
        </p>

        <h2>Total Spanish Control | 20 Shots to 3</h2>

        <p>
          From kickoff, Spain suffocated the defending champions. Luis de la Fuente's side controlled possession, dictated tempo, and created chance after chance, finishing the match with <strong>20 shots to Argentina's 3</strong>. Inside the initial 90 minutes of regulation, Argentina managed <strong>zero shots</strong>, a staggering number for a team that had reached the World Cup final.
        </p>

        <p>
          To survive the volume of Spanish attacks, Argentina abandoned any pretense of an attacking gameplan and committed fully to defense. The match devolved into a stop-start war of attrition, littered with heavy challenges and tactical fouls across the pitch. Argentina finished with <strong>seven yellow cards</strong>, a number that reflected both the desperation of their defensive effort and the physical toll of trying to contain a Spanish side playing at its absolute peak.
        </p>

        <h2>Enzo Fernandez Sees Red | Argentina Down to Ten</h2>

        <p>
          The accumulated fouls caught up with Argentina in the 90th minute. Enzo Fernandez, already on a yellow card, went in recklessly on a challenge that sent Spain defender <strong>Pau Cubarsi cartwheeling into the air</strong>. Referee Slavko Vincic had no choice but to show a second yellow, sending Fernandez off and reducing Argentina to 10 men heading into extra time.
        </p>

        <p>
          It was a brutal moment for a team that had, until then, somehow kept the match level through sheer defensive resolve and one extraordinary performance between the posts.
        </p>

        <h2>Dibu Martinez | A Final-Record 12 Saves</h2>

        <p>
          If Argentina had a hero before extra time, it was goalkeeper <strong>Emiliano "Dibu" Martinez</strong>. Facing a Spanish attack that generated shot after shot, Martinez produced save after save, ultimately finishing the match with <strong>12 saves</strong>, a World Cup final record. Diving stops, reaction saves, one-on-ones, Martinez repelled everything Spain threw at him for 90 minutes, single-handedly dragging his team into extra time against a team that statistically should have won comfortably.
        </p>

        <p>
          It was the kind of performance that goalkeeping legends are built on, and for 90 minutes, it looked like it might be enough to steal Argentina a second consecutive World Cup.
        </p>

        <h2>The Disallowed Goal | VAR Chaos in Extra Time</h2>

        <p>
          The match's biggest flashpoint arrived early in extra time. <strong>Lamine Yamal</strong> slid a through ball into the box for <strong>Mikel Merino</strong>, who stepped past a lunging Nicolas Otamendi before the loose ball fell to <strong>Nico Williams</strong>, who slid it home into an empty net.
        </p>

        <p>
          Spanish players celebrated wildly, believing they had just won the World Cup. Then VAR intervened. Referee Vincic reviewed the buildup and ruled that Merino had inadvertently caught Otamendi's foot in the process of receiving the ball, an attacking foul that wiped the goal off the board entirely.
        </p>

        <p>
          The decision sparked immediate outrage. Social media exploded with debate over whether the contact was significant enough to overturn what would have been the World Cup-winning goal. Pundits were split, with many arguing the threshold for such contact should not be enough to nullify a goal of that magnitude in a World Cup final.
        </p>

        <h2>Ferran Torres Seals Immortality</h2>

        <p>
          Spain could have let the controversy derail them. Instead, they responded with the composure of a team that knew it deserved to win. In the <strong>106th minute</strong>, Nico Williams, still involved in every dangerous Spanish move, whipped a low delivery into the penalty box. Substitute <strong>Ferran Torres</strong> got across his marker and redirected a first-time strike past Martinez, finally breaking the deadlock for real this time.
        </p>

        <p>
          There was no VAR review needed. No offside flag. No foul in the buildup. Just a clean, clinical finish that gave Spain the lead they had deserved for two hours of football.
        </p>

        <h2>Argentina's Final Push | So Close, Again</h2>

        <p>
          Down a man and down a goal, Argentina threw everything forward in the closing minutes. The best chance came in stoppage time, when <strong>Giuliano Simeone</strong> fired over the bar from a Lionel Messi corner, a moment that will haunt Argentine fans as the last realistic chance to force penalties.
        </p>

        <p>
          It was not enough. Spain held firm, seeing out the remaining minutes to complete their World Cup triumph.
        </p>

        <h2>Seven Clean Sheets | A Historic Tournament for Spain</h2>

        <p>
          Spain's victory capped a remarkable defensive tournament, finishing with <strong>seven clean sheets in eight matches</strong>, a number that reflects both the quality of their defensive structure and the relentlessness of their attacking play, which so often meant opponents were pinned so deep they rarely threatened Spain's goal at all.
        </p>

        <p>
          For Argentina, the run ends in heartbreak, denied a repeat title by the finest of margins, a disallowed goal, a red card, and a moment of Ferran Torres brilliance. Dibu Martinez's 12-save masterclass will be remembered as one of the great individual performances in a losing World Cup final effort, even if it was not quite enough to bring a second consecutive trophy back to Buenos Aires.
        </p>

        <p>
          Spain are <strong>2026 World Cup champions</strong>. The debate over Vincic's VAR decision will rage on for years. But the trophy, and the second star, belong to La Roja.
        </p>

      </div>
    </NewsArticle>
  );
}
