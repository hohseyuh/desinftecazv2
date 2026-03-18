'use client'

import "./style/Allies.css";
import alliesData from "../data/allies.json";

export default function Allies() {
    return (
        <section className="Allies">
            <div className="allies-viewport scroll">
                <div className="allies-track">
                    {[...alliesData, ...alliesData, ...alliesData, ...alliesData].map((ally, index) => (
                        <a href={ally.link} key={index} className="ally-item">
                            <img className="ally-logo" src={ally.logo} alt={ally.name} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
