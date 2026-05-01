import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const metadata: Metadata = {
  title: 'Bugatti Tourbillon Revealed | 1,800 HP V16 Hybrid Hypercar',
  description: 'Bugatti unveils the Chiron successor: The Tourbillon. Featuring an 8.3L naturally aspirated V16 paired with three electric motors producing 1,800 HP.',
  alternates: { canonical: 'https://www.objectwire.org/cars/bugatti-tourbillon-v16-hybrid-reveal-2026' }
};

export default function Page() {
  return (
    <NewsArticle
      title="Bugatti Tourbillon Revealed | 1,800 HP V16 Hybrid Hypercar"
      subtitle="Bugatti unveils the Chiron successor: The Tourbillon. Featuring an 8.3L naturally aspirated V16 paired with three electric motors."
      category="Automotive"
      categoryColor="blue"
      topicTag="automotive"
      publishDate="2026-05-01T10:00:00Z"
      author={{ name: 'ObjectWire Auto Desk' }}
      heroImage={{
        src: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop',
        alt: 'Sleek hypercar concept',
        credit: 'Unsplash'
      }}
      thumbnail={{
        src: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=500&auto=format&fit=crop',
        alt: 'Sleek hypercar concept',
      }}
      slug="bugatti-tourbillon-v16-hybrid-reveal-2026"
      url="/cars/bugatti-tourbillon-v16-hybrid-reveal-2026"
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Cars', item: '/cars' },
        { name: 'Bugatti Tourbillon Revealed', item: '/cars/bugatti-tourbillon-v16-hybrid-reveal-2026' },
      ]}
    >
      <div>
        <p>
          The Bugatti Chiron has officially retired, but the internal combustion engine is not dead yet. Bugatti has unveiled its newest hypercar, the <strong>Tourbillon</strong>, a breathtaking engineering marvel that completely rewrites the rulebook on speed, luxury, and mechanical purity.
        </p>

        <h2 id="naturally-aspirated-v16">The Engine: 8.3-Liters of Naturally Aspirated Fury</h2>
        <p>
          The biggest shock of the Tourbillon is what sits behind the driver. Gone is the quad-turbo 8.0-liter W16 engine that defined the Veyron and Chiron eras. In its place is an entirely new <strong>8.3-liter naturally aspirated V16 engine</strong> developed in partnership with Cosworth.
        </p>
        <p>
          Free from turbochargers, this engine alone revs to 9,000 RPM and produces 1,000 horsepower. But it doesn't work alone. It is paired with an advanced plug-in hybrid system featuring two electric motors on the front axle and one integrated into the dual-clutch transmission at the rear. The total combined output? A staggering <strong>1,800 horsepower</strong>.
        </p>

        <h2 id="interior-design">Mechanical Horology: The Interior</h2>
        <p>
          Bugatti CEO Mate Rimac promised that the interior would remain timeless, entirely devoid of the giant touchscreens that quickly age in modern cars. Instead, the Tourbillon’s instrument cluster is a masterpiece of Swiss horology. The dials are constructed from titanium, sapphire crystal, and rubies, functioning entirely mechanically like a high-end skeleton watch. The steering wheel hub remains stationary while the rim rotates around it, ensuring the driver always has a perfect view of the exquisite gauges.
        </p>

        <h2 id="performance">Performance & Production</h2>
        <p>
          Bugatti claims the Tourbillon will hit 62 mph (100 km/h) in <strong>2.0 seconds flat</strong>, 124 mph in under 5.0 seconds, and 248 mph (400 km/h) in under 25 seconds. The top speed is electronically limited to 236 mph with the standard key, but the legendary "Speed Key" unlocks a top speed of <strong>276 mph (445 km/h)</strong>.
        </p>
        <p>
          Production of the Bugatti Tourbillon is limited to just 250 units worldwide. Deliveries are expected to begin in 2026, with a starting price of roughly $4.1 million (€3.8 million).
        </p>
      </div>
    </NewsArticle>
  );
}
