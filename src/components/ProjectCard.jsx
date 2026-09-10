import "../css/ProjectCard.css";

function ProjectCard({ title, description, category, logo }) {
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
                    {title}
                </h3>

                <p className="project-description">
                    {description}
                </p>

                <span className="project-arrow">
                    →
                </span>

            </div>

        </article>
    );
}

export default ProjectCard;