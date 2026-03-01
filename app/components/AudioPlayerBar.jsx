'use client';
import { useState, useRef, useEffect } from 'react';

export default function AudioPlayerBar({ title, visible, onClose }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(12);
    const timerRef = useRef(null);

    useEffect(() => {
        if (visible) {
            startProgress();
        }
        return () => clearInterval(timerRef.current);
    }, [visible]);

    const startProgress = () => {
        clearInterval(timerRef.current);
        setIsPlaying(true);
        timerRef.current = setInterval(() => {
            setProgress(p => {
                if (p >= 100) { clearInterval(timerRef.current); return 100; }
                return p + 0.05;
            });
        }, 200);
    };

    const togglePlay = () => {
        if (isPlaying) { clearInterval(timerRef.current); setIsPlaying(false); }
        else { startProgress(); }
    };

    const handleClose = () => { clearInterval(timerRef.current); setIsPlaying(false); setProgress(0); onClose(); };

    const handleProgressClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setProgress(((e.clientX - rect.left) / rect.width) * 100);
    };

    return (
        <div className={`audio-player-bar${visible ? ' visible' : ''}`}>
            <div className="ap-bar-left">
                <div className="ap-avatar ap-av-1">RB</div>
                <div className="ap-info">
                    <span className="ap-title">{title || 'Ep. 347: The $100M Founder\'s Mindset'}</span>
                    <span className="ap-host">Sunny Mondal Podcast</span>
                </div>
            </div>
            <div className="ap-controls">
                <button className="ap-btn" aria-label="Previous">⏮</button>
                <button className="ap-btn ap-play" onClick={togglePlay} aria-label="Play/Pause">{isPlaying ? '⏸' : '▶'}</button>
                <button className="ap-btn" aria-label="Next">⏭</button>
            </div>
            <div className="ap-progress">
                <span className="ap-time">12:34</span>
                <div className="progress-bar" onClick={handleProgressClick}>
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>
                <span className="ap-time ap-total">1:42:00</span>
            </div>
            <button className="ap-close" onClick={handleClose} aria-label="Close player">✕</button>
        </div>
    );
}
