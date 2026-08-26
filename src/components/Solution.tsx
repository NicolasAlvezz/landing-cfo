const TOP_FEATURES = [
  {
    label: "Alertas",
    title: "Alertas tempranas",
    desc: "Avisos automáticos ante posibles faltantes de dinero, para actuar con tiempo y no cuando ya es tarde.",
  },
  {
    label: "Rentabilidad",
    title: "Análisis de rentabilidad",
    desc: "Entendé qué productos, clientes o líneas de negocio realmente te dejan margen.",
  },
  {
    label: "Acción",
    title: "Recomendaciones y plan de acción",
    desc: "Cada análisis viene acompañado de próximos pasos concretos, explicados en lenguaje simple.",
  },
  {
    label: "Escenarios",
    title: "Simulación de escenarios",
    desc: "Probá distintas decisiones —una inversión, un nuevo cliente, un aumento de costos— antes de tomarlas.",
  },
];

const BOTTOM_FEATURES = [
  {
    label: "Histórico",
    title: "Comparación con períodos anteriores",
    desc: "Seguimiento mes a mes y año a año para detectar tendencias a tiempo.",
  },
  {
    label: "Cobros y pagos",
    title: "Control del ciclo de cobros y pagos",
    desc: "Visibilidad clara de qué vas a cobrar, qué tenés que pagar, y cuándo.",
  },
  {
    label: "Integración",
    title: "Integración con tu sistema contable",
    desc: "Se conecta con Odoo, Excel/Google Sheets y otros sistemas que ya usás, sin duplicar trabajo.",
  },
];

export default function Solution() {
  return (
    <section id="producto" className="border-y border-line bg-paper-alt py-[76px] sm:py-[72px]">
      <div className="container-page">
        <div className="max-w-[640px]">
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-accent-dark">
            La solución
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.15] text-ink sm:text-4xl">
            Un CFO con IA, siempre disponible para tu equipo
          </h2>
          <p className="mt-4.5 text-base leading-relaxed text-ink-soft sm:text-[16.5px]">
            CFO.ai toma la información financiera que ya generás y la convierte en proyecciones,
            alertas y recomendaciones claras. Priorizamos las funciones que las empresas
            consultadas pidieron con más frecuencia.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px bg-line sm:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col justify-between bg-ink p-7 sm:row-span-2 sm:p-9">
            <div>
              <div className="font-serif text-sm text-[oklch(0.5_0.02_55)]">La más pedida</div>
              <h3 className="mt-3.5 font-serif text-xl font-semibold leading-tight text-white sm:text-[23px]">
                Proyección de flujo de caja
              </h3>
              <p className="mt-3 max-w-[320px] text-sm leading-relaxed text-[oklch(0.65_0.015_55)]">
                Visualizá cuánta caja vas a tener en las próximas semanas y meses, antes de que el
                problema aparezca.
              </p>
            </div>
            <svg width="100%" height="90" viewBox="0 0 320 90" className="mt-6">
              <polyline
                points="0,70 40,60 80,64 120,40 160,48 200,20 240,30 280,10 320,16"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="320" cy="16" r="4" fill="var(--color-accent)" />
            </svg>
          </div>

          {TOP_FEATURES.map((f) => (
            <div key={f.title} className="bg-white p-7">
              <div className="font-serif text-sm text-ink-faint">{f.label}</div>
              <h3 className="mt-3 text-[16.5px] font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-px grid grid-cols-1 gap-px bg-line sm:grid-cols-3">
          {BOTTOM_FEATURES.map((f) => (
            <div key={f.title} className="bg-white p-7">
              <div className="font-serif text-sm text-ink-faint">{f.label}</div>
              <h3 className="mt-3 text-[16.5px] font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
