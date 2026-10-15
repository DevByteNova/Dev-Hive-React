import {
    Award,
    BadgeCheck,
    HeartHandshake,
    Lightbulb,
    ShieldCheck,
} from "lucide-react";
import "../css/CorporateValues.css";

const values = [
    {
        title: "Innovación",
        description: "Buscamos nuevas ideas y enfoques para crear soluciones digitales.",
        icon: Lightbulb,
    },
    {
        title: "Excelencia",
        description: "Damos lo mejor en cada etapa y cuidamos cada detalle.",
        icon: Award,
    },
    {
        title: "Honestidad",
        description: "Actuamos con transparencia y sinceridad con nuestros clientes.",
        icon: ShieldCheck,
    },
    {
        title: "Calidad",
        description: "Creamos productos funcionales con altos estándares.",
        icon: BadgeCheck,
    },
    {
        title: "Orientación al cliente",
        description: "Priorizamos las necesidades y expectativas de cada cliente.",
        icon: HeartHandshake,
    },
];

function CorporateValues() {
    return (
        <section className="corporate-values" id="values">
            <div className="corporate-values-container">
                <p className="section-tag">LO QUE NOS DEFINE</p>
                <h2 className="corporate-values-heading">Valores corporativos</h2>
                <p className="corporate-values-description">
                    Principios que guían cada idea, cada decisión y cada solución
                    que construimos.
                </p>

                <div className="corporate-values-grid">
                    {values.map(({ title, description, icon: Icon }, index) => (
                        <article className="corporate-value-card" key={title}>
                            <span className="corporate-value-number">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="corporate-value-icon">
                                <Icon aria-hidden="true" />
                            </span>
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CorporateValues;
