const CONCERNS = [
  {
    concern: "Seguridad y confidencialidad de la información",
    answer:
      "Fue la preocupación más repetida en nuestra validación. Tus datos financieros son sensibles y así los tratamos: cifrado, control de accesos y vos decidís qué se conecta.",
  },
  {
    concern: "Exactitud de los resultados",
    answer:
      "Cada conclusión muestra los datos que la respaldan y el cálculo puede ser revisado y auditado, no es una caja negra.",
  },
  {
    concern: "“Que reemplace el criterio de mi contador”",
    answer:
      "Un respondente de la encuesta lo dijo explícito, y coincidimos: CFO.ai se posiciona como complemento, no reemplazo. Tu contador o asesor puede validar cada informe.",
  },
  {
    concern: "Tiempo para cargar la información",
    answer:
      "Nos integramos con lo que ya usás (Odoo, planillas, sistema contable) para minimizar la carga manual desde el primer día.",
  },
];

export default function Trust() {
  return (
    <section className="bg-navy py-20 text-white sm:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-accent">
              Confianza, no caja negra
            </span>
            <h2 className="text-balance mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Lo que más te preocuparía, es lo primero que resolvimos
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Le preguntamos directamente a dueños, gerentes y contadores qué les preocuparía de usar
              una herramienta como esta. Estas fueron sus principales dudas — y cómo las abordamos.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {CONCERNS.map((item) => (
              <div
                key={item.concern}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">{item.concern}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/65">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
