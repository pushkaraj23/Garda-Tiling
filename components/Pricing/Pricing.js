"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bath, UtensilsCrossed, Waves, ShieldCheck,
  Layers, Check, X, Clock, Phone, Mail, MapPin,
  Wrench, Ruler, Star, ArrowRight, Tag
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const TABS = [
  { id: "bathroom",      label: "Bathroom Tiling",    icon: Bath },
  { id: "kitchen",       label: "Kitchen Splashback",  icon: UtensilsCrossed },
  { id: "outdoor",       label: "Outdoor & Pool",      icon: Waves },
  { id: "waterproofing", label: "Waterproofing",       icon: ShieldCheck },
  { id: "flooring",      label: "Flooring",            icon: Layers },
];

const DATA = {
  bathroom: {
    title: "Bathroom Tiling & Waterproofing",
    desc: "Complete bathroom tiling solutions with Australian standard waterproofing",
    packages: [
      {
        name: "Standard", price: "$5,000", duration: "10–14 days", popular: false,
        features: [
          { ok: true,  text: "Waterproofing certificate" },
          { ok: true,  text: "Porcelain tile installation" },
          { ok: true,  text: "Demolition & disposal" },
          { ok: true,  text: "Grouting & sealing" },
          { ok: true,  text: "Basic fixtures" },
          { ok: false, text: "Premium tiles" },
          { ok: false, text: "Heated flooring" },
          { ok: false, text: "Design consultation" },
        ],
      },
      {
        name: "Premium", price: "$7,500", duration: "14–21 days", popular: true,
        features: [
          { ok: true, text: "10-year waterproofing warranty" },
          { ok: true, text: "Large format porcelain/stone" },
          { ok: true, text: "Laser level precision" },
          { ok: true, text: "Premium grout & sealants" },
          { ok: true, text: "Design consultation" },
          { ok: true, text: "Heated flooring option" },
          { ok: true, text: "Smart bathroom features" },
          { ok: true, text: "Extended 5-year workmanship" },
        ],
      },
      {
        name: "Luxury", price: "$12,500", duration: "3–4 weeks", popular: false,
        features: [
          { ok: true, text: "15-year waterproofing warranty" },
          { ok: true, text: "Natural stone/marble tiles" },
          { ok: true, text: "Custom mosaic features" },
          { ok: true, text: "Smart home integration" },
          { ok: true, text: "Premium fixtures & fittings" },
          { ok: true, text: "Heated flooring included" },
          { ok: true, text: "Architectural design" },
          { ok: true, text: "10-year comprehensive warranty" },
        ],
      },
    ],
    addOns: [
      { name: "Tile Removal",             price: "$45/sqm" },
      { name: "Additional Waterproofing", price: "$35/sqm" },
      { name: "Underfloor Heating",       price: "$120/sqm" },
      { name: "Premium Sealants",         price: "$15/sqm" },
    ],
  },
  kitchen: {
    title: "Kitchen Splashback Tiling",
    desc: "Professional kitchen splashback installation with premium finishes",
    packages: [
      {
        name: "Basic", price: "$950", duration: "1–2 days", popular: false,
        features: [
          { ok: true,  text: "Standard ceramic tiles" },
          { ok: true,  text: "Professional installation" },
          { ok: true,  text: "Grouting & cleaning" },
          { ok: true,  text: "Basic edge finishing" },
          { ok: false, text: "Glass/mosaic tiles" },
          { ok: false, text: "Premium sealants" },
          { ok: false, text: "Design service" },
        ],
      },
      {
        name: "Premium", price: "$1,900", duration: "2–3 days", popular: true,
        features: [
          { ok: true, text: "Glass or mosaic tiles" },
          { ok: true, text: "Precision laser cutting" },
          { ok: true, text: "Premium waterproof grout" },
          { ok: true, text: "Professional finishing" },
          { ok: true, text: "Design consultation" },
          { ok: true, text: "3-year warranty" },
          { ok: true, text: "Quick installation" },
        ],
      },
      {
        name: "Custom", price: "From $2,500", duration: "3–5 days", popular: false,
        features: [
          { ok: true, text: "Custom tile design" },
          { ok: true, text: "Premium materials" },
          { ok: true, text: "Integrated lighting" },
          { ok: true, text: "5-year warranty" },
          { ok: true, text: "Full design service" },
          { ok: true, text: "Extended support" },
        ],
      },
    ],
    addOns: [
      { name: "Tile Pattern Design",     price: "$300" },
      { name: "Integrated LED Lighting", price: "$450" },
      { name: "Premium Sealants",        price: "$150" },
      { name: "Express Service",         price: "+25%" },
    ],
  },
  outdoor: {
    title: "Outdoor & Pool Tiling",
    desc: "Durable outdoor tiling solutions for pools, patios, and entertainment areas",
    packages: [
      {
        name: "Patio Basic", price: "$3,800", duration: "5–7 days", popular: false,
        features: [
          { ok: true,  text: "Slip-resistant porcelain" },
          { ok: true,  text: "Weatherproof installation" },
          { ok: true,  text: "Basic drainage" },
          { ok: true,  text: "3-year warranty" },
          { ok: false, text: "Custom patterns" },
          { ok: false, text: "Premium sealants" },
          { ok: false, text: "Lighting integration" },
        ],
      },
      {
        name: "Pool Premium", price: "$6,300", duration: "10–14 days", popular: true,
        features: [
          { ok: true, text: "Anti-slip pool tiles" },
          { ok: true, text: "Chemical-resistant grout" },
          { ok: true, text: "Professional waterproofing" },
          { ok: true, text: "Custom design options" },
          { ok: true, text: "5-year warranty" },
          { ok: true, text: "Safety compliance" },
          { ok: true, text: "Quick installation" },
        ],
      },
      {
        name: "Luxury Outdoor", price: "From $8,500", duration: "2–3 weeks", popular: false,
        features: [
          { ok: true, text: "Natural stone paving" },
          { ok: true, text: "Custom mosaic features" },
          { ok: true, text: "Integrated drainage" },
          { ok: true, text: "Landscape lighting" },
          { ok: true, text: "10-year warranty" },
          { ok: true, text: "Full design service" },
        ],
      },
    ],
    addOns: [
      { name: "Pool Coping",    price: "$120/linear m" },
      { name: "Custom Mosaic",  price: "$300/sqm" },
      { name: "Outdoor Lighting", price: "$750" },
      { name: "Premium Sealants", price: "$15/sqm" },
    ],
  },
  waterproofing: {
    title: "Commercial & Residential Waterproofing",
    desc: "Certified waterproofing solutions with compliance guarantees",
    packages: [
      {
        name: "Residential", price: "$2,500", duration: "3–5 days", popular: false,
        features: [
          { ok: true,  text: "Australian standards compliant" },
          { ok: true,  text: "5-year warranty" },
          { ok: true,  text: "Certificate provided" },
          { ok: true,  text: "Professional application" },
          { ok: false, text: "Extended warranty" },
          { ok: false, text: "Premium membranes" },
          { ok: false, text: "Commercial grade" },
        ],
      },
      {
        name: "Commercial", price: "$5,000", duration: "7–10 days", popular: true,
        features: [
          { ok: true, text: "Commercial grade membranes" },
          { ok: true, text: "10-year warranty" },
          { ok: true, text: "Full compliance certificate" },
          { ok: true, text: "Structural assessment" },
          { ok: true, text: "Priority service" },
          { ok: true, text: "BAL rated options" },
          { ok: true, text: "Project management" },
        ],
      },
      {
        name: "Premium", price: "Custom Quote", duration: "Varies", popular: false,
        features: [
          { ok: true, text: "15+ year warranty" },
          { ok: true, text: "Premium European membranes" },
          { ok: true, text: "Full architectural design" },
          { ok: true, text: "24/7 support" },
          { ok: true, text: "Compliance management" },
          { ok: true, text: "Multi-point inspection" },
        ],
      },
    ],
    addOns: [
      { name: "Extended Warranty",    price: "+20%" },
      { name: "Structural Assessment", price: "$450" },
      { name: "Express Certificate",  price: "$200" },
      { name: "Premium Membranes",    price: "+35%" },
    ],
  },
  flooring: {
    title: "Flooring Installation",
    desc: "Professional flooring solutions for any space",
    packages: [
      {
        name: "Laminate", price: "$48/sqm", duration: "2–3 days", popular: false,
        features: [
          { ok: true,  text: "Quality laminate flooring" },
          { ok: true,  text: "Underlay included" },
          { ok: true,  text: "Professional installation" },
          { ok: true,  text: "3-year warranty" },
          { ok: false, text: "Premium underlay" },
          { ok: false, text: "Soundproofing" },
          { ok: false, text: "Extended warranty" },
        ],
      },
      {
        name: "Hybrid", price: "$68/sqm", duration: "3–4 days", popular: true,
        features: [
          { ok: true, text: "Water-resistant hybrid" },
          { ok: true, text: "Premium underlay" },
          { ok: true, text: "Soundproofing option" },
          { ok: true, text: "5-year warranty" },
          { ok: true, text: "Quick installation" },
          { ok: true, text: "Pet-friendly options" },
          { ok: true, text: "Design consultation" },
        ],
      },
      {
        name: "Timber", price: "$99/sqm", duration: "5–7 days", popular: false,
        features: [
          { ok: true, text: "Engineered timber" },
          { ok: true, text: "Professional sanding" },
          { ok: true, text: "Premium finishing" },
          { ok: true, text: "10-year warranty" },
          { ok: true, text: "Custom staining" },
          { ok: true, text: "Expert craftsmanship" },
        ],
      },
    ],
    addOns: [
      { name: "Soundproof Underlay",  price: "$12/sqm" },
      { name: "Custom Staining",      price: "$25/sqm" },
      { name: "Skirting Installation", price: "$35/linear m" },
      { name: "Express Service",      price: "+20%" },
    ],
  },
};

