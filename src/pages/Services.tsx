'use client'

import "./style/Services.css";

const servicesData = [
    {
        title: "Veb Applikasiya",
        description: "Veb Tətbiq Mühəndisliyi, mürəkkəb əməliyyat problemlərini həll etmək üçün qurulmuş dayanıqlı, miqyaslana bilən və interaktiv proqram təminatının yaradılmasıdır. Biz bütün müasir mühitlərdə qüsursuz və maneəsiz icranı zəmanət altına alan təmiz, yüksək performanslı kod yazmağa köklənmişik.",
        icon: "wwd4.svg"
    },
    {
        title: "Mobil Applikasiya",
        description: "Mobil Tətbiq Mühəndisliyi, yüksək performans və istifadəçilərin aqressiv şəkildə platformada saxlanılması üçün xüsusi olaraq qurulmuş doğma (native) və kross-platforma təcrübələrinin yaradılmasıdır. Biz maksimum dəyəri maneəsiz şəkildə təqdim etmək üçün cihazın əsas imkanlarından tam gücü ilə istifadə edən intuitiv, dayanıqlı mobil arxitekturalar qururuq.",
        icon: "wwd3.svg"
    },
    {
        title: "UI/UX Prototipinq",
        description: "UI/UX Prototipləşdirmə, istifadəçi səyahətlərinin və vizual interfeyslərin strateji arxitekturasıdır. Biz yüksək dəqiqlikli, interaktiv planlar (blueprints) mühəndisləşdirərək davranış psixologiyası ilə xalis texniki icra arasındakı boşluğu aradan qaldırırıq. Tək bir sətir kod yazılmadan öncə rəqəmsal məhsulun dəqiq görünüşünü, hissiyatını və funksionallığını müəyyən edirik.",
        icon: "wwd2.svg"
    },
    {
        title: "Brendinq",
        description: "Brendin Vizual Kimliyi, şirkətin vizual dilinin sistematik mühəndisliyidir. Biz mütləq nüfuz və aqressiv bazar mövqeyini nümayiş etdirən çarpıcı, yüksək təsir gücünə malik estetikalar – sərt tipoqrafik iyerarxiyalardan tutmuş dominant rəng palitralarına və rəqəmsal aktivlərə qədər – qururuq.",
        icon: "wwd1.svg"
    }
];

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
