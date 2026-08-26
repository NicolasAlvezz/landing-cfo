const FEATURES = [
  {
    title: "Proyección de flujo de caja",
    desc: "La funcionalidad más pedida en la validación. Visualizá cuánta caja vas a tener en las próximas semanas y meses, antes de que el problema aparezca.",
    big: true,
  },
  {
    title: "Alertas tempranas",
    desc: "Avisos automáticos ante posibles faltantes de dinero, para actuar con tiempo y no cuando ya es tarde.",
  },
  {
    title: "Análisis de rentabilidad",
    desc: "Entendé qué productos, clientes o líneas de negocio realmente te dejan margen.",
  },
  {
    title: "Recomendaciones y plan de acción",
    desc: "Cada análisis viene acompañado de próximos pasos concretos, explicados en lenguaje simple.",
  },
  {
    title: "Simulación de escenarios",
    desc: "Probá distintas decisiones —una inversión, un nuevo cliente, un aumento de costos— antes de tomarlas.",
  },
  {
    title: "Comparación con períodos anteriores",
    desc: "Seguimiento mes a mes y año a año para detectar tendencias a tiempo.",
  },
  {
    title: "Control del ciclo de cobros y pagos",
    desc: "Visibilidad clara de qué vas a cobrar, qué tenés que pagar, y cuándo.",
  },
  {
    title: "Integración con tu sistema contable",
    desc: "Se conecta con Odoo, Excel/Google Sheets y otros sistemas que ya usás, sin duplicar trabajo.",
  },
];

export default function Solution() {
  return (
    <section id="producto" className="bg-surface-alt py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-accent-dark">
            La solución
          </span>
          <h2 className="text-balance mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Un CFO con IA, siempre disponible para tu equipo
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            CFO.ai toma la información financiera que ya generás y la convierte en proyecciones,
            alertas y recomendaciones claras. Priorizamos las funciones que las empresas que
            encuestamos pidieron con más frecuencia.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) =>
            f.big ? (
              <div
                key={f.title}
                className="rounded-2xl border border-navy bg-navy p-6 shadow-sm sm:col-span-2 lg:col-span-2"
              >
                <h3 className="text-lg font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{f.desc}</p>
              </div>
            ) : (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.desc}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
