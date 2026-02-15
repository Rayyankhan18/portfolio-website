
import styles from './Testimonials.module.css';

const reviews = [
    {
        text: "Finally, a soundscape that drowns out my inner critic and fills the space with calm.",
        author: "Anxious Andy",
        rating: "4.5/5"
    },
    {
        text: "I played some ambient during my weekly existential meltdown. 10/10, highly recommend.",
        author: "Reflective Rachel",
        rating: "5.0/5"
    },
    {
        text: "The only thing more relaxing than this is an empty inbox…which I’ll never know.",
        author: "Inbox Ian",
        rating: "5.0/5"
    },
    {
        text: "I haven’t felt this calm and at ease since my last vacation all the way back in... 2015.",
        author: "Nostalgic Nick",
        rating: "4.0/5"
    },
    {
        text: "I finally found a moment of peace... that is, until my boss's email shattered the calm.",
        author: "Overwhelmed Oliver",
        rating: "5.0/5"
    }
];

export default function Testimonials() {
    return (
        <section className={styles.container}>
            <h2 className={styles.header}>Rated by Overthinkers</h2>
            <div className={styles.grid}>
                {reviews.map((review, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.rating}>{review.rating}</div>
                        <p className={styles.text}>"{review.text}"</p>
                        <div className={styles.author}>— {review.author}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
