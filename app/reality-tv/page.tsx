import type { Metadata } from 'next';
import Hub from '@/components/Hub';
import { getArticlesByPath } from '@/lib/registry-service';

// ISR: regenerate at most once per hour.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Reality TV News & Recaps | The Voice, Survivor, Big Brother',
  description:
    'Reality TV coverage from oWire: The Voice, Survivor, Big Brother and The Amazing Race. Premiere recaps, cast guides, format twists and live show results.',
  keywords: [
    'reality TV news 2026',
    'The Voice Season 30',
    'Survivor Season 51',
    'Big Brother Season 28',
    'Amazing Race Season 39 cast',
    'reality competition shows',
  ],
  alternates: { canonical: 'https://www.objectivewire.com/reality-tv' },
  openGraph: {
    title: 'Reality TV | The Voice, Survivor, Big Brother, Amazing Race',
    description:
      'Premiere recaps, cast guides, format twists and live show results for The Voice, Survivor, Big Brother and The Amazing Race.',
    url: 'https://www.objectivewire.com/reality-tv',
    siteName: 'Objective Wire',
    type: 'website',
  },
};

export default async function RealityTVHubPage() {
  const articles = await getArticlesByPath('/reality-tv', 20);

  const featured = articles.slice(0, 2);
  const latest = articles.slice(2);

  return (
    <Hub
      title="Reality TV"
      subtitle="Primetime competitions. The Voice, Survivor, Big Brother, and The Amazing Race, tracked episode by episode."
      badge="Reality"
      badgeColor="from-[#4c1d95] to-[#7c3aed]"
    >
      <Hub.StatBar
        items={[
          { value: '30', label: 'Voice Seasons' },
          { value: '51', label: 'Survivor Seasons' },
          { value: '28', label: 'Big Brother' },
          { value: '39', label: 'Amazing Race' },
        ]}
        accentColor="text-[#7c3aed]"
      />

      {featured.length > 0 && (
        <Hub.Section title="Top Stories" variant="default" className="border-[#4c1d95] shadow-lg">
          <Hub.CardGrid columns={featured.length === 1 ? 1 : 2}>
            {featured.map((a) => (
              <Hub.Card
                key={a.slug}
                href={a.slug}
                title={a.title}
                description={a.description}
                thumbnail={a.imageUrl}
                publishedAt={a.publishDate}
              />
            ))}
          </Hub.CardGrid>
        </Hub.Section>
      )}

      {latest.length > 0 && (
        <Hub.Section title="Latest Coverage" variant="card">
          <Hub.CardGrid columns={3}>
            {latest.map((a) => (
              <Hub.Card
                key={a.slug}
                href={a.slug}
                title={a.title}
                description={a.description}
                thumbnail={a.imageUrl}
                publishedAt={a.publishDate}
              />
            ))}
          </Hub.CardGrid>
        </Hub.Section>
      )}
    </Hub>
  );
}