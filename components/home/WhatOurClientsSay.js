"use client";

export default function WhatOurClientsSay() {
    return (
        <section className="relative w-full min-h-screen  py-28 overflow-hidden">
            <div className=" mx-auto px-8 relative">

                {/* HEADER */}
                <div className="text-center mb-20">
                    <h3 className="text-4xl font-bold font-bebas tracking-tight  text-gray-700 uppercase">
                        What Our Clients Say
                    </h3>
                    <p className="mt-4 text-sm font-manrope text-gray-600 max-w-xl mx-auto">
                        We take pride in delivering quality workmanship and a smooth
                        experience — here's what our clients have to say.
                    </p>
                </div>

                {/* TESTIMONIAL GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* CARD 1 */}
                    <TestimonialCard
                        text="Garda Tiling did an excellent job on our bathroom renovation. The team was professional, punctual, and the finish was flawless. Highly recommend."
                    />

                    {/* CARD 2 */}
                    <TestimonialCard
                        text="Very impressed with the quality of work and attention to detail. Everything was explained clearly and completed on time."
                    />

                    {/* CARD 3 */}
                    <TestimonialCard
                        text="Great communication from start to finish. The waterproofing and tiling were done properly and the site was left clean every day."
                    />

                    {/* CARD 4 */}
                    <TestimonialCard
                        text="Reliable, honest, and skilled workmanship. We are extremely happy with the final result and would definitely use Garda Tiling again."
                    />

                </div>

                {/* BOTTOM CENTER DECOR */}
                <div className="absolute left-1/2 -translate-x-1/2 top-100 flex gap-2 opacity-60">
                    <div className="h-40  overflow-hidden">
                        <img
                            src="/home/feedbackbg.svg"
                            alt=""
                            className="w-full h-full object-contain"
                        />
                    </div>

                </div>


            </div>
        </section>
    );
}

/* CARD COMPONENT */
function TestimonialCard({ text }) {
    return (
        <div className="bg-white border border-gray-300 rounded-2xl p-6 text-sm text-gray-700 leading-relaxed">
            <p className="mb-6">{text}</p>
            <span className="block text-xs font-manrope font-semibold text-gray-800">
                ~ Homeowner, Max Williams
            </span>
        </div>
    );
}

