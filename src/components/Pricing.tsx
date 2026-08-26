const PLANS = [
  {
    name: "Starter",
    price: "USD 20–40",
    period: "/mes",
    audience: "Emprendimientos y equipos de 1 a 10 personas",
    features: [
      "Proyección de flujo de caja",
      "Alertas tempranas",
      "Informe ejecutivo mensual",
      "1 sistema conectado",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "USD 80–120",
    period: "/mes",
    audience: "PyMEs en crecimiento de 11 a 50 personas",
    features: [
      "Todo lo de Starter",
      "Análisis de rentabilidad",
      "Simulación de escenarios",
      "Comparación con períodos anteriores",
      "Integración con tu sistema contable",
    ],
    highlighted: true,
  },
  {
    name: "A medida",
    price: "USD 150–200+",
    period: "/mes",
    audience: "Empresas de más de 50 personas o necesidades específicas",
    features: [
      "Todo lo de Growth",
      "Scoring de riesgo financiero",
      "Validación de informes con contador incluida",
      "Soporte dedicado",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="bg-background py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand">Precios</span>
          <h2 className="text-balance mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Un plan según el tamaño de tu empresa
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Estos rangos surgen de lo que nos dijeron las empresas que ya validamos. Estamos
            terminando de definir el precio final — agendá una demo y te armamos una propuesta a
            medida de tu operación.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-7 ${
                plan.highlighted
                  ? "border-brand bg-navy text-white shadow-xl"
                  : "border-border bg-surface"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-bold text-navy">
                  Más elegido en la validación
                </span>
              )}
              <h3 className={`text-lg font-bold ${plan.highlighted ? "text-white" : "text-ink"}`}>
                {plan.name}
              </h3>
              <p
                className={`mt-1 text-xs ${plan.highlighted ? "text-white/60" : "text-ink-soft"}`}
              >
                {plan.audience}
              </p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className={`text-3xl font-extrabold ${plan.highlighted ? "text-white" : "text-ink"}`}>
                  {plan.price}
                </span>
                <span className={plan.highlighted ? "text-white/60" : "text-ink-soft"}>
                  {plan.period}
                </span>
              </div>

              <ul className="mt-6 flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className={`mt-0.5 shrink-0 ${plan.highlighted ? "text-accent" : "text-brand"}`}
                    >
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={plan.highlighted ? "text-white/80" : "text-ink-soft"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-white text-navy hover:bg-white/90"
                    : "bg-navy text-white hover:bg-navy-soft"
                }`}
              >
                Agendar demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
