import type { Metadata } from 'next';
import Link from 'next/link';
import { SportArticle, SportStatRow, SportStat } from '@/components/articles/SportArticle';

export const revalidate = 86400;

const SLUG = '/mls/09-09-26/lafc-2-new-york-red-bulls-0';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/mls-09-09-26-lafc-2-new-york-red-bulls-0.jpg';

export const metadata: Metadata = {
  title: 'LAFC 2, Red Bulls 0 | Terry and Sieb Lead Comfortable Home Win',
  description:
    'Jude Terry scored in the 21st minute and Armindo Sieb added a stoppage-time goal as LAFC earned a comfortable 2-0 cross-conference victory over the New York Red Bulls at BMO Stadium.',
  keywords: [
    'LAFC New York Red Bulls 2-0',
    'Jude Terry goal LAFC',
    'Armindo Sieb stoppage time',
    'Ethan Horvath saves Red Bulls',
    'MLS September 9 2026',
    'BMO Stadium LAFC',
    'MLS cross-conference matchup',
    'LAFC Western Conference 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'LAFC 2, Red Bulls 0 | Terry and Sieb Power Comfortable Victory at BMO Stadium',
    description:
      'Jude Terry gave LAFC the lead in the 21st minute and Armindo Sieb struck deep in stoppage time to seal a 2-0 cross-conference win over the New York Red Bulls.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Carson Scott'],
    publishedTime: '2026-09-10T03:30:00Z',
    modifiedTime: '2026-09-10T03:30:00Z',
    section: 'MLS',
    tags: ['MLS', 'LAFC', 'New York Red Bulls', 'Jude Terry'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LAFC 2, Red Bulls 0 | Terry, Sieb Deliver at BMO Stadium',
    description:
      'LAFC controlled the match from the first half and sealed it deep in stoppage time through Armindo Sieb. Ethan Horvath made six saves for New York.',
    images: [OG_IMAGE],
  },
};

export default function LAFCNewYorkRedBullsPage() {
  return (
    <SportArticle
      title="Los Angeles FC 2, New York Red Bulls 0 | Terry and Sieb Secure Cross-Conference Win"
      subtitle="In a cross-conference clash at BMO Stadium, LAFC earned a comfortable 2-0 victory. Jude Terry gave the hosts the lead in the 21st minute with a precise finish. Red Bulls goalkeeper Ethan Horvath kept the visitors in the game with six saves, but Armindo Sieb struck deep in stoppage time to seal the win."
      category="MLS"
      categoryColor="blue"
      topicTag="sports"
      publishDate="September 9, 2026"
      readTime="3 min read"
      author={{ name: 'Carson Scott', role: 'Sports Reporter', authorSlug: 'carson-scott' }}
      slug={SLUG}
      url={SLUG}
      tags={['MLS', 'LAFC', 'New York Red Bulls', 'Jude Terry']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'MLS', item: '/mls' },
        { name: 'LAFC 2-0 Red Bulls', item: SLUG },
      ]}
    >
      <SportStatRow>
        <SportStat metric="Final" value="2-0" subtext="LAFC wins" color="blue" />
        <SportStat metric="Opener" value="Terry" subtext="21st minute" color="green" />
        <SportStat metric="Sealer" value="Sieb" subtext="90+6'" color="orange" />
        <SportStat metric="Venue" value="BMO Stadium" subtext="Los Angeles, CA" color="gray" />
      </SportStatRow>

      <p>
        LAFC delivered a polished performance at BMO Stadium, defeating the New York Red Bulls 2-0 in a cross-conference
        matchup that showcased the Western Conference side depth and control. <strong>Jude Terry</strong> gave the hosts the
        lead in the 21st minute with a precise finish, slotting home after a well-worked build-up that carved through the
        Red Bulls defensive block.
      </p>

      <p>
        Red Bulls goalkeeper <strong>Ethan Horvath</strong> kept the visitors within striking distance with six saves,
        including several from close range, but LAFC continued to create chances and eventually found the insurance goal.
        <strong>Armindo Sieb</strong> struck deep in stoppage time in the 90th plus sixth minute to seal the win,
        converting after a counter-attack caught the Red Bulls pushed forward in search of an equalizer.
      </p>

      <p>
        The victory keeps LAFC in the hunt at the top of the Western Conference and demonstrates their ability to control
        matches against Eastern Conference opposition.
      </p>

      <h2>Goalscorers</h2>
      <ul>
        <li>Jude Terry (21') | LAFC</li>
        <li>Armindo Sieb (90+6') | LAFC</li>
      </ul>

      <h2>Disciplinary</h2>
      <ul>
        <li>Four yellow cards split evenly between both clubs (2 for LAFC, 2 for Red Bulls).</li>
      </ul>

      <p>
        For more MLS coverage, see the{' '}
        <Link href="/mls" className="text-blue-600 hover:text-blue-800 underline">
          oWire MLS hub
        </Link>.
      </p>

      <div className="mt-6">
        <a
          href="https://www.youtube.com/watch?v=UPwnry04iGk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          Watch Highlights on YouTube
        </a>
      </div>
    </SportArticle>
  );
}