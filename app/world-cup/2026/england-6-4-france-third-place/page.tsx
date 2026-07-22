import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-england-6-4-france-third-place';
const URL_PATH = '/world-cup/2026/england-6-4-france-third-place';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;
const OG_IMAGE = '/thumbnails/world-cup-2026-england-6-4-france-third-place.jpg';

export const metadata: Metadata = {
  title: 'England 6-4 France | World Cup 2026 Third Place | Mbappe Passes Messi, Bellingham Wins It',
  description:
    "England defeated France 6-4 in a 10-goal third-place thriller at the 2026 World Cup. Bukayo Saka scored a hat-trick, Kylian Mbappe surpassed Lionel Messi as the all-time World Cup leading scorer, and Jude Bellingham sealed bronze deep into stoppage time.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'England 6-4 France | 10-Goal Bronze Thriller | Mbappe Becomes All-Time Top Scorer',
    description: "Saka's hat-trick, Mbappe's record-breaking brace, and a Bellingham stoppage-time winner. The wildest third-place match in World Cup history. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-07-18T22:00:00Z',
    modifiedTime: '2026-07-18T22:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'England', 'France', 'Third Place', 'Mbappe', 'Saka', 'Bellingham', 'Match Report'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "England 6-4 France | Mbappe Passes Messi as All-Time World Cup Scorer",
    description: "A 4-0 lead, a Mbappe-fueled comeback, a Saka hat-trick, and a Bellingham stoppage-time winner. 10 goals, one bronze medal. Report by Jack Brennan.",
  },
};

