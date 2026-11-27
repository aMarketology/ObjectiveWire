'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createAuthBrowserClient } from '@/lib/supabase/client';

export default function NavUserButton() {
  const [label, setLabel] = useState<string | null>(null);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const supabase = createAuthBrowserClient();

    supabase.auth.getUser().then(({ data }) => {
      const user = data?.user;
      if (user) {
        // Prefer display name from metadata, fall back to email prefix
        const name =
          user.user_metadata?.full_name ||
          user.user_metadata?.name ||
          user.email?.split('@')[0] ||
          'Account';
        setLabel(name);
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      const user = session?.user;
      if (user) {
        const name =
          user.user_metadata?.full_name ||
          user.user_metadata?.name ||
          user.email?.split('@')[0] ||
          'Account';
        setLabel(name);
      } else {
        setLabel(null);
      }
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!label) {
      setUnreadCount(0);
      return;
    }
    fetch('/api/notifications', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (d && typeof d.unreadCount === 'number') setUnreadCount(d.unreadCount);
      })
      .catch(() => {});
  }, [label]);

  const href = label ? '/account' : '/login';
  const text = label ?? 'Sign In';

  return (
    <Link
      href={href}
      className="px-3 md:px-4 py-2.5 text-[10px] font-black tracking-[.12em] uppercase whitespace-nowrap hover:bg-black hover:text-white transition-colors shrink-0 max-w-[140px] inline-flex items-center gap-1.5"
      title={label ?? 'Sign In'}
    >
      <span className="truncate">{text}</span>
      {unreadCount > 0 && (
        <span className="inline-flex items-center justify-center min-w-[16px] h-4 px-1 rounded-full bg-[#5865F2] text-white text-[9px] font-bold">
          {unreadCount > 9 ? '9+' : unreadCount}
        </span>
      )}
    </Link>
  );
}
