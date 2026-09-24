import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ServiceCard from "../components/cards/ServiceCard";
import { servicesData } from "../data/initialData";

export default function ServicesSection({ services = servicesData, onOpenAudit }) {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-intro-2">
          <div>
            <span className="section-label">OUR SERVICES</span>
            <h2>End-to-End Technology<br />Solutions</h2>
          </div>
          <div>
            <p style={{ marginBottom: "12px" }}>
              We combine deep technical expertise with real business
              understanding to deliver solutions that solve real operational bottlenecks,
              not just add more software.
            </p>
            <Link to="/solutions" style={{ fontSize: "13px", fontWeight: "600", color: "var(--blue)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
              Detailed capabilities breakdown <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        <div className="services-grid">
          {services.map(s => (
            <ServiceCard key={s.slug || s.title} service={s} onSelect={onOpenAudit} />
          ))}
        </div>
      </div>
    </section>
  );
}
