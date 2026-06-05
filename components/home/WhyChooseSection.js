"use client";

import { motion } from "framer-motion";
import { useSiteSections } from "@/lib/cms/useSiteSections";
import { getSectionContent } from "@/lib/cms/sectionHelpers";
import { WHY_CHOOSE_DEFAULTS } from "@/lib/cms/defaults/homeDefaults";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function normalizeCards(raw, fallback) {
  if (!Array.isArray(raw)) return fallback;
  const mapped = raw
    .map((card) => ({
      title: card.title || card.name || "",
      text: card.text || card.desc || card.description || "",
      img: card.img || card.image || card.src || "",
      className: card.className || card.class_name || "col-span-12 lg:col-span-6 h-65",
    }))
    .filter((c) => c.title && c.text);
  return mapped.length ? mapped : fallback;
}

export default function WhyChooseSection() {
  const { getSection } = useSiteSections("home");
  const c = getSectionContent(getSection, "why-choose", WHY_CHOOSE_DEFAULTS);
  const headline = c.headline || WHY_CHOOSE_DEFAULTS.headline;
  const description = c.description || c.text || WHY_CHOOSE_DEFAULTS.description;
  const cards = normalizeCards(c.cards, WHY_CHOOSE_DEFAULTS.cards);

  return (
    <section className="w-full bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-14 max-w-3xl"
        >
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-tight text-primary">
            {headline.includes("GARDA") ? (
              <>
                WHY CHOOSE <span className="text-text-primary">GARDA</span> TILING
              </>
            ) : (
              headline
            )}
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <div className="h-12 w-2 bg-accent-secondary rounded-xl" />
            <p className="font-manrope text-text-muted text-sm sm:text-base">{description}</p>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-12 gap-6"
        >
          {cards.map((card, index) => (
            <AnimatedCard
              key={`${card.title}-${index}`}
              variants={item}
              className={card.className}
              img={card.img}
              title={card.title}
              text={card.text}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AnimatedCard({ img, title, text, className, variants }) {
  return (
    <motion.div
      variants={variants}
      className={`relative overflow-hidden rounded-2xl group ${className} transition-all duration-500 hover:-translate-y-2 hover:shadow-xl`}
    >
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6 z-10">
        <h3 className="font-bebas text-white text-xl tracking-wide mb-2">{title}</h3>
        <p className="font-manrope text-sm text-white/90 leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
}
