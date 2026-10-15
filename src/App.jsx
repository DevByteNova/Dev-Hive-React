import { useState } from "react";
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

function App() {
    const [activeSection, setActiveSection] = useState("home");

    const handleSectionChange = (section) => {
        setActiveSection(section);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <Particles />
            <EasterEgg />

            <Navbar
                activeSection={activeSection}
                onSelectSection={handleSectionChange}
            />

            <main>
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
            </main>

            <Footer onSelectSection={handleSectionChange} />
        </>
    );
}

export default App;