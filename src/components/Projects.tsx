'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './Projects.module.css';

const projects = [
    {
        title: "Krishi.AI",
        tagline: "Agricultural Intelligence",
        tech: ["IoT", "ML", "Yield Prediction"],
        desc: "International Winner at Startup Mahakumbh. Platform integrating IoT sensor data with ML models for crop monitoring.",
        size: "large",
        number: "01",
        color: "#4ade80",
    },
    {
        title: "SmartLedger.AI",
        tagline: "Fintech Mobile Platform",
        tech: ["Flutter", "Clean Arch", "Native"],
        desc: "Architected and built the native iOS/Android application. Scalable fintech solution processing secure transactions.",
        size: "medium",
        link: "https://www.smartledger.ai",
        number: "02",
        color: "#60a5fa",
    },
    {
        title: "Luna.AI",
        tagline: "Multimodal Assistant",
        tech: ["LLM", "Voice", "RAG"],
        desc: "Multimodal AI assistant supporting voice and text inputs with optimized response performance through caching.",
        size: "medium",
        link: "https://meet-luna-ai.vercel.app",
        number: "03",
        color: "#a78bfa",
    },
    {
        title: "PRISM Robot",
        tagline: "Humanoid Robot",
        tech: ["OpenCV", "NVIDIA Jetson", "Robotics"],
        desc: "World Book of Records Gold Medal. CV-driven humanoid robot built with NVIDIA Jetson Nano.",
        size: "wide",
        number: "04",
        color: "#fb923c",
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12 }
    }
};

const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
};

function ProjectCard({ project, className }: { project: typeof projects[0], className?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(e: React.MouseEvent) {
        const { left, top } = (e.currentTarget as HTMLElement).getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    }

    const inner = (
        <>
            <motion.div
                className={styles.spotlight}
                style={{
                    background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, ${project.color}18, transparent 70%)`,
                }}
            />
            <div className={styles.cardNumber}>{project.number}</div>
            <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                    <div className={styles.tags}>
                        {project.tech.map(t => (
                            <span key={t} className={styles.tag}>{t}</span>
                        ))}
                    </div>
                    <ArrowUpRight className={styles.arrow} size={20} />
                </div>

                <div className={styles.cardBody}>
                    <p className={styles.tagline}>{project.tagline}</p>
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.desc}>{project.desc}</p>
                </div>
            </div>
            <div className={styles.accentLine} style={{ background: project.color }} />
        </>
    );

    if (project.link) {
        return (
            <motion.a
                variants={item}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.card} ${className ?? ''}`}
                onMouseMove={handleMouseMove}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                style={{ '--card-color': project.color } as React.CSSProperties}
            >
                {inner}
            </motion.a>
        );
    }

    return (
        <motion.div
            variants={item}
            className={`${styles.card} ${className ?? ''}`}
            onMouseMove={handleMouseMove}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            style={{ '--card-color': project.color } as React.CSSProperties}
        >
            {inner}
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <span className={styles.label}>Selected Work</span>
                    <h2 className={styles.heading}>Engineering solutions<br />at scale.</h2>
                </div>
                <p className={styles.subheading}>A collection of projects spanning AI,<br />mobile, robotics, and infrastructure.</p>
            </div>

            <motion.div
                className={styles.grid}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        className={styles[project.size]}
                    />
                ))}
            </motion.div>
        </section>
    );
}
