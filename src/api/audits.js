import { apiClient } from "./client";

export async function submitAuditRequest(payload) {
  return apiClient("/audits", { data: payload });
}

export async function getAdminAudits(params = {}) {
  const query = new URLSearchParams(params).toString();
  return apiClient(`/admin/audits${query ? `?${query}` : ""}`);
}

export async function updateAuditStatus(id, status, notes = "") {
  return apiClient(`/admin/audits/${id}/status`, {
    method: "PATCH",
    data: { status, notes }
  });
}
