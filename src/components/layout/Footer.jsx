import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Github, Linkedin, Twitter, Phone, Mail, MapPin } from "lucide-react";
import corebridgeLogoWhite from "../../assets/corebridge-logo-white.png";

export default function Footer({ onOpenAudit }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" style={{ background: "var(--dark)", color: "var(--white)", paddingTop: "60px", paddingBottom: "32px" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "40px", marginBottom: "48px" }}>
        
        {/* Col 1: Brand & Positioning */}
        <div>
          <Link to="/" onClick={scrollToTop} className="footer-brand-btn" style={{ marginBottom: "16px", display: "inline-flex" }}>
            <img className="brand-mark" src={corebridgeLogoWhite} alt="Corebridge" width="28" height="28" />
            <span style={{ fontSize: "18px", fontWeight: "800", letterSpacing: "-0.03em" }}>Corebridge</span>
          </Link>
          <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: "1.6", maxWidth: "280px", marginBottom: "20px" }}>
            Smarter Systems. Stronger Businesses. Custom software, integrations, AI automation, and enterprise consultancy for growing companies.
          </p>
          <div className="social-row">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={15} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <Twitter size={15} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={15} />
            </a>
          </div>
        </div>

        {/* Col 2: Solutions */}
        <div>
          <h4 style={{ color: "#f8fafc", fontSize: "14px", fontWeight: "600", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "16px" }}>
            Solutions
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
            <li>
              <Link to="/solutions" onClick={scrollToTop} style={{ color: "#94a3b8", transition: "color 0.15s" }}>
                Custom Software
              </Link>
            </li>
            <li>
              <Link to="/solutions" onClick={scrollToTop} style={{ color: "#94a3b8", transition: "color 0.15s" }}>
                System Integrations
              </Link>
            </li>
            <li>
              <Link to="/solutions" onClick={scrollToTop} style={{ color: "#94a3b8", transition: "color 0.15s" }}>
                AI Integrations & Bots
              </Link>
            </li>
            <li>
              <Link to="/solutions" onClick={scrollToTop} style={{ color: "#94a3b8", transition: "color 0.15s" }}>
                Odoo & Zoho ERP
              </Link>
            </li>
            <li>
              <Link to="/solutions" onClick={scrollToTop} style={{ color: "#94a3b8", transition: "color 0.15s" }}>
                IT Consultancy
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Industries */}
        <div>
          <h4 style={{ color: "#f8fafc", fontSize: "14px", fontWeight: "600", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "16px" }}>
            Industries
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
            <li>
              <Link to="/industries/pharmacies-health" onClick={scrollToTop} style={{ color: "#94a3b8" }}>
                Pharmacies & Health
              </Link>
            </li>
            <li>
              <Link to="/industries/transport-logistics" onClick={scrollToTop} style={{ color: "#94a3b8" }}>
                Transport & Logistics
              </Link>
            </li>
            <li>
              <Link to="/industries/fmcg-wholesalers" onClick={scrollToTop} style={{ color: "#94a3b8" }}>
                FMCG Wholesalers
              </Link>
            </li>
            <li>
              <Link to="/industries/manufacturing" onClick={scrollToTop} style={{ color: "#94a3b8" }}>
                Manufacturing & Assembly
              </Link>
            </li>
            <li>
              <Link to="/industries/microfinance-credit" onClick={scrollToTop} style={{ color: "#94a3b8" }}>
                Microfinance & Credit
              </Link>
            </li>
            <li>
              <Link to="/industries/private-security" onClick={scrollToTop} style={{ color: "#94a3b8" }}>
                Private Security
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact & Direct Engineering */}
        <div>
          <h4 style={{ color: "#f8fafc", fontSize: "14px", fontWeight: "600", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "16px" }}>
            Direct Engineering
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "13px", color: "#94a3b8", marginBottom: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Phone size={14} style={{ color: "#38bdf8" }} />
              <a href="tel:+263780787214" style={{ color: "#f8fafc", fontWeight: "500" }}>
                +263 780 787 214
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Mail size={14} style={{ color: "#38bdf8" }} />
              <a href="mailto:info@corebridge.co.zw" style={{ color: "#cbd5e1" }}>
                info@corebridge.co.zw
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
              <MapPin size={14} style={{ color: "#38bdf8", marginTop: "2px", flexShrink: 0 }} />
              <span>Harare, Zimbabwe</span>
            </div>
          </div>
          <button className="footer-cta" onClick={onOpenAudit}>
            Free Audit <ArrowUpRight size={13} />
          </button>
        </div>

      </div>

      <div className="container footer-bottom" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px" }}>
        <span>© 2025 Corebridge. All rights reserved.</span>
        <span>Localising Global Systems for Zimbabwean Enterprise.</span>
      </div>
    </footer>
  );
}
