import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import SEO from "../components/common/SEO";
import { industriesData, industriesHeroImg } from "../data/initialData";

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

      {/* Header with Unique Industries Photography */}
      <section className="section section-dark" style={{ padding: "4.5rem 0 4rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3.5rem", alignItems: "center" }}>
            <div>
              <span className="eyebrow-dark">INDUSTRIES</span>
              <h1 style={{ fontSize: "2.75rem", fontWeight: "800", color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: "1.15" }}>
                Technology that fits how your industry works
              </h1>
              <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "#94A3B8", marginBottom: "2rem" }}>
                Every sector has different workflows, systems and constraints. We build and connect technology around those realities instead of forcing the same setup on every business.
              </p>

              {/* Search Filter */}
              <div style={{ maxWidth: "480px", position: "relative" }}>
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

            {/* Clean Hero Photography without overlays */}
            <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.15)", boxShadow: "var(--shadow-lg)" }}>
              <img
                src={industriesHeroImg}
                alt="Commercial and industrial operations across economic sectors"
                style={{ width: "100%", height: "340px", objectFit: "cover", display: "block" }}
                width="720"
                height="340"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section" style={{ backgroundColor: "var(--bg-surface)", padding: "5rem 0" }}>
        <div className="container">
          <div style={{ marginBottom: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.9rem", color: "var(--muted)", fontWeight: "600" }}>
              Showing {filteredIndustries.length} of {industriesData.length} commercial industries
            </span>
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                style={{ fontSize: "0.85rem", color: "var(--blue)", fontWeight: "600", background: "none", border: "none", cursor: "pointer" }}
              >
                Clear filter
              </button>
            )}
          </div>

          <div className="industry-grid" style={{ marginTop: 0 }}>
            {filteredIndustries.map((ind) => {
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
                  </div>

                  <div className="industry-card-body">
                    <h2 className="industry-card-title">{ind.name}</h2>
                    <p className="industry-card-desc">{ind.shortDesc}</p>

                    {ind.operationalChallenges && (
                      <div style={{ marginBottom: "1.25rem" }}>
                        <span style={{ fontSize: "0.76rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted)", display: "block", marginBottom: "0.5rem" }}>
                          Common Bottlenecks
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
                        style={{ fontSize: "0.88rem", fontWeight: "600", color: "var(--blue)", textDecoration: "none" }}
                        aria-label={`View systems and workflows for ${ind.name}`}
                      >
                        Explore systems and workflows
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
      <section className="section section-dark" style={{ textAlign: "center", padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="eyebrow-dark">DON'T SEE YOUR INDUSTRY?</span>
          <h2 style={{ fontSize: "2.25rem", fontWeight: "800", color: "var(--white)", marginBottom: "1.25rem" }}>
            Do not see your exact sector listed?
          </h2>
          <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: "1.65", marginBottom: "2.5rem" }}>
            Many businesses face the same underlying problems: disconnected systems, repeated data entry, slow approvals and limited visibility. Tell us what you are dealing with.
          </p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <button type="button" className="btn btn-primary" onClick={onOpenAudit}>
              Book Operational Review
            </button>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
