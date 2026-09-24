import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AuditModal from "../components/common/AuditModal";

// Public Pages
import HomePage from "../pages/HomePage";
import SolutionsPage from "../pages/SolutionsPage";
import IndustriesPage from "../pages/IndustriesPage";
import IndustryDetailPage from "../pages/IndustryDetailPage";
import CaseStudiesPage from "../pages/CaseStudiesPage";
import CaseStudyDetailPage from "../pages/CaseStudyDetailPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";

// Admin Pages
import AdminLayout from "../pages/admin/AdminLayout";
import AdminLoginPage from "../pages/admin/AdminLoginPage";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import AdminAuditsPage from "../pages/admin/AdminAuditsPage";
import AdminContactsPage from "../pages/admin/AdminContactsPage";
import AdminContentPage from "../pages/admin/AdminContentPage";
import AdminSettingsPage from "../pages/admin/AdminSettingsPage";

function PublicLayout({ children, onOpenAudit }) {
  return (
    <div className="site">
      <Navbar onOpenAudit={onOpenAudit} />
      {children}
      <Footer onOpenAudit={onOpenAudit} />
    </div>
  );
}

export default function AppRoutes() {
  const [auditOpen, setAuditOpen] = useState(false);
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <Routes>
        {/* ── Public Site Routes ── */}
        <Route
          path="/"
          element={
            <PublicLayout onOpenAudit={() => setAuditOpen(true)}>
              <HomePage onOpenAudit={() => setAuditOpen(true)} />
            </PublicLayout>
          }
        />
        <Route
          path="/solutions"
          element={
            <PublicLayout onOpenAudit={() => setAuditOpen(true)}>
              <SolutionsPage onOpenAudit={() => setAuditOpen(true)} />
            </PublicLayout>
          }
        />
        <Route
          path="/industries"
          element={
            <PublicLayout onOpenAudit={() => setAuditOpen(true)}>
              <IndustriesPage onOpenAudit={() => setAuditOpen(true)} />
            </PublicLayout>
          }
        />
        <Route
          path="/industries/:slug"
          element={
            <PublicLayout onOpenAudit={() => setAuditOpen(true)}>
              <IndustryDetailPage onOpenAudit={() => setAuditOpen(true)} />
            </PublicLayout>
          }
        />
        <Route
          path="/case-studies"
          element={
            <PublicLayout onOpenAudit={() => setAuditOpen(true)}>
              <CaseStudiesPage onOpenAudit={() => setAuditOpen(true)} />
            </PublicLayout>
          }
        />
        <Route
          path="/case-studies/:slug"
          element={
            <PublicLayout onOpenAudit={() => setAuditOpen(true)}>
              <CaseStudyDetailPage onOpenAudit={() => setAuditOpen(true)} />
            </PublicLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PublicLayout onOpenAudit={() => setAuditOpen(true)}>
              <AboutPage onOpenAudit={() => setAuditOpen(true)} />
            </PublicLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <PublicLayout onOpenAudit={() => setAuditOpen(true)}>
              <ContactPage onOpenAudit={() => setAuditOpen(true)} />
            </PublicLayout>
          }
        />

        {/* ── Admin Routes ── */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="audits" element={<AdminAuditsPage />} />
          <Route path="contacts" element={<AdminContactsPage />} />
          <Route path="content" element={<AdminContentPage />} />
          <Route path="settings" element={<AdminSettingsPage />} />
        </Route>

        {/* ── 404 Fallback ── */}
        <Route
          path="*"
          element={
            <PublicLayout onOpenAudit={() => setAuditOpen(true)}>
              <NotFoundPage />
            </PublicLayout>
          }
        />
      </Routes>

      {/* Global Audit Modal for Public Routes */}
      {!isAdminRoute && (
        <AuditModal isOpen={auditOpen} onClose={() => setAuditOpen(false)} />
      )}
    </>
  );
}
