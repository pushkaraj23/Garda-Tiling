"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  ArrowRight,
  ShowerHead,
  UtensilsCrossed,
  Waves,
  WashingMachine,
  Building2,
  PanelBottom,
  Layers,
} from "lucide-react";
import { useServices } from "@/lib/cms/useServices";
import { serviceDetailPath } from "@/lib/cms/paths";

// Map each service slug to a unique Lucide icon
const serviceIconMap = {
  "bathroom-tiling":        ShowerHead,
  "kitchen-splashback-tiling": UtensilsCrossed,
  "outdoor-pool-tiling":    Waves,
  "laundry-tiling":         WashingMachine,
  "commercial-waterproofing": Building2,
  "flooring-installation":  PanelBottom,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const whyChooseItems = [
  {
    icon: Award,
    title: "Expert Craftsmanship",
    desc: "Years of experience delivering quality tiling work across Brisbane",
  },
  {
    icon: BadgeCheck,
    title: "Fully Certified",
    desc: "Licensed, insured, and compliant with Australian standards",
  },
];

export default function ServicesList() {
  const { services, loading, source } = useServices();

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-background flex items-center justify-center pt-24">
        <p className="font-manrope text-text-muted text-sm">Loading services…</p>
      </div>
    );
  }

  if (!services.length && source !== "fallback") {
    return (
      <div className="w-full min-h-screen bg-background flex items-center justify-center pt-24 px-6 text-center">
        <p className="font-manrope text-text-muted text-sm max-w-md">
          No services published yet. Add active services in Website Settings → Services CMS.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-background overflow-hidden pt-24 sm:pt-28">
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="relative w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative py-8 overflow-hidden rounded-3xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-surface-dark to-primary z-10" />

          {/* Radial accent overlay */}
          <div
            className="absolute inset-0 z-[5] opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, rgba(37,99,235,0.25) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(31,41,51,0.4) 0%, transparent 50%)",
            }}
          />

          <Image
            src="https://images.unsplash.com/photo-1769028715040-16cb345ced84?w=1400&auto=format&fit=crop&q=70"
            alt="Professional Tiling Services Brisbane"
            fill
            className="object-cover mix-blend-overlay"
            priority
            sizes="100vw"
          />

          <div className="relative z-20 h-full flex items-center justify-center px-6 sm:px-8 py-16 sm:py-24">
            <div className="text-center max-w-4xl">
              {/* Badge */}
              <motion.div
                custom={0}
                variants={heroVariants}
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/20 px-5 py-2.5 rounded-full mb-6"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-lg shadow-accent/50" />
                <span className="text-white/90 text-sm font-manrope font-medium tracking-wide">
                  Serving Brisbane &amp; Surrounds
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                custom={1}
                variants={heroVariants}
                className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight mb-6 leading-none"
              >
                PROFESSIONAL{" "}
                <span className="text-accent drop-shadow-lg">TILING</span>{" "}
                SERVICES
              </motion.h1>

              {/* Subheading */}
              <motion.p
                custom={2}
                variants={heroVariants}
                className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-manrope font-light leading-relaxed"
              >
                Expert tiling, waterproofing, and renovation services across
                Brisbane. Fully licensed and insured with Australian standards
                compliance.
              </motion.p>

              {/* Trust badges */}
              <motion.div
                custom={3}
                variants={heroVariants}
                className="flex flex-wrap justify-center gap-4 mt-8"
              >
                {["10+ Years Experience", "Licensed & Insured", "Free Quotes"].map(
                  (badge) => (
                    <motion.span
                      key={badge}
                      className="bg-white/5 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-xl text-white/90 text-sm font-manrope font-medium"
                      whileHover={{ scale: 1.03, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {badge}
                    </motion.span>
                  )
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Services Grid ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Section header */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-4">
            <div>
              <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-text-primary tracking-tight">
                OUR <span className="text-accent">SERVICES</span>
              </h2>
              <p className="mt-4 text-text-muted font-manrope text-lg sm:text-xl max-w-2xl leading-relaxed">
                Premium tiling and renovation services tailored for Brisbane
                homes and businesses.
              </p>
            </div>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-xs font-manrope font-bold uppercase tracking-widest border border-accent/20 self-start sm:self-auto">
              Brisbane Wide
            </span>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service) => {
            // Resolve unique icon — fall back to Layers if slug not in map
            const ServiceIcon = serviceIconMap[service.slug] ?? Layers;

            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Link href={serviceDetailPath(service.slug)} className="block h-full group">
                  <motion.article
                    className="h-full bg-card rounded-3xl overflow-hidden border border-border/60 shadow-soft hover:shadow-2xl transition-all duration-500 flex flex-col"
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  >
                    {/* Image */}
                    <div className="relative h-56 sm:h-60 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent z-10" />
                      <div className="absolute top-5 left-5 z-20">
                        <span className="bg-white/10 backdrop-blur-md text-white text-xs font-manrope font-medium px-4 py-2 rounded-xl border border-white/20">
                          Brisbane
                        </span>
                      </div>
                      <motion.div
                        className="relative w-full h-full"
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Image
                          src={service.mainImage}
                          alt={`${service.title} - Brisbane`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 flex-grow flex flex-col">
                      <div className="flex items-start gap-4 mb-5">
                        {/* Unique icon per service */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                          <ServiceIcon className="w-5 h-5 text-accent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-manrope text-xl sm:text-2xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300 line-clamp-1">
                            {service.title}
                          </h3>
                          <div className="flex items-center gap-2 flex-wrap mt-2">
                            <span className="text-xs font-manrope font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-lg">
                              {service.duration}
                            </span>
                            <span className="text-sm font-manrope text-text-muted">
                              From {service.pricing}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-text-muted font-manrope mb-6 line-clamp-3 flex-grow leading-relaxed">
                        {service.shortDesc}
                      </p>

                      {/* Footer */}
                      <div className="pt-6 border-t border-border mt-auto">
                        <motion.div
                          className="flex items-center justify-between"
                          whileHover={{ x: 4 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <span className="text-sm font-manrope font-semibold text-text-primary group-hover:text-accent transition-colors">
                            View Details
                          </span>
                          <ArrowRight className="w-5 h-5 text-accent" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Why Choose Us ───────────────────────────────── */}
        <motion.div
          className="mt-20 sm:mt-24 lg:mt-32 bg-gradient-to-br from-accent-secondary/5 to-primary/5 rounded-3xl p-10 sm:p-12 lg:p-16 border border-border/60"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="font-bebas text-3xl sm:text-4xl text-text-primary tracking-tight mb-12">
            WHY CHOOSE <span className="text-accent">OUR SERVICES</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {whyChooseItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="bg-card p-8 rounded-2xl border border-border/60 shadow-sm hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, x: i === 0 ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-manrope font-bold text-text-primary text-lg mb-2">
                        {item.title}
                      </h4>
                      <p className="text-text-muted font-manrope leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </div>
  );
}