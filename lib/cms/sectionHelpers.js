/** Deep-merge CMS content over static defaults (CMS wins on defined keys). */
export function mergeSectionContent(cmsContent, defaults) {
  if (!defaults) return cmsContent || {};
  if (!cmsContent || typeof cmsContent !== "object") return { ...defaults };
  const merged = { ...defaults, ...cmsContent };
  if (Array.isArray(defaults.cards) && Array.isArray(cmsContent.cards) && cmsContent.cards.length) {
    merged.cards = cmsContent.cards;
  }
  if (Array.isArray(defaults.steps) && Array.isArray(cmsContent.steps) && cmsContent.steps.length) {
    merged.steps = cmsContent.steps;
  }
  if (Array.isArray(defaults.stats) && Array.isArray(cmsContent.stats) && cmsContent.stats.length) {
    merged.stats = cmsContent.stats;
  }
  if (Array.isArray(defaults.trustPoints) && Array.isArray(cmsContent.trustPoints) && cmsContent.trustPoints.length) {
    merged.trustPoints = cmsContent.trustPoints;
  }
  if (Array.isArray(defaults.pills) && Array.isArray(cmsContent.pills) && cmsContent.pills.length) {
    merged.pills = cmsContent.pills;
  }
  return merged;
}

export function getSectionContent(getSection, key, defaults) {
  const section = getSection(key);
  return mergeSectionContent(section?.content, defaults);
}
