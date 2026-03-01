'use client';
import { useState, useEffect, useRef } from 'react';

const testimonials = [
    { id: 't1', initials: 'SR', quote: '"This podcast changed how I think about scaling. It\'s required listening for every founder in my portfolio."', name: 'Sanjay Rao', title: 'Managing Partner, Nexus Ventures' },
    { id: 't2', initials: 'DM', quote: '"The episode on fundraising psychology completely shifted how I pitch investors. Raised ₹20Cr the next month."', name: 'Divya Menon', title: 'Co-Founder, GrowFast' },
    { id: 't3', initials: 'AK', quote: '"Raw, real, and relentlessly useful. There\'s no podcast in India that comes close to this level of depth."', name: 'Arjun Khanna', title: 'CEO, ScaleUp India' },
];

export default function SocialProof() {
    const [current, setCurrent] = useState(0);
    const timerRef = useRef(null);

    const startAuto = () => {
        timerRef.current = setInterval(() => {
            setCurrent(c => (c + 1) % testimonials.length);
        }, 5000);
    };

    useEffect(() => {
        startAuto();
        return () => clearInterval(timerRef.current);
    }, []);

    const goTo = (i) => {
        clearInterval(timerRef.current);
        setCurrent(i);
        startAuto();
    };

    return (
        <section className="social-proof">
            <div className="container">
                <div className="proof-grid">
                    <div className="proof-stat">
                        <span className="proof-num">1<span className="accent">M</span>+</span>
                        <span className="proof-label">Monthly Listeners</span>
                    </div>
                    <div className="proof-stat">
                        <span className="proof-num">350<span className="accent">+</span></span>
                        <span className="proof-label">Episodes</span>
                    </div>
                    <div className="proof-stat">
                        <span className="proof-num">4.9<span className="accent">★</span></span>
                        <span className="proof-label">Average Rating</span>
                    </div>
                    <div className="proof-stat">
                        <span className="proof-num">120<span className="accent">+</span></span>
                        <span className="proof-label">World-Class Guests</span>
                    </div>
                </div>

                <div className="testimonials">
                    {testimonials.map((t, i) => (
                        <div key={t.id} className={`testimonial${i === current ? ' active' : ''}`}>
                            <p className="t-quote">{t.quote}</p>
                            <div className="t-author">
                                <div className="t-avatar">{t.initials}</div>
                                <div>
                                    <span className="t-name">{t.name}</span>
                                    <span className="t-title">{t.title}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="t-dots">
                    {testimonials.map((_, i) => (
                        <button key={i} className={`t-dot${i === current ? ' active' : ''}`} onClick={() => goTo(i)} aria-label={`Testimonial ${i + 1}`} />
                    ))}
                </div>
            </div>
        </section>
    );
}
