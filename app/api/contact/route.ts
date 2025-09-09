import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10),
  packageRef: z.string().optional(),
  preferredDates: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const from =
      process.env.SMTP_FROM || "Retreats by Traveon <noreply@example.com>";
    const adminHtml = `
      <h3>New enquiry</h3>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      <p><b>Message:</b> ${data.message}</p>
      <p><b>Package:</b> ${data.packageRef || "-"}</p>
      <p><b>Dates:</b> ${data.preferredDates || "-"}</p>
    `;

    await transporter.sendMail({
      from,
      to: process.env.SMTP_USER,
      subject: "New enquiry — Retreats by Traveon",
      html: adminHtml,
    });

    await transporter.sendMail({
      from,
      to: data.email,
      subject: "Thanks for reaching out",
      html: `<p>Hi ${data.name},</p><p>Thanks for contacting Retreats by Traveon. Our team will get back to you shortly.</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    const errorMessage =
      typeof err === "object" && err !== null && "message" in err
        ? (err as { message?: string }).message
        : "Unknown error";
    return NextResponse.json(
      { ok: false, error: errorMessage },
      { status: 400 }
    );
  }
}
