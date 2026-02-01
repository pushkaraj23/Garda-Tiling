"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle, FaSyncAlt, FaClock as FaClockIcon, FaPauseCircle, FaUser } from "react-icons/fa";
import { projects } from "../lib/projectData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
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
  const router = useRouter();

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <FaCheckCircle className="text-emerald-500" />;
      case "in-progress":
        return <FaSyncAlt className="text-accent animate-spin" style={{ animationDuration: "3s" }} />;
      case "upcoming":
        return <FaClockIcon className="text-amber-500" />;
      case "on-hold":
        return <FaPauseCircle className="text-orange-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500/20 text-emerald-100 border-emerald-500/30";
      case "in-progress":
        return "bg-accent/20 text-white border-accent/40";
      case "upcoming":
        return "bg-amber-500/20 text-amber-100 border-amber-500/30";
      case "on-hold":
        return "bg-orange-500/20 text-orange-100 border-orange-500/30";
      default:
        return "bg-white/10 text-white border-white/20";
    }
  };

  return (
    <main className="w-full min-h-screen bg-background overflow-hidden pt-24 sm:pt-28">
      {/* Hero */}
      <section className="relative w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <motion.div
          className="relative h-[45vh] sm:h-[50vh] md:h-[55vh] overflow-hidden rounded-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-surface-dark to-primary z-10" />
          <div
            className="absolute inset-0 z-[5] opacity-40"
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, rgba(37,99,235,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(31,41,51,0.4) 0%, transparent 50%)",
            }}
          />
          <Image
            src="https://plus.unsplash.com/premium_photo-1769110817898-2a2b8c989823?w=1400&auto=format&fit=crop&q=70"
            alt="Our Brisbane Projects"
            fill
            className="object-cover mix-blend-overlay"
            priority
            sizes="100vw"
          />
          <div className="relative z-20 h-full flex items-center justify-center px-6 sm:px-8">
            <div className="text-center max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/20 px-5 py-2.5 rounded-full mb-6"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-lg shadow-accent/50" />
                <span className="text-white/90 text-sm font-medium tracking-wide">Brisbane Portfolio</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight mb-6 leading-none"
              >
                OUR <span className="text-accent drop-shadow-lg">PROJECTS</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed"
              >
                Award-winning tiling and waterproofing projects across Brisbane
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-4 mt-8"
              >
                {["Completed Projects", "Premium Finishes", "Brisbane Wide"].map((badge) => (
                  <span
                    key={badge}
                    className="bg-white/5 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-xl text-white/90 text-sm font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              className="group bg-card rounded-3xl overflow-hidden border border-border/60 shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-500"
              onClick={() => router.push(`/projects/${project.slug}`)}
            >
              <motion.div
                className="relative h-56 sm:h-64 overflow-hidden"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent z-10" />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/10 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-xl border border-white/20">
                    {project.location?.split(",")[0] || project.location}
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-20">
                  <span
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border backdrop-blur-sm ${getStatusColor(project.status)}`}
                  >
                    <span className="flex items-center gap-1.5">
                      {getStatusIcon(project.status)}
                      {project.status.replace("-", " ").toUpperCase()}
                    </span>
                  </span>
                </div>
                {project.images?.length > 0 ? (
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-accent-secondary/10 flex items-center justify-center">
                    <span className="text-text-muted text-sm">No image</span>
                  </div>
                )}
              </motion.div>

              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300 line-clamp-1 mb-3">
                  {project.title}
                </h3>
                <p className="text-text-muted line-clamp-2 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
                  <div>
                    <div className="text-xs text-text-muted uppercase tracking-wider mb-0.5">Budget</div>
                    <div className="font-bold text-accent text-lg">{project.budget}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-text-muted uppercase tracking-wider mb-0.5">Duration</div>
                    <div className="font-semibold text-text-primary">{project.duration}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <FaUser className="text-accent text-xs" />
                    </div>
                    <span className="text-sm text-text-muted truncate max-w-[140px]">{project.client}</span>
                  </div>
                  <motion.span
                    className="flex items-center gap-2 text-accent font-semibold text-sm"
                    whileHover={{ x: 4 }}
                  >
                    View Project <FaArrowRight className="text-xs" />
                  </motion.span>
                </div>
                {project.progress !== undefined && project.progress < 100 && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex justify-between text-xs text-text-muted mb-2">
                      <span>Progress</span>
                      <span className="font-semibold">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-accent"
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
