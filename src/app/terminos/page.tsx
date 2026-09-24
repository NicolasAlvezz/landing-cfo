import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Términos y Condiciones — Finora",
  description: "Condiciones de uso del sitio y del proceso de demo de Finora.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Términos y Condiciones" updated="24 de septiembre de 2026">
      <p>
        Al usar finora.com.uy (el &quot;Sitio&quot;) o completar el formulario de demo, aceptás estas
        condiciones. Leelas junto con nuestra <a href="/privacidad">Política de Privacidad</a>.
      </p>

      <section>
        <h2>Qué es el Sitio hoy</h2>
        <p>
          Finora es, en esta etapa, un <strong>proyecto en validación</strong>: el Sitio presenta la idea,
          muestra cómo se vería el producto y junta interesados para una demo. No es todavía una
          aplicación en producción conectada a Odoo, planillas o sistemas bancarios reales.{" "}
          <strong>
            Las cifras, alertas e informes que se muestran en el Sitio son datos de ejemplo
          </strong>{" "}
          para ilustrar el producto — no corresponden a ninguna empresa real ni deben usarse para tomar
          decisiones.
        </p>
      </section>

      <section>
        <h2>Uso aceptable</h2>
        <p>
          Podés navegar el Sitio y completar el formulario de demo con información real y propia. No
          está permitido: intentar vulnerar la seguridad del Sitio, extraer contenido de forma masiva
          (scraping) fuera de lo razonable, ni usar el formulario para enviar información falsa o de
          terceros sin su consentimiento.
        </p>
      </section>

      <section>
        <h2>Propiedad intelectual</h2>
        <p>
          El nombre &quot;Finora&quot;, el isotipo, la paleta y el resto de la identidad de marca, así
          como los textos e imágenes del Sitio, pertenecen al equipo del proyecto. No está permitido
          reproducirlos ni usarlos comercialmente sin autorización.
        </p>
      </section>

      <section>
        <h2>Sin garantía</h2>
        <p>
          El Sitio se ofrece &quot;tal cual&quot;, sin garantía de disponibilidad continua ni de que la
          información publicada esté libre de errores. Al ser un proyecto en validación, las funciones
          descritas pueden cambiar antes del lanzamiento.
        </p>
      </section>

      <section>
        <h2>Límite de responsabilidad</h2>
        <p>
          En la medida permitida por la ley uruguaya, no somos responsables por daños indirectos
          derivados del uso del Sitio. Ninguna decisión financiera debería tomarse en base a las cifras
          de ejemplo que se muestran acá.
        </p>
      </section>

      <section>
        <h2>Cuando exista un producto pago</h2>
        <p>
          Estos términos se van a actualizar con condiciones de contratación, facturación y niveles de
          servicio antes de que Finora esté disponible como producto pago. Ver también la{" "}
          <a href="/reembolso">Política de Reembolso</a>.
        </p>
      </section>

      <section>
        <h2>Ley aplicable</h2>
        <p>
          Estos términos se rigen por las leyes de la República Oriental del Uruguay. Cualquier disputa
          se somete a los tribunales competentes de Montevideo.
        </p>
      </section>

      <section>
        <h2>Contacto</h2>
        <p>
          Preguntas sobre estos términos: <a href="mailto:nicoalvez28@gmail.com">nicoalvez28@gmail.com</a>.
        </p>
      </section>
    </LegalPage>
  );
}
