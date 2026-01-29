"use client";

export default function WhatOurClientsSay() {
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
          <TestimonialCard text="Garda Tiling did an excellent job on our bathroom renovation. The team was professional, punctual, and the finish was flawless." />

          <TestimonialCard text="Very impressed with the quality of work and attention to detail. Everything was explained clearly and completed on time." />

          <TestimonialCard text="Great communication from start to finish. The waterproofing and tiling were done properly and the site was left clean every day." />

          <TestimonialCard text="Reliable, honest, and skilled workmanship. We are extremely happy with the final result and would definitely use Garda Tiling again." />
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
function TestimonialCard({ text }) {
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

      <span className="block text-xs font-semibold text-text-primary">
        — Homeowner, Max Williams
      </span>
    </div>
  );
}
