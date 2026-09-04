import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/local/austin/shugs-bagels-soft-open-austin-2026';
const ARTICLE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = `https://www.objectivewire.org/thumbnails/local-austin-shugs-bagels-soft-open-austin-2026.jpg`;

export const metadata: Metadata = {
  title: "Shug's Bagels Austin | Soft Open After Permitting Delays",
  description:
    "After months of navigating city permitting hurdles and utility upgrades, Dallas-founded Shug's Bagels has soft-opened its long-awaited Austin location at 1206 Parkway with limited hours ahead of a full-service launch.",
  keywords: [
    "Shug's Bagels Austin soft open",
    'Shug Bagels 1206 Parkway Austin',
    'Austin Texas bagel shop opening 2026',
    'Justin Shugrue Shugs Bagels',
    'Dallas bagels Austin expansion',
    'Austin small business permitting delays',
    'Austin food news August 2026',
    'Central Austin bagel shop 78703',
    'Shugs Bagels menu Austin',
    'Austin new restaurant openings 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "Shug's Bagels Soft Opens Austin Shop After Permitting Delays",
    description:
      "Dallas-founded Shug's Bagels has quietly soft-opened its Austin location at 1206 Parkway after months of city permitting hurdles, with plans for a full-service launch in mid-August.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-08-03T16:00:00Z',
    modifiedTime: '2026-08-03T16:00:00Z',
    section: 'News',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Shug's Bagels soft open Austin 1206 Parkway" }],
    tags: ["Shug's Bagels", 'Austin', 'Food', 'Small Business', 'Permitting'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shug's Bagels Finally Opens in Austin After Permitting Gridlock",
    description: "From Dallas staple to Central Austin. The bagel shop quietly soft-opened at 1206 Parkway after months of delays.",
    images: [OG_IMAGE],
  },
};

export default function ShugsBagelsAustinPage() {
  return (
    <>
      <NewsArticleSchema
        title="Shug's Bagels Austin | Soft Open After Permitting Delays"
        description="After months of navigating city permitting hurdles, Dallas-founded Shug's Bagels has soft-opened its Austin location at 1206 Parkway."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.org/authors/jack-brennan"
        publishedTime="2026-08-03T16:00:00Z"
        modifiedTime="2026-08-03T16:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        section="News"
        keywords={[
          "Shug's Bagels Austin soft open",
          'Shug Bagels 1206 Parkway Austin',
          'Austin Texas bagel shop opening 2026',
        ]}
      />

      <NewsArticle
        title="Shug's Bagels Soft Opens Austin Shop Following Months of Permitting Delays"
        subtitle="After months of navigating city permitting hurdles and utility upgrades, Dallas-founded Shug's Bagels is finally welcoming customers to its long-awaited Austin location at 1206 Parkway near North Lamar. The shop quietly launched limited soft openings in early August 2026 with plans to officially transition into full service."
        category="News"
        categoryColor="orange"
        topicTag="investigations"
        publishDate="August 3, 2026"
        publishedTime="2026-08-03T16:00:00Z"
        readTime="4 min read"
        author={{
          name: 'Jack Brennan',
          role: 'Reporter, Objective Wire',
          authorSlug: 'jack-brennan',
        }}
        slug={SLUG}
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Austin', item: '/local/austin' },
          { name: "Shug's Bagels Soft Open", item: SLUG },
        ]}
        tags={["Shug's Bagels", 'Austin', 'Food', 'Small Business', 'Permitting']}
        keyTakeaways={[
          "Dallas-founded Shug's Bagels has soft-opened its Austin location at 1206 Parkway near North Lamar and West 12th Street after months of city permitting and utility upgrade delays.",
          "The shop was originally slated for a fall 2025 launch but faced widespread delays tied to gas line upgrades, local utility coordination, and complex municipal permitting.",
          'The Austin menu features East Coast-style bagels including Plain, Everything, French Toast, Blueberry, and Jalapeno Cheddar varieties, plus signature breakfast and lunch sandwiches.',
          'Once fully operational, the shop will run seven days a week from 6:30 AM to 3:00 PM, with the full-service launch expected in mid-August 2026.',
          "Founder Justin Shugrue launched the concept in Dallas in 2018 and expanded to New Orleans before targeting Central Austin in mid-2024.",
        ]}
        keyTakeawaysColor="orange"
        faqItems={[
          {
            question: "Where is Shug's Bagels in Austin?",
            answer:
              "Shug's Bagels is located at 1206 Parkway near the intersection of North Lamar Boulevard and West 12th Street in Central Austin, Texas 78703.",
          },
          {
            question: "When did Shug's Bagels Austin open?",
            answer:
              "The shop launched limited soft openings in early August 2026 after months of permitting and utility delays. The full-service grand opening is expected in mid-August 2026.",
          },
          {
            question: "Why was Shug's Bagels Austin delayed?",
            answer:
              "The opening was delayed by roughly a year due to gas line upgrades, local utility coordination, and complex municipal permitting with the City of Austin. The original target launch was fall 2025.",
          },
          {
            question: "What is on the menu at Shug's Bagels?",
            answer:
              "The menu includes plain, everything, french toast, blueberry, and jalapeno cheddar bagels, plus signature breakfast sandwiches like classic lox and The Shug (bacon, egg, cheese, and a hashbrown), lunch classics including pizza bagels and chicken cutlet sandwiches, and sides like hashbrowns and cookies.",
          },
          {
            question: "Who owns Shug's Bagels?",
            answer:
              "Shug's Bagels was founded in 2018 by Justin Shugrue. The brand earned a strong following in Dallas for its East Coast-style bagels and sandwiches before expanding into New Orleans and then Austin.",
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Austin"
        moreFromHubHref="/local/austin"
      >
        <p>
          After months of navigating city permitting hurdles and utility upgrades, Dallas-founded <strong>Shug's Bagels</strong> is finally welcoming customers to its long-awaited Austin location. Located at <strong>1206 Parkway</strong> near the intersection of North Lamar Boulevard and West 12th Street, the shop quietly launched a series of limited soft openings in early August 2026, with plans to officially transition into full service.
        </p>

        <h2>From Dallas Staple to Central Austin Hub</h2>

        <p>
          Founded in 2018 by Justin Shugrue, Shug's Bagels earned a strong following in Dallas for its East Coast-style customizable bagels and overstuffed breakfast and lunch sandwiches. The concept expanded into New Orleans before setting its sights on Central Austin in mid-2024.
        </p>

        <p>The Austin menu brings the brand's core offerings to Parkway, including:</p>

        <ul>
          <li><strong>Bagel varieties:</strong> Plain, Everything, French Toast, Blueberry, and Jalapeno Cheddar.</li>
          <li><strong>Signature breakfasts:</strong> Classic lox with smoked salmon and "The Shug," a bacon, egg, cheese, and hashbrown sandwich.</li>
          <li><strong>Lunch classics:</strong> Pizza bagels, BLTs, spicy turkey clubs, and chicken cutlet sandwiches.</li>
          <li><strong>Sides and sweets:</strong> Hashbrowns, mashed potato bites, and cookies.</li>
        </ul>

        <h2>Navigating Austin's Permitting Gridlock</h2>

        <p>
          The opening marks the end of an arduous timeline for Shugrue and his team. Originally slated for a 2025 launch, the shop faced widespread delays tied to gas line upgrades, local utility coordination, and complex municipal permitting.
        </p>

        <p>"We never imagined delays this extreme," the Shug's team shared via social media prior to opening. "But, here we are."</p>

        <p>
          The permitting challenges are not unique to Shug's. Austin small business owners have increasingly reported lengthy delays in the city's development services pipeline, with some openings pushed back by a year or more as the city struggles to keep pace with Central Austin's rapid growth.
        </p>

        <h2>What to Expect Next</h2>

        <p>
          Following limited soft-open days to fine-tune operations and finish final facility tweaks, Shug's Bagels is completing final repairs before opening permanently seven days a week. Once fully operational, the shop will run standard daily hours from <strong>6:30 AM to 3:00 PM</strong>.
        </p>

        <p>
          For more Austin coverage, see the{' '}
          <Link href="/local/austin" className="text-blue-600 hover:text-blue-800 underline">
            oWire Austin hub
          </Link>{' '}
          or read our reporting on{' '}
          <Link href="/local/austin/apd-mail-theft-fraud-ring-eight-arrests-2026" className="text-blue-600 hover:text-blue-800 underline">
            the APD mail theft fraud ring arrests
          </Link>.
        </p>
      </NewsArticle>
    </>
  );
}