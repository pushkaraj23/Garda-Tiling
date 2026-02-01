// "use client"

// import { useState } from 'react';
// import { 
//   FaCheck, FaTimes, FaRuler, FaClock, 
//   FaTools, FaShieldAlt, FaStar, FaCalculator 
// } from 'react-icons/fa';

// export default function Pricing() {
//   const [selectedTab, setSelectedTab] = useState('bathroom');
//   const [isAnnual, setIsAnnual] = useState(false);

//   const pricingTabs = [
//     { id: 'bathroom', label: 'Bathroom Tiling', icon: '🚿' },
//     { id: 'kitchen', label: 'Kitchen Splashback', icon: '🍽️' },
//     { id: 'outdoor', label: 'Outdoor & Pool', icon: '🏊‍♂️' },
//     { id: 'waterproofing', label: 'Waterproofing', icon: '🛡️' },
//     { id: 'flooring', label: 'Flooring', icon: '🪵' },
//   ];

//   const pricingData = {
//     bathroom: {
//       title: "Bathroom Tiling & Waterproofing",
//       description: "Complete bathroom tiling solutions with Australian standard waterproofing",
//       packages: [
//         {
//           name: "Standard",
//           price: isAnnual ? "$4,800" : "$5,000",
//           duration: "10-14 days",
//           features: [
//             { included: true, text: "Waterproofing certificate" },
//             { included: true, text: "Porcelain tile installation" },
//             { included: true, text: "Demolition & disposal" },
//             { included: true, text: "Grouting & sealing" },
//             { included: true, text: "Basic fixtures" },
//             { included: false, text: "Premium tiles" },
//             { included: false, text: "Heated flooring" },
//             { included: false, text: "Design consultation" },
//           ],
//           popular: false,
//           color: "from-gray-100 to-white"
//         },
//         {
//           name: "Premium",
//           price: isAnnual ? "$7,200" : "$7,500",
//           duration: "14-21 days",
//           features: [
//             { included: true, text: "10-year waterproofing warranty" },
//             { included: true, text: "Large format porcelain/stone" },
//             { included: true, text: "Laser level precision" },
//             { included: true, text: "Premium grout & sealants" },
//             { included: true, text: "Design consultation" },
//             { included: true, text: "Heated flooring option" },
//             { included: true, text: "Smart bathroom features" },
//             { included: true, text: "Extended 5-year workmanship" },
//           ],
//           popular: true,
//           color: "from-[#C9A24D]/10 via-[#B89246]/5 to-white",
//           highlight: true
//         },
//         {
//           name: "Luxury",
//           price: isAnnual ? "$12,000" : "$12,500",
//           duration: "3-4 weeks",
//           features: [
//             { included: true, text: "15-year waterproofing warranty" },
//             { included: true, text: "Natural stone/marble tiles" },
//             { included: true, text: "Custom mosaic features" },
//             { included: true, text: "Smart home integration" },
//             { included: true, text: "Premium fixtures & fittings" },
//             { included: true, text: "Heated flooring included" },
//             { included: true, text: "Architectural design" },
//             { included: true, text: "10-year comprehensive warranty" },
//           ],
//           popular: false,
//           color: "from-gray-100 to-white"
//         }
//       ],
//       addOns: [
//         { name: "Tile Removal", price: "$45/sqm" },
//         { name: "Additional Waterproofing", price: "$35/sqm" },
//         { name: "Underfloor Heating", price: "$120/sqm" },
//         { name: "Premium Sealants", price: "$15/sqm" },
//       ]
//     },
//     kitchen: {
//       title: "Kitchen Splashback Tiling",
//       description: "Professional kitchen splashback installation with premium finishes",
//       packages: [
//         {
//           name: "Basic",
//           price: isAnnual ? "$900" : "$950",
//           duration: "1-2 days",
//           features: [
//             { included: true, text: "Standard ceramic tiles" },
//             { included: true, text: "Professional installation" },
//             { included: true, text: "Grouting & cleaning" },
//             { included: true, text: "Basic edge finishing" },
//             { included: false, text: "Glass/mosaic tiles" },
//             { included: false, text: "Premium sealants" },
//             { included: false, text: "Design service" },
//           ],
//           popular: false,
//           color: "from-gray-100 to-white"
//         },
//         {
//           name: "Premium",
//           price: isAnnual ? "$1,800" : "$1,900",
//           duration: "2-3 days",
//           features: [
//             { included: true, text: "Glass or mosaic tiles" },
//             { included: true, text: "Precision laser cutting" },
//             { included: true, text: "Premium waterproof grout" },
//             { included: true, text: "Professional finishing" },
//             { included: true, text: "Design consultation" },
//             { included: true, text: "3-year warranty" },
//             { included: true, text: "Quick installation" },
//           ],
//           popular: true,
//           color: "from-[#C9A24D]/10 via-[#B89246]/5 to-white",
//           highlight: true
//         },
//         {
//           name: "Custom",
//           price: "From $2,500",
//           duration: "3-5 days",
//           features: [
//             { included: true, text: "Custom tile design" },
//             { included: true, text: "Premium materials" },
//             { included: true, text: "Integrated lighting" },
//             { included: true, text: "5-year warranty" },
//             { included: true, text: "Full design service" },
//             { included: true, text: "Extended support" },
//           ],
//           popular: false,
//           color: "from-gray-100 to-white"
//         }
//       ],
//       addOns: [
//         { name: "Tile Pattern Design", price: "$300" },
//         { name: "Integrated LED Lighting", price: "$450" },
//         { name: "Premium Sealants", price: "$150" },
//         { name: "Express Service", price: "+25%" },
//       ]
//     },
//     outdoor: {
//       title: "Outdoor & Pool Tiling",
//       description: "Durable outdoor tiling solutions for pools, patios, and entertainment areas",
//       packages: [
//         {
//           name: "Patio Basic",
//           price: isAnnual ? "$3,600" : "$3,800",
//           duration: "5-7 days",
//           features: [
//             { included: true, text: "Slip-resistant porcelain" },
//             { included: true, text: "Weatherproof installation" },
//             { included: true, text: "Basic drainage" },
//             { included: true, text: "3-year warranty" },
//             { included: false, text: "Custom patterns" },
//             { included: false, text: "Premium sealants" },
//             { included: false, text: "Lighting integration" },
//           ],
//           popular: false,
//           color: "from-gray-100 to-white"
//         },
//         {
//           name: "Pool Premium",
//           price: isAnnual ? "$6,000" : "$6,300",
//           duration: "10-14 days",
//           features: [
//             { included: true, text: "Anti-slip pool tiles" },
//             { included: true, text: "Chemical-resistant grout" },
//             { included: true, text: "Professional waterproofing" },
//             { included: true, text: "Custom design options" },
//             { included: true, text: "5-year warranty" },
//             { included: true, text: "Safety compliance" },
//             { included: true, text: "Quick installation" },
//           ],
//           popular: true,
//           color: "from-[#C9A24D]/10 via-[#B89246]/5 to-white",
//           highlight: true
//         },
//         {
//           name: "Luxury Outdoor",
//           price: "From $8,500",
//           duration: "2-3 weeks",
//           features: [
//             { included: true, text: "Natural stone paving" },
//             { included: true, text: "Custom mosaic features" },
//             { included: true, text: "Integrated drainage" },
//             { included: true, text: "Landscape lighting" },
//             { included: true, text: "10-year warranty" },
//             { included: true, text: "Full design service" },
//           ],
//           popular: false,
//           color: "from-gray-100 to-white"
//         }
//       ],
//       addOns: [
//         { name: "Pool Coping", price: "$120/linear m" },
//         { name: "Custom Mosaic", price: "$300/sqm" },
//         { name: "Outdoor Lighting", price: "$750" },
//         { name: "Premium Sealants", price: "$15/sqm" },
//       ]
//     },
//     waterproofing: {
//       title: "Commercial & Residential Waterproofing",
//       description: "Certified waterproofing solutions with compliance guarantees",
//       packages: [
//         {
//           name: "Residential",
//           price: isAnnual ? "$2,400" : "$2,500",
//           duration: "3-5 days",
//           features: [
//             { included: true, text: "Australian standards compliant" },
//             { included: true, text: "5-year warranty" },
//             { included: true, text: "Certificate provided" },
//             { included: true, text: "Professional application" },
//             { included: false, text: "Extended warranty" },
//             { included: false, text: "Premium membranes" },
//             { included: false, text: "Commercial grade" },
//           ],
//           popular: false,
//           color: "from-gray-100 to-white"
//         },
//         {
//           name: "Commercial",
//           price: isAnnual ? "$4,800" : "$5,000",
//           duration: "7-10 days",
//           features: [
//             { included: true, text: "Commercial grade membranes" },
//             { included: true, text: "10-year warranty" },
//             { included: true, text: "Full compliance certificate" },
//             { included: true, text: "Structural assessment" },
//             { included: true, text: "Priority service" },
//             { included: true, text: "BAL rated options" },
//             { included: true, text: "Project management" },
//           ],
//           popular: true,
//           color: "from-[#C9A24D]/10 via-[#B89246]/5 to-white",
//           highlight: true
//         },
//         {
//           name: "Premium",
//           price: "Custom Quote",
//           duration: "Varies",
//           features: [
//             { included: true, text: "15+ year warranty" },
//             { included: true, text: "Premium European membranes" },
//             { included: true, text: "Full architectural design" },
//             { included: true, text: "24/7 support" },
//             { included: true, text: "Compliance management" },
//             { included: true, text: "Multi-point inspection" },
//           ],
//           popular: false,
//           color: "from-gray-100 to-white"
//         }
//       ],
//       addOns: [
//         { name: "Extended Warranty", price: "+20%" },
//         { name: "Structural Assessment", price: "$450" },
//         { name: "Express Certificate", price: "$200" },
//         { name: "Premium Membranes", price: "+35%" },
//       ]
//     },
//     flooring: {
//       title: "Flooring Installation",
//       description: "Professional flooring solutions for any space",
//       packages: [
//         {
//           name: "Laminate",
//           price: isAnnual ? "$45/sqm" : "$48/sqm",
//           duration: "2-3 days",
//           features: [
//             { included: true, text: "Quality laminate flooring" },
//             { included: true, text: "Underlay included" },
//             { included: true, text: "Professional installation" },
//             { included: true, text: "3-year warranty" },
//             { included: false, text: "Premium underlay" },
//             { included: false, text: "Soundproofing" },
//             { included: false, text: "Extended warranty" },
//           ],
//           popular: false,
//           color: "from-gray-100 to-white"
//         },
//         {
//           name: "Hybrid",
//           price: isAnnual ? "$65/sqm" : "$68/sqm",
//           duration: "3-4 days",
//           features: [
//             { included: true, text: "Water-resistant hybrid" },
//             { included: true, text: "Premium underlay" },
//             { included: true, text: "Soundproofing option" },
//             { included: true, text: "5-year warranty" },
//             { included: true, text: "Quick installation" },
//             { included: true, text: "Pet-friendly options" },
//             { included: true, text: "Design consultation" },
//           ],
//           popular: true,
//           color: "from-[#C9A24D]/10 via-[#B89246]/5 to-white",
//           highlight: true
//         },
//         {
//           name: "Timber",
//           price: isAnnual ? "$95/sqm" : "$99/sqm",
//           duration: "5-7 days",
//           features: [
//             { included: true, text: "Engineered timber" },
//             { included: true, text: "Professional sanding" },
//             { included: true, text: "Premium finishing" },
//             { included: true, text: "10-year warranty" },
//             { included: true, text: "Custom staining" },
//             { included: true, text: "Expert craftsmanship" },
//           ],
//           popular: false,
//           color: "from-gray-100 to-white"
//         }
//       ],
//       addOns: [
//         { name: "Soundproof Underlay", price: "$12/sqm" },
//         { name: "Custom Staining", price: "$25/sqm" },
//         { name: "Skirting Installation", price: "$35/linear m" },
//         { name: "Express Service", price: "+20%" },
//       ]
//     }
//   };

