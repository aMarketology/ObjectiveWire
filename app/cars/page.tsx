import type { Metadata } from 'next';
import Hub from '@/components/Hub';
import { getArticlesByCategory } from '@/lib/registry-service';

// ISR: regenerate at most once per hour.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Cars & Automotive | oWire',
  description: 'Hypercars, sports cars, and automotive culture. No filter.',
  alternates: { canonical: 'https://www.objectwire.org/cars' }
};

export default async function CarsHubPage() {
  const carArticles = await getArticlesByCategory('Automotive', 20);

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

      <Hub.Prose>
        <p>
          oWire Cars covers hypercars, supercars, and electric vehicles from the brands that define
          performance: Ferrari, Bugatti, Porsche, Lamborghini, McLaren, and Tesla. Every article is
          sourced to primary manufacturer data and named journalists. No sponsored reviews.
          Coverage includes reveal coverage, spec analysis, comparison tests, and production updates.
        </p>
        <p>
          Current focus areas: the Ferrari F80 (1,184hp, $3.735M, all 799 units sold), the Bugatti
          Tourbillon (1,800hp V16 hybrid, $4.1M, 250 units), the Ferrari Luce (first electric Ferrari,
          1,113hp, from $530,000), and the Porsche 911 GT3 SC Sport Cabriolet.
        </p>
      </Hub.Prose>

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
