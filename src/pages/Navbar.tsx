'use client'

import { useState } from "react";
import "./style/Navbar.css";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: "ANA SƏHİFƏ", href: "#hero" },
        { name: "HAQQIMIZDA", href: "#about" },
        { name: "XİDMƏTLƏR", href: "#services" },
        { name: "PROYEKTLƏR", href: "#projects" },
        { name: "KOMANDA", href: "#team" },
        { name: "ƏLAQƏ", href: "#contact" }
    ];

    return (
        <>
            <nav className={`navbar ${isMenuOpen ? 'is-open' : ''}`}>
                <div className="container navbar__inner">
                    <div className="navbar__logo">
                        D/
                    </div>
                    <div className="navbar__cta">
                        <a href="mailto:info@desinftec.az" className="btn-primary">Əlaqə</a>
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
                            {navLinks.map((link, index) => (
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
                                <a href="https://instagram.com/desinftec">INSTAGRAM</a>
                                <a href="https://www.linkedin.com/company/desinftec">LINKEDIN</a>
                            </div>
                            <p className="nav-copyright">© 2026 DESINFTEC. BÜTÜN HÜQUQLAR QORUNUR.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
