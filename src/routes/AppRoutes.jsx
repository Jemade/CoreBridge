import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SiteHeader, SiteFooter, FloatingContact, ScrollManager, Home, Solutions, Industries, IndustryDetail, Workflows, WorkflowDetail, About, Approach, Contact, Missing, Privacy } from '../design/SiteDesign';
export default function AppRoutes() {
  return <div className="site"><a className="skip-link" href="#main-content">Skip to content</a><ScrollManager /><SiteHeader /><main id="main-content"><Routes>
    <Route path="/" element={<Home />} /><Route path="/solutions" element={<Solutions />} /><Route path="/industries" element={<Industries />} /><Route path="/industries/:slug" element={<IndustryDetail />} />
    <Route path="/case-studies" element={<Workflows />} /><Route path="/case-studies/:slug" element={<WorkflowDetail />} /><Route path="/about" element={<About />} /><Route path="/approach" element={<Approach />} /><Route path="/contact" element={<Contact />} /><Route path="/privacy" element={<Privacy />} /><Route path="*" element={<Missing />} />
  </Routes></main><SiteFooter /><FloatingContact /></div>;
}
