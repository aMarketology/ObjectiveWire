import { getAllEntries } from '@/lib/registry-service';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

/**
 * Branch-local registry API.
 * Serves the same data as the filesystem registry (lib/registry-loader.ts)
 * so client components can fetch it instead of hitting the shared Supabase
 * content_registry table.
 *
 * Each branch (main / org) serves its own filesystem content.
 */
export async function GET() {
  const entries = await getAllEntries();
  return NextResponse.json(entries);
}