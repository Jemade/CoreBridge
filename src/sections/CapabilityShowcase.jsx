import React from "react";
import { ArrowRight, ShieldCheck, Cpu, Database, CheckCircle2, Lock, Zap } from "lucide-react";
import { capabilitiesData } from "../data/initialData";

const techStack = [
  "Python / FastAPI",
  "React",
  "PostgreSQL",
  "Odoo ERP",
  "Zoho One",
  "Redis",
  "Docker",
  "WhatsApp Cloud API"
];

export default function CapabilityShowcase({ onOpenAudit }) {
  return (
    <section className="section" style={{ background: "#f8fafc", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "80px 0" }}>
      <div className="container">
        
        {/* Intro */}
        <div className="section-intro-3" style={{ marginBottom: "48px" }}>
          <div>
            <span className="section-label">DELIVERY ASSURANCE &amp; CAPABILITIES</span>
            <h2>Engineering Standards You Can Rely On</h2>
          </div>
          <p>
            We don't deliver black-box prototypes or unmaintained scripts. We build robust, production-grade business systems with transparent architecture and direct local accountability.
          </p>
          <button className="view-all" onClick={onOpenAudit}>
            Book an Audit <ArrowRight size={12} />
          </button>
        </div>

        {/* 3 Pillars */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          marginBottom: "0"
        }}>
          {capabilitiesData.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div
                key={i}
                style={{
                  background: "var(--white)",
                  padding: "32px 28px",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 1px 3px rgba(10,25,41,.03)"
                }}
              >
                <div style={{
                  width: "44px",
                  height: "44px",
                  background: "var(--soft)",
                  color: "var(--blue)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px"
                }}>
                  <Icon size={22} strokeWidth={2.2} />
                </div>
                <h3 style={{ fontSize: "17px", fontWeight: "700", color: "var(--ink)", marginBottom: "10px" }}>
                  {cap.title}
                </h3>
                <p style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.6" }}>
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
