import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mlb/2026/08/01/arizona-diamondbacks-12-cleveland-guardians-8';
const OG_IMAGE = '/thumbnails/mlb-2026-08-01-arizona-diamondbacks-12-cleveland-guardians-8.jpg';

const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Diamondbacks 12, Guardians 8 | Arizona Out-Slugs Cleveland',
  description:
    'Offensive fireworks dominated Cleveland as the Arizona Diamondbacks out-slugged the Guardians, pulling away late in a high-scoring 12-8 battle at Progressive Field.',
  keywords: ['MLB', 'August 1 2026', 'Game Recap'],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Diamondbacks 12, Guardians 8 | Arizona Out-Slugs Cleveland',
    description:
      'Offensive fireworks dominated Cleveland as the Arizona Diamondbacks out-slugged the Guardians, pulling away late in a high-scoring 12-8 battle at Progressive Field.',
    type: 'article', url: ARTICLE_URL, siteName: 'Objective Wire',
    authors: ['Carson Scott'], publishedTime: '2026-08-01T20:00:00Z', modifiedTime: '2026-08-01T20:00:00Z',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    section: 'MLB', tags: ['MLB', 'Diamondbacks', 'Guardians', 'Arizona'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diamondbacks 12, Guardians 8 | Arizona Out-Slugs Cleveland',
    description: 'Offensive fireworks dominated Cleveland as the Arizona Diamondbacks out-slugged the Guardians, pulling away late in a high-scoring 12-8 battle at Progressive Field.',
    images: [OG_IMAGE],
  },
};
export default function DiamondbacksGuardiansPage() {
  return (
    <SportArticle
      title="Arizona Diamondbacks 12, Cleveland Guardians 8 | Offensive Fireworks in Cleveland"
      subtitle="Offensive fireworks dominated Cleveland as the Arizona Diamondbacks out-slugged the Guardians, pulling away late in a high-scoring 12-8 battle at Progressive Field."
      category="MLB" categoryColor="blue" topicTag="sports"
      publishDate="August 1, 2026" readTime="3 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG} url={SLUG}
      tags={['MLB', 'Diamondbacks', 'Guardians', 'Arizona']}
      breadcrumbs={[{ name: 'Home', item: '/' }, { name: 'MLB', item: '/mlb' }, { name: 'Aug 1, 2026', item: SLUG }]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="12-8" subtext="ARI wins" color="blue" />
        <SportStat metric="Total Runs" value="20" subtext="Combined slugfest" color="orange" />
        <SportStat metric="Venue" value="Progressive Field" subtext="Cleveland, OH" color="gray" />
      </SportStatRow>
      <p>The Arizona Diamondbacks and Cleveland Guardians combined for a 20-run offensive explosion on Saturday, with Arizona ultimately out-slugging Cleveland 12-8 at Progressive Field.</p>
      <p>Both teams traded blows through the early innings, but the Diamondbacks broke the game open late, stringing together extra-base hits and capitalizing on Cleveland pitching that couldn't find an answer. The Guardians managed to keep pace for most of the game but ran out of bullets as Arizona's lineup continued to produce. The win is a boost for Arizona as they chase a wild card spot in the National League.</p>
      <p>For more MLB coverage, see the <Link href="/mlb" className="text-blue-600 hover:text-blue-800 underline">oWire MLB hub</Link>.</p>
    </SportArticle>
  );
}