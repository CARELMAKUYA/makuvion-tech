"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import messages from "@/messages/en.json";

const t = messages.solutions;

const gradients = [
    "from-gold-400 to-gold-600",
    "from-gold-500 to-gold-700",
    "from-amber-400 to-gold-500",
    "from-gold-300 to-gold-500",
];

const categoryIcons = [
    // AI & Automation
    <svg key="0" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
    </svg>,
    // Website Development
    <svg key="1" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>,
    // Poster & Design
    <svg key="2" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>,
    // Innovation & R&D
    <svg key="3" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>,
];

export default function SolutionsSection() {
    return (
        <section id="solutions" className="relative py-24 md:py-32">
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

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t.categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            variants={scaleIn}
                            whileHover={{ y: -6, transition: { duration: 0.3 } }}
                            className="glass-card rounded-2xl p-7 group relative overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i]} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center text-navy-900 mb-6 shadow-lg`}>
                                    {categoryIcons[i]}
                                </div>

                                <h3 className="text-lg font-bold text-white mb-5">{cat.title}</h3>

                                <ul className="space-y-3">
                                    {cat.services.map((service, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-gold-500/60 flex-shrink-0" />
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
