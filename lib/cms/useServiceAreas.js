"use client";

import { useEffect, useState } from "react";
import { fetchCmsClient } from "./api";
import { mapServiceAreas } from "./mappers";

const STATIC = [
  "Brisbane CBD",
  "Inner West",
  "Eastern Suburbs",
  "Northern Beaches",
  "North Shore",
  "Western Brisbane",
  "South West Brisbane",
  "Sutherland Shire",
  "Parramatta Region",
  "Hills District",
];

export function useServiceAreas() {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const result = await fetchCmsClient("/service-areas");
      if (cancelled) return;

      if (result.ok && Array.isArray(result.data)) {
        const mapped = mapServiceAreas(result.data);
        if (mapped.length > 0) {
          setAreas(mapped.map((a) => a.name));
          setSource("cms");
          setLoading(false);
          return;
        }
      }

      setAreas(STATIC);
      setSource("fallback");
      setLoading(false);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { areas, loading, source };
}
