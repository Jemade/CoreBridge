import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { heroOperationsImg } from "../data/initialData";

export default function HeroSection({ onOpenAudit }) {
  return (
    <section className="hero-editorial" id="home">
      <div className="container hero-grid-layout">
        {/* Left Column: Copy & Actions */}
        <div className="hero-copy-block">
          <span className="eyebrow">
            BUSINESS SYSTEMS / SOFTWARE / INTEGRATION
          </span>

          <h1 style={{ marginBottom: "1.25rem" }}>
            We build and connect the systems that keep businesses moving.
          </h1>

          <p className="lead-text" style={{ marginBottom: "2rem" }}>
            Corebridge helps businesses close operational gaps through custom software, systems integration, automation, and practical AI. We work with the technology you already have, improve what is not working, and build what is missing.
          </p>

          <div className="hero-cta-group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onOpenAudit}
              aria-label="Talk to Corebridge for a 15-Minute Operational Review"
            >
              Talk to Corebridge <ArrowRight size={16} />
            </button>

            <Link
              to="/solutions"
              className="btn btn-secondary"
            >
              Explore our capabilities
            </Link>
          </div>

          {/* Value Proof Strip */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginTop: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--muted)", fontWeight: "500" }}>
              <CheckCircle2 size={16} style={{ color: "var(--blue)" }} />
              <span>Bridge, Don't Reinvent</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--muted)", fontWeight: "500" }}>
              <CheckCircle2 size={16} style={{ color: "var(--blue)" }} />
              <span>ERP &amp; POS Integration</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--muted)", fontWeight: "500" }}>
              <CheckCircle2 size={16} style={{ color: "var(--blue)" }} />
              <span>Harare Engineering Office</span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Photograph Composition with Connected System Labels */}
        <div className="hero-visual-frame" aria-hidden="true">
          <img
            src={heroOperationsImg}
            alt="Business team coordinating operations and enterprise systems in Africa"
            className="hero-editorial-img"
            width="600"
            height="460"
            fetchpriority="high"
          />

          {/* Restrained System Architecture Overlay */}
          <div className="hero-overlay-tags">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="hero-tag-chip">
                <span className="hero-tag-dot" /> ERP &middot; ACCOUNTING
              </span>
              <span className="hero-tag-chip">
                <span className="hero-tag-dot" /> POS &middot; PAYMENTS
              </span>
            </div>

            <div className="hero-overlay-bottom">
              <span className="hero-tag-chip">
                <span className="hero-tag-dot" /> INVENTORY &middot; LOGISTICS
              </span>
              <span className="hero-tag-chip">
                <span className="hero-tag-dot" /> PRAGMATIC AI
              </span>
              <span className="hero-tag-chip">
                <span className="hero-tag-dot" /> REPORTING &middot; APIS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
