import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import corebridgeLogo from "../../assets/corebridge-logo.png";

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
                to="/"
                end
                className={({ isActive }) => (isActive ? "nav-item-link active" : "nav-item-link")}
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
            </li>
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
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "nav-item-link active" : "nav-item-link")}
                onClick={handleLinkClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Desktop Action CTA */}
        <div className="nav-actions" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={onOpenAudit}
            aria-label="Schedule an Operational Review"
          >
            Operational Review
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
                to="/"
                end
                className={({ isActive }) => (isActive ? "mobile-nav-item active" : "mobile-nav-item")}
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
            </li>
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
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: "100%" }}
              onClick={() => {
                setMenuOpen(false);
                onOpenAudit();
              }}
            >
              Operational Review
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
