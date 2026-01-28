"use client";

export default function ServicesSection() {
  const services = [
    { title: "10+ Years Experience", img: "https://images.unsplash.com/photo-1722152753039-002fc04c4910?w=600&auto=format&fit=crop&q=60" },
    { title: "10+ Years Experience", img: "https://plus.unsplash.com/premium_photo-1675616575514-5b06f6d74673?w=600&auto=format&fit=crop&q=60" },
    { title: "10+ Years Experience", img: "https://images.unsplash.com/photo-1763485955997-a9dbbcd91067?w=600&auto=format&fit=crop&q=60" },
    { title: "10+ Years Experience", img: "https://images.unsplash.com/photo-1722650269587-55ea04f0dca3?w=600&auto=format&fit=crop&q=60" },
    { title: "10+ Years Experience", img: "https://images.unsplash.com/photo-1763485956229-0541a80bcec9?w=600&auto=format&fit=crop&q=60" },
    { title: "10+ Years Experience", img: "https://images.unsplash.com/photo-1748680137039-fd8873e5bd48?w=600&auto=format&fit=crop&q=60" },
    { title: "10+ Years Experience", img: "https://images.unsplash.com/photo-1722942625138-d33a2b88a594?w=600&auto=format&fit=crop&q=60" },
    { title: "10+ Years Experience", img: "https://images.unsplash.com/photo-1691036365036-71da57ac5919?w=600&auto=format&fit=crop&q=60" },
  ];

  return (
    <section className="w-full py-16 px-8 relative">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/home/servicesBg.svg"
          alt="Tiling Services Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#8294AF]/75" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="font-bold font-bebas tracking-tight text-3xl md:text-5xl text-gray-900 mb-4">
            OUR TILING & WATERPROOFING SERVICES
          </h2>
          <p className="text-white max-w-2xl font-manrope mx-auto">
            Professional tiling solutions for bathrooms, outdoor spaces, and wet areas — delivered with precision and compliance.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group relative overflow-hidden h-90 bg-white
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-500 rounded-2xl
              "
            >
              {/* IMAGE */}
              <img
                src={service.img}
                alt={service.title}
                className="
                  absolute inset-0 w-full h-full object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-110
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t from-black/40 via-black/10 to-transparent
                  transition-all duration-500
                  group-hover:from-black/60
                "
              />

              {/* TITLE */}
              <h3
                className="
                  absolute bottom-4 left-0 right-0 text-center
                  text-white font-bold text-lg px-4 z-10
                  transition-all duration-500 ease-out
                  group-hover:bottom-6
                "
              >
                {service.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
