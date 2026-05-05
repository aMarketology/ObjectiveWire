import type { Metadata } from 'next';
import Hub from '@/components/Hub';
import { getArticlesByCategory } from '@/lib/registry-service';

// ISR: regenerate at most once per hour.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Golf News & Analysis | oWire',
  description: 'The latest from the PGA Tour, LIV Golf, and the world of golf.',
  alternates: { canonical: 'https://www.objectwire.org/golf' }
};

export default async function GolfHubPage() {
  const golfArticles = await getArticlesByCategory('Golf', 20);

  // Split into featured and latest
  const featured = golfArticles.slice(0, 2);
  const latest = golfArticles.slice(2);

  return (
    <Hub
      title="Golf"
      subtitle="From the PGA Tour to LIV Golf. The majors, the money, and the drama."
      badge="Golf"
      badgeColor="from-[#1e3a5f] to-[#10b981]"
    >
      <Hub.StatBar
        items={[
          { value: '4', label: 'Majors' },
          { value: '18', label: 'Holes' },
          { value: '72', label: 'Par Average' },
          { value: 'PGA', label: 'Tour' },
        ]}
        accentColor="text-[#10b981]"
      />

      {featured.length > 0 && (
        <Hub.Section title="Top Stories" variant="default" className="border-[#0f172a] shadow-lg">
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
