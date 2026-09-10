import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mls/09-09-26/atlanta-united-2-orlando-city-3';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/mls-09-09-26-atlanta-united-2-orlando-city-3.jpg';

export const metadata: Metadata = {
  title: 'Orlando City 3, Atlanta United 2 | Griezmann Brace Wins Rivalry',
  description:
    'Antoine Griezmann scored twice as Orlando City defeated Atlanta United 3-2 at Mercedes-Benz Stadium in a wild rivalry match featuring two own goals by Orlando.',
  keywords: ['Orlando City', 'Atlanta United', 'Antoine Griezmann', 'MLS September 2026', 'MLS recap'],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Orlando City 3, Atlanta United 2 | Griezmann Brace Decides Derby',
    description: 'Griezmann scored twice, including the winner in the 77th minute, as Orlando held off Atlanta despite two own goals in a five-goal thriller.',
    type: 'article', url: ARTICLE_URL, siteName: 'Objective Wire',
    authors: ['Carson Scott'], publishedTime: '2026-09-09T23:00:00Z', modifiedTime: '2026-09-09T23:00:00Z',
    section: 'MLS', tags: ['MLS', 'Orlando City', 'Atlanta United', 'Antoine Griezmann'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Orlando City 3, Atlanta United 2 | Griezmann Brace Wins It', description: 'A five-goal thriller at Mercedes-Benz Stadium with two own goals and a Griezmann masterclass.', images: [OG_IMAGE] },
};

export default function AtlantaOrlandoPage() {
  return (
    <SportArticle
      title="Atlanta United 2, Orlando City 3 | Griezmann Brace Wins Wild Rivalry Match"
      subtitle="An intense rivalry duel at Mercedes-Benz Stadium featured star power and bizarre fortune. Antoine Griezmann scored twice for Orlando City, including the winner in the 77th minute, as the Lions held off Atlanta United despite conceding two own goals."
      category="MLS" categoryColor="blue" topicTag="sports"
      publishDate="September 9, 2026" publishedTime="2026-09-09T23:00:00Z" readTime="3 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG} url={SLUG}
      tags={['MLS', 'Orlando City', 'Atlanta United', 'Antoine Griezmann']}
      breadcrumbs={[{ name: 'Home', item: '/' }, { name: 'MLS', item: '/mls' }, { name: 'Atlanta 2-3 Orlando', item: SLUG }]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="3-2" subtext="ORL wins" color="blue" />
        <SportStat metric="Brace" value="Griezmann" subtext="26', 77'" color="green" />
        <SportStat metric="Own Goals" value="2" subtext="Both by Orlando" color="orange" />
        <SportStat metric="Venue" value="Mercedes-Benz Stadium" subtext="Atlanta, GA" color="gray" />
      </SportStatRow>

      <p>Orlando City emerged victorious from a wild rivalry clash at Mercedes-Benz Stadium, defeating Atlanta United 3-2 in a match that featured two own goals from the visitors and a brace from star forward <strong>Antoine Griezmann</strong>.</p>

      <p>Atlanta took an early lead in the 7th minute via an Orlando own goal, but Griezmann leveled the score in the 26th minute, sliding to poke home a cross from Griffin Dorsey. Orlando went ahead 2-1 in the 58th minute when <strong>Iván Angulo</strong> finished a short tap from Martín Ojeda.</p>

      <p>Griezmann added his second in the 77th minute off a quick give-and-go with Justin Ellis to build a 3-1 lead. Atlanta pulled one back via a second Orlando own goal deep in stoppage time (90+7'), but Orlando held firm to claim all three points.</p>

      <h2>Goalscorers</h2>
      <ul>
        <li>Antoine Griezmann (26', 77') — Orlando City</li>
        <li>Iván Angulo (58') — Orlando City</li>
        <li>Own Goals (7', 90+7') — Atlanta United</li>
      </ul>

      <h2>Disciplinary</h2>
      <ul>
        <li>Tactical yellow cards issued to maintain physical intensity; no red cards.</li>
      </ul>

      <p>For more MLS coverage, see the <Link href="/mls" className="text-blue-600 hover:text-blue-800 underline">oWire MLS hub</Link>.</p>
    
          
                <div className="mt-6">
        <a
          href="https://www.youtube.com/watch?v=80y0fh8XSyI"
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