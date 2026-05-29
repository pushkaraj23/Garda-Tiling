"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  User,
  DollarSign,
  Clock,
  CheckCircle2,
  Images,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Building2,
  Star,
  Phone,
  MessageSquare,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import { projects } from "../lib/projectData";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ProjectDetail({ project }) {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#ffffff]">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Images size={56} className="text-[#6b7280] mx-auto mb-6" />
          <h1 className="font-bebas text-4xl text-[#111827] mb-4">PROJECT NOT FOUND</h1>
          <p className="text-[#6b7280] font-manrope mb-8">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <motion.button
            onClick={() => router.push("/projects")}
            className="px-6 py-3 bg-[#2563eb] text-white rounded-xl font-semibold font-manrope"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Back to Projects
          </motion.button>
        </motion.div>
      </div>
    );
  }

  const hasImages = project.images?.length > 0;
  const totalImages = hasImages ? project.images.length : 0;

  const nextImage = () =>
    hasImages && setSelectedImage((prev) => (prev + 1) % totalImages);
  const prevImage = () =>
    hasImages && setSelectedImage((prev) => (prev - 1 + totalImages) % totalImages);

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500/20 text-emerald-100";
      case "in-progress":
        return "bg-[#2563eb]/30 text-white";
      case "upcoming":
        return "bg-amber-500/20 text-amber-100";
      case "on-hold":
        return "bg-orange-500/20 text-orange-100";
      default:
        return "bg-white/20 text-white";
    }
  };

  const getStatusColorLight = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-800";
      case "in-progress":
        return "bg-[#2563eb]/10 text-[#2563eb]";
      case "upcoming":
        return "bg-amber-100 text-amber-800";
      case "on-hold":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-[#64748b]/10 text-[#64748b]";
    }
  };

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="w-full min-h-screen bg-[#ffffff] overflow-x-hidden pt-24 sm:pt-28">
      {/* ── Sticky back bar ── */}
      <motion.div
        className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-[#e5e7eb]"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5">
          <motion.button
            onClick={() => router.push("/projects")}
            className="flex items-center gap-2 text-[#6b7280] hover:text-[#111827] font-medium transition-colors font-manrope text-sm"
            whileHover={{ x: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ArrowLeft size={15} />
            Back to Projects
          </motion.button>
        </div>
      </motion.div>

      {/* ── Hero ── */}
      <section className="relative w-full">
        <motion.div
          className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 via-[#1f2933]/90 to-[#111827]/95 z-10" />

          {/* Gold ambient glow */}
          <div
            className="absolute inset-0 z-[6] opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 50%, rgba(37,99,235,0.4) 0%, transparent 40%), radial-gradient(circle at 85% 50%, rgba(37,99,235,0.3) 0%, transparent 40%)",
            }}
          />

          {hasImages ? (
            <Image
              src={project.images[selectedImage]}
              alt={`${project.title}`}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          ) : (
            <div className="w-full h-full bg-[#64748b]/20 flex items-center justify-center">
              <Images size={64} className="text-[#6b7280]" />
            </div>
          )}

          {/* Hero content */}
          <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6">
            <div className="text-center max-w-4xl">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="flex flex-wrap justify-center gap-3 mb-5"
              >
                <motion.span
                  variants={staggerItem}
                  className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium capitalize font-manrope border border-white/15"
                >
                  {project.category} Project
                </motion.span>
                <motion.span
                  variants={staggerItem}
                  className={`backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold font-manrope ${getStatusColor(project.status)}`}
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  {project.status.replace("-", " ").toUpperCase()}
                </motion.span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight mb-4 sm:mb-5"
              >
                {project.title.toUpperCase()}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-base sm:text-lg md:text-xl text-white/85 mb-6 max-w-2xl mx-auto line-clamp-3 font-manrope font-light"
              >
                {project.description}
              </motion.p>

              {/* Hero stat pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex flex-wrap justify-center gap-3 sm:gap-4"
              >
                <span className="bg-[#2563eb]/30 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-medium flex items-center gap-2 font-manrope border border-[#2563eb]/30 text-sm">
                  <DollarSign size={14} /> {project.budget}
                </span>
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-medium flex items-center gap-2 font-manrope border border-white/15 text-sm">
                  <Clock size={14} /> {project.duration}
                </span>
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-medium flex items-center gap-2 font-manrope border border-white/15 text-sm">
                  <MapPin size={14} /> {project.location}
                </span>
              </motion.div>

              {/* Progress bar in hero */}
              {project.progress !== undefined && project.progress < 100 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55 }}
                  className="mt-6 max-w-md mx-auto"
                >
                  <div className="flex justify-between text-white/75 text-sm mb-2 font-manrope">
                    <span>Progress</span>
                    <span style={{ color: "#2563eb" }}>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: "#2563eb" }}
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Image nav arrows */}
          {hasImages && totalImages > 1 && (
            <>
              <motion.button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/90 rounded-full shadow-lg flex items-center justify-center z-20 text-[#1f2933] gallery-nav"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={18} />
              </motion.button>
              <motion.button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/90 rounded-full shadow-lg flex items-center justify-center z-20 text-[#1f2933] gallery-nav"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={18} />
              </motion.button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium z-20 font-manrope backdrop-blur-sm">
                {selectedImage + 1} / {totalImages}
              </div>
            </>
          )}
        </motion.div>
      </section>

      {/* ── Main content ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* ── Left column ── */}
          <div className="lg:col-span-2 space-y-14">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <h2 className="font-bebas text-3xl sm:text-4xl text-[#111827] tracking-tight">
                  PROJECT OVERVIEW
                </h2>
                <span className="inline-flex px-3 py-1 rounded-full bg-[#2563eb]/10 text-[#2563eb] text-xs font-bold font-manrope">
                  {project.location.split(",")[0]}
                </span>
              </div>
              <p className="text-lg text-[#6b7280] leading-relaxed mb-8 font-manrope">
                {project.description}
              </p>

              {/* Info grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: User, label: "Client", value: project.client },
                  {
                    icon: Calendar,
                    label: "Timeline",
                    value:
                      `${project.startDate || ""} – ${project.completionDate || ""}`.trim() || "N/A",
                  },
                  { icon: DollarSign, label: "Project Value", value: project.budget },
                  { icon: Clock, label: "Duration", value: project.duration },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-4 bg-white p-4 sm:p-5 rounded-xl border border-[#e5e7eb]"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{
                      y: -4,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                      borderColor: "rgba(37,99,235,0.3)",
                    }}
                    style={{ transition: "all 0.3s ease" }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#2563eb]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-[#2563eb]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#6b7280] font-manrope">{item.label}</p>
                      <p className="font-semibold text-[#111827] font-manrope">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Location pill */}
              <motion.div
                className="bg-[#2563eb]/5 border border-[#2563eb]/20 rounded-xl p-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bebas text-lg text-[#111827] mb-3 flex items-center gap-2">
                  <MapPin size={16} className="text-[#2563eb]" /> Project Location
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-4 py-2 rounded-lg text-[#111827] border border-[#e5e7eb] font-medium font-manrope text-sm">
                    {project.location}
                  </span>
                  <span
                    className={`px-4 py-2 rounded-lg font-medium font-manrope text-sm ${getStatusColorLight(
                      project.status
                    )}`}
                  >
                    {project.status.replace("-", " ").toUpperCase()}
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Gallery thumbnails */}
            {hasImages && totalImages > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bebas text-2xl text-[#111827] mb-5">PROJECT GALLERY</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {project.images.map((img, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`relative h-24 sm:h-28 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === i
                          ? "border-[#2563eb] ring-2 ring-[#2563eb]/30"
                          : "border-[#e5e7eb] hover:border-[#2563eb]/50"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={
                        selectedImage === i
                          ? { boxShadow: "0 0 0 3px rgba(37,99,235,0.2)" }
                          : {}
                      }
                    >
                      <Image
                        src={img}
                        alt={`${project.title} ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="25vw"
                      />
                      {selectedImage === i && (
                        <div className="absolute inset-0 bg-[#2563eb]/10" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Services */}
            {project.services?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bebas text-2xl text-[#111827] mb-5">SERVICES PROVIDED</h3>
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e5e7eb]">
                  <ul className="space-y-3.5">
                    {project.services.map((s, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 }}
                      >
                        <CheckCircle2 size={18} className="text-[#2563eb] mt-0.5 flex-shrink-0" />
                        <span className="text-[#111827] font-manrope">{s}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {/* Specifications */}
            {project.specifications && Object.keys(project.specifications).length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bebas text-2xl text-[#111827] mb-5">PROJECT SPECIFICATIONS</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(project.specifications).map(([key, value], i) => (
                    <motion.div
                      key={key}
                      className="bg-white p-5 rounded-xl border border-[#e5e7eb] spec-card"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      whileHover={{
                        y: -4,
                        boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
                      }}
                      style={{ transition: "all 0.3s ease" }}
                    >
                      <p className="text-sm text-[#6b7280] mb-1.5 capitalize font-manrope">
                        {key.replace(/([A-Z])/g, " $1")}
                      </p>
                      <p
                        className="text-xl font-bold font-manrope"
                        style={{ color: "#2563eb" }}
                      >
                        {value}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Before / After */}
            {project.beforeAfter && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bebas text-2xl text-[#111827] mb-5 flex items-center gap-2">
                  <Images size={20} className="text-[#2563eb]" /> Before &amp; After
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { label: "Before", src: project.beforeAfter.before },
                    { label: "After", src: project.beforeAfter.after },
                  ].map(({ label, src }) => (
                    <motion.div
                      key={label}
                      className="bg-white rounded-xl overflow-hidden border border-[#e5e7eb]"
                      whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
                      style={{ transition: "all 0.3s ease" }}
                    >
                      <div className="text-center font-semibold text-[#6b7280] py-3 border-b border-[#e5e7eb] font-manrope text-sm">
                        {label}
                      </div>
                      <div className="relative h-64">
                        <Image src={src} alt={label} fill className="object-cover" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Challenges & Solutions */}
            {(project.challenges?.length > 0 || project.solutions?.length > 0) && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bebas text-2xl text-[#111827] mb-5">
                  CHALLENGES &amp; SOLUTIONS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {project.challenges?.length > 0 && (
                    <div className="bg-white rounded-xl p-6 border border-orange-100">
                      <h4 className="font-bold text-[#111827] mb-4 font-manrope flex items-center gap-2">
                        <AlertTriangle size={16} className="text-orange-400" />
                        Project Challenges
                      </h4>
                      <ul className="space-y-2.5">
                        {project.challenges.map((c, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-[#6b7280] font-manrope text-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.solutions?.length > 0 && (
                    <div className="bg-white rounded-xl p-6 border border-emerald-100">
                      <h4 className="font-bold text-[#111827] mb-4 font-manrope flex items-center gap-2">
                        <Lightbulb size={16} className="text-emerald-500" />
                        Our Solutions
                      </h4>
                      <ul className="space-y-2.5">
                        {project.solutions.map((s, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-[#6b7280] font-manrope text-sm"
                          >
                            <CheckCircle2
                              size={15}
                              className="text-emerald-500 mt-0.5 flex-shrink-0"
                            />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Testimonials */}
            {project.testimonials?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bebas text-2xl text-[#111827] mb-5 flex items-center gap-2">
                  <MessageSquare size={20} className="text-[#2563eb]" /> Client Feedback
                </h3>
                <div className="space-y-5">
                  {project.testimonials.map((t, i) => (
                    <motion.div
                      key={i}
                      className="bg-white rounded-xl p-6 sm:p-8 border-l-4"
                      style={{ borderLeftColor: "#2563eb" }}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            size={14}
                            className={
                              j < (t.rating || 5) ? "text-yellow-500 fill-yellow-500" : "text-[#e5e7eb]"
                            }
                          />
                        ))}
                      </div>
                      <p className="text-[#6b7280] italic mb-4 font-manrope leading-relaxed">
                        &ldquo;{t.text}&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#2563eb]/10 flex items-center justify-center flex-shrink-0">
                          <span className="font-semibold text-[#2563eb] font-manrope text-sm">
                            {t.author
                              ?.split(" ")
                              .map((n) => n[0])
                              .join("") || "?"}
                          </span>
                        </div>
                        <div>
                          <p className="font-bold text-[#111827] font-manrope">{t.author}</p>
                          <p className="text-sm text-[#6b7280] font-manrope">{project.location}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* ── Sidebar ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Quote CTA card */}
              <motion.div
                className="rounded-2xl p-8 text-white relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #111827 0%, #1f2933 100%)",
                  boxShadow: "0 20px 40px rgba(17,24,39,0.3)",
                }}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gold accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: "linear-gradient(90deg, transparent, #2563eb, transparent)" }}
                />
                {/* Subtle glow */}
                <div
                  className="absolute top-4 right-4 w-24 h-24 rounded-full pointer-events-none opacity-10"
                  style={{
                    background: "radial-gradient(circle, rgba(37,99,235,1) 0%, transparent 70%)",
                  }}
                />
                <h3 className="font-bebas text-2xl mb-3 relative z-10">LIKE THIS PROJECT?</h3>
                <p className="text-white/75 mb-7 relative z-10 font-manrope text-sm leading-relaxed">
                  Get a free quote for your own tiling project in Brisbane
                </p>
                <Link href="/contact">
                  <motion.span
                    className="block w-full bg-[#2563eb] text-white text-center font-semibold py-3.5 px-6 rounded-xl mb-4 font-manrope relative z-10"
                    whileHover={{ scale: 1.02, backgroundColor: "#1d4ed8" }}
                    whileTap={{ scale: 0.98 }}
                    style={{ transition: "all 0.2s ease" }}
                  >
                    Request Similar Quote
                  </motion.span>
                </Link>
                <div className="text-center relative z-10">
                  <p className="text-white/50 text-xs mb-1 font-manrope">Or call us directly</p>
                  <a
                    href="tel:+61300000000"
                    className="text-white text-xl font-bold font-manrope flex items-center justify-center gap-2 hover:text-white/80 transition-colors duration-300"
                  >
                    <Phone size={16} />
                    (03) 0000 0000
                  </a>
                </div>
              </motion.div>

              {/* Project summary card */}
              <motion.div
                className="bg-white rounded-2xl p-7 border border-[#e5e7eb]"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="font-bebas text-xl text-[#111827] mb-5">PROJECT SUMMARY</h4>
                <div className="space-y-4">
                  {[
                    { icon: Building2, label: "Project Type", value: project.category },
                    { icon: Clock, label: "Duration", value: project.duration },
                    { icon: DollarSign, label: "Project Value", value: project.budget },
                    { icon: MapPin, label: "Location", value: project.location },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#2563eb]/10 flex items-center justify-center flex-shrink-0">
                        <item.icon size={15} className="text-[#2563eb]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#6b7280] font-manrope">{item.label}</p>
                        <p className="font-semibold text-[#111827] capitalize font-manrope text-sm">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sidebar progress */}
                {project.progress !== undefined && (
                  <div className="mt-6 pt-5 border-t border-[#e5e7eb]">
                    <div className="flex justify-between text-sm mb-2 font-manrope">
                      <span className="text-[#6b7280]">Progress</span>
                      <span className="font-bold" style={{ color: "#2563eb" }}>
                        {project.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-[#e5e7eb] rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: "#2563eb" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                )}

                {/* Why choose us */}
                <div className="mt-6 pt-5 border-t border-[#e5e7eb]">
                  <h5 className="font-bold text-[#111827] mb-3.5 font-manrope text-sm">
                    Why Choose Us
                  </h5>
                  <ul className="space-y-2">
                    {[
                      "Local Brisbane Experts",
                      "Quality Guaranteed",
                      "On-Time Completion",
                      "Premium Materials",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-[#6b7280] font-manrope"
                      >
                        <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Related projects sidebar */}
              {relatedProjects.length > 0 && (
                <motion.div
                  className="bg-white rounded-2xl p-7 border border-[#e5e7eb]"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="font-bebas text-xl text-[#111827] mb-5">SIMILAR PROJECTS</h4>
                  <div className="space-y-3">
                    {relatedProjects.map((r) => (
                      <Link key={r.id} href={`/projects/${r.slug}`}>
                        <motion.div
                          className="flex gap-3.5 p-3.5 rounded-xl border border-[#e5e7eb] hover:border-[#2563eb]/40 cursor-pointer"
                          whileHover={{
                            x: 4,
                            boxShadow: "0 4px 12px rgba(37,99,235,0.1)",
                          }}
                          style={{ transition: "all 0.3s ease" }}
                        >
                          {r.images?.[0] && (
                            <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                              <Image
                                src={r.images[0]}
                                alt={r.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-[#111827] truncate font-manrope text-sm">
                              {r.title}
                            </p>
                            <p className="text-xs text-[#6b7280] font-manrope">{r.location}</p>
                            <p
                              className="text-sm font-semibold font-manrope"
                              style={{ color: "#2563eb" }}
                            >
                              {r.budget}
                            </p>
                          </div>
                          <ArrowRight size={15} className="text-[#2563eb] mt-1 flex-shrink-0" />
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          className="mt-16 sm:mt-20 rounded-2xl p-8 sm:p-12 text-center text-white relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #111827 0%, #1f2933 60%, #111827 100%)",
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Gold top accent */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #2563eb, transparent)" }}
          />
          {/* Ambient glows */}
          <div
            className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,1) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,1) 0%, transparent 70%)" }}
          />

          <h3 className="font-bebas text-3xl sm:text-4xl mb-4 relative z-10">
            READY TO START YOUR OWN PROJECT?
          </h3>
          <p className="text-white/80 text-lg sm:text-xl mb-8 max-w-2xl mx-auto font-manrope font-light relative z-10">
            Contact us for a free quote on your {project.category} project in Brisbane.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link href="/contact">
              <motion.span
                className="inline-flex items-center gap-2 bg-[#2563eb] text-white font-semibold py-4 px-8 rounded-xl font-manrope"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Your Free Quote
                <ArrowRight size={16} />
              </motion.span>
            </Link>
            <a
              href="tel:+61300000000"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold py-4 px-8 rounded-xl border-2 border-white/25 hover:border-white/50 hover:bg-white/5 transition-all duration-300 font-manrope"
            >
              <Phone size={16} />
              Call: (03) 0000 0000
            </a>
          </div>
        </motion.div>

        {/* ── More related projects (bottom grid) ── */}
        {relatedProjects.length > 0 && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <h2 className="font-bebas text-2xl sm:text-3xl text-[#111827]">
                MORE {project.category?.toUpperCase()} PROJECTS
              </h2>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-[#2563eb] hover:text-[#1d4ed8] font-medium font-manrope text-sm transition-colors"
              >
                View All Projects <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((r, i) => (
                <motion.div
                  key={r.id}
                  onClick={() => router.push(`/projects/${r.slug}`)}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#e5e7eb] cursor-pointer project-card-glow"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(37,99,235,0.15)",
                  }}
                  style={{ transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
                >
                  {r.images?.[0] && (
                    <div className="relative h-48 overflow-hidden image-zoom-container">
                      <Image
                        src={r.images[0]}
                        alt={r.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/60 to-transparent" />
                      <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-lg font-manrope border border-white/15">
                        <MapPin size={10} />
                        {r.location?.split(",")[0]}
                      </span>
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-bold text-[#111827] mb-1.5 group-hover:text-white/80 transition-colors font-manrope">
                      {r.title}
                    </h3>
                    <p className="text-sm text-[#6b7280] mb-4 line-clamp-2 font-manrope leading-relaxed">
                      {r.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#6b7280] font-manrope">{r.duration}</span>
                      <span className="font-semibold font-manrope" style={{ color: "#2563eb" }}>
                        {r.budget}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
}