import type { Metadata } from 'next';
import YoutubeCreatorPage, {
  YTSection,
  YTStat,
  YTTable,
  YTCallout,
  YTQuote,
} from '@/components/articles/YoutubeCreatorPage';

export const revalidate = 86400;

const SLUG = '/youtube/ksi';
const PAGE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/youtube/ksi.jpg';

export const metadata: Metadata = {
  title: 'KSI | YouTube, Boxing, Music, Age, Bio 2026',
  description:
    'KSI (JJ Olatunji) is a British YouTuber, boxer, and musician with 24M+ YouTube subscribers. Full biography: boxing record, Prime drink, Logan Paul, Sidemen, and 2026.',
  keywords: [
    'KSI',
    'KSI YouTube',
    'KSI age',
    'KSI age 2026',
    'KSI real name',
    'JJ Olatunji',
    'KSI biography',
    'KSI boxing',
    'KSI Logan Paul',
    'KSI music',
    'KSI net worth',
    'KSI 2026',
    'KSI Sidemen',
    'KSI Prime',
    'KSI Tommy Fury',
    'KSI subscribers',
    'British YouTuber KSI',
    'KSI Prime Hydration',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'KSI | Boxing, Music, YouTube, Prime Drink, Bio 2026',
    description:
      'Full profile of KSI, real name JJ Olatunji. British YouTuber, musician, and boxer with 24M+ subscribers. Logan Paul rivalry, Prime Hydration, Sidemen founder, 2026.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire YouTube Desk'],
    section: 'YouTube',
    publishedTime: '2026-05-04T12:00:00Z',
    modifiedTime: '2026-05-04T12:00:00Z',
    tags: ['KSI', 'JJ Olatunji', 'Sidemen', 'YouTube', 'Boxing', 'Prime'],
    images: [{ url: `https://www.objectwire.org${IMAGE_URL}`, width: 1200, height: 675, alt: 'KSI, British YouTuber, boxer and musician' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KSI | 24M YouTube, Boxing, Prime Hydration, Bio 2026',
    description: 'KSI (JJ Olatunji) profile: 24M YouTube, boxing record, Prime drink business, Logan Paul, Sidemen, music career, age 32.',
    images: [`https://www.objectwire.org${IMAGE_URL}`],
  },
};

export default function KSIPage() {
  return (
    <YoutubeCreatorPage
      schema={{
        title: 'KSI | British YouTuber, Boxer, Musician, Sidemen Founder, Biography 2026',
        description:
          'KSI, real name Olajide William Olatunji, is a British YouTuber born June 19, 1993, in London. He co-founded the Sidemen, has 24M+ YouTube subscribers, a professional boxing career, a music discography, and is co-founder of the Prime Hydration drink brand with Logan Paul.',
        publishedTime: '2026-05-04T12:00:00Z',
        modifiedTime: '2026-05-04T12:00:00Z',
        author: 'ObjectWire YouTube Desk',
        articleUrl: PAGE_URL,
        imageUrl: `https://www.objectwire.org${IMAGE_URL}`,
        section: 'YouTube',
        keywords: [
          'KSI', 'JJ Olatunji', 'KSI YouTube', 'KSI boxing',
          'KSI age 2026', 'KSI biography', 'KSI Prime', 'KSI Logan Paul',
          'KSI Tommy Fury', 'Sidemen founder',
        ],
      }}
      breadcrumbs={[
        { name: 'Home', item: 'https://www.objectwire.org' },
        { name: 'YouTube', item: 'https://www.objectwire.org/youtube' },
        { name: 'KSI', item: PAGE_URL },
      ]}
      hero={{
        image: { src: IMAGE_URL, alt: 'KSI, British YouTuber, boxer and musician' },
        gradient: 'linear-gradient(135deg, #0f0f0f 0%, #1a1500 50%, #ca8a04 100%)',
        badges: [
          { label: 'London, UK', style: 'default' },
          { label: 'Sidemen Founder', style: 'achievement' },
          { label: '24M+ YouTube', style: 'default' },
          { label: 'Boxer', style: 'default' },
          { label: 'Musician', style: 'default' },
        ],
        name: 'KSI',
        subtitle: 'YouTuber, Boxer, Musician, Co-Founder of Prime',
        description:
          'KSI, real name JJ Olatunji, is one of the most multi-dimensional creators on YouTube: Sidemen co-founder, professional boxer, chart-charting musician, and co-founder of Prime Hydration alongside former rival Logan Paul. He has transformed every phase of his career into a larger platform.',
        ctaButtons: [
          { href: 'https://www.youtube.com/@KSI', label: 'YouTube', icon: '▶', variant: 'accent' },
          { href: 'https://www.instagram.com/ksi', label: 'Instagram', icon: '📷', variant: 'secondary' },
        ],
      }}
      sidebar={{
        infobox: {
          image: { src: IMAGE_URL, alt: 'KSI profile photo' },
          name: 'KSI (JJ Olatunji)',
          subtitle: 'Sidemen Founder, YouTuber',
          rows: [
            { label: 'Real Name', value: 'Olajide William Olatunji' },
            { label: 'Born', value: 'June 19, 1993' },
            { label: 'Age (2026)', value: '32' },
            { label: 'Nationality', value: 'British' },
            { label: 'From', value: 'London, England' },
            { label: 'Group', value: 'Sidemen (co-founder)' },
            { label: 'Occupation', value: 'YouTuber, Boxer, Musician, Entrepreneur' },
            {
              label: 'YouTube',
              value: '@KSI',
              href: 'https://www.youtube.com/@KSI',
            },
            {
              label: 'Instagram',
              value: '@ksi',
              href: 'https://www.instagram.com/ksi',
            },
            {
              label: 'Twitter/X',
              value: '@KSI',
              href: 'https://twitter.com/KSI',
            },
            { label: 'YouTube Subs', value: '24M+' },
            { label: 'Brand', value: 'Prime Hydration (co-founder)' },
            { label: 'Net Worth', value: 'Est. $50M-$100M (2026)' },
          ],
        },
        linkSections: [
          {
            heading: 'Official Channels',
            links: [
              { href: 'https://www.youtube.com/@KSI', label: 'YouTube: @KSI', note: '24M+ subs' },
              { href: 'https://www.youtube.com/@Sidemen', label: 'Sidemen: @Sidemen', note: 'group channel' },
              { href: 'https://www.instagram.com/ksi', label: 'Instagram: @ksi' },
            ],
          },
          {
            heading: 'Business',
            links: [
              { href: 'https://drinkprime.com', label: 'Prime Hydration', note: 'co-founder' },
            ],
          },
        ],
        timeline: [
          { year: '2009', event: 'Created YouTube channel at age 16; early FIFA and gaming content' },
          { year: '2013', event: 'Co-founded the Sidemen group; crossed 1M YouTube subscribers' },
          { year: '2018', event: 'First boxing match vs. Joe Weller; fought Logan Paul in amateur bout (draw)' },
          { year: '2019', event: 'Professional boxing rematch vs. Logan Paul; split decision win for KSI' },
          { year: '2022', event: 'Co-founded Prime Hydration with Logan Paul; became billion-dollar brand' },
          { year: '2023', event: 'Lost to Tommy Fury by split decision; continued music career with "Holiday" and "Patience"' },
          { year: '2026', event: '32 years old; 24M YouTube subscribers; Prime valuation; active music and Sidemen projects' },
        ],
        relatedLinks: [
          { href: '/youtube', label: 'YouTube Hub' },
          { href: '/youtube/w2s', label: 'W2S Profile' },
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
        { id: 'who-is', label: 'Who Is KSI' },
        { id: 'youtube', label: 'KSI YouTube | Channel and Career' },
        { id: 'sidemen', label: 'KSI and the Sidemen | Co-Founder' },
        { id: 'boxing', label: 'KSI Boxing Record | Logan Paul to Tommy Fury' },
        { id: 'prime', label: 'KSI Prime Hydration | Billion-Dollar Brand' },
        { id: 'music', label: 'KSI Music | Discography and Charts' },
        { id: 'net-worth', label: 'KSI Net Worth 2026' },
        { id: 'social', label: 'KSI Social Media | Official Accounts' },
        { id: 'summary', label: 'KSI 2026 | Creator Summary' },
      ]}
      tags={['KSI', 'JJ Olatunji', 'Sidemen', 'YouTube', 'Boxing', 'Prime Hydration']}
    >

      <YTSection id="who-is" heading="Who Is KSI">
        <p>
          KSI, whose real name is Olajide William Olatunji, is a British YouTuber, boxer, musician, and entrepreneur born on June 19, 1993, in London, England. In 2026, he is 32 years old and one of the most diversified creator brands in YouTube history, with 24M+ subscribers, a professional boxing record, a music discography, and co-ownership of Prime Hydration, one of the most successful creator-founded beverages in the world.
        </p>
        <p>
          He is a co-founder of the{' '}
          <a href="/youtube/sidemen/charity-match" className="text-blue-600 hover:text-blue-800 underline">Sidemen</a> and the individual creator most associated with the group's cultural rise in the UK. His career has moved through distinct phases: gaming YouTube, confrontational vlogs, influencer boxing, mainstream music, and entrepreneurship, each building on the previous.
        </p>
      </YTSection>

      <div className="grid grid-cols-3 gap-4 my-6">
        <YTStat value="24M+" label="YouTube Subs" color="yellow" />
        <YTStat value="$100M+" label="Est. Net Worth" color="green" />
        <YTStat value="32" label="Age in 2026" color="gray" />
      </div>

      <YTSection id="youtube" heading="KSI YouTube | Channel and 16-Year Career">
        <p>
          KSI created his{' '}
          <a href="https://www.youtube.com/@KSI" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">YouTube channel</a> in 2009 at age 16, beginning with FIFA content before expanding into vlogs, reaction videos, and the confrontational persona that defined his early growth. His channel became one of the most-subscribed British channels, crossing 10M, 15M, and eventually 24M subscribers across a 16-year run.
        </p>
        <p>
          His content has evolved substantially over his career. Early FIFA grind content gave way to beef-driven vlogs that capitalized on the attention economy of 2015-2019, followed by boxing build-up content, music releases, and the Prime Hydration era of entrepreneurial content.
        </p>
      </YTSection>

      <YTSection id="sidemen" heading="KSI and the Sidemen | Co-Founder">
        <p>
          KSI co-founded the Sidemen in 2013 alongside{' '}
          <a href="/youtube/w2s" className="text-blue-600 hover:text-blue-800 underline">W2S</a>, Miniminter, Behzinga, Vikkstar123, Tobjizzle, and Zerkaa. He remains the group's highest-profile individual member and the creator most associated with the Sidemen brand internationally.
        </p>
        <p>
          The group's collaborative videos, annual charity matches, and the Sidemen Sunday format have generated billions of combined views. The{' '}
          <a href="/youtube/sidemen/charity-match" className="text-blue-600 hover:text-blue-800 underline">Sidemen Charity Match</a> has become one of the largest live creator events globally, selling out stadiums including Stamford Bridge.
        </p>
      </YTSection>

      <YTCallout
        heading="KSI Boxing Record | All Fights"
        color="red"
        items={[
          { label: 'vs. Joe Weller', detail: 'Win, TKO, February 2018, amateur' },
          { label: 'vs. Logan Paul I', detail: 'Draw, August 2018, amateur bout at Manchester Arena' },
          { label: 'vs. Logan Paul II', detail: 'Win, split decision, November 2019, professional (Los Angeles)' },
          { label: 'vs. Swarmz + Pineda', detail: 'Win (x2) in same night, August 2022, Wembley Arena' },
          { label: 'vs. FaZe Temperrr', detail: 'Win, TKO, January 2023' },
          { label: 'vs. Tommy Fury', detail: 'Loss, split decision, October 2023' },
        ]}
      />

      <YTSection id="boxing" heading="KSI Boxing Record | Logan Paul to Tommy Fury">
        <p>
          KSI entered the influencer boxing scene in 2018 with a fight against Joe Weller that established the format as a legitimate spectacle in the UK. His two bouts against Logan Paul, culminating in a 2019 professional split decision win in Los Angeles, generated mainstream media coverage and over 40 million combined views, legitimizing influencer boxing as a commercial product.
        </p>
        <p>
          A 2023 bout against Tommy Fury, a professional boxer and brother of heavyweight champion Tyson Fury, ended in a split decision loss. The fight was KSI's most challenging matchup against a trained professional, and the result was contested by many observers. Despite the loss, the fight drew significant pay-per-view revenue and kept KSI active in the boxing conversation.
        </p>
      </YTSection>

      <YTSection id="prime" heading="KSI Prime Hydration | Co-Founded With Logan Paul">
        <p>
          In 2022, KSI and Logan Paul, former boxing rivals, launched Prime Hydration, a sports drink brand that rapidly became one of the fastest-growing beverages in the UK and US. Prime achieved over $250 million in retail sales in its first year and secured distribution deals with major retailers including Walmart, Aldi, and Asda.
        </p>
        <p>
          The brand's success turned what was a creator rivalry into one of the most commercially successful creator-founded companies in history. KSI and Logan Paul's combined audience reach, estimated at over 50 million between the two channels, provided unprecedented marketing scale without traditional advertising spend.
        </p>
      </YTSection>

      <YTQuote
        quote="I was the kid from Watford who played FIFA on YouTube. Now I'm selling drinks all over the world. Nothing makes sense and everything makes sense."
        attribution="KSI"
        role="YouTuber, Sidemen, Boxer, Prime Founder"
      />

      <YTSection id="music" heading="KSI Music | Discography and UK Charts">
        <p>
          KSI has released multiple music projects that charted in the UK, blending pop, hip-hop, and viral hooks. His track "Patience" featuring Yungblud reached the UK Top 5 in 2021. "Holiday" (2021) and "Pop It" featuring Lil Pump reached the UK charts, establishing him as a commercially viable music act beyond his YouTube status.
        </p>
        <p>
          His music career adds a revenue layer beyond YouTube, with streaming royalties, concert appearances, and music video views contributing to his overall income. He performs live and has collaborated with both UK grime artists and American rap figures.
        </p>
      </YTSection>

      <YTSection id="net-worth" heading="KSI Net Worth | Estimated $50M-$100M in 2026">
        <p>
          KSI's net worth in 2026 is estimated between $50 million and $100 million, with the wide range reflecting uncertainty around the private valuation of his Prime Hydration stake. His income sources include YouTube AdSense on 24M+ subscribers, brand partnerships, boxing event purses, music streaming and performance fees, and the significant equity value of his Prime Hydration co-ownership. Prime's valuation has been cited as exceeding $1 billion.
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
          { platform: 'YouTube', handle: '@KSI', followers: '24M+', focus: 'Music videos, vlogs, boxing, gaming, Sidemen' },
          { platform: 'Instagram', handle: '@ksi', followers: '14M+', focus: 'Lifestyle, Prime, boxing, music' },
          { platform: 'Twitter/X', handle: '@KSI', followers: '10M+', focus: 'Commentary, promos, fan interaction' },
        ]}
        highlightKey="platform"
        highlightValue="YouTube"
      />

      <YTSection id="social" heading="KSI Social Media | Official Accounts 2026">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>
            <a href="https://www.youtube.com/@KSI" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              YouTube: @KSI (24M+ subscribers)
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@Sidemen" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Sidemen YouTube: @Sidemen (25M+ subscribers)
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ksi" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Instagram: @ksi (14M+ followers)
            </a>
          </li>
          <li>
            <a href="https://twitter.com/KSI" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Twitter/X: @KSI (10M+ followers)
            </a>
          </li>
        </ul>
      </YTSection>

      <YTSection id="summary" heading="KSI 2026 | Creator Summary">
        <p>
          KSI in 2026 represents one of the most remarkable creator career trajectories in YouTube history. Starting as a teenager playing FIFA in London, JJ Olatunji built a 24M-subscriber channel, co-founded the Sidemen, became a professional boxer, charted in the UK music charts, and co-created one of the most successful creator-founded consumer brands in history with Prime Hydration.
        </p>
        <p>
          For more YouTube creator profiles, see the{' '}
          <a href="/youtube" className="text-blue-600 hover:text-blue-800 underline">YouTube Hub</a>, read about{' '}
          <a href="/youtube/w2s" className="text-blue-600 hover:text-blue-800 underline">W2S</a> and{' '}
          <a href="/youtube/ishowspeed" className="text-blue-600 hover:text-blue-800 underline">IShowSpeed</a>, or explore the{' '}
          <a href="/youtube/sidemen/charity-match" className="text-blue-600 hover:text-blue-800 underline">Sidemen Charity Match</a>.
        </p>
      </YTSection>

    </YoutubeCreatorPage>
  );
}
