// "use client"

// import { useRouter, useParams } from 'next/navigation';
// import { useState } from 'react';
// import { 
//   FaArrowLeft, FaCalendar, FaMapMarkerAlt, FaUser, 
//   FaDollarSign, FaClock, FaCheckCircle, FaTools,
//   FaShieldAlt, FaStar, FaPhone, FaEnvelope,
//   FaImages, FaChevronLeft, FaChevronRight, FaClipboardList
// } from 'react-icons/fa';
// import { projects } from '../lib/projectData';

// export default function ProjectDetail() {
//   const router = useRouter();
//   const params = useParams();
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Find project by ID (in real app, this would come from API)
//   const project = projects.find(p => p.id === params.id);

//   if (!project) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
//           <button 
//             onClick={() => router.push('/projects')}
//             className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//           >
//             Back to Projects
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const hasImages = project.images && project.images.length > 0;
//   const totalImages = hasImages ? project.images.length : 0;

//   const nextImage = () => {
//     if (hasImages) {
//       setCurrentImageIndex((prev) => (prev + 1) % totalImages);
//     }
//   };

//   const prevImage = () => {
//     if (hasImages) {
//       setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
//     }
//   };

//   const getStatusColor = (status) => {
//     switch(status) {
//       case 'completed': return 'bg-green-100 text-green-800';
//       case 'in-progress': return 'bg-blue-100 text-blue-800';
//       case 'upcoming': return 'bg-yellow-100 text-yellow-800';
//       case 'on-hold': return 'bg-orange-100 text-orange-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Back Button */}
//       <div className="sticky top-0 z-10 bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 py-4">
//           <button
//             onClick={() => router.push('/projects')}
//             className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
//           >
//             <FaArrowLeft />
//             Back to Projects
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Project Header */}
//         <div className="bg-white rounded-xl shadow p-6 mb-8">
//           <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
//                 <span className={`px-4 py-1 rounded-full text-sm font-bold ${getStatusColor(project.status)}`}>
//                   {project.status.replace('-', ' ').toUpperCase()}
//                 </span>
//               </div>

//               <p className="text-gray-600 text-lg mb-6">{project.description}</p>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                     <FaMapMarkerAlt className="text-blue-600" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-500">Location</div>
//                     <div className="font-semibold">{project.location}</div>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
//                     <FaUser className="text-green-600" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-500">Client</div>
//                     <div className="font-semibold">{project.client}</div>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
//                     <FaDollarSign className="text-amber-600" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-500">Budget</div>
//                     <div className="font-semibold">{project.budget}</div>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
//                     <FaClock className="text-purple-600" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-500">Duration</div>
//                     <div className="font-semibold">{project.duration}</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Progress Bar for In-Progress Projects */}
//             {project.progress && (
//               <div className="lg:w-64">
//                 <div className="text-center mb-2">
//                   <span className="text-2xl font-bold text-blue-600">{project.progress}%</span>
//                   <div className="text-sm text-gray-500">Complete</div>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-3">
//                   <div 
//                     className="bg-blue-600 h-3 rounded-full transition-all duration-300"
//                     style={{ width: `${project.progress}%` }}
//                   />
//                 </div>
//                 <div className="flex justify-between text-xs text-gray-500 mt-1">
//                   <span>Start: {project.startDate}</span>
//                   <span>Target: {project.completionDate}</span>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column - Images & Gallery */}
//           <div className="lg:col-span-2">
//             {/* Main Image */}
//             <div className="bg-white rounded-xl shadow overflow-hidden mb-6">
//               {hasImages ? (
//                 <div className="relative">
//                   <img 
//                     src={project.images[currentImageIndex]} 
//                     alt={`${project.title} - Image ${currentImageIndex + 1}`}
//                     className="w-full h-96 object-cover"
//                   />

//                   {/* Navigation Arrows */}
//                   {totalImages > 1 && (
//                     <>
//                       <button
//                         onClick={prevImage}
//                         className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"
//                       >
//                         <FaChevronLeft />
//                       </button>
//                       <button
//                         onClick={nextImage}
//                         className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"
//                       >
//                         <FaChevronRight />
//                       </button>
//                     </>
//                   )}

//                   {/* Image Counter */}
//                   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
//                     {currentImageIndex + 1} / {totalImages}
//                   </div>
//                 </div>
//               ) : (
//                 <div className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex flex-col items-center justify-center">
//                   <FaImages className="text-gray-400 text-5xl mb-4" />
//                   <span className="text-gray-500">No images available</span>
//                 </div>
//               )}

