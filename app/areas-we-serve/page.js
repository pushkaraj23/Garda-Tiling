"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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

export default function AreasWeServe() {
  return (
    <main className="w-full bg-background text-text-primary">
      {/* ================= HERO ================= */}
      <section className="relative w-full py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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
              className="
                inline-flex mt-8
                px-7 py-3 rounded-full
                bg-accent text-white
                font-manrope text-sm font-semibold
                shadow-md hover:scale-105 transition
              "
            >
              Check Availability
            </Link>
          </motion.div>

          {/* HERO SIDE CARD */}
          <div className="hidden lg:block">
            <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
              <h3 className="font-bebas text-2xl mb-4">
                Trusted Across Brisbane
              </h3>
              <p className="font-manrope text-text-muted text-sm leading-relaxed">
                From inner-city apartments to large suburban homes and
                commercial spaces, our team operates city-wide with the same
                attention to detail and professionalism.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative shapes */}
        <div className="absolute -right-20 top-40 rotate-45 w-72 h-72 bg-accent-secondary/20 rounded-3xl hidden lg:block" />
        <div className="absolute -left-28 bottom-24 rotate-45 w-96 h-96 bg-primary/10 rounded-3xl" />
      </section>

      {/* ================= SERVICE COVERAGE ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* LEFT */}
          <div>
            <h2 className="font-bebas text-4xl tracking-tight text-background">
              Comprehensive Local Coverage
            </h2>

            <p className="mt-5 font-manrope text-background/60 leading-relaxed">
              Our mobile teams are strategically positioned to service a wide
              geographic area efficiently, ensuring fast inspections, accurate
              quoting, and on-time execution.
            </p>

            <ul className="mt-8 space-y-4 font-manrope text-sm">
              {[
                "Bathroom & laundry tiling",
                "AS 3740 compliant waterproofing",
                "Outdoor, balcony & pool areas",
                "Commercial & retail tiling",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-background"
                >
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT – AREA LIST */}
          <div className="bg-card border border-border rounded-3xl p-10 shadow-lg">
            <h3 className="font-bebas text-2xl mb-8">Primary Service Areas</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="
                    bg-primary/5
                    border border-border
                    rounded-xl
                    px-4 py-3
                    text-sm
                    font-manrope
                    text-text-primary
                    hover:border-accent-secondary
                    hover:bg-accent-secondary/15
                    transition
                  "
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY LOCAL ================= */}
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-bebas text-4xl tracking-tight text-primary">
            Why Choose a Local Tiling Team?
          </h2>

          <p className="mt-4 max-w-2xl mx-auto font-manrope text-text-muted">
            Local expertise means smoother communication, faster turnaround, and
            long-term accountability.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              ["Fast Response", "Quick inspections and project starts"],
              ["Local Knowledge", "Built for Brisbane conditions"],
              ["Reliable Scheduling", "Clear timelines & site presence"],
              ["Ongoing Support", "Easy follow-ups after completion"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="
                  bg-card
                  border border-border
                  rounded-2xl
                  p-6
                  shadow-md
                  hover:shadow-lg
                  transition
                "
              >
                <h4 className="font-bebas text-xl mb-2">{title}</h4>
                <p className="font-manrope text-sm text-text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-primary/30 text-white text-center">
        <h2 className="font-bebas text-4xl text-primary sm:text-5xl tracking-tight">
          Not Sure If We Cover Your Area?
        </h2>

        <p className="mt-4 max-w-xl mx-auto font-manrope text-text-muted">
          Get in touch and our team will confirm availability and guide you
          through the next steps.
        </p>

        <Link
          href="/contact"
          className="
            inline-flex mt-8
            px-8 py-3 rounded-full
            bg-white text-primary
            font-manrope text-sm font-semibold
            shadow-lg hover:scale-105 transition
          "
        >
          Contact Garda Tiling
        </Link>
      </section>
    </main>
  );
}
