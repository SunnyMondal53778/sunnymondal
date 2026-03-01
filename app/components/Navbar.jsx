'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
                <div className="nav-container">
                    <a href="#home" className="nav-logo">
                        <span className="logo-icon">▶</span>
                        <span className="logo-text">SUNNY<span className="accent"> MONDAL</span></span>
                    </a>
                    <ul className="nav-links">
                        <li><a href="#episodes" className="nav-link">Episodes</a></li>
                        <li><a href="#clips" className="nav-link">Clips</a></li>
                        <li><a href="#guests" className="nav-link">Guests</a></li>
                        <li><a href="#newsletter" className="nav-link">Newsletter</a></li>
                        <li><a href="#book" className="nav-cta">Be Our Guest</a></li>
                    </ul>
                    <button
                        className={`hamburger${menuOpen ? ' open' : ''}`}
                        aria-label="Menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </nav>

            {/* Mobile nav overlay */}
            <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
                <a href="#episodes" className="nav-link" onClick={closeMenu}>Episodes</a>
                <a href="#clips" className="nav-link" onClick={closeMenu}>Clips</a>
                <a href="#guests" className="nav-link" onClick={closeMenu}>Guests</a>
                <a href="#newsletter" className="nav-link" onClick={closeMenu}>Newsletter</a>
                <a href="#book" className="nav-cta" onClick={closeMenu}>Be Our Guest</a>
            </div>
        </>
    );
}
