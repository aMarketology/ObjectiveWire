import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-curacao-0-2-ivory-coast-group-e';
const URL_PATH = '/world-cup/2026/curacao-0-2-ivory-coast-group-e';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;

const OG_IMAGE = '/thumbnails/world-cup-2026-curacao-0-2-ivory-coast-group-e.jpg';

export const metadata: Metadata = {
  title: 'Curacao 0-2 Ivory Coast | World Cup 2026 Group E Match Report',
  description:
    'The Elephants of Ivory Coast secured their spot on the cusp of history with a professional 2-0 victory over Curacao in Philadelphia, successfully navigating the heavy pressure of Group E.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Curacao 0-2 Ivory Coast | World Cup 2026 Group E',
    description: 'Ivory Coast take control of Group E with a professional 2-0 win over Curacao in Philadelphia. Report by Jack Brennan.',
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-24T21:30:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Ivory Coast', 'Curacao', 'Group E', 'Match Report'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curacao 0-2 Ivory Coast | World Cup 2026 Group E',
    description: 'Ivory Coast take control of Group E with a professional 2-0 win over Curacao. Report by Jack Brennan.',
  },
};

export default function CuracaoIvoryCoastPage() {
  return (
    <NewsArticle
      title="Curacao 0-2 Ivory Coast | Elephants Take Control of Group E with Professional Display in Philadelphia"
      subtitle="The Elephants of Ivory Coast secured their spot on the cusp of history with a professional 2-0 victory over Curacao in Philadelphia, successfully navigating the heavy pressure of Group E to position themselves for a Round of 32 berth"
      category="World Cup 2026 · Group E"
      categoryColor="green"
      topicTag="sports"
      publishDate="June 24, 2026"
      readTime="4 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Curacao 0-2 Ivory Coast | Elephants Take Control of Group E' }}
      tags={['World Cup 2026', 'Ivory Coast', 'Curacao', 'Group E', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Curacao vs Ivory Coast', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'ecuador-2-1-germany', title: 'Ecuador 2-1 Germany | Group E Report', url: '/world-cup/2026/ecuador-2-1-germany-group-e', publishDate: 'June 24, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Ivory Coast defeated Curacao 2-0 in Philadelphia to take control of Group E.',
        'The Elephants produced a professional, disciplined performance to navigate the pressure of a must-win group match.',
        'Curacao, making their World Cup debut, exit the tournament after a competitive but ultimately unsuccessful campaign.',
        'Ivory Coast position themselves for a Round of 32 berth with the result, pending other Group E outcomes.',
      ]}
      faqItems={[
        {
          question: 'What was the final score of Curacao vs Ivory Coast?',
          answer: 'Ivory Coast won 2-0 in Philadelphia.',
        },
        {
          question: 'Can Ivory Coast advance to the knockout stage?',
          answer: 'Yes. Ivory Coast positioned themselves well for a Round of 32 berth with the win over Curacao.',
        },
        {
          question: 'Is this Curacao first World Cup appearance?',
          answer: 'Yes. Curacao made their World Cup debut at the 2026 tournament, gaining valuable experience against established international sides.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          The Elephants of Ivory Coast secured their spot on the cusp of history with a
          professional 2-0 victory over Curacao in Philadelphia. In a Group E that has been
          defined by Ecuador's stunning upset of Germany, the Ivory Coast quietly went about
          their business, producing a disciplined, controlled performance that positions them
          well for a Round of 32 berth.
        </p>

        <p>
          The match lacked the drama of Ecuador's victory over Germany, but it carried its
          own significance. For Ivory Coast, a nation with a proud footballing tradition that
          includes two African Cup of Nations titles and a history of producing world-class
          talent, advancing past the group stage at a World Cup remains an elusive achievement.
          This result brings them closer than they have been in years.
        </p>

        <h2 id="ivory-coast-discipline">Ivory Coast | Professionalism Under Pressure</h2>

        <p>
          Ivory Coast approached the match with the seriousness of a side that understood
          the stakes. They controlled possession without forcing the issue, created chances
          through patient build-up play, and defended with the organization that has been
          the hallmark of their campaign. The two goals came at well-spaced intervals,
          allowing them to manage the game state without the anxiety that often accompanies
          a single-goal lead in a must-win match.
        </p>

        <p>
          The first goal arrived through a set piece, a route that Ivory Coast have
          practiced extensively and executed with precision. The second came from open
          play, the product of a well-worked attacking move that carved through Curacao's
          defensive line. Both goals demonstrated the variety in Ivory Coast's attacking
          approach and their ability to score in different ways depending on the match
          situation.
        </p>

        <h2 id="curacao-debut">Curacao | A Debut to Remember Despite the Result</h2>

        <p>
          For Curacao, the tournament ends without a win but with the knowledge that they
          competed at the highest level of international football. Their debut World Cup
          appearance, achieved through a remarkable qualification campaign, has provided
          invaluable experience for a squad that includes players from domestic leagues
          and lower-tier European competitions.
        </p>

        <p>
          The gap between Curacao and established World Cup sides remains significant, but
          the experience of competing against Germany, Ecuador, and Ivory Coast will
          accelerate the development of their national program. The infrastructure and
          investment that carried them to the World Cup will need to continue if they are
          to build on this achievement.
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
          .
        </p>

      </div>
    </NewsArticle>
  );
}