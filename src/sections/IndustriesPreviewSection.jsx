import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import IndustryCard from "../components/cards/IndustryCard";
import { industriesData } from "../data/initialData";

export default function IndustriesPreviewSection({ industries = industriesData }) {
  // Display the top 6 core enterprise sectors on the homepage
  const featuredIndustries = industries.slice(0, 6);

  return (
    <section className="section" id="industries">
      <div className="container">
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "1.5rem", marginBottom: "3rem" }}>
          <div style={{ maxWidth: "720px" }}>
            <span className="eyebrow">SECTORS &amp; DOMAINS</span>
            <h2 style={{ marginBottom: "1rem" }}>
              Built for the operating environments of Zimbabwean industry
            </h2>
            <p className="lead-text" style={{ margin: 0 }}>
              Every industry has specific operational dependencies: wholesale distribution requires real-time stock sync, manufacturing requires bill-of-materials tracking, and retail demands rapid multi-till cashiering.
            </p>
          </div>
          <div>
            <Link to="/industries" className="btn btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              All 17 Industries <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="industry-grid">
          {featuredIndustries.map((ind) => (
            <IndustryCard key={ind.slug || ind.name} industry={ind} />
          ))}
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.95rem", color: "var(--muted)", marginBottom: "1rem" }}>
            Operating in Mining, Energy, Construction, Hospitality, or Professional Services?
          </p>
          <Link to="/industries" className="btn-link" style={{ fontSize: "1rem", fontWeight: "700" }}>
            Browse full directory of 17 commercial sectors <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
