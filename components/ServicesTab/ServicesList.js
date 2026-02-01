"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { servicesData } from "../lib/servicesData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ServicesList() {
  return (
    <main className="w-full min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full py-4 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative h-[35vh] sm:h-[40vh] md:h-[50vh] overflow-hidden rounded-2xl sm:rounded-3xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-surface-dark/90 to-primary/95 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1769028715040-16cb345ced84?w=1200&auto=format&fit=crop&q=60"
            alt="Professional Tiling Services Brisbane"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6">
            <div className="text-center max-w-4xl">
              <motion.div
                custom={0}
                variants={heroVariants}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-4 sm:mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-white text-sm font-medium">Serving Brisbane & Surrounds</span>
              </motion.div>
              <motion.h1
                custom={1}
                variants={heroVariants}
                className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight mb-4 sm:mb-6"
              >
                PROFESSIONAL <span className="text-accent">TILING</span> & RENOVATION SERVICES
              </motion.h1>
              <motion.p
                custom={2}
                variants={heroVariants}
                className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed"
              >
                Expert tiling, waterproofing, and renovation services across Brisbane.
                Fully licensed and insured with Australian standards compliance.
              </motion.p>
              <motion.div
                custom={3}
                variants={heroVariants}
                className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
              >
                {["10+ Years Experience", "Licensed & Insured", "Free Quotes"].map((badge, i) => (
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

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight">
                OUR <span className="text-primary">SERVICES</span>
              </h2>
              <p className="mt-3 text-text-muted text-base sm:text-lg max-w-2xl">
                Browse our comprehensive range of professional tiling and renovation services across Brisbane.
              </p>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
              Brisbane Wide
            </span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {servicesData.map((service, index) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Link href={`/services/${service.slug}`} className="block h-full group">
                <motion.article
                  className="h-full bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-xl transition-shadow duration-300 flex flex-col"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                >
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent z-10" />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                        Brisbane
                      </span>
                    </div>
                    <motion.div
                      className="relative w-full h-full"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Image
                        src={service.mainImage}
                        alt={`${service.title} - Brisbane`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </motion.div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-3xl">{service.icon}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300 line-clamp-1">
                          {service.title}
                        </h3>
                        <div className="flex items-center gap-2 flex-wrap mt-1">
                          <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">
                            {service.duration}
                          </span>
                          <span className="text-xs text-text-muted">From {service.pricing}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-text-muted mb-6 line-clamp-3 flex-grow">
                      {service.shortDesc}
                    </p>

                    <div className="pt-4 border-t border-border mt-auto">
                      <motion.div
                        className="flex items-center justify-between"
                        whileHover="hover"
                        variants={{
                          hover: { x: 4 },
                        }}
                      >
                        <span className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">
                          View Details
                        </span>
                        <motion.span
                          variants={{ hover: { x: 4 } }}
                          className="text-accent"
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          className="mt-16 sm:mt-20 lg:mt-24 bg-accent-secondary/5 rounded-2xl p-8 sm:p-10 lg:p-12 border border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="font-bebas text-2xl sm:text-3xl text-text-primary tracking-tight mb-8">
            WHY CHOOSE <span className="text-primary">OUR SERVICES</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                icon: "🏆",
                title: "Expert Craftsmanship",
                desc: "Years of experience delivering quality tiling work across Brisbane",
              },
              {
                icon: "📋",
                title: "Fully Certified",
                desc: "Licensed, insured, and compliant with Australian standards",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-card p-6 rounded-xl border border-border shadow-sm"
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-2">{item.title}</h4>
                    <p className="text-sm text-text-muted">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
