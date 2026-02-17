"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import messages from "@/messages/en.json";

const t = messages.cta;

export default function CTASection() {
    return (
        <section className="relative py-24 md:py-32">
            <div className="section-divider max-w-4xl mx-auto mb-24" />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-7xl mx-auto px-6"
            >
                <motion.div
                    variants={fadeInUp}
                    className="relative rounded-3xl overflow-hidden"
                >
                    <div className="absolute inset-0 cta-gradient" />
                    <div className="absolute inset-0 grid-overlay opacity-30" />

                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold-500/8 rounded-full blur-[80px] animate-pulse-glow" />
                    <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gold-600/8 rounded-full blur-[60px] animate-pulse-glow" style={{ animationDelay: "1s" }} />

                    <div className="relative z-10 py-20 md:py-28 px-8 text-center">
                        <motion.h2
                            variants={fadeInUp}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                        >
                            {t.title}
                            <br />
                            <span className="gradient-text">{t.titleAccent}</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeInUp}
                            className="text-lg text-slate-400 max-w-xl mx-auto mb-10"
                        >
                            {t.description}
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <a href="#contact" className="btn-primary text-base px-8 py-4 text-lg">
                                {t.ctaPrimary}
                            </a>
                            <a href="#vision" className="btn-secondary text-base px-8 py-4 text-lg">
                                {t.ctaSecondary}
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
