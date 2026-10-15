import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import About from "./components/About";
import CorporateValues from "./components/CorporateValues";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particles from "./components/Particles";
import EasterEgg from "./components/EasterEgg";

const SECCIONES = ["home", "services", "technologies", "about", "projects", "contact"];

function App() {
    const [activeSection, setActiveSection] = useState("home");

    // Desplaza suavemente hasta la sección elegida en el menú o en los botones.
    const handleSectionChange = (section) => {
        const destino = document.getElementById(section);
        if (!destino) return;
        const reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        destino.scrollIntoView({ behavior: reducirMovimiento ? "auto" : "smooth", block: "start" });
        setActiveSection(section);
    };

    // Marca en el menú la sección que se está viendo mientras la persona hace scroll.
    useEffect(() => {
        const secciones = SECCIONES.map((id) => document.getElementById(id)).filter(Boolean);
        const observador = new IntersectionObserver(
            (entradas) => {
                entradas.forEach((entrada) => {
                    if (entrada.isIntersecting) setActiveSection(entrada.target.id);
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );
        secciones.forEach((seccion) => observador.observe(seccion));
        return () => observador.disconnect();
    }, []);

    return (
        <>
            <Particles />
            <EasterEgg />

            <Navbar
                activeSection={activeSection}
                onSelectSection={handleSectionChange}
            />

            <main>
<<<<<<< HEAD
                {activeSection === "home" && <Hero onSelectSection={handleSectionChange} />}
                {activeSection === "services" && <Services />}
                {activeSection === "technologies" && <Technologies />}
                {activeSection === "about" && (
                    <>
                        <About />
                        <CorporateValues />
                    </>
                )}
                {activeSection === "projects" && <Projects />}
                {activeSection === "contact" && <Contact />}
=======
                <Hero onSelectSection={handleSectionChange} />
                <Services />
                <Technologies />
                <About />
                <Projects />
                <Contact />
>>>>>>> 6e86b528994d9224ea385af6f039ea9244505db9
            </main>

            <Footer onSelectSection={handleSectionChange} />
        </>
    );
}

export default App;