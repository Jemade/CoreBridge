import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle, Search } from "lucide-react";
import SEO from "../components/common/SEO";
import { industriesData } from "../data/initialData";
import WhatsAppIcon from "../components/common/WhatsAppIcon";

export default function IndustriesPage({ onOpenAudit }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredIndustries = industriesData.filter((ind) => {
    const q = searchTerm.toLowerCase();
    return (
      ind.name.toLowerCase().includes(q) ||
      ind.shortDesc.toLowerCase().includes(q) ||
      ind.overview.toLowerCase().includes(q)
    );
  });

  return (
    <>
      <SEO
        title="Industry Solutions & Workflows | Corebridge"
        description="Software architecture and systems integration tailored to 17 commercial sectors in Zimbabwe: Agriculture, Healthcare, FMCG, Manufacturing, Logistics, and more."
      />

      {/* Header */}
      <section className="section section-dark" style={{ padding: "5rem 0 4rem" }}>
        <div className="container" style={{ maxWidth: "860px", textAlign: "center" }}>
          <span className="eyebrow-dark">SECTORS &amp; DOMAINS</span>
          <h1 style={{ fontSize: "2.75rem", fontWeight: "800", color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: "1.15" }}>
            Systems Engineered for Your Industry
          </h1>
          <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "#94A3B8", marginBottom: "2.5rem" }}>
            Generic software forces you to change how your business operates. We configure, connect, and build systems around your industry's specific compliance, supply chain, and data realities.
          </p>

          {/* Search Filter */}
          <div style={{ maxWidth: "480px", margin: "0 auto", position: "relative" }}>
            <Search
              size={18}
              style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "#94A3B8" }}
            />
            <input
              type="text"
              placeholder="Search by industry name or challenge..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input"
              style={{
                paddingLeft: "2.75rem",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: "rgba(255, 255, 255, 0.15)",
                color: "var(--white)"
              }}
            />
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section" style={{ backgroundColor: "var(--bg-surface)" }}>
        <div className="container">
          <div style={{ marginBottom: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.9rem", color: "var(--muted)", fontWeight: "600" }}>
              Showing {filteredIndustries.length} of {industriesData.length} commercial industries
            </span>
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                style={{ fontSize: "0.85rem", color: "var(--blue)", fontWeight: "600" }}
              >
                Clear filter
              </button>
            )}
          </div>

          <div className="industry-grid" style={{ marginTop: 0 }}>
            {filteredIndustries.map((ind) => {
              const Icon = ind.icon;
              return (
                <article key={ind.slug} className="industry-card">
                  <div className="industry-card-img-wrap">
                    <img
                      src={ind.image}
                      alt={`Commercial operations in ${ind.name}`}
                      className="industry-card-img"
                      loading="lazy"
                      width="400"
                      height="220"
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "1rem",
                        left: "1rem",
                        width: "36px",
                        height: "36px",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "rgba(10, 25, 41, 0.85)",
                        backdropFilter: "blur(4px)",
                        color: "var(--white)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(255, 255, 255, 0.15)"
                      }}
                    >
                      {Icon && <Icon size={18} />}
                    </div>
                  </div>

                  <div className="industry-card-body">
                    <h2 className="industry-card-title">{ind.name}</h2>
                    <p className="industry-card-desc">{ind.shortDesc}</p>

                    {ind.operationalChallenges && (
                      <div style={{ marginBottom: "1.25rem" }}>
                        <span style={{ fontSize: "0.76rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted)", display: "flex", alignItems: "center", gap: "0.35rem", marginBottom: "0.5rem" }}>
                          <AlertTriangle size={13} style={{ color: "#D97706" }} /> Common Bottlenecks
                        </span>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                          {ind.operationalChallenges.slice(0, 2).map((c, cIdx) => (
                            <li key={cIdx} style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: "1.4", display: "flex", alignItems: "flex-start", gap: "0.4rem" }}>
                              <span style={{ color: "var(--blue)" }}>&bull;</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid var(--borders-light)" }}>
                      <Link
                        to={`/industries/${ind.slug}`}
                        className="btn-link"
                        aria-label={`View systems and workflows for ${ind.name}`}
                      >
                        Explore systems &amp; workflows <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section section-dark" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="eyebrow-dark">INDUSTRY ARCHITECTURE</span>
          <h2 style={{ fontSize: "2.25rem", fontWeight: "800", color: "var(--white)", marginBottom: "1.25rem" }}>
            Do not see your exact sector listed?
          </h2>
          <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: "1.65", marginBottom: "2.5rem" }}>
            The underlying engineering challenges (data silos, manual spreadsheet handoffs, uncoordinated inventory, and payment reconciliation) are universal. Tell us about your operational workflow.
          </p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <button type="button" className="btn btn-primary" onClick={onOpenAudit}>
              Book Operational Review <ArrowRight size={16} />
            </button>
            <a
              href="https://wa.me/263780787214?text=Hello%20Corebridge%2C%20I%20would%20like%20to%20discuss%20systems%20for%20our%20industry%20sector."
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
