import React from "react";

export default function OperationalReviewCTASection({ onOpenAudit }) {
  return (
    <section className="section" style={{ backgroundColor: "#0A1929", color: "var(--white)", padding: "5.5rem 0", textAlign: "center" }}>
      <div className="container" style={{ maxWidth: "780px", margin: "0 auto" }}>
        <span className="eyebrow-dark">START WITH THE PROBLEM</span>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: "800", color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: "1.2" }}>
          Have a technology gap to bridge?
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.75", color: "#94A3B8", marginBottom: "2.5rem" }}>
          Tell us what is not working, what needs to be built or what needs to connect. We will help you understand the technology path forward.
        </p>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={onOpenAudit}
            style={{ fontSize: "1rem", padding: "0.9rem 2rem", fontWeight: "600" }}
          >
            Discuss Your Business
          </button>
        </div>
      </div>
    </section>
  );
}
