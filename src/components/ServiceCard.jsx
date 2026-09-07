import "../css/ServiceCard.css";

function ServiceCard({ title, description }) {

    const handleMouseMove = (event) => {

        const rect =
            event.currentTarget.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        event.currentTarget.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        event.currentTarget.style.setProperty(
            "--mouse-y",
            `${y}px`
        );
    };

    return (
        <article
            className="service-card"
            onMouseMove={handleMouseMove}
        >
            <h3>
                {title}
            </h3>

            <p>
                {description}
            </p>
        </article>
    );
}

export default ServiceCard;