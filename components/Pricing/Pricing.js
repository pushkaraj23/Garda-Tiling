"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bath, UtensilsCrossed, Waves, ShieldCheck,
  Layers, Check, X, Clock, Phone, Mail, MapPin,
  Wrench, Ruler, Star, ArrowRight, Tag
} from "lucide-react";
import { useSiteSections } from "@/lib/cms/useSiteSections";
import { getSectionContent } from "@/lib/cms/sectionHelpers";
import { resolveIcon } from "@/lib/cms/iconMap";
import {
  PRICING_TABS,
  PRICING_DATA,
  PRICING_HERO_DEFAULTS,
  PRICING_TRUST_DEFAULTS,
  PRICING_CTA_DEFAULTS,
  PRICING_DISCLAIMER_DEFAULTS,
  PRICING_ADDONS_DEFAULTS,
} from "@/lib/cms/defaults/pricingDefaults";

const TAB_ICONS = {
  bath: Bath,
  utensils: UtensilsCrossed,
  waves: Waves,
  shield: ShieldCheck,
  layers: Layers,
};

// Package data lives in lib/cms/defaults/pricingDefaults.js (CMS section: pricing / packages)

// ─── ANIMATION HELPERS ───────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function Pricing() {
  const { getSection } = useSiteSections("pricing");
  const hero = getSectionContent(getSection, "hero", PRICING_HERO_DEFAULTS);
  const packagesSection = getSectionContent(getSection, "packages", {
    tabs: PRICING_TABS,
    data: PRICING_DATA,
  });
  const trustBlock = getSectionContent(getSection, "trust", PRICING_TRUST_DEFAULTS);
  const addonsBlock = getSectionContent(getSection, "addons", PRICING_ADDONS_DEFAULTS);
  const cta = getSectionContent(getSection, "cta", PRICING_CTA_DEFAULTS);
  const disclaimer = getSectionContent(getSection, "disclaimer", PRICING_DISCLAIMER_DEFAULTS);

  const tabs = (packagesSection.tabs || PRICING_TABS).map((tab) => ({
    ...tab,
    icon: TAB_ICONS[tab.iconKey] || Layers,
  }));
  const DATA = packagesSection.data || PRICING_DATA;
  const trustPoints = (trustBlock.points || []).map((p) => ({
    icon: resolveIcon(p.iconKey, ShieldCheck),
    title: p.title,
    desc: p.text || p.desc,
  }));

  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "bathroom");
  const current = DATA[activeTab];

  return (
    <div className="w-full bg-background text-text-primary overflow-x-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative w-full py-28 px-4 sm:px-6 lg:px-8 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-accent-secondary text-white rounded-full px-3 py-1.5 font-manrope text-xs mb-6">
              <Star size={12} />
              {hero.pill}
            </span>
            <h1 className="font-bebas text-5xl sm:text-6xl tracking-tight text-background">
              {hero.headline} <span className="text-white/60">{hero.headlineAccent}</span>
            </h1>
            <p className="mt-5 max-w-2xl mx-auto font-manrope text-background/60 leading-relaxed">
              {hero.description}
            </p>
          </motion.div>
        </div>
        <div className="absolute -right-20 top-20 rotate-45 w-72 h-72 bg-accent-secondary/20 rounded-3xl hidden lg:block" />
        <div className="absolute -left-28 bottom-10 rotate-45 w-96 h-96 bg-white/5 rounded-3xl" />
      </section>

      {/* ═══ TABS ═══ */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {tabs.map(({ id, label, icon: Icon }) => {
              const active = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-manrope text-sm font-semibold transition-all duration-300
                    ${active
                      ? "bg-primary text-white shadow-md scale-105"
                      : "bg-card border border-border text-text-muted hover:border-accent hover:text-accent"
                    }`}
                >
                  <Icon size={14} />
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ PACKAGES ═══ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <motion.div className="text-center mb-14" key={activeTab} {...fadeUp()}>
            <h2 className="font-bebas text-4xl tracking-tight text-primary">
              {current.title}
            </h2>
            <p className="mt-3 font-manrope text-text-muted max-w-2xl mx-auto">{current.desc}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {current.packages.map((pkg, i) => (
              <motion.div
                key={`${activeTab}-${pkg.name}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col rounded-3xl border overflow-hidden transition-all duration-500
                  ${pkg.popular
                    ? "bg-primary border-primary shadow-2xl scale-[1.03]"
                    : "bg-card border-border shadow-md hover:-translate-y-2 hover:shadow-xl"
                  }`}
              >
                {/* Popular badge */}
                {pkg.popular && (
                  <div className="absolute top-5 right-5">
                    <span className="inline-flex items-center gap-1 bg-accent text-white font-manrope text-xs font-semibold px-3 py-1 rounded-full">
                      <Star size={10} />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className={`p-8 pb-6 ${pkg.popular ? "border-b border-white/10" : "border-b border-border"}`}>
                  <h3 className={`font-bebas text-3xl ${pkg.popular ? "text-background" : "text-primary"}`}>
                    {pkg.name}
                  </h3>
                  <div className={`font-bebas text-4xl mt-2 ${pkg.popular ? "text-white" : "text-accent"}`}>
                    {pkg.price}
                  </div>
                  <div className={`flex items-center gap-1.5 mt-2 font-manrope text-xs ${pkg.popular ? "text-white/50" : "text-text-muted"}`}>
                    <Clock size={11} />
                    {pkg.duration}
                  </div>
                </div>

                {/* Features */}
                <div className="p-8 pt-6 flex-1">
                  <ul className="space-y-3">
                    {pkg.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        {f.ok
                          ? <Check size={14} className="text-accent mt-0.5 shrink-0" />
                          : <X    size={14} className={`mt-0.5 shrink-0 ${pkg.popular ? "text-white/30" : "text-border"}`} />
                        }
                        <span className={`font-manrope text-sm ${
                          f.ok
                            ? pkg.popular ? "text-background/90" : "text-text-primary"
                            : pkg.popular ? "text-white/30" : "text-text-muted"
                        }`}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="px-8 pb-8">
                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-manrope text-sm font-semibold transition-all duration-300 hover:scale-105
                      ${pkg.popular
                        ? "bg-white text-primary shadow-md"
                        : "bg-primary text-white"
                      }`}
                  >
                    Get {pkg.name} Quote
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ADD-ONS ═══ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-10" {...fadeUp()}>
            <h3 className="font-bebas text-3xl text-background">
              {addonsBlock.headline} <span className="text-white/60">{addonsBlock.headlineAccent}</span>
            </h3>
            <p className="mt-2 font-manrope text-background/60 text-sm">{addonsBlock.description}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {current.addOns.map((addon, i) => (
              <motion.div
                key={`${activeTab}-addon-${i}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-5 text-center hover:-translate-y-1 hover:border-accent hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                  <Tag size={14} className="text-accent" />
                </div>
                <div className="font-manrope text-sm font-semibold text-text-primary">{addon.name}</div>
                <div className="font-bebas text-xl text-accent mt-1">{addon.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TRUST POINTS ═══ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-14" {...fadeUp()}>
            <h2 className="font-bebas text-4xl tracking-tight text-primary">
              {trustBlock.headline} <span className="text-text-primary">{trustBlock.headlineAccent}</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto font-manrope text-text-muted">{trustBlock.description}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustPoints.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 text-center shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                  <Icon size={20} className="text-accent" />
                </div>
                <h4 className="font-bebas text-xl mb-2">{title}</h4>
                <p className="font-manrope text-sm text-text-muted">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <motion.section
        className="py-28 px-4 sm:px-6 lg:px-8 bg-primary text-center"
        {...fadeUp()}
      >
        <h2 className="font-bebas text-4xl sm:text-5xl tracking-tight text-background">
          {cta.headline} <span className="text-white/60">{cta.headlineAccent}</span>
        </h2>
        <p className="mt-4 max-w-xl mx-auto font-manrope text-background/60">{cta.description}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          {(cta.ctas || []).map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-manrope text-sm font-semibold transition-all duration-300 ${
                i === 0
                  ? "bg-white text-primary shadow-lg hover:scale-105"
                  : "border border-white/30 text-white hover:bg-white/10"
              }`}
            >
              {item.label}
              {i === 0 ? <ArrowRight size={14} /> : null}
            </Link>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {(cta.contacts || []).map(({ label, value, type }) => {
            const Icon = type === "phone" ? Phone : type === "email" ? Mail : MapPin;
            return (
            <div key={label} className="flex items-center justify-center gap-3 text-background/80">
              <Icon size={16} className="text-accent shrink-0" />
              <div className="text-left">
                <div className="font-manrope text-xs text-background/50">{label}</div>
                <div className="font-manrope text-sm font-semibold">{value}</div>
              </div>
            </div>
            );
          })}
        </div>
      </motion.section>

      {/* ═══ DISCLAIMER ═══ */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 text-center">
          <h4 className="font-bebas text-xl text-primary mb-3">{disclaimer.title}</h4>
          <div className="space-y-2 font-manrope text-xs text-text-muted">
            {(disclaimer.paragraphs || []).map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
            <div className="flex flex-wrap justify-center gap-4 mt-4 font-semibold text-accent">
              {(disclaimer.badges || []).map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <Check size={12} />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}