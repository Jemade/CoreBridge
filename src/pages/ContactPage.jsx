import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  AlertCircle, 
  Loader2,
  Clock,
  ShieldCheck
} from "lucide-react";
import SEO from "../components/common/SEO";
import { submitContactMessage } from "../api/contact";
import { contactHeroImg } from "../data/initialData";
import WhatsAppIcon from "../components/common/WhatsAppIcon";

export default function ContactPage({ onOpenAudit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    category: "Systems Integration",
    message: "",
    website_hp: ""
  });

  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitContactMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim(),
        subject: formData.category,
        message: formData.message.trim(),
        honeypot: formData.website_hp || ""
      });

      setStatus("success");
    } catch (err) {
      console.error("Contact submission error:", err);
      setStatus("error");
      setErrorMessage(
        err.message || "Failed to submit message. Please reach us directly at +263 780 787 214 or info@corebridge.co.zw."
      );
    }
  };

  return (
    <>
      <SEO
        title="Contact Engineering &amp; Consultations | Orebridge"
        description="Contact Corebridge software consultancy in Harare, Zimbabwe. Direct engineering line: +263 780 787 214. Tell us what is not working in your systems."
      />

      {/* Hero with Unique Contact Photography */}
      <section className="section section-dark" style={{ padding: "4.5rem 0 4rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3.5rem", alignItems: "center" }}>
            <div>
              <span className="eyebrow-dark">DIRECT CONSULTATION</span>
              <h1 style={{ fontSize: "2.75rem", fontWeight: "800", color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: "1.15" }}>
                Tell us what is not working in your business.
              </h1>
              <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "#94A3B8", marginBottom: "2rem" }}>
                Whether you have disconnected software, manual spreadsheet processes, an ERP migration hurdle, or an internal tool to build, we want to hear about the operational problem.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <button type="button" className="btn btn-primary" onClick={onOpenAudit}>
                  Schedule Operational Review
                </button>
              </div>
            </div>

            {/* Clean Hero Photography without overlays */}
            <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.15)", boxShadow: "var(--shadow-lg)" }}>
              <img
                src={contactHeroImg}
                alt="Corebridge engineering consultation and client systems discussion in Harare"
                style={{ width: "100%", height: "340px", objectFit: "cover", display: "block" }}
                width="720"
                height="340"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section" style={{ backgroundColor: "var(--bg-surface)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3.5rem" }}>
          
          {/* Left Column: Direct Contact Info & Guarantees */}
          <div>
            <span className="eyebrow">HARARE ENGINEERING OFFICE</span>
            <h2 style={{ fontSize: "1.85rem", fontWeight: "800", color: "var(--primary)", marginBottom: "1.25rem" }}>
              Direct Engineering Lines
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: "1.65", marginBottom: "2.5rem" }}>
              Speak directly with software engineers and systems architects. We collaborate with commercial clients across Zimbabwe and Southern Africa.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2.5rem" }}>
              {/* Phone */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--soft-blue)",
                    color: "var(--blue)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <span style={{ fontSize: "0.78rem", color: "var(--muted)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", display: "block" }}>
                    Phone &amp; WhatsApp
                  </span>
                  <a
                    href="tel:+263780787214"
                    style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--primary)", textDecoration: "none" }}
                  >
                    +263 780 787 214
                  </a>
                  <div style={{ marginTop: "0.4rem" }}>
                    <a
                      href="https://wa.me/263780787214?text=Hello%20Corebridge%2C%20I%20would%20like%20to%20discuss%20a%20business%20systems%20or%20software%20requirement."
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        color: "#16A34A",
                        fontSize: "0.85rem",
                        fontWeight: "600",
                        textDecoration: "none"
                      }}
                    >
                      <WhatsAppIcon size={16} style={{ color: "#25D366" }} />
                      <span>Start WhatsApp Chat</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--soft-blue)",
                    color: "var(--blue)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <span style={{ fontSize: "0.78rem", color: "var(--muted)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", display: "block" }}>
                    Email Inquiries
                  </span>
                  <a
                    href="mailto:info@corebridge.co.zw"
                    style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--primary)", textDecoration: "none" }}
                  >
                    info@corebridge.co.zw
                  </a>
                </div>
              </div>

              {/* Location */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--soft-blue)",
                    color: "var(--blue)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <span style={{ fontSize: "0.78rem", color: "var(--muted)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", display: "block" }}>
                    Location
                  </span>
                  <span style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--primary)" }}>
                    Harare, Zimbabwe
                  </span>
                </div>
              </div>
            </div>

            {/* Audit Box Prompt */}
            <div
              style={{
                backgroundColor: "var(--white)",
                border: "1px solid var(--borders)",
                borderRadius: "var(--radius-md)",
                padding: "2rem",
                boxShadow: "var(--shadow-sm)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--blue)", marginBottom: "0.6rem" }}>
                <Clock size={18} />
                <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--primary)", margin: 0 }}>
                  Need an immediate assessment?
                </h3>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: "1.6", marginBottom: "1.25rem" }}>
                Book a complimentary 15-Minute Operational Review. We will examine your software landscape and present actionable architecture advice without sales pressure.
              </p>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onOpenAudit}
                style={{ width: "100%", justifyContent: "center" }}
              >
                Schedule 15-Minute Review
              </button>
            </div>
          </div>

          {/* Right Column: Structured Inquiry Form */}
          <div
            style={{
              backgroundColor: "var(--white)",
              border: "1px solid var(--borders)",
              borderRadius: "var(--radius-lg)",
              padding: "2.5rem 2rem",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "var(--soft-blue)",
                    color: "var(--blue)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem"
                  }}
                >
                  <ShieldCheck size={32} />
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--primary)", marginBottom: "0.75rem" }}>
                  Message Received
                </h3>
                <p style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: "1.6", marginBottom: "2rem" }}>
                  Thank you, <strong>{formData.name}</strong>. An engineering representative in Harare will review your notes and respond within 1 business day.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setStatus("idle");
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      category: "Systems Integration",
                      message: "",
                      website_hp: ""
                    });
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--primary)", marginBottom: "0.5rem" }}>
                  Send an Engineering Inquiry
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--muted)", marginBottom: "2rem" }}>
                  Fill out the form below and an engineer will review your operational requirements.
                </p>

                {status === "error" && (
                  <div
                    style={{
                      backgroundColor: "#FEF2F2",
                      border: "1px solid #FECACA",
                      borderRadius: "var(--radius-sm)",
                      padding: "1rem",
                      color: "#991B1B",
                      fontSize: "0.9rem",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                      marginBottom: "1.5rem"
                    }}
                  >
                    <AlertCircle size={18} style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {/* Anti-spam honeypot */}
                  <div style={{ display: "none" }} aria-hidden="true">
                    <label>
                      Do not fill this field:
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

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Your Name *</label>
                      <input
                        type="text"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="First and last name"
                        className="form-input"
                        disabled={status === "submitting"}
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Organization / Company *</label>
                      <input
                        type="text"
                        required
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="form-input"
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Work Email *</label>
                      <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="form-input"
                        disabled={status === "submitting"}
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Primary Challenge Area *</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="form-select"
                        disabled={status === "submitting"}
                      >
                        <option value="Systems Integration">Systems Integration &amp; Middleware</option>
                        <option value="Custom Software">Custom Software &amp; Portals</option>
                        <option value="Workflow Automation">Workflow &amp; Spreadsheet Automation</option>
                        <option value="ERP & CRM">ERP &amp; CRM Setup (Odoo, Zoho, Sage)</option>
                        <option value="Payment Gateway">Payment Gateway &amp; Billing Sync</option>
                        <option value="Pragmatic AI">Pragmatic AI &amp; Document Ingestion</option>
                        <option value="Other Inquiry">Other Technical Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Describe What Is Not Working *</label>
                    <textarea
                      required
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about the systems currently in place, where manual work is slowing down operations, or what you need to build..."
                      className="form-textarea"
                      disabled={status === "submitting"}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={status === "submitting"}
                    style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem" }}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Submitting Inquiry...
                      </>
                    ) : (
                      <>
                        Send Engineering Inquiry
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
