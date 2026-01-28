// "use client"

// import Image from 'next/image';
// import { 
//   FaAward, FaShieldAlt, FaUsers, FaHandshake, 
//   FaClock, FaStar, FaMapMarkerAlt, FaPhone, 
//   FaEnvelope, FaCheckCircle, FaTools, FaRulerCombined 
// } from 'react-icons/fa';

// export default function About() {
//   const teamMembers = [
//     {
//       name: "Michael Garda",
//       role: "Founder & Master Tiler",
//       experience: "15+ years",
//       specialty: "Waterproofing & Bathroom Renovations",
//       image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=400&fit=crop",
//       quote: "Precision in every tile, excellence in every project."
//     },
//     {
//       name: "Sarah Johnson",
//       role: "Project Manager",
//       experience: "10+ years",
//       specialty: "Commercial Projects",
//       image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
//       quote: "Ensuring every project exceeds expectations."
//     },
//     {
//       name: "David Chen",
//       role: "Senior Tiler",
//       experience: "12+ years",
//       specialty: "Large Format & Natural Stone",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w-400&h=400&fit=crop",
//       quote: "Quality workmanship speaks for itself."
//     }
//   ];

//   const values = [
//     {
//       icon: <FaAward className="w-8 h-8" />,
//       title: "Excellence",
//       description: "We never compromise on quality. Every tile is laid with precision and care.",
//       color: "from-[#C9A24D] to-[#B89246]"
//     },
//     {
//       icon: <FaShieldAlt className="w-8 h-8" />,
//       title: "Reliability",
//       description: "Licensed, insured, and committed to Australian building standards.",
//       color: "from-[#111827] to-[#3F3F46]"
//     },
//     {
//       icon: <FaHandshake className="w-8 h-8" />,
//       title: "Integrity",
//       description: "Honest quotes, transparent pricing, and clear communication.",
//       color: "from-[#C9A24D] to-[#B89246]"
//     },
//     {
//       icon: <FaClock className="w-8 h-8" />,
//       title: "Timeliness",
//       description: "We respect your time and deliver projects on schedule.",
//       color: "from-[#111827] to-[#3F3F46]"
//     }
//   ];

//   const milestones = [
//     { year: "2010", event: "Founded Garda Tiling", detail: "Started with residential bathroom renovations" },
//     { year: "2013", event: "Waterproofing Certification", detail: "Became certified waterproofing specialists" },
//     { year: "2016", event: "Commercial Expansion", detail: "Started commercial tiling projects" },
//     { year: "2019", event: "Team Growth", detail: "Expanded to 10+ specialist tilers" },
//     { year: "2022", event: "Premium Service Launch", detail: "Introduced luxury tiling services" },
//     { year: "2024", event: "1000+ Projects", detail: "Successfully completed over 1000 projects" }
//   ];

//   return (
//     <div className="w-full bg-gray-50 py-16 px-8 ">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden rounded-t-[32px]">
//         <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 to-[#3F3F46]/90 z-10 "></div>
//         {/* <Image
//           src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&h=900&fit=crop"
//           alt="Professional tiling work"
//           fill
//           className="object-cover"
//           priority
//         /> */}
//         <div className="relative z-20 py-20 px-4 max-w-7xl mx-auto">
//           <div className="max-w-3xl">
//             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
//               <FaStar className="text-[#C9A24D]" />
//               <span className="text-white font-medium">MELBOURNE'S TRUSTED TILING EXPERTS</span>
//             </div>
            
//             <h1 className="text-5xl md:text-5xl font-bold text-white mb-6 leading-tight">
//               Crafting Beautiful Spaces
//               <span className="block text-[#C9A24D]">Since 2010</span>
//             </h1>
            
//             <p className="text-xl text-white/90 mb-8">
//               We transform Melbourne homes and businesses with precision tiling, expert waterproofing, 
//               and unparalleled craftsmanship. Your vision, our expertise.
//             </p>
            
