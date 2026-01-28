// import Link from "next/link";
// import { servicesData } from "../lib/servicesData";

// export default function ServicesList() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-20">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {servicesData.map((service) => (
//           <Link
//             key={service.id}
//             href={`/services/${service.slug}`}
//             className="group"
//           >
//             <div className="bg-[#F3F2F0] p-8 rounded-lg hover:shadow-xl transition">
//               <div className="text-6xl mb-4">{service.icon}</div>
//               <h3 className="text-2xl font-bold mb-3">
//                 {service.title}
//               </h3>
//               <p className="text-[#78716C]">
//                 {service.shortDesc}
//               </p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }


// import Link from "next/link";
// import Image from "next/image";
// import { servicesData } from "../lib/servicesData";

// export default function ServicesList() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-20">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-[#292524] mb-4">
//           Our Professional Services
//         </h2>
//         <p className="text-lg text-[#78716C] max-w-3xl mx-auto">
//           Quality craftsmanship and attention to detail in every project we undertake
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {servicesData.map((service) => (
//           <Link
//             key={service.id}
//             href={`/services/${service.slug}`}
//             className="group block overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02]"
//           >
//             <div className="bg-[#F3F2F0] rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full">
//               {/* Main Image */}
//               <div className="relative h-48 w-full overflow-hidden bg-[#3F3F46]">
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10"></div>
//                 <div className="text-6xl absolute top-4 left-4 z-20">
//                   {service.icon}
//                 </div>
//                 <Image
//                   src={service.mainImage}
//                   alt={service.title}
//                   fill
//                   className="object-cover group-hover:scale-110 transition-transform duration-500"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-[#292524] mb-3 group-hover:text-[#C9A24D] transition-colors">
//                   {service.title}
//                 </h3>
//                 <p className="text-[#78716C] mb-4 line-clamp-2">
//                   {service.shortDesc}
//                 </p>

//                 <div className="flex items-center justify-between pt-4 border-t border-[#E7E5E4]">
//                   <span className="text-sm font-semibold text-[#C9A24D]">
//                     {service.pricing}
//                   </span>
//                   <span className="text-sm text-[#78716C]">
//                     {service.duration}
//                   </span>
//                 </div>

//                 <div className="mt-4">
//                   <span className="inline-flex items-center text-[#3F3F46] font-medium group-hover:text-[#C9A24D] transition-colors">
//                     Learn more
//                     <svg 
//                       className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
//                       fill="none" 
//                       stroke="currentColor" 
//                       viewBox="0 0 24 24"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }


// components/ServicesList.jsx


// "use client"

// import Link from "next/link";
// import Image from "next/image";
// import { servicesData } from "../lib/servicesData";

// export default function ServicesList() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-[#292524] mb-4">
//           Our Professional Services
//         </h2>
//         <p className="text-lg text-[#78716C] max-w-3xl mx-auto">
//           Quality craftsmanship and attention to detail in every project we undertake
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//         {servicesData.map((service) => (
//           <Link
//             key={service.id}
//             href={`/services/${service.slug}`}
//             className="group block overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02]"
//           >
//             <div className="bg-[#F3F2F0] rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
//               {/* Main Image */}
//               <div className="relative h-48 w-full overflow-hidden bg-[#3F3F46]">
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 z-10"></div>
//                 <div className="text-5xl absolute top-4 left-4 z-20 drop-shadow-lg">
//                   {service.icon}
//                 </div>
//                 <Image
//                   src={service.mainImage}
//                   alt={service.title}
//                   fill
//                   className="object-cover group-hover:scale-110 transition-transform duration-500"
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-16 z-10"></div>
//               </div>

//               {/* Content */}
//               <div className="p-5 md:p-6 flex-grow flex flex-col">
//                 <h3 className="text-xl font-bold text-[#292524] mb-3 group-hover:text-[#C9A24D] transition-colors line-clamp-1">
//                   {service.title}
//                 </h3>
//                 <p className="text-[#78716C] mb-4 line-clamp-2 flex-grow">
//                   {service.shortDesc}
//                 </p>

//                 <div className="flex items-center justify-between pt-4 border-t border-[#E7E5E4] mt-auto">
//                   <span className="text-sm font-semibold text-[#C9A24D]">
//                     {service.pricing}
//                   </span>
//                   <span className="text-sm text-[#78716C]">
//                     {service.duration}
//                   </span>
//                 </div>

//                 <div className="mt-4">
//                   <span className="inline-flex items-center text-[#3F3F46] font-medium group-hover:text-[#C9A24D] transition-colors">
//                     Learn more
//                     <svg 
//                       className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
//                       fill="none" 
//                       stroke="currentColor" 
//                       viewBox="0 0 24 24"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }


// components/ServicesTab/ServicesList.js


// "use client"

// import Link from "next/link";
// import Image from "next/image";
// import { servicesData } from "../lib/servicesData";

// export default function ServicesList() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-[#292524] mb-4">
//           Our Professional Services
//         </h2>
//         <p className="text-lg text-[#78716C] max-w-3xl mx-auto">
//           Quality craftsmanship and attention to detail in every project we undertake
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//         {servicesData.map((service) => (
//           <Link
//             key={service.id}
//             href={`/services/${service.slug}`}
//             className="group block overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02]"
//           >
//             <div className="bg-[#F3F2F0] rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
//               {/* Main Image */}
//               <div className="relative h-48 w-full overflow-hidden bg-[#3F3F46]">
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 z-10"></div>
//                 <div className="text-5xl absolute top-4 left-4 z-20 drop-shadow-lg">
//                   {service.icon}
//                 </div>
//                 <Image
//                   src={service.mainImage}
//                   alt={service.title}
//                   fill
//                   className="object-cover group-hover:scale-110 transition-transform duration-500"
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-16 z-10"></div>
//               </div>

//               {/* Content */}
//               <div className="p-5 md:p-6 flex-grow flex flex-col">
//                 <h3 className="text-xl font-bold text-[#292524] mb-3 group-hover:text-[#C9A24D] transition-colors line-clamp-1">
//                   {service.title}
//                 </h3>
//                 <p className="text-[#78716C] mb-4 line-clamp-2 flex-grow">
//                   {service.shortDesc}
//                 </p>

//                 <div className="flex items-center justify-between pt-4 border-t border-[#E7E5E4] mt-auto">
//                   <span className="text-sm font-semibold text-[#C9A24D]">
//                     {service.pricing}
//                   </span>
//                   <span className="text-sm text-[#78716C]">
//                     {service.duration}
//                   </span>
//                 </div>

//                 <div className="mt-4">
//                   <span className="inline-flex items-center text-[#3F3F46] font-medium group-hover:text-[#C9A24D] transition-colors">
//                     Learn more
//                     <svg 
//                       className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
//                       fill="none" 
//                       stroke="currentColor" 
//                       viewBox="0 0 24 24"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }



// "use client"

// import Link from "next/link";
// import Image from "next/image";
// import { servicesData } from "../lib/servicesData";

// export default function ServicesList() {
//   return (
//     <section className="w-full bg-gray-50 py-16 px-8 ">
//       {/* SEO Header */}
//       <div className="text-center mb-16">
//         <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
//           <svg className="w-4 h-4 text-[#C9A24D]" fill="currentColor" viewBox="0 0 20 20">
//             <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//           </svg>
//           <span className="text-sm font-medium text-[#3F3F46]">Serving All Melbourne Areas</span>
//         </div>

//         <h1 className="text-4xl md:text-5xl font-bold text-[#292524] mb-4">
//           Melbourne Tiling & Renovation Services
//         </h1>
//         <p className="text-lg text-[#78716C] max-w-3xl mx-auto mb-8">
//           Professional tiling, waterproofing, and renovation services across Melbourne.
//           Quality workmanship with Australian standards compliance.
//         </p>

//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {['Bathroom Tiling Melbourne', 'Kitchen Renovations', 'Waterproofing Certificates', 'Outdoor Tiling', 'Pool Surrounds', 'Commercial Waterproofing'].map((tag, i) => (
//             <span key={i} className="bg-gray-100 text-[#3F3F46] px-3 py-1 rounded-full text-sm">
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Services Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {servicesData.map((service) => (
//           <div
//             key={service.id}
//             className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
//           >
//             <Link href={`/services/${service.slug}`}>
//               {/* Service Image */}
//               <div className="relative h-56 w-full overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
//                 <div className="absolute top-4 left-4 z-20">
//                   <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full">
//                     Melbourne
//                   </span>
//                 </div>
//                 <Image
//                   src={service.mainImage}
//                   alt={`${service.title} - Melbourne Service`}
//                   fill
//                   className="object-cover group-hover:scale-110 transition-transform duration-500"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 />
//               </div>

//               {/* Service Content */}
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="text-3xl">{service.icon}</div>
//                   <span className="text-xs font-semibold text-[#C9A24D] bg-[#C9A24D]/10 px-3 py-1 rounded-full">
//                     {service.duration}
//                   </span>
//                 </div>

//                 <h3 className="text-xl font-bold text-[#292524] mb-3 group-hover:text-[#C9A24D] transition-colors">
//                   {service.title}
//                 </h3>

//                 <p className="text-[#78716C] mb-6 line-clamp-2">
//                   {service.shortDesc}
//                 </p>

//                 <div className="flex items-center justify-between mb-6">
//                   <div>
//                     <div className="text-sm text-[#78716C]">Starting from</div>
//                     <div className="text-lg font-bold text-[#C9A24D]">{service.pricing}</div>
//                   </div>
//                   <div className="text-right">
//                     <div className="text-sm text-[#78716C]">Service Type</div>
//                     <div className="text-sm font-medium text-[#3F3F46]">{service.title.split('Melbourne')[0]}</div>
//                   </div>
//                 </div>

//                 <div className="pt-6 border-t border-gray-100">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center text-[#3F3F46] font-medium group-hover:text-[#C9A24D] transition-colors">
//                       View Service Details
//                       <svg
//                         className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                       </svg>
//                     </div>
//                     <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
//                       Melbourne
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>

//       {/* Bottom SEO Content */}
//       <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-[#292524] mb-6">
//             Melbourne's Trusted Tiling & Waterproofing Experts
//           </h2>
//           <p className="text-lg text-[#78716C] mb-8">
//             With years of experience serving Melbourne homes and businesses, we provide
//             professional tiling, waterproofing, and renovation services. Our team is fully
//             licensed, insured, and committed to delivering quality results that comply with
//             Australian standards.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white p-6 rounded-xl">
//               <div className="text-3xl text-[#C9A24D] mb-3">🏆</div>
//               <div className="font-bold text-[#292524] mb-2">Licensed & Insured</div>
//               <div className="text-sm text-[#78716C]">Fully compliant with Victorian regulations</div>
//             </div>
//             <div className="bg-white p-6 rounded-xl">
//               <div className="text-3xl text-[#C9A24D] mb-3">📋</div>
//               <div className="font-bold text-[#292524] mb-2">Waterproofing Certificates</div>
//               <div className="text-sm text-[#78716C]">10-year certificates provided</div>
//             </div>
//             <div className="bg-white p-6 rounded-xl">
//               <div className="text-3xl text-[#C9A24D] mb-3">📍</div>
//               <div className="font-bold text-[#292524] mb-2">Melbourne Wide</div>
//               <div className="text-sm text-[#78716C]">Servicing all Melbourne suburbs</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client"

// import Link from "next/link";
// import Image from "next/image";
// import { servicesData } from "../lib/servicesData";

// export default function ServicesList() {
//   return (
//     <>
//       {/* Hero Section */}
//       <div className="w-full bg-gray-50 py-1 px-8">
//         <div className="relative h-[40vh] md:h-[50vh] overflow-hidden rounded-[32px] mb-16">
//           <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 to-[#3F3F46]/90 z-10"></div>
//           <Image
//             src="https://images.unsplash.com/photo-1769028715040-16cb345ced84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D" // Add your hero image
//             alt="Melbourne Tiling Services - Professional Renovations"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="relative z-20 h-full flex items-center justify-center px-6">
//             <div className="text-center max-w-4xl">
//               <div className="inline-block backdrop-blur-sm px-4 py-2 rounded-full mb-6">
//                 <span className=""></span>
//               </div>
//               <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
//                 Professional Tiling & Renovation Services
//               </h1>
//               <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
//                 Expert tiling, waterproofing, and renovation services across Melbourne.
//                 Fully licensed and insured with Australian standards compliance.
//               </p>
//               <div className="flex flex-wrap items-center justify-center gap-4 text-white">
//                 <span className="bg-[#C9A24D]/20 backdrop-blur-sm px-4 py-2 rounded-lg">
//                   10+ Years Experience
//                 </span>
//                 <span className="bg-[#3F3F46]/50 backdrop-blur-sm px-4 py-2 rounded-lg">
//                   Licensed & Insured
//                 </span>
//                 <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
//                   Free Quotes
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto px-6">
//           {/* Main Content Grid */}
//           <div className="grid grid-cols-1  gap-12">
//             {/* Services List - Left Column */}
//             <div className="lg:col-span-2">
//               {/* Services Header */}
//               <div className="mb-12">
//                 <div className="flex items-center gap-3 mb-6">
//                   <h2 className="text-3xl font-bold text-[#292524]">
//                     Our Melbourne Services
//                   </h2>
//                   <span className="bg-[#C9A24D] text-white text-xs font-bold px-3 py-1 rounded-full">
//                     MELBOURNE
//                   </span>
//                 </div>
//                 <p className="text-lg text-[#1F2933] leading-relaxed mb-8">
//                   Browse our comprehensive range of professional tiling and renovation services available across Melbourne.
//                   Each service comes with quality assurance and expert workmanship.
//                 </p>
//               </div>

//               {/* Services Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {servicesData.map((service) => (
//                   <div
//                     key={service.id}
//                     className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
//                   >
//                     <Link href={`/services/${service.slug}`}>
//                       {/* Service Image */}
//                       <div className="relative h-48 w-full overflow-hidden">
//                         <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent z-10"></div>
//                         <div className="absolute top-4 left-4 z-20">
//                           <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
//                             Melbourne
//                           </span>
//                         </div>
//                         <Image
//                           src={service.mainImage}
//                           alt={`${service.title} - Melbourne Service`}
//                           fill
//                           className="object-cover group-hover:scale-105 transition-transform duration-500"
//                         />
//                       </div>

//                       {/* Service Content */}
//                       <div className="p-6">
//                         <div className="flex items-start gap-4 mb-4">
//                           <div className="text-3xl text-[#C9A24D]">{service.icon}</div>
//                           <div className="flex-1">
//                             <h3 className="text-xl font-bold text-[#292524] mb-2">
//                               {service.title}
//                             </h3>
//                             <div className="flex items-center gap-2">
//                               <span className="text-xs font-semibold text-[#C9A24D] bg-[#C9A24D]/10 px-2 py-1 rounded">
//                                 {service.duration}
//                               </span>
//                               <span className="text-xs text-[#78716C]">• From {service.pricing}</span>
//                             </div>
//                           </div>
//                         </div>

//                         <p className="text-[#78716C] mb-6 line-clamp-3">
//                           {service.shortDesc}
//                         </p>

//                         <div className="pt-4 border-t border-gray-100">
//                           <div className="flex items-center justify-between">
//                             <div className="flex items-center text-[#3F3F46] font-medium group-hover:text-[#C9A24D] transition-colors">
//                               View Details
//                               <svg
//                                 className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                               </svg>
//                             </div>
//                             <div className="text-sm text-[#78716C]">
//                               Melbourne Service
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </Link>
//                   </div>
//                 ))}
//               </div>

//               {/* Why Choose Us Section */}
//               <div className="mt-16 bg-gradient-to-r from-[#C9A24D]/5 to-[#3F3F46]/5 rounded-xl p-8">
//                 <h3 className="text-2xl font-bold text-[#292524] mb-6">
//                   Why Choose Our Melbourne Services
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="bg-white p-6 rounded-xl shadow">
//                     <div className="flex items-start gap-4">
//                       <div className="w-12 h-12 bg-[#C9A24D]/10 rounded-lg flex items-center justify-center">
//                         <div className="text-2xl">🏆</div>
//                       </div>
//                       <div>
//                         <h4 className="font-bold text-[#292524] mb-2">Expert Craftsmanship</h4>
//                         <p className="text-sm text-[#78716C]">Years of experience delivering quality tiling work across Melbourne</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="bg-white p-6 rounded-xl shadow">
//                     <div className="flex items-start gap-4">
//                       <div className="w-12 h-12 bg-[#C9A24D]/10 rounded-lg flex items-center justify-center">
//                         <div className="text-2xl">📋</div>
//                       </div>
//                       <div>
//                         <h4 className="font-bold text-[#292524] mb-2">Fully Certified</h4>
//                         <p className="text-sm text-[#78716C]">Licensed, insured, and compliant with Australian standards</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>         
//         </div>
//       </div>
//     </>
//   );
// }


"use client"

import Link from "next/link";
import Image from "next/image";
import { servicesData } from "../lib/servicesData";

export default function ServicesList() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full bg-gray-50 py-1 px-8">
        <div className="relative h-[40vh] md:h-[50vh] overflow-hidden rounded-t-[32px] mb-16 animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 to-[#3F3F46]/90 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1769028715040-16cb345ced84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D"
            alt="Melbourne Tiling Services - Professional Renovations"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 h-full flex items-center justify-center px-6">
            <div className="text-center max-w-4xl">
              <div className="inline-block backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in-down">
                <span className=""></span>
              </div>
              <h1 className="text-4xl md:text-5xl text-white font-bold mb-6 animate-fade-in-up animation-delay-200">
                Professional Tiling & Renovation Services
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
                Expert tiling, waterproofing, and renovation services across Melbourne.
                Fully licensed and insured with Australian standards compliance.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-white animate-fade-in-up animation-delay-600">
                <span className="bg-[#C9A24D]/20 backdrop-blur-sm px-4 py-2 rounded-lg hover-lift animate-float">
                  10+ Years Experience
                </span>
                <span className="bg-[#3F3F46]/50 backdrop-blur-sm px-4 py-2 rounded-lg hover-lift animate-float animation-delay-200">
                  Licensed & Insured
                </span>
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover-lift animate-float animation-delay-400">
                  Free Quotes
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 gap-12">
            {/* Services List */}
            <div className="lg:col-span-2">
              {/* Services Header */}
              <div className="mb-12 animate-fade-in-up">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-3xl font-bold text-[#292524]">
                    Our Melbourne Services
                  </h2>
                  <span className="bg-[#C9A24D] text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse-scale">
                    MELBOURNE
                  </span>
                </div>
                <p className="text-lg text-[#1F2933] leading-relaxed mb-8">
                  Browse our comprehensive range of professional tiling and renovation services available across Melbourne.
                  Each service comes with quality assurance and expert workmanship.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {servicesData.map((service, index) => (
                  <div
                    key={service.id}
                    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover-lift stagger-item animate-fade-in-up opacity-0-initial"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <Link href={`/services/${service.slug}`}>
                      {/* Service Image */}
                      <div className="relative h-48 w-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent z-10"></div>
                        <div className="absolute top-4 left-4 z-20">
                          <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                            Melbourne
                          </span>
                        </div>
                        <Image
                          src={service.mainImage}
                          alt={`${service.title} - Melbourne Service`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Service Content */}
                      <div className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="text-3xl text-[#C9A24D] group-hover:animate-swing-hover">{service.icon}</div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-[#292524] mb-2 group-hover:text-[#C9A24D] transition-colors">
                              {service.title}
                            </h3>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-semibold text-[#C9A24D] bg-[#C9A24D]/10 px-2 py-1 rounded">
                                {service.duration}
                              </span>
                              <span className="text-xs text-[#78716C]">• From {service.pricing}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-[#78716C] mb-6 line-clamp-3">
                          {service.shortDesc}
                        </p>

                        <div className="pt-4 border-t border-gray-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-[#3F3F46] font-medium group-hover:text-[#C9A24D] transition-colors">
                              View Details
                              <svg
                                className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </div>
                            <div className="text-sm text-[#78716C]">
                              Melbourne Service
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Why Choose Us Section */}
              <div className="mt-16 bg-gradient-to-r from-[#C9A24D]/5 to-[#3F3F46]/5 rounded-xl p-8 animate-fade-in-up animation-delay-500">
                <h3 className="text-2xl font-bold text-[#292524] mb-6">
                  Why Choose Our Melbourne Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow hover-lift animate-fade-in-left animation-delay-600">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#C9A24D]/10 rounded-lg flex items-center justify-center animate-float">
                        <div className="text-2xl">🏆</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#292524] mb-2">Expert Craftsmanship</h4>
                        <p className="text-sm text-[#78716C]">Years of experience delivering quality tiling work across Melbourne</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow hover-lift animate-fade-in-right animation-delay-700">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#C9A24D]/10 rounded-lg flex items-center justify-center animate-float animation-delay-300">
                        <div className="text-2xl">📋</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#292524] mb-2">Fully Certified</h4>
                        <p className="text-sm text-[#78716C]">Licensed, insured, and compliant with Australian standards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>         
        </div>
      </div>
    </>
  );
}