import React from "react";
import { Link } from "react-router-dom";
import { industriesData } from "../data/initialData";

export default function IndustriesPreviewSection() {
  const preferredSlugs = [
    "agriculture",
    "financial-services-microfinance",
    "retail",
    "manufacturing",
    "logistics-transport",
    "mining"
  ];

  const selectedIndustries = preferredSlugs
    .map((slug) => industriesData.find((industry) => industry.slug === slug))
    .filter(Boolean);

  const industriesToShow = selectedIndustries.length === 6 ? selectedIndustries : industriesData.slice(0, 6);

  return (
    <section className="section" id="industries" style={{ backgroundColor: "var(--white)", borderBottom: "1px solid var(--borders)", padding: "6rem 0" }}>
      <div className="container">
        <div style={{ maxWidth: "780px", marginBottom: "3.5rem" }}>
          <span className="eyebrow">WHERE WE WORK</span>
          <h2 style={{ fontSize: "clamp(2.1rem, 3.8vw, 3rem)", fontWeight: "800", color: "var(--primary)", lineHeight: "1.18", marginBottom: "1.25rem" }}>
            Technology shaped around the business environment.
          </h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--muted)", margin: 0 }}>
            Different sectors have different workflows, compliance requirements and operating constraints. We adapt the technology to those realities rather than forcing every business into the same template.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", maxWidth: "1160px", marginBottom: "3.25rem" }}>
          {industriesToShow.map((ind) => (
            <article key={ind.slug} style={{ position: "relative", minHeight: "300px", overflow: "hidden", backgroundColor: "#0A1929" }}>
              <img
                src={ind.image}
                alt={`${ind.name} operations`}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                loading="lazy"
                width="560"
                height="320"
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,25,41,0.9) 0%, rgba(10,25,41,0.18) 70%)" }} />
              <div style={{ position: "absolute", left: "1.5rem", right: "1.5rem", bottom: "1.4rem", color: "#FFFFFF" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "750", color: "#FFFFFF", marginBottom: "0.45rem" }}>{ind.name}</h3>
                <Link to={`/industries/${ind.slug}`} style={{ fontSize: "0.9rem", fontWeight: "650", textDecoration: "none", color: "#DBEAFE" }}>
                  Explore this industry
                </Link>
              </div>
            </article>
          ))}
        </div>

        <Link to="/industries" className="btn btn-secondary" style={{ fontSize: "0.95rem", padding: "0.85rem 1.75rem" }}>
          Explore all industries
        </Link>
      </div>
    </section>
  );
}
