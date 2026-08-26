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
    <section id="como-funciona" className="bg-background py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand">
            Cómo funciona
          </span>
          <h2 className="text-balance mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            De tus datos a una decisión, en tres pasos
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <div key={step.n} className="relative">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-extrabold text-border">{step.n}</span>
                {i < STEPS.length - 1 && (
                  <span className="hidden h-px flex-1 bg-border sm:block" />
                )}
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
