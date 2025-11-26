import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { Toaster } from 'react-hot-toast';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-hidden">
      {/* Cursor Following Gradient - Multiple Layers for Better Visibility */}
      <div
        className="pointer-events-none fixed z-[1]"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, rgba(139, 92, 246, 0.2) 25%, rgba(6, 182, 212, 0.12) 50%, transparent 75%)',
          filter: 'blur(70px)',
          transition: 'left 0.2s linear, top 0.2s linear',
          willChange: 'transform',
        }}
      />
      {/* Secondary layer for more visibility */}
      <div
        className="pointer-events-none fixed z-[1]"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 60%)',
          filter: 'blur(40px)',
          transition: 'left 0.15s linear, top 0.15s linear',
          willChange: 'transform',
        }}
      />

      <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
