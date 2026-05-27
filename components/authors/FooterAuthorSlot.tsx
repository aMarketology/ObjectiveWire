'use client';

/**
 * FooterAuthorSlot
 *
 * Always renders the default Objective Wire brand block with contact and social links.
 */

import Link from 'next/link';

export default function FooterAuthorSlot() {
  return (
    <div>
      <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
        <div className="w-9 h-9 bg-black flex items-center justify-center rounded-sm shadow-sm shrink-0">
          <span className="text-white font-black text-base tracking-tight">o</span>
        </div>
        <span className="font-black text-xl tracking-tight text-gray-900 dark:text-white">Objective Wire TX</span>
      </Link>

      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
        Independent Texas Newsroom
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        Independent Texas news publication. Verified reporting on statewide politics, business, crime, courts, and sports.
      </p>

      {/* Location */}
      <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <span>2921 E 17th St Bldg 3, Austin, TX 78702</span>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-5">
        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.42 2 2 0 0 1 3.55 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z"/>
        </svg>
        <a href="tel:+15754950323" className="hover:text-black dark:hover:text-white transition-colors">(575) 495-0323</a>
      </div>

      {/* Social links */}
      <div className="flex items-center gap-3">
        <a href="https://discord.gg/wBsgkU4uAf" target="_blank" rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#5865F2] hover:text-white text-gray-500 flex items-center justify-center transition-all duration-150"
          title="Discord">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
        </a>
        <a href="https://twitter.com/object_wire" target="_blank" rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-black hover:text-white text-gray-500 flex items-center justify-center transition-all duration-150"
          title="X / Twitter">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="https://www.tiktok.com/@object_wire" target="_blank" rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-black hover:text-white text-gray-500 flex items-center justify-center transition-all duration-150"
          title="TikTok">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
        </a>
      </div>
    </div>
  );
}
