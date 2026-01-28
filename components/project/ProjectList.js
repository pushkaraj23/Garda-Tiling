// "use client"

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { 
//   FaCalendar, FaMapMarkerAlt, FaUser, FaDollarSign, 
//   FaClock, FaFilter, FaSearch, FaArrowRight,
//   FaCheckCircle, FaSyncAlt, FaClock as FaClockIcon, FaPauseCircle
// } from 'react-icons/fa';
// import { projects, projectCategories, projectStatuses, projectStats } from '../lib/projectData';

// export default function ProjectList() {
//   const router = useRouter();
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [selectedStatus, setSelectedStatus] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');

//   // Filter projects
//   const filteredProjects = projects.filter(project => {
//     const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
//     const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
//     const matchesSearch = searchTerm === '' || 
//       project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.client.toLowerCase().includes(searchTerm.toLowerCase());

//     return matchesCategory && matchesStatus && matchesSearch;
//   });

//   const getStatusIcon = (status) => {
//     switch(status) {
//       case 'completed': return <FaCheckCircle className="text-green-500" />;
//       case 'in-progress': return <FaSyncAlt className="text-blue-500 animate-spin" />;
//       case 'upcoming': return <FaClockIcon className="text-yellow-500" />;
//       case 'on-hold': return <FaPauseCircle className="text-orange-500" />;
//       default: return null;
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
//     <div className="min-h-screen min-w-7xl bg-gray-50 p-4 md:p-6">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Projects</h1>
//         <p className="text-gray-600">Browse our portfolio of completed and ongoing tiling projects</p>
//       </div>

//       {/* Stats Overview */}
//       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
//         <div className="bg-white p-4 rounded-xl shadow">
//           <div className="text-sm text-gray-500">Total Projects</div>
//           <div className="text-2xl font-bold text-gray-900">{projectStats.totalProjects}</div>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow">
//           <div className="text-sm text-gray-500">Completed</div>
//           <div className="text-2xl font-bold text-green-600">{projectStats.completed}</div>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow">
//           <div className="text-sm text-gray-500">In Progress</div>
//           <div className="text-2xl font-bold text-blue-600">{projectStats.inProgress}</div>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow">
//           <div className="text-sm text-gray-500">Total Value</div>
//           <div className="text-2xl font-bold text-amber-600">{projectStats.totalValue}</div>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow">
//           <div className="text-sm text-gray-500">Upcoming</div>
//           <div className="text-2xl font-bold text-yellow-600">{projectStats.upcoming}</div>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow">
//           <div className="text-sm text-gray-500">Rating</div>
//           <div className="text-2xl font-bold text-purple-600">{projectStats.averageRating}/5</div>
//         </div>
//       </div>

//       {/* Filters */}
//       <div className="bg-white rounded-xl shadow p-6 mb-8">
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
//           <div className="flex items-center gap-2">
//             <FaFilter className="text-gray-400" />
//             <h2 className="text-lg font-semibold">Filter Projects</h2>
//           </div>

//           <div className="relative w-full md:w-auto">
//             <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search projects..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//         </div>

//         <div className="space-y-4">
//           {/* Category Filters */}
//           <div>
//             <h3 className="text-sm font-medium text-gray-700 mb-2">Category</h3>
//             <div className="flex flex-wrap gap-2">
//               <button
//                 onClick={() => setSelectedCategory('all')}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium ${
//                   selectedCategory === 'all' 
//                     ? 'bg-blue-600 text-white' 
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 All Projects
//               </button>
//               {projectCategories.map(category => (
//                 <button
//                   key={category.id}
//                   onClick={() => setSelectedCategory(category.id)}
//                   className={`px-4 py-2 rounded-lg text-sm font-medium ${
//                     selectedCategory === category.id 
//                       ? 'bg-blue-600 text-white' 
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   {category.name} ({category.count})
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Status Filters */}
//           <div>
//             <h3 className="text-sm font-medium text-gray-700 mb-2">Status</h3>
//             <div className="flex flex-wrap gap-2">
//               <button
//                 onClick={() => setSelectedStatus('all')}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium ${
//                   selectedStatus === 'all' 
//                     ? 'bg-blue-600 text-white' 
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 All Status
//               </button>
//               {projectStatuses.map(status => (
//                 <button
//                   key={status.id}
//                   onClick={() => setSelectedStatus(status.id)}
//                   className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${
//                     selectedStatus === status.id 
//                       ? `bg-${status.color}-600 text-white` 
//                       : `bg-gray-100 text-gray-700 hover:bg-gray-200`
//                   }`}
//                 >
//                   {getStatusIcon(status.id)}
//                   {status.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredProjects.map(project => (
//           <div 
//             key={project.id} 
//             className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
//             onClick={() => router.push(`/projects/${project.id}`)}
//           >
//             {/* Project Image */}
//             {project.images && project.images.length > 0 ? (
//               <div className="relative h-48 overflow-hidden">
//                 <img 
//                   src={project.images[0]} 
//                   alt={project.title}
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="absolute top-4 right-4">
//                   <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(project.status)}`}>
//                     {project.status.replace('-', ' ').toUpperCase()}
//                   </span>
//                 </div>
//                 {project.progress && (
//                   <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
//                     <div className="flex justify-between text-xs mb-1">
//                       <span>Progress</span>
//                       <span>{project.progress}%</span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded-full h-2">
//                       <div 
//                         className="bg-green-500 h-2 rounded-full transition-all duration-300"
//                         style={{ width: `${project.progress}%` }}
//                       />
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
//                 <span className="text-gray-400">No image available</span>
//               </div>
//             )}

//             {/* Project Info */}
//             <div className="p-6">
//               <div className="flex justify-between items-start mb-3">
//                 <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
//                 <span className="text-amber-600 font-bold">{project.budget}</span>
//               </div>

//               <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

//               <div className="space-y-2 mb-6">
//                 <div className="flex items-center text-sm text-gray-500">
//                   <FaMapMarkerAlt className="mr-2 flex-shrink-0" />
//                   <span>{project.location}</span>
//                 </div>
//                 <div className="flex items-center text-sm text-gray-500">
//                   <FaUser className="mr-2 flex-shrink-0" />
//                   <span>{project.client}</span>
//                 </div>
//                 <div className="flex items-center text-sm text-gray-500">
//                   <FaCalendar className="mr-2 flex-shrink-0" />
//                   <span>{project.startDate} - {project.completionDate}</span>
//                 </div>
//                 <div className="flex items-center text-sm text-gray-500">
//                   <FaClock className="mr-2 flex-shrink-0" />
//                   <span>{project.duration}</span>
//                 </div>
//               </div>

