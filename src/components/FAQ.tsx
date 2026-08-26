"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "¿CFO.ai reemplaza a mi contador?",
    a: "No. En nuestra validación, quienes ya trabajan con un contador fueron claros: la herramienta debe ser un complemento, no un reemplazo. CFO.ai se encarga del análisis y la proyección; tu contador o asesor puede revisar y validar cada informe antes de que lo uses para decidir.",
  },
  {
    q: "¿Cómo protegen la seguridad de mis datos financieros?",
    a: "Fue la principal preocupación en la encuesta que hicimos, y la tomamos en serio: la información se transmite y almacena cifrada, con control de accesos, y vos decidís qué sistemas conectar y qué datos compartir.",
  },
  {
    q: "¿Con qué sistemas se integra?",
    a: "Hoy nos enfocamos en integrarnos con los sistemas más usados por las PyMEs que validamos: Odoo, Excel/Google Sheets, y otros sistemas contables. Si usás otro, contanos en la demo y evaluamos la integración.",
  },
  {
    q: "¿Puedo probarlo antes de contratarlo?",
    a: "Sí. Muchas de las empresas que encuestamos nos dijeron que antes de contratar preferirían una prueba gratuita o un piloto, así que eso es justamente lo que ofrecemos al agendar una demo.",
  },
  {
    q: "¿Cómo sé que puedo confiar en las recomendaciones?",
    a: "Cada conclusión muestra los datos que la respaldan y el cálculo puede revisarse y auditarse. No es una caja negra: podés ver de dónde sale cada número.",
  },
  {
    q: "¿Con qué frecuencia se actualiza el análisis?",
    a: "Vos elegís: la mayoría de las empresas que consultamos prefiere una actualización semanal, aunque también ofrecemos frecuencia mensual o en tiempo real si ya trabajás con un ERP conectado.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface-alt py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand">
            Preguntas frecuentes
          </span>
          <h2 className="text-balance mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Las dudas que más nos plantearon
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-2xl divide-y divide-border rounded-2xl border border-border bg-surface">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-ink sm:text-base">{item.q}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className={`shrink-0 text-ink-soft transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed text-ink-soft">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
