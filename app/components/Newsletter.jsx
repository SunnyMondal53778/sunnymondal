'use client';
import { useState } from 'react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && email.includes('@')) {
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setEmail('');
            }, 4000);
        }
    };

    return (
        <section className="newsletter-section" id="newsletter">
            <div className="container">
                <div className="newsletter-card">
                    <div className="newsletter-glow"></div>
                    <div className="nl-content">
                        <div className="section-tag">THE INSIDER</div>
                        <h2 className="nl-title">Join <span className="accent">1M+</span> Listeners.<br />Get the Weekly Edge.</h2>
                        <p className="nl-desc">Every Sunday — curated insights from the week&apos;s episode, plus exclusive content, guest takeaways, and the one idea that will change how you think about building.</p>
                        <form className="nl-form" onSubmit={handleSubmit}>
                            <div className="nl-input-group">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="nl-input"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    disabled={submitted}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="nl-btn"
                                    disabled={submitted}
                                    style={submitted ? { background: '#22c55e', color: '#fff' } : {}}
                                >
                                    {submitted ? "✓ You're In!" : 'Subscribe Free'}
                                </button>
                            </div>
                            <p className="nl-fine-print">No spam. Unsubscribe anytime. 100% free.</p>
                        </form>
                    </div>
                    <div className="nl-deco">
                        <div className="nl-deco-num">1M<span className="accent">+</span></div>
                        <div className="nl-deco-sub">subscribers</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
