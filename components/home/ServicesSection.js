"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  const services = [
    {
      title: "Bathroom Tiling",
      subtitle:
        "Precision bathroom tiling with clean finishes and long-term durability",
      img: "https://images.unsplash.com/photo-1722152753039-002fc04c4910?w=800&auto=format&fit=crop&q=60",
      path: "/services/bathroom-tiling",
    },
    {
      title: "Waterproofing Solutions",
      subtitle:
        "Certified waterproofing systems compliant with Australian standards",
      img: "https://plus.unsplash.com/premium_photo-1675616575514-5b06f6d74673?w=800&auto=format&fit=crop&q=60",
      path: "/services/waterproofing",
    },
    {
      title: "Outdoor & Balcony Tiling",
      subtitle:
        "Weather-resistant tiling for balconies, patios, and outdoor areas",
      img: "https://images.unsplash.com/photo-1763485955997-a9dbbcd91067?w=800&auto=format&fit=crop&q=60",
      path: "/services/outdoor-balcony-tiling",
    },
    {
      title: "Commercial Tiling",
      subtitle:
        "High-performance tiling solutions for commercial and retail spaces",
      img: "https://images.unsplash.com/photo-1722650269587-55ea04f0dca3?w=800&auto=format&fit=crop&q=60",
      path: "/services/commercial-tiling",
    },
    {
      title: "Kitchen Splashbacks",
      subtitle: "Stylish and easy-to-maintain splashback installations",
      img: "https://images.unsplash.com/photo-1763485956229-0541a80bcec9?w=800&auto=format&fit=crop&q=60",
      path: "/services/kitchen-splashbacks",
    },
    {
      title: "Laundry & Wet Areas",
      subtitle:
        "Functional and moisture-safe tiling for laundries and wet zones",
      img: "https://images.unsplash.com/photo-1748680137039-fd8873e5bd48?w=800&auto=format&fit=crop&q=60",
      path: "/services/laundry-wet-areas",
    },
    {
      title: "Tile Repairs & Renovations",
      subtitle:
        "Tile repairs, replacements, and renovation upgrades done right",
      img: "https://images.unsplash.com/photo-1722942625138-d33a2b88a594?w=800&auto=format&fit=crop&q=60",
      path: "/services/tile-repairs-renovations",
    },
    {
      title: "Custom Tiling Projects",
      subtitle: "Bespoke tiling solutions tailored to your design vision",
      img: "https://images.unsplash.com/photo-1691036365036-71da57ac5919?w=800&auto=format&fit=crop&q=60",
      path: "/services/custom-tiling-projects",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 px-4 md:px-8 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/home/servicesBg.svg"
          alt="Tiling Services Background"
          className="w-full h-full blur-md object-cover"
        />
        <div className="absolute inset-0 bg-surface-dark/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-bebas text-white text-3xl tracking-wide sm:text-4xl lg:text-5xl tracking-tight mb-4">
            OUR TILING & WATERPROOFING SERVICES
          </h2>
          <p className="font-manrope text-background/60 font-thin max-w-2xl mx-auto text-sm sm:text-base">
            Professional tiling solutions for bathrooms, outdoor spaces, and wet
            areas — delivered with precision, compliance, and long-lasting
            quality.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="
                group relative overflow-hidden
                rounded-2xl
                aspect-[4/5]
                bg-card
                shadow-lg
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-2xl
              "
            >
              {/* IMAGE */}
              <img
                src={service.img}
                alt={service.title}
                className="
                  absolute inset-0 w-full h-full object-cover
                  transition-transform duration-700
                  group-hover:scale-105
                "
              />

              {/* OVERLAY */}
              <div
                className="
                absolute inset-0
                bg-gradient-to-t
                from-black/60 via-black/20 to-transparent
              "
              />

              {/* TITLE */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <h3
                  className="
                  font-bebas text-white
                  text-3xl md:text-xl tracking-wide
                "
                >
                  {service.title}
                </h3>
                <p
                  className="
                  font-manrope text-sm md:text-xs text-white/75 tracking-wide
                "
                >
                  {service.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
