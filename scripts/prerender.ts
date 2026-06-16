/**
 * Prerender (SSG) do clicknex.com.br
 *
 * Ordem (orquestrada pelo `npm run build`):
 *   1. vite build                                  → dist/ (bundle client + index.html template)
 *   2. vite build --ssr src/entry-server.tsx       → dist/server/entry-server.js
 *   3. tsx scripts/prerender.ts (este)             → dist/<rota>/index.html + 404.html
 *
 * Para cada rota em src/lib/seo/routes.ts, renderiza a árvore React para HTML,
 * injeta o <head> gerado pelo react-helmet-async e grava o arquivo estático.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { staticRoutes } from '../src/lib/seo/routes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const SSR_ENTRY = join(DIST, 'server', 'entry-server.js');

interface RenderFn {
  (url: string): { html: string; head: string };
}

function pageHtml(template: string, html: string, head: string): string {
  return template
    .replace('<!--app-head-->', head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

async function main() {
  const template = readFileSync(join(DIST, 'index.html'), 'utf-8');
  if (!template.includes('<!--app-head-->')) {
    throw new Error('dist/index.html sem placeholder <!--app-head-->');
  }

  const { render } = (await import(pathToFileURL(SSR_ENTRY).href)) as { render: RenderFn };

  const paths = staticRoutes.map((r) => r.path);
  console.log(`→ Pré-renderizando ${paths.length} rotas...`);

  let ok = 0;
  for (const url of paths) {
    try {
      const { html, head } = render(url);
      const outDir = url === '/' ? DIST : join(DIST, url);
      mkdirSync(outDir, { recursive: true });
      writeFileSync(join(outDir, 'index.html'), pageHtml(template, html, head), 'utf-8');
      ok++;
    } catch (err) {
      console.warn(`⚠️  prerender falhou em ${url}: ${(err as Error).message}`);
    }
  }

  // Página 404 (o NotFound carrega noindex via <Seo>)
  try {
    const { html, head } = render('/__rota_inexistente_404__');
    writeFileSync(join(DIST, '404.html'), pageHtml(template, html, head), 'utf-8');
  } catch (err) {
    console.warn(`⚠️  prerender do 404 falhou: ${(err as Error).message}`);
  }

  console.log(`✓ ${ok}/${paths.length} rotas pré-renderizadas + 404.html`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
