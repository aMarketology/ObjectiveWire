import type { Metadata } from 'next';
import YoutubeCreatorPage, {
  YTSection,
  YTStat,
  YTTable,
  YTCallout,
  YTQuote,
} from '@/components/articles/YoutubeCreatorPage';

export const revalidate = 86400;

const SLUG = '/youtube/ishowspeed';
const PAGE_URL = `https://www.owire.org${SLUG}`;
const IMAGE_URL = '/youtube/ishowspeed.jpg';

export const metadata: Metadata = {
  title: 'IShowSpeed | YouTube, Age, Real Name, Bio 2026',
  description:
    'IShowSpeed (Darren Watkins Jr.) is an American YouTuber with 30M+ subscribers. Full biography: real name, age, Cristiano Ronaldo collab, viral moments, and 2026 career.',
  keywords: [
    'IShowSpeed',
    'IShowSpeed real name',
    'IShowSpeed age',
    'IShowSpeed age 2026',
    'IShowSpeed YouTube',
    'Darren Watkins Jr',
    'IShowSpeed Ronaldo',
    'IShowSpeed biography',
    'IShowSpeed net worth',
    'IShowSpeed 2026',
    'IShowSpeed subscribers',
    'IShowSpeed gaming',
    'IShowSpeed soccer',
    'IShowSpeed viral',
    'IShowSpeed Cincinnati',
    'Speed YouTuber',
    'IShowSpeed Kick',
    'IShowSpeed reaction',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'IShowSpeed | YouTube Bio, Real Name, Ronaldo, 2026',
    description:
      'Full profile of IShowSpeed, real name Darren Watkins Jr., born 2005. 30M+ YouTube subscribers, Ronaldo meeting, viral reaction videos, gaming and soccer content.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire YouTube Desk'],
    section: 'YouTube',
    publishedTime: '2026-05-04T12:00:00Z',
    modifiedTime: '2026-05-04T12:00:00Z',
    tags: ['IShowSpeed', 'YouTube', 'Gaming', 'Soccer', 'Reaction', 'Cincinnati'],
    images: [{ url: `https://www.owire.org${IMAGE_URL}`, width: 1200, height: 675, alt: 'IShowSpeed, YouTube creator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IShowSpeed | 30M YouTube, Real Name Darren Watkins Jr., Bio 2026',
    description: 'IShowSpeed profile: real name, age 21, 30M subscribers, Ronaldo meeting, gaming streams, viral moments, and 2026 career.',
    images: [`https://www.owire.org${IMAGE_URL}`],
  },
};

export default function IShowSpeedPage() {
  return (
    <YoutubeCreatorPage
      schema={{
        title: 'IShowSpeed | YouTube Creator, Real Name Darren Watkins Jr., Biography 2026',
        description:
          'IShowSpeed, real name Darren Watkins Jr., is an American YouTube creator born January 21, 2005, in Cincinnati, Ohio. He has over 30 million YouTube subscribers and is known for extreme reaction videos, soccer content, and a viral meeting with Cristiano Ronaldo.',
        publishedTime: '2026-05-04T12:00:00Z',
        modifiedTime: '2026-05-04T12:00:00Z',
        author: 'ObjectWire YouTube Desk',
        articleUrl: PAGE_URL,
        imageUrl: `https://www.owire.org${IMAGE_URL}`,
        section: 'YouTube',
        keywords: [
          'IShowSpeed', 'Darren Watkins Jr', 'IShowSpeed age 2026',
          'IShowSpeed YouTube', 'IShowSpeed Ronaldo', 'IShowSpeed biography',
          'IShowSpeed net worth', 'IShowSpeed gaming', 'IShowSpeed reaction',
        ],
      }}
      breadcrumbs={[
        { name: 'Home', item: 'https://www.owire.org' },
        { name: 'YouTube', item: 'https://www.owire.org/youtube' },
        { name: 'IShowSpeed', item: PAGE_URL },
      ]}
      hero={{
        image: { src: IMAGE_URL, alt: 'IShowSpeed, YouTube creator Darren Watkins Jr.' },
        gradient: 'linear-gradient(135deg, #0f0f0f 0%, #1a0000 50%, #dc2626 100%)',
        badges: [
          { label: 'Cincinnati, OH', style: 'default' },
          { label: '30M+ YouTube', style: 'achievement' },
          { label: 'Gaming', style: 'default' },
          { label: 'Soccer', style: 'default' },
        ],
        name: 'IShowSpeed',
        subtitle: 'YouTube Creator, Streamer, Soccer Enthusiast',
        description:
          'IShowSpeed, real name Darren Watkins Jr., is one of YouTube\'s fastest-growing creators, known for explosive reaction videos, live soccer commentary, and a viral meeting with Cristiano Ronaldo that became one of the most-watched creator moments of 2023.',
        ctaButtons: [
          { href: 'https://www.youtube.com/@IShowSpeed', label: 'YouTube', icon: '▶', variant: 'accent' },
          { href: 'https://kick.com/speed', label: 'Kick', icon: '🎮', variant: 'secondary' },
        ],
      }}
      sidebar={{
        infobox: {
          image: { src: IMAGE_URL, alt: 'IShowSpeed profile photo' },
          name: 'IShowSpeed',
          subtitle: 'YouTube Creator, Darren Watkins Jr.',
          rows: [
            { label: 'Real Name', value: 'Darren Watkins Jr.' },
            { label: 'Born', value: 'January 21, 2005' },
            { label: 'Age (2026)', value: '21' },
            { label: 'Nationality', value: 'American' },
            { label: 'From', value: 'Cincinnati, Ohio' },
            { label: 'Occupation', value: 'YouTuber, Streamer, Content Creator' },
            {
              label: 'YouTube',
              value: '@IShowSpeed',
              href: 'https://www.youtube.com/@IShowSpeed',
            },
            {
              label: 'Kick',
              value: 'speed',
              href: 'https://kick.com/speed',
            },
            {
              label: 'Instagram',
              value: '@ishowspeed',
              href: 'https://www.instagram.com/ishowspeed',
            },
            { label: 'YouTube Subs', value: '30M+' },
            { label: 'Known For', value: 'Ronaldo meeting, extreme reactions' },
            { label: 'Net Worth', value: 'Est. $10M-$15M (2026)' },
          ],
        },
        linkSections: [
          {
            heading: 'Official Channels',
            links: [
              { href: 'https://www.youtube.com/@IShowSpeed', label: 'YouTube: @IShowSpeed', note: '30M+ subs' },
              { href: 'https://kick.com/speed', label: 'Kick: speed', note: 'primary streams' },
              { href: 'https://www.instagram.com/ishowspeed', label: 'Instagram: @ishowspeed' },
            ],
          },
        ],
        timeline: [
          { year: '2020', event: 'Launched YouTube channel; early gaming content with small audience' },
          { year: '2021', event: 'Viral growth through extreme reaction videos and FIFA content; crossed 1M subscribers' },
          { year: '2022', event: 'Banned from Twitch; moved primary streaming to YouTube; became one of the fastest-growing channels globally' },
          { year: '2023', event: 'Met Cristiano Ronaldo in one of the most-watched creator moments of the year; toured Europe and Asia' },
          { year: '2024', event: 'Crossed 25M YouTube subscribers; global tour streaming from multiple continents; Kick partnership' },
          { year: '2026', event: '30M+ YouTube subscribers; continued international streams and soccer content' },
        ],
        relatedLinks: [
          { href: '/youtube', label: 'YouTube Hub' },
          { href: '/youtube/kai-cenat', label: 'Kai Cenat Profile' },
          { href: '/youtube/ksi', label: 'KSI Profile' },
        ],
        meta: {
          publishedDate: 'May 4, 2026',
          updatedDate: 'May 4, 2026',
          author: 'ObjectWire YouTube Desk',
          category: 'YouTube',
        },
      }}
      tableOfContents={[
        { id: 'who-is', label: 'Who Is IShowSpeed' },
        { id: 'youtube', label: 'IShowSpeed YouTube | Growth and Channel' },
        { id: 'ronaldo', label: 'IShowSpeed and Ronaldo | Viral Moment' },
        { id: 'gaming', label: 'IShowSpeed Gaming and Soccer Content' },
        { id: 'controversy', label: 'IShowSpeed Controversies' },
        { id: 'net-worth', label: 'IShowSpeed Net Worth 2026' },
        { id: 'social', label: 'IShowSpeed Social Media | Official Accounts' },
        { id: 'summary', label: 'IShowSpeed 2026 | Creator Summary' },
      ]}
      tags={['IShowSpeed', 'YouTube', 'Gaming', 'Soccer', 'Reaction', 'Cincinnati']}
    >

      <YTSection id="who-is" heading="Who Is IShowSpeed">
        <p>
          IShowSpeed, whose real name is Darren Watkins Jr., is an American content creator and streamer born on January 21, 2005, in Cincinnati, Ohio. In 2026, he is 21 years old and one of the fastest-growing YouTube creators in history, with over 30 million subscribers on his{' '}
          <a href="https://www.youtube.com/@IShowSpeed" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">YouTube channel</a>.
        </p>
        <p>
          He is known primarily for his extreme reaction videos, passionate soccer commentary, live gaming streams, and a globe-spanning travel series that has taken him to Japan, Europe, and across South America. His unpredictable, high-energy persona has made him one of the most-clipped and shared creators on the internet.
        </p>
      </YTSection>

      <div className="grid grid-cols-3 gap-4 my-6">
        <YTStat value="30M+" label="YouTube Subs" color="red" />
        <YTStat value="21" label="Age in 2026" color="gray" />
        <YTStat value="2020" label="Year Started" color="blue" />
      </div>

      <YTSection id="youtube" heading="IShowSpeed YouTube | Growth and Channel">
        <p>
          IShowSpeed launched his YouTube channel in 2016 but gained significant traction in 2020 and 2021 through FIFA content and reaction videos. His growth accelerated sharply in 2022 when he was banned from Twitch, forcing his audience to consolidate on YouTube and later Kick. The ban inadvertently concentrated his viewership and accelerated his subscriber count.
        </p>
        <p>
          His videos fall into several recurring categories: gaming (primarily EA Sports FC/FIFA), live soccer match reactions, travel vlogs from international destinations, and pure reaction/commentary content. His emotional investment in games, combined with genuine unpredictability, drives his video re-watchability and clip circulation on social media.
        </p>
        <p>
          As of 2026, his channel at{' '}
          <a href="https://www.youtube.com/@IShowSpeed" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">@IShowSpeed</a> has over 30 million subscribers, placing him among the top 200 most-subscribed YouTube channels globally.
        </p>
      </YTSection>

      <YTSection id="ronaldo" heading="IShowSpeed and Ronaldo | Viral Meeting 2023">
        <p>
          IShowSpeed's meeting with Cristiano Ronaldo in 2023 became one of the most widely shared creator moments in YouTube history. Speed had been a vocal Ronaldo supporter throughout his career, regularly referencing him in videos and wearing Al Nassr merchandise on stream. The meeting was arranged through a combination of creator outreach and Ronaldo's own social media team.
        </p>
        <p>
          The video of their interaction, including Speed's visibly emotional reaction to meeting his idol, generated over 50 million views and was shared widely across TikTok, Twitter/X, and Instagram. The Ronaldo collab represented a rare crossover between the top-tier sports world and the YouTube creator ecosystem, validating Speed's global profile in a way that pure subscriber numbers alone cannot.
        </p>
      </YTSection>

      <YTCallout
        heading="IShowSpeed Most Viral Moments"
        color="red"
        items={[
          { label: 'Ronaldo Meeting', detail: 'Emotional reaction to meeting Cristiano Ronaldo, 50M+ views across platforms (2023)' },
          { label: 'Tokyo Stream', detail: 'Live streaming from Japan brought international audience; multiple viral clips' },
          { label: 'Spain Tour', detail: 'Soccer-focused content in Spain, including stadium visits and fan interactions' },
          { label: 'FIFA Reactions', detail: 'Extreme emotional responses to FIFA/EA FC pack openings and matches' },
          { label: 'Bald Stunt', detail: 'Shaved head as part of milestone celebration content' },
        ]}
      />

      <YTSection id="gaming" heading="IShowSpeed Gaming and Soccer Content">
        <p>
          Gaming, specifically EA Sports FC (formerly FIFA), forms the backbone of IShowSpeed's content. His pack openings, Ultimate Team builds, and match streams generate high engagement due to his volatility, whether celebrating or reacting with frustration. His emotional investment is genuine and unfiltered, which distinguishes him from more measured gaming creators.
        </p>
        <p>
          Soccer content has grown to become equally central to his brand. He regularly covers international matches, supports a rotation of global clubs, and has used his streams to visit stadiums and clubs across Europe and South America. His soccer authenticity resonates with international audiences in a way that few American creators have achieved.
        </p>
      </YTSection>

      <YTQuote
        quote="I always said I'd meet Ronaldo one day. I always believed. And it happened."
        attribution="IShowSpeed"
        role="YouTuber, Darren Watkins Jr."
      />

      <YTSection id="controversy" heading="IShowSpeed Controversies">
        <p>
          IShowSpeed's career has included several notable controversies. His Twitch ban in 2022 stemmed from policy violations related to content on his streams. Additional incidents during live streams, including inappropriate comments and erratic behavior, have generated criticism and periodic platform action.
        </p>
        <p>
          Despite the controversies, his audience has remained largely loyal and his growth has continued. His persona, while polarizing, is consistently authentic, which his core fanbase values over performed restraint.
        </p>
      </YTSection>

      <YTSection id="net-worth" heading="IShowSpeed Net Worth | Estimated $10M-$15M in 2026">
        <p>
          IShowSpeed's net worth in 2026 is estimated between $10 million and $15 million, derived from YouTube AdSense on 30M+ subscribers, brand partnerships, Kick streaming deal, merchandise, and event appearances. His Kick partnership alone is reported to involve a significant upfront payment alongside revenue sharing, reflecting the competitive market for top streaming talent.
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
          { platform: 'YouTube', handle: '@IShowSpeed', followers: '30M+', focus: 'Gaming, reactions, soccer, travel vlogs' },
          { platform: 'Kick', handle: 'speed', followers: '10M+', focus: 'Primary live streams' },
          { platform: 'Instagram', handle: '@ishowspeed', followers: '8M+', focus: 'Lifestyle, clips, fan content' },
        ]}
        highlightKey="platform"
        highlightValue="YouTube"
      />

      <YTSection id="social" heading="IShowSpeed Social Media | Official Accounts 2026">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>
            <a href="https://www.youtube.com/@IShowSpeed" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              YouTube: @IShowSpeed (30M+ subscribers)
            </a>
          </li>
          <li>
            <a href="https://kick.com/speed" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Kick: speed (primary streaming platform)
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ishowspeed" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Instagram: @ishowspeed
            </a>
          </li>
        </ul>
      </YTSection>

      <YTSection id="summary" heading="IShowSpeed 2026 | Creator Summary">
        <p>
          IShowSpeed in 2026 represents one of the defining success stories of the YouTube creator era. Starting from Cincinnati, Ohio, at 15 years old, Darren Watkins Jr. built a 30-million-subscriber channel through consistency, authenticity, and an unfiltered persona that resonated globally, particularly across soccer-loving audiences in Europe, South America, and Asia.
        </p>
        <p>
          For more YouTube creator profiles, see the{' '}
          <a href="/youtube" className="text-blue-600 hover:text-blue-800 underline">YouTube Hub</a>, or read about{' '}
          <a href="/youtube/kai-cenat" className="text-blue-600 hover:text-blue-800 underline">Kai Cenat</a> and{' '}
          <a href="/youtube/ksi" className="text-blue-600 hover:text-blue-800 underline">KSI</a>.
        </p>
      </YTSection>

    </YoutubeCreatorPage>
  );
}
