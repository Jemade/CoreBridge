import React, { useState, useEffect } from "react";
import { X, ShieldCheck, Loader2, AlertCircle } from "lucide-react";
import { submitAuditRequest } from "../../api/audits";

export default function AuditModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    notes: "",
    website_hp: ""
  });

  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.website_hp) {
      // Bot detected via honeypot
      onClose();
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitAuditRequest({
        full_name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        company_name: formData.company.trim(),
        notes: formData.notes.trim()
      });
      setStatus("success");
    } catch (err) {
      console.warn("Audit submission notice:", err.message);
      setStatus("error");
      setErrorMessage(
        err.message || "Failed to submit request. Please call us directly at +263 780 787 214."
      );
    }
  };

  const handleResetAndClose = () => {
    setStatus("idle");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      notes: "",
      website_hp: ""
    });
    onClose();
  };

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content-box">
        <button
          type="button"
          className="modal-close-btn"
          onClick={handleResetAndClose}
          aria-label="Close modal dialog"
        >
          <X size={20} />
        </button>

        {status === "success" ? (
          <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                backgroundColor: "var(--soft-blue)",
                color: "var(--blue)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.25rem"
              }}
            >
              <ShieldCheck size={32} />
            </div>
            <h3 style={{ fontSize: "1.45rem", marginBottom: "0.65rem" }}>
              Operational Review Requested
            </h3>
            <p style={{ color: "var(--muted)", fontSize: "0.98rem", lineHeight: "1.6", marginBottom: "2rem" }}>
              Thank you, {formData.name}. A senior systems engineer from our Harare office will review your details and contact you shortly to schedule your 15-minute review.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleResetAndClose}
              style={{ width: "100%" }}
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <span className="eyebrow">15-MINUTE OPERATIONAL REVIEW</span>
            <h3 id="modal-title" style={{ fontSize: "1.45rem", marginBottom: "0.5rem" }}>
              Tell us about your systems and workflows.
            </h3>
            <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: "1.55", marginBottom: "1.5rem" }}>
              We will spend 15 minutes understanding how your systems and workflows currently work and identify where a practical improvement may exist.
            </p>

            {status === "error" && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  padding: "0.85rem",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "#FEF2F2",
                  color: "#991B1B",
                  fontSize: "0.88rem",
                  marginBottom: "1.25rem",
                  border: "1px solid #FCA5A5"
                }}
              >
                <AlertCircle size={18} style={{ flexShrink: 0 }} />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Bot Honeypot */}
              <input
                type="text"
                name="website_hp"
                value={formData.website_hp}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
              />

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="review-name">
                    Full Name *
                  </label>
                  <input
                    id="review-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. Tendai Moyo"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="review-company">
                    Company Name *
                  </label>
                  <input
                    id="review-company"
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. Zimbabwe Logistics Ltd"
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="review-email">
                    Work Email *
                  </label>
                  <input
                    id="review-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="name@company.co.zw"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="review-phone">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="review-phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+263 77..."
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="review-notes">
                  What part of your operation or systems needs improvement? *
                </label>
                <textarea
                  id="review-notes"
                  name="notes"
                  required
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="e.g. Our POS transactions do not sync with our accounting ledger; our warehouse pick lists are still on paper."
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn btn-primary"
                style={{ width: "100%", marginTop: "0.5rem" }}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Submitting Request...
                  </>
                ) : (
                  <>
                    Request 15-Minute Review
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
