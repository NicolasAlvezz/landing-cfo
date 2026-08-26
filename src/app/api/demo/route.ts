import { NextResponse } from "next/server";

export const runtime = "nodejs";

type DemoRequestBody = {
  nombre?: string;
  empresa?: string;
  email?: string;
  telefono?: string;
  rol?: string;
  mensaje?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: DemoRequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const { nombre, empresa, email, telefono, rol, mensaje } = body;

  if (!nombre?.trim() || !empresa?.trim() || !email?.trim()) {
    return NextResponse.json(
      { error: "Completá al menos nombre, empresa y email." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "El email no parece válido." }, { status: 400 });
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

  // NOTE: no hay servicio de email/CRM configurado todavía. Por ahora
  // logueamos la solicitud en el servidor para no perder ningún lead.
  // Para producción, conectar acá un proveedor real, por ejemplo:
  //   - Resend / SendGrid para notificarte por mail cada nueva solicitud
  //   - Un webhook a Slack / Google Sheets / tu CRM
  // usando una variable de entorno (RESEND_API_KEY, SLACK_WEBHOOK_URL, etc).
  console.log("[demo-request]", submission);

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

  return NextResponse.json({ ok: true });
}
