import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
    // Define orbits and mapping categories to them
    // Inner to Outer
    const orbits = [
        { categories: ['Languages & Tools'], radius: 300, speed: 40 },
        { categories: ['Databases', 'Cloud'], radius: 450, speed: 50 },
        { categories: ['Backend', 'AI Automation'], radius: 600, speed: 60 },
        { categories: ['Frontend'], radius: 750, speed: 70 },
        { categories: ['DevOps', 'Networking'], radius: 900, speed: 80 },
    ];

    // Helper to get all skills for a set of categories
    const getSkillsForOrbit = (categories) => {
        return categories.flatMap(cat => skills[cat] || []);
    };

    return (
        <section id="skills" className="relative min-h-screen bg-slate-950 overflow-hidden flex flex-col items-center justify-end pb-0 pt-20">
            {/* Header Content - Floating at top */}
            <div className="absolute top-20 left-0 right-0 z-20 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">My Universe</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Technical Skills
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        A constellation of technologies I've mastered on my journey.
                    </p>
                </motion.div>
            </div>

            {/* Planet / Core */}
            <div className="absolute bottom-[-400px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-t from-blue-900 via-cyan-900 to-slate-950 border-t border-cyan-500/50 shadow-[0_-20px_100px_rgba(6,182,212,0.2)] z-10 flex items-start justify-center pt-20">
                <div className="text-center">
                    <div className="text-cyan-400 text-2xl font-bold tracking-widest uppercase opacity-80">Core</div>
                </div>
            </div>

            {/* Orbits Container - Centered on the planet center */}
            <div className="absolute bottom-[-400px] left-1/2 -translate-x-1/2 w-0 h-0 z-0">
                {orbits.map((orbit, orbitIndex) => {
                    const orbitSkills = getSkillsForOrbit(orbit.categories);
                    const totalSkills = orbitSkills.length;
                    // Distribute skills along the top arc (approx -70deg to 70deg)
                    const angleSpan = 160;
                    const startAngle = -angleSpan / 2;
                    const angleStep = totalSkills > 1 ? angleSpan / (totalSkills - 1) : 0;

                    return (
                        <div key={orbitIndex} className="absolute top-0 left-0 flex items-center justify-center">
                            {/* Orbit Line */}
                            <div
                                className="absolute rounded-full border border-slate-800/50 border-dashed"
                                style={{
                                    width: orbit.radius * 2,
                                    height: orbit.radius * 2,
                                    top: -orbit.radius,
                                    left: -orbit.radius,
                                }}
                            />

                            {/* Skills on Orbit */}
                            {orbitSkills.map((skill, skillIndex) => {
                                const angle = startAngle + (angleStep * skillIndex);
                                // Convert angle to radians for positioning
                                const rad = (angle - 90) * (Math.PI / 180); // -90 to rotate so 0 is up
                                const x = orbit.radius * Math.cos(rad);
                                const y = orbit.radius * Math.sin(rad);

                                return (
                                    <motion.div
                                        key={skill.name}
                                        className="absolute group"
                                        style={{
                                            left: x,
                                            top: y,
                                            x: '-50%',
                                            y: '-50%',
                                        }}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: (orbitIndex * 0.2) + (skillIndex * 0.05)
                                        }}
                                    >
                                        <div className="relative flex flex-col items-center">
                                            <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-900/80 rounded-full border border-slate-700 flex items-center justify-center p-2 shadow-lg hover:scale-125 hover:border-cyan-400 transition-all duration-300 z-20 cursor-pointer">
                                                <img
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>

                                            {/* Tooltip */}
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 rounded text-cyan-200 text-[10px] font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                                {skill.name}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>

            {/* Overlay Gradient for smooth fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-950 to-transparent z-20 pointer-events-none" />
        </section >
    );
};

export default Skills;
