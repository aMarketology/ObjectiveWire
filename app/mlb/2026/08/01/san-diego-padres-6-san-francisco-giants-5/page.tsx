import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mlb/2026/08/01/san-diego-padres-6-san-francisco-giants-5';
const OG_IMAGE = '/thumbnails/mlb-2026-08-01-san-diego-padres-6-san-francisco-giants-5.jpg';

const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Padres 6, Giants 5 | San Diego Holds On in Wild Petco Park Battle',
  description:
    'In a classic West Coast rivalry game, the San Diego Padres held off the San Francisco Giants by a single run in a wild, back-and-forth battle at Petco Park.',
  keywords: ['MLB', 'August 1 2026', 'Game Recap'],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Padres 6, Giants 5 | San Diego Holds On in Wild Petco Park Battle',
    description:
      'In a classic West Coast rivalry game, the San Diego Padres held off the San Francisco Giants by a single run in a wild, back-and-forth battle at Petco Park.',
    type: 'article', url: ARTICLE_URL, siteName: 'Objective Wire',
    authors: ['Carson Scott'], publishedTime: '2026-08-01T20:00:00Z', modifiedTime: '2026-08-01T20:00:00Z',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    section: 'MLB', tags: ['MLB', 'Padres', 'Giants', 'San Diego'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Padres 6, Giants 5 | San Diego Holds On in Wild Petco Park Battle',
    description: 'In a classic West Coast rivalry game, the San Diego Padres held off the San Francisco Giants by a single run in a wild, back-and-forth battle at Petco Park.',
    images: [OG_IMAGE],
  },
};
export default function PadresGiantsPage() {
  return (
    <SportArticle
      title="San Diego Padres 6, San Francisco Giants 5 | Wild West Coast Rivalry Thriller"
      subtitle="In a classic West Coast rivalry game, the San Diego Padres held off the San Francisco Giants by a single run in a wild, back-and-forth battle at Petco Park."
      category="MLB" categoryColor="blue" topicTag="sports"
      publishDate="August 1, 2026" readTime="3 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG} url={SLUG}
      tags={['MLB', 'Padres', 'Giants', 'San Diego']}
      breadcrumbs={[{ name: 'Home', item: '/' }, { name: 'MLB', item: '/mlb' }, { name: 'Aug 1, 2026', item: SLUG }]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="6-5" subtext="SD wins" color="blue" />
        <SportStat metric="Margin" value="One Run" subtext="Clutch pitching" color="orange" />
        <SportStat metric="Venue" value="Petco Park" subtext="San Diego, CA" color="gray" />
      </SportStatRow>
      <p>The San Diego Padres and San Francisco Giants delivered a classic West Coast battle on Saturday night, with the Padres ultimately prevailing 6-5 in a back-and-forth thriller at Petco Park.</p>
      <p>The lead changed hands multiple times as both teams traded blows, but San Diego's bullpen made the pitches it needed to in the late innings, preserving a one-run advantage against a dangerous Giants lineup. The win is crucial for the Padres as they chase the Dodgers in the NL West and fend off the Giants in a tight divisional race.</p>
      <p>For more MLB coverage, see the <Link href="/mlb" className="text-blue-600 hover:text-blue-800 underline">oWire MLB hub</Link>.</p>
    </SportArticle>
  );
}