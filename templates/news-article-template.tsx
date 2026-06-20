import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

// =============================================================================
// NEWS ARTICLE TEMPLATE — AI-First Edition (May 2026)
//
// 1. Copy this file to the correct app/ route:
//      cp templates/news-article-template.tsx app/[topic]/[your-slug]/page.tsx
//
// 2. Fill in ALL fields. Do not leave any placeholder text.
//
// 3. AI EXTRACTION RULES (mandatory):
//    a. Sentence 1 of the first paragraph = complete direct answer to the article title.
//       "X is a..." or "X happened on [date] when..." — never a hook or scene-setter.
//    b. keyTakeaways = 3-5 single-sentence facts. Each sentence must be self-contained
//       and citable without context. Write as if an AI will copy it verbatim.
//    c. faqItems = 3-6 Q&A pairs. Questions match real search queries. Answers are
//       1-3 sentences with the direct answer in sentence 1.
//    d. Every H2 heading must contain the primary keyword.
//    e. Min 4 internal links. Min 1 external source link.
//
// 4. Content stays in this file. Do NOT run wiki:publish (legacy Supabase pipeline).
//    Run `npm run build` — sync-registry.ts registers the metadata automatically.
// =============================================================================

export const revalidate = 86400; // Static, regenerates daily

const SLUG = '/REPLACE/WITH/PATH';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/REPLACE-WITH-THUMBNAIL.jpg';
const OG_IMAGE_FULL = `https://www.objectivewire.com${OG_IMAGE}`;

export const metadata: Metadata = {
  title: 'Primary Keyword | Specific Detail',  // max 60 chars. No em dashes. No brand suffix.
  description: '130-155 chars. Primary keyword in first 60 chars. No generic phrases like "learn more".',
  keywords: [
    'Primary Keyword',
    'Primary Keyword 2026',
    // 10-18 targeted phrases
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Primary Keyword | Specific Detail',
    description: '130-155 char OG description. Lead with data or a specific claim.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Author Name'],
    publishedTime: '2026-05-13T12:00:00Z',
    modifiedTime: '2026-05-13T12:00:00Z',
    section: 'Cars',  // matches category below
    images: [{ url: OG_IMAGE_FULL, width: 1200, height: 675, alt: 'Descriptive alt text' }],
    tags: ['ProperNoun1', 'ProperNoun2', 'ProperNoun3', 'ProperNoun4'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter headline — hook or stat first',
    description: 'One punchy sentence. Lead with the number or claim.',
    images: [OG_IMAGE_FULL],
  },
};

export default function YourArticlePage() {
  return (
    <>
      <NewsArticleSchema
        title="Primary Keyword | Specific Detail"
        description="Matches metadata.description exactly."
        author="Author Name"
        authorUrl="https://www.objectivewire.com/authors/author-slug"
        publishedTime="2026-05-13T12:00:00Z"
        modifiedTime="2026-05-13T12:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE_FULL}
        section="Cars"
        keywords={['Primary Keyword', 'Secondary Keyword']}
      />

      <NewsArticle
        title="Full Headline Here | No Em Dashes"
        subtitle="One sentence deck. Data-led or specific claim. Ends without period."
        category="Cars"
        categoryColor="red"
        topicTag="automotive"
        publishDate="2026-05-13T12:00:00Z"
        readTime="5 min read"
        author={{
          name: 'Conan D. Boyle',   // or Jack Sterling / Jack Brennan
          role: 'Cars',
          authorSlug: 'conan-boyle',
        }}
        heroImage={{
          src: OG_IMAGE_FULL,
          alt: 'Descriptive alt text, min 1200px wide',
          credit: 'Photographer Name / Unsplash',
        }}
        thumbnail={{
          src: OG_IMAGE_FULL,
          alt: 'Thumbnail alt text',
        }}
        tags={['ProperNoun1', 'ProperNoun2', 'ProperNoun3', 'ProperNoun4']}
        slug="topic-your-slug"
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Cars', item: '/cars' },
          { name: 'Hub Name', item: '/cars/hub' },
          { name: 'Article Title Short', item: SLUG },
        ]}
        // ── AI EXTRACTION: Key Takeaways (REQUIRED) ───────────────────────────
        // 3-5 declarative sentences. Each must stand alone as a citable fact.
        // No em dashes. No marketing language. Answer-first, not hook-first.
        keyTakeaways={[
          '[Subject] is a [definition sentence with key numbers].',
          '[Key fact 2 — price, date, or quantitative claim].',
          '[Key fact 3 — technical detail or comparison].',
          '[Key fact 4 — availability or status].',
        ]}
        keyTakeawaysColor="red"
        // ── AI EXTRACTION: FAQ (REQUIRED) ─────────────────────────────────────
        // 3-6 Q&A pairs. Questions = real search queries ("What is X?", "How much does X cost?").
        // Answers: sentence 1 = direct answer. Max 3 sentences total.
        faqItems={[
          {
            question: 'What is [Subject]?',
            answer: '[Subject] is a [direct definition with key specs and price].',
          },
          {
            question: 'How much does [Subject] cost?',
            answer: '[Subject] costs $X. [One additional context sentence if needed].',
          },
          {
            question: 'When does [Subject] come out?',
            answer: '[Subject] [delivery/release date sentence]. [Additional context].',
          },
          {
            question: '[Another real search query about the subject]?',
            answer: '[Direct answer in sentence 1]. [Supporting detail in sentence 2].',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Hub Name"
        moreFromHubHref="/cars/hub"
      >
        {/* ── INTRO: ANSWER-FIRST (mandatory) ────────────────────────────────
            Sentence 1 = complete direct answer to what the article title asks.
            "The [Subject] is a..." or "[Subject] [verb] on [date] when..."
            NEVER start with: "In today's...", "With the rise of...", "It has been..."
        ─────────────────────────────────────────────────────────────────────── */}
        <p>
          [Sentence 1: Direct answer. Subject + what it is + key number or date.]
          [Sentence 2: Why it matters or what makes it notable.]
        </p>

        <h2>[Primary Keyword] [Section Topic] | [Specific Detail]</h2>
        <p>Section body. Cite primary sources. Name specific figures and dates.</p>

        {/* Internal link example — required, min 4 per article */}
        {/* <Link href="/cars/hub" className="text-blue-600 hover:text-blue-800 underline">Hub name</Link> */}

        <h2>[Primary Keyword] [Second Section] | [Specific Detail]</h2>
        <p>Continue. Use bullet lists for specs, steps, or ranked items.</p>

        <h2>[Primary Keyword] [Third Section] | [Specific Detail]</h2>
        <p>Continue.</p>

        <h2>[Primary Keyword] [Closing Section] | Summary</h2>
        <p>
          Closing context. Link to hub and at least one related sibling article.
        </p>
      </NewsArticle>
    </>
  );
}
