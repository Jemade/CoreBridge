import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu, Building2 } from "lucide-react";
import SEO from "../components/common/SEO";
import { getCaseStudyBySlug } from "../api/caseStudies";

export default function CaseStudyDetailPage({ onOpenAudit }) {
  const { slug } = useParams();
  const [study, setStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    getCaseStudyBySlug(slug).then(data => {
      if (isMounted) {
        setStudy(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, [slug]);

  if (loading) {
    return (
      <div className="container" style={{ padding: "120px 0", textAlign: "center", color: "#64748b" }}>
        Loading case study...
      </div>
    );
  }

  if (!study) {
    return (
      <div className="container" style={{ padding: "120px 0", textAlign: "center" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "16px" }}>Case Study Not Found</h1>
        <p style={{ color: "#64748b", marginBottom: "24px" }}>The requested case study could not be found or is not currently published.</p>
        <Link to="/case-studies" className="primary-btn" style={{ display: "inline-flex", margin: "0 auto" }}>
          <ArrowLeft size={16} /> Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={study.title}
        description={study.summary || study.title}
      />

      <section style={{ background: "var(--dark)", color: "var(--white)", padding: "70px 0 50px" }}>
        <div className="container">
          <Link
            to="/case-studies"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#94a3b8", fontSize: "13px", marginBottom: "24px" }}
          >
            <ArrowLeft size={14} /> Back to All Case Studies
          </Link>
          <div style={{ maxWidth: "800px" }}>
            <span className="section-label light" style={{ display: "inline-block", marginBottom: "12px" }}>
              {study.industry || "ENTERPRISE DEPLOYMENT"}
            </span>
            <h1 style={{ fontSize: "38px", fontWeight: "800", color: "#ffffff", marginBottom: "20px", lineHeight: "1.2" }}>
              {study.title}
            </h1>
            <p style={{ fontSize: "16px", color: "#cbd5e1", lineHeight: "1.6" }}>
              {study.summary}
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "70px 0" }}>
        <div className="container" style={{ maxWidth: "860px", display: "flex", flexDirection: "column", gap: "40px" }}>
          
          {study.challenge && (
            <div>
              <h2 style={{ fontSize: "22px", fontWeight: "700", color: "var(--ink)", marginBottom: "12px" }}>
                The Operational Challenge
              </h2>
              <div style={{ fontSize: "15px", color: "#475569", lineHeight: "1.7", whiteSpace: "pre-line" }}>
                {study.challenge}
              </div>
            </div>
          )}

          {study.approach && (
            <div>
              <h2 style={{ fontSize: "22px", fontWeight: "700", color: "var(--ink)", marginBottom: "12px" }}>
                Our Architectural Approach
              </h2>
              <div style={{ fontSize: "15px", color: "#475569", lineHeight: "1.7", whiteSpace: "pre-line" }}>
                {study.approach}
              </div>
            </div>
          )}

          {study.solution && (
            <div>
              <h2 style={{ fontSize: "22px", fontWeight: "700", color: "var(--ink)", marginBottom: "12px" }}>
                Engineered Solution
              </h2>
              <div style={{ fontSize: "15px", color: "#475569", lineHeight: "1.7", whiteSpace: "pre-line" }}>
                {study.solution}
              </div>
            </div>
          )}

          {study.results && (
            <div style={{ background: "var(--soft)", border: "1px solid #bfdbfe", borderRadius: "12px", padding: "28px 32px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--ink)", marginBottom: "10px" }}>
                Measurable Impact &amp; Results
              </h3>
              <div style={{ fontSize: "14px", color: "#1e3a8a", lineHeight: "1.6", whiteSpace: "pre-line" }}>
                {study.results}
              </div>
            </div>
          )}

          {study.technology && (
            <div style={{ borderTop: "1px solid var(--line)", paddingTop: "24px" }}>
              <span style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "#64748b", display: "block", marginBottom: "10px" }}>
                Technology Stack Utilized
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {study.technology.split(",").map((tech, i) => (
                  <span key={i} style={{ fontSize: "12px", background: "#f1f5f9", color: "#334155", padding: "4px 10px", borderRadius: "6px", fontFamily: "'DM Mono', monospace" }}>
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div style={{ textAlign: "center", paddingTop: "20px" }}>
            <button className="primary-btn" onClick={onOpenAudit} style={{ margin: "0 auto" }}>
              Request Similar Operational Audit <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
