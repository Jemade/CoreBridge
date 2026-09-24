import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Users, MessageSquare, Layers, Settings, LogOut,
  ExternalLink, Menu, X, ShieldAlert, CheckCircle2
} from "lucide-react";
import corebridgeLogoWhite from "../../assets/corebridge-logo-white.png";
import { logout } from "../../api/auth";

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(() => localStorage.getItem("corebridge_token"));
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // If not on login page and not authenticated, redirect to /admin/login
    if (!token && location.pathname !== "/admin/login") {
      navigate("/admin/login", { replace: true });
    }
  }, [token, location.pathname, navigate]);

  const handleLogout = () => {
    logout();
    setToken(null);
    navigate("/admin/login");
  };

  if (!token) {
    return <Outlet />;
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f1f5f9", fontFamily: "'Inter', sans-serif" }}>
      
      {/* Admin Sidebar */}
      <aside style={{
        width: "260px",
        background: "#0f172a",
        color: "#f8fafc",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        position: "sticky",
        top: 0,
        height: "100vh",
        zIndex: 50,
        borderRight: "1px solid #1e293b"
      }}>
        {/* Brand header */}
        <div style={{ padding: "20px 24px", borderBottom: "1px solid #1e293b", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src={corebridgeLogoWhite} alt="Corebridge" width="24" height="24" />
            <span style={{ fontSize: "16px", fontWeight: "800", letterSpacing: "-0.03em" }}>Corebridge</span>
          </div>
          <span style={{ fontSize: "10px", fontWeight: "700", background: "#1e293b", color: "#38bdf8", padding: "2px 6px", borderRadius: "4px", textTransform: "uppercase" }}>
            ADMIN
          </span>
        </div>

        {/* Navigation */}
        <nav style={{ padding: "20px 12px", flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) => (isActive || location.pathname === "/admin" ? "admin-nav-item active" : "admin-nav-item")}
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 14px",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: "500",
              color: isActive || location.pathname === "/admin" ? "#ffffff" : "#94a3b8",
              background: isActive || location.pathname === "/admin" ? "#1e293b" : "transparent",
              transition: "all 0.15s"
            })}
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/audits"
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 14px",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: "500",
              color: isActive ? "#ffffff" : "#94a3b8",
              background: isActive ? "#1e293b" : "transparent",
              transition: "all 0.15s"
            })}
          >
            <Users size={18} />
            Audit Requests / Leads
          </NavLink>

          <NavLink
            to="/admin/contacts"
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 14px",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: "500",
              color: isActive ? "#ffffff" : "#94a3b8",
              background: isActive ? "#1e293b" : "transparent",
              transition: "all 0.15s"
            })}
          >
            <MessageSquare size={18} />
            Contact Messages
          </NavLink>

          <NavLink
            to="/admin/content"
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 14px",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: "500",
              color: isActive ? "#ffffff" : "#94a3b8",
              background: isActive ? "#1e293b" : "transparent",
              transition: "all 0.15s"
            })}
          >
            <Layers size={18} />
            Content (Services/Studies)
          </NavLink>

          <NavLink
            to="/admin/settings"
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 14px",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: "500",
              color: isActive ? "#ffffff" : "#94a3b8",
              background: isActive ? "#1e293b" : "transparent",
              transition: "all 0.15s"
            })}
          >
            <Settings size={18} />
            Site Settings
          </NavLink>
        </nav>

        {/* Bottom Actions */}
        <div style={{ padding: "16px 12px", borderTop: "1px solid #1e293b", display: "flex", flexDirection: "column", gap: "6px" }}>
          <Link
            to="/"
            target="_blank"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 14px",
              borderRadius: "6px",
              fontSize: "12px",
              color: "#94a3b8"
            }}
          >
            <ExternalLink size={15} />
            View Public Site
          </Link>

          <button
            onClick={handleLogout}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 14px",
              borderRadius: "6px",
              fontSize: "12px",
              color: "#f87171",
              width: "100%",
              textAlign: "left"
            }}
          >
            <LogOut size={15} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Pane */}
      <main style={{ flex: 1, minWidth: 0, padding: "32px", overflowY: "auto" }}>
        <Outlet />
      </main>

    </div>
  );
}
