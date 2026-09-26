import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import BrandWordmark from "../common/BrandWordmark";
import WhatsAppIcon from "../common/WhatsAppIcon";

export default function Footer({ onOpenAudit }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" aria-label="Site Footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Col 1: Brand & Positioning */}
          <div>
            <Link to="/" onClick={scrollToTop} className="brand-link" style={{ marginBottom: "1rem", display: "inline-flex" }}>
              <BrandWordmark variant="white" />
            </Link>
            <p style={{ color: "#94A3B8", fontSize: "0.92rem", lineHeight: "1.65", marginBottom: "1.25rem", maxWidth: "300px" }}>
              Smarter Systems. Stronger Businesses. We help businesses close operational gaps through custom software, systems integration, automation, and practical AI.
            </p>
            <p style={{ color: "#64748B", fontSize: "0.82rem" }}>
              Localising Global Systems for Zimbabwean Enterprise.
            </p>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h4 className="footer-col-title">Solutions</h4>
            <ul className="footer-link-list">
              <li>
                <Link to="/solutions#custom-software" onClick={scrollToTop} className="footer-link">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link to="/solutions#systems-integration" onClick={scrollToTop} className="footer-link">
                  Systems Integration
                </Link>
              </li>
              <li>
                <Link to="/solutions#business-automation" onClick={scrollToTop} className="footer-link">
                  Automation
                </Link>
              </li>
              <li>
                <Link to="/solutions#ai-integration" onClick={scrollToTop} className="footer-link">
                  AI Integration
                </Link>
              </li>
              <li>
                <Link to="/solutions#erp-crm" onClick={scrollToTop} className="footer-link">
                  ERP &amp; CRM
                </Link>
              </li>
              <li>
                <Link to="/solutions#it-consulting" onClick={scrollToTop} className="footer-link">
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <h4 className="footer-col-title">Industries</h4>
            <ul className="footer-link-list">
              <li>
                <Link to="/industries/agriculture" onClick={scrollToTop} className="footer-link">
                  Agriculture
                </Link>
              </li>
              <li>
                <Link to="/industries/financial-services" onClick={scrollToTop} className="footer-link">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link to="/industries/healthcare-pharmaceuticals" onClick={scrollToTop} className="footer-link">
                  Healthcare &amp; Pharma
                </Link>
              </li>
              <li>
                <Link to="/industries/retail-fmcg" onClick={scrollToTop} className="footer-link">
                  Retail &amp; FMCG
                </Link>
              </li>
              <li>
                <Link to="/industries/manufacturing-assembly" onClick={scrollToTop} className="footer-link">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/industries/logistics-transport" onClick={scrollToTop} className="footer-link">
                  Logistics &amp; Transport
                </Link>
              </li>
              <li>
                <Link to="/industries" onClick={scrollToTop} className="footer-link" style={{ color: "#38BDF8", fontWeight: "600" }}>
                  View all industries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-link-list">
              <li>
                <Link to="/" onClick={scrollToTop} className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="footer-link">
                  About Corebridge
                </Link>
              </li>
              <li>
                <Link to="/approach" onClick={scrollToTop} className="footer-link">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link to="/case-studies" onClick={scrollToTop} className="footer-link">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenAudit}
                  className="footer-link"
                  style={{ textAlign: "left", background: "none", border: "none", padding: 0, color: "#38BDF8", cursor: "pointer" }}
                >
                  Operational Review
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Direct */}
          <div>
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact-item">
              <MapPin size={16} style={{ color: "#38BDF8", marginTop: "3px", flexShrink: 0 }} />
              <span>Harare, Zimbabwe</span>
            </div>
            <div className="footer-contact-item">
              <WhatsAppIcon size={16} style={{ color: "#25D366", marginTop: "3px", flexShrink: 0 }} />
              <a
                href="https://wa.me/263780787214?text=Hello%20Corebridge%2C%20I%20would%20like%20to%20discuss%20a%20business%20systems%20or%20software%20requirement."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} style={{ color: "#38BDF8", marginTop: "3px", flexShrink: 0 }} />
              <a href="tel:+263780787214" className="footer-link">
                +263 780 787 214
              </a>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} style={{ color: "#38BDF8", marginTop: "3px", flexShrink: 0 }} />
              <a href="mailto:info@corebridge.co.zw" className="footer-link">
                info@corebridge.co.zw
              </a>
            </div>
            <div style={{ marginTop: "1.25rem" }}>
              <button
                type="button"
                className="btn btn-dark"
                onClick={onOpenAudit}
                style={{ fontSize: "0.85rem", padding: "0.55rem 1rem", width: "100%" }}
              >
                15-Min Operational Review
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="footer-bottom-bar">
          <div>
            &copy; {currentYear} Corebridge Technologies. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
