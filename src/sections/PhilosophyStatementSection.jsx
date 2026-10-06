import React from "react";
import { Link } from "react-router-dom";
import BrandWordmark from "../components/common/BrandWordmark";
import { editorialStatementImg } from "../data/initialData";

export default function PhilosophyStatementSection() {
  return (
    <section className="section" id="philosophy" style={{ backgroundColor: "var(--white)", borderBottom: "1px solid var(--borders)", padding: "5.5rem 0" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "clamp(2.5rem, 5vw, 4.5rem)",
            alignItems: "center",
            maxWidth: "1160px",
            margin: "0 auto"
          }}
        >
          {/* Real Unique Editorial Photograph without overlays */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--borders)",
                boxShadow: "0 10px 30px rgba(10, 25, 41, 0.06)",
                backgroundColor: "var(--bg-surface)"
              }}
            >
              <img
                src={editorialStatementImg}
                alt="Corebridge engineering team collaborating on systems design"
                style={{ width: "100%", height: "clamp(340px, 40vw, 460px)", objectFit: "cover", display: "block" }}
                loading="lazy"
                width="640"
                height="460"
              />
            </div>
          </div>

          {/* Editorial Philosophy Statement */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <span className="eyebrow" style={{ marginBottom: "1rem", display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
              HOW WE THINK
            </span>

            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.2vw, 2.35rem)",
                fontWeight: "800",
                color: "var(--primary)",
                lineHeight: "1.25",
                letterSpacing: "-0.02em",
                margin: "0 0 1.5rem 0"
              }}
            >
              Technology should make the business work better.
            </h2>

            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--muted)", marginBottom: "2rem" }}>
              We judge technology by what changes for the business. Information should move more easily, staff should spend less time repeating work, and the systems behind the operation should be dependable.
            </p>

            <Link
              to="/about"
              className="btn btn-secondary"
              style={{ fontSize: "0.95rem", padding: "0.85rem 1.75rem" }}
            >
              About Corebridge
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
