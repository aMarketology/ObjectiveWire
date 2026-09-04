// =============================================================================
// lib/category-map.ts — Shared SEO Category Rules
// =============================================================================
// Single source of truth for slug-to-category mapping and helper functions.
// Imported by:
//   - lib/registry-loader.ts (build-time filesystem scan)
//   - scripts/sync-registry.ts (CLI diagnostic)
//
// NO server-only restriction — safe to import in both Next.js server components
// and plain tsx scripts without a Next.js runtime.

import type { ChangeFrequency } from './content-registry';
// =============================================================================

export interface CategoryRule {
  prefix: string;
  category: string;
  tags: string[];
}

// ---------------------------------------------------------------------------
// Complete category map — covers both branches (main: sports/creators/cars,
// org: investigations/local/Austin). Order matters: first match wins.
// ---------------------------------------------------------------------------
export const CATEGORY_MAP: CategoryRule[] = [
  // Sports
  { prefix: '/winter-olympics',     category: 'Sports',          tags: ['Winter Olympics', 'Milan Cortina 2026'] },
  { prefix: '/world-cup',           category: 'Sports',          tags: ['World Cup', 'Soccer', 'FIFA'] },
  { prefix: '/formula-1',           category: 'Sports',          tags: ['Formula 1', 'F1', 'Motorsport'] },
  { prefix: '/redbull',             category: 'Sports',          tags: ['Red Bull', 'Motorsport'] },
  { prefix: '/golf',                category: 'Sports',          tags: ['Golf', 'PGA Tour'] },
  { prefix: '/mlb',                 category: 'Sports',          tags: ['MLB', 'Baseball'] },
  { prefix: '/mls',                 category: 'Sports',          tags: ['MLS', 'Soccer'] },
  { prefix: '/premier-league',      category: 'Sports',          tags: ['Premier League', 'Soccer'] },
  { prefix: '/soccer',              category: 'Sports',          tags: ['Soccer', 'Football'] },

  // Creators / YouTube
  { prefix: '/youtube',             category: 'YouTube',         tags: ['YouTube', 'Creator Economy'] },
  { prefix: '/beastgames',          category: 'YouTube',         tags: ['Beast Games', 'MrBeast', 'YouTube'] },
  { prefix: '/influencer',          category: 'Creators',        tags: ['Influencer', 'Social Media'] },
  { prefix: '/creator',             category: 'Creators',        tags: ['Creator', 'Social Media'] },

  // Technology
  { prefix: '/nvidia',              category: 'Technology',      tags: ['NVIDIA', 'AI Hardware', 'GPU'] },
  { prefix: '/microsoft',           category: 'Technology',      tags: ['Microsoft', 'Big Tech'] },
  { prefix: '/google',              category: 'Technology',      tags: ['Google', 'Big Tech'] },
  { prefix: '/apple',               category: 'Technology',      tags: ['Apple', 'Big Tech'] },
  { prefix: '/open-ai',             category: 'Technology',      tags: ['OpenAI', 'Artificial Intelligence'] },
  { prefix: '/intel',               category: 'Technology',      tags: ['Intel', 'Semiconductors'] },
  { prefix: '/blitzy',              category: 'Technology',      tags: ['Blitzy', 'AI', 'SaaS'] },
  { prefix: '/tech',                category: 'Technology',      tags: ['Technology'] },
  { prefix: '/technology',          category: 'Technology',      tags: ['Technology'] },
  { prefix: '/saas',                category: 'Technology',      tags: ['SaaS', 'Software'] },
  { prefix: '/github',              category: 'Technology',      tags: ['GitHub', 'Open Source'] },
  { prefix: '/cameras',             category: 'Technology',      tags: ['Cameras', 'Photography'] },

  // Science
  { prefix: '/nasa',                category: 'Science',         tags: ['NASA', 'Space'] },
  { prefix: '/bio-hacking',         category: 'Science',         tags: ['Biohacking', 'Health', 'Science'] },
  { prefix: '/neurophos',           category: 'Science',         tags: ['Neurophos', 'AI Hardware', 'Photonics'] },
  { prefix: '/earth',               category: 'Science',         tags: ['Earth', 'Environment', 'Science'] },
  { prefix: '/research',            category: 'Research',        tags: ['Research', 'Analysis'] },

  // Finance / Business
  { prefix: '/finance',             category: 'Finance',         tags: ['Finance', 'Economy'] },
  { prefix: '/bank-of-america',     category: 'Finance',         tags: ['Bank of America', 'Finance'] },
  { prefix: '/crypto',              category: 'Finance',         tags: ['Crypto', 'Cryptocurrency', 'Web3'] },
  { prefix: '/elon-musk',           category: 'Business',        tags: ['Elon Musk', 'Tesla', 'xAI'] },
  { prefix: '/ironspring',          category: 'Business',        tags: ['Startups', 'Venture Capital'] },

  // Politics
  { prefix: '/trump',               category: 'Politics',        tags: ['Donald Trump', 'US Politics'] },

  // Entertainment
  { prefix: '/disney',              category: 'Entertainment',   tags: ['Disney', 'Entertainment'] },
  { prefix: '/artists',             category: 'Entertainment',   tags: ['Music', 'Artists'] },
  { prefix: '/entertainment',       category: 'Entertainment',   tags: ['Entertainment'] },

  // Gaming
  { prefix: '/video-games',         category: 'Gaming',          tags: ['Video Games', 'Gaming'] },

  // Cars / Automotive
  { prefix: '/cars',                category: 'Cars',            tags: ['Cars', 'Automotive'] },

  // Education / Lifestyle
  { prefix: '/college',             category: 'Education',       tags: ['College', 'Education'] },
  { prefix: '/clothing',            category: 'Lifestyle',       tags: ['Clothing', 'Fashion'] },

  // Social / Local
  { prefix: '/social',              category: 'Social Media',    tags: ['Social Media'] },
  { prefix: '/local',               category: 'Local',           tags: ['Local News'] },

  // Investigations (org branch)
  { prefix: '/ngos',                category: 'World Affairs',   tags: ['NGO', 'Nonprofits'] },
  { prefix: '/missing-persons',     category: 'Investigations',  tags: ['Missing Persons', 'Investigations'] },
  { prefix: '/investigations',      category: 'Investigations',  tags: ['Investigations'] },
  { prefix: '/austin-private',      category: 'Investigations',  tags: ['Private Investigations', 'Austin'] },

  // News / Blog / Media
  { prefix: '/news',                category: 'News',            tags: ['News'] },
  { prefix: '/blog',                category: 'Blog',            tags: ['Blog'] },
  { prefix: '/podcasts',            category: 'Media',           tags: ['Podcasts'] },

  // Meta / Site
  { prefix: '/objectwire',          category: 'Meta',            tags: ['ObjectWire'] },
  { prefix: '/service',             category: 'Services',        tags: ['Services'] },
  { prefix: '/about',               category: 'Meta',            tags: ['About', 'ObjectWire'] },
  { prefix: '/team',                category: 'Meta',            tags: ['Team', 'ObjectWire'] },
  { prefix: '/authors',             category: 'Meta',            tags: ['Author', 'ObjectWire'] },
  { prefix: '/site-index',          category: 'Meta',            tags: ['Site Index', 'Sitemap'] },
  { prefix: '/index',               category: 'Meta',            tags: ['Index'] },
  { prefix: '/search',              category: 'Meta',            tags: ['Search'] },

  // Reference / Support
  { prefix: '/define',              category: 'Reference',       tags: ['Definitions', 'Reference'] },
  { prefix: '/get-help',            category: 'Support',         tags: ['Help', 'Support'] },

  // Events
  { prefix: '/events',              category: 'Events',          tags: ['Events'] },

  // Legal
  { prefix: '/privacy-policy',      category: 'Legal',           tags: ['Privacy', 'Legal'] },
  { prefix: '/terms-of-service',    category: 'Legal',           tags: ['Terms', 'Legal'] },
  { prefix: '/copyright',           category: 'Legal',           tags: ['Copyright', 'Legal'] },
  { prefix: '/corrections',         category: 'Meta',            tags: ['Corrections', 'Editorial'] },
  { prefix: '/editorial-standards', category: 'Meta',            tags: ['Editorial', 'Standards'] },
];

