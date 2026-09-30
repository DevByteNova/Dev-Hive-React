import "../css/ProjectCard.css";

function ProjectCard({ title, description, category, logo, url }) {
    return (
        <article className="project-card">

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
                    {url ? (
                        <a
                            className="project-card-link"
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {title}
                        </a>
                    ) : (
                        title
                    )}
                </h3>

                <p className="project-description">
                    {description}
                </p>

                <span className="project-arrow" aria-hidden="true">
                    →
                </span>

            </div>

        </article>
    );
}

export default ProjectCard;