"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const CONTACT_EMAILS = [
  "emivan12@gmail.com",
  "nicoalvez28@gmail.com",
  "tomasckian@gmail.com",
  "maurellinacho@gmail.com",
  "tomyfugassa@gmail.com",
];

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
    <section id="demo" className="bg-ink py-[76px] sm:py-[76px]">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[oklch(0.78_0.09_50)]">
              Agendemos una demo
            </span>
            <h2 className="mt-4 font-serif text-[26px] font-semibold leading-tight text-white sm:text-4xl">
              Contanos de tu empresa y te mostramos CFO.ai en acción
            </h2>
            <p className="mt-4.5 max-w-[400px] text-base leading-relaxed text-[oklch(0.65_0.015_55)]">
              En 20 minutos te mostramos cómo se vería tu flujo de caja proyectado, qué alertas
              tendrías hoy y cómo se integraría con tu sistema actual.
            </p>

            <ul className="mt-[30px] flex flex-col gap-3.5">
              {[
                "Demo personalizada con datos de ejemplo de tu sector",
                "Sin costo ni compromiso",
                "Podés invitar a tu contador o socio",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[oklch(0.72_0.015_55)]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="2.6"
                    className="mt-0.5 shrink-0"
                  >
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-[13.5px] text-[oklch(0.55_0.015_55)]">
              ¿Preferís escribirnos directo?{" "}
              <a
                href={`mailto:${CONTACT_EMAILS.join(",")}`}
                className="font-semibold text-white underline underline-offset-4"
              >
                Escribinos por mail
              </a>
            </p>
          </div>

          <div className="rounded-[3px] bg-white p-7 text-ink sm:p-9">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-ink">
                  ¡Listo, recibimos tu solicitud!
                </h3>
                <p className="mt-2 text-sm text-ink-soft">
                  Te vamos a escribir en las próximas horas para coordinar el mejor horario para
                  la demo.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold text-accent-dark hover:text-accent"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
                <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
                  <Field label="Nombre" name="nombre" required placeholder="Tu nombre" />
                  <Field label="Empresa" name="empresa" required placeholder="Nombre de tu empresa" />
                </div>
                <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" required placeholder="vos@empresa.com" />
                  <Field label="Teléfono (opcional)" name="telefono" type="tel" placeholder="+598 ..." />
                </div>

                <label className="flex flex-col gap-1.5">
                  <span className="text-[12.5px] font-semibold text-ink-soft">Rol en la empresa</span>
                  <select
                    name="rol"
                    className="rounded-[2px] border border-line bg-white px-[13px] py-[11px] text-[14.5px] text-ink outline-none focus:border-accent"
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
                  <span className="text-[12.5px] font-semibold text-ink-soft">
                    Contanos brevemente tu situación (opcional)
                  </span>
                  <textarea
                    name="mensaje"
                    rows={3}
                    placeholder="Ej: manejamos la caja en Excel y nos cuesta anticipar los pagos del mes que viene..."
                    className="resize-none rounded-[2px] border border-line bg-white px-[13px] py-[11px] text-[14.5px] text-ink outline-none placeholder:text-ink-faint focus:border-accent"
                  />
                </label>

                {status === "error" && (
                  <p className="rounded-[2px] bg-red-50 px-3.5 py-2.5 text-sm text-red-700">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-1 inline-flex w-full items-center justify-center rounded-[3px] bg-ink px-6 py-[15px] text-[15.5px] font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? "Enviando..." : "Agendar demo"}
                </button>
                <p className="text-center text-xs leading-relaxed text-ink-faint">
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
      <span className="text-[12.5px] font-semibold text-ink-soft">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="rounded-[2px] border border-line bg-white px-[13px] py-[11px] text-[14.5px] text-ink outline-none placeholder:text-ink-faint focus:border-accent"
      />
    </label>
  );
}
