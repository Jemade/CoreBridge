import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard({ service, onOpenAudit }) {
  const Icon = service.icon;

  return (
    <div className="service-specs-box" style={{ background: "var(--white)", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "var(--radius-sm)",
            backgroundColor: "var(--soft-blue)",
            color: "var(--blue)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {Icon && <Icon size={22} />}
        </div>
        <span style={{ fontSize: "0.82rem", fontWeight: "700", color: "var(--muted)", letterSpacing: "0.06em" }}>
          {service.num}
        </span>
      </div>

      <h3 style={{ fontSize: "1.25rem", marginBottom: "0.65rem", color: "var(--primary)" }}>
        {service.title}
      </h3>

      <p style={{ fontSize: "0.94rem", lineHeight: "1.6", color: "var(--muted)", marginBottom: "1.5rem", flex: 1 }}>
        {service.shortDescription}
      </p>

      {service.deliverables && (
        <div style={{ marginBottom: "1.75rem", borderTop: "1px solid var(--borders-light)", paddingTop: "1rem" }}>
          <span style={{ fontSize: "0.76rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--primary)", display: "block", marginBottom: "0.65rem" }}>
            Capabilities
          </span>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
            {service.deliverables.slice(0, 3).map((item, idx) => (
              <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.88rem", color: "var(--muted)", lineHeight: "1.45" }}>
                <span style={{ color: "var(--blue)", fontWeight: "700" }}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
        <Link to={`/solutions#${service.slug}`} className="btn-link" style={{ fontSize: "0.9rem" }}>
          Read details
        </Link>
        <button
          type="button"
          onClick={onOpenAudit}
          style={{ fontSize: "0.84rem", fontWeight: "600", color: "var(--muted)", padding: "0.25rem 0.5rem" }}
        >
          Review scope
        </button>
      </div>
    </div>
  );
}
