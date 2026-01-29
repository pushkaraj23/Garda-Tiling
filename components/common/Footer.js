"use client";

import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
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
    <footer className="w-full bg-surface-dark text-white pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 pb-16 border-b border-white/10">
          {/* BRAND */}
          <div className="space-y-4">
            <img
              src="/home/logo.svg"
              alt="Garda Tiling"
              className="w-40 object-contain"
            />
            <p className="text-sm font-manrope text-text-muted max-w-sm">
              Premium tiling & waterproofing solutions delivered with precision,
              professionalism, and long-lasting quality.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="font-bebas text-lg tracking-wide text-white">
                Company
              </h4>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-text-muted hover:text-white transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="font-bebas text-lg tracking-wide text-white">
                Legal
              </h4>
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-text-muted hover:text-white transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-6">
            <h4 className="font-bebas text-lg tracking-wide">
              Start Your Project
            </h4>
            <p className="text-sm font-manrope text-text-muted">
              Get in touch for a one-to-one consultation and accurate quotation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-white font-manrope text-sm font-semibold hover:scale-105 transition"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8">
          <p className="text-xs sm:text-sm text-text-muted">
            © {new Date().getFullYear()} Garda Tiling. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-text-muted hover:text-white transition"
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
