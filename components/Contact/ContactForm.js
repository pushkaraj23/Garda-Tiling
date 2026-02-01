// "use client"

// import { useState } from 'react';
// import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaRuler, FaShieldAlt, FaLayerGroup, FaComment } from 'react-icons/fa';

// export default function ContactFormStandard({ selectedService = '' }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     mobile: '',
//     email: '',
//     suburb: '',
//     jobType: selectedService || 'Bathroom Tiling',
//     approxSqm: '',
//     waterproofing: 'unsure',
//     tileRemoval: 'unsure',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [status, setStatus] = useState({ type: '', message: '' });

//   const suburbs = [
//     'Brisbane CBD', 'South Yarra', 'Richmond', 'Brighton', 'St Kilda',
//     'Toorak', 'Hawthorn', 'Kew', 'Camberwell', 'Prahran', 'Other Brisbane Suburb'
//   ];

//   const jobTypes = [
//     'Bathroom Tiling & Waterproofing',
//     'Kitchen Splashback Tiling',
//     'Outdoor & Pool Tiling',
//     'Laundry Room Tiling',
//     'Commercial Waterproofing',
//     'Flooring Installation',
//     'Complete Bathroom Renovation',
//     'Other Service'
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setStatus({ type: '', message: '' });

//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setStatus({ 
//           type: 'success', 
//           message: '✅ Thank you! Your quote request has been submitted. We\'ll contact you within 24 hours.' 
//         });
//         setFormData({
//           name: '', mobile: '', email: '', suburb: '', 
//           jobType: selectedService || 'Bathroom Tiling',
//           approxSqm: '', waterproofing: 'unsure', tileRemoval: 'unsure', message: ''
//         });
//       } else {
//         setStatus({ 
//           type: 'error', 
//           message: `❌ ${data.error || 'Something went wrong. Please try again.'}` 
//         });
//       }
//     } catch (error) {
//       setStatus({ 
//         type: 'error', 
//         message: '❌ Network error. Please check your connection and try again.' 
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto">
//       <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden border border-gray-200">
//         {/* Form Header */}
//         <div className="bg-gradient-to-r from-[#111827] to-[#3F3F46] p-6 text-center">
//           <div className="inline-flex items-center justify-center w-12 h-12 bg-[#C9A24D] rounded-full mb-4">
//             <FaShieldAlt className="w-6 h-6 text-white" />
//           </div>
//           <h3 className="text-2xl font-bold text-white mb-2">
//             Request Your Quote
//           </h3>
//           <p className="text-gray-300">
//             Get an accurate estimate for your project
//           </p>
//         </div>

