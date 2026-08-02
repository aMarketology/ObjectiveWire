import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mlb/2026/08/01/atlanta-braves-8-washington-nationals-3';
const OG_IMAGE = '/thumbnails/mlb-2026-08-01-atlanta-braves-8-washington-nationals-3.jpg';

const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Braves 8, Nationals 3 | Martin Perez Dazzles, Smith and Olson Homer',
  description:
    'Martin Perez tossed seven strong one-hit innings, while home runs from Dom Smith and Matt Olson sparked an 8-run Braves outburst at Truist Park.',
  keywords: ['MLB', 'August 1 2026', 'Game Recap'],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Braves 8, Nationals 3 | Martin Perez Dazzles, Smith and Olson Homer',
    description:
      'Martin Perez tossed seven strong one-hit innings, while home runs from Dom Smith and Matt Olson sparked an 8-run Braves outburst at Truist Park.',
    type: 'article', url: ARTICLE_URL, siteName: 'Objective Wire',
    authors: ['Carson Scott'], publishedTime: '2026-08-01T20:00:00Z', modifiedTime: '2026-08-01T20:00:00Z',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    section: 'MLB', tags: ['MLB', 'Braves', 'Nationals', 'Atlanta'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Braves 8, Nationals 3 | Martin Perez Dazzles, Smith and Olson Homer',
    description: 'Martin Perez tossed seven strong one-hit innings, while home runs from Dom Smith and Matt Olson sparked an 8-run Braves outburst at Truist Park.',
    images: [OG_IMAGE],
  },
};
export default function BravesNationalsPage() {
  return (
    <SportArticle
      title="Atlanta Braves 8, Washington Nationals 3 | Pérez Deals, Bats Erupt"
      subtitle="Martin Pérez tossed seven strong one-hit innings, while home runs from Dom Smith and Matt Olson sparked an 8-run Braves outburst at Truist Park."
      category="MLB" categoryColor="blue" topicTag="sports"
      publishDate="August 1, 2026" readTime="3 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG} url={SLUG}
      tags={['MLB', 'Braves', 'Nationals', 'Atlanta']}
      breadcrumbs={[{ name: 'Home', item: '/' }, { name: 'MLB', item: '/mlb' }, { name: 'Aug 1, 2026', item: SLUG }]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="8-3" subtext="ATL wins" color="blue" />
        <SportStat metric="Key Arm" value="M. Pérez" subtext="7 IP, 1 H, 0 ER" color="green" />
        <SportStat metric="Venue" value="Truist Park" subtext="Atlanta, GA" color="gray" />
      </SportStatRow>
      <p>The Atlanta Braves got a masterful start from Martin Pérez and a pair of home runs from Dom Smith and Matt Olson to power past the Washington Nationals 8-3 at Truist Park on Saturday.</p>
      <p>Pérez was in complete command from the first pitch, allowing just one hit across seven innings while keeping Washington's lineup off balance with a mix of pitches and precise location. The Braves offense gave him all the support he needed, with Smith and Olson providing the big swings that put the game out of reach. The win keeps Atlanta in the thick of the NL East race behind Philadelphia.</p>
      <p>For more MLB coverage, see the <Link href="/mlb" className="text-blue-600 hover:text-blue-800 underline">oWire MLB hub</Link>.</p>
    </SportArticle>
  );
}