import React from "react";
import { 
  Coins, 
  Smartphone, 
  WifiOff, 
  Layers, 
  Users, 
  Headphones 
} from "lucide-react";
import { zimbabweOperationsImg } from "../data/initialData";

export default function LocalRealitiesSection() {
  const considerations = [
    {
      icon: Coins,
      title: "Multi-currency operations",
      explanation: "Commercial businesses in Zimbabwe operate in dual-currency environments (USD and local currency) subject to evolving statutory regulations, exchange rate adjustments, and strict ledger auditing. We configure database models and accounting interfaces that handle dual-currency tracking, historical exchange rate calculations, and localized tax registers accurately."
    },
    {
      icon: Smartphone,
      title: "Payment ecosystems",
      explanation: "A business operating domestically cannot rely exclusively on international payment gateways. When organizations accept customer settlements through local mobile money rails such as EcoCash and OneMoney, online aggregators like Paynow, or domestic bank interbank clearing via ZIPIT, we engineer webhook listeners and settlement reconciliation pipelines where provider APIs or approved merchant interfaces are available."
    },
    {
      icon: WifiOff,
      title: "Connectivity resilience",
      explanation: "Broadband network instability and intermittent power outages are operational realities. We engineer offline-first architectures, local buffer queues (such as local SQLite queues at retail tills), and idempotent data synchronization so that cashiers can continue ringing up sales and warehouse staff can continue logging manifests even during connection drops."
    },
    {
      icon: Layers,
      title: "Preserving existing software",
      explanation: "Replacing software that an enterprise has run for a decade is financially expensive and operationally hazardous. If an existing accounting package or inventory database holds historical records reliably, Corebridge engineers middleware, database hooks, or custom API wrappers to connect it with new tools rather than forcing a disruptive wholesale replacement."
    },
    {
      icon: Users,
      title: "Staff adoption & usability",
      explanation: "A technically sophisticated system is useless if branch cashiers, dispatch clerks, or field sales technicians struggle to operate it. We design uncluttered, responsive interfaces with clear input validation, and support every system rollout with practical, hands-on staff enablement in the actual operating environment."
    },
    {
      icon: Headphones,
      title: "Local support on the ground",
      explanation: "When an operational issue occurs during peak trading, waiting for responses from offshore ticket queues in distant time zones creates costly delays. Corebridge provides direct engineering support on the ground in Harare, with software engineers who understand local commercial constraints and can resolve issues rapidly."
    }
  ];

  return (
    <section className="section" id="local-realities" style={{ backgroundColor: "var(--bg-surface)", borderBottom: "1px solid var(--borders)" }}>
      <div className="container">
        {/* Split Header with Real Commercial Photography */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
            marginBottom: "4rem"
          }}
        >
          <div>
            <span className="eyebrow">PRACTICAL RESILIENCE</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: "800", color: "var(--primary)", lineHeight: "1.2", marginBottom: "1.25rem" }}>
              Operating in Zimbabwe: Engineering for the real world
            </h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.7", color: "var(--text-dark)", marginBottom: "1rem" }}>
              Off-the-shelf international software is architected with assumptions that rarely reflect local operating environments: perfect high-speed fiber, single-currency clearing, and frictionless digital banking.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.65", color: "var(--muted)", margin: 0 }}>
              Corebridge designs, configures, and connects software specifically for how commerce actually functions across Zimbabwe and Southern Africa.
            </p>
          </div>

          <div style={{ position: "relative", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--borders)", boxShadow: "0 6px 20px rgba(10, 25, 41, 0.06)" }}>
            <img
              src={zimbabweOperationsImg}
              alt="Commercial business operations and technical management in Harare, Zimbabwe"
              style={{ width: "100%", height: "320px", objectFit: "cover", display: "block" }}
              loading="lazy"
            />
            <div
              style={{
                padding: "0.85rem 1.25rem",
                backgroundColor: "var(--white)",
                borderTop: "1px solid var(--borders)",
                fontSize: "0.82rem",
                color: "var(--muted)"
              }}
            >
              Domestic context: Software engineered for multi-currency transactions, local payments, and offline resilience
            </div>
          </div>
        </div>

        {/* 6 Practical Considerations Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2rem" }}>
          {considerations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--white)",
                  border: "1px solid var(--borders)",
                  borderRadius: "var(--radius-md)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "var(--soft-blue)",
                      color: "var(--blue)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: "800", color: "var(--primary)", margin: 0 }}>
                    {item.title}
                  </h3>
                </div>

                <p style={{ fontSize: "0.92rem", lineHeight: "1.65", color: "var(--text-dark)", margin: 0 }}>
                  {item.explanation}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