//   const currentData = pricingData[selectedTab];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-16">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A24D]/10 to-[#B89246]/10 px-4 py-2 rounded-full mb-6">
//           <FaCalculator className="text-[#C9A24D]" />
//           <span className="text-sm font-semibold text-[#C9A24D]">TRANSPARENT PRICING</span>
//         </div>

//         <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
//           Clear & Competitive Pricing
//         </h2>
//         <p className="text-lg text-[#3F3F46] max-w-3xl mx-auto">
//           No hidden costs. All prices include GST, materials, and professional installation.
//         </p>
//       </div>

//       {/* Service Tabs */}
//       <div className="flex flex-wrap justify-center gap-2 mb-12">
//         {pricingTabs.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setSelectedTab(tab.id)}
//             className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${selectedTab === tab.id ? 'bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white shadow-lg' : 'bg-gray-100 text-[#111827] hover:bg-gray-200'}`}
//           >
//             <span className="text-lg">{tab.icon}</span>
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Billing Toggle */}
//       <div className="flex items-center justify-center mb-12">
//         <div className="bg-gray-100 p-1 rounded-xl inline-flex">
//           <button
//             onClick={() => setIsAnnual(false)}
//             className={`px-6 py-2 rounded-lg font-medium ${!isAnnual ? 'bg-white text-[#111827] shadow' : 'text-[#3F3F46]'}`}
//           >
//             Standard Pricing
//           </button>
//           <button
//             onClick={() => setIsAnnual(true)}
//             className={`px-6 py-2 rounded-lg font-medium ${isAnnual ? 'bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white shadow' : 'text-[#3F3F46]'}`}
//           >
//             Package Discount
//           </button>
//         </div>
//         {isAnnual && (
//           <span className="ml-4 bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
//             Save up to 10%
//           </span>
//         )}
//       </div>

//       {/* Service Description */}
//       <div className="text-center mb-10">
//         <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
//           {currentData.title}
//         </h3>
//         <p className="text-[#3F3F46] max-w-2xl mx-auto">
//           {currentData.description}
//         </p>
//       </div>

//       {/* Pricing Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//         {currentData.packages.map((pkg, index) => (
//           <div
//             key={index}
//             className={`rounded-2xl border-2 overflow-hidden transition-all hover:scale-[1.02] ${pkg.highlight ? 'border-[#C9A24D] shadow-2xl' : 'border-gray-200 shadow-lg'}`}
//           >
//             {/* Package Header */}
//             <div className={`p-6 ${pkg.highlight ? 'bg-gradient-to-r from-[#C9A24D] to-[#B89246]' : 'bg-gradient-to-r from-[#111827] to-[#3F3F46]'}`}>
//               <div className="flex justify-between items-start mb-4">
//                 <div>
//                   <h4 className="text-2xl font-bold text-white">{pkg.name}</h4>
//                   {pkg.popular && (
//                     <span className="inline-block bg-white text-[#C9A24D] text-xs font-bold px-3 py-1 rounded-full mt-2">
//                       MOST POPULAR
//                     </span>
//                   )}
//                 </div>
//                 {pkg.highlight && (
//                   <FaStar className="text-yellow-300 text-xl" />
//                 )}
//               </div>

//               <div className="text-white">
//                 <div className="text-4xl font-bold mb-2">{pkg.price}</div>
//                 <div className="flex items-center gap-2 text-white/80">
//                   <FaClock className="text-sm" />
//                   <span>{pkg.duration}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Package Features */}
//             <div className={`p-6 bg-gradient-to-b ${pkg.color}`}>
//               <ul className="space-y-3 mb-8">
//                 {pkg.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-start">
//                     {feature.included ? (
//                       <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
//                     ) : (
//                       <FaTimes className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
//                     )}
//                     <span className={feature.included ? 'text-[#111827]' : 'text-gray-400'}>
//                       {feature.text}
//                     </span>
//                   </li>
//                 ))}
//               </ul>

//               <button
//                 className={`w-full py-3 px-6 rounded-xl font-bold transition-all ${pkg.highlight ? 'bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white hover:shadow-lg' : 'bg-[#111827] text-white hover:bg-[#3F3F46]'}`}
//               >
//                 Get {pkg.name} Quote
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Add-ons Section */}
//       <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
//         <h4 className="text-2xl font-bold text-[#111827] mb-6 text-center">
//           Popular Add-ons & Extras
//         </h4>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {currentData.addOns.map((addon, index) => (
//             <div
//               key={index}
//               className="bg-white p-4 rounded-xl border border-gray-200 hover:border-[#C9A24D] transition-colors"
//             >
//               <div className="font-semibold text-[#111827] mb-1">{addon.name}</div>
//               <div className="text-[#C9A24D] font-bold">{addon.price}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Features Grid */}
//       <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="text-center p-6">
//           <div className="w-16 h-16 bg-gradient-to-br from-[#C9A24D] to-[#B89246] rounded-full flex items-center justify-center mx-auto mb-4">
//             <FaShieldAlt className="w-8 h-8 text-white" />
//           </div>
//           <h5 className="text-xl font-bold text-[#111827] mb-3">Certified Workmanship</h5>
//           <p className="text-[#3F3F46]">
//             All work comes with comprehensive warranties and Australian standard compliance
//           </p>
//         </div>

//         <div className="text-center p-6">
//           <div className="w-16 h-16 bg-gradient-to-br from-[#111827] to-[#3F3F46] rounded-full flex items-center justify-center mx-auto mb-4">
//             <FaTools className="w-8 h-8 text-white" />
//           </div>
//           <h5 className="text-xl font-bold text-[#111827] mb-3">Premium Materials</h5>
//           <p className="text-[#3F3F46]">
//             We use only high-quality, durable materials from trusted suppliers
//           </p>
//         </div>

//         <div className="text-center p-6">
//           <div className="w-16 h-16 bg-gradient-to-br from-[#C9A24D] to-[#B89246] rounded-full flex items-center justify-center mx-auto mb-4">
//             <FaRuler className="w-8 h-8 text-white" />
//           </div>
//           <h5 className="text-xl font-bold text-[#111827] mb-3">Free Quotes</h5>
//           <p className="text-[#3F3F46]">
//             Get a detailed, no-obligation quote with transparent pricing breakdown
//           </p>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="mt-16 bg-gradient-to-r from-[#111827] to-[#3F3F46] rounded-2xl p-10 text-center">
//         <h3 className="text-3xl font-bold text-white mb-4">
//           Need a Custom Quote?
//         </h3>
//         <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
//           Every project is unique. Contact us for a personalized quote based on your specific requirements.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <button className="bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all">
//             Request Custom Quote
//           </button>
//           <button className="bg-white text-[#111827] font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all">
//             Call Now: (03) 0000 0000
//           </button>
//         </div>
//         <p className="text-gray-400 text-sm mt-6">
//           All quotes include free site inspection and detailed project plan
//         </p>
//       </div>

//       {/* Disclaimer */}
//       <div className="mt-12 text-center text-sm text-[#3F3F46]">
//         <p>
//           *Prices are indicative and may vary based on project complexity, materials selected, and site conditions. 
//           Final quotes provided after site inspection.
//         </p>
//         <p className="mt-2">
//           **All prices include GST. Waterproofing certificates provided for relevant services.
//         </p>
//       </div>
//     </div>
//   );
// }

// "use client"

// import { useState } from 'react';
// import {
//     FaCheck, FaTimes, FaRuler, FaClock,
//     FaTools, FaShieldAlt, FaStar, FaCalculator
// } from 'react-icons/fa';

