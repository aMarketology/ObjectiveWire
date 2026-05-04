import type { Metadata } from 'next';
import YoutubeCreatorPage, {
  YTSection,
  YTStat,
  YTTable,
  YTCallout,
  YTQuote,
} from '@/components/articles/YoutubeCreatorPage';

export const revalidate = 86400;

const SLUG = '/youtube/kai-cenat';
const PAGE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/youtube/kai-cenat.jpg';

export const metadata: Metadata = {
  title: 'Kai Cenat | Twitch, YouTube, Age, Bio 2026',
  description:
    'Kai Cenat is a New York-born streamer and YouTuber with 20M+ Twitch followers. Full biography: subathon record, Drake collab, age, net worth, and 2026 career update.',
  keywords: [
    'Kai Cenat',
    'Kai Cenat Twitch',
    'Kai Cenat YouTube',
    'Kai Cenat age',
    'Kai Cenat age 2026',
    'Kai Cenat real name',
    'Kai Cenat biography',
    'Kai Cenat net worth',
    'Kai Cenat Drake',
    'Kai Cenat subathon',
    'Kai Cenat 2026',
    'Kai Cenat New York',
    'Kai Cenat subscribers',
    'Kai Cenat streaming',
    'Kai Cenat AMP',
    'Kai Cenat Central Cee',
    'most subbed Twitch',
    'Kai Cenat streamer',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Kai Cenat | Twitch, YouTube, Drake Collab, Bio 2026',
    description:
      'Full profile of Kai Cenat, New York streamer with 20M+ Twitch followers. Record-breaking subathon, Drake and Central Cee collabs, AMP group, and 2026 career.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire YouTube Desk'],
    section: 'YouTube',
    publishedTime: '2026-05-04T12:00:00Z',
    modifiedTime: '2026-05-04T12:00:00Z',
    tags: ['Kai Cenat', 'Twitch', 'YouTube', 'New York', 'Streaming', 'AMP'],
    images: [{ url: `https://www.objectwire.org${IMAGE_URL}`, width: 1200, height: 675, alt: 'Kai Cenat, Twitch streamer and YouTuber' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kai Cenat | 20M+ Twitch, Most Subbed Streamer, Bio 2026',
    description: 'Kai Cenat profile: age 24, 20M Twitch, record subathon, Drake collab, AMP group, New York roots, and creator career 2026.',
    images: [`https://www.objectwire.org${IMAGE_URL}`],
  },
};

export default function KaiCenatPage() {
  return (
    <YoutubeCreatorPage
      schema={{
        title: 'Kai Cenat | Twitch Most-Subscribed Streamer, YouTuber, Biography 2026',
        description:
          'Kai Cenat is an American streamer and YouTuber born December 16, 2001, in New York City. He holds the record for the most-subscribed Twitch channel and has hosted streams with Drake, Central Cee, Lil Baby, and other major artists through his AMP group.',
        publishedTime: '2026-05-04T12:00:00Z',
        modifiedTime: '2026-05-04T12:00:00Z',
        author: 'ObjectWire YouTube Desk',
        articleUrl: PAGE_URL,
        imageUrl: `https://www.objectwire.org${IMAGE_URL}`,
        section: 'YouTube',
        keywords: [
          'Kai Cenat', 'Kai Cenat Twitch', 'most subscribed Twitch',
          'Kai Cenat age 2026', 'Kai Cenat biography', 'Kai Cenat net worth',
          'Kai Cenat Drake', 'Kai Cenat subathon', 'AMP group',
        ],
      }}
      breadcrumbs={[
        { name: 'Home', item: 'https://www.objectwire.org' },
        { name: 'YouTube', item: 'https://www.objectwire.org/youtube' },
        { name: 'Kai Cenat', item: PAGE_URL },
      ]}
      hero={{
        image: { src: IMAGE_URL, alt: 'Kai Cenat, Twitch streamer and content creator' },
        gradient: 'linear-gradient(135deg, #0f0f0f 0%, #1a0a2e 50%, #7c3aed 100%)',
        badges: [
          { label: 'New York City', style: 'default' },
          { label: 'Most Subbed on Twitch', style: 'achievement' },
          { label: 'AMP Group', style: 'default' },
        ],
        name: 'Kai Cenat',
        subtitle: 'Twitch Streamer, YouTuber, AMP Member',
        description:
          'Kai Cenat is the most-subscribed creator in Twitch history, a New York City-born streamer who built his audience through gaming, IRL streams, celebrity collabs with Drake and Central Cee, and a record-breaking subathon that redefined live streaming milestones.',
        ctaButtons: [
          { href: 'https://www.twitch.tv/kaicenat', label: 'Twitch', icon: '🎮', variant: 'accent' },
          { href: 'https://www.youtube.com/@KaiCenat', label: 'YouTube', icon: '▶', variant: 'secondary' },
        ],
      }}
      sidebar={{
        infobox: {
          image: { src: IMAGE_URL, alt: 'Kai Cenat profile photo' },
          name: 'Kai Cenat',
          subtitle: 'Twitch Streamer, YouTuber',
          rows: [
            { label: 'Born', value: 'December 16, 2001' },
            { label: 'Age (2026)', value: '24' },
            { label: 'Nationality', value: 'American' },
            { label: 'From', value: 'New York City, NY' },
            { label: 'Group', value: 'AMP (Any Means Possible)' },
            { label: 'Occupation', value: 'Streamer, YouTuber, Content Creator' },
            {
              label: 'Twitch',
              value: 'kaicenat',
              href: 'https://www.twitch.tv/kaicenat',
            },
            {
              label: 'YouTube',
              value: '@KaiCenat',
              href: 'https://www.youtube.com/@KaiCenat',
            },
            {
              label: 'Instagram',
              value: '@kaicenat',
              href: 'https://www.instagram.com/kaicenat',
            },
            { label: 'Twitch Subs', value: '20M+ followers' },
            { label: 'Record', value: 'Most-subscribed Twitch channel (all-time)' },
            { label: 'Net Worth', value: 'Est. $15M-$20M (2026)' },
          ],
        },
        linkSections: [
          {
            heading: 'Official Channels',
            links: [
              { href: 'https://www.twitch.tv/kaicenat', label: 'Twitch: kaicenat', note: 'primary' },
              { href: 'https://www.youtube.com/@KaiCenat', label: 'YouTube: @KaiCenat' },
              { href: 'https://www.instagram.com/kaicenat', label: 'Instagram: @kaicenat' },
            ],
          },
        ],
        timeline: [
          { year: '2018', event: 'Created YouTube channel; early comedy and lifestyle content' },
          { year: '2021', event: 'Joined AMP group; TikTok growth accelerated; crossed 1M Twitch followers' },
          { year: '2022', event: 'Became the most-gifted-subscriptions recipient on Twitch; Drake stream collab' },
          { year: '2023', event: 'Record-breaking subathon: 35 days continuously streaming, breaking Twitch records; Central Cee collab stream from London' },
          { year: '2024', event: 'Crossed 20M Twitch followers; celebrity basketball event; multiple viral IRL streams' },
          { year: '2026', event: 'Continues as the most-subscribed Twitch streamer; active YouTube and social presence' },
        ],
        relatedLinks: [
          { href: '/youtube', label: 'YouTube Hub' },
          { href: '/youtube/ishowspeed', label: 'IShowSpeed Profile' },
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
        { id: 'who-is', label: 'Who Is Kai Cenat' },
        { id: 'twitch', label: 'Kai Cenat Twitch | Most-Subscribed Channel' },
        { id: 'amp', label: 'Kai Cenat and AMP | Any Means Possible' },
        { id: 'drake', label: 'Kai Cenat and Drake | Celebrity Streams' },
        { id: 'subathon', label: 'Kai Cenat Subathon | Record-Breaking 2023' },
        { id: 'net-worth', label: 'Kai Cenat Net Worth 2026' },
        { id: 'social', label: 'Kai Cenat Social Media | Official Accounts' },
        { id: 'summary', label: 'Kai Cenat 2026 | Creator Summary' },
      ]}
      tags={['Kai Cenat', 'Twitch', 'YouTube', 'New York', 'AMP', 'Streaming']}
    >

      <YTSection id="who-is" heading="Who Is Kai Cenat">
        <p>
          Kai Cenat (full name Kai Carlo Cenat III) is an American content creator and streamer born on December 16, 2001, in New York City. He is the most-subscribed creator in Twitch history and a member of AMP (Any Means Possible), a New York-based creator collective. In 2026, he is 24 years old.
        </p>
        <p>
          His content spans gaming, IRL streams, celebrity collaborations, and large-scale community events. His appeal is rooted in high energy, genuine charisma, and an ability to create compelling moments in real time, whether alone on stream or alongside major artists like Drake, Lil Baby, and Central Cee.
        </p>
      </YTSection>

      <div className="grid grid-cols-3 gap-4 my-6">
        <YTStat value="20M+" label="Twitch Followers" color="purple" />
        <YTStat value="35" label="Subathon Days" color="red" />
        <YTStat value="24" label="Age in 2026" color="gray" />
      </div>

      <YTSection id="twitch" heading="Kai Cenat Twitch | Most-Subscribed Channel">
        <p>
          Kai Cenat's{' '}
          <a href="https://www.twitch.tv/kaicenat" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Twitch channel</a> surpassed all other creators to become the most-subscribed channel in platform history, a milestone reached through a combination of explosive community growth and a record-breaking 35-day subathon in 2023.
        </p>
        <p>
          His streams attract tens of thousands of concurrent viewers and regularly feature unscripted, high-stakes moments that generate viral clips across TikTok and Twitter/X. The live format rewards his natural comedic timing and social intelligence in ways that edited YouTube content cannot fully replicate.
        </p>
        <p>
          As of 2026, his channel at{' '}
          <a href="https://www.youtube.com/@KaiCenat" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">YouTube @KaiCenat</a> houses highlights and long-form videos from his streams, extending his reach beyond active Twitch viewers.
        </p>
      </YTSection>

      <YTSection id="amp" heading="Kai Cenat and AMP | Any Means Possible">
        <p>
          AMP (Any Means Possible) is a New York-based creator collective that includes Kai Cenat alongside Duke Dennis, Fanum, ImDavisss, Agent00, and Chrisnxtdoor. The group produces collaborative content, runs a shared YouTube channel, and regularly appears together on individual members' streams.
        </p>
        <p>
          AMP's New York roots distinguish the group from West Coast creator houses and bring an authentic urban energy to their content. The collective format gives each member's channel additional exposure through cross-promotion and combined audience reach.
        </p>
      </YTSection>

      <YTSection id="drake" heading="Kai Cenat and Drake | Celebrity Stream Collabs">
        <p>
          Kai Cenat's celebrity collaborations, particularly his streams with Canadian rapper Drake, represent some of the highest-profile crossover moments between mainstream music and live streaming culture. Drake appeared on Kai's Twitch stream for a gaming session and fan interaction, drawing peak viewership in the hundreds of thousands and generating widespread media coverage.
        </p>
        <p>
          Additional celebrity collabs with Central Cee (streamed from London), Lil Baby, and NBA players have positioned Kai Cenat as a cultural hub creator, someone who bridges streaming culture with mainstream entertainment in a way few creators have achieved at his age.
        </p>
      </YTSection>

      <YTCallout
        heading="Kai Cenat 2023 Subathon | Key Stats"
        color="purple"
        items={[
          { label: 'Duration', detail: '35 days of continuous live streaming on Twitch' },
          { label: 'Record', detail: 'Broke the all-time Twitch subscriber record during the event' },
          { label: 'Guests', detail: 'Dozens of celebrity and creator guests appeared throughout the subathon' },
          { label: 'Impact', detail: 'Cemented him as the face of modern Twitch streaming globally' },
        ]}
      />

      <YTSection id="subathon" heading="Kai Cenat Subathon | Record-Breaking 2023">
        <p>
          In 2023, Kai Cenat ran a subathon on Twitch that lasted 35 days, during which every new subscriber added time to the stream. The event broke the all-time Twitch subscriber record and became a cultural moment in live streaming history. Throughout the subathon, he hosted dozens of celebrity and creator guests and maintained consistent viewership across the entire duration.
        </p>
        <p>
          The subathon demonstrated both his stamina and his community's genuine investment in his content, turning a format previously used by smaller creators into a major media event.
        </p>
      </YTSection>

      <YTQuote
        quote="New York raised me. AMP made me. Twitch gave me the world. I'm just grateful."
        attribution="Kai Cenat"
        role="Streamer, AMP Member"
      />

      <YTSection id="net-worth" heading="Kai Cenat Net Worth | Estimated $15M-$20M in 2026">
        <p>
          Kai Cenat's net worth in 2026 is estimated between $15 million and $20 million. Revenue streams include Twitch subscriber and bits revenue, YouTube AdSense on highlights and original videos, brand deals with major tech and gaming companies, merchandise, and live event appearance fees. His record-breaking Twitch status gives him significant leverage in brand partnership negotiations.
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
          { platform: 'Twitch', handle: 'kaicenat', followers: '20M+', focus: 'Live streams, gaming, IRL, celebrity collabs' },
          { platform: 'YouTube', handle: '@KaiCenat', followers: '10M+', focus: 'Highlights, vlogs, full streams' },
          { platform: 'Instagram', handle: '@kaicenat', followers: '7M+', focus: 'Lifestyle, clips' },
        ]}
        highlightKey="platform"
        highlightValue="Twitch"
      />

      <YTSection id="social" heading="Kai Cenat Social Media | Official Accounts 2026">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>
            <a href="https://www.twitch.tv/kaicenat" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Twitch: kaicenat (20M+ followers, most-subscribed channel)
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@KaiCenat" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              YouTube: @KaiCenat (10M+ subscribers)
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/kaicenat" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Instagram: @kaicenat
            </a>
          </li>
        </ul>
      </YTSection>

      <YTSection id="summary" heading="Kai Cenat 2026 | Creator Summary">
        <p>
          Kai Cenat in 2026 stands as the most-subscribed creator in Twitch history and one of the most culturally influential streamers in the world. His crossover into mainstream celebrity culture, his AMP collective, and his record-breaking subathon have made him a defining figure in the live streaming era.
        </p>
        <p>
          For more YouTube and streaming profiles, visit the{' '}
          <a href="/youtube" className="text-blue-600 hover:text-blue-800 underline">YouTube Hub</a>, or read about{' '}
          <a href="/youtube/ishowspeed" className="text-blue-600 hover:text-blue-800 underline">IShowSpeed</a> and{' '}
          <a href="/youtube/ksi" className="text-blue-600 hover:text-blue-800 underline">KSI</a>.
        </p>
      </YTSection>

    </YoutubeCreatorPage>
  );
}
