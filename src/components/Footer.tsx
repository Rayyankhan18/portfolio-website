
import styles from './Footer.module.css';
import SocialFlipButton from './ui/social-flip-button';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.socials}>
                    <SocialFlipButton />
                </div>
                <p className={styles.copy}>© 2026 Rayyan Khan. Bengaluru, India.</p>
                <p className={styles.sub}>Built with Next.js & Coffee</p>
            </div>
        </footer>
    );
}
