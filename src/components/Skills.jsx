import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Cloud Platforms',
            skills: ['AWS (Architecture & Costing)', 'Azure', 'Multi-cloud Strategy', 'IAAS/PAAS']
        },
        {
            title: 'DevOps & CI/CD',
            skills: ['Kubernetes', 'Docker', 'Jenkins', 'GitHub Actions', 'Terraform', 'Ansible']
        },
        {
            title: 'Security & Tools',
            skills: ['SCA (Software Composition Analysis)', 'MFA Implementation', 'Custom Security Dashboards', 'MongoDB Admin']
        },
        {
            title: 'Engineering',
            skills: ['Node.js', 'React', 'Python Scripting', 'Shell Scripting', 'API Integration']
        }
    ];

    return (
        <section id="skills" style={{ paddingBottom: '10rem' }}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
                    Technical <span className="gradient-text">Stack</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {skillCategories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderLeft: '3px solid var(--primary)', paddingLeft: '1rem' }}>
                                {cat.title}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {cat.skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="glass"
                                        style={{
                                            padding: '0.75rem 1.25rem',
                                            fontSize: '0.9rem',
                                            fontWeight: 500
                                        }}
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
