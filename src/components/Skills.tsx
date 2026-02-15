
import styles from './Skills.module.css';

const skills = [
    { category: "Languages", list: ["Python", "JavaScript", "TypeScript", "C++", "SQL"] },
    { category: "AI / ML", list: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Hugging Face", "OpenCV"] },
    { category: "Gen AI", list: ["LLM APIs", "RAG", "Prompt Engineering"] },
    { category: "Backend", list: ["FastAPI", "Flask", "REST APIs", "PostgreSQL", "Supabase"] },
    { category: "Frontend", list: ["React", "Next.js", "Flutter"] },
    { category: "Tools", list: ["Docker", "Git", "CI/CD", "Selenium", "Playwright"] }
];

export default function Skills() {
    return (
        <section className={styles.container}>
            <div className={styles.terminal}>
                <div className={styles.header}>
                    <div className={styles.dots}>
                        <span className={styles.dot} />
                        <span className={styles.dot} />
                        <span className={styles.dot} />
                    </div>
                    <span className={styles.title}>rayyan@portfolio:~/skills</span>
                </div>
                <div className={styles.content}>
                    {skills.map((skillGroup, index) => (
                        <div key={index} className={styles.line}>
                            <span className={styles.prompt}>$ list {skillGroup.category.toLowerCase().replace(' ', '-')}</span>
                            <br />
                            <span className={styles.output}>
                                {skillGroup.list.map((item, i) => (
                                    <span key={i} className={styles.item}>{item}</span>
                                ))}
                            </span>
                        </div>
                    ))}
                    <div className={styles.line}>
                        <span className={styles.prompt}>$ _</span>
                        <span className={styles.cursor} />
                    </div>
                </div>
            </div>
        </section>
    );
}
