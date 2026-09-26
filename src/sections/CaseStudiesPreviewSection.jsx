import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CaseStudyCard from "../components/cards/CaseStudyCard";
import { caseStudiesData } from "../data/initialData";

export default function CaseStudiesPreviewSection({ caseStudies = caseStudiesData }) {
  return (
    <section className="section section-surface" id="case-studies">
      <div className="container">
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "1.5rem", marginBottom: "3rem" }}>
          <div style={{ maxWidth: "720px" }}>
            <span className="eyebrow">GROUNDED WORK</span>
            <h2 style={{ marginBottom: "1rem" }}>
              How we solve real operational friction
            </h2>
            <p className="lead-text" style={{ margin: 0 }}>
              Transparent case studies showing the business problem, integration architecture, technical approach, and operational outcomes without inflated metrics.
            </p>
          </div>
          <div>
            <Link to="/case-studies" className="btn btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              All Case Studies <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug || study.title} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
