import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users, MessageSquare, Layers, Clock, CheckCircle2, ArrowRight,
  TrendingUp, AlertCircle
} from "lucide-react";
import { getAdminAudits } from "../../api/audits";
import { getAdminContactMessages } from "../../api/contact";
import { getAdminServices } from "../../api/services";
import { getAdminCaseStudies } from "../../api/caseStudies";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    totalAudits: 0,
    newAudits: 0,
    totalContacts: 0,
    newContacts: 0,
    activeServices: 5,
    publishedStudies: 0
  });
  const [recentAudits, setRecentAudits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function loadDashboardData() {
      try {
        const [auditsRes, contactsRes, servicesRes, studiesRes] = await Promise.allSettled([
          getAdminAudits(),
          getAdminContactMessages(),
          getAdminServices(),
          getAdminCaseStudies()
        ]);

        const audits = auditsRes.status === "fulfilled" && Array.isArray(auditsRes.value) ? auditsRes.value : [];
        const contacts = contactsRes.status === "fulfilled" && Array.isArray(contactsRes.value) ? contactsRes.value : [];
        const services = servicesRes.status === "fulfilled" && Array.isArray(servicesRes.value) ? servicesRes.value : [];
        const studies = studiesRes.status === "fulfilled" && Array.isArray(studiesRes.value) ? studiesRes.value : [];

        if (isMounted) {
          setStats({
            totalAudits: audits.length,
            newAudits: audits.filter(a => a.status === "NEW" || a.status === "new").length,
            totalContacts: contacts.length,
            newContacts: contacts.filter(c => c.status === "NEW" || c.status === "new").length,
            activeServices: services.length || 5,
            publishedStudies: studies.filter(s => s.is_published).length
          });
          setRecentAudits(audits.slice(0, 5));
          setLoading(false);
        }
      } catch (err) {
        console.error("Dashboard data fetch error:", err);
        if (isMounted) setLoading(false);
      }
    }
    loadDashboardData();
    return () => { isMounted = false; };
  }, []);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      {/* Top Welcome Bar */}
      <div style={{ marginBottom: "28px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "800", color: "#0f172a", marginBottom: "6px" }}>
          Operational Command Center
        </h1>
        <p style={{ fontSize: "14px", color: "#64748b" }}>
          Real-time overview of incoming audits, operational leads, and system content.
        </p>
      </div>

      {/* KPI Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "36px" }}>
        
        <div style={{ background: "#ffffff", padding: "24px", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,.02)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
            <span style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", textTransform: "uppercase" }}>Total Audit Leads</span>
            <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#eff6ff", color: "#1769e8", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Users size={16} />
            </div>
          </div>
          <div style={{ fontSize: "28px", fontWeight: "800", color: "#0f172a", marginBottom: "4px" }}>
            {stats.totalAudits}
          </div>
          <span style={{ fontSize: "12px", color: stats.newAudits > 0 ? "#dc2626" : "#16a34a", fontWeight: "600" }}>
            {stats.newAudits} new action required
          </span>
        </div>

        <div style={{ background: "#ffffff", padding: "24px", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,.02)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
            <span style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", textTransform: "uppercase" }}>Contact Messages</span>
            <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#f0fdf4", color: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <MessageSquare size={16} />
            </div>
          </div>
          <div style={{ fontSize: "28px", fontWeight: "800", color: "#0f172a", marginBottom: "4px" }}>
            {stats.totalContacts}
          </div>
          <span style={{ fontSize: "12px", color: "#64748b" }}>
            {stats.newContacts} unread inquiries
          </span>
        </div>

        <div style={{ background: "#ffffff", padding: "24px", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,.02)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
            <span style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", textTransform: "uppercase" }}>Active Services</span>
            <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#faf5ff", color: "#9333ea", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Layers size={16} />
            </div>
          </div>
          <div style={{ fontSize: "28px", fontWeight: "800", color: "#0f172a", marginBottom: "4px" }}>
            {stats.activeServices}
          </div>
          <span style={{ fontSize: "12px", color: "#16a34a", fontWeight: "500" }}>
            Catalog online
          </span>
        </div>

        <div style={{ background: "#ffffff", padding: "24px", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,.02)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
            <span style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", textTransform: "uppercase" }}>Published Studies</span>
            <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#f8fafc", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <CheckCircle2 size={16} />
            </div>
          </div>
          <div style={{ fontSize: "28px", fontWeight: "800", color: "#0f172a", marginBottom: "4px" }}>
            {stats.publishedStudies}
          </div>
          <span style={{ fontSize: "12px", color: "#64748b" }}>
            Verified public write-ups
          </span>
        </div>

      </div>

      {/* Recent Inbound Leads Section */}
      <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "24px", boxShadow: "0 1px 3px rgba(0,0,0,.02)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
          <div>
            <h2 style={{ fontSize: "17px", fontWeight: "700", color: "#0f172a" }}>Recent Operational Audits</h2>
            <p style={{ fontSize: "13px", color: "#64748b" }}>Latest inquiries requesting system analysis.</p>
          </div>
          <Link
            to="/admin/audits"
            style={{ fontSize: "13px", fontWeight: "600", color: "var(--blue)", display: "inline-flex", alignItems: "center", gap: "4px" }}
          >
            View all leads <ArrowRight size={14} />
          </Link>
        </div>

        {recentAudits.length > 0 ? (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #e2e8f0", textAlign: "left", color: "#64748b", fontWeight: "600" }}>
                  <th style={{ padding: "10px 12px" }}>Date</th>
                  <th style={{ padding: "10px 12px" }}>Name</th>
                  <th style={{ padding: "10px 12px" }}>Company</th>
                  <th style={{ padding: "10px 12px" }}>Phone</th>
                  <th style={{ padding: "10px 12px" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentAudits.map(lead => (
                  <tr key={lead.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <td style={{ padding: "12px", color: "#64748b", fontFamily: "'DM Mono', monospace" }}>
                      {lead.created_at ? new Date(lead.created_at).toLocaleDateString() : "Recent"}
                    </td>
                    <td style={{ padding: "12px", fontWeight: "600", color: "#0f172a" }}>
                      {lead.name}
                    </td>
                    <td style={{ padding: "12px", color: "#334155" }}>
                      {lead.company}
                    </td>
                    <td style={{ padding: "12px", color: "#334155" }}>
                      {lead.phone}
                    </td>
                    <td style={{ padding: "12px" }}>
                      <span style={{
                        fontSize: "11px",
                        fontWeight: "700",
                        padding: "3px 8px",
                        borderRadius: "4px",
                        background: lead.status === "NEW" ? "#fef2f2" : "#eff6ff",
                        color: lead.status === "NEW" ? "#b91c1c" : "#1d4ed8"
                      }}>
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "40px 0", color: "#64748b" }}>
            <p style={{ fontSize: "14px", marginBottom: "8px" }}>No audit requests recorded yet.</p>
            <p style={{ fontSize: "12px", color: "#94a3b8" }}>New submissions from the public website will appear here in real-time.</p>
          </div>
        )}
      </div>

    </div>
  );
}
