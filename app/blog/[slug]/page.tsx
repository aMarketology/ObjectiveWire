/**
 * TEXAS INVESTIGATIVE ARTICLE TEMPLATE
 * ─────────────────────────────────────────────────────────────────────────────
 * HOW TO USE
 *
 * 1. Duplicate this file to:
 *      app/blog/your-article-slug/page.tsx
 *
 * 2. Fill in every TODO below. Delete TODO comments before publishing.
 *
 * 3. Run the registry sync (happens automatically at build, or manually):
 *      npx tsx scripts/sync-registry.ts --write
 *
 * 4. The article appears at:
 *      https://www.objectivewire.org/blog/your-article-slug
 *    and auto-populates the /blog feed.
 *
 * RULES (enforced by OStandard + build guard)
 * - No em dashes (—) anywhere. Use commas or rewrite.
 * - No en dashes (–). Use hyphens.
 * - No & in H1/H2/H3. Use "and".
 * - metadata.title: max 60 chars, no brand suffix.
 * - First sentence of body = direct answer to the headline (no hooks).
 * - Min 4 internal links: hub backlink, 2 sibling stories, 1 author page.
 * - Named author only (no desk bylines).
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

// ─── SLUG / URL ───────────────────────────────────────────────────────────────
// TODO: Replace with this article's path segment (must match folder name)
const SLUG = '/blog/your-article-slug';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;

export const revalidate = 86400; // static, rebuild daily

// ─── SEO METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // TODO: Primary keyword | Specific detail — max 60 chars, no brand suffix, no em dashes
  title: 'Primary Keyword | Specific Detail Texas',

  // TODO: 130-155 chars. Primary keyword in first 60 chars. No generic phrases.
  description:
    'TODO: 130-155 char description. Primary keyword first. Specific, factual, no marketing language.',

  keywords: [
    // TODO: 10-14 targeted keywords. Real nouns, real search queries.
    'Texas investigative reporting',
    'Austin public records',
    // add more...
  ],

  alternates: { canonical: PAGE_URL },

  openGraph: {
    // TODO: OG title — can use & here, but no em dashes
    title: 'TODO: OG Title | Detail',
    description: 'TODO: OG description, hook-led or stat-led.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'Objective Wire',
    authors: ['TODO: Author Name'], // e.g. 'Jack Brennan'
    publishedTime: '2026-06-01T00:00:00Z', // TODO: actual publish date ISO-8601
    modifiedTime: '2026-06-01T00:00:00Z',  // TODO: actual modified date ISO-8601
    section: 'Investigations',
    tags: ['Texas', 'Investigations'], // TODO: 4-8 real proper noun tags
  },

  twitter: {
    card: 'summary_large_image',
    title: 'TODO: Twitter headline, hook-first or stat-first',
    description: 'TODO: Punchy, one key fact or claim.',
  },
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function YourArticlePage() {
  return (
    <NewsArticle
      // ── Core fields ──────────────────────────────────────────────────────
      // TODO: Full headline. No em dashes. Use | for separators.
      title="Primary Keyword | Specific Detail Texas"

      // TODO: One sentence. Data-led. No em dashes.
      subtitle="TODO: Subtitle sentence, specific and factual."

      category="Investigations"
      categoryColor="orange"
      topicTag="investigations"

      // TODO: Display date string
      publishDate="June 1, 2026"
      readTime="5 min read"

      // ── Author ───────────────────────────────────────────────────────────
      // TODO: Pick the correct author for the beat:
      //   Sports / General Texas  → Jack Brennan  (jack-brennan)
      //   Courts / Legal          → Jack Brennan  (jack-brennan)
      //   PI / Investigations     → Conan D. Boyle (conan-boyle)
      author={{
        name: 'Jack Brennan',
        role: 'Investigative Reporter',
        authorSlug: 'jack-brennan',
      }}

      // ── Breadcrumbs ──────────────────────────────────────────────────────
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Texas Investigations', item: '/blog' },
        // TODO: Add region if applicable:
        // { name: 'Austin', item: '/local/austin' },
        { name: 'TODO: Article short title', item: SLUG },
      ]}

      // ── Key Takeaways (required, feeds AI citation) ──────────────────────
      // Each item = one complete sentence that stands alone without the article.
      // Item 1 = full definition of the subject.
      // No em dashes. No marketing language.
      keyTakeaways={[
        'TODO: [Subject] is a [complete definition with key context, date, location].',
        'TODO: [Key quantitative fact, a number, date, or statistic that stands alone].',
        'TODO: [Background or comparative fact with named source or document].',
        'TODO: [Status or outcome fact, what happened or what is pending].',
      ]}
      keyTakeawaysColor="orange"

      // ── FAQ (required, feeds AI citation) ────────────────────────────────
      // Question 1 MUST be "What is X?" or "Who is [Name]?" or "What happened at X?"
      // Answers: sentence 1 = direct answer. Max 3 sentences.
      faqItems={[
        {
          question: 'TODO: What is [subject of this investigation]?',
          answer: 'TODO: Direct answer in sentence 1. Full definition or event summary.',
        },
        {
          question: 'TODO: When did [event] happen?',
          answer: 'TODO: Date and brief context.',
        },
        {
          question: 'TODO: What documents or records are involved?',
          answer: 'TODO: Name the specific documents, agencies, or filings.',
        },
        {
          question: 'TODO: What is the current status of [investigation/case]?',
          answer: 'TODO: Current status, next hearing date, or outcome.',
        },
      ]}

      // ── Tags ─────────────────────────────────────────────────────────────
      // 4-8 real proper nouns
      tags={['Texas', 'Austin', 'Investigations', 'Public Records']}

      slug="your-article-slug"
      url={SLUG}
    >
      {/*
        ── ARTICLE BODY ───────────────────────────────────────────────────────
        Rules:
        - First sentence = direct answer to the headline. No hooks.
        - Each H2 must contain the primary keyword or a named entity.
        - Minimum 4 internal links (hub backlink within first 3 paragraphs,
          2 sibling stories, 1 author page link).
        - External source links: target="_blank" rel="noopener noreferrer".
        - All links: className="text-blue-600 hover:text-blue-800 underline"
        - No em dashes. No en dashes. No & in headings.
      */}

      {/* ── PARAGRAPH 1: Direct answer + hub backlink ── */}
      <p>
        {/* TODO: Start with the direct factual answer. Example: */}
        {/* "The Austin City Council voted 5-4 on May 28, 2026, to approve..." */}
        TODO: First sentence is the direct answer to the headline. No hooks, no scene-setting.
        This investigation was conducted by the{' '}
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 underline">
          Objective Wire investigative team
        </Link>{' '}
        using public records obtained under the Texas Public Information Act.
      </p>

      <p>
        TODO: Second paragraph. Background context. Named sources, specific dates, documents.
      </p>

      {/* ── H2: First major section ── */}
      <h2>TODO: Primary Keyword | What the Records Show</h2>

      <p>
        TODO: Body of section. Cite specific documents, filing numbers, dates, named officials.
        External citations example:{' '}
        <a
          href="https://example.com/source"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Travis County court filing 2026-CV-XXXXX
        </a>.
      </p>

      {/* ── H2: Second major section ── */}
      <h2>TODO: Named Entity | Timeline and Background</h2>

      <p>TODO: Chronological background. Use specific dates and names.</p>

      {/* ── H2: Third major section ── */}
      <h2>TODO: Primary Keyword | What Happens Next</h2>

      <p>
        TODO: Status, next steps, pending hearings, or unresolved questions.
        For related Austin coverage, see the{' '}
        <Link href="/local/austin" className="text-blue-600 hover:text-blue-800 underline">
          Austin investigations hub
        </Link>.
      </p>

      {/* ── Author note + sibling links ── */}
      <p>
        This story was reported by{' '}
        <Link href="/authors/jack-brennan" className="text-blue-600 hover:text-blue-800 underline">
          Jack Brennan
        </Link>
        , investigative reporter at Objective Wire.
        {/* TODO: Add 1-2 sibling story links here once published. Example: */}
        {/* See also:{' '} */}
        {/* <Link href="/blog/sibling-story" className="text-blue-600 hover:text-blue-800 underline"> */}
        {/*   Related investigation title */}
        {/* </Link>. */}
      </p>

    </NewsArticle>
  );
}
