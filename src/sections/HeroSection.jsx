import React from "react";
import { Link } from "react-router-dom";
import { heroLeadImg } from "../data/initialData";

export default function HeroSection({ onOpenAudit }) {
  return (
    <section
      className="hero-editorial"
      id="home"
      style={{
        minHeight: "min(88vh, 840px)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        backgroundImage: `linear-gradient(to right, rgba(10, 25, 41, 0.94) 0%, rgba(10, 25, 41, 0.85) 50%, rgba(10, 25, 41, 0.48) 100%), url(${heroLeadImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
        color: "var(--white)",
        paddingTop: "6.5rem",
        paddingBottom: "6.5rem",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
      }}
    >
      <div className="container">
        <div style={{ maxWidth: "740px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          {/* Subtle Positioning Line (Restrained, no bright cyan) */}
          <span
            style={{
              fontSize: "0.82rem",
              fontWeight: "700",
              letterSpacing: "0.12em",
              color: "#94A3B8",
              textTransform: "uppercase",
              marginBottom: "1.25rem"
            }}
          >
            END-TO-END TECHNOLOGY FOR BUSINESS
          </span>

          {/* Primary Headline */}
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

          {/* Primary Supporting Text */}
          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: "1.7",
              color: "#E2E8F0",
              fontWeight: "400",
              marginBottom: "1rem",
              maxWidth: "640px"
            }}
          >
            Corebridge builds, connects and improves the systems businesses rely on, from custom software and integrations to workflow automation and practical AI.
          </p>

          {/* Secondary Positioning Statement */}
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.65",
              color: "#94A3B8",
              fontWeight: "400",
              marginBottom: "1.75rem",
              maxWidth: "620px"
            }}
          >
            From building new systems to connecting the ones you already use, we help bridge the gap between business operations and technology.
          </p>

          {/* Subtle Visual Bridge Concept: Build | Connect | Improve */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              marginBottom: "2.5rem",
              fontSize: "0.85rem",
              fontWeight: "600",
              color: "#CBD5E1",
              letterSpacing: "0.06em",
              textTransform: "uppercase"
            }}
          >
            <span>Build</span>
            <span style={{ color: "rgba(255, 255, 255, 0.25)" }}>|</span>
            <span>Connect</span>
            <span style={{ color: "rgba(255, 255, 255, 0.25)" }}>|</span>
            <span>Improve</span>
          </div>

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


