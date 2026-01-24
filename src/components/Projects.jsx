import React from 'react';
import { motion } from 'framer-motion';
import { Database, Shield, Layout, Settings } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Custom Mongo Dashboard',
            description: 'A bespoke administrative tool for MongoDB with private IP connectivity, detailed activity logging, and MFA authentication—features unavailable in premium standard tools.',
            tags: ['MongoDB', 'Security', 'React', 'Node.js'],
            icon: <Database size={40} />,
            image: '/assets/mongo-dashboard.png'
        },
        {
            title: 'Open Source SCA Tool',
            description: 'Developed an internal Software Composition Analysis (SCA) tool using purely open-source components to track and manage security vulnerabilities in dependencies.',
            tags: ['Security', 'Open Source', 'DevSecOps'],
            icon: <Shield size={40} />,
            image: '/assets/sca-tool.png'
        },
        {
            title: 'Internal Ops Dashboards',
            description: 'Engineered multiple high-performance internal dashboards for infrastructure monitoring, cloud cost tracking, and operational efficiency.',
            tags: ['Monitoring', 'Dashboards', 'Costing'],
            icon: <Layout size={40} />,
            image: null
        }
    ];

    return (
        <section id="projects">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
                    Strategic <span className="gradient-text">Engineering</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass card-hover"
                            style={{
                                padding: '0',
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden',
                                height: '100%'
                            }}
                        >
                            <div style={{ padding: '2.5rem', flexGrow: 1 }}>
                                <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>
                                    {project.icon}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
                                    {project.description}
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="mono"
                                            style={{
                                                fontSize: '0.7rem',
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                padding: '0.4rem 0.8rem',
                                                borderRadius: '5px',
                                                color: 'var(--text-muted)'
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {project.image && (
                                <div style={{
                                    height: '200px',
                                    overflow: 'hidden',
                                    borderTop: '1px solid var(--border)',
                                    position: 'relative'
                                }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            opacity: 0.6,
                                            transition: 'opacity 0.3s'
                                        }}
                                        onMouseEnter={(e) => e.target.style.opacity = 1}
                                        onMouseLeave={(e) => e.target.style.opacity = 0.6}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        background: 'rgba(5,5,5,0.8)',
                                        padding: '4px 10px',
                                        borderRadius: '4px',
                                        fontSize: '0.7rem',
                                        fontWeight: 600,
                                        color: 'var(--primary)',
                                        border: '1px solid var(--primary)'
                                    }}>
                                        INTERNAL TOOL PREVIEW
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
