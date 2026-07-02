import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-usa-2-0-bosnia-10-men-tillman-free-kick-round-of-32';
const URL_PATH = '/world-cup/2026/usa-2-0-bosnia-10-men-tillman-free-kick-round-of-32';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;
const OG_IMAGE = '/thumbnails/world-cup-2026-usa-2-0-bosnia-10-men-tillman-free-kick-round-of-32.jpg';

export const metadata: Metadata = {
  title: 'USA 2-0 Bosnia | World Cup 2026 Round of 32 | Tillman Free Kick, Balogun Red Card',
  description:
    "The USMNT defeated Bosnia 2-0 in the Round of 32 despite playing the final 30 minutes with 10 men after Folarin Balogun's controversial red card. Malik Tillman's curling free-kick in the dying minutes sealed a historic first knockout stage victory since 2002.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "USMNT 2-0 Bosnia | 10 Men, Tillman Free Kick, First Knockout Win Since 2002 | World Cup 2026",
    description: "Balogun sent off. 10 men. Bosnia pressing. Tillman steps up and curls it into the top corner. USA are in the Round of 16. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-07-01T23:00:00Z',
    modifiedTime: '2026-07-01T23:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'USMNT', 'USA', 'Bosnia', 'Round of 32', 'Tillman', 'Balogun', 'Match Report'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "USA 2-0 Bosnia. 10 men. Tillman. Top corner. USA in the Round of 16 for the first time since 2002.",
    description: "Red card chaos. 10-man USMNT. Bosnia pressing. Tillman with a majestic free-kick into the top corner. This is American Grit. Report by Jack Brennan.",
  },
};

