import React from "react";
import { Link } from "react-router-dom";
import { industriesData } from "../data/initialData";

export default function IndustriesPreviewSection() {
  // 6 Distinct representative sectors
  const targetSlugs = [
    "agriculture",
    "financial-services",
    "healthcare-pharmaceuticals",
    "retail-fmcg",
    "manufacturing-assembly",
    "logistics-transport"
  ];

  const representativeSectors = targetSlugs
    .map((slug) => industriesData.find((i) => i.slug === slug))
    .filter(Boolean);

  return (
    <section className="section" id="industries" style={{ backgroundColor: "var(--white)", borderBottom: "1px solid var(--borders)", padding: "5rem 0" }}>
      <div className="container">
        <div style={{ maxWidth: "780px", margin: "0 auto 3.5rem", textAlign: "center" }}>
          <span className="eyebrow">WHERE WE WORK</span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: "800", color: "var(--primary)", lineHeight: "1.2", marginBottom: "1.25rem" }}>
            Systems Tailored to Commercial Realities
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--muted)", margin: 0 }}>
            Generic software forces you to change how your business operates. We configure, connect, and build systems around your industry's specific compliance, supply chain, and data realities.
          </p>
        </div>

        {/* 6 Representative Sector Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            maxWidth: "1160px",
            margin: "0 auto 3.5rem"
          }}
        >
          {representativeSectors.map((ind) => {
            const Icon = ind.icon;
            return (
              <article
                key={ind.slug}
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--borders)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                  <img
                    src={ind.image}
                    alt={`Commercial operations in ${ind.name}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    loading="lazy"
                    width="380"
                    height="200"
                  />
                </div>

                <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                    {Icon && <Icon size={18} style={{ color: "var(--blue)" }} />}
                    <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", margin: 0 }}>
                      {ind.name}
                    </h3>
                  </div>

                  <p style={{ fontSize: "0.92rem", lineHeight: "1.6", color: "var(--muted)", marginBottom: "1.5rem", flexGrow: 1 }}>
                    {ind.shortDesc}
                  </p>

                  <div>
                    <Link
                      to={`/industries/${ind.slug}`}
                      className="btn-link"
                      style={{ fontSize: "0.9rem", fontWeight: "600", textDecoration: "none", color: "var(--blue)" }}
                    >
                      View industry blueprint
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link
            to="/industries"
            className="btn btn-secondary"
            style={{ fontSize: "0.95rem", padding: "0.85rem 1.75rem" }}
          >
            Explore all industries
          </Link>
        </div>
      </div>
    </section>
  );
}
