'use client'

import "./style/CTA.css";
import ctaData from "../data/cta.json";

export default function CTA() {
    return (
        <section className="CTA-Section" id="contact">
            <div className="cta-card">
                <div className="cta-content">
                    <h2 className="cta-title">
                        {ctaData.title} <br />
                        <span className="accent">{ctaData.titleAccent}</span>
                    </h2>
                    <p className="cta-desc">{ctaData.description}</p>

                    <div className="cta-actions">
                        <a href={ctaData.primaryBtn.href} className="cta-primary-btn">
                            {ctaData.primaryBtn.label}
                            <span className="btn-icon">{ctaData.primaryBtn.icon}</span>
                        </a>
                        <a href={ctaData.secondaryBtn.href} className="cta-secondary-btn">
                            {ctaData.secondaryBtn.label}
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
