"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import messages from "@/messages/en.json";

const t = messages.whyMakuvion;

const pillarIcons = [
    <svg key="0" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
    </svg>,
    <svg key="1" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </svg>,
    <svg key="2" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>,
    <svg key="3" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>,
];

export default function WhyMakuvionSection() {
    const ref = useRef(null);
    useInView(ref, { once: true });

    return (
        <section id="why-makuvion" className="relative py-24 md:py-32">
            <div className="section-divider max-w-4xl mx-auto mb-24" />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-7xl mx-auto px-6"
            >
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <span className="text-sm font-medium text-gold-400 tracking-wider uppercase">{t.label}</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6">{t.title}</h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">{t.description}</p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {t.pillars.map((pillar, i) => (
                        <motion.div
                            key={i}
                            variants={scaleIn}
                            whileHover={{ y: -4, transition: { duration: 0.3 } }}
                            className="glass-card rounded-2xl p-7 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 mb-5 group-hover:bg-gold-500/20 transition-colors duration-300">
                                {pillarIcons[i]}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">{pillar.title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    ref={ref}
                    variants={fadeInUp}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {t.stats.map((stat, i) => (
                        <div key={i} className="glass-card rounded-xl p-6 text-center">
                            <div className="text-3xl font-bold gradient-text mb-2">{stat.suffix}</div>
                            <div className="text-sm text-slate-400">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
