import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe2, ShieldCheck, Zap } from "lucide-react";
import { globalLocalPerspective } from "../data/initialData";

export default function GlobalLocalSection({ onOpenAudit }) {
  const principles = [
    {
      icon: Globe2,
      title: "Proven Architectural Standards",
      desc: "We apply industry-standard API design, decoupled services, relational data integrity, and automated background processing developed in leading tech ecosystems."
    },
    {
      icon: Zap,
      title: "Built for Zimbabwean Realities",
      desc: "We account for dual-currency accounting, volatile network connectivity, local mobile money gateways, and legacy desktop software environments."
    },
    {
      icon: ShieldCheck,
      title: "Pragmatic, Local Accountability",
      desc: "No distant call centers or generic helpdesk tickets. We work side-by-side with your leadership and operational teams in Harare to ensure systems work."
    }
  ];

  return (
    <section className="section section-dark" id="global-local">
      <div className="container">
        <div style={{ maxWidth: "800px", margin: "0 auto 3.5rem auto", textAlign: "center" }}>
          <span className="eyebrow-dark">STRATEGIC PERSPECTIVE</span>
          <h2 style={{ fontSize: "2.4rem", fontWeight: "800", color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: "1.2" }}>
            {globalLocalPerspective.headline}
          </h2>
          <p style={{ fontSize: "1.12rem", lineHeight: "1.7", color: "#94A3B8" }}>
            {globalLocalPerspective.lead}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3.5rem" }}>
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "var(--radius-md)",
                  padding: "2.25rem 2rem",
                  transition: "all var(--transition-fast)"
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "rgba(23, 105, 232, 0.15)",
                    color: "var(--blue)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem"
                  }}
                >
                  <Icon size={22} />
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--white)", marginBottom: "0.75rem" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "0.92rem", lineHeight: "1.65", color: "#94A3B8", margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: "var(--radius-md)",
            padding: "2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem"
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--white)", marginBottom: "0.4rem" }}>
              Have an integration challenge specific to the local market?
            </h4>
            <p style={{ fontSize: "0.9rem", color: "#94A3B8", margin: 0 }}>
              Speak directly with our engineering team in Harare about how to connect your legacy accounting, ERP, and payment channels.
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link to="/about" className="btn btn-secondary">
              Our Methodology <ArrowRight size={15} />
            </Link>
            <button type="button" className="btn btn-primary" onClick={onOpenAudit}>
              Operational Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
