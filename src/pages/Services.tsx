'use client'

import "./style/Services.css";
import servicesData from "../data/services.json";

export default function Services() {
    return (
        <section className="Services" id="services">
            <div className="services-inner">
                <div className="section-header">
                    <h2 className="section-title">Nə edirik?</h2>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div key={index} className="service-item scroll">
                            <div className="service-icon">
                                <img src={service.icon} alt={service.title} />
                            </div>

                            <div className="service-content">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-body">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
