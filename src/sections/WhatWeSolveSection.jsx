import React from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { problemsWeSolve, whatWeSolveImg } from "../data/initialData";

export default function WhatWeSolveSection({ onOpenAudit }) {
  return (
    <section className="section" id="what-we-solve" style={{ backgroundColor: "var(--white)", borderBottom: "1px solid var(--borders)" }}>
      <div className="container">
        {/* Header & Editorial Photo Split */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "3rem",
            alignItems: "center",
            marginBottom: "4rem"
          }}
        >
          <div>
            <span className="eyebrow">PRACTICAL PROBLEM SOLVING</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: "800", color: "var(--primary)", lineHeight: "1.2", marginBottom: "1.25rem" }}>
              The 8 operational bottlenecks we help businesses solve
            </h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.7", color: "var(--text-dark)", marginBottom: "1rem" }}>
              We do not solve theoretical problems. We intervene when operational friction causes administrative delays, stock discrepancies, cash matching errors, and staff burnout.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.65", color: "var(--muted)", margin: 0 }}>
              Below is our exact engineering scope: what each problem looks like on the ground, and the concrete technical bridge Corebridge implements to fix it.
            </p>
          </div>

          <div style={{ position: "relative", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--borders)", boxShadow: "0 6px 20px rgba(10, 25, 41, 0.06)" }}>
            <img
              src={whatWeSolveImg}
              alt="Industrial operations dispatch, inventory logistics, and technical execution"
              style={{ width: "100%", height: "320px", objectFit: "cover", display: "block" }}
              loading="lazy"
            />
            <div
              style={{
                padding: "0.85rem 1.25rem",
                backgroundColor: "var(--bg-surface)",
                borderTop: "1px solid var(--borders)",
                fontSize: "0.82rem",
                color: "var(--muted)"
              }}
            >
              Documented reality: Eliminating manual administrative bottlenecks in active business operations
            </div>
          </div>
        </div>

        {/* 8 Detailed Problem Blocks */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "2rem" }}>
          {problemsWeSolve.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--borders)",
                  borderRadius: "var(--radius-md)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {/* Header */}
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
                  <div>
                    <span style={{ fontSize: "0.74rem", fontWeight: "700", color: "var(--blue)", letterSpacing: "0.06em" }}>
                      ISSUE 0{idx + 1}
                    </span>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", margin: 0 }}>
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Explanation */}
                <p style={{ fontSize: "0.94rem", lineHeight: "1.65", color: "var(--text-dark)", marginBottom: "1.25rem" }}>
                  {item.explanation}
                </p>

                {/* Symptoms in Business */}
                <div style={{ marginBottom: "1.25rem", backgroundColor: "var(--white)", border: "1px solid #FECACA", borderRadius: "var(--radius-sm)", padding: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#DC2626", fontSize: "0.78rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.35rem" }}>
                    <AlertCircle size={14} /> What It Looks Like in Practice
                  </div>
                  <p style={{ fontSize: "0.88rem", lineHeight: "1.55", color: "#7F1D1D", margin: 0 }}>
                    {item.symptoms}
                  </p>
                </div>

                {/* Corebridge Solution */}
                <div style={{ marginTop: "auto", backgroundColor: "var(--white)", border: "1px solid #BAE6FD", borderRadius: "var(--radius-sm)", padding: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--blue)", fontSize: "0.78rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.35rem" }}>
                    <CheckCircle2 size={14} /> How Corebridge Solves It
                  </div>
                  <p style={{ fontSize: "0.88rem", lineHeight: "1.55", color: "var(--text-dark)", margin: 0 }}>
                    {item.solution}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Review Prompt */}
        <div style={{ marginTop: "3.5rem", textAlign: "center" }}>
          <p style={{ fontSize: "1rem", color: "var(--muted)", marginBottom: "1.25rem" }}>
            Experiencing one or more of these operational bottlenecks right now?
          </p>
          <button type="button" className="btn btn-primary" onClick={onOpenAudit}>
            Schedule an Operational Review <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
