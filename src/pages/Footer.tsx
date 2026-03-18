'use client'

import "./style/Footer.css";
import footerData from "../data/footer.json";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="Footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2 className="footer-logo">{footerData.logo}</h2>
                        <p className="footer-tagline">{footerData.tagline}</p>
                    </div>

                    <div className="footer-nav">
                        {footerData.nav.map((group) => (
                            <div key={group.heading} className="footer-group">
                                <h4>{group.heading}</h4>
                                {group.links.map((link) => (
                                    <a key={link.label} href={link.href}>{link.label}</a>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">© {currentYear} Desinftec. Bütün hüquqlar qorunur.</p>
                    <div className="footer-bottom-links">
                        <span>{footerData.location}</span>
                        <a href={`mailto:${footerData.contact}`}>{footerData.contact}</a>
                    </div>
                </div>
            </div>
            <div className="footer-signature">
                {footerData.signature}
            </div>
        </footer>
    );
}
