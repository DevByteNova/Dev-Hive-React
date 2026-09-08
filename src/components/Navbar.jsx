import { useState } from "react";
import "../css/navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = () => {
        setMenuOpen(false);
    }

    return (
        <header className="navbar">
            <div className="navbar-container">

                <a href="#home" className="logo">
                    <img src="/logo.png" alt="Dev-Hive" />

                    <span>Dev-Hive</span>
                </a>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    ☰
                </button>

                <nav>
                    <ul className={menuOpen ? "active" : ""}>
                        <li><a href="#home" onClick={handleNavClick}>Inicio</a></li>
                        <li><a href="#services" onClick={handleNavClick}>Servicios</a></li>
                        <li><a href="#technologies"onClick={handleNavClick}>Tecnologías</a></li>
                        <li><a href="#about"onClick={handleNavClick}>Nosotros</a></li>
                        <li><a href="#projects"onClick={handleNavClick}>Proyectos</a></li>
                        <li><a href="#contact"onClick={handleNavClick}>Contacto</a></li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Navbar;