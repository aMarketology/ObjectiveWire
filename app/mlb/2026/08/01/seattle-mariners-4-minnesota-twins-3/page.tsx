import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mlb/2026/08/01/seattle-mariners-4-minnesota-twins-3';
const OG_IMAGE = '/thumbnails/mlb-2026-08-01-seattle-mariners-4-minnesota-twins-3.jpg';

const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Mariners 4, Twins 3 | Seattle Bullpen Closes Late Surge',
  description:
    'A late-game surge powered Seattle to a thrilling 4-3 victory over the Minnesota Twins. The Mariners\' bullpen closed the door in the ninth to seal the tight home win.',
  keywords: ['MLB', 'August 1 2026', 'Game Recap'],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Mariners 4, Twins 3 | Seattle Bullpen Closes Late Surge',
    description:
      'A late-game surge powered Seattle to a thrilling 4-3 victory over the Minnesota Twins. The Mariners\' bullpen closed the door in the ninth to seal the tight home win.',
    type: 'article', url: ARTICLE_URL, siteName: 'Objective Wire',
    authors: ['Carson Scott'], publishedTime: '2026-08-01T20:00:00Z', modifiedTime: '2026-08-01T20:00:00Z',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    section: 'MLB', tags: ['MLB', 'Mariners', 'Twins', 'Seattle'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mariners 4, Twins 3 | Seattle Bullpen Closes Late Surge',
    description: 'A late-game surge powered Seattle to a thrilling 4-3 victory over the Minnesota Twins. The Mariners\' bullpen closed the door in the ninth to seal the tight home win.',
    images: [OG_IMAGE],
  },
};
export default function MarinersTwinsPage() {
  return (
    <SportArticle
      title="Seattle Mariners 4, Minnesota Twins 3 | Late-Game Rally Holds"
      subtitle="A late-game surge powered Seattle to a thrilling 4-3 victory. The Mariners' bullpen closed the door in the ninth to seal the tight home win at T-Mobile Park."
      category="MLB" categoryColor="blue" topicTag="sports"
      publishDate="August 1, 2026" readTime="3 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG} url={SLUG}
      tags={['MLB', 'Mariners', 'Twins', 'Seattle']}
      breadcrumbs={[{ name: 'Home', item: '/' }, { name: 'MLB', item: '/mlb' }, { name: 'Aug 1, 2026', item: SLUG }]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="4-3" subtext="SEA wins" color="blue" />
        <SportStat metric="Key Factor" value="Bullpen" subtext="1-2-3 ninth" color="green" />
        <SportStat metric="Venue" value="T-Mobile Park" subtext="Seattle, WA" color="gray" />
      </SportStatRow>
      <p>The Seattle Mariners delivered a dramatic home victory on Saturday, using a late-inning offensive surge to overtake the Minnesota Twins and holding on for a 4-3 win at T-Mobile Park.</p>
      <p>With the game hanging in the balance in the late innings, Seattle's bats came alive to push across the runs needed to take the lead. The bullpen took over from there, shutting down the Twins in order in the ninth inning to preserve the one-run advantage. The win keeps Seattle in the thick of the AL West race and the crowded AL wild card picture.</p>
      <p>For more MLB coverage, see the <Link href="/mlb" className="text-blue-600 hover:text-blue-800 underline">oWire MLB hub</Link>.</p>
    </SportArticle>
  );
}