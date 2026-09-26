import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Code2, Network, Workflow } from "lucide-react";
import { buildIntegrateImproveImg } from "../data/initialData";

export default function BuildIntegrateImproveSection({ onOpenAudit }) {
  const pillars = [
    {
      pillar: "BUILD",
      icon: Code2,
      subtitle: "When existing software cannot support the actual business process",
      description: "When commercial packages force compromises that impair your competitive advantage, we architect and engineer tailored applications designed around your exact operational rules.",
      scenarios: [
        "Custom client and customer self-service portals",
        "Internal line-of-business operating applications",
        "Field technician and sales agent mobile systems",
        "Specialized calculation engines and relational database architectures"
      ]
    },
    {
      pillar: "INTEGRATE",
      icon: Network,
      subtitle: "When existing software is suitable but isolated",
      description: "You do not need to discard software that staff already understand. We build middleware connectors, API bridges, and background event queues that connect platforms together seamlessly.",
      scenarios: [
        "ERP and Point of Sale transaction synchronization",
        "Customer CRM records aligned with accounting invoices",
        "Mobile money and swipe payment reconciliation webhooks",
        "Warehouse inventory decrementing across physical and digital storefronts"
      ]
    },
    {
      pillar: "IMPROVE",
      icon: Workflow,
      subtitle: "When the software works but the workflow around it does not",
      description: "When software is functionally sound but staff waste hours on manual approvals, paper handoffs, or re-verifications, we automate the workflow steps and eliminate operational lag.",
      scenarios: [
        "Automated multi-tier purchase requisition and sign-off routings",
        "Automated PDF document generation and dispatch notifications",
        "Data validation rules preventing incorrect customer or ledger entries",
        "AI-assisted document data extraction and invoice parsing"
      ]
    }
  ];

  return (
    <section className="section" id="build-integrate-improve" style={{ backgroundColor: "var(--bg-surface)", borderBottom: "1px solid var(--borders)" }}>
      <div className="container">
        {/* Split Editorial Header with Real Engineering Photography */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "3rem",
            alignItems: "center",
            marginBottom: "4rem"
          }}
        >
          <div>
            <span className="eyebrow">STRATEGIC DISCIPLINE</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: "800", color: "var(--primary)", lineHeight: "1.2", marginBottom: "1.25rem" }}>
              Build. Integrate. Improve.
            </h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.7", color: "var(--text-dark)", marginBottom: "1rem" }}>
              We do not believe in replacing working tools simply to sell software development hours. Every client engagement begins by evaluating which of these three paths offers the highest return and lowest operational disruption.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.65", color: "var(--muted)", margin: 0 }}>
              Whether you need a custom tool built from scratch, two platforms connected through clean APIs, or an existing workflow automated, we recommend the most practical engineering intervention.
            </p>
          </div>

          <div style={{ position: "relative", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--borders)", boxShadow: "0 6px 20px rgba(10, 25, 41, 0.06)" }}>
            <img
              src={buildIntegrateImproveImg}
              alt="Engineering systems architecture, software deployment, and industrial integration"
              style={{ width: "100%", height: "320px", objectFit: "cover", display: "block" }}
              loading="lazy"
            />
            <div
              style={{
                padding: "0.85rem 1.25rem",
                backgroundColor: "var(--white)",
                borderTop: "1px solid var(--borders)",
                fontSize: "0.82rem",
                color: "var(--muted)"
              }}
            >
              Engineering discipline: Solving business problems through the most pragmatic architectural path
            </div>
          </div>
        </div>

        {/* 3 Pillars In-Depth Column Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          {pillars.map((item, idx) => {
            const Icon = item.icon;
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
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "var(--soft-blue)",
                        color: "var(--blue)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: "800",
                        letterSpacing: "0.1em",
                        color: "var(--blue)",
                        padding: "0.25rem 0.65rem",
                        backgroundColor: "var(--soft-blue)",
                        borderRadius: "var(--radius-sm)"
                      }}
                    >
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.45rem", fontWeight: "800", color: "var(--primary)", marginBottom: "0.5rem" }}>
                    {item.pillar}
                  </h3>

                  <div style={{ fontSize: "0.9rem", fontWeight: "600", color: "var(--blue)", marginBottom: "1rem", lineHeight: "1.4" }}>
                    {item.subtitle}
                  </div>

                  <p style={{ fontSize: "0.94rem", lineHeight: "1.65", color: "var(--muted)", marginBottom: "1.75rem" }}>
                    {item.description}
                  </p>

                  <div style={{ borderTop: "1px solid var(--borders)", paddingTop: "1.25rem" }}>
                    <span style={{ fontSize: "0.76rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--primary)", display: "block", marginBottom: "0.75rem" }}>
                      Concrete Examples
                    </span>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                      {item.scenarios.map((sc, sIdx) => (
                        <li key={sIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.88rem", color: "var(--text-dark)", lineHeight: "1.45" }}>
                          <CheckCircle2 size={15} style={{ color: "var(--blue)", marginTop: "2px", flexShrink: 0 }} />
                          <span>{sc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ marginTop: "2rem", paddingTop: "1.25rem", borderTop: "1px solid var(--borders)" }}>
                  <button
                    type="button"
                    onClick={onOpenAudit}
                    className="btn-link"
                    style={{ width: "100%", justifyContent: "space-between", fontSize: "0.88rem" }}
                  >
                    <span>Assess your {item.pillar.toLowerCase()} requirements</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
