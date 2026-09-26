import React from "react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/263780787214?text=Hello%20Corebridge%2C%20I%20would%20like%20to%20discuss%20a%20business%20systems%20or%20software%20requirement.";

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 99,
        display: "flex",
        alignItems: "center"
      }}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Corebridge on WhatsApp"
        title="Chat with Corebridge on WhatsApp"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          backgroundColor: "#25D366",
          color: "#FFFFFF",
          padding: "0.75rem 1rem",
          borderRadius: "9999px",
          boxShadow: "0 4px 14px rgba(0, 0, 0, 0.16)",
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "0.88rem",
          transition: "transform 0.15s ease, box-shadow 0.15s ease",
          outline: "none"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.22)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 14px rgba(0, 0, 0, 0.16)";
        }}
        onFocus={(e) => {
          e.currentTarget.style.outline = "2px solid #0A1929";
          e.currentTarget.style.outlineOffset = "2px";
        }}
        onBlur={(e) => {
          e.currentTarget.style.outline = "none";
        }}
      >
        <WhatsAppIcon size={20} />
        <span className="floating-wa-label" style={{ letterSpacing: "-0.01em" }}>
          Chat with Corebridge
        </span>
      </a>
    </aside>
  );
}
