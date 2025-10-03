const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, message: "Method not allowed" }),
    };
  }

  try {
    console.log("Environment Variables:", {
      SMTP_HOST: process.env.SMTP_HOST || "smtp.hostinger.com",
      SMTP_PORT: process.env.SMTP_PORT || "587",
      SMTP_SECURE: process.env.SMTP_SECURE,
      SMTP_USER: process.env.SMTP_USER,
      SMTP_PASS: process.env.SMTP_PASS ? "Set" : "Missing",
      NOTIFICATION_EMAIL: process.env.NOTIFICATION_EMAIL || "martin-stone@multibankeurope.com",
    });

    const formData = JSON.parse(event.body);
    console.log("Received Form Data:", formData);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();
    console.log("SMTP connection verified");

    const mailOptions = {
      from: `"Website Form" <${process.env.SMTP_USER}>`,
      to: process.env.NOTIFICATION_EMAIL || "martin-stone@multibankeurope.com",
      subject: "Neue Kontaktformular-Anfrage",
      html: `
        <h1>Neue Registrierungsanfrage</h1>
        <p><strong>Vorname:</strong> ${formData.firstName}</p>
        <p><strong>Nachname:</strong> ${formData.lastName}</p>
        <p><strong>E-Mail:</strong> ${formData.email}</p>
        <p><strong>Telefon:</strong> ${formData.phone}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
