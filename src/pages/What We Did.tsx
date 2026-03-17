'use client'

import { useState, useEffect, useRef } from "react";
import "./style/What We Did.css";

const projects = [
    {
        id: "1",
        name: "Otogo",
        about: "Otomatik texniki baxış təsviri və avtomobil xidmətləri üçün platforma. İstifadəçilərin rahatlığı üçün tam rəqəmsallaşdırılmış servis.",
        icon: "/otogo arrow.svg",
        video: "/videos/otogo.mp4" // Dedicated project video
    },
    {
        id: "2",
        name: "Rosetta",
        about: "Dil öyrənmə və tərcümə xidmətləri üçün innovativ rəqəmsal həll. Süni intellekt əsaslı öyrənmə sistemi ilə fərqlənir.",
        icon: "/rosetta.svg",
        video: "/videos/rosetta.mp4" // Dedicated project video
    }
];

function TypewriterText({ text, speed = 80, delay = 500 }: { text: string, speed?: number, delay?: number }) {
    const [displayed, setDisplayed] = useState("");
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!started) return;
        const timeout = setTimeout(() => {
            let i = 0;
            const interval = setInterval(() => {
                setDisplayed(text.slice(0, i + 1));
                i++;
                if (i >= text.length) clearInterval(interval);
            }, speed);
            return () => clearInterval(interval);
        }, delay);
        return () => clearTimeout(timeout);
    }, [started, text, speed, delay]);

    return (
        <span ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
            <span style={{ visibility: 'hidden' }}>{text}</span>
            <span style={{ position: 'absolute', left: 0, top: 0 }}>{displayed}</span>
        </span>
    );
}

export default function WhatWeDid() {
    return (
        <section className="What-We-Did" id="projects">
            <div className="wwdid-container">
                <div className="section-header">
                    <h2 className="section-title">Tanış olun</h2>
                </div>
                <div className="wwdids">
                    {projects.map((project) => (
                        <div key={project.id} className="wwdid">
                            <div className="wwdid-text-content">
                                <p className="wwdid-about">{project.about}</p>
                                <p className="wwdid-order">D/ {project.id}</p>
                            </div>
                            <div className="wwdid-visual">
                                <div className="wwdid-icon-wrapper">
                                    <img src={project.icon} alt="" className="wwdid-icon" />
                                </div>
                                <div className="wwdid-video-wrapper">
                                    <video 
                                        src={project.video} 
                                        autoPlay 
                                        muted 
                                        loop 
                                        playsInline 
                                        className="wwdid-video"
                                    />
                                </div>
                            </div>
                            <div className="wwdid-title">
                                <h3 className="wwdid-title-content">
                                    <TypewriterText text={project.name} />
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}