import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de Reembolso — Finora",
  description: "Cómo maneja Finora los pagos y reembolsos.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Política de Reembolso" updated="24 de septiembre de 2026">
      <p>
        <strong>Hoy, finora.com.uy no procesa pagos.</strong> Los precios que se muestran en la sección
        de planes son orientativos: para contratar, agendás una demo y armamos una propuesta comercial a
        medida, que se paga y factura por fuera del Sitio.
      </p>

      <section>
        <h2>¿Cómo se van a manejar los reembolsos?</h2>
        <p>
          Las condiciones de pago, facturación y reembolso de cada plan se van a definir por escrito en
          el acuerdo comercial que firmás con nosotros antes de que se realice cualquier cobro — no acá.
          Si en algún punto pagaste algo y no estás conforme, escribinos primero a{" "}
          <a href="mailto:nicoalvez28@gmail.com">nicoalvez28@gmail.com</a> y lo resolvemos directamente.
        </p>
      </section>

      <section>
        <h2>Cuando el producto esté disponible para pagar online</h2>
        <p>
          Antes de habilitar cualquier forma de pago online, vamos a reemplazar esta página por una
          política de reembolso completa, con plazos y condiciones claras.
        </p>
      </section>
    </LegalPage>
  );
}
