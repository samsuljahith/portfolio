import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/contact-schema";
import { sendTelegram, escapeHtml } from "@/lib/notify";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 422 }
    );
  }

  const { name, email, message } = parsed.data;

  let delivered = false;

  // Primary channel: Telegram over HTTPS (works on Render's free tier, which
  // blocks outbound SMTP ports 25/465/587).
  const tg = await sendTelegram(
    [
      "\u{2709}\u{FE0F} <b>New contact message</b>",
      `\u{1F464} ${escapeHtml(name)}`,
      `\u{1F4E7} ${escapeHtml(email)}`,
      "",
      escapeHtml(message),
    ].join("\n")
  );
  if (tg.ok) delivered = true;

  // Optional secondary: SMTP email, used only when configured (e.g. on a paid
  // plan where outbound SMTP is allowed).
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT ?? 587),
        secure: Number(SMTP_PORT ?? 587) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${SMTP_USER}>`,
        to: CONTACT_TO ?? SMTP_USER,
        replyTo: email,
        subject: `New portfolio message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
        html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g, "<br/>")}</p>`,
      });
      delivered = true;
    } catch (err) {
      console.error("Contact form SMTP error:", err);
    }
  }

  if (!delivered) {
    return NextResponse.json(
      {
        error:
          "Messaging is not configured yet. Please reach me directly at samsuljahith@gmail.com.",
      },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true });
}
