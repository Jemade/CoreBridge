import React from "react";
import corebridgeLogoWhite from "../../assets/corebridge-logo-white.png";
import corebridgeLogoBlue from "../../assets/corebridge-logo.png";

/**
 * BrandWordmark component
 * 
 * Renders the Corebridge identity where the C-shaped logo mark replaces the initial "C":
 * [C-LOGO-MARK] OREBRIDGE
 * 
 * - Same visual cap-height as the uppercase letters
 * - Tightly controlled optical spacing between mark and "O"
 * - Aligned baseline
 * - Functions as a single, coherent wordmark
 * - Fully accessible with screen-reader text "Corebridge"
 */
export default function BrandWordmark({ variant = "white", className = "", style = {} }) {
  const isWhite = variant === "white";
  const markSrc = isWhite ? corebridgeLogoWhite : corebridgeLogoBlue;
  const textColor = isWhite ? "#FFFFFF" : "#0A1929";

  return (
    <span
      className={`brand-wordmark ${isWhite ? "brand-wordmark-white" : "brand-wordmark-dark"} ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        lineHeight: 1,
        letterSpacing: "-0.015em",
        userSelect: "none",
        ...style
      }}
      aria-label="Corebridge"
    >
      <span
        className="brand-wordmark-c"
        aria-hidden="true"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: "0.78em",
          width: "0.73em",
          marginRight: "0.06em",
          flexShrink: 0
        }}
      >
        <img
          src={markSrc}
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
          letterSpacing: "-0.015em",
          color: textColor,
          fontFamily: "var(--font-sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)",
          display: "inline-block",
          lineHeight: 1
        }}
      >
        OREBRIDGE
      </span>
      <span className="sr-only">Corebridge</span>
    </span>
  );
}
