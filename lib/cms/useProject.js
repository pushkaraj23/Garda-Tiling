"use client";

import { useEffect, useState } from "react";
import { apiUrl, fetchCmsClient } from "./api";
import { mapProject } from "./mappers";
import { normalizeSlugParam, slugLookupCandidates } from "./slug";
import { projects as staticProjects } from "@/components/lib/projectData";

export function useProject(slug) {
  const [project, setProject] = useState(null);
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
        const path = `/projects/${encodeURIComponent(candidate)}`;
        const result = await fetchCmsClient(path);
        if (cancelled) return;

        if (result.ok && result.data) {
          const row = Array.isArray(result.data) ? result.data[0] : result.data;
          const mapped = mapProject(row);
          if (mapped) {
            setProject(mapped);
            setSource("cms");
            setLoading(false);
            return;
          }
        }
      }

      const normalizedSlug = normalizeSlugParam(slug);
      const fallback =
        staticProjects.find((p) => candidates.includes(p.slug)) ||
        staticProjects.find((p) => p.slug === normalizedSlug) ||
        null;
      setProject(fallback);
      setSource(fallback ? "fallback" : "missing");
      setLoading(false);
      if (process.env.NODE_ENV === "development") {
        console.warn("[cms] project detail fallback:", normalizedSlug, apiUrl(`/projects/${encodeURIComponent(normalizedSlug)}`));
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { project, loading, source };
}
