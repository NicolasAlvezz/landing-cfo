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
  "Odoo",
  "Excel / Google Sheets",
  "ZetaSoftware",
  "TAREUS",
  "Memory",
  "Sistemas internos propios",
];

export default function Validation() {
  return (
    <section id="validacion" className="border-b border-line bg-paper-alt py-[76px] sm:py-[72px]">
      <div className="container-page">
        <div className="max-w-[640px]">
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-accent-dark">
            Validación de la idea
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.15] text-ink sm:text-4xl">
            No lo inventamos nosotros, lo dijo el mercado
          </h2>
          <p className="mt-4.5 text-base leading-relaxed text-ink-soft sm:text-[16.5px]">
            Antes de construir, consultamos a dueños, socios, gerentes, contadores y responsables
            administrativos de empresas uruguayas de sectores heterogéneos, difundiendo la
            encuesta por correo, WhatsApp y LinkedIn.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
          <div className="bg-white p-8">
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.06em] text-ink-faint">
              Quiénes participaron
            </h3>
            <p className="mt-3.5 font-serif text-xl font-semibold leading-snug text-ink">
              Desde emprendimientos de una persona hasta empresas de más de 50 empleados
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {SECTORS.map((s) => (
                <span
                  key={s}
                  className="inline-flex whitespace-nowrap rounded-full border border-line bg-white px-[15px] py-[7px] text-[13px] font-medium text-ink-soft"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8">
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.06em] text-ink-faint">
              Sistemas que usan hoy
            </h3>
            <p className="mt-3.5 font-serif text-xl font-semibold leading-snug text-ink">
              Desde planillas hasta ERPs — nos integramos con lo que ya tenés funcionando
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {SYSTEMS.map((s) => (
                <span
                  key={s}
                  className="inline-flex whitespace-nowrap rounded-full border border-[oklch(0.85_0.05_152)] bg-forest-soft px-[15px] py-[7px] text-[13px] font-medium text-[oklch(0.32_0.07_152)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8">
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.06em] text-ink-faint">
              Utilidad percibida
            </h3>
            <p className="mt-3.5 font-serif text-2xl font-semibold leading-snug text-ink">
              La mayoría la calificó como útil o muy útil
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
              (4 o 5 sobre 5) al preguntarle qué tan útil sería una herramienta así para su
              empresa.
            </p>
          </div>

          <div className="bg-white p-8">
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.06em] text-ink-faint">
              Disposición a pagar
            </h3>
            <p className="mt-3.5 font-serif text-[32px] font-semibold text-ink">USD 20–200</p>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
              por mes, según el tamaño de la empresa y las funcionalidades incluidas.
            </p>
          </div>
        </div>

        <p className="mt-9 max-w-[640px] text-sm leading-relaxed text-ink-faint">
          Seguimos entrevistando empresas interesadas en profundizar la validación — si te
          interesa participar, contanos en el formulario de abajo.
        </p>
      </div>
    </section>
  );
}
