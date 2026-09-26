import React from "react";
import { ArrowRight, AlertTriangle, CheckCircle2, Layers } from "lucide-react";
import { operationalRealityImg } from "../data/initialData";

export default function BusinessProblemSection({ onOpenAudit }) {
  const commonSystems = [
    "Point of Sale (POS)",
    "Accounting Ledgers (Sage, QuickBooks, Pastel)",
    "Enterprise ERPs (Odoo, SAP, Syspro)",
    "Customer Relationship Management (CRM)",
    "Payment Rails (EcoCash, Cards, ZIPIT)",
    "Warehouse Stock & Inventory",
    "Departmental Spreadsheets",
    "E-Commerce & Digital Storefronts",
    "Mobile Applications & Field Forms",
    "Executive Reporting Tools"
  ];

  const structuralFriction = [
    {
      title: "Duplicate data entry",
      desc: "Orders taken in store or on the road are manually typed again into accounting software, risking typographical mistakes and double work."
    },
    {
      title: "Manual reconciliation",
      desc: "Finance teams spend days matching bank statements, mobile money confirmation SMS messages, and till slips line-by-line."
    },
    {
      title: "Inconsistent information",
      desc: "Sales sees one customer balance, warehouse sees another stock figure, and accounting reports a third. Nobody knows which is correct."
    },
    {
      title: "Delayed reporting",
      desc: "Decision-makers wait days or weeks for basic month-end numbers because numbers must be extracted and assembled by hand."
    },
    {
      title: "Disconnected workflows",
      desc: "A sale closes, but dispatch is not notified until someone sends an internal email or prints a paper delivery authorization."
    },
    {
      title: "Staff relying on spreadsheets",
      desc: "Employees run essential operational calculations on personal laptops in unmanaged Excel files with no backup or change history."
    },
    {
      title: "Information trapped in silos",
      desc: "Valuable customer purchasing patterns and supplier histories remain trapped inside legacy desktop software without APIs."
    }
  ];

  return (
    <section className="section" id="problem" style={{ backgroundColor: "var(--bg-surface)", borderBottom: "1px solid var(--borders)" }}>
      <div className="container">
        <div style={{ maxWidth: "860px", marginBottom: "3.5rem" }}>
          <span className="eyebrow">THE OPERATIONAL REALITY</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: "800", color: "var(--primary)", lineHeight: "1.2", marginBottom: "1.25rem" }}>
            Most businesses do not have a software problem. They have a systems problem.
          </h2>
          <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "var(--text-dark)", marginBottom: "1rem" }}>
            Businesses accumulate software organically over time. One platform handles checkouts, another handles general ledgers, a separate tool tracks warehouse stock, and spreadsheets fill the holes in between.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "var(--muted)", margin: 0 }}>
            Individually, each piece of software may work adequately. The core failure occurs in the space between them: where data stops flowing automatically and humans are forced to become manual bridges.
          </p>
        </div>

        {/* Photographic Split Feature */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "3rem",
            alignItems: "center",
            marginBottom: "4rem",
            backgroundColor: "var(--white)",
            border: "1px solid var(--borders)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden"
          }}
        >
          {/* Image Side */}
          <div style={{ position: "relative", minHeight: "360px", height: "100%" }}>
            <img
              src={operationalRealityImg}
              alt="Real commercial warehouse inventory and distribution operations"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              loading="lazy"
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "1rem 1.25rem",
                background: "linear-gradient(transparent, rgba(10, 25, 41, 0.9))",
                color: "var(--white)",
                fontSize: "0.82rem"
              }}
            >
              Physical operations: Stock, orders, and accounting must synchronize continuously
            </div>
          </div>

          {/* Explanation Side */}
          <div style={{ padding: "2.5rem 2rem" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--blue)", display: "block", marginBottom: "0.75rem" }}>
              The Common Landscape
            </span>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--primary)", marginBottom: "1rem" }}>
              The 10 Systems Operating in Silos
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: "1.6", marginBottom: "1.5rem" }}>
              A growing enterprise routinely runs these platforms side by side without direct interoperability:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0.6rem" }}>
              {commonSystems.map((sys, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.86rem", color: "var(--text-dark)" }}>
                  <Layers size={14} style={{ color: "var(--blue)", flexShrink: 0 }} />
                  <span>{sys}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed 7 Structural Friction Points */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--primary)", marginBottom: "0.5rem" }}>
              How the Gap Manifests in Daily Operations
            </h3>
            <p style={{ fontSize: "1rem", color: "var(--muted)", margin: 0 }}>
              When systems cannot talk directly to one another, friction compounds across every department:
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {structuralFriction.map((f, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--white)",
                  border: "1px solid var(--borders)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#DC2626", marginBottom: "0.75rem" }}>
                  <AlertTriangle size={18} />
                  <h4 style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--primary)", margin: 0 }}>
                    {f.title}
                  </h4>
                </div>
                <p style={{ fontSize: "0.92rem", lineHeight: "1.6", color: "var(--muted)", margin: 0 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Bridge Action */}
        <div
          style={{
            backgroundColor: "var(--white)",
            border: "1px solid #BAE6FD",
            borderRadius: "var(--radius-md)",
            padding: "2.5rem 2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem"
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--blue)", marginBottom: "0.5rem" }}>
              <CheckCircle2 size={20} />
              <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", margin: 0 }}>
                Corebridge Engineers the Connector Layer
              </h4>
            </div>
            <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: "1.6", margin: 0 }}>
              We build automated background pipelines, authenticated APIs, and resilient data sync so that records flow from point of sale to warehouse and general ledgers without manual intervention.
            </p>
          </div>
          <div>
            <button type="button" className="btn btn-primary" onClick={onOpenAudit}>
              Review Your System Gaps <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
