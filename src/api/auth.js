import { apiClient } from "./client";

export async function login(email, password) {
  const result = await apiClient("/auth/login", {
    method: "POST",
    data: { email, password }
  });
  if (result && result.access_token) {
    localStorage.setItem("corebridge_token", result.access_token);
    localStorage.setItem("corebridge_user", JSON.stringify(result.user || { email }));
  }
  return result;
}

export async function getCurrentUser() {
  const token = localStorage.getItem("corebridge_token");
  if (!token) return null;
  try {
    return await apiClient("/auth/me");
  } catch {
    localStorage.removeItem("corebridge_token");
    localStorage.removeItem("corebridge_user");
    return null;
  }
}

export function logout() {
  localStorage.removeItem("corebridge_token");
  localStorage.removeItem("corebridge_user");
}
