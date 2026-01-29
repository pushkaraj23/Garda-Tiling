"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1.",
    title: "Site Inspection",
    desc: "We visit your site to assess the area, take measurements, and understand your requirements before recommending the best solution.",
    side: "right",
    top: "top-24",
  },
  {
    number: "2.",
    title: "Clear Quotation",
    desc: "You receive a detailed, easy-to-understand quote outlining scope, materials, timelines, and inclusions — with no hidden costs.",
    side: "left",
    top: "top-72",
  },
  {
    number: "3.",
    title: "Professional Execution",
    desc: "Our experienced team carries out the work with precision, certified waterproofing, and clean workmanship.",
    side: "right",
    top: "top-[520px]",
  },
  {
    number: "4.",
    title: "Final Handover",
    desc: "Once complete, we conduct a final quality check and leave the site clean, safe, and ready to use.",
    side: "left",
    top: "top-[760px]",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full overflow-hidden bg-background py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* ================= DECORATIVE SHAPES (BACKGROUND ONLY) ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 lg:block">
        {/* LEFT DECOR */}
        <div className="absolute -left-10 top-40 opacity-50">
          <div className="w-30 h-30 absolute z-20 -top-20 -left-5 rotate-45 bg-accent rounded-3xl" />
          <div className="w-60 h-60 absolute z-10 rotate-45 -left-16 bg-primary rounded-3xl" />
          <div className="w-40 h-40 absolute -left-10 top-45 rotate-45 bg-accent-secondary rounded-3xl" />
        </div>

        {/* RIGHT DECOR */}
        <div className="absolute -right-10 bottom-100 opacity-50">
          <div className="w-30 h-30 absolute z-20 -top-20 -right-5 rotate-45 bg-accent rounded-3xl" />
          <div className="w-60 h-60 absolute z-10 rotate-45 -right-16 bg-primary rounded-3xl" />
          <div className="w-40 h-40 absolute -right-10 top-45 rotate-45 bg-accent-secondary rounded-3xl" />
        </div>
      </div>
      {/* ====================================================================== */}
      <div className="mx-auto relative">
        {/* HEADER */}
        <div className="text-center max-w-md mx-auto mb-20">
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-tight text-primary">
            HOW IT <span className="text-text-primary">WORKS</span>
          </h2>
          <p className="mt-3 font-manrope text-text-primary text-sm sm:text-base">
            A simple, transparent process designed to make your tiling project
            stress-free from start to finish.
          </p>
        </div>

        {/* DESKTOP PROCESS */}
        <div className="relative hidden lg:flex justify-center min-h-250">
          {/* Vertical Rectangle */}
          <div className="w-88 rounded-4xl h-250 bg-text-muted/20" />

          {/* FLOATING CARDS */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: step.side === "right" ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`
                absolute ${step.top}
                ${
                  step.side === "right"
                    ? "left-[60%] xl:left-[58%]"
                    : "right-[60%] xl:right-[58%]"
                }
                w-[320px] xl:w-105
                bg-primary
                text-white
                rounded-2xl
                p-6 xl:p-8
                shadow-xl
              `}
            >
              <h1
                className={`absolute text-7xl text-primary font-bebas top-14 ${step.side === "right" ? "-left-16" : "-right-16"}`}
              >
                {index + 1}
              </h1>
              <h3 className="font-bebas text-lg xl:text-xl mb-2">
                {step.title}
              </h3>
              <p className="font-manrope text-sm xl:text-base text-white/80 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* MOBILE VERSION */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="
                bg-card border border-border
                rounded-2xl p-5
              "
            >
              <div className="flex items-center gap-4 mb-2">
                <span className="font-bebas text-3xl text-text-primary">
                  {step.number}
                </span>
                <h4 className="font-bebas text-lg text-text-primary">
                  {step.title}
                </h4>
              </div>
              <p className="font-manrope text-sm text-text-muted">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
