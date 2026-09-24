import { apiClient } from "./client";
import { industriesData } from "../data/initialData";

export async function getIndustries() {
  try {
    const data = await apiClient("/industries");
    return Array.isArray(data) && data.length > 0 ? data : industriesData;
  } catch {
    return industriesData;
  }
}

export async function getIndustryBySlug(slug) {
  try {
    const data = await apiClient(`/industries/${slug}`);
    if (data) return data;
  } catch {
    // Fallback to local data
  }
  return industriesData.find(i => i.slug === slug) || null;
}

export async function getAdminIndustries() {
  return apiClient("/admin/industries");
}

export async function createIndustry(payload) {
  return apiClient("/admin/industries", { data: payload });
}

export async function updateIndustry(id, payload) {
  return apiClient(`/admin/industries/${id}`, { method: "PUT", data: payload });
}

export async function deleteIndustry(id) {
  return apiClient(`/admin/industries/${id}`, { method: "DELETE" });
}
