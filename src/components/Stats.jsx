import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Zap, Users, ShieldCheck } from 'lucide-react';

const Stats = () => {
    const stats = [
        {
            label: 'Cloud Cost Reduction',
            value: '40%',
            icon: <TrendingDown size={24} />,
            desc: 'Optimized AWS/Azure spending for fintech products.'
        },
        {
            label: 'Deployment Speed',
            value: '3x',
            icon: <Zap size={24} />,
            desc: 'Increased CI/CD efficiency through pipeline automation.'
        },
        {
            label: 'Security Coverage',
            value: '100%',
            icon: <ShieldCheck size={24} />,
            desc: 'Implemented SCA & MFA across all internal tools.'
        },
        {
            label: 'Project Delivery',
            value: '10+',
            icon: <Users size={24} />,
            desc: 'Custom internal dashboards & tools developed.'
        }
    ];

    return (
        <section id="stats" style={{ paddingTop: '0' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.5rem'
            }}>
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass"
                        style={{
                            padding: '2rem',
                            textAlign: 'center',
                            borderBottom: '4px solid var(--primary)'
                        }}
                    >
                        <div style={{
                            color: 'var(--primary)',
                            marginBottom: '1rem',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            {stat.icon}
                        </div>
                        <div style={{
                            fontSize: '2.5rem',
                            fontWeight: 800,
                            marginBottom: '0.5rem',
                            fontFamily: 'JetBrains Mono'
                        }}>
                            {stat.value}
                        </div>
                        <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.5rem' }}>
                            {stat.label}
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                            {stat.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
