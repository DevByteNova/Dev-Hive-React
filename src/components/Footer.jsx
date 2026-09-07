import "../css/Footer.css";

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">

                <div className="footer-content">

                    <div className="footer-brand">

                        <a
                            href="#home"
                            className="footer-logo"
                        >
                            <img src="/logo.png" alt="Dev-Hive" />
                        </a>

                        <p>
                            Construimos soluciones digitales
                            modernas para el futuro.
                        </p>

                    </div>

                    <div className="footer-links">

                        <h3>
                            Navegación
                        </h3>

                        <a href="#home">
                            Inicio
                        </a>

                        <a href="#services">
                            Servicios
                        </a>

                        <a href="#technologies">
                            Tecnologías
                        </a>

                        <a href="#about">
                            Nosotros
                        </a>

                        <a href="#projects">
                            Proyectos
                        </a>

                        <a href="#contact">
                            Contacto
                        </a>

                    </div>

                </div>

                <div className="footer-bottom">
                    © {currentYear} Dev-Hive. Todos los derechos reservados.
                </div>

            </div>
        </footer>
    );
}

export default Footer;