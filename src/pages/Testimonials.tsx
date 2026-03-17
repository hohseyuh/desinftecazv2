'use client'

import React from "react";
import "./style/Testimonials.css";

const testimonialsData = [
    { author: "Emin Məmmədov", role: "Founder/CEO", quote: "\"Desinftec komandası ideyamızı qısa zamanda real məhsula çevirdi. Texniki dəqiqlik və dizayn yanaşması mükəmməldir.\"", company: "Eracon" },

    { author: "Ravan Həsənov", role: "Founder/CEO", quote: "\"Texniki tərəfdə göstərdikləri çeviklik və keyfiyyət bizi heyran etdi. Tamamilə etibar etdiyimiz tərəfdaşdırlar.\"", company: "QR avan" },

    { author: "Səbuhi Vəliyev", role: "Manager", quote: "\"Desinftec komandası ideyamızı qısa zamanda real məhsula çevirdi. Texniki dəqiqlik və dizayn yanaşması mükəmməldir.\"", company: "SV Perfume" },

    { author: "Lalə Məmmədova", role: "Smeta Mütəxəssisi", quote: "\"İş prosesi çox şəffaf və peşəkar idi. Prototipinq mərhələsindən tətbiqə qədər hər şey yüksək səviyyədə icra olundu.\"", company: "Eracon" },

    { author: "Fariz Mirimov", role: "Founder/CEO", quote: "\"Brendimizin rəqəmsal üzünü onlara etibar etdik və nəticə gözləntilərimizi aşdı. Hər detala xüsusi diqqət yetirirlər.\"", company: "Imaj Hosting" },

    { author: "Ağadadaş Məsimov", role: "İnşaat mühəndisi", quote: "\"Bizimlə işləmələri biznesimizi yeni səviyyəyə daşıdı. Strateji yanaşmaları hər zaman üstünlük təşkil edir.\"", company: "Eracon" },
];

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
