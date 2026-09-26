import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

export default function OperationalReviewCTASection({ onOpenAudit }) {
  const highlights = [
    "No generic sales pitches, direct engineering consultation",
    "Grounded assessment of existing software and spreadsheet workarounds",
    "Clear recommendation: Build custom, integrate existing, or configure"
  ];

  return (
    <section className="section" style={{ backgroundColor: "var(--primary)", color: "var(--white)", position: "relative", overflow: "hidden" }}>
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <span className="eyebrow-dark">PRACTICAL NEXT STEPS</span>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: "1.2" }}>
            Ready to eliminate operational friction between your systems?
          </h2>
          <p style={{ fontSize: "1.12rem", lineHeight: "1.7", color: "#94A3B8", marginBottom: "2.5rem" }}>
            Book a complimentary 15-Minute Operational Review. We will look at your existing software landscape, identify duplicate data entry, and discuss whether your business needs an API integration, a custom internal tool, or workflow automation.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem", marginBottom: "3rem" }}>
            {highlights.map((h, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.92rem", color: "#CBD5E1" }}>
                <CheckCircle2 size={16} style={{ color: "var(--blue)", flexShrink: 0 }} />
                <span>{h}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginBottom: "3.5rem" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onOpenAudit}
              style={{ fontSize: "1.05rem", padding: "0.85rem 1.75rem" }}
            >
              Schedule 15-Minute Review <ArrowRight size={17} />
            </button>
            <Link
              to="/contact"
              className="btn btn-secondary"
              style={{ fontSize: "1.05rem", padding: "0.85rem 1.75rem" }}
            >
              Tell Us What Is Broken
            </Link>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              paddingTop: "2rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2.5rem",
              color: "#94A3B8",
              fontSize: "0.92rem"
            }}
          >
            <a
              href="tel:+263780787214"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#CBD5E1", textDecoration: "none" }}
            >
              <Phone size={15} style={{ color: "var(--blue)" }} />
              <span>+263 780 787 214</span>
            </a>
            <a
              href="mailto:info@corebridge.co.zw"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#CBD5E1", textDecoration: "none" }}
            >
              <Mail size={15} style={{ color: "var(--blue)" }} />
              <span>info@corebridge.co.zw</span>
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <MapPin size={15} style={{ color: "var(--blue)" }} />
              <span>Harare, Zimbabwe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
