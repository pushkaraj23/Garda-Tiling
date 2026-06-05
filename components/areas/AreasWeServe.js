"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Zap, Map, Clock, HeadphonesIcon, CheckCircle2 } from "lucide-react";
import { useServiceAreas } from "@/lib/cms/useServiceAreas";
import { useSiteSections } from "@/lib/cms/useSiteSections";
import { getSectionContent } from "@/lib/cms/sectionHelpers";
import { resolveIcon } from "@/lib/cms/iconMap";
import {
  AREAS_HERO_DEFAULTS,
  AREAS_SIDE_CARD_DEFAULTS,
  AREAS_COVERAGE_DEFAULTS,
  AREAS_WHY_LOCAL_DEFAULTS,
  AREAS_CTA_DEFAULTS,
} from "@/lib/cms/defaults/areasDefaults";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const stagger = {
  initial: {},
  whileInView: {},
  viewport: { once: true },
  transition: { staggerChildren: 0.15 },
};

export default function AreasWeServe() {
  const { getSection } = useSiteSections("areas-we-serve");
  const hero = getSectionContent(getSection, "hero", AREAS_HERO_DEFAULTS);
  const sideCard = getSectionContent(getSection, "side-card", AREAS_SIDE_CARD_DEFAULTS);
  const coverage = getSectionContent(getSection, "coverage", AREAS_COVERAGE_DEFAULTS);
  const whyLocalBlock = getSectionContent(getSection, "why-local", AREAS_WHY_LOCAL_DEFAULTS);
  const cta = getSectionContent(getSection, "cta", AREAS_CTA_DEFAULTS);
  const whyLocal = (whyLocalBlock.cards || []).map((card) => ({
    icon: resolveIcon(card.iconKey, Zap),
    title: card.title,
    desc: card.text || card.desc,
  }));
  const services = coverage.services || [];
  const { areas: serviceAreas, loading } = useServiceAreas();

  if (loading) {
    return (
      <main className="w-full min-h-screen flex items-center justify-center bg-background">
        <p className="font-manrope text-text-muted text-sm">Loading service areas…</p>
      </main>
    );
  }

  return (
    <main className="w-full bg-background text-text-primary overflow-x-hidden">

      <section className="relative w-full py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-accent-secondary text-white rounded-full px-3 py-1.5 font-manrope text-xs mb-6">
              <MapPin size={12} />
              {hero.pill}
            </span>

            <h1 className="font-bebas text-5xl sm:text-6xl tracking-tight text-primary">
              {hero.headline} <span className="text-text-primary">{hero.headlineAccent}</span>
            </h1>

            <div className="mt-6 pl-4 border-l-4 border-accent">
              <p className="font-manrope text-text-muted leading-relaxed">{hero.description}</p>
            </div>

            <Link
              href={hero.ctaHref || "/contact"}
              className="inline-flex mt-8 px-7 py-3 rounded-full bg-primary text-white font-manrope text-sm font-semibold shadow-md hover:scale-105 transition-all duration-300"
            >
              {hero.ctaLabel}
            </Link>
          </motion.div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card border border-border rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin size={16} className="text-accent" />
                </div>
                <h3 className="font-bebas text-2xl">{sideCard.title}</h3>
              </div>
              <p className="font-manrope text-text-muted text-sm leading-relaxed">{sideCard.description}</p>
            </div>
          </motion.div>
        </div>

        <div className="absolute -right-20 top-40 rotate-45 w-72 h-72 bg-accent-secondary/20 rounded-3xl hidden lg:block" />
        <div className="absolute -left-28 bottom-24 rotate-45 w-96 h-96 bg-primary/10 rounded-3xl" />
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

          <motion.div {...fadeUp}>
            <h2 className="font-bebas text-4xl tracking-tight text-background">
              {coverage.headline}
            </h2>
            <p className="mt-5 font-manrope text-background/60 leading-relaxed">{coverage.description}</p>

            <ul className="mt-8 space-y-4 font-manrope text-sm">
              {services.map((item) => (
                <li key={item} className="flex items-center gap-3 text-background">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.55, delay: 0.15 }}>
            <div className="bg-card border border-border rounded-3xl p-10 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <MapPin size={18} className="text-accent" />
                <h3 className="font-bebas text-2xl">{coverage.areasTitle}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {serviceAreas.map((area, i) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="bg-primary/5 border border-border rounded-xl px-4 py-3 text-sm font-manrope text-text-primary hover:border-accent hover:bg-accent/5 transition-all duration-300"
                  >
                    {area}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-bebas text-4xl tracking-tight text-primary">
              {whyLocalBlock.headline} <span className="text-text-primary">{whyLocalBlock.headlineAccent}</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto font-manrope text-text-muted">{whyLocalBlock.description}</p>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            {...stagger}
          >
            {whyLocal.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon size={18} className="text-accent" />
                </div>
                <h4 className="font-bebas text-xl mb-2">{title}</h4>
                <p className="font-manrope text-sm text-text-muted">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section
        className="py-28 px-4 sm:px-6 lg:px-8 bg-primary text-center"
        {...fadeUp}
      >
        <h2 className="font-bebas text-4xl sm:text-5xl tracking-tight text-background">
          {cta.headline} <span className="text-white/70">{cta.headlineAccent}</span>
        </h2>

        <p className="mt-4 max-w-xl mx-auto font-manrope text-background/60">{cta.description}</p>

        <Link
          href={cta.ctaHref || "/contact"}
          className="inline-flex mt-8 px-8 py-3 rounded-full bg-white text-primary font-manrope text-sm font-semibold shadow-lg hover:scale-105 transition-all duration-300"
        >
          {cta.ctaLabel}
        </Link>
      </motion.section>

    </main>
  );
}
