const clips = [
    { id: 1, initials: 'RB', avatarClass: 'clip-av-1', duration: '1:47', title: '"Most founders fail at this one thing..."', views: '4.2M views' },
    { id: 2, initials: 'AP', avatarClass: 'clip-av-2', duration: '2:15', title: '"The fundraising mistake that kills startups"', views: '3.1M views' },
    { id: 3, initials: 'VS', avatarClass: 'clip-av-3', duration: '0:58', title: '"Wake up at 5AM and your life changes"', views: '6.8M views' },
    { id: 4, initials: 'NK', avatarClass: 'clip-av-4', duration: '1:33', title: '"Invest this ₹5000 before you invest anything else"', views: '2.9M views' },
];

export default function Clips() {
    return (
        <section className="clips-section" id="clips">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">SHORTS &amp; CLIPS</div>
                    <h2 className="section-title">Bite-Sized Brilliance</h2>
                    <p className="section-subtitle">The moments that hit different. Share them.</p>
                </div>
                <div className="clips-grid">
                    {clips.map(clip => (
                        <div key={clip.id} className="clip-card">
                            <div className="clip-thumbnail">
                                <div className={`clip-avatar ${clip.avatarClass}`}>{clip.initials}</div>
                                <div className="clip-play">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <span className="clip-duration">{clip.duration}</span>
                            </div>
                            <div className="clip-info">
                                <p className="clip-title">{clip.title}</p>
                                <span className="clip-views">{clip.views}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
