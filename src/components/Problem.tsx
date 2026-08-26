const ROWS = [
  {
    before: "No sabés cuánta caja vas a tener la semana que viene",
    after: "Proyección de flujo de caja semana a semana",
  },
  {
    before: "Te enterás de un faltante de dinero cuando ya es tarde",
    after: "Alertas tempranas ante posibles faltantes",
  },
  {
    before: "La info está repartida entre Odoo, planillas y mails",
    after: "Todo integrado con el sistema que ya usás",
  },
  {
    before: "Una sola persona interpreta todo, sin tiempo ni respaldo",
    after: "Recomendaciones explicables, revisables por tu contador",
  },
  {
    before: "Pedir financiamiento implica juntar documentación a ciegas",
    after: "Información clara y ordenada, lista para presentar",
  },
];

export default function Problem() {
  return (
    <section id="problema" className="bg-paper py-16 sm:py-[72px]">
      <div className="container-page">
        <div className="max-w-[640px]">
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-accent-dark">
            Lo que encontramos al validar la idea
          </span>
          <h2 className="mt-3.5 font-serif text-3xl font-semibold leading-[1.15] text-ink sm:text-4xl">
            Gestionar la caja de una PyME a pulmón es agotador
          </h2>
          <p className="mt-3.5 text-base leading-relaxed text-ink-soft sm:text-[16.5px]">
            Consultamos a dueños, gerentes, contadores y responsables administrativos de empresas
            uruguayas de distintos sectores y tamaños. Esto fue lo que más se repitió — y así
            cambia con CFO.ai.
          </p>
        </div>

        <div className="mt-9 overflow-hidden border border-line">
          <div className="grid grid-cols-2">
            <div className="border-r border-line bg-paper-alt px-4 py-3.5 sm:px-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-faint sm:text-xs">
                Hoy, sin CFO.ai
              </span>
            </div>
            <div className="bg-ink px-4 py-3.5 sm:px-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[oklch(0.78_0.09_50)] sm:text-xs">
                Con CFO.ai
              </span>
            </div>
          </div>
          {ROWS.map((row) => (
            <div key={row.before} className="grid grid-cols-2 border-t border-line">
              <div className="border-r border-line px-4 py-4 text-sm text-ink-soft sm:px-6 sm:text-[14.5px]">
                {row.before}
              </div>
              <div className="px-4 py-4 text-sm text-ink sm:px-6 sm:text-[14.5px]">{row.after}</div>
            </div>
          ))}
        </div>

        <div className="mt-7 border-l-[3px] border-accent bg-paper-alt px-5 py-4 sm:px-7">
          <p className="font-serif text-base italic leading-snug text-ink sm:text-[17px]">
            &ldquo;No siempre se tiene claro qué documentación se requiere o cuánto conviene
            solicitar&rdquo;
          </p>
          <p className="mt-2 text-[13px] text-ink-faint">
            Una de las conclusiones más repetidas por quienes ya intentaron acceder a
            financiamiento bancario en los últimos dos años.
          </p>
        </div>
      </div>
    </section>
  );
}
