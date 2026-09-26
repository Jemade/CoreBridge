import React from "react";
import { Link } from "react-router-dom";
import { interoperabilitySteps } from "../data/initialData";
import { ArrowRight, Workflow } from "lucide-react";

export default function InteroperabilitySection({ onOpenAudit }) {
  return (
    <section className="section" id="interoperability">
      <div className="container">
        <div className="section-header centered">
          <span className="eyebrow">CONTINUOUS DATA MOVEMENT</span>
          <h2 style={{ marginBottom: "1.25rem" }}>
            One business. One connected flow of information.
          </h2>
          <p className="lead-text" style={{ margin: "0 auto" }}>
            A single commercial event, such as a customer purchase, touches nearly every department. Your staff should not have to manually re-enter and reconcile that same transaction six times across six disconnected platforms.
          </p>
        </div>

        <div className="interop-flow-strip">
          {interoperabilitySteps.map((step, idx) => (
            <div key={idx} className="interop-step-card">
              <span className="interop-step-num">STAGE {step.step}</span>
              <h4 className="interop-step-title">{step.node}</h4>
              <p className="interop-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "3rem",
            padding: "2rem",
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--borders)",
            borderRadius: "var(--radius-md)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem"
          }}
        >
          <div>
            <h4 style={{ fontSize: "1.1rem", marginBottom: "0.35rem" }}>
              Have disconnected handoffs in your customer or sales journey?
            </h4>
            <p style={{ fontSize: "0.94rem", color: "var(--muted)", margin: 0 }}>
              We map the data dependencies across your platforms and engineer automated connectors to eliminate friction.
            </p>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={onOpenAudit}
          >
            Review Your Flow <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
