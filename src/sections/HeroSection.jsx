import React from "react";
import { Link } from "react-router-dom";
import { Code2, Network, Workflow, Cpu } from "lucide-react";
import { heroLeadImg } from "../data/initialData";

export default function HeroSection({ onOpenAudit }) {
  const pillars = [
    { title: "Custom Software", icon: Code2 },
    { title: "Systems Integration", icon: Network },
    { title: "Workflow Automation", icon: Workflow },
    { title: "Practical AI", icon: Cpu }
  ];

  return (
    <section
      className="hero-editorial"
      id="home"
      style={{
        minHeight: "min(88vh, 840px)",
        display: "flex",
        alignItems: "center",
        backgroundColor: "var(--white)",
        borderBottom: "1px solid var(--borders)",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        position: "relative"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "clamp(2.5rem, 5vw, 4.5rem)",
            alignItems: "center"
          }}
        >
          {/* Left Column: Brand & Editorial Copy */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", maxWidth: "580px" }}>
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: "800",
                letterSpacing: "0.12em",
                color: "var(--blue)",
                textTransform: "uppercase",
                marginBottom: "1rem"
              }}
            >
              COREBRIDGE
            </span>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.6rem)",
                fontWeight: "900",
                color: "var(--primary)",
                lineHeight: "1.12",
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem"
              }}
            >
              Smarter Systems.<br />Stronger Businesses.
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: "1.7",
                color: "var(--text-dark)",
                fontWeight: "400",
                marginBottom: "2rem"
              }}
            >
              Corebridge builds and connects the systems businesses rely on, from custom software and integrations to workflow automation and practical AI.
            </p>

            {/* 4 Pillars Strip */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "0.75rem",
                width: "100%",
                marginBottom: "2.25rem",
                padding: "0.85rem 1.15rem",
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--borders)",
                borderRadius: "var(--radius-sm)"
              }}
            >
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Icon size={16} style={{ color: "var(--blue)", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.84rem", fontWeight: "600", color: "var(--primary)" }}>
                      {p.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Action Group */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}>
              <Link
                to="/solutions"
                className="btn btn-primary"
                style={{ fontSize: "0.95rem", padding: "0.85rem 1.75rem" }}
              >
                Explore Solutions
              </Link>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={onOpenAudit}
                style={{ fontSize: "0.95rem", padding: "0.85rem 1.6rem" }}
              >
                Schedule an Operational Review
              </button>
            </div>
          </div>

          {/* Right Column: Clean Editorial Photograph (No text overlays) */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--borders)",
                boxShadow: "0 12px 32px rgba(10, 25, 41, 0.08)",
                backgroundColor: "var(--bg-surface)"
              }}
            >
              <img
                src={heroLeadImg}
                alt="Commercial business operations and software engineering"
                style={{
                  width: "100%",
                  height: "clamp(380px, 48vw, 540px)",
                  objectFit: "cover",
                  display: "block"
                }}
                fetchpriority="high"
                width="720"
                height="540"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
