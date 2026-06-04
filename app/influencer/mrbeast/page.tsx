import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArticlePage,
  InfoBox,
  TableOfContents,
  Section,
  RelatedLinks,
  Quote,
  ExternalLinks,
} from '@/components/articles/ArticlePage';
import { PrismTable } from '@/components/articles/PrismTable';
import { SourcesInterlink } from '@/components/SourcesInterlink';

export const revalidate = 86400;

const SLUG = '/influencer/mrbeast';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/influncer/usa/mr_beast.png';

export const metadata: Metadata = {
  title: 'MrBeast | Jimmy Donaldson Age, Net Worth, Bio & YouTube 2026',
  description:
    'MrBeast (Jimmy Donaldson) is the most-subscribed solo YouTube creator, with 350M+ subscribers. Full biography: age, net worth, Beast Games, Feastables, philanthropy, and controversies through 2026.',
  keywords: [
    'MrBeast',
    'MrBeast YouTube',
    'MrBeast subscribers',
    'Jimmy Donaldson',
    'MrBeast age',
    'MrBeast age 2026',
    'MrBeast net worth',
    'MrBeast Beast Games',
    'MrBeast Feastables',
    'MrBeast philanthropy',
    'MrBeast biography',
    'MrBeast 2026',
    'most subscribed YouTube channel',
    'MrBeast controversy',
    'Beast Games Amazon Prime',
    'MrBeast Burger',
    'MrBeast real name',
    'Beast Industry Studios',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'MrBeast | Jimmy Donaldson Age, Net Worth & Bio 2026',
    description:
      'Jimmy Donaldson (MrBeast), 27, is the most-subscribed solo YouTube creator. Full biography: 350M subscribers, Beast Games Season 1-3, Feastables, philanthropy, and career timeline.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Creator Desk'],
    section: 'Creator',
    publishedTime: '2026-04-22T10:00:00Z',
    modifiedTime: '2026-06-01T00:00:00Z',
    tags: ['MrBeast', 'YouTube', 'Jimmy Donaldson', 'Creator'],
    images: [
      {
        url: `https://www.objectivewire.com${OG_IMAGE}`,
        width: 1200,
        height: 675,
        alt: 'MrBeast, Jimmy Donaldson, most-subscribed solo YouTube creator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MrBeast | 350M YouTube Subscribers, Beast Games & Bio 2026',
    description:
      'Jimmy Donaldson profile: YouTube analytics, Beast Games, Feastables brand, philanthropy, and controversy timeline.',
    images: [`https://www.objectivewire.com${OG_IMAGE}`],
  },
};

export default function MrBeastPage() {
  return (
    <ArticlePage
      title="MrBeast"
      subtitle="Jimmy Donaldson, born May 7, 1998, is an American YouTuber and entrepreneur who operates the most-subscribed solo channel on the platform. His production company, Beast Industry Studios, produces high-budget challenge and philanthropy videos distributed across YouTube, Amazon Prime Video, and social media."
      category="Creator"
      lastUpdated="June 1, 2026"
      slug="influencer-mrbeast"
      url={SLUG}
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/influencer', label: 'Influencer' },
        { href: SLUG, label: 'MrBeast' },
      ]}
      infoBox={{
        title: 'MrBeast',
        image: {
          src: OG_IMAGE,
          alt: 'MrBeast, Jimmy Donaldson, most-subscribed solo YouTube creator',
          caption: 'Jimmy Donaldson (MrBeast), Greenville, North Carolina',
        },
        sections: [
          {
            heading: 'Personal',
            items: [
              { label: 'Born', value: 'Jimmy Donaldson, May 7, 1998 (age 27)' },
              { label: 'Origin', value: 'Greenville, North Carolina, USA' },
              { label: 'Nationality', value: 'American' },
              { label: 'Occupation', value: 'YouTuber, Entrepreneur, Philanthropist' },
            ],
          },
          {
            heading: 'YouTube',
            items: [
              { label: 'Channel', value: '@MrBeast (est. 2012)' },
              { label: 'Subscribers', value: '350M+ (June 2026)' },
              { label: 'Total Views', value: '65B+' },
              { label: 'Genre', value: 'Challenge, Philanthropy, Stunt' },
            ],
          },
          {
            heading: 'Business',
            items: [
              { label: 'Company', value: 'Beast Industry Studios' },
              { label: 'Brands', value: 'Feastables, MrBeast Burger (ended)' },
              { label: 'Streaming', value: 'Beast Games, Amazon Prime Video' },
              { label: 'Est. Net Worth', value: '$700M+ (2026 est.)' },
            ],
          },
          {
            heading: 'Social',
            links: [
              { href: 'https://www.youtube.com/@MrBeast', label: 'YouTube @MrBeast', external: true },
              { href: 'https://www.instagram.com/mrbeast', label: 'Instagram @mrbeast', external: true },
              { href: 'https://x.com/MrBeast', label: 'X / Twitter @MrBeast', external: true },
            ],
          },
          {
            heading: 'Coverage',
            links: [
              { href: '/influencer/mrbeast/beast-games-season-3-iatse-union', label: 'Beast Games S3 IATSE Union (2026)', external: false },
              { href: '/influencer/mrbeast-launches-beast-games-season-2-casting', label: 'Beast Games Season 2 Casting', external: false },
            ],
          },
        ],
      }}
      tableOfContents={[
        { id: 'overview', label: 'Overview' },
        { id: 'early-life', label: 'Early Life and Career Start' },
        { id: 'youtube-channel', label: 'YouTube Channel' },
        { id: 'beast-games', label: 'Beast Games' },
        { id: 'business-empire', label: 'Business Empire' },
        { id: 'philanthropy', label: 'Philanthropy' },
        { id: 'controversies', label: 'Controversies' },
        { id: 'labor-relations', label: 'Labor Relations' },
        { id: 'channel-stats', label: 'Channel Statistics' },
      ]}
      relatedLinks={[
        { href: '/influencer/mrbeast/beast-games-season-3-iatse-union', label: 'Beast Games Season 3 IATSE Unionization', description: 'IATSE voluntary recognition covers 500+ crew, retrospective back pay' },
        { href: '/influencer/mrbeast-launches-beast-games-season-2-casting', label: 'Beast Games Season 2 Casting Open', description: 'Amazon Prime Video renewal, casting portal open' },
        { href: '/influencer', label: 'Influencer Hub', description: 'Full directory of creator profiles' },
        { href: '/creator', label: 'Creator News Hub', description: 'YouTube, TikTok, and creator industry news' },
        { href: '/youtube', label: 'YouTube News', description: 'YouTube platform and creator coverage' },
      ]}
    >
      <TableOfContents
        items={[
          { id: 'overview', label: 'Overview' },
          { id: 'early-life', label: 'Early Life and Career Start' },
          { id: 'youtube-channel', label: 'YouTube Channel' },
          { id: 'beast-games', label: 'Beast Games' },
          { id: 'business-empire', label: 'Business Empire' },
          { id: 'philanthropy', label: 'Philanthropy' },
          { id: 'controversies', label: 'Controversies' },
          { id: 'labor-relations', label: 'Labor Relations' },
          { id: 'channel-stats', label: 'Channel Statistics' },
        ]}
      />

      <Section id="overview" title="Overview">
        <p>
          <strong>MrBeast</strong> (born Jimmy Donaldson, May 7, 1998) is the most-subscribed solo creator on YouTube as of 2026, with over 350 million subscribers on his primary channel. Based in Greenville, North Carolina, Donaldson operates <strong>Beast Industry Studios</strong>, a production company employing hundreds of full-time staff to produce large-scale challenge, stunt, and philanthropy videos for YouTube and streaming distribution.
        </p>
        <p>
          His content formula centers on high-cost spectacle: competitions with six-figure prize pools, large-scale charity events, and endurance challenges filmed in purpose-built sets or global locations. Donaldson began uploading to YouTube in 2012 at age 13, reached 1 million subscribers in 2017, and accelerated to become the platform's top solo channel by 2022. His net worth is estimated at $700 million or more as of 2026, generated through YouTube ad revenue, brand partnerships, Feastables chocolate, and streaming deals.
        </p>
      </Section>

      <Section id="early-life" title="Early Life and Career Start">
        <p>
          Jimmy Donaldson was born on May 7, 1998, in Wichita, Kansas, and raised in Greenville, North Carolina, where he attended Greenville Christian Academy. He began uploading to YouTube in 2012 under the handle MrBeast6000, initially posting gaming content and commentary. His early videos attracted minimal views, and Donaldson has described the period as intensive study of YouTube's algorithm and audience behavior.
        </p>
        <p>
          The turning point came in January 2017 when Donaldson uploaded a video of himself counting to 100,000, a 40-hour endurance stunt that attracted viral attention and accelerated his channel to 1 million subscribers within months. He subsequently dropped out of East Carolina University after his freshman year to pursue YouTube full-time, a decision that marked the beginning of his professional production operation.
        </p>
        <p>
          Donaldson has cited early creators including PewDiePie and various challenge channels as formative influences, and has publicly described his approach to video strategy as a form of obsessive optimization, reading retention graphs and thumbnail click-through data across thousands of videos before finding patterns that drove growth.
        </p>
      </Section>

      <Section id="youtube-channel" title="YouTube Channel">
        <p>
          The <strong>@MrBeast</strong> channel on YouTube hosts the flagship challenge and philanthropy content that drives the majority of Donaldson's subscriber count and brand recognition. The channel publishes approximately one to two videos per month, with production costs per video frequently exceeding $1 million and occasionally reaching $5 million or more for marquee productions.
        </p>
        <p>
          Donaldson operates several subsidiary channels: <strong>MrBeast Gaming</strong> (gaming-specific challenge content), <strong>Beast Reacts</strong> (reaction and commentary), and <strong>Beast Philanthropy</strong> (a channel dedicated entirely to charitable giving, operated as a non-profit-adjacent entity where all revenue is reinvested into charitable programs). MrBeast Shorts serves as the short-form vertical distribution hub.
        </p>
        <Quote source="Jimmy Donaldson, 2023">
          I reinvest everything. Every dollar the channel makes goes back into making the next video better. That is the only sustainable model at this scale.
        </Quote>
        <p>
          His international dubbed channels, producing content in Spanish, Portuguese, Hindi, French, Arabic, Russian, and other languages, have collectively accumulated several hundred million additional subscribers by 2026, making the total MrBeast network one of the largest content operations in the world by subscriber volume.
        </p>
      </Section>

      <Section id="beast-games" title="Beast Games">
        <p>
          <strong>Beast Games</strong> is a large-scale reality competition series produced by Beast Industry Studios for Amazon Prime Video. The first season premiered in December 2024, featuring 1,000 contestants competing for a $5 million prize, the largest cash prize in game show history at the time. The season drew record viewership for Amazon's unscripted programming.
        </p>
        <p>
          Season 1 was produced under an <strong>IATSE union agreement</strong> after an initial organizing effort by crew members. Season 2 casting was announced in early 2026, with Donaldson confirming the show's renewal via YouTube and social media. A production office was established in Greenville, North Carolina, consistent with Beast Industry Studios' base of operations.
        </p>
        <p>
          <strong>Season 3</strong> pre-production began in 2026 under non-union terms, departing from the Season 1 precedent. An internal organizing drive by IATSE-affiliated crew members resulted in voluntary recognition by Beast Industry Studios, covering more than 500 crew members and requiring retrospective back pay for completed non-union pre-production phases. See the full coverage:{' '}
          <Link href="/influencer/mrbeast/beast-games-season-3-iatse-union" className="text-blue-600 hover:text-blue-800 underline">
            Beast Games Season 3 IATSE Unionization
          </Link>.
        </p>
      </Section>

      <Section id="business-empire" title="Business Empire">
        <p>
          Donaldson's primary consumer brand is <strong>Feastables</strong>, a chocolate bar and snack company launched in January 2022. Feastables distributes through major US retail chains including Walmart, Target, and Kroger, and has expanded to international markets. The brand uses Donaldson's YouTube channel as its primary marketing channel, integrating product placements into challenge videos.
        </p>
        <p>
          <strong>MrBeast Burger</strong>, a ghost kitchen brand launched in 2020, expanded to over 1,700 locations through a virtual kitchen partnership but faced sustained franchise quality complaints and legal disputes before Donaldson's exit from the arrangement in 2023. The brand's collapse was documented publicly in a video Donaldson uploaded criticizing the franchise operator's quality control standards.
        </p>
        <p>
          Beast Industry Studios serves as the operational parent for all production, employing full-time production staff, creative directors, editors, and business development teams in Greenville. The company's production output includes YouTube originals, Amazon Prime Video content, and branded integration campaigns.
        </p>
      </Section>

      <Section id="philanthropy" title="Philanthropy">
        <p>
          Donaldson's philanthropy content spans both integrated challenge videos and the standalone <strong>Beast Philanthropy</strong> channel, which operates with a model where all advertising revenue from the channel is reinvested into charitable programs. Documented philanthropic activities include food bank donations exceeding 10 million pounds of food, eyeglasses distributions, well construction projects in developing nations, and large-scale cash giveaways to individuals experiencing financial hardship.
        </p>
        <p>
          The <strong>#TeamTrees</strong> campaign (2019), co-organized with Mark Rober, raised over $23 million from YouTube creators and viewers to plant 23 million trees through the Arbor Day Foundation. A follow-up campaign, <strong>#TeamSeas</strong> (2021), raised over $30 million to remove 30 million pounds of trash from oceans and coastlines.
        </p>
      </Section>

      <Section id="controversies" title="Controversies">
        <p>
          Donaldson and Beast Games Season 1 faced significant controversy following the publication of complaints from contest participants in November 2024, alleging inadequate medical care, unsafe conditions, and mistreatment during production. Multiple contestants posted accounts on social media describing injuries, illness, and insufficient support during the extended filming period.
        </p>
        <p>
          Amazon and Beast Industry Studios issued responses disputing the most serious characterizations, and Donaldson addressed the allegations in a YouTube video acknowledging production challenges while defending the overall safety record of the production. An independent review was referenced but no formal findings were published before Season 2 was announced.
        </p>
        <p>
          In 2023, Donaldson faced controversy related to the departure and public statements of former employees, including allegations regarding workplace culture and management practices at Beast Industry Studios. Donaldson addressed some allegations directly via social media and in interviews.
        </p>
      </Section>

      <Section id="labor-relations" title="Labor Relations">
        <p>
          The labor history of Beast Industry Studios reflects a broader tension between digital-native production models and traditional Hollywood union frameworks. Season 1 of Beast Games was produced under IATSE terms. Season 3 pre-production began without union coverage, triggering an organizing campaign that resulted in <strong>voluntary recognition</strong> of IATSE representation for more than 500 crew members and a retroactive back pay obligation for all completed non-union pre-production work.
        </p>
        <p>
          The Season 3 outcome is considered a structural precedent for the industry, establishing that large-scale YouTube-originated productions that cross into streaming cannot operate outside traditional labor frameworks without facing organizing risk. Industry analysts tracking 2026 entertainment labor trends have identified the Beast Games case as a model that IATSE will reference in future organizing campaigns against high-budget unscripted content.
        </p>
        <p>
          Full coverage of the Season 3 IATSE case:{' '}
          <Link href="/influencer/mrbeast/beast-games-season-3-iatse-union" className="text-blue-600 hover:text-blue-800 underline">
            Beast Games Season 3 IATSE Unionization Forces Retrospective Pay
          </Link>.
        </p>
      </Section>

      <Section id="channel-stats" title="Channel Statistics">
        <PrismTable
          accent="red"
          headers={['Channel', '2026 Subscribers']}
          rows={[
            ['@MrBeast (flagship)', '350M+'],
            ['MrBeast Gaming', '45M+'],
            ['Beast Reacts', '25M+'],
            ['Beast Philanthropy', '25M+'],
            ['MrBeast Shorts', '30M+'],
            ['International Dubbed Channels (combined)', '300M+ est.'],
          ]}
          caption="MrBeast network channel subscriber counts as of June 2026. International dubbed channel figures are aggregated estimates."
        />
      </Section>

      <SourcesInterlink
        accentColor="red"
        sources={[
          {
            number: 1,
            url: 'https://www.youtube.com/@MrBeast',
            title: 'MrBeast YouTube Channel',
            description: 'Official MrBeast channel, 350M+ subscribers as of June 2026.',
          },
          {
            number: 2,
            url: 'https://www.primevideo.com/detail/Beast-Games/',
            title: 'Beast Games on Amazon Prime Video',
            description: 'Official Amazon listing for Beast Games, the MrBeast game show series.',
          },
          {
            number: 3,
            url: 'https://feastables.com',
            title: 'Feastables',
            description: 'MrBeast chocolate and snack brand official site.',
          },
        ]}
        internalLinks={[
          { href: '/influencer/mrbeast/beast-games-season-3-iatse-union', label: 'Beast Games Season 3 IATSE Union Coverage' },
          { href: '/influencer/mrbeast-launches-beast-games-season-2-casting', label: 'Beast Games Season 2 Casting Announced' },
          { href: '/influencer', label: 'Influencer Hub' },
          { href: '/creator', label: 'Creator News' },
        ]}
      />
    </ArticlePage>
  );
}
