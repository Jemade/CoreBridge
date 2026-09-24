import React, { useState, useEffect } from "react";
import { Users, Phone, Mail, Clock, Filter, CheckCircle2, ChevronDown, ChevronUp, AlertCircle, Loader2 } from "lucide-react";
import { getAdminAudits, updateAuditStatus } from "../../api/audits";

const STATUS_OPTIONS = [
  "NEW",
  "CONTACTED",
  "DISCOVERY",
  "PROPOSAL",
  "WON",
  "LOST",
  "ARCHIVED"
];

const STATUS_COLORS = {
  NEW: { bg: "#fef2f2", text: "#b91c1c", border: "#fecaca" },
  CONTACTED: { bg: "#eff6ff", text: "#1d4ed8", border: "#bfdbfe" },
  DISCOVERY: { bg: "#fefce8", text: "#a16207", border: "#fef08a" },
  PROPOSAL: { bg: "#faf5ff", text: "#7e22ce", border: "#e9d5ff" },
  WON: { bg: "#f0fdf4", text: "#15803d", border: "#bbf7d0" },
  LOST: { bg: "#f1f5f9", text: "#475569", border: "#cbd5e1" },
  ARCHIVED: { bg: "#f8fafc", text: "#64748b", border: "#e2e8f0" }
};

export default function AdminAuditsPage() {
  const [audits, setAudits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [expandedId, setExpandedId] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);

  const fetchAudits = async () => {
    try {
      const data = await getAdminAudits();
      setAudits(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to load audit leads:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAudits();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    setUpdatingId(id);
    try {
      await updateAuditStatus(id, newStatus);
      setAudits(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
    } catch (err) {
      alert(`Failed to update status: ${err.message}`);
    } finally {
      setUpdatingId(null);
    }
  };

  const filteredAudits = audits.filter(a => statusFilter === "ALL" || a.status === statusFilter);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", marginBottom: "28px" }}>
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: "800", color: "#0f172a", marginBottom: "6px" }}>
            Operational Audit Requests
          </h1>
          <p style={{ fontSize: "14px", color: "#64748b" }}>
            Review, qualify, and track incoming system audit requests.
          </p>
        </div>

        {/* Filter */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Filter size={15} style={{ color: "#64748b" }} />
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              border: "1px solid #cbd5e1",
              fontSize: "13px",
              background: "#ffffff",
              color: "#334155"
            }}
          >
            <option value="ALL">All Statuses ({audits.length})</option>
            {STATUS_OPTIONS.map(s => (
              <option key={s} value={s}>
                {s} ({audits.filter(a => a.status === s).length})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Leads Table */}
      <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,.02)" }}>
        {loading ? (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#64748b" }}>
            <Loader2 size={24} className="animate-spin" style={{ margin: "0 auto 12px" }} />
            Loading audit requests...
          </div>
        ) : filteredAudits.length > 0 ? (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0", textAlign: "left", color: "#64748b", fontWeight: "600" }}>
                  <th style={{ padding: "12px 16px" }}>Submission Date</th>
                  <th style={{ padding: "12px 16px" }}>Lead / Contact</th>
                  <th style={{ padding: "12px 16px" }}>Company</th>
                  <th style={{ padding: "12px 16px" }}>Phone</th>
                  <th style={{ padding: "12px 16px" }}>Status Workflow</th>
                  <th style={{ padding: "12px 16px", textAlign: "right" }}>Details</th>
                </tr>
              </thead>
              <tbody>
                {filteredAudits.map(lead => {
                  const isExpanded = expandedId === lead.id;
                  const color = STATUS_COLORS[lead.status] || STATUS_COLORS.NEW;

                  return (
                    <React.Fragment key={lead.id}>
                      <tr style={{ borderBottom: "1px solid #f1f5f9", background: isExpanded ? "#fafafa" : "#ffffff" }}>
                        <td style={{ padding: "14px 16px", color: "#64748b", fontFamily: "'DM Mono', monospace" }}>
                          {lead.created_at ? new Date(lead.created_at).toLocaleString() : "Recent"}
                        </td>
                        <td style={{ padding: "14px 16px" }}>
                          <div style={{ fontWeight: "700", color: "#0f172a" }}>{lead.name}</div>
                          <div style={{ fontSize: "12px", color: "#64748b" }}>{lead.email}</div>
                        </td>
                        <td style={{ padding: "14px 16px", fontWeight: "600", color: "#334155" }}>
                          {lead.company}
                        </td>
                        <td style={{ padding: "14px 16px" }}>
                          <a href={`tel:${lead.phone}`} style={{ color: "var(--blue)", fontWeight: "500", textDecoration: "none" }}>
                            {lead.phone}
                          </a>
                        </td>
                        <td style={{ padding: "14px 16px" }}>
                          <select
                            value={lead.status}
                            disabled={updatingId === lead.id}
                            onChange={e => handleStatusChange(lead.id, e.target.value)}
                            style={{
                              padding: "4px 8px",
                              borderRadius: "4px",
                              fontSize: "11px",
                              fontWeight: "700",
                              border: `1px solid ${color.border}`,
                              background: color.bg,
                              color: color.text,
                              cursor: "pointer"
                            }}
                          >
                            {STATUS_OPTIONS.map(opt => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        </td>
                        <td style={{ padding: "14px 16px", textAlign: "right" }}>
                          <button
                            onClick={() => setExpandedId(isExpanded ? null : lead.id)}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                              fontSize: "12px",
                              color: "var(--blue)",
                              fontWeight: "600"
                            }}
                          >
                            {isExpanded ? <>Hide <ChevronUp size={14} /></> : <>Inspect <ChevronDown size={14} /></>}
                          </button>
                        </td>
                      </tr>

                      {isExpanded && (
                        <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                          <td colSpan={6} style={{ padding: "20px 24px" }}>
                            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "18px 20px" }}>
                              <h4 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "#64748b", marginBottom: "8px" }}>
                                Operational Bottleneck Description:
                              </h4>
                              <p style={{ fontSize: "14px", color: "#1e293b", lineHeight: "1.6", whiteSpace: "pre-line", margin: 0 }}>
                                {lead.message || "No specific details provided."}
                              </p>
                              <div style={{ marginTop: "16px", paddingTop: "12px", borderTop: "1px solid #f1f5f9", display: "flex", gap: "16px", fontSize: "12px" }}>
                                <a href={`mailto:${lead.email}?subject=Corebridge Operational Audit Follow-up: ${encodeURIComponent(lead.company)}`} style={{ color: "var(--blue)", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                                  <Mail size={13} /> Email Client
                                </a>
                                <a href={`tel:${lead.phone}`} style={{ color: "var(--blue)", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                                  <Phone size={13} /> Call Phone
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "56px 20px", color: "#64748b" }}>
            <Users size={32} style={{ color: "#cbd5e1", margin: "0 auto 12px" }} />
            <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#0f172a", marginBottom: "6px" }}>
              No Audit Requests Found
            </h3>
            <p style={{ fontSize: "13px", color: "#94a3b8" }}>
              {statusFilter !== "ALL"
                ? `There are no audit requests with status "${statusFilter}".`
                : "Incoming submissions from the 15-minute audit modal will be listed here."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
