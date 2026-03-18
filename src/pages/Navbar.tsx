'use client'

import { useState } from "react";
import "./style/Navbar.css";
import navData from "../data/nav.json";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <nav className={`navbar ${isMenuOpen ? 'is-open' : ''}`}>
                <div className="container navbar__inner">
                    <div className="navbar__logo">
                        D/
                    </div>
                    <div className="navbar__cta">
                        <a href={navData.ctaEmail} className="btn-primary">{navData.ctaLabel}</a>
                        <button
                            className={`btn-secondary ${isMenuOpen ? 'active' : ''}`}
                            onClick={toggleMenu}
                            aria-label="Menu"
                        >
                            <div className="menu-icon">
                                <span className="menu-line"></span>
                                <span className="menu-line"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`fullscreen-nav ${isMenuOpen ? 'is-active' : ''}`}>
                <div className="nav-overlay"></div>
                <div className="nav-content container">
                    <div className="nav-grid">
                        <div className="nav-main">
                            {navData.links.map((link, index) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="nav-link"
                                    onClick={() => setIsMenuOpen(false)}
                                    style={{ transitionDelay: `${0.1 + index * 0.05}s` }}
                                >
                                    <span className="nav-number">0{index + 1}</span>
                                    <span className="nav-text">{link.name}</span>
                                </a>
                            ))}
                        </div>
                        <div className="nav-footer">
                            <div className="nav-socials">
                                {navData.socials.map((s) => (
                                    <a key={s.name} href={s.href}>{s.name}</a>
                                ))}
                            </div>
                            <p className="nav-copyright">{navData.copyright}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
