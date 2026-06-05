"use client";

/**
 * Renders CMS image URLs without Next.js remotePatterns restrictions.
 * Use for arbitrary admin-entered http(s) URLs.
 */
export default function CmsImage({ src, alt = "", className = "", fill, sizes, priority, style }) {
  if (!src || typeof src !== "string") return null;

  const url = src.trim();
  if (!url) return null;

  if (fill) {
    return (
      <img
        src={url}
        alt={alt}
        className={className}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", ...style }}
        loading={priority ? "eager" : "lazy"}
      />
    );
  }

  return (
    <img
      src={url}
      alt={alt}
      className={className}
      style={style}
      loading={priority ? "eager" : "lazy"}
    />
  );
}