//               {/* Thumbnails */}
//               {hasImages && totalImages > 1 && (
//                 <div className="p-4 border-t">
//                   <div className="flex gap-2 overflow-x-auto pb-2">
//                     {project.images.map((img, index) => (
//                       <button
//                         key={index}
//                         onClick={() => setCurrentImageIndex(index)}
//                         className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
//                           currentImageIndex === index ? 'border-blue-500' : 'border-transparent'
//                         }`}
//                       >
//                         <img 
//                           src={img} 
//                           alt={`Thumbnail ${index + 1}`}
//                           className="w-full h-full object-cover"
//                         />
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Before/After Comparison */}
//             {project.beforeAfter && (
//               <div className="bg-white rounded-xl shadow p-6 mb-6">
//                 <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
//                   <FaImages className="text-blue-600" />
//                   Before & After
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <div className="text-center font-semibold text-gray-700 mb-2">Before</div>
//                     <div className="h-64 rounded-lg overflow-hidden">
//                       <img 
//                         src={project.beforeAfter.before} 
//                         alt="Before renovation"
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-center font-semibold text-gray-700 mb-2">After</div>
//                     <div className="h-64 rounded-lg overflow-hidden">
//                       <img 
//                         src={project.beforeAfter.after} 
//                         alt="After renovation"
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Right Column - Details */}
//           <div className="space-y-6">
//             {/* Services Provided */}
//             <div className="bg-white rounded-xl shadow p-6">
//               <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
//                 <FaTools className="text-blue-600" />
//                 Services Provided
//               </h2>
//               <ul className="space-y-3">
//                 {project.services?.map((service, index) => (
//                   <li key={index} className="flex items-center">
//                     <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
//                     <span>{service}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Project Team */}
//             {project.team && (
//               <div className="bg-white rounded-xl shadow p-6">
//                 <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
//                   <FaUser className="text-green-600" />
//                   Project Team
//                 </h2>
//                 <div className="space-y-4">
//                   {project.team.map((member, index) => (
//                     <div key={index} className="flex items-center gap-3">
//                       <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
//                         <span className="font-semibold text-gray-700">
//                           {member.name.split(' ').map(n => n[0]).join('')}
//                         </span>
//                       </div>
//                       <div>
//                         <div className="font-semibold">{member.name}</div>
//                         <div className="text-sm text-gray-500">{member.role}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Specifications */}
//             {project.specifications && (
//               <div className="bg-white rounded-xl shadow p-6">
//                 <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
//                   <FaClipboardList className="text-purple-600" />
//                   Specifications
//                 </h2>
//                 <div className="space-y-3">
//                   {Object.entries(project.specifications).map(([key, value]) => (
//                     <div key={key} className="flex justify-between border-b pb-2">
//                       <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
//                       <span className="font-semibold">{value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Testimonials */}
//             {project.testimonials && (
//               <div className="bg-white rounded-xl shadow p-6">
//                 <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
//                   <FaStar className="text-amber-600" />
//                   Client Feedback
//                 </h2>
//                 <div className="space-y-4">
//                   {project.testimonials.map((testimonial, index) => (
//                     <div key={index} className="border-l-4 border-amber-500 pl-4 py-2">
//                       <div className="flex items-center gap-1 mb-2">
//                         {[...Array(5)].map((_, i) => (
//                           <FaStar key={i} className={i < testimonial.rating ? 'text-amber-400' : 'text-gray-300'} />
//                         ))}
//                       </div>
//                       <p className="text-gray-600 italic mb-2">"{testimonial.text}"</p>
//                       <div className="font-semibold">{testimonial.author}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* CTA Card */}
//             <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow p-6 text-white">
//               <h3 className="text-xl font-bold mb-3">Like This Project?</h3>
//               <p className="mb-6">Get a free quote for your own tiling project</p>
//               <div className="space-y-3">
//                 <button className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-gray-100">
//                   Request Similar Quote
//                 </button>
//                 <div className="flex items-center justify-center gap-4">
//                   <button className="flex items-center gap-2 hover:text-blue-200">
//                     <FaPhone />
//                     <span>(03) 0000 0000</span>
//                   </button>
//                   <button className="flex items-center gap-2 hover:text-blue-200">
//                     <FaEnvelope />
//                     <span>Email Us</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Challenges & Solutions (if available) */}
//         {(project.challenges || project.solutions) && (
//           <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {project.challenges && (
//               <div className="bg-white rounded-xl shadow p-6">
//                 <h2 className="text-xl font-bold text-gray-900 mb-4">Challenges</h2>
//                 <ul className="space-y-2">
//                   {project.challenges.map((challenge, index) => (
//                     <li key={index} className="flex items-start">
//                       <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
//                         <span className="text-red-600 font-bold">!</span>
//                       </div>
//                       <span>{challenge}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {project.solutions && (
//               <div className="bg-white rounded-xl shadow p-6">
//                 <h2 className="text-xl font-bold text-gray-900 mb-4">Our Solutions</h2>
//                 <ul className="space-y-2">
//                   {project.solutions.map((solution, index) => (
//                     <li key={index} className="flex items-start">
//                       <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
//                         <FaCheckCircle className="text-green-600" />
//                       </div>
//                       <span>{solution}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         )}

//         {/* Related Projects */}
//         <div className="mt-12">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Projects</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {projects
//               .filter(p => p.category === project.category && p.id !== project.id)
//               .slice(0, 3)
//               .map(related => (
//                 <div 
//                   key={related.id}
//                   onClick={() => router.push(`/projects/${related.id}`)}
//                   className="bg-white rounded-xl shadow overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
//                 >
//                   {related.images && (
//                     <div className="h-40 overflow-hidden">
//                       <img 
//                         src={related.images[0]} 
//                         alt={related.title}
//                         className="w-full h-full object-cover hover:scale-105 transition-transform"
//                       />
//                     </div>
//                   )}
//                   <div className="p-4">
//                     <h3 className="font-bold text-gray-900 mb-2">{related.title}</h3>
//                     <div className="flex justify-between text-sm text-gray-500">
//                       <span>{related.location}</span>
//                       <span className="font-semibold">{related.budget}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   FaArrowLeft,
//   FaMapMarkerAlt,
//   FaUser,
//   FaDollarSign,
//   FaClock,
//   FaCheckCircle,
//   FaTools,
//   FaStar,
//   FaPhone,
//   FaEnvelope,
//   FaImages,
//   FaChevronLeft,
//   FaChevronRight,
//   FaClipboardList,
//   FaCalendar,
// } from "react-icons/fa";
// import { projects } from "../lib/projectData";

