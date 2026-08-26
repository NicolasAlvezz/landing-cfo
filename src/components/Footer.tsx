const CONTACT_EMAILS = [
  "emivan12@gmail.com",
  "nicoalvez28@gmail.com",
  "tomasckian@gmail.com",
  "maurellinacho@gmail.com",
  "tomyfugassa@gmail.com",
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-page flex flex-col items-center justify-between gap-5 py-11 sm:flex-row">
        <div className="flex items-baseline gap-0.5 font-serif text-lg font-semibold text-ink">
          CFO<span className="italic text-accent">.ai</span>
        </div>

        <p className="max-w-[420px] text-center text-[12.5px] text-ink-faint">
          Proyecto de Laboratorio de Proyectos Aplicados — Universidad ORT Uruguay. En etapa de
          validación con PyMEs uruguayas.
        </p>

        <a
          href={`mailto:${CONTACT_EMAILS.join(",")}`}
          className="text-[12.5px] font-semibold text-accent-dark"
        >
          Escribinos
        </a>
      </div>
      <div className="border-t border-line py-5 text-center text-[11.5px] text-ink-faint">
        © {new Date().getFullYear()} CFO.ai. Todos los derechos reservados.
      </div>
    </footer>
  );
}
