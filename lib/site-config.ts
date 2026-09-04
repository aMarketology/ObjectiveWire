import { getActiveSiteConfig } from './active-site';

const _active = getActiveSiteConfig();
const _siteUrl = _active.url;

export const SITE_CONFIG = {
  name: _active.name,
  shortName: 'oWire',
  url: _siteUrl,
  domain: _active.domain,
  tagline: _active.tagline,
  description: _active.description,
  author: 'Objective Wire Editorial',
  email: _active.email,
  phone: '(575) 495-0323',
  address: _active.site === 'org'
    ? '2921 E 17th St Building 3, APT 3205, Austin, TX 78702'
    : 'objectivewire.com',
  twitter: '@owire',
  defaultOgImage: `${_siteUrl}/opengraph-image`,
  socialImage: `${_siteUrl}/opengraph-image`,
  locale: 'en_US',
} as const;

export type SiteConfig = typeof SITE_CONFIG;

export const BLOCKED_USER_AGENTS = [
  'CCBot',
];

export const TRACKING_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'fbclid',
  'gclid',
];

export const DUPLICATE_PARAMS = [
  'ref',
  'source',
  'campaign',
];
