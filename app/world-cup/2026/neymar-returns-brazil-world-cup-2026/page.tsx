import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-neymar-returns-brazil-981-days';
const URL_PATH = '/world-cup/2026/neymar-returns-brazil-world-cup-2026';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;

const OG_IMAGE = '/thumbnails/world-cup-2026-neymar-returns-brazil.jpg';

export const metadata: Metadata = {
  title: 'Neymar Returns | Brazil Star Breaks Down in Tears After 981-Day World Cup Comeback',
  description:
    'Neymar Jr. made his emotional return to the World Cup stage after 981 days, coming off the bench in Brazil 3-0 win over Scotland. The 34-year-old broke down in tears in the locker room afterward.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Neymar Returns | Brazil Star Breaks Down in Tears After 981-Day World Cup Comeback',
    description: 'After nearly three years away from the international stage, Neymar Jr. stepped back onto the pitch for Brazil during their 3-0 win over Scotland. The 34-year-old broke down in tears in the locker room.',
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-24T23:45:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Neymar', 'Brazil', 'Comeback', 'Injury Return', 'Selecao'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neymar Returns After 981 Days | Brazil Star Breaks Down in Tears',
    description: 'Neymar made his emotional World Cup return after 981 days. He broke down in tears in the locker room. The Selecao now have their ultimate wildcard back.',
  },
};

