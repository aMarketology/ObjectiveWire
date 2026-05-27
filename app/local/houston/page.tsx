import type { Metadata } from 'next';
import { Hub } from '@/components/Hub';

export const dynamic = 'force-static';
export const revalidate = 3600;

const PAGE_URL = 'https://www.objectivewire.com/local/houston';

export const metadata: Metadata = {
  title: 'Houston News | Investigative Reporting Houston TX | Objective Wire',
  description:
    'Independent investigative news from Houston, Texas. Harris County, HPD, energy sector, port authority, and accountability journalism by named Texas reporters.',
  keywords: [
    'Houston investigative news',
    'Houston Texas news 2026',
    'Harris County accountability journalism',
    'Houston HPD news',
    'Houston energy sector reporting',
    'Houston public records journalism',
    'Harris County news',
    'Houston TX local news',
    'Objective Wire Houston',
    'Texas investigative reporter Houston',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Houston News | Investigative Reporting Houston TX | Objective Wire',
    description:
      'Independent investigative news from Houston and Harris County. HPD, energy sector, port, and accountability journalism.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'Objective Wire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Houston Investigative News | Objective Wire',
    description: 'Independent investigative journalism from Houston, TX. Harris County, energy, HPD.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NewsMediaOrganization',
  name: 'Objective Wire',
  url: PAGE_URL,
  description: 'Independent investigative newsroom covering Houston, Texas and Harris County.',
  areaServed: [
    { '@type': 'City', name: 'Houston', containedIn: { '@type': 'State', name: 'Texas' } },
    { '@type': 'AdministrativeArea', name: 'Harris County' },
  ],
};

export default function HoustonHubPage() {
  return (
    <Hub
      badge="Houston, Texas"
      badgeColor="from-red-700 to-orange-600"
      title="Houston Investigative News"
      subtitle="Original reporting from Houston and Harris County. Energy sector, HPD, port authority, courts, and accountability journalism by Objective Wire reporters."
      updatedAt="2026-05-26"
      jsonLd={jsonLd}
      meta={
        <>
          <span>📍 Harris County, TX</span>
          <span>📝 Primary-Source Reporting</span>
          <span>⛽ Energy Beat</span>
        </>
      }
    >
      <Hub.Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Local', href: '/local' },
          { label: 'Houston' },
        ]}
      />

      <Hub.StatBar
        items={[
          { value: 'Houston TX', label: 'Primary Beat' },
          { value: 'Harris County', label: 'Jurisdiction' },
          { value: 'FOIA + Field', label: 'Methods' },
          { value: 'Named', label: 'All Bylines' },
        ]}
      />

      <Hub.Section title="What We Cover in Houston" icon="🛢️" id="coverage">
        <Hub.Prose>
          <p>
            Houston is the fourth-largest city in the United States and the energy capital of the
            country. It is also chronically underserved by investigative journalism. The port of
            Houston, the refinery corridor along the Ship Channel, Harris County\'s sprawling court
            system, and HPD\'s use-of-force record are all high-value beats that Objective Wire
            covers using primary-source reporting, FOIA requests, and court records.
          </p>
          <p>
            Our Houston beats include Harris County contracts and procurement, Houston Police
            Department disciplinary and use-of-force records, the Port of Houston Authority, the
            Texas energy sector, and environmental accountability along the Gulf Coast.
          </p>
        </Hub.Prose>
      </Hub.Section>

      <Hub.Section title="Houston Coverage Beats" icon="📋" id="beats" variant="card">
        <Hub.LinkGrid
          columns={3}
          items={[
            { href: '/local/houston', emoji: '⛽', label: 'Energy Sector', sub: 'Refineries, pipelines, port authority, Shell, ExxonMobil' },
            { href: '/local/houston', emoji: '⚖️', label: 'Harris County Courts', sub: 'Civil, criminal, family court filings' },
            { href: '/local/houston', emoji: '👮', label: 'Houston HPD', sub: 'Use of force, disciplinary records, FOIA' },
            { href: '/local/houston', emoji: '🚢', label: 'Port of Houston', sub: 'Contracts, operations, federal oversight' },
            { href: '/local/houston', emoji: '🌊', label: 'Environmental', sub: 'Ship Channel, refinery emissions, flooding accountability' },
            { href: '/service/tip-the-newsroom', emoji: '📬', label: 'Submit a Tip', sub: 'Documents, leads, or whistleblower contacts' },
          ]}
        />
      </Hub.Section>

      <Hub.Section title="Houston Stories" icon="📰" id="stories">
        <p className="text-gray-500 text-lg">Houston investigations in progress. Stories publish as reporting is complete.</p>
        <p className="text-gray-400 text-sm mt-2">
          Have a lead? <a href="/service/tip-the-newsroom" className="text-blue-600 hover:text-blue-800 underline">Submit a tip to the newsroom.</a>
        </p>
      </Hub.Section>

      <Hub.Banner>
        <h2 className="text-2xl font-bold mb-2">Tip the Houston Newsroom</h2>
        <p className="mb-4">Know about an energy company, an HPD incident, or a port contract that needs investigation? Reach our editorial team directly.</p>
        <a href="/service/tip-the-newsroom" className="inline-block bg-white text-blue-700 font-semibold px-6 py-2 rounded-lg hover:bg-blue-50 transition">Submit a Secure Tip</a>
      </Hub.Banner>
    </Hub>
  );
}
