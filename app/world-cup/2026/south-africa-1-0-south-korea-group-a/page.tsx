import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-south-africa-1-0-south-korea-group-a';
const URL_PATH = '/world-cup/2026/south-africa-1-0-south-korea-group-a';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;

const OG_IMAGE = '/thumbnails/world-cup-2026-south-africa-1-0-south-korea-group-a.jpg';

export const metadata: Metadata = {
  title: 'South Africa 1-0 South Korea | World Cup 2026 Group A Match Report',
  description:
    'South Africa produced one of the most stunning results of the tournament, defeating South Korea 1-0 in Monterrey to punch an unprecedented ticket into the knockout rounds.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'South Africa 1-0 South Korea | World Cup 2026 Group A',
    description: 'Thapelo Maseko scores the goal that sends South Africa to the knockout stage for the first time. A footballing miracle in Monterrey. Report by Jack Brennan.',
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-24T23:30:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'South Africa', 'South Korea', 'Group A', 'Match Report', 'Upset'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'South Africa 1-0 South Korea | World Cup 2026 Group A',
    description: 'Thapelo Maseko writes his name in South African football history. Bafana Bafana reach the knockout stage for the first time. Report by Jack Brennan.',
  },
};

export default function SouthAfricaSouthKoreaPage() {
  return (
    <NewsArticle
      title="South Africa 1-0 South Korea | Bafana Bafana Produce the Upset of the Tournament to Reach the Knockout Stage for the First Time"
      subtitle="In one of the most stunning results of the World Cup 2026, South Africa defeated South Korea 1-0 in Monterrey to punch an unprecedented ticket into the knockout rounds, with Thapelo Maseko scoring the goal that will be remembered for generations"
      category="World Cup 2026 · Group A"
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
      thumbnail={{ src: OG_IMAGE, alt: 'South Africa 1-0 South Korea | Bafana Bafana Reach Knockout Stage' }}
      tags={['World Cup 2026', 'South Africa', 'South Korea', 'Group A', 'Match Report', 'Upset', 'Thapelo Maseko']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'South Africa vs South Korea', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'mexico-3-0-czechia', title: 'Mexico 3-0 Czechia | Group A Report', url: '/world-cup/2026/mexico-3-0-czechia-group-a', publishDate: 'June 24, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'South Africa defeated South Korea 1-0 in Monterrey to qualify for the knockout stage for the first time in their history.',
        'Thapelo Maseko scored the decisive goal in one of the biggest upsets of World Cup 2026.',
        'South Korea, pre-tournament favorites to advance alongside Mexico, are eliminated in the group stage.',
        'Bafana Bafana become the second African nation to advance from Group A, joining Mexico in the Round of 32.',
      ]}
      faqItems={[
        {
          question: 'What was the final score of South Africa vs South Korea?',
          answer: 'South Africa won 1-0, with Thapelo Maseko scoring the only goal of the match in Monterrey.',
        },
        {
          question: 'Did South Africa advance to the knockout stage?',
          answer: 'Yes. South Africa finished second in Group A behind Mexico, advancing to the Round of 32 for the first time in their history.',
        },
        {
          question: 'Who scored for South Africa against South Korea?',
          answer: 'Thapelo Maseko scored the decisive goal, writing his name into South African football history.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          In one of the most stunning results of the World Cup 2026, South Africa produced a
          footballing miracle in Monterrey. A decisive goal from Thapelo Maseko earned Bafana
          Bafana a 1-0 shock victory over South Korea, punching an unprecedented ticket into
          the knockout rounds. For a nation that has waited since 1998 for a second World Cup
          appearance, and has never advanced beyond the group stage, this result represents
          the single greatest achievement in South African men's football history.
        </p>

        <p>
          The magnitude of the upset cannot be overstated. South Korea entered the tournament
          as clear favorites to advance alongside Mexico, with a squad featuring established
          European-based talent and a track record of Asian Cup success. South Africa, by
          contrast, arrived as the lowest-ranked team in Group A, with modest expectations
          and a squad that few outside the continent considered capable of competing at this
          level.
        </p>

        <h2 id="maseko-goal">Thapelo Maseko | The Goal That Changed Everything</h2>

        <p>
          The decisive moment arrived in the 67th minute. South Africa, who had defended
          resolutely for the opening hour while creating sporadic chances on the counter,
          won possession in midfield and transitioned quickly. Maseko, who had been a
          persistent threat on the right flank throughout the match, received the ball in
          space, drove at the South Korean defense, and unleashed a finish that beat the
          goalkeeper at his near post.
        </p>

        <p>
          The stadium erupted. South African supporters, who had traveled to Monterrey in
          numbers that surprised even the tournament organizers, created a celebration that
          matched the significance of the moment. Maseko was mobbed by his teammates, and
          the image of the 24-year-old winger being buried under a pile of bodies will
          become one of the defining photographs of the 2026 tournament.
        </p>

        <h2 id="south-korea-exit">South Korea | A Tournament of Missed Opportunities</h2>

        <p>
          For South Korea, the result is a bitter disappointment. They arrived at the 2026
          World Cup with legitimate ambitions of reaching the knockout stage for the third
          consecutive tournament. Instead, they exit in the group stage, undone by a single
          moment of quality from a South African side that refused to accept its underdog
          status.
        </p>

        <p>
          South Korea dominated possession and created chances, but they lacked the cutting
          edge in the final third that separates tournament contenders from group-stage
          participants. Their inability to break down a well-organized South African defense
          will be the subject of significant introspection in Korean football circles.
        </p>

        <h2 id="bafana-legacy">Bafana Bafana | A Legacy Forged in Monterrey</h2>

        <p>
          For South Africa, the achievement extends beyond the result itself. Bafana Bafana
          have become the second African nation to advance from Group A, and they have done
          so by defeating a higher-ranked opponent in a must-win match. The experience gained
          by this squad, many of whom play their domestic football in the South African
          Premier Division, will accelerate the development of the national program for
          years to come.
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