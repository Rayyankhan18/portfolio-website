import styles from './Marquee.module.css';

interface MarqueeProps {
    items: { text: string; icon?: string }[];
    speed?: number;
}

export default function Marquee({ items }: MarqueeProps) {
    return (
        <div className={styles.marquee}>
            <div className={styles.loop}>
                {/* Render items multiple times to ensure seamless loop */}
                {[...Array(10)].map((_, i) => (
                    items.map((item, index) => (
                        <span key={`${i}-${index}`} className={styles.item}>
                            {item.text} {item.icon && <span className={styles.icon}>{item.icon}</span>}
                        </span>
                    ))
                ))}
            </div>
        </div>
    );
}
