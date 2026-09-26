import React from "react";

export default function OperationalReviewCTASection({ onOpenAudit }) {
  return (
    <section className="section" style={{ backgroundColor: "#0A1929", color: "var(--white)", padding: "5.5rem 0", textAlign: "center" }}>
      <div className="container" style={{ maxWidth: "780px", margin: "0 auto" }}>
        <span className="eyebrow-dark">PRACTICAL ENGAGEMENT</span>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: "900", color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: "1.2" }}>
          Start with the problem, not the software.
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.75", color: "#94A3B8", marginBottom: "2.5rem" }}>
          Tell us what is slowing your business down, where systems are disconnected, or what you need to build. We will examine your workflows and give you a candid architectural recommendation.
        </p>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={onOpenAudit}
            style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}
          >
            Schedule an Operational Review
          </button>
        </div>
      </div>
    </section>
  );
}
