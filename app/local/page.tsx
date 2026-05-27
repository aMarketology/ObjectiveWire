import type { Metadata } from 'next';
import { Hub } from '@/components/Hub';

export const dynamic = 'force-static';
export const revalidate = 3600;

const PAGE_URL = 'https://www.objectivewire.com/local';

export const metadata: Metadata = {
  title: 'Local Texas News | Investigative Reporting | Objective Wire',
  description:
    'Objective Wire covers Austin, Houston, and Greater Texas. Public records reporting, accountability journalism, and source-based news from the state\'s top stories.',
  keywords: [
    'Texas investigative news',
    'Austin local news',
    'Houston investigative reporting',
    'Texas accountability journalism',
    'Austin investigative reporter',
    'Austin public records journalism',
    'Travis County news',
    'Texas news network',
    'local Texas news 2026',
    'Objective Wire Texas',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Local Texas News | Investigative Reporting | Objective Wire',
    description:
      'An independent investigative newsroom covering Austin, Houston, and Greater Texas. Public records, accountability journalism, and named bylines on every story.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'Objective Wire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Texas News | Objective Wire',
    description: 'Local Texas investigative newsroom. Austin, Houston, statewide reporting.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NewsMediaOrganization',
  name: 'Objective Wire',
  url: 'https://www.objectivewire.com/local',
  description:
    'Objective Wire covers Austin, Houston, and Greater Texas with original investigative reporting, public records journalism, and source-based news.',
  areaServed: [
    { '@type': 'City', name: 'Austin' },
    { '@type': 'City', name: 'Houston' },
    { '@type': 'State', name: 'Texas' },
  ],
};

export default function LocalHubPage() {
  return (
    <Hub
      badge="Local Texas Reporting"
      badgeColor="from-orange-600 to-red-700"
      title="Local Texas Reporting"
      subtitle="Objective Wire covers Austin, Houston, and Greater Texas with original investigative reporting. Public records, accountability journalism, court documents, FOIA filings, and source-based news from named reporters."
      updatedAt="2026-05-26"
      jsonLd={jsonLd}
    >
      <Hub.StatBar
        items={[
          { value: 'Original', label: 'Primary Source Reporting' },
          { value: '501(c)(3)', label: 'Nonprofit Newsroom' },
          { value: 'Austin TX', label: 'Headquarters' },
          { value: 'Primary', label: 'Sources Only' },
        ]}
      />

      <Hub.Section title="Texas Coverage Areas" icon="📍" id="coverage-areas">
        <Hub.Prose>
          <p>
            Objective Wire covers Texas from the ground up. Every story is reported by a named journalist
            with full editorial accountability. We do not aggregate or rewrite other outlets.
            We report, investigate, and publish original work.
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
                href: '/news',
                emoji: '📰',
                label: 'Latest News',
                sub: 'Breaking stories, public records, accountability',
              },
            ]}
          />
        </div>
      </Hub.Section>

      <Hub.Section title="What Makes Us Different" icon="⚖️" id="difference" variant="highlight">
        <Hub.Prose>
          <p>
            Most local news outlets rely on press releases and police blotters. Objective Wire
            is an independent newsroom with no outside investors, no advertisers, and no profit
            motive shaping coverage. Our reporters dig into public records, court filings, and
            FOIA responses, then publish the findings as journalism.
          </p>
          <p>
            Every byline is a named individual. No anonymous staff articles. No sponsored content.
            No outside investors. Corrections are public and timestamped.
          </p>
        </Hub.Prose>
        <Hub.InfoGrid
          columns={3}
          items={[
            { label: 'Reporting Methods', value: 'FOIA, Court Records, Public Documents' },
            { label: 'Sourcing Standard', value: 'Primary Sources Only' },
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
            Our Texas reporting focuses on beats where investigative journalism adds public value:
            local government contracting, accountability, property records, and corporate
            transparency in Travis and Harris counties.
          </p>
        </Hub.Prose>
        <Hub.Table
          columns={[
            { key: 'beat', label: 'Beat', bold: true },
            { key: 'method', label: 'Reporting Method' },
            { key: 'hub', label: 'Coverage Hub' },
          ]}
          rows={[
            { beat: 'Austin City Government', method: 'FOIA, Public Records', hub: 'Austin' },
            { beat: 'Travis County Courts', method: 'Court Records, Document Review', hub: 'Austin' },
            { beat: 'Texas Accountability', method: 'Public Records, Source Reporting', hub: 'Greater Texas' },
            { beat: 'Harris County Energy', method: 'Corporate Records, FOIA', hub: 'Houston' },
            { beat: 'Cross-Border Stories', method: 'Field Reporting, Source Network', hub: 'Mexico/Canada' },
          ]}
        />
      </Hub.Section>

      <Hub.Banner>
        <h2 className="text-2xl font-bold mb-2">Submit a Tip</h2>
        <p className="mb-4">Working on a story in Texas? Have documents, leads, or a source that needs investigation? Our newsroom accepts tips securely.</p>
        <a href="/get-help" className="inline-block bg-white text-blue-700 font-semibold px-6 py-2 rounded-lg hover:bg-blue-50 transition">Tip the Newsroom</a>
      </Hub.Banner>
    </Hub>
  );
}
