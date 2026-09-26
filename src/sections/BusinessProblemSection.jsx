import React from "react";
import { Link } from "react-router-dom";

export default function BusinessProblemSection() {
  const systems = [
    { num: "01", title: "Sales", desc: "Storefronts, field agents, e-commerce, and client order portals" },
    { num: "02", title: "Inventory", desc: "Warehouse stock counts, multi-depot allocations, and dispatches" },
    { num: "03", title: "Payments", desc: "Multi-currency transactions, bank rails, and settlement gateways" },
    { num: "04", title: "Accounting", desc: "General ledgers, tax postings, and automated audit trails" },
    { num: "05", title: "Operations", desc: "Fulfillment schedules, job tracking, and field service workflows" },
    { num: "06", title: "Reporting", desc: "Real-time management visibility and operational reconciliation" }
  ];

  return (
    <section className="section" id="problem" style={{ backgroundColor: "var(--bg-surface)", borderBottom: "1px solid var(--borders)", padding: "5.5rem 0" }}>
      <div className="container">
        <div style={{ maxWidth: "800px", margin: "0 auto 3.5rem", textAlign: "center" }}>
          <span className="eyebrow">THE OPERATIONAL GAP</span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: "800", color: "var(--primary)", lineHeight: "1.2", marginBottom: "1.25rem" }}>
            Businesses rarely run on one system.
          </h2>
          <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--text-dark)", marginBottom: "0.85rem" }}>
            Your business may already have the systems it needs. The problem is often how those systems work together.
          </p>
          <p style={{ fontSize: "1.02rem", lineHeight: "1.7", color: "var(--muted)", margin: 0 }}>
            Critical operational information gets trapped in isolated tools: Point of Sale, spreadsheets, payment rails, and accounting ledgers. When systems cannot communicate, operations rely on duplicate entry, manual batch exports, and delayed reconciliation.
          </p>
        </div>

        {/* Clean Systems Interoperability Diagram (No decorative cartoon icons) */}
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto 3.5rem",
            backgroundColor: "var(--white)",
            border: "1px solid var(--borders)",
            borderRadius: "var(--radius-md)",
            padding: "2.5rem 2rem",
            boxShadow: "0 4px 20px rgba(10, 25, 41, 0.04)"
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted)" }}>
              The Disconnected Enterprise Landscape
            </span>
          </div>

          {/* 6 Core Functional Modules */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "1.25rem",
              marginBottom: "2rem"
            }}
          >
            {systems.map((s, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "1.25rem 1rem",
                  backgroundColor: "var(--bg-surface)",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--borders)"
                }}
              >
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "800",
                    color: "var(--blue)",
                    fontVariantNumeric: "tabular-nums",
                    marginBottom: "0.5rem",
                    letterSpacing: "0.06em"
                  }}
                >
                  {s.num}
                </span>
                <h3 style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--primary)", marginBottom: "0.35rem" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: "1.45", margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* The Corebridge Engineering Layer (Visual Bridge) */}
          <div
            style={{
              backgroundColor: "#0A1929",
              borderRadius: "var(--radius-sm)",
              padding: "1.35rem 2rem",
              textAlign: "center",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.35rem"
            }}
          >
            <span style={{ fontSize: "0.82rem", fontWeight: "800", letterSpacing: "0.12em", color: "#38BDF8", textTransform: "uppercase" }}>
              THE COREBRIDGE ENGINEERING LAYER
            </span>
            <span style={{ fontSize: "0.95rem", color: "#E2E8F0" }}>
              Middleware Connectors · Automated Webhooks · Bi-directional Database Synchronization
            </span>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <Link
            to="/solutions"
            className="btn btn-secondary"
            style={{ fontSize: "0.95rem", padding: "0.85rem 1.75rem" }}
          >
            See how we solve these problems
          </Link>
        </div>
      </div>
    </section>
  );
}

