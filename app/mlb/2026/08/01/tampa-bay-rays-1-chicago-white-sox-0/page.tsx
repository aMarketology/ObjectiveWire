import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mlb/2026/08/01/tampa-bay-rays-1-chicago-white-sox-0';
const OG_IMAGE = '/thumbnails/mlb-2026-08-01-tampa-bay-rays-1-chicago-white-sox-0.jpg';

const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Rays 1, White Sox 0 | Tampa Bay Pitchers Rack Up 16 Strikeouts',
  description:
    'The Tampa Bay Rays\' pitching staff delivered a masterpiece at home, racking up 16 total strikeouts to hand Chicago a narrow shutout loss in a 1-0 pitcher\'s duel.',
  keywords: ['MLB', 'August 1 2026', 'Game Recap'],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Rays 1, White Sox 0 | Tampa Bay Pitchers Rack Up 16 Strikeouts',
    description:
      'The Tampa Bay Rays\' pitching staff delivered a masterpiece at home, racking up 16 total strikeouts to hand Chicago a narrow shutout loss in a 1-0 pitcher\'s duel.',
    type: 'article', url: ARTICLE_URL, siteName: 'Objective Wire',
    authors: ['Carson Scott'], publishedTime: '2026-08-01T20:00:00Z', modifiedTime: '2026-08-01T20:00:00Z',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    section: 'MLB', tags: ['MLB', 'Rays', 'White Sox', 'Tampa Bay'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rays 1, White Sox 0 | Tampa Bay Pitchers Rack Up 16 Strikeouts',
    description: 'The Tampa Bay Rays\' pitching staff delivered a masterpiece at home, racking up 16 total strikeouts to hand Chicago a narrow shutout loss in a 1-0 pitcher\'s duel.',
    images: [OG_IMAGE],
  },
};
export default function RaysWhiteSoxPage() {
  return (
    <SportArticle
      title="Tampa Bay Rays 1, Chicago White Sox 0 | Sixteen Strikeouts in a Masterpiece"
      subtitle="The Rays' pitching staff delivered a masterpiece at home, racking up 16 total strikeouts to hand Chicago a narrow shutout loss at Tropicana Field."
      category="MLB" categoryColor="blue" topicTag="sports"
      publishDate="August 1, 2026" readTime="3 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG} url={SLUG}
      tags={['MLB', 'Rays', 'White Sox', 'Tampa Bay']}
      breadcrumbs={[{ name: 'Home', item: '/' }, { name: 'MLB', item: '/mlb' }, { name: 'Aug 1, 2026', item: SLUG }]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="1-0" subtext="TB wins" color="blue" />
        <SportStat metric="Strikeouts" value="16" subtext="Rays staff" color="green" />
        <SportStat metric="Venue" value="Tropicana Field" subtext="St. Petersburg, FL" color="gray" />
      </SportStatRow>
      <p>The Tampa Bay Rays pitching staff authored a pitching clinic on Saturday, combining for 16 strikeouts in a dominant 1-0 shutout of the Chicago White Sox at Tropicana Field.</p>
      <p>The Rays' arms were in control from the first pitch, consistently working ahead in the count and generating swing-and-miss stuff against a Chicago lineup that never found an answer. Tampa Bay's offense managed just enough support with a single run, and the pitching made it stand. The win is exactly the kind of performance the Rays need as they battle the Yankees for supremacy in the AL East.</p>
      <p>For more MLB coverage, see the <Link href="/mlb" className="text-blue-600 hover:text-blue-800 underline">oWire MLB hub</Link>.</p>
    </SportArticle>
  );
}