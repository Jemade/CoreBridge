import React from "react";
import { Link } from "react-router-dom";

export default function BuildIntegrateImproveSection() {
  const pillars = [
    {
      action: "BUILD",
      title: "When something genuinely needs to be created",
      desc: "Commercial off-the-shelf tools often fail to accommodate unique operational logic. We engineer custom applications, client portals, and secure backend APIs designed around your exact operating rules."
    },
    {
      action: "INTEGRATE",
      title: "When existing systems need to communicate",
      desc: "Replacing software that staff already understand is expensive and disruptive. We engineer reliable middleware, webhook pipelines, and API connectors that sync data automatically across your current tools."
    },
    {
      action: "IMPROVE",
      title: "When the technology works but the workflow does not",
      desc: "Often the existing platform is capable, but poorly configured or underutilized. We audit bottlenecks, refine system workflows, and train internal teams to unlock the full value of software you already own."
    }
  ];

  return (
    <section className="section" id="approach-preview" style={{ backgroundColor: "var(--white)", borderBottom: "1px solid var(--borders)", padding: "5rem 0" }}>
      <div className="container">
        <div style={{ maxWidth: "780px", margin: "0 auto 3.5rem", textAlign: "center" }}>
          <span className="eyebrow">THE COREBRIDGE PHILOSOPHY</span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: "800", color: "var(--primary)", lineHeight: "1.2", marginBottom: "1.25rem" }}>
            Start with the operational problem, not the software.
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--muted)", margin: 0 }}>
            We do not sell pre-packaged templates or force unnecessary system overhauls. Every technical engagement begins with a clear architectural evaluation: do you need to build, integrate, or improve?
          </p>
        </div>

        {/* 3 Concise Columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            maxWidth: "1100px",
            margin: "0 auto 3.5rem"
          }}
        >
          {pillars.map((item, idx) => {
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--borders)",
                  borderRadius: "var(--radius-md)",
                  padding: "2.5rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start"
                }}
              >
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: "700",
                    color: "var(--blue)",
                    letterSpacing: "0.08em",
                    fontVariantNumeric: "tabular-nums",
                    marginBottom: "1.25rem",
                    display: "inline-block"
                  }}
                >
                  0{idx + 1} / {item.action}
                </span>

                <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", lineHeight: "1.35", marginBottom: "1rem" }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: "0.95rem", lineHeight: "1.65", color: "var(--muted)", margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link
            to="/approach"
            className="btn btn-secondary"
            style={{ fontSize: "0.95rem", padding: "0.85rem 1.75rem" }}
          >
            See how we work
          </Link>
        </div>
      </div>
    </section>
  );
}
