"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaUser,
  FaDollarSign,
  FaClock,
  FaCheckCircle,
  FaImages,
  FaChevronLeft,
  FaChevronRight,
  FaCalendar,
  FaBuilding,
  FaStar,
  FaChevronRight as FaArrowRight,
} from "react-icons/fa";
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
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h1 className="font-bebas text-4xl text-text-primary mb-4">Project Not Found</h1>
          <motion.button
            onClick={() => router.push("/projects")}
            className="px-6 py-3 bg-accent text-white rounded-xl font-semibold"
            whileHover={{ scale: 1.02 }}
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

  const nextImage = () => hasImages && setSelectedImage((prev) => (prev + 1) % totalImages);
  const prevImage = () => hasImages && setSelectedImage((prev) => (prev - 1 + totalImages) % totalImages);

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500/20 text-emerald-100";
      case "in-progress":
        return "bg-accent/30 text-white";
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
        return "bg-accent/10 text-accent";
      case "upcoming":
        return "bg-amber-100 text-amber-800";
      case "on-hold":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-accent-secondary/10 text-accent-secondary";
    }
  };

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <main className="w-full min-h-screen bg-background overflow-hidden">
      {/* Back Button */}
      <motion.div
        className="sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-border"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <motion.button
            onClick={() => router.push("/projects")}
            className="flex items-center gap-2 text-text-muted hover:text-text-primary font-medium transition-colors"
            whileHover={{ x: -4 }}
          >
            <FaArrowLeft className="text-sm" /> Back to Projects
          </motion.button>
        </div>
      </motion.div>

      {/* Hero */}
      <section className="relative w-full">
        <motion.div
          className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-surface-dark/90 to-primary/95 z-10" />
          {hasImages ? (
            <Image
              src={project.images[selectedImage]}
              alt={`${project.title} - Brisbane`}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          ) : (
            <div className="w-full h-full bg-accent-secondary/20 flex items-center justify-center">
              <FaImages className="text-text-muted text-6xl" />
            </div>
          )}
          <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6">
            <div className="text-center max-w-4xl">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="flex flex-wrap justify-center gap-3 mb-6"
              >
                <motion.span
                  variants={staggerItem}
                  className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium capitalize"
                >
                  {project.category} Project
                </motion.span>
                <motion.span
                  variants={staggerItem}
                  className={`backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold ${getStatusColor(project.status)}`}
                >
                  {project.status.replace("-", " ").toUpperCase()}
                </motion.span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight mb-4 sm:mb-6"
              >
                {project.title.toUpperCase()}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-base sm:text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto line-clamp-3"
              >
                {project.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-3 sm:gap-4"
              >
                <span className="bg-accent/30 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-medium flex items-center gap-2">
                  <FaDollarSign /> {project.budget}
                </span>
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-medium flex items-center gap-2">
                  <FaClock /> {project.duration}
                </span>
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-medium flex items-center gap-2">
                  <FaMapMarkerAlt /> {project.location}
                </span>
              </motion.div>
              {project.progress !== undefined && project.progress < 100 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 max-w-md mx-auto"
                >
                  <div className="flex justify-between text-white/80 text-sm mb-2">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-accent"
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
          {hasImages && totalImages > 1 && (
            <>
              <motion.button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center z-20 text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaChevronLeft />
              </motion.button>
              <motion.button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center z-20 text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaChevronRight />
              </motion.button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium z-20">
                {selectedImage + 1} / {totalImages}
              </div>
            </>
          )}
        </motion.div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="font-bebas text-3xl sm:text-4xl text-text-primary tracking-tight">PROJECT OVERVIEW</h2>
                <span className="inline-flex px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold">
                  {project.location.split(",")[0]}
                </span>
              </div>
              <p className="text-lg text-text-muted leading-relaxed mb-8">{project.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: FaUser, label: "Client", value: project.client },
                  { icon: FaCalendar, label: "Timeline", value: `${project.startDate || ""} - ${project.completionDate || ""}`.trim() || "N/A" },
                  { icon: FaDollarSign, label: "Project Value", value: project.budget },
                  { icon: FaClock, label: "Duration", value: project.duration },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-4 bg-card p-4 sm:p-5 rounded-xl border border-border"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <item.icon className="text-accent text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">{item.label}</p>
                      <p className="font-semibold text-text-primary">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="bg-accent/5 border border-accent/20 rounded-xl p-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bebas text-xl text-text-primary mb-3 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-accent" /> Project Location
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-card px-4 py-2 rounded-lg text-text-primary border border-border font-medium">
                    {project.location}
                  </span>
                  <span className={`px-4 py-2 rounded-lg font-medium ${getStatusColorLight(project.status)}`}>
                    {project.status.replace("-", " ").toUpperCase()}
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Thumbnails */}
            {hasImages && totalImages > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bebas text-2xl text-text-primary mb-6">PROJECT GALLERY</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {project.images.map((img, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`relative h-24 sm:h-32 rounded-xl overflow-hidden border-2 transition-colors ${
                        selectedImage === i ? "border-accent ring-2 ring-accent/30" : "border-border hover:border-accent/50"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Image src={img} alt={`${project.title} ${i + 1}`} fill className="object-cover" sizes="25vw" />
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
                <h3 className="font-bebas text-2xl text-text-primary mb-6">SERVICES PROVIDED</h3>
                <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border">
                  <ul className="space-y-4">
                    {project.services.map((s, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <FaCheckCircle className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-text-primary">{s}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {/* Specs */}
            {project.specifications && Object.keys(project.specifications).length > 0 && (
              <motion.div
                className="bg-accent-secondary/5 rounded-2xl p-6 sm:p-8 border border-border"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bebas text-2xl text-text-primary mb-6">PROJECT SPECIFICATIONS</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(project.specifications).map(([key, value], i) => (
                    <motion.div
                      key={key}
                      className="bg-card p-6 rounded-xl border border-border"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <p className="text-sm text-text-muted mb-2 capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                      <p className="text-xl font-bold text-text-primary">{value}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Before/After */}
            {project.beforeAfter && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bebas text-2xl text-text-primary mb-6 flex items-center gap-2">
                  <FaImages className="text-accent" /> Before & After
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div className="bg-card rounded-xl overflow-hidden border border-border" whileHover={{ y: -4 }}>
                    <div className="text-center font-semibold text-text-muted py-3 border-b border-border">Before</div>
                    <div className="relative h-64">
                      <Image src={project.beforeAfter.before} alt="Before" fill className="object-cover" />
                    </div>
                  </motion.div>
                  <motion.div className="bg-card rounded-xl overflow-hidden border border-border" whileHover={{ y: -4 }}>
                    <div className="text-center font-semibold text-text-muted py-3 border-b border-border">After</div>
                    <div className="relative h-64">
                      <Image src={project.beforeAfter.after} alt="After" fill className="object-cover" />
                    </div>
                  </motion.div>
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
                <h3 className="font-bebas text-2xl text-text-primary mb-6">Challenges & Solutions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.challenges?.length > 0 && (
                    <div className="bg-card rounded-xl p-6 border border-border">
                      <h4 className="font-bold text-text-primary mb-4">Project Challenges</h4>
                      <ul className="space-y-2">
                        {project.challenges.map((c, i) => (
                          <li key={i} className="flex items-start gap-2 text-text-muted">
                            <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.solutions?.length > 0 && (
                    <div className="bg-card rounded-xl p-6 border border-border">
                      <h4 className="font-bold text-text-primary mb-4">Our Solutions</h4>
                      <ul className="space-y-2">
                        {project.solutions.map((s, i) => (
                          <li key={i} className="flex items-start gap-2 text-text-muted">
                            <FaCheckCircle className="text-emerald-500 mt-0.5 flex-shrink-0" />
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
                <h3 className="font-bebas text-2xl text-text-primary mb-6 flex items-center gap-2">
                  <FaStar className="text-accent" /> Client Feedback
                </h3>
                <div className="space-y-6">
                  {project.testimonials.map((t, i) => (
                    <motion.div
                      key={i}
                      className="bg-card rounded-xl p-6 sm:p-8 border-l-4 border-accent"
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, j) => (
                          <FaStar key={j} className={j < (t.rating || 5) ? "text-accent" : "text-border"} />
                        ))}
                      </div>
                      <p className="text-text-muted italic mb-4">"{t.text}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <span className="font-semibold text-accent">
                            {t.author?.split(" ").map((n) => n[0]).join("") || "?"}
                          </span>
                        </div>
                        <div>
                          <p className="font-bold text-text-primary">{t.author}</p>
                          <p className="text-sm text-text-muted">{project.location}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <motion.div
                className="bg-gradient-to-br from-primary to-surface-dark rounded-2xl p-8 text-white"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <h3 className="font-bebas text-2xl mb-6">LIKE THIS PROJECT?</h3>
                <p className="text-white/80 mb-8">Get a free quote for your own tiling project in Brisbane</p>
                <Link href="/contact">
                  <motion.span
                    className="block w-full bg-accent text-white text-center font-semibold py-4 px-6 rounded-xl mb-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request Similar Quote
                  </motion.span>
                </Link>
                <div className="text-center">
                  <p className="text-white/60 text-sm mb-1">Or call us</p>
                  <a href="tel:+61300000000" className="text-white text-xl font-bold hover:text-accent transition-colors">
                    (03) 0000 0000
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="bg-card rounded-2xl p-8 border border-border"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="font-bebas text-xl text-text-primary mb-6">PROJECT SUMMARY</h4>
                <div className="space-y-4">
                  {[
                    { icon: FaBuilding, label: "Project Type", value: project.category },
                    { icon: FaClock, label: "Duration", value: project.duration },
                    { icon: FaDollarSign, label: "Project Value", value: project.budget },
                    { icon: FaMapMarkerAlt, label: "Location", value: project.location },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <item.icon className="text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-text-muted">{item.label}</p>
                        <p className="font-semibold text-text-primary capitalize">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {project.progress !== undefined && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-text-muted">Progress</span>
                      <span className="font-bold text-accent">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-accent"
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </div>
                )}
                <div className="mt-8 pt-8 border-t border-border">
                  <h5 className="font-bold text-text-primary mb-4">Why Choose Us</h5>
                  <ul className="space-y-2">
                    {["Local Brisbane Experts", "Quality Guaranteed", "On-Time Completion", "Premium Materials"].map(
                      (item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-text-muted">
                          <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </motion.div>

              {relatedProjects.length > 0 && (
                <motion.div
                  className="bg-card rounded-2xl p-8 border border-border"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="font-bebas text-xl text-text-primary mb-6">SIMILAR PROJECTS</h4>
                  <div className="space-y-4">
                    {relatedProjects.map((r) => (
                      <Link key={r.id} href={`/projects/${r.slug}`}>
                        <motion.div
                          className="flex gap-4 p-4 rounded-xl border border-border hover:border-accent/50 transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          {r.images?.[0] && (
                            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                              <Image src={r.images[0]} alt={r.title} fill className="object-cover" />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-text-primary truncate">{r.title}</p>
                            <p className="text-sm text-text-muted">{r.location}</p>
                            <p className="text-sm font-semibold text-accent">{r.budget}</p>
                          </div>
                          <FaArrowRight className="text-accent mt-2 flex-shrink-0" />
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 sm:mt-20 bg-gradient-to-r from-primary to-surface-dark rounded-2xl p-8 sm:p-12 text-center text-white"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-bebas text-3xl sm:text-4xl mb-6">READY TO START YOUR OWN PROJECT?</h3>
          <p className="text-white/90 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Contact us for a free quote on your {project.category} project in Brisbane.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <motion.span
                className="inline-block bg-accent text-white font-semibold py-4 px-8 rounded-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Your Free Quote
              </motion.span>
            </Link>
            <a
              href="tel:+61300000000"
              className="text-white font-semibold py-4 px-8 rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors"
            >
              Call: (03) 0000 0000
            </a>
          </div>
        </motion.div>

        {/* More Related */}
        {relatedProjects.length > 0 && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <h2 className="font-bebas text-2xl sm:text-3xl text-text-primary">
                MORE {project.category?.toUpperCase()} PROJECTS
              </h2>
              <Link
                href="/projects"
                className="text-accent hover:text-accent/80 font-medium flex items-center gap-2"
              >
                View All Projects <FaArrowRight className="text-sm" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((r, i) => (
                <motion.div
                  key={r.id}
                  onClick={() => router.push(`/projects/${r.slug}`)}
                  className="group bg-card rounded-2xl overflow-hidden border border-border cursor-pointer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  {r.images?.[0] && (
                    <div className="relative h-48 overflow-hidden">
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Image src={r.images[0]} alt={r.title} fill className="object-cover" />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                      <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-lg">
                        {r.location?.split(",")[0]}
                      </span>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-sm text-text-muted mb-4 line-clamp-2">{r.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-text-muted">{r.duration}</span>
                      <span className="font-semibold text-accent">{r.budget}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}