//               {/* Services Tags */}
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.services && project.services.slice(0, 3).map((service, index) => (
//                   <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
//                     {service}
//                   </span>
//                 ))}
//                 {project.services && project.services.length > 3 && (
//                   <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
//                     +{project.services.length - 3} more
//                   </span>
//                 )}
//               </div>

//               <button 
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   router.push(`/projects/${project.id}`);
//                 }}
//                 className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all"
//               >
//                 View Project Details
//                 <FaArrowRight />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Empty State */}
//       {filteredProjects.length === 0 && (
//         <div className="text-center py-12">
//           <div className="text-gray-400 text-5xl mb-4">🔍</div>
//           <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
//           <p className="text-gray-600">Try adjusting your filters or search terms</p>
//           <button 
//             onClick={() => {
//               setSelectedCategory('all');
//               setSelectedStatus('all');
//               setSearchTerm('');
//             }}
//             className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//           >
//             Clear All Filters
//           </button>
//         </div>
//       )}

//       {/* View More Button */}
//       {filteredProjects.length > 0 && (
//         <div className="mt-12 text-center">
//           <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
//             Load More Projects
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import {
//   FaCalendar,
//   FaMapMarkerAlt,
//   FaUser,
//   FaDollarSign,
//   FaClock,
//   FaFilter,
//   FaSearch,
//   FaArrowRight,
//   FaCheckCircle,
//   FaSyncAlt,
//   FaClock as FaClockIcon,
//   FaPauseCircle,
// } from "react-icons/fa";
// import {
//   projects,
//   projectCategories,
//   projectStatuses,
//   projectStats,
// } from "../lib/projectData";

// export default function ProjectList() {
//   const router = useRouter();
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [selectedStatus, setSelectedStatus] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter projects
//   const filteredProjects = projects.filter((project) => {
//     const matchesCategory =
//       selectedCategory === "all" || project.category === selectedCategory;
//     const matchesStatus =
//       selectedStatus === "all" || project.status === selectedStatus;
//     const matchesSearch =
//       searchTerm === "" ||
//       project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.client.toLowerCase().includes(searchTerm.toLowerCase());

//     return matchesCategory && matchesStatus && matchesSearch;
//   });

//   const getStatusIcon = (status) => {
//     switch (status) {
//       case "completed":
//         return <FaCheckCircle className="text-green-500" />;
//       case "in-progress":
//         return <FaSyncAlt className="text-blue-500 animate-spin" />;
//       case "upcoming":
//         return <FaClockIcon className="text-yellow-500" />;
//       case "on-hold":
//         return <FaPauseCircle className="text-orange-500" />;
//       default:
//         return null;
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

//   return (
//     <section className="w-full bg-gray-50 py-16 px-8 ">
//       {/* Header */}
//       <div className="text-center mb-16 rounded-t-[32px]">
//         <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
//           <svg
//             className="w-4 h-4 text-[#C9A24D]"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//           >
//             <path
//               fillRule="evenodd"
//               d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
//               clipRule="evenodd"
//             />
//             <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
//           </svg>
//           <span className="text-sm font-medium text-[#3F3F46]">
//             Our Portfolio
//           </span>
//         </div>

//         <h1 className="text-4xl md:text-5xl font-bold text-[#292524] mb-4">
//           Our Projects
//         </h1>
//         <p className="text-lg text-[#78716C] max-w-3xl mx-auto mb-8">
//           Browse our portfolio of completed and ongoing tiling projects across
//           Melbourne. Quality workmanship guaranteed.
//         </p>

//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {[
//             "Bathroom Renovations",
//             "Kitchen Tiling",
//             "Commercial Projects",
//             "Outdoor Areas",
//             "Pool Surrounds",
//             "Heritage Restoration",
//           ].map((tag, i) => (
//             <span
//               key={i}
//               className="bg-gray-100 text-[#3F3F46] px-3 py-1 rounded-full text-sm"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Stats Overview */}
//       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
//         <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
//           <div className="text-sm text-[#78716C]">Total Projects</div>
//           <div className="text-2xl font-bold text-[#292524]">
//             {projectStats.totalProjects}
//           </div>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
//           <div className="text-sm text-[#78716C]">Completed</div>
//           <div className="text-2xl font-bold text-green-600">
//             {projectStats.completed}
//           </div>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
//           <div className="text-sm text-[#78716C]">In Progress</div>
//           <div className="text-2xl font-bold text-blue-600">
//             {projectStats.inProgress}
//           </div>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
//           <div className="text-sm text-[#78716C]">Total Value</div>
//           <div className="text-2xl font-bold text-[#C9A24D]">
//             {projectStats.totalValue}
//           </div>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
//           <div className="text-sm text-[#78716C]">Upcoming</div>
//           <div className="text-2xl font-bold text-yellow-600">
//             {projectStats.upcoming}
//           </div>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
//           <div className="text-sm text-[#78716C]">Rating</div>
//           <div className="text-2xl font-bold text-[#C9A24D]">
//             {projectStats.averageRating}/5
//           </div>
//         </div>
//       </div>

//       {/* Filters */}
//       <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-12">
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
//           <div className="flex items-center gap-2">
//             <FaFilter className="text-[#C9A24D]" />
//             <h2 className="text-lg font-semibold text-[#292524]">
//               Filter Projects
//             </h2>
//           </div>

//           <div className="relative w-full md:w-auto">
//             <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#78716C]" />
//             <input
//               type="text"
//               placeholder="Search projects..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full md:w-64 pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[#292524] placeholder-[#78716C] focus:ring-2 focus:ring-[#C9A24D] focus:border-[#C9A24D] transition-all"
//             />
//           </div>
//         </div>

//         <div className="space-y-4">
//           {/* Category Filters */}
//           <div>
//             <h3 className="text-sm font-medium text-[#78716C] mb-2">Category</h3>
//             <div className="flex flex-wrap gap-2">
//               <button
//                 onClick={() => setSelectedCategory("all")}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                   selectedCategory === "all"
//                     ? "bg-[#C9A24D] text-white"
//                     : "bg-gray-100 text-[#3F3F46] hover:bg-gray-200"
//                 }`}
//               >
//                 All Projects
//               </button>
//               {projectCategories.map((category) => (
//                 <button
//                   key={category.id}
//                   onClick={() => setSelectedCategory(category.id)}
//                   className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                     selectedCategory === category.id
//                       ? "bg-[#C9A24D] text-white"
//                       : "bg-gray-100 text-[#3F3F46] hover:bg-gray-200"
//                   }`}
//                 >
//                   {category.name} ({category.count})
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Status Filters */}
//           <div>
//             <h3 className="text-sm font-medium text-[#78716C] mb-2">Status</h3>
//             <div className="flex flex-wrap gap-2">
//               <button
//                 onClick={() => setSelectedStatus("all")}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                   selectedStatus === "all"
//                     ? "bg-[#C9A24D] text-white"
//                     : "bg-gray-100 text-[#3F3F46] hover:bg-gray-200"
//                 }`}
//               >
//                 All Status
//               </button>
//               {projectStatuses.map((status) => (
//                 <button
//                   key={status.id}
//                   onClick={() => setSelectedStatus(status.id)}
//                   className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${
//                     selectedStatus === status.id
//                       ? "bg-[#C9A24D] text-white"
//                       : "bg-gray-100 text-[#3F3F46] hover:bg-gray-200"
//                   }`}
//                 >
//                   {getStatusIcon(status.id)}
//                   {status.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredProjects.map((project) => (
//           <div
//             key={project.id}
//             className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
//             onClick={() => router.push(`/projects/${project.slug}`)}
//           >
//             {/* Project Image */}
//             <div className="relative h-56 w-full overflow-hidden cursor-pointer">
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
//               <div className="absolute top-4 left-4 z-20">
//                 <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full">
//                   {project.location}
//                 </span>
//               </div>
//               <div className="absolute top-4 right-4 z-20">
//                 <span
//                   className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(
//                     project.status
//                   )}`}
//                 >
//                   {project.status.replace("-", " ").toUpperCase()}
//                 </span>
//               </div>

//               {project.images && project.images.length > 0 ? (
//                 <Image
//                   src={project.images[0]}
//                   alt={project.title}
//                   fill
//                   className="object-cover group-hover:scale-110 transition-transform duration-500"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 />
//               ) : (
//                 <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
//                   <span className="text-[#78716C]">No image available</span>
//                 </div>
//               )}

//               {/* Progress Bar */}
//               {project.progress !== undefined && project.progress < 100 && (
//                 <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 z-20">
//                   <div className="flex justify-between text-xs mb-1">
//                     <span>Progress</span>
//                     <span>{project.progress}%</span>
//                   </div>
//                   <div className="w-full bg-gray-600 rounded-full h-2">
//                     <div
//                       className="bg-[#C9A24D] h-2 rounded-full transition-all duration-300"
//                       style={{ width: `${project.progress}%` }}
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Project Info */}
//             <div className="p-6">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-xl font-bold text-[#292524] group-hover:text-[#C9A24D] transition-colors">
//                   {project.title}
//                 </h3>
//               </div>

//               <p className="text-[#78716C] mb-4 line-clamp-2">
//                 {project.description}
//               </p>

//               <div className="space-y-2 mb-6">
//                 <div className="flex items-center text-sm text-[#78716C]">
//                   <FaUser className="mr-2 text-[#C9A24D] flex-shrink-0" />
//                   <span>{project.client}</span>
//                 </div>
//                 <div className="flex items-center text-sm text-[#78716C]">
//                   <FaCalendar className="mr-2 text-[#C9A24D] flex-shrink-0" />
//                   <span>
//                     {project.startDate} - {project.completionDate}
//                   </span>
//                 </div>
//                 <div className="flex items-center text-sm text-[#78716C]">
//                   <FaClock className="mr-2 text-[#C9A24D] flex-shrink-0" />
//                   <span>{project.duration}</span>
//                 </div>
//               </div>

//               <div className="flex items-center justify-between mb-6">
//                 <div>
//                   <div className="text-sm text-[#78716C]">Budget</div>
//                   <div className="text-lg font-bold text-[#C9A24D]">
//                     {project.budget}
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <div className="text-sm text-[#78716C]">Category</div>
//                   <div className="text-sm font-medium text-[#3F3F46] capitalize">
//                     {project.category}
//                   </div>
//                 </div>
//               </div>

//               {/* Services Tags */}
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.services &&
//                   project.services.slice(0, 2).map((service, index) => (
//                     <span
//                       key={index}
//                       className="px-3 py-1 bg-[#C9A24D]/10 text-[#C9A24D] text-xs rounded-full font-medium"
//                     >
//                       {service}
//                     </span>
//                   ))}
//                 {project.services && project.services.length > 2 && (
//                   <span className="px-3 py-1 bg-gray-100 text-[#78716C] text-xs rounded-full">
//                     +{project.services.length - 2} more
//                   </span>
//                 )}
//               </div>

//               <div className="pt-6 border-t border-gray-100">
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     router.push(`/projects/${project.slug}`);
//                   }}
//                   className="w-full flex items-center justify-center gap-2 bg-[#292524] text-white font-semibold py-3 rounded-xl hover:bg-[#C9A24D] transition-all duration-300"
//                 >
//                   View Project Details
//                   <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Empty State */}
//       {filteredProjects.length === 0 && (
//         <div className="text-center py-16 bg-white rounded-2xl shadow-lg border border-gray-100">
//           <div className="text-6xl mb-4">🔍</div>
//           <h3 className="text-xl font-semibold text-[#292524] mb-2">
//             No projects found
//           </h3>
//           <p className="text-[#78716C] mb-6">
//             Try adjusting your filters or search terms
//           </p>
//           <button
//             onClick={() => {
//               setSelectedCategory("all");
//               setSelectedStatus("all");
//               setSearchTerm("");
//             }}
//             className="px-6 py-3 bg-[#C9A24D] text-white rounded-xl hover:bg-[#B8933E] transition-colors font-medium"
//           >
//             Clear All Filters
//           </button>
//         </div>
//       )}

//       {/* View More Button */}
//       {filteredProjects.length > 0 && (
//         <div className="mt-12 text-center">
//           <button className="px-8 py-3 border-2 border-[#C9A24D] text-[#C9A24D] font-semibold rounded-xl hover:bg-[#C9A24D] hover:text-white transition-all duration-300">
//             Load More Projects
//           </button>
//         </div>
//       )}

//       {/* Bottom CTA Section */}
//       <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-[#292524] mb-6">
//             Ready to Start Your Project?
//           </h2>
//           <p className="text-lg text-[#78716C] mb-8">
//             Get inspired by our portfolio and let us bring your vision to life.
//             Contact us today for a free consultation and quote.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white p-6 rounded-xl shadow-sm">
//               <div className="text-3xl text-[#C9A24D] mb-3">🏆</div>
//               <div className="font-bold text-[#292524] mb-2">
//                 Quality Guaranteed
//               </div>
//               <div className="text-sm text-[#78716C]">
//                 Premium materials and expert craftsmanship
//               </div>
//             </div>
//             <div className="bg-white p-6 rounded-xl shadow-sm">
//               <div className="text-3xl text-[#C9A24D] mb-3">⏰</div>
//               <div className="font-bold text-[#292524] mb-2">On-Time Delivery</div>
//               <div className="text-sm text-[#78716C]">
//                 We complete projects within agreed timelines
//               </div>
//             </div>
//             <div className="bg-white p-6 rounded-xl shadow-sm">
//               <div className="text-3xl text-[#C9A24D] mb-3">💬</div>
//               <div className="font-bold text-[#292524] mb-2">Free Consultation</div>
//               <div className="text-sm text-[#78716C]">
//                 Discuss your project with our experts
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import {
//   FaCalendar,
//   FaMapMarkerAlt,
//   FaUser,
//   FaDollarSign,
//   FaClock,
//   FaFilter,
//   FaSearch,
//   FaArrowRight,
//   FaCheckCircle,
//   FaSyncAlt,
//   FaClock as FaClockIcon,
//   FaPauseCircle,
// } from "react-icons/fa";
// import {
//   projects,
//   projectCategories,
//   projectStatuses,
//   projectStats,
// } from "../lib/projectData";

// export default function ProjectList() {
//   const router = useRouter();
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [selectedStatus, setSelectedStatus] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter projects
//   const filteredProjects = projects.filter((project) => {
//     const matchesCategory =
//       selectedCategory === "all" || project.category === selectedCategory;
//     const matchesStatus =
//       selectedStatus === "all" || project.status === selectedStatus;
//     const matchesSearch =
//       searchTerm === "" ||
//       project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.client.toLowerCase().includes(searchTerm.toLowerCase());

//     return matchesCategory && matchesStatus && matchesSearch;
//   });

//   const getStatusIcon = (status) => {
//     switch (status) {
//       case "completed":
//         return <FaCheckCircle className="text-green-500" />;
//       case "in-progress":
//         return <FaSyncAlt className="text-blue-500" />;
//       case "upcoming":
//         return <FaClockIcon className="text-yellow-500" />;
//       case "on-hold":
//         return <FaPauseCircle className="text-orange-500" />;
//       default:
//         return null;
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

//   return (
//     <>
//       {/* Hero Section */}
//       <div className="w-full bg-gray-50 py-1 px-8">
//         <div className="relative h-[40vh] md:h-[50vh] overflow-hidden rounded-[32px] mb-16">
//           <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 to-[#3F3F46]/90 z-10"></div>
//           <Image
//             src="https://plus.unsplash.com/premium_photo-1769110817898-2a2b8c989823?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"
//             alt="Our Projects - Melbourne Tiling Portfolio"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="relative z-20 h-full flex items-center justify-center px-6">
//             <div className="text-center max-w-4xl">
//               <div className="inline-block  backdrop-blur-sm px-4 py-2 rounded-full mb-6">
//                 <span className=""></span>
//               </div>
//               <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
//                 Our Melbourne Projects
//               </h1>
//               <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
//                 Browse our portfolio of completed and ongoing tiling projects across Melbourne.
//                 Quality workmanship guaranteed with Australian standards compliance.
//               </p>
//               <div className="flex flex-wrap items-center justify-center gap-4 text-white">
//                 <span className="bg-[#C9A24D]/20 backdrop-blur-sm px-4 py-2 rounded-lg">
//                   {projectStats.totalProjects} Projects
//                 </span>
//                 <span className="bg-[#3F3F46]/50 backdrop-blur-sm px-4 py-2 rounded-lg">
//                   {projectStats.completed} Completed
//                 </span>
//                 <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
//                   Melbourne Wide
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1  gap-12">
//             {/* Main Content - Projects List */}
//             <div className="lg:col-span-2">
//               {/* Stats Overview */}
//               <div className="mb-12 bg-white rounded-xl p-6 shadow-lg">
//                 <h3 className="text-xl font-bold text-[#292524] mb-6">Project Statistics</h3>
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                   <div className="text-center p-4 bg-gray-50 rounded-lg">
//                     <div className="text-2xl font-bold text-[#292524]">{projectStats.totalProjects}</div>
//                     <div className="text-sm text-[#78716C]">Total Projects</div>
//                   </div>
//                   <div className="text-center p-4 bg-gray-50 rounded-lg">
//                     <div className="text-2xl font-bold text-green-600">{projectStats.completed}</div>
//                     <div className="text-sm text-[#78716C]">Completed</div>
//                   </div>
//                   <div className="text-center p-4 bg-gray-50 rounded-lg">
//                     <div className="text-2xl font-bold text-blue-600">{projectStats.inProgress}</div>
//                     <div className="text-sm text-[#78716C]">In Progress</div>
//                   </div>
//                   <div className="text-center p-4 bg-gray-50 rounded-lg">
//                     <div className="text-2xl font-bold text-[#C9A24D]">{projectStats.totalValue}</div>
//                     <div className="text-sm text-[#78716C]">Total Value</div>
//                   </div>
//                   <div className="text-center p-4 bg-gray-50 rounded-lg">
//                     <div className="text-2xl font-bold text-yellow-600">{projectStats.upcoming}</div>
//                     <div className="text-sm text-[#78716C]">Upcoming</div>
//                   </div>
//                   <div className="text-center p-4 bg-gray-50 rounded-lg">
//                     <div className="text-2xl font-bold text-[#C9A24D]">{projectStats.averageRating}/5</div>
//                     <div className="text-sm text-[#78716C]">Rating</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Filters */}
//               <div className="mb-12">
//                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
//                   <h2 className="text-2xl font-bold text-[#292524]">Filter Projects</h2>
//                   <div className="relative w-full md:w-64">
//                     <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#78716C]" />
//                     <input
//                       type="text"
//                       placeholder="Search projects..."
//                       value={searchTerm}
//                       onChange={(e) => setSearchTerm(e.target.value)}
//                       className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-[#292524] placeholder-[#78716C] focus:ring-2 focus:ring-[#C9A24D] focus:border-[#C9A24D] transition-all"
//                     />
//                   </div>
//                 </div>

//                 {/* Category Filters */}
//                 <div className="mb-6">
//                   <h3 className="text-sm font-medium text-[#78716C] mb-3">Category</h3>
//                   <div className="flex flex-wrap gap-2">
//                     <button
//                       onClick={() => setSelectedCategory("all")}
//                       className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === "all"
//                         ? "bg-[#C9A24D] text-white"
//                         : "bg-gray-100 text-[#3F3F46] hover:bg-gray-200"
//                         }`}
//                     >
//                       All Projects
//                     </button>
//                     {projectCategories.map((category) => (
//                       <button
//                         key={category.id}
//                         onClick={() => setSelectedCategory(category.id)}
//                         className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === category.id
//                           ? "bg-[#C9A24D] text-white"
//                           : "bg-gray-100 text-[#3F3F46] hover:bg-gray-200"
//                           }`}
//                       >
//                         {category.name} ({category.count})
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Status Filters */}
//                 <div>
//                   <h3 className="text-sm font-medium text-[#78716C] mb-3">Status</h3>
//                   <div className="flex flex-wrap gap-2">
//                     <button
//                       onClick={() => setSelectedStatus("all")}
//                       className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedStatus === "all"
//                         ? "bg-[#C9A24D] text-white"
//                         : "bg-gray-100 text-[#3F3F46] hover:bg-gray-200"
//                         }`}
//                     >
//                       All Status
//                     </button>
//                     {projectStatuses.map((status) => (
//                       <button
//                         key={status.id}
//                         onClick={() => setSelectedStatus(status.id)}
//                         className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all ${selectedStatus === status.id
//                           ? "bg-[#C9A24D] text-white"
//                           : "bg-gray-100 text-[#3F3F46] hover:bg-gray-200"
//                           }`}
//                       >
//                         {getStatusIcon(status.id)}
//                         {status.name}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Projects Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {filteredProjects.map((project) => (
//                   <div
//                     key={project.id}
//                     className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
//                     onClick={() => router.push(`/projects/${project.slug}`)}
//                   >
//                     {/* Project Image */}
//                     <div className="relative h-48 w-full overflow-hidden cursor-pointer">
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
//                       <div className="absolute top-3 left-3 z-20">
//                         <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded">
//                           {project.location}
//                         </span>
//                       </div>
//                       <div className="absolute top-3 right-3 z-20">
//                         <span
//                           className={`px-2 py-1 rounded text-xs font-bold ${getStatusColor(
//                             project.status
//                           )}`}
//                         >
//                           {project.status.replace("-", " ").toUpperCase()}
//                         </span>
//                       </div>

//                       {project.images && project.images.length > 0 ? (
//                         <Image
//                           src={project.images[0]}
//                           alt={project.title}
//                           fill
//                           className="object-cover group-hover:scale-105 transition-transform duration-500"
//                         />
//                       ) : (
//                         <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
//                           <span className="text-[#78716C]">No image available</span>
//                         </div>
//                       )}
//                     </div>

//                     {/* Project Info */}
//                     <div className="p-5">
//                       <h3 className="text-lg font-bold text-[#292524] mb-2 group-hover:text-[#C9A24D] transition-colors">
//                         {project.title}
//                       </h3>

//                       <p className="text-sm text-[#78716C] mb-3 line-clamp-2">
//                         {project.description}
//                       </p>

//                       <div className="flex items-center justify-between mb-4">
//                         <div>
//                           <div className="text-xs text-[#78716C]">Budget</div>
//                           <div className="text-base font-bold text-[#C9A24D]">
//                             {project.budget}
//                           </div>
//                         </div>
//                         <div className="text-right">
//                           <div className="text-xs text-[#78716C]">Duration</div>
//                           <div className="text-sm font-medium text-[#3F3F46]">
//                             {project.duration}
//                           </div>
//                         </div>
//                       </div>

//                       {/* Client Info */}
//                       <div className="flex items-center gap-3 mb-4">
//                         <FaUser className="text-[#C9A24D]" />
//                         <span className="text-sm text-[#78716C]">{project.client}</span>
//                       </div>

//                       {/* Progress Bar */}
//                       {project.progress !== undefined && project.progress < 100 && (
//                         <div className="mb-4">
//                           <div className="flex justify-between text-xs text-[#78716C] mb-1">
//                             <span>Progress</span>
//                             <span>{project.progress}%</span>
//                           </div>
//                           <div className="w-full bg-gray-200 rounded-full h-2">
//                             <div
//                               className="bg-[#C9A24D] h-2 rounded-full transition-all duration-300"
//                               style={{ width: `${project.progress}%` }}
//                             />
//                           </div>
//                         </div>
//                       )}

//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           router.push(`/projects/${project.slug}`);
//                         }}
//                         className="w-full flex items-center justify-center gap-2 bg-[#292524] text-white text-sm font-semibold py-2 rounded-lg hover:bg-[#C9A24D] transition-all duration-300"
//                       >
//                         View Project
//                         <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Empty State */}
//               {filteredProjects.length === 0 && (
//                 <div className="text-center py-12 bg-white rounded-xl shadow-lg">
//                   <div className="text-4xl mb-4">🔍</div>
//                   <h3 className="text-xl font-semibold text-[#292524] mb-2">
//                     No projects found
//                   </h3>
//                   <p className="text-[#78716C] mb-6 max-w-md mx-auto">
//                     Try adjusting your filters or search terms to find what you're looking for.
//                   </p>
//                   <button
//                     onClick={() => {
//                       setSelectedCategory("all");
//                       setSelectedStatus("all");
//                       setSearchTerm("");
//                     }}
//                     className="px-6 py-3 bg-[#C9A24D] text-white rounded-lg hover:bg-[#B8933E] transition-colors font-medium"
//                   >
//                     Clear All Filters
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import {
//   FaCalendar,
//   FaMapMarkerAlt,
//   FaUser,
//   FaDollarSign,
//   FaClock,
//   FaFilter,
//   FaSearch,
//   FaArrowRight,
//   FaCheckCircle,
//   FaSyncAlt,
//   FaClock as FaClockIcon,
//   FaPauseCircle,
// } from "react-icons/fa";
// import {
//   projects,
//   projectCategories,
//   projectStatuses,
//   projectStats,
// } from "../lib/projectData";

// export default function ProjectList() {
//   const router = useRouter();
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [selectedStatus, setSelectedStatus] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter projects
//   const filteredProjects = projects.filter((project) => {
//     const matchesCategory =
//       selectedCategory === "all" || project.category === selectedCategory;
//     const matchesStatus =
//       selectedStatus === "all" || project.status === selectedStatus;
//     const matchesSearch =
//       searchTerm === "" ||
//       project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.client.toLowerCase().includes(searchTerm.toLowerCase());

//     return matchesCategory && matchesStatus && matchesSearch;
//   });

//   const getStatusIcon = (status) => {
//     switch (status) {
//       case "completed":
//         return <FaCheckCircle className="text-green-500" />;
//       case "in-progress":
//         return <FaSyncAlt className="text-blue-500 animate-rotate" />;
//       case "upcoming":
//         return <FaClockIcon className="text-yellow-500" />;
//       case "on-hold":
//         return <FaPauseCircle className="text-orange-500" />;
//       default:
//         return null;
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

//   return (
//     <>
//       {/* Hero Section */}
//       <div className="w-full bg-gray-50 py-1 px-8">
//         <div className="relative h-[40vh] md:h-[50vh] overflow-hidden rounded-t-[32px] mb-16 animate-scale-in">
//           <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 to-[#3F3F46]/90 z-10"></div>
//           <Image
//             src="https://plus.unsplash.com/premium_photo-1769110817898-2a2b8c989823?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"
//             alt="Our Projects - Melbourne Tiling Portfolio"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="relative z-20 h-full flex items-center justify-center px-6">
//             <div className="text-center max-w-4xl">
//               <div className="inline-block backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in-down">
//                 <span className=""></span>
//               </div>
//               <h1 className="text-4xl md:text-5xl text-white font-bold mb-6 animate-fade-in-up animation-delay-200">
//                 Our Melbourne Projects
//               </h1>
//               <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
//                 Browse our portfolio of completed and ongoing tiling projects across Melbourne.
//                 Quality workmanship guaranteed with Australian standards compliance.
//               </p>
//               <div className="flex flex-wrap items-center justify-center gap-4 text-white animate-fade-in-up animation-delay-600">
//                 <span className="bg-[#C9A24D]/20 backdrop-blur-sm px-4 py-2 rounded-lg hover-lift animate-float">
//                   {projectStats.totalProjects} Projects
//                 </span>
//                 <span className="bg-[#3F3F46]/50 backdrop-blur-sm px-4 py-2 rounded-lg hover-lift animate-float animation-delay-200">
//                   {projectStats.completed} Completed
//                 </span>
//                 <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover-lift animate-float animation-delay-400">
//                   Melbourne Wide
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 gap-12">
//             {/* Main Content - Projects List */}
//             <div className="lg:col-span-2">
//               {/* Stats Overview */}
//               <div className="mb-12 bg-white rounded-xl p-6 shadow-lg animate-fade-in-up animation-delay-300 hover-lift">
//                 <h3 className="text-xl font-bold text-[#292524] mb-6">Project Statistics</h3>
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                   {[
//                     { value: projectStats.totalProjects, label: "Total Projects", color: "text-[#292524]" },
//                     { value: projectStats.completed, label: "Completed", color: "text-green-600" },
//                     { value: projectStats.inProgress, label: "In Progress", color: "text-blue-600" },
//                     { value: projectStats.totalValue, label: "Total Value", color: "text-[#C9A24D]" },
//                     { value: projectStats.upcoming, label: "Upcoming", color: "text-yellow-600" },
//                     { value: `${projectStats.averageRating}/5`, label: "Rating", color: "text-[#C9A24D]" },
//                   ].map((stat, index) => (
//                     <div 
//                       key={index}
//                       className="text-center p-4 bg-gray-50 rounded-lg hover-lift animate-fade-in-up"
//                       style={{ animationDelay: `${400 + index * 100}ms` }}
//                     >
//                       <div className={`text-2xl font-bold ${stat.color} animate-count-up`}>{stat.value}</div>
//                       <div className="text-sm text-[#78716C]">{stat.label}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Filters */}
//               <div className="mb-12 animate-fade-in-up animation-delay-500">
//                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
//                   <h2 className="text-2xl font-bold text-[#292524]">Filter Projects</h2>
//                   <div className="relative w-full md:w-64 animate-fade-in-right animation-delay-600">
//                     <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#78716C]" />
//                     <input
//                       type="text"
//                       placeholder="Search projects..."
//                       value={searchTerm}
//                       onChange={(e) => setSearchTerm(e.target.value)}
//                       className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-[#292524] placeholder-[#78716C] focus:ring-2 focus:ring-[#C9A24D] focus:border-[#C9A24D] transition-all duration-300 focus:scale-105"
//                     />
//                   </div>
//                 </div>

//                 {/* Category Filters */}
//                 <div className="mb-6 animate-fade-in-up animation-delay-700">
//                   <h3 className="text-sm font-medium text-[#78716C] mb-3">Category</h3>
//                   <div className="flex flex-wrap gap-2">
//                     <button
//                       onClick={() => setSelectedCategory("all")}
//                       className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-lift ${
//                         selectedCategory === "all"
//                           ? "bg-[#C9A24D] text-white animate-pulse-scale"
//                           : "bg-gray-100 text-[#3F3F46] hover:bg-gray-200"
//                       }`}
//                     >
//                       All Projects
//                     </button>
//                     {projectCategories.map((category, index) => (
//                       <button
//                         key={category.id}
//                         onClick={() => setSelectedCategory(category.id)}
//                         className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-lift animate-fade-in-up ${
//                           selectedCategory === category.id
//                             ? "bg-[#C9A24D] text-white"
//                             : "bg-gray-100 text-[#3F3F46] hover:bg-gray-200"
//                         }`}
//                         style={{ animationDelay: `${800 + index * 50}ms` }}
//                       >
//                         {category.name} ({category.count})
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Status Filters */}
//                 <div className="animate-fade-in-up animation-delay-900">
//                   <h3 className="text-sm font-medium text-[#78716C] mb-3">Status</h3>
//                   <div className="flex flex-wrap gap-2">
//                     <button
//                       onClick={() => setSelectedStatus("all")}
//                       className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-lift ${
//                         selectedStatus === "all"
//                           ? "bg-[#C9A24D] text-white"
//                           : "bg-gray-100 text-[#3F3F46] hover:bg-gray-200"
//                       }`}
//                     >
//                       All Status
//                     </button>
//                     {projectStatuses.map((status, index) => (
//                       <button
//                         key={status.id}
//                         onClick={() => setSelectedStatus(status.id)}
//                         className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-300 hover-lift animate-fade-in-up ${
//                           selectedStatus === status.id
//                             ? "bg-[#C9A24D] text-white"
//                             : "bg-gray-100 text-[#3F3F46] hover:bg-gray-200"
//                         }`}
//                         style={{ animationDelay: `${1000 + index * 50}ms` }}
//                       >
//                         {getStatusIcon(status.id)}
//                         {status.name}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Projects Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {filteredProjects.map((project, index) => (
//                   <div
//                     key={project.id}
//                     className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover-lift animate-fade-in-up cursor-pointer"
//                     style={{ animationDelay: `${index * 100}ms` }}
//                     onClick={() => router.push(`/projects/${project.slug}`)}
//                   >
//                     {/* Project Image */}
//                     <div className="relative h-48 w-full overflow-hidden">
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
//                       <div className="absolute top-3 left-3 z-20">
//                         <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded animate-fade-in animation-delay-200">
//                           {project.location}
//                         </span>
//                       </div>
//                       <div className="absolute top-3 right-3 z-20">
//                         <span
//                           className={`px-2 py-1 rounded text-xs font-bold animate-fade-in animation-delay-300 ${getStatusColor(
//                             project.status
//                           )}`}
//                         >
//                           {project.status.replace("-", " ").toUpperCase()}
//                         </span>
//                       </div>

//                       {project.images && project.images.length > 0 ? (
//                         <Image
//                           src={project.images[0]}
//                           alt={project.title}
//                           fill
//                           className="object-cover group-hover:scale-110 transition-transform duration-700"
//                         />
//                       ) : (
//                         <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
//                           <span className="text-[#78716C]">No image available</span>
//                         </div>
//                       )}
                      
//                       {/* Overlay on hover */}
//                       <div className="absolute inset-0 bg-[#C9A24D]/0 group-hover:bg-[#C9A24D]/20 transition-all duration-500 z-5"></div>
//                     </div>

//                     {/* Project Info */}
//                     <div className="p-5">
//                       <h3 className="text-lg font-bold text-[#292524] mb-2 group-hover:text-[#C9A24D] transition-colors duration-300">
//                         {project.title}
//                       </h3>

//                       <p className="text-sm text-[#78716C] mb-3 line-clamp-2">
//                         {project.description}
//                       </p>

//                       <div className="flex items-center justify-between mb-4">
//                         <div className="group/budget">
//                           <div className="text-xs text-[#78716C]">Budget</div>
//                           <div className="text-base font-bold text-[#C9A24D] group-hover/budget:animate-pulse-scale">
//                             {project.budget}
//                           </div>
//                         </div>
//                         <div className="text-right">
//                           <div className="text-xs text-[#78716C]">Duration</div>
//                           <div className="text-sm font-medium text-[#3F3F46]">
//                             {project.duration}
//                           </div>
//                         </div>
//                       </div>

//                       {/* Client Info */}
//                       <div className="flex items-center gap-3 mb-4 group/client">
//                         <FaUser className="text-[#C9A24D] group-hover/client:animate-float" />
//                         <span className="text-sm text-[#78716C]">{project.client}</span>
//                       </div>

//                       {/* Progress Bar */}
//                       {project.progress !== undefined && project.progress < 100 && (
//                         <div className="mb-4">
//                           <div className="flex justify-between text-xs text-[#78716C] mb-1">
//                             <span>Progress</span>
//                             <span className="font-semibold">{project.progress}%</span>
//                           </div>
//                           <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
//                             <div
//                               className="bg-gradient-to-r from-[#C9A24D] to-[#E0B85C] h-2 rounded-full animate-progress-bar"
//                               style={{ width: `${project.progress}%` }}
//                             />
//                           </div>
//                         </div>
//                       )}

//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           router.push(`/projects/${project.slug}`);
//                         }}
//                         className="w-full flex items-center justify-center gap-2 bg-[#292524] text-white text-sm font-semibold py-2 rounded-lg hover:bg-[#C9A24D] transition-all duration-300 group/btn overflow-hidden relative"
//                       >
//                         <span className="relative z-10">View Project</span>
//                         <FaArrowRight className="text-xs group-hover/btn:translate-x-2 transition-transform duration-300 relative z-10" />
//                         <div className="absolute inset-0 bg-[#C9A24D] transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"></div>
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Empty State */}
//               {filteredProjects.length === 0 && (
//                 <div className="text-center py-12 bg-white rounded-xl shadow-lg animate-bounce-in">
//                   <div className="text-4xl mb-4 animate-float">🔍</div>
//                   <h3 className="text-xl font-semibold text-[#292524] mb-2 animate-fade-in-up animation-delay-200">
//                     No projects found
//                   </h3>
//                   <p className="text-[#78716C] mb-6 max-w-md mx-auto animate-fade-in-up animation-delay-400">
//                     Try adjusting your filters or search terms to find what you're looking for.
//                   </p>
//                   <button
//                     onClick={() => {
//                       setSelectedCategory("all");
//                       setSelectedStatus("all");
//                       setSearchTerm("");
//                     }}
//                     className="px-6 py-3 bg-[#C9A24D] text-white rounded-lg hover:bg-[#B8933E] transition-all duration-300 font-medium hover-lift animate-fade-in-up animation-delay-600 hover:shadow-lg"
//                   >
//                     Clear All Filters
//                   </button>
//                 </div>
//               )}

//               {/* Results Count */}
//               {filteredProjects.length > 0 && (
//                 <div className="mt-8 text-center animate-fade-in-up">
//                   <p className="text-[#78716C]">
//                     Showing <span className="font-bold text-[#C9A24D]">{filteredProjects.length}</span> of{" "}
//                     <span className="font-bold">{projects.length}</span> projects
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  FaCalendar,
  FaMapMarkerAlt,
  FaUser,
  FaDollarSign,
  FaClock,
  FaFilter,
  FaSearch,
  FaArrowRight,
  FaCheckCircle,
  FaSyncAlt,
  FaClock as FaClockIcon,
  FaPauseCircle,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import {
  projects,
  projectCategories,
  projectStatuses,
  projectStats,
} from "../lib/projectData";

export default function ProjectList() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowCategoryDropdown(false);
      setShowStatusDropdown(false);
    };

    if (showCategoryDropdown || showStatusDropdown) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [showCategoryDropdown, showStatusDropdown]);

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "all" || project.status === selectedStatus;
    const matchesSearch =
      searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesStatus && matchesSearch;
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <FaCheckCircle className="text-green-500" />;
      case "in-progress":
        return <FaSyncAlt className="text-blue-500 animate-spin" style={{ animationDuration: '3s' }} />;
      case "upcoming":
        return <FaClockIcon className="text-yellow-500" />;
      case "on-hold":
        return <FaPauseCircle className="text-orange-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
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

  const activeFiltersCount =
    (selectedCategory !== "all" ? 1 : 0) +
    (selectedStatus !== "all" ? 1 : 0) +
    (searchTerm !== "" ? 1 : 0);

  const clearAllFilters = () => {
    setSelectedCategory("all");
    setSelectedStatus("all");
    setSearchTerm("");
  };

  const getCategoryName = () => {
    if (selectedCategory === "all") return "All Projects";
    return projectCategories.find((c) => c.id === selectedCategory)?.name || "All Projects";
  };

  const getStatusName = () => {
    if (selectedStatus === "all") return "All Status";
    return projectStatuses.find((s) => s.id === selectedStatus)?.name || "All Status";
  };

  return (
    <>
      {/* Hero Section */}
      <div className="w-full bg-gray-50 py-1 max-sm:py-4 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="relative h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] overflow-hidden rounded-t-[16px] sm:rounded-t-[24px] md:rounded-t-[32px] mb-6 sm:mb-8 md:mb-12 lg:mb-16 animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 to-[#3F3F46]/90 z-10"></div>
          <Image
            src="https://plus.unsplash.com/premium_photo-1769110817898-2a2b8c989823?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"
            alt="Our Projects - Melbourne Tiling Portfolio"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6">
            <div className="text-center max-w-4xl">
              <div className="inline-block backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 md:mb-6 animate-fade-in-down">
                <span className=""></span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-3 sm:mb-4 md:mb-6 animate-fade-in-up animation-delay-200 leading-tight">
                Our Melbourne Projects
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-400 px-2">
                Browse our portfolio of completed and ongoing tiling projects across Melbourne.
                Quality workmanship guaranteed with Australian standards compliance.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 text-white animate-fade-in-up animation-delay-600">
                <span className="bg-[#C9A24D]/20 backdrop-blur-sm px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base hover-lift animate-float">
                  {projectStats.totalProjects} Projects
                </span>
                <span className="bg-[#3F3F46]/50 backdrop-blur-sm px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base hover-lift animate-float animation-delay-200">
                  {projectStats.completed} Completed
                </span>
                <span className="bg-white/10 backdrop-blur-sm px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base hover-lift animate-float animation-delay-400">
                  Melbourne Wide
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Main Content - Projects List */}
            <div className="lg:col-span-2">
              {/* Stats Overview */}
              <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-lg animate-fade-in-up animation-delay-300 hover-lift">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#292524] mb-4 sm:mb-5 md:mb-6">
                  Project Statistics
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
                  {[
                    { value: projectStats.totalProjects, label: "Total Projects", color: "text-[#292524]" },
                    { value: projectStats.completed, label: "Completed", color: "text-green-600" },
                    { value: projectStats.inProgress, label: "In Progress", color: "text-blue-600" },
                    { value: projectStats.totalValue, label: "Total Value", color: "text-[#C9A24D]" },
                    { value: projectStats.upcoming, label: "Upcoming", color: "text-yellow-600" },
                    { value: `${projectStats.averageRating}/5`, label: "Rating", color: "text-[#C9A24D]" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-2.5 sm:p-3 md:p-4 bg-gray-50 rounded-lg hover-lift animate-fade-in-up"
                      style={{ animationDelay: `${400 + index * 100}ms` }}
                    >
                      <div className={`text-lg sm:text-xl md:text-2xl font-bold ${stat.color} animate-count-up`}>
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-[#78716C]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Filter Toggle */}
              <div className="md:hidden mb-4 animate-fade-in-up animation-delay-500">
                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3.5 shadow-sm active:scale-[0.98] transition-transform"
                >
                  <div className="flex items-center gap-3">
                    <FaFilter className="text-[#C9A24D]" />
                    <span className="font-semibold text-[#292524]">Filter Projects</span>
                    {activeFiltersCount > 0 && (
                      <span className="bg-[#C9A24D] text-white text-xs font-bold px-2 py-0.5 rounded-full animate-scale-in">
                        {activeFiltersCount}
                      </span>
                    )}
                  </div>
                  {showMobileFilters ? (
                    <FaChevronUp className="text-[#78716C]" />
                  ) : (
                    <FaChevronDown className="text-[#78716C]" />
                  )}
                </button>
              </div>

              {/* Filters */}
              <div
                className={`mb-6 sm:mb-8 md:mb-10 lg:mb-12 animate-fade-in-up animation-delay-500 overflow-hidden transition-all duration-300 ${
                  showMobileFilters ? "max-h-[1000px] opacity-100" : "max-h-0 md:max-h-[1000px] opacity-0 md:opacity-100"
                }`}
              >
                <div className="bg-white md:bg-transparent rounded-xl md:rounded-none p-4 md:p-0 shadow-lg md:shadow-none border border-gray-200 md:border-0">
                  {/* Search and Header Row */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <h2 className="hidden md:block text-xl sm:text-2xl font-bold text-[#292524]">
                      Filter Projects
                    </h2>
                    <div className="relative w-full sm:w-64 animate-fade-in-right animation-delay-600">
                      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#78716C]" />
                      <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-10 py-2.5 sm:py-2 bg-white border border-gray-200 rounded-lg text-[#292524] placeholder-[#78716C] focus:ring-2 focus:ring-[#C9A24D] focus:border-[#C9A24D] transition-all duration-300 text-sm sm:text-base"
                      />
                      {searchTerm && (
                        <button
                          onClick={() => setSearchTerm("")}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#78716C] hover:text-[#292524] p-1"
                        >
                          <FaTimes className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Active Filters Clear Button */}
                  {activeFiltersCount > 0 && (
                    <div className="flex items-center justify-between mb-4 animate-fade-in-up">
                      <span className="text-xs sm:text-sm text-[#78716C]">
                        {activeFiltersCount} filter{activeFiltersCount > 1 ? "s" : ""} active
                      </span>
                      <button
                        onClick={clearAllFilters}
                        className="text-xs sm:text-sm text-[#C9A24D] hover:text-[#B8933E] font-semibold flex items-center gap-1"
                      >
                        <FaTimes className="w-3 h-3" />
                        Clear all
                      </button>
                    </div>
                  )}

                  {/* Category Filters */}
                  <div className="mb-4 sm:mb-6 animate-fade-in-up animation-delay-700">
                    <h3 className="text-xs sm:text-sm font-medium text-[#78716C] mb-2 sm:mb-3">Category</h3>

                    {/* Mobile: Dropdown */}
                    <div className="relative sm:hidden">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowCategoryDropdown(!showCategoryDropdown);
                          setShowStatusDropdown(false);
                        }}
                        className="w-full flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-left"
                      >
                        <span className={selectedCategory !== "all" ? "text-[#C9A24D] font-medium" : "text-[#292524]"}>
                          {getCategoryName()}
                        </span>
                        <FaChevronDown
                          className={`text-[#78716C] transition-transform duration-200 ${
                            showCategoryDropdown ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {showCategoryDropdown && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-30 max-h-60 overflow-y-auto animate-fade-in-up">
                          <button
                            onClick={() => {
                              setSelectedCategory("all");
                              setShowCategoryDropdown(false);
                            }}
                            className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                              selectedCategory === "all" ? "bg-[#C9A24D]/10 text-[#C9A24D] font-medium" : ""
                            }`}
                          >
                            All Projects
                          </button>
                          {projectCategories.map((category) => (
                            <button
                              key={category.id}
                              onClick={() => {
                                setSelectedCategory(category.id);
                                setShowCategoryDropdown(false);
                              }}
                              className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                                selectedCategory === category.id ? "bg-[#C9A24D]/10 text-[#C9A24D] font-medium" : ""
                              }`}
                            >
                              {category.name} ({category.count})
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Desktop: Buttons */}
                    <div className="hidden sm:flex flex-wrap gap-2">
                      <button
                        onClick={() => setSelectedCategory("all")}
                        className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 hover-lift ${
                          selectedCategory === "all"
                            ? "bg-[#C9A24D] text-white animate-pulse-scale"
                            : "bg-gray-100 text-[#3F3F46] hover:bg-gray-200"
                        }`}
                      >
                        All Projects
                      </button>
                      {projectCategories.map((category, index) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 hover-lift animate-fade-in-up ${
                            selectedCategory === category.id
                              ? "bg-[#C9A24D] text-white"
                              : "bg-gray-100 text-[#3F3F46] hover:bg-gray-200"
                          }`}
                          style={{ animationDelay: `${800 + index * 50}ms` }}
                        >
                          {category.name} ({category.count})
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Status Filters */}
                  <div className="animate-fade-in-up animation-delay-900">
                    <h3 className="text-xs sm:text-sm font-medium text-[#78716C] mb-2 sm:mb-3">Status</h3>

                    {/* Mobile: Dropdown */}
                    <div className="relative sm:hidden">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowStatusDropdown(!showStatusDropdown);
                          setShowCategoryDropdown(false);
                        }}
                        className="w-full flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-left"
                      >
                        <div className="flex items-center gap-2">
                          {selectedStatus !== "all" && getStatusIcon(selectedStatus)}
                          <span className={selectedStatus !== "all" ? "text-[#C9A24D] font-medium" : "text-[#292524]"}>
                            {getStatusName()}
                          </span>
                        </div>
                        <FaChevronDown
                          className={`text-[#78716C] transition-transform duration-200 ${
                            showStatusDropdown ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {showStatusDropdown && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-30 animate-fade-in-up">
                          <button
                            onClick={() => {
                              setSelectedStatus("all");
                              setShowStatusDropdown(false);
                            }}
                            className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                              selectedStatus === "all" ? "bg-[#C9A24D]/10 text-[#C9A24D] font-medium" : ""
                            }`}
                          >
                            All Status
                          </button>
                          {projectStatuses.map((status) => (
                            <button
                              key={status.id}
                              onClick={() => {
                                setSelectedStatus(status.id);
                                setShowStatusDropdown(false);
                              }}
                              className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 ${
                                selectedStatus === status.id ? "bg-[#C9A24D]/10 text-[#C9A24D] font-medium" : ""
                              }`}
                            >
                              {getStatusIcon(status.id)}
                              {status.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Desktop: Buttons */}
                    <div className="hidden sm:flex flex-wrap gap-2">
                      <button
                        onClick={() => setSelectedStatus("all")}
                        className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 hover-lift ${
                          selectedStatus === "all"
                            ? "bg-[#C9A24D] text-white"
                            : "bg-gray-100 text-[#3F3F46] hover:bg-gray-200"
                        }`}
                      >
                        All Status
                      </button>
                      {projectStatuses.map((status, index) => (
                        <button
                          key={status.id}
                          onClick={() => setSelectedStatus(status.id)}
                          className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium flex items-center gap-1.5 md:gap-2 transition-all duration-300 hover-lift animate-fade-in-up ${
                            selectedStatus === status.id
                              ? "bg-[#C9A24D] text-white"
                              : "bg-gray-100 text-[#3F3F46] hover:bg-gray-200"
                          }`}
                          style={{ animationDelay: `${1000 + index * 50}ms` }}
                        >
                          {getStatusIcon(status.id)}
                          {status.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover-lift animate-fade-in-up cursor-pointer active:scale-[0.98]"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => router.push(`/projects/${project.slug}`)}
                  >
                    {/* Project Image */}
                    <div className="relative h-36 sm:h-40 md:h-44 lg:h-48 w-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                      <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-20">
                        <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded animate-fade-in animation-delay-200">
                          {project.location}
                        </span>
                      </div>
                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-20">
                        <span
                          className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-bold animate-fade-in animation-delay-300 ${getStatusColor(
                            project.status
                          )}`}
                        >
                          {project.status.replace("-", " ").toUpperCase()}
                        </span>
                      </div>

                      {project.images && project.images.length > 0 ? (
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <span className="text-[#78716C] text-xs sm:text-sm">No image available</span>
                        </div>
                      )}

                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-[#C9A24D]/0 group-hover:bg-[#C9A24D]/20 transition-all duration-500 z-5"></div>
                    </div>

                    {/* Project Info */}
                    <div className="p-3 sm:p-4 md:p-5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#292524] mb-1.5 sm:mb-2 group-hover:text-[#C9A24D] transition-colors duration-300 line-clamp-1">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#78716C] mb-2 sm:mb-3 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <div className="group/budget">
                          <div className="text-[10px] sm:text-xs text-[#78716C]">Budget</div>
                          <div className="text-sm sm:text-base font-bold text-[#C9A24D] group-hover/budget:animate-pulse-scale">
                            {project.budget}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] sm:text-xs text-[#78716C]">Duration</div>
                          <div className="text-xs sm:text-sm font-medium text-[#3F3F46]">
                            {project.duration}
                          </div>
                        </div>
                      </div>

                      {/* Client Info */}
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 group/client">
                        <FaUser className="text-[#C9A24D] text-xs sm:text-sm group-hover/client:animate-float" />
                        <span className="text-xs sm:text-sm text-[#78716C] truncate">{project.client}</span>
                      </div>

                      {/* Progress Bar */}
                      {project.progress !== undefined && project.progress < 100 && (
                        <div className="mb-3 sm:mb-4">
                          <div className="flex justify-between text-[10px] sm:text-xs text-[#78716C] mb-1">
                            <span>Progress</span>
                            <span className="font-semibold">{project.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-[#C9A24D] to-[#E0B85C] h-1.5 sm:h-2 rounded-full animate-progress-bar"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                        </div>
                      )}

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/projects/${project.slug}`);
                        }}
                        className="w-full flex items-center justify-center gap-2 bg-[#292524] text-white text-xs sm:text-sm font-semibold py-2 sm:py-2.5 rounded-lg hover:bg-[#C9A24D] transition-all duration-300 group/btn overflow-hidden relative active:scale-95"
                      >
                        <span className="relative z-10">View Project</span>
                        <FaArrowRight className="text-[10px] sm:text-xs group-hover/btn:translate-x-2 transition-transform duration-300 relative z-10" />
                        <div className="absolute inset-0 bg-[#C9A24D] transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"></div>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {filteredProjects.length === 0 && (
                <div className="text-center py-8 sm:py-10 md:py-12 bg-white rounded-xl shadow-lg animate-bounce-in px-4">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 animate-float">🔍</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#292524] mb-2 animate-fade-in-up animation-delay-200">
                    No projects found
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#78716C] mb-4 sm:mb-6 max-w-md mx-auto animate-fade-in-up animation-delay-400">
                    Try adjusting your filters or search terms to find what you're looking for.
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-[#C9A24D] text-white rounded-lg hover:bg-[#B8933E] transition-all duration-300 font-medium hover-lift animate-fade-in-up animation-delay-600 hover:shadow-lg text-xs sm:text-sm md:text-base active:scale-95"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}

              {/* Results Count */}
              {filteredProjects.length > 0 && (
                <div className="mt-6 sm:mt-8 text-center animate-fade-in-up">
                  <p className="text-xs sm:text-sm md:text-base text-[#78716C]">
                    Showing <span className="font-bold text-[#C9A24D]">{filteredProjects.length}</span> of{" "}
                    <span className="font-bold">{projects.length}</span> projects
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}