// ---------------------------------------------------------------------------
// detectCategory — resolve a slug to category + base tags
// ---------------------------------------------------------------------------
export function detectCategory(slug: string): { category: string; tags: string[] } {
  for (const rule of CATEGORY_MAP) {
    if (slug.startsWith(rule.prefix)) {
      const extraTags = slug
        .split('/')
        .filter(Boolean)
        .slice(1)
        .map(s => s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))
        .filter(t => t.length > 2 && !rule.tags.some(rt => rt.toLowerCase() === t.toLowerCase()));
      return { category: rule.category, tags: [...rule.tags, ...extraTags] };
    }
  }
  // fallback — derive from first slug segment
  const top = slug.split('/').filter(Boolean)[0] ?? 'general';
  const category = top.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return { category, tags: [category] };
}

// ---------------------------------------------------------------------------
// detectPriority — sitemap priority score (0.0–1.0)
// ---------------------------------------------------------------------------
export function detectPriority(slug: string, category: string): number {
  const depth = slug.split('/').filter(Boolean).length;
  if (depth === 1) return 0.8; // hub pages
  if (['Sports', 'Technology', 'Finance', 'News'].includes(category)) return 0.7;
  if (['Legal', 'Meta', 'Support'].includes(category)) return 0.3;
  return 0.6;
}


// ---------------------------------------------------------------------------
// detectChangeFreq — sitemap changefreq hint
// ---------------------------------------------------------------------------
export function detectChangeFreq(category: string): ChangeFrequency {
  if (['Sports', 'News', 'Technology'].includes(category)) return 'weekly';
  if (['Legal', 'Meta', 'Support', 'Reference'].includes(category)) return 'monthly';
  return 'weekly';
}
