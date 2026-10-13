import { useState } from "react";
import "../css/navbar.css";

function Navbar({ activeSection, onSelectSection }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { id: "home", label: "Inicio" },
        { id: "services", label: "Servicios" },
        { id: "technologies", label: "Tecnologías" },
        { id: "about", label: "Nosotros" },
        { id: "projects", label: "Proyectos" },
        { id: "contact", label: "Contacto" }
    ];

    const handleNavClick = (section) => {
        onSelectSection(section);
        setMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">

                <button
                    type="button"
                    className="logo"
                    onClick={() => handleNavClick("home")}
                    aria-label="Ir a Inicio"
                >
                    <img src="/logo.png" alt="Dev-Hive" />
                    <span>Dev-Hive</span>
                </button>

                <button
                    type="button"
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    ☰
                </button>

                <nav>
                    <ul className={menuOpen ? "active" : ""}>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    type="button"
                                    className={activeSection === item.id ? "nav-link active" : "nav-link"}
                                    onClick={() => handleNavClick(item.id)}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Navbar;