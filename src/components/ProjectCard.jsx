import "../css/ProjectCard.css";

function ProjectCard({ title, description, category, logo, url }) {
    // Si el proyecto tiene enlace, toda la tarjeta es el enlace (más fácil de pulsar en celular).
    const Contenedor = url ? "a" : "article";
    const propsEnlace = url
        ? { href: url, "aria-label": `Ver el proyecto ${title}` }
        : {};

    return (
        <Contenedor
            className={url ? "project-card project-card--link" : "project-card"}
            {...propsEnlace}
        >

            <div className="project-thumbnail">
                {logo ? (
                    logo
                ) : (
                    <span className="project-thumbnail-glyph">
                        {title.charAt(0)}
                    </span>
                )}
            </div>

            <div className="project-card-content">

                <p className="project-category">
                    {category}
                </p>

                <h3>
                    {title}
                </h3>

                <p className="project-description">
                    {description}
                </p>

                <span className="project-arrow" aria-hidden="true">
                    {url ? "Ver proyecto →" : "→"}
                </span>

            </div>

        </Contenedor>
    );
}

export default ProjectCard;
