import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mls/09-09-26/austin-fc-1-colorado-rapids-1';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/mls-09-09-26-austin-fc-1-colorado-rapids-1.jpg';

export const metadata: Metadata = {
  title: 'Austin FC 1, Colorado Rapids 1 | Points Shared at Q2 Stadium',
  description: 'Austin FC and the Colorado Rapids battled to a 1-1 draw at Q2 Stadium, with both sides creating chances in an open match before defensive standoffs late in the second half.',
  keywords: ['Austin FC', 'Colorado Rapids', 'MLS September 2026', 'MLS recap'],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Austin FC 1, Colorado Rapids 1 | Draw at Q2 Stadium',
    description: 'Both sides created chances in an open match at Q2 Stadium, ultimately sharing the points after defensive standoffs late in the second half.',
    type: 'article', url: ARTICLE_URL, siteName: 'Objective Wire',
    authors: ['Carson Scott'], publishedTime: '2026-09-10T00:00:00Z', modifiedTime: '2026-09-10T00:00:00Z',
    section: 'MLS', tags: ['MLS', 'Austin FC', 'Colorado Rapids'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Austin FC 1, Colorado 1 | Draw at Q2', description: 'Austin and Colorado shared the points in an open, competitive match at Q2 Stadium.', images: [OG_IMAGE] },
};

export default function AustinColoradoPage() {
  return (
    <SportArticle
      title="Austin FC 1, Colorado Rapids 1 | Points Shared at Q2 Stadium"
      subtitle="Austin FC and the Colorado Rapids battled to a 1-1 draw at Q2 Stadium. Both sides created chances in an open match, ultimately sharing the points after defensive standoffs late in the second half."
      category="MLS" categoryColor="blue" topicTag="sports"
      publishDate="September 9, 2026" publishedTime="2026-09-10T00:00:00Z" readTime="2 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG} url={SLUG}
      tags={['MLS', 'Austin FC', 'Colorado Rapids']}
      breadcrumbs={[{ name: 'Home', item: '/' }, { name: 'MLS', item: '/mls' }, { name: 'Austin 1-1 Colorado', item: SLUG }]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="1-1" subtext="Draw" color="blue" />
        <SportStat metric="Yellow Cards" value="2" subtext="Both Colorado" color="orange" />
        <SportStat metric="Venue" value="Q2 Stadium" subtext="Austin, TX" color="gray" />
      </SportStatRow>
      <p>Austin FC and the Colorado Rapids battled to a 1-1 draw at Q2 Stadium. Both sides created chances in an open match, ultimately sharing the points after defensive standoffs late in the second half.</p>
      <h2>Disciplinary</h2>
      <ul><li>Two yellow cards issued to Colorado Rapids players.</li></ul>
      <p>For more MLS coverage, see the <Link href="/mls" className="text-blue-600 hover:text-blue-800 underline">oWire MLS hub</Link>.</p>
    </SportArticle>
  );
}