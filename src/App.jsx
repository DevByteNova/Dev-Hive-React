import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particles from "./components/Particles";
import ScrollReveal from "./components/ScrollReveal";
import EasterEgg from "./components/EasterEgg";

function App() {
    return (
        <>
            <Particles />
            <EasterEgg />

            <Navbar />
            <Hero />
            <Services />
        <ScrollReveal>
            <Technologies />
        </ScrollReveal>
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default App;