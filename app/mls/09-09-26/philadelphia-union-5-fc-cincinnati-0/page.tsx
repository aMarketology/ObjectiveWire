import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mls/09-09-26/philadelphia-union-5-fc-cincinnati-0';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/mls-09-09-26-philadelphia-union-5-fc-cincinnati-0.jpg';

export const metadata: Metadata = {
  title: 'Union 5, FC Cincinnati 0 | Bruno Damiani Hat-Trick After Red Card',
  description:
    'Philadelphia Union routed FC Cincinnati 5-0 at Subaru Park after Obinna Nwobodo was sent off in the 15th minute. Bruno Damiani scored a hat-trick and Quinn Sullivan added a penalty.',
  keywords: ['Philadelphia Union', 'FC Cincinnati', 'Bruno Damiani hat-trick', 'MLS September 2026', 'MLS recap'],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Union 5, FC Cincinnati 0 | Damiani Hat-Trick, Nwobodo Red Card',
    description: 'Philadelphia scored five unanswered goals after Cincinnati went down to 10 men in the 15th minute. Bruno Damiani delivered a clinical hat-trick.',
    type: 'article', url: ARTICLE_URL, siteName: 'Objective Wire',
    authors: ['Carson Scott'], publishedTime: '2026-09-09T22:00:00Z', modifiedTime: '2026-09-09T22:00:00Z',
    section: 'MLS', tags: ['MLS', 'Philadelphia Union', 'FC Cincinnati', 'Bruno Damiani'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Union 5, FC Cincinnati 0 | Damiani Hat-Trick Powers Rout', description: 'Five goals, a red card, and a Bruno Damiani hat-trick at Subaru Park.', images: [OG_IMAGE] },
};

export default function PhillyCincinnatiPage() {
  return (
    <SportArticle
      title="Philadelphia Union 5, FC Cincinnati 0 | Bruno Damiani Hat-Trick After Early Red Card"
      subtitle="The matchup at Subaru Park swung dramatically in the 15th minute when FC Cincinnati midfielder Obinna Nwobodo was shown a straight red card for a reckless challenge. Forced to play over 75 minutes down a man, Cincinnati defensive structure collapsed under heavy pressure."
      category="MLS" categoryColor="blue" topicTag="sports"
      publishDate="September 9, 2026" publishedTime="2026-09-09T22:00:00Z" readTime="3 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG} url={SLUG}
      tags={['MLS', 'Philadelphia Union', 'FC Cincinnati', 'Bruno Damiani']}
      breadcrumbs={[{ name: 'Home', item: '/' }, { name: 'MLS', item: '/mls' }, { name: 'Union 5-0 Cincinnati', item: SLUG }]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="5-0" subtext="PHI wins" color="blue" />
        <SportStat metric="Hat-Trick" value="Damiani" subtext="52', 68', 81'" color="green" />
        <SportStat metric="Red Card" value="15'" subtext="Nwobodo sent off" color="red" />
        <SportStat metric="Venue" value="Subaru Park" subtext="Chester, PA" color="gray" />
      </SportStatRow>

      <p>The Philadelphia Union delivered a statement performance at Subaru Park, routing FC Cincinnati 5-0 after the visitors were reduced to 10 men in the 15th minute. Cincinnati midfielder <strong>Obinna Nwobodo</strong> was shown a straight red card for a reckless challenge, forcing the Eastern Conference leaders to play over 75 minutes shorthanded.</p>

      <p><strong>Quinn Sullivan</strong> opened the scoring for Philadelphia in the 43rd minute, calmly converting a spot kick after a foul in the box. The goal gave the Union a deserved lead heading into halftime after they had dominated possession and chances against the 10-man Cincinnati side.</p>

      <p>In the second half, forward <strong>Bruno Damiani</strong> took complete control. He scored his first in the 52nd minute with a clinical finish in open play, added a second in the 68th minute, and completed his hat-trick in the 81st minute with another composed strike. Substitute <strong>Milan Iloski</strong> capped off the 5-0 shellacking by converting a second penalty deep in stoppage time (90+4').</p>

      <h2>Goalscorers</h2>
      <ul>
        <li>Quinn Sullivan (43' PEN) — Philadelphia Union</li>
        <li>Bruno Damiani (52', 68', 81') — Philadelphia Union</li>
        <li>Milan Iloski (90+4' PEN) — Philadelphia Union</li>
      </ul>

      <h2>Disciplinary</h2>
      <ul>
        <li>Obinna Nwobodo (FC Cincinnati) — Red Card 15'</li>
      </ul>

      <p>For more MLS coverage, see the <Link href="/mls" className="text-blue-600 hover:text-blue-800 underline">oWire MLS hub</Link>.</p>
    
          
                <div className="mt-6">
        <a
          href="https://www.youtube.com/watch?v=IgYggOVGuFY"
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