"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User, Phone, Mail, MapPin, Ruler,
  ShieldCheck, Layers, MessageSquare,
  ArrowRight, Loader2, CheckCircle2, Lock,
  Clock, Star
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const suburbs = [
  "Brisbane CBD", "Inner West", "Eastern Suburbs", "Northern Beaches",
  "North Shore", "Western Brisbane", "South West Brisbane",
  "Sutherland Shire", "Parramatta Region", "Hills District", "Other Suburb",
];

const jobTypes = [
  "Bathroom Tiling & Waterproofing",
  "Kitchen Splashback Tiling",
  "Outdoor & Pool Tiling",
  "Laundry Room Tiling",
  "Commercial Waterproofing",
  "Flooring Installation",
  "Complete Bathroom Renovation",
  "Other Service",
];

const radioOpts = {
  waterproofing: [
    { value: "yes",    label: "Yes",      desc: "For bathrooms & wet areas" },
    { value: "no",     label: "No",       desc: "Not required" },
    { value: "unsure", label: "Not Sure", desc: "Need professional advice" },
  ],
  tileRemoval: [
    { value: "yes",    label: "Yes",      desc: "Remove existing tiles" },
    { value: "no",     label: "No",       desc: "New surface" },
    { value: "unsure", label: "Not Sure", desc: "Need assessment" },
  ],
};

const INITIAL = {
  name: "", mobile: "", email: "", suburb: "",
  jobType: "Bathroom Tiling & Waterproofing",
  approxSqm: "", waterproofing: "unsure", tileRemoval: "unsure", message: "",
};

// ─── FIELD WRAPPER ────────────────────────────────────────────────────────────

