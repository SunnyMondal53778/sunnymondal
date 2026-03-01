'use client';
import { useState } from 'react';

const episodes = [
    { id: 1, initials: 'RB', avatarClass: 'ep-avatar-1', num: 'EP. 347', category: 'founders', duration: '1h 42m', title: "The $100M Founder's Mindset: Ritesh Bansal on Scaling Against All Odds", desc: "From a garage startup to a unicorn in 5 years — Ritesh breaks down every decision that mattered.", views: '2.4M views', featured: true },
    { id: 2, initials: 'AP', avatarClass: 'ep-avatar-2', num: 'EP. 346', category: 'investors', duration: '58m', title: "What VCs Don't Tell You: Ananya Patel on the Truth About Funding", desc: "Breaking down term sheets, dilution, and what investors actually look for.", views: '1.8M views' },
    { id: 3, initials: 'VS', avatarClass: 'ep-avatar-3', num: 'EP. 345', category: 'mindset', duration: '1h 15m', title: "The Discipline Protocol: Vikram Singh's 5AM System That Built an Empire", desc: "Morning routines aren't hype — Vikram's data-driven approach to peak performance.", views: '1.2M views' },
    { id: 4, initials: 'NK', avatarClass: 'ep-avatar-4', num: 'EP. 344', category: 'finance', duration: '1h 02m', title: "Building Wealth at 25: Neha Kumar's Framework for Financial Freedom", desc: "The exact steps she took to go from zero net worth to financial independence in 7 years.", views: '980K views' },
    { id: 5, initials: 'SM', avatarClass: 'ep-avatar-5', num: 'EP. 343', category: 'founders', duration: '1h 30m', title: "Bootstrapped to Billions: Suresh Mehta's No-VC Path to Dominance", desc: "Why he turned down Sequoia twice and how that decision changed everything.", views: '760K views' },
    { id: 6, initials: 'PG', avatarClass: 'ep-avatar-6', num: 'EP. 342', category: 'mindset', duration: '47m', title: "Failure is Data: Priya Gupta on How She Failed 3 Startups Before Finding Gold", desc: "The counterintuitive truth about failure that most entrepreneurship books won't tell you.", views: '620K views' },
];

const filters = ['all', 'founders', 'investors', 'mindset', 'finance'];

export default function Episodes({ onPlay }) {
    const [activeFilter, setActiveFilter] = useState('all');
    const [search, setSearch] = useState('');

    const visible = episodes.filter(ep => {
        const matchFilter = activeFilter === 'all' || ep.category === activeFilter;
        const matchSearch = ep.title.toLowerCase().includes(search.toLowerCase()) || ep.desc.toLowerCase().includes(search.toLowerCase());
        return matchFilter && matchSearch;
    });

    const PlayIcon = () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
        </svg>
    );

    const EyeIcon = () => (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
        </svg>
    );

    return (
        <section className="episodes" id="episodes">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">NEW EPISODES</div>
                    <h2 className="section-title">Fresh Off the Mic</h2>
                    <div className="search-bar">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search episodes, guests..."
                            className="search-input"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                <div className="filter-tabs">
                    {filters.map(f => (
                        <button
                            key={f}
                            className={`filter-tab${activeFilter === f ? ' active' : ''}`}
                            onClick={() => setActiveFilter(f)}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="episodes-grid">
                    {visible.map(ep => (
                        <article
                            key={ep.id}
                            className={`episode-card${ep.featured ? ' featured-episode' : ''}`}
                            onClick={() => onPlay && onPlay(ep.title)}
                        >
                            <div className="ep-image-wrapper">
                                <div className={`ep-avatar ${ep.avatarClass}`}>{ep.initials}</div>
                                <button className="ep-play-btn" onClick={e => { e.stopPropagation(); onPlay && onPlay(ep.title); }}>
                                    <PlayIcon />
                                </button>
                                <span className="ep-number">{ep.num}</span>
                            </div>
                            <div className="ep-content">
                                <div className="ep-meta">
                                    <span className="ep-category">{ep.category.toUpperCase()}</span>
                                    <span className="ep-duration">{ep.duration}</span>
                                </div>
                                <h3 className="ep-title">{ep.title}</h3>
                                <p className="ep-desc">{ep.desc}</p>
                                <div className="ep-footer">
                                    <div className="ep-views"><EyeIcon />{ep.views}</div>
                                    <button className="ep-more-btn">Listen Now →</button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="section-footer">
                    <a href="#" className="btn-outline">View All 350+ Episodes →</a>
                </div>
            </div>
        </section>
    );
}
