import ProjectCard from "./ProjectCard";

import "../css/Projects.css";

function Projects() {

    const projects = [
        {
            number: "01",
            title: "Dev-Hive",
            category: "Desarrollo Web",
            description:
                "Sitio web moderno para una empresa de desarrollo de software."
        },
        {
            number: "02",
            title: "Sistema de Información ERP",
            category: "Full-Stack",
            description:
                "Sistema de gestión para ventas e inventario."
        },
        {
            number: "03",
            title: "Aplicación Digital",
            category: "Software",
            description:
                "Solución digital diseñada para mejorar procesos."
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
                            number={project.number}
                            title={project.title}
                            category={project.category}
                            description={project.description}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Projects;