//         <div className="p-6 md:p-8">
//           {status.message && (
//             <div className={`mb-6 p-4 rounded-xl ${status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
//               <div className="flex items-center gap-3">
//                 {status.type === 'success' ? '✅' : '❌'}
//                 <span>{status.message}</span>
//               </div>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Personal Details */}
//             <div className="space-y-4">
//               <h4 className="text-lg font-semibold text-[#111827] flex items-center gap-2">
//                 <FaUser className="text-[#C9A24D]" />
//                 Personal Information
//               </h4>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="relative">
//                   <label className="block text-sm font-medium text-[#111827] mb-2">
//                     Full Name *
//                   </label>
//                   <div className="relative">
//                     <FaUser className="absolute left-3 top-3.5 text-[#3F3F46]" />
//                     <input
//                       type="text"
//                       value={formData.name}
//                       onChange={(e) => setFormData({...formData, name: e.target.value})}
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent"
//                       required
//                       placeholder="John Smith"
//                     />
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <label className="block text-sm font-medium text-[#111827] mb-2">
//                     Mobile Number *
//                   </label>
//                   <div className="relative">
//                     <FaPhone className="absolute left-3 top-3.5 text-[#3F3F46]" />
//                     <input
//                       type="tel"
//                       value={formData.mobile}
//                       onChange={(e) => setFormData({...formData, mobile: e.target.value})}
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent"
//                       required
//                       placeholder="0412 345 678"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="relative">
//                   <label className="block text-sm font-medium text-[#111827] mb-2">
//                     Email Address *
//                   </label>
//                   <div className="relative">
//                     <FaEnvelope className="absolute left-3 top-3.5 text-[#3F3F46]" />
//                     <input
//                       type="email"
//                       value={formData.email}
//                       onChange={(e) => setFormData({...formData, email: e.target.value})}
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent"
//                       required
//                       placeholder="john@example.com"
//                     />
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <label className="block text-sm font-medium text-[#111827] mb-2">
//                     Suburb/Location *
//                   </label>
//                   <div className="relative">
//                     <FaMapMarkerAlt className="absolute left-3 top-3.5 text-[#3F3F46] z-10" />
//                     <select
//                       value={formData.suburb}
//                       onChange={(e) => setFormData({...formData, suburb: e.target.value})}
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent appearance-none bg-white"
//                       required
//                     >
//                       <option value="">Select Your Suburb</option>
//                       {suburbs.map(suburb => (
//                         <option key={suburb} value={suburb}>{suburb}</option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Project Details */}
//             <div className="space-y-4">
//               <h4 className="text-lg font-semibold text-[#111827] flex items-center gap-2">
//                 <FaLayerGroup className="text-[#C9A24D]" />
//                 Project Details
//               </h4>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-[#111827] mb-2">
//                     Service Required *
//                   </label>
//                   <select
//                     value={formData.jobType}
//                     onChange={(e) => setFormData({...formData, jobType: e.target.value})}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent bg-white"
//                     required
//                   >
//                     {jobTypes.map(type => (
//                       <option key={type} value={type}>{type}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="relative">
//                   <label className="block text-sm font-medium text-[#111827] mb-2">
//                     Approximate Area
//                   </label>
//                   <div className="relative">
//                     <FaRuler className="absolute left-3 top-3.5 text-[#3F3F46]" />
//                     <input
//                       type="number"
//                       min="1"
//                       value={formData.approxSqm}
//                       onChange={(e) => setFormData({...formData, approxSqm: e.target.value})}
//                       className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent"
//                       placeholder="15"
//                     />
//                     <span className="absolute right-3 top-3 text-[#3F3F46]">sqm</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Options */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-gray-50 p-4 rounded-xl">
//                 <label className="block text-sm font-semibold text-[#111827] mb-3">
//                   Waterproofing Required?
//                 </label>
//                 <div className="space-y-2">
//                   {[
//                     { value: 'yes', label: 'Yes', desc: 'For bathrooms & wet areas' },
//                     { value: 'no', label: 'No', desc: 'Not required' },
//                     { value: 'unsure', label: 'Not Sure', desc: 'Need professional advice' }
//                   ].map(option => (
//                     <label key={option.value} className="flex items-center p-2 hover:bg-white rounded-lg cursor-pointer">
//                       <input
//                         type="radio"
//                         name="waterproofing"
//                         value={option.value}
//                         checked={formData.waterproofing === option.value}
//                         onChange={(e) => setFormData({...formData, waterproofing: e.target.value})}
//                         className="text-[#C9A24D]"
//                       />
//                       <div className="ml-3">
//                         <span className="font-medium text-[#111827]">{option.label}</span>
//                         <p className="text-xs text-[#3F3F46]">{option.desc}</p>
//                       </div>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-gray-50 p-4 rounded-xl">
//                 <label className="block text-sm font-semibold text-[#111827] mb-3">
//                   Tile Removal Required?
//                 </label>
//                 <div className="space-y-2">
//                   {[
//                     { value: 'yes', label: 'Yes', desc: 'Remove existing tiles' },
//                     { value: 'no', label: 'No', desc: 'New surface' },
//                     { value: 'unsure', label: 'Not Sure', desc: 'Need assessment' }
//                   ].map(option => (
//                     <label key={option.value} className="flex items-center p-2 hover:bg-white rounded-lg cursor-pointer">
//                       <input
//                         type="radio"
//                         name="tileRemoval"
//                         value={option.value}
//                         checked={formData.tileRemoval === option.value}
//                         onChange={(e) => setFormData({...formData, tileRemoval: e.target.value})}
//                         className="text-[#C9A24D]"
//                       />
//                       <div className="ml-3">
//                         <span className="font-medium text-[#111827]">{option.label}</span>
//                         <p className="text-xs text-[#3F3F46]">{option.desc}</p>
//                       </div>
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Additional Details */}
//             <div>
//               <label className="block text-sm font-semibold text-[#111827] mb-2 flex items-center gap-2">
//                 <FaComment className="text-[#C9A24D]" />
//                 Additional Details (Optional)
//               </label>
//               <textarea
//                 value={formData.message}
//                 onChange={(e) => setFormData({...formData, message: e.target.value})}
//                 rows="4"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent"
//                 placeholder="Tell us more about your project, timeline, budget, or specific requirements..."
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="pt-4">
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Processing Your Request...
//                   </>
//                 ) : (
//                   <>
//                     Get Detailed Quote
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
//                     </svg>
//                   </>
//                 )}
//               </button>
              
