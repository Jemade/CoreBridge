import React, { useState } from "react";
import { systemsMapNodes } from "../../data/initialData";
import BrandWordmark from "./BrandWordmark";

export default function SystemsMap({ onOpenAudit }) {
  const [activeNodeId, setActiveNodeId] = useState("pos");

  const leftNodes = systemsMapNodes.slice(0, 5);
  const rightNodes = systemsMapNodes.slice(5, 11);
  const activeNode = systemsMapNodes.find((n) => n.id === activeNodeId) || systemsMapNodes[0];

  return (
    <section className="systems-map-section" id="systems-map" style={{ backgroundColor: "#06101E", padding: "5rem 0" }}>
      <div className="container">
        <div className="section-header centered" style={{ maxWidth: "800px", margin: "0 auto 3rem auto" }}>
          <span className="eyebrow-dark">SYSTEMS ARCHITECTURE &amp; INTEROPERABILITY</span>
          <h2 style={{ color: "#FFFFFF", marginBottom: "1rem", fontSize: "2.3rem", fontWeight: "800", letterSpacing: "-0.02em" }}>
            Connecting the systems your business already depends on
          </h2>
          <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: "1.65" }}>
            Corebridge sits between your operational systems, engineering reliable data pipelines, automated event queues, and custom APIs so data moves without manual re-entry.
          </p>
        </div>

        <div className="systems-map-wrapper">
          {/* Desktop Clean Enterprise Architecture Diagram */}
          <div className="desktop-systems-layout">
            {/* Left Column Nodes */}
            <div className="map-column-nodes">
              {leftNodes.map((node) => {
                const isActive = node.id === activeNodeId;
                const Icon = node.icon;
                return (
                  <div
                    key={node.id}
                    className={`system-node-card ${isActive ? "active" : ""}`}
                    onMouseEnter={() => setActiveNodeId(node.id)}
                    onClick={() => setActiveNodeId(node.id)}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isActive}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setActiveNodeId(node.id);
                      }
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      {Icon && (
                        <span style={{ color: isActive ? "#38BDF8" : "#94A3B8", display: "flex", alignItems: "center" }}>
                          <Icon size={18} />
                        </span>
                      )}
                      <div>
                        <span className="node-code">{node.name}</span>
                        <div className="node-title">{node.label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Central Corebridge Gateway Hub */}
            <div className="systems-center-hub">
              <div style={{ marginBottom: "0.6rem" }}>
                <BrandWordmark variant="white" size="1.45rem" />
              </div>
              <div className="hub-caption">Interoperability &amp; Middleware Layer</div>

              {/* Dynamic Connection Inspector */}
              <div className="hub-detail-box">
                <div style={{ color: "#38BDF8", fontWeight: "700", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.4rem" }}>
                  Selected System: {activeNode.name} ({activeNode.label})
                </div>
                <div style={{ fontSize: "0.9rem", color: "#E2E8F0", lineHeight: "1.6" }}>
                  {activeNode.connectionText}
                </div>
              </div>

              <div style={{ marginTop: "1.5rem", width: "100%" }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onOpenAudit}
                  style={{ width: "100%", justifyContent: "center", fontSize: "0.88rem" }}
                >
                  Discuss Integration Flow
                </button>
              </div>
            </div>

            {/* Right Column Nodes */}
            <div className="map-column-nodes">
              {rightNodes.map((node) => {
                const isActive = node.id === activeNodeId;
                const Icon = node.icon;
                return (
                  <div
                    key={node.id}
                    className={`system-node-card ${isActive ? "active" : ""}`}
                    onMouseEnter={() => setActiveNodeId(node.id)}
                    onClick={() => setActiveNodeId(node.id)}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isActive}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setActiveNodeId(node.id);
                      }
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      {Icon && (
                        <span style={{ color: isActive ? "#38BDF8" : "#94A3B8", display: "flex", alignItems: "center" }}>
                          <Icon size={18} />
                        </span>
                      )}
                      <div>
                        <span className="node-code">{node.name}</span>
                        <div className="node-title">{node.label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Sequential Vertical Architecture */}
          <div className="mobile-systems-layout" style={{ marginTop: "1.5rem" }}>
            <div
              style={{
                textAlign: "center",
                padding: "1.5rem",
                backgroundColor: "#0A1929",
                border: "1px solid #1E3A5F",
                borderRadius: "var(--radius-md)",
                marginBottom: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <div style={{ marginBottom: "0.5rem" }}>
                <BrandWordmark variant="white" size="1.25rem" />
              </div>
              <div style={{ fontSize: "0.8rem", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "0.25rem" }}>
                Interoperability &amp; Middleware Layer
              </div>
            </div>

            {systemsMapNodes.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.id}
                  style={{
                    backgroundColor: "#0F172A",
                    border: "1px solid #1E293B",
                    borderRadius: "var(--radius-sm)",
                    padding: "1.25rem"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                    {Icon && <Icon size={16} style={{ color: "#38BDF8" }} />}
                    <span style={{ color: "#38BDF8", fontWeight: "700", fontSize: "0.82rem", letterSpacing: "0.06em" }}>
                      {node.name}
                    </span>
                    <span style={{ color: "#94A3B8", fontSize: "0.78rem" }}>
                      ({node.label})
                    </span>
                  </div>
                  <p style={{ color: "#CBD5E1", fontSize: "0.88rem", lineHeight: "1.55", margin: 0 }}>
                    {node.connectionText}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
