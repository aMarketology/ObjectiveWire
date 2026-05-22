import type { Metadata } from 'next';
import CreatorArticle, {
  CreatorSection,
  CreatorStat,
  CreatorTable,
  CreatorCalloutBox,
  CreatorQuote,
} from '@/components/articles/CreatorArticle';
import { SourcesInterlink } from '@/components/SourcesInterlink';
import Link from 'next/link';

// Full content in code — no Supabase fetch at render time.
// ProfilePageSchema (Person JSON-LD) is emitted automatically by CreatorArticle.

export const revalidate = 86400;

const SLUG = '/influencer/of/baylee-adami';
const PAGE_URL = `https://www.owire.org${SLUG}`;
const IMAGE_URL = '/influncer/baylee-adami.jpg';

export const metadata: Metadata = {
  title: 'Baylee Adami | Age, TikTok, Instagram, Bio 2026',
  description:
    'Baylee Adami, 21, is an Illinois-born plus-size model and TikTok creator with 1.4M followers. Full biography: age, Fashion Nova, social handles, and career 2026.',
  keywords: [
    'Baylee Adami',
    'Baylee Adami age',
    'Baylee Adami age 2026',
    'Baylee Adami TikTok',
    'Baylee Adami Instagram',
    'Baylee Adami biography',
    'Baylee Adami model',
    'Baylee Adami Fashion Nova',
    'Baylee Adami Illinois',
    'bayleeadami TikTok',
    'Baylee Adami real name',
    'Baylee Adami 2026',
    'Baylee Adami plus size model',
    'Baylee Adami Ari Kytsya',
    'plus size TikTok creator',
    'curvy model influencer',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Baylee Adami | Age, TikTok, Instagram & Bio 2026',
    description:
      'Full profile of Baylee Adami, 21, Illinois-born plus-size model and TikTok creator with 1.4M followers. Fashion Nova ambassador, dance and fitness content, 2026.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Influencer Desk'],
    section: 'Influencer',
    publishedTime: '2026-05-21T12:00:00Z',
    modifiedTime: '2026-05-21T12:00:00Z',
    tags: ['Baylee Adami', 'TikTok', 'Illinois', 'Plus-Size Model', 'Fashion Nova'],
    images: [
      {
        url: `https://www.owire.org${IMAGE_URL}`,
        width: 1200,
        height: 675,
        alt: 'Baylee Adami, TikTok creator and plus-size model',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baylee Adami | 1.4M TikTok, Plus-Size Model, Bio 2026',
    description:
      'Baylee Adami profile: age 21, TikTok @bayleeadami, Fashion Nova ambassador, dance and fitness creator from Illinois.',
    images: [`https://www.owire.org${IMAGE_URL}`],
  },
};

export default function BayleeAdamiPage() {
  return (
    <CreatorArticle
      schema={{
        title: 'Baylee Adami | Plus-Size Model, TikTok Creator, Age & Biography 2026',
        description:
          'Baylee Adami, born July 21, 2004 in Illinois, is a plus-size model and TikTok creator with 1.4M followers on @bayleeadami. Fashion Nova ambassador known for dance, fitness, and lifestyle content.',
        publishedTime: '2026-05-21T12:00:00Z',
        modifiedTime: '2026-05-21T12:00:00Z',
        author: 'ObjectWire Influencer Desk',
        articleUrl: PAGE_URL,
        imageUrl: `https://www.owire.org${IMAGE_URL}`,
        section: 'Influencer',
        keywords: [
          'Baylee Adami',
          'Baylee Adami age 2026',
          'Baylee Adami TikTok',
          'bayleeadami',
          'plus size model TikTok',
          'Fashion Nova ambassador',
          'Baylee Adami biography',
          'Baylee Adami Ari Kytsya',
          'Illinois creator 2026',
        ],
      }}
      breadcrumbs={[
        { name: 'Home', item: 'https://www.owire.org' },
        { name: 'Influencer', item: 'https://www.owire.org/influencer' },
        { name: 'OF', item: 'https://www.owire.org/influencer/of' },
        { name: 'Baylee Adami', item: PAGE_URL },
      ]}
      hero={{
        image: { src: IMAGE_URL, alt: 'Baylee Adami, TikTok creator and plus-size model' },
        gradient: 'linear-gradient(135deg, #1a0533 0%, #6b21a8 50%, #db2777 100%)',
        badges: [
          { label: 'Illinois', style: 'default' },
          { label: 'Fashion Nova Ambassador', style: 'achievement' },
          { label: 'TikTok Creator', style: 'default' },
        ],
        name: 'Baylee Adami',
        subtitle: 'Plus-Size Model, TikTok Creator, Fashion Nova Ambassador',
        description:
          'Baylee Adami is a 21-year-old Illinois-born TikTok creator and plus-size model with 1.4 million followers on @bayleeadami. She posts dance routines, fitness content, fashion hauls, and daily lifestyle vlogs, and serves as an official Fashion Nova ambassador.',
        ctaButtons: [
          { href: 'https://www.tiktok.com/@bayleeadami', label: 'TikTok', icon: '♪', variant: 'secondary' },
          { href: 'https://www.instagram.com/bayleeadami', label: 'Instagram', icon: '📷', variant: 'secondary' },
        ],
      }}
      sidebar={{
        infobox: {
          image: { src: IMAGE_URL, alt: 'Baylee Adami profile photo' },
          name: 'Baylee Adami',
          subtitle: 'Plus-Size Model, TikTok Creator',
          rows: [
            { label: 'Full Name', value: 'Baylee Adami' },
            { label: 'Born', value: 'July 21, 2004' },
            { label: 'Age (2026)', value: '21' },
            { label: 'Birth Sign', value: 'Cancer' },
            { label: 'Birthplace', value: 'Illinois, USA' },
            { label: 'Nationality', value: 'American' },
            { label: 'Occupation', value: 'Content Creator, Model, Brand Ambassador' },
            {
              label: 'TikTok',
              value: '@bayleeadami',
              href: 'https://www.tiktok.com/@bayleeadami',
            },
            {
              label: 'Instagram',
              value: '@bayleeadami',
              href: 'https://www.instagram.com/bayleeadami',
            },
            { label: 'TikTok Followers', value: '1.4M+' },
            { label: 'Brand Deal', value: 'Fashion Nova (ambassador)' },
            { label: 'Business Partner', value: 'Ari Kytsya' },
          ],
        },
        timeline: [
          { year: '2004', event: 'Born July 21 in Illinois' },
          { year: '2021', event: 'Joined TikTok as @bayleeadami, early dance and selfie content' },
          { year: '2022', event: 'Follower growth accelerates; Fashion Nova ambassador deal secured' },
          { year: '2023', event: 'Expands to fitness and lifestyle vlogs; Instagram growth picks up' },
          { year: '2024', event: 'Passes 1M TikTok followers; collaborates with Ari Kytsya' },
          { year: '2026', event: 'Active across TikTok and Instagram with 1.4M followers; ongoing brand partnerships' },
        ],
        relatedLinks: [
          { href: '/influencer', label: 'Influencer Hub' },
          { href: '/influencer/ari-kytsya', label: 'Ari Kytsya Profile' },
          { href: '/creator', label: 'Creator Hub' },
        ],
        meta: {
          publishedDate: 'May 21, 2026',
          updatedDate: 'May 21, 2026',
          author: 'ObjectWire Influencer Desk',
          category: 'Influencer',
        },
      }}
      tags={[
        'Baylee Adami',
        'TikTok',
        'Plus-Size Model',
        'Fashion Nova',
        'Illinois Creator',
        'Dance Creator',
      ]}
    >

      {/* ── Who Is Baylee Adami ──────────────────────────────── */}
      <CreatorSection heading="Who Is Baylee Adami">
        <p>
          Baylee Adami is an American plus-size model and content creator born on July 21, 2004 in Illinois. She is best known for her{' '}
          <a
            href="https://www.tiktok.com/@bayleeadami"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            TikTok account @bayleeadami
          </a>
          , where she has accumulated over 1.4 million followers posting dance videos, fitness routines, fashion content, and daily lifestyle vlogs.
        </p>
        <p>
          In 2026 she is 21 years old. She is an official Fashion Nova ambassador and a recognizable face in the curvy-creator space on TikTok and Instagram, known for her energetic on-camera presence and body-positive approach to fashion and fitness content.
          She is also a business partner of Seattle-based creator{' '}
          <Link href="/influencer/ari-kytsya" className="text-blue-600 hover:text-blue-800 underline">
            Ari Kytsya
          </Link>
          , with whom she collaborates on content and creator ventures.
        </p>
      </CreatorSection>

      {/* ── Stats ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-3 gap-4 my-6">
        <CreatorStat value="1.4M+" label="TikTok Followers" color="purple" />
        <CreatorStat value="21" label="Age in 2026" color="red" />
        <CreatorStat value="2021" label="TikTok Joined" color="blue" />
      </div>

      {/* ── TikTok Career ─────────────────────────────────────── */}
      <CreatorSection heading="Baylee Adami TikTok | 1.4M Followers and Dance Content">
        <p>
          Baylee Adami launched her TikTok account @bayleeadami in 2021, initially posting dance clips and selfie-style videos that fit the early wave of body-positive creator content on the platform. Her willingness to post energetic dance routines and fitness content as a curvy model gave her a distinct identity in a space often dominated by straight-size creators.
        </p>
        <p>
          By 2024, she had crossed 1 million followers, with engagement driven by her relatable personality and fashion-forward content. Her account reached 1.4 million followers and remains one of the more active plus-size creator accounts on TikTok in 2026. Viewers return for a combination of outfit posts, dance videos, workout clips, and everyday lifestyle vlogs.
        </p>
        <p>
          For more TikTok and creator coverage, visit the{' '}
          <Link href="/creator" className="text-blue-600 hover:text-blue-800 underline">
            Creator Hub
          </Link>
          .
        </p>
      </CreatorSection>

      {/* ── Content Style ─────────────────────────────────────── */}
      <CreatorSection heading="Baylee Adami Content | Dance, Fitness, Fashion, and Vlogs">
        <p>
          Baylee's content spans four core categories: dance routines synced to trending audio, fitness and workout clips, fashion haul and outfit-of-the-day posts, and daily lifestyle vlogs. This variety keeps her feed active and appeals to audiences interested in body positivity, curvy fashion, and mainstream pop-culture trends simultaneously.
        </p>
        <p>
          Her dance videos in particular have been drivers of follower growth, often riding trending sounds before they peak. Her fitness content focuses on energetic, accessible workouts rather than elite-performance training, making it widely appealing across age groups.
        </p>
      </CreatorSection>

      {/* ── Callout: Content Categories ───────────────────────── */}
      <CreatorCalloutBox
        heading="Baylee Adami Content Categories"
        color="purple"
        items={[
          { label: 'Dance', detail: 'Trending audio synced routines, pop and hip-hop choreography' },
          { label: 'Fitness', detail: 'Energetic workout clips, body-positive movement content' },
          { label: 'Fashion', detail: 'Fashion Nova hauls, outfit-of-the-day posts, curvy styling tips' },
          { label: 'Lifestyle Vlogs', detail: 'Daily life updates, selfies, behind-the-scenes creator content' },
          { label: 'Selfies', detail: 'Posed and candid portrait content for Instagram and TikTok' },
        ]}
      />

      {/* ── Fashion Nova ─────────────────────────────────────── */}
      <CreatorSection heading="Baylee Adami Fashion Nova | Ambassador Deal and Brand Work">
        <p>
          Baylee Adami is an official Fashion Nova ambassador, one of the most prominent fast-fashion brand partnerships available to curvy and plus-size creators. Fashion Nova actively recruits body-diverse influencers to represent its extended size range, and Baylee's aesthetic, follower count, and engagement rate made her a natural fit for the brand's creator roster.
        </p>
        <p>
          Her Fashion Nova content typically involves haul-style videos or outfit posts showcasing pieces from the brand's curve collection. The deal represents ongoing sponsored deliverables in exchange for commission revenue and flat-fee placements across her TikTok and Instagram accounts.
        </p>
      </CreatorSection>

      {/* ── Quote ─────────────────────────────────────────────── */}
      <CreatorQuote
        quote="I post what I love, whether it is dancing, fashion, or just showing up for my audience every day."
        attribution="Baylee Adami"
        role="TikTok Creator, Fashion Nova Ambassador"
      />

      {/* ── Ari Kytsya Partnership ────────────────────────────── */}
      <CreatorSection heading="Baylee Adami and Ari Kytsya | Business Partnership">
        <p>
          Baylee Adami and{' '}
          <Link href="/influencer/ari-kytsya" className="text-blue-600 hover:text-blue-800 underline">
            Ari Kytsya
          </Link>{' '}
          are business partners in the creator space. Ari Kytsya is a Seattle-based model and creator with over 5 million TikTok followers on her account @notburnttoasthehe and 3 million followers on Instagram @arikytsya. Both operate in the fashion-forward, body-positive creator category and have collaborated on content and creator ventures.
        </p>
        <p>
          Their partnership reflects a broader trend in the creator economy where individual influencers build network relationships to cross-promote, co-create, and share brand opportunities. Ari Kytsya's larger platform amplifies Baylee's content to new audiences, while Baylee's engaged community adds reach to collaborative posts.
        </p>
      </CreatorSection>

      {/* ── Social Accounts Table ────────────────────────────── */}
      <CreatorSection heading="Baylee Adami Social Media Accounts | 2026 Follower Counts">
        <CreatorTable
          columns={[
            { key: 'platform', header: 'Platform' },
            { key: 'handle', header: 'Handle' },
            { key: 'followers', header: 'Followers' },
            { key: 'focus', header: 'Content Focus' },
          ]}
          rows={[
            {
              platform: 'TikTok',
              handle: '@bayleeadami',
              followers: '1.4M+',
              focus: 'Dance, fitness, fashion, vlogs',
            },
            {
              platform: 'Instagram',
              handle: '@bayleeadami',
              followers: 'Growing',
              focus: 'Fashion, selfies, brand content',
            },
          ]}
          highlightKey="platform"
          highlightValue="TikTok"
        />
      </CreatorSection>

      {/* ── Official Links ─────────────────────────────────── */}
      <CreatorSection heading="Baylee Adami Social Media | Official Accounts 2026">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>
            <a
              href="https://www.tiktok.com/@bayleeadami"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              TikTok: @bayleeadami (1.4M+ followers)
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/bayleeadami"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Instagram: @bayleeadami
            </a>
          </li>
        </ul>
      </CreatorSection>

      {/* ── Summary ──────────────────────────────────────────── */}
      <CreatorSection heading="Baylee Adami 2026 | Creator Profile Summary">
        <p>
          Baylee Adami in 2026 is a 21-year-old Illinois-born TikTok creator and plus-size model with 1.4 million followers, a Fashion Nova ambassador deal, and a growing brand in the body-positive creator space. Her energetic dance and fitness content, combined with relatable fashion posts, have built a loyal audience across TikTok and Instagram.
        </p>
        <p>
          Her business partnership with{' '}
          <Link href="/influencer/ari-kytsya" className="text-blue-600 hover:text-blue-800 underline">
            Ari Kytsya
          </Link>{' '}
          positions her within a broader network of fashion-forward creators. For more profiles in this space, explore the{' '}
          <Link href="/influencer" className="text-blue-600 hover:text-blue-800 underline">
            Influencer Hub
          </Link>
          .
        </p>
      </CreatorSection>

      {/* ── Sources + Interlinks ─────────────────────────────── */}
      <SourcesInterlink
        accentColor="purple"
        sources={[
          {
            number: 1,
            url: 'https://www.famousbirthdays.com/people/baylee-adami.html',
            title: 'Baylee Adami — Famous Birthdays',
            description: 'Birthday, biography, and ranking data for Baylee Adami',
          },
          {
            number: 2,
            url: 'https://www.tiktok.com/@bayleeadami',
            title: 'Baylee Adami Official TikTok (@bayleeadami)',
            description: 'Primary content platform, 1.4M+ followers',
          },
        ]}
        internalLinks={[
          {
            href: '/influencer',
            label: 'Influencer Hub',
            description: 'All creator and influencer profiles on ObjectWire',
          },
          {
            href: '/influencer/ari-kytsya',
            label: 'Ari Kytsya Profile',
            description: 'Seattle model and creator, 5M TikTok, business partner of Baylee Adami',
          },
          {
            href: '/creator',
            label: 'Creator Hub',
            description: 'YouTube, TikTok, and creator economy news',
          },
        ]}
      />

    </CreatorArticle>
  );
}
