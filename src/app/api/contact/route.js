import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  return new Response("✅ Contact API working. Use POST to submit.");
}

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("📩 Incoming form data:", body);

    const { fullName, email, phone, country, products, message } = body;

    // setup transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"PureFarmDung Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: "New Contact Form Submission",
      text: `
        Name: ${fullName || "N/A"}
        Email: ${email || "N/A"}
        Phone: ${phone || "N/A"}
        Country: ${country || "N/A"}
        Products: ${products && products.length ? products.join(", ") : "N/A"}
        Message: ${message || "N/A"}
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("❌ Email error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}