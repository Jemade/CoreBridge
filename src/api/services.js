import { apiClient } from "./client";
import { servicesData } from "../data/initialData";

export async function getServices() {
  try {
    const data = await apiClient("/services");
    return Array.isArray(data) && data.length > 0 ? data : servicesData;
  } catch {
    return servicesData;
  }
}

export async function getAdminServices() {
  return apiClient("/admin/services");
}

export async function createService(payload) {
  return apiClient("/admin/services", { data: payload });
}

export async function updateService(id, payload) {
  return apiClient(`/admin/services/${id}`, { method: "PUT", data: payload });
}

export async function deleteService(id) {
  return apiClient(`/admin/services/${id}`, { method: "DELETE" });
}
