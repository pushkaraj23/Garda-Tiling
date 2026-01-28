// 'use client';

// import { useEffect, useRef, useState } from 'react';

// export default function HowItWorks() {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={sectionRef} className="w-full bg-gray-50 py-28 relative overflow-hidden">
//       {/* DECORATIVE IMAGES WITH ANIMATIONS */}
//       <div className="absolute top-10 left-0 h-100 ">
//         <img
//           src="/home/bg1.svg"
//           alt=""
//           className="w-50 object-contain"
//         />
//       </div>

//       <div className="absolute top-135 right-0 h-100 ">
//         <img
//           src="/home/bg2.svg"
//           alt=""
//           className="w-40 object-contain"
//         />
//       </div>

//       <div className="absolute bottom-105 left-0 h-120 ">
//         <img
//           src="/home/bg4.svg"
//           alt=""
//           className="w-40 object-contain"
//         />
//       </div>

//       <div className="absolute top-395 right-0 h-100 ">
//         <img
//           src="/home/bg3.svg"
//           alt=""
//           className="w-40  object-contain"
//         />
//       </div>

//       <div className="max-w-5xl mx-auto relative">
//         {/* HEADER */}
//         <div className="text-center mb-20">
//           <h3 className={`text-5xl font-bold font-bebas tracking-tight text-[#64748B] ${
//             isVisible ? 'animate-header-bounce' : 'opacity-0'
//           }`}>
//             HOW IT WORKS
//           </h3>
//           <p className={`mt-3 text-gray-600 text-sm font-manrope max-w-md mx-auto ${
//             isVisible ? 'animate-text-fade-up delay-1' : 'opacity-0'
//           }`}>
//             A simple, transparent process designed to make your tiling project
//             stress-free from start to finish.
//           </p>
//         </div>

//         {/* MAIN STRUCTURE */}
//         <div className="relative flex justify-center">
//           {/* CENTER COLUMN WITH GRADIENT */}
//           <div className={`relative w-150 bg-[#1F2933]/20 rounded-[40px] py-34 flex flex-col gap-58 items-center backdrop-blur-sm ${
//             isVisible ? 'animate-line-grow' : ''
//           } line-gradient`}>

//             {/* STEP 1 */}
//             <div className="relative w-full flex justify-center">
//               <span className={`text-8xl pr-50 font-bold text-gray-900 animate-number-pulse ${
//                 isVisible ? 'animate-number-reveal' : 'opacity-0'
//               }`}>1.</span>

//               <div className={`absolute right-[-220px] top-1/2 -translate-y-1/2 w-130 h-60 bg-[#111827]/60 text-white rounded-2xl p-6 flex flex-col justify-center card-hover backdrop-blur-md border border-white/10 ${
//                 isVisible ? 'animate-card-slide-right delay-1' : 'opacity-0'
//               }`}>
//                 <h4 className="font-semibold mb-2">Site Inspection</h4>
//                 <p className="text-sm leading-relaxed">
//                   We visit your site to assess the area, take measurements and
//                   understand your requirements.
//                 </p>
//               </div>
//             </div>

//             {/* STEP 2 */}
//             <div className="relative w-full flex justify-center">
//               <span className={`text-8xl pl-50 font-bold text-gray-900 animate-number-pulse ${
//                 isVisible ? 'animate-number-reveal delay-2' : 'opacity-0'
//               }`}>2.</span>

//               <div className={`absolute left-[-220px] top-1/2 -translate-y-1/2 w-130 h-60 bg-[#111827]/60 text-white rounded-2xl p-6 flex flex-col justify-center card-hover backdrop-blur-md border border-white/10 ${
//                 isVisible ? 'animate-card-slide-left delay-2' : 'opacity-0'
//               }`}>
//                 <h4 className="font-semibold mb-2">Clear Quotation</h4>
//                 <p className="text-sm leading-relaxed">
//                   You receive a detailed, easy-to-understand quote with no hidden costs.
//                 </p>
//               </div>
//             </div>

//             {/* STEP 3 */}
//             <div className="relative w-full flex justify-center">
//               <span className={`text-8xl pr-50 font-bold text-gray-900 animate-number-pulse ${
//                 isVisible ? 'animate-number-reveal delay-3' : 'opacity-0'
//               }`}>3.</span>

