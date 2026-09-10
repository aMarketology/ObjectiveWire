import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mls/09-09-26/cf-montreal-1-charlotte-fc-2';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/mls-09-09-26-cf-montreal-1-charlotte-fc-2.jpg';

export const metadata: Metadata = {
  title: 'Charlotte FC 2, CF Montréal 1 | Hard-Fought Road Win',
  description: 'Charlotte FC earned a hard-fought 2-1 road win against CF Montréal in a rainy encounter at Stade Saputo, controlling long stretches of the physical contest.',
  keywords: ['Charlotte FC', 'CF Montréal', 'MLS September 2026', 'MLS recap'],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Charlotte FC 2, CF Montréal 1 | Road Win in the Rain',
    description: 'Charlotte controlled long stretches of a rainy, physical contest at Stade Saputo to take all three points.',
    type: 'article', url: ARTICLE_URL, siteName: 'Objective Wire',
    authors: ['Carson Scott'], publishedTime: '2026-09-09T23:00:00Z', modifiedTime: '2026-09-09T23:00:00Z',
    section: 'MLS', tags: ['MLS', 'Charlotte FC', 'CF Montréal'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Charlotte FC 2, Montréal 1 | Road Win', description: 'Charlotte earned a hard-fought 2-1 victory in rainy conditions at Stade Saputo.', images: [OG_IMAGE] },
};

export default function MontrealCharlottePage() {
  return (
    <SportArticle
      title="CF Montréal 1, Charlotte FC 2 | Charlotte Earns Hard-Fought Road Win"
      subtitle="In a rainy encounter at Stade Saputo, Charlotte FC earned a hard-fought 2-1 road win against CF Montréal. Charlotte controlled long stretches of the physical contest, responding well to Montreal pressure to secure all three points."
      category="MLS" categoryColor="blue" topicTag="sports"
      publishDate="September 9, 2026" publishedTime="2026-09-09T23:00:00Z" readTime="2 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG} url={SLUG}
      tags={['MLS', 'Charlotte FC', 'CF Montréal']}
      breadcrumbs={[{ name: 'Home', item: '/' }, { name: 'MLS', item: '/mls' }, { name: 'Montreal 1-2 Charlotte', item: SLUG }]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="2-1" subtext="CLT wins" color="blue" />
        <SportStat metric="Venue" value="Stade Saputo" subtext="Montreal, QC" color="gray" />
      </SportStatRow>
      <p>Charlotte FC secured a valuable road victory in rainy conditions at Stade Saputo, defeating CF Montréal 2-1. Charlotte controlled long stretches of the physical contest, responding well to Montreal pressure to secure all three points on the road.</p>
      <h2>Disciplinary</h2>
      <ul><li>Three yellow cards issued throughout the match.</li></ul>
      <p>For more MLS coverage, see the <Link href="/mls" className="text-blue-600 hover:text-blue-800 underline">oWire MLS hub</Link>.</p>
    
          
                <div className="mt-6">
        <a
          href="https://www.youtube.com/watch?v=ILV_Lt5oDak"
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