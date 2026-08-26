export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60rem 30rem at 15% -10%, rgba(79,70,229,0.55), transparent), radial-gradient(40rem 24rem at 100% 0%, rgba(20,184,166,0.35), transparent)",
        }}
      />
      <div className="container-page relative py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Validado con dueños, gerentes y contadores de PyMEs uruguayas
          </div>

          <h1
            className="animate-fade-up text-balance mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            El CFO con inteligencia artificial que le faltaba a tu PyME
          </h1>

          <p
            className="animate-fade-up text-balance mt-6 text-lg leading-relaxed text-white/70 sm:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            CFO.ai apoya a tu equipo de finanzas a anticipar problemas de caja, entender la
            rentabilidad del negocio y tomar mejores decisiones — con recomendaciones explicables,
            sin reemplazar el criterio de tu contador.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="#demo"
              className="inline-flex w-full items-center justify-center rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand-dark sm:w-auto"
            >
              Agendar una demo
            </a>
            <a
              href="#problema"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-base font-semibold text-white/90 transition-colors hover:bg-white/10 sm:w-auto"
            >
              Ver qué encontramos en la validación
            </a>
          </div>

          <p
            className="animate-fade-up mt-6 text-sm text-white/50"
            style={{ animationDelay: "300ms" }}
          >
            Se integra con Odoo, Excel/Google Sheets y otros sistemas contables que ya usás.
          </p>
        </div>

        <div
          className="animate-fade-up mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
          style={{ animationDelay: "360ms" }}
        >
          {[
            { value: "9", label: "empresas uruguayas en la primera validación" },
            { value: "56%", label: "la calificó 4 o 5 sobre 5 en utilidad" },
            { value: "USD 20–200", label: "rango de disposición a pagar por mes" },
            { value: "7", label: "sectores distintos representados" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm"
            >
              <div className="text-2xl font-extrabold text-white sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs leading-snug text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
