import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "alvideonsupport@gmail.com",
      pass: process.env.GMAIL_APP_PASSWORD, // <-- defined in .env.local
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "alvideonsupport@gmail.com",
      subject: `[Website Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true, message: "Email sent!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Email failed to send." }, { status: 500 });
  }
}
