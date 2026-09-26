import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { finalCtaImg } from "../data/initialData";
import WhatsAppIcon from "../components/common/WhatsAppIcon";

export default function OperationalReviewCTASection({ onOpenAudit }) {
  const highlights = [
    "Direct technical consultation with software engineers in Harare",
    "Grounded assessment of existing software, APIs, and spreadsheet workarounds",
    "Clear recommendation: Build custom, integrate existing, or configure workflows"
  ];

  return (
    <section className="section" style={{ backgroundColor: "#0A1929", color: "var(--white)", position: "relative", overflow: "hidden" }}>
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Split Editorial Layout with Real Commercial Consultation Photography */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
            marginBottom: "3.5rem"
          }}
        >
          <div>
            <span className="eyebrow-dark">PRACTICAL ENGAGEMENT</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.85rem)", fontWeight: "900", color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: "1.15" }}>
              Start with the problem, not the software.
            </h2>
            <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "#CBD5E1", marginBottom: "2rem" }}>
              Tell us what is slowing your business down, where systems are disconnected, or what you need to build. We will help you determine the most practical path forward.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
              {highlights.map((h, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.92rem", color: "#94A3B8", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--blue)", marginTop: "3px", flexShrink: 0 }} />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* 4 Action Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onOpenAudit}
                style={{ fontSize: "0.98rem", padding: "0.85rem 1.65rem" }}
              >
                Schedule an Operational Review <ArrowRight size={16} />
              </button>

              <a
                href="https://wa.me/263780787214?text=Hello%20Corebridge%2C%20I%20would%20like%20to%20discuss%20a%20business%20systems%20or%20software%20requirement."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  fontSize: "0.98rem",
                  padding: "0.85rem 1.4rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "rgba(37, 211, 102, 0.12)",
                  borderColor: "rgba(37, 211, 102, 0.4)",
                  color: "#4ADE80"
                }}
              >
                <WhatsAppIcon size={17} style={{ color: "#25D366" }} />
                <span>WhatsApp Corebridge</span>
              </a>
            </div>
          </div>

          <div style={{ position: "relative", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.15)", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}>
            <img
              src={finalCtaImg}
              alt="Real business consultation and technology review in Harare"
              style={{ width: "100%", height: "380px", objectFit: "cover", display: "block" }}
              loading="lazy"
            />
            <div
              style={{
                padding: "0.85rem 1.25rem",
                backgroundColor: "rgba(10, 25, 41, 0.95)",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                fontSize: "0.82rem",
                color: "#94A3B8"
              }}
            >
              Direct consultation: Speaking directly with engineers who architect and implement your systems
            </div>
          </div>
        </div>

        {/* Direct Channels Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.5rem",
            color: "#94A3B8",
            fontSize: "0.92rem"
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
            <a
              href="tel:+263780787214"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#CBD5E1", textDecoration: "none" }}
            >
              <Phone size={15} style={{ color: "var(--blue)" }} />
              <span>Call Corebridge: +263 780 787 214</span>
            </a>
            <a
              href="mailto:info@corebridge.co.zw"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#CBD5E1", textDecoration: "none" }}
            >
              <Mail size={15} style={{ color: "var(--blue)" }} />
              <span>Email Corebridge: info@corebridge.co.zw</span>
            </a>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <MapPin size={15} style={{ color: "var(--blue)" }} />
            <span>Harare, Zimbabwe</span>
          </div>
        </div>
      </div>
    </section>
  );
}
