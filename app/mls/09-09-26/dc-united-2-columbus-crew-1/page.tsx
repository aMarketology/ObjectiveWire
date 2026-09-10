import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mls/09-09-26/dc-united-2-columbus-crew-1';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/mls-09-09-26-dc-united-2-columbus-crew-1.jpg';

export const metadata: Metadata = {
  title: 'D.C. United 2, Columbus Crew 1 | Tai Baribo Double Snaps Winless Streak',
  description: 'Tai Baribo scored twice in the first half as D.C. United snapped their winless streak with a 2-1 victory over the Columbus Crew at Audi Field.',
  keywords: ['D.C. United', 'Columbus Crew', 'Tai Baribo', 'MLS September 2026', 'MLS recap'],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'D.C. United 2, Columbus Crew 1 | Baribo Brace Ends Drought',
    description: 'Tai Baribo netted two first-half goals as D.C. United held off Columbus to snap their winless run at Audi Field.',
    type: 'article', url: ARTICLE_URL, siteName: 'Objective Wire',
    authors: ['Carson Scott'], publishedTime: '2026-09-09T22:00:00Z', modifiedTime: '2026-09-09T22:00:00Z',
    section: 'MLS', tags: ['MLS', 'D.C. United', 'Columbus Crew', 'Tai Baribo'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'D.C. United 2, Columbus 1 | Baribo Brace', description: 'Two first-half goals from Tai Baribo lifted D.C. United past Columbus at Audi Field.', images: [OG_IMAGE] },
};

export default function DCUnitedColumbusPage() {
  return (
    <SportArticle
      title="D.C. United 2, Columbus Crew 1 | Tai Baribo Brace Snaps Winless Streak"
      subtitle="D.C. United snapped their winless streak at Audi Field with a fast start against the visiting Columbus Crew. Striker Tai Baribo led the charge, netting two first-half goals to put the hosts in command."
      category="MLS" categoryColor="blue" topicTag="sports"
      publishDate="September 9, 2026" publishedTime="2026-09-09T22:00:00Z" readTime="2 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG} url={SLUG}
      tags={['MLS', 'D.C. United', 'Columbus Crew', 'Tai Baribo']}
      breadcrumbs={[{ name: 'Home', item: '/' }, { name: 'MLS', item: '/mls' }, { name: 'DC 2-1 Columbus', item: SLUG }]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="2-1" subtext="DC wins" color="blue" />
        <SportStat metric="Brace" value="Baribo" subtext="2 first-half goals" color="green" />
        <SportStat metric="Yellow Cards" value="5" subtext="Heated match" color="orange" />
        <SportStat metric="Venue" value="Audi Field" subtext="Washington, DC" color="gray" />
      </SportStatRow>
      <p>D.C. United snapped their winless streak with a determined performance at Audi Field, defeating the Columbus Crew 2-1. Striker <strong>Tai Baribo</strong> led the charge with two first-half goals, putting the hosts in command before Columbus pulled one back before the break. United defense held firm in a physical second half to secure all three points.</p>
      <h2>Goalscorers</h2>
      <ul><li>Tai Baribo (2 goals) — D.C. United</li><li>Columbus Crew — 1 goal</li></ul>
      <h2>Disciplinary</h2>
      <ul><li>Five total yellow cards issued across both sides in a heated battle.</li></ul>
      <p>For more MLS coverage, see the <Link href="/mls" className="text-blue-600 hover:text-blue-800 underline">oWire MLS hub</Link>.</p>
    
          
                <div className="mt-6">
        <a
          href="https://www.youtube.com/watch?v=2Wx96QmRpGk"
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