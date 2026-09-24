"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/Reveal";
import Spotlight from "@/components/Spotlight";
import { FinoraMark } from "@/components/FinoraMark";

type Status = "idle" | "loading" | "success" | "error";

const CONTACT_EMAILS = [
  "emivan12@gmail.com",
  "nicoalvez28@gmail.com",
  "tomasckian@gmail.com",
  "maurellinacho@gmail.com",
  "tomyfugassa@gmail.com",
];

// Los valores enviados al backend/mail quedan siempre en español, sin importar
// el idioma de la UI, para que el equipo reciba las solicitudes en un formato
// consistente.
const ROL_VALUES = translations.es.demoForm.fields.rol.options;

export default function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const { t } = useLanguage();

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
        throw new Error(body.error ?? t.demoForm.errors.generic);
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : t.demoForm.errors.unexpected);
    }
  }

  return (
    <section id="demo" className="bg-ink py-[76px] sm:py-[76px]">
      <Spotlight color="rgba(192,132,58,0.13)" className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal direction="right">
            <SectionEyebrow index="09" tone="dark">
              {t.demoForm.eyebrow}
            </SectionEyebrow>
            <h2 className="mt-4 font-heading text-[26px] font-bold leading-tight tracking-[-0.01em] text-bone sm:text-4xl">
              {t.demoForm.h2}
            </h2>
            <p className="mt-4.5 max-w-[400px] text-base leading-relaxed text-fog">
              {t.demoForm.p}
            </p>

            <ul className="mt-[30px] flex flex-col gap-3.5">
              {t.demoForm.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-fog">
                  <FinoraMark size={14} color="var(--color-accent)" className="mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-[13.5px] text-fog">
              {t.demoForm.contactPrefix}{" "}
              <a
                href={`mailto:${CONTACT_EMAILS.join(",")}`}
                className="focus-ring rounded-[2px] font-semibold text-bone underline underline-offset-4"
              >
                {t.demoForm.contactLink}
              </a>
            </p>
          </Reveal>

          <Reveal delay={140} direction="left" className="rounded-[3px] bg-white p-7 text-ink sm:p-9">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-ink">
                  {t.demoForm.success.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">{t.demoForm.success.p}</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="focus-ring mt-6 rounded-[2px] text-sm font-semibold text-accent-dark hover:text-accent"
                >
                  {t.demoForm.success.another}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
                <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
                  <Field
                    label={t.demoForm.fields.nombre.label}
                    name="nombre"
                    required
                    placeholder={t.demoForm.fields.nombre.placeholder}
                  />
                  <Field
                    label={t.demoForm.fields.empresa.label}
                    name="empresa"
                    required
                    placeholder={t.demoForm.fields.empresa.placeholder}
                  />
                </div>
                <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
                  <Field
                    label={t.demoForm.fields.email.label}
                    name="email"
                    type="email"
                    required
                    placeholder={t.demoForm.fields.email.placeholder}
                  />
                  <Field
                    label={t.demoForm.fields.telefono.label}
                    name="telefono"
                    type="tel"
                    placeholder={t.demoForm.fields.telefono.placeholder}
                  />
                </div>

                <label className="flex flex-col gap-1.5">
                  <span className="text-[12.5px] font-semibold text-ink-soft">
                    {t.demoForm.fields.rol.label}
                  </span>
                  <select
                    name="rol"
                    className="focus-ring rounded-[2px] border border-line bg-white px-[13px] py-[11px] text-[14.5px] text-ink focus:border-accent-dark"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {t.demoForm.fields.rol.placeholder}
                    </option>
                    {t.demoForm.fields.rol.options.map((label, i) => (
                      <option key={ROL_VALUES[i]} value={ROL_VALUES[i]}>
                        {label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="text-[12.5px] font-semibold text-ink-soft">
                    {t.demoForm.fields.mensaje.label}
                  </span>
                  <textarea
                    name="mensaje"
                    rows={3}
                    placeholder={t.demoForm.fields.mensaje.placeholder}
                    className="focus-ring resize-none rounded-[2px] border border-line bg-white px-[13px] py-[11px] text-[14.5px] text-ink placeholder:text-ink-faint focus:border-accent-dark"
                  />
                </label>

                {status === "error" && (
                  <p className="rounded-[2px] bg-danger-soft px-3.5 py-2.5 text-sm text-danger-dark" role="alert">
                    {errorMsg}
                  </p>
                )}

                <label className="flex items-start gap-2.5 text-xs leading-relaxed text-ink-faint">
                  <input
                    type="checkbox"
                    name="consentimiento"
                    required
                    className="focus-ring mt-0.5 h-4 w-4 shrink-0 accent-accent-dark"
                  />
                  <span>
                    {t.demoForm.consent}{" "}
                    <a href="/privacidad" className="focus-ring rounded-[2px] font-semibold text-ink-soft underline underline-offset-2">
                      {t.demoForm.consentLink}
                    </a>
                    .
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="focus-ring mt-1 inline-flex w-full items-center justify-center rounded-[3px] bg-ink px-6 py-[15px] text-[15.5px] font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? t.demoForm.submitting : t.demoForm.submit}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </Spotlight>
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
        {required && <span className="text-accent-dark"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="focus-ring rounded-[2px] border border-line bg-white px-[13px] py-[11px] text-[14.5px] text-ink placeholder:text-ink-faint focus:border-accent-dark"
      />
    </label>
  );
}
