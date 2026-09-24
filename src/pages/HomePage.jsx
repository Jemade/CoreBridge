import React, { useState, useEffect } from "react";
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import IndustriesSection from "../sections/IndustriesSection";
import ProcessSection from "../sections/ProcessSection";
import CapabilityShowcase from "../sections/CapabilityShowcase";
import SEO from "../components/common/SEO";
import { getServices } from "../api/services";
import { getIndustries } from "../api/industries";
import { servicesData, industriesData } from "../data/initialData";

export default function HomePage({ onOpenAudit }) {
  const [services, setServices] = useState(servicesData);
  const [industries, setIndustries] = useState(industriesData);

  useEffect(() => {
    let isMounted = true;
    getServices().then(data => {
      if (isMounted && data && data.length > 0) setServices(data);
    });
    getIndustries().then(data => {
      if (isMounted && data && data.length > 0) setIndustries(data);
    });
    return () => { isMounted = false; };
  }, []);

  return (
    <>
      <SEO
        description="Corebridge provides custom software development, systems integration, AI workflow automation, and enterprise ERP consultancy for growing businesses."
      />
      <main>
        <HeroSection onOpenAudit={onOpenAudit} />
        <ServicesSection services={services} onOpenAudit={onOpenAudit} />
        <IndustriesSection industries={industries} onOpenAudit={onOpenAudit} />
        <ProcessSection />
        <CapabilityShowcase onOpenAudit={onOpenAudit} />
      </main>
    </>
  );
}
