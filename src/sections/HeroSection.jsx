import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroSection({ onOpenAudit }) {
  return (
    <section id="home" className="hero">
      <div className="hero-grid" />

      <div className="container hero-inner">

        {/* ── LEFT: Copy */}
        <div className="hero-copy">
          <span className="kicker">SOFTWARE / INTEGRATIONS / AI / CONSULTANCY</span>

          <h1>
            Smarter Systems.<br />
            Stronger Businesses.
          </h1>

          <p className="hero-lead">
            We help growing businesses streamline operations, integrate
            modern systems, and unlock the power of AI. From custom software
            development to enterprise platform configuration, we build
            solutions that work for your people, your processes, and your
            bottom line.
          </p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={onOpenAudit}>
              Get Your Free 15-Minute Audit <ArrowRight size={16} />
            </button>
            <Link to="/solutions" className="ghost-btn" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              Explore Our Services
            </Link>
          </div>

          <div className="hero-proof">
            <div className="hero-proof-item">
              <svg className="proof-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 7V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"/>
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <circle cx="7" cy="16.5" r="1.5" fill="currentColor"/>
                <circle cx="17" cy="16.5" r="1.5" fill="currentColor"/>
              </svg>
              <span>Odoo &amp; Zoho Experts</span>
            </div>
            <div className="proof-divider" />
            <div className="hero-proof-item">
              <svg className="proof-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3.5" />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                <circle cx="12" cy="2" r="1" fill="currentColor" />
                <circle cx="12" cy="22" r="1" fill="currentColor" />
                <circle cx="2" cy="12" r="1" fill="currentColor" />
                <circle cx="22" cy="12" r="1" fill="currentColor" />
                <circle cx="4.93" cy="4.93" r="1" fill="currentColor" />
                <circle cx="19.07" cy="19.07" r="1" fill="currentColor" />
                <circle cx="4.93" cy="19.07" r="1" fill="currentColor" />
                <circle cx="19.07" cy="4.93" r="1" fill="currentColor" />
              </svg>
              <span>AI Integration</span>
            </div>
            <div className="proof-divider" />
            <div className="hero-proof-item">
              <svg className="proof-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Local Support (Zimbabwe)</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Visual */}
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-bg-glow" />
          <div className="bg-orbit-glow-left" />
          <div className="bg-orbit-curve-right" />
          <div className="bg-orbit-ring-outer" />
          <div className="bg-orbit-ring-inner" />

          {/* Composition container */}
          <div className="dashboard-composition">
            {/* Floating Platform Chips */}
            <div className="icon-chip-row">
              {/* 1. odoo */}
              <div className="chip-card chip-odoo">
                <div className="chip-tab chip-tab-top" />
                <span className="odoo-logo-text">odoo</span>
              </div>

              {/* 2. ZOHO */}
              <div className="chip-card chip-zoho">
                <div className="chip-tab chip-tab-top" />
                <div className="zoho-horizontal">
                  <span className="z-tile z-blue">z</span>
                  <span className="z-tile z-red">o</span>
                  <span className="z-tile z-green">h</span>
                  <span className="z-tile z-orange">o</span>
                </div>
                <div className="chip-tab chip-tab-bottom" />
              </div>

              {/* 3. WhatsApp */}
              <div className="chip-card chip-whatsapp">
                <div className="app-tile-wa">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                    <path fill="#25D366" d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.994 9.994 0 004.779 1.217h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.922-7.062A9.935 9.935 0 0012.012 2z"/>
                    <path fill="#ffffff" d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.275-.1-.475-.15-.675.15-.2.3-.774.98-.95 1.18-.175.2-.35.225-.65.075-.301-.15-1.27-.468-2.42-1.494-.894-.798-1.498-1.784-1.674-2.084-.175-.301-.019-.464.131-.613.136-.135.301-.35.451-.525.15-.175.2-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-.926-2.23-.244-.585-.493-.505-.676-.514-.175-.009-.375-.01-.576-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.026-1.05 2.502 0 1.477 1.075 2.903 1.225 3.104.15.2 2.115 3.23 5.124 4.53.716.31 1.275.495 1.71.634.719.228 1.374.196 1.892.119.577-.086 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.126-.275-.201-.576-.351z"/>
                  </svg>
                </div>
              </div>

              {/* 4. AI */}
              <div className="chip-card chip-ai">
                <div className="app-tile-ai">
                  <span>AI</span>
                </div>
              </div>
            </div>

            {/* Main Dashboard Panel */}
            <div className="system-panel">
              <div className="panel-content">
                {/* Sidebar */}
                <aside className="panel-side">
                  <div className="panel-side-logo">
                    <div className="panel-side-logo-mark">
                      <svg viewBox="0 0 20 20" width="13" height="13" fill="none">
                        <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="2.5" />
                        <circle cx="10" cy="10" r="3" fill="white" />
                      </svg>
                    </div>
                    <span className="panel-side-logo-text">odoo</span>
                  </div>

                  {[
                    { label: "Dashboard", active: true, icon: "grid" },
                    { label: "Sales", icon: "tag" },
                    { label: "Inventory", icon: "box" },
                    { label: "Accounting", icon: "dollar" },
                    { label: "Manufacturing", icon: "factory" },
                    { label: "CRM", icon: "users" },
                    { label: "Reports", icon: "chart" },
                    { label: "Settings", icon: "gear" }
                  ].map(item => (
                    <div key={item.label} className={`side-item${item.active ? " active" : ""}`}>
                      <span className={`side-icon side-icon-${item.icon}`} />
                      {item.label}
                    </div>
                  ))}
                </aside>

                {/* Dashboard View */}
                <div className="dashboard">
                  <div className="dash-top-bar">
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span className="dash-overview-title">Systems Architecture</span>
                      <span style={{ fontSize: "10px", background: "#eff6ff", color: "#1769e8", fontWeight: "600", padding: "2px 6px", borderRadius: "4px" }}>
                        Active Sync
                      </span>
                    </div>
                    <div className="dash-utility-icons">
                      <button className="dash-icon-btn" aria-label="Search" title="Search">
                        <svg viewBox="0 0 20 20" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="8.5" cy="8.5" r="5.5" />
                          <line x1="13" y1="13" x2="17" y2="17" />
                        </svg>
                      </button>
                      <button className="dash-icon-btn" aria-label="Notifications" title="Notifications">
                        <svg viewBox="0 0 20 20" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 14v-5a5 5 0 00-10 0v5l-1.5 2h13L15 14z" />
                          <path d="M8.5 17a1.5 1.5 0 003 0" />
                        </svg>
                      </button>
                      <button className="dash-icon-btn" aria-label="Apps" title="Apps">
                        <svg viewBox="0 0 20 20" width="11" height="11" fill="currentColor">
                          <circle cx="5" cy="5" r="1.8" />
                          <circle cx="15" cy="5" r="1.8" />
                          <circle cx="5" cy="15" r="1.8" />
                          <circle cx="15" cy="15" r="1.8" />
                        </svg>
                      </button>
                      <div className="dash-user-avatar" title="User Profile">
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="#64748b">
                          <circle cx="12" cy="8" r="4" />
                          <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Architecture Metrics: Honest system performance metrics rather than fabricated company sales */}
                  <div className="metrics-row-wrapper">
                    <div className="metrics">
                      <div className="metric-card">
                        <span className="metric-label">System Uptime</span>
                        <span className="metric-val">99.98%</span>
                        <span className="metric-change">
                          <svg viewBox="0 0 10 10" width="7" height="7" fill="currentColor">
                            <polygon points="5,1 9,8 1,8" />
                          </svg>
                          SLA
                        </span>
                      </div>
                      <div className="metric-card">
                        <span className="metric-label">Sync Latency</span>
                        <span className="metric-val">&lt; 240ms</span>
                        <span className="metric-change">
                          <svg viewBox="0 0 10 10" width="7" height="7" fill="currentColor">
                            <polygon points="5,1 9,8 1,8" />
                          </svg>
                          Live
                        </span>
                      </div>
                      <div className="metric-card">
                        <span className="metric-label">Automated Workflows</span>
                        <span className="metric-val">100%</span>
                        <span className="metric-change">
                          <svg viewBox="0 0 10 10" width="7" height="7" fill="currentColor">
                            <polygon points="5,1 9,8 1,8" />
                          </svg>
                          Active
                        </span>
                      </div>
                    </div>
                    <div className="dash-context-dots" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className="chart-card">
                    <div className="chart-head">
                      <span>Event Pipeline Throughput (Events/sec)</span>
                    </div>
                    <div className="chart-wrapper">
                      <div className="chart-y-axis">
                        <span>200</span>
                        <span>150</span>
                        <span>100</span>
                        <span>50</span>
                      </div>
                      <div className="chart-area-box">
                        <svg viewBox="0 0 400 110" preserveAspectRatio="none" className="chart">
                          <defs>
                            <linearGradient id="chartGrad" x1="0" x2="0" y1="0" y2="1">
                              <stop offset="0%" stopColor="#3b82f6" stopOpacity=".26" />
                              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M0 88 C30 84 50 72 80 75 S120 84 150 68 S190 72 220 54 S260 66 290 42 S330 50 360 28 S385 34 400 10 L400 110 L0 110Z"
                            fill="url(#chartGrad)"
                          />
                          <path
                            d="M0 88 C30 84 50 72 80 75 S120 84 150 68 S190 72 220 54 S260 66 290 42 S330 50 360 28 S385 34 400 10"
                            fill="none"
                            stroke="#2563eb"
                            strokeWidth="2.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="chart-x-axis">
                          <span>00:00</span>
                          <span>06:00</span>
                          <span>12:00</span>
                          <span>18:00</span>
                          <span>24:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Phone Mockup (Samsung Galaxy S26 Replica) */}
            <div className="hero-phone-device s26-frame">
              <div className="s26-top-speaker" />
              <div className="s26-btn s26-btn-left" />
              <div className="s26-btn s26-btn-vol" />
              <div className="s26-btn s26-btn-power" />

              <div className="phone-screen">
                <div className="s26-status-bar">
                  <span className="s26-status-time">12:41</span>
                  <div className="s26-punch-camera" />
                  <div className="s26-status-icons">
                    <svg viewBox="0 0 16 12" width="9" height="7" fill="currentColor">
                      <rect x="1" y="8" width="2" height="4" rx="0.5"/>
                      <rect x="4.5" y="6" width="2" height="6" rx="0.5"/>
                      <rect x="8" y="3.5" width="2" height="8.5" rx="0.5"/>
                      <rect x="11.5" y="1" width="2" height="11" rx="0.5"/>
                    </svg>
                    <span className="s26-battery" />
                  </div>
                </div>

                <div className="phone-wa-head">
                  <div className="phone-wa-left">
                    <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="phone-wa-back">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                    <div className="phone-wa-avatar">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                        <path fill="#25D366" d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.994 9.994 0 004.779 1.217h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.922-7.062A9.935 9.935 0 0012.012 2z"/>
                        <path fill="#ffffff" d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.275-.1-.475-.15-.675.15-.2.3-.774.98-.95 1.18-.175.2-.35.225-.65.075-.301-.15-1.27-.468-2.42-1.494-.894-.798-1.498-1.784-1.674-2.084-.175-.301-.019-.464.131-.613.136-.135.301-.35.451-.525.15-.175.2-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-.926-2.23-.244-.585-.493-.505-.676-.514-.175-.009-.375-.01-.576-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.026-1.05 2.502 0 1.477 1.075 2.903 1.225 3.104.15.2 2.115 3.23 5.124 4.53.716.31 1.275.495 1.71.634.719.228 1.374.196 1.892.119.577-.086 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.126-.275-.201-.576-.351z"/>
                      </svg>
                    </div>
                    <div className="phone-wa-info">
                      <strong>WhatsApp Business</strong>
                    </div>
                  </div>
                  <div className="phone-wa-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="phone-wa-chat">
                  <div className="phone-bubble in">
                    <p className="phone-msg-text">
                      Your order #4587 is on the way!
                      <br />
                      Expected delivery: Today 2:00 PM
                    </p>
                    <span className="phone-time">12:41</span>
                  </div>
                  <div className="phone-bubble out">
                    <p className="phone-msg-text">Thank you!</p>
                    <span className="phone-time checks">
                      <svg viewBox="0 0 16 10" width="11" height="8" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="1.5 5.5 5 9 14.5 1" />
                        <polyline points="5.5 5.5 8.5 9 15.5 2" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="s26-home-bar" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
