import React from "react";
import { Link } from "react-router-dom";

export default function BusinessProblemSection() {
  const pipelineSteps = [
    { num: "01", title: "Sales", desc: "Orders captured across storefronts, reps, or portals" },
    { num: "02", title: "Inventory", desc: "Stock reserved and updated across warehouses" },
    { num: "03", title: "Payment", desc: "Settlements processed via local rails or cards" },
    { num: "04", title: "Accounting", desc: "Journals and ledgers posted without re-entry" },
    { num: "05", title: "Reporting", desc: "Real-time visibility for operational leaders" }
  ];

  return (
    <section className="section" id="problem" style={{ backgroundColor: "var(--bg-surface)", borderBottom: "1px solid var(--borders)", padding: "5rem 0" }}>
      <div className="container">
        <div style={{ maxWidth: "780px", margin: "0 auto 3.5rem", textAlign: "center" }}>
          <span className="eyebrow">THE OPERATIONAL CHALLENGE</span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: "800", color: "var(--primary)", lineHeight: "1.2", marginBottom: "1.25rem" }}>
            Businesses rarely run on one system.
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.75", color: "var(--text-dark)", marginBottom: "1rem" }}>
            Businesses accumulate tools over time: Point of Sale, Accounting, ERP, CRM, Inventory, Payments, Spreadsheets, and Custom Software.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--muted)", margin: 0 }}>
            The challenge is not necessarily that these individual tools are failing. The challenge is that critical information often has to move between them manually through duplicate entry, batch exports, and delayed reconciliation.
          </p>
        </div>

        {/* Clean Sequential Flow: Sales -> Inventory -> Payment -> Accounting -> Reporting */}
        <div
          style={{
            maxWidth: "1060px",
            margin: "0 auto 3.5rem",
            backgroundColor: "var(--white)",
            border: "1px solid var(--borders)",
            borderRadius: "var(--radius-md)",
            padding: "2.5rem 2rem",
            boxShadow: "0 4px 20px rgba(10, 25, 41, 0.04)"
          }}
        >
          <span style={{ fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted)", display: "block", textAlign: "center", marginBottom: "2rem" }}>
            The Integrated Operational Pipeline
          </span>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
              gap: "1.5rem"
            }}
          >
            {pipelineSteps.map((step, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "1.25rem 1rem",
                    backgroundColor: "var(--bg-surface)",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--borders)"
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: "700",
                      color: "var(--blue)",
                      fontVariantNumeric: "tabular-nums",
                      marginBottom: "0.75rem",
                      letterSpacing: "0.05em"
                    }}
                  >
                    {step.num}
                  </span>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--primary)", marginBottom: "0.4rem" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: "1.45", margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              );
            })}
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
