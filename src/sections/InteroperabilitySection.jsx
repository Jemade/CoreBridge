import React from "react";

export default function InteroperabilitySection({ onOpenAudit }) {
  const steps = [
    {
      num: "01",
      title: "Customer Order",
      desc: "Order is initiated via retail point of sale, a mobile sales rep application in the field, or through an enterprise digital portal."
    },
    {
      num: "02",
      title: "Order Validation",
      desc: "Middleware verifies the customer credit status, applicable wholesale pricing tier, and branch item authorization automatically."
    },
    {
      num: "03",
      title: "Inventory",
      desc: "Stock decrements in real time across warehouse bins; picking slips, packaging manifests, and dispatch tasks generate instantly."
    },
    {
      num: "04",
      title: "Payment",
      desc: "Payment arrives via EcoCash, card swipe, or bank clearance. Automated webhooks confirm funds and assign verified transaction references."
    },
    {
      num: "05",
      title: "Accounting",
      desc: "Sales revenue, cost of goods, accounts receivable, and VAT entries post directly to general ledgers without manual re-typing."
    },
    {
      num: "06",
      title: "Reporting",
      desc: "Management dashboards and daily trading summaries reflect accurate revenue, gross margins, and outstanding balances in real time."
    }
  ];

  return (
    <section className="section" id="interoperability" style={{ backgroundColor: "var(--white)", borderBottom: "1px solid var(--borders)" }}>
      <div className="container">
        <div className="section-header centered" style={{ maxWidth: "800px", margin: "0 auto 3.5rem auto" }}>
          <span className="eyebrow">CONTINUOUS DATA MOVEMENT</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: "800", color: "var(--primary)", lineHeight: "1.2", marginBottom: "1rem" }}>
            How a transaction should move through your business
          </h2>
          <p className="lead-text" style={{ margin: "0 auto" }}>
            A single commercial event touches nearly every department. Your staff should not have to manually re-enter and reconcile that same transaction six times across six disconnected platforms.
          </p>
        </div>

        {/* Clean Enterprise Sequential Flow */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            position: "relative"
          }}
        >
          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--borders)",
                borderRadius: "var(--radius-sm)",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                position: "relative"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "800",
                    color: "var(--blue)",
                    letterSpacing: "0.08em",
                    fontFamily: "monospace"
                  }}
                >
                  STAGE {step.num}
                </span>
              </div>

              <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginBottom: "0.6rem" }}>
                {step.title}
              </h3>

              <p style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "var(--muted)", margin: 0 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Process Evaluation Action */}
        <div
          style={{
            marginTop: "3.5rem",
            padding: "2rem",
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--borders)",
            borderRadius: "var(--radius-md)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem"
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--primary)", marginBottom: "0.35rem" }}>
              Are orders slowing down because of manual administrative handoffs?
            </h4>
            <p style={{ fontSize: "0.92rem", color: "var(--muted)", margin: 0 }}>
              We map the data dependencies across your platforms and engineer automated connectors to eliminate friction.
            </p>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={onOpenAudit}
          >
            Review Your Transaction Flow
          </button>
        </div>
      </div>
    </section>
  );
}
