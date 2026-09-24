import React, { useState, useEffect } from "react";
import { MessageSquare, Mail, ChevronDown, ChevronUp, Filter, Loader2 } from "lucide-react";
import { getAdminContactMessages, updateContactStatus } from "../../api/contact";

const STATUS_OPTIONS = ["NEW", "READ", "REPLIED", "ARCHIVED"];

export default function AdminContactsPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [expandedId, setExpandedId] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);

  const fetchMessages = async () => {
    try {
      const data = await getAdminContactMessages();
      setMessages(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to load contact messages:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    setUpdatingId(id);
    try {
      await updateContactStatus(id, newStatus);
      setMessages(prev => prev.map(m => m.id === id ? { ...m, status: newStatus } : m));
    } catch (err) {
      alert(`Failed to update status: ${err.message}`);
    } finally {
      setUpdatingId(null);
    }
  };

  const filteredMessages = messages.filter(m => statusFilter === "ALL" || m.status === statusFilter);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", marginBottom: "28px" }}>
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: "800", color: "#0f172a", marginBottom: "6px" }}>
            Inbound Contact Inquiries
          </h1>
          <p style={{ fontSize: "14px", color: "#64748b" }}>
            Direct messages sent through the Corebridge contact form.
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
            <option value="ALL">All Statuses ({messages.length})</option>
            {STATUS_OPTIONS.map(s => (
              <option key={s} value={s}>
                {s} ({messages.filter(m => m.status === s).length})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Messages Table */}
      <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,.02)" }}>
        {loading ? (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#64748b" }}>
            <Loader2 size={24} className="animate-spin" style={{ margin: "0 auto 12px" }} />
            Loading contact inquiries...
          </div>
        ) : filteredMessages.length > 0 ? (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0", textAlign: "left", color: "#64748b", fontWeight: "600" }}>
                  <th style={{ padding: "12px 16px" }}>Date</th>
                  <th style={{ padding: "12px 16px" }}>Sender</th>
                  <th style={{ padding: "12px 16px" }}>Company</th>
                  <th style={{ padding: "12px 16px" }}>Subject</th>
                  <th style={{ padding: "12px 16px" }}>Status</th>
                  <th style={{ padding: "12px 16px", textAlign: "right" }}>Inspect</th>
                </tr>
              </thead>
              <tbody>
                {filteredMessages.map(msg => {
                  const isExpanded = expandedId === msg.id;

                  return (
                    <React.Fragment key={msg.id}>
                      <tr style={{ borderBottom: "1px solid #f1f5f9", background: isExpanded ? "#fafafa" : "#ffffff" }}>
                        <td style={{ padding: "14px 16px", color: "#64748b", fontFamily: "'DM Mono', monospace" }}>
                          {msg.created_at ? new Date(msg.created_at).toLocaleString() : "Recent"}
                        </td>
                        <td style={{ padding: "14px 16px" }}>
                          <div style={{ fontWeight: "700", color: "#0f172a" }}>{msg.name}</div>
                          <div style={{ fontSize: "12px", color: "#64748b" }}>{msg.email}</div>
                        </td>
                        <td style={{ padding: "14px 16px", color: "#334155" }}>
                          {msg.company || "N/A"}
                        </td>
                        <td style={{ padding: "14px 16px", fontWeight: "600", color: "#1e293b" }}>
                          {msg.subject || "General Inquiry"}
                        </td>
                        <td style={{ padding: "14px 16px" }}>
                          <select
                            value={msg.status}
                            disabled={updatingId === msg.id}
                            onChange={e => handleStatusChange(msg.id, e.target.value)}
                            style={{
                              padding: "4px 8px",
                              borderRadius: "4px",
                              fontSize: "11px",
                              fontWeight: "700",
                              border: "1px solid #cbd5e1",
                              background: msg.status === "NEW" ? "#fef2f2" : "#f1f5f9",
                              color: msg.status === "NEW" ? "#b91c1c" : "#334155",
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
                            onClick={() => setExpandedId(isExpanded ? null : msg.id)}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                              fontSize: "12px",
                              color: "var(--blue)",
                              fontWeight: "600"
                            }}
                          >
                            {isExpanded ? <>Hide <ChevronUp size={14} /></> : <>Read <ChevronDown size={14} /></>}
                          </button>
                        </td>
                      </tr>

                      {isExpanded && (
                        <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                          <td colSpan={6} style={{ padding: "20px 24px" }}>
                            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "18px 20px" }}>
                              <h4 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "#64748b", marginBottom: "8px" }}>
                                Full Message Body:
                              </h4>
                              <p style={{ fontSize: "14px", color: "#1e293b", lineHeight: "1.6", whiteSpace: "pre-line", margin: 0 }}>
                                {msg.message}
                              </p>
                              <div style={{ marginTop: "16px", paddingTop: "12px", borderTop: "1px solid #f1f5f9" }}>
                                <a
                                  href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject || "Your Corebridge inquiry")}`}
                                  style={{ color: "var(--blue)", fontWeight: "600", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: "4px" }}
                                >
                                  <Mail size={13} /> Reply via Email
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
            <MessageSquare size={32} style={{ color: "#cbd5e1", margin: "0 auto 12px" }} />
            <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#0f172a", marginBottom: "6px" }}>
              No Contact Messages
            </h3>
            <p style={{ fontSize: "13px", color: "#94a3b8" }}>
              Inbound inquiries from the /contact page will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
