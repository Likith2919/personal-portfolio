import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, Zap, Database } from 'lucide-react';

const Hero = () => {
    return (
        <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Decorative blobs */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '-5%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '-5%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: -1
            }} />

            <div style={{ width: '100%' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="mono" style={{ color: 'var(--primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '1rem', display: 'block' }}>
                        5+ Years of DevOps Excellence
                    </span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', maxWidth: '900px', marginBottom: '1.5rem', lineHeight: 1.05 }}>
                        Architecting <span className="gradient-text">Scalable & Secure</span> Cloud Infrahstructures.
                    </h1>
                    <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                        Senior DevOps Engineer at <span style={{ color: 'white', fontWeight: 600 }}>ezee.ai</span>.
                        I build custom tools that bridge the gap between development and operations, ensuring maximum security and cost-efficiency.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}
                >
                    <button className="glass" style={{
                        padding: '1rem 2rem',
                        fontSize: '1rem',
                        fontWeight: 600,
                        background: 'white',
                        color: 'black',
                        cursor: 'pointer'
                    }}>
                        View Projects
                    </button>
                    <button className="glass" style={{
                        padding: '1rem 2rem',
                        fontSize: '1rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                    }}>
                        Contact Me
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{
                        marginTop: '5rem',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                        gap: '2rem',
                        maxWidth: '800px'
                    }}
                >
                    {[
                        { icon: <Server size={20} />, label: 'Cloud Architecture' },
                        { icon: <Shield size={20} />, label: 'Security (SCA)' },
                        { icon: <Database size={20} />, label: 'Custom Tooling' },
                        { icon: <Zap size={20} />, label: 'Cost Optimization' }
                    ].map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)' }}>
                            <div style={{ color: 'var(--primary)' }}>{item.icon}</div>
                            <span className="mono" style={{ fontSize: '0.8rem', fontWeight: 500 }}>{item.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
