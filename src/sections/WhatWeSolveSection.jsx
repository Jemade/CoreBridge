import React from "react";
import { problemsWeSolve } from "../data/initialData";

export default function WhatWeSolveSection() {
  return (
    <section className="section" id="what-we-solve">
      <div className="container">
        <div className="section-header centered">
          <span className="eyebrow">PRACTICAL PROBLEM SOLVING</span>
          <h2 style={{ marginBottom: "1.25rem" }}>
            What we help businesses fix
          </h2>
          <p className="lead-text" style={{ margin: "0 auto" }}>
            We work with grounded, operational friction points. When your team spends time maintaining workarounds instead of serving clients, here is where we intervene.
          </p>
        </div>

        <div className="problem-card-grid">
          {problemsWeSolve.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="problem-card">
                <div className="problem-card-icon">
                  <Icon size={20} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
