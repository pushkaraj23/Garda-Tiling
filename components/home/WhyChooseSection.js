"use client";

export default function WhyChooseSection() {
    return (
        <section className="w-full bg-gray-50 py-20 px-8">
            <div>

                {/* HEADER */}
                <div className="mb-12">
                    <h2 className="text-5xl tracking-tight font-bebas font-bold text-[#64748B]">
                        WHY CHOOSE <span className="text-black">GARDA </span>TILING
                    </h2>
                    <p className="mt-4 font-manrope text-black">
                        We don’t just install tiles — we deliver durable finishes,
                        compliant waterproofing, and a clean, stress-free experience
                        from start to finish.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-12 gap-6">

                    {/* CARD */}
                    <AnimatedCard className="col-span-12 lg:col-span-6 h-92">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1681566677639-e39bdc971459?w=700&auto=format&fit=crop&q=60"
                            alt=""
                        />
                        <CardText
                            title="Quality Workmanship"
                            text="We don’t just install tiles — we deliver durable finishes, compliant waterproofing, and a clean, stress-free experience from start to finish."
                        />
                    </AnimatedCard>

                    <AnimatedCard className="col-span-12 lg:col-span-4 h-92">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1681566677089-08f136195c9a?w=600&auto=format&fit=crop&q=60"
                            alt=""
                        />
                        <CardText
                            title="Waterproofing Compliance"
                            text="All waterproofing carried out in accordance with Australian Standards, ensuring long-term protection and peace of mind."
                        />
                    </AnimatedCard>

                    <AnimatedCard className="col-span-12 lg:col-span-2 lg:row-span-2 h-72 lg:h-auto">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1663127307844-6dc4b2ccef85?w=600&auto=format&fit=crop&q=60"
                            alt=""
                        />
                        <CardText
                            title="Clear Timelines"
                            text="We follow a fixed schedule and keep you informed throughout the job — no unnecessary delays or surprises."
                        />
                    </AnimatedCard>

                    <AnimatedCard className="col-span-12 lg:col-span-10 h-64">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1682210260871-5fcfeb4cd20e?w=600&auto=format&fit=crop&q=60"
                            alt=""
                        />
                        <CardText
                            title="Clean & Respectful Work"
                            text="We treat your home with care, maintain a clean workspace, and leave the site tidy after completion."
                        />
                    </AnimatedCard>

                </div>
            </div>
        </section>
    );
}

/* REUSABLE ANIMATED CARD */
function AnimatedCard({ children, className }) {
    return (
        <div
            className={`
        relative rounded-2xl overflow-hidden bg-black
        group ${className}
        transition-all duration-500 ease-out
        hover:-translate-y-2 hover:shadow-2xl
      `}
        >
            {/* IMAGE */}
            <div className="absolute inset-0">
                {children[0] && (
                    <img
                        src={children[0].props.src}
                        alt=""
                        className="
              w-full h-full object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-110
            "
                    />
                )}
            </div>

            {/* OVERLAY */}
            <div className="
        absolute inset-0 bg-black/60
        transition-all duration-500
        group-hover:bg-black/70
      " />

            {/* TEXT */}
            <div className="
        absolute bottom-6 left-6 right-6 z-10
        transition-all duration-500 ease-out
        opacity-90 translate-y-2
        group-hover:opacity-100 group-hover:translate-y-0
      ">
                {children[1]}
            </div>
        </div>
    );
}

/* TEXT BLOCK */
function CardText({ title, text }) {
    return (
        <>
            <h3 className="text-xl font-semibold mb-2 text-white">
                {title}
            </h3>
            <p className="text-sm leading-relaxed text-white/90">
                {text}
            </p>
        </>
    );
}
