import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Objective Wire',
    short_name: 'oWire',
    description: 'World Cup 2026, Premier League, MLS, MLB, supercars, creators, and culture. Verified sports and culture news.',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf9f6',
    theme_color: '#ffffff',
    orientation: 'portrait-primary',
    categories: ['news'],
    icons: [
      {
        src: '/Favicon (1).png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/Favicon (1).png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    shortcuts: [
      {
        name: 'Latest News',
        short_name: 'News',
        description: 'Read the latest breaking news',
        url: '/news',
        icons: [{ src: '/Favicon (1).png', sizes: '96x96' }],
      },
    ],
  };
}
