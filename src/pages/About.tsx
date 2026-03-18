'use client'

import "./style/About.css";
import { useState, useEffect, useRef } from "react";

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

export default function About() {
    return (
        <section className="About-us" id="about">
            <div className="about-us">
                <h3 className="scroll">Təmiz tərtibatın yüksək mühəndisliklə</h3>
                <h3 className="scroll">
                    kəsişməsi. <TypewriterText text="Desinftec" /> ideanızın mümkün ən
                </h3>
                <h3 className="scroll"> yüksək rəqəmsal standardlarla bazara çıxmasını</h3>
                <h3 className="scroll"> təmin edir.</h3>
            </div>
        </section>
    );
}
