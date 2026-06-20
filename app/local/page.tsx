import type { Metadata } from 'next';
import { Hub } from '@/components/Hub';

export const dynamic = 'force-static';
export const revalidate = 3600;

const PAGE_URL = 'https://www.objectivewire.com/local';

export const metadata: Metadata = {
  title: 'Local Texas News | Licensed Investigative Reporting | Objective Wire',
  description:
    'Objective Wire is a Texas-licensed investigative news network covering Austin, Houston, and Greater Texas. Public records, accountability journalism, PI-backed reporting.',
  keywords: [
    'Texas investigative news',
    'Austin local news',
    'Houston investigative reporting',
    'Texas accountability journalism',
    'licensed investigative reporter Texas',
    'Austin public records journalism',
    'Travis County news',
    'Texas PI news network',
    'local Texas news 2026',
    'Objective Wire Texas',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Local Texas News | Licensed Investigative Reporting | Objective Wire',
    description:
      'A Texas-licensed investigative news network. Austin, Houston, and Greater Texas reporting backed by PI credentials, public records, and named bylines.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'Objective Wire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Texas News | Objective Wire',
    description: 'Texas-licensed investigative newsroom. Austin, Houston, statewide reporting.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NewsMediaOrganization',
  name: 'Objective Wire',
  url: 'https://www.objectivewire.com/local',
  description:
    'Texas-licensed investigative news network covering Austin, Houston, and Greater Texas. Reporters hold Texas PI credentials.',
  areaServed: [
    { '@type': 'City', name: 'Austin' },
    { '@type': 'City', name: 'Houston' },
    { '@type': 'State', name: 'Texas' },
  ],
};

export default function LocalHubPage() {
  return (
    <Hub
      badge="Texas Licensed Investigative News"
      badgeColor="from-orange-600 to-red-700"
      title="Local Texas Reporting"
      subtitle="Objective Wire is a Texas-licensed investigative news network. Our reporters hold Texas PI credentials and apply them to original on-the-ground reporting, public records, surveillance, FOIA, and source-based journalism from Austin, Houston, and Greater Texas."
      updatedAt="2026-05-26"
      jsonLd={jsonLd}
    >
      <Hub.StatBar
        items={[
          { value: 'Licensed', label: 'Texas PI Credentials' },
          { value: '501(c)(3)', label: 'Nonprofit Newsroom' },
          { value: 'Austin TX', label: 'Headquarters' },
          { value: 'Primary', label: 'Sources Only' },
        ]}
      />

      <Hub.Section title="Texas Coverage Areas" icon="📍" id="coverage-areas">
        <Hub.Prose>
          <p>
            Objective Wire covers Texas from the ground up. Every story is reported by a named journalist
            holding Texas PI credentials under Chapter 1702 of the Texas Occupations Code. We do not
            aggregate or rewrite other outlets. We report, investigate, and publish original work.
          </p>
        </Hub.Prose>
        <div className="mt-6">
          <Hub.LinkGrid
            columns={3}
            items={[
              {
                href: '/local/austin',
                emoji: '🏙️',
                label: 'Austin',
                sub: 'Travis County, City Hall, APD, local accountability',
              },
              {
                href: '/local/houston',
                emoji: '🛢️',
                label: 'Houston',
                sub: 'Harris County, energy sector, port, city government',
              },
              {
                href: '/local/greater-texas',
                emoji: '🤠',
                label: 'Greater Texas',
                sub: 'Statewide coverage from Panhandle to the Valley',
              },
              {
                href: '/local/us-news',
                emoji: '🇺🇸',
                label: 'US News',
                sub: 'National stories with Texas angles',
              },
              {
                href: '/local/mexico-canada',
                emoji: '🌎',
                label: 'Mexico + Canada',
                sub: 'Cross-border reporting and trade',
              },
              {
                href: '/service',
                emoji: '🔍',
                label: 'PI Services',
                sub: 'Surveillance, background checks, FOIA, skip tracing',
              },
            ]}
          />
        </div>
      </Hub.Section>

      <Hub.Section title="What Makes Us Different" icon="⚖️" id="difference" variant="highlight">
        <Hub.Prose>
          <p>
            Most local news outlets rely on press releases and police blotters. Objective Wire operates
            as a licensed private detective agency and newsroom simultaneously. That means our reporters
            can legally conduct surveillance, run background checks, trace sources, and access public
            records under Texas PI statutes, then publish the findings as journalism.
          </p>
          <p>
            Every byline is a named individual. No anonymous staff articles. No sponsored content.
            No outside investors. Corrections are public and timestamped.
          </p>
        </Hub.Prose>
        <Hub.InfoGrid
          columns={3}
          items={[
            { label: 'Legal Framework', value: 'Texas Occ. Code Ch. 1702' },
            { label: 'Reporting Methods', value: 'Surveillance, FOIA, Public Records' },
            { label: 'Structure', value: '501(c)(3) Nonprofit' },
            { label: 'Corrections Policy', value: 'Public, Timestamped' },
            { label: 'Sponsored Content', value: 'None, Ever' },
            { label: 'Outside Investors', value: 'None' },
          ]}
        />
      </Hub.Section>

      <Hub.Section title="Investigative Beats" icon="📋" id="beats">
        <Hub.Prose>
          <p>
            Our Texas reporting focuses on beats where licensed investigation adds value that traditional
            journalism cannot match: local government contracting, workers compensation fraud, property
            crime, missing persons, and corporate accountability in Travis and Harris counties.
          </p>
        </Hub.Prose>
        <Hub.Table
          columns={[
            { key: 'beat', label: 'Beat', bold: true },
            { key: 'method', label: 'PI Method' },
            { key: 'hub', label: 'Coverage Hub' },
          ]}
          rows={[
            { beat: 'Austin City Government', method: 'FOIA, Public Records', hub: 'Austin' },
            { beat: 'Travis County Courts', method: 'Court Records, Document Review', hub: 'Austin' },
            { beat: 'Workers Comp Fraud', method: 'Surveillance, Background Checks', hub: 'Greater Texas' },
            { beat: 'Missing Persons', method: 'Skip Tracing, Field Investigation', hub: 'Greater Texas' },
            { beat: 'Harris County Energy', method: 'Corporate Investigations, FOIA', hub: 'Houston' },
            { beat: 'Cross-Border Trafficking', method: 'Field Reporting, Source Network', hub: 'Mexico/Canada' },
          ]}
        />
      </Hub.Section>

      <Hub.Banner gradient="from-amber-600 to-orange-600">
        <h2 className="text-2xl font-bold mb-2">Submit a Tip</h2>
        <p className="mb-4 opacity-90">Working on a story in Texas? Have documents, leads, or a case that needs investigation? Our newsroom accepts tips securely.</p>
        <a href="/service/tip-the-newsroom" className="inline-block bg-white text-amber-700 font-semibold px-6 py-2 rounded-lg hover:bg-amber-50 transition">Tip the Newsroom</a>
      </Hub.Banner>
    </Hub>
  );
}
