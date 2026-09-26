import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { buildIntegrateImprove } from "../data/initialData";

export default function BuildIntegrateImproveSection({ onOpenAudit }) {
  return (
    <section className="section section-surface" id="approach-overview">
      <div className="container">
        <div className="section-header centered">
          <span className="eyebrow">ENGINEERING MATURITY</span>
          <h2 style={{ marginBottom: "1.25rem" }}>
            Build vs. Integrate vs. Improve
          </h2>
          <p className="lead-text" style={{ margin: "0 auto" }}>
            We do not assume that every business problem requires building new software from scratch. We determine whether the most cost-effective and resilient answer is building, connecting, or improving.
          </p>
        </div>

        <div className="three-pillars-grid">
          {buildIntegrateImprove.map((item, idx) => (
            <div key={idx} className="pillar-col">
              <div>
                <div className="pillar-header">
                  <span className="pillar-badge">{item.pillar}</span>
                  <h3>{item.tagline}</h3>
                  <p>{item.description}</p>
                </div>

                <div style={{ borderTop: "1px solid var(--borders-light)", paddingTop: "1.25rem" }}>
                  <span style={{ fontSize: "0.78rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--primary)", display: "block", marginBottom: "0.85rem" }}>
                    Typical Scenarios
                  </span>
                  <ul className="pillar-list">
                    {item.examples.map((ex, i) => (
                      <li key={i} className="pillar-list-item">
                        <CheckCircle2 size={16} className="pillar-check-icon" />
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ marginTop: "2rem", paddingTop: "1.25rem", borderTop: "1px solid var(--borders)" }}>
                <button
                  type="button"
                  onClick={onOpenAudit}
                  className="btn-link"
                  style={{ width: "100%", justifyContent: "space-between" }}
                >
                  <span>Evaluate your {item.pillar.toLowerCase()} requirements</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
