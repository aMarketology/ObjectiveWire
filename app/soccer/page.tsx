import type { Metadata } from 'next';
import Hub from '@/components/Hub';
import { getAllEntries } from '@/lib/registry-service';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Soccer News & Analysis | oWire',
  description: 'The latest from the Premier League, MLS, World Cup, and global soccer.',
  alternates: { canonical: 'https://www.objectwire.org/soccer' }
};

export default async function SoccerHubPage() {
  const contentRegistry = await getAllEntries();

  // Filter for soccer content
  const soccerArticles = contentRegistry
    .filter((a) => {
      const cat = a.category.toLowerCase();
      const slug = a.slug.toLowerCase();
      return cat === 'soccer' || cat === 'world cup' || cat === 'mls' || cat === 'premier league' || slug.includes('/soccer/') || slug.includes('world-cup');
    })
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  // Split into featured and latest
  const featured = soccerArticles.slice(0, 2);
  const latest = soccerArticles.slice(2);

  return (
    <Hub
      title="Soccer"
      subtitle="The beautiful game. World Cup 2026, Premier League drama, and MLS expansions."
      badge="Football"
      badgeColor="from-[#0f172a] to-[#1e3a5f]"
    >
      <Hub.StatBar
        items={[
          { value: '16', label: 'Host Cities' },
          { value: '48', label: 'Nations' },
          { value: '104', label: 'Matches' },
          { value: '2026', label: 'World Cup' },
        ]}
        accentColor="text-[#1e3a5f]"
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
