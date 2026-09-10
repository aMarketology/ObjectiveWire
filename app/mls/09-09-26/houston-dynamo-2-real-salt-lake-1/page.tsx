import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mls/09-09-26/houston-dynamo-2-real-salt-lake-1';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/mls-09-09-26-houston-dynamo-2-real-salt-lake-1.jpg';

export const metadata: Metadata = {
  title: 'Houston Dynamo 2, Real Salt Lake 1 | Tight Victory at Shell Energy',
  description: 'Houston Dynamo pulled out a tight 2-1 victory over Real Salt Lake at Shell Energy Stadium in a foul-heavy, tactical match.',
  keywords: ['Houston Dynamo', 'Real Salt Lake', 'MLS September 2026', 'MLS recap'],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Dynamo 2, Real Salt Lake 1 | Houston Holds On at Home',
    description: 'Houston capitalized on key opportunities and held off a late RSL push to secure a 2-1 win at Shell Energy Stadium.',
    type: 'article', url: ARTICLE_URL, siteName: 'Objective Wire',
    authors: ['Carson Scott'], publishedTime: '2026-09-09T23:30:00Z', modifiedTime: '2026-09-09T23:30:00Z',
    section: 'MLS', tags: ['MLS', 'Houston Dynamo', 'Real Salt Lake'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Dynamo 2, RSL 1 | Houston Holds On', description: 'Houston Dynamo pulled out a tight 2-1 win over Real Salt Lake at Shell Energy Stadium.', images: [OG_IMAGE] },
};

export default function HoustonRSLPage() {
  return (
    <SportArticle
      title="Houston Dynamo 2, Real Salt Lake 1 | Tight Victory at Shell Energy Stadium"
      subtitle="Houston Dynamo FC pulled out a tight 2-1 victory over Real Salt Lake at Shell Energy Stadium in a foul-heavy, tactical match. The Dynamo capitalized on key opportunities while holding off a late RSL push."
      category="MLS" categoryColor="blue" topicTag="sports"
      publishDate="September 9, 2026" publishedTime="2026-09-09T23:30:00Z" readTime="2 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG} url={SLUG}
      tags={['MLS', 'Houston Dynamo', 'Real Salt Lake']}
      breadcrumbs={[{ name: 'Home', item: '/' }, { name: 'MLS', item: '/mls' }, { name: 'Houston 2-1 RSL', item: SLUG }]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="2-1" subtext="HOU wins" color="blue" />
        <SportStat metric="Yellow Cards" value="5" subtext="1 HOU, 4 RSL" color="orange" />
        <SportStat metric="Venue" value="Shell Energy Stadium" subtext="Houston, TX" color="gray" />
      </SportStatRow>
      <p>Houston Dynamo FC pulled out a tight 2-1 victory over Real Salt Lake at Shell Energy Stadium in a foul-heavy, tactical match. The Dynamo capitalized on key opportunities while holding off a late RSL push to secure all three points at home.</p>
      <h2>Disciplinary</h2>
      <ul><li>Five yellow cards recorded (1 for Houston, 4 for RSL).</li></ul>
      <p>For more MLS coverage, see the <Link href="/mls" className="text-blue-600 hover:text-blue-800 underline">oWire MLS hub</Link>.</p>
    </SportArticle>
  );
}