// import Link from "next/link";

// export default function ServiceDetail({ service }) {
//   return (
//     <div className="bg-[#FAFAF9] min-h-screen">
//       <div className="h-[50vh] bg-[#3F3F46] flex items-center justify-center">
//         <h1 className="text-5xl text-white font-bold">
//           {service.title}
//         </h1>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 py-16">
//         <p className="text-lg mb-10">{service.fullDesc}</p>

//         <h3 className="text-2xl font-bold mb-4">Included</h3>
//         <ul className="space-y-2">
//           {service.inclusions.map((item, i) => (
//             <li key={i}>✔ {item}</li>
//           ))}
//         </ul>

//         <Link
//           href="/contact"
//           className="inline-block mt-10 bg-[#C9A24D] text-white px-6 py-3 rounded"
//         >
//           Get Quote
//         </Link>
//       </div>
//     </div>
//   );
// }

// "use client"
// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";

// export default function ServiceDetail({ service }) {
//   const [selectedImage, setSelectedImage] = useState(0);

//   return (
//     <div className="bg-[#FAFAF9] min-h-screen">
//       {/* Hero Section */}
//       <div className="relative h-[60vh] overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-[#3F3F46]/90 to-[#292524]/80 z-10"></div>
//         <Image
//           src={service.images[selectedImage]}
//           alt={service.title}
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="relative z-20 h-full flex items-center justify-center px-6">
//           <div className="text-center max-w-4xl">
//             {/* <div className="text-7xl mb-6">{service.icon}</div> */}
//             <h1 className="text-5xl md:text-6xl text-white font-bold mb-6">
//               {service.title}
//             </h1>
//             <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
//               {service.shortDesc}
//             </p>
//             <div className="flex items-center justify-center gap-6 text-white">
//               <span className="bg-[#C9A24D]/20 backdrop-blur-sm px-4 py-2 rounded-lg">
//                 {service.pricing}
//               </span>
//               <span className="bg-[#3F3F46]/50 backdrop-blur-sm px-4 py-2 rounded-lg">
//                 {service.duration}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Main Content */}
//           <div className="lg:col-span-2">
//             <div className="mb-12">
//               <h2 className="text-3xl font-bold text-[#292524] mb-6">
//                 About This Service
//               </h2>
//               <p className="text-lg text-[#1F2933] leading-relaxed mb-8">
//                 {service.fullDesc}
//               </p>
//             </div>

//             {/* Image Gallery */}
//             <div className="mb-12">
//               <h3 className="text-2xl font-bold text-[#292524] mb-6">
//                 Project Gallery
//               </h3>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//                 {service.images.map((img, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSelectedImage(index)}
//                     className={`relative h-32 rounded-lg overflow-hidden transition-all ${
//                       selectedImage === index 
//                       ? 'ring-2 ring-[#C9A24D] ring-offset-2' 
//                       : 'opacity-80 hover:opacity-100'
//                     }`}
//                   >
//                     <Image
//                       src={img}
//                       alt={`${service.title} - ${index + 1}`}
//                       fill
//                       className="object-cover"
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Inclusions */}
//             <div className="mb-12">
//               <h3 className="text-2xl font-bold text-[#292524] mb-6">
//                 What's Included
//               </h3>
//               <div className="bg-white rounded-xl p-6 shadow-lg">
//                 <ul className="space-y-3">
//                   {service.inclusions.map((item, i) => (
//                     <li key={i} className="flex items-start">
//                       <div className="flex-shrink-0 w-6 h-6 bg-[#C9A24D]/10 rounded-full flex items-center justify-center mr-3 mt-1">
//                         <div className="w-2 h-2 bg-[#C9A24D] rounded-full"></div>
//                       </div>
//                       <span className="text-[#1F2933]">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* FAQ */}
//             {service.faqs && service.faqs.length > 0 && (
//               <div className="mb-12">
//                 <h3 className="text-2xl font-bold text-[#292524] mb-6">
//                   Frequently Asked Questions
//                 </h3>
//                 <div className="space-y-4">
//                   {service.faqs.map((faq, i) => (
//                     <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
//                       <h4 className="font-bold text-[#292524] mb-2">
//                         {faq.q}
//                       </h4>
//                       <p className="text-[#1F2933]">{faq.a}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-24">
//               {/* CTA Card */}
//               <div className="bg-[#292524] rounded-xl p-8 mb-8 shadow-xl">
//                 <h3 className="text-2xl font-bold text-white mb-6">
//                   Ready to Transform Your Space?
//                 </h3>
//                 <p className="text-white/80 mb-8">
//                   Get a free, no-obligation quote for your project
//                 </p>
//                 <Link
//                   href="/contact"
//                   className="block w-full bg-[#C9A24D] hover:bg-[#B89246] text-white text-center font-semibold py-4 px-6 rounded-lg transition-colors mb-4"
//                 >
//                   Get Free Quote
//                 </Link>
//                 <Link
//                   href="/services"
//                   className="block w-full bg-transparent hover:bg-white/10 text-white text-center font-semibold py-3 px-6 rounded-lg border border-white/20 transition-colors"
//                 >
//                   View All Services
//                 </Link>
//               </div>

