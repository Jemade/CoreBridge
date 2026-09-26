import React from "react";
import { Link } from "react-router-dom";
import CaseStudyCard from "../components/cards/CaseStudyCard";
import { caseStudiesData } from "../data/initialData";

export default function CaseStudiesPreviewSection({ caseStudies = caseStudiesData }) {
  // Show only 2 or 3 case studies as specified by prompt Section 06
  const featured = caseStudies.slice(0, 3);

  return (
    <section className="section" id="case-studies" style={{ backgroundColor: "var(--bg-surface)", borderBottom: "1px solid var(--borders)", padding: "5rem 0" }}>
      <div className="container">
        <div style={{ maxWidth: "780px", margin: "0 auto 3.5rem", textAlign: "center" }}>
          <span className="eyebrow">SELECTED WORK</span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: "800", color: "var(--primary)", lineHeight: "1.2", marginBottom: "1.25rem" }}>
            Systems in Practice
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--muted)", margin: 0 }}>
            Real technical solutions solving real operational problems. We document architectural decisions, integration hurdles, and measurable business outcomes.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            maxWidth: "1160px",
            margin: "0 auto 3.5rem"
          }}
        >
          {featured.map((study) => (
            <CaseStudyCard key={study.slug || study.title} study={study} />
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link
            to="/case-studies"
            className="btn btn-secondary"
            style={{ fontSize: "0.95rem", padding: "0.85rem 1.75rem" }}
          >
            View all case studies
          </Link>
        </div>
      </div>
    </section>
  );
}
