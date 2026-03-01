'use client';
import { useState } from 'react';

const guests = [
    { id: 1, initials: 'RB', avatarClass: 'guest-av-1', name: 'Ritesh Bansal', role: 'Founder & CEO, TechNova', eps: '3 Episodes', search: 'ritesh bansal' },
    { id: 2, initials: 'AP', avatarClass: 'guest-av-2', name: 'Ananya Patel', role: 'Partner, Peak Ventures', eps: '2 Episodes', search: 'ananya patel' },
    { id: 3, initials: 'VS', avatarClass: 'guest-av-3', name: 'Vikram Singh', role: 'Author & Performance Coach', eps: '1 Episode', search: 'vikram singh' },
    { id: 4, initials: 'NK', avatarClass: 'guest-av-4', name: 'Neha Kumar', role: 'CFO, Zenith Capital', eps: '2 Episodes', search: 'neha kumar' },
    { id: 5, initials: 'SM', avatarClass: 'guest-av-5', name: 'Suresh Mehta', role: 'CEO, BoldBrands India', eps: '1 Episode', search: 'suresh mehta' },
    { id: 6, initials: 'PG', avatarClass: 'guest-av-6', name: 'Priya Gupta', role: '3x Founder, BuildLab', eps: '1 Episode', search: 'priya gupta' },
];

export default function Guests() {
    const [search, setSearch] = useState('');

    const visible = guests.filter(g => {
        const q = search.toLowerCase();
        return g.search.includes(q) || g.role.toLowerCase().includes(q);
    });

    return (
        <section className="guests-section" id="guests">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">GUEST DIRECTORY</div>
                    <h2 className="section-title">World-Class Guests</h2>
                    <div className="search-bar">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search by name or company..."
                            className="search-input"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>
                </div>
                <div className="guests-grid" id="guestsGrid">
                    {visible.map(g => (
                        <div key={g.id} className="guest-card">
                            <div className={`guest-avatar ${g.avatarClass}`}>{g.initials}</div>
                            <div className="guest-info">
                                <h4 className="guest-name">{g.name}</h4>
                                <p className="guest-role">{g.role}</p>
                                <span className="guest-ep-count">{g.eps}</span>
                            </div>
                            <div className="guest-arrow">→</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
