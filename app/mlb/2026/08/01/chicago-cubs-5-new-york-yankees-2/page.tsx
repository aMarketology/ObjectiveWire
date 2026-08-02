import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mlb/2026/08/01/chicago-cubs-5-new-york-yankees-2';
const OG_IMAGE = '/thumbnails/mlb-2026-08-01-chicago-cubs-5-new-york-yankees-2.jpg';

const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Cubs 5, Yankees 2 | Pete Crow-Armstrong Go-Ahead Triple Sparks Wrigley Win',
  description:
    'Pete Crow-Armstrong sparked a three-run 7th inning with a go-ahead RBI triple, leading the Chicago Cubs to a 5-2 victory over the New York Yankees at a windy Wrigley Field.',
  keywords: ['MLB', 'August 1 2026', 'Game Recap'],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Cubs 5, Yankees 2 | Pete Crow-Armstrong Go-Ahead Triple Sparks Wrigley Win',
    description:
      'Pete Crow-Armstrong sparked a three-run 7th inning with a go-ahead RBI triple, leading the Chicago Cubs to a 5-2 victory over the New York Yankees at a windy Wrigley Field.',
    type: 'article', url: ARTICLE_URL, siteName: 'Objective Wire',
    authors: ['Carson Scott'], publishedTime: '2026-08-01T20:00:00Z', modifiedTime: '2026-08-01T20:00:00Z',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    section: 'MLB', tags: ['MLB', 'Cubs', 'Yankees', 'Chicago'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cubs 5, Yankees 2 | Pete Crow-Armstrong Go-Ahead Triple Sparks Wrigley Win',
    description: 'Pete Crow-Armstrong sparked a three-run 7th inning with a go-ahead RBI triple, leading the Chicago Cubs to a 5-2 victory over the New York Yankees at a windy Wrigley Field.',
    images: [OG_IMAGE],
  },
};
export default function CubsYankeesPage() {
  return (
    <SportArticle
      title="Chicago Cubs 5, New York Yankees 2 | Crow-Armstrong Triple Stuns Yankees at Wrigley"
      subtitle="Pete Crow-Armstrong sparked a three-run 7th inning with a go-ahead RBI triple, leading the Chicago Cubs to a 5-2 victory over the New York Yankees at a windy Wrigley Field."
      category="MLB" categoryColor="blue" topicTag="sports"
      publishDate="August 1, 2026" readTime="3 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG} url={SLUG}
      tags={['MLB', 'Cubs', 'Yankees', 'Chicago']}
      breadcrumbs={[{ name: 'Home', item: '/' }, { name: 'MLB', item: '/mlb' }, { name: 'Aug 1, 2026', item: SLUG }]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="5-2" subtext="CHC wins" color="blue" />
        <SportStat metric="Hero" value="PCA" subtext="Go-ahead 3B in 7th" color="orange" />
        <SportStat metric="Venue" value="Wrigley Field" subtext="Chicago, IL" color="gray" />
      </SportStatRow>
      <p>Wrigley Field lived up to its reputation on Saturday as the Chicago Cubs used a wind-aided three-run seventh inning, sparked by a go-ahead RBI triple from Pete Crow-Armstrong, to defeat the New York Yankees 5-2.</p>
      <p>The game was tight through the middle innings before Crow-Armstrong stepped up with runners on base and launched a shot into the windy Chicago outfield that rolled to the wall, clearing the bases and putting the Cubs ahead for good. The Chicago bullpen made the lead stand, shutting down a dangerous Yankees lineup in the eighth and ninth. The loss is a blow to New York as they fight to keep pace with Tampa Bay in the AL East.</p>
      <p>For more MLB coverage, see the <Link href="/mlb" className="text-blue-600 hover:text-blue-800 underline">oWire MLB hub</Link>.</p>
    </SportArticle>
  );
}