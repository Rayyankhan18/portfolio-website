
import styles from './Science.module.css';

const facts = [
    {
        year: "2020",
        source: "Psych Central",
        text: "Music reduces heart rate and cortisol levels while boosting endorphins, enhancing overall well-being."
    },
    {
        year: "2015",
        source: "Sleep Medicine Reviews",
        text: "Music therapy, especially ambient or classical music, improves sleep quality across various age groups."
    },
    {
        year: "2013",
        source: "PLoS ONE",
        text: "Listening to relaxing music post-stress helps lower heart rate and blood pressure faster than silence."
    },
    {
        year: "2014",
        source: "Memory & Cognition",
        text: "Instrumental music often triggers nostalgia, which is associated with bittersweet emotions, including tears."
    }
];

export default function Science() {
    return (
        <section className={styles.container}>
            <h2 className={styles.header}>Baked in Science <span className={styles.icon}>⌬</span></h2>
            <div className={styles.grid}>
                {facts.map((fact, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.meta}>
                            <span className={styles.year}>{fact.year}</span>
                            <span className={styles.source}>{fact.source}</span>
                        </div>
                        <p className={styles.text}>{fact.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
