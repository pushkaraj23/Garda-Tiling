// "use client";

// export default function RatingSection() {
//   return (
//     <section className="w-full bg-gradient-to-t from-[#f6f5f5] via-[#f4f3f3] to-[#ffffff] py-22 px-8">
//       <div>

//         {/* RATING HEADER */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-2 bg-white min-w-3xl justify-center py-2 bg-gradient-to-r from-gray-0 via-gray-300 to-gray-0">
//             <span className="text-yellow-400 text-3xl">★</span>
//             <span className="font-semibold font-bebas text-gray-900 text-xl">
//               4.9 / 5 AVERAGE GOOGLE RATING
//             </span>
//           </div>

//           <p className="mt-3 text-md font-manrope text-gray-500">
//             Based on 120+ Completed Projects across City & Surrounding Suburbs
//           </p>
//         </div>

//         {/* CARDS */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

//           {[
//             {
//               img: "/home/Rating.svg",
//               title: "10+ Years Experience",
//               desc: "Serving residential and commercial clients with proven workmanship",
//             },
//             {
//               img: "/home/WaterProof.svg",
//               title: "Licensed & Insured",
//               desc: "Fully compliant with Australian standards and safety requirements",
//             },
//             {
//               img: "/home/Workmanship.svg",
//               title: "Waterproofing Certified",
//               desc: "All waterproofing carried out as per AS 3740 guidelines",
//             },
//             {
//               img: "/home/License.svg",
//               title: "Workmanship Warranty",
//               desc: "Quality workmanship backed by a written warranty",
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="
//                 group bg-white rounded-3xl p-8
//                 border border-transparent
//                 transition-all duration-500 ease-out
//                 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500
//               "
//             >
//               {/* ICON */}
//               <div className="mb-6 transition-transform duration-500 ease-out group-hover:scale-110">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-25 h-25 object-contain"
//                 />
//               </div>

//               {/* TITLE */}
//               <h3 className="
//                 text-2xl w-40 font-bebas font-bold text-gray-900 mb-3 uppercase
//                 transition-all duration-500 ease-out
//                 group-hover:translate-y-[-2px]
//               ">
//                 {item.title}
//               </h3>

//               {/* DESC */}
//               <p className="
//                 text-gray-600 font-manrope text-md w-45 leading-relaxed
//                 transition-all duration-500 ease-out
//                 group-hover:opacity-90
//               ">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

export default function RatingSection() {
  return (
    <section className="w-full bg-gradient-to-t from-[#f6f5f5] via-[#f4f3f3] to-[#ffffff] py-12 sm:py-16 md:py-22 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* RATING HEADER */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-white w-full sm:w-auto sm:min-w-md md:min-w-xl lg:min-w-3xl justify-center py-2 px-4 sm:px-6 bg-gradient-to-r from-gray-0 via-gray-300 to-gray-0 rounded-lg sm:rounded-none">
            <span className="text-yellow-400 text-2xl sm:text-3xl">★</span>
            <span className="font-semibold font-bebas text-gray-900 text-lg sm:text-xl">
              4.9 / 5 AVERAGE GOOGLE RATING
            </span>
          </div>

          <p className="mt-2 sm:mt-3 text-sm sm:text-md font-manrope text-gray-500 px-4 sm:px-0">
            Based on 120+ Completed Projects across City & Surrounding Suburbs
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">

          {[
            {
              img: "/home/Rating.svg",
              title: "10+ Years Experience",
              desc: "Serving residential and commercial clients with proven workmanship",
            },
            {
              img: "/home/WaterProof.svg",
              title: "Licensed & Insured",
              desc: "Fully compliant with Australian standards and safety requirements",
            },
            {
              img: "/home/Workmanship.svg",
              title: "Waterproofing Certified",
              desc: "All waterproofing carried out as per AS 3740 guidelines",
            },
            {
              img: "/home/License.svg",
              title: "Workmanship Warranty",
              desc: "Quality workmanship backed by a written warranty",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                group bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8
                border border-transparent
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500
                text-center sm:text-left
              "
            >
              {/* ICON */}
              <div className="mb-4 sm:mb-5 md:mb-6 transition-transform duration-500 ease-out group-hover:scale-110 flex justify-center sm:justify-start">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-25 md:h-25 object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="
                text-xl sm:text-2xl font-bebas font-bold text-gray-900 mb-2 sm:mb-3 uppercase
                transition-all duration-500 ease-out
                group-hover:translate-y-[-2px]
              ">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="
                text-gray-600 font-manrope text-sm sm:text-md leading-relaxed
                transition-all duration-500 ease-out
                group-hover:opacity-90
              ">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}