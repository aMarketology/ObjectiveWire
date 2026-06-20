import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = '/world-cup/england-scotland-stadium-row';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'England and Scotland World Cup Stadium Row | 6M Venue Dispute',
  description:
    'England and Scotland face potential last-minute venue changes as a �6 million financial dispute between the FA, SFA, and FIFA threatens World Cup 2026 preparations at Wembley and Hampden Park.',
  keywords: [
    'World Cup 2026 England stadium row',
    'England World Cup venue dispute',
    'Scotland World Cup Hampden Park',
    'FIFA 2026 Wembley row',
    'FA SFA FIFA financial dispute',
    'World Cup 2026 UK venues',
    'England Scotland stadium crisis',
    '6 million World Cup dispute',
    'World Cup 2026',
    'FIFA stadium requirements',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'England and Scotland World Cup Stadium Row | 6M Venue Dispute',
    description:
      'A �6 million row between the FA, SFA, and FIFA threatens to force Wembley and Hampden Park out of World Cup 2026.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['ObjectWire Editorial Team'],
    publishedTime: '2026-02-16T00:00:00Z',
    modifiedTime: '2026-02-16T00:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'England', 'Scotland', 'FIFA', 'Stadium', 'Wembley'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'England and Scotland World Cup Stadium Row | 6M Venue Dispute',
    description:
      'A �6 million dispute threatens to force Wembley and Hampden Park out of World Cup 2026.',
  },
};

export default function EnglandScotlandStadiumRowPage() {
  return (
    <NewsArticle
      title="England and Scotland World Cup Stadium Row | 6 Million Venue Dispute"
      subtitle="Home nations confront potential last-minute venue moves as a financial standoff over upgraded FIFA requirements threatens Wembley and Hampden Park."
      category="Sports"
      categoryColor="green"
      topicTag="sports"
      publishDate="February 16, 2026"
      readTime="5 min read"
      author={{
        name: 'ObjectWire Editorial Team',
        role: 'Sports Coverage',
      }}
      slug="world-cup-england-scotland-stadium-row"
      url={SLUG}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup', item: '/world-cup' },
        { name: 'England vs Scotland Stadium Row', item: SLUG },
      ]}
      tags={['World Cup 2026', 'England', 'Scotland', 'FIFA', 'Stadium', 'Wembley']}
    >
      <p>
        England and Scotland&apos;s participation in the{' '}
        <Link href="/world-cup" className="text-blue-600 hover:text-blue-800 underline">
          FIFA World Cup 2026
        </Link>{' '}
        faces an unusual threat: a �6 million financial dispute over stadium costs that could force both home nations to relocate matches away from Wembley and Hampden Park. With the tournament opening June 11, time to resolve the standoff is running out.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">1. The 6 Million Dispute | What Is Being Argued</h2>

      <p>
        The row centres on FIFA&apos;s revised venue requirements for the expanded 48-team format. Wembley Stadium and Hampden Park are being asked to meet upgraded security, hospitality, and media specifications that were not part of original hosting agreements. Neither the Football Association (FA) nor the Scottish Football Association (SFA) had budgeted for the additional outlay.
      </p>

      <p>The �6 million gap breaks down across four areas:</p>

      <ul className="list-disc pl-6 my-4 space-y-2">
        <li><strong>Security upgrades</strong> � enhanced screening and perimeter controls: �2.3 million</li>
        <li><strong>Broadcast infrastructure</strong> � 4K/8K camera positions and fibre connectivity: �1.8 million</li>
        <li><strong>VIP hospitality</strong> � FIFA&apos;s expanded requirements for the 48-team field: �1.4 million</li>
        <li><strong>Temporary facilities</strong> � additional media centres and mixed zones: �500,000</li>
      </ul>

      <p>
        A senior FA official, speaking anonymously, described the situation as being &quot;caught between FIFA&apos;s requirements and commercial reality. These venues were not priced for a 48-team World Cup with this level of infrastructure demand.&quot;
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">2. Alternative Venues | England and Scotland Contingency Plans</h2>

      <p>
        Both associations have begun contingency planning. England&apos;s primary alternatives are Old Trafford (74,000 capacity, already FIFA-compliant from Euro 2028 preparations), Tottenham Hotspur Stadium (62,000), and � as a last resort � the Millennium Stadium in Cardiff.
      </p>

      <p>
        Scotland&apos;s options are narrower. Murrayfield in Edinburgh is the most viable fallback but would require significant football-specific modifications. Celtic Park and Ibrox face similar cost pressures to Hampden.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">3. FA and SFA Positions | Conflicting Public Stances</h2>

      <p>
        The FA has issued measured statements affirming its &quot;commitment to delivering world-class venues&quot; while acknowledging &quot;ongoing commercial discussions with stakeholders.&quot; The SFA has been more direct. Chief executive Ian Maxwell stated that &quot;Scottish football cannot absorb these unplanned costs without jeopardizing grassroots investment&quot; and confirmed the association has approached the UK government for emergency cultural event funding.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">4. FIFA Position | Deadline Firm at March 2026</h2>

      <p>
        FIFA has made clear it will not bend on venue specifications. A FIFA Tournament Operations Director stated: &quot;We understand the challenges, but the World Cup belongs to the world, not to any single venue. We have absolute confidence in the UK delivering compliant stadiums � whether that&apos;s Wembley and Hampden or alternatives.&quot; The governing body set a March 2026 deadline for venue confirmation, after which relocation becomes automatic.
      </p>

      <p>
        For full tournament context, see the{' '}
        <Link href="/world-cup" className="text-blue-600 hover:text-blue-800 underline">
          World Cup 2026 hub
        </Link>
        {' '}and the{' '}
        <Link href="/world-cup/boycott-controversy" className="text-blue-600 hover:text-blue-800 underline">
          boycott controversy coverage
        </Link>
        .
      </p>
    </NewsArticle>
  );
}