// // Data Configuration
// const PRICING_TABS = [
//     { id: 'bathroom', label: 'Bathroom Tiling', icon: '🚿' },
//     { id: 'kitchen', label: 'Kitchen Splashback', icon: '🍽️' },
//     { id: 'outdoor', label: 'Outdoor & Pool', icon: '🏊‍♂️' },
//     { id: 'waterproofing', label: 'Waterproofing', icon: '🛡️' },
//     { id: 'flooring', label: 'Flooring', icon: '🪵' },
// ];

// const PRICING_DATA = {
//     bathroom: {
//         title: "Bathroom Tiling & Waterproofing",
//         description: "Complete bathroom tiling solutions with Australian standard waterproofing",
//         packages: [
//             {
//                 name: "Standard",
//                 price: { annual: "$4,800", monthly: "$5,000" },
//                 duration: "10-14 days",
//                 features: [
//                     { included: true, text: "Waterproofing certificate" },
//                     { included: true, text: "Porcelain tile installation" },
//                     { included: true, text: "Demolition & disposal" },
//                     { included: true, text: "Grouting & sealing" },
//                     { included: true, text: "Basic fixtures" },
//                     { included: false, text: "Premium tiles" },
//                     { included: false, text: "Heated flooring" },
//                     { included: false, text: "Design consultation" },
//                 ],
//                 popular: false,
//                 color: "from-gray-100 to-white"
//             },
//             {
//                 name: "Premium",
//                 price: { annual: "$7,200", monthly: "$7,500" },
//                 duration: "14-21 days",
//                 features: [
//                     { included: true, text: "10-year waterproofing warranty" },
//                     { included: true, text: "Large format porcelain/stone" },
//                     { included: true, text: "Laser level precision" },
//                     { included: true, text: "Premium grout & sealants" },
//                     { included: true, text: "Design consultation" },
//                     { included: true, text: "Heated flooring option" },
//                     { included: true, text: "Smart bathroom features" },
//                     { included: true, text: "Extended 5-year workmanship" },
//                 ],
//                 popular: true,
//                 color: "from-[#C9A24D]/10 via-[#B89246]/5 to-white",
//                 highlight: true
//             },
//             {
//                 name: "Luxury",
//                 price: { annual: "$12,000", monthly: "$12,500" },
//                 duration: "3-4 weeks",
//                 features: [
//                     { included: true, text: "15-year waterproofing warranty" },
//                     { included: true, text: "Natural stone/marble tiles" },
//                     { included: true, text: "Custom mosaic features" },
//                     { included: true, text: "Smart home integration" },
//                     { included: true, text: "Premium fixtures & fittings" },
//                     { included: true, text: "Heated flooring included" },
//                     { included: true, text: "Architectural design" },
//                     { included: true, text: "10-year comprehensive warranty" },
//                 ],
//                 popular: false,
//                 color: "from-gray-100 to-white"
//             }
//         ],
//         addOns: [
//             { name: "Tile Removal", price: "$45/sqm" },
//             { name: "Additional Waterproofing", price: "$35/sqm" },
//             { name: "Underfloor Heating", price: "$120/sqm" },
//             { name: "Premium Sealants", price: "$15/sqm" },
//         ]
//     },
//     kitchen: {
//         title: "Kitchen Splashback Tiling",
//         description: "Professional kitchen splashback installation with premium finishes",
//         packages: [
//             {
//                 name: "Basic",
//                 price: { annual: "$900", monthly: "$950" },
//                 duration: "1-2 days",
//                 features: [
//                     { included: true, text: "Standard ceramic tiles" },
//                     { included: true, text: "Professional installation" },
//                     { included: true, text: "Grouting & cleaning" },
//                     { included: true, text: "Basic edge finishing" },
//                     { included: false, text: "Glass/mosaic tiles" },
//                     { included: false, text: "Premium sealants" },
//                     { included: false, text: "Design service" },
//                 ],
//                 popular: false,
//                 color: "from-gray-100 to-white"
//             },
//             {
//                 name: "Premium",
//                 price: { annual: "$1,800", monthly: "$1,900" },
//                 duration: "2-3 days",
//                 features: [
//                     { included: true, text: "Glass or mosaic tiles" },
//                     { included: true, text: "Precision laser cutting" },
//                     { included: true, text: "Premium waterproof grout" },
//                     { included: true, text: "Professional finishing" },
//                     { included: true, text: "Design consultation" },
//                     { included: true, text: "3-year warranty" },
//                     { included: true, text: "Quick installation" },
//                 ],
//                 popular: true,
//                 color: "from-[#C9A24D]/10 via-[#B89246]/5 to-white",
//                 highlight: true
//             },
//             {
//                 name: "Custom",
//                 price: { annual: "From $2,500", monthly: "From $2,500" },
//                 duration: "3-5 days",
//                 features: [
//                     { included: true, text: "Custom tile design" },
//                     { included: true, text: "Premium materials" },
//                     { included: true, text: "Integrated lighting" },
//                     { included: true, text: "5-year warranty" },
//                     { included: true, text: "Full design service" },
//                     { included: true, text: "Extended support" },
//                 ],
//                 popular: false,
//                 color: "from-gray-100 to-white"
//             }
//         ],
//         addOns: [
//             { name: "Tile Pattern Design", price: "$300" },
//             { name: "Integrated LED Lighting", price: "$450" },
//             { name: "Premium Sealants", price: "$150" },
//             { name: "Express Service", price: "+25%" },
//         ]
//     },
//     outdoor: {
//         title: "Outdoor & Pool Tiling",
//         description: "Durable outdoor tiling solutions for pools, patios, and entertainment areas",
//         packages: [
//             {
//                 name: "Patio Basic",
//                 price: { annual: "$3,600", monthly: "$3,800" },
//                 duration: "5-7 days",
//                 features: [
//                     { included: true, text: "Slip-resistant porcelain" },
//                     { included: true, text: "Weatherproof installation" },
//                     { included: true, text: "Basic drainage" },
//                     { included: true, text: "3-year warranty" },
//                     { included: false, text: "Custom patterns" },
//                     { included: false, text: "Premium sealants" },
//                     { included: false, text: "Lighting integration" },
//                 ],
//                 popular: false,
//                 color: "from-gray-100 to-white"
//             },
//             {
//                 name: "Pool Premium",
//                 price: { annual: "$6,000", monthly: "$6,300" },
//                 duration: "10-14 days",
//                 features: [
//                     { included: true, text: "Anti-slip pool tiles" },
//                     { included: true, text: "Chemical-resistant grout" },
//                     { included: true, text: "Professional waterproofing" },
//                     { included: true, text: "Custom design options" },
//                     { included: true, text: "5-year warranty" },
//                     { included: true, text: "Safety compliance" },
//                     { included: true, text: "Quick installation" },
//                 ],
//                 popular: true,
//                 color: "from-[#C9A24D]/10 via-[#B89246]/5 to-white",
//                 highlight: true
//             },
//             {
//                 name: "Luxury Outdoor",
//                 price: { annual: "From $8,500", monthly: "From $8,500" },
//                 duration: "2-3 weeks",
//                 features: [
//                     { included: true, text: "Natural stone paving" },
//                     { included: true, text: "Custom mosaic features" },
//                     { included: true, text: "Integrated drainage" },
//                     { included: true, text: "Landscape lighting" },
//                     { included: true, text: "10-year warranty" },
//                     { included: true, text: "Full design service" },
//                 ],
//                 popular: false,
//                 color: "from-gray-100 to-white"
//             }
//         ],
//         addOns: [
//             { name: "Pool Coping", price: "$120/linear m" },
//             { name: "Custom Mosaic", price: "$300/sqm" },
//             { name: "Outdoor Lighting", price: "$750" },
//             { name: "Premium Sealants", price: "$15/sqm" },
//         ]
//     },
//     waterproofing: {
//         title: "Commercial & Residential Waterproofing",
//         description: "Certified waterproofing solutions with compliance guarantees",
//         packages: [
//             {
//                 name: "Residential",
//                 price: { annual: "$2,400", monthly: "$2,500" },
//                 duration: "3-5 days",
//                 features: [
//                     { included: true, text: "Australian standards compliant" },
//                     { included: true, text: "5-year warranty" },
//                     { included: true, text: "Certificate provided" },
//                     { included: true, text: "Professional application" },
//                     { included: false, text: "Extended warranty" },
//                     { included: false, text: "Premium membranes" },
//                     { included: false, text: "Commercial grade" },
//                 ],
//                 popular: false,
//                 color: "from-gray-100 to-white"
//             },
//             {
//                 name: "Commercial",
//                 price: { annual: "$4,800", monthly: "$5,000" },
//                 duration: "7-10 days",
//                 features: [
//                     { included: true, text: "Commercial grade membranes" },
//                     { included: true, text: "10-year warranty" },
//                     { included: true, text: "Full compliance certificate" },
//                     { included: true, text: "Structural assessment" },
//                     { included: true, text: "Priority service" },
//                     { included: true, text: "BAL rated options" },
//                     { included: true, text: "Project management" },
//                 ],
//                 popular: true,
//                 color: "from-[#C9A24D]/10 via-[#B89246]/5 to-white",
//                 highlight: true
//             },
//             {
//                 name: "Premium",
//                 price: { annual: "Custom Quote", monthly: "Custom Quote" },
//                 duration: "Varies",
//                 features: [
//                     { included: true, text: "15+ year warranty" },
//                     { included: true, text: "Premium European membranes" },
//                     { included: true, text: "Full architectural design" },
//                     { included: true, text: "24/7 support" },
//                     { included: true, text: "Compliance management" },
//                     { included: true, text: "Multi-point inspection" },
//                 ],
//                 popular: false,
//                 color: "from-gray-100 to-white"
//             }
//         ],
//         addOns: [
//             { name: "Extended Warranty", price: "+20%" },
//             { name: "Structural Assessment", price: "$450" },
//             { name: "Express Certificate", price: "$200" },
//             { name: "Premium Membranes", price: "+35%" },
//         ]
//     },
//     flooring: {
//         title: "Flooring Installation",
//         description: "Professional flooring solutions for any space",
//         packages: [
//             {
//                 name: "Laminate",
//                 price: { annual: "$45/sqm", monthly: "$48/sqm" },
//                 duration: "2-3 days",
//                 features: [
//                     { included: true, text: "Quality laminate flooring" },
//                     { included: true, text: "Underlay included" },
//                     { included: true, text: "Professional installation" },
//                     { included: true, text: "3-year warranty" },
//                     { included: false, text: "Premium underlay" },
//                     { included: false, text: "Soundproofing" },
//                     { included: false, text: "Extended warranty" },
//                 ],
//                 popular: false,
//                 color: "from-gray-100 to-white"
//             },
//             {
//                 name: "Hybrid",
//                 price: { annual: "$65/sqm", monthly: "$68/sqm" },
//                 duration: "3-4 days",
//                 features: [
//                     { included: true, text: "Water-resistant hybrid" },
//                     { included: true, text: "Premium underlay" },
//                     { included: true, text: "Soundproofing option" },
//                     { included: true, text: "5-year warranty" },
//                     { included: true, text: "Quick installation" },
//                     { included: true, text: "Pet-friendly options" },
//                     { included: true, text: "Design consultation" },
//                 ],
//                 popular: true,
//                 color: "from-[#C9A24D]/10 via-[#B89246]/5 to-white",
//                 highlight: true
//             },
//             {
//                 name: "Timber",
//                 price: { annual: "$95/sqm", monthly: "$99/sqm" },
//                 duration: "5-7 days",
//                 features: [
//                     { included: true, text: "Engineered timber" },
//                     { included: true, text: "Professional sanding" },
//                     { included: true, text: "Premium finishing" },
//                     { included: true, text: "10-year warranty" },
//                     { included: true, text: "Custom staining" },
//                     { included: true, text: "Expert craftsmanship" },
//                 ],
//                 popular: false,
//                 color: "from-gray-100 to-white"
//             }
//         ],
//         addOns: [
//             { name: "Soundproof Underlay", price: "$12/sqm" },
//             { name: "Custom Staining", price: "$25/sqm" },
//             { name: "Skirting Installation", price: "$35/linear m" },
//             { name: "Express Service", price: "+20%" },
//         ]
//     }
// };