export default function USABosniaR32Page() {
  return (
    <NewsArticle
      title="American Grit: 10-Man USMNT Defies Red Card Chaos to Advance After Tillman's Free-Kick Magic"
      subtitle="The U.S. Men's National Team secured a historic 2-0 World Cup Round of 32 victory over Bosnia, their first knockout stage win since 2002, while playing the final 30 minutes with 10 men after Folarin Balogun's controversial straight red card. Malik Tillman's curling free-kick in the dying minutes was the moment that defined a night of extraordinary American defiance."
      category="World Cup 2026 · Round of 32"
      categoryColor="blue"
      topicTag="sports"
      publishDate="July 1, 2026"
      readTime="8 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'USA 2-0 Bosnia Tillman free kick 10 men World Cup 2026 Round of 32' }}
      tags={['World Cup 2026', 'USMNT', 'USA', 'Bosnia', 'Round of 32', 'Tillman', 'Balogun', 'Kansas City']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'USA vs Bosnia', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'usa-4-paraguay-1-group-d', title: 'USA 4-1 Paraguay | Group D Report', url: '/world-cup/2026/usa-4-paraguay-1-group-d', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'usa-2-australia-0-group-a', title: 'USA 2-0 Australia | Group A Report', url: '/world-cup/2026/usa-2-australia-0-group-a', publishDate: 'June 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 | USMNT Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'The USMNT defeated Bosnia 2-0 in the Round of 32 on July 1, 2026, advancing to the last 16 for the first time since 2002.',
        'Folarin Balogun received a controversial straight red card for violent conduct in the 64th minute, leaving the USA to play the final 30 minutes with 10 men.',
        "Malik Tillman scored a majestic curling free-kick in the dying minutes that settled into the top corner for a definitive 2-0 lead.",
        'The victory is the USMNT\'s first World Cup knockout stage win in 24 years and represents a landmark moment in the development of American football.',
      ]}
      faqItems={[
        {
          question: 'What was the score in USA vs Bosnia at the 2026 World Cup?',
          answer: 'The USA defeated Bosnia 2-0 in the Round of 32 on July 1, 2026, with the match played at Kansas City.',
        },
        {
          question: 'Who scored for the USA against Bosnia?',
          answer: "Malik Tillman scored a decisive curling free-kick in the dying minutes of the match, sealing the 2-0 victory.",
        },
        {
          question: 'Why was Balogun given a red card?',
          answer: 'Folarin Balogun was shown a straight red card in the 64th minute for what the referee judged to be violent conduct during an aerial duel. The decision was highly controversial and disputed by American officials.',
        },
        {
          question: "When was the USMNT's last World Cup knockout win before 2026?",
          answer: "The USMNT's last World Cup knockout stage victory before defeating Bosnia was against Mexico in the Round of 16 at the 2002 World Cup in Japan and South Korea.",
        },
        {
          question: "What is Malik Tillman's free kick against Bosnia?",
          answer: "Malik Tillman struck a curling free kick from just outside the Bosnian penalty area that bypassed the wall and settled into the top corner of the net, effectively sealing the USMNT's 2-0 Round of 32 victory.",
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          <strong>KANSAS CITY</strong> — It will be remembered as the night the U.S. Men's National
          Team grew up on the world stage. Facing Bosnia and Herzegovina in a highly anticipated,
          high-stakes Round of 32 clash, the USMNT secured a historic <strong>2-0 victory</strong>,
          their first knockout stage win at a World Cup since 2002. But the final scoreline hides
          the absolute chaos, controversy, and tactical heroism required to survive a match that
          threatened to tear the roof off the stadium.
        </p>

        <p>
          The Americans looked fully in control early, dictating the tempo and pressing the Bosnian
          backline into submission. Kansas City was a cauldron of noise, the host nation's home
          crowd functioning as an additional tactical force. Then everything nearly unraveled in a
          single decision that turned the night from a controlled performance into a test of
          character that American football had not faced at this scale in more than two decades.
        </p>

        <h2>The Red Card | 64th Minute, Maximum Controversy</h2>

        <p>
          In the 64th minute, following a heated aerial duel, star forward{' '}
          <strong>Folarin Balogun</strong> was shown a straight red card for what the referee
          deemed violent conduct. The decision sent shockwaves through the American bench.
          The stadium fell into a stunned disbelief that quickly shifted to furious protest.
          American players surrounded the referee. The coaching staff were visibly enraged.
          The Bosnian players said nothing. They understood what it meant.
        </p>

        <p>
          With a man advantage and 30 minutes remaining, Bosnia would now bring everything they
          had. A team that had been controlled and slightly outplayed suddenly had the most
          powerful psychological tool in football: the opposition reduced to 10 men with the
          match still very much alive. The atmosphere in Kansas City changed in an instant.
        </p>

        <h2>10 Men, Organized, Defiant</h2>

        <p>
          What the USMNT did in the minutes following the red card defined the match and will
          define how this team is remembered. The options at that moment are collapse, which
          is common, or reorganize and fight, which is rare. The United States chose the latter
          with a conviction that was visible from the stands.
        </p>

        <p>
          Coach{' '}
          <Link href="/world-cup" className="text-blue-600 hover:text-blue-800 underline">
            the United States coaching staff
          </Link>{' '}
          reorganized immediately into a compact, disciplined defensive block that sacrificed
          attacking ambition entirely in service of structural protection. The four remaining
          outfield midfielders and forwards dropped into defined defensive positions.
          The back line held its shape. The goalkeeper commanded his area with authority.
        </p>

        <p>
          Bosnia came. They pressed with the urgency their numerical advantage demanded.
          They launched aerial balls into the American penalty area. They forced the
          United States into the kind of sustained defensive pressure that can break
          a team's organization and concentration if that organization is fragile.
          The USMNT's organization was not fragile. It held. Every minute that passed
          without a Bosnian goal made the American position stronger.
        </p>

        <h2>Tillman | The Free Kick That Will Live Forever</h2>

        <p>
          Then came the moment of pure theater.
        </p>

        <p>
          In the dying embers of the match, the United States won a crucial foul just
          outside the Bosnian penalty box. The referee pointed to the spot for a free kick.
          The stadium, which had spent 30 minutes in a combination of terror and defiance,
          held its collective breath. Up stepped <strong>Malik Tillman</strong>.
        </p>

        <p>
          What happened next was not the product of instinct or luck. It was the product
          of thousands of hours of practice, of a specific kind of technical preparation
          that only the very best free-kick takers in the world possess. Tillman's run-up
          was measured. His contact was precise. The ball curled with a trajectory that
          the wall could not reach and the goalkeeper could not adjust to in time, bending
          around the defensive barrier and settling into the top right corner of the net
          with the kind of perfection that makes the crowd pause for a split second before
          the explosion of noise arrives.
        </p>

        <p>
          It was not just a goal. It was a statement. With 10 men, under the most intense
          pressure a young American team had faced in 24 years, the midfielder stepped
          forward and produced the exact quality the moment demanded. The stadium erupted.
          Players on the field collapsed with relief. The bench celebrated with an abandon
          that captured exactly what this win meant.
        </p>

        <h2>What This Victory Means for American Football</h2>

        <p>
          The numbers tell part of the story. The USMNT's last World Cup knockout stage
          win came in 2002, when a different generation of American players defeated Mexico
          in the Round of 16 in Japan. That was 24 years ago. An entire generation of
          American footballers has grown up without witnessing their national team advance
          at a World Cup knockout stage. That changes now.
        </p>

        <p>
          But the significance goes beyond a statistic. The way the USMNT won matters as
          much as that they won. They did not advance through fortunate circumstances or
          a below-par opponent. They controlled a high-stakes knockout match, survived a
          10-man crisis that would have broken lesser sides, and then produced a moment of
          individual class, Tillman's free kick, that confirmed their right to be mentioned
          alongside the serious teams remaining in this tournament.
        </p>

        <p>
          The controversy surrounding the Balogun red card will continue in the days
          ahead. The debate about whether the referee was correct is legitimate and will
          not be settled quickly. What is not debatable is the USMNT's response to an
          impossible situation: disciplined, organized, psychologically strong, and
          ultimately decisive when the moment arrived.
        </p>

        <h2>Round of 16 Awaits</h2>

        <p>
          The United States are in the Round of 16 at a World Cup hosted on their own soil,
          backed by their own supporters, and playing with a quality and mental fortitude
          that the broader football world is beginning to genuinely respect. The Round of 16
          will bring a stronger opponent. It will also bring the same American team that
          has now demonstrated, in the most dramatic circumstances possible, that they
          possess exactly what it takes to compete at this level.
        </p>

        <p>
          For the full story of how this USMNT arrived at this moment, see our{' '}
          <Link href="/world-cup" className="text-blue-600 hover:text-blue-800 underline">
            2026 FIFA World Cup coverage hub
          </Link>.
          The American journey continues.
        </p>

      </div>
    </NewsArticle>
  );
}
