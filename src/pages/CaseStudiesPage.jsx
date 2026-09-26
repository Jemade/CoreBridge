import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Layers } from "lucide-react";
import SEO from "../components/common/SEO";
import CaseStudyCard from "../components/cards/CaseStudyCard";
import { getCaseStudies } from "../api/caseStudies";
import { caseStudiesData } from "../data/initialData";

export default function CaseStudiesPage({ onOpenAudit }) {
  const [studies, setStudies] = useState(caseStudiesData);

  useEffect(() => {
    let isMounted = true;
    getCaseStudies().then((data) => {
      if (isMounted && data && data.length > 0) {
        // Merge or replace if backend has updated records
        setStudies(data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <SEO
        title="Case Studies & Engineering Architecture | Corebridge"
        description="Transparent technical case studies: Retail POS and Odoo ERP synchronization, B2B transaction exchange, field service automation, and document AI."
      />

      {/* Header */}
      <section className="section section-dark" style={{ padding: "5rem 0 4rem" }}>
        <div className="container" style={{ maxWidth: "860px", textAlign: "center" }}>
          <span className="eyebrow-dark">GROUNDED CASE STUDIES</span>
          <h1 style={{ fontSize: "2.75rem", fontWeight: "800", color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: "1.15" }}>
            Systems in Practice
          </h1>
          <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "#94A3B8", marginBottom: "2.5rem" }}>
            Real technical solutions solving real operational problems. We document architectural decisions, integration hurdles, and measurable business outcomes without fabricated statistics or vanity metrics.
          </p>
          <button type="button" className="btn btn-primary" onClick={onOpenAudit} style={{ margin: "0 auto" }}>
            Request Architecture Discussion <ArrowRight size={16} />
          </button>
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
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <button type="button" className="btn btn-primary" onClick={onOpenAudit}>
              Book 15-Minute Review <ArrowRight size={16} />
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
