import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import SEO from "../components/common/SEO";
import { industriesData } from "../data/initialData";

export default function IndustriesPage({ onOpenAudit }) {
  return (
    <>
      <SEO
        title="Industry Solutions"
        description="Tailored technology and system integrations for Pharmacies & Health, Transport & Logistics, FMCG Wholesalers, Manufacturing, Microfinance, and Security."
      />

      {/* Header */}
      <section style={{ background: "var(--dark)", color: "var(--white)", padding: "80px 0 60px" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-label light" style={{ display: "inline-block", marginBottom: "12px" }}>
            SPECIALIZED OPERATIONAL EXPERTISE
          </span>
          <h1 style={{ fontSize: "42px", fontWeight: "800", letterSpacing: "-0.03em", color: "var(--white)", marginBottom: "20px", lineHeight: "1.15" }}>
            Systems Engineered for Your Industry
          </h1>
          <p style={{ fontSize: "16px", color: "#94a3b8", lineHeight: "1.6", marginBottom: "32px" }}>
            Generic software forces you to change how your business operates. We configure and build systems around your industry's specific compliance, logistics, and data realities.
          </p>
          <button className="primary-btn" onClick={onOpenAudit} style={{ margin: "0 auto" }}>
            Request Industry Consultation <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Industries Grid */}
      <section style={{ padding: "80px 0", background: "#f8fafc" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "32px" }}>
          {industriesData.map(ind => (
            <article
              key={ind.slug}
              style={{
                background: "var(--white)",
                borderRadius: "16px",
                border: "1px solid var(--line)",
                overflow: "hidden",
                boxShadow: "0 2px 6px rgba(10,25,41,.03)",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
                <img
                  src={ind.image}
                  alt={ind.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="lazy"
                />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(10,25,41,0.2) 0%, rgba(10,25,41,0.85) 100%)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "20px"
                }}>
                  <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                    {ind.name}
                  </h2>
                </div>
              </div>

              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6", marginBottom: "20px" }}>
                  {ind.desc}
                </p>

                <div style={{ marginBottom: "20px" }}>
                  <h4 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "#64748b", marginBottom: "10px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <AlertTriangle size={14} style={{ color: "#d97706" }} /> Typical Operational Hurdles
                  </h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: "#334155" }}>
                    {ind.challenges.map((c, idx) => (
                      <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
                        <span style={{ color: "#94a3b8" }}>•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: "auto", paddingTop: "16px", borderTop: "1px solid var(--line)" }}>
                  <Link
                    to={`/industries/${ind.slug}`}
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "var(--blue)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px"
                    }}
                  >
                    View detailed solutions for {ind.name} <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
