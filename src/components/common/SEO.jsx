import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export default function SEO({
  title,
  description
}) {
  const {
    pathname
  } = useLocation();
  useEffect(() => {
    const fullTitle = !title ? 'Corebridge | Smarter Systems. Stronger Businesses.' : title.includes('Corebridge') ? title : `${title} | Corebridge`;
    document.title = fullTitle;
    const fields = [['meta[name="description"]', description], ['meta[property="og:title"]', fullTitle], ['meta[property="og:description"]', description], ['meta[property="og:url"]', `https://corebridge.co.zw${pathname}`]];
    fields.forEach(([selector, value]) => {
      if (value) document.querySelector(selector)?.setAttribute('content', value);
    });
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://corebridge.co.zw${pathname}`;
  }, [title, description, pathname]);
  return null;
}
