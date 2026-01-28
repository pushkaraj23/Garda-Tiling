'use client';

import Link from 'next/link';

export default function Footer() {
    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Projects', href: '/projects' },
    ];

    const legalLinks = [
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
    ];

    const socialLinks = [
        {
            icon: 'instagram',
            href: 'https://instagram.com',
            label: 'Instagram',
        },
        {
            icon: 'linkedin',
            href: 'https://linkedin.com',
            label: 'LinkedIn',
        },
        {
            icon: 'mail',
            href: 'mailto:info@example.com',
            label: 'Email',
        },
    ];

    // SVG Icons
    const renderIcon = (iconName) => {
        switch (iconName) {
            case 'instagram':
                return (
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <circle cx="17.5" cy="6.5" r="1.5" />
                    </svg>
                );
            case 'linkedin':
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
            case 'mail':
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
            default:
                return null;
        }
    };

    return (
        <footer className="w-full bg-gradient-to-r from-gray-600 via-gray-900 to-gray-600 text-white py-16 px-6 sm:px-8">
            <div className="max-w-7xl mx-auto">
                {/* TOP SECTION */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 mb-16 pb-12 border-b border-slate-700">
                    {/* LEFT - LOGO & TAGLINE */}
                    <div className="flex  justify-center items-center gap-4">
                        {/* LOGO */}
                        <div className="relative w-34 h-34">
                            <img
                                src="/home/logo.svg"
                                alt="Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* TAGLINE */}
                        <div className="max-w-xs">
                            <p className="text-gray-300 text-sm leading-relaxed font-light text-center">
                                Get in touch with us for an in-depth one to one session.
                            </p>
                        </div>
                    </div>


                    {/* RIGHT - NAVIGATION LINKS */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-16">
                        {/* COLUMN 1 */}
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* COLUMN 2 */}
                        <div className="flex flex-col gap-4">
                            {legalLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* COPYRIGHT */}
                    <p className="text-gray-400 text-xs sm:text-sm font-light">
                        © 2024. All rights reserved.
                    </p>

                    {/* SOCIAL ICONS */}
                    <div className="flex items-center gap-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="text-gray-400 hover:text-white transition-colors duration-200"
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