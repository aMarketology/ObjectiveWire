import { NextResponse } from 'next/server';
import { getAllEntries } from '@/lib/registry-service';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const entries = await getAllEntries();
    return NextResponse.json(entries);
  } catch (err) {
    console.error('Failed to load active registry:', err);
    return NextResponse.json([], { status: 500 });
  }
}
