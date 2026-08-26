const SECTORS = [
  "Tecnología",
  "Salud",
  "Comercio",
  "Industria",
  "Gastronomía y hotelería",
  "Servicios profesionales",
  "Editorial",
];

const SYSTEMS = [
  { name: "Odoo", value: 3 },
  { name: "Excel / Google Sheets", value: 2 },
  { name: "ZetaSoftware", value: 1 },
  { name: "TAREUS", value: 1 },
  { name: "Memory", value: 1 },
  { name: "Sistema interno propio", value: 1 },
];

const maxSystems = Math.max(...SYSTEMS.map((s) => s.value));

export default function Validation() {
  return (
    <section id="validacion" className="bg-surface-alt py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand">
            Validación de la idea
          </span>
          <h2 className="text-balance mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            No lo inventamos nosotros, lo dijo el mercado
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Antes de construir, encuestamos a dueños, socios, gerentes, contadores y responsables
            administrativos de empresas uruguayas, difundida por correo, WhatsApp y LinkedIn.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface p-7">
            <h3 className="text-sm font-bold text-ink-soft">Empresas participantes</h3>
            <p className="mt-2 text-4xl font-extrabold text-ink">9</p>
            <p className="mt-2 text-sm text-ink-soft">
              Desde emprendimientos de una persona hasta empresas de más de 50 empleados.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {SECTORS.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand-dark"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-7">
            <h3 className="text-sm font-bold text-ink-soft">Sistemas que usan hoy</h3>
            <div className="mt-4 flex flex-col gap-3">
              {SYSTEMS.map((s) => (
                <div key={s.name}>
                  <div className="flex items-center justify-between text-xs font-medium text-ink-soft">
                    <span>{s.name}</span>
                    <span>{s.value}</span>
                  </div>
                  <div className="mt-1 h-2 w-full rounded-full bg-surface-alt">
                    <div
                      className="h-2 rounded-full bg-accent"
                      style={{ width: `${(s.value / maxSystems) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-surface p-7">
              <h3 className="text-sm font-bold text-ink-soft">Utilidad percibida</h3>
              <p className="mt-2 text-4xl font-extrabold text-ink">56%</p>
              <p className="mt-2 text-sm text-ink-soft">
                calificó la herramienta con 4 o 5 sobre 5 al preguntarle qué tan útil sería para su
                empresa.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-7">
              <h3 className="text-sm font-bold text-ink-soft">Disposición a pagar</h3>
              <p className="mt-2 text-4xl font-extrabold text-ink">USD 20–200</p>
              <p className="mt-2 text-sm text-ink-soft">
                por mes, según el tamaño de la empresa y las funcionalidades incluidas.
              </p>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-soft">
          Datos relevados el 26 de agosto de 2026 como parte del anteproyecto del equipo. Seguimos
          entrevistando empresas interesadas en profundizar la validación.
        </p>
      </div>
    </section>
  );
}
