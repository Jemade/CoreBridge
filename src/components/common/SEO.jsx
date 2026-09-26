import { useEffect } from "react";

export default function SEO({ title, description }) {
  useEffect(() => {
    let fullTitle;
    if (!title) {
      fullTitle = "Corebridge | Smarter Systems. Stronger Businesses.";
    } else {
      if (!title.includes("Corebridge")) {
        fullTitle = `${title} | Corebridge`;
      } else {
        fullTitle = title;
      }
    }
    document.title = fullTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) {
      metaDesc.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
