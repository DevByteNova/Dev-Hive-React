import "../css/ProjectCard.css";

function ProjectCard({ title, description, category }) {
    return (
        <article className="project-card">

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