'use client'

import "./style/Hero.css";

import { useState, useEffect } from "react";

function useTypewriter(text: string, speed = 50) {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        setDisplayed("");
        let i = 0;
        const interval = setInterval(() => {
            setDisplayed(text.slice(0, ++i));
            if (i === text.length) clearInterval(interval);
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed]);

    return displayed;
}

export default function Hero() {
    const h11 = "Brendinizin bütün rəqəmsal"
    const h12 = "ehtiyacları üçün vahid"
    const h13 = "komanda"
    return (
        <section className="Hero" id="hero">
            <div className="hero-text">
                <h1 className="hero-text-content">{h11}</h1>
                <h1 className="hero-text-content">{h12}</h1>
                <h1 className="hero-text-content">{h13}</h1>
            </div>
            <div className="hero-stage">
                <div className="light"></div>
                <div className="video">
                    <video 
                        src="/videos/desinftec.mp4" 
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
