"use client";

import { useEffect, useState } from "react";
import { fetchCmsClient } from "./api";
import { mapTestimonials } from "./mappers";

const STATIC = [
  { text: "Garda Tiling did an excellent job on our bathroom renovation. The team was professional, punctual, and the finish was flawless." },
  { text: "Very impressed with the quality of work and attention to detail. Everything was explained clearly and completed on time." },
  { text: "Great communication from start to finish. The waterproofing and tiling were done properly and the site was left clean every day." },
  { text: "Reliable, honest, and skilled workmanship. We are extremely happy with the final result and would definitely use Garda Tiling again." },
];

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const result = await fetchCmsClient("/testimonials");
      if (cancelled) return;

      if (result.ok && Array.isArray(result.data)) {
        const active = result.data.filter((t) => t.is_active !== false);
        const mapped = mapTestimonials(active.length ? active : result.data);
        if (mapped.length > 0) {
          setTestimonials(mapped);
          setSource("cms");
          setLoading(false);
          return;
        }
      }

      setTestimonials(STATIC);
      setSource("fallback");
      setLoading(false);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { testimonials, loading, source };
}
