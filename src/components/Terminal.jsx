import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', content: 'Welcome to Likith-OS v5.0.0 (LTS)' },
        { type: 'output', content: 'Type "help" to see available commands.' },
    ]);
    const scrollRef = useRef(null);

    const commands = {
        help: 'Available commands: about, skills, architecture, cost-optimization, contact, clear',
        about: 'Likith Sirigiri: Senior DevOps Engineer at ezee.ai. 5+ YOE. Specialist in Cloud & Security.',
        skills: 'Cloud: AWS, Azure | Tools: K8s, Terraform, Jenkins | Dev: Node.js, Python, React',
        architecture: 'I design secure, multi-cloud architectures with a "Security-First" philosophy.',
        'cost-optimization': 'Successfully reduced infrastructure costs by 40% using reserved instances and resource rightsizing.',
        contact: 'Email: likith.siri@gmail.com | LinkedIn: /in/likith-sirigiri',
    };

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.toLowerCase().trim();
            const newHistory = [...history, { type: 'input', content: `> ${input}` }];

            if (cmd === 'clear') {
                setHistory([]);
            } else if (commands[cmd]) {
                newHistory.push({ type: 'output', content: commands[cmd] });
                setHistory(newHistory);
            } else if (cmd !== '') {
                newHistory.push({ type: 'output', content: `Command not found: ${cmd}. Type "help" for assistance.` });
                setHistory(newHistory);
            }

            setInput('');
        }
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    return (
        <section id="terminal" style={{ paddingBottom: '0' }}>
            <div className="glass" style={{
                maxWidth: '800px',
                margin: '0 auto',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}>
                {/* Terminal Header */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.75rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
                    <span style={{ marginLeft: '1rem', fontSize: '0.8rem', opacity: 0.5, fontFamily: 'monospace' }}>bash — likith_sirigiri — 80x24</span>
                </div>

                {/* Terminal Body */}
                <div
                    ref={scrollRef}
                    style={{
                        height: '350px',
                        overflowY: 'auto',
                        padding: '1.5rem',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.9rem',
                        lineHeight: '1.6',
                        background: 'rgba(0,0,0,0.3)'
                    }}
                >
                    {history.map((line, i) => (
                        <div key={i} style={{
                            color: line.type === 'input' ? 'var(--primary)' : 'rgba(255,255,255,0.8)',
                            marginBottom: '0.25rem',
                            wordBreak: 'break-word'
                        }}>
                            {line.content}
                        </div>
                    ))}
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <span style={{ color: '#27c93f' }}>➜</span>
                        <span style={{ color: 'var(--secondary)' }}>~</span>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleCommand}
                            autoFocus
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'white',
                                outline: 'none',
                                flexGrow: 1,
                                fontFamily: 'inherit',
                                fontSize: 'inherit'
                            }}
                        />
                    </div>
                </div>
            </div>
            <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                Try typing <span className="mono" style={{ color: 'white' }}>"architecture"</span> or <span className="mono" style={{ color: 'white' }}>"skills"</span> above.
            </p>
        </section>
    );
};

export default Terminal;
