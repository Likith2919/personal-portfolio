import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cloud, Terminal } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
    ];

    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: isScrolled ? '1rem 2rem' : '1.5rem 2.5rem',
                transition: 'all 0.3s ease',
                background: isScrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                >
                    <div style={{
                        background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                        padding: '0.5rem',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Terminal size={20} color="white" />
                    </div>
                    <span style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.5px' }}>
                        LIKITH <span className="gradient-text">SIRIGIRI</span>
                    </span>
                </motion.div>

                {/* Desktop Nav */}
                <nav style={{ display: 'none' }} className="desktop-nav">
                    <ul style={{ display: 'flex', listStyle: 'none', gap: '2.5rem' }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    style={{
                                        color: 'white',
                                        fontSize: '0.9rem',
                                        fontWeight: 500,
                                        opacity: 0.8,
                                        transition: 'opacity 0.2s'
                                    }}
                                    onMouseEnter={(e) => e.target.style.opacity = 1}
                                    onMouseLeave={(e) => e.target.style.opacity = 0.8}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass"
                    style={{
                        padding: '0.6rem 1.25rem',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'none'
                    }}
                    id="cta-resume"
                >
                    Resume
                </motion.button>

                {/* Mobile menu toggle */}
                <div style={{ display: 'block' }} className="mobile-toggle">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            <style>{`
        @media (min-width: 769px) {
          .desktop-nav { display: block !important; }
          .cta-resume { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            background: 'rgba(5, 5, 5, 0.95)',
                            backdropFilter: 'blur(10px)',
                            padding: '2rem',
                            overflow: 'hidden'
                        }}
                    >
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        style={{ fontSize: '1.25rem', display: 'block' }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
