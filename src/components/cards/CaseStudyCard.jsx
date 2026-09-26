import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CaseStudyCard({ study }) {
  const getBadgeClass = (badge) => {
    switch (badge?.toLowerCase()) {
      case "prototype":
        return "case-badge case-badge-prototype";
      case "internal build":
        return "case-badge case-badge-internal";
      case "research":
        return "case-badge case-badge-research";
      default:
        return "case-badge";
    }
  };

  return (
    <article className="case-study-card">
      <div style={{ height: "200px", overflow: "hidden", position: "relative", backgroundColor: "var(--primary)" }}>
        <img
          src={study.image}
          alt={`Engineering implementation for ${study.title}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          loading="lazy"
          width="400"
          height="200"
        />
        <div style={{ position: "absolute", top: "1rem", left: "1rem" }}>
          <span className={getBadgeClass(study.badge)}>{study.badge}</span>
        </div>
      </div>

      <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <span style={{ fontSize: "0.78rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--blue)", marginBottom: "0.4rem" }}>
          {study.category}
        </span>
        <h3 style={{ fontSize: "1.2rem", marginBottom: "0.85rem", color: "var(--primary)", lineHeight: "1.3" }}>
          {study.title}
        </h3>
        <p style={{ fontSize: "0.92rem", color: "var(--muted)", lineHeight: "1.6", marginBottom: "1.25rem", flex: 1 }}>
          {study.problem}
        </p>

        <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid var(--borders-light)" }}>
          <Link to={`/case-studies/${study.slug}`} className="btn-link">
            Read engineering overview <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
