"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import messages from "@/messages/en.json";
import MakuvionLogo from "./MakuvionLogo";

const navLinks = [
    { label: messages.navbar.links.solutions, href: "#solutions" },
    { label: messages.navbar.links.whyUs, href: "#why-makuvion" },
    { label: messages.navbar.links.vision, href: "#vision" },
    { label: messages.navbar.links.impact, href: "#youth-development" },
    { label: messages.navbar.links.contact, href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2.5 group">
                    <MakuvionLogo className="w-9 h-9 group-hover:drop-shadow-[0_0_12px_rgba(201,164,68,0.4)] transition-all duration-300" />
                    <div className="flex flex-col leading-tight">
                        <span className="text-base font-bold text-gold-400 tracking-tight">
                            MAKUVION
                        </span>
                        <span className="text-[9px] text-gold-600 tracking-[0.2em] uppercase">
                            Technologies
                        </span>
                    </div>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-slate-400 hover:text-gold-400 transition-colors duration-300 relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold-500 group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                    <a href="#contact" className="btn-primary text-sm px-5 py-2.5">
                        {messages.navbar.cta}
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <motion.span
                        animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        className="w-6 h-[2px] bg-gold-400 block"
                    />
                    <motion.span
                        animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-6 h-[2px] bg-gold-400 block"
                    />
                    <motion.span
                        animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        className="w-6 h-[2px] bg-gold-400 block"
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-slate-300 hover:text-gold-400 transition-colors py-2"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setMobileOpen(false)}
                                className="btn-primary text-center text-sm mt-2"
                            >
                                {messages.navbar.cta}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
