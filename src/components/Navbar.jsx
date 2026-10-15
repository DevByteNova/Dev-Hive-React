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
                    <svg
                        className="logo-mark"
                        viewBox="0 0 280 190"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                        >
                            <path d="M140 5 102 52 140 181 178 52 140 5Z" />
                            <path d="M140 5v158M102 52l38 32 38-32" />
                            <path d="m20 68 59 8 51 105-103-55L20 68Z" />
                            <path d="m20 68 57 58 2-50m-50 50 101 55" />
                            <path d="m260 68-59 8-51 105 103-55 7-58Z" />
                            <path d="m260 68-57 58-2-50m50 50-101 55" />
                        </g>
                    </svg>
                    <span>DEV HIVE</span>
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