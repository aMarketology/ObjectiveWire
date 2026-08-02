import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mlb/2026/08/01/houston-astros-5-texas-rangers-4';
const OG_IMAGE = '/thumbnails/mlb-2026-08-01-houston-astros-5-texas-rangers-4.jpg';

const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Astros 5, Rangers 4 | Houston Holds Off Late Texas Charge',
  description:
    'In a high-intensity Lone Star State battle, Houston held off a late Texas charge to secure a 5-4 divisional win at Minute Maid Park.',
  keywords: ['MLB', 'August 1 2026', 'Game Recap'],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Astros 5, Rangers 4 | Houston Holds Off Late Texas Charge',
    description:
      'In a high-intensity Lone Star State battle, Houston held off a late Texas charge to secure a 5-4 divisional win at Minute Maid Park.',
    type: 'article', url: ARTICLE_URL, siteName: 'Objective Wire',
    authors: ['Carson Scott'], publishedTime: '2026-08-01T20:00:00Z', modifiedTime: '2026-08-01T20:00:00Z',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    section: 'MLB', tags: ['MLB', 'Astros', 'Rangers', 'Houston', 'Texas'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astros 5, Rangers 4 | Houston Holds Off Late Texas Charge',
    description: 'In a high-intensity Lone Star State battle, Houston held off a late Texas charge to secure a 5-4 divisional win at Minute Maid Park.',
    images: [OG_IMAGE],
  },
};
export default function AstrosRangersPage() {
  return (
    <SportArticle
      title="Houston Astros 5, Texas Rangers 4 | Lone Star Thriller Goes to Houston"
      subtitle="In a high-intensity Lone Star State battle, Houston held off a late Texas charge to secure a 5-4 divisional win at Minute Maid Park."
      category="MLB" categoryColor="blue" topicTag="sports"
      publishDate="August 1, 2026" readTime="3 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG} url={SLUG}
      tags={['MLB', 'Astros', 'Rangers', 'Houston', 'Texas']}
      breadcrumbs={[{ name: 'Home', item: '/' }, { name: 'MLB', item: '/mlb' }, { name: 'Aug 1, 2026', item: SLUG }]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="5-4" subtext="HOU wins" color="blue" />
        <SportStat metric="Game" value="One-Run" subtext="Clutch defense" color="orange" />
        <SportStat metric="Venue" value="Minute Maid Park" subtext="Houston, TX" color="gray" />
      </SportStatRow>
      <p>The Lone Star State rivalry delivered another classic on Saturday as the Houston Astros held off a furious late charge from the Texas Rangers to secure a 5-4 victory at Minute Maid Park.</p>
      <p>Houston built a lead through the middle innings and seemed in control, but the Rangers refused to go quietly, mounting a late rally that brought the tying run to the plate. The Astros bullpen made the pitches it needed to in the clutch, preserving the one-run advantage and the divisional win. The victory is critical for Houston as they battle Seattle and Texas in the tight AL West race.</p>
      <p>For more MLB coverage, see the <Link href="/mlb" className="text-blue-600 hover:text-blue-800 underline">oWire MLB hub</Link>.</p>
    </SportArticle>
  );
}