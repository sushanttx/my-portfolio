import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the request body

    const { email, subject, message } = body;

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or use "smtp" for custom SMTP server
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // App password or email password
      },
    });

    const mailOptions = {
      from: email, // Sender's email
      to: process.env.EMAIL_RECEIVER, // Your receiving email
      subject: subject, // Email subject
      text: message, // Email body
      replyTo: email
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a successful response
    return new Response(
      JSON.stringify({ status: 200, message: "Email sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return new Response(
      JSON.stringify({
        status: 500,
        message: "Failed to send email.",
        error: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
