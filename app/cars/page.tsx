import type { Metadata } from 'next';
import Hub from '@/components/Hub';
import { getAllEntries } from '@/lib/registry-service';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Cars & Automotive | oWire',
  description: 'Hypercars, sports cars, and automotive culture. No filter.',
  alternates: { canonical: 'https://www.objectwire.org/cars' }
};

export default async function CarsHubPage() {
  const contentRegistry = await getAllEntries();

  // Filter for car content
  const carArticles = contentRegistry
    .filter((a) => a.category.toLowerCase() === 'automotive' || a.category.toLowerCase() === 'cars' || a.slug.includes('/cars/'))
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  // Split into featured and latest
  const featured = carArticles.slice(0, 2);
  const latest = carArticles.slice(2);

  return (
    <Hub
      title="Cars"
      subtitle="Hypercars, track weapons, and automotive culture. The machines everyone is talking about."
      badge="Automotive"
      badgeColor="from-[#1e3a5f] to-[#b45309]"
    >
      <Hub.StatBar
        items={[
          { value: '1,800', label: 'HP Average' },
          { value: 'V16', label: 'Engine Of The Year' },
          { value: '2.0s', label: '0-60 Time' },
          { value: '300+', label: 'Top Speed MPH' },
        ]}
        accentColor="text-[#b45309]"
      />

      <Hub.Section title="Featured Hypercars" variant="default" className="border-[#0f172a] shadow-lg">
        <Hub.CardGrid columns={2}>
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

      <Hub.Section title="Latest Releases & Reviews" variant="card">
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
    </Hub>
  );
}
