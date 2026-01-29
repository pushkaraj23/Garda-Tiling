"use client";

import { motion } from "framer-motion";

/* Motion presets */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-14 max-w-3xl"
        >
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-tight text-primary">
            WHY CHOOSE <span className="text-text-primary">GARDA</span> TILING
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <div className="h-12 w-2 bg-accent-secondary rounded-xl" />
            <p className="font-manrope text-text-muted text-sm sm:text-base">
              We don’t just install tiles — we deliver durable finishes,
              compliant waterproofing, and a clean, stress-free experience from
              start to finish.
            </p>
          </div>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-12 gap-6"
        >
          <AnimatedCard
            variants={item}
            className="col-span-12 lg:col-span-5 h-90"
            img="https://plus.unsplash.com/premium_photo-1681566677639-e39bdc971459?w=900&auto=format&fit=crop&q=60"
            title="Quality Workmanship"
            text="Every project is executed with precision, attention to detail, and a commitment to long-lasting results."
          />

          <AnimatedCard
            variants={item}
            className="col-span-12 lg:col-span-4 h-90"
            img="https://plus.unsplash.com/premium_photo-1681566677089-08f136195c9a?w=800&auto=format&fit=crop&q=60"
            title="Waterproofing Compliance"
            text="All waterproofing work strictly follows Australian Standards, ensuring durability and peace of mind."
          />

          <AnimatedCard
            variants={item}
            className="col-span-12 lg:col-span-3 lg:row-span-2 h-70 lg:h-auto"
            img="https://plus.unsplash.com/premium_photo-1663127307844-6dc4b2ccef85?w=700&auto=format&fit=crop&q=60"
            title="Clear Timelines"
            text="We follow defined schedules and keep you informed — no delays, no surprises."
          />

          <AnimatedCard
            variants={item}
            className="col-span-12 lg:col-span-9 h-65"
            img="https://plus.unsplash.com/premium_photo-1682210260871-5fcfeb4cd20e?w=900&auto=format&fit=crop&q=60"
            title="Clean & Respectful Work"
            text="Your space is treated with care. We maintain a clean site and leave your property tidy upon completion."
          />
        </motion.div>
      </div>
    </section>
  );
}

/* REUSABLE CARD */
function AnimatedCard({ img, title, text, className, variants }) {
  return (
    <motion.div
      variants={variants}
      className={`
        relative overflow-hidden rounded-2xl
        group ${className}
        transition-all duration-500
        hover:-translate-y-2 hover:shadow-xl
      `}
    >
      {/* IMAGE */}
      <img
        src={img}
        alt={title}
        className="
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-700
          group-hover:scale-105
        "
      />

      {/* OVERLAY */}
      <div
        className="
        absolute inset-0
        bg-gradient-to-t
        from-black/70 via-black/40 to-transparent
      "
      />

      {/* TEXT */}
      <div className="absolute bottom-6 left-6 right-6 z-10">
        <h3 className="font-bebas text-white text-xl tracking-wide mb-2">
          {title}
        </h3>
        <p className="font-manrope text-sm text-white/90 leading-relaxed">
          {text}
        </p>
      </div>
    </motion.div>
  );
}
