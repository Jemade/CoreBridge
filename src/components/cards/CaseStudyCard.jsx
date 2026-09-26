import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, CheckCircle2 } from "lucide-react";

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
    <article
      className="case-study-card"
      style={{
        backgroundColor: "var(--white)",
        border: "1px solid var(--borders)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Real Photographic Asset Frame with Honest Caption */}
      <div style={{ height: "220px", overflow: "hidden", position: "relative", backgroundColor: "#0A1929" }}>
        <img
          src={study.image}
          alt={`Representative context for ${study.title}`}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          loading="lazy"
          width="400"
          height="220"
        />
        <div style={{ position: "absolute", top: "1rem", left: "1rem" }}>
          <span className={getBadgeClass(study.badge)}>{study.badge}</span>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "0.5rem 1rem",
            backgroundColor: "rgba(10, 25, 41, 0.85)",
            color: "#94A3B8",
            fontSize: "0.72rem",
            fontStyle: "italic"
          }}
        >
          Representative operational context
        </div>
      </div>

      {/* Body Content */}
      <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <span style={{ fontSize: "0.76rem", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--blue)", marginBottom: "0.4rem" }}>
          {study.category}
        </span>

        <h3 style={{ fontSize: "1.25rem", fontWeight: "800", marginBottom: "1rem", color: "var(--primary)", lineHeight: "1.3" }}>
          {study.title}
        </h3>

        {/* The Problem */}
        <div style={{ marginBottom: "1rem" }}>
          <span style={{ fontSize: "0.74rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted)", display: "block", marginBottom: "0.25rem" }}>
            The Operational Challenge
          </span>
          <p style={{ fontSize: "0.9rem", color: "var(--text-dark)", lineHeight: "1.55", margin: 0 }}>
            {study.problem}
          </p>
        </div>

        {/* Systems Connected */}
        {study.systemsInvolved && (
          <div style={{ marginBottom: "1rem" }}>
            <span style={{ fontSize: "0.74rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted)", display: "block", marginBottom: "0.4rem" }}>
              Systems Involved
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
              {study.systemsInvolved.map((sys, sIdx) => (
                <span key={sIdx} className="spec-tag" style={{ fontSize: "0.74rem", padding: "0.2rem 0.5rem" }}>
                  {sys}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Verified Outcome */}
        {study.outcome && (
          <div style={{ marginBottom: "1.5rem", borderTop: "1px solid var(--borders)", paddingTop: "0.85rem" }}>
            <span style={{ fontSize: "0.74rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "#16A34A", display: "flex", alignItems: "center", gap: "0.3rem", marginBottom: "0.25rem" }}>
              <CheckCircle2 size={13} /> Verified Outcome
            </span>
            <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: "1.5", margin: 0 }}>
              {study.outcome}
            </p>
          </div>
        )}

        <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid var(--borders)" }}>
          <Link to={`/case-studies/${study.slug}`} className="btn-link" style={{ fontSize: "0.88rem" }}>
            Read architectural breakdown <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
