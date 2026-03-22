import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const data = await req.json()
  const { name, email, subject, message } = data

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'alvideonsupport@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'alvideonsupport@gmail.com',
      subject: `[ALVIDEON Contact] ${subject}`,
      text: message + `\n\nFrom: ${name} <${email}>`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