//               <div className="mt-4 text-center">
//                 <div className="flex items-center justify-center gap-2 text-sm text-[#3F3F46]">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                   </svg>
//                   Your information is secure & confidential
//                 </div>
//                 <p className="text-xs text-gray-500 mt-2">
//                   We'll provide a detailed quote within 24 hours
//                 </p>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client"

import { useState, useEffect } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaRuler, FaShieldAlt, FaLayerGroup, FaComment, FaCheckCircle } from 'react-icons/fa';

export default function ContactFormStandard({ selectedService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    suburb: '',
    jobType: selectedService || 'Bathroom Tiling',
    approxSqm: '',
    waterproofing: 'unsure',
    tileRemoval: 'unsure',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const suburbs = [
    'Brisbane CBD', 'South Yarra', 'Richmond', 'Brighton', 'St Kilda',
    'Toorak', 'Hawthorn', 'Kew', 'Camberwell', 'Prahran', 'Other Brisbane Suburb'
  ];

  const jobTypes = [
    'Bathroom Tiling & Waterproofing',
    'Kitchen Splashback Tiling',
    'Outdoor & Pool Tiling',
    'Laundry Room Tiling',
    'Commercial Waterproofing',
    'Flooring Installation',
    'Complete Bathroom Renovation',
    'Other Service'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: '✅ Thank you! Your quote request has been submitted. We\'ll contact you within 24 hours.' 
        });
        setFormData({
          name: '', mobile: '', email: '', suburb: '', 
          jobType: selectedService || 'Bathroom Tiling',
          approxSqm: '', waterproofing: 'unsure', tileRemoval: 'unsure', message: ''
        });
      } else {
        setStatus({ 
          type: 'error', 
          message: `❌ ${data.error || 'Something went wrong. Please try again.'}` 
        });
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: '❌ Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-500">
        {/* Form Header */}
        <div className="bg-gradient-to-r from-[#111827] to-[#3F3F46] p-6 text-center relative overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-[#C9A24D] rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#C9A24D] rounded-full translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className={`inline-flex items-center justify-center w-12 h-12 bg-[#C9A24D] rounded-full mb-4 transition-all duration-500 ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`} style={{ transitionDelay: '200ms' }}>
            <FaShieldAlt className="w-6 h-6 text-white animate-pulse" />
          </div>
          <h3 className={`text-2xl font-bold text-white mb-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '300ms' }}>
            Request Your Quote
          </h3>
          <p className={`text-gray-300 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
            Get an accurate estimate for your project
          </p>
        </div>

        <div className="p-6 md:p-8">
          {status.message && (
            <div className={`mb-6 p-4 rounded-xl transform transition-all duration-500 animate-bounce-in ${status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
              <div className="flex items-center gap-3">
                <span className={`text-2xl ${status.type === 'success' ? 'animate-bounce' : 'animate-shake'}`}>
                  {status.type === 'success' ? '✅' : '❌'}
                </span>
                <span>{status.message}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Details */}
            <div className={`space-y-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '500ms' }}>
              <h4 className="text-lg font-semibold text-[#111827] flex items-center gap-2 group">
                <FaUser className="text-[#C9A24D] group-hover:animate-bounce transition-transform" />
                <span className="relative">
                  Personal Information
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A24D] group-hover:w-full transition-all duration-300"></span>
                </span>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`relative transform transition-all duration-300 ${focusedField === 'name' ? 'scale-[1.02]' : ''}`}>
                  <label className="block text-sm font-medium text-[#111827] mb-2 transition-colors duration-300">
                    Full Name *
                  </label>
                  <div className="relative group">
                    <FaUser className={`absolute left-3 top-3.5 transition-all duration-300 ${focusedField === 'name' ? 'text-[#C9A24D] scale-110' : 'text-[#3F3F46]'}`} />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent transition-all duration-300 hover:border-[#C9A24D]/50 hover:shadow-md"
                      required
                      placeholder="John Smith"
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C9A24D] to-[#B89246] transition-all duration-300 ${focusedField === 'name' ? 'w-full' : 'w-0'}`}></div>
                  </div>
                </div>

                <div className={`relative transform transition-all duration-300 ${focusedField === 'mobile' ? 'scale-[1.02]' : ''}`}>
                  <label className="block text-sm font-medium text-[#111827] mb-2">
                    Mobile Number *
                  </label>
                  <div className="relative group">
                    <FaPhone className={`absolute left-3 top-3.5 transition-all duration-300 ${focusedField === 'mobile' ? 'text-[#C9A24D] scale-110 animate-wiggle' : 'text-[#3F3F46]'}`} />
                    <input
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                      onFocus={() => setFocusedField('mobile')}
                      onBlur={() => setFocusedField('')}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent transition-all duration-300 hover:border-[#C9A24D]/50 hover:shadow-md"
                      required
                      placeholder="0412 345 678"
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C9A24D] to-[#B89246] transition-all duration-300 ${focusedField === 'mobile' ? 'w-full' : 'w-0'}`}></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`relative transform transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.02]' : ''}`}>
                  <label className="block text-sm font-medium text-[#111827] mb-2">
                    Email Address *
                  </label>
                  <div className="relative group">
                    <FaEnvelope className={`absolute left-3 top-3.5 transition-all duration-300 ${focusedField === 'email' ? 'text-[#C9A24D] scale-110' : 'text-[#3F3F46]'}`} />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent transition-all duration-300 hover:border-[#C9A24D]/50 hover:shadow-md"
                      required
                      placeholder="john@example.com"
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C9A24D] to-[#B89246] transition-all duration-300 ${focusedField === 'email' ? 'w-full' : 'w-0'}`}></div>
                  </div>
                </div>

                <div className={`relative transform transition-all duration-300 ${focusedField === 'suburb' ? 'scale-[1.02]' : ''}`}>
                  <label className="block text-sm font-medium text-[#111827] mb-2">
                    Suburb/Location *
                  </label>
                  <div className="relative group">
                    <FaMapMarkerAlt className={`absolute left-3 top-3.5 z-10 transition-all duration-300 ${focusedField === 'suburb' ? 'text-[#C9A24D] scale-110 animate-bounce' : 'text-[#3F3F46]'}`} />
                    <select
                      value={formData.suburb}
                      onChange={(e) => setFormData({...formData, suburb: e.target.value})}
                      onFocus={() => setFocusedField('suburb')}
                      onBlur={() => setFocusedField('')}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent appearance-none bg-white transition-all duration-300 hover:border-[#C9A24D]/50 hover:shadow-md cursor-pointer"
                      required
                    >
                      <option value="">Select Your Suburb</option>
                      {suburbs.map(suburb => (
                        <option key={suburb} value={suburb}>{suburb}</option>
                      ))}
                    </select>
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C9A24D] to-[#B89246] transition-all duration-300 ${focusedField === 'suburb' ? 'w-full' : 'w-0'}`}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className={`space-y-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '600ms' }}>
              <h4 className="text-lg font-semibold text-[#111827] flex items-center gap-2 group">
                <FaLayerGroup className="text-[#C9A24D] group-hover:animate-spin transition-transform" style={{ animationDuration: '2s' }} />
                <span className="relative">
                  Project Details
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A24D] group-hover:w-full transition-all duration-300"></span>
                </span>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`transform transition-all duration-300 ${focusedField === 'jobType' ? 'scale-[1.02]' : ''}`}>
                  <label className="block text-sm font-medium text-[#111827] mb-2">
                    Service Required *
                  </label>
                  <select
                    value={formData.jobType}
                    onChange={(e) => setFormData({...formData, jobType: e.target.value})}
                    onFocus={() => setFocusedField('jobType')}
                    onBlur={() => setFocusedField('')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent bg-white transition-all duration-300 hover:border-[#C9A24D]/50 hover:shadow-md cursor-pointer"
                    required
                  >
                    {jobTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className={`relative transform transition-all duration-300 ${focusedField === 'approxSqm' ? 'scale-[1.02]' : ''}`}>
                  <label className="block text-sm font-medium text-[#111827] mb-2">
                    Approximate Area
                  </label>
                  <div className="relative group">
                    <FaRuler className={`absolute left-3 top-3.5 transition-all duration-300 ${focusedField === 'approxSqm' ? 'text-[#C9A24D] scale-110 rotate-45' : 'text-[#3F3F46]'}`} />
                    <input
                      type="number"
                      min="1"
                      value={formData.approxSqm}
                      onChange={(e) => setFormData({...formData, approxSqm: e.target.value})}
                      onFocus={() => setFocusedField('approxSqm')}
                      onBlur={() => setFocusedField('')}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent transition-all duration-300 hover:border-[#C9A24D]/50 hover:shadow-md"
                      placeholder="15"
                    />
                    <span className={`absolute right-3 top-3 transition-all duration-300 ${focusedField === 'approxSqm' ? 'text-[#C9A24D] font-semibold' : 'text-[#3F3F46]'}`}>sqm</span>
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C9A24D] to-[#B89246] transition-all duration-300 ${focusedField === 'approxSqm' ? 'w-full' : 'w-0'}`}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Options */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '700ms' }}>
              <div className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg group">
                <label className="block text-sm font-semibold text-[#111827] mb-3 flex items-center gap-2">
                  <FaShieldAlt className="text-[#C9A24D] group-hover:animate-pulse" />
                  Waterproofing Required?
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'yes', label: 'Yes', desc: 'For bathrooms & wet areas' },
                    { value: 'no', label: 'No', desc: 'Not required' },
                    { value: 'unsure', label: 'Not Sure', desc: 'Need professional advice' }
                  ].map((option, index) => (
                    <label 
                      key={option.value} 
                      className={`flex items-center p-2 hover:bg-white rounded-lg cursor-pointer transition-all duration-300 transform hover:translate-x-2 hover:shadow-md ${formData.waterproofing === option.value ? 'bg-white shadow-md border-l-4 border-[#C9A24D]' : ''}`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <input
                        type="radio"
                        name="waterproofing"
                        value={option.value}
                        checked={formData.waterproofing === option.value}
                        onChange={(e) => setFormData({...formData, waterproofing: e.target.value})}
                        className="text-[#C9A24D] focus:ring-[#C9A24D]"
                      />
                      <div className="ml-3">
                        <span className={`font-medium transition-colors duration-300 ${formData.waterproofing === option.value ? 'text-[#C9A24D]' : 'text-[#111827]'}`}>
                          {option.label}
                        </span>
                        <p className="text-xs text-[#3F3F46]">{option.desc}</p>
                      </div>
                      {formData.waterproofing === option.value && (
                        <FaCheckCircle className="ml-auto text-[#C9A24D] animate-scale-in" />
                      )}
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg group">
                <label className="block text-sm font-semibold text-[#111827] mb-3 flex items-center gap-2">
                  <FaLayerGroup className="text-[#C9A24D] group-hover:animate-pulse" />
                  Tile Removal Required?
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'yes', label: 'Yes', desc: 'Remove existing tiles' },
                    { value: 'no', label: 'No', desc: 'New surface' },
                    { value: 'unsure', label: 'Not Sure', desc: 'Need assessment' }
                  ].map((option, index) => (
                    <label 
                      key={option.value} 
                      className={`flex items-center p-2 hover:bg-white rounded-lg cursor-pointer transition-all duration-300 transform hover:translate-x-2 hover:shadow-md ${formData.tileRemoval === option.value ? 'bg-white shadow-md border-l-4 border-[#C9A24D]' : ''}`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <input
                        type="radio"
                        name="tileRemoval"
                        value={option.value}
                        checked={formData.tileRemoval === option.value}
                        onChange={(e) => setFormData({...formData, tileRemoval: e.target.value})}
                        className="text-[#C9A24D] focus:ring-[#C9A24D]"
                      />
                      <div className="ml-3">
                        <span className={`font-medium transition-colors duration-300 ${formData.tileRemoval === option.value ? 'text-[#C9A24D]' : 'text-[#111827]'}`}>
                          {option.label}
                        </span>
                        <p className="text-xs text-[#3F3F46]">{option.desc}</p>
                      </div>
                      {formData.tileRemoval === option.value && (
                        <FaCheckCircle className="ml-auto text-[#C9A24D] animate-scale-in" />
                      )}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
              <label className="block text-sm font-semibold text-[#111827] mb-2 flex items-center gap-2 group">
                <FaComment className="text-[#C9A24D] group-hover:animate-bounce" />
                <span className="relative">
                  Additional Details (Optional)
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A24D] group-hover:w-full transition-all duration-300"></span>
                </span>
              </label>
              <div className={`relative transform transition-all duration-300 ${focusedField === 'message' ? 'scale-[1.01]' : ''}`}>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField('')}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent transition-all duration-300 hover:border-[#C9A24D]/50 hover:shadow-md resize-none"
                  placeholder="Tell us more about your project, timeline, budget, or specific requirements..."
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C9A24D] to-[#B89246] rounded-b-lg transition-all duration-300 ${focusedField === 'message' ? 'w-full' : 'w-0'}`}></div>
              </div>
            </div>

            {/* Submit Button */}
            <div className={`pt-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '900ms' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#C9A24D] to-[#B89246] text-white font-bold py-4 px-6 rounded-xl hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3 relative overflow-hidden group"
              >
                {/* Animated background shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="animate-pulse">Processing Your Request...</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">Get Detailed Quote</span>
                    <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </button>
              
              <div className={`mt-4 text-center transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
                <div className="flex items-center justify-center gap-2 text-sm text-[#3F3F46] group cursor-default">
                  <svg className="w-4 h-4 group-hover:animate-bounce text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="group-hover:text-[#111827] transition-colors duration-300">Your information is secure & confidential</span>
                </div>
                <p className="text-xs text-gray-500 mt-2 hover:text-[#C9A24D] transition-colors duration-300 cursor-default">
                  We'll provide a detailed quote within 24 hours
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}