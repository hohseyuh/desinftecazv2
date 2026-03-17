'use client'

import "./style/Footer.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="Footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2 className="footer-logo">DES/NFTEC</h2>
                        <p className="footer-tagline">
                            Mükəmməl rəqəmsal həllər üçün <br /> sizin etibarlı tərəfdaşınız.
                        </p>
                    </div>

                    <div className="footer-nav">
                        <div className="footer-group">
                            <h4>NAVİQASİYA</h4>
                            <a href="#hero">Ana Səhifə</a>
                            <a href="#about">Haqqımızda</a>
                            <a href="#services">Xidmətlər</a>
                            <a href="#projects">İşlərimiz</a>
                            <a href="#team">Komanda</a>
                            <a href="#contact">Əlaqə</a>
                        </div>
                        <div className="footer-group">
                            <h4>SOSİAL MEDİA</h4>
                            <a href="https://instagram.com/desinftec">Instagram</a>
                            <a href="https://www.linkedin.com/company/desinftec">LinkedIn</a>
                            {/* <a href="#">Behance</a>
                            <a href="#">Dribbble</a> */}
                        </div>
                        <div className="footer-group">
                            <h4>LEGAL</h4>
                            <a href="#">Gizlilik siyasəti</a>
                            <a href="#">İstifadə şərtləri</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">© {currentYear} Desinftec. Bütün hüquqlar qorunur.</p>
                    <div className="footer-bottom-links">
                        <span>Bakı, Azərbaycan</span>
                        <a href="mailto:hello@desinftec.az">info@desinftec.az</a>
                    </div>
                </div>

            </div>
            <div className="footer-signature">
                D/
            </div>
        </footer>
    );
}
