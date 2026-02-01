"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaArrowRight,
  FaCheckCircle,
  FaSyncAlt,
  FaClock as FaClockIcon,
  FaPauseCircle,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaFilter,
  FaUser,
} from "react-icons/fa";
import {
  projects,
  projectCategories,
  projectStatuses,
  projectStats,
} from "../lib/projectData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, scale: 0.95 },
};

export default function ProjectList() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      setShowCategoryDropdown(false);
      setShowStatusDropdown(false);
    };
    if (showCategoryDropdown || showStatusDropdown) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [showCategoryDropdown, showStatusDropdown]);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "all" || project.status === selectedStatus;
    const matchesSearch =
      searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

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

  const activeFiltersCount =
    (selectedCategory !== "all" ? 1 : 0) +
    (selectedStatus !== "all" ? 1 : 0) +
    (searchTerm !== "" ? 1 : 0);

  const clearAllFilters = () => {
    setSelectedCategory("all");
    setSelectedStatus("all");
    setSearchTerm("");
  };

  const getCategoryName = () =>
    selectedCategory === "all"
      ? "All Projects"
      : projectCategories.find((c) => c.id === selectedCategory)?.name || "All Projects";

  const getStatusName = () =>
    selectedStatus === "all"
      ? "All Status"
      : projectStatuses.find((s) => s.id === selectedStatus)?.name || "All Status";

  const stats = [
    { value: projectStats.totalProjects, label: "Total Projects", color: "text-text-primary" },
    { value: projectStats.completed, label: "Completed", color: "text-emerald-600" },
    { value: projectStats.inProgress, label: "In Progress", color: "text-accent" },
    { value: projectStats.totalValue, label: "Total Value", color: "text-accent" },
    { value: projectStats.upcoming, label: "Upcoming", color: "text-amber-600" },
    { value: `${projectStats.averageRating}/5`, label: "Rating", color: "text-accent" },
  ];

  return (
    <main className="w-full min-h-screen bg-background overflow-hidden">
      {/* Hero */}
      <section className="relative w-full py-4 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative h-[35vh] sm:h-[40vh] md:h-[50vh] overflow-hidden rounded-2xl sm:rounded-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-surface-dark/90 to-primary/95 z-10" />
          <Image
            src="https://plus.unsplash.com/premium_photo-1769110817898-2a2b8c989823?w=1200&auto=format&fit=crop&q=60"
            alt="Our Brisbane Projects"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6">
            <div className="text-center max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-4 sm:mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-white text-sm font-medium">Brisbane Portfolio</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight mb-4 sm:mb-6"
              >
                OUR <span className="text-accent">BRISBANE</span> PROJECTS
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto"
              >
                Browse our portfolio of completed and ongoing tiling projects across Brisbane.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-wrap justify-center gap-3 sm:gap-4"
              >
                {[
                  `${projectStats.totalProjects} Projects`,
                  `${projectStats.completed} Completed`,
                  "Brisbane Wide",
                ].map((badge) => (
                  <motion.span
                    key={badge}
                    className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg text-white text-sm font-medium border border-white/20"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {badge}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Stats */}
        <motion.div
          className="mb-8 sm:mb-10 bg-card rounded-2xl p-6 border border-border shadow-soft"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="font-bebas text-xl sm:text-2xl text-text-primary tracking-tight mb-6">
            PROJECT <span className="text-primary">STATISTICS</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 bg-background rounded-xl border border-border"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
                whileHover={{ y: -4 }}
              >
                <div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-text-muted mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Filter Toggle */}
        <motion.div
          className="md:hidden mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="w-full flex items-center justify-between bg-card border border-border rounded-xl px-4 py-3.5 shadow-sm"
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <FaFilter className="text-accent" />
              <span className="font-semibold text-text-primary">Filter Projects</span>
              {activeFiltersCount > 0 && (
                <motion.span
                  className="bg-accent text-white text-xs font-bold px-2 py-0.5 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  {activeFiltersCount}
                </motion.span>
              )}
            </div>
            {showMobileFilters ? <FaChevronUp className="text-text-muted" /> : <FaChevronDown className="text-text-muted" />}
          </motion.button>
        </motion.div>

        {/* Filters - on md+ always visible; on mobile collapsible */}
        <div
          className={`mb-8 overflow-hidden transition-all duration-300 ${
            showMobileFilters ? "max-h-[1200px] opacity-100" : "max-h-0 md:max-h-[1200px] opacity-0 md:opacity-100"
          }`}
        >
          <div className="md:block bg-card rounded-2xl p-6 border border-border mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h2 className="hidden md:block font-bebas text-2xl text-text-primary">Filter Projects</h2>
              <div className="relative w-full sm:w-64">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 bg-background border border-border rounded-xl text-text-primary placeholder-text-muted focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                />
                {searchTerm && (
                  <button onClick={() => setSearchTerm("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary">
                    <FaTimes className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {activeFiltersCount > 0 && (
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-text-muted">{activeFiltersCount} filter(s) active</span>
                <motion.button
                  onClick={clearAllFilters}
                  className="text-sm text-accent hover:text-accent/80 font-semibold flex items-center gap-1"
                  whileHover={{ x: 4 }}
                >
                  <FaTimes className="w-3 h-3" /> Clear all
                </motion.button>
              </div>
            )}

            {/* Category */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-text-muted mb-3">Category</h3>
              <div className="relative sm:hidden">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowCategoryDropdown(!showCategoryDropdown);
                    setShowStatusDropdown(false);
                  }}
                  className="w-full flex items-center justify-between bg-background border border-border rounded-xl px-4 py-3 text-left"
                >
                  <span className={selectedCategory !== "all" ? "text-accent font-medium" : "text-text-primary"}>{getCategoryName()}</span>
                  <FaChevronDown className={`text-text-muted transition-transform ${showCategoryDropdown ? "rotate-180" : ""}`} />
                </button>
                {showCategoryDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-xl z-30 overflow-hidden"
                  >
                    {[{ id: "all", name: "All Projects" }, ...projectCategories].map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setShowCategoryDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm hover:bg-background transition-colors ${selectedCategory === cat.id ? "bg-accent/10 text-accent font-medium" : ""}`}
                      >
                        {cat.name} {cat.count !== undefined ? `(${cat.count})` : ""}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
              <div className="hidden sm:flex flex-wrap gap-2">
                <FilterButton
                  active={selectedCategory === "all"}
                  onClick={() => setSelectedCategory("all")}
                  label="All Projects"
                />
                {projectCategories.map((cat) => (
                  <FilterButton
                    key={cat.id}
                    active={selectedCategory === cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    label={`${cat.name} (${cat.count})`}
                  />
                ))}
              </div>
            </div>

            {/* Status */}
            <div>
              <h3 className="text-sm font-medium text-text-muted mb-3">Status</h3>
              <div className="relative sm:hidden">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowStatusDropdown(!showStatusDropdown);
                    setShowCategoryDropdown(false);
                  }}
                  className="w-full flex items-center justify-between bg-background border border-border rounded-xl px-4 py-3 text-left"
                >
                  <div className="flex items-center gap-2">
                    {selectedStatus !== "all" && getStatusIcon(selectedStatus)}
                    <span className={selectedStatus !== "all" ? "text-accent font-medium" : "text-text-primary"}>{getStatusName()}</span>
                  </div>
                  <FaChevronDown className={`text-text-muted transition-transform ${showStatusDropdown ? "rotate-180" : ""}`} />
                </button>
                {showStatusDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-xl z-30 overflow-hidden"
                  >
                    {[{ id: "all", name: "All Status" }, ...projectStatuses].map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          setSelectedStatus(s.id);
                          setShowStatusDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm hover:bg-background flex items-center gap-2 ${selectedStatus === s.id ? "bg-accent/10 text-accent font-medium" : ""}`}
                      >
                        {s.id !== "all" && getStatusIcon(s.id)} {s.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
              <div className="hidden sm:flex flex-wrap gap-2">
                <FilterButton active={selectedStatus === "all"} onClick={() => setSelectedStatus("all")} label="All Status" />
                {projectStatuses.map((s) => (
                  <FilterButton
                    key={s.id}
                    active={selectedStatus === s.id}
                    onClick={() => setSelectedStatus(s.id)}
                    label={s.name}
                    icon={getStatusIcon(s.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 bg-card rounded-2xl border border-border"
            >
              <motion.div className="text-5xl mb-4" animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                🔍
              </motion.div>
              <h3 className="text-xl font-bold text-text-primary mb-2">No projects found</h3>
              <p className="text-text-muted mb-6 max-w-md mx-auto">
                Try adjusting your filters or search terms.
              </p>
              <motion.button
                onClick={clearAllFilters}
                className="bg-accent text-white font-semibold py-3 px-6 rounded-xl hover:bg-accent/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Clear All Filters
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    layout
                    exit="exit"
                    className="group bg-card rounded-2xl overflow-hidden border border-border shadow-soft cursor-pointer"
                    onClick={() => router.push(`/projects/${project.slug}`)}
                  >
                    <motion.div
                      className="relative h-40 sm:h-44 md:h-48 overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent z-10" />
                      <div className="absolute top-3 left-3 z-20">
                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-lg">
                          {project.location.split(",")[0]}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 z-20">
                        <span className={`px-2 py-1 rounded-lg text-xs font-bold ${getStatusColor(project.status)}`}>
                          {project.status.replace("-", " ").toUpperCase()}
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

                    <div className="p-5">
                      <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors line-clamp-1 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-text-muted line-clamp-2 mb-4">{project.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-xs text-text-muted">Budget</div>
                          <div className="font-bold text-accent">{project.budget}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-text-muted">Duration</div>
                          <div className="text-sm font-medium text-text-primary">{project.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <FaUser className="text-accent text-sm" />
                        <span className="text-sm text-text-muted truncate">{project.client}</span>
                      </div>
                      {project.progress !== undefined && project.progress < 100 && (
                        <div className="mb-4">
                          <div className="flex justify-between text-xs text-text-muted mb-1">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                            <motion.div
                              className="h-full rounded-full bg-accent"
                              initial={{ width: 0 }}
                              animate={{ width: `${project.progress}%` }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      )}
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/projects/${project.slug}`);
                        }}
                        className="w-full flex items-center justify-center gap-2 bg-primary text-white text-sm font-semibold py-2.5 rounded-xl"
                        whileHover={{ backgroundColor: "#2563eb" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Project <FaArrowRight className="text-xs" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {filteredProjects.length > 0 && (
          <motion.p
            className="mt-8 text-center text-sm text-text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Showing <span className="font-bold text-accent">{filteredProjects.length}</span> of {projects.length} projects
          </motion.p>
        )}
      </section>
    </main>
  );
}

function FilterButton({ active, onClick, label, icon }) {
  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
        active ? "bg-accent text-white" : "bg-background text-text-primary hover:bg-border border border-border"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon}
      {label}
    </motion.button>
  );
}
