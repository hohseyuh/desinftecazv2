'use client'

import "./style/Allies.css"

const alliesData = [
    { name: "Otogo", logo: "allies/otogo.svg", link: "https://otogo.az" },
    { name: "Eracon", logo: "allies/eracon.svg", link: "https://era-con.az" },
    { name: "QR avan", logo: "allies/qravan.svg", link: "https://qravan.az" },
    { name: "SV Perfume", logo: "allies/svperfume.svg", link: "https://svperfume.vercel.app" },
    { name: "Imaj Hosting", logo: "allies/imaj.svg", link: "https://imaj.online" },
    { name: "BIS Baku", logo: "allies/bisbaku.svg", link: "https://bisbaku.az" },
    { name: "AzConPrice", logo: "allies/azc.svg", link: "https://azconprice.az" },
    { name: "F10wless", logo: "allies/f10.svg", link: "https://instagram.com/f10wless" },
];

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