// // Helper Functions
// const getPrice = (pkg, isAnnual) => {
//     if (typeof pkg.price === 'object') {
//         return isAnnual ? pkg.price.annual : pkg.price.monthly;
//     }
//     return pkg.price;
// };

// // Main Component
// export default function Pricing() {
//     const [selectedTab, setSelectedTab] = useState('bathroom');
//     const [isAnnual, setIsAnnual] = useState(false);

//     const currentData = PRICING_DATA[selectedTab];

//     return (
//         <div className="max-w-7xl mx-auto px-4 py-16">
//             {/* Header */}
//             <div className="text-center mb-12">
//                 <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A24D]/10 to-[#B89246]/10 px-4 py-2 rounded-full mb-6">
//                     <FaCalculator className="text-[#C9A24D]" />
//                     <span className="text-sm font-semibold text-[#C9A24D]">TRANSPARENT PRICING</span>
//                 </div>

//                 <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
//                     Clear & Competitive Pricing
//                 </h2>
//                 <p className="text-lg text-[#3F3F46] max-w-3xl mx-auto">
//                     No hidden costs. All prices include GST, materials, and professional installation.
//                 </p>
//             </div>

//             {/* Service Tabs */}
//             <div className="flex flex-wrap justify-center gap-2 mb-12">
//                 {PRICING_TABS.map((tab) => (
//                     <button
//                         key={tab.id}
//                         onClick={() => setSelectedTab(tab.id)}
//                         className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${selectedTab === tab.id
//                                 ? 'bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white shadow-lg'
//                                 : 'bg-gray-100 text-[#111827] hover:bg-gray-200'
//                             }`}
//                     >
//                         {/* <span className="text-lg">{tab.icon}</span> */}
//                         {tab.label}
//                     </button>
//                 ))}
//             </div>

//             {/* Billing Toggle */}
//             {/* <div className="flex items-center justify-center mb-12">
//                 <div className="bg-gray-100 p-1 rounded-xl inline-flex">
//                     <button
//                         onClick={() => setIsAnnual(false)}
//                         className={`px-6 py-2 rounded-lg font-medium ${!isAnnual ? 'bg-white text-[#111827] shadow' : 'text-[#3F3F46]'
//                             }`}
//                     >
//                         Standard Pricing
//                     </button>
//                     <button
//                         onClick={() => setIsAnnual(true)}
//                         className={`px-6 py-2 rounded-lg font-medium ${isAnnual ? 'bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white shadow' : 'text-[#3F3F46]'
//                             }`}
//                     >
//                         Package Discount
//                     </button>
//                 </div>
//                 {isAnnual && (
//                     <span className="ml-4 bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
//                         Save up to 10%
//                     </span>
//                 )}
//             </div> */}

//             {/* Service Description */}
//             <div className="text-center mb-10">
//                 <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
//                     {currentData.title}
//                 </h3>
//                 <p className="text-[#3F3F46] max-w-2xl mx-auto">
//                     {currentData.description}
//                 </p>
//             </div>

//             {/* Pricing Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//                 {currentData.packages.map((pkg, index) => (
//                     <div
//                         key={index}
//                         className={`rounded-2xl border-2 overflow-hidden transition-all hover:scale-[1.02] ${pkg.highlight ? 'border-[#C9A24D] shadow-2xl' : 'border-gray-200 shadow-lg'
//                             }`}
//                     >
//                         {/* Package Header */}
//                         <div className={`p-6 ${pkg.highlight
//                                 ? 'bg-gradient-to-r from-[#C9A24D] to-[#B89246]'
//                                 : 'bg-gradient-to-r from-[#111827] to-[#3F3F46]'
//                             }`}>
//                             <div className="flex justify-between items-start mb-4">
//                                 <div>
//                                     <h4 className="text-2xl font-bold text-white">{pkg.name}</h4>
//                                     {pkg.popular && (
//                                         <span className="inline-block bg-white text-[#C9A24D] text-xs font-bold px-3 py-1 rounded-full mt-2">
//                                             MOST POPULAR
//                                         </span>
//                                     )}
//                                 </div>
//                                 {pkg.highlight && <FaStar className="text-yellow-300 text-xl" />}
//                             </div>

//                             <div className="text-white">
//                                 <div className="text-4xl font-bold mb-2">{getPrice(pkg, isAnnual)}</div>
//                                 <div className="flex items-center gap-2 text-white/80">
//                                     <FaClock className="text-sm" />
//                                     <span>{pkg.duration}</span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Package Features */}
//                         <div className={`p-6 bg-gradient-to-b ${pkg.color}`}>
//                             <ul className="space-y-3 mb-8">
//                                 {pkg.features.map((feature, idx) => (
//                                     <li key={idx} className="flex items-start">
//                                         {feature.included ? (
//                                             <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
//                                         ) : (
//                                             <FaTimes className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
//                                         )}
//                                         <span className={feature.included ? 'text-[#111827]' : 'text-gray-400'}>
//                                             {feature.text}
//                                         </span>
//                                     </li>
//                                 ))}
//                             </ul>

//                             <button
//                                 className={`w-full py-3 px-6 rounded-xl font-bold transition-all ${pkg.highlight
//                                         ? 'bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white hover:shadow-lg'
//                                         : 'bg-[#111827] text-white hover:bg-[#3F3F46]'
//                                     }`}
//                             >
//                                 Get {pkg.name} Quote
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Add-ons Section */}
//             <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
//                 <h4 className="text-2xl font-bold text-[#111827] mb-6 text-center">
//                     Popular Add-ons & Extras
//                 </h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                     {currentData.addOns.map((addon, index) => (
//                         <div
//                             key={index}
//                             className="bg-white p-4 rounded-xl border border-gray-200 hover:border-[#C9A24D] transition-colors"
//                         >
//                             <div className="font-semibold text-[#111827] mb-1">{addon.name}</div>
//                             <div className="text-[#C9A24D] font-bold">{addon.price}</div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Features Grid */}
//             <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
//                 <div className="text-center p-6">
//                     <div className="w-16 h-16 bg-gradient-to-br from-[#C9A24D] to-[#B89246] rounded-full flex items-center justify-center mx-auto mb-4">
//                         <FaShieldAlt className="w-8 h-8 text-white" />
//                     </div>
//                     <h5 className="text-xl font-bold text-[#111827] mb-3">Certified Workmanship</h5>
//                     <p className="text-[#3F3F46]">
//                         All work comes with comprehensive warranties and Australian standard compliance
//                     </p>
//                 </div>

//                 <div className="text-center p-6">
//                     <div className="w-16 h-16 bg-gradient-to-br from-[#111827] to-[#3F3F46] rounded-full flex items-center justify-center mx-auto mb-4">
//                         <FaTools className="w-8 h-8 text-white" />
//                     </div>
//                     <h5 className="text-xl font-bold text-[#111827] mb-3">Premium Materials</h5>
//                     <p className="text-[#3F3F46]">
//                         We use only high-quality, durable materials from trusted suppliers
//                     </p>
//                 </div>

//                 <div className="text-center p-6">
//                     <div className="w-16 h-16 bg-gradient-to-br from-[#C9A24D] to-[#B89246] rounded-full flex items-center justify-center mx-auto mb-4">
//                         <FaRuler className="w-8 h-8 text-white" />
//                     </div>
//                     <h5 className="text-xl font-bold text-[#111827] mb-3">Free Quotes</h5>
//                     <p className="text-[#3F3F46]">
//                         Get a detailed, no-obligation quote with transparent pricing breakdown
//                     </p>
//                 </div>
//             </div>

