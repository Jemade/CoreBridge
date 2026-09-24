import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service, onSelect }) {
  const Icon = service.icon;

  return (
    <article className="service-card">
      <div className="service-icon">
        {Icon ? <Icon size={22} strokeWidth={2.2} /> : null}
      </div>
      <h3 style={{ whiteSpace: "pre-line" }}>{service.title || service.name}</h3>
      <p>{service.shortDescription || service.text}</p>
      {service.deliverables && (
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", color: "#64748b" }}>
          {service.deliverables.slice(0, 2).map((item, idx) => (
            <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
              <span style={{ color: "var(--blue)", fontWeight: "bold" }}>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
