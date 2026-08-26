# CFO.ai — Landing page

Landing page para **CFO.ai**, un CFO con inteligencia artificial que apoya al equipo de
finanzas de PyMEs a anticipar problemas de caja, entender su rentabilidad y tomar mejores
decisiones — sin reemplazar el criterio del contador.

Proyecto de Laboratorio de Proyectos Aplicados — Universidad ORT Uruguay.

## Contenido basado en investigación real

El copy de esta landing (problemas, funcionalidades priorizadas, objeciones, rangos de
precio) sale directamente de la encuesta de validación de idea realizada a 9 empresas
uruguayas de distintos sectores (dueños, gerentes, contadores y responsables
administrativos). Ver `Hallazgos de la encuesta de Validación de Idea` y
`Evidencia de Planes de Validación` del anteproyecto para el detalle completo.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Sin dependencias externas de UI: todo hecho a medida.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Formulario de "Agendar demo"

El formulario del CTA principal envía un `POST` a `/api/demo`
(`src/app/api/demo/route.ts`). Hoy esa ruta:

1. Valida los campos obligatorios (nombre, empresa, email).
2. Loguea la solicitud en el servidor (para no perder ningún lead mientras no haya un
   servicio externo conectado).
3. Si existe la variable de entorno `DEMO_REQUEST_WEBHOOK_URL`, reenvía la solicitud a esa
   URL como POST con el JSON de la solicitud — útil para conectar un webhook de Slack, un
   Google Sheet (via Apps Script), Zapier/Make, o un CRM.

### Para recibir notificaciones reales

La forma más simple es configurar `DEMO_REQUEST_WEBHOOK_URL` en las variables de entorno
del deploy (por ejemplo en Vercel: Project Settings → Environment Variables) apuntando a
un webhook de Slack, Zapier, Make o un Google Apps Script que escriba en una planilla.

Si preferís mandar emails directamente, se puede sumar un proveedor como
[Resend](https://resend.com) dentro de `src/app/api/demo/route.ts`.

## Deploy

Pensado para desplegarse en [Vercel](https://vercel.com) conectando este repositorio.
