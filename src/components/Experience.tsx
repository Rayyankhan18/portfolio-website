'use client';

import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const experiences = [
    {
        role: "AI Engineer",
        company: "SmartLedger.AI",
        period: "Oct 2024 – Present",
        desc: "Building AI features for a fintech mobile platform. Developed LLM-based RAG assistants and OCR pipelines.",
        tech: ["RAG", "LLM", "Python"]
    },
    {
        role: "Generative AI Intern",
        company: "Sonata Software",
        period: "Jul 2024 – Aug 2024",
        desc: "Developed LLM-based PoC tools and ML pipelines for structured data analysis.",
        tech: ["Machine Learning", "Data Analysis"]
    },
    {
        role: "Web Developer & AI Intern",
        company: "xpagefy.com Ltd",
        period: "Jun 2023 – Jun 2024",
        desc: "Launched AI-powered e-commerce apps (Kdabra AI, Enchantrix AI). Built automated content generation pipelines.",
        tech: ["React", "Node.js", "AI Integration"]
    }
];

export default function Experience() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    CAREER HISTORY
                </motion.h2>

                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={styles.item}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className={styles.marker}>
                                <div className={styles.dot} />
                                <div className={styles.line} />
                            </div>

                            <div className={styles.content}>
                                <span className={styles.period}>{exp.period}</span>
                                <h3 className={styles.role}>{exp.role} <span className={styles.at}>@</span> {exp.company}</h3>
                                <p className={styles.desc}>{exp.desc}</p>
                                <div className={styles.chips}>
                                    {exp.tech.map(t => <span key={t} className={styles.chip}>{t}</span>)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
