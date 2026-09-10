import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mls/09-09-26/nycfc-1-new-england-revolution-2';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/mls-09-09-26-nycfc-1-new-england-revolution-2.jpg';

export const metadata: Metadata = {
  title: 'New England Revolution 2, NYCFC 1 | Gazdag Stoppage-Time Winner',
  description: 'Dániel Gazdag scored in the 93rd minute to give the New England Revolution a 2-1 comeback victory over NYCFC at Citi Field after Carles Gil opened with a penalty.',
  keywords: ['New England Revolution', 'NYCFC', 'Daniel Gazdag', 'Carles Gil', 'MLS September 2026', 'MLS recap'],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Revolution 2, NYCFC 1 | Gazdag Strikes in Stoppage Time',
    description: 'Substitute Dániel Gazdag found the net in the 93rd minute to deliver a thrilling 2-1 victory for New England at Citi Field.',
    type: 'article', url: ARTICLE_URL, siteName: 'Objective Wire',
    authors: ['Carson Scott'], publishedTime: '2026-09-09T22:30:00Z', modifiedTime: '2026-09-09T22:30:00Z',
    section: 'MLS', tags: ['MLS', 'New England Revolution', 'NYCFC', 'Carles Gil'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Revolution 2, NYCFC 1 | Gazdag 93rd-Minute Winner', description: 'New England rallied from a 1-0 deficit with a stoppage-time winner at Citi Field.', images: [OG_IMAGE] },
};

export default function NYCFCNewEnglandPage() {
  return (
    <SportArticle
      title="New York City FC 1, New England Revolution 2 | Gazdag Stoppage-Time Winner"
      subtitle="New England took an early lead at Citi Field when Carles Gil converted a 12th-minute penalty. NYCFC leveled in the 71st minute through substitute Luighi, but substitute Dániel Gazdag found the back of the net in the 93rd minute to deliver a thrilling 2-1 victory for the Revolution."
      category="MLS" categoryColor="blue" topicTag="sports"
      publishDate="September 9, 2026" publishedTime="2026-09-09T22:30:00Z" readTime="2 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG} url={SLUG}
      tags={['MLS', 'New England Revolution', 'NYCFC', 'Carles Gil']}
      breadcrumbs={[{ name: 'Home', item: '/' }, { name: 'MLS', item: '/mls' }, { name: 'NYCFC 1-2 NE', item: SLUG }]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="2-1" subtext="NE wins" color="blue" />
        <SportStat metric="Winner" value="90+3'" subtext="Gazdag" color="orange" />
        <SportStat metric="Penalty" value="Gil" subtext="12th minute" color="green" />
        <SportStat metric="Venue" value="Citi Field" subtext="New York, NY" color="gray" />
      </SportStatRow>
      <p>The New England Revolution snatched a dramatic 2-1 victory at Citi Field, with substitute <strong>Dániel Gazdag</strong> scoring in the 93rd minute. <strong>Carles Gil</strong> had opened the scoring from the penalty spot in the 12th minute, but NYCFC substitute <strong>Luighi</strong> leveled in the 71st minute before Gazdag delivered the winner.</p>
      <h2>Goalscorers</h2>
      <ul><li>Luighi (71') — NYCFC</li><li>Carles Gil (12' PEN), Dániel Gazdag (90+3') — New England</li></ul>
      <h2>Disciplinary</h2>
      <ul><li>Alhassan Yusuf (18'), Matt Polster (31') — New England yellow cards</li></ul>
      <p>For more MLS coverage, see the <Link href="/mls" className="text-blue-600 hover:text-blue-800 underline">oWire MLS hub</Link>.</p>
    
          
                <div className="mt-6">
        <a
          href="https://www.youtube.com/watch?v=ObjT9RsHtWA"
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