/** @type {string} */
export const CMS_API_BASE_KEY = "__GARDA_CMS_API_BASE__";

const DEV_API_DEFAULT = "http://localhost:5000/api";

/**
 * API base URL for browser CMS fetches (includes /api suffix).
 * Priority: layout-injected window value → build-time env → local dev default.
 */
export function getBrowserApiBaseUrl() {
  if (typeof window === "undefined") return "";

  const injected = window[CMS_API_BASE_KEY];
  if (typeof injected === "string" && injected.trim()) {
    return injected.replace(/\/$/, "");
  }

  const host = window.location?.hostname;
  if (host === "localhost" || host === "127.0.0.1") {
    return DEV_API_DEFAULT;
  }

  return "";
}

export function getDevApiDefault() {
  return DEV_API_DEFAULT;
}
