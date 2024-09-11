import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function GET(request, response) {
  return NextResponse.json({
    status: 200,
    message: `email sended...!`,
  });
}

export async function POST(request) {
  const { firstName, lastName, email, phone, service, message } =
    await request.json();

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_PASS;

  if (!user || !pass) {
    return NextResponse.json({
      status: 500,
      message: "Missing email credentials",
    });
  }

  const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user,
      pass,
    },
  });

  try {
    await transport.verify();
    const mailMessage = await transport.sendMail({
      from: user,
      to: email,
      subject: "Confirmation of Form Submission",
      html: `
        
        
          <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>New Contact Submission</title>
                </head>
                <body style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2 style="color: #333;">Thank you for Visit my Page.</h2>
                    <p>Hello,</p>
                    <p>I got Your Form Submission Succesfully.</p>
                    <p><strong>Name: </strong> ${firstName}${" "}${lastName}</p>
                    <p><strong>Email: </strong> <a href="mailto:${email}" style="color: #1a73e8;">${email}</a></p>
                    <p><strong>Phone: </strong> <a href="tel:${phone}" style="color: #1a73e8;">${phone}</a></p>
                    <p><strong>Service: </strong>${service}</p>
                    <p><strong>Message: </strong>${message}</p>
                    <p>I'll Contact you Soon.</p>
                    <p>Best regards,<br>Reach Technologies</p>
                </body>
                </html>
        `,
    });
    return NextResponse.json({
      status: 200,
      message: mailMessage,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: `Failed to send mail ${error.message}`,
      error: error.message,
    });
  }
}
