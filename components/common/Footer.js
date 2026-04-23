"use client";

import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
  ];

  const legalLinks = [
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ];

  const socialLinks = [
    { icon: "instagram", href: "https://instagram.com", label: "Instagram" },
    { icon: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
    { icon: "mail", href: "mailto:info@example.com", label: "Email" },
  ];

  const renderIcon = (icon) => {
    switch (icon) {
      case "instagram":
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <circle cx="17.5" cy="6.5" r="1.5" />
          </svg>
        );
      case "linkedin":
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        );
      case "mail":
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        );
    }
  };

  return (
    <footer className="relative w-full bg-linear-to-b from-primary to-primary/90 text-white pt-28 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= TOP ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 pb-20 border-b border-white/10">
          {/* BRAND */}
          <div className="lg:col-span-2 space-y-6">
            <img src="/home/logo.svg" alt="Garda Tiling" className="w-44" />

            <h3 className="text-xl font-semibold tracking-wide">
              Precision Tiling. Engineered for Longevity.
            </h3>

            <div className="h-[2px] w-20 bg-accent" />

            <p className="text-sm text-background/60 leading-relaxed max-w-lg">
              Garda Tiling delivers premium residential and commercial tiling,
              waterproofing, and surface solutions. Our work is defined by
              accuracy, durability, and refined finishes — built to last for
              decades.
            </p>

            <p className="text-xs uppercase tracking-widest text-background/60">
              Residential • Commercial • Waterproofing
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="space-y-6">
            <h4 className="font-bebas text-lg tracking-wider text-white">
              Company
            </h4>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-background/60 hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* LEGAL + CONTACT */}
          <div className="space-y-6">
            <h4 className="font-bebas text-lg tracking-wider text-white">
              Contact
            </h4>

            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-background/60 hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 text-sm text-background/60 leading-relaxed">
              <p>📍 Serving Brisbane & Surrounding Areas</p>
              <p>📞 Fast Response & Site Visits</p>
              <p>✉️ info@example.com</p>
            </div>
          </div>
        </div>

        {/* ================= CTA STRIP ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-10 border-b border-white/10">
          <p className="text-lg font-semibold tracking-wide">
            Have a project in mind?
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-background/70 text-black font-semibold text-sm hover:scale-105 transition"
          >
            Request a Detailed Quote
          </Link>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8">
          <div className="text-center sm:text-left">
            <p className="text-xs sm:text-sm text-background/60">
              © {new Date().getFullYear()} Garda Tiling. Crafted with precision.
            </p>
            <p className="text-xs sm:text-sm text-background/60 mt-1">
              Designed & Developed by{" "}
              <a
                href="https://www.fibonce.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition"
              >
                Fibonce Tech Solutions Pvt. Ltd.
              </a>
              .
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/5 backdrop-blur px-5 py-3 rounded-full">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-background/60 hover:text-white transition"
              >
                {renderIcon(social.icon)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
