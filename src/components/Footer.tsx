
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.socials}>
                    <a href="https://linkedin.com/in/rayyan-khan" target="_blank" className={styles.link}>LinkedIn</a>
                    <a href="https://github.com/Rayyankhan18" target="_blank" className={styles.link}>GitHub</a>
                    <a href="mailto:rayyanbusinessofficial@gmail.com" className={styles.link}>Email</a>
                </div>
                <p className={styles.copy}>© 2026 Rayyan Khan. Bengaluru, India.</p>
                <p className={styles.sub}>Built with Next.js & Coffee</p>
            </div>
        </footer>
    );
}
