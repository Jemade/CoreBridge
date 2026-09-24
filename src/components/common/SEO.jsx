import { useEffect } from "react";

export default function SEO({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Corebridge` : "Corebridge | Smarter Systems. Stronger Businesses.";
    document.title = fullTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) {
      metaDesc.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
