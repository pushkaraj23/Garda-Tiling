"use client";

import { useEffect, useState } from "react";
import { apiUrl, fetchCmsClient } from "./api";
import { mapService, mapServices } from "./mappers";
import { normalizeSlugParam, slugLookupCandidates } from "./slug";
import { servicesData } from "@/components/lib/servicesData";

export function useServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const path = "/services?active=true";
      const requestUrl = apiUrl(path);
      const result = await fetchCmsClient(path);

      if (cancelled) return;

      if (result.ok && Array.isArray(result.data)) {
        const mapped = mapServices(result.data);
        setServices(mapped);
        setSource(mapped.length > 0 ? "cms" : "empty");
        setLoading(false);
        if (process.env.NODE_ENV === "development") {
          console.info("[cms] services request:", requestUrl, "count:", mapped.length);
        }
        return;
      }

      if (process.env.NODE_ENV === "development") {
        console.warn("[cms] services fallback (API error):", result.error, requestUrl);
      }
      setServices(servicesData);
      setSource("fallback");
      setLoading(false);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { services, loading, source };
}

export function useService(slug) {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState("loading");

  useEffect(() => {
    const candidates = slugLookupCandidates(slug);
    if (!candidates.length) {
      setLoading(false);
      setSource("missing");
      return;
    }

    let cancelled = false;

    async function load() {
      for (const candidate of candidates) {
        const path = `/services/${encodeURIComponent(candidate)}`;
        const result = await fetchCmsClient(path);
        if (cancelled) return;

        if (result.ok && result.data) {
          const row = Array.isArray(result.data) ? result.data[0] : result.data;
          const mapped = mapService(row);
          if (mapped) {
            setService(mapped);
            setSource("cms");
            setLoading(false);
            return;
          }
        }
      }

      const normalizedSlug = normalizeSlugParam(slug);
      setService(
        servicesData.find((s) => candidates.includes(s.slug)) ||
          servicesData.find((s) => s.slug === normalizedSlug) ||
          null
      );
      setSource("fallback");
      setLoading(false);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { service, loading, source };
}
