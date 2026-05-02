import type { Metadata } from 'next';
import Hub from '@/components/Hub';
import { getAllEntries } from '@/lib/registry-service';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Premier League News & Analysis | oWire',
  description: 'The latest Premier League news, results, transfers, and analysis from oWire.',
  alternates: { canonical: 'https://www.objectwire.org/premier-league' },
};

export default async function PremierLeagueHubPage() {
  const contentRegistry = await getAllEntries();

  const articles = contentRegistry
    .filter((a) => {
      const cat = a.category.toLowerCase();
      const slug = a.slug.toLowerCase();
      return (
        cat === 'premier league' ||
        cat === 'premier-league' ||
        slug.includes('/premier-league/') ||
        slug.includes('premier-league')
      );
    })
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  const featured = articles.slice(0, 2);
  const latest = articles.slice(2);

  return (
    <Hub
      title="Premier League"
      subtitle="Top-flight English football — results, transfers, and the title race."
      badge="EPL"
      badgeColor="from-[#3d0099] to-[#4f46e5]"
    >
      <Hub.StatBar
        items={[
          { value: '20', label: 'Clubs' },
          { value: '380', label: 'Matches' },
          { value: '38', label: 'Match Days' },
          { value: '2025/26', label: 'Season' },
        ]}
        accentColor="text-[#4f46e5]"
      />

      {featured.length > 0 && (
        <Hub.Section title="Top Stories" variant="default" className="border-[#4f46e5] shadow-lg">
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
