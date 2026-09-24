import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import IndustryCard from "../components/cards/IndustryCard";
import { industriesData } from "../data/initialData";

export default function IndustriesSection({ industries = industriesData, onOpenAudit }) {
  const [activeInd, setActiveInd] = useState(0);

  return (
    <section id="industries" className="dark-section">
      <div className="container">
        <div className="section-intro-3 dark-intro">
          <div>
            <span className="section-label light">INDUSTRY SOLUTIONS</span>
            <h2>Built for Your Industry</h2>
          </div>
          <p className="dark-text">
            Every industry has unique challenges. We provide
            industry-specific systems that fit your operations,
            team and growth goals.
          </p>
          <Link to="/industries" className="view-all light">
            View All Industries <ArrowRight size={12} />
          </Link>
        </div>

        <div className="industry-grid">
          {industries.map((item, i) => (
            <IndustryCard
              key={item.slug || item.name}
              industry={item}
              isActive={activeInd === i}
              onMouseEnter={() => setActiveInd(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
