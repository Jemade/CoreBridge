import React, { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Modal from "./Modal";
import corebridgeLogo from "../../assets/corebridge-logo.png";
import { submitAuditRequest } from "../../api/audits";

export default function AuditModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    website_url_hp: "" // Honeypot field
  });

  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitAuditRequest({
        name: formData.name.trim(),
        company: formData.company.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        honeypot: formData.website_url_hp || ""
      });

      setStatus("success");
    } catch (err) {
      console.error("Audit submission failed:", err);
      setStatus("error");
      setErrorMessage(err.message || "Failed to submit your audit request. Please verify your details or contact us directly at +263 780 787 214.");
    }
  };

  const handleResetAndClose = () => {
    setStatus("idle");
    setErrorMessage("");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      website_url_hp: ""
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleResetAndClose} title="Request Operational Audit">
      <div className="modal-brand">
        <img className="brand-mark" src={corebridgeLogo} alt="Corebridge" width="28" height="28" />
        <span>Corebridge</span>
      </div>

      {status === "success" ? (
        <div style={{ padding: "20px 0", textAlign: "center" }}>
          <div style={{
            width: "56px",
            height: "56px",
            background: "#eff6ff",
            color: "#1769e8",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px"
          }}>
            <CheckCircle2 size={32} />
          </div>
          <h2 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "8px", color: "#0a1929" }}>
            Audit Request Received
          </h2>
          <p style={{ color: "#475569", fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>
            Thank you, <strong>{formData.name}</strong>. Our engineering leads will review your operational context for <strong>{formData.company}</strong> and contact you within 24 hours at <strong>{formData.email}</strong> / <strong>{formData.phone}</strong>.
          </p>
          <button
            type="button"
            className="primary-btn"
            style={{ margin: "0 auto" }}
            onClick={handleResetAndClose}
          >
            Done
          </button>
        </div>
      ) : (
        <>
          <span className="section-label">FREE 15-MINUTE OPERATIONAL AUDIT</span>
          <h2>Tell us where the<br /><em>friction is.</em></h2>
          <p>
            We'll use the conversation to understand the problem before
            recommending anything.
          </p>

          {status === "error" && (
            <div style={{
              background: "#fef2f2",
              border: "1px solid #fecaca",
              color: "#991b1b",
              borderRadius: "8px",
              padding: "12px 14px",
              fontSize: "13px",
              display: "flex",
              alignItems: "flex-start",
              gap: "8px",
              marginBottom: "16px"
            }}>
              <AlertCircle size={18} style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>{errorMessage}</div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Honeypot field (hidden from view) */}
            <div style={{ display: "none" }} aria-hidden="true">
              <label>
                Leave this empty:
                <input
                  type="text"
                  name="website_url_hp"
                  value={formData.website_url_hp}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Name
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  disabled={status === "submitting"}
                />
              </label>
              <label>
                Company
                <input
                  required
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  disabled={status === "submitting"}
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Business email
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  disabled={status === "submitting"}
                />
              </label>
              <label>
                Phone number
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+263 7..."
                  disabled={status === "submitting"}
                />
              </label>
            </div>

            <label>
              What's slowing your team down?
              <textarea
                required
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about the manual process, disconnected system or technical problem…"
                disabled={status === "submitting"}
              />
            </label>

            <button
              className="primary-btn full-btn"
              type="submit"
              disabled={status === "submitting"}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Submitting request...
                </>
              ) : (
                <>
                  Request my audit <ArrowRight size={15} />
                </>
              )}
            </button>
          </form>
        </>
      )}
    </Modal>
  );
}
