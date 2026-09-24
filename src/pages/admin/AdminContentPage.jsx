import React, { useState, useEffect } from "react";
import { Layers, Plus, BookOpen, Check, X, Edit, Trash2, Loader2 } from "lucide-react";
import { getAdminServices } from "../../api/services";
import { getAdminCaseStudies, createCaseStudy, updateCaseStudy, deleteCaseStudy } from "../../api/caseStudies";
import { servicesData } from "../../data/initialData";

export default function AdminContentPage() {
  const [tab, setTab] = useState("services"); // services | case-studies
  const [services, setServices] = useState(servicesData);
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);

  // New Case Study Form State
  const [newStudy, setNewStudy] = useState({
    title: "",
    slug: "",
    industry: "",
    summary: "",
    challenge: "",
    approach: "",
    solution: "",
    results: "",
    technology: "",
    is_featured: false,
    is_published: true
  });

  const fetchData = async () => {
    try {
      const [srv, studies] = await Promise.allSettled([
        getAdminServices(),
        getAdminCaseStudies()
      ]);
      if (srv.status === "fulfilled" && Array.isArray(srv.value) && srv.value.length > 0) {
        setServices(srv.value);
      }
      if (studies.status === "fulfilled" && Array.isArray(studies.value)) {
        setCaseStudies(studies.value);
      }
    } catch (err) {
      console.error("Error loading content:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateCaseStudy = async e => {
    e.preventDefault();
    try {
      const slug = newStudy.slug.trim() || newStudy.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const created = await createCaseStudy({ ...newStudy, slug });
      setCaseStudies(prev => [created, ...prev]);
      setShowAddModal(false);
      setNewStudy({
        title: "",
        slug: "",
        industry: "",
        summary: "",
        challenge: "",
        approach: "",
        solution: "",
        results: "",
        technology: "",
        is_featured: false,
        is_published: true
      });
    } catch (err) {
      alert(`Failed to save case study: ${err.message}`);
    }
  };

  const handleTogglePublish = async study => {
    try {
      const updated = await updateCaseStudy(study.id, { ...study, is_published: !study.is_published });
      setCaseStudies(prev => prev.map(s => s.id === study.id ? { ...s, is_published: !s.is_published } : s));
    } catch (err) {
      alert(`Failed to update publish state: ${err.message}`);
    }
  };

  const handleDeleteCaseStudy = async id => {
    if (!window.confirm("Are you sure you want to delete this case study?")) return;
    try {
      await deleteCaseStudy(id);
      setCaseStudies(prev => prev.filter(s => s.id !== id));
    } catch (err) {
      alert(`Failed to delete case study: ${err.message}`);
    }
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", marginBottom: "28px" }}>
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: "800", color: "#0f172a", marginBottom: "6px" }}>
            Content Management
          </h1>
          <p style={{ fontSize: "14px", color: "#64748b" }}>
            Manage public catalog services, deliverables, and published case studies.
          </p>
        </div>

        {tab === "case-studies" && (
          <button
            onClick={() => setShowAddModal(true)}
            className="primary-btn"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px" }}
          >
            <Plus size={16} /> Add Case Study
          </button>
        )}
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "8px", borderBottom: "1px solid #e2e8f0", marginBottom: "24px" }}>
        <button
          onClick={() => setTab("services")}
          style={{
            padding: "10px 18px",
            fontSize: "14px",
            fontWeight: "600",
            color: tab === "services" ? "var(--blue)" : "#64748b",
            borderBottom: tab === "services" ? "2px solid var(--blue)" : "2px solid transparent",
            transition: "all 0.15s"
          }}
        >
          Services ({services.length})
        </button>
        <button
          onClick={() => setTab("case-studies")}
          style={{
            padding: "10px 18px",
            fontSize: "14px",
            fontWeight: "600",
            color: tab === "case-studies" ? "var(--blue)" : "#64748b",
            borderBottom: tab === "case-studies" ? "2px solid var(--blue)" : "2px solid transparent",
            transition: "all 0.15s"
          }}
        >
          Case Studies ({caseStudies.length})
        </button>
      </div>

      {/* Services View */}
      {tab === "services" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
          {services.map(s => (
            <div key={s.id || s.slug} style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "24px", boxShadow: "0 1px 3px rgba(0,0,0,.02)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                <span style={{ fontSize: "11px", fontWeight: "700", background: "#f1f5f9", color: "#475569", padding: "2px 8px", borderRadius: "4px", textTransform: "uppercase" }}>
                  {s.slug}
                </span>
                <span style={{ fontSize: "11px", fontWeight: "600", color: "#16a34a", background: "#f0fdf4", padding: "2px 8px", borderRadius: "4px" }}>
                  Active
                </span>
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#0f172a", marginBottom: "8px", whiteSpace: "pre-line" }}>
                {s.title || s.name}
              </h3>
              <p style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.5", marginBottom: "16px" }}>
                {s.shortDescription || s.text}
              </p>
              {s.deliverables && (
                <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "12px" }}>
                  <span style={{ fontSize: "11px", fontWeight: "600", color: "#94a3b8", textTransform: "uppercase" }}>Deliverables ({s.deliverables.length})</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Case Studies View */}
      {tab === "case-studies" && (
        <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", overflow: "hidden" }}>
          {caseStudies.length > 0 ? (
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0", textAlign: "left", color: "#64748b" }}>
                  <th style={{ padding: "12px 16px" }}>Title</th>
                  <th style={{ padding: "12px 16px" }}>Industry</th>
                  <th style={{ padding: "12px 16px" }}>Published</th>
                  <th style={{ padding: "12px 16px", textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {caseStudies.map(study => (
                  <tr key={study.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <td style={{ padding: "14px 16px", fontWeight: "600", color: "#0f172a" }}>
                      {study.title}
                    </td>
                    <td style={{ padding: "14px 16px", color: "#64748b" }}>
                      {study.industry || "General"}
                    </td>
                    <td style={{ padding: "14px 16px" }}>
                      <button
                        onClick={() => handleTogglePublish(study)}
                        style={{
                          fontSize: "11px",
                          fontWeight: "700",
                          padding: "3px 8px",
                          borderRadius: "4px",
                          background: study.is_published ? "#f0fdf4" : "#f1f5f9",
                          color: study.is_published ? "#16a34a" : "#64748b"
                        }}
                      >
                        {study.is_published ? "PUBLISHED" : "DRAFT"}
                      </button>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "right" }}>
                      <button
                        onClick={() => handleDeleteCaseStudy(study.id)}
                        style={{ color: "#dc2626", padding: "4px" }}
                        title="Delete case study"
                      >
                        <Trash2 size={15} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div style={{ textAlign: "center", padding: "56px 20px", color: "#64748b" }}>
              <BookOpen size={32} style={{ color: "#cbd5e1", margin: "0 auto 12px" }} />
              <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#0f172a", marginBottom: "6px" }}>
                No Case Studies Created
              </h3>
              <p style={{ fontSize: "13px", color: "#94a3b8", marginBottom: "20px" }}>
                Add verified client implementations to showcase system architectures on the public website.
              </p>
              <button
                onClick={() => setShowAddModal(true)}
                className="primary-btn"
                style={{ margin: "0 auto", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px" }}
              >
                <Plus size={15} /> Add First Case Study
              </button>
            </div>
          )}
        </div>
      )}

      {/* Add Case Study Modal */}
      {showAddModal && (
        <div className="modal-backdrop" onClick={() => setShowAddModal(false)}>
          <div className="audit-modal" style={{ maxWidth: "640px" }} onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowAddModal(false)}>
              <X size={18} />
            </button>
            <h2 style={{ fontSize: "20px", fontWeight: "800", color: "var(--ink)", marginBottom: "16px" }}>
              Add New Case Study
            </h2>
            <form onSubmit={handleCreateCaseStudy} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <label>
                Title
                <input
                  required
                  value={newStudy.title}
                  onChange={e => setNewStudy({ ...newStudy, title: e.target.value })}
                  placeholder="e.g. Real-Time Telematics & ERP Integration for Cross-Border Fleet"
                />
              </label>

              <div className="form-row">
                <label>
                  Industry
                  <input
                    required
                    value={newStudy.industry}
                    onChange={e => setNewStudy({ ...newStudy, industry: e.target.value })}
                    placeholder="e.g. Transport & Logistics"
                  />
                </label>
                <label>
                  Technology Stack (comma-separated)
                  <input
                    value={newStudy.technology}
                    onChange={e => setNewStudy({ ...newStudy, technology: e.target.value })}
                    placeholder="Python, Odoo, Redis, Docker"
                  />
                </label>
              </div>

              <label>
                Executive Summary
                <textarea
                  required
                  rows={2}
                  value={newStudy.summary}
                  onChange={e => setNewStudy({ ...newStudy, summary: e.target.value })}
                  placeholder="High-level overview of the implementation…"
                />
              </label>

              <label>
                The Operational Challenge
                <textarea
                  rows={3}
                  value={newStudy.challenge}
                  onChange={e => setNewStudy({ ...newStudy, challenge: e.target.value })}
                  placeholder="What was broken or manual?"
                />
              </label>

              <label>
                Engineered Solution
                <textarea
                  rows={3}
                  value={newStudy.solution}
                  onChange={e => setNewStudy({ ...newStudy, solution: e.target.value })}
                  placeholder="What systems and integrations were built?"
                />
              </label>

              <label>
                Measurable Results
                <textarea
                  rows={2}
                  value={newStudy.results}
                  onChange={e => setNewStudy({ ...newStudy, results: e.target.value })}
                  placeholder="Uptime, transaction speed, error reduction…"
                />
              </label>

              <div style={{ display: "flex", gap: "16px", marginTop: "6px" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "13px" }}>
                  <input
                    type="checkbox"
                    checked={newStudy.is_published}
                    onChange={e => setNewStudy({ ...newStudy, is_published: e.target.checked })}
                  />
                  Publish to live website
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "13px" }}>
                  <input
                    type="checkbox"
                    checked={newStudy.is_featured}
                    onChange={e => setNewStudy({ ...newStudy, is_featured: e.target.checked })}
                  />
                  Mark as featured
                </label>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "16px" }}>
                <button type="button" className="ghost-btn" onClick={() => setShowAddModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="primary-btn">
                  Save Case Study
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
