import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-brazil-3-0-scotland-group-c';
const URL_PATH = '/world-cup/2026/brazil-3-0-scotland-group-c';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;

const OG_IMAGE = '/thumbnails/world-cup-2026-brazil-3-0-scotland-group-c.jpg';

export const metadata: Metadata = {
  title: 'Brazil 3-0 Scotland | World Cup 2026 Group C Match Report',
  description:
    'Brazil took command of Group C with a dominant 3-0 win over Scotland in Miami. Vinícius Júnior scored twice, Matheus Cunha added a third, and Neymar made his emotional return after 981 days.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Brazil 3-0 Scotland | World Cup 2026 Group C',
    description: 'Vinícius Júnior brace, Cunha strike, and Neymar returns after 981 days. Brazil top Group C in style. Report by Jack Brennan.',
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-24T22:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Brazil', 'Scotland', 'Group C', 'Match Report', 'Vinícius Júnior', 'Neymar'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brazil 3-0 Scotland | World Cup 2026 Group C',
    description: 'Vinícius Júnior brace, Matheus Cunha strike, and Neymar returns. Brazil top Group C. Report by Jack Brennan.',
  },
};

export default function BrazilScotlandPage() {
  return (
    <NewsArticle
      title="Brazil 3-0 Scotland | Vinícius Brace Seals Group C Top Spot as Neymar Returns After 981 Days"
      subtitle="Brazil took absolute command of Group C with a dominant 3-0 victory over Scotland in Miami. Vinícius Júnior netted a brace, Matheus Cunha added a third, and Neymar made his long-awaited return to the Seleção"
      category="World Cup 2026 · Group C"
      categoryColor="green"
      topicTag="sports"
      publishDate="June 24, 2026"
      readTime="5 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Brazil 3-0 Scotland | Vinícius Brace Seals Group C Top Spot' }}
      tags={['World Cup 2026', 'Brazil', 'Scotland', 'Group C', 'Match Report', 'Vinícius Júnior', 'Neymar']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Brazil vs Scotland', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'brazil-1-morocco-1', title: 'Brazil 1-1 Morocco | Group C Report', url: '/world-cup/2026/brazil-1-morocco-1-group-c', publishDate: 'June 13, 2026', category: 'Sports' },
        { slug: 'morocco-4-2-haiti', title: 'Morocco 4-2 Haiti | Group C Report', url: '/world-cup/2026/morocco-4-2-haiti-group-c', publishDate: 'June 24, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Brazil defeated Scotland 3-0 in Miami to win Group C with a perfect final matchday performance.',
        'Vinícius Júnior scored twice, continuing his red-hot form after rescuing Brazil in the opening draw against Morocco.',
        'Matheus Cunha added a third goal to seal the result and confirm Brazil as group winners.',
        'Neymar made his long-awaited return to the Seleção after 981 days, coming off the bench in the 75th minute to a deafening ovation.',
        'Brazil advance to the Round of 32 as Group C winners with a favorable bracket path.',
      ]}
      faqItems={[
        {
          question: 'What was the final score of Brazil vs Scotland?',
          answer: 'Brazil won 3-0. Vinícius Júnior scored twice and Matheus Cunha added a third in Miami.',
        },
        {
          question: 'Did Neymar play against Scotland?',
          answer: 'Yes. Neymar came off the bench in the 75th minute, making his first World Cup appearance since 2022 after 981 days away from the international stage due to injury.',
        },
        {
          question: 'Who scored for Brazil against Scotland?',
          answer: 'Vinícius Júnior scored a brace and Matheus Cunha scored one goal.',
        },
        {
          question: 'Did Brazil win Group C?',
          answer: 'Yes. Brazil finished top of Group C with the win over Scotland, combined with Morocco defeating Haiti in the other Group C decider.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Brazil took absolute command of Group C in their final group stage fixture, defeating
          Scotland 3-0 in Miami to seal top spot in the group. Vinícius Júnior stayed white-hot,
          netting an impressive brace, while Matheus Cunha added a third to comfortably secure
          the victory. The night, however, belonged to a moment that transcended the scoreline.
        </p>

        <p>
          The match carried the weight of expectation that every Brazil game at a World Cup
          carries, amplified by the knowledge that anything less than a win could leave the
          five-time champions facing a significantly harder knockout path. Scotland, playing
          with the freedom of a side that had already exceeded expectations by taking three
          points from their opener against Haiti, were not content to sit back and absorb
          pressure. They pressed high, they competed, and for the opening 25 minutes, they
          made Brazil work for every pass.
        </p>

        <h2 id="vinicius-brace">Vinícius Júnior | A Statement Performance</h2>

        <p>
          The breakthrough came through the player who has become Brazil's most reliable
          attacking outlet in this tournament. Vinícius Júnior, who rescued Brazil with the
          equalizer against Morocco in the opening fixture, opened the scoring with a
          characteristically direct run from the left flank, cutting inside onto his right
          foot and placing a low shot beyond the Scottish goalkeeper.
        </p>

        <p>
          His second was a study in composure. A quick Brazil transition caught Scotland
          pushing numbers forward, and Vinícius found himself in a one-on-one situation
          that he finished with the calm of a player operating at the peak of his powers.
          The brace took his tournament tally to three goals in three appearances and
          cemented his status as one of the defining players of the group stage.
        </p>

        <h2 id="cunha-strike">Matheus Cunha | Depth on Display</h2>

        <p>
          Matheus Cunha added Brazil's third with a well-taken finish that showcased the
          attacking depth Carlo Ancelotti has at his disposal. With the game already
          effectively decided, Cunha's goal served as a reminder that Brazil's threat
          extends well beyond their marquee names. The ability to rotate attacking options
          without a drop in quality is precisely the kind of squad depth that carries teams
          deep into knockout tournaments.
        </p>

        <h2 id="neymar-return">Neymar | The Return After 981 Days</h2>

        <p>
          The moment that will define this match, and potentially Brazil's entire tournament,
          came in the 75th minute. Neymar Jr. stepped onto the pitch for the first time in
          a Brazil shirt at a World Cup since the 2022 quarterfinal defeat to Croatia. The
          981-day gap between appearances was the result of a grueling cycle of injuries that
          threatened to end his international career prematurely.
        </p>

        <p>
          The reception from the Miami crowd was deafening. Neymar, now 34, looked sharp in
          his limited minutes, recording 14 passes and registering a shot on target. While a
          lingering calf injury kept him out of Brazil's opening matches against Morocco and
          Haiti, his 15-minute cameo against Scotland signaled that his tournament is
          officially underway.
        </p>

        <p>
          After the final whistle, Neymar bypassed the media mixers and headed straight for
          the locker room, where he reportedly broke down in tears. "I went into the locker
          room by myself and couldn't hold back the tears," Neymar admitted afterward. "It's
          a moment of pure gratitude. I thank God for giving me the opportunity to experience
          this again."
        </p>

        <p>
          With this appearance, Neymar became only the fourth Brazilian player to feature in
          four separate FIFA World Cups, joining an elite pantheon alongside Pelé, Djalma
          Santos, and Cafu. For manager Carlo Ancelotti, Neymar's return could not be better
          timed. With Brazil officially topping Group C and advancing to the Round of 32,
          having the ultimate wildcard back in the squad elevates Brazil from mere contenders
          to terrifying favorites as the knockout brackets lock into place.
        </p>

        <h2 id="group-c-standings">Group C Final Standings</h2>

        <p>
          Brazil's win, combined with Morocco's 4-2 victory over Haiti in the other Group C
          decider, confirmed the final group standings. Brazil finish top with seven points,
          Morocco second with four points, Scotland third with three points, and Haiti
          eliminated with zero points. Both Brazil and Morocco advance to the Round of 32.
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
            href="https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            FIFA World Cup 2026 Official Standings
          </a>
          .{' '}
          <a
            href="https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            FIFA World Cup 2026 Official Hub
          </a>
          .
        </p>

      </div>
    </NewsArticle>
  );
}