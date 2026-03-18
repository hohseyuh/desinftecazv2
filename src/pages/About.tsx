'use client'

import "./style/About.css";
import { useState, useEffect, useRef } from "react";

function TypewriterText({ text, active, speed = 60 }: { text: string, active: boolean, speed?: number }) {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        if (!active) return;
        let i = 0;
        const interval = setInterval(() => {
            setDisplayed(text.slice(0, ++i));
            if (i >= text.length) clearInterval(interval);
        }, speed);
        return () => clearInterval(interval);
    }, [active, text, speed]);

    return (
        <span className="about-typewriter">
            <span style={{ visibility: "hidden" }}>{text}</span>
            <span style={{ position: "absolute", left: 0, top: 0 }}>{displayed}</span>
        </span>
    );
}

export default function About() {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className={`About-us${visible ? " is-visible" : ""}`} id="about">
            <div className="about-us">
                <span className="about-line">Təmiz tərtibatın yüksək mühəndisliklə kəsişməsi.</span>
                <span className="about-line">
                    <TypewriterText text="Desinftec" active={visible} />{" "}ideanızın mümkün ən
                </span>
                <span className="about-line">yüksək rəqəmsal standardlarla bazara çıxmasını</span>
                <span className="about-line">təmin edir.</span>
            </div>
        </section>
    );
}
