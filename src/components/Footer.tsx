const CONTACT_EMAIL = "hola@cfo-ai.uy";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2 font-extrabold text-ink">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-navy text-white text-xs font-bold">
            CX
          </span>
          CFO<span className="text-brand">.ai</span>
        </div>

        <p className="text-center text-xs text-ink-soft sm:text-left">
          Proyecto de Laboratorio de Proyectos Aplicados — Universidad ORT Uruguay. En etapa de
          validación con PyMEs uruguayas.
        </p>

        <a href={`mailto:${CONTACT_EMAIL}`} className="text-xs font-semibold text-brand hover:text-brand-dark">
          {CONTACT_EMAIL}
        </a>
      </div>
      <div className="container-page mt-6 border-t border-border pt-6 text-center text-xs text-ink-soft/70">
        © {new Date().getFullYear()} CFO.ai. Todos los derechos reservados.
      </div>
    </footer>
  );
}
