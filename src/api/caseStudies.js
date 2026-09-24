import { apiClient } from "./client";

export async function getCaseStudies() {
  try {
    const data = await apiClient("/case-studies");
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export async function getCaseStudyBySlug(slug) {
  try {
    return await apiClient(`/case-studies/${slug}`);
  } catch {
    return null;
  }
}

export async function getAdminCaseStudies() {
  return apiClient("/admin/case-studies");
}

export async function createCaseStudy(payload) {
  return apiClient("/admin/case-studies", { data: payload });
}

export async function updateCaseStudy(id, payload) {
  return apiClient(`/admin/case-studies/${id}`, { method: "PUT", data: payload });
}

export async function deleteCaseStudy(id) {
  return apiClient(`/admin/case-studies/${id}`, { method: "DELETE" });
}
