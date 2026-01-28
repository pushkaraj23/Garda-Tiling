// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import logo from "../../public/home/logo.svg";

// export default function Header() {
//     return (
//         <header className="w-full p-5">
//             <div
//                 className="
//           max-w-7xl mx-auto
//           px-8 py-5
//           flex items-center justify-between
//           rounded-full
// bg-[linear-gradient(135deg,#a8a9ab_0%,#1F2933_40%,#1F2933_60%,#b5b6b8_100%)]
//           backdrop-blur-xl
//         "
//             >
//                 {/* LEFT LOGO + BRAND */}
//                 <Link href="/" className="flex items-center gap-4">
//                     <Image
//                         src={logo}
//                         alt="GARDA Tiling"
//                         width={66}
//                         height={66}
//                         className="drop-shadow-xl"
//                         priority
//                     />

//                     <span className="font-bebas text-3xl font-semibold tracking-widest text-black">
//                         GARDA TILING
//                     </span>
//                 </Link>

//                 {/* CENTER NAV */}
//                 <nav className="flex gap-8 text-white font-medium">
//                     <Link href="/" className="hover:text-gray-300 transition">Home</Link>
//                     <Link href="/services" className="hover:text-gray-300 transition">Services</Link>
//                     <Link href="/projects" className="hover:text-gray-300 transition">Projects</Link>
//                     <Link href="/areas" className="hover:text-gray-300 transition">Areas We Serve</Link>
//                     <Link href="/pricing" className="hover:text-gray-300 transition">Pricing Guide</Link>
//                     <Link href="/about" className="hover:text-gray-300 transition">About</Link>
//                     <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
//                 </nav>

//                 {/* CTA BUTTON */}
//                 <Link
//                     href="/quote"
//                     className="
//             bg-white text-[#1F2933]
//             px-6 py-2
//             rounded-full
//             font-medium
//             shadow-[0_8px_30px_rgba(0,0,0,0.35)]
//             hover:scale-105
//             transition
//           "
//                 >
//                     Get a Quote
//                 </Link>
//             </div>
//         </header>
//     );
// }

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import logo from "../../public/home/logo.svg";

// export default function Header() {
//   const [hidden, setHidden] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY && currentScrollY > 80) {
//         // scrolling down
//         setHidden(true);
//       } else {
//         // scrolling up
//         setHidden(false);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <header
//       className={`
//         fixed top-0 left-0 w-full z-50
//         transition-transform duration-300 ease-in-out
//         ${hidden ? "-translate-y-full" : "translate-y-0"}
//       `}
//     >
//       <div className="p-5">
//         <div
//           className="
//             max-w-7xl mx-auto
//             px-8 py-3
//             flex items-center justify-between
//             rounded-full
//             bg-[linear-gradient(135deg,#a8a9ab_0%,#1F2933_40%,#1F2933_60%,#b5b6b8_100%)]
//             backdrop-blur-xl
//             shadow-xl
//           "
//         >
//           {/* LEFT LOGO */}
//           <Link href="/" className="flex items-center gap-4">
//             <Image
//               src={logo}
//               alt="GARDA Tiling"
//               width={66}
//               height={66}
//               className="drop-shadow-xl"
//               priority
//             />
//             <span className="font-bebas text-3xl font-semibold tracking-widest text-black">
//               GARDA TILING
//             </span>
//           </Link>

//           {/* NAV */}
//           <nav className="flex gap-8 text-white font-medium">
//             <Link href="/">Home</Link>
//             <Link href="/services">Services</Link>
//             <Link href="/projects">Projects</Link>
//             <Link href="/areas">Areas We Serve</Link>
//             <Link href="/pricing">Pricing Guide</Link>
//             <Link href="/about">About</Link>
//             <Link href="/contact">Contact</Link>
//           </nav>

