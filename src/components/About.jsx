import { useEffect, useRef } from "react";
import { Target, Eye } from "lucide-react";
import "../css/About.css";

function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const cards = sectionRef.current.querySelectorAll(
            ".mission-vision-card, .about-card"
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="about" id="about" ref={sectionRef}>
            <div className="container">

                <p className="section-tag">
                    NOSOTROS
                </p>

                <h2 className="about-heading">
                    Creamos tecnología con propósito
                </h2>

                <p className="section-description">
                    En Dev-Hive desarrollamos soluciones digitales
                    modernas, eficientes y pensadas para las
                    necesidades de cada proyecto.
                </p>

                <div className="mission-vision-grid">

                    <div className="mission-vision-card">
                        <Target className="mission-vision-icon" />
                        <h3>MISIÓN</h3>
                        <p>
                            Abordar problemáticas de software con
                            métodos orientados al futuro. Desarrollamos
                            soluciones de software para microempresas
                            y clientes clave, garantizando una atención
                            de alta calidad.
                        </p>
                    </div>

                    <div className="mission-vision-card">
                        <Eye className="mission-vision-icon" />
                        <h3>VISIÓN</h3>
                        <p>
                            Consolidarnos como la compañía líder de
                            software a largo plazo. Nos anticipamos a las
                            tendencias futuras para ofrecer experiencias
                            innovadoras y duraderas, más allá de las modas
                            pasajeras.
                        </p>
                    </div>

                </div>

                <div className="about-grid">

                    <article className="about-card">
                        <span className="about-number">01</span>
                        <h3>Innovación</h3>
                        <p>
                            Buscamos nuevas formas de utilizar
                            la tecnología para crear mejores
                            experiencias digitales.
                        </p>
                    </article>

                    <article className="about-card">
                        <span className="about-number">02</span>
                        <h3>Calidad</h3>
                        <p>
                            Nos enfocamos en escribir código
                            limpio, mantenible y eficiente.
                        </p>
                    </article>

                    <article className="about-card">
                        <span className="about-number">03</span>
                        <h3>Compromiso</h3>
                        <p>
                            Trabajamos para convertir las ideas
                            de nuestros clientes en soluciones
                            reales.
                        </p>
                    </article>

                </div>
            </div>
        </section>
    );
}

export default About;