"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import messages from "@/messages/en.json";

const t = messages.vision;

const highlightIcons = [
    <svg key="0" className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>,
    <svg key="1" className="w-5 h-5 text-gold-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>,
    <svg key="2" className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>,
];

export default function VisionSection() {
    return (
        <section id="vision" className="relative py-24 md:py-32">
            <div className="section-divider max-w-4xl mx-auto mb-24" />

            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold-600/4 rounded-full blur-[120px]" />
            <div className="absolute right-0 top-1/3 w-72 h-72 bg-gold-500/4 rounded-full blur-[100px]" />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-7xl mx-auto px-6"
            >
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div variants={slideInLeft}>
                        <span className="text-sm font-medium text-gold-400 tracking-wider uppercase">{t.label}</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-8 leading-tight">{t.title}</h2>
                        <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                            {t.paragraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                        <div className="mt-10">
                            <a href="#contact" className="btn-primary inline-block">{t.cta}</a>
                        </div>
                    </motion.div>

                    <motion.div variants={slideInRight} className="relative">
                        <div className="glass-card rounded-2xl p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-gold-500/8 to-transparent rounded-bl-full" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gold-600/8 to-transparent rounded-tr-full" />

                            <div className="relative z-10 space-y-8">
                                {t.highlights.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                                            {highlightIcons[i]}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                            <p className="text-sm text-slate-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
