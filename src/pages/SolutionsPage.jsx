import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../components/common/SEO";
import { servicesData, solutionsHeroImg } from "../data/initialData";
import SystemsMap from "../components/common/SystemsMap";

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

      {/* Hero with Unique Solutions Photography */}
      <section className="section section-dark" style={{ padding: "4.5rem 0 4rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3.5rem", alignItems: "center" }}>
            <div>
              <span className="eyebrow-dark">END-TO-END TECHNOLOGY</span>
              <h1 style={{ fontSize: "2.75rem", fontWeight: "800", color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: "1.15" }}>
                Technology built around how your business works
              </h1>
              <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "#94A3B8", marginBottom: "2rem" }}>
                From new software to connected systems, automation and practical AI, we help businesses solve operational problems with technology that fits the way they actually work.
              </p>
              <div>
                <button type="button" className="btn btn-primary" onClick={onOpenAudit}>
                  Discuss Your System Requirements
                </button>
              </div>
            </div>

            {/* Clean Hero Photography without overlays */}
            <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.15)", boxShadow: "var(--shadow-lg)" }}>
              <img
                src={solutionsHeroImg}
                alt="Corebridge systems architecture and software engineering"
                style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
                width="720"
                height="360"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Systems Architecture & Interoperability Centerpiece */}
      <SystemsMap onOpenAudit={onOpenAudit} />

      {/* Services Detailed Breakdown */}
      <section className="section" style={{ backgroundColor: "var(--bg-surface)", padding: "5rem 0" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <div style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow">WHAT WE CAN HELP WITH</span>
            <h2 style={{ fontSize: "2.25rem", fontWeight: "800", color: "var(--primary)", lineHeight: "1.2", marginBottom: "1rem" }}>
              From the problem to a working solution
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--muted)", margin: 0 }}>
              Explore the areas where Corebridge can build, connect, improve or implement the technology your operations need.
            </p>
          </div>

          {servicesData.map((svc, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={svc.slug || svc.id}
                id={svc.slug}
                className={`service-editorial-card ${isReversed ? "reverse" : ""}`}
                style={{
                  backgroundColor: "var(--white)",
                  border: "1px solid var(--borders)",
                  borderRadius: "var(--radius-md)",
                  padding: "3rem 2.5rem",
                  boxShadow: "0 2px 8px rgba(10, 25, 41, 0.03)"
                }}
              >
                {/* Left/Main Column: Overview & Scope */}
                <div className="service-copy-side">
                  <span style={{ fontSize: "0.85rem", fontWeight: "800", color: "var(--blue)", letterSpacing: "0.08em", display: "inline-block", marginBottom: "1rem" }}>
                    CAPABILITY {svc.num}
                  </span>

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
                            <span style={{ color: "var(--blue)", fontWeight: "700" }}>&bull;</span>
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
                      Discuss This Capability
                    </button>
                  </div>
                </div>

                {/* Right Column: Deliverables & Outputs (No technology stack box, clean bullets) */}
                <div className="service-specs-side">
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
                          <span style={{ color: "var(--blue)", fontWeight: "700" }}>&bull;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section-dark" style={{ textAlign: "center", padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="eyebrow-dark">NOT SURE WHERE TO START?</span>
          <h2 style={{ fontSize: "2.25rem", fontWeight: "800", color: "var(--white)", marginBottom: "1.25rem" }}>
            Start with the business problem.
          </h2>
          <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: "1.65", marginBottom: "2.5rem" }}>
            Tell us what is slowing the business down, what needs to connect or what needs to be built. We will help you identify a practical path forward.
          </p>
          <button type="button" className="btn btn-primary" onClick={onOpenAudit} style={{ margin: "0 auto" }}>
            Discuss Your Business
          </button>
        </div>
      </section>
    </>
  );
}
