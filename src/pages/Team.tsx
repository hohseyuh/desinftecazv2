'use client'

import "./style/Team.css";

export default function Team() {
    return (
        <section className="Team" id="team">
            <div className="section-header scroll">
                <h2 className="section-title">Komandamız</h2>
            </div>

            <div className="team-content">
                <div className="team-image-wrapper">
                    <img
                        src="/team-placeholder.png"
                        alt="Desinftec Team"
                        className="team-image"
                    />
                    <div className="image-glow"></div>
                </div>

                <div className="team-brief">
                    <h4 className="team-brief-title">Strateji Yanaşma</h4>
                    <p>
                        Desinftec komandası rəqəmsal innovasiyalar və texnoloji mükəmməllik naminə
                        birləşmiş kreativ dizaynerlər, təcrübəli mühəndis və strateji düşünən
                        mütəxəssislərdən ibarətdir. Biz hər bir layihəyə fərdi yanaşaraq,
                        ideyalarınızı bazarda rəqabətədavamlı və istifadəçi mərkəzli
                        rəqəmsal məhsullara çeviririk.
                    </p>
                </div>
            </div>
        </section>
    );
}
