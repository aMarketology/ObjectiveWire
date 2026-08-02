import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mlb/2026/08/01/philadelphia-phillies-5-baltimore-orioles-0';
const OG_IMAGE = '/thumbnails/mlb-2026-08-01-philadelphia-phillies-5-baltimore-orioles-0.jpg';

const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Phillies 5, Orioles 0 | Philadelphia Shuts Out Baltimore at Camden Yards',
  description:
    'Philadelphia\'s rotation completely silenced Camden Yards, giving up virtually nothing to Baltimore in a commanding 5-0 shutout victory.',
  keywords: ['MLB', 'August 1 2026', 'Game Recap'],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Phillies 5, Orioles 0 | Philadelphia Shuts Out Baltimore at Camden Yards',
    description:
      'Philadelphia\'s rotation completely silenced Camden Yards, giving up virtually nothing to Baltimore in a commanding 5-0 shutout victory.',
    type: 'article', url: ARTICLE_URL, siteName: 'Objective Wire',
    authors: ['Carson Scott'], publishedTime: '2026-08-01T20:00:00Z', modifiedTime: '2026-08-01T20:00:00Z',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    section: 'MLB', tags: ['MLB', 'Phillies', 'Orioles', 'Philadelphia'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phillies 5, Orioles 0 | Philadelphia Shuts Out Baltimore at Camden Yards',
    description: 'Philadelphia\'s rotation completely silenced Camden Yards, giving up virtually nothing to Baltimore in a commanding 5-0 shutout victory.',
    images: [OG_IMAGE],
  },
};
export default function PhilliesOriolesPage() {
  return (
    <SportArticle
      title="Philadelphia Phillies 5, Baltimore Orioles 0 | Commanding Shutout at Camden Yards"
      subtitle="Philadelphia's rotation completely silenced Camden Yards, giving up virtually nothing to Baltimore in a commanding 5-0 shutout victory."
      category="MLB" categoryColor="blue" topicTag="sports"
      publishDate="August 1, 2026" readTime="3 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG} url={SLUG}
      tags={['MLB', 'Phillies', 'Orioles', 'Philadelphia']}
      breadcrumbs={[{ name: 'Home', item: '/' }, { name: 'MLB', item: '/mlb' }, { name: 'Aug 1, 2026', item: SLUG }]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="5-0" subtext="PHI wins" color="blue" />
        <SportStat metric="Shutout" value="Dominant" subtext="Zero runs allowed" color="green" />
        <SportStat metric="Venue" value="Camden Yards" subtext="Baltimore, MD" color="gray" />
      </SportStatRow>
      <p>The Philadelphia Phillies delivered a complete performance on Saturday, blanking the Baltimore Orioles 5-0 at Camden Yards in a game that was never truly competitive after the first inning.</p>
      <p>Philadelphia's starter was in complete command from the first pitch, working efficiently through the Baltimore lineup and never allowing a runner to reach scoring position with any threat. The Phillies offense provided ample support, and the bullpen preserved the shutout through the final innings. The win strengthens Philadelphia's position atop the NL East.</p>
      <p>For more MLB coverage, see the <Link href="/mlb" className="text-blue-600 hover:text-blue-800 underline">oWire MLB hub</Link>.</p>
    </SportArticle>
  );
}