//             <div className="flex flex-wrap gap-4">
//               <button className="bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all">
//                 View Our Work
//               </button>
//               <button className="bg-white text-[#111827] font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all">
//                 Get Free Quote
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Story */}
//       <section className="py-20 px-4 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A24D]/10 to-[#B89246]/10 px-4 py-2 rounded-full mb-6">
//               <span className="text-sm font-semibold text-[#C9A24D]">OUR JOURNEY</span>
//             </div>
            
//             <h2 className="text-4xl font-bold text-[#111827] mb-6">
//               From Humble Beginnings to Melbourne's Premier Tiling Service
//             </h2>
            
//             <p className="text-lg text-[#3F3F46] mb-6">
//               Founded in 2010 by Michael Garda, what started as a one-man operation has grown into 
//               Melbourne's most trusted tiling and waterproofing company. Our commitment to excellence 
//               has earned us a reputation for quality workmanship and reliable service.
//             </p>
            
//             <p className="text-lg text-[#3F3F46] mb-8">
//               Today, we're proud to serve homeowners and businesses across Melbourne with a team of 
//               certified professionals who share our passion for creating beautiful, durable spaces.
//             </p>
            
//             <div className="grid grid-cols-2 gap-6">
//               <div className="bg-gradient-to-br from-[#C9A24D]/5 to-transparent p-6 rounded-xl">
//                 <div className="text-3xl font-bold text-[#C9A24D] mb-2">1000+</div>
//                 <div className="text-[#111827] font-semibold">Projects Completed</div>
//               </div>
//               <div className="bg-gradient-to-br from-[#111827]/5 to-transparent p-6 rounded-xl">
//                 <div className="text-3xl font-bold text-[#111827] mb-2">15+</div>
//                 <div className="text-[#111827] font-semibold">Years Experience</div>
//               </div>
//             </div>
//           </div>
          
//           <div className="relative">
//             <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
//               <Image
//                 src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop"
//                 alt="Our team at work"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
//               <div className="flex items-center gap-3 mb-3">
//                 <div className="w-12 h-12 bg-gradient-to-br from-[#C9A24D] to-[#B89246] rounded-full flex items-center justify-center">
//                   <FaHandshake className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <div className="font-bold text-[#111827]">Michael Garda</div>
//                   <div className="text-sm text-[#C9A24D]">Founder</div>
//                 </div>
//               </div>
//               <p className="text-[#3F3F46] italic">
//                 "We don't just lay tiles; we build relationships through quality work."
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Values */}
//       <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-[#111827] mb-4">
//               Why Choose Garda Tiling
//             </h2>
//             <p className="text-lg text-[#3F3F46] max-w-3xl mx-auto">
//               Our core values guide every project we undertake, ensuring exceptional results every time.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center text-white mb-6`}>
//                   {value.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-[#111827] mb-3">{value.title}</h3>
//                 <p className="text-[#3F3F46]">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Process */}
//       <section className="py-20 px-4 max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-[#111827] mb-4">
//             Our Proven Process
//           </h2>
//           <p className="text-lg text-[#3F3F46] max-w-3xl mx-auto">
//             From consultation to completion, we follow a meticulous process to ensure perfect results.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {[
//             {
//               step: "01",
//               title: "Consultation",
//               description: "Free site inspection & detailed quote",
//               icon: <FaRulerCombined className="w-6 h-6" />
//             },
//             {
//               step: "02",
//               title: "Planning",
//               description: "Material selection & project timeline",
//               icon: <FaTools className="w-6 h-6" />
//             },
//             {
//               step: "03",
//               title: "Installation",
//               description: "Precision work with quality materials",
//               icon: <FaCheckCircle className="w-6 h-6" />
//             },
//             {
//               step: "04",
//               title: "Completion",
//               description: "Final inspection & warranty handover",
//               icon: <FaShieldAlt className="w-6 h-6" />
//             }
//           ].map((process, index) => (
//             <div key={index} className="relative">
//               <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
//                 <div className="text-5xl font-bold text-gray-100 mb-4">{process.step}</div>
//                 <div className="w-12 h-12 bg-gradient-to-br from-[#C9A24D] to-[#B89246] rounded-lg flex items-center justify-center text-white mb-4">
//                   {process.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-[#111827] mb-2">{process.title}</h3>
//                 <p className="text-[#3F3F46]">{process.description}</p>
//               </div>
//               {index < 3 && (
//                 <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
//                   <div className="w-8 h-0.5 bg-gray-300"></div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Our Team */}
//       <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-[#111827] mb-4">
//               Meet Our Expert Team
//             </h2>
//             <p className="text-lg text-[#3F3F46] max-w-3xl mx-auto">
//               Certified professionals with years of experience in tiling and waterproofing.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {teamMembers.map((member, index) => (
//               <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
//                 <div className="relative h-64">
//                   <Image
//                     src={member.image}
//                     alt={member.name}
//                     fill
//                     className="object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                   <div className="absolute bottom-4 left-4">
//                     <div className="bg-[#C9A24D] text-white text-xs font-bold px-3 py-1 rounded-full">
//                       {member.experience} Experience
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-[#111827] mb-1">{member.name}</h3>
//                   <div className="text-[#C9A24D] font-semibold mb-3">{member.role}</div>
//                   <div className="text-sm text-[#3F3F46] mb-4">{member.specialty}</div>
//                   <div className="text-[#111827] italic border-l-4 border-[#C9A24D] pl-4 py-2">
//                     "{member.quote}"
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Timeline */}
//       <section className="py-20 px-4 max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-[#111827] mb-4">
//             Our Journey Through the Years
//           </h2>
//           <p className="text-lg text-[#3F3F46] max-w-3xl mx-auto">
//             Milestones that shaped our commitment to excellence in tiling.
//           </p>
//         </div>
        
