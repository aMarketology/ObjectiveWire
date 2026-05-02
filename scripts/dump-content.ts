/**
 * dump-content.ts
 *
 * One-time script: exports all rows from the three content tables to local
 * JSON files so the site can render without any Supabase reads.
 *
 * Output:
 *   data/creator-articles/{slug}.json
 *   data/article-pages/{slug}.json
 *   data/wiki-articles/{slug}.json
 *
 * Run:
 *   npx ts-node --esm scripts/dump-content.ts
 *   — or —
 *   npm run dump-content
 */

import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const url  = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key  = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local');
  process.exit(1);
}

const supabase = createClient(url, key);

async function dumpTable(table: string, dir: string) {
  console.log(`\nDumping ${table} → ${dir}/`);
  fs.mkdirSync(path.resolve(process.cwd(), dir), { recursive: true });

  let allRows: any[] = [];
  let from = 0;
  const pageSize = 1000;

  while (true) {
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .range(from, from + pageSize - 1);

    if (error) { console.error(`  Error fetching ${table}:`, error.message); break; }
    if (!data || data.length === 0) break;

    allRows.push(...data);
    if (data.length < pageSize) break;
    from += pageSize;
  }

  console.log(`  Fetched ${allRows.length} rows`);

  for (const row of allRows) {
    const slug: string = row.slug ?? row.id?.toString() ?? 'unknown';
    const filename = slug.replace(/\//g, '__') + '.json';
    const filePath = path.resolve(process.cwd(), dir, filename);
    fs.writeFileSync(filePath, JSON.stringify(row, null, 2), 'utf-8');
  }

  console.log(`  Written ${allRows.length} files to ${dir}/`);
  return allRows.length;
}

(async () => {
  let total = 0;
  total += await dumpTable('creator_articles', 'data/creator-articles');
  total += await dumpTable('article_pages',    'data/article-pages');
  total += await dumpTable('wiki_articles',    'data/wiki-articles');

  console.log(`\nDone — ${total} total rows exported.`);
  console.log('Commit the data/ directory then deploy — no Supabase reads needed for content.');
})();
