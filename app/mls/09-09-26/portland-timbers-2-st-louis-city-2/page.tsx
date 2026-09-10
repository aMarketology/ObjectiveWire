import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mls/09-09-26/portland-timbers-2-st-louis-city-2';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/mls-09-09-26-portland-timbers-2-st-louis-city-2.jpg';

export const metadata: Metadata = {
  title: 'Timbers 2, St. Louis CITY 2 | Velde and Navarro Trade Braces',
  description:
    'Kristoffer Velde scored twice for Portland, including an 89th-minute equalizer, to earn a 2-2 draw against St. Louis CITY SC at Providence Park in a match where Rafael Navarro also bagged a brace.',
  keywords: [
    'Portland Timbers St. Louis CITY draw',
    'Kristoffer Velde brace Portland',
    'Rafael Navarro two goals St. Louis',
    'MLS September 9 2026',
    'Providence Park highlights',
    'MLS Western Conference standings',
    'Portland Timbers comeback draw',
    'St. Louis CITY SC away points',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Timbers 2, St. Louis CITY 2 | Velde and Navarro Exchange Braces in Thrilling Draw',
    description:
      'Kristoffer Velde scored an 89th-minute equalizer to complete his brace and salvage a draw for Portland after Rafael Navarro had twice given St. Louis the lead at Providence Park.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Carson Scott'],
    publishedTime: '2026-09-10T02:00:00Z',
    modifiedTime: '2026-09-10T02:00:00Z',
    section: 'MLS',
    tags: ['MLS', 'Portland Timbers', 'St. Louis CITY SC', 'Kristoffer Velde'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timbers 2, St. Louis CITY 2 | Velde 89th-Minute Equalizer',
    description:
      'Two braces. One late equalizer. Portland and St. Louis split the points in an entertaining draw at Providence Park.',
    images: [OG_IMAGE],
  },
};

export default function PortlandStLouisPage() {
  return (
    <SportArticle
      title="Portland Timbers 2, St. Louis CITY SC 2 | Velde and Navarro Trade Braces in Entertaining Draw"
      subtitle="At Providence Park, St. Louis CITY SC struck almost immediately when Rafael Navarro scored in the 1st minute. Portland Kristoffer Velde answered in the 32nd minute to level the match heading into halftime. Navarro restored the lead for St. Louis in the 51st minute, completing his double, but Velde found the net again in the 89th minute to salvage a 2-2 draw for the Timbers."
      category="MLS"
      categoryColor="blue"
      topicTag="sports"
      publishDate="September 9, 2026"
      readTime="3 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG}
      url={SLUG}
      tags={['MLS', 'Portland Timbers', 'St. Louis CITY SC', 'Kristoffer Velde']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'MLS', item: '/mls' },
        { name: 'Portland 2-2 St. Louis', item: SLUG },
      ]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="2-2" subtext="Draw" color="blue" />
        <SportStat metric="Brace" value="Velde" subtext="32', 89'" color="green" />
        <SportStat metric="Brace" value="Navarro" subtext="1', 51'" color="orange" />
        <SportStat metric="Venue" value="Providence Park" subtext="Portland, OR" color="gray" />
      </SportStatRow>

      <p>
        Providence Park delivered a wild back-and-forth affair as the Portland Timbers and St. Louis CITY SC played to a
        2-2 draw, with both goalscorers completing braces. St. Louis struck almost immediately when{' '}
        <strong>Rafael Navarro</strong> scored in the 1st minute, catching the Portland defense flat-footed and silencing
        the home crowd before many had settled into their seats.
      </p>

      <p>
        Portland answered through <strong>Kristoffer Velde</strong> in the 32nd minute, leveling the match heading into
        halftime. Navarro restored St. Louis lead in the 51st minute with his second of the night, putting the visitors back
        in control. But with time ticking down, Velde found the net again in the 89th minute to complete his own brace and
        salvage a point for the Timbers in a match that could have gone either way.
      </p>

      <h2>Goalscorers</h2>
      <ul>
        <li>Kristoffer Velde (32', 89') | Portland Timbers</li>
        <li>Rafael Navarro (1', 51') | St. Louis CITY SC</li>
      </ul>

      <h2>Disciplinary</h2>
      <ul>
        <li>Five total yellow cards issued (1 for Portland, 4 for St. Louis including Navarro).</li>
      </ul>

      <p>
        For more MLS coverage, see the{' '}
        <Link href="/mls" className="text-blue-600 hover:text-blue-800 underline">
          oWire MLS hub
        </Link>.
      </p>
    
          
                <div className="mt-6">
        <a
          href="https://www.youtube.com/watch?v=Bqm6n2Qj_UQ"
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