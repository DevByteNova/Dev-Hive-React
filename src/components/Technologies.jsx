import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaPhp
} from "react-icons/fa";

import {
    SiVite,
    SiMysql
} from "react-icons/si";

import "../css/Technologies.css";

function Technologies() {

    const technologies = [
        {
            name: "HTML",
            icon: <FaHtml5 />,
            color: "#E34F26"
        },
        {
            name: "CSS",
            icon: <FaCss3Alt />,
            color: "#1572B6"
        },
        {
            name: "JavaScript",
            icon: <FaJs />,
            color: "#F7DF1E"
        },
        {
            name: "React",
            icon: <FaReact />,
            color: "#61DAFB"
        },
        {
            name: "Vite",
            icon: <SiVite />,
            color: "#646CFF"
        },
        {
            name: "Git",
            icon: <FaGitAlt />,
            color: "#F05032"
        },
        {
            name: "PHP",
            icon: <FaPhp />,
            color: "#777BB4"
        },
        {
            name: "MySQL",
            icon: <SiMysql />,
            color: "#4479A1"
        }
    ];

    return (
        <section
            className="technologies reveal"
            id="technologies"
        >
            <div className="container">

                <p className="section-tag">
                    TECNOLOGÍAS
                </p>

                <h2>
                    Tecnologías que utilizamos
                </h2>

                <p className="section-description">
                    Herramientas modernas para crear
                    soluciones digitales eficientes.
                </p>

                <div className="technologies-grid">

                    {technologies.map((technology) => (
                        <article
                            className="technology-card"
                            key={technology.name}
                            style={{
                                "--tech-color": technology.color
                            }}
                        >
                            <div className="technology-icon">
                                {technology.icon}
                            </div>

                            <h3>
                                {technology.name}
                            </h3>
                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Technologies;