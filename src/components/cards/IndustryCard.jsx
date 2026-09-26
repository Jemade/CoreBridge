import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function IndustryCard({ industry }) {
  const Icon = industry.icon;

  return (
    <article className="industry-card">
      <div className="industry-card-img-wrap">
        <img
          src={industry.image}
          alt={`Real commercial operations in ${industry.name}`}
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
        <h3 className="industry-card-title">{industry.name}</h3>
        <p className="industry-card-desc">{industry.shortDesc}</p>

        <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid var(--borders-light)" }}>
          <Link
            to={`/industries/${industry.slug}`}
            className="btn-link"
            aria-label={`View systems and workflows for ${industry.name}`}
          >
            Explore systems &amp; workflows <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
