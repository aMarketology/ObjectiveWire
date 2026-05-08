import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const r = require('../lib/registry-data.json');

const bad = ['Meta','Support','Legal'];
const articles = r.filter(e => {
  const parts = e.slug.split('/').filter(Boolean);
  return parts.length >= 2 && !e.slug.includes('[') && !bad.includes(e.category);
}).sort((a,b) => new Date(b.publishDate) - new Date(a.publishDate));

const needsThumb = articles.filter(a =>
  !a.imageUrl || a.imageUrl.includes('${') || a.imageUrl.includes('objectwire.com')
);

console.log(`Total articles: ${articles.length}`);
console.log(`Need thumbnails: ${needsThumb.length}`);
console.log(`Have thumbnails: ${articles.length - needsThumb.length}`);
console.log('\n--- Needs thumbnail (newest first) ---');
needsThumb.forEach(a => console.log(a.slug));
