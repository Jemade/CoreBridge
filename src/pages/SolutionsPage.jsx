import React from "react";
import { ArrowRight, CheckCircle2, Code2, Link, Cpu, Settings, Headphones } from "lucide-react";
import SEO from "../components/common/SEO";
import { servicesData } from "../data/initialData";

const iconMap = {
  "custom-software": Code2,
  "system-integrations": Link,
  "ai-integrations": Cpu,
  "odoo-zoho-implementation": Settings,
  "it-consultancy": Headphones
};

export default function SolutionsPage({ onOpenAudit }) {
  return (
    <>
      <SEO
        title="Solutions & Services"
        description="Explore Corebridge solutions: Custom software engineering, systems integrations, AI automation, Odoo/Zoho ERP, and IT consultancy."
      />
      
      {/* Hero */}
      <section style={{ background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)", padding: "80px 0 60px", borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-label" style={{ display: "inline-block", marginBottom: "12px" }}>
            SOLUTIONS &amp; CAPABILITIES
          </span>
          <h1 style={{ fontSize: "42px", fontWeight: "800", letterSpacing: "-0.03em", color: "var(--ink)", marginBottom: "20px", lineHeight: "1.15" }}>
            Software, Integrations &amp; Intelligent Systems
          </h1>
          <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: "1.6", marginBottom: "32px" }}>
            We build the technical foundation growing businesses need. Rather than forcing one-size-fits-all software, we tailor architecture to your unique operational realities.
          </p>
          <button className="primary-btn" onClick={onOpenAudit} style={{ margin: "0 auto" }}>
            Discuss Your System Requirements <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Services Detailed List */}
      <section style={{ padding: "80px 0" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
          {servicesData.map((svc, idx) => {
            const Icon = iconMap[svc.id] || Code2;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={svc.id}
                id={svc.slug}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "48px",
                  alignItems: "center",
                  background: "#ffffff",
                  border: "1px solid var(--line)",
                  borderRadius: "16px",
                  padding: "48px 40px",
                  boxShadow: "0 2px 8px rgba(10,25,41,.03)"
                }}
              >
                <div>
                  <div style={{
                    width: "48px",
                    height: "48px",
                    background: "var(--soft)",
                    color: "var(--blue)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px"
                  }}>
                    <Icon size={24} strokeWidth={2.2} />
                  </div>
                  
                  <h2 style={{ fontSize: "26px", fontWeight: "800", color: "var(--ink)", marginBottom: "16px", lineHeight: "1.2", whiteSpace: "pre-line" }}>
                    {svc.title}
                  </h2>

                  <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.6", marginBottom: "24px" }}>
                    {svc.description}
                  </p>

                  <button
                    onClick={onOpenAudit}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "var(--blue)",
                      fontWeight: "600",
                      fontSize: "14px"
                    }}
                  >
                    Request an architectural review for this solution <ArrowRight size={14} />
                  </button>
                </div>

                <div style={{ background: "#f8fafc", borderRadius: "12px", padding: "32px", border: "1px solid #e2e8f0" }}>
                  <h3 style={{ fontSize: "14px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "#64748b", marginBottom: "18px" }}>
                    Key Deliverables &amp; Scope
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                    {svc.deliverables.map((item, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "var(--ink)", lineHeight: "1.5" }}>
                        <CheckCircle2 size={18} style={{ color: "var(--blue)", flexShrink: 0, marginTop: "2px" }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: "var(--ink)", color: "#ffffff", padding: "70px 0", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "680px" }}>
          <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", color: "#38bdf8", textTransform: "uppercase", display: "inline-block", marginBottom: "12px" }}>
            NOT SURE WHERE TO START?
          </span>
          <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "16px", color: "#ffffff" }}>
            Let's Diagnose Your Operational Bottlenecks
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: "1.6", marginBottom: "28px" }}>
            Schedule a confidential 15-minute operational audit with our engineering leads. No sales fluff, just practical technical assessment.
          </p>
          <button className="primary-btn" onClick={onOpenAudit} style={{ margin: "0 auto" }}>
            Get Your Free 15-Minute Audit <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </>
  );
}
