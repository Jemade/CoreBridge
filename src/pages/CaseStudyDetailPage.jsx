import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft 
} from "lucide-react";
import SEO from "../components/common/SEO";
import { caseStudiesData } from "../data/initialData";

export default function CaseStudyDetailPage({ onOpenAudit }) {
  const { slug } = useParams();
  const study = caseStudiesData.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return (
      <div className="section" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "600px" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Case Study Not Found</h1>
          <p style={{ color: "var(--muted)", marginBottom: "2rem" }}>
            The requested technical case study does not exist or has been archived.
          </p>
          <Link to="/case-studies" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <ArrowLeft size={16} /> Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  const getBadgeClass = (badge) => {
    switch (badge?.toLowerCase()) {
      case "prototype":
        return "case-badge case-badge-prototype";
      case "internal build":
        return "case-badge case-badge-internal";
      case "research":
        return "case-badge case-badge-research";
      default:
        return "case-badge";
    }
  };

  return (
    <>
      <SEO
        title={`${study.title} | Case Study`}
        description={study.problem || `Technical implementation overview for ${study.title}.`}
      />

      {/* Header */}
      <section className="section section-dark" style={{ padding: "4rem 0 3.5rem" }}>
        <div className="container">
          <Link
            to="/case-studies"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#94A3B8", fontSize: "0.88rem", marginBottom: "2rem", textDecoration: "none" }}
          >
            <ArrowLeft size={15} /> Back to All Case Studies
          </Link>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <span className={getBadgeClass(study.badge)}>{study.badge}</span>
                <span style={{ fontSize: "0.8rem", color: "#94A3B8", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {study.category}
                </span>
              </div>

              <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: "1.2" }}>
                {study.title}
              </h1>

              <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#CBD5E1", marginBottom: "2rem" }}>
                {study.problem}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <button type="button" className="btn btn-primary" onClick={onOpenAudit}>
                  Schedule Operational Review
                </button>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>

            <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.15)", boxShadow: "var(--shadow-lg)" }}>
              <img
                src={study.image}
                alt={`Engineering implementation for ${study.title}`}
                style={{ width: "100%", height: "340px", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Technical Report Content */}
      <section className="section" style={{ backgroundColor: "var(--bg-surface)" }}>
        <div className="container" style={{ maxWidth: "900px", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          
          {/* Operating Context */}
          {study.context && (
            <div style={{ backgroundColor: "var(--white)", border: "1px solid var(--borders)", borderRadius: "var(--radius-md)", padding: "2.25rem 2rem" }}>
              <span className="eyebrow" style={{ display: "block", marginBottom: "0.5rem" }}>THE SITUATION</span>
              <h2 style={{ fontSize: "1.35rem", fontWeight: "800", color: "var(--primary)", marginBottom: "0.85rem" }}>
                What the business was dealing with
              </h2>
              <p style={{ fontSize: "0.98rem", lineHeight: "1.7", color: "var(--text-dark)", margin: 0 }}>
                {study.context}
              </p>
            </div>
          )}

          {/* Architectural Approach */}
          {study.approach && (
            <div style={{ backgroundColor: "var(--white)", border: "1px solid var(--borders)", borderRadius: "var(--radius-md)", padding: "2.25rem 2rem" }}>
              <span className="eyebrow" style={{ display: "block", marginBottom: "0.5rem" }}>THE APPROACH</span>
              <h2 style={{ fontSize: "1.35rem", fontWeight: "800", color: "var(--primary)", marginBottom: "0.85rem" }}>
                How we approached it
              </h2>
              <p style={{ fontSize: "0.98rem", lineHeight: "1.7", color: "var(--text-dark)", margin: 0 }}>
                {study.approach}
              </p>
            </div>
          )}

          {/* Systems Involved */}
          {study.systemsInvolved && (
            <div style={{ backgroundColor: "var(--white)", border: "1px solid var(--borders)", borderRadius: "var(--radius-md)", padding: "2rem" }}>
              <span className="eyebrow" style={{ display: "block", marginBottom: "0.5rem" }}>SYSTEMS INVOLVED</span>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginBottom: "1rem" }}>
                What needed to work together
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {study.systemsInvolved.map((sys, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "var(--soft-blue)",
                      border: "1px solid #BFDBFE",
                      borderRadius: "var(--radius-sm)",
                      padding: "0.4rem 0.85rem",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      color: "var(--blue)"
                    }}
                  >
                    <span>{sys}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Implementation Details */}
          {study.implementation && (
            <div style={{ backgroundColor: "var(--white)", border: "1px solid var(--borders)", borderRadius: "var(--radius-md)", padding: "2.25rem 2rem" }}>
              <span className="eyebrow" style={{ display: "block", marginBottom: "0.5rem" }}>IMPLEMENTATION</span>
              <h2 style={{ fontSize: "1.35rem", fontWeight: "800", color: "var(--primary)", marginBottom: "0.85rem" }}>
                What we built
              </h2>
              <p style={{ fontSize: "0.98rem", lineHeight: "1.7", color: "var(--text-dark)", margin: 0 }}>
                {study.implementation}
              </p>
            </div>
          )}

          {/* Outcome & Business Impact */}
          {study.outcome && (
            <div
              style={{
                backgroundColor: "#F0FDF4",
                border: "1px solid #BBF7D0",
                borderRadius: "var(--radius-md)",
                padding: "2.25rem 2rem"
              }}
            >
              <div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "#166534", margin: "0 0 0.75rem 0" }}>
                  Outcome
                </h3>
              </div>
              <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#14532D", margin: 0 }}>
                {study.outcome}
              </p>
            </div>
          )}

          {/* Bottom Audit Action */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexWrap: "wrap", padding: "1rem 0" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onOpenAudit}
              style={{ fontSize: "1.05rem", padding: "0.85rem 1.75rem" }}
            >
              Discuss a Similar Integration for Your Business
            </button>
            <Link to="/contact" className="btn btn-secondary" style={{ fontSize: "1.05rem", padding: "0.85rem 1.75rem" }}>
              Contact Us
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
