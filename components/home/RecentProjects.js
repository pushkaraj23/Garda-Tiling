// 'use client';

// export default function RecentProjects() {
//   return (
//     <section className="w-full bg-gray-50 px-8 overflow-hidden">
//       <div className="mx-auto flex flex-col lg:flex-row items-start gap-22">
//         {/* LEFT CONTENT */}

//         {/* RIGHT DIAMOND GRID */}
//         <div className="relative w-full max-w-7xl min-h-screen">
//           <h2 className="text-5xl font-bold font-bebas tracking-tight text-[#64748B] text-slide-bounce">
//             RECENT <span className="text-black font-bebas">PROJECTS</span>
//           </h2>

//           <p className="mt-4 max-w-sm text-black leading-relaxed text-fade-up stagger-2">
//             Take a look at some of our recently completed tiling and
//             waterproofing projects across City and surrounding suburbs.
//           </p>

//           <button className="mt-8 px-8 py-3 rounded-full bg-gray-900 text-white font-medium button-advanced text-fade-up stagger-3">
//             View More
//           </button>

//           {/* DIAMOND 1 */}
//           <Diamond
//             img="https://images.unsplash.com/photo-1658370230118-24aa79649d6c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             className="top-16 left-139 animate-float-rotate animate-glow-pulse"
//           />

//           {/* DIAMOND 2 */}
//           <Diamond
//             img="https://media.istockphoto.com/id/2159314075/photo/elegant-black-wood-toilet.webp?a=1&b=1&s=612x612&w=0&k=20&c=kqQAJk1tTUZlqr-2jssryxayXIsdu-_TCOyIFBLqIuA="
//             className="top-82 left-73 animate-float-rotate-delay-1 animate-glow-pulse"
//           />

//           {/* DIAMOND 3 */}
//           <Diamond
//             img="https://images.unsplash.com/photo-1742134131017-44d377a611b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRpbGVzJTIwM2R8ZW58MHx8MHx8fDA%3D"
//             className="top-82 right-32 animate-float-rotate-delay-2 animate-glow-pulse"
//           />

//           {/* DIAMOND 4 */}
//           <Diamond
//             img="https://media.istockphoto.com/id/2210812893/photo/bathroom-with-marble-walls.webp?a=1&b=1&s=612x612&w=0&k=20&c=haIcBHPJpelEu1elgjHimx57UPM-_am29y_r1GmhAyI="
//             className="top-16 left-273 object-cover animate-float-rotate-delay-3 animate-glow-pulse"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// function Diamond({ img, className }) {
//   return (
//     <div
//       className={`absolute w-[330px] h-[330px] rotate-45 overflow-hidden
//             rounded-2xl diamond-advanced transition-all duration-300 ${className}`}
//     >
//       <img
//         src={img}
//         alt="Project"
//         className="w-full h-full object-cover -rotate-45 scale-[1.6] transition-transform duration-300"
//       />
//     </div>
//   );
// }
'use client';

