// =============================================================================
// KEY TAKEAWAYS — AI-Extraction-first structured summary block
//
// Renders a 3-5 item structured list at the top of an article.
// Emits an ItemList JSON-LD block so AI systems (ChatGPT, Copilot, Gemini)
// can pull the list as a named, citable unit.
//
// Usage:
//   <KeyTakeaways items={[
//     'Ferrari F80 produces 1,184hp from a V6 hybrid system.',
//     'All 799 units sold before the public reveal at $3.735M each.',
//     'Deliveries began Q1 2026 to existing Ferrari hypercar clients.',
//   ]} />
//
// Rules:
//   - Every item must be a single, self-contained declarative sentence.
//   - No em dashes. No marketing language.
//   - Write as if an AI will copy this verbatim into its answer.
// =============================================================================

export interface KeyTakeawaysProps {
  items: string[];
  /** Accent color for the left border + label. Default: 'gray' */
  color?: 'gray' | 'red' | 'blue' | 'green' | 'orange' | 'purple';
  /** Override the heading text. Default: 'Key Takeaways' */
  heading?: string;
  /** URL of the article this block belongs to, used in JSON-LD. */
  articleUrl?: string;
}

const borderColors: Record<string, string> = {
  gray:   'border-gray-900 dark:border-gray-300',
  red:    'border-red-600',
  blue:   'border-blue-600',
  green:  'border-green-600',
  orange: 'border-orange-500',
  purple: 'border-purple-600',
};

const labelColors: Record<string, string> = {
  gray:   'text-gray-900 dark:text-gray-100',
  red:    'text-red-700 dark:text-red-400',
  blue:   'text-blue-700 dark:text-blue-400',
  green:  'text-green-700 dark:text-green-400',
  orange: 'text-orange-700 dark:text-orange-400',
  purple: 'text-purple-700 dark:text-purple-400',
};

export function KeyTakeaways({
  items,
  color = 'gray',
  heading = 'Key Takeaways',
  articleUrl,
}: KeyTakeawaysProps) {
  if (!items || items.length === 0) return null;

  // JSON-LD: ItemList — each takeaway as a ListItem
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: heading,
    ...(articleUrl ? { url: articleUrl } : {}),
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <aside
        aria-label={heading}
        className={`not-prose my-8 border-l-4 ${borderColors[color]} bg-gray-50 dark:bg-gray-900 px-5 py-5`}
      >
        <p className={`text-[10px] uppercase tracking-[0.25em] font-black font-mono mb-3 ${labelColors[color]}`}>
          {heading}
        </p>
        <ul className="space-y-2.5 m-0 p-0 list-none">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[15px] leading-snug text-gray-800 dark:text-gray-200 font-sans"
            >
              <span
                className={`mt-[2px] shrink-0 text-[10px] font-black font-mono ${labelColors[color]}`}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default KeyTakeaways;
