import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">Introduction</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Overview.</h2>

                    <p className="text-slate-300 text-lg leading-relaxed max-w-4xl">
                        {personalInfo.summary}
                    </p>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Full Stack Developer", icon: "💻" },
                            { title: "DevOps Engineer", icon: "🚀" },
                            { title: "Network Automation", icon: "🌐" },
                            { title: "Cloud Architect", icon: "☁️" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors backdrop-blur-sm shadow-xl"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