export default function RecentProjects() {
  const projects = [
    {
      img: "https://images.unsplash.com/photo-1658370230118-24aa79649d6c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://media.istockphoto.com/id/2159314075/photo/elegant-black-wood-toilet.webp?a=1&b=1&s=612x612&w=0&k=20&c=kqQAJk1tTUZlqr-2jssryxayXIsdu-_TCOyIFBLqIuA=",
    },
    {
      img: "https://images.unsplash.com/photo-1742134131017-44d377a611b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRpbGVzJTIwM2R8ZW58MHx8MHx8fDA%3D",
    },
    {
      img: "https://media.istockphoto.com/id/2210812893/photo/bathroom-with-marble-walls.webp?a=1&b=1&s=612x612&w=0&k=20&c=haIcBHPJpelEu1elgjHimx57UPM-_am29y_r1GmhAyI=",
    }
  ];

  return (
    <section className="w-full bg-gray-50 overflow-hidden">
      
      {/* ========== MOBILE LAYOUT (below sm: 640px) ========== */}
      <div className="sm:hidden px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-bebas tracking-tight text-[#64748B] text-slide-bounce">
              RECENT <span className="text-black font-bebas">PROJECTS</span>
            </h2>

            <p className="mt-3 text-sm text-black leading-relaxed text-fade-up max-w-xs mx-auto">
              Take a look at some of our recently completed tiling and
              waterproofing projects across City and surrounding suburbs.
            </p>

            <button className="mt-5 px-6 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium button-advanced">
              View More
            </button>
          </div>

          {/* Mobile Diamond Grid - 2x2 */}
          <div className="grid grid-cols-2 gap-4 place-items-center">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="animate-float-rotate animate-glow-pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className="w-[120px] h-[120px] rotate-45 overflow-hidden rounded-lg 
                             diamond-advanced transition-all duration-300 shadow-lg"
                >
                  <img
                    src={project.img}
                    alt="Project"
                    className="w-full h-full object-cover -rotate-45 scale-[1.6] transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== SMALL TABLET LAYOUT (sm: 640px - md: 768px) ========== */}
      <div className="hidden sm:block md:hidden px-6 py-14">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold font-bebas tracking-tight text-[#64748B] text-slide-bounce">
              RECENT <span className="text-black font-bebas">PROJECTS</span>
            </h2>

            <p className="mt-3 text-sm text-black leading-relaxed text-fade-up max-w-sm mx-auto">
              Take a look at some of our recently completed tiling and
              waterproofing projects across City and surrounding suburbs.
            </p>

            <button className="mt-6 px-7 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium button-advanced">
              View More
            </button>
          </div>

          {/* Tablet Diamond Grid - 2x2 */}
          <div className="grid grid-cols-2 gap-6 place-items-center">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="animate-float-rotate animate-glow-pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className="w-[140px] h-[140px] rotate-45 overflow-hidden rounded-xl 
                             diamond-advanced transition-all duration-300 shadow-lg"
                >
                  <img
                    src={project.img}
                    alt="Project"
                    className="w-full h-full object-cover -rotate-45 scale-[1.6] transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== MEDIUM TABLET LAYOUT (md: 768px - lg: 1024px) ========== */}
      <div className="hidden md:block lg:hidden px-8 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold font-bebas tracking-tight text-[#64748B] text-slide-bounce">
              RECENT <span className="text-black font-bebas">PROJECTS</span>
            </h2>

            <p className="mt-4 text-base text-black leading-relaxed text-fade-up max-w-md mx-auto">
              Take a look at some of our recently completed tiling and
              waterproofing projects across City and surrounding suburbs.
            </p>

            <button className="mt-7 px-8 py-3 rounded-full bg-gray-900 text-white font-medium button-advanced">
              View More
            </button>
          </div>

          {/* Medium Tablet Diamond Grid - 2x2 larger */}
          <div className="grid grid-cols-2 gap-8 place-items-center">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="animate-float-rotate animate-glow-pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className="w-[180px] h-[180px] rotate-45 overflow-hidden rounded-2xl 
                             diamond-advanced transition-all duration-300 shadow-xl"
                >
                  <img
                    src={project.img}
                    alt="Project"
                    className="w-full h-full object-cover -rotate-45 scale-[1.6] transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== SMALL DESKTOP LAYOUT (lg: 1024px - xl: 1280px) ========== */}
      <div className="hidden lg:block xl:hidden px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative min-h-[700px]">
            {/* Left Content */}
            <div className="absolute left-0 top-16 z-10">
              <h2 className="text-4xl font-bold font-bebas tracking-tight text-[#64748B] text-slide-bounce">
                RECENT <span className="text-black font-bebas">PROJECTS</span>
              </h2>

              <p className="mt-4 max-w-xs text-black leading-relaxed text-fade-up">
                Take a look at some of our recently completed tiling and
                waterproofing projects across City and surrounding suburbs.
              </p>

              <button className="mt-6 px-7 py-2.5 rounded-full bg-gray-900 text-white font-medium button-advanced">
                View More
              </button>
            </div>

            {/* Diamond Grid - Absolute positioned */}
            {/* DIAMOND 1 - Top Center */}
            <Diamond
              img={projects[0].img}
              size="lg-desktop"
              className="top-8 left-[45%] animate-float-rotate animate-glow-pulse"
            />

            {/* DIAMOND 2 - Middle Left */}
            <Diamond
              img={projects[1].img}
              size="lg-desktop"
              className="top-[280px] left-[25%] animate-float-rotate-delay-1 animate-glow-pulse"
            />

            {/* DIAMOND 3 - Middle Right */}
            <Diamond
              img={projects[2].img}
              size="lg-desktop"
              className="top-[280px] right-[10%] animate-float-rotate-delay-2 animate-glow-pulse"
            />

            {/* DIAMOND 4 - Top Right */}
            <Diamond
              img={projects[3].img}
              size="lg-desktop"
              className="top-8 right-[5%] animate-float-rotate-delay-3 animate-glow-pulse"
            />
          </div>
        </div>
      </div>

      {/* ========== LARGE DESKTOP LAYOUT (xl: 1280px - 2xl: 1536px) ========== */}
      <div className="hidden xl:block 2xl:hidden px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative min-h-[800px]">
            {/* Left Content */}
            <div className="absolute left-0 top-20 z-10">
              <h2 className="text-5xl font-bold font-bebas tracking-tight text-[#64748B] text-slide-bounce">
                RECENT <span className="text-black font-bebas">PROJECTS</span>
              </h2>

              <p className="mt-4 max-w-sm text-black leading-relaxed text-fade-up">
                Take a look at some of our recently completed tiling and
                waterproofing projects across City and surrounding suburbs.
              </p>

              <button className="mt-8 px-8 py-3 rounded-full bg-gray-900 text-white font-medium button-advanced">
                View More
              </button>
            </div>

            {/* Diamond Grid - Absolute positioned */}
            {/* DIAMOND 1 - Top Center */}
            <Diamond
              img={projects[0].img}
              size="xl-desktop"
              className="top-12 left-[42%] animate-float-rotate animate-glow-pulse"
            />

            {/* DIAMOND 2 - Middle Left */}
            <Diamond
              img={projects[1].img}
              size="xl-desktop"
              className="top-[320px] left-[22%] animate-float-rotate-delay-1 animate-glow-pulse"
            />

            {/* DIAMOND 3 - Middle Right */}
            <Diamond
              img={projects[2].img}
              size="xl-desktop"
              className="top-[320px] right-[8%] animate-float-rotate-delay-2 animate-glow-pulse"
            />

            {/* DIAMOND 4 - Top Right */}
            <Diamond
              img={projects[3].img}
              size="xl-desktop"
              className="top-12 right-[2%] animate-float-rotate-delay-3 animate-glow-pulse"
            />
          </div>
        </div>
      </div>

      {/* ========== EXTRA LARGE DESKTOP LAYOUT (2xl: 1536px+) - ORIGINAL ========== */}
      <div className="hidden 2xl:block px-8">
        <div className="mx-auto flex flex-col lg:flex-row items-start gap-22">
          {/* RIGHT DIAMOND GRID */}
          <div className="relative w-full max-w-7xl min-h-screen">
            <h2 className="text-5xl font-bold font-bebas tracking-tight text-[#64748B] text-slide-bounce">
              RECENT <span className="text-black font-bebas">PROJECTS</span>
            </h2>

            <p className="mt-4 max-w-sm text-black leading-relaxed text-fade-up stagger-2">
              Take a look at some of our recently completed tiling and
              waterproofing projects across City and surrounding suburbs.
            </p>

            <button className="mt-8 px-8 py-3 rounded-full bg-gray-900 text-white font-medium button-advanced text-fade-up stagger-3">
              View More
            </button>

            {/* DIAMOND 1 */}
            <Diamond
              img={projects[0].img}
              size="2xl-desktop"
              className="top-16 left-[556px] animate-float-rotate animate-glow-pulse"
            />

            {/* DIAMOND 2 */}
            <Diamond
              img={projects[1].img}
              size="2xl-desktop"
              className="top-[328px] left-[292px] animate-float-rotate-delay-1 animate-glow-pulse"
            />

            {/* DIAMOND 3 */}
            <Diamond
              img={projects[2].img}
              size="2xl-desktop"
              className="top-[328px] right-[128px] animate-float-rotate-delay-2 animate-glow-pulse"
            />

            {/* DIAMOND 4 */}
            <Diamond
              img={projects[3].img}
              size="2xl-desktop"
              className="top-16 left-[1092px] animate-float-rotate-delay-3 animate-glow-pulse"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Diamond({ img, className, size = "2xl-desktop" }) {
  const sizeClasses = {
    "lg-desktop": "w-[200px] h-[200px]",
    "xl-desktop": "w-[260px] h-[260px]",
    "2xl-desktop": "w-[330px] h-[330px]",
  };

  return (
    <div
      className={`absolute ${sizeClasses[size]} rotate-45 overflow-hidden
            rounded-2xl diamond-advanced transition-all duration-300 shadow-2xl ${className}`}
    >
      <img
        src={img}
        alt="Project"
        className="w-full h-full object-cover -rotate-45 scale-[1.6] transition-transform duration-300"
      />
    </div>
  );
}