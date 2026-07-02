import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-germany-1-1-paraguay-pens-round-of-32';
const URL_PATH = '/world-cup/2026/germany-1-1-paraguay-pens-round-of-32';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;
const OG_IMAGE = '/thumbnails/world-cup-2026-germany-1-1-paraguay-pens-round-of-32.jpg';

export const metadata: Metadata = {
  title: 'Germany 1-1 Paraguay (3-4 Pens) | World Cup 2026 Round of 32 Shock',
  description:
    'Paraguay pulled off one of the biggest upsets of the 2026 World Cup, eliminating Germany on penalties after a 1-1 draw in the Round of 32. Germany lost the shootout 3-4 as Paraguay held their nerve to send the former world champions home.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Germany Out | Paraguay Beat Germany 4-3 on Penalties | World Cup 2026',
    description: "Tournament earthquake. Paraguay eliminate Germany on spot-kicks in the Round of 32. Germany's clinical penalty reputation couldn't save them. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-29T22:00:00Z',
    modifiedTime: '2026-06-29T22:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Germany', 'Paraguay', 'Round of 32', 'Upset', 'Penalty Shootout'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GERMANY OUT. Paraguay win 4-3 on penalties. The World Cup has its earthquake.',
    description: 'A 1-1 draw, 120 minutes, and a penalty shootout that will be talked about for years. Paraguay are in the last 16. Report by Jack Brennan.',
  },
};

export default function GermanyParaguayR32Page() {
  return (
    <NewsArticle
      title="Germany 1-1 Paraguay (3-4 Pens): The World Cup Has Its Earthquake as Paraguay Stun the Former Champions"
      subtitle="Paraguay produced one of the greatest upsets in recent World Cup knockout history, eliminating Germany on penalties after a tense 1-1 draw across 120 minutes. Germany's clinical spot-kick reputation deserted them entirely as Paraguay won the shootout 4-3."
      category="World Cup 2026 · Round of 32"
      categoryColor="red"
      topicTag="sports"
      publishDate="June 29, 2026"
      readTime="6 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Germany eliminated by Paraguay on penalties World Cup 2026 Round of 32' }}
      tags={['World Cup 2026', 'Germany', 'Paraguay', 'Round of 32', 'Upset', 'Penalty Shootout']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Germany vs Paraguay', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'netherlands-1-1-morocco-pens-round-of-32', title: 'Netherlands 1-1 Morocco (2-3 Pens) | Round of 32', url: '/world-cup/2026/netherlands-1-1-morocco-pens-round-of-32', publishDate: 'June 29, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Paraguay eliminated Germany from the 2026 World Cup on penalties in the Round of 32 on June 29, winning the shootout 4-3 after a 1-1 draw.',
        'Germany, historically one of the strongest penalty nations in world football, missed the kicks that mattered most.',
        'The result stands as one of the biggest upsets in the 2026 tournament and a landmark moment for Paraguayan football.',
        'Paraguay advance to the Round of 16, becoming the first South American nation outside Brazil and Argentina to reach that stage.',
      ]}
      faqItems={[
        {
          question: 'What was the score in Germany vs Paraguay at the 2026 World Cup?',
          answer: 'Germany and Paraguay drew 1-1 after 120 minutes. Paraguay won the penalty shootout 4-3 to advance to the Round of 16.',
        },
        {
          question: 'Did Germany lose to Paraguay on penalties?',
          answer: 'Yes. Germany, after drawing 1-1 through extra time, lost the penalty shootout 3-4 to Paraguay on June 29, 2026, and were eliminated from the World Cup.',
        },
        {
          question: 'How big an upset is Paraguay beating Germany?',
          answer: "It is one of the largest upsets in the 2026 tournament. Germany were one of the pre-tournament favorites and historically one of the best penalty-shooting nations in World Cup history. Paraguay's victory is a landmark result for South American football.",
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          The tournament's first true earthquake arrived on June 29. <strong>Paraguay</strong> eliminated
          <strong> Germany</strong> from the 2026 FIFA World Cup, winning a tense Round of 32 clash
          4-3 on penalties after the match ended 1-1 across 120 exhausting minutes. It is the result
          that will define the knockout stage narrative of this World Cup, and it happened in the
          most dramatic fashion imaginable.
        </p>

        <p>
          Germany arrived as one of Europe's most feared nations, their penalty record historically
          one of the sport's gold standards. They have built a global reputation for composure,
          precision and winning from the spot. None of that reputation survived June 29, 2026.
          Paraguay held their nerve. Germany did not.
        </p>

        <h2>120 Minutes | A Match Neither Side Could Break</h2>

        <p>
          The contest itself was fiercely competitive across every minute of regulation and extra
          time. Germany applied consistent pressure and their technical quality was evident throughout,
          but Paraguay defended with extraordinary organization and collective sacrifice, absorbing
          wave after wave of German attack and refusing to concede a second goal.
        </p>

        <p>
          The 1-1 scoreline through normal time told the story of a match in perfect balance.
          Germany had the better of possession and territory. Paraguay had the better of the
          moments that mattered. Their goal came against the run of play and sent a signal
          that this would not be the routine German progression the pre-match predictions had
          anticipated.
        </p>

        <p>
          Extra time produced more of the same. Germany pushed. Paraguay organized. The wall
          held. When the referee finally signaled penalties, the entire stadium understood
          that something historic was possible. History duly arrived.
        </p>

        <h2>The Penalty Shootout | Germany's Composure Shatters</h2>

        <p>
          The shootout was the cruellest possible demonstration of tournament football's
          psychological demands. Germany, the nation that has won penalty shootouts when the
          stakes were highest, the nation that beat England from the spot in 1996, that won
          in 2006 on home soil, that has repeatedly held their nerve when others crumbled,
          could not find that composure when Paraguay stood between them and the last 16.
        </p>

        <p>
          Paraguay's goalkeeper was magnificent. Their takers were calm. The contrast was
          stark and final. A 4-3 victory from the spot sent Paraguay through and sent Germany
          home in circumstances that will be debated, analyzed, and mourned in German football
          circles for years to come.
        </p>

        <h2>Paraguay in the Last 16</h2>

        <p>
          For Paraguay, this is a moment of national celebration and genuine football history.
          They have produced one of the most famous results in their country's sporting story
          and they now enter the Round of 16 as a side that has earned the right to be taken
          seriously by anyone remaining in the draw. Their discipline, their belief, and their
          goalkeeper's heroism on the night will carry them forward.
        </p>

        <p>
          Germany fly home. The questions will be loud and they will not wait for the tournament
          to end. How did a German side with this quality and this tradition fail to convert
          when the pressure was at its absolute highest? The answers will take longer to find
          than the flight back to Munich.
        </p>

      </div>
    </NewsArticle>
  );
}
