import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mlb/2026/08/01/colorado-rockies-12-kansas-city-royals-6';
const OG_IMAGE = '/thumbnails/mlb-2026-08-01-colorado-rockies-12-kansas-city-royals-6.jpg';

const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Rockies 12, Royals 6 | Coors Field Eruption Powers Colorado',
  description:
    'Coors Field lived up to its reputation as the Colorado Rockies erupted for 12 runs to blow past the visiting Kansas City Royals in a lopsided victory.',
  keywords: ['MLB', 'August 1 2026', 'Game Recap'],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Rockies 12, Royals 6 | Coors Field Eruption Powers Colorado',
    description:
      'Coors Field lived up to its reputation as the Colorado Rockies erupted for 12 runs to blow past the visiting Kansas City Royals in a lopsided victory.',
    type: 'article', url: ARTICLE_URL, siteName: 'Objective Wire',
    authors: ['Carson Scott'], publishedTime: '2026-08-01T20:00:00Z', modifiedTime: '2026-08-01T20:00:00Z',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    section: 'MLB', tags: ['MLB', 'Rockies', 'Royals', 'Colorado'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rockies 12, Royals 6 | Coors Field Eruption Powers Colorado',
    description: 'Coors Field lived up to its reputation as the Colorado Rockies erupted for 12 runs to blow past the visiting Kansas City Royals in a lopsided victory.',
    images: [OG_IMAGE],
  },
};
export default function RockiesRoyalsPage() {
  return (
    <SportArticle
      title="Colorado Rockies 12, Kansas City Royals 6 | Coors Field Eruption"
      subtitle="Coors Field lived up to its reputation as the Colorado Rockies erupted for 12 runs to blow past the visiting Kansas City Royals in a lopsided victory."
      category="MLB" categoryColor="blue" topicTag="sports"
      publishDate="August 1, 2026" readTime="3 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG} url={SLUG}
      tags={['MLB', 'Rockies', 'Royals', 'Colorado']}
      breadcrumbs={[{ name: 'Home', item: '/' }, { name: 'MLB', item: '/mlb' }, { name: 'Aug 1, 2026', item: SLUG }]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="12-6" subtext="COL wins" color="blue" />
        <SportStat metric="Offense" value="Explosive" subtext="12 runs scored" color="orange" />
        <SportStat metric="Venue" value="Coors Field" subtext="Denver, CO" color="gray" />
      </SportStatRow>
      <p>Coors Field lived up to its reputation as the Colorado Rockies erupted for 12 runs on Saturday, blowing past the Kansas City Royals 12-6 in a game that was never really in doubt after the middle innings.</p>
      <p>The Rockies' lineup took full advantage of the thin Denver air, spraying line drives and capitalizing on the spacious outfield gaps. Kansas City kept it competitive for a while, but Colorado's offense proved too much, piling on runs inning after inning. The win is a bright spot in what has been a difficult season for the Rockies.</p>
      <p>For more MLB coverage, see the <Link href="/mlb" className="text-blue-600 hover:text-blue-800 underline">oWire MLB hub</Link>.</p>
    </SportArticle>
  );
}