import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Método no permitido"
        });
    }

    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                message: "Completa todos los campos."
            });
        }

        await resend.emails.send({
            from: "Dev-Hive <onboarding@resend.dev>",
            to: [process.env.CONTACT_EMAIL],
            replyTo: email,
            subject: `Nuevo mensaje de ${name}`,
            html: `
                <h2>Nuevo mensaje desde Dev-Hive</h2>

                <p><strong>Nombre:</strong> ${name}</p>

                <p><strong>Correo:</strong> ${email}</p>

                <p><strong>Mensaje:</strong></p>

                <p>${message}</p>
            `
        });

        return res.status(200).json({
            message: "Mensaje enviado correctamente."
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "No se pudo enviar el mensaje."
        });
    }
}