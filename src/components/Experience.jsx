import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: 'ezee.ai',
            role: 'Senior DevOps Engineer',
            period: 'Present',
            description: 'Driving DevOps transformation at ezee.ai, a leading fintech startup. Focused on cloud cost optimization, internal tooling, and secure infrastructure deployment.',
            highlights: [
                'Designed custom security dashboards for real-time monitoring.',
                'Implemented cloud cost reduction strategies across AWS and Azure.',
                'Established CI/CD pipelines for high-frequency deployment environments.'
            ]
        },
        {
            company: 'Overall Career',
            role: 'DevOps & Infrastructure Specialist',
            period: '5 Years of Experience',
            description: 'Accumulated extensive experience in managing complex cloud infrastructures and developing bespoke engineering tools.',
            highlights: [
                'Hands-on with Kubernetes, Terraform, and various CI/CD tools.',
                'Specialized in bridging the gap between legacy systems and modern cloud architectures.'
            ]
        }
    ];

    return (
        <section id="experience">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
                    Professional <span className="gradient-text">Journal</span>
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass"
                            style={{ padding: '2.5rem', position: 'relative' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{exp.role}</h3>
                                    <p style={{ color: 'var(--primary)', fontWeight: 600 }}>{exp.company}</p>
                                </div>
                                <div className="mono" style={{ fontSize: '0.9rem', opacity: 0.6 }}>{exp.period}</div>
                            </div>

                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '800px' }}>{exp.description}</p>

                            <ul style={{ listStyle: 'none' }}>
                                {exp.highlights.map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                        <span style={{ color: 'var(--primary)' }}>▹</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
