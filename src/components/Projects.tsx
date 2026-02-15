'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './Projects.module.css';

const projects = [
    {
        title: "Krishi.AI",
        tagline: "Agricultural Intelligence",
        tech: ["IoT", "ML", "Yield Prediction"],
        desc: "International Winner at Startup Mahakumbh. Platform integrating IoT sensor data with ML models for crop monitoring.",
        size: "large"
    },
    {
        title: "SmartLedger.AI",
        tagline: "Fintech Mobile Platform",
        tech: ["Flutter", "Clean Arch", "Native"],
        desc: "Architected and built the native iOS/Android application. Scalable fintech solution processing secure transactions.",
        size: "medium",
        link: "https://www.smartledger.ai"
    },
    {
        title: "Luna.AI",
        tagline: "Multimodal Assistant",
        tech: ["LLM", "Voice", "RAG"],
        desc: "Multimodal AI assistant supporting voice and text inputs with optimized response performance through caching.",
        size: "medium"
    },
    {
        title: "PRISM Robot",
        tagline: "Humanoid Robot",
        tech: ["OpenCV", "NVIDIA Jetson", "Robotics"],
        desc: "World Book of Records Gold Medal. CV-driven humanoid robot built with NVIDIA Jetson Nano.",
        size: "wide"
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
};

export default function Projects() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.heading}>Selected Work</h2>
                <p className={styles.subheading}>Engineering solutions at scale.</p>
            </div>

            <motion.div
                className={styles.grid}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {projects.map((project, index) => {
                    const cardContent = (
                        <>
                            <div className={styles.cardHeader}>
                                <div className={styles.tags}>
                                    {project.tech.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                                </div>
                                <ArrowUpRight className={styles.arrow} />
                            </div>

                            <div className={styles.cardBody}>
                                <h3 className={styles.title}>{project.title}</h3>
                                <p className={styles.tagline}>{project.tagline}</p>
                                <p className={styles.desc}>{project.desc}</p>
                            </div>
                        </>
                    );

                    if (project.link) {
                        return (
                            <motion.a
                                key={index}
                                variants={item}
                                className={`${styles.card} ${styles[project.size]}`}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {cardContent}
                            </motion.a>
                        );
                    }

                    return (
                        <motion.div
                            key={index}
                            variants={item}
                            className={`${styles.card} ${styles[project.size]}`}
                        >
                            {cardContent}
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}