//         <div className="relative">
//           {/* Timeline line */}
//           <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#C9A24D] via-[#B89246] to-[#C9A24D]"></div>
          
//           {/* Timeline items */}
//           <div className="space-y-12">
//             {milestones.map((milestone, index) => (
//               <div key={index} className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
//                 <div className="flex-1"></div>
                
//                 {/* Timeline dot */}
//                 <div className="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-auto md:transform-none">
//                   <div className="w-8 h-8 bg-gradient-to-br from-[#C9A24D] to-[#B89246] rounded-full border-4 border-white shadow-lg"></div>
//                 </div>
                
//                 {/* Content */}
//                 <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} mt-8 md:mt-0`}>
//                   <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
//                     <div className="text-2xl font-bold text-[#C9A24D] mb-2">{milestone.year}</div>
//                     <h3 className="text-xl font-bold text-[#111827] mb-2">{milestone.event}</h3>
//                     <p className="text-[#3F3F46]">{milestone.detail}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 bg-gradient-to-r from-[#111827] to-[#3F3F46]">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-white mb-6">
//             Ready to Transform Your Space?
//           </h2>
//           <p className="text-xl text-gray-300 mb-8">
//             Join over 1000 satisfied customers who trust Garda Tiling for their projects.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//             <button className="bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all">
//               Get Your Free Quote
//             </button>
//             <button className="bg-white text-[#111827] font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all">
//               View Our Gallery
//             </button>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="flex items-center justify-center gap-3 text-white">
//               <FaPhone className="text-[#C9A24D]" />
//               <div>
//                 <div className="font-semibold">Call Us</div>
//                 <div className="text-lg">(03) 0000 0000</div>
//               </div>
//             </div>
            
//             <div className="flex items-center justify-center gap-3 text-white">
//               <FaEnvelope className="text-[#C9A24D]" />
//               <div>
//                 <div className="font-semibold">Email Us</div>
//                 <div className="text-lg">hello@garda-tiling.com</div>
//               </div>
//             </div>
            
