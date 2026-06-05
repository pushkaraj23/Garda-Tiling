/**
 * CMS API helpers for the public Next.js site.
 * Set NEXT_PUBLIC_API_BASE_URL in .env.local (e.g. http://localhost:5000/api).
 *
 * Client bundles inline NEXT_PUBLIC_* at build time. The root layout also injects
 * window.__GARDA_CMS_API_BASE__ at request time so `npm start` works without rebuild.
 */

import { getBrowserApiBaseUrl, getDevApiDefault } from "./runtimeConfig";

export function getApiBaseUrl() {
  const browserBase = getBrowserApiBaseUrl();
  if (browserBase) return browserBase;

  const envBase = process.env.NEXT_PUBLIC_API_BASE_URL || "";
  if (envBase.trim()) return envBase.replace(/\/$/, "");

  if (typeof window !== "undefined") {
    const host = window.location?.hostname;
    if (host === "localhost" || host === "127.0.0.1") {
      return getDevApiDefault();
    }
  }

  if (process.env.NODE_ENV === "development") {
    return getDevApiDefault();
  }

  return "";
}

export function apiUrl(path) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const base = getApiBaseUrl();
  if (base) {
    return `${base}${normalized}`;
  }
  return normalized;
}

/**
 * @template T
 * @param {string} path - Path relative to API base (e.g. /projects)
 * @param {{ fallback?: T, revalidate?: number, cache?: RequestCache }} [options]
 * @returns {Promise<T>}
 */
const CMS_FETCH_TIMEOUT_MS = 5000;

export async function fetchCms(path, options = {}) {
  const { fallback, revalidate = 60, cache } = options;
  const base = getApiBaseUrl();
  if (!base) {
    if (fallback !== undefined) return fallback;
    throw new Error("NEXT_PUBLIC_API_BASE_URL is not set");
  }
  try {
    const url = apiUrl(path);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), CMS_FETCH_TIMEOUT_MS);
    const useNoStore = cache === "no-store" || cache === undefined;
    const fetchOptions = {
      cache: cache ?? "no-store",
      signal: controller.signal,
    };
    if (revalidate != null && !useNoStore) {
      fetchOptions.next = { revalidate };
    }
    const res = await fetch(url, fetchOptions);
    clearTimeout(timeoutId);
    if (!res.ok) {
      throw new Error(`CMS ${path} responded ${res.status}`);
    }
    const json = await res.json();
    if (json.success === false) {
      throw new Error(json.message || "CMS request failed");
    }
    return json.data ?? fallback;
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[cms] ${path}:`, err?.message || err);
    }
    if (fallback !== undefined) return fallback;
    throw err;
  }
}

/**
 * Client-side CMS fetch — always uses absolute API URL when configured.
 * @template T
 */
export async function fetchCmsClient(path, { method = "GET", body, fallback } = {}) {
  const url = apiUrl(path);
  const base = getApiBaseUrl();

  if (!base) {
    console.error(
      "[cms] Missing API base URL. Set NEXT_PUBLIC_API_BASE_URL and restart the Next server."
    );
    return { ok: false, error: "CMS API base URL not configured", data: fallback };
  }

  try {
    const res = await fetch(url, {
      method,
      headers: body ? { "Content-Type": "application/json" } : undefined,
      body: body ? JSON.stringify(body) : undefined,
      cache: "no-store",
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      return {
        ok: false,
        error: json.message || json.error || `HTTP ${res.status}`,
        data: fallback,
      };
    }
    return { ok: true, data: json.data ?? json, message: json.message };
  } catch (err) {
    console.error("[cms] fetch failed:", url, err);
    return { ok: false, error: "Network error", data: fallback };
  }
}
