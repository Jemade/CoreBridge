import React, { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import SEO from "../components/common/SEO";
import { submitContactMessage } from "../api/contact";

export default function ContactPage({ onOpenAudit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    website_hp: ""
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
      await submitContactMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        honeypot: formData.website_hp || ""
      });

      setStatus("success");
    } catch (err) {
      console.error("Contact submission failed:", err);
      setStatus("error");
      setErrorMessage(err.message || "Failed to deliver your message. Please call us directly at +263 780 787 214.");
    }
  };

  return (
    <>
      <SEO
        title="Contact Engineering & Consultations"
        description="Contact Corebridge software consultancy in Harare, Zimbabwe. Phone: +263 780 787 214. Speak directly with software engineers."
      />

      <section style={{ background: "var(--dark)", color: "var(--white)", padding: "70px 0 50px" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-label light" style={{ display: "inline-block", marginBottom: "12px" }}>
            DIRECT CONSULTATION
          </span>
          <h1 style={{ fontSize: "40px", fontWeight: "800", color: "#ffffff", marginBottom: "16px", lineHeight: "1.15" }}>
            Contact Corebridge
          </h1>
          <p style={{ fontSize: "16px", color: "#94a3b8", lineHeight: "1.6" }}>
            Speak directly with software engineers and system architects. We discuss technical realities and operational goals.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "#f8fafc" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px" }}>
          
          {/* Left: Contact Info & Free Audit Prompt */}
          <div>
            <span className="section-label" style={{ display: "inline-block", marginBottom: "10px" }}>
              HEADQUARTERS &amp; DIRECT LINES
            </span>
            <h2 style={{ fontSize: "26px", fontWeight: "800", color: "var(--ink)", marginBottom: "20px" }}>
              Harare Engineering Office
            </h2>
            <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.6", marginBottom: "32px" }}>
              We collaborate with enterprise clients across Zimbabwe, Southern Africa, and international markets requiring dedicated software engineering and systems integration.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "var(--soft)", color: "var(--blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Phone size={20} />
                </div>
                <div>
                  <span style={{ fontSize: "12px", color: "#64748b", fontWeight: "600", textTransform: "uppercase" }}>Phone &amp; WhatsApp</span>
                  <div style={{ marginTop: "2px" }}>
                    <a href="tel:+263780787214" style={{ fontSize: "16px", fontWeight: "700", color: "var(--ink)" }}>
                      +263 780 787 214
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "var(--soft)", color: "var(--blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Mail size={20} />
                </div>
                <div>
                  <span style={{ fontSize: "12px", color: "#64748b", fontWeight: "600", textTransform: "uppercase" }}>Email Inquiries</span>
                  <div style={{ marginTop: "2px" }}>
                    <a href="mailto:info@corebridge.co.zw" style={{ fontSize: "16px", fontWeight: "700", color: "var(--ink)" }}>
                      info@corebridge.co.zw
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "var(--soft)", color: "var(--blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <span style={{ fontSize: "12px", color: "#64748b", fontWeight: "600", textTransform: "uppercase" }}>Location</span>
                  <div style={{ marginTop: "2px", fontSize: "15px", fontWeight: "600", color: "var(--ink)" }}>
                    Harare, Zimbabwe
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid var(--line)", borderRadius: "12px", padding: "24px", boxShadow: "0 2px 4px rgba(10,25,41,.02)" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "700", color: "var(--ink)", marginBottom: "8px" }}>
                Looking for a quick assessment?
              </h3>
              <p style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.5", marginBottom: "16px" }}>
                Instead of waiting for an email back-and-forth, schedule a free 15-minute operational audit with an engineering lead.
              </p>
              <button className="ghost-btn" onClick={onOpenAudit} style={{ width: "100%", justifyContent: "center" }}>
                Request 15-Minute Audit <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div style={{ background: "#ffffff", border: "1px solid var(--line)", borderRadius: "16px", padding: "40px 32px", boxShadow: "0 2px 8px rgba(10,25,41,.03)" }}>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#eff6ff", color: "#1769e8", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: "800", color: "var(--ink)", marginBottom: "8px" }}>
                  Message Sent Successfully
                </h3>
                <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6", marginBottom: "24px" }}>
                  Thank you for reaching out, <strong>{formData.name}</strong>. An engineering representative will review your message and respond within 1 business day.
                </p>
                <button
                  type="button"
                  className="primary-btn"
                  style={{ margin: "0 auto" }}
                  onClick={() => {
                    setStatus("idle");
                    setFormData({ name: "", email: "", company: "", subject: "", message: "", website_hp: "" });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: "20px", fontWeight: "800", color: "var(--ink)", marginBottom: "8px" }}>
                  Send an Inquiry
                </h3>
                <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "24px" }}>
                  Fill out the form below and our team will get back to you promptly.
                </p>

                {status === "error" && (
                  <div style={{
                    background: "#fef2f2",
                    border: "1px solid #fecaca",
                    color: "#991b1b",
                    borderRadius: "8px",
                    padding: "12px",
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    marginBottom: "20px"
                  }}>
                    <AlertCircle size={18} style={{ flexShrink: 0, marginTop: "2px" }} />
                    <div>{errorMessage}</div>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Anti-spam honeypot */}
                  <div style={{ display: "none" }} aria-hidden="true">
                    <label>
                      Do not fill this:
                      <input
                        type="text"
                        name="website_hp"
                        value={formData.website_hp}
                        onChange={handleChange}
                        tabIndex="-1"
                        autoComplete="off"
                      />
                    </label>
                  </div>

                  <div className="form-row">
                    <label>
                      Your Name
                      <input
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="First and last name"
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
                      Email Address
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
                      Subject
                      <input
                        required
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Odoo Integration or Custom Mobile App"
                        disabled={status === "submitting"}
                      />
                    </label>
                  </div>

                  <label>
                    Message / Project Details
                    <textarea
                      required
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your current systems, integration goals, or challenges…"
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
                        <Loader2 size={16} className="animate-spin" /> Sending message...
                      </>
                    ) : (
                      <>
                        Send Message <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
