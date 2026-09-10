import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mls/09-09-26/toronto-fc-2-nashville-sc-1';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/mls-09-09-26-toronto-fc-2-nashville-sc-1.jpg';

export const metadata: Metadata = {
  title: 'Toronto FC 2, Nashville SC 1 | Late Comeback Extends Unbeaten Run',
  description:
    'Toronto FC rallied from an early own goal to defeat Eastern Conference leaders Nashville SC 2-1 at BMO Field, extending their unbeaten run to seven matches with a stoppage-time winner.',
  keywords: ['Toronto FC', 'Nashville SC', 'MLS September 2026', 'Toronto unbeaten run', 'MLS recap'],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Toronto FC 2, Nashville SC 1 | Stoppage-Time Winner Extends Streak',
    description: 'Toronto rallied from an early own goal to beat Eastern Conference leaders Nashville 2-1, extending their unbeaten run to seven matches.',
    type: 'article', url: ARTICLE_URL, siteName: 'Objective Wire',
    authors: ['Carson Scott'], publishedTime: '2026-09-09T23:30:00Z', modifiedTime: '2026-09-09T23:30:00Z',
    section: 'MLS', tags: ['MLS', 'Toronto FC', 'Nashville SC', 'MLS Eastern Conference'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Toronto FC 2, Nashville SC 1 | Seven Unbeaten', description: 'Toronto came from behind with a 90+3 winner to extend their run and close the gap on Nashville in the East.', images: [OG_IMAGE] },
};

export default function TorontoNashvillePage() {
  return (
    <SportArticle
      title="Toronto FC 2, Nashville SC 1 | Stoppage-Time Winner Extends Unbeaten Run to Seven"
      subtitle="Toronto FC pulled off a dramatic second-half comeback at BMO Field against Eastern Conference leaders Nashville SC, rallying from an early own goal to win 2-1 on a stoppage-time strike from substitute Emilio Aristizabal."
      category="MLS" categoryColor="blue" topicTag="sports"
      publishDate="September 9, 2026" publishedTime="2026-09-09T23:30:00Z" readTime="3 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG} url={SLUG}
      tags={['MLS', 'Toronto FC', 'Nashville SC', 'MLS Eastern Conference']}
      breadcrumbs={[{ name: 'Home', item: '/' }, { name: 'MLS', item: '/mls' }, { name: 'Toronto 2-1 Nashville', item: SLUG }]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="2-1" subtext="TOR wins" color="blue" />
        <SportStat metric="Unbeaten" value="7" subtext="Toronto streak" color="green" />
        <SportStat metric="Winner" value="90+3'" subtext="Aristizabal" color="orange" />
        <SportStat metric="Venue" value="BMO Field" subtext="Toronto, ON" color="gray" />
      </SportStatRow>

      <p>Toronto FC extended their unbeaten run to seven matches with a dramatic 2-1 comeback victory over Eastern Conference leaders Nashville SC at BMO Field. The match opened with a costly miscommunication in the 3rd minute, as Toronto midfielder <strong>Niklas Dorsch</strong> sent a short backpass past goalkeeper Luka Gavran for an own goal, handing Nashville an early lead.</p>

      <p>Toronto rallied in the second half. <strong>Dániel Sallói</strong> brought TFC level in the 72nd minute, finishing a low goal-line cross from substitute Theo Corbeanu. The equalizer energized the home crowd and shifted momentum firmly in Toronto favor.</p>

      <p>In the 90+3rd minute, substitute <strong>Emilio Aristizábal</strong> knocked in a close-range winner to secure a 2-1 victory, sending BMO Field into celebration. The result keeps Toronto in striking distance of Nashville at the top of the Eastern Conference standings.</p>

      <h2>Goalscorers</h2>
      <ul>
        <li>Dániel Sallói (72') — Toronto FC</li>
        <li>Emilio Aristizábal (90+3') — Toronto FC</li>
        <li>Niklas Dorsch (3' OG) — Nashville SC</li>
      </ul>

      <h2>Disciplinary</h2>
      <ul>
        <li>Luka Gavran (Toronto FC) — Yellow card for time-wasting (90+7')</li>
      </ul>

      <p>For more MLS coverage, see the <Link href="/mls" className="text-blue-600 hover:text-blue-800 underline">oWire MLS hub</Link>.</p>
    
          
                <div className="mt-6">
        <a
          href="https://www.youtube.com/watch?v=LeDj2OSZrCs"
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