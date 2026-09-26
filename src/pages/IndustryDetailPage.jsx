import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Layers, 
  Workflow, 
  Cpu, 
  Code2, 
  Sparkles
} from "lucide-react";
import SEO from "../components/common/SEO";
import { industriesData } from "../data/initialData";
import WhatsAppIcon from "../components/common/WhatsAppIcon";

export default function IndustryDetailPage({ onOpenAudit }) {
  const { slug } = useParams();
  const industry = industriesData.find((i) => i.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!industry) {
    return (
      <div className="section" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "600px" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Industry Not Found</h1>
          <p style={{ color: "var(--muted)", marginBottom: "2rem" }}>
            The requested industry profile does not exist or has been relocated.
          </p>
          <Link to="/industries" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <ArrowLeft size={16} /> Back to All Industries
          </Link>
        </div>
      </div>
    );
  }

  const Icon = industry.icon;

  return (
    <>
      <SEO
        title={`${industry.name} Systems Architecture | Corebridge`}
        description={industry.shortDesc || `Corebridge systems integration and custom software engineering for ${industry.name} in Zimbabwe.`}
      />

      {/* Hero Header with Real Sector Photography */}
      <section className="section section-dark" style={{ padding: "4rem 0 3.5rem" }}>
        <div className="container">
          <Link
            to="/industries"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#94A3B8", fontSize: "0.88rem", marginBottom: "2rem", textDecoration: "none" }}
          >
            Back to All Industries
          </Link>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "rgba(23, 105, 232, 0.2)",
                    color: "var(--blue)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  {Icon && <Icon size={22} />}
                </div>
                <span className="eyebrow-dark" style={{ margin: 0 }}>
                  INDUSTRY BLUEPRINT
                </span>
              </div>

              <h1 style={{ fontSize: "2.75rem", fontWeight: "800", color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: "1.2" }}>
                {industry.name}
              </h1>

              <p style={{ fontSize: "1.12rem", lineHeight: "1.7", color: "#CBD5E1", marginBottom: "2rem" }}>
                {industry.overview || industry.shortDesc}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <button type="button" className="btn btn-primary" onClick={onOpenAudit}>
                  Review {industry.name} Architecture
                </button>
                <a
                  href={`https://wa.me/263780787214?text=Hello%20Corebridge%2C%20I%20would%20like%20to%20discuss%20systems%20integration%20for%20our%20${encodeURIComponent(industry.name)}%20business.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#25D366",
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    textDecoration: "none"
                  }}
                >
                  <WhatsAppIcon size={18} style={{ color: "#25D366" }} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.15)", boxShadow: "var(--shadow-lg)" }}>
              <img
                src={industry.image}
                alt={`Commercial operations in ${industry.name}`}
                style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Analysis Grid */}
      <section className="section" style={{ backgroundColor: "var(--bg-surface)" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
          
          {/* Section 1: Bottlenecks & Software Ecosystems */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
            {/* Operational Challenges */}
            <div
              style={{
                backgroundColor: "var(--white)",
                border: "1px solid #FECACA",
                borderRadius: "var(--radius-md)",
                padding: "2.5rem 2rem"
              }}
            >
              <div style={{ marginBottom: "1.25rem" }}>
                <h2 style={{ fontSize: "1.3rem", color: "#991B1B", margin: 0 }}>
                  Typical Operational Friction
                </h2>
              </div>
              <p style={{ fontSize: "0.94rem", color: "var(--muted)", lineHeight: "1.6", marginBottom: "1.75rem" }}>
                Commercial operators in this sector routinely lose margin to uncoordinated data, duplicate entry, and delayed handoffs.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {industry.operationalChallenges?.map((item, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.92rem", color: "var(--text-dark)", lineHeight: "1.5" }}>
                    <span style={{ color: "#DC2626", fontWeight: "700" }}>&times;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Common Software Systems */}
            <div
              style={{
                backgroundColor: "var(--white)",
                border: "1px solid var(--borders)",
                borderRadius: "var(--radius-md)",
                padding: "2.5rem 2rem"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", color: "var(--blue)", marginBottom: "1.25rem" }}>
                <Layers size={20} />
                <h2 style={{ fontSize: "1.3rem", color: "var(--primary)", margin: 0 }}>
                  Common Systems in the Stack
                </h2>
              </div>
              <p style={{ fontSize: "0.94rem", color: "var(--muted)", lineHeight: "1.6", marginBottom: "1.75rem" }}>
                We bridge your existing software infrastructure so data moves reliably without requiring wholesale software replacement.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {industry.commonSystems?.map((sys, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.92rem", color: "var(--text-dark)", lineHeight: "1.5" }}>
                    <span style={{ color: "var(--blue)", fontWeight: "700" }}>&bull;</span>
                    <span>{sys}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 2: Corebridge Solution Opportunities */}
          <div
            style={{
              backgroundColor: "var(--white)",
              border: "1px solid var(--borders)",
              borderRadius: "var(--radius-lg)",
              padding: "3rem 2.5rem"
            }}
          >
            <div style={{ maxWidth: "720px", marginBottom: "2.5rem" }}>
              <span className="eyebrow">ENGINEERING INTERVENTIONS</span>
              <h2 style={{ fontSize: "1.85rem", fontWeight: "800", color: "var(--primary)", marginBottom: "0.75rem" }}>
                Where Corebridge Delivers High Operational ROI
              </h2>
              <p style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: "1.6", margin: 0 }}>
                Targeted technical solutions designed to unlock capacity and eliminate manual spreadsheet dependencies.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
              {/* Integration */}
              {industry.integrationOpportunities && (
                <div style={{ backgroundColor: "var(--bg-surface)", padding: "1.75rem", borderRadius: "var(--radius-md)", border: "1px solid var(--borders)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--blue)", marginBottom: "1rem" }}>
                    <Workflow size={18} />
                    <h3 style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--primary)", margin: 0 }}>
                      Systems Integration
                    </h3>
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {industry.integrationOpportunities.map((op, idx) => (
                      <li key={idx} style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: "1.45" }}>
                        &bull; {op}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Custom Software */}
              {industry.softwareOpportunities && (
                <div style={{ backgroundColor: "var(--bg-surface)", padding: "1.75rem", borderRadius: "var(--radius-md)", border: "1px solid var(--borders)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--blue)", marginBottom: "1rem" }}>
                    <Code2 size={18} />
                    <h3 style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--primary)", margin: 0 }}>
                      Custom Software
                    </h3>
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {industry.softwareOpportunities.map((op, idx) => (
                      <li key={idx} style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: "1.45" }}>
                        &bull; {op}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Automation & AI */}
              {(industry.automationOpportunities || industry.aiOpportunities) && (
                <div style={{ backgroundColor: "var(--bg-surface)", padding: "1.75rem", borderRadius: "var(--radius-md)", border: "1px solid var(--borders)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--blue)", marginBottom: "1rem" }}>
                    <Sparkles size={18} />
                    <h3 style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--primary)", margin: 0 }}>
                      Automation &amp; Practical AI
                    </h3>
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {industry.automationOpportunities?.map((op, idx) => (
                      <li key={idx} style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: "1.45" }}>
                        &bull; {op}
                      </li>
                    ))}
                    {industry.aiOpportunities?.map((op, idx) => (
                      <li key={`ai-${idx}`} style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: "1.45" }}>
                        &bull; {op}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Section 3: Concrete Workflow Example */}
          {industry.exampleWorkflow && (
            <div
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--white)",
                borderRadius: "var(--radius-lg)",
                padding: "3rem 2.5rem"
              }}
            >
              <div style={{ marginBottom: "2rem" }}>
                <span className="eyebrow-dark">END-TO-END FLOW IN ACTION</span>
                <h2 style={{ fontSize: "1.85rem", fontWeight: "800", color: "var(--white)", marginBottom: "0.75rem" }}>
                  Example Operational Workflow
                </h2>
                <div style={{ fontSize: "0.95rem", color: "#94A3B8" }}>
                  <strong style={{ color: "#38BDF8" }}>Operational Trigger:</strong> {industry.exampleWorkflow.trigger}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
                {industry.exampleWorkflow.steps?.map((st, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "var(--radius-sm)",
                      padding: "1.5rem"
                    }}
                  >
                    <span style={{ fontSize: "0.78rem", fontWeight: "800", color: "#38BDF8", letterSpacing: "0.06em", display: "block", marginBottom: "0.5rem" }}>
                      STEP 0{idx + 1}
                    </span>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#E2E8F0", margin: 0 }}>
                      {st}
                    </p>
                  </div>
                ))}
              </div>

              <div
                style={{
                  backgroundColor: "rgba(23, 105, 232, 0.15)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  borderRadius: "var(--radius-sm)",
                  padding: "1.25rem 1.5rem"
                }}
              >
                <div>
                  <strong style={{ color: "#38BDF8", fontSize: "0.9rem", display: "block", marginBottom: "0.2rem" }}>
                    Operational Outcome:
                  </strong>
                  <span style={{ fontSize: "0.9rem", color: "#E2E8F0", lineHeight: "1.5" }}>
                    {industry.exampleWorkflow.outcome}
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Closing CTA */}
      <section className="section section-dark" style={{ textAlign: "center", padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="eyebrow-dark">GET STARTED</span>
          <h2 style={{ fontSize: "2.25rem", fontWeight: "800", color: "var(--white)", marginBottom: "1.25rem" }}>
            Ready to Connect Your {industry.name} Systems?
          </h2>
          <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: "1.65", marginBottom: "2.5rem" }}>
            Schedule a confidential 15-Minute Operational Review. We will examine your software landscape and present actionable architecture recommendations.
          </p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <button type="button" className="btn btn-primary" onClick={onOpenAudit}>
              Book 15-Minute Review
            </button>
            <a
              href={`https://wa.me/263780787214?text=Hello%20Corebridge%2C%20I%20would%20like%20to%20discuss%20systems%20integration%20for%20our%20${encodeURIComponent(industry.name)}%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#25D366",
                fontSize: "0.95rem",
                fontWeight: "600",
                textDecoration: "none",
                padding: "0.5rem 1rem"
              }}
            >
              <WhatsAppIcon size={18} style={{ color: "#25D366" }} />
              <span>Chat on WhatsApp</span>
            </a>
            <Link to="/industries" className="btn btn-secondary">
              Browse Other Industries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
