import type { Metadata } from 'next';
import { Hub } from '@/components/Hub';

export const dynamic = 'force-static';
export const revalidate = 3600;

const PAGE_URL = 'https://www.objectivewire.org/local/greater-texas';

export const metadata: Metadata = {
  title: 'Greater Texas News | Statewide Investigative Reporting | Objective Wire',
  description:
    'Statewide Texas investigative reporting. Workers comp fraud, missing persons, public corruption, and accountability journalism from Dallas, San Antonio, El Paso, and the Valley.',
  keywords: [
    'Greater Texas news',
    'Texas statewide investigative reporting',
    'Texas workers compensation fraud',
    'Texas missing persons reporting',
    'Texas public corruption news',
    'Dallas investigative news',
    'San Antonio accountability journalism',
    'El Paso news',
    'Rio Grande Valley news',
    'Texas licensed investigative reporter',
    'Objective Wire Texas',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Greater Texas News | Statewide Investigative Reporting | Objective Wire',
    description:
      'Statewide Texas investigative reporting. Workers comp fraud, missing persons, public corruption, Panhandle to the Valley.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'Objective Wire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Greater Texas News | Objective Wire',
    description: 'Statewide Texas investigative reporting. Workers comp, missing persons, public corruption.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NewsMediaOrganization',
  name: 'Objective Wire',
  url: PAGE_URL,
  description: 'Texas-licensed investigative newsroom covering all of Texas statewide.',
  areaServed: { '@type': 'State', name: 'Texas' },
};

export default function GreaterTexasHubPage() {
  return (
    <Hub
      badge="Greater Texas"
      badgeColor="from-green-700 to-teal-600"
      title="Greater Texas Reporting"
      subtitle="Objective Wire covers all of Texas, from the Panhandle to the Rio Grande Valley. Our licensed reporters investigate workers compensation fraud, missing persons cases, public corruption, and environmental accountability across the state."
      updatedAt="2026-05-26"
      jsonLd={jsonLd}
      meta={
        <>
          <span>📍 Statewide, Texas</span>
          <span>🔍 Licensed PI Reporters</span>
          <span>📋 Texas PIA Requests</span>
        </>
      }
    >
      <Hub.Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Local', href: '/local' },
          { label: 'Greater Texas' },
        ]}
      />

      <Hub.StatBar
        items={[
          { value: 'Statewide', label: 'Coverage Area' },
          { value: 'Ch. 1702', label: 'TX PI License' },
          { value: 'FOIA + Field', label: 'Methods' },
          { value: '254 Counties', label: 'Jurisdiction' },
        ]}
      />

      <Hub.Section title="What We Cover Statewide" icon="🤠" id="coverage">
        <Hub.Prose>
          <p>
            Texas has 254 counties, 29 million people, and a public records law, the Texas Public
            Information Act, that is among the strongest in the country. Objective Wire reporters
            use Texas PI credentials to investigate stories that span county lines: workers
            compensation fraud rings, missing persons cases, public contract corruption, and
            environmental violations by oil and gas operators.
          </p>
          <p>
            We prioritize stories that no single local outlet can pursue because they require
            multi-county investigation, surveillance, or source development across long distances.
            Licensed PI methods make this possible in ways that traditional reporters cannot match.
          </p>
        </Hub.Prose>
      </Hub.Section>

      <Hub.Section title="Statewide Coverage Beats" icon="📋" id="beats" variant="card">
        <Hub.LinkGrid
          columns={3}
          items={[
            { href: '/service/workers-compensation-fraud', emoji: '🏥', label: 'Workers Comp Fraud', sub: 'Surveillance, field investigation, employer fraud' },
            { href: '/service/missing-persons', emoji: '🔎', label: 'Missing Persons', sub: 'Skip tracing, field investigation, family cases' },
            { href: '/local/greater-texas', emoji: '🏛️', label: 'Public Corruption', sub: 'County contracts, elected officials, procurement fraud' },
            { href: '/local/greater-texas', emoji: '🌵', label: 'Environmental', sub: 'Oil and gas, ag runoff, border region pollution' },
            { href: '/local/greater-texas', emoji: '🚔', label: 'Law Enforcement', sub: 'Misconduct, use of force, civil asset forfeiture' },
            { href: '/service/tip-the-newsroom', emoji: '📬', label: 'Submit a Tip', sub: 'Statewide tips, documents, whistleblowers' },
          ]}
        />
      </Hub.Section>

      <Hub.Section title="Texas Regions" icon="🗺️" id="regions">
        <Hub.InfoGrid
          columns={4}
          items={[
            { label: 'Central Texas', value: 'Austin, Waco, Temple' },
            { label: 'North Texas', value: 'Dallas, Fort Worth, Denton' },
            { label: 'South Texas', value: 'San Antonio, Laredo, RGV' },
            { label: 'West Texas', value: 'El Paso, Midland, Lubbock' },
            { label: 'East Texas', value: 'Tyler, Nacogdoches, Beaumont' },
            { label: 'Gulf Coast', value: 'Houston, Corpus Christi, Port A' },
            { label: 'Panhandle', value: 'Amarillo, Lubbock, Abilene' },
            { label: 'Border Region', value: 'El Paso, Eagle Pass, Del Rio' },
          ]}
        />
      </Hub.Section>

      <Hub.Section title="Greater Texas Stories" icon="📰" id="stories">
        <p className="text-gray-500 text-lg">Statewide investigations in progress. Stories publish as reporting is complete.</p>
        <p className="text-gray-400 text-sm mt-2">
          Have a statewide lead? <a href="/service/tip-the-newsroom" className="text-blue-600 hover:text-blue-800 underline">Submit a tip to the newsroom.</a>
        </p>
      </Hub.Section>

      <Hub.Banner gradient="from-amber-600 to-orange-600">
        <h2 className="text-2xl font-bold mb-2">Statewide Tips Welcome</h2>
        <p className="mb-4 opacity-90">Investigating workers comp fraud, a corrupt county official, or a missing persons case anywhere in Texas? Our licensed reporters can help.</p>
        <a href="/service/tip-the-newsroom" className="inline-block bg-white text-amber-700 font-semibold px-6 py-2 rounded-lg hover:bg-amber-50 transition">Submit a Secure Tip</a>
      </Hub.Banner>
    </Hub>
  );
}
