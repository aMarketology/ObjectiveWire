import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mlb/2026/08/01/pittsburgh-pirates-4-cincinnati-reds-1';
const OG_IMAGE = '/thumbnails/mlb-2026-08-01-pittsburgh-pirates-4-cincinnati-reds-1.jpg';

const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Pirates 4, Reds 1 | Pittsburgh Silences Cincinnati on the Road',
  description:
    'The Pirates silenced the crowd in Cincinnati, leveraging disciplined plate appearances and strong bullpen work to lock up a 4-1 road win at Great American Ball Park.',
  keywords: ['MLB', 'August 1 2026', 'Game Recap'],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Pirates 4, Reds 1 | Pittsburgh Silences Cincinnati on the Road',
    description:
      'The Pirates silenced the crowd in Cincinnati, leveraging disciplined plate appearances and strong bullpen work to lock up a 4-1 road win at Great American Ball Park.',
    type: 'article', url: ARTICLE_URL, siteName: 'Objective Wire',
    authors: ['Carson Scott'], publishedTime: '2026-08-01T20:00:00Z', modifiedTime: '2026-08-01T20:00:00Z',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    section: 'MLB', tags: ['MLB', 'Pirates', 'Reds', 'Pittsburgh'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pirates 4, Reds 1 | Pittsburgh Silences Cincinnati on the Road',
    description: 'The Pirates silenced the crowd in Cincinnati, leveraging disciplined plate appearances and strong bullpen work to lock up a 4-1 road win at Great American Ball Park.',
    images: [OG_IMAGE],
  },
};
export default function PiratesRedsPage() {
  return (
    <SportArticle
      title="Pittsburgh Pirates 4, Cincinnati Reds 1 | Bullpen Locks Down Road Win"
      subtitle="The Pirates silenced the crowd in Cincinnati, leveraging disciplined plate appearances and strong bullpen work to lock up a 4-1 road win at Great American Ball Park."
      category="MLB" categoryColor="blue" topicTag="sports"
      publishDate="August 1, 2026" readTime="3 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG} url={SLUG}
      tags={['MLB', 'Pirates', 'Reds', 'Pittsburgh']}
      breadcrumbs={[{ name: 'Home', item: '/' }, { name: 'MLB', item: '/mlb' }, { name: 'Aug 1, 2026', item: SLUG }]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="4-1" subtext="PIT wins" color="blue" />
        <SportStat metric="Key Factor" value="Bullpen" subtext="Scoreless relief" color="green" />
        <SportStat metric="Venue" value="Great American Ball Park" subtext="Cincinnati, OH" color="gray" />
      </SportStatRow>
      <p>The Pittsburgh Pirates delivered a disciplined road performance on Saturday, using patient at-bats and a stingy bullpen to defeat the Cincinnati Reds 4-1 at Great American Ball Park.</p>
      <p>Pittsburgh's lineup worked deep counts and capitalized when they got pitches to hit, building an early lead that the bullpen protected through the late innings. The Reds struggled to mount any sustained rallies against a Pirates pitching staff that controlled the strike zone throughout the game. The win keeps Pittsburgh competitive in the NL Central chase.</p>
      <p>For more MLB coverage, see the <Link href="/mlb" className="text-blue-600 hover:text-blue-800 underline">oWire MLB hub</Link>.</p>
    </SportArticle>
  );
}