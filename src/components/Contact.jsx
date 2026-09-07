import { useState } from "react";
import "../css/Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [formMessage, setFormMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.message.trim()
        ) {
            setFormMessage("Completa todos los campos.");
            setMessageType("error");
            return;
        }

        setFormMessage("Enviando mensaje...");
        setMessageType("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            setFormMessage(
                `¡Gracias, ${formData.name}! Hemos recibido tu mensaje.`
            );

            setMessageType("success");

            setFormData({
                name: "",
                email: "",
                message: ""
            });

        } catch (error) {
            console.error(error);

            setFormMessage(
                "No pudimos enviar el mensaje. Inténtalo nuevamente."
            );

            setMessageType("error");
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="container">

                <p className="section-tag">
                    CONTACTO
                </p>

                <h2>
                    Hablemos de tu proyecto
                </h2>

                <p className="section-description">
                    ¿Tienes una idea? Cuéntanos qué necesitas
                    y trabajemos juntos para hacerla realidad.
                </p>

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    <div className="form-group">
                        <label htmlFor="name">
                            Nombre
                        </label>

                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Tu nombre"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">
                            Correo electrónico
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="tu@email.com"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">
                            Mensaje
                        </label>

                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Cuéntanos sobre tu proyecto..."
                            rows="6"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn"
                    >
                        Enviar mensaje
                    </button>

                    {formMessage && (
                        <p className={`form-message ${messageType}`}>
                            {formMessage}
                        </p>
                    )}

                </form>
            </div>
        </section>
    );
}

export default Contact;