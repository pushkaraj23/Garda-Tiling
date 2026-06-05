"use client";

import { useEffect, useState } from "react";
import { apiUrl, fetchCmsClient } from "./api";
import { normalizeSlugParam } from "./slug";

function mapSitePage(row) {
  if (!row) return null;
  const parse = (v, fallback) => {
    if (v == null) return fallback;
    if (typeof v === "string") {
      try {
        return JSON.parse(v);
      } catch {
        return fallback;
      }
    }
    return v;
  };
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    seoTitle: row.seo_title ?? row.seoTitle,
    seoDescription: row.seo_description ?? row.seoDescription,
    heroData: parse(row.hero_data, {}),
    content: parse(row.content, {}),
    metadata: parse(row.metadata, {}),
    is_active: row.is_active !== false,
  };
}

export function useSitePage(slug) {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState("loading");

  useEffect(() => {
    const normalized = normalizeSlugParam(slug);
    if (!normalized) {
      setLoading(false);
      setSource("missing");
      return;
    }

    let cancelled = false;

    async function load() {
      const path = `/site-pages/${encodeURIComponent(normalized)}`;
      const result = await fetchCmsClient(path);
      if (cancelled) return;

      if (result.ok && result.data) {
        const mapped = mapSitePage(result.data);
        if (mapped?.is_active !== false) {
          setPage(mapped);
          setSource("cms");
          setLoading(false);
          return;
        }
      }

      setPage(null);
      setSource("missing");
      setLoading(false);
      if (process.env.NODE_ENV === "development") {
        console.info("[cms] site page:", apiUrl(path), result.error || "not found");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { page, loading, source };
}
