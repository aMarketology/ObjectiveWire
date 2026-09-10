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
    </SportArticle>
  );
}