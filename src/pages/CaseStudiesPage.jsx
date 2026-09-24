import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Layers, CheckCircle2 } from "lucide-react";
import SEO from "../components/common/SEO";
import CaseStudyCard from "../components/cards/CaseStudyCard";
import { getCaseStudies } from "../api/caseStudies";

export default function CaseStudiesPage({ onOpenAudit }) {
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    getCaseStudies().then(data => {
      if (isMounted) {
        setStudies(data || []);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  return (
    <>
      <SEO
        title="Case Studies & Engineering Architecture"
        description="Explore technical implementations, systems integration projects, and enterprise software engineered by Corebridge."
      />

      {/* Header */}
      <section style={{ background: "var(--dark)", color: "var(--white)", padding: "80px 0 60px" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-label light" style={{ display: "inline-block", marginBottom: "12px" }}>
            PROVEN ENGINEERING
          </span>
          <h1 style={{ fontSize: "42px", fontWeight: "800", letterSpacing: "-0.03em", color: "var(--white)", marginBottom: "20px", lineHeight: "1.15" }}>
            Systems in Practice
          </h1>
          <p style={{ fontSize: "16px", color: "#94a3b8", lineHeight: "1.6", marginBottom: "32px" }}>
            Real technical solutions solving real operational problems. We document architectural decisions, integration hurdles, and measurable business outcomes.
          </p>
          <button className="primary-btn" onClick={onOpenAudit} style={{ margin: "0 auto" }}>
            Request Architecture Discussion <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Main Grid or Empty State */}
      <section style={{ padding: "80px 0", background: "#f8fafc", minHeight: "450px" }}>
        <div className="container">
          {loading ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "#64748b" }}>
              Loading case studies...
            </div>
          ) : studies.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "32px" }}>
              {studies.map(study => (
                <CaseStudyCard key={study.slug || study.id} study={study} />
              ))}
            </div>
          ) : (
            /* Clean high-trust virgin empty state */
            <div style={{
              maxWidth: "680px",
              margin: "0 auto",
              background: "#ffffff",
              border: "1px solid var(--line)",
              borderRadius: "16px",
              padding: "56px 40px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(10,25,41,.03)"
            }}>
              <div style={{
                width: "56px",
                height: "56px",
                background: "var(--soft)",
                color: "var(--blue)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px"
              }}>
                <BookOpen size={26} />
              </div>
              <h2 style={{ fontSize: "22px", fontWeight: "800", color: "var(--ink)", marginBottom: "12px" }}>
                Case Studies in Documentation
              </h2>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6", marginBottom: "28px" }}>
                We are currently compiling comprehensive architectural blueprints and implementation summaries from our recent enterprise deployments. We publish verified case studies with client consent rather than unverified placeholder stories.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
                <button className="primary-btn" onClick={onOpenAudit}>
                  Discuss Your Architecture <ArrowRight size={15} />
                </button>
                <Link to="/industries" className="ghost-btn" style={{ display: "inline-flex", alignItems: "center" }}>
                  Explore Industry Solutions
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