//               {/* Service Details Card */}
//               <div className="bg-white rounded-xl p-8 shadow-lg">
//                 <h4 className="text-xl font-bold text-[#292524] mb-6">
//                   Service Details
//                 </h4>
//                 <div className="space-y-4">
//                   <div className="flex items-center">
//                     <div className="w-10 h-10 bg-[#C9A24D]/10 rounded-lg flex items-center justify-center mr-4">
//                       <span className="text-xl">{service.icon}</span>
//                     </div>
//                     <div>
//                       <p className="text-sm text-[#78716C]">Service Type</p>
//                       <p className="font-semibold text-[#292524]">{service.title}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center">
//                     <div className="w-10 h-10 bg-[#3F3F46]/10 rounded-lg flex items-center justify-center mr-4">
//                       <svg className="w-5 h-5 text-[#3F3F46]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-sm text-[#78716C]">Duration</p>
//                       <p className="font-semibold text-[#292524]">{service.duration}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center">
//                     <div className="w-10 h-10 bg-[#1F2933]/10 rounded-lg flex items-center justify-center mr-4">
//                       <svg className="w-5 h-5 text-[#1F2933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-sm text-[#78716C]">Starting From</p>
//                       <p className="font-semibold text-[#292524]">{service.pricing}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client"
// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";

// export default function ServiceDetail({ service }) {
//   const [selectedImage, setSelectedImage] = useState(0);

//   return (
//     <>
//       {/* SEO Meta Tags would be added in page.js or layout.js */}
//       <div className="w-full bg-gray-50 py-16 px-8 ">
//         {/* Hero Section with Local Keywords */}
//         <div className="relative h-[60vh] overflow-hidden rounded-t-[32px]">
//           <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 to-[#3F3F46]/90 z-10"></div>
//           <Image
//             src={service.images[selectedImage]}
//             alt={`${service.title} - Melbourne Tiling Services`}
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="relative z-20 h-full flex items-center justify-center px-6">
//             <div className="text-center max-w-4xl">
//               <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
//                 <span className="text-white text-sm font-medium">Melbourne Service Area</span>
//               </div>
//               <h1 className="text-5xl md:text-6xl text-white font-bold mb-6">
//                 {service.title}
//               </h1>
//               <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
//                 {service.shortDesc}
//               </p>
//               <div className="flex flex-wrap items-center justify-center gap-4 text-white">
//                 <span className="bg-[#C9A24D]/20 backdrop-blur-sm px-4 py-2 rounded-lg">
//                   {service.pricing}
//                 </span>
//                 <span className="bg-[#3F3F46]/50 backdrop-blur-sm px-4 py-2 rounded-lg">
//                   {service.duration}
//                 </span>
//                 <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
//                   Servicing All Melbourne
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto px-6 py-16">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//             {/* Main Content */}
//             <div className="lg:col-span-2">
//               {/* Service Overview with Local SEO */}
//               <div className="mb-12">
//                 <div className="flex items-center gap-3 mb-6">
//                   <h2 className="text-3xl font-bold text-[#292524]">
//                     About Our {service.title.split('Melbourne')[0]} Service
//                   </h2>
//                   <span className="bg-[#C9A24D] text-white text-xs font-bold px-3 py-1 rounded-full">
//                     MELBOURNE
//                   </span>
//                 </div>
//                 <p className="text-lg text-[#1F2933] leading-relaxed mb-8">
//                   {service.fullDesc}
//                 </p>
                
