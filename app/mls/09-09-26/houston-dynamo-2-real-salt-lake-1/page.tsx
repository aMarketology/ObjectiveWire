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
    
          
                <div className="mt-6">
        <a
          href="https://www.youtube.com/watch?v=CCwo1uf-69A"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          Watch Highlights on YouTube
        </a>
      </div>
    </SportArticle>
  );
}