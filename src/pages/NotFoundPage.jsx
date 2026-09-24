import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from "../components/common/SEO";

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404 Page Not Found" />
      <div className="container" style={{ padding: "140px 0", textAlign: "center", minHeight: "60vh" }}>
        <span style={{ fontSize: "14px", fontWeight: "700", color: "var(--blue)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          ERROR 404
        </span>
        <h1 style={{ fontSize: "42px", fontWeight: "800", color: "var(--ink)", margin: "12px 0 16px" }}>
          Page Not Found
        </h1>
        <p style={{ color: "#64748b", fontSize: "16px", maxWidth: "480px", margin: "0 auto 32px", lineHeight: "1.6" }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="primary-btn" style={{ display: "inline-flex", margin: "0 auto" }}>
          <ArrowLeft size={16} /> Return to Homepage
        </Link>
      </div>
    </>
  );
}
