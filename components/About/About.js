"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2, Phone, Mail, MapPin, Star
} from "lucide-react";
import { useSiteSections } from "@/lib/cms/useSiteSections";
import { getSectionContent } from "@/lib/cms/sectionHelpers";
import { resolveIcon } from "@/lib/cms/iconMap";
import {
  ABOUT_HERO_DEFAULTS,
  ABOUT_STORY_DEFAULTS,
  ABOUT_VALUES_DEFAULTS,
  ABOUT_TEAM_DEFAULTS,
  ABOUT_TIMELINE_DEFAULTS,
  ABOUT_CERTIFICATIONS_DEFAULTS,
  ABOUT_CTA_DEFAULTS,
} from "@/lib/cms/defaults/aboutDefaults";

// ─── ANIMATION HELPERS ───────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function About() {
  const { getSection } = useSiteSections("about");
  const hero = getSectionContent(getSection, "hero", ABOUT_HERO_DEFAULTS);
  const story = getSectionContent(getSection, "story", ABOUT_STORY_DEFAULTS);
  const valuesBlock = getSectionContent(getSection, "values", ABOUT_VALUES_DEFAULTS);
  const team = getSectionContent(getSection, "team", ABOUT_TEAM_DEFAULTS);
  const timeline = getSectionContent(getSection, "timeline", ABOUT_TIMELINE_DEFAULTS);
  const certs = getSectionContent(getSection, "certifications", ABOUT_CERTIFICATIONS_DEFAULTS);
  const cta = getSectionContent(getSection, "cta", ABOUT_CTA_DEFAULTS);

  const teamMembers = team.members || [];
  const values = (valuesBlock.cards || []).map((card) => ({
    icon: resolveIcon(card.iconKey),
    title: card.title,
    desc: card.text || card.desc,
  }));
  const milestones = timeline.milestones || [];
  const certifications = certs.items || [];

  return (
    <div className="w-full bg-background text-text-primary overflow-x-hidden">

      {/* ═══════════════════════════ HERO ═══════════════════════════ */}
      <section className="relative w-full py-32 px-4 sm:px-6 lg:px-8 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Pill */}
            <span className="inline-flex items-center gap-2 bg-accent-secondary text-white rounded-full px-3 py-1.5 font-manrope text-xs mb-6">
              <Star size={12} />
              {hero.pill}
            </span>

            <h1 className="font-bebas text-5xl sm:text-6xl tracking-tight text-background">
              {hero.headline} <span className="text-white/60">{hero.headlineAccent}</span>
            </h1>

            <div className="mt-6 pl-4 border-l-4 border-accent">
              <p className="font-manrope text-background/60 leading-relaxed">{hero.description}</p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              {(hero.ctas || []).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex px-7 py-3 rounded-full font-manrope text-sm font-semibold transition-all duration-300 ${
                    item.href === "/contact"
                      ? "border border-white/30 text-white hover:bg-white/10"
                      : "bg-white text-primary shadow-md hover:scale-105"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card border border-border rounded-3xl p-10 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
              <div className="grid grid-cols-2 gap-6">
                {(hero.stats || []).map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-bebas text-4xl text-accent">{stat.value}</div>
                    <div className="font-manrope text-xs text-text-muted mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative shapes */}
        <div className="absolute -right-20 top-40 rotate-45 w-72 h-72 bg-accent-secondary/20 rounded-3xl hidden lg:block" />
        <div className="absolute -left-28 bottom-24 rotate-45 w-96 h-96 bg-white/5 rounded-3xl" />
      </section>

      {/* ═══════════════════════════ OUR STORY ═══════════════════════════ */}
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div {...fadeUp()}>
            <span className="inline-flex items-center gap-2 bg-accent-secondary text-white rounded-full px-3 py-1.5 font-manrope text-xs mb-6">
              {story.pill}
            </span>

            <h2 className="font-bebas text-4xl tracking-tight text-primary">
              {story.headline}{" "}
              <span className="text-text-primary">{story.headlineAccent}</span>
            </h2>

            {(story.paragraphs || []).map((para, i) => (
              <p key={i} className={`${i === 0 ? "mt-5" : "mt-4"} font-manrope text-text-muted leading-relaxed`}>
                {para}
              </p>
            ))}

            <div className="mt-8 grid grid-cols-2 gap-4">
              {(story.stats || []).map((stat) => (
                <div key={stat.label} className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="font-bebas text-3xl text-accent">{stat.value}</div>
                  <div className="font-manrope text-sm text-text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="relative">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={story.image}
                alt="Our team at work"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-card border border-border rounded-2xl p-5 shadow-lg">
              <div className="flex items-center gap-2 font-manrope text-sm font-semibold text-text-primary">
                <CheckCircle2 size={16} className="text-accent" />
                {story.badge}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════ VALUES ═══════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-7xl mx-auto">

          <motion.div className="text-center mb-16" {...fadeUp()}>
            <h2 className="font-bebas text-4xl tracking-tight text-background">
              {valuesBlock.headline} <span className="text-white/60">{valuesBlock.headlineAccent}</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto font-manrope text-background/60">{valuesBlock.description}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon size={18} className="text-accent" />
                </div>
                <h4 className="font-bebas text-xl mb-2">{title}</h4>
                <p className="font-manrope text-sm text-text-muted">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ TEAM ═══════════════════════════ */}
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <motion.div className="text-center mb-16" {...fadeUp()}>
            <h2 className="font-bebas text-4xl tracking-tight text-primary">
              {team.headline} <span className="text-text-primary">{team.headlineAccent}</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto font-manrope text-text-muted">{team.description}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-500 group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-3 left-3 bg-accent text-white font-manrope text-xs font-semibold px-3 py-1 rounded-full">
                    {member.experience} Experience
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bebas text-2xl text-text-primary">{member.name}</h3>
                  <div className="font-manrope text-sm text-accent font-semibold mb-1">{member.role}</div>
                  <div className="font-manrope text-xs text-text-muted mb-4">{member.specialty}</div>
                  <div className="pl-4 border-l-4 border-accent font-manrope text-sm text-text-muted italic">
                    &ldquo;{member.quote}&rdquo;
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ TIMELINE ═══════════════════════════ */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-5xl mx-auto">

          <motion.div className="text-center mb-16" {...fadeUp()}>
            <h2 className="font-bebas text-4xl tracking-tight text-background">
              {timeline.headline} <span className="text-white/60">{timeline.headlineAccent}</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto font-manrope text-background/60">{timeline.description}</p>
          </motion.div>

          <div className="relative">
            {/* Centre line — desktop only */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-accent/30" />

            <div className="space-y-10">
              {milestones.map((milestone, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className={`relative flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"} items-center gap-6`}
                  >
                    <div className="flex-1" />

                    {/* Dot */}
                    <div className="w-4 h-4 rounded-full bg-accent border-4 border-primary shrink-0 z-10" />

                    {/* Card */}
                    <div className={`flex-1 ${isEven ? "md:text-right" : ""}`}>
                      <div className="bg-card border border-border rounded-2xl p-6 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-500 inline-block w-full">
                        <div className="font-bebas text-2xl text-accent mb-1">{milestone.year}</div>
                        <h3 className="font-bebas text-xl text-text-primary">{milestone.event}</h3>
                        <p className="font-manrope text-sm text-text-muted mt-1">{milestone.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ CERTIFICATIONS ═══════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <motion.div className="text-center mb-12" {...fadeUp()}>
            <h2 className="font-bebas text-4xl tracking-tight text-primary">
              {certs.headline} <span className="text-text-primary">{certs.headlineAccent}</span>
            </h2>
            <p className="mt-4 font-manrope text-text-muted">{certs.description}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <ShieldCheck size={20} className="text-accent" />
                </div>
                <div className="font-bebas text-lg text-text-primary">{cert.name}</div>
                <div className="font-manrope text-xs text-text-muted mt-1">{cert.number}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ CTA ═══════════════════════════ */}
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
              className={`inline-flex px-8 py-3 rounded-full font-manrope text-sm font-semibold transition-all duration-300 ${
                i === 0
                  ? "bg-white text-primary shadow-lg hover:scale-105"
                  : "border border-white/30 text-white hover:bg-white/10"
              }`}
            >
              {item.label}
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

    </div>
  );
}