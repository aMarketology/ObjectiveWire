import type { Metadata } from 'next';
import { Hub } from '@/components/Hub';

export const dynamic = 'force-static';
export const revalidate = 3600;

const PAGE_URL = 'https://www.objectivewire.com/local/austin';

export const metadata: Metadata = {
  title: 'Austin News | Investigative Reporting Austin TX | Objective Wire',
  description:
    'Investigative news from Austin, Texas. Travis County, City of Austin, APD, local politics, public records, and accountability journalism by named reporters.',
  keywords: [
    'Austin investigative news',
    'Austin Texas news 2026',
    'Travis County accountability journalism',
    'Austin City Hall reporting',
    'Austin APD news',
    'Austin public records journalism',
    'Austin Texas investigative reporter',
    'Travis County news',
    'Austin TX local news',
    'Objective Wire Austin',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Austin News | Investigative Reporting Austin TX | Objective Wire',
    description:
      'Investigative news from Austin and Travis County. City Hall, APD, public records, and accountability journalism.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'Objective Wire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Austin Investigative News | Objective Wire',
    description: 'Independent investigative journalism from Austin, TX. Travis County, City Hall, public records.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NewsMediaOrganization',
  name: 'Objective Wire',
  url: PAGE_URL,
  description: 'Independent investigative newsroom covering Austin, Texas and Travis County.',
  areaServed: [
    { '@type': 'City', name: 'Austin', containedIn: { '@type': 'State', name: 'Texas' } },
    { '@type': 'AdministrativeArea', name: 'Travis County' },
  ],
};

export default function AustinHubPage() {
  return (
    <Hub
      badge="Austin, Texas"
      badgeColor="from-blue-700 to-blue-500"
      title="Austin Investigative News"
      subtitle="Original reporting from Austin and Travis County. City government, APD, courts, public records, and accountability journalism by licensed Texas reporters."
      updatedAt="2026-05-26"
      jsonLd={jsonLd}
      meta={
        <>
          <span>📍 Travis County, TX</span>
          <span>📋 Texas FOIA Requests</span>
          <span>📋 Public Records</span>
        </>
      }
    >
      <Hub.Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Local', href: '/local' },
          { label: 'Austin' },
        ]}
      />

      <Hub.StatBar
        items={[
          { value: 'Austin TX', label: 'Primary Beat' },
          { value: 'Travis County', label: 'Jurisdiction' },
          { value: 'FOIA', label: 'Primary Tool' },
          { value: 'Named', label: 'All Bylines' },
        ]}
      />

      <Hub.Section title="What We Cover in Austin" icon="🏙️" id="coverage">
        <Hub.Prose>
          <p>
            Austin is one of the fastest-growing cities in the United States and one of the most
            underreported. Explosive population growth, a tech influx, a contested police department,
            and a City Council with a history of opaque contracting decisions create fertile ground
            for investigative journalism. Objective Wire covers Austin with licensed reporters who
            can access public records, conduct field investigations, and publish under their own names.
          </p>
          <p>
            Our Austin beats include City of Austin contracts and procurement, Travis County civil
            and criminal courts, Austin Police Department use-of-force and disciplinary records,
            Austin Independent School District, and the local real estate and development industry.
          </p>
        </Hub.Prose>
      </Hub.Section>

      <Hub.Section title="Austin Coverage Beats" icon="📋" id="beats" variant="card">
        <Hub.LinkGrid
          columns={3}
          items={[
            { href: '/local/austin', emoji: '🏛️', label: 'City Government', sub: 'Contracts, Council, procurement records' },
            { href: '/local/austin', emoji: '⚖️', label: 'Travis County Courts', sub: 'Civil, criminal, family court filings' },
            { href: '/local/austin', emoji: '👮', label: 'Austin APD', sub: 'Use of force, disciplinary records, FOIA' },
            { href: '/local/austin', emoji: '🏫', label: 'Austin ISD', sub: 'Budget, administration, board decisions' },
            { href: '/local/austin', emoji: '🏗️', label: 'Development', sub: 'Zoning, permits, real estate accountability' },
            { href: '/service/tip-the-newsroom', emoji: '📬', label: 'Submit a Tip', sub: 'Documents, leads, or whistleblower contacts' },
          ]}
        />
      </Hub.Section>

      <Hub.Section title="Austin Stories" icon="📰" id="stories">
        <p className="text-gray-500 text-lg">Austin investigations in progress. Stories publish as reporting is complete.</p>
        <p className="text-gray-400 text-sm mt-2">
          Have a lead? <a href="/get-help" className="text-blue-600 hover:text-blue-800 underline">Submit a tip to the newsroom.</a>
        </p>
      </Hub.Section>

      <Hub.Section title="Why Austin Reporting Standards Matter" icon="⚖️" id="why" variant="highlight">
        <Hub.Prose>
          <p>
            Every Objective Wire story on Austin city hall, Travis County courts, or APD
            is sourced from primary documents: FOIA responses, official filings, court records,
            and named on-record sources. We do not publish anonymous claims without corroboration.
          </p>
          <p>
            This is what separates Austin investigative journalism at Objective Wire from every other
            local outlet in Travis County.
          </p>
        </Hub.Prose>
        <Hub.InfoGrid
          columns={2}
          items={[
            { label: 'FOIA Jurisdiction', value: 'Texas Public Information Act' },
            { label: 'Court Records Access', value: 'Travis County District Clerk' },
            { label: 'Editorial Standard', value: 'Primary Sources Only' },
            { label: 'Organization Type', value: '501(c)(3) Nonprofit' },
          ]}
        />
      </Hub.Section>

      <Hub.Banner>
        <h2 className="text-2xl font-bold mb-2">Tip the Austin Newsroom</h2>
        <p className="mb-4">Know about a city contract, a use-of-force incident, or a story Austin media won&apos;t touch? Reach our editorial team directly.</p>
        <a href="/get-help" className="inline-block bg-white text-blue-700 font-semibold px-6 py-2 rounded-lg hover:bg-blue-50 transition">Submit a Secure Tip</a>
      </Hub.Banner>
    </Hub>
  );
}
