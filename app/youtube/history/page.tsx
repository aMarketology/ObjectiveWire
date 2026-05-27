import type { Metadata } from 'next';
import Link from 'next/link';
import NewsArticle from '@/components/articles/NewsArticle';
import { KeyTakeaways } from '@/components/articles/KeyTakeaways';
import { Timeline } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = '/youtube/history';
const PAGE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/e/e1/YouTube_play_buttom_icon_%282013-2017%29.png';

export const metadata: Metadata = {
  title: 'YouTube History | Founded 2005 to 2B Users in 2026',
  description:
    'YouTube was founded in 2005 by Chad Hurley, Steve Chen, and Jawed Karim and acquired by Google for $1.65B in 2006. Today it has 2 billion monthly users and $36B in annual ad revenue.',
  keywords: [
    'YouTube history',
    'YouTube founded',
    'YouTube founders',
    'Chad Hurley Steve Chen Jawed Karim',
    'YouTube Google acquisition',
    'YouTube 2026',
    'YouTube users 2026',
    'YouTube revenue 2026',
    'Neal Mohan YouTube CEO',
    'YouTube Shorts history',
    'YouTube Premium subscribers',
    'YouTube TV subscribers',
    'history of YouTube',
    'YouTube company history',
    'YouTube timeline',
    'YouTube current state',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'YouTube History | Founded 2005 to 2B Users in 2026',
    description:
      'From a San Mateo garage in 2005 to 2 billion monthly users and $36B in ad revenue, this is the full history and current state of YouTube.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'oWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-21T12:00:00Z',
    modifiedTime: '2026-05-21T12:00:00Z',
    section: 'YouTube',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'YouTube logo history' }],
    tags: ['YouTube', 'YouTube History', 'Google', 'Creator Economy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube History | From 2005 Garage Startup to 2B Users',
    description:
      'Founded by 3 PayPal engineers, bought by Google for $1.65B, and now the internet\'s biggest video platform. Full YouTube history.',
    images: [OG_IMAGE],
  },
};

