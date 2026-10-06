import React from "react";
import { Link } from "react-router-dom";

export default function BuildIntegrateImproveSection() {
  const pillars = [
    {
      action: "BUILD",
      title: "Create what your business is missing.",
      desc: "We design and build software around the way your business actually works, from internal tools and client portals to complete operational systems."
    },
    {
      action: "CONNECT",
      title: "Make the systems you already use work together.",
      desc: "We connect platforms such as POS, accounting, ERP, CRM, payments and inventory so information can move without repeated manual entry."
    },
    {
      action: "IMPROVE",
      title: "Remove friction from existing technology and workflows.",
      desc: "We simplify processes, automate repetitive work and improve existing systems before recommending unnecessary replacement."
    }
  ];

  return (
    <section className="section" id="approach-preview" style={{ backgroundColor: "var(--white)", borderBottom: "1px solid var(--borders)", padding: "6rem 0" }}>
      <div className="container">
        <div style={{ maxWidth: "780px", marginBottom: "4rem" }}>
          <span className="eyebrow">HOW WE THINK</span>
          <h2 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)", fontWeight: "800", color: "var(--primary)", lineHeight: "1.12", marginBottom: "1.25rem" }}>
            Build. Connect. Improve.
          </h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--muted)", margin: 0 }}>
            Start with the business problem, not the software. We first determine whether something needs to be built, connected or improved, then choose the technology that fits.
          </p>
        </div>

        <div style={{ maxWidth: "1100px", margin: "0 auto 3.5rem" }}>
          {pillars.map((item, idx) => (
            <article
              key={item.action}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(120px, 0.35fr) minmax(240px, 0.9fr) minmax(280px, 1.4fr)",
                gap: "2rem",
                alignItems: "start",
                padding: "2.25rem 0",
                borderTop: "1px solid var(--borders)"
              }}
            >
              <div>
                <span style={{ fontSize: "0.78rem", fontWeight: "700", color: "var(--blue)", letterSpacing: "0.12em" }}>
                  0{idx + 1}
                </span>
                <div style={{ fontSize: "1rem", fontWeight: "800", color: "var(--primary)", letterSpacing: "0.06em", marginTop: "0.45rem" }}>
                  {item.action}
                </div>
              </div>
              <h3 style={{ fontSize: "clamp(1.25rem, 2vw, 1.6rem)", fontWeight: "750", color: "var(--primary)", lineHeight: "1.35", margin: 0 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.98rem", lineHeight: "1.7", color: "var(--muted)", margin: 0 }}>
                {item.desc}
              </p>
            </article>
          ))}
          <div style={{ borderTop: "1px solid var(--borders)" }} />
        </div>

        <Link to="/approach" className="btn-link" style={{ fontSize: "0.95rem", fontWeight: "700", textDecoration: "none", color: "var(--blue)" }}>
          See how we work
        </Link>
      </div>
    </section>
  );
}
