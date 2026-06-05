/** URL-safe slug: lowercase, hyphens, no leading/trailing hyphen. */
export function slugify(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Candidates for matching API rows (legacy spaces vs hyphen slugs). */
export function slugLookupCandidates(slug) {
  const trimmed = normalizeSlugParam(slug);
  const hyphen = slugify(trimmed);
  const legacy = trimmed.toLowerCase().replace(/\s+/g, "-");
  return [...new Set([trimmed, hyphen, legacy, trimmed.toLowerCase()].filter(Boolean))];
}

export function normalizeSlugParam(slug) {
  if (slug == null) return "";
  try {
    return decodeURIComponent(String(slug)).trim();
  } catch {
    return String(slug).trim();
  }
}
