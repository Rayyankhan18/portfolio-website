'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight, MousePointer2 } from 'lucide-react';
import styles from './Projects.module.css';
import { MouseEvent } from 'react';

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

function SpotlightCard({ children, className, ...props }: any) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            className={`${styles.card} ${className}`}
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 0.995 }}
            {...props}
        >
            <motion.div
                className={styles.spotlight}
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
                }}
            />
            <div className={styles.cardContent}>{children}</div>
        </motion.div>
    );
}

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

                    const Wrapper = project.link ? motion.a : motion.div;
                    const props = project.link
                        ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
                        : {};

                    return (
                        <SpotlightCard
                            key={index}
                            variants={item}
                            className={styles[project.size]}
                            {...props}
                        >
                            {project.link ? (
                                <a {...props} style={{ textDecoration: 'none', color: 'inherit', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    {cardContent}
                                </a>
                            ) : (
                                cardContent
                            )}
                        </SpotlightCard>
                    );
                })}
            </motion.div>
        </section>
    );
}
