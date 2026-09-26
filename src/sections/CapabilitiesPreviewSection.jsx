import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { servicesData, engineeringFocusImg } from "../data/initialData";

export default function CapabilitiesPreviewSection({ services = servicesData, onOpenAudit }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeSvc = services[selectedIdx] || services[0];
  const ActiveIcon = activeSvc.icon;

  return (
    <section className="section" id="capabilities" style={{ backgroundColor: "var(--white)", borderBottom: "1px solid var(--borders)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "1.5rem", marginBottom: "3rem" }}>
          <div style={{ maxWidth: "760px" }}>
            <span className="eyebrow">OUR CORE CAPABILITIES</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: "800", color: "var(--primary)", lineHeight: "1.2", marginBottom: "1rem" }}>
              Engineered software and systems integration
            </h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.65", color: "var(--muted)", margin: 0 }}>
              From bespoke line-of-business applications to ERP middleware and automated document extraction, explore the 8 engineering capabilities we deliver.
            </p>
          </div>
          <div>
            <Link to="/solutions" className="btn btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              Detailed Solutions Directory <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Editorial Interactive Capabilities Master-Detail Split */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2.5rem",
            alignItems: "stretch"
          }}
        >
          {/* Left Column: 8 Scannable Capability Rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {services.map((s, idx) => {
              const Icon = s.icon;
              const isSelected = idx === selectedIdx;
              return (
                <div
                  key={s.slug || s.id}
                  onClick={() => setSelectedIdx(idx)}
                  onMouseEnter={() => setSelectedIdx(idx)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setSelectedIdx(idx);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.1rem 1.25rem",
                    borderRadius: "var(--radius-sm)",
                    border: `1px solid ${isSelected ? "var(--blue)" : "var(--borders)"}`,
                    backgroundColor: isSelected ? "var(--soft-blue)" : "var(--bg-surface)",
                    cursor: "pointer",
                    transition: "all var(--transition-fast)"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                    <span style={{ fontSize: "0.82rem", fontWeight: "800", color: isSelected ? "var(--blue)" : "var(--muted)", fontFamily: "monospace" }}>
                      0{idx + 1}
                    </span>
                    <div style={{ width: "32px", height: "32px", borderRadius: "var(--radius-sm)", backgroundColor: isSelected ? "var(--white)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", color: isSelected ? "var(--blue)" : "var(--muted)" }}>
                      {Icon && <Icon size={18} />}
                    </div>
                    <span style={{ fontSize: "0.95rem", fontWeight: isSelected ? "700" : "600", color: isSelected ? "var(--primary)" : "var(--text-dark)" }}>
                      {s.title}
                    </span>
                  </div>
                  <ArrowRight size={15} style={{ color: isSelected ? "var(--blue)" : "var(--muted)", transform: isSelected ? "translateX(3px)" : "none", transition: "transform 0.15s ease" }} />
                </div>
              );
            })}
          </div>

          {/* Right Column: In-Depth Selected Capability Spotlight */}
          <div
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--borders)",
              borderRadius: "var(--radius-md)",
              padding: "2.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "var(--white)",
                      border: "1px solid var(--borders)",
                      color: "var(--blue)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    {ActiveIcon && <ActiveIcon size={22} />}
                  </div>
                  <span style={{ fontSize: "0.82rem", fontWeight: "800", color: "var(--blue)", letterSpacing: "0.08em" }}>
                    CAPABILITY {activeSvc.num || `0${selectedIdx + 1}`}
                  </span>
                </div>
                <Link to={`/solutions#${activeSvc.slug}`} className="btn-link" style={{ fontSize: "0.84rem" }}>
                  Full Solution Page &rarr;
                </Link>
              </div>

              <h3 style={{ fontSize: "1.65rem", fontWeight: "800", color: "var(--primary)", marginBottom: "1rem" }}>
                {activeSvc.title}
              </h3>

              {/* What It Means */}
              <div style={{ marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "0.76rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted)", display: "block", marginBottom: "0.35rem" }}>
                  What It Means
                </span>
                <p style={{ fontSize: "0.95rem", lineHeight: "1.65", color: "var(--text-dark)", margin: 0 }}>
                  {activeSvc.description || activeSvc.shortDescription}
                </p>
              </div>

              {/* What Corebridge Implements */}
              {activeSvc.deliverables && (
                <div style={{ marginBottom: "1.5rem", borderTop: "1px solid var(--borders)", paddingTop: "1rem" }}>
                  <span style={{ fontSize: "0.76rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted)", display: "block", marginBottom: "0.6rem" }}>
                    What Corebridge Implements
                  </span>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {activeSvc.deliverables.slice(0, 4).map((del, dIdx) => (
                      <li key={dIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.88rem", color: "var(--text-dark)", lineHeight: "1.45" }}>
                        <CheckCircle2 size={15} style={{ color: "var(--blue)", marginTop: "2px", flexShrink: 0 }} />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Example Technologies */}
              {activeSvc.technologies && (
                <div style={{ borderTop: "1px solid var(--borders)", paddingTop: "1rem", marginBottom: "1.75rem" }}>
                  <span style={{ fontSize: "0.74rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted)", display: "block", marginBottom: "0.5rem" }}>
                    Relevant Technology
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                    {activeSvc.technologies.map((t, tIdx) => (
                      <span key={tIdx} className="spec-tag" style={{ fontSize: "0.76rem" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onOpenAudit}
                style={{ fontSize: "0.9rem", padding: "0.75rem 1.5rem" }}
              >
                Schedule Review for {activeSvc.title} <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
