import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight, CheckCircle2, Cpu, Code2, Network, Workflow, Settings, CreditCard, BarChart3, Compass } from "lucide-react";
import SEO from "../components/common/SEO";
import { servicesData } from "../data/initialData";

export default function SolutionsPage({ onOpenAudit }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <SEO
        title="Solutions & Capabilities | Corebridge"
        description="Explore Corebridge engineering capabilities: Custom software development, systems integration, workflow automation, practical AI, ERP/CRM implementations, and IT consultancy."
      />

      {/* Hero */}
      <section className="section section-dark" style={{ padding: "5rem 0 4rem" }}>
        <div className="container" style={{ maxWidth: "860px", textAlign: "center" }}>
          <span className="eyebrow-dark">ENGINEERING CAPABILITIES</span>
          <h1 style={{ fontSize: "2.75rem", fontWeight: "800", color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: "1.15" }}>
            Software, Integration &amp; Intelligent Systems
          </h1>
          <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "#94A3B8", marginBottom: "2.5rem" }}>
            We build the technical bridges modern businesses need. Rather than forcing one-size-fits-all software templates, we tailor architecture to your unique operating realities, existing tools, and data flows.
          </p>
          <button type="button" className="btn btn-primary" onClick={onOpenAudit} style={{ margin: "0 auto" }}>
            Discuss Your System Requirements <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Services Detailed Breakdown */}
      <section className="section" style={{ backgroundColor: "var(--bg-surface)" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {servicesData.map((svc, idx) => {
            const Icon = svc.icon || Code2;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={svc.slug || svc.id}
                id={svc.slug}
                className={`service-editorial-card ${isReversed ? "reverse" : ""}`}
                style={{
                  backgroundColor: "var(--white)",
                  border: "1px solid var(--borders)",
                  borderRadius: "var(--radius-lg)",
                  padding: "3rem 2.5rem",
                  boxShadow: "var(--shadow-sm)"
                }}
              >
                {/* Left/Main Column: Overview & Scope */}
                <div className="service-copy-side">
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "var(--soft-blue)",
                        color: "var(--blue)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <span style={{ fontSize: "0.85rem", fontWeight: "800", color: "var(--blue)", letterSpacing: "0.08em" }}>
                      CAPABILITY {svc.num}
                    </span>
                  </div>

                  <h2 style={{ fontSize: "1.85rem", fontWeight: "800", color: "var(--primary)", marginBottom: "1rem", lineHeight: "1.25" }}>
                    {svc.title}
                  </h2>

                  <p style={{ fontSize: "1.05rem", lineHeight: "1.65", color: "var(--text-dark)", marginBottom: "1.5rem" }}>
                    {svc.description}
                  </p>

                  {svc.useCases && (
                    <div style={{ marginBottom: "2rem" }}>
                      <h4 style={{ fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--primary)", marginBottom: "0.85rem" }}>
                        Typical Operational Scenarios
                      </h4>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                        {svc.useCases.map((uc, uIdx) => (
                          <li key={uIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.92rem", color: "var(--muted)", lineHeight: "1.5" }}>
                            <span style={{ color: "var(--blue)", fontWeight: "700" }}>&rarr;</span>
                            <span>{uc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={onOpenAudit}
                      style={{ fontSize: "0.9rem" }}
                    >
                      Request Architecture Scope <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Right Column: Deliverables & Tech Specs */}
                <div className="service-specs-side" style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                  <div
                    style={{
                      backgroundColor: "var(--bg-surface)",
                      border: "1px solid var(--borders)",
                      borderRadius: "var(--radius-md)",
                      padding: "2rem"
                    }}
                  >
                    <h3 style={{ fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--primary)", marginBottom: "1.25rem" }}>
                      Key Deliverables &amp; Outputs
                    </h3>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                      {svc.deliverables?.map((item, dIdx) => (
                        <li key={dIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.92rem", color: "var(--text-dark)", lineHeight: "1.45" }}>
                          <CheckCircle2 size={16} style={{ color: "var(--blue)", flexShrink: 0, marginTop: "2px" }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {svc.technologies && (
                    <div
                      style={{
                        backgroundColor: "var(--bg-surface)",
                        border: "1px solid var(--borders)",
                        borderRadius: "var(--radius-md)",
                        padding: "1.5rem 2rem"
                      }}
                    >
                      <h4 style={{ fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted)", marginBottom: "0.75rem" }}>
                        Technology Stack
                      </h4>
                      <div className="specs-tag-list">
                        {svc.technologies.map((t, tIdx) => (
                          <span key={tIdx} className="spec-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section-dark" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="eyebrow-dark">SYSTEM EVALUATION</span>
          <h2 style={{ fontSize: "2.25rem", fontWeight: "800", color: "var(--white)", marginBottom: "1.25rem" }}>
            Unsure which engineering path fits your business?
          </h2>
          <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: "1.65", marginBottom: "2.5rem" }}>
            Schedule a complimentary 15-Minute Operational Review. We will look at your software stack and recommend whether to build, integrate, or configure.
          </p>
          <button type="button" className="btn btn-primary" onClick={onOpenAudit} style={{ margin: "0 auto" }}>
            Book 15-Minute Operational Review <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </>
  );
}
