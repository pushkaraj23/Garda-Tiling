"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Zap, Map, Clock, HeadphonesIcon, CheckCircle2 } from "lucide-react";

const serviceAreas = [
  "Brisbane CBD",
  "Inner West",
  "Eastern Suburbs",
  "Northern Beaches",
  "North Shore",
  "Western Brisbane",
  "South West Brisbane",
  "Sutherland Shire",
  "Parramatta Region",
  "Hills District",
];

const whyLocal = [
  { icon: Zap, title: "Fast Response", desc: "Quick inspections and project starts" },
  { icon: Map, title: "Local Knowledge", desc: "Built for Brisbane conditions" },
  { icon: Clock, title: "Reliable Scheduling", desc: "Clear timelines & site presence" },
  { icon: HeadphonesIcon, title: "Ongoing Support", desc: "Easy follow-ups after completion" },
];

const services = [
  "Bathroom & laundry tiling",
  "AS 3740 compliant waterproofing",
  "Outdoor, balcony & pool areas",
  "Commercial & retail tiling",
];

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
  return (
    <main className="w-full bg-background text-text-primary overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative w-full py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* pill */}
            <span className="inline-flex items-center gap-2 bg-accent-secondary text-white rounded-full px-3 py-1.5 font-manrope text-xs mb-6">
              <MapPin size={12} />
              Brisbane &amp; Surrounds
            </span>

            <h1 className="font-bebas text-5xl sm:text-6xl tracking-tight text-primary">
              Areas We <span className="text-text-primary">Serve</span>
            </h1>

            <div className="mt-6 pl-4 border-l-4 border-accent">
              <p className="font-manrope text-text-muted leading-relaxed">
                Garda Tiling delivers professional tiling and waterproofing
                services across Brisbane and surrounding suburbs — combining
                quality craftsmanship, compliance, and reliable timelines.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex mt-8 px-7 py-3 rounded-full bg-primary text-white font-manrope text-sm font-semibold shadow-md hover:scale-105 transition-all duration-300"
            >
              Check Availability
            </Link>
          </motion.div>

          {/* HERO SIDE CARD */}
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
                <h3 className="font-bebas text-2xl">Trusted Across Brisbane</h3>
              </div>
              <p className="font-manrope text-text-muted text-sm leading-relaxed">
                From inner-city apartments to large suburban homes and
                commercial spaces, our team operates city-wide with the same
                attention to detail and professionalism.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Decorative shapes */}
        <div className="absolute -right-20 top-40 rotate-45 w-72 h-72 bg-accent-secondary/20 rounded-3xl hidden lg:block" />
        <div className="absolute -left-28 bottom-24 rotate-45 w-96 h-96 bg-primary/10 rounded-3xl" />
      </section>

      {/* ================= SERVICE COVERAGE ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT */}
          <motion.div {...fadeUp}>
            <h2 className="font-bebas text-4xl tracking-tight text-background">
              Comprehensive Local Coverage
            </h2>
            <p className="mt-5 font-manrope text-background/60 leading-relaxed">
              Our mobile teams are strategically positioned to service a wide
              geographic area efficiently, ensuring fast inspections, accurate
              quoting, and on-time execution.
            </p>

            <ul className="mt-8 space-y-4 font-manrope text-sm">
              {services.map((item) => (
                <li key={item} className="flex items-center gap-3 text-background">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT – AREA LIST */}
          <motion.div {...fadeUp} transition={{ duration: 0.55, delay: 0.15 }}>
            <div className="bg-card border border-border rounded-3xl p-10 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <MapPin size={18} className="text-accent" />
                <h3 className="font-bebas text-2xl">Primary Service Areas</h3>
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

      {/* ================= WHY LOCAL ================= */}
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-bebas text-4xl tracking-tight text-primary">
              Why Choose a <span className="text-text-primary">Local Tiling Team?</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto font-manrope text-text-muted">
              Local expertise means smoother communication, faster turnaround, and
              long-term accountability.
            </p>
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

      {/* ================= CTA ================= */}
      <motion.section
        className="py-28 px-4 sm:px-6 lg:px-8 bg-primary text-center"
        {...fadeUp}
      >
        <h2 className="font-bebas text-4xl sm:text-5xl tracking-tight text-background">
          Not Sure If We Cover <span className="text-white/70">Your Area?</span>
        </h2>

        <p className="mt-4 max-w-xl mx-auto font-manrope text-background/60">
          Get in touch and our team will confirm availability and guide you
          through the next steps.
        </p>

        <Link
          href="/contact"
          className="inline-flex mt-8 px-8 py-3 rounded-full bg-white text-primary font-manrope text-sm font-semibold shadow-lg hover:scale-105 transition-all duration-300"
        >
          Contact Garda Tiling
        </Link>
      </motion.section>

    </main>
  );
}