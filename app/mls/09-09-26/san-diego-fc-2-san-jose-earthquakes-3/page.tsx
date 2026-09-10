import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mls/09-09-26/san-diego-fc-2-san-jose-earthquakes-3';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/mls-09-09-26-san-diego-fc-2-san-jose-earthquakes-3.jpg';

export const metadata: Metadata = {
  title: 'Earthquakes 3, San Diego FC 2 | Rivalry Thriller with Two Red Cards',
  description:
    'The San Jose Earthquakes edged expansion side San Diego FC 3-2 in a thrilling rivalry match at Snapdragon Stadium, with both sides finishing with 10 men after second yellow cards.',
  keywords: [
    'San Jose Earthquakes San Diego FC 3-2',
    'MLS rivalry match',
    'Snapdragon Stadium San Diego',
    'two red cards MLS',
    'San Diego expansion team 2026',
    'MLS September 9 2026',
    'California Clasico MLS',
    'MLS Western Conference expansion',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Earthquakes 3, San Diego FC 2 | Rivalry Thriller Ends with 10 Men on Each Side',
    description:
      'A wild California rivalry match at Snapdragon Stadium saw the Earthquakes edge San Diego FC 3-2 in a fiery contest that produced 10 total bookings and two red cards.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Carson Scott'],
    publishedTime: '2026-09-10T04:00:00Z',
    modifiedTime: '2026-09-10T04:00:00Z',
    section: 'MLS',
    tags: ['MLS', 'San Jose Earthquakes', 'San Diego FC', 'Rivalry', 'Red Cards'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Earthquakes 3, San Diego FC 2 | Five Goals, Two Red Cards, Pure Chaos',
    description:
      'San Jose edged San Diego in a wild California rivalry match that saw both teams reduced to 10 men and produced 10 total yellow cards.',
    images: [OG_IMAGE],
  },
};

export default function SanDiegoSanJosePage() {
  return (
    <SportArticle
      title="San Diego FC 2, San Jose Earthquakes 3 | Wild Rivalry Thriller Ends with Both Sides Down to 10"
      subtitle="A thrilling, high-scoring rivalry match at Snapdragon Stadium saw the San Jose Earthquakes edge expansion side San Diego FC 3-2. Both squads pushed forward in an open, back-and-forth contest marked by mounting disciplinary trouble, with both teams finishing with 10 men after second yellow cards."
      category="MLS"
      categoryColor="blue"
      topicTag="sports"
      publishDate="September 9, 2026"
      readTime="3 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG}
      url={SLUG}
      tags={['MLS', 'San Jose Earthquakes', 'San Diego FC', 'Rivalry', 'Red Cards']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'MLS', item: '/mls' },
        { name: 'San Diego 2-3 San Jose', item: SLUG },
      ]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="3-2" subtext="SJ wins" color="blue" />
        <SportStat metric="Red Cards" value="2" subtext="SD 80', SJ 90+3'" color="red" />
        <SportStat metric="Yellow Cards" value="10" subtext="Chaotic match" color="orange" />
        <SportStat metric="Venue" value="Snapdragon Stadium" subtext="San Diego, CA" color="gray" />
      </SportStatRow>

      <p>
        The California rivalry delivered a chaotic, unforgettable spectacle at Snapdragon Stadium as the San Jose
        Earthquakes edged expansion side San Diego FC 3-2 in a match that produced five goals, 10 yellow cards, and
        two red cards. Both squads pushed forward in an open, back-and-forth contest that never lacked for
        incident or intensity.
      </p>

      <p>
        San Diego suffered a setback in the 80th minute when a player received a second yellow card, reducing the
        hosts to 10 men. But San Jose followed suit in stoppage time, with a player also receiving a second yellow
        in the 93rd minute, leaving both sides down a man for the frantic closing moments. The Earthquakes held on
        through a fiery finish to secure all three points on the road in one of the most eventful matches of the
        MLS season.
      </p>

      <h2>Goalscorers</h2>
      <ul>
        <li>5 total goals scored in a 3-2 road victory for San Jose.</li>
      </ul>

      <h2>Disciplinary</h2>
      <ul>
        <li>Red cards via second yellows issued to San Diego (80') and San Jose (90+3').</li>
        <li>10 total bookings across both sides.</li>
      </ul>

      <p>
        For more MLS coverage, see the{' '}
        <Link href="/mls" className="text-blue-600 hover:text-blue-800 underline">
          oWire MLS hub
        </Link>.
      </p>
    </SportArticle>
  );
}