//             {/* CTA Section */}
//             <div className="mt-16 bg-gradient-to-r from-[#111827] to-[#3F3F46] rounded-2xl p-10 text-center">
//                 <h3 className="text-3xl font-bold text-white mb-4">
//                     Need a Custom Quote?
//                 </h3>
//                 <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
//                     Every project is unique. Contact us for a personalized quote based on your specific requirements.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                     <button className="bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all">
//                         Request Custom Quote
//                     </button>
//                     <button className="bg-white text-[#111827] font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all">
//                         Call Now: (03) 0000 0000
//                     </button>
//                 </div>
//                 <p className="text-gray-400 text-sm mt-6">
//                     All quotes include free site inspection and detailed project plan
//                 </p>
//             </div>

//             {/* Disclaimer */}
//             <div className="mt-12 text-center text-sm text-[#3F3F46]">
//                 <p>
//                     *Prices are indicative and may vary based on project complexity, materials selected, and site conditions.
//                     Final quotes provided after site inspection.
//                 </p>
//                 <p className="mt-2">
//                     **All prices include GST. Waterproofing certificates provided for relevant services.
//                 </p>
//             </div>
//         </div>
//     );
// }


// "use client"

// import { useState } from 'react';
// import Image from 'next/image';
// import {
//     FaCheck, FaTimes, FaRuler, FaClock,
//     FaTools, FaShieldAlt, FaStar, FaCalculator,
//     FaPhone, FaEnvelope, FaMapMarkerAlt, FaHandshake
// } from 'react-icons/fa';

// // Data Configuration
// const PRICING_TABS = [
//     { id: 'bathroom', label: 'Bathroom Tiling', icon: '🚿' },
//     { id: 'kitchen', label: 'Kitchen Splashback', icon: '🍽️' },
//     { id: 'outdoor', label: 'Outdoor & Pool', icon: '🏊‍♂️' },
//     { id: 'waterproofing', label: 'Waterproofing', icon: '🛡️' },
//     { id: 'flooring', label: 'Flooring', icon: '🪵' },
// ];

// const PRICING_DATA = {
//     bathroom: {
//         title: "Bathroom Tiling & Waterproofing",
//         description: "Complete bathroom tiling solutions with Australian standard waterproofing",
//         packages: [
//             {
//                 name: "Standard",
//                 price: { annual: "$4,800", monthly: "$5,000" },
//                 duration: "10-14 days",
//                 features: [
//                     { included: true, text: "Waterproofing certificate" },
//                     { included: true, text: "Porcelain tile installation" },
//                     { included: true, text: "Demolition & disposal" },
//                     { included: true, text: "Grouting & sealing" },
//                     { included: true, text: "Basic fixtures" },
//                     { included: false, text: "Premium tiles" },
//                     { included: false, text: "Heated flooring" },
//                     { included: false, text: "Design consultation" },
//                 ],
//                 popular: false,
//                 color: "from-gray-100 to-white"
//             },
//             {
//                 name: "Premium",
//                 price: { annual: "$7,200", monthly: "$7,500" },
//                 duration: "14-21 days",
//                 features: [
//                     { included: true, text: "10-year waterproofing warranty" },
//                     { included: true, text: "Large format porcelain/stone" },
//                     { included: true, text: "Laser level precision" },
//                     { included: true, text: "Premium grout & sealants" },
//                     { included: true, text: "Design consultation" },
//                     { included: true, text: "Heated flooring option" },
//                     { included: true, text: "Smart bathroom features" },
//                     { included: true, text: "Extended 5-year workmanship" },
//                 ],
//                 popular: true,
//                 color: "from-[#C9A24D]/10 via-[#B89246]/5 to-white",
//                 highlight: true
//             },
//             {
//                 name: "Luxury",
//                 price: { annual: "$12,000", monthly: "$12,500" },
//                 duration: "3-4 weeks",
//                 features: [
//                     { included: true, text: "15-year waterproofing warranty" },
//                     { included: true, text: "Natural stone/marble tiles" },
//                     { included: true, text: "Custom mosaic features" },
//                     { included: true, text: "Smart home integration" },
//                     { included: true, text: "Premium fixtures & fittings" },
//                     { included: true, text: "Heated flooring included" },
//                     { included: true, text: "Architectural design" },
//                     { included: true, text: "10-year comprehensive warranty" },
//                 ],
//                 popular: false,
//                 color: "from-gray-100 to-white"
//             }
//         ],
//         addOns: [
//             { name: "Tile Removal", price: "$45/sqm" },
//             { name: "Additional Waterproofing", price: "$35/sqm" },
//             { name: "Underfloor Heating", price: "$120/sqm" },
//             { name: "Premium Sealants", price: "$15/sqm" },
//         ]
//     },
//     // ... (other categories remain the same)
//     kitchen: {
//         title: "Kitchen Splashback Tiling",
//         description: "Professional kitchen splashback installation with premium finishes",
//         packages: [
//             {
//                 name: "Basic",
//                 price: { annual: "$900", monthly: "$950" },
//                 duration: "1-2 days",
//                 features: [
//                     { included: true, text: "Standard ceramic tiles" },
//                     { included: true, text: "Professional installation" },
//                     { included: true, text: "Grouting & cleaning" },
//                     { included: true, text: "Basic edge finishing" },
//                     { included: false, text: "Glass/mosaic tiles" },
//                     { included: false, text: "Premium sealants" },
//                     { included: false, text: "Design service" },
//                 ],
//                 popular: false,
//                 color: "from-gray-100 to-white"
//             },
//             {
//                 name: "Premium",
//                 price: { annual: "$1,800", monthly: "$1,900" },
//                 duration: "2-3 days",
//                 features: [
//                     { included: true, text: "Glass or mosaic tiles" },
//                     { included: true, text: "Precision laser cutting" },
//                     { included: true, text: "Premium waterproof grout" },
//                     { included: true, text: "Professional finishing" },
//                     { included: true, text: "Design consultation" },
//                     { included: true, text: "3-year warranty" },
//                     { included: true, text: "Quick installation" },
//                 ],
//                 popular: true,
//                 color: "from-[#C9A24D]/10 via-[#B89246]/5 to-white",
//                 highlight: true
//             },
//             {
//                 name: "Custom",
//                 price: { annual: "From $2,500", monthly: "From $2,500" },
//                 duration: "3-5 days",
//                 features: [
//                     { included: true, text: "Custom tile design" },
//                     { included: true, text: "Premium materials" },
//                     { included: true, text: "Integrated lighting" },
//                     { included: true, text: "5-year warranty" },
//                     { included: true, text: "Full design service" },
//                     { included: true, text: "Extended support" },
//                 ],
//                 popular: false,
//                 color: "from-gray-100 to-white"
//             }
//         ],
//         addOns: [
//             { name: "Tile Pattern Design", price: "$300" },
//             { name: "Integrated LED Lighting", price: "$450" },
//             { name: "Premium Sealants", price: "$150" },
//             { name: "Express Service", price: "+25%" },
//         ]
//     }
// };

// const getPrice = (pkg, isAnnual) => {
//     if (typeof pkg.price === 'object') {
//         return isAnnual ? pkg.price.annual : pkg.price.monthly;
//     }
//     return pkg.price;
// };

// export default function Pricing() {
//     const [selectedTab, setSelectedTab] = useState('bathroom');
//     const [isAnnual, setIsAnnual] = useState(false);

//     const currentData = PRICING_DATA[selectedTab];

