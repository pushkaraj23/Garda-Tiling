import { fetchCms } from "./api";
import { encodeSlugPath, normalizeSlugParam } from "./paths";
import { mapProject, mapProjects, mapService, mapServices, mapTestimonial, mapTestimonials, mapServiceAreas } from "./mappers";
import { servicesData } from "@/components/lib/servicesData";
import { projects } from "@/components/lib/projectData";

const STATIC_TESTIMONIALS = [
  { text: "Garda Tiling did an excellent job on our bathroom renovation. The team was professional, punctual, and the finish was flawless." },
  { text: "Very impressed with the quality of work and attention to detail. Everything was explained clearly and completed on time." },
  { text: "Great communication from start to finish. The waterproofing and tiling were done properly and the site was left clean every day." },
  { text: "Reliable, honest, and skilled workmanship. We are extremely happy with the final result and would definitely use Garda Tiling again." },
];

const STATIC_SERVICE_AREAS = [
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

export async function getServices() {
  try {
    const data = await fetchCms("/services?active=true", { cache: "no-store" });
    const mapped = mapServices(data);
    if (Array.isArray(mapped)) return mapped;
  } catch {
    /* API unavailable */
  }
  return servicesData;
}

export async function getServiceBySlug(slug) {
  const normalized = normalizeSlugParam(slug);
  try {
    const data = await fetchCms(`/services/${encodeSlugPath(normalized)}`, { revalidate: 60 });
    const mapped = mapService(data);
    if (mapped?.is_active === false) return servicesData.find((s) => s.slug === normalized) || null;
    return mapped;
  } catch {
    return servicesData.find((s) => s.slug === normalized) || null;
  }
}

export async function getProjects() {
  try {
    const data = await fetchCms("/projects?active=true", { cache: "no-store" });
    const mapped = mapProjects(data);
    if (Array.isArray(mapped)) return mapped;
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[cms] getProjects fallback:", err?.message || err);
    }
  }
  return projects;
}

export async function getProjectBySlug(slug) {
  const normalized = normalizeSlugParam(slug);
  try {
    const data = await fetchCms(`/projects/${encodeSlugPath(normalized)}`, { cache: "no-store" });
    const mapped = mapProject(data);
    if (mapped) return mapped;
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[cms] getProjectBySlug(${normalized}) fallback:`, err?.message || err);
    }
  }
  return projects.find((p) => p.slug === normalized) || null;
}

export async function getTestimonials() {
  const data = await fetchCms("/testimonials", { fallback: STATIC_TESTIMONIALS });
  const mapped = mapTestimonials(data);
  if (mapped.length) return mapped;
  return STATIC_TESTIMONIALS;
}

export async function getServiceAreas() {
  const data = await fetchCms("/service-areas", { fallback: [] });
  const mapped = mapServiceAreas(data);
  if (mapped.length) return mapped.map((a) => a.name);
  return STATIC_SERVICE_AREAS;
}

export async function getHomeSections() {
  try {
    return await fetchCms("/site-sections?slug=home", { fallback: [] });
  } catch {
    return [];
  }
}

export { fetchCms, fetchCmsClient } from "./api";
export { apiUrl } from "./api";
export { useProjects, useHomeProjects } from "./useProjects";
export { useProject } from "./useProject";
export { useServices, useService } from "./useServices";
export { useSitePage } from "./useSitePage";
export { useSiteSections } from "./useSiteSections";
export { useTestimonials } from "./useTestimonials";
export { useServiceAreas } from "./useServiceAreas";
export * from "./mappers";
