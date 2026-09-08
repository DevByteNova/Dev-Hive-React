import "../css/Hero.css";

function Hero() {
    return (
        <section className="hero reveal" id="home">
            <div className="hero-content">
                <p className="hero-tag">
                    SOFTWARE & WEB DEVELOPMENT
                </p>

                <h1 className="hero-title">
                    Construimos el futuro
                    <span> digital.</span>
                </h1>

                <p className="hero-description">
                    Creamos soluciones digitales modernas,
                    rapidas y adaptadas a las necesidades
                    de cada proyecto.
                </p>

                <div className="hero-buttons">
                    <a href="#services" className="btn">
                        Nuestros Servicios
                    </a>

                    <a href="#projects" className="btn btn-outline">
                        Ver Proyectos
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;