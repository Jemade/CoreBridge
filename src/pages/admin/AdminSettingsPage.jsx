import React, { useState } from "react";
import { Settings, Phone, Mail, MapPin, CheckCircle2, ShieldCheck, Server } from "lucide-react";

export default function AdminSettingsPage() {
  const [phone, setPhone] = useState("+263 780 787 214");
  const [email, setEmail] = useState("info@corebridge.co.zw");
  const [saved, setSaved] = useState(false);

  const handleSave = e => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ marginBottom: "28px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "800", color: "#0f172a", marginBottom: "6px" }}>
          System &amp; Business Settings
        </h1>
        <p style={{ fontSize: "14px", color: "#64748b" }}>
          Configure enterprise contact details and operational parameters.
        </p>
      </div>

      {saved && (
        <div style={{
          background: "#f0fdf4",
          border: "1px solid #bbf7d0",
          color: "#166534",
          borderRadius: "8px",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "13px",
          marginBottom: "20px"
        }}>
          <CheckCircle2 size={16} />
          <span>Site settings saved successfully.</span>
        </div>
      )}

      {/* Business Contacts Card */}
      <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "28px", marginBottom: "24px", boxShadow: "0 1px 3px rgba(0,0,0,.02)" }}>
        <h2 style={{ fontSize: "16px", fontWeight: "700", color: "#0f172a", marginBottom: "18px" }}>
          Public Business Information
        </h2>
        
        <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#334155", marginBottom: "6px" }}>
              Standard Phone Number
            </label>
            <input
              type="text"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px" }}
            />
            <span style={{ fontSize: "11px", color: "#64748b", marginTop: "4px", display: "block" }}>
              Displays in footer, navigation, and contact sections.
            </span>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#334155", marginBottom: "6px" }}>
              Inbound Alert Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px" }}
            />
            <span style={{ fontSize: "11px", color: "#64748b", marginTop: "4px", display: "block" }}>
              Receives instant notifications whenever an operational audit or contact message is submitted.
            </span>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#334155", marginBottom: "6px" }}>
              Engineering Office Location
            </label>
            <input
              type="text"
              readOnly
              value="Harare, Zimbabwe"
              style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #e2e8f0", background: "#f8fafc", fontSize: "14px", color: "#64748b" }}
            />
          </div>

          <div style={{ paddingTop: "8px" }}>
            <button type="submit" className="primary-btn">
              Save Settings
            </button>
          </div>
        </form>
      </div>

      {/* Environment Diagnostics */}
      <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "0 1px 3px rgba(0,0,0,.02)" }}>
        <h2 style={{ fontSize: "16px", fontWeight: "700", color: "#0f172a", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
          <Server size={18} /> Environment Diagnostics
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 12px", background: "#f8fafc", borderRadius: "6px" }}>
            <span style={{ color: "#64748b" }}>Frontend Client Version</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontWeight: "600" }}>v1.1.0-prod</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 12px", background: "#f8fafc", borderRadius: "6px" }}>
            <span style={{ color: "#64748b" }}>Backend API Gateway</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontWeight: "600" }}>/api/v1 (FastAPI + Pydantic v2)</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 12px", background: "#f8fafc", borderRadius: "6px" }}>
            <span style={{ color: "#64748b" }}>Data Persistence Layer</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontWeight: "600" }}>PostgreSQL (SQLAlchemy 2.x)</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 12px", background: "#f8fafc", borderRadius: "6px" }}>
            <span style={{ color: "#64748b" }}>Rate Limiting &amp; Cache</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontWeight: "600" }}>Redis Rate Limiter</span>
          </div>
        </div>
      </div>
    </div>
  );
}
