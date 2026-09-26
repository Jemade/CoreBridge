import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Network, Workflow, Cpu } from "lucide-react";
import { heroLeadImg } from "../data/initialData";
import WhatsAppIcon from "../components/common/WhatsAppIcon";

export default function HeroSection({ onOpenAudit }) {
  const pillars = [
    { title: "Custom software", icon: Code2 },
    { title: "Systems integration", icon: Network },
    { title: "Workflow automation", icon: Workflow },
    { title: "Practical AI", icon: Cpu }
  ];

  return (
    <section
      className="hero-editorial"
      id="home"
      style={{
        minHeight: "min(90vh, 880px)",
        display: "flex",
        alignItems: "center",
        backgroundColor: "var(--white)",
        borderBottom: "1px solid var(--borders)",
        paddingTop: "3.5rem",
        paddingBottom: "3.5rem",
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
                lineHeight: "1.65",
                color: "var(--text-dark)",
                fontWeight: "500",
                marginBottom: "1rem"
              }}
            >
              Corebridge builds custom software, connects existing systems and automates the workflows that keep businesses moving.
            </p>

            <p
              style={{
                fontSize: "0.98rem",
                lineHeight: "1.65",
                color: "var(--muted)",
                marginBottom: "2rem"
              }}
            >
              From ERP and POS integration to business automation and practical AI, we help organisations close the gaps between the systems they already depend on.
            </p>

            {/* 4 Pillars Strip */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "0.75rem",
                width: "100%",
                marginBottom: "2.25rem",
                padding: "1rem 1.25rem",
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--borders)",
                borderRadius: "var(--radius-sm)"
              }}
            >
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Icon size={15} style={{ color: "var(--blue)", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.84rem", fontWeight: "600", color: "var(--primary)" }}>
                      {p.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Action Group */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onOpenAudit}
                style={{ fontSize: "1rem", padding: "0.85rem 1.75rem" }}
              >
                Schedule an Operational Review <ArrowRight size={16} />
              </button>

              <Link
                to="/solutions"
                className="btn btn-secondary"
                style={{ fontSize: "1rem", padding: "0.85rem 1.5rem" }}
              >
                Explore Capabilities
              </Link>
            </div>

            {/* Direct WhatsApp Text Link */}
            <div>
              <a
                href="https://wa.me/263780787214?text=Hello%20Corebridge%2C%20I%20would%20like%20to%20discuss%20a%20business%20systems%20or%20software%20requirement."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#16A34A",
                  fontSize: "0.92rem",
                  fontWeight: "600",
                  textDecoration: "none"
                }}
              >
                <WhatsAppIcon size={17} style={{ color: "#25D366" }} />
                <span>WhatsApp Corebridge (+263 780 787 214)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Photograph Panel */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--borders)",
                boxShadow: "0 10px 30px rgba(10, 25, 41, 0.08)",
                backgroundColor: "var(--bg-surface)"
              }}
            >
              <img
                src={heroLeadImg}
                alt="Real commercial business operations and software engineering in Southern Africa"
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
              <div
                style={{
                  padding: "0.85rem 1.25rem",
                  backgroundColor: "var(--white)",
                  borderTop: "1px solid var(--borders)",
                  fontSize: "0.82rem",
                  color: "var(--muted)",
                  lineHeight: "1.4"
                }}
              >
                Operational reality: Technology that connects real business operations in Southern Africa
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
