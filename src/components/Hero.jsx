import React from 'react';
import { motion } from 'framer-motion';
import Background from './3d/Background';
import ThreeHeroModel from './ThreeHeroModel';
import { personalInfo, experience } from '../data';

const Hero = () => {
    // Get unique companies from experience
    const companies = experience.map(exp => ({
        name: exp.company,
        logo: exp.logo
    })).filter((v, i, a) => a.findIndex(t => (t.name === v.name)) === i);

    return (
        <section id="hero" className="relative w-full h-screen bg-slate-950 overflow-hidden">
            {/* Star field background */}
            <Background />

            {/* Globe - covers entire section, positioned to the right */}
            <ThreeHeroModel globeSize={6} offsetX={6} />

            {/* Content overlay */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center pointer-events-none">
                <div className="max-w-7xl mx-auto px-6 w-full text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="pointer-events-auto"
                    >
                        <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tighter mb-2 leading-none">
                            PRITAM
                        </h1>
                        <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tighter mb-8 leading-none">
                            DAS
                        </h1>

                        <p className="text-sm md:text-base text-cyan-400 font-medium tracking-[0.3em] uppercase mb-12">
                            Software Engineer, Front End & App Developer.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <span className="text-slate-500 text-xs tracking-widest uppercase mb-4">Worked With</span>
                            <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
                                {companies.map((company, index) => (
                                    company.logo && (
                                        <div key={index} className="group relative w-24 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100">
                                            <img
                                                src={company.logo}
                                                alt={company.name}
                                                className="max-w-full max-h-full object-contain"
                                            />
                                        </div>
                                    )
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <a href="#about" className="pointer-events-auto">
                    <div className="w-[30px] h-[50px] rounded-full border-2 border-slate-600 flex justify-center items-start p-2">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                            className="w-1.5 h-1.5 rounded-full bg-cyan-400 mb-1"
                        />
                    </div>
                </a>
            </motion.div>

            {/* Gradient overlay */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-10" />
        </section>
    );
};

export default Hero;