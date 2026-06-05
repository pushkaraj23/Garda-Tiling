import { normalizeSlugParam, slugify } from "./slug";

export { normalizeSlugParam, slugify };

/** Build a safe path segment for CMS slugs (spaces, special chars). */
export function encodeSlugPath(slug) {
  if (slug == null || slug === "") return "";
  return encodeURIComponent(String(slug).trim());
}

export function projectDetailPath(slug) {
  const encoded = encodeSlugPath(slug);
  return encoded ? `/projects/${encoded}` : "/projects";
}

export function serviceDetailPath(slug) {
  const encoded = encodeSlugPath(slug);
  return encoded ? `/services/${encoded}` : "/services";
}
