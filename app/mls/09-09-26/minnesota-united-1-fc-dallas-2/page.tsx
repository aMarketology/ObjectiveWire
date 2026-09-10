import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mls/09-09-26/minnesota-united-1-fc-dallas-2';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/mls-09-09-26-minnesota-united-1-fc-dallas-2.jpg';

export const metadata: Metadata = {
  title: 'FC Dallas 2, Minnesota United 1 | Effective Road Performance',
  description: 'FC Dallas produced an effective road performance at Allianz Field, overcoming Minnesota United 2-1 with key chances on the counter.',
  keywords: ['FC Dallas', 'Minnesota United', 'MLS September 2026', 'MLS recap'],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'FC Dallas 2, Minnesota 1 | Road Win at Allianz Field',
    description: 'Dallas created key chances on the counter and withstood late pressure to close out a 2-1 victory in Minnesota.',
    type: 'article', url: ARTICLE_URL, siteName: 'Objective Wire',
    authors: ['Carson Scott'], publishedTime: '2026-09-09T23:30:00Z', modifiedTime: '2026-09-09T23:30:00Z',
    section: 'MLS', tags: ['MLS', 'FC Dallas', 'Minnesota United'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'FC Dallas 2, Minnesota 1 | Road Win', description: 'Dallas produced an effective road performance at Allianz Field to take all three points.', images: [OG_IMAGE] },
};

export default function MinnesotaDallasPage() {
  return (
    <SportArticle
      title="Minnesota United 1, FC Dallas 2 | Dallas Takes All Three Points on the Road"
      subtitle="FC Dallas produced an effective road performance at Allianz Field, overcoming Minnesota United 2-1. Dallas created key chances on the counter and withstood late pressure from the hosts to close out the victory."
      category="MLS" categoryColor="blue" topicTag="sports"
      publishDate="September 9, 2026" publishedTime="2026-09-09T23:30:00Z" readTime="2 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG} url={SLUG}
      tags={['MLS', 'FC Dallas', 'Minnesota United']}
      breadcrumbs={[{ name: 'Home', item: '/' }, { name: 'MLS', item: '/mls' }, { name: 'Minnesota 1-2 Dallas', item: SLUG }]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="2-1" subtext="DAL wins" color="blue" />
        <SportStat metric="Yellow Cards" value="4" subtext="2 each" color="orange" />
        <SportStat metric="Venue" value="Allianz Field" subtext="St. Paul, MN" color="gray" />
      </SportStatRow>
      <p>FC Dallas produced an effective road performance at Allianz Field, overcoming Minnesota United 2-1. Dallas created key chances on the counter and withstood late pressure from the hosts to close out the victory and take all three points.</p>
      <h2>Disciplinary</h2>
      <ul><li>Four yellow cards split evenly between both teams.</li></ul>
      <p>For more MLS coverage, see the <Link href="/mls" className="text-blue-600 hover:text-blue-800 underline">oWire MLS hub</Link>.</p>
    </SportArticle>
  );
}