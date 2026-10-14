import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { industries, allExamples, services, businessDescription } from './content/businessContent';
export const routes = ['/', '/solutions', '/industries', '/approach', '/about', '/contact', '/case-studies', '/privacy', ...industries.map(i => `/industries/${i.slug}`), ...allExamples.map(e => `/case-studies/${e.slug}`)];
export const serviceAnchors = services.map(s => s.slug);
export function render(url) {
  return renderToString(<StaticRouter location={url}><AppRoutes /></StaticRouter>);
}
export function metadata(url) {
  const industry = industries.find(i => url === `/industries/${i.slug}`);
  const example = allExamples.find(e => url === `/case-studies/${e.slug}`);
  const titles = {
    '/': 'Smarter Systems. Stronger Businesses.',
    '/solutions': 'Business solutions',
    '/industries': 'Industry solutions',
    '/approach': 'Our approach',
    '/about': 'About Corebridge',
    '/contact': 'Contact Corebridge',
    '/case-studies': 'Workflow examples',
    '/privacy': 'Website privacy'
  };
  const label = industry?.name || example?.title || titles[url] || 'Page not found';
  return {
    title: label.includes('Corebridge') ? label : `${label} | Corebridge`,
    description: example?.problem || (industry ? `ERP, connected systems, AI and automation for ${industry.name.toLowerCase()}.` : businessDescription)
  };
}