//                 {/* Local Service Area */}
//                 <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
//                   <h3 className="text-xl font-bold text-[#292524] mb-3 flex items-center gap-2">
//                     <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                     Service Areas in Melbourne
//                   </h3>
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
//                     {['CBD', 'Eastern Suburbs', 'Northern Suburbs', 'Western Suburbs', 'Southern Suburbs', 'Mornington Peninsula', 'Yarra Valley', 'Surrounding Areas'].map((area, i) => (
//                       <span key={i} className="bg-white px-3 py-2 rounded-lg text-sm text-[#1F2933] border border-gray-200">
//                         {area}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Project Gallery */}
//               <div className="mb-12">
//                 <h3 className="text-2xl font-bold text-[#292524] mb-6">
//                   Our Melbourne Projects Gallery
//                 </h3>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//                   {service.images.map((img, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setSelectedImage(index)}
//                       className={`relative h-32 rounded-lg overflow-hidden transition-all ${
//                         selectedImage === index 
//                         ? 'ring-2 ring-[#C9A24D] ring-offset-2' 
//                         : 'opacity-80 hover:opacity-100'
//                       }`}
//                     >
//                       <Image
//                         src={img}
//                         alt={`${service.title} project ${index + 1} in Melbourne`}
//                         fill
//                         className="object-cover"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Inclusions */}
//               <div className="mb-12">
//                 <h3 className="text-2xl font-bold text-[#292524] mb-6">
//                   Service Inclusions
//                 </h3>
//                 <div className="bg-white rounded-xl p-6 shadow-lg">
//                   <ul className="space-y-4">
//                     {service.inclusions.map((item, i) => (
//                       <li key={i} className="flex items-start group">
//                         <div className="flex-shrink-0 w-8 h-8 bg-[#C9A24D]/10 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-[#C9A24D] transition-colors">
//                           <div className="w-2 h-2 bg-[#C9A24D] rounded-full group-hover:bg-white transition-colors"></div>
//                         </div>
//                         <span className="text-[#1F2933] text-lg">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               {/* Pricing Guide */}
//               <div className="mb-12 bg-gradient-to-r from-[#C9A24D]/5 to-[#3F3F46]/5 rounded-xl p-8">
//                 <h3 className="text-2xl font-bold text-[#292524] mb-6">
//                   Melbourne Pricing Guide
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="bg-white p-6 rounded-xl shadow">
//                     <h4 className="font-bold text-[#292524] mb-3">Standard Service</h4>
//                     <div className="text-3xl font-bold text-[#C9A24D] mb-2">{service.pricing}</div>
//                     <p className="text-[#78716C] text-sm">Includes materials & labor</p>
//                   </div>
//                   <div className="bg-white p-6 rounded-xl shadow">
//                     <h4 className="font-bold text-[#292524] mb-3">Premium Upgrade</h4>
//                     <div className="text-3xl font-bold text-[#3F3F46] mb-2">+20-30%</div>
//                     <p className="text-[#78716C] text-sm">Premium materials & extended warranty</p>
//                   </div>
//                 </div>
//                 <p className="text-sm text-[#78716C] mt-6">*All prices include GST. Free quotes for Melbourne residents.</p>
//               </div>

