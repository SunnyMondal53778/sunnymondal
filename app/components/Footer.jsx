export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#home" className="nav-logo">
                            <span className="logo-icon">▶</span>
                            <span className="logo-text">SUNNY<span className="accent"> MONDAL</span></span>
                        </a>
                        <p className="footer-tagline">Hosted by Sunny Mondal — The Blueprint for the Modern Indian Entrepreneur.</p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Spotify">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>
                            </a>
                            <a href="#" className="social-link" aria-label="YouTube">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" /></svg>
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter/X">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                        </div>
                    </div>
                    <div className="footer-links-grid">
                        <div className="footer-col">
                            <h5>Podcast</h5>
                            <ul>
                                <li><a href="#episodes">Episodes</a></li>
                                <li><a href="#clips">Shorts</a></li>
                                <li><a href="#guests">Guests</a></li>
                                <li><a href="#">Playlists</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h5>Connect</h5>
                            <ul>
                                <li><a href="#newsletter">Newsletter</a></li>
                                <li><a href="#book">Book the Host</a></li>
                                <li><a href="#">Sponsorships</a></li>
                                <li><a href="#">Community</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h5>Listen</h5>
                            <ul>
                                <li><a href="#">Spotify</a></li>
                                <li><a href="#">YouTube</a></li>
                                <li><a href="#">Apple Podcasts</a></li>
                                <li><a href="#">Amazon Music</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 Sunny Mondal. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
