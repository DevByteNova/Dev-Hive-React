import ProjectCard from "./ProjectCard";
import DevHiveLogo from "./DevHiveLogo";
import DecareLogo from "./DecareLogo";

import "../css/Projects.css";

// Sitio público de Pijamas Decare (public/pijamas-decare). Si se publica la tienda
// completa en otro servidor, basta con definir VITE_TIENDA_URL.
const TIENDA_PIJAMAS_URL =
    import.meta.env.VITE_TIENDA_URL ?? "/pijamas-decare/";

function Projects() {

    const projects = [
        {
            number: "01",
            title: "Dev-Hive",
            category: "Desarrollo Web",
            description:
                "Sitio web moderno para una empresa de desarrollo de software.",
            logo: <DevHiveLogo />
        },
        {
            number: "02",
            title: "Pijamas Decare",
            category: "Full-Stack",
            description:
                "Tienda en línea de pijamas con catálogo, carrito, inventario y facturación.",
            logo: <DecareLogo />,
            url: TIENDA_PIJAMAS_URL
        }
    ];

    return (
        <section
            className="projects"
            id="projects"
        >
            <div className="container">

                <p className="section-tag">
                    PROYECTOS
                </p>

                <h2>
                    Algunos de nuestros proyectos
                </h2>

                <p className="section-description">
                    Una selección de proyectos y soluciones
                    que hemos desarrollado.
                </p>

                <div className="projects-grid">

                    {projects.map((project) => (
                        <ProjectCard
                            key={project.number}
                            title={project.title}
                            category={project.category}
                            description={project.description}
                            logo={project.logo}
                            url={project.url}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Projects;