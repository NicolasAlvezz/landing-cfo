"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "¿CFO.ai reemplaza a mi contador?",
    a: "No. En nuestra validación, quienes ya trabajan con un contador fueron claros: la herramienta debe ser un complemento, no un reemplazo. CFO.ai se encarga del análisis y la proyección; tu contador o asesor puede revisar y validar cada informe antes de que lo uses para decidir.",
  },
  {
    q: "¿Cómo protegen la seguridad de mis datos financieros?",
    a: "Fue la principal preocupación en la validación que hicimos, y la tomamos en serio: la información se transmite y almacena cifrada, con control de accesos, y vos decidís qué sistemas conectar y qué datos compartir.",
  },
  {
    q: "¿Con qué sistemas se integra?",
    a: "Hoy nos enfocamos en integrarnos con los sistemas más usados por las PyMEs que consultamos: Odoo, Excel/Google Sheets, y otros sistemas contables. Si usás otro, contanos en la demo y evaluamos la integración.",
  },
  {
    q: "¿Puedo probarlo antes de contratarlo?",
    a: "Sí. Muchas de las empresas que consultamos nos dijeron que antes de contratar preferirían una prueba gratuita o un piloto, así que eso es justamente lo que ofrecemos al agendar una demo.",
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
    <section id="faq" className="border-t border-line bg-paper-alt py-[76px] sm:py-[72px]">
      <div className="container-page">
        <div className="max-w-[640px]">
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-accent-dark">
            Preguntas frecuentes
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.15] text-ink sm:text-4xl">
            Las dudas que más nos plantearon
          </h2>
        </div>

        <div className="mt-12 max-w-[820px]">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="border-t border-line last:border-b">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-7 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base font-semibold text-ink sm:text-[17px]">
                    {item.q}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className={`shrink-0 text-ink-faint transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="max-w-[680px] pb-7">
                    <p className="text-[14.5px] leading-relaxed text-ink-soft">{item.a}</p>
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
