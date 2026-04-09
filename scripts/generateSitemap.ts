import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { staticRoutes } from '../src/lib/seo/routes.js';

const SITE_URL = 'https://clicknex.com.br';
const today = new Date().toISOString().split('T')[0];

const urlEntries = staticRoutes
  .map(
    ({ path, changefreq, priority, lastmod }) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${lastmod ?? today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlEntries}
</urlset>
`;

writeFileSync(resolve(process.cwd(), 'public/sitemap.xml'), xml, 'utf-8');
console.log(`✅ Sitemap gerado com ${staticRoutes.length} URLs → public/sitemap.xml`);
