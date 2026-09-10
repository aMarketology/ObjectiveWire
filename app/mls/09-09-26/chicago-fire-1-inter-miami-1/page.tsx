import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mls/09-09-26/chicago-fire-1-inter-miami-1';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/mls-09-09-26-chicago-fire-1-inter-miami-1.jpg';

export const metadata: Metadata = {
  title: 'Chicago Fire 1, Inter Miami 1 | Lewandowski, Casemiro Trade Goals',
  description: 'Robert Lewandowski opened the scoring for Chicago in the 10th minute, but Casemiro headed home a Messi corner in the 48th as Chicago and Inter Miami settled for a 1-1 draw at Soldier Field.',
  keywords: ['Chicago Fire', 'Inter Miami', 'Robert Lewandowski', 'Casemiro', 'Lionel Messi', 'MLS September 2026'],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Fire 1, Inter Miami 1 | Lewandowski-Casemiro Draw at Soldier Field',
    description: 'Lewandowski scored early for Chicago, but Casemiro answered from a Messi corner early in the second half as the sides shared the points.',
    type: 'article', url: ARTICLE_URL, siteName: 'Objective Wire',
    authors: ['Carson Scott'], publishedTime: '2026-09-09T23:00:00Z', modifiedTime: '2026-09-09T23:00:00Z',
    section: 'MLS', tags: ['MLS', 'Chicago Fire', 'Inter Miami', 'Robert Lewandowski', 'Casemiro'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Fire 1, Inter Miami 1 | Lewandowski, Casemiro Share the Spoils', description: 'A marquee clash at Soldier Field ended all square after goals from Lewandowski and Casemiro.', images: [OG_IMAGE] },
};

export default function ChicagoMiamiPage() {
  return (
    <SportArticle
      title="Chicago Fire 1, Inter Miami 1 | Lewandowski and Casemiro Trade Goals in Marquee Draw"
      subtitle="A marquee clash at Soldier Field saw Robert Lewandowski open the scoring for Chicago in the 10th minute with a strike off an Andrew Gutman cross. Inter Miami leveled early in the second half when Casemiro headed home a corner delivered by Lionel Messi."
      category="MLS" categoryColor="blue" topicTag="sports"
      publishDate="September 9, 2026" publishedTime="2026-09-09T23:00:00Z" readTime="2 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG} url={SLUG}
      tags={['MLS', 'Chicago Fire', 'Inter Miami', 'Robert Lewandowski', 'Casemiro']}
      breadcrumbs={[{ name: 'Home', item: '/' }, { name: 'MLS', item: '/mls' }, { name: 'Chicago 1-1 Miami', item: SLUG }]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="1-1" subtext="Draw" color="blue" />
        <SportStat metric="Goal" value="Lewandowski" subtext="10th minute" color="green" />
        <SportStat metric="Goal" value="Casemiro" subtext="48th minute, Messi corner" color="orange" />
        <SportStat metric="Venue" value="Soldier Field" subtext="Chicago, IL" color="gray" />
      </SportStatRow>
      <p>A marquee clash at Soldier Field lived up to its billing as <strong>Robert Lewandowski</strong> opened the scoring for Chicago in the 10th minute with a strike off an Andrew Gutman cross. Inter Miami leveled early in the second half when <strong>Casemiro</strong> headed home a corner delivered by <strong>Lionel Messi</strong>. Both sides traded chances in the second half but settled for a 1-1 draw.</p>
      <h2>Goalscorers</h2>
      <ul><li>Robert Lewandowski (10') — Chicago Fire</li><li>Casemiro (48') — Inter Miami</li></ul>
      <h2>Disciplinary</h2>
      <ul><li>Five total yellow cards (Miami: Segovia, Falcón, Berterame; Chicago: Dean, D'Avilla).</li></ul>
      <p>For more MLS coverage, see the <Link href="/mls" className="text-blue-600 hover:text-blue-800 underline">oWire MLS hub</Link>.</p>
    </SportArticle>
  );
}