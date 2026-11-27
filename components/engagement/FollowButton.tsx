'use client';

import { useState, useEffect } from 'react';

interface FollowButtonProps {
  targetUserId: string;
  initialFollowersCount?: number;
}

export default function FollowButton({ targetUserId, initialFollowersCount = 0 }: FollowButtonProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(initialFollowersCount);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    fetch(`/api/follows?targetUserId=${encodeURIComponent(targetUserId)}`, { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!active || !data) return;
        setIsFollowing(Boolean(data.isFollowing));
        setFollowersCount(data.followersCount ?? 0);
      })
      .catch(() => {})
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [targetUserId]);

  async function toggleFollow() {
    if (busy) return;
    setBusy(true);
    try {
      const res = await fetch(
        isFollowing
          ? `/api/follows?targetUserId=${encodeURIComponent(targetUserId)}`
          : '/api/follows',
        {
          method: isFollowing ? 'DELETE' : 'POST',
          headers: isFollowing ? undefined : { 'Content-Type': 'application/json' },
          body: isFollowing ? undefined : JSON.stringify({ targetUserId }),
        },
      );
      if (res.status === 401) {
        window.location.href = `/login?redirect=${encodeURIComponent(window.location.pathname)}`;
        return;
      }
      if (res.ok) {
        setIsFollowing((prev) => !prev);
        setFollowersCount((c) => (isFollowing ? Math.max(0, c - 1) : c + 1));
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={toggleFollow}
        disabled={loading || busy}
        className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors disabled:opacity-50 ${
          isFollowing
            ? 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300'
            : 'bg-[#5865F2] hover:bg-[#4752C4] text-white'
        }`}
      >
        {busy ? 'Updating…' : isFollowing ? 'Tracking' : 'Track'}
      </button>
      <span className="text-xs text-gray-500">
        <strong className="text-gray-900">{followersCount}</strong> tracking
      </span>
    </div>
  );
}
