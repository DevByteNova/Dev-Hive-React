import ServiceCard from "./ServiceCard";
import "../css/Services.css";

function Services(){


    const services = [
        {
            title: "Desarrollo Web",
            description:
                "Creamos Sitios web modernos, rapidos y adaptables"
        },
        {
             title: "Aplicaciones",
            description:
                "Desarrollamos aplicaciones pensadas para las necesidades de cada proyecto."
        },
        {
            title: "Soluciones Digitales",
            description:
                "Diseñamos soluciones digitales eficientes y escalables"
        }
    ];

    return(
        <section className="services" id="services">
            <div className="container">
                <p className="section-tag">
                    SERVICIOS
                </p>
                <h2>
                    Lo que Hacemos
                </h2>
                <p className="section-description">
                    Soluciones tecnologicas diseñadas
                    para ayudarte a crecer.
                </p>
                <div className="services-grid">
                    {services.map((service) => (
                        <ServiceCard
                        key={service.title}
                        title={service.title}
                        description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Services;