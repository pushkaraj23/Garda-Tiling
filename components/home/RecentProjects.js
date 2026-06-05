"use client";

import { useState } from "react";
import Link from "next/link";
import { useHomeProjects } from "@/lib/cms/useProjects";

const HOVER_MODE = "overlay"; // "overlay" | "cursor"

export default function RecentProjects() {
  const { homeProjects, loading } = useHomeProjects(4);
  const projects = homeProjects;

  const [cursor, setCursor] = useState({ x: 0, y: 0, content: null });

  if (loading) {
    return (
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto text-center font-manrope text-text-muted text-sm">
          Loading recent projects…
        </div>
      </section>
    );
  }

  if (!projects.length) {
    return null;
  }

  const cards = [
    projects[0],
    projects[1] ?? projects[0],
    projects[2] ?? projects[0],
    projects[3] ?? projects[0],
  ];

  return (
    <section className="w-full overflow-hidden relative bg-background overflow-x-hidden py-20 max-sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="relative md:ml-12 max-sm:mt-0 z-10 flex flex-col gap-8 max-w-md">
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
        <section className="rotate-45 max-sm:py-10 w-full md:w-109 -right-1 flex flex-col gap-5">
          {/* TOP */}
          <section className="flex w-full">
            <DiamondCard
              image={cards[0].img}
              title={cards[0].title}
              subtitle={cards[0].subtitle}
              link={cards[0].link}
            />
          </section>

          {/* MIDDLE ROW */}
          <section className="flex gap-5 full">
            <DiamondCard
              image={cards[1].img}
              title={cards[1].title}
              subtitle={cards[1].subtitle}
              link={cards[1].link}
            />
            <DiamondCard
              image={cards[2].img}
              title={cards[2].title}
              subtitle={cards[2].subtitle}
              link={cards[2].link}
            />
          </section>

          {/* BOTTOM */}
          <section className="flex w-full justify-end">
            <DiamondCard
              image={cards[3].img}
              title={cards[3].title}
              subtitle={cards[3].subtitle}
              link={cards[3].link}
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
      className="w-40 h-40 md:w-52 md:h-52 px-6 py-8 rounded-xl border hover:cursor-pointer overflow-hidden group relative"
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
        <h1 className="font-bebas text-background text-xl">{title}</h1>
        <p className="text-background/80 text-sm font-manrope font-thin">
          {subtitle}
        </p>
      </div>
    </Link>
  );
}
