'use client';

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import styles from './BackgroundMusic.module.css';

export default function BackgroundMusic() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        // Attempt auto-play on load (browsers may block this without interaction)
        const playAudio = async () => {
            if (audioRef.current) {
                try {
                    audioRef.current.volume = 0.4;
                    await audioRef.current.play();
                    setIsPlaying(true);
                } catch (err) {
                    console.log("Autoplay blocked, waiting for user interaction");
                }
            }
        };
        playAudio();
    }, []);

    return (
        <div className={styles.container}>
            <audio ref={audioRef} loop src="/sergepavkinmusic-reflected-light-147979.mp3" />
            <button onClick={togglePlay} className={styles.button}>
                {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
            </button>
        </div>
    );
}
