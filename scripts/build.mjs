import { build } from 'vite';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
await build();
await build({ build: { ssr: 'src/entry-server.jsx', outDir: 'dist-ssr' } });
const { routes, render, metadata } = await import('../dist-ssr/entry-server.js');
const template = await readFile('dist/index.html', 'utf8');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
for (const route of [...routes, '/404']) {
  const { title, description } = metadata(route);
  const canonical = `https://corebridge.co.zw${route === '/' ? '/' : route}`;
  const html = template.replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`)
    .replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${escape(description)}" />`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${escape(title)}" />`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${escape(description)}" />`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${canonical}" />`)
    .replace('</head>', `<link rel="canonical" href="${canonical}" />${route === '/404' ? '<meta name="robots" content="noindex" />' : ''}</head>`);
  const destination = route === '/404' ? 'dist/404.html' : path.join('dist', route, 'index.html');
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, html);
}
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(route => `  <url><loc>https://corebridge.co.zw${route}</loc></url>`).join('\n')}\n</urlset>\n`);
console.log(`Prerendered ${routes.length} pages and a 404 page.`);
