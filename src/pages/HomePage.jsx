import React, { useState, useEffect } from "react";
import HeroSection from "../sections/HeroSection";
import BusinessProblemSection from "../sections/BusinessProblemSection";
import SystemsMap from "../components/common/SystemsMap";
import WhatWeSolveSection from "../sections/WhatWeSolveSection";
import BuildIntegrateImproveSection from "../sections/BuildIntegrateImproveSection";
import CapabilitiesPreviewSection from "../sections/CapabilitiesPreviewSection";
import GlobalLocalSection from "../sections/GlobalLocalSection";
import InteroperabilitySection from "../sections/InteroperabilitySection";
import LocalRealitiesSection from "../sections/LocalRealitiesSection";
import IndustriesPreviewSection from "../sections/IndustriesPreviewSection";
import CaseStudiesPreviewSection from "../sections/CaseStudiesPreviewSection";
import OperationalReviewCTASection from "../sections/OperationalReviewCTASection";
import SEO from "../components/common/SEO";
import { getServices } from "../api/services";
import { getIndustries } from "../api/industries";
import { servicesData, industriesData, caseStudiesData } from "../data/initialData";

export default function HomePage({ onOpenAudit }) {
  const [services, setServices] = useState(servicesData);
  const [industries, setIndustries] = useState(industriesData);

  useEffect(() => {
    let isMounted = true;
    getServices().then((data) => {
      if (isMounted && data && data.length > 0) setServices(data);
    });
    getIndustries().then((data) => {
      if (isMounted && data && data.length > 0) setIndustries(data);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <SEO
        title="Corebridge | Smarter Systems. Stronger Businesses."
        description="Corebridge engineers custom software, integrates ERP and accounting platforms, automates operational workflows, and introduces pragmatic AI for businesses in Zimbabwe."
      />
      <main>
        {/* 1. Hero Section */}
        <HeroSection onOpenAudit={onOpenAudit} />

        {/* 2. The Operational Problem */}
        <BusinessProblemSection onOpenAudit={onOpenAudit} />

        {/* 3. Systems Architecture & Interoperability Map */}
        <SystemsMap onOpenAudit={onOpenAudit} />

        {/* 4. What We Solve */}
        <WhatWeSolveSection />

        {/* 5. Build vs Integrate vs Improve */}
        <BuildIntegrateImproveSection />

        {/* 6. Core Capabilities Preview */}
        <CapabilitiesPreviewSection services={services} onOpenAudit={onOpenAudit} />

        {/* 7. Global Systems, Local Realities */}
        <GlobalLocalSection onOpenAudit={onOpenAudit} />

        {/* 8. Interoperability Pipeline Flow */}
        <InteroperabilitySection />

        {/* 9. Local Business Realities */}
        <LocalRealitiesSection />

        {/* 10. Industry Domains Preview */}
        <IndustriesPreviewSection industries={industries} />

        {/* 11. Grounded Case Studies Preview */}
        <CaseStudiesPreviewSection caseStudies={caseStudiesData} />

        {/* 12. 15-Minute Operational Review Closing CTA */}
        <OperationalReviewCTASection onOpenAudit={onOpenAudit} />
      </main>
    </>
  );
}
