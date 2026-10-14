import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { routes, serviceAnchors, render } from '../dist-ssr/entry-server.js';
const destinations = new Set(routes);
let imageChecks = 0;
for (const route of routes) {
  const html = await readFile(path.join('dist', route, 'index.html'), 'utf8');
  assert.equal((html.match(/<h1(?: |>)/g) || []).length, 1, `${route}: one main heading`);
  assert.ok(html.includes('id="main-content"'), `${route}: main landmark`);
  assert.ok(html.includes('aria-label="Corebridge"'), `${route}: correct accessible wordmark`);
  assert.ok(!/→|←|↗|&rarr;|lucide-arrow|lucide-chevron/.test(html), `${route}: no directional arrow symbols`);
  assert.ok(!html.includes('Client Implementation'), `${route}: no unverified client claims`);
  assert.ok(!/Message Received|senior engineer will|Guarantee/.test(html), `${route}: no misleading contact promises`);
  for (const [, href] of html.matchAll(/href="(\/[^"]*)"/g)) {
    if (href.startsWith('/assets/') || /\.(png|svg|jpg|ico)$/.test(href)) { await access(path.join('dist', href)); continue; }
    const [destination, hash] = href.split('#');
    assert.ok(destinations.has(destination), `${route}: broken internal link ${href}`);
    if (destination === '/solutions' && hash) assert.ok(serviceAnchors.includes(hash) || ['payment-integration', 'data-reporting'].includes(hash), `${route}: broken solution anchor`);
  }
  for (const [, src] of html.matchAll(/src="(\/(?:assets|photos)\/[^"]+)"/g)) { await access(path.join('dist', src)); imageChecks++; }
}
for (const url of ['/unavailable', '/industries/not-real', '/case-studies/not-real']) assert.ok(render(url).includes('404'), `${url}: missing-page state`);
const home = await readFile('dist/index.html', 'utf8');
assert.ok(home.includes('ERP') && home.includes('automation') && home.includes('AI'), 'Home shows the business positioning');
const contact = await readFile('dist/contact/index.html', 'utf8');
for (const name of ['name','company','email','message']) assert.ok(contact.includes(`name="${name}"`), `Contact field ${name}`);
assert.ok(contact.includes('Send enquiry') && contact.includes('Opens an email draft for you to review and send.'), 'Contact states actual delivery behavior');
const about = await readFile('dist/about/index.html','utf8');
assert.ok(about.includes('Corebridge was founded to help businesses'), 'Company purpose is global');
assert.ok(!/Zimbabwean|Zimbabwe|Harare/.test(about), 'About page has no geographic restriction');
for (const page of ['solutions','industries','approach','about','contact','case-studies']) {
 const content = await readFile(`dist/${page}/index.html`,'utf8');
 assert.ok(/<img[^>]+src="\/(?:assets|photos)\//.test(content), `${page}: real photographs are present`);
 if (page !== 'contact') assert.ok(!content.includes('/reference-images/'), `${page}: no generated photo sheets`);
}
const styles = await readFile('src/styles.css', 'utf8');
for (const breakpoint of ['1080px','820px','560px']) assert.ok(styles.includes(`max-width:${breakpoint}`), `Responsive layout ${breakpoint}`);
assert.ok(styles.includes('prefers-reduced-motion'), 'Reduced motion is supported');
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
assert.equal((sitemap.match(/<url>/g) || []).length, routes.length, 'Sitemap includes every valid page');
console.log(`Verified ${routes.length} prerendered pages, ${imageChecks} asset references, internal links, solution anchors, missing routes and contact copy. Responsive CSS checks passed; browser visual QA has not been run.`);

const { reference } = await import('../src/content/referenceImages.js');
let regionCount = 0;
async function checkRegions(value) {
 if (Array.isArray(value)) { for (const item of value) await checkRegions(item); return; }
 if (!value || typeof value !== 'object') return;
 if (value.rect) {
  const [x,y,width,height] = value.rect; const [sheetWidth,sheetHeight] = value.dimensions;
  assert.ok(x >= 0 && y >= 0 && width > 0 && height > 0 && x + width <= sheetWidth && y + height <= sheetHeight, 'Photo region stays inside its source sheet');
  await access(path.join('dist',value.sheet)); regionCount++;
 } else for (const item of Object.values(value)) await checkRegions(item);
}
await checkRegions(reference);
assert.ok(home.includes('mask-image:') && home.includes('var(--blue'), 'Logo uses the site palette through its original shape');
assert.ok(home.includes('aspect-ratio:'), 'Photo regions have explicit layout dimensions');
console.log(`Verified ${regionCount} image regions and palette-matched logo markup.`);

assert.equal(regionCount, 1, 'Only the approved Contact mug uses a reference region');
assert.ok(contact.includes('/reference-images/about-contact-workflows.png'), 'Contact retains the Corebridge mug');

const photoOwners = new Map();
for (const route of routes) {
 const html = await readFile(path.join('dist', route, 'index.html'), 'utf8');
 assert.ok(html.includes('aria-label="Home"') && html.includes('lucide-house'), `${route}: accessible Home icon`);
 const photos = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map(match => match[1]).filter(src => !src.includes('corebridge-logo'));
 if (route === '/') photos.push(...[...html.matchAll(/url\((\/assets\/[^)]+)\)/g)].map(match => match[1]));
 for (const src of photos.filter(src => !src.includes('corebridge-logo'))) {
  assert.ok(!photoOwners.has(src), `${route}: photo already used on ${photoOwners.get(src)}: ${src}`);
  photoOwners.set(src,route);
 }
}
assert.ok(!contact.includes('contact-desk-photo'), 'Contact office image block is removed');
console.log(`Verified ${photoOwners.size} distinct photo placements without reuse across the site.`);
