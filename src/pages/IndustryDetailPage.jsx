import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, CheckCircle2, AlertTriangle, ShieldCheck, Cpu } from "lucide-react";
import SEO from "../components/common/SEO";
import { getIndustryBySlug } from "../api/industries";
import { industriesData } from "../data/initialData";

export default function IndustryDetailPage({ onOpenAudit }) {
  const { slug } = useParams();
  const [industry, setIndustry] = useState(() => industriesData.find(i => i.slug === slug) || null);
  const [loading, setLoading] = useState(!industry);

  useEffect(() => {
    let isMounted = true;
    getIndustryBySlug(slug).then(data => {
      if (isMounted) {
        if (data) setIndustry(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, [slug]);

  if (loading) {
    return (
      <div className="container" style={{ padding: "120px 0", textAlign: "center" }}>
        <p style={{ color: "#64748b" }}>Loading industry profile...</p>
      </div>
    );
  }

  if (!industry) {
    return (
      <div className="container" style={{ padding: "120px 0", textAlign: "center" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "16px" }}>Industry Not Found</h1>
        <p style={{ color: "#64748b", marginBottom: "24px" }}>The requested industry profile does not exist.</p>
        <Link to="/industries" className="primary-btn" style={{ display: "inline-flex", margin: "0 auto" }}>
          <ArrowLeft size={16} /> Back to All Industries
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${industry.name} Solutions`}
        description={industry.desc || `Corebridge technology solutions and system architecture for ${industry.name}.`}
      />

      {/* Header */}
      <section style={{ background: "var(--dark)", color: "var(--white)", padding: "70px 0 50px" }}>
        <div className="container">
          <Link
            to="/industries"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#94a3b8", fontSize: "13px", marginBottom: "24px" }}
          >
            <ArrowLeft size={14} /> Back to All Industries
          </Link>
          <div style={{ maxWidth: "800px" }}>
            <span className="section-label light" style={{ display: "inline-block", marginBottom: "12px" }}>
              INDUSTRY ARCHITECTURE
            </span>
            <h1 style={{ fontSize: "40px", fontWeight: "800", color: "#ffffff", marginBottom: "20px", lineHeight: "1.15" }}>
              {industry.name}
            </h1>
            <p style={{ fontSize: "17px", color: "#cbd5e1", lineHeight: "1.6", marginBottom: "28px" }}>
              {industry.desc}
            </p>
            <button className="primary-btn" onClick={onOpenAudit}>
              Request {industry.name} Audit <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: "80px 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px" }}>
          
          {/* Left: Pain Points & Challenges */}
          <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "16px", padding: "40px 32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <AlertTriangle size={22} style={{ color: "#dc2626" }} />
              <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#991b1b", margin: 0 }}>
                Common Operational Friction
              </h2>
            </div>
            <p style={{ fontSize: "14px", color: "#7f1d1d", lineHeight: "1.6", marginBottom: "24px" }}>
              Businesses in this sector routinely lose time and revenue due to manual handoffs, uncoordinated systems, and unverified data.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {industry.challenges?.map((item, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "14px", color: "#450a0a" }}>
                  <span style={{ color: "#dc2626", fontWeight: "bold" }}>✕</span>
                  <span style={{ lineHeight: "1.5" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Corebridge Technical Solutions */}
          <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "16px", padding: "40px 32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <CheckCircle2 size={22} style={{ color: "#16a34a" }} />
              <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#166534", margin: 0 }}>
                Corebridge Integration Blueprint
              </h2>
            </div>
            <p style={{ fontSize: "14px", color: "#14532d", lineHeight: "1.6", marginBottom: "24px" }}>
              We implement resilient digital architecture designed to eliminate bottlenecks, maintain compliance, and automate recurring workflows.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {industry.solutions?.map((item, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "14px", color: "#052e16" }}>
                  <CheckCircle2 size={18} style={{ color: "#16a34a", flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ lineHeight: "1.5" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Call to action */}
      <section style={{ background: "#f8fafc", borderTop: "1px solid var(--line)", padding: "70px 0", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "680px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "800", color: "var(--ink)", marginBottom: "16px" }}>
            Ready to Streamline Your {industry.name} Operations?
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "15px", lineHeight: "1.6", marginBottom: "28px" }}>
            Book a 15-minute operational audit. We will review your current software stack and deliver actionable architecture suggestions.
          </p>
          <button className="primary-btn" onClick={onOpenAudit} style={{ margin: "0 auto" }}>
            Book Free Audit <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </>
  );
}
