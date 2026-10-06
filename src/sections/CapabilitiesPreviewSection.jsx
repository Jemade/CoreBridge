import React from "react";
import { Link } from "react-router-dom";

export default function CapabilitiesPreviewSection() {
  const capabilities = [
    {
      title: "Software Engineering",
      desc: "Custom applications, portals and backend systems built around real operational requirements."
    },
    {
      title: "Systems Integration",
      desc: "Connect ERP, CRM, POS, accounting, payments, inventory and other systems so information moves reliably."
    },
    {
      title: "Business Automation",
      desc: "Reduce repetitive work, manual handoffs and process delays with practical workflow automation."
    },
    {
      title: "Applied AI",
      desc: "Use AI where it has a clear business purpose, including document processing, knowledge access and operational support."
    }
  ];

  return (
    <section className="section" id="capabilities" style={{ backgroundColor: "#0A1929", padding: "6rem 0", color: "#FFFFFF" }}>
      <div className="container">
        <div style={{ maxWidth: "800px", marginBottom: "4rem" }}>
          <span className="eyebrow" style={{ color: "#93C5FD" }}>WHAT WE CAN HELP WITH</span>
          <h2 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)", fontWeight: "800", color: "#FFFFFF", lineHeight: "1.12", marginBottom: "1.25rem" }}>
            Technology from the problem to a working solution.
          </h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "#CBD5E1", margin: 0 }}>
            Corebridge works across software, connected business systems, automation and practical AI. The goal is not more technology. It is technology that makes the business work better.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", maxWidth: "1160px", borderTop: "1px solid rgba(255,255,255,0.18)", borderBottom: "1px solid rgba(255,255,255,0.18)", marginBottom: "3rem" }}>
          {capabilities.map((cap, idx) => (
            <article key={cap.title} style={{ padding: "2rem 1.75rem", borderRight: idx < capabilities.length - 1 ? "1px solid rgba(255,255,255,0.14)" : "none" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.12em", color: "#93C5FD" }}>0{idx + 1}</span>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "750", color: "#FFFFFF", margin: "0.8rem 0 0.75rem", lineHeight: "1.3" }}>{cap.title}</h3>
              <p style={{ fontSize: "0.93rem", lineHeight: "1.65", color: "#CBD5E1", margin: 0 }}>{cap.desc}</p>
            </article>
          ))}
        </div>

        <Link to="/solutions" className="btn btn-secondary" style={{ fontSize: "0.95rem", padding: "0.85rem 1.75rem", color: "#FFFFFF", borderColor: "rgba(255,255,255,0.4)" }}>
          Explore all solutions
        </Link>
      </div>
    </section>
  );
}
