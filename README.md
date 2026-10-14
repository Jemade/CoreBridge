# Corebridge

A business-first website for Corebridge: ERP implementation, business systems integration, practical AI and workflow automation. The company’s purpose is to solve business problems.

## Development

Requires Node.js 20.19+ or a current Node.js LTS release.

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm run verify:build
```

Publish `dist/`. The build creates static HTML for all main pages, industry profiles and workflow examples, plus `404.html` and a sitemap. React hydrates the static pages for navigation, industry search and enquiries. Existing Docker/Nginx, Render and Cloudflare Pages static hosting can use this output. Cloudflare serves each prerendered route directly using its native HTML handling. There is no catch-all `_redirects` rule; rewriting every request to `/index.html` causes a redirect loop with Workers static assets.

## Design and content

- Original Corebridge logo, navy/blue palette are retained. Real photography is bundled locally; the approved Corebridge mug image remains on Contact.
- Every page leads with business needs, then ERP, integrations, automation and practical AI.
- Buttons and links have no directional arrow symbols.
- Shared layouts and responsive rules live in `src/design/SiteDesign.jsx` and `src/styles.css`.
- Business-facing services, process steps and illustrative examples live in `src/content/businessContent.js`.
- Existing industry and workflow URLs are preserved. Additional industry profiles use existing repository photographs.
- Workflow examples describe possible approaches, not unverified client implementations or measured outcomes.
- Stock photography is illustrative and is not identified as the actual Corebridge team.

## Enquiry delivery

This static website has no configured mail-delivery backend. The form prepares a draft in the visitor’s email app. The visitor reviews and sends it there. Direct email, phone and WhatsApp links are also available. The website does not claim an enquiry was delivered or save it in localStorage. A future server-based delivery feature must confirm actual delivery before displaying success.

## Verification

`verify:build` checks every prerendered route, one main heading per page, local asset existence, internal links and service anchors, missing-page states, arrow removal, contact copy, responsive breakpoint definitions, reduced-motion support and sitemap coverage. These checks do not replace browser-based visual and interaction QA.

The approved layouts are retained with real, locally served photographs in place of generated scenes. Pinterest references guide the selection, with full-size originals downloaded from Unsplash. Photo source URLs are recorded in `public/photos/sources.json`; existing photo sources are in `scripts/download_unique_images.py`. The Contact mug remains from the approved reference sheet. The company story is not restricted to a single country.

Each visible photo has its own placement across the site. The header includes an accessible Home icon on desktop and mobile. The oversized office photograph on Contact has been removed, while its approved branded mug banner is retained. Industry and workflow detail cards use clean text panels rather than repeated decorative photos. `verify:build` checks the Home icon, Contact removal and photo uniqueness in all prerendered pages.
