import { useEffect } from "react";

export default function SEO({ title, description }) {
  useEffect(() => {
    let fullTitle;
    if (!title) {
      fullTitle = "Orebridge | Smarter Systems. Stronger Businesses.";
    } else {
      let t = title.replace(/^Corebridge\b/i, "Orebridge").replace(/\|\s*Corebridge$/i, "| Orebridge");
      if (!t.includes("Orebridge")) {
        fullTitle = `${t} | Orebridge`;
      } else {
        fullTitle = t;
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