// export default function ProjectDetail({ project }) {
//   const router = useRouter();
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   if (!project) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-[#292524] mb-4">
//             Project Not Found
//           </h1>
//           <button
//             onClick={() => router.push("/projects")}
//             className="px-6 py-3 bg-[#C9A24D] text-white rounded-xl hover:bg-[#B8933E] transition-colors"
//           >
//             Back to Projects
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const hasImages = project.images && project.images.length > 0;
//   const totalImages = hasImages ? project.images.length : 0;

//   const nextImage = () => {
//     if (hasImages) {
//       setCurrentImageIndex((prev) => (prev + 1) % totalImages);
//     }
//   };

//   const prevImage = () => {
//     if (hasImages) {
//       setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "completed":
//         return "bg-green-100 text-green-800";
//       case "in-progress":
//         return "bg-blue-100 text-blue-800";
//       case "upcoming":
//         return "bg-yellow-100 text-yellow-800";
//       case "on-hold":
//         return "bg-orange-100 text-orange-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   const relatedProjects = projects
//     .filter((p) => p.category === project.category && p.id !== project.id)
//     .slice(0, 3);

//   return (
//     <div className="w-full bg-gray-50 py-16 px-8 rounded-t-[32px]">
//       {/* Back Button Header */}
//       {/* <div className="sticky top-0 z-10 bg-white shadow-sm border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
//           <button
//             onClick={() => router.push("/projects")}
//             className="flex items-center gap-2 text-[#78716C] hover:text-[#C9A24D] transition-colors"
//           >
//             <FaArrowLeft />
//             <span className="font-medium">Back to Projects</span>
//           </button>
//         </div>
//       </div> */}

//       {/* Main Content */}
//       <div className=" mx-auto px-4 sm:px-6 py-12">
//         {/* Project Header */}
//         <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8">
//           <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
//             <div className="flex-1">
//               <div className="flex items-center gap-3 mb-4 flex-wrap">
//                 <span className="bg-gray-100 text-[#3F3F46] text-sm font-medium px-3 py-1 rounded-full capitalize">
//                   {project.category}
//                 </span>
//                 <span
//                   className={`px-4 py-1 rounded-full text-sm font-bold ${getStatusColor(
//                     project.status
//                   )}`}
//                 >
//                   {project.status.replace("-", " ").toUpperCase()}
//                 </span>
//               </div>

//               <h1 className="text-3xl md:text-4xl font-bold text-[#292524] mb-4">
//                 {project.title}
//               </h1>

//               <p className="text-lg text-[#78716C] mb-8">{project.description}</p>

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                 <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
//                   <div className="w-12 h-12 bg-[#C9A24D]/10 rounded-lg flex items-center justify-center">
//                     <FaMapMarkerAlt className="text-[#C9A24D] text-lg" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-[#78716C]">Location</div>
//                     <div className="font-semibold text-[#292524]">
//                       {project.location}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
//                   <div className="w-12 h-12 bg-[#C9A24D]/10 rounded-lg flex items-center justify-center">
//                     <FaUser className="text-[#C9A24D] text-lg" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-[#78716C]">Client</div>
//                     <div className="font-semibold text-[#292524]">
//                       {project.client}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
//                   <div className="w-12 h-12 bg-[#C9A24D]/10 rounded-lg flex items-center justify-center">
//                     <FaDollarSign className="text-[#C9A24D] text-lg" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-[#78716C]">Budget</div>
//                     <div className="font-semibold text-[#C9A24D]">
//                       {project.budget}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
//                   <div className="w-12 h-12 bg-[#C9A24D]/10 rounded-lg flex items-center justify-center">
//                     <FaClock className="text-[#C9A24D] text-lg" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-[#78716C]">Duration</div>
//                     <div className="font-semibold text-[#292524]">
//                       {project.duration}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Progress Bar for In-Progress Projects */}
//             {project.progress !== undefined && (
//               <div className="lg:w-72 bg-gray-50 p-6 rounded-xl">
//                 <div className="text-center mb-4">
//                   <span className="text-4xl font-bold text-[#C9A24D]">
//                     {project.progress}%
//                   </span>
//                   <div className="text-sm text-[#78716C]">Complete</div>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
//                   <div
//                     className="bg-[#C9A24D] h-3 rounded-full transition-all duration-300"
//                     style={{ width: `${project.progress}%` }}
//                   />
//                 </div>
//                 <div className="flex justify-between text-xs text-[#78716C]">
//                   <span>Start: {project.startDate}</span>
//                   <span>Target: {project.completionDate}</span>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column - Images & Gallery */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Main Image */}
//             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
//               {hasImages ? (
//                 <div className="relative">
//                   <div className="relative h-[400px] md:h-[500px]">
//                     <Image
//                       src={project.images[currentImageIndex]}
//                       alt={`${project.title} - Image ${currentImageIndex + 1}`}
//                       fill
//                       className="object-cover"
//                       sizes="(max-width: 1024px) 100vw, 66vw"
//                     />
//                   </div>

//                   {/* Navigation Arrows */}
//                   {totalImages > 1 && (
//                     <>
//                       <button
//                         onClick={prevImage}
//                         className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
//                       >
//                         <FaChevronLeft className="text-[#292524]" />
//                       </button>
//                       <button
//                         onClick={nextImage}
//                         className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
//                       >
//                         <FaChevronRight className="text-[#292524]" />
//                       </button>
//                     </>
//                   )}

//                   {/* Image Counter */}
//                   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
//                     {currentImageIndex + 1} / {totalImages}
//                   </div>
//                 </div>
//               ) : (
//                 <div className="h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center">
//                   <FaImages className="text-[#78716C] text-5xl mb-4" />
//                   <span className="text-[#78716C]">No images available</span>
//                 </div>
//               )}

//               {/* Thumbnails */}
//               {hasImages && totalImages > 1 && (
//                 <div className="p-4 border-t border-gray-100">
//                   <div className="flex gap-3 overflow-x-auto pb-2">
//                     {project.images.map((img, index) => (
//                       <button
//                         key={index}
//                         onClick={() => setCurrentImageIndex(index)}
//                         className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
//                           currentImageIndex === index
//                             ? "border-[#C9A24D] shadow-lg"
//                             : "border-transparent opacity-60 hover:opacity-100"
//                         }`}
//                       >
//                         <Image
//                           src={img}
//                           alt={`Thumbnail ${index + 1}`}
//                           width={80}
//                           height={80}
//                           className="w-full h-full object-cover"
//                         />
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Before/After Comparison */}
//             {project.beforeAfter && (
//               <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
//                 <h2 className="text-xl font-bold text-[#292524] mb-6 flex items-center gap-2">
//                   <FaImages className="text-[#C9A24D]" />
//                   Before & After
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <div className="text-center font-semibold text-[#78716C] mb-3">
//                       Before
//                     </div>
//                     <div className="relative h-64 rounded-xl overflow-hidden">
//                       <Image
//                         src={project.beforeAfter.before}
//                         alt="Before renovation"
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-center font-semibold text-[#78716C] mb-3">
//                       After
//                     </div>
//                     <div className="relative h-64 rounded-xl overflow-hidden">
//                       <Image
//                         src={project.beforeAfter.after}
//                         alt="After renovation"
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Challenges & Solutions */}
//             {(project.challenges || project.solutions) && (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {project.challenges && (
//                   <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
//                     <h2 className="text-xl font-bold text-[#292524] mb-4">
//                       Challenges
//                     </h2>
//                     <ul className="space-y-3">
//                       {project.challenges.map((challenge, index) => (
//                         <li key={index} className="flex items-start">
//                           <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
//                             <span className="text-red-600 font-bold text-xs">
//                               !
//                             </span>
//                           </div>
//                           <span className="text-[#78716C]">{challenge}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {project.solutions && (
//                   <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
//                     <h2 className="text-xl font-bold text-[#292524] mb-4">
//                       Our Solutions
//                     </h2>
//                     <ul className="space-y-3">
//                       {project.solutions.map((solution, index) => (
//                         <li key={index} className="flex items-start">
//                           <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
//                             <FaCheckCircle className="text-green-600 text-xs" />
//                           </div>
//                           <span className="text-[#78716C]">{solution}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Right Column - Details */}
//           <div className="space-y-6">
//             {/* Services Provided */}
//             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
//               <h2 className="text-xl font-bold text-[#292524] mb-4 flex items-center gap-2">
//                 <FaTools className="text-[#C9A24D]" />
//                 Services Provided
//               </h2>
//               <ul className="space-y-3">
//                 {project.services?.map((service, index) => (
//                   <li key={index} className="flex items-center text-[#78716C]">
//                     <FaCheckCircle className="text-[#C9A24D] mr-3 flex-shrink-0" />
//                     <span>{service}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Project Team */}
//             {project.team && (
//               <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
//                 <h2 className="text-xl font-bold text-[#292524] mb-4 flex items-center gap-2">
//                   <FaUser className="text-[#C9A24D]" />
//                   Project Team
//                 </h2>
//                 <div className="space-y-4">
//                   {project.team.map((member, index) => (
//                     <div key={index} className="flex items-center gap-3">
//                       <div className="w-10 h-10 bg-[#C9A24D]/10 rounded-full flex items-center justify-center">
//                         <span className="font-semibold text-[#C9A24D]">
//                           {member.name
//                             .split(" ")
//                             .map((n) => n[0])
//                             .join("")}
//                         </span>
//                       </div>
//                       <div>
//                         <div className="font-semibold text-[#292524]">
//                           {member.name}
//                         </div>
//                         <div className="text-sm text-[#78716C]">{member.role}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Specifications */}
//             {project.specifications && (
//               <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
//                 <h2 className="text-xl font-bold text-[#292524] mb-4 flex items-center gap-2">
//                   <FaClipboardList className="text-[#C9A24D]" />
//                   Specifications
//                 </h2>
//                 <div className="space-y-3">
//                   {Object.entries(project.specifications).map(([key, value]) => (
//                     <div
//                       key={key}
//                       className="flex justify-between border-b border-gray-100 pb-3"
//                     >
//                       <span className="text-[#78716C] capitalize">
//                         {key.replace(/([A-Z])/g, " $1")}:
//                       </span>
//                       <span className="font-semibold text-[#292524]">{value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Testimonials */}
//             {project.testimonials && (
//               <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
//                 <h2 className="text-xl font-bold text-[#292524] mb-4 flex items-center gap-2">
//                   <FaStar className="text-[#C9A24D]" />
//                   Client Feedback
//                 </h2>
//                 <div className="space-y-4">
//                   {project.testimonials.map((testimonial, index) => (
//                     <div
//                       key={index}
//                       className="border-l-4 border-[#C9A24D] pl-4 py-2"
//                     >
//                       <div className="flex items-center gap-1 mb-2">
//                         {[...Array(5)].map((_, i) => (
//                           <FaStar
//                             key={i}
//                             className={
//                               i < testimonial.rating
//                                 ? "text-[#C9A24D]"
//                                 : "text-gray-200"
//                             }
//                           />
//                         ))}
//                       </div>
//                       <p className="text-[#78716C] italic mb-2">
//                         "{testimonial.text}"
//                       </p>
//                       <div className="font-semibold text-[#292524]">
//                         {testimonial.author}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* CTA Card */}
//             <div className="bg-gradient-to-br from-[#292524] to-[#3F3F46] rounded-2xl shadow-lg p-6 text-white">
//               <h3 className="text-xl font-bold mb-3">Like This Project?</h3>
//               <p className="mb-6 text-gray-300">
//                 Get a free quote for your own tiling project
//               </p>
//               <div className="space-y-3">
//                 <button className="w-full bg-[#C9A24D] text-white font-semibold py-3 rounded-xl hover:bg-[#B8933E] transition-colors">
//                   Request Similar Quote
//                 </button>
//                 <div className="flex items-center justify-center gap-6 text-sm pt-2">
//                   <a
//                     href="tel:0300000000"
//                     className="flex items-center gap-2 hover:text-[#C9A24D] transition-colors"
//                   >
//                     <FaPhone />
//                     <span>(03) 0000 0000</span>
//                   </a>
//                   <a
//                     href="mailto:info@example.com"
//                     className="flex items-center gap-2 hover:text-[#C9A24D] transition-colors"
//                   >
//                     <FaEnvelope />
//                     <span>Email Us</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Related Projects */}
//         {relatedProjects.length > 0 && (
//           <div className="mt-16">
//             <h2 className="text-2xl font-bold text-[#292524] mb-8">
//               Related Projects
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {relatedProjects.map((related) => (
//                 <div
//                   key={related.id}
//                   onClick={() => router.push(`/projects/${related.slug}`)}
//                   className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
//                 >
//                   {related.images && (
//                     <div className="relative h-48 overflow-hidden">
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
//                       <Image
//                         src={related.images[0]}
//                         alt={related.title}
//                         fill
//                         className="object-cover group-hover:scale-110 transition-transform duration-500"
//                       />
//                     </div>
//                   )}
//                   <div className="p-5">
//                     <h3 className="font-bold text-[#292524] mb-2 group-hover:text-[#C9A24D] transition-colors">
//                       {related.title}
//                     </h3>
//                     <div className="flex justify-between text-sm text-[#78716C]">
//                       <span>{related.location}</span>
//                       <span className="font-semibold text-[#C9A24D]">
//                         {related.budget}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    FaArrowLeft,
    FaMapMarkerAlt,
    FaUser,
    FaDollarSign,
    FaClock,
    FaCheckCircle,
    FaTools,
    FaStar,
    FaPhone,
    FaEnvelope,
    FaImages,
    FaChevronLeft,
    FaChevronRight,
    FaClipboardList,
    FaCalendar,
    FaBuilding,
    FaAward,
} from "react-icons/fa";
import { projects } from "../lib/projectData";

export default function ProjectDetail({ project }) {
    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState(0);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#292524] mb-4">
                        Project Not Found
                    </h1>
                    <button
                        onClick={() => router.push("/projects")}
                        className="px-6 py-3 bg-[#C9A24D] text-white rounded-xl hover:bg-[#B8933E] transition-colors"
                    >
                        Back to Projects
                    </button>
                </div>
            </div>
        );
    }

    const hasImages = project.images && project.images.length > 0;
    const totalImages = hasImages ? project.images.length : 0;

    const nextImage = () => {
        if (hasImages) {
            setSelectedImage((prev) => (prev + 1) % totalImages);
        }
    };

    const prevImage = () => {
        if (hasImages) {
            setSelectedImage((prev) => (prev - 1 + totalImages) % totalImages);
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "completed":
                return "bg-green-500/20 text-green-100";
            case "in-progress":
                return "bg-blue-500/20 text-blue-100";
            case "upcoming":
                return "bg-yellow-500/20 text-yellow-100";
            case "on-hold":
                return "bg-orange-500/20 text-orange-100";
            default:
                return "bg-white/20 text-white";
        }
    };

    const getStatusColorLight = (status) => {
        switch (status) {
            case "completed":
                return "bg-green-100 text-green-800";
            case "in-progress":
                return "bg-blue-100 text-blue-800";
            case "upcoming":
                return "bg-yellow-100 text-yellow-800";
            case "on-hold":
                return "bg-orange-100 text-orange-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    const relatedProjects = projects
        .filter((p) => p.category === project.category && p.id !== project.id)
        .slice(0, 3);

    return (
        <>
            <div className="w-full bg-gray-50 py-16 px-8">
                {/* Hero Section */}
                <div className="relative h-[60vh] overflow-hidden rounded-t-[32px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 to-[#3F3F46]/90 z-10"></div>
                    {hasImages && (
                        <Image
                            src={project.images[selectedImage]}
                            alt={`${project.title} - Melbourne Project`}
                            fill
                            className="object-cover"
                            priority
                        />
                    )}
                    <div className="relative z-20 h-full flex items-center justify-center px-6">
                        <div className="text-center max-w-4xl">
                            {/* Status & Category Badges */}
                            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                                <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <span className="text-white text-sm font-medium capitalize">
                                        {project.category} Project
                                    </span>
                                </div>
                                <div
                                    className={`inline-block backdrop-blur-sm px-4 py-2 rounded-full ${getStatusColor(
                                        project.status
                                    )}`}
                                >
                                    <span className="text-sm font-bold">
                                        {project.status.replace("-", " ").toUpperCase()}
                                    </span>
                                </div>
                            </div>

                            <h1 className="text-5xl md:text-6xl text-white font-bold mb-6">
                                {project.title}
                            </h1>
                            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                {project.description}
                            </p>

                            {/* Quick Info Tags */}
                            <div className="flex flex-wrap items-center justify-center gap-4 text-white">
                                <span className="bg-[#C9A24D]/20 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2">
                                    <FaDollarSign />
                                    {project.budget}
                                </span>
                                <span className="bg-[#3F3F46]/50 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2">
                                    <FaClock />
                                    {project.duration}
                                </span>
                                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2">
                                    <FaMapMarkerAlt />
                                    {project.location}
                                </span>
                            </div>

                            {/* Progress Indicator for In-Progress Projects */}
                            {project.progress !== undefined && project.progress < 100 && (
                                <div className="mt-8 max-w-md mx-auto">
                                    <div className="flex justify-between text-white/80 text-sm mb-2">
                                        <span>Project Progress</span>
                                        <span>{project.progress}%</span>
                                    </div>
                                    <div className="w-full bg-white/20 rounded-full h-3">
                                        <div
                                            className="bg-[#C9A24D] h-3 rounded-full transition-all duration-300"
                                            style={{ width: `${project.progress}%` }}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {/* Project Overview */}
                            <div className="mb-12">
                                <div className="flex items-center gap-3 mb-6">
                                    <h2 className="text-3xl font-bold text-[#292524]">
                                        Project Overview
                                    </h2>
                                    <span className="bg-[#C9A24D] text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {project.location.split(",")[0]}
                                    </span>
                                </div>
                                <p className="text-lg text-[#78716C] leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                {/* Project Details Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                        <div className="w-12 h-12 bg-[#C9A24D]/10 rounded-lg flex items-center justify-center">
                                            <FaUser className="text-[#C9A24D] text-xl" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-[#78716C]">Client</div>
                                            <div className="font-semibold text-[#292524]">
                                                {project.client}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                        <div className="w-12 h-12 bg-[#C9A24D]/10 rounded-lg flex items-center justify-center">
                                            <FaCalendar className="text-[#C9A24D] text-xl" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-[#78716C]">Timeline</div>
                                            <div className="font-semibold text-[#292524]">
                                                {project.startDate} - {project.completionDate}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                        <div className="w-12 h-12 bg-[#C9A24D]/10 rounded-lg flex items-center justify-center">
                                            <FaDollarSign className="text-[#C9A24D] text-xl" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-[#78716C]">Project Value</div>
                                            <div className="font-semibold text-[#C9A24D]">
                                                {project.budget}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                        <div className="w-12 h-12 bg-[#C9A24D]/10 rounded-lg flex items-center justify-center">
                                            <FaClock className="text-[#C9A24D] text-xl" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-[#78716C]">Duration</div>
                                            <div className="font-semibold text-[#292524]">
                                                {project.duration}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Location Info */}
                                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
                                    <h3 className="text-xl font-bold text-[#292524] mb-3 flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-blue-600" />
                                        Project Location
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-white px-4 py-2 rounded-lg text-[#292524] border border-gray-200 font-medium">
                                            {project.location}
                                        </span>
                                        <span
                                            className={`px-4 py-2 rounded-lg font-medium ${getStatusColorLight(
                                                project.status
                                            )}`}
                                        >
                                            {project.status.replace("-", " ").toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Project Gallery */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-[#292524] mb-6">
                                    Project Gallery
                                </h3>

                                {/* Main Image Display */}
                                <div className="relative mb-6 rounded-xl overflow-hidden shadow-lg">
                                    {hasImages ? (
                                        <>
                                            <div className="relative h-[400px] md:h-[500px]">
                                                <Image
                                                    src={project.images[selectedImage]}
                                                    alt={`${project.title} - Image ${selectedImage + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            {/* Navigation Arrows */}
                                            {totalImages > 1 && (
                                                <>
                                                    <button
                                                        onClick={prevImage}
                                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                                                    >
                                                        <FaChevronLeft className="text-[#292524]" />
                                                    </button>
                                                    <button
                                                        onClick={nextImage}
                                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                                                    >
                                                        <FaChevronRight className="text-[#292524]" />
                                                    </button>
                                                </>
                                            )}

                                            {/* Image Counter */}
                                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
                                                {selectedImage + 1} / {totalImages}
                                            </div>
                                        </>
                                    ) : (
                                        <div className="h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center">
                                            <FaImages className="text-[#78716C] text-5xl mb-4" />
                                            <span className="text-[#78716C]">No images available</span>
                                        </div>
                                    )}
                                </div>

                                {/* Thumbnails */}
                                {hasImages && totalImages > 1 && (
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {project.images.map((img, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSelectedImage(index)}
                                                className={`relative h-24 md:h-32 rounded-lg overflow-hidden transition-all ${selectedImage === index
                                                        ? "ring-2 ring-[#C9A24D] ring-offset-2"
                                                        : "opacity-70 hover:opacity-100"
                                                    }`}
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`${project.title} thumbnail ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Services Provided */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-[#292524] mb-6">
                                    Services Provided
                                </h3>
                                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                                    <ul className="space-y-4">
                                        {project.services?.map((service, i) => (
                                            <li key={i} className="flex items-start group">
                                                <div className="flex-shrink-0 w-8 h-8 bg-[#C9A24D]/10 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-[#C9A24D] transition-colors">
                                                    <FaCheckCircle className="text-[#C9A24D] group-hover:text-white transition-colors" />
                                                </div>
                                                <span className="text-[#78716C] text-lg">{service}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Specifications */}
                            {project.specifications && (
                                <div className="mb-12 bg-gradient-to-r from-[#C9A24D]/5 to-[#3F3F46]/5 rounded-xl p-8">
                                    <h3 className="text-2xl font-bold text-[#292524] mb-6">
                                        Project Specifications
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {Object.entries(project.specifications).map(
                                            ([key, value]) => (
                                                <div key={key} className="bg-white p-6 rounded-xl shadow">
                                                    <h4 className="font-bold text-[#78716C] mb-2 capitalize">
                                                        {key.replace(/([A-Z])/g, " $1")}
                                                    </h4>
                                                    <div className="text-xl font-bold text-[#292524]">
                                                        {value}
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Before/After Comparison */}
                            {project.beforeAfter && (
                                <div className="mb-12">
                                    <h3 className="text-2xl font-bold text-[#292524] mb-6 flex items-center gap-2">
                                        <FaImages className="text-[#C9A24D]" />
                                        Before & After Transformation
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                                            <div className="text-center font-semibold text-[#78716C] mb-3 flex items-center justify-center gap-2">
                                                <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                                                Before
                                            </div>
                                            <div className="relative h-64 rounded-lg overflow-hidden">
                                                <Image
                                                    src={project.beforeAfter.before}
                                                    alt="Before renovation"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                                            <div className="text-center font-semibold text-[#78716C] mb-3 flex items-center justify-center gap-2">
                                                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                                                After
                                            </div>
                                            <div className="relative h-64 rounded-lg overflow-hidden">
                                                <Image
                                                    src={project.beforeAfter.after}
                                                    alt="After renovation"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Challenges & Solutions */}
                            {(project.challenges || project.solutions) && (
                                <div className="mb-12">
                                    <h3 className="text-2xl font-bold text-[#292524] mb-6">
                                        Challenges & Solutions
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {project.challenges && (
                                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                                                <h4 className="font-bold text-[#292524] mb-4 flex items-center gap-2">
                                                    <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                                        <span className="text-red-600 font-bold">!</span>
                                                    </span>
                                                    Project Challenges
                                                </h4>
                                                <ul className="space-y-3">
                                                    {project.challenges.map((challenge, index) => (
                                                        <li
                                                            key={index}
                                                            className="flex items-start text-[#78716C]"
                                                        >
                                                            <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                                            {challenge}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {project.solutions && (
                                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                                                <h4 className="font-bold text-[#292524] mb-4 flex items-center gap-2">
                                                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                                        <FaCheckCircle className="text-green-600" />
                                                    </span>
                                                    Our Solutions
                                                </h4>
                                                <ul className="space-y-3">
                                                    {project.solutions.map((solution, index) => (
                                                        <li
                                                            key={index}
                                                            className="flex items-start text-[#78716C]"
                                                        >
                                                            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                                            {solution}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Client Testimonial */}
                            {project.testimonials && project.testimonials.length > 0 && (
                                <div className="mb-12 bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                                    <h3 className="text-2xl font-bold text-[#292524] mb-6 flex items-center gap-2">
                                        <FaStar className="text-[#C9A24D]" />
                                        Client Feedback
                                    </h3>
                                    <div className="space-y-6">
                                        {project.testimonials.map((testimonial, index) => (
                                            <div
                                                key={index}
                                                className="border-l-4 border-[#C9A24D] pl-6 py-4"
                                            >
                                                <div className="flex items-center gap-1 mb-3">
                                                    {[...Array(5)].map((_, i) => (
                                                        <FaStar
                                                            key={i}
                                                            className={
                                                                i < testimonial.rating
                                                                    ? "text-[#C9A24D]"
                                                                    : "text-gray-200"
                                                            }
                                                        />
                                                    ))}
                                                </div>
                                                <p className="text-[#78716C] italic mb-3 text-lg">
                                                    "{testimonial.text}"
                                                </p>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-[#C9A24D]/10 rounded-full flex items-center justify-center">
                                                        <span className="font-semibold text-[#C9A24D]">
                                                            {testimonial.author
                                                                .split(" ")
                                                                .map((n) => n[0])
                                                                .join("")}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-[#292524]">
                                                            {testimonial.author}
                                                        </div>
                                                        <div className="text-sm text-[#78716C]">
                                                            {project.location}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-8">
                                {/* Primary CTA Card */}
                                <div className="bg-gradient-to-br from-[#292524] to-[#3F3F46] rounded-xl p-8 shadow-xl">
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        Like This Project?
                                    </h3>
                                    <p className="text-white/80 mb-6">
                                        Get a free quote for your own tiling project in Melbourne
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="block w-full bg-gradient-to-r from-[#C9A24D] to-[#B89246] hover:from-[#B89246] hover:to-[#A8823E] text-white text-center font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg mb-4"
                                    >
                                        Request Similar Quote
                                    </Link>
                                    <div className="text-center">
                                        <div className="text-white/60 text-sm mb-2">
                                            Or call us directly
                                        </div>
                                        <a
                                            href="tel:+61300000000"
                                            className="text-white text-xl font-bold hover:text-[#C9A24D] transition-colors"
                                        >
                                            (03) 0000 0000
                                        </a>
                                    </div>
                                </div>

                                {/* Project Summary Card */}
                                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                                    <h4 className="text-xl font-bold text-[#292524] mb-6">
                                        Project Summary
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-[#C9A24D]/10 rounded-lg flex items-center justify-center mr-4">
                                                <FaBuilding className="text-[#C9A24D]" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-[#78716C]">Project Type</p>
                                                <p className="font-semibold text-[#292524] capitalize">
                                                    {project.category}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-[#3F3F46]/10 rounded-lg flex items-center justify-center mr-4">
                                                <FaClock className="text-[#3F3F46]" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-[#78716C]">Duration</p>
                                                <p className="font-semibold text-[#292524]">
                                                    {project.duration}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-[#C9A24D]/10 rounded-lg flex items-center justify-center mr-4">
                                                <FaDollarSign className="text-[#C9A24D]" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-[#78716C]">Project Value</p>
                                                <p className="font-semibold text-[#C9A24D]">
                                                    {project.budget}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-[#3F3F46]/10 rounded-lg flex items-center justify-center mr-4">
                                                <FaMapMarkerAlt className="text-[#3F3F46]" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-[#78716C]">Location</p>
                                                <p className="font-semibold text-[#292524]">
                                                    {project.location}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    {project.progress !== undefined && (
                                        <div className="mt-6 pt-6 border-t border-gray-200">
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="text-[#78716C]">Progress</span>
                                                <span className="font-bold text-[#C9A24D]">
                                                    {project.progress}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-3">
                                                <div
                                                    className="bg-[#C9A24D] h-3 rounded-full transition-all duration-300"
                                                    style={{ width: `${project.progress}%` }}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div className="mt-8 pt-8 border-t border-gray-200">
                                        <h5 className="font-bold text-[#292524] mb-4">
                                            Why Choose Us
                                        </h5>
                                        <ul className="space-y-2">
                                            <li className="flex items-center text-sm text-[#78716C]">
                                                <svg
                                                    className="w-4 h-4 text-green-600 mr-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                Local Melbourne Experts
                                            </li>
                                            <li className="flex items-center text-sm text-[#78716C]">
                                                <svg
                                                    className="w-4 h-4 text-green-600 mr-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                Quality Guaranteed
                                            </li>
                                            <li className="flex items-center text-sm text-[#78716C]">
                                                <svg
                                                    className="w-4 h-4 text-green-600 mr-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                On-Time Completion
                                            </li>
                                            <li className="flex items-center text-sm text-[#78716C]">
                                                <svg
                                                    className="w-4 h-4 text-green-600 mr-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                Premium Materials
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Project Team */}
                                {project.team && (
                                    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                                        <h4 className="text-xl font-bold text-[#292524] mb-6 flex items-center gap-2">
                                            <FaUser className="text-[#C9A24D]" />
                                            Project Team
                                        </h4>
                                        <div className="space-y-4">
                                            {project.team.map((member, index) => (
                                                <div key={index} className="flex items-center gap-3">
                                                    <div className="w-12 h-12 bg-[#C9A24D]/10 rounded-full flex items-center justify-center">
                                                        <span className="font-semibold text-[#C9A24D]">
                                                            {member.name
                                                                .split(" ")
                                                                .map((n) => n[0])
                                                                .join("")}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-[#292524]">
                                                            {member.name}
                                                        </div>
                                                        <div className="text-sm text-[#78716C]">
                                                            {member.role}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Related Projects */}
                                {relatedProjects.length > 0 && (
                                    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                                        <h4 className="text-xl font-bold text-[#292524] mb-6">
                                            Similar Projects
                                        </h4>
                                        <div className="space-y-4">
                                            {relatedProjects.map((related) => (
                                                <Link
                                                    key={related.id}
                                                    href={`/projects/${related.slug}`}
                                                    className="block p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 group"
                                                >
                                                    <div className="flex gap-4">
                                                        {related.images && related.images[0] && (
                                                            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                                                <Image
                                                                    src={related.images[0]}
                                                                    alt={related.title}
                                                                    fill
                                                                    className="object-cover"
                                                                />
                                                            </div>
                                                        )}
                                                        <div className="flex-1 min-w-0">
                                                            <div className="font-semibold text-[#292524] group-hover:text-[#C9A24D] transition-colors truncate">
                                                                {related.title}
                                                            </div>
                                                            <div className="text-sm text-[#78716C]">
                                                                {related.location}
                                                            </div>
                                                            <div className="text-sm font-semibold text-[#C9A24D]">
                                                                {related.budget}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16 bg-gradient-to-r from-[#111827] to-[#3F3F46] rounded-2xl p-12 text-center">
                        <h3 className="text-3xl font-bold text-white mb-6">
                            Ready to Start Your Own Project?
                        </h3>
                        <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                            Contact us today for a free, no-obligation quote on your{" "}
                            {project.category} project in Melbourne.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all"
                            >
                                Get Your Free Quote
                            </Link>
                            <a
                                href="tel:+61300000000"
                                className="bg-white text-[#111827] font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all"
                            >
                                Call: (03) 0000 0000
                            </a>
                        </div>
                    </div>

                    {/* More Related Projects Grid */}
                    {relatedProjects.length > 0 && (
                        <div className="mt-16">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold text-[#292524]">
                                    More {project.category.charAt(0).toUpperCase() + project.category.slice(1)} Projects
                                </h2>
                                <Link
                                    href="/projects"
                                    className="text-[#C9A24D] hover:text-[#B89246] font-medium flex items-center gap-2"
                                >
                                    View All Projects
                                    <FaChevronRight />
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedProjects.map((related) => (
                                    <div
                                        key={related.id}
                                        onClick={() => router.push(`/projects/${related.slug}`)}
                                        className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
                                    >
                                        {related.images && (
                                            <div className="relative h-48 overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                                                <div className="absolute top-4 left-4 z-20">
                                                    <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full">
                                                        {related.location.split(",")[0]}
                                                    </span>
                                                </div>
                                                <Image
                                                    src={related.images[0]}
                                                    alt={related.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                        )}
                                        <div className="p-6">
                                            <h3 className="font-bold text-[#292524] mb-2 group-hover:text-[#C9A24D] transition-colors">
                                                {related.title}
                                            </h3>
                                            <p className="text-sm text-[#78716C] mb-4 line-clamp-2">
                                                {related.description}
                                            </p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-[#78716C]">
                                                    {related.duration}
                                                </span>
                                                <span className="font-semibold text-[#C9A24D]">
                                                    {related.budget}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}