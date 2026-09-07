import "../css/About.css";

function About() {
    return (
        <section className="about" id="about">
            <div className="container">

                <p className="section-tag">
                    NOSOTROS
                </p>

                <h2>
                    Creamos tecnología con propósito
                </h2>

                <p className="section-description">
                    En Dev-Hive desarrollamos soluciones digitales
                    modernas, eficientes y pensadas para las
                    necesidades de cada proyecto.
                </p>

                <div className="about-grid">

                    <article className="about-card">
                        <span className="about-number">
                            01
                        </span>

                        <h3>
                            Innovación
                        </h3>

                        <p>
                            Buscamos nuevas formas de utilizar
                            la tecnología para crear mejores
                            experiencias digitales.
                        </p>
                    </article>

                    <article className="about-card">
                        <span className="about-number">
                            02
                        </span>

                        <h3>
                            Calidad
                        </h3>

                        <p>
                            Nos enfocamos en escribir código
                            limpio, mantenible y eficiente.
                        </p>
                    </article>

                    <article className="about-card">
                        <span className="about-number">
                            03
                        </span>

                        <h3>
                            Compromiso
                        </h3>

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
