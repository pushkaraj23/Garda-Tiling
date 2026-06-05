import { projectDetailPath, serviceDetailPath } from "./paths";

function parseJson(value, fallback) {
  if (value == null) return fallback;
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch {
      return fallback;
    }
  }
  return value;
}

/** Normalize admin/API image lists to string URLs */
export function normalizeImageList(value) {
  const parsed = parseJson(value, value);
  if (Array.isArray(parsed)) {
    return parsed
      .map((item) => {
        if (typeof item === "string") return item.trim();
        if (item && typeof item === "object") {
          return String(item.url || item.src || item.href || "").trim();
        }
        return "";
      })
      .filter(Boolean);
  }
  if (typeof parsed === "string" && parsed.trim()) {
    if (parsed.startsWith("[") || parsed.startsWith("{")) {
      const again = parseJson(parsed, []);
      return normalizeImageList(again);
    }
    return parsed.split(",").map((s) => s.trim()).filter(Boolean);
  }
  return [];
}

function formatDate(value) {
  if (!value) return "";
  if (typeof value === "string" && !value.includes("-")) return value;
  try {
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return String(value);
    return d.toLocaleDateString("en-AU", { month: "short", year: "numeric" });
  } catch {
    return String(value);
  }
}

/** @param {Record<string, unknown>} row */
export function mapProject(row) {
  if (!row) return null;
  const images = normalizeImageList(row.images);
  const beforeAfterRaw = parseJson(row.before_after ?? row.beforeAfter, {});
  const metadata = parseJson(row.metadata, {});
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    description: row.description || "",
    category: row.category || "",
    status: row.status || "completed",
    location: row.location || "",
    client: metadata.client || row.client || "",
    budget: row.budget || "",
    duration: row.duration || "",
    startDate: formatDate(row.start_date ?? row.startDate),
    completionDate: formatDate(row.completion_date ?? row.completionDate),
    progress: metadata.progress ?? row.progress ?? 100,
    images: Array.isArray(images) ? images : [],
    services: parseJson(row.services, []),
    team: parseJson(row.team, []),
    specifications: parseJson(row.specifications, {}),
    testimonials: parseJson(row.testimonials, []),
    challenges: metadata.challenges || row.challenges || [],
    solutions: metadata.solutions || row.solutions || [],
    beforeAfter: beforeAfterRaw.before
      ? {
          before: beforeAfterRaw.before,
          after: beforeAfterRaw.after || beforeAfterRaw.before,
        }
      : row.beforeAfter || null,
  };
}

/** @param {unknown[]} rows */
export function mapProjects(rows) {
  if (!Array.isArray(rows)) return [];
  return rows.map(mapProject).filter(Boolean);
}

/** @param {Record<string, unknown>} row */
export function mapService(row) {
  if (!row) return null;
  if (row.shortDesc !== undefined) return row;
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    icon: row.icon,
    shortDesc: row.short_desc ?? row.shortDesc,
    fullDesc: row.full_desc ?? row.fullDesc,
    mainImage: row.main_image ?? row.mainImage,
    images: parseJson(row.images, []),
    pricing: row.pricing,
    duration: row.duration,
    inclusions: parseJson(row.inclusions, []),
    faqs: parseJson(row.faqs, []),
    seo: parseJson(row.seo, {}),
    is_active: row.is_active ?? row.isActive,
  };
}

/** @param {unknown[]} rows */
export function mapServices(rows) {
  if (!Array.isArray(rows)) return [];
  return rows.map(mapService).filter(Boolean);
}

/** @param {Record<string, unknown>} row */
export function mapTestimonial(row) {
  if (!row) return null;
  return {
    id: row.id,
    text: row.text,
    author: row.author,
    role: row.role,
    company: row.company,
    rating: row.rating,
    avatarUrl: row.avatar_url ?? row.avatarUrl,
  };
}

/** @param {unknown[]} rows */
export function mapTestimonials(rows) {
  if (!Array.isArray(rows)) return [];
  return rows.map(mapTestimonial).filter(Boolean);
}

/** @param {Record<string, unknown>} row */
export function mapServiceArea(row) {
  if (!row) return null;
  return {
    id: row.id,
    name: row.name,
    description: row.description || "",
  };
}

/** @param {unknown[]} rows */
export function mapServiceAreas(rows) {
  if (!Array.isArray(rows)) return [];
  return rows.map(mapServiceArea).filter(Boolean);
}

/** Homepage project card shape */
export function toHomeProjectCard(project) {
  const img = project.images?.[0] || project.mainImage;
  return {
    title: project.title,
    subtitle: project.description?.slice(0, 80) || "",
    img,
    link: projectDetailPath(project.slug),
  };
}

/** Homepage service card shape */
export function toHomeServiceCard(service) {
  return {
    title: service.title,
    subtitle: service.shortDesc || "",
    img: service.mainImage,
    path: serviceDetailPath(service.slug),
  };
}
