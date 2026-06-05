"use client";

import { useEffect, useState } from "react";
import { apiUrl, fetchCmsClient } from "./api";
import { mapProjects, toHomeProjectCard } from "./mappers";
import { projects as staticProjects } from "@/components/lib/projectData";

/**
 * Client-side CMS load for projects. Requests go to NEXT_PUBLIC_API_BASE_URL
 * (e.g. http://localhost:5000/api/projects?active=true).
 */
export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  /** @type {'loading' | 'cms' | 'fallback'} */
  const [source, setSource] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const requestUrl = apiUrl("/projects?active=true");
      const result = await fetchCmsClient("/projects?active=true");

      if (cancelled) return;

      if (result.ok && Array.isArray(result.data)) {
        const mapped = mapProjects(result.data);
        if (mapped.length > 0) {
          setProjects(mapped);
          setSource("cms");
          setLoading(false);
          if (process.env.NODE_ENV === "development") {
            console.info("[cms] projects loaded from", requestUrl, mapped.length);
          }
          return;
        }
      }

      console.warn(
        "[cms] using static projectData.js fallback;",
        result.error || "empty CMS list",
        requestUrl
      );
      setProjects(staticProjects);
      setSource("fallback");
      setLoading(false);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { projects, loading, source };
}

/** Homepage card shape from live CMS projects */
export function useHomeProjects(limit = 4) {
  const { projects, loading, source } = useProjects();
  const homeProjects = projects.slice(0, limit).map(toHomeProjectCard);
  return { homeProjects, loading, source, projects };
}