//     return (
//         <div className="w-full bg-gray-50 py-1 px-8 ">
//             {/* Hero Section */}
//             <section className="relative overflow-hidden rounded-t-[32px] mb-16">
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 to-[#3F3F46]/90 z-10"></div>
//                 {/* <Image
//                     src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1600&h=900&fit=crop"
//                     alt="Professional tiling work with pricing calculator"
//                     fill
//                     className="object-cover"
//                     priority
//                 /> */}
//                 <div className="relative z-20 py-20 px-4 max-w-7xl mx-auto">
//                     <div className="max-w-3xl">
//                         <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
//                             <FaCalculator className="text-[#C9A24D]" />
//                             <span className="text-white font-medium">TRANSPARENT PRICING</span>
//                         </div>
                        
//                         <h1 className="text-5xl md:text-5xl font-bold text-white mb-6 leading-tight">
//                             Clear & Competitive Pricing
//                             <span className="block text-[#C9A24D]">No Hidden Costs</span>
//                         </h1>
                        
//                         <p className="text-xl text-white/90 mb-8">
//                             Get detailed, transparent pricing for all your tiling and waterproofing needs. 
//                             All quotes include GST, materials, and professional installation.
//                         </p>
                        
//                         <div className="flex flex-wrap gap-4">
//                             <button className="bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all">
//                                 Get Instant Quote
//                             </button>
//                             <button className="bg-white text-[#111827] font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all">
//                                 View Our Work
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <div className="max-w-7xl mx-auto">
//                 {/* Service Tabs */}
//                 <section className="mb-16">
//                     <div className="text-center mb-12">
//                         <h2 className="text-4xl font-bold text-[#111827] mb-4">
//                             Choose Your Service
//                         </h2>
//                         <p className="text-lg text-[#3F3F46] max-w-3xl mx-auto">
//                             Select a service below to view detailed package options and pricing
//                         </p>
//                     </div>
                    
//                     <div className="flex flex-wrap justify-center gap-3 mb-12">
//                         {PRICING_TABS.map((tab) => (
//                             <button
//                                 key={tab.id}
//                                 onClick={() => setSelectedTab(tab.id)}
//                                 className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${selectedTab === tab.id
//                                         ? 'bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white shadow-lg'
//                                         : 'bg-white text-[#111827] hover:bg-gray-50 border border-gray-200'
//                                     }`}
//                             >
//                                 {tab.label}
//                             </button>
//                         ))}
//                     </div>
//                 </section>

//                 {/* Service Description */}
//                 <section className="mb-16">
//                     <div className="text-center">
//                         <h3 className="text-3xl font-bold text-[#111827] mb-4">
//                             {currentData.title}
//                         </h3>
//                         <p className="text-lg text-[#3F3F46] max-w-2xl mx-auto mb-8">
//                             {currentData.description}
//                         </p>
                        
//                         {/* Billing Toggle */}
//                         <div className="flex items-center justify-center mb-12">
//                             <div className="bg-gray-100 p-1 rounded-xl inline-flex">
//                                 <button
//                                     onClick={() => setIsAnnual(false)}
//                                     className={`px-6 py-2 rounded-lg font-medium ${!isAnnual ? 'bg-white text-[#111827] shadow' : 'text-[#3F3F46]'
//                                         }`}
//                                 >
//                                     Standard Pricing
//                                 </button>
//                                 <button
//                                     onClick={() => setIsAnnual(true)}
//                                     className={`px-6 py-2 rounded-lg font-medium ${isAnnual ? 'bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white shadow' : 'text-[#3F3F46]'
//                                         }`}
//                                 >
//                                     Package Discount
//                                 </button>
//                             </div>
//                             {isAnnual && (
//                                 <span className="ml-4 bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
//                                     Save up to 10%
//                                 </span>
//                             )}
//                         </div>
//                     </div>
//                 </section>

//                 {/* Pricing Cards */}
//                 <section className="mb-20">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {currentData.packages.map((pkg, index) => (
//                             <div
//                                 key={index}
//                                 className={`rounded-2xl border-2 overflow-hidden transition-all hover:scale-[1.02] ${pkg.highlight ? 'border-[#C9A24D] shadow-2xl' : 'border-gray-200 shadow-lg'
//                                     }`}
//                             >
//                                 {/* Package Header */}
//                                 <div className={`p-6 ${pkg.highlight
//                                         ? 'bg-gradient-to-r from-[#C9A24D] to-[#B89246]'
//                                         : 'bg-gradient-to-r from-[#111827] to-[#3F3F46]'
//                                     }`}>
//                                     <div className="flex justify-between items-start mb-4">
//                                         <div>
//                                             <h4 className="text-2xl font-bold text-white">{pkg.name}</h4>
//                                             {pkg.popular && (
//                                                 <span className="inline-block bg-white text-[#C9A24D] text-xs font-bold px-3 py-1 rounded-full mt-2">
//                                                     MOST POPULAR
//                                                 </span>
//                                             )}
//                                         </div>
//                                         {pkg.highlight && <FaStar className="text-yellow-300 text-xl" />}
//                                     </div>

//                                     <div className="text-white">
//                                         <div className="text-4xl font-bold mb-2">{getPrice(pkg, isAnnual)}</div>
//                                         <div className="flex items-center gap-2 text-white/80">
//                                             <FaClock className="text-sm" />
//                                             <span>{pkg.duration}</span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Package Features */}
//                                 <div className={`p-6 bg-gradient-to-b ${pkg.color}`}>
//                                     <ul className="space-y-3 mb-8">
//                                         {pkg.features.map((feature, idx) => (
//                                             <li key={idx} className="flex items-start">
//                                                 {feature.included ? (
//                                                     <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
//                                                 ) : (
//                                                     <FaTimes className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
//                                                 )}
//                                                 <span className={feature.included ? 'text-[#111827]' : 'text-gray-400'}>
//                                                     {feature.text}
//                                                 </span>
//                                             </li>
//                                         ))}
//                                     </ul>

//                                     <button
//                                         className={`w-full py-3 px-6 rounded-xl font-bold transition-all ${pkg.highlight
//                                                 ? 'bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white hover:shadow-lg'
//                                                 : 'bg-[#111827] text-white hover:bg-[#3F3F46]'
//                                             }`}
//                                     >
//                                         Get {pkg.name} Quote
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* Add-ons Section */}
//                 <section className="mb-16 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
//                     <div className="text-center mb-8">
//                         <h4 className="text-2xl font-bold text-[#111827]">
//                             Popular Add-ons & Extras
//                         </h4>
//                         <p className="text-[#3F3F46] mt-2">
//                             Enhance your project with these optional extras
//                         </p>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                         {currentData.addOns.map((addon, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-white p-4 rounded-xl border border-gray-200 hover:border-[#C9A24D] transition-colors text-center"
//                             >
//                                 <div className="font-semibold text-[#111827] mb-1">{addon.name}</div>
//                                 <div className="text-[#C9A24D] font-bold text-lg">{addon.price}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* Features Grid */}
//                 <section className="mb-16">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl font-bold text-[#111827] mb-4">
//                             Why Trust Our Pricing
//                         </h2>
//                         <p className="text-lg text-[#3F3F46] max-w-3xl mx-auto">
//                             Our transparent approach ensures you get the best value for your investment
//                         </p>
//                     </div>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
//                             <div className="w-16 h-16 bg-gradient-to-br from-[#C9A24D] to-[#B89246] rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <FaShieldAlt className="w-8 h-8 text-white" />
//                             </div>
//                             <h5 className="text-xl font-bold text-[#111827] mb-3">Certified Workmanship</h5>
//                             <p className="text-[#3F3F46]">
//                                 All work comes with comprehensive warranties and Australian standard compliance
//                             </p>
//                         </div>

//                         <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
//                             <div className="w-16 h-16 bg-gradient-to-br from-[#111827] to-[#3F3F46] rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <FaTools className="w-8 h-8 text-white" />
//                             </div>
//                             <h5 className="text-xl font-bold text-[#111827] mb-3">Premium Materials</h5>
//                             <p className="text-[#3F3F46]">
//                                 We use only high-quality, durable materials from trusted suppliers
//                             </p>
//                         </div>

//                         <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
//                             <div className="w-16 h-16 bg-gradient-to-br from-[#C9A24D] to-[#B89246] rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <FaRuler className="w-8 h-8 text-white" />
//                             </div>
//                             <h5 className="text-xl font-bold text-[#111827] mb-3">Free Quotes</h5>
//                             <p className="text-[#3F3F46]">
//                                 Get a detailed, no-obligation quote with transparent pricing breakdown
//                             </p>
//                         </div>
//                     </div>
//                 </section>

//                 {/* CTA Section */}
//                 <section className="mb-16 bg-gradient-to-r from-[#111827] to-[#3F3F46] rounded-2xl p-12 text-center">
//                     <h2 className="text-4xl font-bold text-white mb-6">
//                         Need a Custom Quote?
//                     </h2>
//                     <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
//                         Every project is unique. Contact us for a personalized quote based on your specific requirements.
//                     </p>
                    
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//                         <button className="bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all">
//                             Request Custom Quote
//                         </button>
//                         <button className="bg-white text-[#111827] font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all">
//                             View Our Gallery
//                         </button>
//                     </div>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                         <div className="flex items-center justify-center gap-3 text-white">
//                             <FaPhone className="text-[#C9A24D]" />
//                             <div>
//                                 <div className="font-semibold">Call Us</div>
//                                 <div className="text-lg">(03) 0000 0000</div>
//                             </div>
//                         </div>
                        
//                         <div className="flex items-center justify-center gap-3 text-white">
//                             <FaEnvelope className="text-[#C9A24D]" />
//                             <div>
//                                 <div className="font-semibold">Email Us</div>
//                                 <div className="text-lg">hello@garda-tiling.com</div>
//                             </div>
//                         </div>
                        
//                         <div className="flex items-center justify-center gap-3 text-white">
//                             <FaMapMarkerAlt className="text-[#C9A24D]" />
//                             <div>
//                                 <div className="font-semibold">Service Area</div>
//                                 <div className="text-lg">All Brisbane</div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Disclaimer */}
//                 <section className="text-center">
//                     <div className="bg-white rounded-2xl p-8 border border-gray-200">
//                         <h4 className="text-xl font-bold text-[#111827] mb-4">
//                             Pricing Information
//                         </h4>
//                         <div className="text-sm text-[#3F3F46] space-y-2 max-w-3xl mx-auto">
//                             <p>
//                                 *Prices are indicative and may vary based on project complexity, materials selected, and site conditions.
//                                 Final quotes provided after site inspection.
//                             </p>
//                             <p>
//                                 **All prices include GST. Waterproofing certificates provided for relevant services.
//                             </p>
//                             <p className="text-[#C9A24D] font-medium mt-4">
//                                 ✓ Free site inspections ✓ No obligation quotes ✓ Transparent pricing
//                             </p>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// }




"use client"

import { useState } from 'react';
import Image from 'next/image';
import {
    FaCheck, FaTimes, FaRuler, FaClock,
    FaTools, FaShieldAlt, FaStar, FaCalculator,
    FaPhone, FaEnvelope, FaMapMarkerAlt, FaHandshake
} from 'react-icons/fa';

// Data Configuration
const PRICING_TABS = [
    { id: 'bathroom', label: 'Bathroom Tiling', icon: '🚿' },
    { id: 'kitchen', label: 'Kitchen Splashback', icon: '🍽️' },
    { id: 'outdoor', label: 'Outdoor & Pool', icon: '🏊‍♂️' },
    { id: 'waterproofing', label: 'Waterproofing', icon: '🛡️' },
    { id: 'flooring', label: 'Flooring', icon: '🪵' },
];