export default function NeymarReturnsPage() {
  return (
    <NewsArticle
      title="The Return | Neymar Breaks Down in Tears Following Emotional World Cup Comeback After 981 Days"
      subtitle="The 2026 FIFA World Cup has its most emotional milestone yet. After nearly three years away from the international stage, Neymar Jr. officially stepped back onto the pitch for the Selecao during Brazil 3-0 group-stage victory over Scotland, and the weight of the moment was visible the second the final whistle blew"
      category="World Cup 2026 · Brazil Feature"
      categoryColor="green"
      topicTag="sports"
      publishDate="June 24, 2026"
      readTime="6 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Neymar Returns After 981 Days | Brazil Star Breaks Down in Tears' }}
      tags={['World Cup 2026', 'Neymar', 'Brazil', 'Comeback', 'Injury Return', 'Selecao']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Features', item: '/world-cup/2026' },
        { name: 'Neymar Returns', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'brazil-3-0-scotland', title: 'Brazil 3-0 Scotland | Group C Report', url: '/world-cup/2026/brazil-3-0-scotland-group-c', publishDate: 'June 24, 2026', category: 'Sports' },
        { slug: 'brazil-1-morocco-1', title: 'Brazil 1-1 Morocco | Group C Report', url: '/world-cup/2026/brazil-1-morocco-1-group-c', publishDate: 'June 13, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Neymar Jr. made his emotional return to the World Cup stage after 981 days away from international football due to a grueling cycle of injuries.',
        'The 34-year-old came off the bench in the 75th minute of Brazil 3-0 win over Scotland in Miami to a deafening ovation.',
        'Neymar broke down in tears in the locker room after the match, describing the moment as one of pure gratitude.',
        'He became only the fourth Brazilian player to feature in four separate FIFA World Cups, joining Pele, Djalma Santos, and Cafu.',
        'Neymar looked sharp in his 15-minute cameo, recording 14 passes and registering a shot on target.',
      ]}
      faqItems={[
        {
          question: 'When did Neymar last play for Brazil before the 2026 World Cup?',
          answer: 'Neymar last played for Brazil at the 2022 World Cup quarterfinal against Croatia. His return against Scotland on June 24, 2026, ended a 981-day absence from the international stage.',
        },
        {
          question: 'Why was Neymar out of football for so long?',
          answer: 'Neymar suffered a series of injuries that kept him out of international football, including a calf injury that prevented him from playing in Brazil opening matches against Morocco and Haiti at the 2026 World Cup.',
        },
        {
          question: 'How did Neymar perform in his return against Scotland?',
          answer: 'Neymar played 15 minutes off the bench, recording 14 passes and registering a shot on target. He looked sharp and moved well despite the lingering calf concern.',
        },
        {
          question: 'What records did Neymar set with his World Cup 2026 appearance?',
          answer: 'Neymar became only the fourth Brazilian player to feature in four separate FIFA World Cups, joining Pele, Djalma Santos, and Cafu in an elite pantheon of Selecao legends.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          The 2026 FIFA World Cup has its most emotional milestone yet. After nearly three
          years away from the international stage, Neymar Jr. officially stepped back onto
          the pitch for the Selecao during Brazil's 3-0 group-stage victory over Scotland
          in Miami. The 34-year-old superstar, whose career has been plagued by a grueling
          cycle of injuries, came off the bench in the 75th minute to a deafening ovation
          that shook Hard Rock Stadium.
        </p>

        <p>
          The weight of the moment was visible the second the final whistle blew. Neymar
          bypassed the media mixers, heading straight into the locker room where he
          reportedly broke down in tears. "I went into the locker room by myself and
          couldn't hold back the tears," an emotional Neymar admitted after the match.
          "It's a moment of pure gratitude. I thank God for giving me the opportunity to
          experience this again."
        </p>

        <h2 id="the-journey">981 Days | The Long Road Back</h2>

        <p>
          Neymar's absence from the World Cup stage spanned three calendar years and two
          major injury cycles. After Brazil's quarterfinal exit to Croatia at the 2022
          World Cup in Qatar, Neymar underwent a series of treatments and rehabilitation
          programs aimed at extending a career that had already produced over 70 goals for
          his country. Each setback, each missed tournament, each rehabilitation cycle
          raised the question of whether the world would ever see Neymar in a Brazil shirt
          at a World Cup again.
        </p>

        <p>
          The calf injury that kept him out of Brazil's opening matches against Morocco
          and Haiti was the latest in a sequence of physical setbacks that would have ended
          many careers. Neymar's determination to return for what is almost certainly his
          final World Cup drove him through the rehabilitation process with a focus that
          those close to him describe as unlike anything they had seen before.
        </p>

        <h2 id="the-cameo">The Cameo | 15 Minutes That Changed Everything</h2>

        <p>
          Neymar entered the match in the 75th minute with Brazil already leading 3-0. The
          scoreline meant the pressure of the result was off, allowing him to play with the
          freedom that has always defined his best performances. In 15 minutes of action,
          he recorded 14 passes, registered a shot on target, and demonstrated the vision
          and technical quality that made him one of the most celebrated players of his
          generation.
        </p>

        <p>
          The moment that will be replayed for years came in the 82nd minute, when Neymar
          received the ball on the left flank, drew two defenders toward him, and played a
          perfectly weighted pass that released a teammate into space. It was a small moment
          in the context of a 3-0 victory, but it was a reminder of the unique creative
          ability that Brazil has been missing since 2022.
        </p>

        <h2 id="history-made">History Made | Fourth Brazilian to Play in Four World Cups</h2>

        <p>
          With this appearance, Neymar has written his name further into the history books.
          He is now only the fourth Brazilian player to ever feature in four separate FIFA
          World Cups, joining an elite pantheon alongside Pele, Djalma Santos, and Cafu.
          The achievement places him among the most enduring figures in Brazilian football
          history, a status that his individual brilliance has long warranted but that
          injuries had threatened to deny him.
        </p>

        <p>
          For manager Carlo Ancelotti, Neymar's return could not be better timed. With
          Brazil officially topping Group C and smoothly advancing to the Round of 32,
          having the ultimate wildcard back in the squad elevates Brazil from mere contenders
          to terrifying favorites as the knockout brackets lock into place. Ancelotti now
          has the luxury of integrating Neymar gradually, building his match fitness through
          the early knockout rounds while relying on the form of Vinicius Junior, who has
          been Brazil's standout performer in the group stage.
        </p>

        <h2 id="what-it-means">What Neymar's Return Means for Brazil's World Cup</h2>

        <p>
          The tactical implications of Neymar's return are significant. Brazil's attack in
          the group stage has been built around the directness of Vinicius Junior and the
          physical presence of their forward line. Neymar adds a creative dimension that
          no other player in the squad can replicate: the ability to unlock compact defenses
          with a single pass, to draw fouls in dangerous areas, and to control the tempo
          of a knockout match through individual possession.
        </p>

        <p>
          In a knockout tournament where matches are often decided by moments of individual
          brilliance rather than collective superiority, having a player of Neymar's quality
          available for 30 minutes, 45 minutes, or potentially 90 minutes as the tournament
          progresses, is an asset that no other team in the competition can match. Brazil
          entered the 2026 World Cup as one of several favorites. With Neymar back, they
          are the team that everyone else is hoping to avoid.
        </p>

        <p>
          Follow all{' '}
          <Link href="/world-cup" className="text-blue-600 hover:text-blue-800 underline">
            ObjectWire World Cup 2026 coverage
          </Link>{' '}
          for match reports, group standings, and knockout bracket updates.{' '}
          <Link href="/authors/jack-brennan" className="text-blue-600 hover:text-blue-800 underline">
            Jack Brennan
          </Link>{' '}
          is covering the 2026 tournament for ObjectWire.
        </p>

        <hr />

        <p>
          <strong>Sources:</strong>{' '}
          <a
            href="https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            FIFA World Cup 2026 Official Hub
          </a>
          .{' '}
          <a
            href="https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            FIFA World Cup 2026 Official Standings
          </a>
          .
        </p>

      </div>
    </NewsArticle>
  );
}