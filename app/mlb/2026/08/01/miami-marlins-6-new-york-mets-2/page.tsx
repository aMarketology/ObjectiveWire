import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mlb/2026/08/01/miami-marlins-6-new-york-mets-2';
const OG_IMAGE = '/thumbnails/mlb-2026-08-01-miami-marlins-6-new-york-mets-2.jpg';

const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Marlins 6, Mets 2 | Miami Offense Erupts Early in New York',
  description:
    'Miami used an early offensive attack and strong starter work to hand the New York Mets a disappointing home loss at Citi Field.',
  keywords: ['MLB', 'August 1 2026', 'Game Recap'],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Marlins 6, Mets 2 | Miami Offense Erupts Early in New York',
    description:
      'Miami used an early offensive attack and strong starter work to hand the New York Mets a disappointing home loss at Citi Field.',
    type: 'article', url: ARTICLE_URL, siteName: 'Objective Wire',
    authors: ['Carson Scott'], publishedTime: '2026-08-01T20:00:00Z', modifiedTime: '2026-08-01T20:00:00Z',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    section: 'MLB', tags: ['MLB', 'Marlins', 'Mets', 'Miami'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marlins 6, Mets 2 | Miami Offense Erupts Early in New York',
    description: 'Miami used an early offensive attack and strong starter work to hand the New York Mets a disappointing home loss at Citi Field.',
    images: [OG_IMAGE],
  },
};
export default function MarlinsMetsPage() {
  return (
    <SportArticle
      title="Miami Marlins 6, New York Mets 2 | Early Attack Stuns Citi Field"
      subtitle="Miami used an early offensive attack and strong starter work to hand the New York Mets a disappointing home loss at Citi Field."
      category="MLB" categoryColor="blue" topicTag="sports"
      publishDate="August 1, 2026" readTime="3 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG} url={SLUG}
      tags={['MLB', 'Marlins', 'Mets', 'Miami']}
      breadcrumbs={[{ name: 'Home', item: '/' }, { name: 'MLB', item: '/mlb' }, { name: 'Aug 1, 2026', item: SLUG }]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="6-2" subtext="MIA wins" color="blue" />
        <SportStat metric="Key Factor" value="Early Offense" subtext="Multi-run first" color="orange" />
        <SportStat metric="Venue" value="Citi Field" subtext="New York, NY" color="gray" />
      </SportStatRow>
      <p>The Miami Marlins came out swinging in New York, launching an early offensive assault against the Mets that set the tone for a 6-2 victory at Citi Field. Miami's starter kept New York's lineup off balance throughout the outing, allowing the Marlins to build an early lead and cruise to a comfortable road win.</p>
      <p>The Mets never recovered from Miami's early scoring burst, managing only two runs against a Marlins pitching staff that maintained control from the first inning onward. The loss drops the Mets further back in a crowded National League wild card chase.</p>
      <p>For more MLB coverage, see the <Link href="/mlb" className="text-blue-600 hover:text-blue-800 underline">oWire MLB hub</Link>.</p>
    </SportArticle>
  );
}