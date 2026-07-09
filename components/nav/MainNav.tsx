'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import NavUserButton from './NavUserButton';
import MobileNav from './MobileNav';

type NavItem = { label: string; href: string };
type Hub = { label: string; href: string; items: NavItem[]; cols?: 1 | 2 };

const HUBS: Hub[] = [
  {
    label: 'Sports',
    href: '/world-cup',
    cols: 2,
    items: [
      { label: 'All Sports Coverage', href: '/world-cup' },
      { label: 'World Cup 2026', href: '/world-cup' },
      { label: 'MLB', href: '/mlb' },
      { label: 'MLS', href: '/mls' },
      { label: 'Premier League', href: '/premier-league' },
      { label: 'Golf', href: '/golf' },
      { label: 'Soccer', href: '/soccer' },
    ],
  },
  {
    label: 'Creators',
    href: '/creator',
    items: [
      { label: 'All Creators', href: '/creator' },
      { label: 'YouTube', href: '/youtube' },
      { label: 'Influencer Profiles', href: '/creator' },
    ],
  },
  {
    label: 'Cars',
    href: '/cars',
    items: [
      { label: 'All Cars', href: '/cars' },
      { label: 'Supercars', href: '/cars' },
      { label: 'Electric Vehicles', href: '/cars' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    items: [
      { label: 'About Us', href: '/about' },
      { label: 'Authors', href: '/authors' },
      { label: 'Editorial Standards', href: '/editorial-standards' },
      { label: 'Corrections', href: '/corrections' },
    ],
  },
];

const LINK_CLS =
  'block px-3 lg:px-4 py-2.5 text-[10px] font-black tracking-[.12em] uppercase whitespace-nowrap text-gray-200 hover:bg-[#d97706] hover:text-white transition-colors';

export default function MainNav() {
  const [openHub, setOpenHub] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenHub(label);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenHub(null), 120);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <div className="border-t border-white/10 bg-[#141414]">
      <div className="container mx-auto px-4">
        <nav className="flex items-center">

          {/* Home icon */}
          <Link
            href="/"
            aria-label="Home"
            className={`${LINK_CLS} border-r border-white/10 shrink-0 flex items-center`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
              <path d="M10.707 2.293a1 1 0 0 0-1.414 0l-7 7A1 1 0 0 0 3 11h1v6a1 1 0 0 0 1 1h4v-4h2v4h4a1 1 0 0 0 1-1v-6h1a1 1 0 0 0 .707-1.707l-7-7Z" />
            </svg>
          </Link>

          {/* Hub nav items — hidden on mobile, shown md+ */}
          <div className="hidden md:flex items-center flex-1">
            {HUBS.map((hub) => {
              const isOpen = openHub === hub.label;
              return (
                <div
                  key={hub.label}
                  className="relative shrink-0"
                  onMouseEnter={() => openMenu(hub.label)}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    href={hub.href}
                    className={`${LINK_CLS} border-r border-white/10 flex items-center gap-1 ${isOpen ? 'bg-[#d97706] text-white' : ''}`}
                  >
                    {hub.label}
                    <svg
                      className={`w-2.5 h-2.5 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>

                  {isOpen && (
                    <div
                      className="absolute top-full left-0 z-[200] bg-[#1c1c1e] rounded-b-xl shadow-2xl mt-0 overflow-hidden"
                      style={{ borderTopColor: 'var(--brand-accent)', borderTopWidth: '3px', borderTopStyle: 'solid' }}
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <div className={`p-3 grid gap-2 ${hub.cols === 2 ? 'grid-cols-2 w-[480px]' : 'grid-cols-1 w-[240px]'}`}>
                        {hub.items.map((item, idx) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpenHub(null)}
                            className={`flex items-center gap-3 py-2.5 px-3 bg-[#2d2d2d] rounded-md shadow-sm border border-white/10 hover:border-[#d97706] hover:shadow-md transition-all duration-300 group transform hover:-translate-y-0.5 ${idx === 0 && hub.cols === 2 ? 'col-span-2 bg-[#d97706] hover:bg-[#f59e0b] text-white border-none' : ''}`}
                          >
                            <span
                              className={`text-[10px] font-black transition-colors leading-none tracking-[.1em] uppercase ${idx === 0 && hub.cols === 2 ? 'text-white' : 'text-gray-200 group-hover:text-[#d97706]'}`}
                            >
                              {item.label}
                            </span>
                            <span
                              className={`ml-auto transition-colors ${idx === 0 && hub.cols === 2 ? 'text-white/70' : 'text-gray-500 group-hover:text-[#d97706]'}`}
                            >
                              →
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right controls */}
          <div className="flex items-center ml-auto shrink-0">
            <Link
              href="/about"
              className={`${LINK_CLS} border-l border-r border-white/10 hidden sm:block`}
            >
              About
            </Link>
            <div className="hidden sm:block border-r border-white/10">
              <NavUserButton />
            </div>
            {/* Mobile hamburger */}
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>

        </nav>
      </div>
    </div>
  );
}
