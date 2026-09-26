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
        minHeight: "min(92vh, 880px)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        backgroundImage: `linear-gradient(to right, rgba(10, 25, 41, 0.95) 0%, rgba(10, 25, 41, 0.88) 52%, rgba(10, 25, 41, 0.65) 100%), url(${heroLeadImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
        color: "var(--white)",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
      }}
    >
      <div className="container">
        <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <span
            style={{
              fontSize: "0.85rem",
              fontWeight: "800",
              letterSpacing: "0.14em",
              color: "#38BDF8",
              textTransform: "uppercase",
              marginBottom: "1.25rem"
            }}
          >
            COREBRIDGE
          </span>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 4rem)",
              fontWeight: "900",
              color: "var(--white)",
              lineHeight: "1.1",
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem"
            }}
          >
            Smarter Systems.<br />Stronger Businesses.
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: "1.75",
              color: "#CBD5E1",
              fontWeight: "400",
              marginBottom: "2.25rem",
              maxWidth: "640px"
            }}
          >
            Corebridge builds and connects the systems businesses rely on, from custom software and integrations to workflow automation and practical AI.
          </p>

          {/* 4 Pillars Strip with Clean Dark Glass Treatment */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
              gap: "0.75rem",
              width: "100%",
              maxWidth: "640px",
              marginBottom: "2.5rem",
              padding: "0.85rem 1.15rem",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "var(--radius-sm)",
              backdropFilter: "blur(8px)"
            }}
          >
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Icon size={16} style={{ color: "#38BDF8", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.84rem", fontWeight: "600", color: "#FFFFFF" }}>
                    {p.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Action Group */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.25rem" }}>
            <Link
              to="/solutions"
              className="btn btn-primary"
              style={{ fontSize: "1rem", padding: "0.9rem 1.85rem" }}
            >
              Explore Solutions
            </Link>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={onOpenAudit}
              style={{
                fontSize: "1rem",
                padding: "0.9rem 1.75rem",
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                color: "#FFFFFF",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(4px)"
              }}
            >
              Schedule an Operational Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
