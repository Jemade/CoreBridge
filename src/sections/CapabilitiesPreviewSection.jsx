import React from "react";
import { Link } from "react-router-dom";

export default function CapabilitiesPreviewSection() {
  const capabilities = [
    {
      action: "BUILD",
      title: "When something does not exist",
      desc: "Custom web applications, operational portals, high-throughput databases, and backend APIs engineered around your specific business logic."
    },
    {
      action: "CONNECT",
      title: "When systems need to communicate",
      desc: "Middleware connectors, webhook pipelines, and robust APIs linking POS terminals, accounting ledgers, ERPs, and inventory tools into unified flows."
    },
    {
      action: "IMPROVE",
      title: "When technology is holding you back",
      desc: "Modernising legacy workflows, removing transaction bottlenecks, and re-configuring existing software investments for higher throughput."
    },
    {
      action: "AUTOMATE",
      title: "When repetitive work drains capacity",
      desc: "Event-driven background task runners automating customer order approvals, invoice dispatch, multi-system handoffs, and scheduled reports."
    },
    {
      action: "APPLY AI",
      title: "When AI provides an operational edge",
      desc: "Pragmatic machine intelligence: optical character recognition for supplier invoices, automated document extraction, and smart inquiry triage."
    },
    {
      action: "IMPLEMENT",
      title: "When you need the right business platform",
      desc: "Selecting, configuring, and localizing enterprise ERP, CRM, and billing systems (Odoo, Zoho, Sage) tailored to Zimbabwean dual-currency realities."
    }
  ];

  return (
    <section className="section" id="capabilities" style={{ backgroundColor: "var(--bg-surface)", borderBottom: "1px solid var(--borders)", padding: "5.5rem 0" }}>
      <div className="container">
        <div style={{ maxWidth: "840px", margin: "0 auto 3.5rem", textAlign: "center" }}>
          <span className="eyebrow">END-TO-END TECHNOLOGY</span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: "800", color: "var(--primary)", lineHeight: "1.2", marginBottom: "1.25rem" }}>
            Technology from the problem to the solution.
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.75", color: "var(--muted)", margin: 0 }}>
            Whether a business needs a system built from scratch, existing platforms integrated, an ERP or CRM implemented, payment systems connected, workflows automated or AI applied to a practical business process, Corebridge works across the technology stack to close the gap.
          </p>
        </div>

        {/* 6 Clean Editorial Blocks */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            maxWidth: "1160px",
            margin: "0 auto 3.5rem"
          }}
        >
          {capabilities.map((cap, idx) => {
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--white)",
                  border: "1px solid var(--borders)",
                  borderRadius: "var(--radius-md)",
                  padding: "2.25rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 2px 8px rgba(10, 25, 41, 0.03)"
                }}
              >
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: "800",
                    color: "var(--blue)",
                    letterSpacing: "0.08em",
                    fontVariantNumeric: "tabular-nums",
                    marginBottom: "1rem",
                    display: "block"
                  }}
                >
                  0{idx + 1} / {cap.action}
                </span>

                <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginBottom: "0.75rem", lineHeight: "1.3" }}>
                  {cap.title}
                </h3>

                <p style={{ fontSize: "0.93rem", lineHeight: "1.65", color: "var(--muted)", margin: 0 }}>
                  {cap.desc}
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
            Explore all solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
