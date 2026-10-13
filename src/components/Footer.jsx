import "../css/Footer.css";

function Footer({ onSelectSection }) {
    const currentYear = new Date().getFullYear();

    const navItems = [
        { id: "home", label: "Inicio" },
        { id: "services", label: "Servicios" },
        { id: "technologies", label: "Tecnologías" },
        { id: "about", label: "Nosotros" },
        { id: "projects", label: "Proyectos" },
        { id: "contact", label: "Contacto" }
    ];

    return (
        <footer className="footer">
            <div className="container">

                <div className="footer-content">

                    <div className="footer-brand">

                        <button
                            type="button"
                            className="footer-logo"
                            onClick={() => onSelectSection("home")}
                        >
                            <img src="/logo.png" alt="Dev-Hive" />
                        </button>

                        <p>
                            Construimos soluciones digitales
                            modernas para el futuro.
                        </p>

                    </div>

                    <div className="footer-links">

                        <h3>
                            Navegación
                        </h3>

                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                className="footer-link"
                                onClick={() => onSelectSection(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}

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