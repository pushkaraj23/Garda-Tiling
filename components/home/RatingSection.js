"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function RatingSection() {
  return (
    <section className="w-full bg-linear-to-t from-card via-background to-background py-12 sm:py-16 md:py-22 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* RATING HEADER */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-transparent via-accent-secondary/75 to-transparent w-full sm:w-auto sm:min-w-md md:min-w-xl lg:min-w-3xl justify-center py-2 px-4 sm:px-6 rounded-lg">
            <span className="font-bebas text-text-primary text-4xl sm:text-5xl tracking-wide">
              <span className="text-yellow-500 text-shadow-sm">★</span> 4.9 / 5 <span className="text-yellow-500 text-shadow-sm">★</span>
              <span className="block text-2xl text-text-primary">
                AVERAGE GOOGLE RATING
              </span>
            </span>
          </div>

          <p className="mt-8 text-sm sm:text-md font-manrope text-text-muted px-4 sm:px-0">
            Based on 120+ Completed Projects across City & Surrounding Suburbs
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-7"
        >
          {[
            {
              img: "/home/Rating.svg",
              title: "10+ Years Experience",
              desc: "Serving residential and commercial clients with proven workmanship",
            },
            {
              img: "/home/WaterProof.svg",
              title: "Licensed & Insured",
              desc: "Fully compliant with Australian standards and safety requirements",
            },
            {
              img: "/home/Workmanship.svg",
              title: "Waterproofing Certified",
              desc: "All waterproofing carried out as per AS 3740 guidelines",
            },
            {
              img: "/home/License.svg",
              title: "Workmanship Warranty",
              desc: "Quality workmanship backed by a written warranty",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={item}
              className="
                group bg-card rounded-2xl sm:rounded-3xl
                px-6 py-8
                border border-border
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:shadow-xl hover:border-accent
                text-center sm:text-left
              "
            >
              {/* ICON */}
              <div className="mb-4 sm:mb-5 md:mb-6 transition-transform duration-500 ease-out group-hover:scale-110 flex justify-center sm:justify-start">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                />
              </div>

              {/* TITLE */}
              <h3
                className="
                  text-2xl
                  font-bebas font-bold uppercase
                  text-text-primary
                  mb-2 sm:mb-3 tracking-wide
                  transition-all duration-500
                "
              >
                {card.title}
              </h3>

              {/* DESC */}
              <p
                className="
                  font-manrope text-sm sm:text-md
                  leading-relaxed
                  text-text-muted
                "
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
