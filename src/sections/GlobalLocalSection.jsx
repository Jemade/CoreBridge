import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe2, ShieldCheck, Zap, Layers } from "lucide-react";
import { globalLocalImg } from "../data/initialData";

export default function GlobalLocalSection({ onOpenAudit }) {
  const standards = [
    { title: "Standardized REST & Webhook APIs", desc: "Structured payloads replacing ad-hoc file exchanges and brittle point-to-point scripts." },
    { title: "Electronic Invoicing & Data Interchange", desc: "Machine-readable schemas that allow systems to ingest trade documents without transcription." },
    { title: "Digital Procurement Pipelines", desc: "Automated purchasing requisitions linked directly to approved supplier stock queues." },
    { title: "Resilient Payment Infrastructure", desc: "Idempotent event webhooks that reconcile payment clearance against open customer ledgers." }
  ];

  return (
    <section className="section" id="global-local" style={{ backgroundColor: "#0A1929", color: "var(--white)", borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
      <div className="container">
        {/* Split Editorial Header with Real Commercial Freight & Logistics Photography */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
            marginBottom: "3.5rem"
          }}
        >
          <div>
            <span className="eyebrow-dark">STRATEGIC PERSPECTIVE</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: "800", color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: "1.2" }}>
              Global systems. Local realities.
            </h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.7", color: "#CBD5E1", marginBottom: "1rem" }}>
              Modern international business systems increasingly depend on deep interoperability: common data standards, open APIs, digital documents, automated electronic invoicing, and synchronized payment infrastructure.
            </p>
            <p style={{ fontSize: "0.98rem", lineHeight: "1.65", color: "#94A3B8", margin: 0 }}>
              Corebridge analyzes these international engineering patterns and evaluates how they can be adapted to Zimbabwean business operations. Rather than forcing foreign assumptions about constant fiber bandwidth or single-currency banking, we bridge global software architectures with local commercial realities.
            </p>
          </div>

          <div style={{ position: "relative", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.15)", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}>
            <img
              src={globalLocalImg}
              alt="International freight logistics, digital procurement, and global commercial trade interchange"
              style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
              loading="lazy"
            />
            <div
              style={{
                padding: "0.85rem 1.25rem",
                backgroundColor: "rgba(10, 25, 41, 0.95)",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                fontSize: "0.82rem",
                color: "#94A3B8"
              }}
            >
              Enterprise architecture: Applying proven global integration patterns within local operating environments
            </div>
          </div>
        </div>

        {/* 4 Standards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
          {standards.map((st, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "var(--radius-sm)",
                padding: "1.75rem 1.5rem"
              }}
            >
              <h3 style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--white)", marginBottom: "0.6rem" }}>
                {st.title}
              </h3>
              <p style={{ fontSize: "0.88rem", lineHeight: "1.6", color: "#94A3B8", margin: 0 }}>
                {st.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Strip */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
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
              Looking to connect international software to local accounting or payments?
            </h4>
            <p style={{ fontSize: "0.9rem", color: "#94A3B8", margin: 0 }}>
              Consult directly with our engineering team in Harare on how to bridge foreign ERP platforms with domestic operating constraints.
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link to="/about" className="btn btn-secondary">
              Our Perspective <ArrowRight size={15} />
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
