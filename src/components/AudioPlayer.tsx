'use client';

import { useState } from 'react';
import styles from './AudioPlayer.module.css';

export default function AudioPlayer() {
    const [activeMode, setActiveMode] = useState<string | null>(null);

    return (
        <div className={styles.player}>
            <div className={styles.display}>
                {activeMode ? `Playing: ${activeMode}...` : 'READY TO PLAY...'}
            </div>
            <div className={styles.controls}>
                <button
                    className={`${styles.button} ${activeMode === 'BEATS' ? styles.active : ''}`}
                    onClick={() => setActiveMode('BEATS')}
                >
                    Beats
                </button>
                <button
                    className={`${styles.button} ${activeMode === 'AUTOPLAY' ? styles.active : ''}`}
                    onClick={() => setActiveMode('AUTOPLAY')}
                >
                    Autoplay
                </button>
                <button
                    className={`${styles.button} ${activeMode === 'RECORD' ? styles.active : ''}`}
                    onClick={() => setActiveMode('RECORD')}
                >
                    Record Session
                </button>
            </div>
        </div>
    );
}
