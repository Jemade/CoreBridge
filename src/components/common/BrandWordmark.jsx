import React from "react";
import { Link } from "react-router-dom";
import corebridgeLogoBlue from "../../assets/corebridge-logo.png";

/**
 * BrandWordmark component
 * 
 * Unified brand wordmark where the signature faceted blue C-logo mark
 * acts as the initial "C" in the wordmark:
 * [C-LOGO-MARK] OREBRIDGE
 * 
 * Requirements:
 * - Logo mark ALWAYS retains its signature vibrant blue color and visible faceted design.
 * - Sizing is optically even with uppercase "OREBRIDGE" letters.
 * - Tightly controlled optical spacing between the mark and "O".
 * - Fully accessible with screen-reader text "Corebridge".
 * - When linkTo is specified, renders an accessible Link to the target route.
 * - Never duplicate the "C" (no logo followed by the full word "COREBRIDGE").
 */
export default function BrandWordmark({
  variant = "light",
  size,
  textColor,
  linkTo,
  className = "",
  style = {}
}) {
  const isLight = variant === "light" || variant === "white";
  const defaultTextColor = isLight
    ? "#FFFFFF"
    : variant === "blue"
    ? "var(--blue, #1769E8)"
    : "var(--primary, #0A1929)";
  const finalTextColor = textColor || defaultTextColor;

  const presetSizes = {
    xs: "0.75rem",
    sm: "0.85rem",
    md: "1.1rem",
    lg: "1.35rem",
    xl: "1.65rem",
    "2xl": "2.25rem"
  };

  const appliedFontSize = size ? (presetSizes[size] || size) : undefined;

  const content = (
    <span
      className={`brand-wordmark ${isLight ? "brand-wordmark-light" : "brand-wordmark-dark"} ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        lineHeight: 1,
        letterSpacing: "-0.02em",
        userSelect: "none",
        verticalAlign: "middle",
        textDecoration: "none",
        ...(appliedFontSize ? { fontSize: appliedFontSize } : {}),
        ...style
      }}
      role="img"
      aria-label="Corebridge"
    >
      <span
        className="brand-wordmark-c"
        aria-hidden="true"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: "1.08em",
          width: "1.08em",
          marginRight: "0.22em",
          flexShrink: 0,
          lineHeight: 1
        }}
      >
        <img
          src={corebridgeLogoBlue}
          alt=""
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
            display: "block"
          }}
        />
      </span>
      <span
        className="brand-wordmark-text"
        aria-hidden="true"
        style={{
          fontWeight: 800,
          fontSize: "1em",
          letterSpacing: "-0.025em",
          color: finalTextColor,
          fontFamily: "var(--font-sans, 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)",
          display: "inline-block",
          lineHeight: 1
        }}
      >
        OREBRIDGE
      </span>
    </span>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="brand-link" style={{ textDecoration: "none", display: "inline-flex" }}>
        {content}
      </Link>
    );
  }

  return content;
}
