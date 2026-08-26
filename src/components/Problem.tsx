const PAIN_POINTS = [
  {
    title: "No saben cuánta caja van a tener",
    desc: "La dificultad para anticipar la disponibilidad futura de caja fue el problema más mencionado en nuestra validación.",
  },
  {
    title: "Los clientes pagan tarde",
    desc: "Las demoras de clientes en los pagos generan descalces constantes entre facturar, cobrar y pagar.",
  },
  {
    title: "Los costos suben sin aviso",
    desc: "Aumentos inesperados de costos y rentabilidad menor a la esperada aparecen entre los problemas de los últimos 12 meses.",
  },
  {
    title: "La info está, pero dispersa",
    desc: "Incluso empresas con Odoo, planillas o sistemas contables no logran convertir esos datos en proyecciones o alertas útiles.",
  },
  {
    title: "Financiarse es una carrera de obstáculos",
    desc: "Reunir y presentar la documentación que piden bancos e instituciones financieras es lento y poco claro.",
  },
  {
    title: "La decisión recae en una sola persona",
    desc: "En la mayoría de los casos, el dueño o gerente interpreta la información financiera mientras atiende todo lo demás del negocio.",
  },
];

export default function Problem() {
  return (
    <section id="problema" className="bg-background py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand">
            Lo que encontramos al validar la idea
          </span>
          <h2 className="text-balance mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Gestionar la caja de una PyME a pulmón es agotador
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Encuestamos a dueños, gerentes, contadores y responsables administrativos de empresas
            uruguayas de distintos sectores y tamaños. Estos fueron los problemas que más se repitieron.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PAIN_POINTS.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light text-brand">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 9v4m0 4h.01M10.29 3.86l-8.18 14.18A1.5 1.5 0 0 0 3.5 20h17a1.5 1.5 0 0 0 1.4-1.96l-8.18-14.18a1.5 1.5 0 0 0-2.43 0Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-bold text-ink">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{point.desc}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-brand/20 bg-brand-light p-6 text-center sm:p-8">
          <p className="text-base leading-relaxed text-brand-dark sm:text-lg">
            &ldquo;No siempre se tiene claro qué documentación se requiere o cuánto conviene solicitar&rdquo;
            fue una de las conclusiones más repetidas por quienes ya intentaron acceder a financiamiento
            bancario en los últimos dos años.
          </p>
        </div>
      </div>
    </section>
  );
}
