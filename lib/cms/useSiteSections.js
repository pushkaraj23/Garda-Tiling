"use client";

import { useEffect, useMemo, useState } from "react";
import { apiUrl, fetchCmsClient } from "./api";
import { normalizeSlugParam } from "./slug";

function parseField(value, fallback = {}) {
  if (value == null) return fallback;
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch {
      return { text: value };
    }
  }
  return value;
}

function mapSection(row) {
  if (!row) return null;
  return {
    id: row.id,
    pageSlug: row.page_slug ?? row.pageSlug,
    sectionKey: row.section_key ?? row.sectionKey,
    title: row.title || "",
    content: parseField(row.content, {}),
    media: parseField(row.media, {}),
    metadata: parseField(row.metadata, {}),
    sortOrder: row.sort_order ?? row.sortOrder ?? 0,
    is_active: row.is_active !== false,
  };
}

/** Normalize section key aliases (why_choose_us → why-choose). */
function normalizeKey(key) {
  return String(key || "").trim().toLowerCase().replace(/_/g, "-");
}

export function useSiteSections(pageSlug) {
  const [sections, setSections] = useState({});
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState("loading");

  useEffect(() => {
    const normalized = normalizeSlugParam(pageSlug);
    if (!normalized) {
      setLoading(false);
      setSource("missing");
      return;
    }

    let cancelled = false;

    async function load() {
      const path = `/site-sections?slug=${encodeURIComponent(normalized)}`;
      const result = await fetchCmsClient(path);
      if (cancelled) return;

      if (result.ok && Array.isArray(result.data)) {
        const map = {};
        result.data
          .filter((row) => row.is_active !== false)
          .forEach((row) => {
            const mapped = mapSection(row);
            if (mapped) {
              map[normalizeKey(mapped.sectionKey)] = mapped;
            }
          });
        setSections(map);
        setSource(Object.keys(map).length ? "cms" : "empty");
        setLoading(false);
        if (process.env.NODE_ENV === "development") {
          console.info("[cms] site sections:", apiUrl(path), Object.keys(map));
        }
        return;
      }

      setSections({});
      setSource("missing");
      setLoading(false);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [pageSlug]);

  const getSection = useMemo(
    () => (key) => sections[normalizeKey(key)] || null,
    [sections]
  );

  return { sections, getSection, loading, source };
}
