import React from "react";
import { Link } from "react-router-dom";

export default function CapabilitiesPreviewSection() {
  const categories = [
    {
      title: "Software Engineering",
      desc: "Tailored business applications, operational portals, high-throughput databases, and backend APIs engineered around your specific commercial rules and data models."
    },
    {
      title: "Systems Integration",
      desc: "Reliable synchronization pipelines connecting disconnected enterprise systems, point-of-sale terminals, payment gateways, and accounting ledgers into unified information flows."
    },
    {
      title: "Workflow Automation",
      desc: "Event-driven background workers that automate routine approvals, notifications, scheduled reports, and inter-departmental data handoffs to eliminate manual fatigue."
    },
    {
      title: "Applied AI",
      desc: "Pragmatic machine intelligence focused on operational value: optical character recognition for scanned supplier invoices, intelligent inquiry routing, and automated document ingestion."
    }
  ];

  return (
    <section className="section" id="capabilities" style={{ backgroundColor: "var(--bg-surface)", borderBottom: "1px solid var(--borders)", padding: "5rem 0" }}>
      <div className="container">
        <div style={{ maxWidth: "780px", margin: "0 auto 3.5rem", textAlign: "center" }}>
          <span className="eyebrow">WHAT COREBRIDGE DOES</span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: "800", color: "var(--primary)", lineHeight: "1.2", marginBottom: "1.25rem" }}>
            Four Core Engineering Disciplines
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--muted)", margin: 0 }}>
            We focus on software and systems engineering that directly improves business capacity, eliminates manual overhead, and ensures data integrity across your enterprise.
          </p>
        </div>

        {/* 4 Broad Category Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            maxWidth: "1160px",
            margin: "0 auto 3.5rem"
          }}
        >
          {categories.map((cat, idx) => {
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--white)",
                  border: "1px solid var(--borders)",
                  borderRadius: "var(--radius-md)",
                  padding: "2.5rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 2px 8px rgba(10, 25, 41, 0.03)"
                }}
              >
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    color: "var(--blue)",
                    fontVariantNumeric: "tabular-nums",
                    marginBottom: "1.25rem",
                    display: "block"
                  }}
                >
                  0{idx + 1}
                </span>

                <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--primary)", marginBottom: "0.85rem", lineHeight: "1.3" }}>
                  {cat.title}
                </h3>

                <p style={{ fontSize: "0.95rem", lineHeight: "1.65", color: "var(--muted)", margin: 0 }}>
                  {cat.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link
            to="/solutions"
            className="btn btn-secondary"
            style={{ fontSize: "0.95rem", padding: "0.85rem 1.75rem" }}
          >
            Explore all capabilities
          </Link>
        </div>
      </div>
    </section>
  );
}
