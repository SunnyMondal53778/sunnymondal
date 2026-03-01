import Image from 'next/image';

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-bg-grid"></div>
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        Sunny Mondal · India&apos;s #1 Business Podcast · 1M+ Listeners
                    </div>
                    <h1 className="hero-title">
                        THE<br />
                        <span className="hero-title-accent">BLUEPRINT</span><br />
                        FOR THE MODERN<br />
                        <span className="hero-title-outline">INDIAN</span><br />
                        ENTREPRENEUR.
                    </h1>
                    <p className="hero-subtitle">
                        Raw, unfiltered conversations with the founders, CEOs, and visionaries
                        who are building India&apos;s future — one bold decision at a time.
                    </p>
                    <div className="hero-actions">
                        <a href="#episodes" className="btn-primary">
                            <span className="btn-icon">▶</span> Start Listening
                        </a>
                        <a href="#" className="btn-ghost">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                            </svg>
                            Listen on Spotify
                        </a>
                    </div>
                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-num">1M<span className="accent">+</span></span>
                            <span className="stat-label">Monthly Listeners</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <span className="stat-num">350<span className="accent">+</span></span>
                            <span className="stat-label">Episodes</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <span className="stat-num">#1</span>
                            <span className="stat-label">Business Podcast India</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="hero-image-glow"></div>
                    <div className="hero-image-frame">
                        <Image
                            src="/host.png"
                            alt="Sunny Mondal"
                            className="hero-image"
                            width={520}
                            height={693}
                            priority
                            style={{ objectFit: 'cover', objectPosition: 'top', width: '100%', height: '100%' }}
                        />
                        <div className="hero-image-overlay"></div>
                    </div>
                    <div className="hero-now-playing">
                        <div className="playing-icon">
                            <span className="bar"></span><span className="bar"></span>
                            <span className="bar"></span><span className="bar"></span>
                        </div>
                        <div className="playing-info">
                            <span className="playing-label">SUNNY MONDAL PODCAST</span>
                            <span className="playing-title">Ep. 347: The $100M Founder&apos;s Mindset</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-scroll-hint">
                <span>SCROLL</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
}
