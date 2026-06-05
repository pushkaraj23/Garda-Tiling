"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import CmsImage from "@/components/common/CmsImage";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  Clock,
  PauseCircle,
  User,
  MapPin,
  Layers,
} from "lucide-react";
import { useProjects } from "@/lib/cms/useProjects";
import { projectDetailPath } from "@/lib/cms/paths";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProjectList() {
  const { projects, loading } = useProjects();
  const router = useRouter();

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-[#ffffff] flex items-center justify-center pt-24">
        <p className="font-manrope text-text-muted text-sm">Loading projects…</p>
      </div>
    );
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 size={13} className="text-emerald-400" />;
      case "in-progress":
        return (
          <RefreshCw
            size={13}
            className="text-[#2563eb] animate-spin"
            style={{ animationDuration: "3s" }}
          />
        );
      case "upcoming":
        return <Clock size={13} className="text-amber-400" />;
      case "on-hold":
        return <PauseCircle size={13} className="text-orange-400" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500/20 text-emerald-100 border-emerald-500/30";
      case "in-progress":
        return "bg-[#2563eb]/20 text-white border-[#2563eb]/40";
      case "upcoming":
        return "bg-amber-500/20 text-amber-100 border-amber-500/30";
      case "on-hold":
        return "bg-orange-500/20 text-orange-100 border-orange-500/30";
      default:
        return "bg-white/10 text-white border-white/20";
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#ffffff] overflow-x-hidden pt-24 sm:pt-28">
      {/* ── Hero ── */}
      <section className="relative w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <motion.div
          className="relative h-[45vh] sm:h-[50vh] md:h-[55vh] overflow-hidden rounded-3xl"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#1f2933] to-[#111827] z-10" />
          <div
            className="absolute inset-0 z-[5] opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(37,99,235,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(37,99,235,0.15) 0%, transparent 50%)",
            }}
          />
          {/* Floating decorative shapes */}
          <div
            className="absolute top-8 right-16 w-32 h-32 rounded-full opacity-10 z-[6]"
            style={{
              background: "radial-gradient(circle, rgba(37,99,235,0.6) 0%, transparent 70%)",
              animation: "floatBg1 6s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-12 left-24 w-20 h-20 rounded-full opacity-10 z-[6]"
            style={{
              background: "radial-gradient(circle, rgba(37,99,235,0.6) 0%, transparent 70%)",
              animation: "floatBg2 7s ease-in-out infinite",
            }}
          />
          <Image
            src="https://plus.unsplash.com/premium_photo-1769110817898-2a2b8c989823?w=1400&auto=format&fit=crop&q=70"
            alt="Our Projects"
            fill
            className="object-cover mix-blend-overlay"
            priority
            sizes="100vw"
          />

          {/* Hero content */}
          <div className="relative z-20 h-full flex items-center justify-center px-6 sm:px-8">
            <div className="text-center max-w-4xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-xl border border-[#2563eb]/30 px-5 py-2.5 rounded-full mb-6"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#2563eb", boxShadow: "0 0 8px rgba(37,99,235,0.6)" }}
                />
                <span className="text-white/90 text-sm font-medium tracking-wide font-manrope">
                  Brisbane Portfolio
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight mb-4 leading-none"
              >
                OUR{" "}
                <span
                  style={{
                    color: "#2563eb",
                    textShadow: "0 0 30px rgba(37,99,235,0.4)",
                  }}
                >
                  PROJECTS
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl text-white/75 max-w-2xl mx-auto font-manrope font-light leading-relaxed mb-8"
              >
                Award-winning tiling and waterproofing projects across Brisbane
              </motion.p>

              {/* Stat badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-3"
              >
                {[
                  { icon: CheckCircle2, label: "Completed Projects" },
                  { icon: Layers, label: "Premium Finishes" },
                  { icon: MapPin, label: "Brisbane Wide" },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/15 px-5 py-2.5 rounded-xl text-white/85 text-sm font-medium font-manrope"
                  >
                    <Icon size={14} className="opacity-70" />
                    {label}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Section header */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-widest text-[#2563eb] uppercase font-manrope mb-3">
            Our Work
          </p>
          <h2 className="font-bebas text-4xl sm:text-5xl text-[#111827] tracking-tight">
            FEATURED{" "}
            <span
              className="animated-underline"
              style={{ color: "#2563eb" }}
            >
              PROJECTS
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              className="group bg-white rounded-3xl overflow-hidden border border-[#e5e7eb] cursor-pointer project-card-glow"
              style={{
                transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                boxShadow: "0 2px 8px rgba(17,24,39,0.08), 0 12px 32px rgba(31,41,51,0.06)",
              }}
              onClick={() => router.push(projectDetailPath(project.slug))}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(37,99,235,0.15), 0 8px 16px rgba(17,24,39,0.1)",
              }}
            >
              {/* Image container */}
              <div className="relative h-56 sm:h-64 overflow-hidden image-zoom-container">
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-[#1f2933]/20 to-transparent z-10" />

                {/* Location badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-xl border border-white/20 font-manrope">
                    <MapPin size={10} />
                    {project.location?.split(",")[0] || project.location}
                  </span>
                </div>

                {/* Status badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border backdrop-blur-sm font-manrope ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {getStatusIcon(project.status)}
                    {project.status.replace("-", " ").toUpperCase()}
                  </span>
                </div>

                {project.images?.length > 0 ? (
                  <CmsImage
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700"
                    style={{ transformOrigin: "center" }}
                  />
                ) : (
                  <div className="w-full h-full bg-[#64748b]/10 flex items-center justify-center">
                    <Layers size={40} className="text-[#6b7280]" />
                  </div>
                )}

                {/* Shimmer overlay */}
                <div
                  className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)",
                    transition: "opacity 0.5s ease",
                    backgroundSize: "200% 100%",
                  }}
                />
              </div>

              {/* Card body */}
              <div className="p-6 sm:p-7">
                <h3 className="text-xl sm:text-2xl font-bold text-[#111827] group-hover:text-[#2563eb] transition-colors duration-300 line-clamp-1 mb-2 font-manrope">
                  {project.title}
                </h3>
                <p className="text-[#6b7280] text-sm line-clamp-2 mb-5 leading-relaxed font-manrope">
                  {project.description}
                </p>

                {/* Budget / Duration */}
                <div className="flex items-center justify-between mb-5 pb-5 border-b border-[#e5e7eb]">
                  <div>
                    <div className="text-xs text-[#6b7280] uppercase tracking-wider mb-0.5 font-manrope">
                      Budget
                    </div>
                    <div
                      className="font-bold text-lg font-manrope"
                      style={{ color: "#2563eb" }}
                    >
                      {project.budget}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-[#6b7280] uppercase tracking-wider mb-0.5 font-manrope">
                      Duration
                    </div>
                    <div className="font-semibold text-[#111827] font-manrope">
                      {project.duration}
                    </div>
                  </div>
                </div>

                {/* Client + CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#2563eb]/10 flex items-center justify-center">
                      <User size={14} className="text-[#2563eb]" />
                    </div>
                    <span className="text-sm text-[#6b7280] truncate max-w-[130px] font-manrope">
                      {project.client}
                    </span>
                  </div>
                  <motion.span
                    className="flex items-center gap-1.5 font-semibold text-sm font-manrope"
                    style={{ color: "#2563eb" }}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    View Project <ArrowRight size={13} />
                  </motion.span>
                </div>

                {/* Progress bar */}
                {project.progress !== undefined && project.progress < 100 && (
                  <div className="mt-5 pt-5 border-t border-[#e5e7eb]">
                    <div className="flex justify-between text-xs text-[#6b7280] mb-2 font-manrope">
                      <span>Progress</span>
                      <span
                        className="font-bold"
                        style={{ color: "#2563eb" }}
                      >
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
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  );
}