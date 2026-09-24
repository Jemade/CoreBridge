import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, ArrowRight, AlertCircle, Loader2 } from "lucide-react";
import corebridgeLogo from "../../assets/corebridge-logo.png";
import { login } from "../../api/auth";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login(email.trim(), password);
      navigate("/admin/dashboard");
    } catch (err) {
      console.error("Admin login error:", err);
      setError(err.message || "Invalid email or password. Please verify your credentials.");
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "400px",
        background: "#ffffff",
        borderRadius: "16px",
        padding: "40px 32px",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
          <img src={corebridgeLogo} alt="Corebridge" width="32" height="32" />
          <span style={{ fontSize: "20px", fontWeight: "800", color: "#0a1929", letterSpacing: "-0.03em" }}>
            Corebridge
          </span>
          <span style={{ fontSize: "10px", fontWeight: "700", background: "#eff6ff", color: "#1769e8", padding: "2px 6px", borderRadius: "4px", marginLeft: "auto" }}>
            OPS PORTAL
          </span>
        </div>

        <h1 style={{ fontSize: "20px", fontWeight: "700", color: "#0a1929", marginBottom: "6px" }}>
          Operations Login
        </h1>
        <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "24px" }}>
          Sign in to access lead workflows and system settings.
        </p>

        {error && (
          <div style={{
            background: "#fef2f2",
            border: "1px solid #fecaca",
            color: "#991b1b",
            borderRadius: "8px",
            padding: "10px 12px",
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "18px"
          }}>
            <AlertCircle size={16} style={{ flexShrink: 0 }} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#334155", marginBottom: "6px" }}>
              Work Email
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="admin@corebridge.co.zw"
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  fontSize: "14px"
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#334155", marginBottom: "6px" }}>
              Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  fontSize: "14px"
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="primary-btn"
            style={{
              marginTop: "8px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px"
            }}
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Authenticating...
              </>
            ) : (
              <>
                Sign In to Dashboard <ArrowRight size={15} />
              </>
            )}
          </button>
        </form>

        <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid #f1f5f9", textAlign: "center" }}>
          <a href="/" style={{ fontSize: "12px", color: "#64748b" }}>
            ← Return to public website
          </a>
        </div>
      </div>
    </div>
  );
}
