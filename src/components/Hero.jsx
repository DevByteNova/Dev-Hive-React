import "../css/Hero.css";

function Hero({ onSelectSection }) {
    return (
        <section className="hero reveal" id="home">
            <div className="hero-content">
                <p className="hero-tag">
                    SOFTWARE & WEB DEVELOPMENT
                </p>

                <h1 className="hero-title">
                    Construyendo los sueños
                    <span> en otros mundos digitales</span>
                </h1>

                <p className="hero-description">
                    Creamos soluciones digitales modernas,
                    rapidas y adaptadas a las necesidades
                    de cada proyecto.
                </p>

                <div className="hero-buttons">
                    <button
                        type="button"
                        className="btn"
                        onClick={() => onSelectSection("services")}
                    >
                        Nuestros Servicios
                    </button>

                    <button
                        type="button"
                        className="btn btn-outline"
                        onClick={() => onSelectSection("projects")}
                    >
                        Ver Proyectos
                    </button>
                </div>

                <div className="hero-stats">
                    <div className="hero-stat">
                        <span className="hero-stat-value">40+</span>
                        <span className="hero-stat-label">Proyectos entregados</span>
                    </div>

                    <div className="hero-stat-divider" />

                    <div className="hero-stat">
                        <span className="hero-stat-value">98%</span>
                        <span className="hero-stat-label">Clientes satisfechos</span>
                    </div>

                    <div className="hero-stat-divider" />

                    <div className="hero-stat">
                        <span className="hero-stat-value">24h</span>
                        <span className="hero-stat-label">Tiempo de respuesta</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;