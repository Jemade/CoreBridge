import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import corebridgeLogo from "../../assets/corebridge-logo.png";

export default function Navbar({ onOpenAudit }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="nav-wrap">
      <nav className="nav container">
        {/* Left: Logo */}
        <Link to="/" className="brand" onClick={handleLinkClick} aria-label="Corebridge Home">
          <img className="brand-mark" src={corebridgeLogo} alt="Corebridge" width="28" height="28" />
          <span>Corebridge</span>
        </Link>

        {/* Center: Nav links */}
        <div className={`nav-links${menuOpen ? " open" : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive && location.pathname === "/" ? "active" : "")}
            onClick={handleLinkClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/solutions"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}
          >
            Solutions
          </NavLink>
          <NavLink
            to="/industries"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}
          >
            Industries
          </NavLink>
          <NavLink
            to="/case-studies"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}
          >
            Case Studies
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}
          >
            Contact
          </NavLink>

          {/* Mobile only audit button */}
          <button
            className="mobile-audit"
            onClick={() => {
              setMenuOpen(false);
              onOpenAudit();
            }}
          >
            Book an Audit <ArrowRight size={14} />
          </button>
        </div>

        {/* Right: CTA */}
        <button className="nav-cta" onClick={onOpenAudit}>
          Free Audit <ArrowUpRight size={14} />
        </button>

        {/* Mobile Hamburger */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
    </header>
  );
}
