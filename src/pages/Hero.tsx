'use client'

import "./style/Hero.css";
import heroData from "../data/hero.json";

export default function Hero() {
    return (
        <section className="Hero" id="hero">
            <div className="hero-text">
                {heroData.lines.map((line, index) => (
                    <h1 key={index} className="hero-text-content">{line}</h1>
                ))}
            </div>
            <div className="hero-stage">
                <div className="light"></div>
                <div className="video">
                    <video
                        src={heroData.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="hero-video"
                    />
                </div>
            </div>
        </section>
    );
}
