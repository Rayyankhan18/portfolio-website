
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import BackgroundMusic from '@/components/BackgroundMusic';

export default function Home() {
  const marquee1 = [
    { text: "AI Engineer", icon: "🤖" },
    { text: "Generative AI", icon: "✨" },
    { text: "Computer Vision", icon: "👁️" },
    { text: "Full Stack", icon: "💻" },
  ];

  const marquee2 = [
    { text: "Python", icon: "🐍" },
    { text: "TensorFlow", icon: "🧠" },
    { text: "React", icon: "⚛️" },
    { text: "Next.js", icon: "▲" },
  ];

  return (
    <main>
      <Hero />
      <Marquee items={marquee1} />
      <Skills />
      <Experience />
      <Marquee items={marquee2} />
      <Projects />
      <Footer />
      <BackgroundMusic />
    </main>
  );
}
