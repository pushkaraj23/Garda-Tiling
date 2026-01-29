"use client";

import { useState } from "react";
import Link from "next/link";

const HOVER_MODE = "overlay"; // "overlay" | "cursor"

export default function RecentProjects() {
  const projects = [
    {
      title: "Bathroom Renovation",
      subtitle: "Modern tiling with waterproof finish",
      img: "https://images.unsplash.com/photo-1658370230118-24aa79649d6c",
      link: "/projects/bathroom-renovation",
    },
    {
      title: "Luxury Bathroom",
      subtitle: "Large format tiles & clean detailing",
      img: "https://images.unsplash.com/photo-1576698483491-8c43f0862543",
      link: "/projects/luxury-bathroom",
    },
    {
      title: "Pool & Wet Area",
      subtitle: "Slip-resistant outdoor tiling",
      img: "https://images.unsplash.com/photo-1742134131017-44d377a611b1",
      link: "/projects/pool-and-wet-area",
    },
    {
      title: "Marble Finish Bathroom",
      subtitle: "Premium stone-look tiling",
      img: "https://images.unsplash.com/photo-1618760918333-972c632d697c",
      link: "/projects/marble-finish",
    },
  ];

  const [cursor, setCursor] = useState({ x: 0, y: 0, content: null });

  return (
    <section className="w-full h-320 overflow-hidden relative bg-background overflow-x-hidden py-20 max-sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="relative mt-32 max-sm:mt-0 z-10 flex flex-col gap-8 max-w-md">
          {/* Heading */}
          <div>
            <h2 className="font-bebas text-4xl sm:text-6xl tracking-tight text-primary">
              RECENT <span className="text-text-primary">PROJECTS</span>
            </h2>

            <p className="mt-4 font-manrope text-text-muted">
              Take a look at some of our recently completed tiling and
              waterproofing projects across the city and surrounding suburbs.
            </p>
          </div>

          {/* TRUST POINTS */}
          <div className="grid grid-cols-2 gap-4">
            {[
              "Licensed & Insured",
              "AS 3740 Compliant",
              "Clean Finish Guaranteed",
              "On-Time Delivery",
            ].map((point, i) => (
              <div
                key={i}
                className="
          flex items-center gap-3
          bg-accent-secondary/10
          border border-border
          rounded-xl
          px-4 py-3
          text-sm
          font-manrope
          text-text-primary
        "
              >
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                {point}
              </div>
            ))}
          </div>

          {/* STATS */}
          <div className="flex gap-8">
            <div>
              <p className="font-bebas text-3xl text-text-primary">120+</p>
              <p className="font-manrope text-sm text-text-muted">
                Projects Completed
              </p>
            </div>

            <div>
              <p className="font-bebas text-3xl text-text-primary">10+</p>
              <p className="font-manrope text-sm text-text-muted">
                Years Experience
              </p>
            </div>

            <div>
              <p className="font-bebas text-3xl text-text-primary">4.9★</p>
              <p className="font-manrope text-sm text-text-muted">
                Google Rating
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/projects"
              className="
        inline-flex items-center justify-center
        px-7 py-3 rounded-full overflow-hidden
        bg-primary text-white
        font-manrope text-sm font-semibold
        shadow-lg hover:scale-105 transition
      "
            >
              View All Projects
            </Link>

            <span className="text-sm font-manrope text-text-muted">
              Real work. Real results.
            </span>
          </div>
        </div>

        {/* RIGHT DIAMOND GRID */}
        <section className="absolute rotate-45 right-0 top-[120%] md:right-16 md:top-0 flex flex-col gap-5">
          {/* TOP */}
          <section className="flex w-full">
            <DiamondCard
              image={projects[0].img}
              title={projects[0].title}
              subtitle={projects[0].subtitle}
              link={projects[0].link}
            />
          </section>

          {/* MIDDLE ROW */}
          <section className="flex gap-5">
            <DiamondCard
              image={projects[1].img}
              title={projects[1].title}
              subtitle={projects[1].subtitle}
              link={projects[1].link}
            />
            <DiamondCard
              image={projects[2].img}
              title={projects[2].title}
              subtitle={projects[2].subtitle}
              link={projects[2].link}
            />
          </section>

          {/* BOTTOM */}
          <section className="flex w-full justify-end">
            <DiamondCard
              image={projects[3].img}
              title={projects[3].title}
              subtitle={projects[3].subtitle}
              link={projects[3].link}
            />
          </section>
        </section>

        {/* CURSOR FOLLOW TOOLTIP */}
        {HOVER_MODE === "cursor" && cursor.content && (
          <div
            className="
              fixed z-50 pointer-events-none
              bg-white rounded-xl px-4 py-3
              shadow-xl border border-border
              transition-transform duration-75
            "
            style={{
              left: cursor.x + 16,
              top: cursor.y + 16,
            }}
          >
            <p className="font-bebas text-text-primary text-lg">
              {cursor.content.title}
            </p>
            <p className="font-manrope text-text-muted text-sm">
              {cursor.content.subtitle}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function DiamondCard({ image, title, subtitle, link }) {
  return (
    <Link
      href={link}
      className="w-45 h-45 md:w-76 md:h-76 px-6 py-8 rounded-xl border hover:cursor-pointer overflow-hidden group relative"
    >
      <img
        className="w-full h-full z-0 -rotate-45 absolute -top-5 -left-5 scale-[2]
                   group-hover:scale-[1.75] group-hover:brightness-[0.35]
                   transition-all duration-400 object-cover"
        src={image}
        alt={title}
      />
      <div
        className="relative -rotate-45 opacity-0 transition-opacity duration-400
                      flex flex-col h-full justify-center group-hover:opacity-100"
      >
        <h1 className="font-bebas text-background text-2xl">{title}</h1>
        <p className="text-background/80 text-sm font-manrope font-thin">
          {subtitle}
        </p>
      </div>
    </Link>
  );
}
