"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useSiteSections } from "@/lib/cms/useSiteSections";
import { getSectionContent } from "@/lib/cms/sectionHelpers";
import { HERO_DEFAULTS } from "@/lib/cms/defaults/homeDefaults";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const { getSection } = useSiteSections("home");
  const hero = getSection("hero");
  const c = getSectionContent(getSection, "hero", HERO_DEFAULTS);

  const pills = Array.isArray(c.pills) && c.pills.length ? c.pills : HERO_DEFAULTS.pills;
  const subtext = c.subtext || c.text || HERO_DEFAULTS.subtext;
  const headline = c.headline || hero?.title || HERO_DEFAULTS.headline;
  const footnote = c.footnote || HERO_DEFAULTS.footnote;
  const quoteHref = c.quoteHref || HERO_DEFAULTS.quoteHref;
  const quoteLabel = c.quoteLabel || HERO_DEFAULTS.quoteLabel;
  const phoneHref = c.phoneHref || HERO_DEFAULTS.phoneHref;
  const videoSrc = c.videoSrc || hero?.media?.videoSrc || HERO_DEFAULTS.videoSrc;

  return (
    <section className="w-full bg-background mt-12 px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-t-4xl h-[85vh] md:h-[95vh] flex">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-background" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 w-full flex flex-col justify-end px-6 sm:px-10 lg:px-16 pb-8 sm:pb-12"
        >
          <motion.div variants={item} className="flex flex-wrap gap-2 mb-4">
            {pills.map((text, i) => (
              <span key={i} className="bg-accent-secondary text-white font-manrope text-xs sm:text-sm px-3 py-1.5 rounded-full">
                {text}
              </span>
            ))}
          </motion.div>

          <motion.p variants={item} className="text-text-primary font-manrope text-sm backdrop-blur-sm max-w-3xl rounded-2xl mb-2 bg-background/30 px-4 py-2">
            {subtext}
          </motion.p>

          <motion.h1 variants={item} className="font-bebas text-text-primary text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight max-w-5xl">
            {headline}
          </motion.h1>

          <motion.div variants={item} className="mt-3 flex flex-wrap items-center gap-4">
            <Link href={quoteHref} className="bg-primary text-white px-6 py-3 rounded-full font-manrope text-sm font-semibold shadow-lg hover:scale-105 transition">
              {quoteLabel}
            </Link>
            <Link href={phoneHref} className="bg-primary text-white w-11 h-11 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition" aria-label="Call us">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.01z" />
              </svg>
            </Link>
          </motion.div>

          <motion.p variants={item} className="mt-6 text-center font-manrope text-xs sm:text-sm text-text-muted">
            {footnote}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
