"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  DollarSign,
  Check,
  Layers,
  User,
  ChevronRight,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const relatedServices = [
  {
    href: "/services/bathroom-tiling",
    title: "Bathroom Tiling",
    desc: "Professional waterproofing & tiling",
  },
  {
    href: "/services/kitchen-splashback-tiling",
    title: "Kitchen Splashbacks",
    desc: "Custom kitchen tiling",
  },
  {
    href: "/services/outdoor-pool-tiling",
    title: "Outdoor & Pool",
    desc: "Durable installations",
  },
];

const trustPoints = [
  "Local Brisbane Experts",
  "Australian Standards Compliant",
  "Quality Workmanship",
];

const areas = [
  "CBD",
  "Eastern Suburbs",
  "Northern Suburbs",
  "Western Suburbs",
  "Southern Suburbs",
  "Bayside",
  "Inner City",
  "Surrounding Areas",
];

export default function ServiceDetail({ service }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const serviceName =
    service.title.split("Brisbane")[0]?.trim() || service.title;

  return (
    <main className="w-full min-h-screen bg-background overflow-hidden pt-24 sm:pt-28">
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="relative w-full">
        <motion.div
          className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-surface-dark/90 to-primary/95 z-10" />
          <Image
            src={service.images?.[selectedImage] || service.mainImage}
            alt={`${service.title} - Brisbane`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6">
            <div className="text-center max-w-4xl">
              {/* Service area badge */}
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-white font-manrope text-sm font-medium">
                  Brisbane Service Area
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight mb-4 sm:mb-6"
              >
                {service.title.toUpperCase()}
              </motion.h1>

              {/* Short description */}
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="font-manrope text-base sm:text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto"
              >
                {service.shortDesc}
              </motion.p>

              {/* Meta badges */}
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="flex flex-wrap justify-center gap-3 sm:gap-4"
              >
                <span className="bg-accent/30 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-manrope font-medium">
                  {service.pricing}
                </span>
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-manrope font-medium">
                  {service.duration}
                </span>
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-manrope font-medium">
                  Servicing All Brisbane
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Content ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* ── Main column ─────────────────────────────── */}
          <div className="lg:col-span-2 space-y-12">

            {/* About */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="font-bebas text-3xl sm:text-4xl text-text-primary tracking-tight">
                  ABOUT OUR {serviceName.toUpperCase()} SERVICE
                </h2>
                <span className="inline-flex px-3 py-1 rounded-full bg-accent/10 text-accent font-manrope text-xs font-bold uppercase">
                  Brisbane
                </span>
              </div>
              <motion.p
                variants={staggerItem}
                className="font-manrope text-lg text-text-muted leading-relaxed"
              >
                {service.fullDesc}
              </motion.p>

              {/* Service areas */}
              <motion.div
                variants={staggerItem}
                className="mt-8 bg-accent/5 border border-accent/20 rounded-2xl p-6"
              >
                <h3 className="font-bebas text-xl text-text-primary mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  Service Areas in Brisbane
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {areas.map((area, i) => (
                    <motion.span
                      key={area}
                      className="bg-card px-4 py-2 rounded-xl font-manrope text-sm text-text-primary border border-border text-center"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {area}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Gallery */}
            {service.images?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bebas text-2xl text-text-primary mb-6">
                  PROJECT GALLERY
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {service.images.map((img, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`relative h-28 sm:h-32 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === i
                          ? "border-accent ring-2 ring-accent/30 animate-border-glow"
                          : "border-border hover:border-accent/50"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Image
                        src={img}
                        alt={`${service.title} ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="25vw"
                      />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Inclusions */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bebas text-2xl text-text-primary mb-6">
                SERVICE INCLUSIONS
              </h3>
              <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-soft">
                <ul className="space-y-4">
                  {service.inclusions?.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                      </span>
                      <span className="font-manrope text-text-primary">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Pricing */}
            <motion.div
              className="bg-accent-secondary/5 rounded-2xl p-6 sm:p-8 border border-border"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bebas text-2xl text-text-primary mb-6">
                PRICING GUIDE
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  className="bg-card p-6 rounded-xl border border-border"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-manrope font-bold text-text-primary mb-2">
                    Standard Service
                  </h4>
                  <div className="font-bebas text-2xl sm:text-3xl text-accent mb-2">
                    {service.pricing}
                  </div>
                  <p className="font-manrope text-sm text-text-muted">
                    Includes materials &amp; labor
                  </p>
                </motion.div>
                <motion.div
                  className="bg-card p-6 rounded-xl border border-border"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-manrope font-bold text-text-primary mb-2">
                    Premium Upgrade
                  </h4>
                  <div className="font-bebas text-2xl sm:text-3xl text-text-primary mb-2">
                    +20-30%
                  </div>
                  <p className="font-manrope text-sm text-text-muted">
                    Premium materials &amp; extended warranty
                  </p>
                </motion.div>
              </div>
              <p className="font-manrope text-sm text-text-muted mt-6">
                *All prices include GST. Free quotes for Brisbane residents.
              </p>
            </motion.div>

            {/* FAQ */}
            {service.faqs?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bebas text-2xl text-text-primary mb-6">
                  FREQUENTLY ASKED QUESTIONS
                </h3>
                <div className="space-y-4">
                  {service.faqs.map((faq, i) => (
                    <motion.div
                      key={i}
                      className="bg-card rounded-xl p-6 border border-border"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      <h4 className="font-manrope font-bold text-text-primary mb-3 flex items-start gap-3">
                        <span className="flex-shrink-0 bg-accent text-white font-manrope text-xs font-bold px-2 py-1 rounded">
                          Q
                        </span>
                        {faq.q}
                      </h4>
                      <p className="font-manrope text-text-muted pl-10">
                        {faq.a}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Testimonial */}
            <motion.div
              className="bg-card rounded-2xl p-6 sm:p-8 border-l-4 border-accent"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bebas text-2xl text-text-primary mb-6">
                CUSTOMER REVIEWS
              </h3>
              <p className="font-manrope text-text-primary italic mb-4">
                &ldquo;Professional service from start to finish. The team
                transformed our bathroom exactly as promised.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                {/* Avatar placeholder — icon-based, no emoji */}
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-manrope font-bold text-text-primary">
                    Sarah J.
                  </div>
                  <div className="font-manrope text-sm text-text-muted">
                    Brighton, Brisbane
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Sidebar ──────────────────────────────────── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">

              {/* CTA card */}
              <motion.div
                className="bg-gradient-to-br from-primary to-surface-dark rounded-2xl p-8 text-white"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <h3 className="font-bebas text-2xl mb-6">GET YOUR QUOTE</h3>
                <p className="font-manrope text-white/80 mb-8">
                  Free, no-obligation consultation for Brisbane residents
                </p>
                <Link href="/contact">
                  <motion.span
                    className="block w-full bg-accent text-white text-center font-manrope font-semibold py-4 px-6 rounded-xl mb-4 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Free Consultation
                  </motion.span>
                </Link>
                <div className="text-center">
                  <div className="font-manrope text-white/60 text-sm mb-1">
                    Or call us
                  </div>
                  <a
                    href="tel:+61300000000"
                    className="font-manrope text-white text-xl font-bold hover:text-accent transition-colors"
                  >
                    (03) 0000 0000
                  </a>
                </div>
              </motion.div>

              {/* Service summary */}
              <motion.div
                className="bg-card rounded-2xl p-8 border border-border shadow-soft"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="font-bebas text-xl text-text-primary mb-6">
                  SERVICE SUMMARY
                </h4>
                <div className="space-y-4">
                  {/* Service type */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Layers className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-manrope text-xs text-text-muted">
                        Service Type
                      </p>
                      <p className="font-manrope font-semibold text-text-primary">
                        {service.title}
                      </p>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent-secondary" />
                    </div>
                    <div>
                      <p className="font-manrope text-xs text-text-muted">
                        Duration
                      </p>
                      <p className="font-manrope font-semibold text-text-primary">
                        {service.duration}
                      </p>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-manrope text-xs text-text-muted">
                        Starting From
                      </p>
                      <p className="font-manrope font-semibold text-text-primary">
                        {service.pricing}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Why choose us list */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h5 className="font-manrope font-bold text-text-primary mb-4">
                    Why Choose Us
                  </h5>
                  <ul className="space-y-2">
                    {trustPoints.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 font-manrope text-sm text-text-muted"
                      >
                        {/* On-brand accent tick — not emerald */}
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Related services */}
              <motion.div
                className="bg-card rounded-2xl p-8 border border-border"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="font-bebas text-xl text-text-primary mb-6">
                  OTHER SERVICES
                </h4>
                <div className="space-y-3">
                  {relatedServices.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <motion.div
                        className="p-4 rounded-xl border border-border hover:border-accent/50 transition-colors flex items-center justify-between group"
                        whileHover={{ x: 4 }}
                      >
                        <div>
                          <div className="font-manrope font-semibold text-text-primary group-hover:text-accent transition-colors">
                            {item.title}
                          </div>
                          <div className="font-manrope text-sm text-text-muted">
                            {item.desc}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors flex-shrink-0" />
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── Bottom CTA ──────────────────────────────────── */}
        <motion.div
          className="mt-16 sm:mt-20 bg-gradient-to-r from-primary to-surface-dark rounded-2xl p-8 sm:p-12 text-center text-white"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-bebas text-3xl sm:text-4xl mb-6">
            READY TO TRANSFORM YOUR SPACE?
          </h3>
          <p className="font-manrope text-white/90 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Contact us for a free quote on your {serviceName} project in
            Brisbane.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <motion.span
                className="inline-block bg-accent text-white font-manrope font-semibold py-4 px-8 rounded-xl cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Your Free Quote
              </motion.span>
            </Link>
            <a
              href="tel:+61300000000"
              className="font-manrope text-white font-semibold py-4 px-8 rounded-xl border-2 border-accent/50 hover:bg-accent/10 transition-colors"
            >
              Call: (03) 0000 0000
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
