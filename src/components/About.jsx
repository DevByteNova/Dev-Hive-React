import { Target, Eye } from "lucide-react";
import "../css/About.css";

function About() {
    return (
        <section className="about" id="about">
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

                <h3 className="about-subheading">MISIÓN y VISIÓN</h3>
                <div className="mission-vision-grid">
                    <article className="mission-vision-card">
                        <Target className="mission-vision-icon" />
                        <h3>MISIÓN</h3>
                        <p>
                            Abordar problemáticas de software con
                            métodos orientados al futuro. Desarrollamos
                            soluciones de software para microempresas
                            y clientes clave, garantizando una atención
                            de alta calidad.
                        </p>
                    </article>

                    <article className="mission-vision-card">
                        <Eye className="mission-vision-icon" />
                        <h3>VISIÓN</h3>
                        <p>
                            Consolidarnos como la compañía líder de
                            software a largo plazo. Nos anticipamos a las
                            tendencias futuras para ofrecer experiencias
                            innovadoras y duraderas, más allá de las modas
                            pasajeras.
                        </p>
                    </article>
                </div>

                <h3 className="about-subheading">OBJETIVOS</h3>
                <div className="objectives-grid">

                    <article className="objective-card">
                        <h3>OBJETIVO GENERAL</h3>
                        <p>
                            Consolidar el proyecto en el mercado mediante
                            soluciones innovadoras que aseguren un
                            crecimiento sostenible.
                        </p>
                    </article>

                    <article className="objective-card">
                        <h3>OBJETIVOS ESPECÍFICOS</h3>
                        <ul className="objectives-list">
                            <li>
                                <strong>Posicionamiento:</strong> Incrementar la visibilidad digital en el primer año.
                            </li>
                            <li>
                                <strong>Calidad:</strong> Superar el 90% de satisfacción mediante servicio personalizado.
                            </li>
                            <li>
                                <strong>Financiero:</strong> Alcanzar el punto de equilibrio en los primeros meses.
                            </li>
                            <li>
                                <strong>Innovación:</strong> Desarrollar nuevas funciones o productos adaptados a las tendencias actuales del mercado.
                            </li>
                            <li>
                                <strong>Expansión:</strong> Crear alianzas estratégicas para ingresar a nuevos segmentos de clientes durante el año.
                            </li>
                        </ul>
                    </article>

                </div>

                <div className="founders-section">
                    <p className="founders-label">Fundadores de DevHive</p>

                    <div className="founders-grid">
                        <article className="founder-card">
                            <img
                                className="founder-photo"
                                src="/assets/img/Santiago.jpg"
                                alt="Santiago Giraldo Niño"
                            />
                            <div className="founder-info">
                                <h3>Santiago Giraldo Niño</h3>
                                <span>Fundador de DevHive</span>
                            </div>
                        </article>

                        <article className="founder-card">
                            <img
                                className="founder-photo"
                                src="/assets/img/Felipe.jpg"
                                alt="Felipe Socarras Garzon"
                            />
                            <div className="founder-info">
                                <h3>Felipe Socarras Garzon</h3>
                                <span>Fundador de DevHive</span>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;