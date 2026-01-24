import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" style={{ marginBottom: '5rem' }}>
            <div className="glass" style={{ padding: '4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-10%',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                    filter: 'blur(50px)',
                    zIndex: -1
                }} />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Let's <span className="gradient-text">Connect</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                        Looking for a Senior DevOps Engineer to lead your infrastructure or build custom internal tools? I'm available for global opportunities.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        <motion.a
                            whileHover={{ y: -5 }}
                            href="mailto:likith.siri@gmail.com"
                            className="glass"
                            style={{
                                padding: '1.5rem 2.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                color: 'white',
                                background: 'rgba(255, 255, 255, 0.05)'
                            }}
                        >
                            <Mail size={24} color="var(--primary)" />
                            <div style={{ textAlign: 'left' }}>
                                <span className="mono" style={{ fontSize: '0.7rem', opacity: 0.6, display: 'block' }}>EMAIL</span>
                                <span style={{ fontWeight: 600 }}>Get in Touch</span>
                            </div>
                        </motion.a>

                        <motion.a
                            whileHover={{ y: -5 }}
                            href="https://linkedin.com/in/likith-sirigiri"
                            target="_blank"
                            className="glass"
                            style={{
                                padding: '1.5rem 2.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                color: 'white',
                                background: 'rgba(255, 255, 255, 0.05)'
                            }}
                        >
                            <Linkedin size={24} color="#0077B5" />
                            <div style={{ textAlign: 'left' }}>
                                <span className="mono" style={{ fontSize: '0.7rem', opacity: 0.6, display: 'block' }}>LINKEDIN</span>
                                <span style={{ fontWeight: 600 }}>Professional Profile</span>
                            </div>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
