import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de Cookies — Finora",
  description: "Finora no usa cookies de seguimiento ni de terceros.",
};

export default function CookiesPage() {
  return (
    <LegalPage title="Política de Cookies" updated="24 de septiembre de 2026">
      <p>
        <strong>Hoy, finora.com.uy no usa cookies.</strong> Ni propias ni de terceros, ni de analítica,
        ni de publicidad, ni de seguimiento. Por eso el Sitio no te pide consentimiento de cookies: no
        hay nada para lo que pedírtelo.
      </p>

      <section>
        <h2>¿Qué pasa con el selector de idioma (ES/EN)?</h2>
        <p>
          Tu elección de idioma vive solo en la memoria de la pestaña mientras navegás el Sitio. No se
          guarda en una cookie ni en el almacenamiento del navegador (localStorage): si volvés a entrar
          o recargás la página, el Sitio vuelve a mostrarse en español.
        </p>
      </section>

      <section>
        <h2>¿Usan Google Analytics, Meta Pixel u otra herramienta de seguimiento?</h2>
        <p>No. El Sitio no tiene instalada ninguna herramienta de analítica ni de publicidad.</p>
      </section>

      <section>
        <h2>Si esto cambia</h2>
        <p>
          Si en el futuro sumamos analítica u otra herramienta que use cookies, vamos a actualizar esta
          página primero y vamos a pedirte consentimiento explícito antes de instalar cualquier cookie
          que no sea estrictamente necesaria para que el Sitio funcione.
        </p>
      </section>
    </LegalPage>
  );
}
