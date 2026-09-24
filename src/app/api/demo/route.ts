import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type DemoRequestBody = {
  nombre?: string;
  empresa?: string;
  email?: string;
  telefono?: string;
  rol?: string;
  mensaje?: string;
  consentimiento?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// A dónde llegan las notificaciones de cada solicitud de demo.
const NOTIFY_RECIPIENTS = [
  "emivan12@gmail.com",
  "nicoalvez28@gmail.com",
  "tomasckian@gmail.com",
  "maurellinacho@gmail.com",
  "tomyfugassa@gmail.com",
];

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailText(submission: Record<string, string | null>) {
  return [
    "Nueva solicitud de demo — Finora",
    "",
    `Nombre: ${submission.nombre}`,
    `Empresa: ${submission.empresa}`,
    `Email: ${submission.email}`,
    `Teléfono: ${submission.telefono ?? "-"}`,
    `Rol: ${submission.rol ?? "-"}`,
    `Mensaje: ${submission.mensaje ?? "-"}`,
    "",
    `Recibido: ${submission.receivedAt}`,
  ].join("\n");
}

function buildEmailHtml(submission: Record<string, string | null>) {
  const row = (label: string, value: string | null) =>
    `<tr><td style="padding:6px 12px 6px 0;color:#666;font-size:13px;white-space:nowrap;">${label}</td><td style="padding:6px 0;color:#111;font-size:14px;">${escapeHtml(
      value ?? "-"
    )}</td></tr>`;

  return `
    <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:520px;">
      <h2 style="margin:0 0 12px;font-size:18px;">Nueva solicitud de demo — Finora</h2>
      <table style="border-collapse:collapse;">
        ${row("Nombre", submission.nombre)}
        ${row("Empresa", submission.empresa)}
        ${row("Email", submission.email)}
        ${row("Teléfono", submission.telefono)}
        ${row("Rol", submission.rol)}
        ${row("Mensaje", submission.mensaje)}
      </table>
      <p style="margin-top:16px;color:#999;font-size:12px;">Recibido: ${submission.receivedAt}</p>
    </div>
  `;
}

export async function POST(request: Request) {
  let body: DemoRequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const { nombre, empresa, email, telefono, rol, mensaje, consentimiento } = body;

  if (!nombre?.trim() || !empresa?.trim() || !email?.trim()) {
    return NextResponse.json(
      { error: "Completá al menos nombre, empresa y email." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "El email no parece válido." }, { status: 400 });
  }

  if (!consentimiento) {
    return NextResponse.json(
      { error: "Necesitamos tu consentimiento para contactarte." },
      { status: 400 }
    );
  }

  const submission = {
    nombre: nombre.trim(),
    empresa: empresa.trim(),
    email: email.trim(),
    telefono: telefono?.trim() || null,
    rol: rol?.trim() || null,
    mensaje: mensaje?.trim() || null,
    receivedAt: new Date().toISOString(),
  };

  console.log("[demo-request]", submission);

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_APP_PASSWORD;

  let emailSent = false;
  if (emailUser && emailPass) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: emailUser, pass: emailPass },
      });

      await transporter.sendMail({
        from: `"Finora — Solicitudes de demo" <${emailUser}>`,
        to: NOTIFY_RECIPIENTS.join(", "),
        replyTo: submission.email,
        subject: `Nueva solicitud de demo — ${submission.empresa}`,
        text: buildEmailText(submission),
        html: buildEmailHtml(submission),
      });

      emailSent = true;
    } catch (err) {
      console.error("[demo-request] email failed", err);
    }
  }

  // Notificación adicional opcional (Slack, Sheets, CRM, etc.) vía webhook.
  const webhookUrl = process.env.DEMO_REQUEST_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
    } catch (err) {
      console.error("[demo-request] webhook failed", err);
    }
  }

  // Si el envío de mail está configurado (EMAIL_USER/EMAIL_APP_PASSWORD) pero
  // falló, no le decimos al usuario que salió todo bien: sin esto, el mail es
  // el único registro de la solicitud.
  if (emailUser && emailPass && !emailSent) {
    return NextResponse.json(
      {
        error: "No pudimos enviar tu solicitud. Probá de nuevo en unos minutos.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