export default function YouTubeHistoryPage() {
  return (
    <NewsArticle
      title="YouTube History | Founded 2005 to 2 Billion Users in 2026"
      subtitle="Three former PayPal engineers built the world's dominant video platform in a San Mateo garage. Twenty-one years later, YouTube generates over $36 billion a year."
      category="YouTube"
      categoryColor="red"
      topicTag="entertainment"
      publishDate="May 21, 2026"
      readTime="11 min read"
      author={{
        name: 'Jack Sterling',
        role: 'Creator Economy Reporter',
        authorSlug: 'jack-sterling',
      }}
      slug="youtube-history"
      url={SLUG}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'YouTube', item: '/youtube' },
        { name: 'History of YouTube', item: SLUG },
      ]}
      tags={['YouTube', 'Google', 'Creator Economy', 'Neal Mohan', 'YouTube Shorts', 'Tech History']}
      faqItems={[
        {
          question: 'When was YouTube founded?',
          answer:
            'YouTube was founded on February 14, 2005 by Chad Hurley, Steve Chen, and Jawed Karim, three former PayPal employees, in a garage in San Mateo, California.',
        },
        {
          question: 'When did Google buy YouTube?',
          answer:
            'Google acquired YouTube on October 9, 2006 for $1.65 billion in stock, one of the most consequential acquisitions in tech history.',
        },
        {
          question: 'How many users does YouTube have in 2026?',
          answer:
            'YouTube has over 2 billion monthly logged-in users in 2026, making it the second most visited website in the world behind only Google Search.',
        },
        {
          question: 'Who is the CEO of YouTube in 2026?',
          answer:
            'Neal Mohan is the CEO of YouTube as of 2026. He took over in February 2023 after Susan Wojcicki stepped down following nine years as CEO.',
        },
        {
          question: 'How much revenue does YouTube make?',
          answer:
            'YouTube generated approximately $36.1 billion in advertising revenue in 2025, accounting for roughly 10 percent of Alphabet\'s total annual revenue.',
        },
        {
          question: 'How many hours of video are uploaded to YouTube per minute?',
          answer:
            'As of 2026, approximately 500 hours of video are uploaded to YouTube every minute, a figure that has held steady since 2022.',
        },
      ]}
      moreFromHub={[
        { slug: 'youtube-spanish', title: 'Spanish YouTubers 2026 | Top Channels', url: '/youtube/spanish', category: 'YouTube' },
        { slug: 'youtube-nelk-boys', title: 'NELK Boys | Full History', url: '/youtube/nelk-boys', category: 'YouTube' },
        { slug: 'youtube-logan-paul', title: 'Logan Paul | Career, Boxing, WWE', url: '/youtube/logan-paul', category: 'YouTube' },
        { slug: 'youtube-mat-armstrong', title: 'Mat Armstrong | Car Rebuilds, Net Worth', url: '/youtube/mat-armstrong', category: 'YouTube' },
      ]}
      moreFromHubLabel="YouTube"
      moreFromHubHref="/youtube"
    >
      <KeyTakeaways
        color="red"
        items={[
          'YouTube was founded on February 14, 2005 by Chad Hurley, Steve Chen, and Jawed Karim, three former PayPal engineers, in San Mateo, California.',
          'Google acquired YouTube on October 9, 2006 for $1.65 billion in stock, fourteen months after the platform launched.',
          'YouTube has over 2 billion monthly logged-in users in 2026 and 500 hours of video are uploaded every minute.',
          'YouTube generated $36.1 billion in advertising revenue in 2025, roughly 10 percent of Alphabet\'s total revenue.',
          'YouTube Shorts reached 70 billion daily views in 2024, cementing the short-form feed as the platform\'s primary growth engine.',
        ]}
      />

      <div>
        <p>
          YouTube is the world's largest video-sharing platform, founded on February 14, 2005 by Chad Hurley, Steve Chen, and Jawed Karim in San Mateo, California, and acquired by Google for $1.65 billion in October 2006. In 2026, the platform hosts over 2 billion monthly logged-in users, generates more than $36 billion in annual advertising revenue, and receives 500 hours of new video every minute. From a single uploaded clip of a man at a zoo to an engine powering a $300 billion corner of the internet, YouTube's twenty-one-year arc is the most important story in digital media.
        </p>

        <p>
          This article covers the full history of YouTube, from its 2005 founding through the Google acquisition, the creator economy boom, the rise of YouTube Shorts, and the platform's current state under CEO Neal Mohan in 2026.
        </p>

        <h2>YouTube Founding | Three PayPal Engineers, One Garage</h2>

        <p>
          In early 2005, three friends who had worked together at PayPal set out to solve a simple problem: sharing video online was unnecessarily difficult. Chad Hurley, Steve Chen, and Jawed Karim had noticed that video clips from the 2004 Super Bowl halftime show and the Indian Ocean tsunami were near-impossible to share via email. Existing platforms like Google Video required desktop software and long upload queues. The three engineers decided to build something faster and more accessible.
        </p>

        <p>
          The company was incorporated on February 14, 2005, and began operating out of a garage in San Mateo, California. Hurley handled design and user experience. Chen managed technical infrastructure. Karim contributed early product ideas, most notably the concept of video timestamps and the recommendation engine. The platform's first upload came from Karim himself: an 18-second clip titled <em>Me at the zoo</em>, posted on April 23, 2005, showing him standing in front of the elephant enclosure at the San Diego Zoo.
        </p>

        <p>
          Within six months of its public beta launch in May 2005, YouTube was serving more than 2 million video views per day. By December 2005, that figure had risen to 8 million. The platform had tapped into something the internet had been building toward for years: a frictionless way to watch and share video with no download required, no plugin, just a browser window and a URL.
        </p>

        <p>
          The original team was funded by a $3.5 million seed round from Sequoia Capital in November 2005. Sequoia had also invested in PayPal, which gave the deal a certain symmetry. The founders moved YouTube into its first real office, on Cherry Avenue in San Bruno, California, and began hiring.
        </p>

        <h2>Google Acquires YouTube | $1.65 Billion in 2006</h2>

        <p>
          By the summer of 2006, YouTube was the fastest-growing website on the internet. The platform was serving 100 million video views per day, a number that dwarfed every competitor including Google Video, which Google had launched independently in January 2005. Google's own video product was functional but lacked the social layer that made YouTube compulsive, specifically the ability for any user to upload, comment, and subscribe with a free account.
        </p>

        <p>
          Google CEO Eric Schmidt and co-founder Larry Page initiated acquisition talks in September 2006. The deal closed on October 9, 2006 for $1.65 billion in Google stock. It was the largest acquisition Google had made at that point and one of the most debated in tech history. Critics argued YouTube was overvalued and drowning in copyright liability. Supporters argued it was the only video destination that mattered. The supporters were right.
        </p>

        <p>
          At the time of acquisition, YouTube had 65 employees and was losing money. The copyright concern was real: Viacom would file a $1 billion lawsuit against YouTube in 2007, a case that dragged through courts until a final settlement in 2014. Despite those headwinds, Google gave the YouTube team operational independence, kept the brand intact, and focused its engineering resources on infrastructure to handle the platform's explosive growth.
        </p>

        <p>
          To understand what Google purchased for $1.65 billion, consider that YouTube's ad revenue in 2025 alone was $36.1 billion. The acquisition ranks among the best investments in corporate history.
        </p>

        <h2>YouTube 2007 to 2012 | Monetization, HD, and the Partner Program</h2>

        <p>
          YouTube's first years under Google were defined by solving three problems simultaneously: copyright liability, server costs, and creator monetization. The platform introduced InVideo advertising in 2007 and partnered with CBS, BBC, and Universal Music Group to host official content, reducing the legal pressure that user uploads had created.
        </p>

        <p>
          The YouTube Partner Program launched in 2007 with a small group of invited creators. For the first time, individual video makers could earn a share of advertising revenue from their uploads. The program expanded to all eligible US creators in 2009, opening monetization to anyone who could accumulate views. This single policy change planted the seed of the creator economy.
        </p>

        <p>
          In 2009, YouTube introduced 1080p HD video support, a significant technical upgrade that began shifting the platform from a short-clip repository into a destination for long-form content. By 2010, YouTube was hosting full concerts, feature-length documentaries, and multi-part series. The platform crossed 2 billion daily video views in 2010.
        </p>

        <Timeline events={[
          { time: 'Feb 14, 2005', title: 'YouTube founded', description: 'Chad Hurley, Steve Chen, and Jawed Karim incorporate YouTube in San Mateo, CA.' },
          { time: 'Apr 23, 2005', title: 'First video uploaded', description: '"Me at the zoo" by Jawed Karim, 18 seconds, San Diego Zoo elephant enclosure.' },
          { time: 'Oct 9, 2006', title: 'Google acquires YouTube', description: '$1.65 billion in Google stock. YouTube keeps its brand and team.' },
          { time: 'May 2007', title: 'Partner Program launched', description: 'YouTube begins sharing ad revenue with creators, the first building block of the creator economy.' },
          { time: 'Nov 2009', title: '1080p HD support', description: 'YouTube begins hosting high-definition video, expanding into long-form content.' },
          { time: 'Mar 2012', title: '1 billion monthly users', description: 'YouTube crosses one billion unique monthly visitors for the first time.' },
          { time: 'Oct 2015', title: 'YouTube Red launches', description: 'YouTube\'s first subscription product, later renamed YouTube Premium.' },
          { time: 'Feb 2017', title: 'YouTube TV launches', description: 'A live TV streaming service with 85+ cable channels, $72.99/month by 2026.' },
          { time: 'Sep 2020', title: 'YouTube Shorts pilots', description: 'Short-form vertical video rolls out in India, directly competing with TikTok.' },
          { time: 'Feb 2023', title: 'Neal Mohan becomes CEO', description: 'Susan Wojcicki steps down. Chief Product Officer Neal Mohan takes over.' },
          { time: '2025', title: '$36.1B ad revenue', description: 'YouTube\'s annual advertising revenue reaches $36.1 billion, roughly 10% of Alphabet\'s total.' },
        ]} />

        <p>
          YouTube crossed 1 billion monthly users in March 2012, a milestone that arrived faster than any digital media platform before it. The figure meant YouTube was reaching one in every seven people on Earth, a penetration rate that television had taken decades to approach in major markets.
        </p>

        <h2>Susan Wojcicki Era | 2014 to 2023</h2>

        <p>
          Susan Wojcicki became YouTube's CEO in February 2014. A Google veteran who had been instrumental in the company's early advertising strategy, Wojcicki oversaw the most consequential decade in YouTube's commercial history. When she took the role, YouTube's annual ad revenue was estimated at around $4 billion. When she stepped down in February 2023, it was north of $29 billion.
        </p>

        <p>
          Wojcicki's tenure was defined by expansion across multiple product lines. YouTube Red launched in October 2015 as a $9.99/month subscription product offering ad-free viewing and exclusive original content. It was later rebranded YouTube Premium in 2018, a name change that better reflected the product's position as a premium tier rather than a streaming service competing directly with Netflix.
        </p>

        <p>
          YouTube TV launched in February 2017, entering the live streaming market with a bundle of over 85 cable and broadcast channels. The product grew to over 8 million subscribers by 2026 and became one of the most significant cable-replacement services in the United States, competing directly with Hulu Live TV and DirecTV Stream.
        </p>

        <p>
          Wojcicki also navigated two of the most difficult periods in the platform's history. The 2017 "Adpocalypse" saw major advertisers including AT&amp;T and Johnson &amp; Johnson pull their spending after their ads appeared alongside extremist content. YouTube responded by overhauling its ad placement policies and building a preferred advertising program that limited ads to channels with verified content records. The advertiser exodus caused short-term revenue pain but resulted in a more stable ad product that fueled the decade's growth.
        </p>

        <p>
          The second crisis arrived in 2019 when YouTube agreed to pay $170 million to settle Federal Trade Commission charges that it had illegally collected personal data from children under 13 without parental consent. The settlement resulted in strict new COPPA compliance rules and the designation of YouTube Kids as a separate, isolated product.
        </p>

        <p>
          Susan Wojcicki passed away on August 9, 2024, after an 18-month battle with lung cancer. She was 56. Tributes from across the technology and creator industries reflected the breadth of her influence. Under her leadership, YouTube became the first platform to prove that video advertising at internet scale could generate tens of billions of dollars annually.
        </p>

        <h2>YouTube Shorts | Competing with TikTok</h2>

        <p>
          YouTube Shorts launched as a pilot in India in September 2020, three months after the Indian government banned TikTok amid tensions with China. The timing was strategic. By entering the short-form vertical video market in a geography where TikTok had just been removed, YouTube was able to test the Shorts format with an enormous ready-made audience without facing its primary competitor directly.
        </p>

        <p>
          Shorts rolled out globally in June 2021. By 2022, the product had surpassed 1.5 billion monthly logged-in users, making it one of the fastest-adopted features in YouTube's history. In March 2023, YouTube expanded Shorts monetization globally, allowing creators to earn ad revenue from short-form content through a revenue-sharing model distinct from the long-form Partner Program.
        </p>

        <p>
          As of 2024, YouTube Shorts receives 70 billion daily views, a figure that exceeds TikTok's publicly reported daily view count. The number is significant because it comes from an average viewer who is also a YouTube long-form user, giving YouTube a conversion funnel that TikTok cannot replicate: a Shorts viewer can click through to a creator's full channel with no platform switch required.
        </p>

        <p>
          The integration of Shorts into the main YouTube app, rather than as a separate product, is widely considered the key structural advantage YouTube holds over TikTok. Advertisers can run campaigns that span both Shorts and long-form inventory, and creators can use Shorts as a discovery channel that funnels subscribers to longer, higher-CPM content.
        </p>

        <h2>YouTube in 2026 | Scale, Revenue, and Platform Position</h2>

        <p>
          YouTube in 2026 is no longer simply a video platform. It is a multi-product media company operating five distinct consumer products: the main YouTube platform, YouTube Shorts, YouTube Premium, YouTube TV, and YouTube Music. Each product serves a different use case, and together they constitute one of the most complete entertainment stacks any single company operates.
        </p>

        <div className="my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm text-left">
            <thead className="bg-red-600 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="px-5 py-3 w-1/3 font-bold">Product</th>
                <th className="px-5 py-3 font-bold">Key Metrics (2026)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="bg-white hover:bg-gray-50 transition-colors">
                <td className="px-5 py-4 font-black text-gray-900">YouTube<br /><span className="font-normal text-xs text-gray-500">Core platform</span></td>
                <td className="px-5 py-4 text-gray-700">2B+ monthly logged-in users | 500 hrs uploaded/min | $36.1B ad revenue (2025)</td>
              </tr>
              <tr className="bg-white hover:bg-gray-50 transition-colors">
                <td className="px-5 py-4 font-black text-gray-900">YouTube Shorts<br /><span className="font-normal text-xs text-gray-500">Short-form vertical video</span></td>
                <td className="px-5 py-4 text-gray-700">70 billion daily views | monetization via Partner Program revenue share</td>
              </tr>
              <tr className="bg-white hover:bg-gray-50 transition-colors">
                <td className="px-5 py-4 font-black text-gray-900">YouTube Premium<br /><span className="font-normal text-xs text-gray-500">Ad-free subscription</span></td>
                <td className="px-5 py-4 text-gray-700">100M+ subscribers globally | $13.99/month (individual, US)</td>
              </tr>
              <tr className="bg-white hover:bg-gray-50 transition-colors">
                <td className="px-5 py-4 font-black text-gray-900">YouTube TV<br /><span className="font-normal text-xs text-gray-500">Live TV streaming</span></td>
                <td className="px-5 py-4 text-gray-700">8M+ US subscribers | $72.99/month | 100+ channels</td>
              </tr>
              <tr className="bg-white hover:bg-gray-50 transition-colors">
                <td className="px-5 py-4 font-black text-gray-900">YouTube Music<br /><span className="font-normal text-xs text-gray-500">Music streaming</span></td>
                <td className="px-5 py-4 text-gray-700">Bundled with Premium | competes with Spotify and Apple Music</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-400 text-center py-2 border-t border-gray-100">YouTube product portfolio and key metrics as of 2026</p>
        </div>

        <p>
          The main platform's advertising business is the engine. Google reports YouTube ad revenue as a separate line item within its advertising segment, and the $36.1 billion figure from 2025 represents a compound annual growth rate of approximately 18 percent since 2020. For context, the entire US television advertising market in 2025 was estimated at around $66 billion. YouTube alone accounts for more than half of that figure while operating with a fraction of the headcount of any broadcast or cable network.
        </p>

        <p>
          The 500-hours-per-minute upload rate is perhaps the most cited statistic in the industry, and for good reason. It means that for every second that passes, YouTube receives more than 8 hours of new video. The platform does not curate this content in the traditional editorial sense. Instead, it routes it through a recommendation algorithm that has been refined over two decades and now accounts for more than 70 percent of watch time on the platform. What users watch is, in most cases, what the algorithm decides to show them.
        </p>

        <h2>Neal Mohan | YouTube's CEO in 2026</h2>

        <p>
          Neal Mohan became YouTube's CEO on February 16, 2023, succeeding Susan Wojcicki after serving as the platform's Chief Product Officer since 2015. Mohan joined Google in 2008 via the acquisition of DoubleClick, where he had been VP of Product. His background is in advertising technology, which makes him well suited to lead a platform whose primary business is selling ads against video content.
        </p>

        <p>
          Mohan's first two years as CEO were defined by three strategic priorities: growing Shorts monetization, expanding YouTube's position in the living room via connected TVs, and deepening the platform's investment in podcasts, which YouTube has aggressively positioned as a video-first medium. In 2024, YouTube surpassed Spotify in weekly US podcast listener share for the first time, driven by video podcast formats that traditional audio platforms cannot support.
        </p>

        <p>
          On the creator side, Mohan has maintained and expanded the Partner Program's share of ad revenue distributed to creators. YouTube reported paying out more than $70 billion to creators, artists, and media companies in the three years between 2021 and 2023, a figure that underscores the platform's role as the primary income source for tens of thousands of full-time content creators globally. See the full{' '}
          <Link href="/youtube" className="text-blue-600 hover:text-blue-800 underline">
            YouTube creator hub
          </Link>{' '}
          for in-depth profiles on the individual creators driving this economy.
        </p>

        <h2>YouTube and the Creator Economy | What the Numbers Mean</h2>

        <p>
          YouTube did not invent the creator economy, but it built the infrastructure that made it commercially viable. The Partner Program, launched in its open form in 2009, established the model that every subsequent platform has copied: allow any creator to monetize, take a cut of ad revenue, and distribute the remainder based on views. The specific split, 45 percent to YouTube and 55 percent to the creator for long-form, has been stable for over a decade.
        </p>

        <p>
          The scale of creator earnings on YouTube in 2026 is difficult to overstate. Channels generating over $1 million in annual revenue number in the thousands. Channels generating over $100,000 number in the hundreds of thousands. The platform has produced a new professional class, the full-time creator, that did not exist before YouTube made it financially viable.
        </p>

        <p>
          The downstream effects touch adjacent industries. Brand deal markets, talent management agencies, merchandise platforms, and creator-focused financial products all exist because YouTube created a stable income base for individual video producers. The platform's influence on advertising norms is equally significant: the 30-second skippable pre-roll format that YouTube normalized in 2010 is now the standard unit of digital video advertising globally.
        </p>

        <p>
          For coverage of specific creators in the YouTube ecosystem, see{' '}
          <Link href="/youtube/logan-paul" className="text-blue-600 hover:text-blue-800 underline">
            Logan Paul
          </Link>
          ,{' '}
          <Link href="/youtube/mat-armstrong" className="text-blue-600 hover:text-blue-800 underline">
            Mat Armstrong
          </Link>
          , and the{' '}
          <Link href="/youtube/nelk-boys" className="text-blue-600 hover:text-blue-800 underline">
            NELK Boys
          </Link>
          . For the broader creator platform landscape, visit the{' '}
          <Link href="/creator" className="text-blue-600 hover:text-blue-800 underline">
            Creator hub
          </Link>
          .
        </p>

        <h2>YouTube 2026 | Current State Summary</h2>

        <p>
          YouTube enters 2026 as the internet's dominant video platform by nearly every measure: users, uploads, watch time, and advertising revenue. The competitive threats from TikTok, Netflix, and Twitch are real but have not materially eroded YouTube's core position. TikTok competes in short-form. Netflix competes in premium long-form. Twitch competes in live gaming. YouTube competes in all three categories simultaneously and has a structural advantage in each: the recommendation algorithm's depth, the creator monetization ecosystem, and the cross-device penetration that comes from being a Google product available on every Android device by default.
        </p>

        <p>
          The next phase of YouTube's evolution is likely to be shaped by artificial intelligence. In 2025, YouTube began testing AI-generated summaries of long videos, automatic dubbing into multiple languages for creator channels, and AI-assisted thumbnail and title optimization for the Partner Program. If YouTube can deploy AI to lower the cost of video production and raise the quality of recommendations simultaneously, the moat it has built over twenty-one years will deepen further.
        </p>

        <p>
          What began as three engineers sharing a video of elephants is now the second most visited website on Earth. The company Google bought for $1.65 billion in 2006 will likely generate more than $40 billion in revenue by 2027. That is the history of YouTube in one sentence: the best acquisition in the history of technology.
        </p>
      </div>
    </NewsArticle>
  );
}
