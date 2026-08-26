const STEPS = [
  {
    n: "01",
    title: "Conectá tus datos",
    desc: "Vinculá tu sistema contable (Odoo, Excel/Google Sheets u otro) o cargá la información manualmente. Vos elegís qué compartir.",
  },
  {
    n: "02",
    title: "La IA analiza y proyecta",
    desc: "CFO.ai procesa tu información e identifica tendencias, riesgos y oportunidades, con la frecuencia de actualización que necesites.",
  },
  {
    n: "03",
    title: "Recibís recomendaciones claras",
    desc: "Cada conclusión muestra los datos que la respaldan y puede ser revisada por tu contador o asesor antes de decidir.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-paper py-[76px] sm:py-[72px]">
      <div className="container-page">
        <div className="max-w-[640px]">
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-accent-dark">
            Cómo funciona
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.15] text-ink sm:text-4xl">
            De tus datos a una decisión, en tres pasos
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.n}>
              <div
                className="font-serif text-[44px] font-semibold text-accent-soft"
                style={{ WebkitTextStroke: "1.5px var(--color-accent)" }}
              >
                {step.n}
              </div>
              <hr className="mt-[18px] h-px border-0 bg-line" />
              <h3 className="mt-[18px] text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
