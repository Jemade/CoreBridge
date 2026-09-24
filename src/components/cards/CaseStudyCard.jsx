import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Cpu } from "lucide-react";

export default function CaseStudyCard({ study }) {
  return (
    <article style={{
      background: "var(--white)",
      border: "1px solid var(--line)",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 1px 3px rgba(10,25,41,.04)",
      display: "flex",
      flexDirection: "column",
      transition: "transform .2s ease, box-shadow .2s ease"
    }}>
      <div style={{ padding: "28px 24px 20px", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
          <span style={{
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--blue)",
            background: "var(--soft)",
            padding: "4px 8px",
            borderRadius: "4px"
          }}>
            {study.industry || "Enterprise"}
          </span>
          {study.is_featured && (
            <span style={{ fontSize: "11px", fontWeight: "600", color: "#16a34a", background: "#f0fdf4", padding: "4px 8px", borderRadius: "4px" }}>
              Featured
            </span>
          )}
        </div>

        <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--ink)", marginBottom: "10px", lineHeight: "1.3" }}>
          {study.title}
        </h3>

        <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.6", marginBottom: "18px" }}>
          {study.summary}
        </p>

        {study.technology && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
            {study.technology.split(",").map((tech, i) => (
              <span key={i} style={{ fontSize: "11px", background: "#f1f5f9", color: "#475569", padding: "3px 8px", borderRadius: "4px", fontFamily: "'DM Mono', monospace" }}>
                {tech.trim()}
              </span>
            ))}
          </div>
        )}
      </div>

      <div style={{
        padding: "16px 24px",
        borderTop: "1px solid var(--line)",
        background: "#fafbfc",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <Link
          to={`/case-studies/${study.slug}`}
          style={{ fontSize: "13px", fontWeight: "600", color: "var(--blue)", display: "inline-flex", alignItems: "center", gap: "6px" }}
        >
          Read full case study <ArrowRight size={13} />
        </Link>
      </div>
    </article>
  );
}
