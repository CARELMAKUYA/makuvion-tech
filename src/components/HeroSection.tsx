"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import messages from "@/messages/en.json";
import MakuvionLogo from "./MakuvionLogo";

const t = messages.hero;

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background layers */}
            <div className="absolute inset-0 hero-mesh" />
            <div className="absolute inset-0 grid-overlay" />

            {/* Animated gold orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/8 rounded-full blur-[120px] animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-600/6 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-700/4 rounded-full blur-[150px]" />

            {/* Content */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20"
            >
                {/* Logo */}
                <motion.div variants={fadeInUp} className="flex justify-center mb-6">
                    <MakuvionLogo className="w-20 h-20 drop-shadow-[0_0_20px_rgba(201,164,68,0.3)]" />
                </motion.div>

                {/* Badge */}
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/5 mb-8">
                    <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                    <span className="text-sm text-gold-400 font-medium">{t.badge}</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    variants={fadeInUp}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-4"
                >
                    <span className="text-white">{t.headline}</span>
                    <br />
                    <span className="gradient-text">{t.headlineAccent}</span>
                </motion.h1>

                {/* Tagline from poster */}
                <motion.p
                    variants={fadeInUp}
                    className="text-lg md:text-xl text-gold-400 font-medium italic mb-6 tracking-wide"
                >
                    {t.tagline}
                </motion.p>

                {/* Subheadline */}
                <motion.p
                    variants={fadeInUp}
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    {t.subheadline}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#contact" className="btn-primary text-base px-8 py-3.5">
                        {t.ctaPrimary}
                    </a>
                    <a href="#vision" className="btn-secondary text-base px-8 py-3.5">
                        {t.ctaSecondary}
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div variants={fadeInUp} className="mt-20">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-xs text-slate-500 uppercase tracking-widest">{t.scrollLabel}</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gold-500">
                            <path d="M10 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
