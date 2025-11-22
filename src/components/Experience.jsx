import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';

const ExperienceCard = ({ exp, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative pl-8 md:pl-0"
    >
        {/* Timeline Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2" />

        {/* Timeline Dot (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 w-4 h-4 bg-cyan-500 rounded-full -translate-x-1/2 border-4 border-slate-950 z-10" />

        <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
            {/* Empty space for alignment */}
            <div className="hidden md:block w-1/2" />

            {/* Content */}
            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} mb-12 relative`}>
                {/* Mobile Line & Dot */}
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-slate-800" />
                <div className="md:hidden absolute left-[-5px] top-0 w-3 h-3 bg-cyan-500 rounded-full border-2 border-slate-950" />

                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all shadow-lg group-hover:shadow-cyan-500/10">
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-cyan-400 font-medium text-lg mb-1">{exp.company}</p>
                    <p className="text-slate-400 text-sm mb-4">{exp.period}</p>
                    <ul className="list-disc list-outside ml-5 space-y-2 text-slate-300 text-sm">
                        {exp.description.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </motion.div>
);

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">What I've done so far</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">Work Experience.</h2>

                    <div className="relative">
                        {experience.map((exp, index) => (
                            <ExperienceCard key={index} exp={exp} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
