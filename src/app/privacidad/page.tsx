import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de Privacidad — Finora",
  description: "Cómo Finora recolecta, usa y protege tu información personal.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Política de Privacidad" updated="24 de septiembre de 2026">
      <p>
        Esta política explica qué información recolectamos en finora.com.uy (el &quot;Sitio&quot;), para qué la
        usamos y qué derechos tenés sobre ella. Aplica a la landing page de Finora, que hoy es un{" "}
        <strong>proyecto en etapa de validación</strong> del Laboratorio de Proyectos Aplicados de la
        Universidad ORT Uruguay — todavía no existe un producto en producción que se conecte a sistemas
        contables reales.
      </p>

      <section>
        <h2>Quién es responsable de tus datos</h2>
        <p>
          <mark>[Razón social a completar]</mark>, RUT <mark>[a completar]</mark>, con domicilio en{" "}
          <mark>[a completar]</mark>, es responsable del tratamiento de los datos personales recolectados
          a través de este Sitio. Mientras se completa la constitución formal del proyecto, podés
          contactarnos a{" "}
          <a href="mailto:nicoalvez28@gmail.com">nicoalvez28@gmail.com</a>.
        </p>
      </section>

      <section>
        <h2>Qué información recolectamos</h2>
        <p>
          Solo recolectamos lo que nos das voluntariamente al completar el formulario de
          &quot;Agendar demo&quot;:
        </p>
        <ul>
          <li>Nombre (obligatorio)</li>
          <li>Empresa (obligatorio)</li>
          <li>Email (obligatorio)</li>
          <li>Teléfono (opcional)</li>
          <li>Rol en la empresa (opcional)</li>
          <li>Un mensaje breve sobre tu situación (opcional)</li>
        </ul>
        <p>
          No usamos cookies, píxeles de seguimiento ni analítica de terceros — ver la{" "}
          <a href="/cookies">Política de Cookies</a>. El Sitio no recolecta datos de navegación ni te
          identifica de ninguna otra forma.
        </p>
      </section>

      <section>
        <h2>Para qué la usamos</h2>
        <p>
          Exclusivamente para contactarte y coordinar la demo que solicitaste. No la usamos para armar
          perfiles publicitarios, no la vendemos, y no la compartimos con terceros para que la usen con
          sus propios fines.
        </p>
      </section>

      <section>
        <h2>A quién le llega</h2>
        <p>
          Tu solicitud llega por email al equipo fundador de Finora. Si en el futuro conectamos una
          herramienta de gestión de contactos (CRM) o de mensajería interna (por ejemplo, Slack), esa
          herramienta actuaría como encargada del tratamiento — solo procesaría los datos para nosotros,
          nunca para fines propios.
        </p>
      </section>

      <section>
        <h2>Cuánto tiempo la guardamos</h2>
        <p>
          Mientras sea necesario para responder tu solicitud y, si avanzamos, durante la relación
          comercial. Podés pedirnos que la eliminemos antes en cualquier momento.
        </p>
      </section>

      <section>
        <h2>Tus derechos (Ley N.º 18.331, Uruguay)</h2>
        <p>
          Bajo la Ley de Protección de Datos Personales de Uruguay, tenés derecho a acceder, rectificar,
          actualizar, incluir o eliminar tus datos de nuestras bases (derechos ARCO). Para ejercerlos,
          escribinos a{" "}
          <a href="mailto:nicoalvez28@gmail.com">nicoalvez28@gmail.com</a>. Si no resolvemos tu pedido,
          podés presentar una denuncia ante la{" "}
          <a href="https://www.gub.uy/unidad-reguladora-control-datos-personales/" target="_blank" rel="noopener noreferrer">
            Unidad Reguladora y de Control de Datos Personales (URCDP)
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Cambios a esta política</h2>
        <p>
          Si actualizamos esta política, vamos a cambiar la fecha de arriba. Los cambios importantes los
          vamos a avisar en el Sitio.
        </p>
      </section>
    </LegalPage>
  );
}
