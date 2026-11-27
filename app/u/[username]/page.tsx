import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import FollowButton from '@/components/engagement/FollowButton';

export const dynamic = 'force-dynamic';

export default async function UserProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const cleanHandle = decodeURIComponent(username).trim().toLowerCase();

  const supabase = await createClient();

  const { data: profiles } = await supabase
    .from('public_profiles')
    .select('id, auth_user_id, username, display_name, bio, avatar_url, discord_id, discord_username, created_at')
    .or(`username.ilike.${cleanHandle},discord_username.ilike.${cleanHandle}`)
    .limit(1);

  const profile = profiles?.[0];
  if (!profile) {
    notFound();
  }

  const { data: recentComments } = await supabase
    .from('discord_comments')
    .select('id, slug, body, created_at')
    .eq('discord_id', profile.discord_id ?? '__none__')
    .order('created_at', { ascending: false })
    .limit(20);

  const avatar =
    profile.avatar_url ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.display_name || cleanHandle)}&background=5865F2&color=fff&size=128`;

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Image
              src={avatar}
              alt={profile.display_name || cleanHandle}
              width={64}
              height={64}
              className="rounded-full border border-gray-200"
              unoptimized
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">{profile.display_name || cleanHandle}</h1>
              <p className="text-sm text-gray-500">@{profile.username || cleanHandle}</p>
              {profile.discord_username && (
                <span className="inline-block mt-1 text-[11px] font-medium text-[#5865F2] bg-[#5865F2]/10 px-2 py-0.5 rounded-full">
                  Discord: {profile.discord_username}
                </span>
              )}
            </div>
          </div>

          {profile.auth_user_id && <FollowButton targetUserId={profile.auth_user_id} />}
        </div>

        {profile.bio && (
          <p className="mt-4 text-sm text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
            {profile.bio}
          </p>
        )}
      </div>

      <section>
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
          Recent Comments ({recentComments?.length ?? 0})
        </h2>

        {!recentComments || recentComments.length === 0 ? (
          <p className="text-sm text-gray-500 py-6 text-center rounded-xl border border-gray-100 bg-gray-50">
            No comments posted yet.
          </p>
        ) : (
          <div className="space-y-3">
            {recentComments.map((c: { id: string; slug: string; body: string; created_at: string }) => {
              const cleanSlug = c.slug.replace(/^\/+/, '');
              return (
                <div key={c.id} className="rounded-xl border border-gray-200 bg-white p-4">
                  <Link
                    href={`/${cleanSlug}#discord-comments`}
                    className="text-xs font-semibold text-[#5865F2] hover:underline"
                  >
                    /{cleanSlug} →
                  </Link>
                  <p className="text-sm text-gray-800 mt-1.5 leading-relaxed">{c.body}</p>
                  <p className="text-[11px] text-gray-400 mt-2">
                    {new Date(c.created_at).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
