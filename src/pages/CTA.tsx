'use client'

import "./style/CTA.css";

export default function CTA() {
    return (
        <section className="CTA-Section" id="contact">
            <div className="cta-card">
                <div className="cta-content">
                    <h2 className="cta-title">
                        Növbəti böyük layihənizi <br />
                        <span className="accent">birlikdə yaradaq.</span>
                    </h2>
                    <p className="cta-desc">
                        İdeyanızı real, işlək və gözəl rəqəmsal məhsula çevirmək üçün bizə yazın. 
                        Komandamız 24 saat ərzində sizinlə əlaqə saxlayacaq.
                    </p>
                    
                    <div className="cta-actions">
                        <a href="mailto:info@desinftec.az" className="cta-primary-btn">
                            Layihəyə başla
                            <span className="btn-icon">→</span>
                        </a>
                        <a href="mailto:info@desinftec.az" className="cta-secondary-btn">
                            Pulsuz məsləhət al
                        </a>
                    </div>
                </div>
                
                <div className="cta-visual">
                    <div className="glow-circle"></div>
                </div>
            </div>
        </section>
    );
}
