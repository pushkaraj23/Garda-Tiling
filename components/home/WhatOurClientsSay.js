"use client";

import { useTestimonials } from "@/lib/cms/useTestimonials";

export default function WhatOurClientsSay() {
  const { testimonials, loading } = useTestimonials();

  if (loading) {
    return (
      <section className="relative w-full py-20 bg-background">
        <div className="max-w-7xl mx-auto text-center font-manrope text-text-muted text-sm">
          Loading testimonials…
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full pb-50 bg-background pt-10 md:pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h3 className="font-bebas text-4xl sm:text-5xl tracking-tight text-primary uppercase">
            What Our <span className="text-text-primary">Clients Say</span>
          </h3>
          <p className="mt-4 text-sm sm:text-base font-manrope text-text-muted max-w-xl mx-auto">
            We take pride in delivering quality workmanship and a smooth
            experience — here’s what our clients have to say.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.slice(0, 4).map((t, i) => (
            <TestimonialCard key={t.id || i} text={t.text} author={t.author} />
          ))}
        </div>

        {/* DECORATIVE FOOTER ELEMENT */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-32 opacity-50">
          <img
            src="/home/feedbackbg.svg"
            alt=""
            className="w-32 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

/* CARD COMPONENT */
function TestimonialCard({ text, author }) {
  return (
    <div
      className="
        bg-accent-secondary/20 backdrop-blur-md
        border border-border
        rounded-2xl
        p-6 sm:p-7
        text-sm sm:text-base
        font-manrope
        text-text-primary
        leading-relaxed
        shadow-sm
        hover:shadow-md
        transition
      "
    >
      <p className="mb-6 text-text-muted">“{text}”</p>

      {author && (
        <span className="block text-xs font-semibold text-text-primary">
          — {author}
        </span>
      )}
    </div>
  );
}
