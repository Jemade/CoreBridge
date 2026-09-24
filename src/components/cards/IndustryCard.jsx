import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function IndustryCard({ industry, isActive, onMouseEnter }) {
  return (
    <Link
      to={`/industries/${industry.slug}`}
      className={`industry-card${isActive ? " active" : ""}`}
      onMouseEnter={onMouseEnter}
    >
      <img className="industry-img" src={industry.image} alt={industry.name} loading="lazy" />
      <span className="industry-shade" />
      <div className="industry-body">
        <h3>{industry.name}</h3>
        <p style={{ whiteSpace: "pre-line" }}>{industry.shortDesc || industry.desc}</p>
        <span className="industry-go">
          <ArrowRight size={10} strokeWidth={2.2} />
        </span>
      </div>
    </Link>
  );
}
