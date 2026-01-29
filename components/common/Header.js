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
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScrollY && current > 80);
      setLastScrollY(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
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

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* HEADER */}
      <header
        className={`
          fixed top-4 left-[7vw] w-[86vw] z-50
          transition-transform duration-500
          ${hidden ? "-translate-y-[125%]" : "translate-y-0"}
        `}
      >
        <div
          className={`
            flex items-center justify-between
            rounded-full
            px-8 py-2.5
            bg-surface-dark
            shadow-[0_10px_40px_rgba(0,0,0,0.45)]
            transition-all
            ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
        >
          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <Image
              src={logo}
              alt="GARDA Tiling"
              width={48}
              height={48}
              priority
            />
            <span className="font-bebas text-xl tracking-widest text-white">
              GARDA TILING
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 font-manrope text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  text-white/80
                  hover:text-white
                  transition-colors
                  relative tracking-wide
                  after:absolute after:-bottom-1 after:left-0
                  after:h-0.5 after:w-0 after:bg-accent
                  after:transition-all
                  hover:after:w-full
                "
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <Link
            href="/quote"
            className="
              hidden lg:inline-flex
              items-center justify-center
              bg-white
              text-text-primary
              px-6 py-2.5
              rounded-full
              font-manrope text-sm font-semibold
              shadow-md
              hover:shadow-lg hover:scale-[1.03]
              active:scale-95
              transition-all
            "
          >
            Get a Quote
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="
              lg:hidden
              w-10 h-10
              flex items-center justify-center
              rounded-full
              bg-white/10
              text-white
              hover:bg-white/20
              transition
            "
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        onClick={closeMenu}
        className={`
          fixed inset-0 z-40 bg-black/50
          transition-opacity
          ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
          lg:hidden
        `}
      />

      {/* MOBILE MENU */}
      <aside
        className={`
          fixed top-0 right-0 z-50 h-full w-full max-w-sm
          bg-surface-dark
          text-white
          transform transition-transform duration-500
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          lg:hidden
        `}
      >
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
          <span className="font-bebas text-xl tracking-widest">MENU</span>
          <button onClick={closeMenu}>
            <FaTimes />
          </button>
        </div>

        <nav className="p-6 space-y-2 font-manrope">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="
                flex items-center justify-between
                px-4 py-3 rounded-lg
                text-white/85
                hover:bg-white/10
                transition
              "
            >
              {link.label}
              <FaChevronRight className="opacity-50" />
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-white/10">
          <Link
            href="/quote"
            onClick={closeMenu}
            className="
              block text-center
              bg-white
              text-text-primary
              py-3 rounded-xl
              font-semibold
              shadow-md
            "
          >
            Get a Free Quote
          </Link>
        </div>
      </aside>
    </>
  );
}