function Field({ label, required, icon: Icon, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-manrope text-sm font-semibold text-text-primary flex items-center gap-1.5">
        {Icon && <Icon size={13} className="text-accent" />}
        {label}{required && <span className="text-accent">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl font-manrope text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 hover:border-accent/50";

const selectCls =
  "w-full px-4 py-3 bg-background border border-border rounded-xl font-manrope text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 hover:border-accent/50 appearance-none cursor-pointer";

// ─── RADIO GROUP ─────────────────────────────────────────────────────────────

function RadioGroup({ name, value, onChange, options }) {
  return (
    <div className="space-y-2">
      {options.map((opt) => {
        const active = value === opt.value;
        return (
          <label
            key={opt.value}
            className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-200
              ${active
                ? "border-accent bg-accent/5"
                : "border-border bg-background hover:border-accent/40 hover:bg-accent/5"
              }`}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={active}
              onChange={(e) => onChange(e.target.value)}
              className="accent-[#2563eb]"
            />
            <div className="flex-1">
              <span className={`font-manrope text-sm font-semibold ${active ? "text-accent" : "text-text-primary"}`}>
                {opt.label}
              </span>
              <p className="font-manrope text-xs text-text-muted">{opt.desc}</p>
            </div>
            {active && <CheckCircle2 size={14} className="text-accent shrink-0" />}
          </label>
        );
      })}
    </div>
  );
}

// ─── SECTION DIVIDER ─────────────────────────────────────────────────────────

function SectionLabel({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center">
        <Icon size={13} className="text-accent" />
      </div>
      <span className="font-bebas text-lg tracking-wide text-primary">{label}</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function ContactForm({ selectedService = "" }) {
  const [formData, setFormData] = useState({ ...INITIAL, jobType: selectedService || INITIAL.jobType });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const set = (key) => (e) =>
    setFormData((prev) => ({ ...prev, [key]: typeof e === "string" ? e : e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.mobile,
        mobile: formData.mobile,
        suburb: formData.suburb,
        jobType: formData.jobType,
        details: [
          formData.message,
          formData.approxSqm ? `Approx area: ${formData.approxSqm} sqm` : null,
          formData.waterproofing ? `Waterproofing: ${formData.waterproofing}` : null,
          formData.tileRemoval ? `Tile removal: ${formData.tileRemoval}` : null,
        ]
          .filter(Boolean)
          .join("\n"),
        metadata: {
          approxSqm: formData.approxSqm,
          waterproofing: formData.waterproofing,
          tileRemoval: formData.tileRemoval,
        },
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus({ type: "success", message: data.message || "Quote request submitted. We'll contact you within 24 hours." });
        setFormData({ ...INITIAL, jobType: selectedService || INITIAL.jobType });
      } else {
        setStatus({ type: "error", message: data.message || data.error || "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ type: "error", message: "Network error. Please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Brisbane&apos;s Trusted Tiling Experts
            </span>
            <h1 className="font-bebas text-5xl sm:text-6xl tracking-tight text-background">
              Get a Free <span className="text-white/60">Quote Today</span>
            </h1>
            <p className="mt-5 max-w-2xl mx-auto font-manrope text-background/60 leading-relaxed">
              Fill in the form and our team will provide a detailed, no-obligation quote
              within 24 hours.
            </p>
          </motion.div>
        </div>

        {/* Decorative shapes */}
        <div className="absolute -right-20 top-20 rotate-45 w-72 h-72 bg-accent-secondary/20 rounded-3xl hidden lg:block" />
        <div className="absolute -left-28 bottom-10 rotate-45 w-96 h-96 bg-white/5 rounded-3xl" />
      </section>

      {/* ═══ MAIN CONTENT ═══ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* ── FORM (2 cols) ── */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">

              {/* Status banner */}
              {status.message && (
                <div className={`mb-6 p-4 rounded-xl border font-manrope text-sm flex items-center gap-3
                  ${status.type === "success"
                    ? "bg-green-50 text-green-800 border-green-200"
                    : "bg-red-50 text-red-800 border-red-200"}`}
                >
                  {status.type === "success"
                    ? <CheckCircle2 size={16} className="text-green-600 shrink-0" />
                    : <ShieldCheck size={16} className="text-red-600 shrink-0" />}
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">

                {/* ── Personal Info ── */}
                <div>
                  <SectionLabel icon={User} label="Personal Information" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Full Name" required icon={User}>
                      <div className="relative">
                        <User size={14} className="absolute left-3 top-3.5 text-text-muted" />
                        <input type="text" value={formData.name} onChange={set("name")} required placeholder="John Smith" className={inputCls} />
                      </div>
                    </Field>
                    <Field label="Mobile Number" required icon={Phone}>
                      <div className="relative">
                        <Phone size={14} className="absolute left-3 top-3.5 text-text-muted" />
                        <input type="tel" value={formData.mobile} onChange={set("mobile")} required placeholder="0412 345 678" className={inputCls} />
                      </div>
                    </Field>
                    <Field label="Email Address" required icon={Mail}>
                      <div className="relative">
                        <Mail size={14} className="absolute left-3 top-3.5 text-text-muted" />
                        <input type="email" value={formData.email} onChange={set("email")} required placeholder="john@example.com" className={inputCls} />
                      </div>
                    </Field>
                    <Field label="Suburb" required icon={MapPin}>
                      <select value={formData.suburb} onChange={set("suburb")} required className={selectCls}>
                        <option value="">Select suburb…</option>
                        {suburbs.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </Field>
                  </div>
                </div>

                {/* ── Project Details ── */}
                <div>
                  <SectionLabel icon={Ruler} label="Project Details" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Job Type" required icon={Layers}>
                      <select value={formData.jobType} onChange={set("jobType")} required className={selectCls}>
                        {jobTypes.map((j) => <option key={j}>{j}</option>)}
                      </select>
                    </Field>
                    <Field label="Approximate Area (sqm)" icon={Ruler}>
                      <div className="relative">
                        <Ruler size={14} className="absolute left-3 top-3.5 text-text-muted" />
                        <input type="number" value={formData.approxSqm} onChange={set("approxSqm")} placeholder="e.g. 12" min="1" className={inputCls} />
                      </div>
                    </Field>
                  </div>
                </div>

                {/* ── Requirements ── */}
                <div>
                  <SectionLabel icon={ShieldCheck} label="Requirements" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-manrope text-sm font-semibold text-text-primary mb-3 flex items-center gap-1.5">
                        <ShieldCheck size={13} className="text-accent" />
                        Waterproofing Required?
                      </p>
                      <RadioGroup
                        name="waterproofing"
                        value={formData.waterproofing}
                        onChange={(v) => setFormData((p) => ({ ...p, waterproofing: v }))}
                        options={radioOpts.waterproofing}
                      />
                    </div>
                    <div>
                      <p className="font-manrope text-sm font-semibold text-text-primary mb-3 flex items-center gap-1.5">
                        <Layers size={13} className="text-accent" />
                        Tile Removal Required?
                      </p>
                      <RadioGroup
                        name="tileRemoval"
                        value={formData.tileRemoval}
                        onChange={(v) => setFormData((p) => ({ ...p, tileRemoval: v }))}
                        options={radioOpts.tileRemoval}
                      />
                    </div>
                  </div>
                </div>

                {/* ── Message ── */}
                <div>
                  <SectionLabel icon={MessageSquare} label="Additional Details" />
                  <textarea
                    value={formData.message}
                    onChange={set("message")}
                    rows={4}
                    placeholder="Tell us more about your project, timeline, budget, or specific requirements…"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl font-manrope text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 hover:border-accent/50 resize-none"
                  />
                </div>

                {/* ── Submit ── */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-manrope font-semibold text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Processing…
                      </>
                    ) : (
                      <>
                        Get Detailed Quote
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <div className="mt-4 flex items-center justify-center gap-2 font-manrope text-xs text-text-muted">
                    <Lock size={12} />
                    Your information is secure &amp; confidential — response within 24 hours.
                  </div>
                </div>
              </form>
            </div>
          </motion.div>

          {/* ── SIDEBAR (1 col) ── */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            {/* Contact info card */}
            <div className="bg-primary rounded-3xl p-8 text-background">
              <h3 className="font-bebas text-2xl mb-6">Contact Us Directly</h3>
              <div className="space-y-5">
                {[
                  { icon: Phone,  label: "Call Us",      value: "(03) 0000 0000" },
                  { icon: Mail,   label: "Email Us",     value: "hello@garda-tiling.com" },
                  { icon: MapPin, label: "Service Area", value: "All Brisbane & Surrounds" },
                  { icon: Clock,  label: "Hours",        value: "Mon–Sat: 7am – 6pm" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <Icon size={14} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-manrope text-xs text-background/50">{label}</div>
                      <div className="font-manrope text-sm font-semibold text-background">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why choose card */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-md">
              <h3 className="font-bebas text-xl mb-5">Why Choose Garda?</h3>
              <ul className="space-y-3">
                {[
                  "Free, no-obligation quote",
                  "Response within 24 hours",
                  "AS 3740 certified waterproofing",
                  "Licensed & fully insured",
                  "1000+ projects completed",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-manrope text-sm text-text-muted">
                    <CheckCircle2 size={14} className="text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}