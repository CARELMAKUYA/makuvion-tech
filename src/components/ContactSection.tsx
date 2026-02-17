"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import messages from "@/messages/en.json";

const t = messages.contact;

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to send");

            setStatus("sent");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 4000);
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    const buttonText = {
        idle: t.form.submitButton,
        sending: t.form.sendingButton,
        sent: t.form.submittedButton,
        error: t.form.errorMessage,
    };

    return (
        <section id="contact" className="relative py-24 md:py-32">
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
                    <p className="text-lg text-slate-400 max-w-xl mx-auto">{t.description}</p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
                    <motion.div variants={slideInLeft} className="lg:col-span-3">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                    {t.form.nameLabel}
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3.5 rounded-xl bg-navy-800/60 border border-navy-600/50 text-white placeholder-slate-500 transition-all duration-300"
                                    placeholder={t.form.namePlaceholder}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                    {t.form.emailLabel}
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3.5 rounded-xl bg-navy-800/60 border border-navy-600/50 text-white placeholder-slate-500 transition-all duration-300"
                                    placeholder={t.form.emailPlaceholder}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                    {t.form.messageLabel}
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3.5 rounded-xl bg-navy-800/60 border border-navy-600/50 text-white placeholder-slate-500 transition-all duration-300 resize-none"
                                    placeholder={t.form.messagePlaceholder}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className={`btn-primary w-full py-4 text-base ${status === "sending" ? "opacity-70 cursor-not-allowed" : ""
                                    } ${status === "error" ? "!bg-red-600 !shadow-none !text-white" : ""} ${status === "sent" ? "!bg-green-600 !shadow-none !text-white" : ""
                                    }`}
                            >
                                {buttonText[status]}
                            </button>
                        </form>
                    </motion.div>

                    <motion.div variants={slideInRight} className="lg:col-span-2 space-y-8">
                        <div className="glass-card rounded-2xl p-7">
                            <h3 className="text-lg font-semibold text-white mb-6">{t.details.title}</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 mb-1">Email</p>
                                        <a href={`mailto:${t.details.email}`} className="text-white hover:text-gold-400 transition-colors">
                                            {t.details.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 mb-1">Phone</p>
                                        <a href="tel:+27734057351" className="text-white hover:text-gold-400 transition-colors">
                                            {t.details.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 mb-1">Location</p>
                                        <p className="text-white">{t.details.location}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 mb-1">Website</p>
                                        <p className="text-white">{t.details.website}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