const PRICING_DATA = {
    bathroom: {
        title: "Bathroom Tiling & Waterproofing",
        description: "Complete bathroom tiling solutions with Australian standard waterproofing",
        packages: [
            {
                name: "Standard",
                price: { annual: "$4,800", monthly: "$5,000" },
                duration: "10-14 days",
                features: [
                    { included: true, text: "Waterproofing certificate" },
                    { included: true, text: "Porcelain tile installation" },
                    { included: true, text: "Demolition & disposal" },
                    { included: true, text: "Grouting & sealing" },
                    { included: true, text: "Basic fixtures" },
                    { included: false, text: "Premium tiles" },
                    { included: false, text: "Heated flooring" },
                    { included: false, text: "Design consultation" },
                ],
                popular: false,
                color: "from-gray-100 to-white"
            },
            {
                name: "Premium",
                price: { annual: "$7,200", monthly: "$7,500" },
                duration: "14-21 days",
                features: [
                    { included: true, text: "10-year waterproofing warranty" },
                    { included: true, text: "Large format porcelain/stone" },
                    { included: true, text: "Laser level precision" },
                    { included: true, text: "Premium grout & sealants" },
                    { included: true, text: "Design consultation" },
                    { included: true, text: "Heated flooring option" },
                    { included: true, text: "Smart bathroom features" },
                    { included: true, text: "Extended 5-year workmanship" },
                ],
                popular: true,
                color: "from-[#C9A24D]/10 via-[#B89246]/5 to-white",
                highlight: true
            },
            {
                name: "Luxury",
                price: { annual: "$12,000", monthly: "$12,500" },
                duration: "3-4 weeks",
                features: [
                    { included: true, text: "15-year waterproofing warranty" },
                    { included: true, text: "Natural stone/marble tiles" },
                    { included: true, text: "Custom mosaic features" },
                    { included: true, text: "Smart home integration" },
                    { included: true, text: "Premium fixtures & fittings" },
                    { included: true, text: "Heated flooring included" },
                    { included: true, text: "Architectural design" },
                    { included: true, text: "10-year comprehensive warranty" },
                ],
                popular: false,
                color: "from-gray-100 to-white"
            }
        ],
        addOns: [
            { name: "Tile Removal", price: "$45/sqm" },
            { name: "Additional Waterproofing", price: "$35/sqm" },
            { name: "Underfloor Heating", price: "$120/sqm" },
            { name: "Premium Sealants", price: "$15/sqm" },
        ]
    },
    kitchen: {
        title: "Kitchen Splashback Tiling",
        description: "Professional kitchen splashback installation with premium finishes",
        packages: [
            {
                name: "Basic",
                price: { annual: "$900", monthly: "$950" },
                duration: "1-2 days",
                features: [
                    { included: true, text: "Standard ceramic tiles" },
                    { included: true, text: "Professional installation" },
                    { included: true, text: "Grouting & cleaning" },
                    { included: true, text: "Basic edge finishing" },
                    { included: false, text: "Glass/mosaic tiles" },
                    { included: false, text: "Premium sealants" },
                    { included: false, text: "Design service" },
                ],
                popular: false,
                color: "from-gray-100 to-white"
            },
            {
                name: "Premium",
                price: { annual: "$1,800", monthly: "$1,900" },
                duration: "2-3 days",
                features: [
                    { included: true, text: "Glass or mosaic tiles" },
                    { included: true, text: "Precision laser cutting" },
                    { included: true, text: "Premium waterproof grout" },
                    { included: true, text: "Professional finishing" },
                    { included: true, text: "Design consultation" },
                    { included: true, text: "3-year warranty" },
                    { included: true, text: "Quick installation" },
                ],
                popular: true,
                color: "from-[#C9A24D]/10 via-[#B89246]/5 to-white",
                highlight: true
            },
            {
                name: "Custom",
                price: { annual: "From $2,500", monthly: "From $2,500" },
                duration: "3-5 days",
                features: [
                    { included: true, text: "Custom tile design" },
                    { included: true, text: "Premium materials" },
                    { included: true, text: "Integrated lighting" },
                    { included: true, text: "5-year warranty" },
                    { included: true, text: "Full design service" },
                    { included: true, text: "Extended support" },
                ],
                popular: false,
                color: "from-gray-100 to-white"
            }
        ],
        addOns: [
            { name: "Tile Pattern Design", price: "$300" },
            { name: "Integrated LED Lighting", price: "$450" },
            { name: "Premium Sealants", price: "$150" },
            { name: "Express Service", price: "+25%" },
        ]
    },
    outdoor: {
        title: "Outdoor & Pool Tiling",
        description: "Durable outdoor tiling solutions for pools, patios, and entertainment areas",
        packages: [
            {
                name: "Patio Basic",
                price: { annual: "$3,600", monthly: "$3,800" },
                duration: "5-7 days",
                features: [
                    { included: true, text: "Slip-resistant porcelain" },
                    { included: true, text: "Weatherproof installation" },
                    { included: true, text: "Basic drainage" },
                    { included: true, text: "3-year warranty" },
                    { included: false, text: "Custom patterns" },
                    { included: false, text: "Premium sealants" },
                    { included: false, text: "Lighting integration" },
                ],
                popular: false,
                color: "from-gray-100 to-white"
            },
            {
                name: "Pool Premium",
                price: { annual: "$6,000", monthly: "$6,300" },
                duration: "10-14 days",
                features: [
                    { included: true, text: "Anti-slip pool tiles" },
                    { included: true, text: "Chemical-resistant grout" },
                    { included: true, text: "Professional waterproofing" },
                    { included: true, text: "Custom design options" },
                    { included: true, text: "5-year warranty" },
                    { included: true, text: "Safety compliance" },
                    { included: true, text: "Quick installation" },
                ],
                popular: true,
                color: "from-[#C9A24D]/10 via-[#B89246]/5 to-white",
                highlight: true
            },
            {
                name: "Luxury Outdoor",
                price: { annual: "From $8,500", monthly: "From $8,500" },
                duration: "2-3 weeks",
                features: [
                    { included: true, text: "Natural stone paving" },
                    { included: true, text: "Custom mosaic features" },
                    { included: true, text: "Integrated drainage" },
                    { included: true, text: "Landscape lighting" },
                    { included: true, text: "10-year warranty" },
                    { included: true, text: "Full design service" },
                ],
                popular: false,
                color: "from-gray-100 to-white"
            }
        ],
        addOns: [
            { name: "Pool Coping", price: "$120/linear m" },
            { name: "Custom Mosaic", price: "$300/sqm" },
            { name: "Outdoor Lighting", price: "$750" },
            { name: "Premium Sealants", price: "$15/sqm" },
        ]
    },
    waterproofing: {
        title: "Waterproofing Services",
        description: "Certified waterproofing solutions with full compliance",
        packages: [
            {
                name: "Basic",
                price: { annual: "$1,200", monthly: "$1,400" },
                duration: "2-3 days",
                features: [
                    { included: true, text: "Standard membrane" },
                    { included: true, text: "Certification provided" },
                    { included: true, text: "5-year warranty" },
                    { included: true, text: "Professional application" },
                    { included: false, text: "Premium membrane" },
                    { included: false, text: "Extended warranty" },
                ],
                popular: false,
                color: "from-gray-100 to-white"
            },
            {
                name: "Premium",
                price: { annual: "$2,400", monthly: "$2,600" },
                duration: "3-5 days",
                features: [
                    { included: true, text: "Premium membrane system" },
                    { included: true, text: "10-year warranty" },
                    { included: true, text: "Full certification" },
                    { included: true, text: "Detailed inspection" },
                    { included: true, text: "Priority service" },
                    { included: true, text: "Extended coverage" },
                ],
                popular: true,
                color: "from-[#C9A24D]/10 via-[#B89246]/5 to-white",
                highlight: true
            },
            {
                name: "Commercial",
                price: { annual: "Custom", monthly: "Custom" },
                duration: "Varies",
                features: [
                    { included: true, text: "Commercial grade" },
                    { included: true, text: "15-year warranty" },
                    { included: true, text: "Full compliance" },
                    { included: true, text: "Project management" },
                    { included: true, text: "24/7 support" },
                    { included: true, text: "Maintenance plan" },
                ],
                popular: false,
                color: "from-gray-100 to-white"
            }
        ],
        addOns: [
            { name: "Additional Testing", price: "$200" },
            { name: "Extended Warranty", price: "+15%" },
            { name: "Emergency Service", price: "+30%" },
            { name: "Maintenance Plan", price: "$500/yr" },
        ]
    },
    flooring: {
        title: "Flooring Installation",
        description: "Professional flooring solutions for residential and commercial spaces",
        packages: [
            {
                name: "Standard",
                price: { annual: "$45/sqm", monthly: "$50/sqm" },
                duration: "3-5 days",
                features: [
                    { included: true, text: "Quality tiles" },
                    { included: true, text: "Professional installation" },
                    { included: true, text: "Standard grout" },
                    { included: true, text: "3-year warranty" },
                    { included: false, text: "Premium tiles" },
                    { included: false, text: "Design service" },
                ],
                popular: false,
                color: "from-gray-100 to-white"
            },
            {
                name: "Premium",
                price: { annual: "$75/sqm", monthly: "$80/sqm" },
                duration: "5-7 days",
                features: [
                    { included: true, text: "Premium porcelain" },
                    { included: true, text: "Laser-level installation" },
                    { included: true, text: "Premium grout & sealing" },
                    { included: true, text: "5-year warranty" },
                    { included: true, text: "Design consultation" },
                    { included: true, text: "Pattern options" },
                ],
                popular: true,
                color: "from-[#C9A24D]/10 via-[#B89246]/5 to-white",
                highlight: true
            },
            {
                name: "Luxury",
                price: { annual: "$120/sqm", monthly: "$130/sqm" },
                duration: "1-2 weeks",
                features: [
                    { included: true, text: "Natural stone/marble" },
                    { included: true, text: "Custom patterns" },
                    { included: true, text: "Underfloor heating" },
                    { included: true, text: "10-year warranty" },
                    { included: true, text: "Full design service" },
                    { included: true, text: "Premium finishing" },
                ],
                popular: false,
                color: "from-gray-100 to-white"
            }
        ],
        addOns: [
            { name: "Floor Leveling", price: "$25/sqm" },
            { name: "Underfloor Heating", price: "$120/sqm" },
            { name: "Tile Removal", price: "$35/sqm" },
            { name: "Skirting", price: "$15/linear m" },
        ]
    }
};

const getPrice = (pkg, isAnnual) => {
    if (typeof pkg.price === 'object') {
        return isAnnual ? pkg.price.annual : pkg.price.monthly;
    }
    return pkg.price;
};