//             <div className="flex items-center justify-center gap-3 text-white">
//               <FaMapMarkerAlt className="text-[#C9A24D]" />
//               <div>
//                 <div className="font-semibold">Service Area</div>
//                 <div className="text-lg">All Melbourne</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Certifications */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h3 className="text-2xl font-bold text-[#111827] mb-4">
//               Certified & Licensed Professionals
//             </h3>
//             <p className="text-[#3F3F46]">
//               Fully compliant with Australian building standards and regulations
//             </p>
//           </div>
          
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { name: "Waterproofing License", number: "WP123456" },
//               { name: "Building Practitioner", number: "BP789012" },
//               { name: "Occupational License", number: "OL345678" },
//               { name: "Insurance Coverage", number: "$10M Public Liability" }
//             ].map((cert, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#C9A24D]/10 to-[#B89246]/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <FaShieldAlt className="w-8 h-8 text-[#C9A24D]" />
//                 </div>
//                 <div className="font-semibold text-[#111827]">{cert.name}</div>
//                 <div className="text-sm text-[#3F3F46]">{cert.number}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


"use client"

import Image from 'next/image';
import { 
  FaAward, FaShieldAlt, FaUsers, FaHandshake, 
  FaClock, FaStar, FaMapMarkerAlt, FaPhone, 
  FaEnvelope, FaCheckCircle, FaTools, FaRulerCombined 
} from 'react-icons/fa';

