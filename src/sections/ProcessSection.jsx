import React from "react";
import { ChevronRight } from "lucide-react";
import { processSteps, resultsData } from "../data/initialData";

export default function ProcessSection() {
  return (
    <section id="process" className="section process-section">
      <div className="container">

        {/* OUR PROCESS ROW */}
        <div className="process-row">
          <div className="process-intro-col">
            <span className="section-label">OUR PROCESS</span>
            <h2>From Insight to Impact</h2>
            <p>
              We follow a simple, proven engineering process to get you from operational problem
              to working system reliably and efficiently.
            </p>
          </div>

          <div className="process-steps-col">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={step.num}>
                  <div className="process-step-item">
                    <div className="step-badge-wrap">
                      <span className="step-num-pill">{step.num}</span>
                      <div className="step-icon-circle">
                        <Icon size={18} strokeWidth={2.2} />
                      </div>
                    </div>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc">{step.text}</p>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="process-chevron">
                      <ChevronRight size={18} strokeWidth={2} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* WHY COREBRIDGE / RESULTS ROW */}
        <div className="results-row">
          <div className="results-intro-col">
            <span className="section-label">WHY COREBRIDGE</span>
            <h2>Results That Matter</h2>
            <p>We focus on measurable engineering outcomes, not just deliverables.</p>
          </div>

          <div className="results-stats-col">
            {resultsData.map((r, i) => (
              <React.Fragment key={r.label}>
                <div className="results-stat-item">
                  <strong className="stat-value">{r.stat}</strong>
                  <span className="stat-label">{r.label}</span>
                  <p className="stat-note">{r.note}</p>
                </div>
                {i < resultsData.length - 1 && (
                  <div className="results-chevron">
                    <ChevronRight size={18} strokeWidth={2} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