export default function Pricing() {
    const [selectedTab, setSelectedTab] = useState('bathroom');
    const [isAnnual, setIsAnnual] = useState(false);

    const currentData = PRICING_DATA[selectedTab];

    return (
        <div className="w-full bg-gray-50 py-1 px-8">
            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-t-[32px] mb-16 animate-scale-in">
                <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 to-[#3F3F46]/90 z-10"></div>
                <div className="relative z-20 py-20 px-4 max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in-down">
                            <FaCalculator className="text-[#C9A24D] animate-float" />
                            <span className="text-white font-medium">TRANSPARENT PRICING</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-5xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-200">
                            Clear & Competitive Pricing
                            <span className="block text-[#C9A24D] animate-fade-in-up animation-delay-400">No Hidden Costs</span>
                        </h1>
                        
                        <p className="text-xl text-white/90 mb-8 animate-fade-in-up animation-delay-500">
                            Get detailed, transparent pricing for all your tiling and waterproofing needs. 
                            All quotes include GST, materials, and professional installation.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-700">
                            <button className="bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                                <span className="relative z-10">Get Instant Quote</span>
                                <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                            </button>
                            <button className="bg-white text-[#111827] font-bold py-3 px-8 rounded-xl hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                                View Our Work
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto">
                {/* Service Tabs */}
                <section className="mb-16 animate-fade-in-up animation-delay-300">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#111827] mb-4">
                            Choose Your Service
                        </h2>
                        <p className="text-lg text-[#3F3F46] max-w-3xl mx-auto">
                            Select a service below to view detailed package options and pricing
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {PRICING_TABS.map((tab, index) => (
                            <button
                                key={tab.id}
                                onClick={() => setSelectedTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover-lift animate-fade-in-up ${
                                    selectedTab === tab.id
                                        ? 'bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white shadow-lg scale-105'
                                        : 'bg-white text-[#111827] hover:bg-gray-50 border border-gray-200'
                                }`}
                                style={{ animationDelay: `${400 + index * 100}ms` }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Service Description */}
                <section className="mb-16 animate-fade-in-up animation-delay-500">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-[#111827] mb-4">
                            {currentData.title}
                        </h3>
                        <p className="text-lg text-[#3F3F46] max-w-2xl mx-auto mb-8">
                            {currentData.description}
                        </p>
                        
                        {/* Billing Toggle */}
                        <div className="flex items-center justify-center mb-12">
                            <div className="bg-gray-100 p-1 rounded-xl inline-flex">
                                <button
                                    onClick={() => setIsAnnual(false)}
                                    className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                                        !isAnnual ? 'bg-white text-[#111827] shadow' : 'text-[#3F3F46]'
                                    }`}
                                >
                                    Standard Pricing
                                </button>
                                <button
                                    onClick={() => setIsAnnual(true)}
                                    className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                                        isAnnual ? 'bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white shadow' : 'text-[#3F3F46]'
                                    }`}
                                >
                                    Package Discount
                                </button>
                            </div>
                            {isAnnual && (
                                <span className="ml-4 bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full animate-bounce-in">
                                    Save up to 10%
                                </span>
                            )}
                        </div>
                    </div>
                </section>

                {/* Pricing Cards */}
                <section className="mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {currentData.packages.map((pkg, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl border-2 overflow-hidden transition-all duration-500 hover:scale-[1.03] hover-lift animate-fade-in-up group ${
                                    pkg.highlight 
                                        ? 'border-[#C9A24D] shadow-2xl hover-glow' 
                                        : 'border-gray-200 shadow-lg'
                                }`}
                                style={{ animationDelay: `${600 + index * 150}ms` }}
                            >
                                {/* Package Header */}
                                <div className={`p-6 ${
                                    pkg.highlight
                                        ? 'bg-gradient-to-r from-[#C9A24D] to-[#B89246]'
                                        : 'bg-gradient-to-r from-[#111827] to-[#3F3F46]'
                                }`}>
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="text-2xl font-bold text-white animate-fade-in-left animation-delay-200">
                                                {pkg.name}
                                            </h4>
                                            {pkg.popular && (
                                                <span className="inline-block bg-white text-[#C9A24D] text-xs font-bold px-3 py-1 rounded-full mt-2 animate-pulse-scale">
                                                    MOST POPULAR
                                                </span>
                                            )}
                                        </div>
                                        {pkg.highlight && (
                                            <FaStar className="text-yellow-300 text-xl animate-float" />
                                        )}
                                    </div>

                                    <div className="text-white">
                                        <div className="text-4xl font-bold mb-2 group-hover:animate-pulse-scale">
                                            {getPrice(pkg, isAnnual)}
                                        </div>
                                        <div className="flex items-center gap-2 text-white/80">
                                            <FaClock className="text-sm" />
                                            <span>{pkg.duration}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Package Features */}
                                <div className={`p-6 bg-gradient-to-b ${pkg.color}`}>
                                    <ul className="space-y-3 mb-8">
                                        {pkg.features.map((feature, idx) => (
                                            <li 
                                                key={idx} 
                                                className="flex items-start group/feature animate-fade-in-left"
                                                style={{ animationDelay: `${700 + idx * 50}ms` }}
                                            >
                                                {feature.included ? (
                                                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0 group-hover/feature:animate-scale-in" />
                                                ) : (
                                                    <FaTimes className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                                                )}
                                                <span className={`transition-colors duration-300 ${
                                                    feature.included 
                                                        ? 'text-[#111827] group-hover/feature:text-[#C9A24D]' 
                                                        : 'text-gray-400'
                                                }`}>
                                                    {feature.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group/btn ${
                                            pkg.highlight
                                                ? 'bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white'
                                                : 'bg-[#111827] text-white hover:bg-[#3F3F46]'
                                        }`}
                                    >
                                        <span className="relative z-10">Get {pkg.name} Quote</span>
                                        <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Add-ons Section */}
                <section className="mb-16 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200 animate-fade-in-up animation-delay-700 hover-lift">
                    <div className="text-center mb-8">
                        <h4 className="text-2xl font-bold text-[#111827]">
                            Popular Add-ons & Extras
                        </h4>
                        <p className="text-[#3F3F46] mt-2">
                            Enhance your project with these optional extras
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {currentData.addOns.map((addon, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-xl border border-gray-200 hover:border-[#C9A24D] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center cursor-pointer group animate-fade-in-up"
                                style={{ animationDelay: `${800 + index * 100}ms` }}
                            >
                                <div className="font-semibold text-[#111827] mb-1 group-hover:text-[#C9A24D] transition-colors duration-300">
                                    {addon.name}
                                </div>
                                <div className="text-[#C9A24D] font-bold text-lg group-hover:animate-pulse-scale">
                                    {addon.price}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Features Grid */}
                <section className="mb-16 animate-fade-in-up animation-delay-800">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#111827] mb-4">
                            Why Trust Our Pricing
                        </h2>
                        <p className="text-lg text-[#3F3F46] max-w-3xl mx-auto">
                            Our transparent approach ensures you get the best value for your investment
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaShieldAlt,
                                title: "Certified Workmanship",
                                description: "All work comes with comprehensive warranties and Australian standard compliance",
                                gradient: "from-[#C9A24D] to-[#B89246]"
                            },
                            {
                                icon: FaTools,
                                title: "Premium Materials",
                                description: "We use only high-quality, durable materials from trusted suppliers",
                                gradient: "from-[#111827] to-[#3F3F46]"
                            },
                            {
                                icon: FaRuler,
                                title: "Free Quotes",
                                description: "Get a detailed, no-obligation quote with transparent pricing breakdown",
                                gradient: "from-[#C9A24D] to-[#B89246]"
                            }
                        ].map((feature, index) => (
                            <div 
                                key={index}
                                className="text-center p-6 bg-white rounded-2xl shadow-lg hover-lift animate-fade-in-up group"
                                style={{ animationDelay: `${900 + index * 150}ms` }}
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-float group-hover:shadow-lg transition-shadow duration-300`}>
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <h5 className="text-xl font-bold text-[#111827] mb-3 group-hover:text-[#C9A24D] transition-colors duration-300">
                                    {feature.title}
                                </h5>
                                <p className="text-[#3F3F46]">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="mb-16 bg-gradient-to-r from-[#111827] to-[#3F3F46] rounded-2xl p-12 text-center hover-glow animate-fade-in-up animation-delay-900">
                    <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-up animation-delay-1000">
                        Need a Custom Quote?
                    </h2>
                    <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
                        Every project is unique. Contact us for a personalized quote based on your specific requirements.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-200">
                        <button className="bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                            <span className="relative z-10">Request Custom Quote</span>
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
                            { icon: FaMapMarkerAlt, label: "Service Area", value: "All Brisbane" }
                        ].map((contact, index) => (
                            <div 
                                key={index}
                                className="flex items-center justify-center gap-3 text-white group cursor-pointer animate-fade-in-up"
                                style={{ animationDelay: `${1100 + index * 100}ms` }}
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
                </section>

                {/* Disclaimer */}
                <section className="text-center animate-fade-in-up animation-delay-1000">
                    <div className="bg-white rounded-2xl p-8 border border-gray-200 hover-lift">
                        <h4 className="text-xl font-bold text-[#111827] mb-4">
                            Pricing Information
                        </h4>
                        <div className="text-sm text-[#3F3F46] space-y-2 max-w-3xl mx-auto">
                            <p>
                                *Prices are indicative and may vary based on project complexity, materials selected, and site conditions.
                                Final quotes provided after site inspection.
                            </p>
                            <p>
                                **All prices include GST. Waterproofing certificates provided for relevant services.
                            </p>
                            <p className="text-[#C9A24D] font-medium mt-4 animate-fade-in-up animation-delay-200">
                                ✓ Free site inspections ✓ No obligation quotes ✓ Transparent pricing
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}