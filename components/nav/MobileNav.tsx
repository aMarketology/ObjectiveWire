'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

type NavItem = { label: string; href: string };
type NavHub = { label: string; href: string; items: NavItem[] };

const NAV_HUBS: NavHub[] = [
  {
    label: 'Services',
    href: '/service',
    items: [
      { label: 'All Services', href: '/service' },
      { label: 'Surveillance', href: '/service/surveillance' },
      { label: 'Missing Persons', href: '/service/missing-persons' },
      { label: 'Background Checks', href: '/service/background-checks' },
      { label: 'Infidelity Investigations', href: '/service/infidelity-investigations' },
      { label: 'Skip Tracing', href: '/service/skip-tracing' },
      { label: 'Child Custody', href: '/service/child-custody-investigations' },
      { label: 'Digital Forensics', href: '/service/digital-forensics' },
      { label: 'Corporate Investigations', href: '/service/corporate-investigations' },
      { label: 'Tip the Newsroom', href: '/service/tip-the-newsroom' },
    ],
  },
  {
    label: 'Texas Blog', href: '/blog',
    items: [
      { label: 'All Articles', href: '/blog' },
      { label: 'Austin', href: '/local/austin' },
      { label: 'Houston', href: '/local/houston' },
      { label: 'Greater Texas', href: '/local/greater-texas' },
    ],
  },
  {
    label: 'Directory', href: '/directory',
    items: [
      { label: 'All Entities', href: '/directory' },
      { label: 'Austin', href: '/directory/austin' },
      { label: 'Houston', href: '/directory/houston' },
      { label: 'Greater Texas', href: '/directory/greater-texas' },
    ],
  },
  {
    label: 'About', href: '/about',
    items: [
      { label: 'About Us', href: '/about' },
      { label: 'Authors', href: '/authors' },
      { label: 'Editorial Standards', href: '/editorial-standards' },
      { label: 'Corrections', href: '/corrections' },
    ],
  },

];

const FOOTER_LINKS = [
  { href: '/editorial-standards', label: 'Editorial Standards' },
  { href: '/about', label: 'About' },
  { href: '/get-help/contact', label: 'Contact' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openHub, setOpenHub] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus search input when menu opens
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[60] flex items-center justify-center w-10 h-10 -mr-2"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <div className="flex flex-col justify-center items-center w-6 h-6">
          <span
            className={`block h-[2px] w-6 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? 'rotate-45 translate-y-[5px]' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-black transition-all duration-300 ease-in-out mt-[3px] ${
              isOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-black transition-all duration-300 ease-in-out mt-[3px] ${
              isOpen ? '-rotate-45 -translate-y-[5px]' : ''
            }`}
          />
        </div>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[49] backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Dropdown Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 right-0 z-[50] bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ maxHeight: '100dvh', overflowY: 'auto' }}
      >
        {/* Menu Header with Logo */}
        <div className="flex items-center justify-between px-4 h-20 border-b border-gray-100">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
            <img
              src="/objectwire-logo.png"
              alt="OBJECTWIRE"
              style={{ height: '44px', width: 'auto' }}
            />
          </Link>
          {/* Close X button */}
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-10 h-10"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-4 pt-4 pb-3">
          <form onSubmit={handleSearch} className="relative">
            <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
              <svg
                className="w-5 h-5 text-gray-400 ml-3 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ObjectWire..."
                className="flex-1 bg-transparent px-3 py-3 text-sm text-gray-900 placeholder-gray-500 outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="px-3 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              <button
                type="submit"
                className="px-4 py-3 bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mx-4" />

        {/* Navigation Links — accordion by hub */}
        <nav className="px-4 py-3">
          {NAV_HUBS.map((hub) => {
            const isHubActive = pathname.startsWith(hub.href);
            const isHubOpen = openHub === hub.label;
            return (
              <div key={hub.label} className="border-b border-gray-100 last:border-0">
                {/* Hub row */}
                <div className="flex items-center justify-between">
                  <Link
                    href={hub.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex-1 py-3.5 text-[15px] transition-colors ${isHubActive ? 'font-bold text-black' : 'text-gray-700 hover:text-black'}`}
                  >
                    {hub.label}
                  </Link>
                  <button
                    onClick={() => setOpenHub(isHubOpen ? null : hub.label)}
                    className="p-2 text-gray-400 hover:text-black"
                    aria-label={isHubOpen ? `Collapse ${hub.label}` : `Expand ${hub.label}`}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isHubOpen ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                {/* Sub-items */}
                {isHubOpen && (
                  <div className="pb-2 pl-3">
                    {hub.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-[13px] text-gray-500 hover:text-black transition-colors border-b border-gray-50 last:border-0"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          {/* Footer links */}
          <div className="mt-4 pt-4 border-t border-gray-200 space-y-0">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 border-b border-gray-100 last:border-0 text-[13px] text-gray-500 hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Bottom section */}
        <div className="px-4 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-[10px] tracking-[.2em] text-gray-400 uppercase text-center">
            Independent • Verified • Source-Cited
          </p>
        </div>
      </div>
    </div>
  );
}
