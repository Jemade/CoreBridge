import React from "react";
import { Link } from "react-router-dom";
import { heroLeadImg } from "../data/initialData";

export default function HeroSection({ onOpenAudit }) {
  return (
    <section
      className="hero-editorial"
      id="home"
      style={{
        minHeight: "min(88vh, 820px)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        backgroundImage: `linear-gradient(to right, rgba(10, 25, 41, 0.92) 0%, rgba(10, 25, 41, 0.82) 48%, rgba(10, 25, 41, 0.45) 100%), url(${heroLeadImg})`,
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
        <div style={{ maxWidth: "700px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)",
              fontWeight: "700",
              color: "#FFFFFF",
              lineHeight: "1.15",
              letterSpacing: "-0.025em",
              marginBottom: "1.5rem"
            }}
          >
            Smarter Systems.<br />Stronger Businesses.
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: "1.7",
              color: "#E2E8F0",
              fontWeight: "400",
              marginBottom: "2.5rem",
              maxWidth: "620px"
            }}
          >
            Corebridge builds, connects and improves the systems businesses rely on, from custom software and integrations to workflow automation and practical AI.
          </p>

          {/* Action Group */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.25rem" }}>
            <Link
              to="/solutions"
              className="btn btn-primary"
              style={{ fontSize: "1rem", padding: "0.9rem 1.85rem", fontWeight: "600" }}
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
                backgroundColor: "transparent",
                color: "#FFFFFF",
                border: "1px solid rgba(255, 255, 255, 0.35)",
                fontWeight: "600"
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

