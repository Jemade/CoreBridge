const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api/v1";

export async function apiClient(endpoint, { data, token, headers: customHeaders, ...customConfig } = {}) {
  const authToken = token || localStorage.getItem("corebridge_token");
  const headers = {
    "Content-Type": "application/json",
    ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
    ...customHeaders,
  };

  const config = {
    method: data ? "POST" : "GET",
    headers,
    ...customConfig,
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  const url = endpoint.startsWith("http") ? endpoint : `${API_BASE_URL}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;

  try {
    const response = await fetch(url, config);

    if (response.status === 401) {
      // Clear token if unauthorized on an admin endpoint
      if (endpoint.includes("/admin") || endpoint.includes("/auth")) {
        localStorage.removeItem("corebridge_token");
      }
    }

    const isJson = response.headers.get("content-type")?.includes("application/json");
    const result = isJson ? await response.json() : await response.text();

    if (!response.ok) {
      const errorMsg = (typeof result === "object" && result !== null)
        ? (result.detail || result.message || JSON.stringify(result))
        : (result || `HTTP ${response.status} error`);
      throw new Error(errorMsg);
    }

    return result;
  } catch (err) {
    console.warn(`API request failed [${config.method} ${url}]:`, err.message);
    throw err;
  }
}
