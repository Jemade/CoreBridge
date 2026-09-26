import React from "react";
import { ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function BusinessProblemSection({ onOpenAudit }) {
  const steps = [
    { title: "Point of Sale / Web", role: "Sales & Cashier Terminals" },
    { title: "Customer Orders", role: "Order Ingestion Queue" },
    { title: "Inventory Stock", role: "Warehouse & Branch Stock" },
    { title: "Accounting Ledgers", role: "General Ledger & Journals" },
    { title: "Reporting & Auditing", role: "Executive Visibility" }
  ];

  const frictionPoints = [
    "Repeated manual data entry between spreadsheets and desktop databases",
    "Duplicate customer and order records across isolated departments",
    "Delayed financial reporting waiting on manual cross-branch reconciliations",
    "Time-consuming end-of-day cash and card payment matching",
    "Transcription errors leading to stock discrepancies and phantom inventory",
    "Poor operational visibility leaving leadership without real-time numbers"
  ];

  return (
    <section className="section section-surface" id="problem">
      <div className="container">
        <div className="section-header centered">
          <span className="eyebrow">THE OPERATIONAL REALITY</span>
          <h2 style={{ marginBottom: "1.25rem" }}>
            Your business does not need more software. It needs systems that work together.
          </h2>
          <p className="lead-text" style={{ margin: "0 auto" }}>
            Businesses accumulate software over time. One platform handles sales, another handles accounting, another handles stock, and another handles payments. The problem is not necessarily the software itself. The problem is the gap between the systems.
          </p>
        </div>

        {/* Visual System Flow Pipeline */}
        <div
          style={{
            background: "var(--white)",
            border: "1px solid var(--borders)",
            borderRadius: "var(--radius-lg)",
            padding: "2.5rem 2rem",
            boxShadow: "var(--shadow-sm)",
            marginBottom: "3.5rem"
          }}
        >
          <span style={{ fontSize: "0.82rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--primary)", display: "block", marginBottom: "1.5rem", textAlign: "center" }}>
            How Information Should Move Through Your Business
          </span>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1rem",
              alignItems: "center"
            }}
          >
            {steps.map((s, idx) => (
              <div
                key={idx}
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--borders)",
                  borderRadius: "var(--radius-sm)",
                  padding: "1.25rem 1rem",
                  textAlign: "center"
                }}
              >
                <span style={{ fontSize: "0.74rem", fontWeight: "700", color: "var(--blue)", letterSpacing: "0.06em" }}>
                  STAGE 0{idx + 1}
                </span>
                <div style={{ fontWeight: "700", fontSize: "0.98rem", color: "var(--primary)", marginTop: "0.3rem" }}>
                  {s.title}
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--muted)", marginTop: "0.2rem" }}>
                  {s.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Without Integration vs With Corebridge Comparison */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
          <div
            style={{
              backgroundColor: "var(--white)",
              border: "1px solid #FECACA",
              borderRadius: "var(--radius-md)",
              padding: "2.25rem 2rem"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", color: "#DC2626", marginBottom: "1rem" }}>
              <AlertTriangle size={20} />
              <h3 style={{ fontSize: "1.25rem", color: "#991B1B" }}>Without Systems Integration</h3>
            </div>
            <p style={{ fontSize: "0.94rem", lineHeight: "1.6", color: "var(--muted)", marginBottom: "1.5rem" }}>
              When systems remain isolated, your staff become manual data conduits moving information by hand.
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {frictionPoints.map((item, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.9rem", color: "var(--muted)", lineHeight: "1.45" }}>
                  <span style={{ color: "#DC2626", fontWeight: "700", lineHeight: "1" }}>&times;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              backgroundColor: "var(--white)",
              border: "1px solid #BAE6FD",
              borderRadius: "var(--radius-md)",
              padding: "2.25rem 2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", color: "var(--blue)", marginBottom: "1rem" }}>
                <CheckCircle2 size={20} />
                <h3 style={{ fontSize: "1.25rem", color: "var(--primary)" }}>Corebridge Connects the Pieces</h3>
              </div>
              <p style={{ fontSize: "0.94rem", lineHeight: "1.6", color: "var(--muted)", marginBottom: "1.5rem" }}>
                We engineer reliable automated pipelines, APIs, and background queue workers so that data flows continuously between your existing platforms without disruption.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.9rem", color: "var(--muted)", lineHeight: "1.45" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--blue)", marginTop: "2px", flexShrink: 0 }} />
                  <span>Validated transactions post directly to general ledgers in real time</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.9rem", color: "var(--muted)", lineHeight: "1.45" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--blue)", marginTop: "2px", flexShrink: 0 }} />
                  <span>Inventory decrements automatically across all physical branches and sales channels</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.9rem", color: "var(--muted)", lineHeight: "1.45" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--blue)", marginTop: "2px", flexShrink: 0 }} />
                  <span>Mobile money and bank transactions reconcile against open orders automatically</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.9rem", color: "var(--muted)", lineHeight: "1.45" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--blue)", marginTop: "2px", flexShrink: 0 }} />
                  <span>Decision-makers access accurate operational summaries without manual spreadsheet assembly</span>
                </li>
              </ul>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onOpenAudit}
                style={{ width: "100%" }}
              >
                Schedule an Operational Review <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
