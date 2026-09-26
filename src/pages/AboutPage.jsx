import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Target, 
  Users, 
  MapPin, 
  Code2, 
  Network, 
  Cpu,
  Layers
} from "lucide-react";
import SEO from "../components/common/SEO";
import { teamHarareImg, engineeringFocusImg } from "../data/initialData";
import WhatsAppIcon from "../components/common/WhatsAppIcon";

export default function AboutPage({ onOpenAudit }) {
  const values = [
    {
      icon: ShieldCheck,
      title: "Rigor Before Novelty",
      desc: "We do not sell speculative prototypes or chase buzzwords. Every line of code, integration connector, or automation workflow is engineered for production uptime and operational stability."
    },
    {
      icon: Network,
      title: "Interoperability First",
      desc: "Replacing software that staff already understand is expensive and disruptive. We connect and extend your existing tools through secure APIs and background pipelines rather than forcing complete overhauls."
    },
    {
      icon: Target,
      title: "Grounded in Zimbabwean Realities",
      desc: "We understand the local operating environment: multi-currency transactions, evolving tax regulations, volatile internet connectivity, and the need for resilient offline-tolerant data sync."
    },
    {
      icon: Users,
      title: "Direct Engineering Accountability",
      desc: "You collaborate directly with the software engineers and system architects in Harare who design and implement your systems. No salespeople, no ticket queues, no offshore handoffs."
    }
  ];

  return (
    <>
      <SEO
        title="About Corebridge | Software Engineering & Systems Integration"
        description="Corebridge is a business systems and software engineering consultancy based in Harare, Zimbabwe. Smarter Systems. Stronger Businesses."
      />

      {/* Hero */}
      <section className="section section-dark" style={{ padding: "5rem 0 4rem" }}>
        <div className="container" style={{ maxWidth: "860px", textAlign: "center" }}>
          <span className="eyebrow-dark">ABOUT COREBRIDGE</span>
          <h1 style={{ fontSize: "2.75rem", fontWeight: "800", color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: "1.15" }}>
            Smarter Systems. Stronger Businesses.
          </h1>
          <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "#94A3B8", marginBottom: "2.5rem" }}>
            Corebridge is a business systems and software engineering consultancy based in Harare, Zimbabwe. We help businesses close operational gaps by building custom software, integrating disconnected systems, automating workflows, and introducing practical AI.
          </p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <button type="button" className="btn btn-primary" onClick={onOpenAudit}>
              Speak With Our Engineers <ArrowRight size={16} />
            </button>
            <a
              href="https://wa.me/263780787214?text=Hello%20Corebridge%2C%20I%20would%20like%20to%20speak%20with%20an%20engineer%20about%20our%20business%20systems."
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
              <span>WhatsApp Us Direct</span>
            </a>
            <Link to="/approach" className="btn btn-secondary">
              Our 6-Step Approach
            </Link>
          </div>
        </div>
      </section>

      {/* Real Team Visual & Core Narrative */}
      <section className="section" style={{ backgroundColor: "var(--white)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3.5rem", alignItems: "center" }}>
            <div>
              <span className="eyebrow">OUR PERSPECTIVE</span>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--primary)", marginBottom: "1.25rem", lineHeight: "1.25" }}>
                Good technology is measured by whether the business works better because it exists.
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "var(--text-dark)", marginBottom: "1.25rem" }}>
                Modern businesses accumulate software over time: one system for point of sale, another for accounting, spreadsheets for stock management, and manual emails for order approvals.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "var(--muted)", marginBottom: "1.75rem" }}>
                The problem is rarely that individual tools fail. The problem is the friction in between: staff re-entering numbers, reconciling spreadsheets by hand, and management waiting days for basic operational visibility.
              </p>
              <div
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--borders)",
                  borderRadius: "var(--radius-sm)",
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "var(--primary)",
                  fontWeight: "600",
                  fontSize: "0.92rem"
                }}
              >
                <MapPin size={18} style={{ color: "var(--blue)", flexShrink: 0 }} />
                <span>Headquartered in Harare, Zimbabwe · Supporting commercial clients across Southern Africa</span>
              </div>
            </div>

            <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--borders)", boxShadow: "var(--shadow-lg)" }}>
              <img
                src={teamHarareImg}
                alt="Corebridge engineering team collaborating in Harare, Zimbabwe"
                style={{ width: "100%", height: "380px", objectFit: "cover", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(transparent, rgba(10, 25, 41, 0.9))",
                  padding: "1.5rem",
                  color: "var(--white)",
                  fontSize: "0.85rem"
                }}
              >
                Direct engineering collaboration with local business leadership
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Corebridge Is vs What Corebridge Is Not */}
      <section className="section section-surface">
        <div className="container">
          <div className="section-header centered">
            <span className="eyebrow">HONEST POSITIONING</span>
            <h2 style={{ marginBottom: "1rem" }}>
              Clarity on what we do and do not do
            </h2>
            <p className="lead-text" style={{ margin: "0 auto" }}>
              We believe in honest, grounded technical partnerships. We are selective about the engagements we take on to ensure rigorous execution.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem", marginTop: "3rem" }}>
            {/* What Corebridge IS */}
            <div
              style={{
                backgroundColor: "var(--white)",
                border: "1px solid #BAE6FD",
                borderRadius: "var(--radius-md)",
                padding: "2.5rem 2rem"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--blue)", marginBottom: "1.25rem" }}>
                <CheckCircle2 size={22} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--primary)", margin: 0 }}>
                  What Corebridge Is
                </h3>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.92rem", color: "var(--text-dark)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--blue)", marginTop: "3px", flexShrink: 0 }} />
                  <span>A software engineering consultancy solving real operational bottlenecks</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.92rem", color: "var(--text-dark)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--blue)", marginTop: "3px", flexShrink: 0 }} />
                  <span>Systems integrators connecting ERPs, POS terminals, and accounting ledgers</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.92rem", color: "var(--text-dark)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--blue)", marginTop: "3px", flexShrink: 0 }} />
                  <span>Builders of custom web applications, portals, and database pipelines</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.92rem", color: "var(--text-dark)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--blue)", marginTop: "3px", flexShrink: 0 }} />
                  <span>Pragmatic AI engineers applying machine learning to document processing and workflow routing</span>
                </li>
              </ul>
            </div>

            {/* What Corebridge IS NOT */}
            <div
              style={{
                backgroundColor: "var(--white)",
                border: "1px solid #FECACA",
                borderRadius: "var(--radius-md)",
                padding: "2.5rem 2rem"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#DC2626", marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "1.25rem", fontWeight: "900", color: "#DC2626" }}>&times;</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "#991B1B", margin: 0 }}>
                  What Corebridge Is Not
                </h3>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.92rem", color: "var(--muted)", lineHeight: "1.5" }}>
                  <span style={{ color: "#DC2626", fontWeight: "700" }}>&times;</span>
                  <span>Not a generic AI hype agency peddling novelty chatbots without business context</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.92rem", color: "var(--muted)", lineHeight: "1.5" }}>
                  <span style={{ color: "#DC2626", fontWeight: "700" }}>&times;</span>
                  <span>Not a design shop that builds static marketing brochures and disappears</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.92rem", color: "var(--muted)", lineHeight: "1.5" }}>
                  <span style={{ color: "#DC2626", fontWeight: "700" }}>&times;</span>
                  <span>Not a cybersecurity auditor, managed desktop support provider, or antivirus reseller</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.92rem", color: "var(--muted)", lineHeight: "1.5" }}>
                  <span style={{ color: "#DC2626", fontWeight: "700" }}>&times;</span>
                  <span>Not software vendors that lock you into inflexible, costly proprietary licenses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Focus Secondary Photo & Principles */}
      <section className="section" style={{ backgroundColor: "var(--white)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3.5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--borders)", boxShadow: "var(--shadow-md)" }}>
              <img
                src={engineeringFocusImg}
                alt="Technical system analysis and backend software architecture"
                style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
              />
            </div>

            <div>
              <span className="eyebrow">OUR CORE PRINCIPLES</span>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--primary)", marginBottom: "1.5rem" }}>
                How we deliver engineering value
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {values.map((v, idx) => {
                  const Icon = v.icon;
                  return (
                    <div key={idx} style={{ display: "flex", gap: "1rem" }}>
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "var(--radius-sm)",
                          backgroundColor: "var(--soft-blue)",
                          color: "var(--blue)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--primary)", marginBottom: "0.25rem" }}>
                          {v.title}
                        </h4>
                        <p style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "var(--muted)", margin: 0 }}>
                          {v.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section section-dark" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="eyebrow-dark">COMMENCE AN ENGAGEMENT</span>
          <h2 style={{ fontSize: "2.25rem", fontWeight: "800", color: "var(--white)", marginBottom: "1.25rem" }}>
            Let Us Look at Your Systems Together
          </h2>
          <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: "1.65", marginBottom: "2.5rem" }}>
            Schedule a confidential 15-Minute Operational Review. No salespeople, just grounded technical analysis from software engineers in Harare.
          </p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <button type="button" className="btn btn-primary" onClick={onOpenAudit}>
              Schedule Operational Review <ArrowRight size={16} />
            </button>
            <a
              href="https://wa.me/263780787214?text=Hello%20Corebridge%2C%20I%20would%20like%20to%20discuss%20our%20systems%20requirements%20over%20WhatsApp."
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
              <span>WhatsApp Us</span>
            </a>
            <Link to="/contact" className="btn btn-secondary">
              Contact Engineering
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