//               {/* FAQ with Local Focus */}
//               {service.faqs && service.faqs.length > 0 && (
//                 <div className="mb-12">
//                   <h3 className="text-2xl font-bold text-[#292524] mb-6">
//                     Frequently Asked Questions - Melbourne
//                   </h3>
//                   <div className="space-y-4">
//                     {service.faqs.map((faq, i) => (
//                       <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
//                         <h4 className="font-bold text-[#292524] mb-3 flex items-start gap-3">
//                           <span className="bg-[#C9A24D] text-white text-sm font-bold px-2 py-1 rounded">Q</span>
//                           {faq.q}
//                         </h4>
//                         <p className="text-[#1F2933] pl-10">{faq.a}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Local Testimonial Section */}
//               <div className="mb-12 bg-white rounded-xl p-8 shadow-lg">
//                 <h3 className="text-2xl font-bold text-[#292524] mb-6">
//                   Melbourne Customer Reviews
//                 </h3>
//                 <div className="space-y-6">
//                   <div className="border-l-4 border-[#C9A24D] pl-6 py-4">
//                     <p className="text-[#1F2933] italic mb-3">"Professional service from start to finish. The team transformed our bathroom in Brighton exactly as promised."</p>
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
//                       <div>
//                         <div className="font-bold text-[#292524]">Sarah J.</div>
//                         <div className="text-sm text-[#78716C]">Brighton, Melbourne</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Sidebar with Local CTA */}
//             <div className="lg:col-span-1">
//               <div className="sticky top-24 space-y-8">
//                 {/* Primary CTA Card */}
//                 <div className="bg-gradient-to-br from-[#292524] to-[#1F2933] rounded-xl p-8 shadow-xl">
//                   <h3 className="text-2xl font-bold text-white mb-6">
//                     Get Your Melbourne Quote
//                   </h3>
//                   <p className="text-white/80 mb-8">
//                     Free, no-obligation consultation for Melbourne residents
//                   </p>
//                   <Link
//                     href="/contact"
//                     className="block w-full bg-gradient-to-r from-[#C9A24D] to-[#B89246] hover:from-[#B89246] hover:to-[#A8823E] text-white text-center font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg mb-4"
//                   >
//                     Book Free Consultation
//                   </Link>
//                   <div className="text-center">
//                     <div className="text-white/60 text-sm mb-2">Or call us directly</div>
//                     <a href="tel:+61300000000" className="text-white text-xl font-bold hover:text-[#C9A24D] transition-colors">
//                       (03) 0000 0000
//                     </a>
//                   </div>
//                 </div>

//                 {/* Service Details Card */}
//                 <div className="bg-white rounded-xl p-8 shadow-lg">
//                   <h4 className="text-xl font-bold text-[#292524] mb-6">
//                     Service Summary
//                   </h4>
//                   <div className="space-y-4">
//                     <div className="flex items-center">
//                       <div className="w-10 h-10 bg-[#C9A24D]/10 rounded-lg flex items-center justify-center mr-4">
//                         <span className="text-xl">{service.icon}</span>
//                       </div>
//                       <div>
//                         <p className="text-sm text-[#78716C]">Service Type</p>
//                         <p className="font-semibold text-[#292524]">{service.title}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center">
//                       <div className="w-10 h-10 bg-[#3F3F46]/10 rounded-lg flex items-center justify-center mr-4">
//                         <svg className="w-5 h-5 text-[#3F3F46]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg>
//                       </div>
//                       <div>
//                         <p className="text-sm text-[#78716C]">Project Duration</p>
//                         <p className="font-semibold text-[#292524]">{service.duration}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center">
//                       <div className="w-10 h-10 bg-[#1F2933]/10 rounded-lg flex items-center justify-center mr-4">
//                         <svg className="w-5 h-5 text-[#1F2933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg>
//                       </div>
//                       <div>
//                         <p className="text-sm text-[#78716C]">Starting Price</p>
//                         <p className="font-semibold text-[#292524]">{service.pricing}</p>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="mt-8 pt-8 border-t border-gray-200">
//                     <h5 className="font-bold text-[#292524] mb-4">Why Choose Us in Melbourne</h5>
//                     <ul className="space-y-2">
//                       <li className="flex items-center text-sm text-[#78716C]">
//                         <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                         Local Melbourne Experts
//                       </li>
//                       <li className="flex items-center text-sm text-[#78716C]">
//                         <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                         Australian Standards Compliant
//                       </li>
//                       <li className="flex items-center text-sm text-[#78716C]">
//                         <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                         Quality Materials & Workmanship
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 {/* Related Services */}
//                 <div className="bg-white rounded-xl p-8 shadow-lg">
//                   <h4 className="text-xl font-bold text-[#292524] mb-6">
//                     Other Melbourne Services
//                   </h4>
//                   <div className="space-y-4">
//                     <Link href="/services/bathroom-tiling" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
//                       <div className="font-semibold text-[#292524]">Bathroom Tiling</div>
//                       <div className="text-sm text-[#78716C]">Professional waterproofing & tiling</div>
//                     </Link>
//                     <Link href="/services/kitchen-splashback-tiling" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
//                       <div className="font-semibold text-[#292524]">Kitchen Splashbacks</div>
//                       <div className="text-sm text-[#78716C]">Custom kitchen tiling solutions</div>
//                     </Link>
//                     <Link href="/services/outdoor-pool-tiling" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
//                       <div className="font-semibold text-[#292524]">Outdoor & Pool Tiling</div>
//                       <div className="text-sm text-[#78716C]">Durable outdoor installations</div>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom CTA */}
//           <div className="mt-16 bg-gradient-to-r from-[#111827] to-[#3F3F46] rounded-2xl p-12 text-center">
//             <h3 className="text-3xl font-bold text-white mb-6">
//               Ready to Transform Your Melbourne Space?
//             </h3>
//             <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
//               Contact us today for a free, no-obligation quote on your {service.title.split('Melbourne')[0]} project.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 href="/contact"
//                 className="bg-white text-[#C9A24D] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors"
//               >
//                 Get Your Free Quote
//               </Link>
//               <a
//                 href="tel:+61300000000"
//                 className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-lg transition-colors"
//               >
//                 Call: (03) 0000 0000
//               </a>
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
import { useState } from "react";

