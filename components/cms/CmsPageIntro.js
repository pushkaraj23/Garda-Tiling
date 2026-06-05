"use client";

import { useSitePage } from "@/lib/cms/useSitePage";

/**
 * Optional CMS-driven intro block for static marketing pages.
 * Falls back silently when no site page record exists.
 */
export default function CmsPageIntro({ slug, fallbackTitle, fallbackDescription, className = "" }) {
  const { page, loading } = useSitePage(slug);

  if (loading || !page) return null;

  const title = page.title || fallbackTitle;
  const description =
    page.seoDescription ||
    page.content?.intro ||
    page.content?.description ||
    fallbackDescription;

  if (!title && !description) return null;

  return (
    <section className={`w-full bg-accent-secondary/5 border-b border-border py-6 px-4 sm:px-6 ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        {title ? (
          <h1 className="font-bebas text-3xl sm:text-4xl text-text-primary tracking-tight">{title}</h1>
        ) : null}
        {description ? (
          <p className="mt-2 font-manrope text-sm sm:text-base text-text-muted">{description}</p>
        ) : null}
        {process.env.NODE_ENV === "development" ? (
          <p className="mt-2 text-xs font-manrope text-accent">CMS: Site Pages → {slug}</p>
        ) : null}
      </div>
    </section>
  );
}
