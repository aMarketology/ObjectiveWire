import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mls/09-09-26/vancouver-whitecaps-3-la-galaxy-0';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/mls-09-09-26-vancouver-whitecaps-3-la-galaxy-0.jpg';

export const metadata: Metadata = {
  title: 'Whitecaps 3, LA Galaxy 0 | Vancouver Dominates in Clean Sheet Victory',
  description:
    'Vancouver Whitecaps produced a commanding performance at BC Place, securing a 3-0 clean sheet victory over the LA Galaxy through efficient wing play and clinical finishing.',
  keywords: [
    'Vancouver Whitecaps LA Galaxy 3-0',
    'MLS September 9 2026',
    'BC Place Vancouver win',
    'Whitecaps clean sheet',
    'LA Galaxy shutout loss',
    'MLS Western Conference 2026',
    'Vancouver playoff push 2026',
    'MLS late night scores',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Whitecaps 3, LA Galaxy 0 | Vancouver Cruises to Commanding Clean Sheet Win',
    description:
      'Vancouver produced a commanding performance at BC Place, breaking down the Galaxy defense through efficient wing play and clinical finishing to secure a 3-0 victory.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Carson Scott'],
    publishedTime: '2026-09-10T03:00:00Z',
    modifiedTime: '2026-09-10T03:00:00Z',
    section: 'MLS',
    tags: ['MLS', 'Vancouver Whitecaps', 'LA Galaxy', 'Clean Sheet'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Whitecaps 3, Galaxy 0 | Vancouver Shuts Out LA at BC Place',
    description:
      'Three goals. Zero conceded. Vancouver controlled the match from start to finish against a flat LA Galaxy side.',
    images: [OG_IMAGE],
  },
};

export default function VancouverLAGalaxyPage() {
  return (
    <SportArticle
      title="Vancouver Whitecaps 3, LA Galaxy 0 | Commanding Clean Sheet at BC Place"
      subtitle="Vancouver produced a commanding performance at BC Place, securing a 3-0 clean sheet victory over the visiting LA Galaxy. The Whitecaps broke down the Galaxy defensive line through efficient wing play and clinical finishing, controlling tempo across both halves while holding the Galaxy scoreless."
      category="MLS"
      categoryColor="blue"
      topicTag="sports"
      publishDate="September 9, 2026"
      readTime="3 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG}
      url={SLUG}
      tags={['MLS', 'Vancouver Whitecaps', 'LA Galaxy', 'Clean Sheet']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'MLS', item: '/mls' },
        { name: 'Vancouver 3-0 LA Galaxy', item: SLUG },
      ]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="3-0" subtext="VAN wins" color="blue" />
        <SportStat metric="Clean Sheet" value="Dominant" subtext="Zero goals conceded" color="green" />
        <SportStat metric="Yellow Cards" value="4" subtext="1 VAN, 3 LAG" color="orange" />
        <SportStat metric="Venue" value="BC Place" subtext="Vancouver, BC" color="gray" />
      </SportStatRow>

      <p>
        The Vancouver Whitecaps delivered one of their most complete performances of the season at BC Place, dominating the
        LA Galaxy from start to finish in a 3-0 victory. The Whitecaps controlled the tempo across both halves, using
        efficient wing play to break down the Galaxy defensive line and creating chances with consistent pressure.
      </p>

      <p>
        Vancouver clinical finishing ensured they made the most of their opportunities, while defensively they held the
        Galaxy scoreless through a disciplined team shape that limited LA to speculative efforts from distance. The clean
        sheet marks a significant statement for Vancouver as they push for position in the Western Conference playoff
        race, demonstrating they can control matches against quality opposition.
      </p>

      <h2>Goalscorers</h2>
      <ul>
        <li>Vancouver Whitecaps | 3 goals</li>
        <li>LA Galaxy | 0 goals</li>
      </ul>

      <h2>Disciplinary</h2>
      <ul>
        <li>Four total yellow cards issued (1 for Vancouver, 3 for LA Galaxy).</li>
      </ul>

      <p>
        For more MLS coverage, see the{' '}
        <Link href="/mls" className="text-blue-600 hover:text-blue-800 underline">
          oWire MLS hub
        </Link>.
      </p>
    
          
                <div className="mt-6">
        <a
          href="https://www.youtube.com/watch?v=ElOZTNk_rGg"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          Watch Highlights on YouTube
        </a>
      </div>
    </SportArticle>
  );
}