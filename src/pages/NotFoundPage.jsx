import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Compass, Layers, Mail } from "lucide-react";
import SEO from "../components/common/SEO";

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found | Corebridge" />
      <section className="section" style={{ minHeight: "65vh", display: "flex", alignItems: "center" }}>
        <div className="container" style={{ maxWidth: "640px", textAlign: "center" }}>
          <span className="eyebrow" style={{ display: "inline-block", marginBottom: "0.75rem" }}>
            ERROR 404
          </span>
          <h1 style={{ fontSize: "2.75rem", fontWeight: "800", color: "var(--primary)", marginBottom: "1rem" }}>
            Page Not Found
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: "1.65", marginBottom: "2.5rem" }}>
            The page you are looking for does not exist, has been archived, or was moved during our system architecture update.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            <Link to="/" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <Home size={16} /> Return to Homepage
            </Link>
            <Link to="/contact" className="btn btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <Mail size={16} /> Contact Support
            </Link>
          </div>

          <div
            style={{
              borderTop: "1px solid var(--borders)",
              paddingTop: "1.5rem",
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
              fontSize: "0.88rem",
              color: "var(--muted)"
            }}
          >
            <Link to="/solutions" className="btn-link">Explore Capabilities</Link>
            <Link to="/industries" className="btn-link">17 Industry Solutions</Link>
            <Link to="/approach" className="btn-link">6-Step Methodology</Link>
            <Link to="/case-studies" className="btn-link">Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
