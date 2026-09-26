import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Layers } from "lucide-react";
import { industriesData } from "../data/initialData";

export default function IndustriesPreviewSection() {
  // Select 4 core enterprise sectors with distinct operational profiles
  const featured = [
    industriesData.find((i) => i.slug === "retail") || industriesData[0],
    industriesData.find((i) => i.slug === "wholesale") || industriesData[1],
    industriesData.find((i) => i.slug === "agriculture") || industriesData[2],
    industriesData.find((i) => i.slug === "manufacturing") || industriesData[3]
  ];

  return (
    <section className="section" id="industries" style={{ backgroundColor: "var(--white)", borderBottom: "1px solid var(--borders)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "1.5rem", marginBottom: "3.5rem" }}>
          <div style={{ maxWidth: "760px" }}>
            <span className="eyebrow">DOMAINS &amp; SECTORS</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: "800", color: "var(--primary)", lineHeight: "1.2", marginBottom: "1rem" }}>
              Built for the operating environments of Zimbabwean industry
            </h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.65", color: "var(--muted)", margin: 0 }}>
              Generic software fails when it ignores sector-specific workflows. Explore how we engineer systems for wholesale distribution, retail chains, commercial farming, and manufacturing.
            </p>
          </div>
          <div>
            <Link to="/industries" className="btn btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              All 17 Commercial Sectors <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Editorial Industry Blocks (Alternating Split Layouts) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {featured.map((ind, idx) => {
            const isReversed = idx % 2 === 1;
            const Icon = ind.icon;

            return (
              <div
                key={ind.slug}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                  gap: "3rem",
                  alignItems: "center",
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--borders)",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden"
                }}
              >
                {/* Photo Side */}
                <div
                  style={{
                    position: "relative",
                    minHeight: "320px",
                    height: "100%",
                    order: isReversed ? 2 : 1
                  }}
                >
                  <img
                    src={ind.image}
                    alt={`Real commercial operations in ${ind.name}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    loading="lazy"
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "0.85rem 1.25rem",
                      background: "linear-gradient(transparent, rgba(10, 25, 41, 0.9))",
                      color: "var(--white)",
                      fontSize: "0.82rem"
                    }}
                  >
                    Operational context: {ind.name}
                  </div>
                </div>

                {/* Content Side */}
                <div style={{ padding: "2.5rem 2rem", order: isReversed ? 1 : 2 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "var(--radius-sm)", backgroundColor: "var(--soft-blue)", color: "var(--blue)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {Icon && <Icon size={18} />}
                    </div>
                    <span style={{ fontSize: "0.78rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--blue)" }}>
                      SECTOR BLUEPRINT
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.65rem", fontWeight: "800", color: "var(--primary)", marginBottom: "0.75rem" }}>
                    {ind.name}
                  </h3>

                  <p style={{ fontSize: "0.96rem", lineHeight: "1.65", color: "var(--text-dark)", marginBottom: "1.25rem" }}>
                    {ind.overview || ind.shortDesc}
                  </p>

                  {/* Systems Involved */}
                  {ind.commonSystems && (
                    <div style={{ marginBottom: "1.25rem" }}>
                      <span style={{ fontSize: "0.76rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted)", display: "block", marginBottom: "0.45rem" }}>
                        Common Systems in the Stack
                      </span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                        {ind.commonSystems.slice(0, 3).map((sys, sIdx) => (
                          <span key={sIdx} className="spec-tag" style={{ fontSize: "0.76rem" }}>
                            {sys}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Corebridge Opportunities */}
                  {ind.integrationOpportunities && (
                    <div style={{ marginBottom: "1.75rem", borderTop: "1px solid var(--borders)", paddingTop: "1rem" }}>
                      <span style={{ fontSize: "0.76rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--primary)", display: "block", marginBottom: "0.45rem" }}>
                        Where Corebridge Intervenes
                      </span>
                      <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: "1.5", margin: 0 }}>
                        &bull; {ind.integrationOpportunities[0]}
                      </p>
                    </div>
                  )}

                  <div>
                    <Link
                      to={`/industries/${ind.slug}`}
                      className="btn-link"
                      style={{ fontSize: "0.92rem", fontWeight: "700" }}
                    >
                      View detailed systems &amp; workflows for {ind.name} &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Directory Recovery Footer */}
        <div style={{ marginTop: "3.5rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.95rem", color: "var(--muted)", marginBottom: "1rem" }}>
            Operating in Mining, Healthcare, Transport, Energy, Construction, or Financial Services?
          </p>
          <Link to="/industries" className="btn btn-secondary">
            Browse All 17 Commercial Industry Blueprints <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
