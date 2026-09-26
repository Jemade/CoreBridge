import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import corebridgeLogo from "../../assets/corebridge-logo.png";
import WhatsAppIcon from "../common/WhatsAppIcon";

export default function Navbar({ onOpenAudit }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container nav-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-link" onClick={handleLinkClick} aria-label="Corebridge Home">
          <img src={corebridgeLogo} alt="Corebridge" className="brand-mark-img" width="28" height="28" />
          <span>COREBRIDGE</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className="nav-desktop-menu">
            <li>
              <NavLink
                to="/solutions"
                className={({ isActive }) => (isActive ? "nav-item-link active" : "nav-item-link")}
                onClick={handleLinkClick}
              >
                Solutions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/industries"
                className={({ isActive }) => (isActive ? "nav-item-link active" : "nav-item-link")}
                onClick={handleLinkClick}
              >
                Industries
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/approach"
                className={({ isActive }) => (isActive ? "nav-item-link active" : "nav-item-link")}
                onClick={handleLinkClick}
              >
                Approach
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/case-studies"
                className={({ isActive }) => (isActive ? "nav-item-link active" : "nav-item-link")}
                onClick={handleLinkClick}
              >
                Case Studies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-item-link active" : "nav-item-link")}
                onClick={handleLinkClick}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Desktop Action CTA */}
        <div className="nav-actions" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a
            href="https://wa.me/263780787214?text=Hello%20Corebridge%2C%20I%20would%20like%20to%20discuss%20a%20business%20systems%20or%20software%20requirement."
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "var(--text-dark)", fontSize: "0.85rem", fontWeight: "600", textDecoration: "none" }}
            aria-label="WhatsApp Corebridge at +263 780 787 214"
          >
            <WhatsAppIcon size={17} style={{ color: "#25D366" }} />
            <span>WhatsApp</span>
          </a>

          <button
            type="button"
            className="btn btn-primary"
            onClick={onOpenAudit}
            aria-label="Talk to Corebridge for a 15-Minute Operational Review"
          >
            Talk to Corebridge
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="menu-toggle-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="mobile-nav-drawer open" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <ul className="mobile-nav-links">
            <li>
              <NavLink
                to="/solutions"
                className={({ isActive }) => (isActive ? "mobile-nav-item active" : "mobile-nav-item")}
                onClick={handleLinkClick}
              >
                Solutions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/industries"
                className={({ isActive }) => (isActive ? "mobile-nav-item active" : "mobile-nav-item")}
                onClick={handleLinkClick}
              >
                Industries
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/approach"
                className={({ isActive }) => (isActive ? "mobile-nav-item active" : "mobile-nav-item")}
                onClick={handleLinkClick}
              >
                Approach
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/case-studies"
                className={({ isActive }) => (isActive ? "mobile-nav-item active" : "mobile-nav-item")}
                onClick={handleLinkClick}
              >
                Case Studies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "mobile-nav-item active" : "mobile-nav-item")}
                onClick={handleLinkClick}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "mobile-nav-item active" : "mobile-nav-item")}
                onClick={handleLinkClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="mobile-nav-footer" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <a
              href="https://wa.me/263780787214?text=Hello%20Corebridge%2C%20I%20would%20like%20to%20discuss%20a%20business%20systems%20or%20software%20requirement."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ width: "100%", justifyContent: "center", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              <WhatsAppIcon size={18} style={{ color: "#25D366" }} /> WhatsApp Corebridge
            </a>
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: "100%" }}
              onClick={() => {
                setMenuOpen(false);
                onOpenAudit();
              }}
            >
              Talk to Corebridge <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
