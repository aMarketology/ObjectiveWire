import type { Metadata } from 'next';
import YoutubeCreatorPage, {
  YTSection,
  YTStat,
  YTTable,
  YTCallout,
  YTQuote,
} from '@/components/articles/YoutubeCreatorPage';

export const revalidate = 86400;

const SLUG = '/youtube/w2s';
const PAGE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/youtube/w2s.jpg';

export const metadata: Metadata = {
  title: 'W2S (Harry Lewis) | YouTube, Sidemen, Age, Bio 2026',
  description:
    'W2S, real name Harry Lewis, is a British YouTuber and Sidemen member with 16M+ subscribers. Full biography: age, FIFA content, KSI collab, and 2026 career.',
  keywords: [
    'W2S',
    'W2S YouTube',
    'Harry Lewis',
    'W2S age',
    'W2S age 2026',
    'W2S real name',
    'W2S biography',
    'W2S Sidemen',
    'W2S net worth',
    'W2S FIFA',
    'W2S KSI',
    'W2S 2026',
    'W2S subscribers',
    'Sidemen W2S',
    'Harry Lewis YouTuber',
    'W2S Hampshire',
    'Sidemen member W2S',
    'British YouTuber W2S',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'W2S (Harry Lewis) | Sidemen, YouTube, FIFA, Bio 2026',
    description:
      'Full profile of W2S, real name Harry Lewis. British YouTuber and Sidemen member with 16M+ subscribers. FIFA content, KSI collab, Hampshire roots, and 2026 career.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire YouTube Desk'],
    section: 'YouTube',
    publishedTime: '2026-05-04T12:00:00Z',
    modifiedTime: '2026-05-04T12:00:00Z',
    tags: ['W2S', 'Harry Lewis', 'Sidemen', 'YouTube', 'FIFA', 'British'],
    images: [{ url: `https://www.objectwire.org${IMAGE_URL}`, width: 1200, height: 675, alt: 'W2S, Harry Lewis, Sidemen YouTuber' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'W2S | Harry Lewis, 16M YouTube, Sidemen Member, Bio 2026',
    description: 'W2S (Harry Lewis) profile: Sidemen member, 16M+ YouTube subscribers, FIFA content, age 29, Hampshire roots, KSI collab, 2026.',
    images: [`https://www.objectwire.org${IMAGE_URL}`],
  },
};

export default function W2SPage() {
  return (
    <YoutubeCreatorPage
      schema={{
        title: 'W2S | Harry Lewis, Sidemen YouTuber, FIFA Creator, Biography 2026',
        description:
          'W2S, real name Harry Lewis, is a British YouTuber born November 24, 1996, in Hampshire, England. He is a founding member of the Sidemen creator group and has over 16 million YouTube subscribers, known primarily for FIFA/EA Sports FC content and group collaborations.',
        publishedTime: '2026-05-04T12:00:00Z',
        modifiedTime: '2026-05-04T12:00:00Z',
        author: 'ObjectWire YouTube Desk',
        articleUrl: PAGE_URL,
        imageUrl: `https://www.objectwire.org${IMAGE_URL}`,
        section: 'YouTube',
        keywords: [
          'W2S', 'Harry Lewis', 'W2S YouTube', 'Sidemen W2S',
          'W2S age 2026', 'W2S biography', 'W2S FIFA', 'W2S KSI', 'W2S net worth',
        ],
      }}
      breadcrumbs={[
        { name: 'Home', item: 'https://www.objectwire.org' },
        { name: 'YouTube', item: 'https://www.objectwire.org/youtube' },
        { name: 'W2S', item: PAGE_URL },
      ]}
      hero={{
        image: { src: IMAGE_URL, alt: 'W2S, Harry Lewis, Sidemen YouTuber' },
        gradient: 'linear-gradient(135deg, #0f0f0f 0%, #0a1a0a 50%, #16a34a 100%)',
        badges: [
          { label: 'Hampshire, UK', style: 'default' },
          { label: 'Sidemen Member', style: 'achievement' },
          { label: '16M+ YouTube', style: 'default' },
          { label: 'FIFA Creator', style: 'default' },
        ],
        name: 'W2S (Harry Lewis)',
        subtitle: 'British YouTuber, Sidemen Member, FIFA Creator',
        description:
          'W2S, real name Harry Lewis, is one of the original Sidemen and a British YouTuber with over 16 million subscribers. Known for FIFA pack openings, Sidemen challenges, and long-form vlogs, he is a foundational figure in the UK YouTube creator ecosystem.',
        ctaButtons: [
          { href: 'https://www.youtube.com/@W2S', label: 'YouTube', icon: '▶', variant: 'accent' },
          { href: 'https://www.instagram.com/w2s', label: 'Instagram', icon: '📷', variant: 'secondary' },
        ],
      }}
      sidebar={{
        infobox: {
          image: { src: IMAGE_URL, alt: 'W2S (Harry Lewis) profile photo' },
          name: 'W2S (Harry Lewis)',
          subtitle: 'Sidemen, YouTuber',
          rows: [
            { label: 'Real Name', value: 'Harry Lewis' },
            { label: 'Born', value: 'November 24, 1996' },
            { label: 'Age (2026)', value: '29' },
            { label: 'Nationality', value: 'British' },
            { label: 'From', value: 'Hampshire, England' },
            { label: 'Group', value: 'Sidemen' },
            { label: 'Occupation', value: 'YouTuber, Content Creator' },
            {
              label: 'YouTube',
              value: '@W2S',
              href: 'https://www.youtube.com/@W2S',
            },
            {
              label: 'Instagram',
              value: '@w2s',
              href: 'https://www.instagram.com/w2s',
            },
            {
              label: 'Twitter/X',
              value: '@W2S',
              href: 'https://twitter.com/W2S',
            },
            { label: 'YouTube Subs', value: '16M+' },
            { label: 'Net Worth', value: 'Est. $10M-$15M (2026)' },
          ],
        },
        linkSections: [
          {
            heading: 'Official Channels',
            links: [
              { href: 'https://www.youtube.com/@W2S', label: 'YouTube: @W2S', note: '16M+ subs' },
              { href: 'https://www.youtube.com/@Sidemen', label: 'Sidemen YouTube: @Sidemen', note: 'group channel' },
              { href: 'https://www.instagram.com/w2s', label: 'Instagram: @w2s' },
            ],
          },
        ],
        timeline: [
          { year: '2012', event: 'Created YouTube channel at age 16; early FIFA content' },
          { year: '2013', event: 'Co-founded the Sidemen group with KSI, Miniminter, Behzinga, Vikkstar, Tobjizzle, and Zerkaa' },
          { year: '2015', event: 'Crossed 5M YouTube subscribers; became one of UK\'s largest FIFA channels' },
          { year: '2017', event: 'Sidemen brand expansion; group YouTube channel launched' },
          { year: '2019', event: 'Crossed 10M subscribers; continued Sidemen Sunday series' },
          { year: '2023', event: 'Sidemen Charity Match sold out Stamford Bridge; W2S participated in full squad' },
          { year: '2026', event: '16M+ subscribers; continued content and Sidemen collaborations' },
        ],
        relatedLinks: [
          { href: '/youtube', label: 'YouTube Hub' },
          { href: '/youtube/ksi', label: 'KSI Profile' },
          { href: '/youtube/sidemen/charity-match', label: 'Sidemen Charity Match' },
        ],
        meta: {
          publishedDate: 'May 4, 2026',
          updatedDate: 'May 4, 2026',
          author: 'ObjectWire YouTube Desk',
          category: 'YouTube',
        },
      }}
      tableOfContents={[
        { id: 'who-is', label: 'Who Is W2S' },
        { id: 'youtube', label: 'W2S YouTube | Channel and Content' },
        { id: 'sidemen', label: 'W2S and the Sidemen | Group History' },
        { id: 'fifa', label: 'W2S FIFA | Ultimate Team Content' },
        { id: 'charity-match', label: 'W2S Charity Match | Sidemen Events' },
        { id: 'net-worth', label: 'W2S Net Worth 2026' },
        { id: 'social', label: 'W2S Social Media | Official Accounts' },
        { id: 'summary', label: 'W2S 2026 | Creator Summary' },
      ]}
      tags={['W2S', 'Harry Lewis', 'Sidemen', 'YouTube', 'FIFA', 'British YouTuber']}
    >

      <YTSection id="who-is" heading="Who Is W2S">
        <p>
          W2S, whose real name is Harry Lewis, is a British YouTuber born on November 24, 1996, in Hampshire, England. In 2026, he is 29 years old and one of the original members of the{' '}
          <a href="/youtube/sidemen/charity-match" className="text-blue-600 hover:text-blue-800 underline">Sidemen</a>, the UK's most-followed YouTube creator group. His channel at{' '}
          <a href="https://www.youtube.com/@W2S" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">@W2S</a> has over 16 million subscribers.
        </p>
        <p>
          W2S began his YouTube career with FIFA content at age 16 and has grown alongside the British YouTube ecosystem for over a decade. His audience is built on long-term loyalty from fans who have followed his channel since the early FIFA era of YouTube gaming.
        </p>
      </YTSection>

      <div className="grid grid-cols-3 gap-4 my-6">
        <YTStat value="16M+" label="YouTube Subs" color="green" />
        <YTStat value="29" label="Age in 2026" color="gray" />
        <YTStat value="2012" label="Year Started" color="blue" />
      </div>

      <YTSection id="youtube" heading="W2S YouTube | Channel and Content">
        <p>
          W2S's YouTube channel spans over 13 years of content, making it one of the longer-running creator channels among the Sidemen group. His content categories include FIFA/EA Sports FC pack openings and Ultimate Team builds, Sidemen crossover videos, challenge videos, vlogs, and collaborative pieces with other Sidemen members.
        </p>
        <p>
          His consistent output over more than a decade has given his channel a deep library that continues to drive organic views from long-tail FIFA search traffic and Sidemen fans discovering his older content.
        </p>
      </YTSection>

      <YTSection id="sidemen" heading="W2S and the Sidemen | Group History">
        <p>
          The Sidemen were co-founded in 2013 and consists of seven British creators: KSI, W2S (Harry Lewis), Miniminter (Simon Minter), Behzinga (Ethan Payne), Vikkstar123 (Vikram Barn), Tobjizzle (Tobi Brown), and Zerkaa (Josh Bradley). The group runs a shared{' '}
          <a href="https://www.youtube.com/@Sidemen" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Sidemen YouTube channel</a> alongside their individual channels.
        </p>
        <p>
          The group's Sunday videos, challenges, and charity matches have become some of the most-viewed British YouTube content ever produced. W2S participates in all major Sidemen productions, from their annual Sidemen Sunday uploads to the sold-out charity football matches.
        </p>
      </YTSection>

      <YTCallout
        heading="Sidemen Members | Full Group Roster"
        color="green"
        items={[
          { label: 'KSI', detail: 'JJ Olatunji, founder, music artist, boxer, 24M+ YouTube' },
          { label: 'W2S', detail: 'Harry Lewis, 16M+ YouTube, FIFA specialist' },
          { label: 'Miniminter', detail: 'Simon Minter, 9M+ YouTube, former sidekick of KSI' },
          { label: 'Behzinga', detail: 'Ethan Payne, 8M+ YouTube, fitness transformation' },
          { label: 'Vikkstar123', detail: 'Vikram Barn, 8M+ YouTube, gaming and esports' },
          { label: 'Tobjizzle', detail: 'Tobi Brown, 6M+ YouTube, sports and lifestyle' },
          { label: 'Zerkaa', detail: 'Josh Bradley, 5M+ YouTube, lifestyle and challenges' },
        ]}
      />

      <YTSection id="fifa" heading="W2S FIFA | Ultimate Team Content">
        <p>
          FIFA/EA Sports FC content built W2S's audience from the beginning and remains a significant part of his channel output. His pack openings, Ultimate Team drafts, and match streams appeal to the FIFA-playing demographic that has sustained British gaming YouTube for over a decade.
        </p>
        <p>
          His FIFA content predates the rise of dedicated sports gaming channels and helped establish the format that many subsequent FIFA creators emulated. His emotional investment and genuine reactions to packs mirror the wider FIFA community's shared experiences.
        </p>
      </YTSection>

      <YTSection id="charity-match" heading="W2S Charity Match | Sidemen Events">
        <p>
          The{' '}
          <a href="/youtube/sidemen/charity-match" className="text-blue-600 hover:text-blue-800 underline">Sidemen Charity Match</a> is an annual football event organized by the Sidemen that brings together YouTube creators for a competitive charity match. The 2023 event sold out Stamford Bridge, Chelsea's home stadium, one of the largest live creator events in history.
        </p>
        <p>
          W2S participates in the charity match as part of the full Sidemen squad. The events generate multi-million views on YouTube and significant charitable donations to causes selected by the group.
        </p>
      </YTSection>

      <YTQuote
        quote="I started when I was 16, just messing around with FIFA on YouTube. I never thought this would be my life."
        attribution="W2S (Harry Lewis)"
        role="Sidemen, YouTuber"
      />

      <YTSection id="net-worth" heading="W2S Net Worth | Estimated $10M-$15M in 2026">
        <p>
          W2S's net worth in 2026 is estimated between $10 million and $15 million, based on YouTube AdSense revenue from 16M+ subscribers, Sidemen merchandise and brand partnerships, appearance fees from charity match events, and sponsored content deals. His longevity as a creator, with over 13 years on the platform, means his channel continues to accumulate passive AdSense revenue from an extensive video library.
        </p>
      </YTSection>

      <YTTable
        columns={[
          { key: 'platform', header: 'Platform' },
          { key: 'handle', header: 'Handle' },
          { key: 'followers', header: 'Followers' },
          { key: 'focus', header: 'Content' },
        ]}
        rows={[
          { platform: 'YouTube', handle: '@W2S', followers: '16M+', focus: 'FIFA, challenges, vlogs, Sidemen collabs' },
          { platform: 'Sidemen YT', handle: '@Sidemen', followers: '25M+', focus: 'Group channel: challenges, events, charity match' },
          { platform: 'Instagram', handle: '@w2s', followers: '3M+', focus: 'Lifestyle, behind-the-scenes' },
        ]}
        highlightKey="platform"
        highlightValue="YouTube"
      />

      <YTSection id="social" heading="W2S Social Media | Official Accounts 2026">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>
            <a href="https://www.youtube.com/@W2S" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              YouTube: @W2S (16M+ subscribers)
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@Sidemen" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Sidemen YouTube: @Sidemen (25M+ subscribers)
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/w2s" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Instagram: @w2s
            </a>
          </li>
          <li>
            <a href="https://twitter.com/W2S" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Twitter/X: @W2S
            </a>
          </li>
        </ul>
      </YTSection>

      <YTSection id="summary" heading="W2S 2026 | Creator Summary">
        <p>
          W2S (Harry Lewis) in 2026 represents one of the longest-standing careers in British YouTube history. As one of the original Sidemen, he has been a continuous presence in the UK creator ecosystem for over 13 years, building a 16M+ subscriber audience through FIFA content, group collaborations, and genuine audience connection.
        </p>
        <p>
          For more YouTube creator profiles, see the{' '}
          <a href="/youtube" className="text-blue-600 hover:text-blue-800 underline">YouTube Hub</a>, read about{' '}
          <a href="/youtube/ksi" className="text-blue-600 hover:text-blue-800 underline">KSI</a>, or explore the{' '}
          <a href="/youtube/sidemen/charity-match" className="text-blue-600 hover:text-blue-800 underline">Sidemen Charity Match</a>.
        </p>
      </YTSection>

    </YoutubeCreatorPage>
  );
}