const trustPoints = [
  { icon: ShieldCheck, title: "Certified Workmanship", desc: "All work comes with comprehensive warranties and Australian standard compliance" },
  { icon: Wrench,      title: "Premium Materials",     desc: "We use only high-quality, durable materials from trusted suppliers" },
  { icon: Ruler,       title: "Free Quotes",           desc: "Get a detailed, no-obligation quote with transparent pricing breakdown" },
];

// ─── ANIMATION HELPERS ───────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("bathroom");
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
              Transparent Pricing
            </span>
            <h1 className="font-bebas text-5xl sm:text-6xl tracking-tight text-background">
              Honest Pricing. <span className="text-white/60">No Surprises.</span>
            </h1>
            <p className="mt-5 max-w-2xl mx-auto font-manrope text-background/60 leading-relaxed">
              Indicative pricing across all our services. Every project gets a free,
              detailed quote after site inspection.
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
            {TABS.map(({ id, label, icon: Icon }) => {
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
              Popular Add-ons & <span className="text-white/60">Extras</span>
            </h3>
            <p className="mt-2 font-manrope text-background/60 text-sm">
              Enhance your project with these optional extras
            </p>
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
              Why Trust Our <span className="text-text-primary">Pricing</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto font-manrope text-text-muted">
              Our transparent approach ensures you get the best value for your investment.
            </p>
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
          Need a Custom <span className="text-white/60">Quote?</span>
        </h2>
        <p className="mt-4 max-w-xl mx-auto font-manrope text-background/60">
          Every project is unique. Contact us for a personalised quote based on your
          specific requirements.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-primary font-manrope text-sm font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          >
            Request Custom Quote
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/projects"
            className="inline-flex px-8 py-3 rounded-full border border-white/30 text-white font-manrope text-sm font-semibold hover:bg-white/10 transition-all duration-300"
          >
            View Our Gallery
          </Link>
        </div>

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

      {/* ═══ DISCLAIMER ═══ */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 text-center">
          <h4 className="font-bebas text-xl text-primary mb-3">Pricing Information</h4>
          <div className="space-y-2 font-manrope text-xs text-text-muted">
            <p>* Prices are indicative and may vary based on project complexity, materials selected, and site conditions. Final quotes provided after site inspection.</p>
            <p>** All prices include GST. Waterproofing certificates provided for relevant services.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 font-semibold text-accent">
              {["Free site inspections", "No obligation quotes", "Transparent pricing"].map((t) => (
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