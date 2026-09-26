import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ServiceCard from "../components/cards/ServiceCard";
import { servicesData } from "../data/initialData";

export default function CapabilitiesPreviewSection({ services = servicesData, onOpenAudit }) {
  return (
    <section className="section" id="capabilities">
      <div className="container">
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "1.5rem", marginBottom: "3rem" }}>
          <div style={{ maxWidth: "720px" }}>
            <span className="eyebrow">OUR CAPABILITIES</span>
            <h2 style={{ marginBottom: "1rem" }}>
              Engineered software and systems integration
            </h2>
            <p className="lead-text" style={{ margin: 0 }}>
              We build custom applications, unify disconnected platforms, automate multi-step workflows, and introduce pragmatic machine learning to solve operational bottlenecks.
            </p>
          </div>
          <div>
            <Link to="/solutions" className="btn btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              All 8 Capabilities <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {services.map((s) => (
            <ServiceCard key={s.slug || s.title} service={s} onOpenAudit={onOpenAudit} />
          ))}
        </div>
      </div>
    </section>
  );
}
