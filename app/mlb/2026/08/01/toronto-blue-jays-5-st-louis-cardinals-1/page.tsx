import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mlb/2026/08/01/toronto-blue-jays-5-st-louis-cardinals-1';
const OG_IMAGE = '/thumbnails/mlb-2026-08-01-toronto-blue-jays-5-st-louis-cardinals-1.jpg';

const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Blue Jays 5, Cardinals 1 | Toronto Pitching Shuts Down St. Louis',
  description:
    'The Toronto Blue Jays\' pitching kept the St. Louis Cardinals in check all afternoon, while Toronto\'s lineup capitalized on timely hits to secure a comfortable home victory.',
  keywords: ['MLB', 'August 1 2026', 'Game Recap'],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Blue Jays 5, Cardinals 1 | Toronto Pitching Shuts Down St. Louis',
    description:
      'The Toronto Blue Jays\' pitching kept the St. Louis Cardinals in check all afternoon, while Toronto\'s lineup capitalized on timely hits to secure a comfortable home victory.',
    type: 'article', url: ARTICLE_URL, siteName: 'Objective Wire',
    authors: ['Carson Scott'], publishedTime: '2026-08-01T20:00:00Z', modifiedTime: '2026-08-01T20:00:00Z',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    section: 'MLB', tags: ['MLB', 'Blue Jays', 'Cardinals', 'Toronto'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blue Jays 5, Cardinals 1 | Toronto Pitching Shuts Down St. Louis',
    description: 'The Toronto Blue Jays\' pitching kept the St. Louis Cardinals in check all afternoon, while Toronto\'s lineup capitalized on timely hits to secure a comfortable home victory.',
    images: [OG_IMAGE],
  },
};
export default function BlueJaysCardinalsPage() {
  return (
    <SportArticle
      title="Toronto Blue Jays 5, St. Louis Cardinals 1 | Pitching Dominates"
      subtitle="The Blue Jays' pitching kept the Cardinals in check all afternoon, while Toronto's lineup capitalized on timely hits to secure a comfortable home victory at Rogers Centre."
      category="MLB" categoryColor="blue" topicTag="sports"
      publishDate="August 1, 2026" readTime="3 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG} url={SLUG}
      tags={['MLB', 'Blue Jays', 'Cardinals', 'Toronto']}
      breadcrumbs={[{ name: 'Home', item: '/' }, { name: 'MLB', item: '/mlb' }, { name: 'Aug 1, 2026', item: SLUG }]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="5-1" subtext="TOR leads" color="blue" />
        <SportStat metric="Notable" value="Pitching" subtext="1 ER allowed" color="green" />
        <SportStat metric="Venue" value="Rogers Centre" subtext="Toronto, ON" color="gray" />
      </SportStatRow>
      <p>The Toronto Blue Jays opened the month of August with a well-rounded victory, getting a strong start from their pitching staff and enough timely hitting to comfortably down the St. Louis Cardinals 5-1 at Rogers Centre.</p>
      <p>The Blue Jays' pitching held St. Louis to a single run, consistently working out of trouble whenever the Cardinals threatened. Toronto's lineup, meanwhile, capitalized on scoring opportunities, stringing together hits in key moments to build an early lead and never look back. The win sets a positive tone for Toronto as they look to climb in the tight AL East race.</p>
      <p>For more MLB coverage, see the <Link href="/mlb" className="text-blue-600 hover:text-blue-800 underline">oWire MLB hub</Link>.</p>
    </SportArticle>
  );
}