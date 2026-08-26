const CONCERNS = [
  {
    concern: "Seguridad y confidencialidad de la información",
    answer:
      "Fue la preocupación más repetida en nuestra validación. Tus datos financieros son sensibles y así los tratamos: cifrado, control de accesos y vos decidís qué se conecta.",
    italic: false,
  },
  {
    concern: "Exactitud de los resultados",
    answer:
      "Cada conclusión muestra los datos que la respaldan y el cálculo puede ser revisado y auditado, no es una caja negra.",
    italic: false,
  },
  {
    concern: "“Que reemplace el criterio de mi contador”",
    answer:
      "Una de las empresas consultadas lo dijo explícitamente, y coincidimos: CFO.ai se posiciona como complemento, no reemplazo. Tu contador o asesor puede validar cada informe.",
    italic: true,
  },
  {
    concern: "Tiempo para cargar la información",
    answer:
      "Nos integramos con lo que ya usás (Odoo, planillas, sistema contable) para minimizar la carga manual desde el primer día.",
    italic: false,
  },
];

export default function Trust() {
  return (
    <section className="bg-ink py-[76px] sm:py-[76px]">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[oklch(0.78_0.09_50)]">
              Confianza, no caja negra
            </span>
            <h2 className="mt-4 font-serif text-[26px] font-semibold leading-tight text-white sm:text-4xl">
              Lo que más te preocuparía, es lo primero que resolvimos
            </h2>
            <p className="mt-4.5 max-w-[400px] text-base leading-relaxed text-[oklch(0.65_0.015_55)]">
              Le preguntamos directamente a dueños, gerentes y contadores qué les preocuparía de
              usar una herramienta como esta. Estas fueron sus principales dudas — y cómo las
              abordamos.
            </p>
          </div>

          <div className="flex flex-col">
            {CONCERNS.map((item, i) => (
              <div
                key={item.concern}
                className={`flex gap-4 py-[22px] ${i === CONCERNS.length - 1 ? "border-y" : "border-t"} border-[oklch(0.3_0.02_50)]`}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="2.4"
                  className="mt-1 shrink-0"
                >
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className={`text-[15px] font-semibold text-white ${item.italic ? "italic" : ""}`}>
                    {item.concern}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[oklch(0.6_0.015_55)]">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
