import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import CaseStudyCard from "../components/cards/CaseStudyCard";
import { caseStudiesData, caseStudiesHeroImg } from "../data/initialData";

export default function CaseStudiesPage({ onOpenAudit }) {
  const studies = caseStudiesData;

  return (
    <>
      <SEO
        title="Case Studies & Engineering Architecture | Corebridge"
        description="Transparent technical case studies: Retail POS and Odoo ERP synchronization, B2B transaction exchange, field service automation, and document AI."
      />

      {/* Hero with Unique Case Studies Photography */}
      <section className="section section-dark" style={{ padding: "4.5rem 0 4rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3.5rem", alignItems: "center" }}>
            <div>
              <span className="eyebrow-dark">GROUNDED CASE STUDIES</span>
              <h1 style={{ fontSize: "2.75rem", fontWeight: "800", color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: "1.15" }}>
                Systems in Practice
              </h1>
              <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "#94A3B8", marginBottom: "2rem" }}>
                Real technical solutions solving real operational problems. We document architectural decisions, integration hurdles, and measurable business outcomes without fabricated statistics or vanity metrics.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <button type="button" className="btn btn-primary" onClick={onOpenAudit}>
                  Schedule Operational Review
                </button>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Engineering
                </Link>
              </div>
            </div>

            {/* Clean Hero Photography without overlays */}
            <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.15)", boxShadow: "var(--shadow-lg)" }}>
              <img
                src={caseStudiesHeroImg}
                alt="Corebridge engineering case study and system architecture implementation"
                style={{ width: "100%", height: "340px", objectFit: "cover", display: "block" }}
                width="720"
                height="340"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Standards Banner */}
      <section style={{ backgroundColor: "var(--white)", borderBottom: "1px solid var(--borders)", padding: "1.5rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2.5rem", fontSize: "0.88rem", color: "var(--muted)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span className="case-badge">Client Implementation</span>
              <span>Production client deployment</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span className="case-badge case-badge-prototype">Prototype</span>
              <span>Architectural proof of concept</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span className="case-badge case-badge-internal">Internal Build</span>
              <span>In-house tool and engine</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span className="case-badge case-badge-research">Research</span>
              <span>Technical evaluation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section" style={{ backgroundColor: "var(--bg-surface)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2.5rem" }}>
            {studies.map((study) => (
              <CaseStudyCard key={study.slug || study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section-dark" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="eyebrow-dark">HAVE A SIMILAR CHALLENGE?</span>
          <h2 style={{ fontSize: "2.25rem", fontWeight: "800", color: "var(--white)", marginBottom: "1.25rem" }}>
            Discuss Your System Architecture With Our Team
          </h2>
          <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: "1.65", marginBottom: "2.5rem" }}>
            Book a 15-minute operational review with our lead engineers in Harare. We will examine your workflows and give you a candid architectural recommendation.
          </p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <button type="button" className="btn btn-primary" onClick={onOpenAudit}>
              Book 15-Minute Review
            </button>
            <Link to="/contact" className="btn btn-secondary">
              Contact Engineering
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