//               <div className={`absolute right-[-220px] top-1/2 -translate-y-1/2 w-130 h-60 bg-[#111827]/60 text-white rounded-2xl p-6 flex flex-col justify-center card-hover backdrop-blur-md border border-white/10 ${
//                 isVisible ? 'animate-card-slide-right delay-3' : 'opacity-0'
//               }`}>
//                 <h4 className="font-semibold mb-2">Professional Execution</h4>
//                 <p className="text-sm leading-relaxed">
//                   Our expert team completes the work with precision and care.
//                 </p>
//               </div>
//             </div>

//             {/* STEP 4 */}
//             <div className="relative w-full flex justify-center">
//               <span className={`text-8xl pl-50 font-bold text-gray-900 animate-number-pulse ${
//                 isVisible ? 'animate-number-reveal delay-4' : 'opacity-0'
//               }`}>4.</span>

//               <div className={`absolute left-[-220px] top-1/2 -translate-y-1/2 w-130 h-60 bg-[#111827]/60 text-white rounded-2xl p-6 flex flex-col justify-center card-hover backdrop-blur-md border border-white/10 ${
//                 isVisible ? 'animate-card-slide-left delay-4' : 'opacity-0'
//               }`}>
//                 <h4 className="font-semibold mb-2">Final Handover</h4>
//                 <p className="text-sm leading-relaxed">
//                   We ensure quality standards are met and leave your space clean.
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { useEffect, useRef, useState } from 'react';

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "1.",
      title: "Site Inspection",
      desc: "We visit your site to assess the area, take measurements and understand your requirements.",
      position: "right"
    },
    {
      number: "2.",
      title: "Clear Quotation",
      desc: "You receive a detailed, easy-to-understand quote with no hidden costs.",
      position: "left"
    },
    {
      number: "3.",
      title: "Professional Execution",
      desc: "Our expert team completes the work with precision and care.",
      position: "right"
    },
    {
      number: "4.",
      title: "Final Handover",
      desc: "We ensure quality standards are met and leave your space clean.",
      position: "left"
    }
  ];

  return (
    <section ref={sectionRef} className="w-full bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden px-4 sm:px-6 md:px-8">
      
      {/* DECORATIVE IMAGES - Hidden on mobile, shown on larger screens */}
      <div className="hidden lg:block absolute top-10 left-0 h-100">
        <img
          src="/home/bg1.svg"
          alt=""
          className="w-32 xl:w-50 object-contain"
        />
      </div>

      <div className="hidden lg:block absolute top-135 right-0 h-100">
        <img
          src="/home/bg2.svg"
          alt=""
          className="w-28 xl:w-40 object-contain"
        />
      </div>

      <div className="hidden lg:block absolute bottom-105 left-0 h-120">
        <img
          src="/home/bg4.svg"
          alt=""
          className="w-28 xl:w-40 object-contain"
        />
      </div>

      <div className="hidden lg:block absolute top-395 right-0 h-100">
        <img
          src="/home/bg3.svg"
          alt=""
          className="w-28 xl:w-40 object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h3 className={`text-3xl sm:text-4xl md:text-5xl font-bold font-bebas tracking-tight text-[#64748B] ${
            isVisible ? 'animate-header-bounce' : 'opacity-0'
          }`}>
            HOW IT WORKS
          </h3>
          <p className={`mt-2 sm:mt-3 text-gray-600 text-xs sm:text-sm font-manrope max-w-sm sm:max-w-md mx-auto px-4 sm:px-0 ${
            isVisible ? 'animate-text-fade-up delay-1' : 'opacity-0'
          }`}>
            A simple, transparent process designed to make your tiling project
            stress-free from start to finish.
          </p>
        </div>

        {/* MOBILE LAYOUT (Below lg breakpoint) */}
        <div className="lg:hidden space-y-6 sm:space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Number Circle */}
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#1F2933]/20 rounded-full flex items-center justify-center">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                  {step.number}
                </span>
              </div>
              
              {/* Card */}
              <div className="flex-1 w-full bg-[#111827]/80 text-white rounded-xl sm:rounded-2xl p-4 sm:p-5 backdrop-blur-md border border-white/10">
                <h4 className="font-semibold text-base sm:text-lg mb-1 font-bebas sm:mb-2">{step.title}</h4>
                <p className="text-xs sm:text-sm leading-relaxed font-manrope text-gray-300">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP LAYOUT (lg and above) */}
        <div className="hidden lg:block relative">
          <div className="relative flex justify-center">
            {/* CENTER COLUMN WITH GRADIENT */}
            <div className={`relative w-[400px] xl:w-[600px] bg-[#1F2933]/20 rounded-[40px] py-20 xl:py-34 flex flex-col gap-24 xl:gap-58 items-center backdrop-blur-sm ${
              isVisible ? 'animate-line-grow' : ''
            } line-gradient`}>

              {/* STEP 1 */}
              <div className="relative w-full flex justify-center">
                <span className={`text-6xl xl:text-8xl pr-20 xl:pr-50 font-bold text-gray-900 animate-number-pulse ${
                  isVisible ? 'animate-number-reveal' : 'opacity-0'
                }`}>1.</span>

                <div className={`absolute right-[-180px] xl:right-[-220px] top-1/2 -translate-y-1/2 w-[280px] xl:w-[520px] h-auto min-h-[120px] xl:min-h-[240px] bg-[#111827]/60 text-white rounded-2xl p-4 xl:p-6 flex flex-col justify-center card-hover backdrop-blur-md border border-white/10 ${
                  isVisible ? 'animate-card-slide-right delay-1' : 'opacity-0'
                }`}>
                  <h4 className="font-semibold font-bebas text-base xl:text-lg mb-2">Site Inspection</h4>
                  <p className="text-xs xl:text-sm font-manrope leading-relaxed">
                    We visit your site to assess the area, take measurements and
                    understand your requirements.
                  </p>
                </div>
              </div>

              {/* STEP 2 */}
              <div className="relative w-full flex justify-center">
                <span className={`text-6xl xl:text-8xl pl-20 xl:pl-50 font-bold text-gray-900 animate-number-pulse ${
                  isVisible ? 'animate-number-reveal delay-2' : 'opacity-0'
                }`}>2.</span>

                <div className={`absolute left-[-180px] xl:left-[-220px] top-1/2 -translate-y-1/2 w-[280px] xl:w-[520px] h-auto min-h-[120px] xl:min-h-[240px] bg-[#111827]/60 text-white rounded-2xl p-4 xl:p-6 flex flex-col justify-center card-hover backdrop-blur-md border border-white/10 ${
                  isVisible ? 'animate-card-slide-left delay-2' : 'opacity-0'
                }`}>
                  <h4 className="font-semibold text-base font-bebas xl:text-lg mb-2">Clear Quotation</h4>
                  <p className="text-xs xl:text-sm font-manrope leading-relaxed">
                    You receive a detailed, easy-to-understand quote with no hidden costs.
                  </p>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="relative w-full flex justify-center">
                <span className={`text-6xl xl:text-8xl pr-20 xl:pr-50 font-bold text-gray-900 animate-number-pulse ${
                  isVisible ? 'animate-number-reveal delay-3' : 'opacity-0'
                }`}>3.</span>

                <div className={`absolute right-[-180px] xl:right-[-220px] top-1/2 -translate-y-1/2 w-[280px] xl:w-[520px] h-auto min-h-[120px] xl:min-h-[240px] bg-[#111827]/60 text-white rounded-2xl p-4 xl:p-6 flex flex-col justify-center card-hover backdrop-blur-md border border-white/10 ${
                  isVisible ? 'animate-card-slide-right delay-3' : 'opacity-0'
                }`}>
                  <h4 className="font-semibold text-base xl:text-lg font-bebas mb-2">Professional Execution</h4>
                  <p className="text-xs xl:text-sm font-manrope leading-relaxed">
                    Our expert team completes the work with precision and care.
                  </p>
                </div>
              </div>

              {/* STEP 4 */}
              <div className="relative w-full flex justify-center">
                <span className={`text-6xl xl:text-8xl pl-20 xl:pl-50 font-bold text-gray-900 animate-number-pulse ${
                  isVisible ? 'animate-number-reveal delay-4' : 'opacity-0'
                }`}>4.</span>

                <div className={`absolute left-[-180px] xl:left-[-220px] top-1/2 -translate-y-1/2 w-[280px] xl:w-[520px] h-auto min-h-[120px] xl:min-h-[240px] bg-[#111827]/60 text-white rounded-2xl p-4 xl:p-6 flex flex-col justify-center card-hover backdrop-blur-md border border-white/10 ${
                  isVisible ? 'animate-card-slide-left delay-4' : 'opacity-0'
                }`}>
                  <h4 className="font-semibold text-base font-bebas xl:text-lg mb-2">Final Handover</h4>
                  <p className="text-xs xl:text-sm font-manrope leading-relaxed">
                    We ensure quality standards are met and leave your space clean.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}