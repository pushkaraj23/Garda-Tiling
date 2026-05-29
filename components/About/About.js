"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award, ShieldCheck, Handshake, Clock,
  CheckCircle2, Phone, Mail, MapPin, Star
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const teamMembers = [
  {
    name: "Michael Garda",
    role: "Founder & Master Tiler",
    experience: "15+ years",
    specialty: "Waterproofing & Bathroom Renovations",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=400&fit=crop",
    quote: "Precision in every tile, excellence in every project.",
  },
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    experience: "10+ years",
    specialty: "Commercial Projects",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    quote: "Ensuring every project exceeds expectations.",
  },
  {
    name: "David Chen",
    role: "Senior Tiler",
    experience: "12+ years",
    specialty: "Large Format & Natural Stone",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    quote: "Quality workmanship speaks for itself.",
  },
];

const values = [
  { icon: Award,      title: "Excellence",   desc: "We never compromise on quality. Every tile is laid with precision and care." },
  { icon: ShieldCheck, title: "Reliability", desc: "Licensed, insured, and committed to Australian building standards." },
  { icon: Handshake,  title: "Integrity",    desc: "Honest quotes, transparent pricing, and clear communication." },
  { icon: Clock,      title: "Timeliness",   desc: "We respect your time and deliver projects on schedule." },
];

const milestones = [
  { year: "2010", event: "Founded Garda Tiling",       detail: "Started with residential bathroom renovations" },
  { year: "2013", event: "Waterproofing Certification", detail: "Became certified waterproofing specialists" },
  { year: "2016", event: "Commercial Expansion",        detail: "Started commercial tiling projects" },
  { year: "2019", event: "Team Growth",                 detail: "Expanded to 10+ specialist tilers" },
  { year: "2022", event: "Premium Service Launch",      detail: "Introduced luxury tiling services" },
  { year: "2024", event: "1000+ Projects",              detail: "Successfully completed over 1000 projects" },
];

const certifications = [
  { name: "Waterproofing License",   number: "WP123456" },
  { name: "Building Practitioner",   number: "BP789012" },
  { name: "Occupational License",    number: "OL345678" },
  { name: "Insurance Coverage",      number: "$10M Public Liability" },
];

// ─── ANIMATION HELPERS ───────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function About() {
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
              Brisbane&apos;s Trusted Tiling Experts
            </span>

            <h1 className="font-bebas text-5xl sm:text-6xl tracking-tight text-background">
              Crafting Beautiful <span className="text-white/60">Spaces Since 2010</span>
            </h1>

            <div className="mt-6 pl-4 border-l-4 border-accent">
              <p className="font-manrope text-background/60 leading-relaxed">
                We transform Brisbane homes and businesses with precision tiling, expert
                waterproofing, and unparalleled craftsmanship. Your vision, our expertise.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/projects"
                className="inline-flex px-7 py-3 rounded-full bg-white text-primary font-manrope text-sm font-semibold shadow-md hover:scale-105 transition-all duration-300"
              >
                View Our Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex px-7 py-3 rounded-full border border-white/30 text-white font-manrope text-sm font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Get Free Quote
              </Link>
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
                {[
                  ["1000+", "Projects Completed"],
                  ["15+",   "Years Experience"],
                  ["50+",   "Suburbs Covered"],
                  ["100%",  "Licensed & Insured"],
                ].map(([stat, label]) => (
                  <div key={label} className="text-center">
                    <div className="font-bebas text-4xl text-accent">{stat}</div>
                    <div className="font-manrope text-xs text-text-muted mt-1">{label}</div>
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
              Our Journey
            </span>

            <h2 className="font-bebas text-4xl tracking-tight text-primary">
              From Humble Beginnings to Brisbane&apos;s{" "}
              <span className="text-text-primary">Premier Tiling Service</span>
            </h2>

            <p className="mt-5 font-manrope text-text-muted leading-relaxed">
              Founded in 2010 by Michael Garda, what started as a one-man operation has grown
              into Brisbane&apos;s most trusted tiling and waterproofing company. Our commitment
              to excellence has earned us a reputation for quality workmanship and reliable service.
            </p>

            <p className="mt-4 font-manrope text-text-muted leading-relaxed">
              Today, we&apos;re proud to serve homeowners and businesses across Brisbane with a team
              of certified professionals who share our passion for creating beautiful, durable spaces.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["1000+", "Projects Completed"],
                ["15+",   "Years Experience"],
              ].map(([stat, label]) => (
                <div key={label} className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="font-bebas text-3xl text-accent">{stat}</div>
                  <div className="font-manrope text-sm text-text-muted mt-1">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="relative">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop"
                alt="Our team at work"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-card border border-border rounded-2xl p-5 shadow-lg">
              <div className="flex items-center gap-2 font-manrope text-sm font-semibold text-text-primary">
                <CheckCircle2 size={16} className="text-accent" />
                AS 3740 Certified
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
              Our Core <span className="text-white/60">Values</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto font-manrope text-background/60">
              The principles that guide every project we take on.
            </p>
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
              Meet the <span className="text-text-primary">Team</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto font-manrope text-text-muted">
              Certified professionals who bring skill and dedication to every project.
            </p>
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
              Our Journey <span className="text-white/60">Through the Years</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto font-manrope text-background/60">
              Milestones that shaped our commitment to excellence in tiling.
            </p>
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
              Certified &amp; Licensed <span className="text-text-primary">Professionals</span>
            </h2>
            <p className="mt-4 font-manrope text-text-muted">
              Fully compliant with Australian building standards and regulations.
            </p>
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
          Ready to Transform <span className="text-white/60">Your Space?</span>
        </h2>
        <p className="mt-4 max-w-xl mx-auto font-manrope text-background/60">
          Join over 1000 satisfied customers who trust Garda Tiling for their projects.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/contact"
            className="inline-flex px-8 py-3 rounded-full bg-white text-primary font-manrope text-sm font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get Your Free Quote
          </Link>
          <Link
            href="/projects"
            className="inline-flex px-8 py-3 rounded-full border border-white/30 text-white font-manrope text-sm font-semibold hover:bg-white/10 transition-all duration-300"
          >
            View Our Gallery
          </Link>
        </div>

        {/* Contact row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { icon: Phone,  label: "Call Us",      value: "(03) 0000 0000" },
            { icon: Mail,   label: "Email Us",     value: "hello@garda-tiling.com" },
            { icon: MapPin, label: "Service Area", value: "All Brisbane" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center justify-center gap-3 text-background/80">
              <Icon size={16} className="text-accent shrink-0" />
              <div className="text-left">
                <div className="font-manrope text-xs text-background/50">{label}</div>
                <div className="font-manrope text-sm font-semibold">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

    </div>
  );
}