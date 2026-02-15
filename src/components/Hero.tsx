'use client';

import { motion } from 'framer-motion';
import { Mouse } from 'lucide-react';
import styles from './Hero.module.css';

const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

export default function Hero() {
    return (
        <motion.section
            className={styles.hero}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <div className={styles.gridOverlay} />

            <div className={styles.content}>
                <motion.div variants={textVariant} className={styles.badge}>
                    <span className={styles.pulse} /> Available for Work
                </motion.div>

                <motion.h1 variants={textVariant} className={styles.title}>
                    RAYYAN<br />KHAN
                </motion.h1>

                <div className={styles.meta}>
                    <motion.p variants={textVariant} className={styles.role}>
                        AI ENGINEER &<br />DIGITAL CRAFTSMAN
                    </motion.p>

                    <motion.p variants={textVariant} className={styles.desc}>
                        Specializing in Generative AI, Computer Vision, and full-stack engineering.
                        Designing intelligent systems that bridge the gap between human intent and machine execution.
                    </motion.p>
                </div>
            </div>

            <motion.div
                className={styles.scroll}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1.5, duration: 1 } }}
            >
                <span className={styles.scrollText}>SCROLL TO EXPLORE</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <Mouse size={24} color="var(--subtext)" />
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