export default function ServiceDetail({ service }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      <div className="w-full bg-gray-50 py-16 px-8">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden rounded-t-[32px] animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 to-[#3F3F46]/90 z-10"></div>
          <Image
            src={service.images[selectedImage]}
            alt={`${service.title} - Melbourne Tiling Services`}
            fill
            className="object-cover transition-transform duration-700"
            priority
          />
          <div className="relative z-20 h-full flex items-center justify-center px-6">
            <div className="text-center max-w-4xl">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in-down">
                <span className="text-white text-sm font-medium">Melbourne Service Area</span>
              </div>
              <h1 className="text-5xl md:text-6xl text-white font-bold mb-6 animate-fade-in-up animation-delay-200">
                {service.title}
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
                {service.shortDesc}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-white animate-fade-in-up animation-delay-600">
                <span className="bg-[#C9A24D]/20 backdrop-blur-sm px-4 py-2 rounded-lg hover-lift animate-float">
                  {service.pricing}
                </span>
                <span className="bg-[#3F3F46]/50 backdrop-blur-sm px-4 py-2 rounded-lg hover-lift animate-float animation-delay-200">
                  {service.duration}
                </span>
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover-lift animate-float animation-delay-400">
                  Servicing All Melbourne
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Service Overview */}
              <div className="mb-12 animate-fade-in-up animation-delay-300">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-3xl font-bold text-[#292524]">
                    About Our {service.title.split('Melbourne')[0]} Service
                  </h2>
                  <span className="bg-[#C9A24D] text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse-scale">
                    MELBOURNE
                  </span>
                </div>
                <p className="text-lg text-[#1F2933] leading-relaxed mb-8">
                  {service.fullDesc}
                </p>
                
                {/* Local Service Area */}
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8 animate-fade-in-up animation-delay-400">
                  <h3 className="text-xl font-bold text-[#292524] mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600 animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Service Areas in Melbourne
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {['CBD', 'Eastern Suburbs', 'Northern Suburbs', 'Western Suburbs', 'Southern Suburbs', 'Mornington Peninsula', 'Yarra Valley', 'Surrounding Areas'].map((area, i) => (
                      <span 
                        key={i} 
                        className="bg-white px-3 py-2 rounded-lg text-sm text-[#1F2933] border border-gray-200 hover-lift animate-fade-in-up"
                        style={{ animationDelay: `${500 + i * 100}ms` }}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Gallery */}
              <div className="mb-12 animate-fade-in-up animation-delay-500">
                <h3 className="text-2xl font-bold text-[#292524] mb-6">
                  Our Melbourne Projects Gallery
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {service.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative h-32 rounded-lg overflow-hidden transition-all duration-300 hover-scale animate-scale-in ${
                        selectedImage === index 
                        ? 'ring-2 ring-[#C9A24D] ring-offset-2' 
                        : 'opacity-80 hover:opacity-100'
                      }`}
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                    >
                      <Image
                        src={img}
                        alt={`${service.title} project ${index + 1} in Melbourne`}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Inclusions */}
              <div className="mb-12 animate-fade-in-up animation-delay-600">
                <h3 className="text-2xl font-bold text-[#292524] mb-6">
                  Service Inclusions
                </h3>
                <div className="bg-white rounded-xl p-6 shadow-lg hover-lift">
                  <ul className="space-y-4">
                    {service.inclusions.map((item, i) => (
                      <li 
                        key={i} 
                        className="flex items-start group animate-fade-in-left"
                        style={{ animationDelay: `${700 + i * 100}ms` }}
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-[#C9A24D]/10 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-[#C9A24D] transition-colors duration-300">
                          <div className="w-2 h-2 bg-[#C9A24D] rounded-full group-hover:bg-white transition-colors duration-300 group-hover:animate-pulse-scale"></div>
                        </div>
                        <span className="text-[#1F2933] text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pricing Guide */}
              <div className="mb-12 bg-gradient-to-r from-[#C9A24D]/5 to-[#3F3F46]/5 rounded-xl p-8 animate-fade-in-up animation-delay-700">
                <h3 className="text-2xl font-bold text-[#292524] mb-6">
                  Melbourne Pricing Guide
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow hover-lift animate-fade-in-left animation-delay-800">
                    <h4 className="font-bold text-[#292524] mb-3">Standard Service</h4>
                    <div className="text-3xl font-bold text-[#C9A24D] mb-2 animate-pulse-scale">{service.pricing}</div>
                    <p className="text-[#78716C] text-sm">Includes materials & labor</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow hover-lift animate-fade-in-right animation-delay-900">
                    <h4 className="font-bold text-[#292524] mb-3">Premium Upgrade</h4>
                    <div className="text-3xl font-bold text-[#3F3F46] mb-2">+20-30%</div>
                    <p className="text-[#78716C] text-sm">Premium materials & extended warranty</p>
                  </div>
                </div>
                <p className="text-sm text-[#78716C] mt-6 animate-fade-in animation-delay-1000">*All prices include GST. Free quotes for Melbourne residents.</p>
              </div>

              {/* FAQ Section */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="mb-12 animate-fade-in-up animation-delay-800">
                  <h3 className="text-2xl font-bold text-[#292524] mb-6">
                    Frequently Asked Questions - Melbourne
                  </h3>
                  <div className="space-y-4">
                    {service.faqs.map((faq, i) => (
                      <div 
                        key={i} 
                        className="bg-white rounded-xl p-6 shadow-lg hover-lift animate-fade-in-up"
                        style={{ animationDelay: `${900 + i * 150}ms` }}
                      >
                        <h4 className="font-bold text-[#292524] mb-3 flex items-start gap-3">
                          <span className="bg-[#C9A24D] text-white text-sm font-bold px-2 py-1 rounded animate-pulse-scale">Q</span>
                          {faq.q}
                        </h4>
                        <p className="text-[#1F2933] pl-10">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonial Section */}
              <div className="mb-12 bg-white rounded-xl p-8 shadow-lg hover-lift animate-fade-in-up animation-delay-900">
                <h3 className="text-2xl font-bold text-[#292524] mb-6">
                  Melbourne Customer Reviews
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-[#C9A24D] pl-6 py-4 animate-fade-in-left animation-delay-1000">
                    <p className="text-[#1F2933] italic mb-3">"Professional service from start to finish. The team transformed our bathroom in Brighton exactly as promised."</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse-scale"></div>
                      <div>
                        <div className="font-bold text-[#292524]">Sarah J.</div>
                        <div className="text-sm text-[#78716C]">Brighton, Melbourne</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Primary CTA Card */}
                <div className="bg-gradient-to-br from-[#292524] to-[#1F2933] rounded-xl p-8 shadow-xl hover-lift animate-fade-in-right animation-delay-400">
                  <h3 className="text-2xl font-bold text-white mb-6 animate-fade-in-up animation-delay-500">
                    Get Your Melbourne Quote
                  </h3>
                  <p className="text-white/80 mb-8 animate-fade-in-up animation-delay-600">
                    Free, no-obligation consultation for Melbourne residents
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full bg-gradient-to-r from-[#C9A24D] to-[#B89246] hover:from-[#B89246] hover:to-[#A8823E] text-white text-center font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 mb-4 animate-fade-in-up animation-delay-700"
                  >
                    Book Free Consultation
                  </Link>
                  <div className="text-center animate-fade-in-up animation-delay-800">
                    <div className="text-white/60 text-sm mb-2">Or call us directly</div>
                    <a href="tel:+61300000000" className="text-white text-xl font-bold hover:text-[#C9A24D] transition-colors animate-pulse-scale">
                      (03) 0000 0000
                    </a>
                  </div>
                </div>

                {/* Service Details Card */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover-lift animate-fade-in-right animation-delay-500">
                  <h4 className="text-xl font-bold text-[#292524] mb-6">
                    Service Summary
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center animate-fade-in-left animation-delay-600 group">
                      <div className="w-10 h-10 bg-[#C9A24D]/10 rounded-lg flex items-center justify-center mr-4 group-hover:animate-swing-hover">
                        <span className="text-xl">{service.icon}</span>
                      </div>
                      <div>
                        <p className="text-sm text-[#78716C]">Service Type</p>
                        <p className="font-semibold text-[#292524]">{service.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center animate-fade-in-left animation-delay-700 group">
                      <div className="w-10 h-10 bg-[#3F3F46]/10 rounded-lg flex items-center justify-center mr-4 group-hover:animate-float">
                        <svg className="w-5 h-5 text-[#3F3F46]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-[#78716C]">Project Duration</p>
                        <p className="font-semibold text-[#292524]">{service.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center animate-fade-in-left animation-delay-800 group">
                      <div className="w-10 h-10 bg-[#1F2933]/10 rounded-lg flex items-center justify-center mr-4 group-hover:animate-float">
                        <svg className="w-5 h-5 text-[#1F2933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-[#78716C]">Starting Price</p>
                        <p className="font-semibold text-[#292524]">{service.pricing}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h5 className="font-bold text-[#292524] mb-4">Why Choose Us in Melbourne</h5>
                    <ul className="space-y-2">
                      {[
                        'Local Melbourne Experts',
                        'Australian Standards Compliant',
                        'Quality Materials & Workmanship'
                      ].map((item, i) => (
                        <li 
                          key={i} 
                          className="flex items-center text-sm text-[#78716C] animate-fade-in-left"
                          style={{ animationDelay: `${900 + i * 100}ms` }}
                        >
                          <svg className="w-4 h-4 text-green-600 mr-2 animate-scale-in" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Related Services */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover-lift animate-fade-in-right animation-delay-600">
                  <h4 className="text-xl font-bold text-[#292524] mb-6">
                    Other Melbourne Services
                  </h4>
                  <div className="space-y-4">
                    {[
                      { href: '/services/bathroom-tiling', title: 'Bathroom Tiling', desc: 'Professional waterproofing & tiling' },
                      { href: '/services/kitchen-splashback-tiling', title: 'Kitchen Splashbacks', desc: 'Custom kitchen tiling solutions' },
                      { href: '/services/outdoor-pool-tiling', title: 'Outdoor & Pool Tiling', desc: 'Durable outdoor installations' }
                    ].map((item, i) => (
                      <Link 
                        key={i}
                        href={item.href} 
                        className="block p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:border-[#C9A24D] hover:-translate-y-1 animate-fade-in-up"
                        style={{ animationDelay: `${700 + i * 100}ms` }}
                      >
                        <div className="font-semibold text-[#292524] group-hover:text-[#C9A24D] transition-colors">{item.title}</div>
                        <div className="text-sm text-[#78716C]">{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-r from-[#111827] to-[#3F3F46] rounded-2xl p-12 text-center animate-fade-in-up animation-delay-500 hover-glow">
            <h3 className="text-3xl font-bold text-white mb-6 animate-fade-in-up animation-delay-600">
              Ready to Transform Your Melbourne Space?
            </h3>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-700">
              Contact us today for a free, no-obligation quote on your {service.title.split('Melbourne')[0]} project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-800">
              <Link
                href="/contact"
                className="bg-white text-[#C9A24D] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Get Your Free Quote
              </Link>
              <a
                href="tel:+61300000000"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:-translate-y-1"
              >
                Call: (03) 0000 0000
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}