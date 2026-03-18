'use client'

import React from "react";
import "./style/Testimonials.css";
import testimonialsData from "../data/testimonials.json";

export default function Testimonials() {
    return (
        <section className="testimonials">
            <div className="section-header scroll">
                <h2 className="section-title">Rəylər</h2>
            </div>

            <div className="testimonials__viewport">
                <div className="testimonials__track">
                    {/* Render twice for seamless marquee loop */}
                    {[...testimonialsData, ...testimonialsData].map((t, i) => (
                        <div key={i} className="testimonials__card">
                            <div className="card-inner">
                                <div className="card-header">
                                    <h3 className="card-company-name">{t.company}</h3>
                                </div>
                                <div className="card-content-area">
                                    <div className="card-quote-wrapper">
                                        <p className="card-quote-text">{t.quote}</p>
                                    </div>
                                    <div className="card-author-info">
                                        <span className="card-author-name">{t.author}</span>
                                        <span className="card-author-role">{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