export default function About() {
  const teamMembers = [
    {
      name: "Michael Garda",
      role: "Founder & Master Tiler",
      experience: "15+ years",
      specialty: "Waterproofing & Bathroom Renovations",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=400&fit=crop",
      quote: "Precision in every tile, excellence in every project."
    },
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      experience: "10+ years",
      specialty: "Commercial Projects",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      quote: "Ensuring every project exceeds expectations."
    },
    {
      name: "David Chen",
      role: "Senior Tiler",
      experience: "12+ years",
      specialty: "Large Format & Natural Stone",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w-400&h=400&fit=crop",
      quote: "Quality workmanship speaks for itself."
    }
  ];

  const values = [
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "Excellence",
      description: "We never compromise on quality. Every tile is laid with precision and care.",
      color: "from-[#C9A24D] to-[#B89246]"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Reliability",
      description: "Licensed, insured, and committed to Australian building standards.",
      color: "from-[#111827] to-[#3F3F46]"
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Integrity",
      description: "Honest quotes, transparent pricing, and clear communication.",
      color: "from-[#C9A24D] to-[#B89246]"
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "Timeliness",
      description: "We respect your time and deliver projects on schedule.",
      color: "from-[#111827] to-[#3F3F46]"
    }
  ];

  const milestones = [
    { year: "2010", event: "Founded Garda Tiling", detail: "Started with residential bathroom renovations" },
    { year: "2013", event: "Waterproofing Certification", detail: "Became certified waterproofing specialists" },
    { year: "2016", event: "Commercial Expansion", detail: "Started commercial tiling projects" },
    { year: "2019", event: "Team Growth", detail: "Expanded to 10+ specialist tilers" },
    { year: "2022", event: "Premium Service Launch", detail: "Introduced luxury tiling services" },
    { year: "2024", event: "1000+ Projects", detail: "Successfully completed over 1000 projects" }
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-8 ">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-t-[32px] animate-scale-in">
        <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 to-[#3F3F46]/90 z-10 "></div>
        <div className="relative z-20 py-20 px-4 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in-down">
              <FaStar className="text-[#C9A24D] animate-float" />
              <span className="text-white font-medium">MELBOURNE'S TRUSTED TILING EXPERTS</span>
            </div>
            
            <h1 className="text-5xl md:text-5xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-200">
              Crafting Beautiful Spaces
              <span className="block text-[#C9A24D] animate-fade-in-up animation-delay-400">Since 2010</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 animate-fade-in-up animation-delay-500">
              We transform Melbourne homes and businesses with precision tiling, expert waterproofing, 
              and unparalleled craftsmanship. Your vision, our expertise.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-700">
              <button className="bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">View Our Work</span>
                <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
              <button className="bg-white text-[#111827] font-bold py-3 px-8 rounded-xl hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up animation-delay-300">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A24D]/10 to-[#B89246]/10 px-4 py-2 rounded-full mb-6 animate-fade-in-left">
              <span className="text-sm font-semibold text-[#C9A24D]">OUR JOURNEY</span>
            </div>
            
            <h2 className="text-4xl font-bold text-[#111827] mb-6 animate-fade-in-up animation-delay-400">
              From Humble Beginnings to Melbourne's Premier Tiling Service
            </h2>
            
            <p className="text-lg text-[#3F3F46] mb-6 animate-fade-in-up animation-delay-500">
              Founded in 2010 by Michael Garda, what started as a one-man operation has grown into 
              Melbourne's most trusted tiling and waterproofing company. Our commitment to excellence 
              has earned us a reputation for quality workmanship and reliable service.
            </p>
            
            <p className="text-lg text-[#3F3F46] mb-8 animate-fade-in-up animation-delay-600">
              Today, we're proud to serve homeowners and businesses across Melbourne with a team of 
              certified professionals who share our passion for creating beautiful, durable spaces.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#C9A24D]/5 to-transparent p-6 rounded-xl hover-lift transition-all duration-300 animate-fade-in-up animation-delay-700">
                <div className="text-3xl font-bold text-[#C9A24D] mb-2 group-hover:animate-pulse-scale">1000+</div>
                <div className="text-[#111827] font-semibold">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-[#111827]/5 to-transparent p-6 rounded-xl hover-lift transition-all duration-300 animate-fade-in-up animation-delay-800">
                <div className="text-3xl font-bold text-[#111827] mb-2 group-hover:animate-pulse-scale">15+</div>
                <div className="text-[#111827] font-semibold">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up animation-delay-700">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop"
                alt="Our team at work"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs animate-fade-in-up animation-delay-900 hover-lift hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C9A24D] to-[#B89246] rounded-full flex items-center justify-center group-hover:animate-float">
                  <FaHandshake className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#111827]">Michael Garda</div>
                  <div className="text-sm text-[#C9A24D]">Founder</div>
                </div>
              </div>
              <p className="text-[#3F3F46] italic">
                "We don't just lay tiles; we build relationships through quality work."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up animation-delay-300">
            <h2 className="text-4xl font-bold text-[#111827] mb-4">
              Why Choose Garda Tiling
            </h2>
            <p className="text-lg text-[#3F3F46] max-w-3xl mx-auto">
              Our core values guide every project we undertake, ensuring exceptional results every time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-fade-in-up group"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:animate-float`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3 group-hover:text-[#C9A24D] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-[#3F3F46]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up animation-delay-300">
          <h2 className="text-4xl font-bold text-[#111827] mb-4">
            Our Proven Process
          </h2>
          <p className="text-lg text-[#3F3F46] max-w-3xl mx-auto">
            From consultation to completion, we follow a meticulous process to ensure perfect results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Consultation",
              description: "Free site inspection & detailed quote",
              icon: <FaRulerCombined className="w-6 h-6" />
            },
            {
              step: "02",
              title: "Planning",
              description: "Material selection & project timeline",
              icon: <FaTools className="w-6 h-6" />
            },
            {
              step: "03",
              title: "Installation",
              description: "Precision work with quality materials",
              icon: <FaCheckCircle className="w-6 h-6" />
            },
            {
              step: "04",
              title: "Completion",
              description: "Final inspection & warranty handover",
              icon: <FaShieldAlt className="w-6 h-6" />
            }
          ].map((process, index) => (
            <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${500 + index * 100}ms` }}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover-lift hover:shadow-xl transition-all duration-300 group">
                <div className="text-5xl font-bold text-gray-100 mb-4 group-hover:animate-fade-in-up">{process.step}</div>
                <div className="w-12 h-12 bg-gradient-to-br from-[#C9A24D] to-[#B89246] rounded-lg flex items-center justify-center text-white mb-4 group-hover:animate-float">
                  {process.icon}
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-2 group-hover:text-[#C9A24D] transition-colors duration-300">
                  {process.title}
                </h3>
                <p className="text-[#3F3F46] group-hover:text-[#3F3F46] transition-colors duration-300">
                  {process.description}
                </p>
              </div>
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 animate-fade-in-right animation-delay-300">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up animation-delay-300">
            <h2 className="text-4xl font-bold text-[#111827] mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-[#3F3F46] max-w-3xl mx-auto">
              Certified professionals with years of experience in tiling and waterproofing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-fade-in-up group"
                style={{ animationDelay: `${400 + index * 150}ms` }}
              >
                <div className="relative h-64 group/image">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover/image:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-[#C9A24D] text-white text-xs font-bold px-3 py-1 rounded-full group-hover:animate-bounce-in">
                      {member.experience} Experience
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#111827] mb-1 group-hover:text-[#C9A24D] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="text-[#C9A24D] font-semibold mb-3">{member.role}</div>
                  <div className="text-sm text-[#3F3F46] mb-4">{member.specialty}</div>
                  <div className="text-[#111827] italic border-l-4 border-[#C9A24D] pl-4 py-2 group-hover:border-l-8 transition-all duration-300">
                    "{member.quote}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up animation-delay-300">
          <h2 className="text-4xl font-bold text-[#111827] mb-4">
            Our Journey Through the Years
          </h2>
          <p className="text-lg text-[#3F3F46] max-w-3xl mx-auto">
            Milestones that shaped our commitment to excellence in tiling.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#C9A24D] via-[#B89246] to-[#C9A24D] animate-fade-in-up"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center animate-fade-in-up`}
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex-1"></div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-auto md:transform-none">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#C9A24D] to-[#B89246] rounded-full border-4 border-white shadow-lg group-hover:animate-pulse-scale"></div>
                </div>
                
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} mt-8 md:mt-0`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover-lift hover:shadow-xl transition-all duration-300 group">
                    <div className="text-2xl font-bold text-[#C9A24D] mb-2 group-hover:animate-scale-in">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-[#111827] mb-2 group-hover:text-[#C9A24D] transition-colors duration-300">
                      {milestone.event}
                    </h3>
                    <p className="text-[#3F3F46]">{milestone.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#111827] to-[#3F3F46] hover-glow animate-fade-in-up animation-delay-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-up animation-delay-500">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up animation-delay-600">
            Join over 1000 satisfied customers who trust Garda Tiling for their projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-700">
            <button className="bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">Get Your Free Quote</span>
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
            <button className="bg-white text-[#111827] font-bold py-3 px-8 rounded-xl hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
              View Our Gallery
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: FaPhone, label: "Call Us", value: "(03) 0000 0000" },
              { icon: FaEnvelope, label: "Email Us", value: "hello@garda-tiling.com" },
              { icon: FaMapMarkerAlt, label: "Service Area", value: "All Melbourne" }
            ].map((contact, index) => (
              <div 
                key={index}
                className="flex items-center justify-center gap-3 text-white group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <contact.icon className="text-[#C9A24D] group-hover:animate-float text-xl" />
                <div>
                  <div className="font-semibold">{contact.label}</div>
                  <div className="text-lg group-hover:text-[#C9A24D] transition-colors duration-300">
                    {contact.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up animation-delay-300">
            <h3 className="text-2xl font-bold text-[#111827] mb-4">
              Certified & Licensed Professionals
            </h3>
            <p className="text-[#3F3F46] animate-fade-in-up animation-delay-400">
              Fully compliant with Australian building standards and regulations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Waterproofing License", number: "WP123456" },
              { name: "Building Practitioner", number: "BP789012" },
              { name: "Occupational License", number: "OL345678" },
              { name: "Insurance Coverage", number: "$10M Public Liability" }
            ].map((cert, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up hover-lift transition-all duration-300 group"
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#C9A24D]/10 to-[#B89246]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-float">
                  <FaShieldAlt className="w-8 h-8 text-[#C9A24D]" />
                </div>
                <div className="font-semibold text-[#111827] group-hover:text-[#C9A24D] transition-colors duration-300">
                  {cert.name}
                </div>
                <div className="text-sm text-[#3F3F46] group-hover:text-[#111827] transition-colors duration-300">
                  {cert.number}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}