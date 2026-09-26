import React, { useState } from "react";
import { systemsMapNodes } from "../../data/initialData";
import { Network, ArrowRight } from "lucide-react";

export default function SystemsMap({ onOpenAudit }) {
  const [activeNodeId, setActiveNodeId] = useState("pos");

  const leftNodes = systemsMapNodes.slice(0, 6);
  const rightNodes = systemsMapNodes.slice(6, 12);
  const activeNode = systemsMapNodes.find((n) => n.id === activeNodeId) || systemsMapNodes[0];

  return (
    <section className="systems-map-section" id="systems-map">
      <div className="container">
        <div className="section-header centered">
          <span className="eyebrow eyebrow-dark">SYSTEMS ARCHITECTURE &amp; INTEROPERABILITY</span>
          <h2 style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
            Connecting the systems your business already depends on.
          </h2>
          <p style={{ color: "#94A3B8" }}>
            Corebridge sits between your operational systems, building reliable data pipelines, automated event queues, and custom APIs so data moves without manual re-entry.
          </p>
        </div>

        <div className="systems-map-wrapper">
          {/* Desktop Interactive Architecture Diagram */}
          <div className="desktop-systems-layout">
            {/* Left Column Nodes */}
            <div className="map-column-nodes">
              {leftNodes.map((node) => {
                const isActive = node.id === activeNodeId;
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
                    <span className="node-code">{node.name}</span>
                    <div className="node-title">{node.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Central Corebridge Gateway Hub */}
            <div className="systems-center-hub">
              <div className="hub-pulse-ring" />
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(23, 105, 232, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#38BDF8",
                  marginBottom: "1rem"
                }}
              >
                <Network size={28} />
              </div>
              <div className="hub-brand-name">COREBRIDGE</div>
              <div className="hub-caption">Interoperability &amp; Integration Layer</div>

              {/* Dynamic Connection Inspector */}
              <div className="hub-detail-box">
                <div style={{ color: "#38BDF8", fontWeight: "700", fontSize: "0.8rem", textTransform: "uppercase", marginBottom: "0.35rem" }}>
                  Active Connection: {activeNode.name} &rarr; Corebridge
                </div>
                <div>{activeNode.connectionText}</div>
              </div>

              <div style={{ marginTop: "1.5rem" }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onOpenAudit}
                  style={{ fontSize: "0.85rem", padding: "0.6rem 1.25rem" }}
                >
                  Discuss Integration Flow <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Right Column Nodes */}
            <div className="map-column-nodes">
              {rightNodes.map((node) => {
                const isActive = node.id === activeNodeId;
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
                    <span className="node-code">{node.name}</span>
                    <div className="node-title">{node.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Sequential Vertical Architecture */}
          <div className="mobile-systems-layout">
            <div
              style={{
                textAlign: "center",
                padding: "1.5rem",
                background: "rgba(15, 23, 42, 0.9)",
                border: "2px solid var(--blue)",
                borderRadius: "var(--radius-md)",
                marginBottom: "1rem"
              }}
            >
              <div style={{ fontWeight: "800", fontSize: "1.2rem", color: "#FFFFFF" }}>COREBRIDGE</div>
              <div style={{ fontSize: "0.8rem", color: "#94A3B8" }}>Central Systems Integration Layer</div>
            </div>

            {systemsMapNodes.map((node) => (
              <div
                key={node.id}
                style={{
                  background: "rgba(15, 23, 42, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "var(--radius-sm)",
                  padding: "1.25rem"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                  <span style={{ color: "#38BDF8", fontWeight: "700", fontSize: "0.8rem", letterSpacing: "0.06em" }}>
                    {node.name}
                  </span>
                  <span style={{ color: "#94A3B8", fontSize: "0.76rem" }}>
                    {node.label}
                  </span>
                </div>
                <p style={{ color: "#CBD5E1", fontSize: "0.88rem", lineHeight: "1.5" }}>
                  {node.connectionText}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
