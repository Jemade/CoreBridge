import { apiClient } from "./client";

export async function submitContactMessage(payload) {
  return apiClient("/contact", { data: payload });
}

export async function getAdminContactMessages(params = {}) {
  const query = new URLSearchParams(params).toString();
  return apiClient(`/admin/contact${query ? `?${query}` : ""}`);
}

export async function updateContactStatus(id, status) {
  return apiClient(`/admin/contact/${id}/status`, {
    method: "PATCH",
    data: { status }
  });
}
