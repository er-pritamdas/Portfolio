import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
    // Mapping categories to orbits (Outer to Inner)
    const orbits = [
        { name: "Infrastructure", categories: ["DevOps", "Cloud"], radius: 700, color: "border-cyan-500/30" },
        { name: "Network & Tools", categories: ["Networking", "Languages & Tools"], radius: 575, color: "border-purple-500/30" },
        { name: "Frontend", categories: ["Frontend"], radius: 450, color: "border-pink-500/30" },
        { name: "Backend & AI", categories: ["Backend", "AI Automation"], radius: 325, color: "border-orange-500/30" },
        { name: "Database", categories: ["Databases"], radius: 200, color: "border-blue-500/30" },
    ];

    // Helper to get skills for an orbit
    const getSkillsForOrbit = (orbitCategories) => {
        let orbitSkills = [];
        orbitCategories.forEach(cat => {
            if (skills[cat]) {
                orbitSkills = [...orbitSkills, ...skills[cat]];
            }
        });
        return orbitSkills;
    };

    return (
        <section id="skills" className="py-20 bg-slate-950 relative overflow-hidden min-h-[1000px] flex flex-col items-center">
            <div className="max-w-7xl mx-auto px-6 w-full text-center relative z-10 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">My Arsenal</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Full Stack.</h2>
                </motion.div>
            </div>

            {/* Orbital System Container */}
            <div className="relative w-full max-w-[1400px] h-[800px] flex justify-center items-end mt-auto">

                {/* Earth / Core */}
                <div className="absolute bottom-[-100px] w-[600px] h-[200px] bg-gradient-to-t from-blue-600 to-cyan-400 rounded-[100%] blur-3xl opacity-20 z-0"></div>
                <div className="absolute bottom-[-50px] w-[200px] h-[100px] bg-slate-900 rounded-t-full border-t border-slate-700 z-20 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50"></div>
                </div>

                {/* Orbits */}
                {orbits.map((orbit, orbitIndex) => {
                    const orbitSkills = getSkillsForOrbit(orbit.categories);
                    const totalSkills = orbitSkills.length;
                    const iconRadius = orbit.radius - 62.5; // Place icons in the middle of the gap (125px gap / 2)

                    return (
                        <div
                            key={orbit.name}
                            className={`absolute rounded-full border ${orbit.color} flex justify-center items-start`}
                            style={{
                                width: orbit.radius * 2,
                                height: orbit.radius * 2,
                                bottom: -orbit.radius, // Center the circle at the bottom
                            }}
                        >
                            {/* Orbit Label */}
                            <div className="absolute -top-3 bg-slate-950 px-3 text-xs font-bold uppercase tracking-widest text-slate-500 border border-slate-800 rounded-full z-10">
                                {orbit.name}
                            </div>

                            {/* Skills on Orbit */}
                            {orbitSkills.map((skill, index) => {
                                // Calculate angle for perfect symmetry across a restricted arc (to avoid ground overlap)
                                // Use 80% of the semi-circle (144 degrees), leaving 10% padding on each side.
                                const range = Math.PI * 0.8;
                                const offset = Math.PI * 0.1;
                                const angle = (Math.PI - offset) - ((index + 1) * (range / (totalSkills + 1)));

                                // Position calculation using iconRadius to place BETWEEN lines
                                const x = iconRadius * Math.cos(angle);
                                const y = iconRadius * Math.sin(angle);

                                return (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: (orbitIndex * 0.2) + (index * 0.05) }}
                                        className="absolute group flex flex-col items-center"
                                        style={{
                                            left: `calc(50% + ${x}px)`,
                                            bottom: `calc(50% + ${y}px)`,
                                            transform: 'translate(-50%, 50%)'
                                        }}
                                    >
                                        <div className="w-10 h-10 md:w-12 md:h-12 p-1 transition-transform hover:scale-125 cursor-pointer z-30">
                                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain drop-shadow-lg" />
                                        </div>

                                        <span className="text-slate-300 text-[10px] font-semibold uppercase tracking-wider mt-1 text-center whitespace-nowrap opacity-80 group-hover:opacity-100 group-hover:text-cyan-400 transition-all">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>

            {/* Mobile Fallback / Legend (Optional, but good for accessibility/small screens) */}
            <div className="md:hidden mt-10 text-slate-500 text-sm text-center px-6">
                <p>View on desktop for the interactive orbital experience.</p>
            </div>
        </section>
    );
};

export default Skills;
