import Navbar from "@/pages/Navbar";
import Hero from "@/pages/Hero";
import Allies from "@/pages/Allies";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Testimonials from "@/pages/Testimonials";
import CTA from "@/pages/CTA";
import Footer from "@/pages/Footer";

import WWDID from "@/pages/What We Did";
import Team from "@/pages/Team";


export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Navbar />
      <Hero />
      <Allies />
      <About />
      <Services />
      <WWDID />
      <Team />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
