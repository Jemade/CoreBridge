import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import { processSteps, approachHeroImg } from "../data/initialData";

export default function ApproachPage({ onOpenAudit }) {
  const principles = [
    {
      num: "01",
      title: "Pragmatism Over Novelty",
      desc: "We do not introduce complex technology for the sake of buzzwords. If a simple database script or standard API hook solves the problem reliably, that is what we recommend."
    },
    {
      num: "02",
      title: "Preserve What Works",
      desc: "Your business has existing tools that staff already know. Where possible, we build connectors and middleware to preserve those investments rather than forcing disruptive system overhauls."
    },
    {
      num: "03",
      title: "Resilience in Real Operating Conditions",
      desc: "We architect systems with local network volatility, dual-currency requirements, and offline buffer queues in mind so operations never halt when an internet connection drops."
    },
    {
      num: "04",
      title: "Direct Engineering Accountability",
      desc: "You collaborate directly with the software engineers and architects who design and write the code. No layers of non-technical account executives or offshore ticket queues."
    }
  ];

  return (
    <>
      <SEO
        title="Our Engineering Approach | Orebridge"
        description="Learn about the Corebridge 6-step engineering methodology: Discover, Map, Architect, Build/Integrate, Deploy, and Improve."
      />

      {/* Hero with Unique Approach Photography */}
      <section className="section section-dark" style={{ padding: "4.5rem 0 4rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3.5rem", alignItems: "center" }}>
            <div>
              <span className="eyebrow-dark">OUR METHODOLOGY</span>
              <h1 style={{ fontSize: "2.75rem", fontWeight: "800", color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: "1.15" }}>
                How Corebridge Engineers Resilient Business Systems
              </h1>
              <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "#94A3B8", marginBottom: "2rem" }}>
                We do not guess, and we do not force generic software templates. We follow a disciplined, 6-stage engineering process grounded in your operational reality and long-term business goals.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <button type="button" className="btn btn-primary" onClick={onOpenAudit}>
                  Schedule Operational Review
                </button>
                <Link to="/case-studies" className="btn btn-secondary">
                  View Work in Practice
                </Link>
              </div>
            </div>

            {/* Clean Hero Photography without overlays */}
            <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.15)", boxShadow: "var(--shadow-lg)" }}>
              <img
                src={approachHeroImg}
                alt="Technical system planning, architecture review, and engineering workshop"
                style={{ width: "100%", height: "340px", objectFit: "cover", display: "block" }}
                width="720"
                height="340"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Process Timeline */}
      <section className="section" style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "960px" }}>
          <div className="section-header centered">
            <span className="eyebrow">THE 6-STAGE LIFECYCLE</span>
            <h2 style={{ marginBottom: "1rem" }}>
              From initial operational audit to continuous evolution
            </h2>
            <p className="lead-text" style={{ margin: "0 auto" }}>
              Every implementation follows this structured engineering pipeline to ensure stability, data integrity, and measurable business value.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginTop: "3.5rem" }}>
            {processSteps.map((step) => {
              return (
                <div
                  key={step.num}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "2rem",
                    padding: "2.5rem 2rem",
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--borders)",
                    borderRadius: "var(--radius-md)",
                    position: "relative"
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                      <span
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: "800",
                          color: "var(--blue)"
                        }}
                      >
                        STAGE {step.num}
                      </span>
                      <span
                        style={{
                          fontSize: "0.76rem",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "var(--radius-sm)",
                          backgroundColor: "var(--soft-blue)",
                          color: "var(--blue)"
                        }}
                      >
                        {step.phase}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "var(--primary)", marginBottom: "0.75rem" }}>
                      {step.title}
                    </h3>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h4 style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--primary)", marginBottom: "0.75rem", lineHeight: "1.4" }}>
                      {step.headline}
                    </h4>
                    <p style={{ fontSize: "0.95rem", lineHeight: "1.7", color: "var(--muted)", margin: 0 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Principles (Clean typography, no blue checkmark ticks) */}
      <section className="section section-surface" style={{ padding: "5rem 0" }}>
        <div className="container">
          <div className="section-header centered">
            <span className="eyebrow">OUR CORE PRINCIPLES</span>
            <h2 style={{ marginBottom: "1rem" }}>
              How we approach every technical engagement
            </h2>
            <p className="lead-text" style={{ margin: "0 auto" }}>
              We hold our software design and integration work to exacting technical and professional standards.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginTop: "3rem" }}>
            {principles.map((p, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--white)",
                  border: "1px solid var(--borders)",
                  borderRadius: "var(--radius-md)",
                  padding: "2rem"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: "800", color: "var(--blue)", letterSpacing: "0.05em" }}>
                    {p.num}
                  </span>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: "700", color: "var(--primary)", margin: 0 }}>
                    {p.title}
                  </h3>
                </div>
                <p style={{ fontSize: "0.92rem", lineHeight: "1.65", color: "var(--muted)", margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-dark" style={{ textAlign: "center", padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <span className="eyebrow-dark">READY TO COLLABORATE</span>
          <h2 style={{ fontSize: "2.25rem", fontWeight: "800", color: "var(--white)", marginBottom: "1.25rem" }}>
            Discuss Your System Architecture With Our Team
          </h2>
          <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: "1.65", marginBottom: "2.5rem" }}>
            Book a 15-minute operational review with our lead engineers in Harare. We will examine your workflows and give you a candid architectural recommendation.
          </p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <button type="button" className="btn btn-primary" onClick={onOpenAudit}>
              Book 15-Minute Review
            </button>
            <Link to="/contact" className="btn btn-secondary">
              Contact Engineering
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
