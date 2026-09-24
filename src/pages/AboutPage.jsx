import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Target, Users, MapPin, Cpu, Code2, Link as LinkIcon } from "lucide-react";
import SEO from "../components/common/SEO";
import corebridgeLogo from "../assets/corebridge-logo.png";

export default function AboutPage({ onOpenAudit }) {
  return (
    <>
      <SEO
        title="About Corebridge"
        description="Corebridge is a software technology consultancy based in Harare, Zimbabwe. We localize global software and architect resilient digital systems for enterprise."
      />

      {/* Hero */}
      <section style={{ background: "var(--dark)", color: "var(--white)", padding: "80px 0 60px" }}>
        <div className="container" style={{ maxWidth: "840px", textAlign: "center" }}>
          <span className="section-label light" style={{ display: "inline-block", marginBottom: "12px" }}>
            ENGINEERING PHILOSOPHY &amp; MISSION
          </span>
          <h1 style={{ fontSize: "42px", fontWeight: "800", letterSpacing: "-0.03em", color: "var(--white)", marginBottom: "20px", lineHeight: "1.15" }}>
            Smarter Systems. Stronger Businesses.
          </h1>
          <p style={{ fontSize: "17px", color: "#94a3b8", lineHeight: "1.6", marginBottom: "32px" }}>
            Corebridge is a software technology consultancy. We build tailored software, integrate disparate tools, configure enterprise ERPs, and implement pragmatic AI workflows for growing businesses across Zimbabwe and Southern Africa.
          </p>
          <button className="primary-btn" onClick={onOpenAudit} style={{ margin: "0 auto" }}>
            Speak With Our Engineering Leads <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Who We Are & What We Believe */}
      <section style={{ padding: "80px 0", background: "#ffffff" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "56px", alignItems: "center" }}>
          <div>
            <span className="section-label" style={{ display: "inline-block", marginBottom: "12px" }}>
              NOT A GENERIC AI AGENCY
            </span>
            <h2 style={{ fontSize: "30px", fontWeight: "800", color: "var(--ink)", marginBottom: "20px", lineHeight: "1.2" }}>
              Software Technology Consultancy Built for Operational Reality
            </h2>
            <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.7", marginBottom: "16px" }}>
              The modern business landscape is flooded with flashy prototypes that collapse under production workloads. Corebridge was founded on an opposing principle: <strong>engineering rigor first.</strong>
            </p>
            <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.7", marginBottom: "24px" }}>
              We don't sell speculative technology for the sake of buzzwords. Whether implementing an Odoo manufacturing flow, syncing Zoho CRM with local payment rails, or deploying an automated document-processing AI, our focus is measurable operational uptime and financial return.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--blue)", fontWeight: "600", fontSize: "14px" }}>
              <MapPin size={18} />
              <span>Headquartered in Harare, Zimbabwe · Serving regional enterprises</span>
            </div>
          </div>

          <div style={{ background: "#f8fafc", border: "1px solid var(--line)", borderRadius: "16px", padding: "40px 32px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink)", marginBottom: "20px" }}>
              Our Core Principles
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", gap: "14px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "var(--soft)", color: "var(--blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: "15px", fontWeight: "700", color: "var(--ink)", marginBottom: "4px" }}>Uncompromising Reliability</h4>
                  <p style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.5" }}>Fault-tolerant API integrations, automated audit logging, and data persistence guarantees.</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "14px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "var(--soft)", color: "var(--blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Target size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: "15px", fontWeight: "700", color: "var(--ink)", marginBottom: "4px" }}>Local System Grounding</h4>
                  <p style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.5" }}>Deep familiarity with regional business constraints, multi-currency accounting, and connectivity challenges.</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "14px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "var(--soft)", color: "var(--blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Users size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: "15px", fontWeight: "700", color: "var(--ink)", marginBottom: "4px" }}>Direct Engineering Access</h4>
                  <p style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.5" }}>No layers of commission-driven salespeople. You consult directly with software engineers who build your systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section style={{ background: "#0a1929", color: "#ffffff", padding: "70px 0", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "680px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "16px", color: "#ffffff" }}>
            Ready to Upgrade Your Company's Systems?
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: "1.6", marginBottom: "28px" }}>
            Book a 15-minute operational audit. Let us analyze where manual friction is slowing down your team.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            <button className="primary-btn" onClick={onOpenAudit}>
              Get Free 15-Minute Audit <ArrowRight size={16} />
            </button>
            <Link to="/contact" className="ghost-btn" style={{ borderColor: "#334155", color: "#ffffff" }}>
              Direct Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
