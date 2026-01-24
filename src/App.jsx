import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Stats from './components/Stats';
import Terminal from './components/Terminal';
import Methodology from './components/Methodology';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="portfolio-container">
            <motion.div
                className="progress-bar"
                style={{
                    scaleX,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(to right, #3b82f6, #6366f1)',
                    transformOrigin: '0%',
                    zIndex: 1000,
                }}
            />

            <Header />

            <main>
                <Hero />
                <Stats />
                <Terminal />
                <Experience />
                <Methodology />
                <Projects />
                <Skills />
                <Contact />
            </main>

            <footer className="glass" style={{ margin: '4rem 2rem', padding: '3rem', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-muted)' }}>
                    © {new Date().getFullYear()} Likith Sirigiri. Built with precision and passion.
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <a href="https://linkedin.com/in/likith-sirigiri" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/sirigirilikhith" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="mailto:likith.siri@gmail.com">Email</a>
                </div>
            </footer>
        </div>
    );
}

export default App;