//           {/* CTA */}
//           <Link
//             href="/quote"
//             className="
//               bg-white text-[#1F2933]
//               px-6 py-2
//               rounded-full
//               font-medium
//               shadow-[0_8px_30px_rgba(0,0,0,0.35)]
//               hover:scale-105
//               transition
//             "
//           >
//             Get a Quote
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/home/logo.svg";
import { FaBars, FaTimes, FaChevronRight } from "react-icons/fa";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
        setMobileMenuOpen(false);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/areas", label: "Areas We Serve" },
    { href: "/pricing", label: "Pricing Guide" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-500 ease-in-out
          ${hidden ? "-translate-y-full" : "translate-y-0"}
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
      >
        <div className="p-3 sm:p-4 md:p-5">
          <div
            className={`
              max-w-7xl mx-auto
              px-4 sm:px-6 md:px-8 py-2 sm:py-3
              flex items-center justify-between
              rounded-full
              bg-[linear-gradient(135deg,#a8a9ab_0%,#1F2933_40%,#1F2933_60%,#b5b6b8_100%)]
              backdrop-blur-xl
              shadow-xl
              transition-all duration-300
              ${isVisible ? "scale-100" : "scale-95"}
            `}
          >
            {/* LEFT LOGO */}
            <Link 
              href="/" 
              className="flex items-center gap-2 sm:gap-3 md:gap-4 group"
              onClick={handleLinkClick}
            >
              <Image
                src={logo}
                alt="GARDA Tiling"
                width={66}
                height={66}
                className="drop-shadow-xl w-10 h-10 sm:w-12 sm:h-12 md:w-[66px] md:h-[66px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                priority
              />
              <span className="font-bebas text-xl sm:text-2xl md:text-3xl font-semibold tracking-widest text-black transition-all duration-300 group-hover:tracking-[0.2em]">
                GARDA TILING
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex gap-6 xl:gap-8 text-white font-medium">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative py-2 transition-all duration-300
                    hover:text-[#C9A24D]
                    after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5
                    after:bg-[#C9A24D] after:transition-all after:duration-300
                    hover:after:w-full
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
                  `}
                  style={{ transitionDelay: `${150 + index * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* DESKTOP CTA */}
            <Link
              href="/quote"
              className={`
                hidden lg:block
                bg-white text-[#1F2933]
                px-4 xl:px-6 py-2
                rounded-full
                font-medium
                shadow-[0_8px_30px_rgba(0,0,0,0.35)]
                hover:scale-105 hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]
                active:scale-95
                transition-all duration-300
                relative overflow-hidden
                group
                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
              `}
              style={{ transitionDelay: '500ms' }}
            >
              <span className="relative z-10">Get a Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#C9A24D] to-[#B89246] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 z-20">
                Get a Quote
              </span>
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`
                lg:hidden
                w-10 h-12 sm:w-12 sm:h-12
                flex items-center justify-center
                rounded-full
                bg-white/10 backdrop-blur-sm
                text-white
                hover:bg-white/20
                active:scale-95
                transition-all duration-300
                ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
              `}
              style={{ transitionDelay: '400ms' }}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-6 h-6">
                <FaBars 
                  className={`
                    absolute inset-0 w-6 h-6
                    transition-all duration-300
                    ${mobileMenuOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'}
                  `}
                />
                <FaTimes 
                  className={`
                    absolute inset-0 w-6 h-6
                    transition-all duration-300
                    ${mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'}
                  `}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`
          fixed inset-0 z-40
          bg-black/60 backdrop-blur-sm
          lg:hidden
          transition-opacity duration-300
          h-30
          ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* MOBILE MENU PANEL */}
      <div
        className={`
          fixed top-0 right-0 z-40
          w-full max-w-sm h-full
          bg-[linear-gradient(180deg,#1F2933_0%,#2d3a47_50%,#1F2933_100%)]
          shadow-2xl
          lg:hidden
          transition-transform duration-500 ease-out
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <Link 
            href="/" 
            className="flex items-center gap-3"
            onClick={handleLinkClick}
          >
            <Image
              src={logo}
              alt="GARDA Tiling"
              width={50}
              height={50}
              className="drop-shadow-xl"
            />
            <span className="font-bebas text-xl font-semibold tracking-widest text-white">
              GARDA TILING
            </span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="
              w-10 h-10
              flex items-center justify-center
              rounded-full
              bg-white/10
              text-white
              hover:bg-white/20
              active:scale-95
              transition-all duration-300
            "
            aria-label="Close menu"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Navigation */}
        <nav className="flex flex-col p-6 space-y-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={`
                flex items-center justify-between
                px-4 py-4
                rounded-xl
                text-white font-medium text-lg
                bg-white/5 hover:bg-white/10
                active:bg-white/15
                transition-all duration-300
                group
                ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
              `}
              style={{ transitionDelay: mobileMenuOpen ? `${150 + index * 50}ms` : '0ms' }}
            >
              <span className="group-hover:text-[#C9A24D] transition-colors duration-300">
                {link.label}
              </span>
              <FaChevronRight className="w-4 h-4 text-white/50 group-hover:text-[#C9A24D] group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu CTA */}
        <div 
          className={`
            absolute bottom-0 left-0 right-0 p-6
            bg-gradient-to-t from-[#1F2933] to-transparent
            transition-all duration-500
            ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
          style={{ transitionDelay: mobileMenuOpen ? '500ms' : '0ms' }}
        >
          <Link
            href="/quote"
            onClick={handleLinkClick}
            className="
              block w-full
              bg-gradient-to-r from-[#C9A24D] to-[#B89246]
              text-white text-center
              px-6 py-4
              rounded-xl
              font-bold text-lg
              shadow-[0_8px_30px_rgba(201,162,77,0.3)]
              hover:shadow-[0_12px_40px_rgba(201,162,77,0.4)]
              hover:scale-[1.02]
              active:scale-[0.98]
              transition-all duration-300
              relative overflow-hidden
              group
            "
          >
            <span className="relative z-10">Get a Free Quote</span>
            <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>
          
          {/* Contact Info */}
          <div className="mt-4 text-center">
            <a 
              href="tel:0300000000" 
              className="text-white/70 hover:text-[#C9A24D] transition-colors duration-300 text-sm"
            >
              Call: (03) 0000 0000
            </a>
          </div>
        </div>
      </div>
    </>
  );
}