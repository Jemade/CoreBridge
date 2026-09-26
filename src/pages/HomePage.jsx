import React from "react";
import HeroSection from "../sections/HeroSection";
import BusinessProblemSection from "../sections/BusinessProblemSection";
import BuildIntegrateImproveSection from "../sections/BuildIntegrateImproveSection";
import CapabilitiesPreviewSection from "../sections/CapabilitiesPreviewSection";
import IndustriesPreviewSection from "../sections/IndustriesPreviewSection";
import CaseStudiesPreviewSection from "../sections/CaseStudiesPreviewSection";
import PhilosophyStatementSection from "../sections/PhilosophyStatementSection";
import OperationalReviewCTASection from "../sections/OperationalReviewCTASection";
import SEO from "../components/common/SEO";

export default function HomePage({ onOpenAudit }) {
  return (
    <>
      <SEO
        title="Corebridge | Smarter Systems. Stronger Businesses."
        description="Corebridge builds and connects the systems businesses rely on, from custom software and integrations to workflow automation and practical AI."
      />
      <main>
        {/* 01 HERO */}
        <HeroSection onOpenAudit={onOpenAudit} />

        {/* 02 THE PROBLEM */}
        <BusinessProblemSection />

        {/* 03 THE COREBRIDGE APPROACH */}
        <BuildIntegrateImproveSection />

        {/* 04 WHAT COREBRIDGE DOES */}
        <CapabilitiesPreviewSection />

        {/* 05 WHERE WE WORK */}
        <IndustriesPreviewSection />

        {/* 06 SELECTED WORK */}
        <CaseStudiesPreviewSection />

        {/* 07 COREBRIDGE IN ONE STATEMENT */}
        <PhilosophyStatementSection />

        {/* 08 FINAL CTA */}
        <OperationalReviewCTASection onOpenAudit={onOpenAudit} />
      </main>
    </>
  );
}
