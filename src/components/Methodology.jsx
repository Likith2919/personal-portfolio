import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Box, Code } from 'lucide-react';

const Methodology = () => {
    const pillars = [
        {
            title: 'Security-First',
            desc: 'Security isn\'t an afterthought. I implement SCA, MFA, and private connectivity from day one of infrastructure design.',
            icon: <Shield size={32} />
        },
        {
            title: 'Automation Always',
            desc: 'If it\'s worth doing twice, it\'s worth automating. I build CI/CD pipelines that handle the grunt work so teams can focus on code.',
            icon: <Zap size={32} />
        },
        {
            title: 'Cost Efficiency',
            desc: 'Infrastructure should scale with need, not just with traffic. I specialize in Azure/AWS cost optimization and resource rightsizing.',
            icon: <Box size={32} />
        },
        {
            title: 'Custom Tooling',
            desc: 'When standard tools fall short, I build bespoke dashboards and CLI tools to fill the gap, like my custom MongoDB Admin panel.',
            icon: <Code size={32} />
        }
    ];

    return (
        <section id="methodology">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <span className="mono" style={{ color: 'var(--primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1rem', display: 'block', textAlign: 'center' }}>
                    My Philosophy
                </span>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>
                    The Pillars of <span className="gradient-text">DevOps Excellence</span>
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ textAlign: 'center' }}
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: 'rgba(59, 130, 246, 0.1)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                color: 'var(--primary)',
                                border: '1px solid rgba(59, 130, 246, 0.2)'
                            }}>
                                {pillar.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{pillar.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Methodology;
