import React from "react";
import { Link } from "react-router-dom";
import BrandWordmark from "../components/common/BrandWordmark";

export default function BusinessProblemSection() {
  const systems = ["Sales", "Inventory", "Payments", "Accounting", "Operations", "Reporting"];

  return (
    <section className="section" id="problem" style={{ backgroundColor: "var(--bg-surface)", borderBottom: "1px solid var(--borders)", padding: "6rem 0" }}>
      <div className="container">
        <div style={{ maxWidth: "800px", margin: "0 auto 3.75rem", textAlign: "center" }}>
          <span className="eyebrow">THE OPERATIONAL GAP</span>
          <h2 style={{ fontSize: "clamp(2.1rem, 3.8vw, 3rem)", fontWeight: "800", color: "var(--primary)", lineHeight: "1.18", marginBottom: "1.25rem" }}>
            Businesses rarely run on one system.
          </h2>
          <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--text-dark)", marginBottom: "0.85rem" }}>
            Your business may already have the systems it needs. The problem is often how those systems work together.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "var(--muted)", margin: 0 }}>
            Sales, inventory, payments, accounting, operations and reporting often sit in separate tools. Corebridge helps close the gaps so information can move across the business with less duplicate entry and manual reconciliation.
          </p>
        </div>

        <div style={{ maxWidth: "1050px", margin: "0 auto 3.25rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", borderTop: "1px solid var(--borders)", borderBottom: "1px solid var(--borders)" }}>
            {systems.slice(0, 3).map((system, idx) => (
              <div key={system} style={{ textAlign: "center", padding: "1.35rem 0.75rem", borderRight: idx < 2 ? "1px solid var(--borders)" : "none", fontWeight: "700", color: "var(--primary)" }}>
                {system}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", padding: "1.5rem 1rem" }}>
            <div style={{ width: "100%", maxWidth: "640px", backgroundColor: "#0A1929", padding: "1.25rem 1.5rem", textAlign: "center" }}>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", color: "#FFFFFF", fontSize: "0.82rem", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                <BrandWordmark variant="light" size="0.9rem" /> connects the gap
              </div>
              <p style={{ color: "#CBD5E1", fontSize: "0.92rem", lineHeight: "1.55", margin: "0.45rem 0 0" }}>
                Build what is missing, connect what already exists and improve how information moves.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", borderTop: "1px solid var(--borders)", borderBottom: "1px solid var(--borders)" }}>
            {systems.slice(3).map((system, idx) => (
              <div key={system} style={{ textAlign: "center", padding: "1.35rem 0.75rem", borderRight: idx < 2 ? "1px solid var(--borders)" : "none", fontWeight: "700", color: "var(--primary)" }}>
                {system}
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <Link to="/solutions" className="btn-link" style={{ fontSize: "0.95rem", fontWeight: "700", textDecoration: "none", color: "var(--blue)" }}>
            See how we connect business systems
          </Link>
        </div>
      </div>
    </section>
  );
}
