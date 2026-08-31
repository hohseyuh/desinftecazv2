'use client'

import "./style/Team.css";
import teamData from "../data/team.json";

export default function Team() {
    return (
        <section className="Team" id="team">
            <div className="section-header scroll">
                <h2 className="section-title">{teamData.sectionTitle}</h2>
            </div>

            <div className="team-content team-content--text-only">
                <div className="team-brief">
                    <h4 className="team-brief-title">{teamData.title}</h4>
                    <p>{teamData.body}</p>
                </div>
            </div>
        </section>
    );
}
