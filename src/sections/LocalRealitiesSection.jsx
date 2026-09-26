import React from "react";
import { 
  Coins, 
  Smartphone, 
  WifiOff, 
  Layers, 
  Users, 
  Headphones 
} from "lucide-react";
import { localRealities } from "../data/initialData";

export default function LocalRealitiesSection() {
  const realityIcons = [
    Coins,
    Smartphone,
    WifiOff,
    Layers,
    Users,
    Headphones
  ];

  return (
    <section className="section section-surface" id="local-realities">
      <div className="container">
        <div className="section-header centered">
          <span className="eyebrow">PRACTICAL RESILIENCE</span>
          <h2 style={{ marginBottom: "1.25rem" }}>
            Technology engineered for real-world conditions
          </h2>
          <p className="lead-text" style={{ margin: "0 auto" }}>
            International software architectures often assume perpetual high-speed broadband, single-currency markets, and frictionless banking. Corebridge designs and configures software specifically for how commerce actually functions across Zimbabwe.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          {localRealities.map((item, idx) => {
            const Icon = realityIcons[idx] || Layers;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--white)",
                  border: "1px solid var(--borders)",
                  borderRadius: "var(--radius-md)",
                  padding: "2rem",
                  transition: "all var(--transition-fast)"
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--soft-blue)",
                    color: "var(--blue)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem"
                  }}
                >
                  <Icon size={22} />
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: "700", color: "var(--primary)", marginBottom: "0.75rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.92rem", lineHeight: "1.6", color: "var(--muted)", margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