export default function EnglandFranceThirdPlacePage() {
  return (
    <NewsArticle
      title="England 6-4 France: Saka's Hat-Trick and a Bellingham Stoppage-Time Winner Cap the Wildest Third-Place Match in World Cup History"
      subtitle="England defeated France 6-4 in a 10-goal thriller at Miami Stadium to claim the World Cup 2026 bronze medal. Bukayo Saka scored a hat-trick, Kylian Mbappe surpassed Lionel Messi as football's all-time leading World Cup scorer, and Jude Bellingham sealed the win deep into stoppage time."
      category="World Cup 2026 · Third Place"
      categoryColor="red"
      topicTag="sports"
      publishDate="July 18, 2026"
      readTime="7 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'England 6-4 France: Sakas Hat-Trick and a Bellingham Stoppage-Time Winner Cap the Wildest Third-Place Match in World Cup History' }}
      tags={['World Cup 2026', 'England', 'France', 'Third Place', 'Mbappe', 'Saka', 'Bellingham', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Third Place Match', item: '/world-cup' },
        { name: 'England vs France', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'spain-1-0-argentina-final-aet', title: 'Spain 1-0 Argentina AET | World Cup Final', url: '/world-cup/2026/spain-1-0-argentina-final-aet', publishDate: 'July 19, 2026', category: 'Sports' },
        { slug: 'england-2-1-norway-bellingham-extra-time-quarterfinal', title: 'England 2-1 Norway AET | Bellingham Hero', url: '/world-cup/2026/england-2-1-norway-bellingham-extra-time-quarterfinal', publishDate: 'July 11, 2026', category: 'Sports' },
        { slug: 'france-2-0-morocco-quarterfinal', title: 'France 2-0 Morocco | Quarterfinal', url: '/world-cup/2026/france-2-0-morocco-quarterfinal', publishDate: 'July 11, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'England defeated France 6-4 in the 2026 World Cup third-place match at Miami Stadium on July 18, 2026, in the highest-scoring third-place match in tournament history.',
        'Bukayo Saka scored a hat-trick, including an 87th-minute penalty, as England built a 4-0 halftime lead and held on through a dramatic French comeback.',
        'Kylian Mbappe scored twice in the second half, reaching 22 career World Cup goals and surpassing Lionel Messi (21) as the all-time leading World Cup goalscorer.',
        'Jude Bellingham scored the decisive sixth goal deep into stoppage time (90+8\') with a solo run through the French defense to secure the bronze medal.',
      ]}
      faqItems={[
        {
          question: 'What was the score in the England vs France World Cup third-place match?',
          answer: 'England defeated France 6-4 in the 2026 World Cup third-place match, played at Miami Stadium on July 18, 2026. It was the highest-scoring third-place match in World Cup history.',
        },
        {
          question: 'Who scored a hat-trick for England against France?',
          answer: 'Bukayo Saka scored a hat-trick for England, including two goals in the first half and a penalty in the 87th minute that briefly restored England\'s lead to 5-3.',
        },
        {
          question: 'Did Kylian Mbappe break the World Cup all-time scoring record?',
          answer: 'Yes. Kylian Mbappe scored twice against England (48th and 66th minute), taking his tournament tally to 10 goals and his career World Cup total to 22, surpassing Lionel Messi\'s 21 to become the all-time leading World Cup goalscorer.',
        },
        {
          question: 'Who scored the winning goal for England?',
          answer: 'Jude Bellingham scored the decisive sixth goal for England in the eighth minute of stoppage time (90+8\'), completing a solo run through the French defense to seal the 6-4 victory and the bronze medal.',
        },
        {
          question: 'How did England build their early lead?',
          answer: 'England scored four goals in the first half: Declan Rice opened the scoring in the 3rd minute, followed by an Ezri Konsa finish and two goals from Bukayo Saka, giving England a commanding 4-0 halftime lead over a France side still reeling from their semifinal exit.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Before the World Cup final even kicked off, Miami Stadium hosted the most absurd, thrilling third-place match in the tournament's history. <strong>England 6-4 France.</strong> Ten goals, a hat-trick, a record broken, and a stoppage-time winner. The bronze medal match was never supposed to be this good.
        </p>

        <h2>Saka's Double and a 4-0 Halftime Lead</h2>

        <p>
          England stormed out of the gates against a shell-shocked French squad that looked completely demoralized following their semifinal exit. <strong>Declan Rice</strong> opened the scoring in the 3rd minute, an early blow that set the tone for a France side with little left in the tank emotionally.
        </p>

        <p>
          England did not let up. <strong>Ezri Konsa</strong> added a second, and <strong>Bukayo Saka</strong> scored twice to complete a devastating opening 45 minutes. By halftime, England led <strong>4-0</strong>, and the third-place match looked destined to be a formality.
        </p>

        <h2>Mbappe's One-Man Rescue Mission</h2>

        <p>
          It was anything but. In coach <strong>Didier Deschamps' final match</strong> in charge of France, <strong>Kylian Mbappe</strong> refused to let the tournament end on a whimper. Mbappe mounted a one-man comeback in the second half, scoring in the 48th and 66th minutes to cut England's lead to 4-3 and drag France back into a match that had appeared over at the break.
        </p>

        <p>
          Mbappe's second goal carried enormous historical weight. It was his <strong>10th goal of the tournament</strong> and his <strong>22nd career World Cup goal</strong>, officially surpassing <strong>Lionel Messi's 21</strong> to make Mbappe the <strong>all-time leading goalscorer in FIFA World Cup history</strong>. The achievement, sealed in a third-place match rather than a final, will nonetheless stand as one of the defining individual records of the tournament.
        </p>

        <h2>Saka's Hat-Trick | Penalty Restores the Lead</h2>

        <p>
          With the match now a genuine contest, England needed an answer. Saka provided it, completing his hat-trick with an <strong>87th-minute penalty</strong> to push England back in front, 5-3, in what looked like it might be the decisive blow in an increasingly chaotic match.
        </p>

        <p>
          France, however, were not finished. <strong>Ousmane Dembele</strong> answered almost immediately, pulling France back to <strong>5-4</strong> and setting up a frantic final stretch that neither side's defense seemed interested in participating in.
        </p>

        <h2>End-to-End Madness | Bellingham's Stoppage-Time Winner</h2>

        <p>
          With any semblance of defensive structure thrown out the window, the final minutes played out like an exhibition match rather than a World Cup fixture. Both sides pushed numbers forward, chasing a result that had swung from formality to fistfight over 90 minutes.
        </p>

        <p>
          Deep into stoppage time, in the <strong>eighth minute of added time (90+8')</strong>, <strong>Jude Bellingham</strong> put an exclamation point on the 10-goal thriller. Weaving through the French defense on a solo run reminiscent of his extra-time heroics against Norway in the quarterfinals, Bellingham slotted home the decisive sixth goal, sealing a wild <strong>6-4 victory</strong> and the bronze medal for England.
        </p>

        <h2>A Fitting Farewell and a Historic Record</h2>

        <p>
          For France, the match marked the end of an era. <strong>Didier Deschamps' final match</strong> in charge ended in defeat, but not before Mbappe delivered a moment that will define the tournament's individual storylines for years to come. Surpassing Messi's all-time World Cup scoring record, even in a third-place match, cements Mbappe's place among the greatest players to ever play in the tournament.
        </p>

        <p>
          For England, the bronze medal is a consolation prize after their agonizing semifinal defeat to Argentina, but the manner of the victory, a 4-0 lead surrendered and reclaimed amid an all-time individual scoring record and a stoppage-time Bellingham winner, gives the Three Lions a spectacular send-off from a tournament that came agonizingly close to delivering England's first World Cup since 1966.
        </p>

        <p>
          Ten goals. A broken record. A stoppage-time winner. The third-place match is rarely remembered. This one will be an exception.
        </p>

      </div>
    </NewsArticle>
  );
}
