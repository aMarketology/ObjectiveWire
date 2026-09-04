// =============================================================================
// lib/active-site.ts — Multi-tenant site discriminator for ObjectiveWire
// =============================================================================
// Controls whether the current deployment/runtime behaves as:
//   - 'org':  objectivewire.org — Texas Investigations, Courts, Crime, Local News
//   - 'main': objectivewire.com — Sports, Creators, Cars, Culture, World Cup
//
// Selection is driven by OBJECTWIRE_SITE environment variable.
// =============================================================================

export type ObjectiveWireSite = 'org' | 'main';

export interface SiteDefinition {
  site: ObjectiveWireSite;
  name: string;
  domain: string;
  url: string;
  tagline: string;
  description: string;
  registryTable: string;
  email: string;
}

export const SITES: Record<ObjectiveWireSite, SiteDefinition> = {
  org: {
    site: 'org',
    name: 'Objective Wire',
    domain: 'objectivewire.org',
    url: 'https://www.objectivewire.org',
    tagline: 'Texas Investigations. Documented & Published.',
    description:
      'Objective Wire is a 501(c)(3) nonprofit investigative agency and public-interest newsroom covering Texas crime, courts, public accountability, and government investigations.',
    registryTable: 'content_registry_org',
    email: 'editorial@objectivewire.org',
  },
  main: {
    site: 'main',
    name: 'Objective Wire',
    domain: 'objectivewire.com',
    url: 'https://www.objectivewire.com',
    tagline: 'Sports, Creators, Cars & Culture.',
    description:
      'Objective Wire is a verified sports, creators, and culture network covering World Cup 2026, Premier League, MLS, MLB, supercars, and the creator economy.',
    registryTable: 'content_registry_main',
    email: 'editorial@objectivewire.com',
  },
};

/**
 * Returns the currently active site.
 * Defaults to 'main' if not explicitly configured (e.g. standard local dev).
 */
export function getActiveSite(): ObjectiveWireSite {
  const envVal = (
    process.env.OBJECTWIRE_SITE ||
    process.env.NEXT_PUBLIC_OBJECTWIRE_SITE ||
    ''
  ).toLowerCase().trim();

  if (envVal === 'org' || envVal === 'objectivewire.org') return 'org';
  if (envVal === 'main' || envVal === 'com' || envVal === 'objectivewire.com') return 'main';

  // Also inspect NEXT_PUBLIC_SITE_URL or VERCEL_URL if set
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    ''
  ).toLowerCase();

  if (siteUrl.includes('objectivewire.org')) return 'org';
  if (siteUrl.includes('objectivewire.com')) return 'main';

  return 'main';
}

export function getActiveSiteConfig(): SiteDefinition {
  return SITES[getActiveSite()];
}

export function getActiveRegistryTable(): string {
  return getActiveSiteConfig().registryTable;
}

export function getActiveSiteUrl(): string {
  return getActiveSiteConfig().url;
}

/**
 * Determines which site owns an article based on its route slug or explicit metadata.
 *   - 'org':  /local/*, /blog/*, /directory/*, /austin-private-detective-agency
 *   - 'main': /cars/*, /mlb/*, /mls/*, /premier-league/*, /soccer/*, /golf/*, /tennis/*,
 *             /creator/*, /influencer/*, /youtube/*, /podcasts/*, /world-cup/*
 */
export function getArticleOwnerSite(slug: string, explicitSite?: string): ObjectiveWireSite {
  if (explicitSite === 'org' || explicitSite === 'main') return explicitSite;

  const normalized = slug.startsWith('/') ? slug : `/${slug}`;

  // Dedicated Texas / local / investigative paths always belong to org
  if (
    normalized.startsWith('/local') ||
    normalized.startsWith('/blog') ||
    normalized.startsWith('/directory') ||
    normalized.startsWith('/austin-private-detective-agency')
  ) {
    return 'org';
  }

  // Specific Houston investigations that happen to live under /world-cup
  if (normalized.includes('fbi-nrg-stadium-threat-houston')) {
    return 'org';
  }

  // Everything else is main (cars, mlb, creator, world-cup matches, etc.)
  return 'main';
}
