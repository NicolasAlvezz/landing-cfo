"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const CONTACT_EMAIL = "hola@cfo-ai.uy";

export default function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "No pudimos enviar tu solicitud. Intentá de nuevo.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Ocurrió un error inesperado.");
    }
  }

  return (
    <section id="demo" className="bg-navy py-20 text-white sm:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-accent">
              Agendemos una demo
            </span>
            <h2 className="text-balance mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Contanos de tu empresa y te mostramos CFO.ai en acción
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              En 20 minutos te mostramos cómo se vería tu flujo de caja proyectado, qué alertas
              tendrías hoy y cómo se integraría con tu sistema actual.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {[
                "Demo personalizada con datos de ejemplo de tu sector",
                "Sin costo ni compromiso",
                "Podés invitar a tu contador o socio",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-white/50">
              Preferís escribirnos directo?{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-white underline underline-offset-4">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white p-6 text-ink sm:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-light text-accent-dark">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">¡Listo, recibimos tu solicitud!</h3>
                <p className="mt-2 text-sm text-ink-soft">
                  Te vamos a escribir en las próximas horas para coordinar el mejor horario para la demo.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold text-brand hover:text-brand-dark"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Nombre" name="nombre" required placeholder="Tu nombre" />
                  <Field label="Empresa" name="empresa" required placeholder="Nombre de tu empresa" />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" required placeholder="vos@empresa.com" />
                  <Field label="Teléfono (opcional)" name="telefono" type="tel" placeholder="+598 ..." />
                </div>

                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-ink-soft">Rol en la empresa</span>
                  <select
                    name="rol"
                    className="rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Seleccioná una opción
                    </option>
                    <option value="Dueño/a o socio/a">Dueño/a o socio/a</option>
                    <option value="Director/a o gerente general">Director/a o gerente general</option>
                    <option value="Contador/a interno/a">Contador/a interno/a</option>
                    <option value="Responsable administrativo">Responsable administrativo</option>
                    <option value="Otro">Otro</option>
                  </select>
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-ink-soft">
                    Contanos brevemente tu situación (opcional)
                  </span>
                  <textarea
                    name="mensaje"
                    rows={3}
                    placeholder="Ej: manejamos la caja en Excel y nos cuesta anticipar los pagos del mes que viene..."
                    className="resize-none rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-ink-soft/60 focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </label>

                {status === "error" && (
                  <p className="rounded-lg bg-red-50 px-3.5 py-2.5 text-sm text-red-700">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-brand/30 transition-all hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? "Enviando..." : "Agendar demo"}
                </button>
                <p className="text-center text-xs text-ink-soft">
                  Al enviar aceptás que te contactemos para coordinar la demo. No compartimos tu
                  información con terceros.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold text-ink-soft">
        {label}
        {required && <span className="text-brand"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-ink-soft/60 focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </label>
  );
}
