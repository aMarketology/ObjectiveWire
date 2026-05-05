import type { Metadata } from 'next';
import Hub from '@/components/Hub';
import { getArticlesByCategory } from '@/lib/registry-service';

// ISR: regenerate at most once per hour. Hub pages don't change on every request.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'MLB News & Analysis | oWire',
  description: 'Major League Baseball news, scores, standings, and analysis from oWire.',
  alternates: { canonical: 'https://www.objectwire.org/mlb' },
};

export default async function MLBHubPage() {
  const articles = await getArticlesByCategory('MLB', 20);

  const featured = articles.slice(0, 2);
  const latest = articles.slice(2);

  return (
    <Hub
      title="MLB"
      subtitle="Major League Baseball — scores, trades, and the pennant race."
      badge="Baseball"
      badgeColor="from-[#7f1d1d] to-[#b91c1c]"
    >
      <Hub.StatBar
        items={[
          { value: '30', label: 'Teams' },
          { value: '162', label: 'Games' },
          { value: '2', label: 'Leagues' },
          { value: '2026', label: 'Season' },
        ]}
        accentColor="text-[#b91c1c]"
      />

      {featured.length > 0 && (
        <Hub.Section title="Top Stories" variant="default" className="border-[#b91c1c] shadow-lg">
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
