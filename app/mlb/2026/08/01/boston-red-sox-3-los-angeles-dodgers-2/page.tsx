import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mlb/2026/08/01/boston-red-sox-3-los-angeles-dodgers-2';
const OG_IMAGE = '/thumbnails/mlb-2026-08-01-boston-red-sox-3-los-angeles-dodgers-2.jpg';

const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Red Sox 3, Dodgers 2 | Boston Late-Inning Relief Stuns LA at Dodger Stadium',
  description:
    'The Boston Red Sox relied on stellar late-inning relief pitching to squeak out a thrilling 3-2 win over the Los Angeles Dodgers at Dodger Stadium.',
  keywords: ['MLB', 'August 1 2026', 'Game Recap'],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Red Sox 3, Dodgers 2 | Boston Late-Inning Relief Stuns LA at Dodger Stadium',
    description:
      'The Boston Red Sox relied on stellar late-inning relief pitching to squeak out a thrilling 3-2 win over the Los Angeles Dodgers at Dodger Stadium.',
    type: 'article', url: ARTICLE_URL, siteName: 'Objective Wire',
    authors: ['Carson Scott'], publishedTime: '2026-08-01T20:00:00Z', modifiedTime: '2026-08-01T20:00:00Z',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    section: 'MLB', tags: ['MLB', 'Red Sox', 'Dodgers', 'Boston', 'Los Angeles'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Red Sox 3, Dodgers 2 | Boston Late-Inning Relief Stuns LA at Dodger Stadium',
    description: 'The Boston Red Sox relied on stellar late-inning relief pitching to squeak out a thrilling 3-2 win over the Los Angeles Dodgers at Dodger Stadium.',
    images: [OG_IMAGE],
  },
};
export default function RedSoxDodgersPage() {
  return (
    <SportArticle
      title="Boston Red Sox 3, Los Angeles Dodgers 2 | Late-Inning Relief Delivers at Dodger Stadium"
      subtitle="The Boston Red Sox relied on stellar late-inning relief pitching to squeak out a thrilling 3-2 win over the Los Angeles Dodgers at Dodger Stadium."
      category="MLB" categoryColor="blue" topicTag="sports"
      publishDate="August 1, 2026" readTime="3 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG} url={SLUG}
      tags={['MLB', 'Red Sox', 'Dodgers', 'Boston', 'Los Angeles']}
      breadcrumbs={[{ name: 'Home', item: '/' }, { name: 'MLB', item: '/mlb' }, { name: 'Aug 1, 2026', item: SLUG }]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="3-2" subtext="BOS wins" color="blue" />
        <SportStat metric="Key Factor" value="Relief" subtext="Lockdown late innings" color="green" />
        <SportStat metric="Venue" value="Dodger Stadium" subtext="Los Angeles, CA" color="gray" />
      </SportStatRow>
      <p>The Boston Red Sox pulled off an impressive interleague road win on Saturday night, riding stellar late-inning relief pitching to a 3-2 victory over the Los Angeles Dodgers at Dodger Stadium.</p>
      <p>Boston's bullpen was the story of the game, coming on in the late innings and shutting down a Dodgers lineup that has been the most productive in baseball this season. The Red Sox offense did just enough early, and the relief corps made it stand, retiring the heart of Los Angeles's order in crucial spots. The win is a statement for Boston as they fight for position in the crowded AL East.</p>
      <p>For more MLB coverage, see the <Link href="/mlb" className="text-blue-600 hover:text-blue-800 underline">oWire MLB hub</Link>.</p>
    </SportArticle>
  );
}